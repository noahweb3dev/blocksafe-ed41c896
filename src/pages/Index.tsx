import { Link } from "react-router-dom";
import { Shield, Search, FileWarning, Users, ArrowRight, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SearchBar from "@/components/SearchBar";
import ReportCard from "@/components/ReportCard";
import { mockReports, stats } from "@/components/mockData";

const Index = () => {
  const recentReports = mockReports.slice(0, 4);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-8">
              <Shield className="h-4 w-4" />
              <span>Protecting the Web3 Community</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Report & Expose</span>
              <br />
              <span className="gradient-text">Blockchain Scams</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Search for malicious wallet addresses, report scams, and protect yourself 
              from crypto fraud across all major blockchains.
            </p>

            <SearchBar large className="mb-6" />

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button size="lg" className="glow-primary" asChild>
                <Link to="/report">
                  <FileWarning className="mr-2 h-5 w-5" />
                  Report a Scam
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/search">
                  <Search className="mr-2 h-5 w-5" />
                  Browse Reports
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary text-glow-primary">
                {stats.totalReports.toLocaleString()}
              </p>
              <p className="text-sm text-muted-foreground mt-1">Total Reports</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-destructive">
                {stats.verifiedScams.toLocaleString()}
              </p>
              <p className="text-sm text-muted-foreground mt-1">Verified Scams</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-success">
                {stats.protectedUsers.toLocaleString()}+
              </p>
              <p className="text-sm text-muted-foreground mt-1">Users Protected</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent text-glow-accent">
                {stats.chainsMonitored}
              </p>
              <p className="text-sm text-muted-foreground mt-1">Chains Monitored</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Reports */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Recent Reports
              </h2>
              <p className="text-muted-foreground mt-1">
                Latest scam reports from the community
              </p>
            </div>
            <Button variant="ghost" className="text-primary" asChild>
              <Link to="/search">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentReports.map((report) => (
              <ReportCard key={report.id} report={report} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-card/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Help protect the Web3 community in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card/50 border-border text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">1. Search</h3>
                <p className="text-sm text-muted-foreground">
                  Check if a wallet address or project has been reported as a scam
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="h-8 w-8 text-destructive" />
                </div>
                <h3 className="font-semibold text-lg mb-2">2. Report</h3>
                <p className="text-sm text-muted-foreground">
                  Submit detailed reports about scams you've encountered
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-success" />
                </div>
                <h3 className="font-semibold text-lg mb-2">3. Protect</h3>
                <p className="text-sm text-muted-foreground">
                  Help others avoid scams by sharing verified information
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative max-w-4xl mx-auto text-center p-12 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Encountered a Scam?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Your report could save thousands of users from losing their funds. 
                Help us build a safer Web3 ecosystem.
              </p>
              <Button size="lg" className="glow-primary" asChild>
                <Link to="/report">
                  <FileWarning className="mr-2 h-5 w-5" />
                  Submit a Report
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
