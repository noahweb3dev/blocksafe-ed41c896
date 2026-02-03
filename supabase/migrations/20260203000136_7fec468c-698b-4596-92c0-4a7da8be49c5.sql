-- Create table for gas fee configuration (admin managed)
CREATE TABLE public.gas_fee_config (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  network TEXT NOT NULL UNIQUE,
  gas_fee_amount NUMERIC NOT NULL DEFAULT 0,
  wallet_address TEXT NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.gas_fee_config ENABLE ROW LEVEL SECURITY;

-- Allow all authenticated users to read gas fee config
CREATE POLICY "Anyone can view gas fee config" 
ON public.gas_fee_config 
FOR SELECT 
USING (true);

-- Add trigger for updated_at
CREATE TRIGGER update_gas_fee_config_updated_at
BEFORE UPDATE ON public.gas_fee_config
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default networks (admin will update amounts/wallets via Supabase)
INSERT INTO public.gas_fee_config (network, gas_fee_amount, wallet_address) VALUES
  ('ethereum', 0, '0x0000000000000000000000000000000000000000'),
  ('bitcoin', 0, '0x0000000000000000000000000000000000000000'),
  ('bsc', 0, '0x0000000000000000000000000000000000000000'),
  ('polygon', 0, '0x0000000000000000000000000000000000000000'),
  ('solana', 0, '0x0000000000000000000000000000000000000000'),
  ('tron', 0, '0x0000000000000000000000000000000000000000'),
  ('avalanche', 0, '0x0000000000000000000000000000000000000000'),
  ('arbitrum', 0, '0x0000000000000000000000000000000000000000');

-- Add gas_fee_paid field to withdrawal_requests to track if user paid the gas fee
ALTER TABLE public.withdrawal_requests 
ADD COLUMN gas_fee_paid BOOLEAN DEFAULT false,
ADD COLUMN gas_fee_network TEXT,
ADD COLUMN gas_fee_amount NUMERIC;