"use client"

export default function TermsOfService() {
    const date = new Date().toLocaleDateString();
    const appName = "ThoughtfulX"
    const mainFeaturesAndFunctionalities = "a platform to help you be more thoughtful and productive when using the X platform"
    const linkToPrivacyPolicy = "https://thoughtfulx.vercel.app/legal/privacy"
    const countryState = "Florida, United States of America"
  return (
    <main>
      <h1>Terms of Service</h1>
      <p>Last updated: {date}</p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing and using {appName} ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this Service, you shall be subject to any posted guidelines or rules applicable to such services, which may be posted and modified from time to time. All such guidelines or rules are hereby incorporated by reference into the Terms of Service (TOS).
      </p>

      <h2>2. Description of Service</h2>
      <p>
        {appName} provides users with access to {mainFeaturesAndFunctionalities}. You understand and agree that the Service may include advertisements, and that these advertisements are necessary for {appName} to provide the Service. You also understand and agree that the service may include certain communications from {appName}, such as service announcements, administrative messages, and updates.
      </p>

      <h2>3. User Responsibilities</h2>
      <p>
        You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password. You agree to notify {appName} immediately of any unauthorized use of your account or any other breach of security.
      </p>

      <h2>4. Privacy Policy</h2>
      <p>
        Registration data and certain other information about you are subject to our Privacy Policy. For more information, see our full privacy policy at {linkToPrivacyPolicy}.
      </p>

      <h2>5. Modifications to Service</h2>
      <p>
        {appName} reserves the right to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice at any time. You agree that {appName} shall not be liable to you or to any third party for any modification, suspension, or discontinuance of the Service.
      </p>

      <h2>6. Termination</h2>
      <p>
        You agree that {appName}, in its sole discretion, may terminate your password, account (or any part thereof) or use of the Service, and remove and discard any content within the Service, for any reason, including, without limitation, for lack of use or if {appName} believes that you have violated or acted inconsistently with the letter or spirit of the TOS. {appName} may also, in its sole discretion and at any time, discontinue providing the Service, or any part thereof, with or without notice.
      </p>

      <h2>7. Disclaimer of Warranties</h2>
      <p>
        You expressly understand and agree that:
        <ul>
          <li>Your use of the Service is at your sole risk. The Service is provided on an "as is" and "as available" basis. {appName} and its affiliates expressly disclaim all warranties of any kind, whether express or implied.</li>
          <li>{appName} makes no warranty that (i) the service will meet your requirements, (ii) the service will be uninterrupted, timely, secure, or error-free, (iii) the results that may be obtained from the use of the service will be accurate or reliable, (iv) the quality of any products, services, information, or other material purchased or obtained by you through the service will meet your expectations, and (v) any errors in the software will be corrected.</li>
        </ul>
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        You expressly understand and agree that {appName} shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses (even if {appName} has been advised of the possibility of such damages), resulting from: (i) the use or the inability to use the service; (ii) the cost of procurement of substitute goods and services resulting from any goods, data, information, or services purchased or obtained or messages received or transactions entered into through or from the service; (iii) unauthorized access to or alteration of your transmissions or data; (iv) statements or conduct of any third party on the service; or (v) any other matter relating to the service.
      </p>

      <h2>9. Governing Law</h2>
      <p>
        These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of {countryState}.
      </p>

      <h2>10. Contact Information</h2>
      <p>
        If you have any questions about these Terms, please contact us..
      </p>
    </main>
  );
}
