import React from 'react';
import { LabApp } from '../../lab/LabApp';

export const LabSection: React.FC = () => {
  return (
    <section className="section-lab" id="lab" aria-label="4JAVA4 Cyber Lab">
      <div className="container">
        <LabApp />
      </div>
    </section>
  );
};
