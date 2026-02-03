"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  large?: boolean;
  placeholder?: string;
  className?: string;
}

const SearchBar = ({ 
  large = false, 
  placeholder = "Search wallet address, transaction hash, or domain...",
  className = ""
}: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className={`relative ${className}`}>
      <div className={`relative flex items-center ${large ? "max-w-2xl" : "max-w-md"} mx-auto`}>
        <div className="relative flex-1">
          <Search className={`absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground ${large ? "h-5 w-5" : "h-4 w-4"}`} />
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className={`${large ? "pl-12 pr-4 py-6 text-lg" : "pl-10 pr-4 py-2"} bg-input border-border focus:border-primary focus:ring-primary/20 font-mono rounded-l-md rounded-r-none`}
          />
        </div>
        <Button 
          type="submit" 
          className={`rounded-l-none glow-primary ${large ? "py-6 px-8 text-lg" : ""}`}
        >
          Search
        </Button>
      </div>
      
      {large && (
        <p className="text-xs text-muted-foreground mt-3 text-center">
          Search across Ethereum, BSC, Polygon, Solana, Arbitrum, and Avalanche
        </p>
      )}
    </form>
  );
};

export default SearchBar;
