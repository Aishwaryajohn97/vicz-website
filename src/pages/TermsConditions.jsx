import React from 'react';

const TermsConditions = () => (
  <section className="min-h-screen bg-white text-dark px-4 py-20">
    <div className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold">Terms & Conditions</h2>
      <p>
        By using VICZ Ltd’s site and services, you agree to comply with these terms.
        We reserve the right to modify them at any time. Continued use implies acceptance.
      </p>
      <p>
        All content is owned by VICZ Ltd unless stated otherwise. You may not reproduce
        materials without permission.
      </p>
      <p>
        For clarifications, contact{' '}
        <a href="mailto:info@viczltd.com" className="text-accent underline">
          info@viczltd.com
        </a>.
      </p>
    </div>
  </section>
);

export default TermsConditions;


