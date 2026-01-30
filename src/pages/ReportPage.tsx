import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertTriangle, Send, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import ChainSelector from "@/components/ChainSelector";
import { scamTypes } from "@/components/mockData";
import { toast } from "sonner";

const ReportPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    address: "",
    chain: [] as string[],
    scamType: "",
    description: "",
    evidence: "",
    contactEmail: "",
    agreeToTerms: false,
  });

  const handleChainSelect = (chain: string) => {
    setFormData((prev) => ({
      ...prev,
      chain: prev.chain.includes(chain)
        ? prev.chain.filter((c) => c !== chain)
        : [chain], // Single selection for reports
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.address || !formData.chain.length || !formData.scamType || !formData.description) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (!formData.agreeToTerms) {
      toast.error("Please agree to the terms before submitting");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Report submitted successfully!", {
      description: "Thank you for helping protect the Web3 community.",
    });
    
    navigate("/search");
  };

  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 mb-4">
            <AlertTriangle className="h-8 w-8 text-destructive" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Report a Scam
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Help protect others by reporting fraudulent wallet addresses, fake projects, 
            or any scam activity you've encountered in the Web3 space.
          </p>
        </div>

        {/* Info Alert */}
        <Alert className="mb-8 border-primary/30 bg-primary/5">
          <Info className="h-4 w-4 text-primary" />
          <AlertDescription className="text-muted-foreground">
            All reports are reviewed by our team before being published. 
            Please provide as much detail as possible to help with verification.
          </AlertDescription>
        </Alert>

        {/* Report Form */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Scam Report Form</CardTitle>
            <CardDescription>
              Fields marked with * are required
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Wallet Address */}
              <div className="space-y-2">
                <Label htmlFor="address">Wallet Address / Contract Address *</Label>
                <Input
                  id="address"
                  placeholder="0x... or Solana address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="font-mono bg-input border-border"
                />
              </div>

              {/* Blockchain */}
              <div className="space-y-2">
                <Label>Blockchain Network *</Label>
                <ChainSelector
                  selected={formData.chain}
                  onSelect={handleChainSelect}
                  multiple={false}
                />
              </div>

              {/* Scam Type */}
              <div className="space-y-2">
                <Label htmlFor="scamType">Type of Scam *</Label>
                <Select
                  value={formData.scamType}
                  onValueChange={(value) => setFormData({ ...formData, scamType: value })}
                >
                  <SelectTrigger className="bg-input border-border">
                    <SelectValue placeholder="Select scam type" />
                  </SelectTrigger>
                  <SelectContent>
                    {scamTypes.map((type) => (
                      <SelectItem key={type} value={type.toLowerCase()}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe what happened, how the scam works, and any other relevant details..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="min-h-[150px] bg-input border-border"
                />
              </div>

              {/* Evidence */}
              <div className="space-y-2">
                <Label htmlFor="evidence">Evidence Links (optional)</Label>
                <Textarea
                  id="evidence"
                  placeholder="Paste links to transaction hashes, screenshots, or other evidence (one per line)"
                  value={formData.evidence}
                  onChange={(e) => setFormData({ ...formData, evidence: e.target.value })}
                  className="min-h-[100px] bg-input border-border font-mono text-sm"
                />
              </div>

              {/* Contact Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Contact Email (optional)</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.contactEmail}
                  onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                  className="bg-input border-border"
                />
                <p className="text-xs text-muted-foreground">
                  We may contact you if we need additional information about this report.
                </p>
              </div>

              {/* Terms Agreement */}
              <div className="flex items-start gap-3 pt-4 border-t border-border">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, agreeToTerms: checked as boolean })
                  }
                />
                <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                  I confirm that this report is accurate to the best of my knowledge. 
                  I understand that false reports may result in account restrictions.
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full glow-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Submitting...</>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Submit Report
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReportPage;
