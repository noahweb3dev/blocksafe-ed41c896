import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, Shield, Search, FileText, Users, AlertTriangle } from "lucide-react";

const FAQPage = () => {
  const faqCategories = [
    {
      title: "Getting Started",
      icon: HelpCircle,
      faqs: [
        {
          question: "What is Blocksafespace?",
          answer: "Blocksafespace is a community-driven platform dedicated to protecting users in the Web3 and blockchain ecosystem. We provide a comprehensive database of reported scams, fraud, and malicious actors, helping users verify addresses and contracts before engaging with them."
        },
        {
          question: "How do I search for a potentially fraudulent address?",
          answer: "Simply use the search bar on our homepage or navigate to the Search page. Enter the wallet address, contract address, or domain you want to verify. Our system will show you any reports associated with that address across all supported blockchain networks."
        },
        {
          question: "Is Blocksafespace free to use?",
          answer: "Yes, Blocksafespace is completely free for basic usage. You can search our database and submit reports without any cost. Premium features for enterprises and advanced analytics may be available in the future."
        },
        {
          question: "Which blockchain networks do you support?",
          answer: "We currently support major blockchain networks including Ethereum, BSC (BNB Chain), Polygon, Solana, Arbitrum, and Avalanche. We're continuously adding support for more networks based on community demand."
        }
      ]
    },
    {
      title: "Reporting Scams",
      icon: AlertTriangle,
      faqs: [
        {
          question: "How do I report a scam?",
          answer: "Navigate to the 'Report Scam' page and fill out the submission form. Provide as much detail as possible including the wallet/contract address, blockchain network, type of scam, and any evidence you have. The more information you provide, the faster we can verify and process your report."
        },
        {
          question: "What types of scams can I report?",
          answer: "You can report various types of blockchain-related fraud including rug pulls, phishing attempts, fake tokens, Ponzi schemes, honeypot contracts, impersonation scams, and any other fraudulent activities in the Web3 space."
        },
        {
          question: "What happens after I submit a report?",
          answer: "Once submitted, your report enters our verification queue. Our team reviews each submission, cross-references with other reports and on-chain data, and assigns a status. Reports may be marked as 'Pending', 'Investigating', or 'Verified' based on our findings."
        },
        {
          question: "Can I submit anonymous reports?",
          answer: "Yes, you can submit reports without creating an account. However, creating an account allows you to track your submissions, receive updates on your reports, and build credibility within the community."
        },
        {
          question: "What evidence should I include in my report?",
          answer: "Include transaction hashes, screenshots of interactions, links to fraudulent websites or social media profiles, smart contract addresses, and any communication with the scammer. The more evidence you provide, the stronger your report becomes."
        }
      ]
    },
    {
      title: "Verification & Trust",
      icon: Shield,
      faqs: [
        {
          question: "How do you verify reports?",
          answer: "We use a multi-layered verification process that includes on-chain analysis, cross-referencing with known scam patterns, community voting, and manual review by our expert team. Reports with multiple independent submissions receive higher priority."
        },
        {
          question: "What do the different report statuses mean?",
          answer: "'Pending' means the report is awaiting review. 'Investigating' indicates our team is actively analyzing the case. 'Verified' confirms the report has been validated through our verification process. 'Disputed' means conflicting information has been received."
        },
        {
          question: "Can a verified scammer appeal their listing?",
          answer: "Yes, we have an appeals process for cases where new evidence emerges. However, the burden of proof lies with the appellant, and all appeals are thoroughly investigated before any changes are made to a listing."
        },
        {
          question: "How do you prevent false reports?",
          answer: "We implement several safeguards including requiring detailed evidence, cross-referencing reports, analyzing reporter credibility, and conducting independent investigations. Malicious reporters may be banned from the platform."
        }
      ]
    },
    {
      title: "Account & Privacy",
      icon: Users,
      faqs: [
        {
          question: "Do I need an account to use Blocksafespace?",
          answer: "No, you can search our database and submit basic reports without an account. However, creating an account provides benefits like tracking your reports, earning reputation points, and accessing additional features."
        },
        {
          question: "How is my personal information protected?",
          answer: "We take privacy seriously. Personal information is encrypted and stored securely. We never share your personal details with third parties without your consent. Read our Privacy Policy for complete details."
        },
        {
          question: "Can I delete my account?",
          answer: "Yes, you can request account deletion at any time through your account settings. Note that reports you've submitted may remain in our database for community safety, but your personal information will be removed."
        }
      ]
    },
    {
      title: "Technical Questions",
      icon: Search,
      faqs: [
        {
          question: "Do you have an API for developers?",
          answer: "We're working on a public API that will allow developers to integrate Blocksafespace data into their applications, wallets, and DeFi protocols. Join our waitlist to be notified when it launches."
        },
        {
          question: "How often is your database updated?",
          answer: "Our database is updated in real-time as new reports are submitted and verified. We also continuously monitor blockchain activity and update existing reports with new information as it becomes available."
        },
        {
          question: "Can I integrate Blocksafespace into my wallet or dApp?",
          answer: "Soon! We're developing browser extensions and SDK tools that will allow wallets and dApps to check addresses against our database before transactions are executed."
        }
      ]
    },
    {
      title: "Legal & Compliance",
      icon: FileText,
      faqs: [
        {
          question: "Is the information on Blocksafespace legally admissible?",
          answer: "While we strive for accuracy, Blocksafespace is a community resource and not a legal authority. Our reports can be used as supporting evidence, but legal matters should be pursued through appropriate legal channels."
        },
        {
          question: "What should I do if I've been scammed?",
          answer: "First, document everything and submit a report to Blocksafespace. Then, report to relevant authorities such as the FBI's IC3, FTC, or your local law enforcement. Contact your exchange or wallet provider, and consider consulting with a lawyer specializing in cryptocurrency fraud."
        },
        {
          question: "Do you work with law enforcement?",
          answer: "Yes, we cooperate with law enforcement agencies investigating cryptocurrency fraud. We provide information as legally required and work to support efforts to bring scammers to justice."
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
          <HelpCircle className="h-4 w-4 text-primary" />
          <span className="text-sm text-primary font-medium">Help Center</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">Frequently Asked</span>{" "}
          <span className="text-foreground">Questions</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Everything you need to know about using Blocksafespace to protect yourself in the Web3 ecosystem.
        </p>
      </div>

      {/* FAQ Categories */}
      <div className="space-y-8 max-w-4xl mx-auto">
        {faqCategories.map((category, index) => (
          <Card key={index} className="bg-card/50 border-border backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <span>{category.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {category.faqs.map((faq, faqIndex) => (
                  <AccordionItem key={faqIndex} value={`${index}-${faqIndex}`} className="border-border">
                    <AccordionTrigger className="text-left hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-16 text-center">
        <Card className="bg-card/50 border-border backdrop-blur-sm max-w-2xl mx-auto">
          <CardContent className="pt-8 pb-8">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Reach out to our support team.
            </p>
            <a
              href="mailto:support@blocksafespace.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors glow-primary"
            >
              Contact Support
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQPage;
