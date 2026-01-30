import { useEffect, useState } from "react";
import { 
  Wallet, 
  Building2,
  Bitcoin,
  ArrowRight,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";

interface WithdrawalRequest {
  id: string;
  amount: number;
  withdrawal_method: string;
  status: string;
  created_at: string;
  processed_at: string | null;
  wallet_address?: string;
  bank_name?: string;
  admin_notes?: string;
}

interface EligibleCase {
  id: string;
  case_number: string;
  amount_recovered: number;
}

interface WithdrawalSectionProps {
  availableBalance: number;
  onWithdrawalSubmit: () => void;
}

const WithdrawalSection = ({ availableBalance, onWithdrawalSubmit }: WithdrawalSectionProps) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [withdrawalMethod, setWithdrawalMethod] = useState<"crypto" | "bank">("crypto");
  const [amount, setAmount] = useState("");
  const [selectedCase, setSelectedCase] = useState("");
  const [eligibleCases, setEligibleCases] = useState<EligibleCase[]>([]);
  const [withdrawalHistory, setWithdrawalHistory] = useState<WithdrawalRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Crypto fields
  const [walletAddress, setWalletAddress] = useState("");

  // Bank fields
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [routingNumber, setRoutingNumber] = useState("");
  const [swiftCode, setSwiftCode] = useState("");

  useEffect(() => {
    fetchData();
  }, [user]);

  const fetchData = async () => {
    if (!user) return;

    try {
      // Fetch eligible cases (ready for withdrawal)
      const { data: cases, error: casesError } = await supabase
        .from("recovery_cases")
        .select("id, case_number, amount_recovered")
        .eq("user_id", user.id)
        .eq("recovery_status", "ready_for_withdrawal");

      if (casesError) throw casesError;
      setEligibleCases(cases || []);

      // Fetch withdrawal history
      const { data: history, error: historyError } = await supabase
        .from("withdrawal_requests")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (historyError) throw historyError;
      setWithdrawalHistory(history || []);
    } catch (error) {
      console.error("Error fetching withdrawal data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !selectedCase) return;

    const withdrawalAmount = parseFloat(amount);
    if (isNaN(withdrawalAmount) || withdrawalAmount <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid withdrawal amount.",
        variant: "destructive",
      });
      return;
    }

    if (withdrawalAmount > availableBalance) {
      toast({
        title: "Insufficient balance",
        description: "The withdrawal amount exceeds your available balance.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);

    try {
      const { error } = await supabase
        .from("withdrawal_requests")
        .insert({
          user_id: user.id,
          case_id: selectedCase,
          amount: withdrawalAmount,
          withdrawal_method: withdrawalMethod,
          wallet_address: withdrawalMethod === "crypto" ? walletAddress : null,
          bank_name: withdrawalMethod === "bank" ? bankName : null,
          account_number: withdrawalMethod === "bank" ? accountNumber : null,
          account_name: withdrawalMethod === "bank" ? accountName : null,
          routing_number: withdrawalMethod === "bank" ? routingNumber : null,
          swift_code: withdrawalMethod === "bank" ? swiftCode : null,
        });

      if (error) throw error;

      toast({
        title: "Withdrawal request submitted",
        description: "Your withdrawal request has been submitted for processing.",
      });

      // Reset form
      setAmount("");
      setSelectedCase("");
      setWalletAddress("");
      setBankName("");
      setAccountNumber("");
      setAccountName("");
      setRoutingNumber("");
      setSwiftCode("");

      fetchData();
      onWithdrawalSubmit();
    } catch (error) {
      console.error("Error submitting withdrawal:", error);
      toast({
        title: "Error",
        description: "Failed to submit withdrawal request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
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

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
            <Clock className="h-3 w-3 mr-1" />
            Pending
          </Badge>
        );
      case "approved":
        return (
          <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            Approved
          </Badge>
        );
      case "processing":
        return (
          <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20">
            <Clock className="h-3 w-3 mr-1" />
            Processing
          </Badge>
        );
      case "completed":
        return (
          <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            Completed
          </Badge>
        );
      case "rejected":
        return (
          <Badge className="bg-destructive/10 text-destructive border-destructive/20">
            <XCircle className="h-3 w-3 mr-1" />
            Rejected
          </Badge>
        );
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <Skeleton className="h-6 w-32" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-48 w-full" />
          </CardContent>
        </Card>
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <Skeleton className="h-6 w-32" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-48 w-full" />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Withdrawal Form */}
      <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wallet className="h-5 w-5 text-primary" />
            Request Withdrawal
          </CardTitle>
          <CardDescription>
            Withdraw your recovered funds to your preferred account
          </CardDescription>
        </CardHeader>
        <CardContent>
          {availableBalance <= 0 ? (
            <div className="text-center py-8">
              <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Funds Available</h3>
              <p className="text-muted-foreground text-sm">
                You don't have any funds available for withdrawal yet.
                Check back when your recovery cases are ready.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Available Balance Display */}
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-sm text-muted-foreground">Available Balance</p>
                <p className="text-2xl font-bold text-primary">
                  {formatCurrency(availableBalance)}
                </p>
              </div>

              {/* Case Selection */}
              <div className="space-y-2">
                <Label>Select Case</Label>
                <Select value={selectedCase} onValueChange={setSelectedCase}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a case" />
                  </SelectTrigger>
                  <SelectContent>
                    {eligibleCases.map((c) => (
                      <SelectItem key={c.id} value={c.id}>
                        {c.case_number} - {formatCurrency(c.amount_recovered)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Amount */}
              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <Input
                  id="amount"
                  type="number"
                  step="0.01"
                  min="0"
                  max={availableBalance}
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-background/50"
                  required
                />
              </div>

              {/* Withdrawal Method */}
              <div className="space-y-3">
                <Label>Withdrawal Method</Label>
                <RadioGroup
                  value={withdrawalMethod}
                  onValueChange={(v) => setWithdrawalMethod(v as "crypto" | "bank")}
                  className="grid grid-cols-2 gap-4"
                >
                  <Label
                    htmlFor="crypto"
                    className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-colors ${
                      withdrawalMethod === "crypto"
                        ? "border-primary bg-primary/5"
                        : "border-border/50 hover:border-primary/30"
                    }`}
                  >
                    <RadioGroupItem value="crypto" id="crypto" />
                    <Bitcoin className="h-5 w-5 text-primary" />
                    <span>Crypto Wallet</span>
                  </Label>
                  <Label
                    htmlFor="bank"
                    className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-colors ${
                      withdrawalMethod === "bank"
                        ? "border-primary bg-primary/5"
                        : "border-border/50 hover:border-primary/30"
                    }`}
                  >
                    <RadioGroupItem value="bank" id="bank" />
                    <Building2 className="h-5 w-5 text-primary" />
                    <span>Bank Transfer</span>
                  </Label>
                </RadioGroup>
              </div>

              {/* Crypto Fields */}
              {withdrawalMethod === "crypto" && (
                <div className="space-y-2">
                  <Label htmlFor="wallet">Wallet Address</Label>
                  <Input
                    id="wallet"
                    placeholder="Enter your crypto wallet address"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    className="bg-background/50 font-mono text-sm"
                    required
                  />
                </div>
              )}

              {/* Bank Fields */}
              {withdrawalMethod === "bank" && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="bankName">Bank Name</Label>
                    <Input
                      id="bankName"
                      placeholder="Enter bank name"
                      value={bankName}
                      onChange={(e) => setBankName(e.target.value)}
                      className="bg-background/50"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="accountName">Account Holder Name</Label>
                    <Input
                      id="accountName"
                      placeholder="Enter account holder name"
                      value={accountName}
                      onChange={(e) => setAccountName(e.target.value)}
                      className="bg-background/50"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="accountNumber">Account Number</Label>
                      <Input
                        id="accountNumber"
                        placeholder="Account number"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        className="bg-background/50"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="routing">Routing Number</Label>
                      <Input
                        id="routing"
                        placeholder="Routing number"
                        value={routingNumber}
                        onChange={(e) => setRoutingNumber(e.target.value)}
                        className="bg-background/50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="swift">SWIFT/BIC Code (International)</Label>
                    <Input
                      id="swift"
                      placeholder="For international transfers"
                      value={swiftCode}
                      onChange={(e) => setSwiftCode(e.target.value)}
                      className="bg-background/50"
                    />
                  </div>
                </div>
              )}

              <Button
                type="submit"
                className="w-full glow-primary gap-2"
                disabled={submitting || !selectedCase}
              >
                {submitting ? (
                  <>
                    <div className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Request Withdrawal
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>

      {/* Withdrawal History */}
      <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Withdrawal History
          </CardTitle>
          <CardDescription>
            Track the status of your withdrawal requests
          </CardDescription>
        </CardHeader>
        <CardContent>
          {withdrawalHistory.length === 0 ? (
            <div className="text-center py-8">
              <Wallet className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Withdrawals Yet</h3>
              <p className="text-muted-foreground text-sm">
                Your withdrawal history will appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {withdrawalHistory.map((withdrawal) => (
                <div
                  key={withdrawal.id}
                  className="p-4 border border-border/50 rounded-lg bg-background/50"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">
                      {formatCurrency(withdrawal.amount)}
                    </span>
                    {getStatusBadge(withdrawal.status)}
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      {withdrawal.withdrawal_method === "crypto" ? (
                        <Bitcoin className="h-4 w-4" />
                      ) : (
                        <Building2 className="h-4 w-4" />
                      )}
                      {withdrawal.withdrawal_method === "crypto"
                        ? "Crypto"
                        : "Bank Transfer"}
                    </span>
                    <span>{formatDate(withdrawal.created_at)}</span>
                  </div>
                  {withdrawal.admin_notes && (
                    <div className="mt-2 p-2 rounded bg-secondary/50 text-sm">
                      <p className="text-xs text-muted-foreground">Note:</p>
                      <p>{withdrawal.admin_notes}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default WithdrawalSection;
