# Blocksafespace

A community-driven platform for reporting and exposing blockchain scams. Search for malicious wallet addresses, report scams, and protect yourself from crypto fraud across all major blockchains.

## 🚀 Features

- **Scam Database**: Search through verified scam reports across multiple blockchains
- **Report Submission**: Submit detailed scam reports with evidence
- **Recovery Dashboard**: Track fund recovery cases and manage withdrawals
- **Multi-Chain Support**: Ethereum, BSC, Polygon, Solana, Arbitrum, Avalanche, and more
- **Email Notifications**: Automated email notifications for scam reports via Resend

## 🛠️ Technologies

This project is built with:

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Supabase** - Backend database and authentication
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Resend** - Email delivery service
- **Lucide React** - Icon library

## 📋 Prerequisites

- Node.js 18+ and npm
- Supabase account and project
- Resend account (for email notifications)

## 🔧 Setup Instructions

### 1. Clone the Repository

```sh
git clone <YOUR_GIT_URL>
cd blocksafe-ed41c896
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Resend API Configuration
# Get your API key from https://resend.com/api-keys
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Email Configuration
# The email address that will receive scam reports
REPORT_RECIPIENT_EMAIL=your-email@example.com

# The "from" email address for Resend
# Must be a verified domain in your Resend account
# For testing, you can use onboarding@resend.dev
RESEND_FROM_EMAIL=noreply@yourdomain.com

# Site URL (optional, for metadata)
NEXT_PUBLIC_SITE_URL=https://blocksafespace.com
```

### 4. Supabase Setup

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Run the database migrations:

```sh
npm run db:push
```

Or manually apply the migrations from `supabase/migrations/` in your Supabase dashboard.

### 5. Resend Setup

1. Sign up at [resend.com](https://resend.com)
2. Create an API key in the dashboard
3. For testing, you can use `onboarding@resend.dev` as the `RESEND_FROM_EMAIL`
4. For production, verify your domain and use your domain email

### 6. Start Development Server

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
blocksafe-ed41c896/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes
│   ├── (public)/          # Public pages
│   │   ├── about/         # About page
│   │   ├── faq/           # FAQ page
│   │   ├── report/        # Report submission
│   │   ├── search/        # Search reports
│   │   └── ...            # Other public pages
│   ├── api/               # API routes
│   │   └── report/        # Report submission API
│   ├── dashboard/         # User dashboard
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── dashboard/         # Dashboard components
│   ├── ui/                # shadcn/ui components
│   └── ...                # Other components
├── lib/                   # Utility libraries
│   └── supabase/          # Supabase client config
├── supabase/              # Supabase configuration
│   └── migrations/        # Database migrations
└── public/                # Static assets
```

## 🗄️ Database Schema

The project uses Supabase with the following main tables:

- `recovery_cases` - Fund recovery case records
- `withdrawal_requests` - Withdrawal request records
- `case_documents` - Documents associated with cases
- `profiles` - User profile information
- `gas_fee_config` - Gas fee configuration for withdrawals

## 📧 Email Configuration

The report form sends emails via Resend when users submit scam reports. Configure the following:

- `RESEND_API_KEY`: Your Resend API key
- `REPORT_RECIPIENT_EMAIL`: Email address to receive reports
- `RESEND_FROM_EMAIL`: Verified sender email address

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The project can be deployed to any platform that supports Next.js:

```sh
npm run build
npm start
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run supabase` - Run Supabase CLI commands
- `npm run db:push` - Push database migrations to Supabase

## 🔒 Security Notes

- Never commit `.env.local` or any files containing API keys
- Use environment variables for all sensitive configuration
- Keep your Supabase keys secure
- Verify your Resend domain for production use

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is private and proprietary.

## 🆘 Support

For issues or questions, please contact support@blocksafespace.com
