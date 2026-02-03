import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AlertTriangle, ExternalLink, Clock, CheckCircle } from "lucide-react";

export interface ScamReport {
  id: string;
  address: string;
  chain: string;
  scamType: string;
  description: string;
  reportedAt: string;
  status: "pending" | "verified" | "investigating";
  reportCount: number;
}

interface ReportCardProps {
  report: ScamReport;
}

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
  },
  verified: {
    icon: CheckCircle,
    className: "bg-success/20 text-success border-success/30",
    label: "Verified",
  },
  investigating: {
    icon: AlertTriangle,
    className: "bg-accent/20 text-accent border-accent/30",
    label: "Investigating",
  },
};

const ReportCard = ({ report }: ReportCardProps) => {
  const status = statusConfig[report.status];
  const StatusIcon = status.icon;

  const truncateAddress = (addr: string) => {
    if (addr.length <= 16) return addr;
    return `${addr.slice(0, 8)}...${addr.slice(-6)}`;
  };

  return (
    <Link href={`/report/${report.id}`}>
      <Card className="group border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card/80 transition-all duration-300 cursor-pointer overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <CardHeader className="pb-3 relative">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="outline" className={chainColors[report.chain.toLowerCase()] || "bg-secondary"}>
                {report.chain}
              </Badge>
              <Badge variant="outline" className="bg-destructive/20 text-destructive border-destructive/30">
                {report.scamType}
              </Badge>
            </div>
            <Badge variant="outline" className={status.className}>
              <StatusIcon className="h-3 w-3 mr-1" />
              {status.label}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="relative">
          <div className="space-y-3">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Reported Address</p>
              <code className="text-sm font-mono text-primary bg-primary/10 px-2 py-1 rounded block truncate">
                {truncateAddress(report.address)}
              </code>
            </div>

            <p className="text-sm text-muted-foreground line-clamp-2">
              {report.description}
            </p>

            <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border">
              <span className="flex items-center gap-1">
                <AlertTriangle className="h-3 w-3 text-destructive" />
                {report.reportCount} report{report.reportCount !== 1 ? "s" : ""}
              </span>
              <span>{new Date(report.reportedAt).toLocaleDateString()}</span>
            </div>
          </div>

          <ExternalLink className="absolute bottom-4 right-4 h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </CardContent>
      </Card>
    </Link>
  );
};

export default ReportCard;
