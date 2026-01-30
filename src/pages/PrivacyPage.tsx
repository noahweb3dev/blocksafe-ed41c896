import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Lock, Eye, Database, Globe, Users, FileText, AlertCircle, Settings, Mail } from "lucide-react";

const PrivacyPage = () => {
  const lastUpdated = "January 15, 2026";

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
          <Lock className="h-4 w-4 text-primary" />
          <span className="text-sm text-primary font-medium">Legal Document</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">Privacy</span>{" "}
          <span className="text-foreground">Policy</span>
        </h1>
        <p className="text-muted-foreground">
          Last Updated: {lastUpdated}
        </p>
      </div>

      <Card className="bg-card/50 border-border backdrop-blur-sm max-w-4xl mx-auto">
        <CardContent className="pt-8 prose prose-invert max-w-none">
          {/* Table of Contents */}
          <div className="bg-secondary/30 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Table of Contents
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground text-sm">
              <li><a href="#introduction" className="hover:text-primary transition-colors">Introduction and Overview</a></li>
              <li><a href="#definitions" className="hover:text-primary transition-colors">Definitions and Interpretation</a></li>
              <li><a href="#information-collection" className="hover:text-primary transition-colors">Information We Collect</a></li>
              <li><a href="#use-of-information" className="hover:text-primary transition-colors">How We Use Your Information</a></li>
              <li><a href="#legal-basis" className="hover:text-primary transition-colors">Legal Basis for Processing</a></li>
              <li><a href="#data-sharing" className="hover:text-primary transition-colors">Data Sharing and Disclosure</a></li>
              <li><a href="#international-transfers" className="hover:text-primary transition-colors">International Data Transfers</a></li>
              <li><a href="#data-retention" className="hover:text-primary transition-colors">Data Retention Policies</a></li>
              <li><a href="#security" className="hover:text-primary transition-colors">Security Measures</a></li>
              <li><a href="#your-rights" className="hover:text-primary transition-colors">Your Rights and Choices</a></li>
              <li><a href="#cookies" className="hover:text-primary transition-colors">Cookies and Tracking Technologies</a></li>
              <li><a href="#children" className="hover:text-primary transition-colors">Children's Privacy</a></li>
              <li><a href="#changes" className="hover:text-primary transition-colors">Changes to This Policy</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact Information</a></li>
            </ol>
          </div>

          {/* Section 1 */}
          <section id="introduction" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              1. Introduction and Overview
            </h2>
            <p className="text-muted-foreground mb-4">
              Blocksafespace ("Company," "we," "us," or "our") is committed to protecting and respecting your privacy. This Privacy Policy ("Policy") explains how we collect, use, disclose, and safeguard your information when you visit our website located at blocksafespace.com, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Platform"), and use our services, features, or content (collectively, the "Services").
            </p>
            <p className="text-muted-foreground mb-4">
              This Privacy Policy applies to all information collected through our Platform and Services, as well as any related services, sales, marketing, or events. By accessing or using our Platform or Services, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please discontinue access and use of our Platform and Services immediately.
            </p>
            <p className="text-muted-foreground mb-4">
              We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy. Any changes or modifications will be effective immediately upon posting the updated Privacy Policy on the Platform. You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Platform and Services after the date such revised Privacy Policy is posted.
            </p>
            <p className="text-muted-foreground">
              The information we collect and the purposes for which we use it will depend on how you interact with us. This Privacy Policy describes the information that we gather from you, how we use and disclose your information, and the steps we take to protect your information. By using our Platform or Services, you consent to the privacy practices described in this Policy.
            </p>
          </section>

          <Separator className="my-8" />

          {/* Section 2 */}
          <section id="definitions" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              2. Definitions and Interpretation
            </h2>
            <p className="text-muted-foreground mb-4">
              For the purposes of this Privacy Policy, the following definitions shall apply unless otherwise stated or the context clearly indicates otherwise:
            </p>
            <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-4">
              <li><strong className="text-foreground">"Personal Data"</strong> means any information relating to an identified or identifiable natural person ("Data Subject"); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person.</li>
              <li><strong className="text-foreground">"Processing"</strong> means any operation or set of operations which is performed on Personal Data or on sets of Personal Data, whether or not by automated means, such as collection, recording, organization, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction.</li>
              <li><strong className="text-foreground">"Data Controller"</strong> means the natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of Personal Data.</li>
              <li><strong className="text-foreground">"Data Processor"</strong> means a natural or legal person, public authority, agency or other body which processes Personal Data on behalf of the Data Controller.</li>
              <li><strong className="text-foreground">"Cookies"</strong> means small files placed on your computer, mobile device, or any other device by a website, containing details of your browsing history on that website among its many uses.</li>
              <li><strong className="text-foreground">"Service Providers"</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service, or to assist the Company in analyzing how the Service is used.</li>
              <li><strong className="text-foreground">"Usage Data"</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit, pages visited, browser type, IP address, and other diagnostic data).</li>
              <li><strong className="text-foreground">"Blockchain Data"</strong> refers to publicly available information stored on blockchain networks, including but not limited to wallet addresses, transaction histories, smart contract interactions, and token holdings.</li>
            </ul>
            <p className="text-muted-foreground">
              The words of which the initial letter is capitalized have meanings defined under the above conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural. These definitions are provided for convenience only and do not limit, expand, or otherwise affect the meaning or interpretation of this Privacy Policy or any of its provisions.
            </p>
          </section>

          <Separator className="my-8" />

          {/* Section 3 */}
          <section id="information-collection" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Database className="h-6 w-6 text-primary" />
              3. Information We Collect
            </h2>
            <p className="text-muted-foreground mb-4">
              We collect information in various ways depending on how you interact with our Platform and Services. The categories of information we collect include, but are not limited to:
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-foreground">3.1 Personal Data You Provide Directly</h3>
            <p className="text-muted-foreground mb-4">
              We may collect Personal Data that you voluntarily provide to us when you register on the Platform, express an interest in obtaining information about us or our products and Services, participate in activities on the Platform, or otherwise contact us. The Personal Data that we collect depends on the context of your interactions with us and the Platform, the choices you make, and the products and features you use. The Personal Data we collect may include the following:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>Name, email address, and contact information</li>
              <li>Username, password, and authentication data</li>
              <li>Profile information, including profile pictures and biographical information</li>
              <li>Cryptocurrency wallet addresses you choose to associate with your account</li>
              <li>Communication preferences and marketing opt-in choices</li>
              <li>Any other information you choose to provide in communications with us</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-foreground">3.2 Information Collected Through Scam Reports</h3>
            <p className="text-muted-foreground mb-4">
              When you submit a scam or fraud report through our Platform, we collect information necessary to document and verify the reported incident. This may include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>Blockchain wallet addresses allegedly involved in fraudulent activities</li>
              <li>Smart contract addresses and related transaction hashes</li>
              <li>Screenshots, documents, and other evidence you provide</li>
              <li>Descriptions of the alleged fraudulent activity</li>
              <li>URLs and domain names associated with reported scams</li>
              <li>Social media profiles and communication records related to the reported scam</li>
              <li>Your contact information for follow-up verification purposes</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-foreground">3.3 Automatically Collected Information</h3>
            <p className="text-muted-foreground mb-4">
              When you access or use our Platform, we automatically collect certain information about your device and usage patterns. This information is primarily needed to maintain the security and operation of our Platform, and for our internal analytics and reporting purposes. This automatically collected information may include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>Device Information: Device type, unique device identifiers, operating system, browser type and version, screen resolution, and device settings</li>
              <li>Log Data: Internet Protocol (IP) addresses, access times, pages viewed, referring/exit pages, click patterns, and other interaction data</li>
              <li>Location Information: Approximate geographic location based on IP address</li>
              <li>Usage Information: Features used, actions taken, time spent on pages, search queries, and other usage statistics</li>
              <li>Network Information: Internet service provider, connection type, and network performance data</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-foreground">3.4 Information from Third Parties</h3>
            <p className="text-muted-foreground mb-4">
              We may receive information about you from other sources, including third parties that help us update, expand, and analyze our records, identify new customers, or prevent or detect fraud. We may also receive information about you from social media platforms when you interact with us on those platforms or use your social media login to access our Services.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-foreground">3.5 Blockchain and Public Data</h3>
            <p className="text-muted-foreground">
              Please note that blockchain networks are inherently public and transparent. When you interact with blockchain networks, information about your transactions, including wallet addresses, transaction amounts, and timestamps, becomes publicly available on the blockchain. We may collect and analyze publicly available blockchain data to provide our Services, verify reports, and improve our fraud detection capabilities. This information is publicly accessible and is not subject to the same privacy protections as other Personal Data.
            </p>
          </section>

          <Separator className="my-8" />

          {/* Section 4 */}
          <section id="use-of-information" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Settings className="h-6 w-6 text-primary" />
              4. How We Use Your Information
            </h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect or receive for various business purposes, including but not limited to:
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-foreground">4.1 Providing and Improving Our Services</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>To create, maintain, and secure your account on our Platform</li>
              <li>To process and respond to scam and fraud reports you submit</li>
              <li>To provide search functionality and access to our scam database</li>
              <li>To verify and validate reported scams and fraudulent activities</li>
              <li>To develop, improve, and optimize our Platform and Services</li>
              <li>To analyze usage patterns and trends to enhance user experience</li>
              <li>To develop new features, products, and services</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-foreground">4.2 Communications and Marketing</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>To send you administrative information, such as updates to our terms, conditions, and policies</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To send you alerts and notifications about your account or reports you've submitted</li>
              <li>To provide you with news, special offers, and general information about our Services (with your consent where required)</li>
              <li>To request feedback and contact you about your use of our Platform</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-foreground">4.3 Security and Legal Compliance</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>To detect, prevent, and address fraud, security breaches, and technical issues</li>
              <li>To protect against malicious, deceptive, fraudulent, or illegal activity</li>
              <li>To enforce our terms of service and other agreements</li>
              <li>To comply with applicable legal requirements and regulations</li>
              <li>To respond to lawful requests from government authorities and law enforcement</li>
              <li>To establish, exercise, or defend legal claims</li>
              <li>To protect the rights, property, and safety of our users and the public</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-foreground">4.4 Research and Analytics</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>To conduct research and analysis to understand fraud patterns and trends</li>
              <li>To generate aggregated, anonymized statistics about Platform usage</li>
              <li>To improve our fraud detection algorithms and verification processes</li>
              <li>To produce reports on cryptocurrency scam trends for public awareness</li>
              <li>To collaborate with researchers and organizations working to combat cryptocurrency fraud</li>
            </ul>
          </section>

          <Separator className="my-8" />

          {/* Section 5 */}
          <section id="legal-basis" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              5. Legal Basis for Processing
            </h2>
            <p className="text-muted-foreground mb-4">
              We process your Personal Data only when we have a valid legal basis to do so. The legal bases on which we rely include:
            </p>
            <ul className="list-disc list-inside space-y-3 text-muted-foreground">
              <li><strong className="text-foreground">Consent:</strong> Where you have given us explicit consent to process your Personal Data for specific purposes. You may withdraw your consent at any time, though this will not affect the lawfulness of any processing carried out before you withdraw your consent.</li>
              <li><strong className="text-foreground">Contractual Necessity:</strong> Where processing is necessary for the performance of a contract to which you are a party, or to take steps at your request prior to entering into a contract.</li>
              <li><strong className="text-foreground">Legal Obligation:</strong> Where processing is necessary for compliance with a legal obligation to which we are subject.</li>
              <li><strong className="text-foreground">Vital Interests:</strong> Where processing is necessary to protect the vital interests of you or another natural person.</li>
              <li><strong className="text-foreground">Legitimate Interests:</strong> Where processing is necessary for our legitimate interests or those of a third party, provided your interests and fundamental rights do not override those interests. Our legitimate interests include fraud prevention, network and information security, research and development, and marketing our Services.</li>
              <li><strong className="text-foreground">Public Interest:</strong> Where processing is necessary for the performance of a task carried out in the public interest, including the prevention and detection of fraud in the cryptocurrency ecosystem.</li>
            </ul>
          </section>

          <Separator className="my-8" />

          {/* Section 6 */}
          <section id="data-sharing" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              6. Data Sharing and Disclosure
            </h2>
            <p className="text-muted-foreground mb-4">
              We may share your information in certain situations as described below. We require all third parties to respect the security of your Personal Data and to treat it in accordance with the law.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-foreground">6.1 Service Providers</h3>
            <p className="text-muted-foreground mb-4">
              We may share your information with third-party service providers who perform services on our behalf, including hosting providers, analytics services, email delivery services, customer support providers, and security services. These service providers are bound by contractual obligations to keep Personal Data confidential and use it only for the purposes for which we disclose it to them.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-foreground">6.2 Public Reports Database</h3>
            <p className="text-muted-foreground mb-4">
              Information you include in scam reports may be made publicly available in our database to help protect other users from fraud. However, we take steps to protect reporter privacy and will not publicly associate your personal identity with reports without your explicit consent.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-foreground">6.3 Legal Requirements and Protection of Rights</h3>
            <p className="text-muted-foreground mb-4">
              We may disclose your information where required to do so by law, in response to valid requests by public authorities (e.g., a court or government agency), or when we believe in good faith that such action is necessary to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>Comply with a legal obligation, subpoena, court order, or legal process</li>
              <li>Protect and defend our rights or property</li>
              <li>Prevent or investigate possible wrongdoing in connection with our Services</li>
              <li>Protect the personal safety of users of the Platform or the public</li>
              <li>Protect against legal liability</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-foreground">6.4 Business Transfers</h3>
            <p className="text-muted-foreground mb-4">
              If we are involved in a merger, acquisition, asset sale, or other business transaction, your Personal Data may be transferred as part of that transaction. We will provide notice before your Personal Data is transferred and becomes subject to a different privacy policy.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-foreground">6.5 With Your Consent</h3>
            <p className="text-muted-foreground">
              We may share your information with third parties when you have given us your explicit consent to do so.
            </p>
          </section>

          <Separator className="my-8" />

          {/* Section 7 */}
          <section id="international-transfers" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Globe className="h-6 w-6 text-primary" />
              7. International Data Transfers
            </h2>
            <p className="text-muted-foreground mb-4">
              Our Platform is operated from and our services are provided from the United States. If you are located outside the United States, please be aware that information we collect, including Personal Data, may be transferred to, processed, stored, and used in the United States and other countries where our servers or service providers are located.
            </p>
            <p className="text-muted-foreground mb-4">
              Data protection laws in these countries may differ from those in your country of residence. By using our Platform or Services, you consent to the transfer of your information to the United States and other countries as described in this Privacy Policy.
            </p>
            <p className="text-muted-foreground mb-4">
              If you are located in the European Economic Area (EEA), the United Kingdom, or Switzerland, we comply with applicable data protection laws when transferring your Personal Data outside of these regions. We rely on various legal mechanisms to ensure adequate protection for your Personal Data, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Standard Contractual Clauses approved by the European Commission</li>
              <li>Adequacy decisions by the European Commission for certain countries</li>
              <li>Binding Corporate Rules where applicable</li>
              <li>Your explicit consent where appropriate</li>
            </ul>
          </section>

          <Separator className="my-8" />

          {/* Section 8 */}
          <section id="data-retention" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Database className="h-6 w-6 text-primary" />
              8. Data Retention Policies
            </h2>
            <p className="text-muted-foreground mb-4">
              We retain your Personal Data only for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
            <p className="text-muted-foreground mb-4">
              To determine the appropriate retention period for Personal Data, we consider the amount, nature, and sensitivity of the Personal Data, the potential risk of harm from unauthorized use or disclosure of your Personal Data, the purposes for which we process your Personal Data, whether we can achieve those purposes through other means, and the applicable legal requirements.
            </p>
            <p className="text-muted-foreground mb-4">
              In general, we apply the following retention periods:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li><strong className="text-foreground">Account Information:</strong> We retain your account information for as long as your account is active or as needed to provide you with our Services. If you request deletion of your account, we will delete or anonymize your Personal Data within 30 days, except where retention is required by law.</li>
              <li><strong className="text-foreground">Scam Reports:</strong> Due to the public interest nature of our fraud prevention mission, verified scam reports and associated blockchain data may be retained indefinitely to protect the community. Reporter personal information may be deleted upon request while preserving the report content.</li>
              <li><strong className="text-foreground">Usage Data:</strong> We typically retain usage data for 24 months from the date of collection for analytics purposes, after which it is deleted or aggregated.</li>
              <li><strong className="text-foreground">Legal Obligations:</strong> Where we are required to retain data for legal, tax, or regulatory purposes, we will retain the minimum amount of data necessary to comply with such requirements.</li>
            </ul>
            <p className="text-muted-foreground">
              When we have no ongoing legitimate business need to process your Personal Data, we will either delete or anonymize it, or, if this is not possible (for example, because your Personal Data has been stored in backup archives), we will securely store your Personal Data and isolate it from any further processing until deletion is possible.
            </p>
          </section>

          <Separator className="my-8" />

          {/* Section 9 */}
          <section id="security" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Lock className="h-6 w-6 text-primary" />
              9. Security Measures
            </h2>
            <p className="text-muted-foreground mb-4">
              We have implemented appropriate technical and organizational security measures designed to protect the security of any Personal Data we process. These measures include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>Encryption of data in transit using TLS/SSL protocols</li>
              <li>Encryption of data at rest using AES-256 encryption</li>
              <li>Regular security assessments and penetration testing</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Employee security awareness training</li>
              <li>Incident response and disaster recovery procedures</li>
              <li>Regular backups and data integrity monitoring</li>
              <li>Physical security measures at our data centers</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure. Therefore, we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.
            </p>
            <p className="text-muted-foreground">
              You are responsible for maintaining the secrecy of your account credentials and for restricting access to your devices. You should notify us immediately if you become aware of any unauthorized use of your account or any security breach.
            </p>
          </section>

          <Separator className="my-8" />

          {/* Section 10 */}
          <section id="your-rights" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Eye className="h-6 w-6 text-primary" />
              10. Your Rights and Choices
            </h2>
            <p className="text-muted-foreground mb-4">
              Depending on your location, you may have certain rights regarding your Personal Data under applicable data protection laws. These rights may include:
            </p>
            <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-4">
              <li><strong className="text-foreground">Right of Access:</strong> You have the right to request access to your Personal Data and to receive a copy of the Personal Data we hold about you.</li>
              <li><strong className="text-foreground">Right to Rectification:</strong> You have the right to request correction of any inaccurate Personal Data we hold about you and to have incomplete data completed.</li>
              <li><strong className="text-foreground">Right to Erasure:</strong> In certain circumstances, you have the right to request deletion of your Personal Data. This is also known as the "right to be forgotten."</li>
              <li><strong className="text-foreground">Right to Restriction:</strong> You have the right to request that we restrict the processing of your Personal Data in certain circumstances.</li>
              <li><strong className="text-foreground">Right to Data Portability:</strong> You have the right to receive your Personal Data in a structured, commonly used, and machine-readable format and to transmit that data to another controller.</li>
              <li><strong className="text-foreground">Right to Object:</strong> You have the right to object to the processing of your Personal Data in certain circumstances, including for direct marketing purposes.</li>
              <li><strong className="text-foreground">Right to Withdraw Consent:</strong> Where we process your Personal Data based on your consent, you have the right to withdraw that consent at any time.</li>
              <li><strong className="text-foreground">Right to Lodge a Complaint:</strong> You have the right to lodge a complaint with a supervisory authority if you believe that our processing of your Personal Data violates applicable data protection laws.</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              To exercise any of these rights, please contact us using the contact information provided below. We will respond to your request within the timeframe required by applicable law. We may need to verify your identity before processing your request.
            </p>
            <p className="text-muted-foreground">
              Please note that certain data may be exempt from such requests in some circumstances, which may include data we need to continue to process for legitimate business purposes or to comply with legal obligations.
            </p>
          </section>

          <Separator className="my-8" />

          {/* Section 11 */}
          <section id="cookies" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Settings className="h-6 w-6 text-primary" />
              11. Cookies and Tracking Technologies
            </h2>
            <p className="text-muted-foreground mb-4">
              We use cookies and similar tracking technologies to collect and track information and to improve and analyze our Platform. Cookies are small data files stored on your device that help us provide a better user experience.
            </p>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Types of Cookies We Use:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li><strong className="text-foreground">Essential Cookies:</strong> These cookies are necessary for the Platform to function properly and cannot be switched off in our systems.</li>
              <li><strong className="text-foreground">Analytics Cookies:</strong> These cookies help us understand how visitors interact with our Platform by collecting and reporting information anonymously.</li>
              <li><strong className="text-foreground">Functional Cookies:</strong> These cookies enable enhanced functionality and personalization, such as remembering your preferences.</li>
              <li><strong className="text-foreground">Targeting Cookies:</strong> These cookies may be set through our Platform by our advertising partners to build a profile of your interests.</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              You can control and manage cookies in various ways. Most web browsers allow you to manage cookies through your browser settings. However, please note that disabling certain cookies may impact the functionality of our Platform.
            </p>
            <p className="text-muted-foreground">
              We may also use web beacons, pixel tags, and similar technologies to track user activity and collect usage data. These technologies are used in combination with cookies to understand how users interact with our Platform.
            </p>
          </section>

          <Separator className="my-8" />

          {/* Section 12 */}
          <section id="children" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-primary" />
              12. Children's Privacy
            </h2>
            <p className="text-muted-foreground mb-4">
              Our Platform and Services are not directed to individuals under the age of 18 ("Children"). We do not knowingly collect Personal Data from Children. If you are a parent or guardian and you are aware that your Child has provided us with Personal Data, please contact us immediately.
            </p>
            <p className="text-muted-foreground">
              If we become aware that we have collected Personal Data from Children without verification of parental consent, we will take steps to remove that information from our servers. If you believe we might have any information from or about a Child, please contact us at the email address provided below.
            </p>
          </section>

          <Separator className="my-8" />

          {/* Section 13 */}
          <section id="changes" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              13. Changes to This Policy
            </h2>
            <p className="text-muted-foreground mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
            </p>
            <p className="text-muted-foreground mb-4">
              For material changes to this Privacy Policy, we will make reasonable efforts to provide you with notice, such as by email (sent to the email address specified in your account), through a prominent notice posted on our Platform, or through other appropriate communication channels.
            </p>
            <p className="text-muted-foreground">
              You are advised to review this Privacy Policy periodically for any changes. Your continued use of the Platform and Services after any changes to this Privacy Policy will constitute your acknowledgment of the changes and your consent to abide and be bound by the modified Privacy Policy.
            </p>
          </section>

          <Separator className="my-8" />

          {/* Section 14 */}
          <section id="contact" className="mb-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Mail className="h-6 w-6 text-primary" />
              14. Contact Information
            </h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions, comments, or concerns about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-secondary/30 rounded-lg p-6">
              <p className="text-foreground font-semibold mb-2">Blocksafespace</p>
              <p className="text-muted-foreground">Email: privacy@blocksafespace.com</p>
              <p className="text-muted-foreground">Website: blocksafespace.com</p>
            </div>
            <p className="text-muted-foreground mt-4">
              We will endeavor to respond to your inquiry within 30 days of receipt, or within such shorter time period as may be required by applicable law.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacyPage;
