import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Copy, 
  ExternalLink,
  Flag,
  Share2,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { mockReports } from "@/components/mockData";
import { toast } from "@/hooks/use-toast";

const chainColors: Record<string, string> = {
  ethereum: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  bsc: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  polygon: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  solana: "bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent border-purple-500/30 bg-purple-500/20",
  arbitrum: "bg-blue-600/20 text-blue-300 border-blue-600/30",
  avalanche: "bg-red-500/20 text-red-400 border-red-500/30",
};

const statusConfig = {
  pending: {
    icon: Clock,
    className: "bg-warning/20 text-warning border-warning/30",
    label: "Pending Review",
    description: "This report is awaiting verification by our team.",
  },
  verified: {
    icon: CheckCircle,
    className: "bg-success/20 text-success border-success/30",
    label: "Verified Scam",
    description: "This address has been confirmed as malicious by our verification team.",
  },
  investigating: {
    icon: AlertTriangle,
    className: "bg-accent/20 text-accent border-accent/30",
    label: "Under Investigation",
    description: "Our team is actively investigating this report.",
  },
};

const ReportDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const report = mockReports.find((r) => r.id === id);

  if (!report) {
    return (
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="h-10 w-10 text-muted-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-4">Report Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The report you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/search">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Search
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const status = statusConfig[report.status];
  const StatusIcon = status.icon;

  const copyAddress = () => {
    navigator.clipboard.writeText(report.address);
    toast({
      title: "Address Copied",
      description: "The wallet address has been copied to your clipboard.",
    });
  };

  const shareReport = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied",
      description: "Report link has been copied to your clipboard.",
    });
  };

  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/search">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Search
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header Card */}
            <Card className="bg-card/50 border-border overflow-hidden">
              <div className={`h-1 ${report.status === 'verified' ? 'bg-destructive' : report.status === 'investigating' ? 'bg-accent' : 'bg-warning'}`} />
              <CardHeader>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <Badge variant="outline" className={chainColors[report.chain.toLowerCase()] || "bg-secondary"}>
                    {report.chain}
                  </Badge>
                  <Badge variant="outline" className="bg-destructive/20 text-destructive border-destructive/30">
                    {report.scamType}
                  </Badge>
                  <Badge variant="outline" className={status.className}>
                    <StatusIcon className="h-3 w-3 mr-1" />
                    {status.label}
                  </Badge>
                </div>
                <CardTitle className="text-xl md:text-2xl">
                  Reported {report.scamType} on {report.chain}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Address */}
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Reported Address</p>
                    <div className="flex items-center gap-2">
                      <code className="flex-1 text-sm md:text-base font-mono text-primary bg-primary/10 px-3 py-2 rounded break-all">
                        {report.address}
                      </code>
                      <Button variant="outline" size="icon" onClick={copyAddress}>
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  {/* Description */}
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Description</p>
                    <p className="text-foreground leading-relaxed">
                      {report.description}
                    </p>
                  </div>

                  <Separator />

                  {/* Meta Info */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">First Reported</p>
                      <p className="text-foreground font-medium">
                        {new Date(report.reportedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total Reports</p>
                      <p className="text-destructive font-bold text-xl">
                        {report.reportCount}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Status Card */}
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Shield className="h-5 w-5 text-primary" />
                  Verification Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`p-4 rounded-lg border ${status.className}`}>
                  <div className="flex items-center gap-3">
                    <StatusIcon className="h-6 w-6" />
                    <div>
                      <p className="font-semibold">{status.label}</p>
                      <p className="text-sm opacity-80">{status.description}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Warning Card */}
            {report.status === 'verified' && (
              <Card className="bg-destructive/10 border-destructive/30">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="h-6 w-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-bold text-destructive mb-2">⚠️ Confirmed Scam Address</h3>
                      <p className="text-muted-foreground text-sm">
                        This address has been verified as malicious. Do not send any funds to this address 
                        or interact with any smart contracts associated with it. If you've been affected, 
                        please report to local authorities and relevant blockchain security teams.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Actions Card */}
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-lg">Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="outline" onClick={shareReport}>
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Report
                </Button>
                <Button className="w-full" variant="outline" asChild>
                  <a 
                    href={`https://etherscan.io/address/${report.address}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View on Explorer
                  </a>
                </Button>
                <Button className="w-full glow-primary" asChild>
                  <Link to="/report">
                    <Flag className="mr-2 h-4 w-4" />
                    Submit Another Report
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Safety Tips Card */}
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Safety Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    Always verify addresses before sending funds
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    Never share your private keys or seed phrases
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    Be wary of unsolicited DMs and "support" contacts
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    Research projects thoroughly before investing
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Related Reports Placeholder */}
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-lg">Related Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  No related reports found for this address.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportDetailPage;
