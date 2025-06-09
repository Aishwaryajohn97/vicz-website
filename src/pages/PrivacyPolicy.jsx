import React from 'react';

const PrivacyPolicy = () => (
  <section className="min-h-screen bg-white text-dark px-4 py-20">
    <div className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold">Privacy Policy</h2>
      <p>
        VICZ Ltd is committed to protecting your privacy. We only collect necessary
        information (e.g., name, email) to provide our services and never share it
        without consent.
      </p>
      <p>
        We may use cookies and analytics tools to understand site usage, but your
        data remains confidential. You can request deletion anytime.
      </p>
      <p>
        For questions, email us at{' '}
        <a href="mailto:privacy@viczltd.com" className="text-accent underline">
          privacy@viczltd.com
        </a>.
      </p>
    </div>
  </section>
);

export default PrivacyPolicy;


