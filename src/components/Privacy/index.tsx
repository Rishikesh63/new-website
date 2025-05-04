import { useEffect } from "react";

interface PrivacyPolicyPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyPopup: React.FC<PrivacyPolicyPopupProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;// Prevent rendering when not open

  return (
    <div className="fixed inset-0 z-80 flex items-center justify-center bg-gray-800 bg-opacity-50 p-4">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white p-4 md:p-6 rounded-lg shadow-lg">
        {/* Fixed Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-20 rounded-full bg-gray-200 p-2 text-gray-500 hover:text-gray-800"
          aria-label="Close"
        >
          ×
        </button>

        {/* Scrollable Content */}
        <div className="px-4 py-6 md:px-8 md:py-10 space-y-10 max-w-prose mx-auto text-justify">
          <h2 className="text-3xl font-bold text-indigo-600 md:text-4xl">
            {`Privacy Policy for DevRhylme Foundation`}
          </h2>

          <h3 className="text-xl md:text-2xl font-semibold text-indigo-600 leading-snug mt-8">
            {`Introduction`}
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            {`Welcome to Devrhylme.org ("we," "our," or "us"). Your privacy is of
            paramount importance to us. This Privacy Policy outlines the types
            of information we collect, how we use it, and the steps we take to
            ensure your information remains protected. By using our website and
            services, you agree to the terms outlined in this Privacy Policy.`}
          </p>

          <h3 className="mb-2 mt-6 text-lg font-semibold text-indigo-600">
            {`Scope of the Policy`}
          </h3>
          <p className="text-gray-700">
            {`This Privacy Policy applies to all activities on Devrhylme.org,
            including but not limited to:`}
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>{`User interactions on the website.`}</li>
            <li>{`Data collected through forms, surveys, and subscriptions.`}</li>
            <li>{`Donations and payment processes.`}</li>
            <li>{`Communication via email, phone, or other means.`}</li>
            <li>{`Social media interactions.`}</li>
          </ul>

          <h3 className="mb-2 mt-6 text-lg font-semibold text-indigo-600">
            {`Data Collection`}
          </h3>

          <p className="text-gray-700">
            {`We may collect the following types of information:`}
          </p>
          <h4 className="text-md mt-4 font-semibold text-gray-800">
            {`1. Personal Identifiable Information (PII)`}
          </h4>
          <p className="text-gray-700">
            {`Examples include:`}
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>{`Name`}</li>
            <li>{`Email address`}</li>
            <li>{`Phone number`}</li>
            <li>{`Mailing address`}</li>
            <li>{`Payment details (for donations)`}</li>
            <li>{`Identification documents (if required)`}</li>
          </ul>

          <h4 className="text-md mt-4 font-semibold text-gray-800">
            {`2. Non-Personal Identifiable Information (Non-PII)`}
          </h4>
          <p className="text-gray-700">
            {`Examples include:`}
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>{`Browser type`}</li>
            <li>{`IP address`}</li>
            <li>{`Device type`}</li>
            <li>{`Referring pages and links`}</li>
            <li>{`Session duration and interaction data`}</li>
          </ul>

          <h4 className="text-md mt-4 font-semibold text-gray-800">
            {`3. Sensitive Personal Information`}
          </h4>
          <p className="text-gray-700">
            {`When necessary, we may collect sensitive information such as:`}
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>{`Demographic details (e.g., age, gender, ethnicity)`}</li>
            <li>{`Health-related data (if relevant to specific programs or services)`}</li>
            <li>{`Political opinions or affiliations (if directly relevant to advocacy initiatives)`}</li>
          </ul>

          <h3 className="mb-2 mt-6 text-lg font-semibold text-indigo-600">
            {`Methods of Data Collection`}
          </h3>
          <p className="text-gray-700">
            {`We collect information through:`}
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>{`Registration forms`}</li>
            <li>{`Newsletter subscriptions`}</li>
            <li>{`Event sign-ups`}</li>
            <li>{`Donation portals`}</li>
            <li>{`Cookies and tracking technologies`}</li>
            <li>{`Surveys, polls, and feedback forms`}</li>
          </ul>

          <h3 className="mb-2 mt-6 text-lg font-semibold text-indigo-600">
            {`Purpose of Data Collection`}
          </h3>
          <p className="text-gray-700">
            {`Your data helps us:`}
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>{`Improve user experience.`}</li>
            <li>{`Facilitate donations and manage transactions`}</li>
            <li>{`Communicate about our programs and initiatives.`}</li>
            <li>{`Conduct research and analysis for non-profit objectives.`}</li>
            <li>{`Comply with legal and regulatory obligations.`}</li>
            <li>{`Enhance transparency and accountability in our operations.`}</li>
            <li>{`Tailor our programs to better meet community needs.`}</li>
          </ul>

          <h3 className="mb-2 mt-6 text-lg font-semibold text-indigo-600">
            {`Use of Cookies and Tracking Technologies`}
          </h3>
          <p className="text-gray-700">
            {`We use cookies to:`}
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>{`Enhance site functionality.`}</li>
            <li>{`Remember user preferences.`}</li>
            <li>{`Track site usage and performance.`}</li>
            <li>{`Deliver relevant content and advertisements.`}</li>
          </ul>
          <p className="text-gray-700">
            {`Cookies we use include:`}
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>{`Essential Cookies: Necessary for basic website functionality.`}</li>
            <li>{`Performance Cookies: Help us analyze website performance.`}</li>
            <li>{`Functional Cookies: Remember user settings and preferences.`}</li>
            <li>{`Advertising Cookies: Deliver targeted messaging to users.`}</li>
          </ul>
          <p className="text-gray-700">
            {`You can manage your cookie preferences through your browser settings. Disabling certain cookies may affect the website's functionality.`}
          </p>

          <h3 className="mb-2 mt-6 text-lg font-semibold text-indigo-600">
            {`Data Sharing and Disclosure`}
          </h3>

          <p className="text-gray-700">
            {`We respect your privacy and do not sell or rent your information. However, we may share data:`}
          </p>
          <h4 className="text-md mt-4 font-semibold text-gray-800">
            {`1. With Trusted Third Parties`}
          </h4>
          <p className="text-gray-700">
            {`Examples include:`}
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>{`Payment processors`}</li>
            <li>{`Email marketing services`}</li>
            <li>{`IT support and hosting providers`}</li>
            <li>{`Analytics providers (e.g., Google Analytics)`}</li>
          </ul>

          <h4 className="text-md mt-4 font-semibold text-gray-800">
            {`2. For Legal Compliance`}
          </h4>
          <p className="text-gray-700">
            {`We may disclose your data if required by law or to:`}
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>{`Protect our rights.`}</li>
            <li>{`Prevent fraud.`}</li>
            <li>{`Respond to legal requests.`}</li>
          </ul>

          <h4 className="text-md mt-4 font-semibold text-gray-800">
            {`3. During Organizational Changes`}
          </h4>
          <p className="text-gray-700">
            {`In the event of a merger, acquisition, or restructuring, your data may be transferred to the successor organization.`}
          </p>
          <h4 className="text-md mt-4 font-semibold text-gray-800">
            {`4. With Program Partners`}
          </h4>
          <p className="text-gray-700">
            {`Data may be shared with partners for the delivery of programs and services. Partner organizations are required to uphold our data protection standards.`}
          </p>

          <h3 className="mb-2 mt-6 text-lg font-semibold text-indigo-600">
            {`Data Security`}
          </h3>
          <p className="text-gray-700">
            {`We implement robust security measures, including:`}
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>{`Encryption for sensitive data.`}</li>
            <li>{`Regular security audits.`}</li>
            <li>{`Limited access to personal data.`}</li>
          </ul>
          <p className="text-gray-700">
            {`Despite these measures, no method of transmission over the internet is 100% secure. We encourage users to exercise caution when sharing information online.`}
          </p>

          <h3 className="mb-2 mt-6 text-lg font-semibold text-indigo-600">
            {`Data Retention`}
          </h3>
          <p className="text-gray-700">
            {`We retain your data only as long as necessary for:`}
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>{`The purposes outlined in this policy.`}</li>
            <li>{`Legal and regulatory compliance.`}</li>
            <li>{`Historical and research purposes (in anonymized form).`}</li>
          </ul>
          <p className="text-gray-700">
            {`Specific retention periods may vary depending on the type of data and its intended use.`}
          </p>
          <h3 className="mb-2 mt-6 text-lg font-semibold text-indigo-600">
            {`Your Rights`}
          </h3>

          <p className="text-gray-700">
            {`You have the following rights concerning your data:`}
          </p>
          <h4 className="text-md mt-4 font-semibold text-gray-800">
            {`1. Access and Rectification`}
          </h4>

          <ul className="list-disc pl-5 text-gray-700">
            <li>{`View the data we hold about you.`}</li>
            <li>{`Request corrections to inaccuracies.`}</li>
          </ul>

          <h4 className="text-md mt-4 font-semibold text-gray-800">
            {`2. Data Portability`}
          </h4>

          <ul className="list-disc pl-5 text-gray-700">
            <li>{`Request a copy of your data in a portable format.`}</li>
          </ul>

          <h4 className="text-md mt-4 font-semibold text-gray-800">
            {`3. Deletion`}
          </h4>
          <p className="text-gray-700">
            {`Request the deletion of your data where applicable.`}
          </p>
          <h4 className="text-md mt-4 font-semibold text-gray-800">
            {`4. Objection and Restriction`}
          </h4>
          <ul className="list-disc pl-5 text-gray-700">
            <li>{`Object to specific data processing activities.`}</li>
            <li>{`Request limitations on data usage.`}</li>
          </ul>
          <h4 className="text-md mt-4 font-semibold text-gray-800">
            {`5. Withdrawal of Consent`}
          </h4>
          <ul className="list-disc pl-5 text-gray-700">
            <li>{`Withdraw consent for data processing where consent is the legal basis.`}</li>
          </ul>
          <p className="text-gray-700">
            {`To exercise these rights, contact us at privacy@devrhylme.org.`}
          </p>

          <h3 className="mb-2 mt-6 text-lg font-semibold text-indigo-600">
            {`Third-Party Links`}
          </h3>
          <p className="text-gray-700">
            {`Our website may contain links to external sites. We are not responsible for the privacy practices of these sites. We encourage you to review their policies before providing personal information.`}
          </p>

          <h3 className="mb-2 mt-6 text-lg font-semibold text-indigo-600">
            {`Children’s Privacy`}
          </h3>
          <p className="text-gray-700">
            {`Devrhylme.org is not intended for children under 13. We do not knowingly collect information from children without parental consent. If you believe we have collected such information, please contact us to have it removed.`}
          </p>

          <h3 className="mb-2 mt-6 text-lg font-semibold text-indigo-600">
            {`International Users`}
          </h3>
          <p className="text-gray-700">
            {`If you are accessing our services from outside [Insert Country Name], please note that your data may be transferred, stored, and processed in [Insert Country Name]. By using our services, you consent to this transfer.`}
          </p>

          <h3 className="mb-2 mt-6 text-lg font-semibold text-indigo-600">
            {`Changes to This Policy`}
          </h3>
          <p className="text-gray-700">
            {`We may update this Privacy Policy from time to time. Significant changes will be communicated via email or a prominent notice on our website.`}
          </p>

          <h3 className="mb-2 mt-6 text-lg font-semibold text-indigo-600">
            {`Contact Us`}
          </h3>
          <p className="text-gray-700">
            {`For questions, concerns, or requests related to this Privacy Policy, please contact us:`}
          </p>
          <p className="font-semibold text-gray-700">
            {`Email: `}
            <a href="mailto:privacy@devrhylme.org" className="text-indigo-600">
              {`privacy@devrhylme.org`}
            </a>
          </p>
          <p className="font-semibold text-gray-700">
            {`Address: 3A, Tilak Marg Road, Lucknow, Uttar Pradesh`}
          </p>

          {/* Accept Button */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="rounded-lg bg-indigo-600 px-6 py-2 text-white hover:bg-indigo-700"
            >
              {`Accept & Continue`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPopup;
