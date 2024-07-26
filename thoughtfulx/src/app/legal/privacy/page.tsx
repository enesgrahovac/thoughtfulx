"use client"

export default function PrivacyPolicy() {
    const date = new Date().toLocaleDateString();
    const appName = "ThoughtfulX"
    const contactInformation = "support@thoughtfulx.app"
  
  return (
    <main>
      <h1>Privacy Policy</h1>
      <p>Last updated: {date}</p>

      <h2>1. Introduction</h2>
      <p>
        Welcome to {appName}. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at {contactInformation}.
      </p>

      <h2>2. Information We Collect</h2>
      <p>
        We collect personal information that you voluntarily provide to us when registering at the Service, expressing an interest in obtaining information about us or our products and services, when participating in activities on the Service or otherwise contacting us.
      </p>
      <p>
        The personal information that we collect depends on the context of your interactions with us and the Service, the choices you make, and the products and features you use. The personal information we collect may include the following:
        <ul>
          <li>Name and Contact Data: We collect your first and last name, email address, postal address, phone number, and other similar contact data.</li>
          <li>Credentials: We collect passwords, password hints, and similar security information used for authentication and account access.</li>
        </ul>
      </p>

      <h2>3. How We Use Your Information</h2>
      <p>
        We use personal information collected via our Service for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
        <ul>
          <li>To facilitate account creation and logon process.</li>
          <li>To send you marketing and promotional communications.</li>
          <li>To send administrative information to you.</li>
          <li>Fulfill and manage your orders.</li>
          <li>To post testimonials.</li>
          <li>Request Feedback.</li>
          <li>To protect our Services.</li>
          <li>To enforce our terms, conditions and policies for business purposes, to comply with legal and regulatory requirements or in connection with our contract.</li>
        </ul>
      </p>

      <h2>4. Sharing Your Information</h2>
      <p>
        We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
        <ul>
          <li>Business Transfers: We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
          <li>Third-Party Advertisers: We may use third-party advertising companies to serve ads when you visit the Services.</li>
        </ul>
      </p>

      <h2>5. Cookies and Tracking Technologies</h2>
      <p>
        We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
      </p>

      <h2>6. Data Retention</h2>
      <p>
        We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
      </p>

      <h2>7. Data Security</h2>
      <p>
        We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
      </p>

      <h2>8. Your Privacy Rights</h2>
      <p>
        In some regions (like the EEA and UK), you have rights that allow you greater access to and control over your personal information. These rights may include the right to request access and obtain a copy of your personal information, to request rectification or erasure; to restrict the processing of your personal information; and if applicable, to data portability.
      </p>

      <h2>9. Changes to This Privacy Policy</h2>
      <p>
        We may update this privacy notice from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new privacy policy on this page.
      </p>

      <h2>10. Contact Us</h2>
      <p>
        If you have questions or comments about this policy, you may email us at {contactInformation}.
      </p>
    </main>
  );
}
