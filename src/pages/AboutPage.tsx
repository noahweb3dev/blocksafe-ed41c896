import { Shield, Users, Target, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <Shield className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary text-glow-primary">Blocksafespace</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're building a safer Web3 ecosystem by empowering the community 
            to identify and expose blockchain scams.
          </p>
        </div>

        {/* Mission */}
        <section className="mb-16">
          <Card className="bg-card/50 border-border overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Web3 space is filled with innovation and opportunity, but also with 
                bad actors who exploit newcomers and experienced users alike. Blocksafespace 
                was created to provide a trusted, community-driven database of reported scams, 
                fraudulent addresses, and malicious projects.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                By aggregating reports from users across the globe and verifying them through 
                our review process, we help protect individuals from losing their hard-earned 
                crypto assets to scammers.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card/50 border-border text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Community-Driven</h3>
                <p className="text-sm text-muted-foreground">
                  Our database is built by the community, for the community. Every report helps.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Accuracy First</h3>
                <p className="text-sm text-muted-foreground">
                  We verify reports before publishing to ensure reliability and prevent abuse.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-7 w-7 text-success" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Open Access</h3>
                <p className="text-sm text-muted-foreground">
                  Free to search, free to report. Protection should be accessible to everyone.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Chains */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-4 text-center">Supported Blockchains</h2>
          <p className="text-muted-foreground text-center mb-8">
            We monitor and accept reports for all major blockchain networks
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Ethereum", "BSC", "Polygon", "Solana", "Arbitrum", "Avalanche"].map((chain) => (
              <div
                key={chain}
                className="px-6 py-3 rounded-lg bg-card border border-border text-foreground font-medium"
              >
                {chain}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Join the Fight Against Crypto Fraud
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Every report makes Web3 safer. Whether you've been scammed or spotted 
            suspicious activity, your contribution matters.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
