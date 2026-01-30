import { Badge } from "@/components/ui/badge";

const chains = [
  { name: "Ethereum", symbol: "ETH", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  { name: "BSC", symbol: "BNB", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
  { name: "Polygon", symbol: "MATIC", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
  { name: "Solana", symbol: "SOL", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
  { name: "Arbitrum", symbol: "ARB", color: "bg-blue-600/20 text-blue-300 border-blue-600/30" },
  { name: "Avalanche", symbol: "AVAX", color: "bg-red-500/20 text-red-400 border-red-500/30" },
];

interface ChainSelectorProps {
  selected: string[];
  onSelect: (chain: string) => void;
  multiple?: boolean;
}

const ChainSelector = ({ selected, onSelect, multiple = true }: ChainSelectorProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {chains.map((chain) => {
        const isSelected = selected.includes(chain.name);
        return (
          <button
            key={chain.name}
            type="button"
            onClick={() => onSelect(chain.name)}
            className="focus:outline-none focus:ring-2 focus:ring-primary rounded-full"
          >
            <Badge
              variant="outline"
              className={`cursor-pointer transition-all ${
                isSelected
                  ? `${chain.color} ring-2 ring-primary/50`
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {chain.name}
            </Badge>
          </button>
        );
      })}
    </div>
  );
};

export { chains };
export default ChainSelector;
