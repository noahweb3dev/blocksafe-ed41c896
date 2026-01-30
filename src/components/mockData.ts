import { ScamReport } from "./ReportCard";

// Mock data for demonstration
export const mockReports: ScamReport[] = [
  {
    id: "1",
    address: "0x742d35Cc6634C0532925a3b844Bc9e7595f21547",
    chain: "Ethereum",
    scamType: "Phishing",
    description: "Fake Uniswap website draining wallets through malicious token approvals. Multiple users reported losing funds after connecting their wallets.",
    reportedAt: "2024-01-15T10:30:00Z",
    status: "verified",
    reportCount: 47,
  },
  {
    id: "2",
    address: "0xdead000000000000000000000000000000000000",
    chain: "BSC",
    scamType: "Rug Pull",
    description: "Token project promised 1000x returns but developers dumped all tokens and disappeared with $2M in investor funds.",
    reportedAt: "2024-01-14T15:45:00Z",
    status: "investigating",
    reportCount: 23,
  },
  {
    id: "3",
    address: "9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM",
    chain: "Solana",
    scamType: "Fake Airdrop",
    description: "Impersonating official Solana airdrop, stealing SOL through malicious transactions when users try to claim fake tokens.",
    reportedAt: "2024-01-13T08:20:00Z",
    status: "verified",
    reportCount: 89,
  },
  {
    id: "4",
    address: "0x1234567890abcdef1234567890abcdef12345678",
    chain: "Polygon",
    scamType: "Ponzi Scheme",
    description: "Staking platform offering unsustainable 500% APY. New deposits used to pay old investors. Classic pyramid structure.",
    reportedAt: "2024-01-12T22:10:00Z",
    status: "pending",
    reportCount: 12,
  },
  {
    id: "5",
    address: "0xabcd1234abcd1234abcd1234abcd1234abcd1234",
    chain: "Arbitrum",
    scamType: "Phishing",
    description: "Discord DM scam impersonating support staff. Directs users to fake website that steals private keys.",
    reportedAt: "2024-01-11T14:00:00Z",
    status: "verified",
    reportCount: 156,
  },
  {
    id: "6",
    address: "0x9876fedc9876fedc9876fedc9876fedc9876fedc",
    chain: "Avalanche",
    scamType: "Fake NFT",
    description: "Counterfeit NFT collection pretending to be official BAYC derivatives. Taking payments and delivering worthless tokens.",
    reportedAt: "2024-01-10T11:30:00Z",
    status: "investigating",
    reportCount: 34,
  },
];

export const scamTypes = [
  "Phishing",
  "Rug Pull",
  "Fake Airdrop",
  "Ponzi Scheme",
  "Fake NFT",
  "Impersonation",
  "Honeypot",
  "Pump & Dump",
  "Other",
];

export const stats = {
  totalReports: 15423,
  verifiedScams: 8934,
  protectedUsers: 125000,
  chainsMonitored: 6,
};
