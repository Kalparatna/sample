import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Legal = () => {
  const handleAccept = () => {
    localStorage.setItem("copmap_legal_accepted", "true");
    toast.success("Thank you for accepting our Terms, Privacy Policy, and Security Guidelines. You're all set to continue using CopMap.", {
      position: 'top-right',
      duration: 4000,
      style: {
        background: '#00A0C4',
        color: '#fff',
        borderRadius: '8px',
        padding: '12px 16px',
        fontSize: '0.875rem'
      },
      iconTheme: {
        primary: '#ffffff',
        secondary: '#00A0C4',
      }
    });
  };
  
  return (
    <div className="bg-white text-gray-800 px-6 py-12 max-w-5xl mx-auto leading-relaxed">
      <Toaster />

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Terms & Conditions</h2>
        <p className="mb-4 font-semibold">Effective Date: 01-01-2025</p>
        <p className="mb-4">
          Attention: By accessing or using CopMap—developed and operated by EyeQlytics Tech Pvt. Ltd. ("we," "us," "our") on behalf of authorized government law enforcement agencies—you agree to be bound by these Terms & Conditions ("Terms"). Any unauthorized access is strictly prohibited.
        </p>

        {/* Sections */}
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg">1. Eligibility & Access</h3>
            <p>Only duly authorized law enforcement officers, agency personnel, prosecutors, or judges may access and use CopMap in their official capacity. You affirm that you meet these eligibility requirements and will use the Platform only within the bounds of your professional authority.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">2. License Grant</h3>
            <p>We grant you a non-exclusive, non-transferable, revocable license to use CopMap strictly for official law enforcement functions; the software and its intellectual property remain our exclusive property. Any use beyond lawful duties—such as personal use or external dissemination—is expressly forbidden.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">3. User Credentials & Security</h3>
            <p>You are responsible for the confidentiality of your login credentials. Incident reporting (e.g. if credentials are compromised) is mandatory. You must not share or transfer credentials; misuse resulting from shared access remains your responsibility.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">4. Compliance & Auditing</h3>
            <p>We reserve the right to audit license usage to ensure compliance with purchased entitlements or government-issued licenses. You agree to cooperate, including installing any necessary compliance-checking tools. Overuse beyond licensed capacity may incur additional license fees or require termination of excess access.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">5. Acceptable Use / Prohibited Conduct</h3>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Unauthorized data sharing or misuse of sensitive information</li>
              <li>Attempting unauthorized system access or bypassing security</li>
              <li>Employing bots, scripts, or reverse engineering</li>
              <li>Uploading malicious code or engaging in harassment or discrimination</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">6. Data Collection & Confidentiality</h3>
            <p>CopMap may collect sensitive personal data and location-based or intelligence-generated data relevant to law enforcement operations. All classified, investigative, or personally identifiable information (PII) must remain confidential and is protected with robust safeguards and access controls.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">7. Intellectual Property & Feedback</h3>
            <p>All software, documentation, data, code, logos, and trademarks remain our exclusive property. You retain no ownership rights; your use is purely licensed. We may incorporate user feedback without obligation or compensation.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">8. Warranty Disclaimer & Liability Limitation</h3>
            <p>The platform is provided "as-is." We disclaim all warranties—legal, implied, or statutory—and limit liability to direct losses only, not for indirect, incidental, or consequential damages.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">9. Term & Termination</h3>
            <p>We may suspend or terminate access for violations of these Terms, non-payment, security breaches, or agency requests. License duration is defined in the agency's written agreement.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">10. Modifications & Maintenance</h3>
            <p>Features, policies, or downtime may be updated or modified with notice. Security updates may be mandatory.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">11. Export & Government Regulations</h3>
            <p>Use of the software must comply with Indian export controls and government regulations.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">12. Governing Law & Dispute Resolution</h3>
            <p>These Terms are governed by Indian laws. Legal disputes will be resolved in the courts of Chhtrapati Sambhaji Nagar (Aurangabad), Maharashtra.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">13. Acceptance & Enforceability</h3>
            <p>Your use of CopMap constitutes click-wrap acceptance of these Terms and is enforceable under Indian law.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">14. Contact & Support</h3>
            <p>
              EyeQlytics Tech Pvt. Ltd.<br />
              📍 Chhtrapati Sambhaji Nagar, Maharashtra, India<br />
              📧 admin@copmap.in<br />
              ☏ +91‑9970283329
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
        <p className="mb-4 font-semibold">Effective Date: 01-01-2025</p>
        <p className="mb-4">
          CopMap ("we", "us", "our") is a secure mapping and intelligence platform developed by EyeQlytics Tech Pvt Ltd for use by authorized law enforcement agencies. This Privacy Policy explains how we collect, use, disclose, and protect personal and sensitive data in compliance with applicable laws and privacy best practices.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg">1. Controller & Contact Information</h3>
            <p>
              EyeQlytics Tech Pvt Ltd is the data controller.<br />
              📧 support@eyeqlytics.in | ☏ +91‑9970283329<br />
              📍 Registered Office: Chhatrapati Sambhaji Nagar, Maharashtra, India
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">2. Information We Collect</h3>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li><strong>Personal Data:</strong> Name, rank, badge ID, agency, contact details, usage logs, feedback</li>
              <li><strong>Operational Data:</strong> GPS during deployment, incident reports, evidence metadata</li>
              <li><strong>Technical Data:</strong> IP address, browser, system logs</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">3. Collection Methods</h3>
            <p>We collect data through direct user input, secure agency integrations, and automated system tracking (cookies, logs).</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">4. Use & Legal Basis</h3>
            <p>We use data for coordination, auditing, analytics, and legal compliance. This is based on legitimate public task and security obligations.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">5. Disclosure of Data</h3>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li><strong>Internal:</strong> Only for official purposes and investigations</li>
              <li><strong>External:</strong> Only under statutory duty or with valid legal requests</li>
              <li>No third-party selling or marketing</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">6. Cookies & Analytics</h3>
            <p>We use session cookies and usage analytics with no advertising or third-party tracking. Admins can customize tracking policies.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">7. Data Storage & Retention</h3>
            <p>Data is retained only for legally permitted durations. It is securely deleted or anonymized after expiry per law or agency policy.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">8. Security Measures</h3>
            <p>We implement TLS/AES encryption, role-based access, audits, and periodic privacy impact assessments (PIAs).</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">9. User Rights</h3>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Access, correct, delete your data</li>
              <li>Object or restrict processing</li>
              <li>Data portability (where applicable)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">10. Data Residency</h3>
            <p>All data is stored and processed in India using compliant cloud infrastructure. No foreign transfers occur without safeguards.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">11. Children's Data</h3>
            <p>CopMap is not intended for children. We do not knowingly collect data from minors.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">12. Policy Updates</h3>
            <p>We post changes on the platform with an updated effective date. Continued use signifies acceptance.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">13. Contact for Privacy</h3>
            <p>📧 admin@copmap.in | ☏ +91‑9970283329<br /> EyeQlytics Tech Pvt Ltd</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Security Policy</h2>
        <p className="mb-4 font-semibold">Effective Date: 01-01-2025</p>
        <p>
          This policy defines the security architecture, infrastructure controls, and data protection practices for CopMap, developed by EyeQlytics Tech Pvt. Ltd. It ensures operational and infrastructure security across law enforcement workflows.
        </p>

        <div className="space-y-6 mt-6">
          <div>
            <h3 className="font-semibold text-lg">1. Purpose & Scope</h3>
            <p>Applies to all users, infrastructure, APIs, and services under CopMap across web/mobile and internal tools.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">2. Core Security Principles</h3>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>No public service exposure</li>
              <li>End-to-end encryption</li>
              <li>Zero-trust and role-based access control</li>
              <li>Compliance with CERT-In and Government of India guidelines</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">3. Infrastructure & Hosting</h3>
            <p>Hosted privately on GCP & Azure inside VPCs, with private subnets, firewall rules, and IAM roles for all services.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">4. Data Protection</h3>
            <p>CopMap stores only required officer credentials and operational data. No third-party access or analytics is allowed.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">5. Authentication & Access Control</h3>
            <p>Secure login via encrypted credentials, optional MFA for admins, and strict RBAC ensures jurisdiction-level access only.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">6. API Gateway & Traffic Security</h3>
            <p>All external requests go through a secured API Gateway with token validation, throttling, and protocol enforcement.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">7. Monitoring & Audit</h3>
            <p>All usage is logged and monitored. Anomalies are detected in real-time and stored for forensic and compliance audits.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">8. Backup & Recovery</h3>
            <p>Daily encrypted backups, disaster recovery drills, and region-based replication ensure availability and durability.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">9. DevSecOps & Code Security</h3>
            <p>Code is scanned for OWASP vulnerabilities, deployed via secure CI/CD, and sandboxed in isolated containers.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">10. Incident Response</h3>
            <p>CopMap follows a structured IR policy: real-time alerting, isolation, internal notifications, RCA, and documentation.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">11. Third-Party Access</h3>
            <p>No external systems access data. Ministry-level analytics or audits happen only via pre-approved secure gateways.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">12. Legal & Compliance Alignment</h3>
            <ul className="list-disc list-inside pl-4">
              <li>CERT-In Cyber Security Guidelines</li>
              <li>DPDP Act, 2023</li>
              <li>IT Act, 2000</li>
              <li>Ministry of Home Affairs digital law enforcement protocols</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">13. User Responsibility</h3>
            <p>Users must keep credentials secure, use CopMap for official purposes, and report unusual activity to security teams.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">14. Updates & Review</h3>
            <p>Policy is reviewed quarterly. Updates are made based on evolving threats, infrastructure improvements, and regulatory needs.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">15. Contact</h3>
            <p>
              📧 admin@copmap.im<br />
              Security & Compliance Team, EyeQlytics Tech Pvt. Ltd.
            </p>
          </div>
        </div>
      </section>

      {/* Accept Button in Bottom-Right */}
      <div>
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={handleAccept}
            className="bg-[#00A0C4] hover:bg-[#0088a9] text-white text-sm font-medium py-2 px-4 rounded-lg shadow-md transition-all"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default Legal;