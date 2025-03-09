import React from "react";
import "./styles.css";

const TermsOfService = () => {
  return (
    <>
      <div className="page">
        <div className="header">
          <div className="container">
            <p className="title">Terms of Service for SwimFast</p>
          </div>
        </div>

        <div className="translations-content-container">
          <div className="container">
            <div
              className="tab-content translations-content-item en visible"
              id="en"
            >
              <h1>Terms of Service</h1>
              <p>Last updated: March 6, 2025</p>

              <h2>1. Acceptance of Terms</h2>
              <p>
                By creating an account and using SwimFast, you acknowledge that
                you have read, understood, and agreed to be bound by these
                Terms.
              </p>

              <h2>2. Account Registration</h2>
              <p>
                To use SwimFast, you must create an account using one of the
                following authentication methods:
              </p>
              <ul>
                <li>Google Sign-In</li>
                <li>Apple Sign-In</li>
                <li>Email/Password Authentication</li>
              </ul>
              <p>
                If registering via email and password, you must verify your
                email address by entering a verification code sent to your
                email. You are responsible for maintaining the confidentiality
                of your login credentials and for all activities that occur
                under your account.
              </p>

              <h2>3. Prohibited Activities</h2>
              <p>By using SwimFast, you agree not to:</p>
              <ul>
                <li>
                  Engage in any activity that violates applicable laws and
                  regulations.
                </li>
                <li>
                  Attempt to reverse engineer, decompile, or otherwise interfere
                  with the functionality of the App.
                </li>
                <li>Misuse or attempt to bypass authentication mechanisms.</li>
                <li>
                  Impersonate another person or provide false information.
                </li>
              </ul>

              <h2>4. Data Collection and Privacy</h2>
              <p>
                Your use of SwimFast is also governed by our{" "}
                <a href="/privacy-policy">Privacy Policy</a>.
              </p>
              <p>
                We collect and store user authentication data for the purpose of
                account management. We do not share your authentication data
                with third parties except as required by law.
              </p>

              <h2>5. Account Termination</h2>
              <p>
                We reserve the right to suspend or terminate your account if you
                violate these Terms. You may delete your account at any time
                through the app settings.
              </p>

              <h2>6. Disclaimers and Limitation of Liability</h2>
              <p>
                SwimFast is provided on an &quot;as-is&quot; and &quot;as
                available&quot; basis without warranties of any kind. We are not
                responsible for any losses or damages arising from the use or
                inability to use the App.
              </p>

              <h2>7. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. Any changes will be
                effective immediately upon posting. Continued use of SwimFast
                after updates constitutes acceptance of the new Terms.
              </p>

              <h2>8. Governing Law and Jurisdiction</h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the State of Texas, United States, without
                regard to its conflict of law principles. Any disputes arising
                under or in connection with these Terms shall be resolved
                exclusively in the courts of [Jurisdiction].
              </p>

              <h2>9. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us
                at <a href="mailto:tos@alexs.software">tos@alexs.software</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
