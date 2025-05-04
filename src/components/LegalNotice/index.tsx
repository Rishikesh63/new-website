import { useState } from "react";

interface LegalNoticePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const LegalNoticePopup: React.FC<LegalNoticePopupProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null; // Prevent rendering when not open

  return (
    <div className="fixed inset-0 z-80 flex items-center justify-center bg-gray-800 bg-opacity-50 p-4">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white p-4 md:p-6 rounded-lg shadow-lg">
        {/* Fixed Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-20 rounded-full bg-gray-200 p-2 text-gray-500 hover:text-gray-800"
          aria-label="Close"
        >
          {`×`}
        </button>

        {/* Scrollable Content */}
        <div className="px-4 py-6 md:px-8 md:py-10 space-y-10 max-w-prose mx-auto text-justify">
          <h2 className="text-3xl font-bold text-indigo-600 md:text-4xl">
            {`Legal Notice for DevRhylme Foundation`}
          </h2>

          <h3 className="mb-2 text-lg font-semibold text-indigo-600">
            {`Introduction`}
          </h3>
          <p className="text-gray-700">
            {`This Legal Notice governs the use of Devrhylme.org ("the Website"). By accessing or using the Website, you agree to comply with and be bound by the terms and conditions outlined in this Legal Notice, our Privacy Policy, and any other applicable policies. If you do not agree with these terms, please refrain from using the Website.`}
          </p>

          <h3 className="mb-2 mt-6 text-lg font-semibold text-indigo-600">
            {`Ownership and Administration`}
          </h3>
          <p className="text-gray-700">
            {`Website Owner: DevRhylme Foundation`}
            <br />
            {`Legal Status: Registered Non-Profit Organization`}
            <br />
            {`Contact Address: 3A, Tilak Marg Road, Lucknow, Uttar Pradesh`}
            <br />
            {`Email Address: contact@devrhylme.org`}
          </p>
          <p className="text-gray-700">
            {`The Website is owned and operated by Devrhylme.org. All content, including but not limited to text, images, graphics, videos, logos, and software, is the intellectual property of Devrhylme.org unless otherwise explicitly stated. Unauthorized use, reproduction, or distribution of content is strictly prohibited.`}
          </p>

          <h3 className="mb-2 mt-6 text-lg font-semibold text-indigo-600">
            {`Purpose of the Website`}
          </h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>
              {`Share information about our non-profit activities, programs, and initiatives.`}
            </li>
            <li>
              {`Facilitate communication with members, donors, volunteers, and other stakeholders.`}
            </li>
            <li>
              {`Support fundraising efforts through donations and partnerships.`}
            </li>
            <li>
              {`Promote collaboration, volunteer opportunities, and community engagement.`}
            </li>
          </ul>

          <h3 className="mb-2 mt-6 text-lg font-semibold text-indigo-600">
            {`Terms of Use`}
          </h3>
          <h4 className="text-md font-semibold text-gray-800">
            {`1. General Obligations`}
          </h4>
          <ul className="list-disc pl-5 text-gray-700">
            <li>
              {`Users agree to use the Website in compliance with all applicable laws and regulations.`}
            </li>
            <li>
              {`Users agree to respect the rights and privacy of other users.`}
            </li>
            <li>
              {`Users must avoid any actions that may disrupt or harm the Website or its functionality.`}
            </li>
          </ul>

          <h4 className="text-md font-semibold text-gray-800">
            {`2. Prohibited Activities`}
          </h4>
          <ul className="list-disc pl-5 text-gray-700">
            <li>
              {`Distributing or modifying Website content without prior written permission.`}
            </li>
            <li>
              {`Engaging in fraudulent, defamatory, or offensive activities.`}
            </li>
            <li>
              {`Attempting to hack, exploit, or compromise the Website's security systems.`}
            </li>
            <li>
              {`Using automated systems such as bots to access the Website without authorization.`}
            </li>
          </ul>

          <h4 className="text-md font-semibold text-gray-800">
            {`3. User Accounts`}
          </h4>
          <ul className="list-disc pl-5 text-gray-700">
            <li>
              {`Users are responsible for maintaining the confidentiality of their login credentials.`}
            </li>
            <li>
              {`Users agree to notify us immediately of any unauthorized access or suspected breaches.`}
            </li>
            <li>
              {`Misuse of accounts, including impersonation or sharing credentials, may result in account suspension or termination.`}
            </li>
          </ul>

          <h3 className="mb-2 mt-6 text-lg font-semibold text-indigo-600">
            {`Data Collection and Privacy`}
          </h3>
          <p className="text-gray-700">
            {`Devrhylme.org adheres to a strict privacy policy to protect user data. Any personal information collected is used solely for the purposes outlined in our Privacy Policy. We do not sell or share personal information with third parties without explicit consent. For detailed information, please refer to our Privacy Policy.`}
          </p>

          <h3 className="mb-2 mt-6 text-lg font-semibold text-indigo-600">
            {`Intellectual Property Rights`}
          </h3>
          <p className="text-gray-700">
            {`All intellectual property rights related to the Website and its content are owned by or licensed to Devrhylme.org. This includes:`}
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>
              {`Trademarks: Devrhylme.org and its logos are registered trademarks.`}
            </li>
            <li>
              {`Copyrights: All original content, including text, graphics, and videos.`}
            </li>
            <li>
              {`Licenses: Any third-party materials used are licensed appropriately, with due credit.`}
            </li>
          </ul>
          <p className="text-gray-700">
            {`Unauthorized use, reproduction, or distribution of these materials is a violation of intellectual property laws.`}
          </p>

          <h3 className="mb-2 mt-6 text-lg font-semibold text-indigo-600">
            {`Disclaimer of Warranties`}
          </h3>
          <p className="text-gray-700">
            {`The Website is provided "as is" and "as available." Devrhylme.org makes no guarantees regarding:`}
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>{`The accuracy, completeness, or reliability of the content.`}</li>
            <li>{`The uninterrupted availability or security of the Website.`}</li>
            <li>{`The fitness of the Website for any particular purpose.`}</li>
          </ul>
          <p className="text-gray-700">
            {`Users access and use the Website at their own risk.`}
          </p>

          <h3 className="mb-2 mt-6 text-lg font-semibold text-indigo-600">
            {`Limitation of Liability`}
          </h3>
          <p className="text-gray-700">
            {`Devrhylme.org is not liable for:`}
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>
              {`Any direct, indirect, incidental, or consequential damages arising from the use or inability to use the Website.`}
            </li>
            <li>
              {`Loss of data, profits, or goodwill resulting from technical issues or unauthorized access.`}
            </li>
            <li>
              {`External links or third-party content that may be accessed via the Website.`}
            </li>
          </ul>

          <h3 className="mb-2 mt-6 text-lg font-semibold text-indigo-600">
            {`Third-Party Links and Services`}
          </h3>
          <p className="text-gray-700">
            {`The Website may include links to third-party websites or services for user convenience. Devrhylme.org:`}
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>
              {`Does not endorse or assume responsibility for the content or practices of these third parties.`}
            </li>
            <li>
              {`Encourages users to review the privacy policies and terms of use of third-party sites.`}
            </li>
          </ul>

          <h3 className="mb-2 mt-6 text-lg font-semibold text-indigo-600">
            {`Modifications to the Legal Notice`}
          </h3>
          <p className="text-gray-700">
            {`Devrhylme.org reserves the right to update or amend this Legal Notice at any time. Changes will be communicated via a notice on the Website or through other appropriate channels. Continued use of the Website after changes are posted constitutes acceptance of the revised terms.`}
          </p>

          <h3 className="mb-2 mt-6 text-lg font-semibold text-indigo-600">
            {`Governing Law and Jurisdiction`}
          </h3>
          <p className="text-gray-700">
            {`This Legal Notice is governed by the laws of [Insert Jurisdiction]. Any disputes arising from the use of the Website will be subject to the exclusive jurisdiction of the courts in [Insert Jurisdiction].`}
          </p>

          <h3 className="mb-2 mt-6 text-lg font-semibold text-indigo-600">
            {`Reporting Violations and Concerns`}
          </h3>
          <p className="text-gray-700">
            {`Users are encouraged to report any violations of these terms or concerns regarding the Website by contacting:`}
          </p>
          <p className="font-semibold text-gray-700">
            {`Email: `}
            <a href="mailto:legal@devrhylme.org" className="text-indigo-600">
              {`legal@devrhylme.org`}
            </a>
          </p>
          <p className="font-semibold text-gray-700">
            {`Mailing Address: admin@devrhylme.org`}
          </p>

          <h3 className="mb-2 mt-6 text-lg font-semibold text-indigo-600">
            {`Contact Information`}
          </h3>
          <p className="text-gray-700">
            {`For further assistance or inquiries about this Legal Notice, please reach out to:`}
          </p>
          <p className="font-semibold text-gray-700">
            {`Email: `}
            <a href="mailto:contact@devrhylme.org" className="text-indigo-600">
              {`contact@devrhylme.org`}
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

export default LegalNoticePopup;
