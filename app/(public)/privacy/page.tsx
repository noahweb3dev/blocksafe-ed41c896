import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Lock, Eye, Database, Globe, Users, FileText, AlertCircle, Settings, Mail } from "lucide-react";

export default function PrivacyPage() {
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
            <p className="text-muted-foreground">
              We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy. Any changes or modifications will be effective immediately upon posting the updated Privacy Policy on the Platform. You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Platform and Services after the date such revised Privacy Policy is posted.
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
}
