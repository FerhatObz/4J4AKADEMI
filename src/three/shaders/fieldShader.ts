/**
 * 4JAVA4 AKADEMİ — INTERACTIVE PROCEDURAL DIGITAL FIELD SHADER
 * Dynamic simplex wave displacement, mouse proximity green elevation waves, and grid luminescence.
 */

export const FieldVertexShader = /* glsl */ `
  uniform float uTime;
  uniform vec2 uPointer;
  uniform float uScroll;
  
  varying vec2 vUv;
  varying float vElevation;
  varying vec3 vNormal;

  // 2D Simplex Noise generator
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
      dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vUv = uv;
    vNormal = normal;

    vec3 pos = position;
    
    // Dynamic organic wave movement
    float wave1 = snoise(uv * 3.2 + vec2(uTime * 0.12, uTime * 0.08));
    float wave2 = snoise(uv * 6.0 - vec2(uTime * 0.06, uTime * 0.1));
    float combinedNoise = wave1 * 0.22 + wave2 * 0.08;
    
    // Dynamic Mouse Interaction: Proximity wave ripple
    vec2 pointerUv = uPointer * 0.5 + 0.5;
    float distToPointer = length(uv - pointerUv);
    float mouseRipple = smoothstep(0.45, 0.0, distToPointer) * (sin(distToPointer * 24.0 - uTime * 3.0) * 0.08 + 0.22);

    // Total Elevation
    float elevation = (combinedNoise + mouseRipple) * (1.0 - uScroll * 0.7);
    pos.z += elevation;
    vElevation = elevation;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

export const FieldFragmentShader = /* glsl */ `
  uniform float uTime;
  uniform vec3 uColorBg;
  uniform vec3 uColorLine;
  uniform vec3 uColorAccent;
  uniform vec2 uPointer;
  uniform float uScroll;

  varying vec2 vUv;
  varying float vElevation;

  void main() {
    // Sharp architectural grid coordinate pattern
    vec2 grid = abs(fract(vUv * 36.0 - 0.5) - 0.5) / fwidth(vUv * 36.0);
    float line = min(grid.x, grid.y);
    float gridFactor = 1.0 - min(line, 1.0);

    // Diagonal technical accents
    float diag = abs(fract((vUv.x + vUv.y) * 14.0 - 0.5) - 0.5) / fwidth((vUv.x + vUv.y) * 14.0);
    float diagFactor = (1.0 - min(diag, 1.0)) * 0.18;

    // Vignette / Radial edge falloff to blend cleanly into dark background
    float distFromCenter = length(vUv - vec2(0.5));
    float vignette = smoothstep(0.78, 0.18, distFromCenter);

    // Base dark background and subtle grid line color
    vec3 color = uColorBg;
    color = mix(color, uColorLine, (gridFactor * 0.45 + diagFactor) * vignette);
    
    // Dynamic Green Wave Luminescence: lights up on elevation peaks & mouse proximity
    vec2 pointerUv = uPointer * 0.5 + 0.5;
    float mouseProximity = smoothstep(0.5, 0.0, length(vUv - pointerUv));
    
    float waveAccent = smoothstep(0.04, 0.26, vElevation) * 0.75 * vignette;
    float mouseGlow = mouseProximity * 0.45 * vignette;
    
    float totalLimeFactor = max(waveAccent, mouseGlow);
    color = mix(color, uColorAccent, totalLimeFactor);

    // Alpha blending
    float alpha = (0.75 * vignette + totalLimeFactor * 0.6) * (1.0 - uScroll * 0.85);

    gl_FragColor = vec4(color, alpha);
  }
`;
