"use client";

import { useEffect, useState } from "react";
import { 
  FileText, 
  Clock, 
  CheckCircle2, 
  Search as SearchIcon,
  RefreshCcw,
  AlertTriangle,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";
import { Skeleton } from "@/components/ui/skeleton";

interface RecoveryCase {
  id: string;
  case_number: string;
  scam_type: string;
  chain: string;
  scammer_address: string;
  amount_lost: number;
  amount_recovered: number;
  recovery_status: string;
  description: string;
  status_notes: string;
  created_at: string;
  updated_at: string;
}

interface CasesListProps {
  onUpdate: () => void;
}

const recoveryStatusConfig: Record<string, { label: string; color: string; icon: React.ComponentType<any> }> = {
  investigation: { label: "Investigation", color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20", icon: SearchIcon },
  tracing: { label: "Tracing", color: "bg-blue-500/10 text-blue-500 border-blue-500/20", icon: RefreshCcw },
  recovery: { label: "Recovery", color: "bg-purple-500/10 text-purple-500 border-purple-500/20", icon: RefreshCcw },
  verification: { label: "Verification", color: "bg-orange-500/10 text-orange-500 border-orange-500/20", icon: Clock },
  ready_for_withdrawal: { label: "Ready for Withdrawal", color: "bg-green-500/10 text-green-500 border-green-500/20", icon: CheckCircle2 },
  withdrawn: { label: "Withdrawn", color: "bg-muted text-muted-foreground border-border", icon: CheckCircle2 },
};

const CasesList = ({ onUpdate }: CasesListProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [cases, setCases] = useState<RecoveryCase[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedCase, setExpandedCase] = useState<string | null>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      if (user) fetchCases(user.id);
    });
  }, []);

  const fetchCases = async (userId: string) => {
    const supabase = createClient();
    try {
      const { data, error } = await supabase
        .from("recovery_cases")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setCases(data || []);
    } catch (error) {
      console.error("Error fetching cases:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const getStatusProgress = (status: string): number => {
    const stages = ["investigation", "tracing", "recovery", "verification", "ready_for_withdrawal", "withdrawn"];
    const index = stages.indexOf(status);
    return ((index + 1) / stages.length) * 100;
  };

  if (loading) {
    return (
      <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-4 w-48" />
        </CardHeader>
        <CardContent className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-24 w-full" />
          ))}
        </CardContent>
      </Card>
    );
  }

  if (cases.length === 0) {
    return (
      <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
        <CardContent className="py-12 text-center">
          <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No Recovery Cases</h3>
          <p className="text-muted-foreground">
            You don't have any active recovery cases yet.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-primary" />
          Recovery Cases
        </CardTitle>
        <CardDescription>
          Track the status of your fund recovery cases
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {cases.map((caseItem) => {
          const statusConfig = recoveryStatusConfig[caseItem.recovery_status] || recoveryStatusConfig.investigation;
          const StatusIcon = statusConfig.icon;
          const isExpanded = expandedCase === caseItem.id;

          return (
            <div
              key={caseItem.id}
              className="border border-border/50 rounded-lg overflow-hidden bg-background/50 hover:border-primary/30 transition-colors"
            >
              <button
                onClick={() => setExpandedCase(isExpanded ? null : caseItem.id)}
                className="w-full p-4 text-left"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="font-mono text-xs">
                      {caseItem.case_number}
                    </Badge>
                    <Badge variant="outline">{caseItem.chain}</Badge>
                    <Badge variant="secondary">{caseItem.scam_type}</Badge>
                  </div>
                  <ChevronRight className={`h-5 w-5 text-muted-foreground transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge className={statusConfig.color}>
                      <StatusIcon className="h-3 w-3 mr-1" />
                      {statusConfig.label}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Recovered</p>
                    <p className="font-semibold text-green-500">
                      {formatCurrency(caseItem.amount_recovered)}
                      <span className="text-muted-foreground text-xs ml-1">
                        / {formatCurrency(caseItem.amount_lost)}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-3">
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-green-500 transition-all duration-500"
                      style={{ width: `${getStatusProgress(caseItem.recovery_status)}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                    <span>Investigation</span>
                    <span>Withdrawal</span>
                  </div>
                </div>
              </button>

              {/* Expanded Details */}
              {isExpanded && (
                <div className="border-t border-border/50 p-4 bg-secondary/20 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Scammer Address</p>
                      <div className="flex items-center gap-2">
                        <code className="text-sm bg-background px-2 py-1 rounded">
                          {truncateAddress(caseItem.scammer_address)}
                        </code>
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Date Reported</p>
                      <p className="text-sm">{formatDate(caseItem.created_at)}</p>
                    </div>
                  </div>

                  {caseItem.description && (
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Description</p>
                      <p className="text-sm">{caseItem.description}</p>
                    </div>
                  )}

                  {caseItem.status_notes && (
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                      <p className="text-xs text-primary mb-1 font-medium">Latest Update</p>
                      <p className="text-sm">{caseItem.status_notes}</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Updated: {formatDate(caseItem.updated_at)}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default CasesList;
