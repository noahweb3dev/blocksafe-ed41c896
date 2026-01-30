import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FileText, Scale, Shield, AlertTriangle, Users, Globe, Gavel, Ban, CreditCard, MessageSquare, RefreshCw, Lock, Mail } from "lucide-react";

const TermsPage = () => {
  const lastUpdated = "January 15, 2026";

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
          <Scale className="h-4 w-4 text-primary" />
          <span className="text-sm text-primary font-medium">Legal Document</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">Terms of</span>{" "}
          <span className="text-foreground">Service</span>
        </h1>
        <p className="text-muted-foreground">
          Last Updated: {lastUpdated}
        </p>
      </div>

      <Card className="bg-card/50 border-border backdrop-blur-sm max-w-4xl mx-auto">
        <CardContent className="pt-8 prose prose-invert max-w-none">
          {/* Important Notice */}
          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-destructive mb-2">IMPORTANT: PLEASE READ THESE TERMS CAREFULLY</h3>
                <p className="text-muted-foreground text-sm">
                  These Terms of Service constitute a legally binding agreement between you and Blocksafespace governing your access to and use of our Platform and Services. By accessing or using our Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use our Platform or Services.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-secondary/30 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Table of Contents
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground text-sm columns-2">
              <li><a href="#acceptance" className="hover:text-primary transition-colors">Acceptance of Terms</a></li>
              <li><a href="#definitions" className="hover:text-primary transition-colors">Definitions</a></li>
              <li><a href="#eligibility" className="hover:text-primary transition-colors">Eligibility</a></li>
              <li><a href="#account" className="hover:text-primary transition-colors">Account Registration</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Description of Services</a></li>
              <li><a href="#user-content" className="hover:text-primary transition-colors">User Content</a></li>
              <li><a href="#report-submission" className="hover:text-primary transition-colors">Report Submission</a></li>
              <li><a href="#prohibited" className="hover:text-primary transition-colors">Prohibited Conduct</a></li>
              <li><a href="#intellectual-property" className="hover:text-primary transition-colors">Intellectual Property</a></li>
              <li><a href="#third-party" className="hover:text-primary transition-colors">Third-Party Services</a></li>
              <li><a href="#disclaimers" className="hover:text-primary transition-colors">Disclaimers</a></li>
              <li><a href="#limitation" className="hover:text-primary transition-colors">Limitation of Liability</a></li>
              <li><a href="#indemnification" className="hover:text-primary transition-colors">Indemnification</a></li>
              <li><a href="#termination" className="hover:text-primary transition-colors">Termination</a></li>
              <li><a href="#dispute" className="hover:text-primary transition-colors">Dispute Resolution</a></li>
              <li><a href="#governing-law" className="hover:text-primary transition-colors">Governing Law</a></li>
              <li><a href="#modifications" className="hover:text-primary transition-colors">Modifications</a></li>
              <li><a href="#severability" className="hover:text-primary transition-colors">Severability</a></li>
              <li><a href="#entire-agreement" className="hover:text-primary transition-colors">Entire Agreement</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact Information</a></li>
            </ol>
          </div>

          {/* Section 1 */}
          <section id="acceptance" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Scale className="h-6 w-6 text-primary" />
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground mb-4">
              These Terms of Service ("Terms," "Terms of Service," or "Agreement") constitute a legally binding agreement between you ("you," "your," or "User") and Blocksafespace ("Company," "we," "us," or "our") concerning your access to and use of the blocksafespace.com website, including any subdomains thereof, and any other websites through which we make our services available (collectively, the "Site"), as well as any applications, software, products, tools, features, and services offered through the Site (collectively with the Site, the "Platform").
            </p>
            <p className="text-muted-foreground mb-4">
              BY ACCESSING OR USING THE PLATFORM, BY CLICKING A BUTTON OR CHECKBOX TO ACCEPT OR AGREE TO THESE TERMS WHERE THAT OPTION IS MADE AVAILABLE TO YOU, OR BY OTHERWISE MANIFESTING ASSENT TO THESE TERMS, YOU: (1) ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTAND THESE TERMS; (2) REPRESENT AND WARRANT THAT YOU HAVE THE RIGHT, AUTHORITY, AND CAPACITY TO ENTER INTO THESE TERMS; AND (3) AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT AGREE TO THESE TERMS, YOU MAY NOT ACCESS OR USE THE PLATFORM.
            </p>
            <p className="text-muted-foreground mb-4">
              We reserve the right to modify, amend, or update these Terms at any time in our sole discretion. Any such modifications will be effective immediately upon posting the revised Terms on the Platform. Your continued access to or use of the Platform after such posting constitutes your consent to be bound by the modified Terms. We encourage you to review these Terms periodically to ensure familiarity with the most current version.
            </p>
            <p className="text-muted-foreground">
              If you are entering into these Terms on behalf of a company, organization, or other legal entity, you represent and warrant that you have the authority to bind such entity to these Terms, in which case the terms "you" and "your" shall refer to such entity. If you do not have such authority, or if you do not agree with these Terms, you must not accept these Terms and may not use the Platform.
            </p>
          </section>

          <Separator className="my-8" />

          {/* Section 2 */}
          <section id="definitions" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              2. Definitions
            </h2>
            <p className="text-muted-foreground mb-4">
              For the purposes of these Terms, the following capitalized terms shall have the meanings set forth below:
            </p>
            <ul className="list-disc list-inside space-y-3 text-muted-foreground">
              <li><strong className="text-foreground">"Account"</strong> means the account you create to access certain features of the Platform, including but not limited to submitting Reports, tracking Report status, and participating in community features.</li>
              <li><strong className="text-foreground">"Blockchain"</strong> means any distributed ledger technology, including but not limited to Ethereum, Bitcoin, Binance Smart Chain, Polygon, Solana, Arbitrum, Avalanche, and any other blockchain networks supported by the Platform from time to time.</li>
              <li><strong className="text-foreground">"Content"</strong> means any information, data, text, software, code, scripts, graphics, photos, sounds, music, videos, audiovisual combinations, interactive features, and other materials you may view on, access through, or contribute to the Platform.</li>
              <li><strong className="text-foreground">"Intellectual Property Rights"</strong> means all patent rights, copyright rights, mask work rights, moral rights, rights of publicity, trademark, trade dress and service mark rights, goodwill, trade secret rights, and other intellectual property rights as may now exist or hereafter come into existence, and all applications therefore and registrations, renewals, and extensions thereof, under the laws of any state, country, territory, or other jurisdiction.</li>
              <li><strong className="text-foreground">"Platform"</strong> means the Site and all applications, software, products, tools, features, and services offered through the Site, including but not limited to the scam reporting system, search functionality, and verification services.</li>
              <li><strong className="text-foreground">"Report"</strong> means any submission, complaint, or disclosure made through the Platform regarding alleged scams, fraud, or other malicious activities in the cryptocurrency and blockchain ecosystem.</li>
              <li><strong className="text-foreground">"Services"</strong> means all services provided by the Company through the Platform, including but not limited to scam reporting, report verification, database search functionality, and community moderation.</li>
              <li><strong className="text-foreground">"User Content"</strong> means any Content that you submit, post, upload, or otherwise make available through the Platform, including but not limited to Reports, comments, feedback, and communications.</li>
              <li><strong className="text-foreground">"Wallet Address"</strong> means a cryptographic hash or other unique identifier used to receive or send cryptocurrency or digital assets on a Blockchain.</li>
            </ul>
          </section>

          <Separator className="my-8" />

          {/* Section 3 */}
          <section id="eligibility" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              3. Eligibility
            </h2>
            <p className="text-muted-foreground mb-4">
              The Platform is intended solely for individuals who are at least eighteen (18) years of age or the age of majority in your jurisdiction, whichever is greater. By accessing or using the Platform, you represent and warrant that you are at least eighteen (18) years of age and have the legal capacity to enter into and be bound by these Terms.
            </p>
            <p className="text-muted-foreground mb-4">
              You may not access or use the Platform if you: (a) are prohibited from doing so under applicable law; (b) have previously been suspended or removed from the Platform; (c) are a resident of a country or jurisdiction where access to or use of the Platform is prohibited by law or regulation; or (d) are otherwise ineligible to access or use the Platform as determined by us in our sole discretion.
            </p>
            <p className="text-muted-foreground mb-4">
              The Platform is not intended for use by: (a) any person or entity located in, organized under, or a resident of Cuba, Iran, North Korea, Sudan, Syria, the Crimea region of Ukraine, or any other country or region subject to comprehensive U.S. sanctions or embargo ("Prohibited Jurisdictions"); or (b) any person or entity listed on the U.S. Treasury Department's Specially Designated Nationals List, the U.S. Commerce Department's Denied Persons List, Entity List, or Unverified List, or any other applicable sanctions list ("Prohibited Persons"). By accessing or using the Platform, you represent and warrant that you are not located in, organized under, or a resident of any Prohibited Jurisdiction and are not a Prohibited Person.
            </p>
            <p className="text-muted-foreground">
              We reserve the right, in our sole discretion, to refuse access to the Platform to any person or entity and to change our eligibility criteria at any time without prior notice.
            </p>
          </section>

          <Separator className="my-8" />

          {/* Section 4 */}
          <section id="account" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Lock className="h-6 w-6 text-primary" />
              4. Account Registration
            </h2>
            <p className="text-muted-foreground mb-4">
              While you may access certain features of the Platform without creating an Account, certain features may require you to register for an Account. When you register for an Account, you agree to: (a) provide accurate, current, and complete information about yourself as prompted by the registration form; (b) maintain and promptly update your Account information to keep it accurate, current, and complete; (c) maintain the security and confidentiality of your login credentials and restrict access to your Account; (d) promptly notify us if you discover or otherwise suspect any security breaches related to the Platform or your Account; and (e) take responsibility for all activities that occur under your Account and accept all risks of any authorized or unauthorized access to your Account.
            </p>
            <p className="text-muted-foreground mb-4">
              You are solely responsible for maintaining the confidentiality of your Account credentials and for restricting access to your computing devices. You agree to accept responsibility for all activities that occur under your Account. You should choose a strong password that you do not use with any other website or service. You should never share your Account credentials with anyone.
            </p>
            <p className="text-muted-foreground mb-4">
              If there is suspicious activity related to your Account, we may request additional information from you, including but not limited to authenticating documents, and freeze any transactions pending our review. You agree to comply with any such requests and understand that failure to do so may result in suspension or termination of your Account.
            </p>
            <p className="text-muted-foreground">
              We reserve the right to disable any Account at any time, including if we believe that you have violated or acted inconsistently with these Terms. We may require you to change your username at any time if we believe that such username is inappropriate, obscene, or otherwise objectionable, or if it infringes on the intellectual property rights of others.
            </p>
          </section>

          <Separator className="my-8" />

          {/* Section 5 */}
          <section id="services" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              5. Description of Services
            </h2>
            <p className="text-muted-foreground mb-4">
              Blocksafespace provides a community-driven platform designed to help users identify and report scams, fraud, and other malicious activities in the cryptocurrency and blockchain ecosystem. Our Services include, but are not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li><strong className="text-foreground">Report Submission:</strong> A system for users to submit Reports of alleged scams, fraud, or other malicious activities, including wallet addresses, contract addresses, and supporting evidence.</li>
              <li><strong className="text-foreground">Database Search:</strong> A searchable database of submitted and verified Reports, allowing users to check addresses and entities before engaging with them.</li>
              <li><strong className="text-foreground">Report Verification:</strong> A process for reviewing, investigating, and verifying submitted Reports using on-chain analysis and community input.</li>
              <li><strong className="text-foreground">Community Features:</strong> Features enabling community participation, including report voting, comments, and reputation systems.</li>
              <li><strong className="text-foreground">Alerts and Notifications:</strong> Optional alerts and notifications regarding new Reports, updates to existing Reports, and other relevant information.</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              The Services are provided on an "as is" and "as available" basis. We do not guarantee the accuracy, completeness, or reliability of any Reports or other Content available through the Platform. The information provided through the Platform is for informational purposes only and should not be construed as financial, legal, or investment advice.
            </p>
            <p className="text-muted-foreground">
              We reserve the right to modify, suspend, or discontinue any aspect of the Services at any time without prior notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of the Services.
            </p>
          </section>

          <Separator className="my-8" />

          {/* Section 6 */}
          <section id="user-content" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-primary" />
              6. User Content
            </h2>
            <p className="text-muted-foreground mb-4">
              The Platform may allow you to submit, post, upload, or otherwise make available User Content. You retain all ownership rights in any User Content you submit to the Platform. However, by submitting User Content to the Platform, you grant the Company a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform, and display such User Content in connection with operating and providing the Services and Content to you and to other Users.
            </p>
            <p className="text-muted-foreground mb-4">
              You represent and warrant that: (a) you own or have the necessary rights to submit the User Content and to grant the license described above; (b) the User Content does not violate the privacy rights, publicity rights, copyright, contractual rights, intellectual property rights, or any other rights of any person or entity; (c) the User Content does not contain any viruses, malware, or other harmful code; (d) the User Content is not defamatory, libelous, or fraudulent; and (e) the User Content complies with all applicable laws and regulations.
            </p>
            <p className="text-muted-foreground mb-4">
              We do not endorse any User Content or any opinion, recommendation, or advice expressed therein, and we expressly disclaim any and all liability in connection with User Content. We are not responsible for any User Content posted on the Platform.
            </p>
            <p className="text-muted-foreground">
              We reserve the right, but not the obligation, to monitor, edit, or remove any User Content at any time and for any reason without prior notice. We have the right to terminate your access to the Platform if you violate these Terms in connection with your submission of User Content.
            </p>
          </section>

          <Separator className="my-8" />

          {/* Section 7 */}
          <section id="report-submission" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-primary" />
              7. Report Submission Policy
            </h2>
            <p className="text-muted-foreground mb-4">
              When submitting Reports through the Platform, you agree to the following requirements and obligations:
            </p>
            <h3 className="text-xl font-semibold mb-3 text-foreground">7.1 Accuracy and Good Faith</h3>
            <p className="text-muted-foreground mb-4">
              You agree to submit Reports in good faith based on information you reasonably believe to be true and accurate. You shall not knowingly submit false, misleading, or fabricated Reports. You understand that submitting false Reports may result in immediate termination of your Account and may expose you to civil or criminal liability.
            </p>
            <h3 className="text-xl font-semibold mb-3 text-foreground">7.2 Evidence and Documentation</h3>
            <p className="text-muted-foreground mb-4">
              When submitting Reports, you agree to provide sufficient evidence and documentation to support your claims. This may include, but is not limited to, transaction hashes, screenshots, wallet addresses, smart contract addresses, URLs, and any other relevant information.
            </p>
            <h3 className="text-xl font-semibold mb-3 text-foreground">7.3 Report Processing</h3>
            <p className="text-muted-foreground mb-4">
              You understand and acknowledge that: (a) we cannot guarantee that all Reports will be reviewed, verified, or published; (b) the verification process may take varying amounts of time depending on the complexity of the Report and available resources; (c) we may contact you for additional information regarding your Report; and (d) we reserve the right to reject, modify, or remove any Report at our sole discretion.
            </p>
            <h3 className="text-xl font-semibold mb-3 text-foreground">7.4 No Guarantee of Outcome</h3>
            <p className="text-muted-foreground mb-4">
              Submitting a Report does not guarantee any particular outcome, including but not limited to the recovery of lost funds, prosecution of alleged wrongdoers, or any other action. We are not a law enforcement agency and do not have the authority to investigate crimes, make arrests, or take legal action.
            </p>
            <h3 className="text-xl font-semibold mb-3 text-foreground">7.5 Report Persistence</h3>
            <p className="text-muted-foreground">
              You understand that once a Report is verified and published, it may remain in our database indefinitely to protect the community. While you may request removal of your personal information from a Report, the substantive content of verified Reports may be retained for public safety purposes.
            </p>
          </section>

          <Separator className="my-8" />

          {/* Section 8 */}
          <section id="prohibited" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Ban className="h-6 w-6 text-primary" />
              8. Prohibited Conduct
            </h2>
            <p className="text-muted-foreground mb-4">
              You agree not to engage in any of the following prohibited activities in connection with your use of the Platform:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>Submitting false, misleading, or fabricated Reports with the intent to harm, defame, or harass any person or entity;</li>
              <li>Using the Platform to engage in any illegal, fraudulent, or malicious activity;</li>
              <li>Impersonating any person or entity, or falsely stating or otherwise misrepresenting your affiliation with any person or entity;</li>
              <li>Interfering with or disrupting the integrity or performance of the Platform or the Services;</li>
              <li>Attempting to gain unauthorized access to the Platform, other users' accounts, or our computer systems or networks;</li>
              <li>Using any robot, spider, crawler, scraper, or other automated means to access the Platform or collect data from the Platform;</li>
              <li>Circumventing, disabling, or otherwise interfering with security-related features of the Platform;</li>
              <li>Transmitting any viruses, worms, defects, Trojan horses, or other items of a destructive nature;</li>
              <li>Harvesting or collecting email addresses or other contact information of other users from the Platform;</li>
              <li>Using the Platform for any commercial purpose without our prior written consent;</li>
              <li>Encouraging or enabling any other individual to engage in any of the prohibited activities described above;</li>
              <li>Violating any applicable law, rule, or regulation;</li>
              <li>Infringing the intellectual property rights of others;</li>
              <li>Posting or transmitting any Content that is offensive, obscene, defamatory, threatening, harassing, or otherwise objectionable;</li>
              <li>Using the Platform to stalk, harass, bully, or harm another person;</li>
              <li>Creating multiple Accounts for deceptive or fraudulent purposes;</li>
              <li>Manipulating or artificially inflating the credibility or reputation of any Report or user;</li>
              <li>Engaging in any activity that could disable, overburden, or impair the proper functioning of the Platform;</li>
            </ul>
            <p className="text-muted-foreground">
              We reserve the right to investigate and take appropriate legal action against anyone who, in our sole discretion, violates this provision, including without limitation, removing the offending Content from the Platform, suspending or terminating the Account of such violators, and reporting such violators to law enforcement authorities.
            </p>
          </section>

          <Separator className="my-8" />

          {/* Section 9 */}
          <section id="intellectual-property" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              9. Intellectual Property Rights
            </h2>
            <p className="text-muted-foreground mb-4">
              The Platform and all Content therein, including but not limited to text, graphics, images, logos, icons, photographs, audio clips, video clips, data compilations, software, and the compilation thereof, are the property of the Company, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p className="text-muted-foreground mb-4">
              The Company name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of the Company or its affiliates or licensors. You may not use such marks without the prior written permission of the Company. All other names, logos, product and service names, designs, and slogans on the Platform are the trademarks of their respective owners.
            </p>
            <p className="text-muted-foreground mb-4">
              Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Platform and the Services for your personal, non-commercial use. This license does not include any right to: (a) sell, resell, or commercially use the Platform or its Content; (b) copy, reproduce, distribute, publicly perform, or publicly display Platform Content; (c) modify the Platform or any portion thereof; (d) use any data mining, robots, or similar data gathering or extraction methods; or (e) use the Platform other than for its intended purposes.
            </p>
            <p className="text-muted-foreground">
              If you print, copy, modify, download, or otherwise use or provide any other person with access to any part of the Platform in breach of these Terms, your right to use the Platform will cease immediately and you must, at our option, return or destroy any copies of the materials you have made.
            </p>
          </section>

          <Separator className="my-8" />

          {/* Section 10 */}
          <section id="third-party" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Globe className="h-6 w-6 text-primary" />
              10. Third-Party Services and Links
            </h2>
            <p className="text-muted-foreground mb-4">
              The Platform may contain links to third-party websites, services, or applications that are not owned or controlled by the Company ("Third-Party Services"). We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any Third-Party Services.
            </p>
            <p className="text-muted-foreground mb-4">
              You acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any content, goods, or services available on or through any Third-Party Services.
            </p>
            <p className="text-muted-foreground">
              We strongly advise you to read the terms and conditions and privacy policies of any Third-Party Services that you visit. Your interactions with Third-Party Services are governed solely by their respective terms and policies.
            </p>
          </section>

          <Separator className="my-8" />

          {/* Section 11 */}
          <section id="disclaimers" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-primary" />
              11. Disclaimers
            </h2>
            <p className="text-muted-foreground mb-4">
              THE PLATFORM AND SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER THE COMPANY NOR ANY PERSON ASSOCIATED WITH THE COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE PLATFORM OR SERVICES.
            </p>
            <p className="text-muted-foreground mb-4">
              WITHOUT LIMITING THE FOREGOING, NEITHER THE COMPANY NOR ANYONE ASSOCIATED WITH THE COMPANY REPRESENTS OR WARRANTS THAT THE PLATFORM, ITS CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE PLATFORM WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE PLATFORM OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR THAT THE PLATFORM OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE PLATFORM WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.
            </p>
            <p className="text-muted-foreground mb-4">
              TO THE FULLEST EXTENT PROVIDED BY LAW, THE COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR PURPOSE.
            </p>
            <p className="text-muted-foreground mb-4">
              YOU ACKNOWLEDGE AND AGREE THAT THE INFORMATION PROVIDED THROUGH THE PLATFORM IS FOR INFORMATIONAL PURPOSES ONLY AND DOES NOT CONSTITUTE FINANCIAL, LEGAL, OR INVESTMENT ADVICE. THE COMPANY DOES NOT PROVIDE INVESTMENT ADVICE, AND THE INFORMATION ON THE PLATFORM SHOULD NOT BE RELIED UPON FOR MAKING ANY FINANCIAL DECISIONS.
            </p>
            <p className="text-muted-foreground">
              THE COMPANY DOES NOT GUARANTEE THE ACCURACY OR COMPLETENESS OF ANY REPORTS OR OTHER USER CONTENT ON THE PLATFORM. YOU SHOULD INDEPENDENTLY VERIFY ANY INFORMATION OBTAINED THROUGH THE PLATFORM BEFORE RELYING ON IT OR MAKING ANY DECISIONS BASED ON SUCH INFORMATION.
            </p>
          </section>

          <Separator className="my-8" />

          {/* Section 12 */}
          <section id="limitation" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Scale className="h-6 w-6 text-primary" />
              12. Limitation of Liability
            </h2>
            <p className="text-muted-foreground mb-4">
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL THE COMPANY, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE PLATFORM, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE PLATFORM OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE.
            </p>
            <p className="text-muted-foreground mb-4">
              THE COMPANY SHALL NOT BE LIABLE FOR ANY LOSSES OR DAMAGES RESULTING FROM: (A) YOUR FAILURE TO MAINTAIN THE CONFIDENTIALITY OF YOUR ACCOUNT CREDENTIALS; (B) ANY ACTIVITY ON YOUR ACCOUNT, WHETHER AUTHORIZED OR UNAUTHORIZED; (C) ANY ERRORS, INACCURACIES, OR OMISSIONS IN ANY REPORTS OR OTHER USER CONTENT; (D) ANY ACTIONS TAKEN OR NOT TAKEN BASED ON INFORMATION OBTAINED THROUGH THE PLATFORM; (E) ANY THIRD-PARTY CONDUCT, CONTENT, OR SERVICES, INCLUDING WITHOUT LIMITATION, ANY DEFAMATORY, OFFENSIVE, OR ILLEGAL CONDUCT OF OTHER USERS OR THIRD PARTIES; OR (F) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SERVERS OR ANY PERSONAL INFORMATION STORED THEREIN.
            </p>
            <p className="text-muted-foreground mb-4">
              IN NO EVENT SHALL THE AGGREGATE LIABILITY OF THE COMPANY AND ITS AFFILIATES FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR USE OF THE PLATFORM EXCEED THE GREATER OF (A) THE AMOUNT YOU HAVE PAID TO THE COMPANY IN THE TWELVE (12) MONTHS PRIOR TO THE EVENT GIVING RISE TO THE LIABILITY, OR (B) ONE HUNDRED U.S. DOLLARS ($100).
            </p>
            <p className="text-muted-foreground">
              THE LIMITATIONS OF DAMAGES SET FORTH ABOVE ARE FUNDAMENTAL ELEMENTS OF THE BASIS OF THE BARGAIN BETWEEN THE COMPANY AND YOU. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES, SO SOME OR ALL OF THE ABOVE EXCLUSIONS AND LIMITATIONS MAY NOT APPLY TO YOU.
            </p>
          </section>

          <Separator className="my-8" />

          {/* Section 13 */}
          <section id="indemnification" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              13. Indemnification
            </h2>
            <p className="text-muted-foreground mb-4">
              You agree to defend, indemnify, and hold harmless the Company, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to: (a) your violation of these Terms; (b) your use of the Platform, including, but not limited to, any User Content you submit, post, or otherwise transmit through the Platform; (c) your violation of the rights of any third party, including but not limited to intellectual property rights, privacy rights, or publicity rights; (d) any Reports you submit through the Platform; (e) your violation of any applicable law or regulation; or (f) your negligence or willful misconduct.
            </p>
            <p className="text-muted-foreground">
              We reserve the right to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will cooperate with us in asserting any available defenses.
            </p>
          </section>

          <Separator className="my-8" />

          {/* Section 14 */}
          <section id="termination" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <RefreshCw className="h-6 w-6 text-primary" />
              14. Termination
            </h2>
            <p className="text-muted-foreground mb-4">
              We may terminate or suspend your Account and bar access to the Platform immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of these Terms.
            </p>
            <p className="text-muted-foreground mb-4">
              If you wish to terminate your Account, you may simply discontinue using the Platform or contact us to request Account deletion.
            </p>
            <p className="text-muted-foreground mb-4">
              All provisions of these Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
            <p className="text-muted-foreground">
              Upon termination, your right to use the Platform will immediately cease. If your Account is terminated for any reason, you agree that the Company may, in its sole discretion, retain all information associated with your Account, including but not limited to Reports you have submitted, for legal, regulatory, or legitimate business purposes.
            </p>
          </section>

          <Separator className="my-8" />

          {/* Section 15 */}
          <section id="dispute" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Gavel className="h-6 w-6 text-primary" />
              15. Dispute Resolution
            </h2>
            <h3 className="text-xl font-semibold mb-3 text-foreground">15.1 Binding Arbitration</h3>
            <p className="text-muted-foreground mb-4">
              ANY DISPUTE, CONTROVERSY, OR CLAIM ARISING OUT OF OR RELATING TO THESE TERMS, INCLUDING THE VALIDITY, INVALIDITY, BREACH, OR TERMINATION THEREOF, OR YOUR USE OF THE PLATFORM, SHALL BE RESOLVED BY BINDING ARBITRATION ADMINISTERED BY THE AMERICAN ARBITRATION ASSOCIATION IN ACCORDANCE WITH ITS COMMERCIAL ARBITRATION RULES. THE PLACE OF ARBITRATION SHALL BE [JURISDICTION]. THE LANGUAGE OF THE ARBITRATION SHALL BE ENGLISH.
            </p>
            <h3 className="text-xl font-semibold mb-3 text-foreground">15.2 Class Action Waiver</h3>
            <p className="text-muted-foreground mb-4">
              YOU AND THE COMPANY AGREE THAT ANY ARBITRATION OR OTHER PROCEEDING SHALL BE LIMITED TO THE DISPUTE BETWEEN THE COMPANY AND YOU INDIVIDUALLY. TO THE FULLEST EXTENT PERMITTED BY LAW: (A) NO ARBITRATION OR OTHER PROCEEDING SHALL BE JOINED WITH ANY OTHER; (B) THERE IS NO RIGHT OR AUTHORITY FOR ANY DISPUTE TO BE ARBITRATED OR RESOLVED ON A CLASS ACTION BASIS OR TO UTILIZE CLASS ACTION PROCEDURES; AND (C) THERE IS NO RIGHT OR AUTHORITY FOR ANY DISPUTE TO BE BROUGHT IN A PURPORTED REPRESENTATIVE CAPACITY ON BEHALF OF THE GENERAL PUBLIC OR ANY OTHER PERSONS.
            </p>
            <h3 className="text-xl font-semibold mb-3 text-foreground">15.3 Exception for Small Claims</h3>
            <p className="text-muted-foreground">
              Notwithstanding the foregoing, either party may bring an individual action in small claims court.
            </p>
          </section>

          <Separator className="my-8" />

          {/* Section 16 */}
          <section id="governing-law" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Globe className="h-6 w-6 text-primary" />
              16. Governing Law
            </h2>
            <p className="text-muted-foreground">
              These Terms and your use of the Platform shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Any legal action or proceeding arising out of or related to these Terms or your use of the Platform shall be instituted exclusively in the federal courts of the United States or the courts of the State of Delaware, and you consent to the jurisdiction of such courts.
            </p>
          </section>

          <Separator className="my-8" />

          {/* Section 17 */}
          <section id="modifications" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <RefreshCw className="h-6 w-6 text-primary" />
              17. Modifications to Terms
            </h2>
            <p className="text-muted-foreground mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            <p className="text-muted-foreground">
              By continuing to access or use our Platform after any revisions become effective, you agree to be bound by the revised Terms. If you do not agree to the new Terms, you are no longer authorized to use the Platform.
            </p>
          </section>

          <Separator className="my-8" />

          {/* Section 18 */}
          <section id="severability" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              18. Severability
            </h2>
            <p className="text-muted-foreground">
              If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect. The failure of the Company to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </section>

          <Separator className="my-8" />

          {/* Section 19 */}
          <section id="entire-agreement" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              19. Entire Agreement
            </h2>
            <p className="text-muted-foreground mb-4">
              These Terms, together with any amendments and any additional agreements you may enter into with the Company in connection with the Services, constitute the entire agreement between you and the Company concerning the Platform and Services.
            </p>
            <p className="text-muted-foreground">
              These Terms supersede and replace any prior agreements we might have had between us regarding the Platform or Services. No waiver of any term of these Terms shall be deemed a further or continuing waiver of such term or any other term, and the Company's failure to assert any right or provision under these Terms shall not constitute a waiver of such right or provision.
            </p>
          </section>

          <Separator className="my-8" />

          {/* Section 20 */}
          <section id="contact" className="mb-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Mail className="h-6 w-6 text-primary" />
              20. Contact Information
            </h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="bg-secondary/30 rounded-lg p-6">
              <p className="text-foreground font-semibold mb-2">Blocksafespace</p>
              <p className="text-muted-foreground">Email: legal@blocksafespace.com</p>
              <p className="text-muted-foreground">Website: blocksafespace.com</p>
            </div>
            <p className="text-muted-foreground mt-4">
              By using the Platform, you acknowledge that you have read these Terms of Service, understood them, and agree to be bound by them.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default TermsPage;
