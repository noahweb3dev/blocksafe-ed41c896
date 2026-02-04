"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Shield, 
  Wallet, 
  FileText, 
  Search, 
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createClient } from "@/lib/supabase/client";
import { useToast } from "@/hooks/use-toast";
import CasesList from "@/components/dashboard/CasesList";
import DocumentsList from "@/components/dashboard/DocumentsList";
import WithdrawalSection from "@/components/dashboard/WithdrawalSection";
import ProfileSection from "@/components/dashboard/ProfileSection";
import type { User } from "@supabase/supabase-js";
import type { Database } from "@/lib/supabase/types";

type RecoveryCase = Database["public"]["Tables"]["recovery_cases"]["Row"];
type WithdrawalRequest = Database["public"]["Tables"]["withdrawal_requests"]["Row"];

interface DashboardStats {
  totalCases: number;
  totalLost: number;
  totalRecovered: number;
  pendingWithdrawals: number;
  availableForWithdrawal: number;
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const { toast } = useToast();
  const router = useRouter();
  const [stats, setStats] = useState<DashboardStats>({
    totalCases: 0,
    totalLost: 0,
    totalRecovered: 0,
    pendingWithdrawals: 0,
    availableForWithdrawal: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();
    
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) {
        router.push("/login");
        return;
      }
      setUser(user);
      fetchDashboardStats(user.id);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session?.user) {
        router.push("/login");
      } else {
        setUser(session.user);
        fetchDashboardStats(session.user.id);
      }
    });

    return () => subscription.unsubscribe();
  }, [router]);

  const fetchDashboardStats = async (userId: string) => {
    try {
      const supabase = createClient();
      
      // Fetch recovery cases
      const { data: casesData, error: casesError } = await supabase
        .from("recovery_cases")
        .select("*")
        .eq("user_id", userId);

      if (casesError) throw casesError;

      const cases = (casesData || []) as RecoveryCase[];

      // Fetch pending withdrawals
      const { data: withdrawalsData, error: withdrawalsError } = await supabase
        .from("withdrawal_requests")
        .select("amount")
        .eq("user_id", userId)
        .eq("status", "pending");

      if (withdrawalsError) throw withdrawalsError;

      const withdrawals = (withdrawalsData || []) as Pick<WithdrawalRequest, "amount">[];

      const totalLost = cases.reduce((sum, c) => sum + Number(c.amount_lost), 0);
      const totalRecovered = cases.reduce((sum, c) => sum + Number(c.amount_recovered), 0);
      const pendingWithdrawals = withdrawals.reduce((sum, w) => sum + Number(w.amount), 0);
      
      // Calculate available for withdrawal (cases ready for withdrawal minus pending requests)
      const readyForWithdrawal = cases
        .filter(c => c.recovery_status === "ready_for_withdrawal")
        .reduce((sum, c) => sum + Number(c.amount_recovered), 0);

      setStats({
        totalCases: cases.length,
        totalLost,
        totalRecovered,
        pendingWithdrawals,
        availableForWithdrawal: readyForWithdrawal - pendingWithdrawals,
      });
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    toast({
      title: "Signed out",
      description: "You have been successfully signed out.",
    });
    router.push("/");
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const getRecoveryPercentage = () => {
    if (stats.totalLost === 0) return 0;
    return ((stats.totalRecovered / stats.totalLost) * 100).toFixed(1);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="h-8 w-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">
            <span className="text-primary text-glow-primary">Recovery</span>{" "}
            <span className="text-foreground">Dashboard</span>
          </h1>
          <p className="text-muted-foreground mt-1">
            Welcome back, {user?.email}
          </p>
        </div>
        <Button variant="outline" onClick={handleSignOut} className="gap-2">
          <LogOut className="h-4 w-4" />
          Sign Out
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Cases</p>
                <p className="text-2xl font-bold">{stats.totalCases}</p>
              </div>
              <div className="p-3 rounded-full bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Lost</p>
                <p className="text-2xl font-bold text-destructive">
                  {formatCurrency(stats.totalLost)}
                </p>
              </div>
              <div className="p-3 rounded-full bg-destructive/10">
                <Shield className="h-6 w-6 text-destructive" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Recovered</p>
                <p className="text-2xl font-bold text-green-500">
                  {formatCurrency(stats.totalRecovered)}
                </p>
                <p className="text-xs text-muted-foreground">
                  {getRecoveryPercentage()}% of total
                </p>
              </div>
              <div className="p-3 rounded-full bg-green-500/10">
                <Wallet className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/80 backdrop-blur-sm glow-primary">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Available to Withdraw</p>
                <p className="text-2xl font-bold text-primary">
                  {formatCurrency(stats.availableForWithdrawal)}
                </p>
              </div>
              <div className="p-3 rounded-full bg-primary/10">
                <Wallet className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="cases" className="space-y-6">
        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
          <TabsList className="bg-secondary/50 p-1 w-full md:w-auto min-w-max">
            <TabsTrigger value="cases" className="gap-1 md:gap-2 text-xs md:text-sm px-2 md:px-3">
              <FileText className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
              <span className="whitespace-nowrap">My Cases</span>
            </TabsTrigger>
            <TabsTrigger value="documents" className="gap-1 md:gap-2 text-xs md:text-sm px-2 md:px-3">
              <Search className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
              <span className="whitespace-nowrap">Documents</span>
            </TabsTrigger>
            <TabsTrigger value="withdraw" className="gap-1 md:gap-2 text-xs md:text-sm px-2 md:px-3">
              <Wallet className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
              <span className="whitespace-nowrap">Withdraw</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="gap-1 md:gap-2 text-xs md:text-sm px-2 md:px-3">
              <Shield className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
              <span className="whitespace-nowrap">Profile</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="cases">
          <CasesList onUpdate={() => user && fetchDashboardStats(user.id)} />
        </TabsContent>

        <TabsContent value="documents">
          <DocumentsList />
        </TabsContent>

        <TabsContent value="withdraw">
          <WithdrawalSection 
            availableBalance={stats.availableForWithdrawal}
            onWithdrawalSubmit={() => user && fetchDashboardStats(user.id)}
          />
        </TabsContent>

        <TabsContent value="profile">
          <ProfileSection />
        </TabsContent>
      </Tabs>
    </div>
  );
}
