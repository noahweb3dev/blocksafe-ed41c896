import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FileText, Scale, Shield, AlertTriangle, Users, Globe, Gavel, Ban, CreditCard, MessageSquare, RefreshCw, Lock, Mail } from "lucide-react";

export default function TermsPage() {
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

          {/* Section 1 */}
          <section id="acceptance" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Scale className="h-6 w-6 text-primary" />
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground mb-4">
              These Terms of Service ("Terms," "Terms of Service," or "Agreement") constitute a legally binding agreement between you ("you," "your," or "User") and Blocksafespace ("Company," "we," "us," or "our") concerning your access to and use of the blocksafespace.com website, including any subdomains thereof, and any other websites through which we make our services available (collectively, the "Site"), as well as any applications, software, products, tools, features, and services offered through the Site (collectively with the Site, the "Platform").
            </p>
            <p className="text-muted-foreground">
              BY ACCESSING OR USING THE PLATFORM, BY CLICKING A BUTTON OR CHECKBOX TO ACCEPT OR AGREE TO THESE TERMS WHERE THAT OPTION IS MADE AVAILABLE TO YOU, OR BY OTHERWISE MANIFESTING ASSENT TO THESE TERMS, YOU: (1) ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTAND THESE TERMS; (2) REPRESENT AND WARRANT THAT YOU HAVE THE RIGHT, AUTHORITY, AND CAPACITY TO ENTER INTO THESE TERMS; AND (3) AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT AGREE TO THESE TERMS, YOU MAY NOT ACCESS OR USE THE PLATFORM.
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
}
