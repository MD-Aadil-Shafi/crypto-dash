
export const tabsData = [
    {
        name:'Summary'
    },
    {
        name:'Chart'
    },
    // {
    //     name:'Setting'
    // },
    {
        name:'Statistics'
    },
    {
        name:'Analysis'
    },
    
]

export const chartTimeGaps = [
    {
        name:'1d'
    },
    {
        name:'3d'
    },
    {
        name:'1w'
    },
    {
        name:'1m'
    },
    {
        name:'6m'
    },
    {
        name:'1y'
    },
    {
        name:'max'
    }
]



export const privacyPolicyList = [
    {
      title: "1. Introduction",
      content: "Welcome to Digital Assets. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy or our practices with regards to your personal information, please contact us at contact@digitalassets.com"
    },
    {
      title: "2. Information We Collect",
      content: [
        "We collect personal information that you provide to us such as name, address, contact information, passwords and security data, and payment information.",
        "We also collect information automatically when you visit our website, including:",
        "• Usage Data (e.g., pages visited, time spent on pages)",
        "• Device Data (e.g., IP address, browser type)",
        "• Location Data"
      ]
    },
    {
      title: "3. How We Use Your Information",
      content: [
        "We use your information for purposes such as:",
        "• Providing, operating, and maintaining our website",
        "• Improving, personalizing, and expanding our website",
        "• Understanding and analyzing how you use our website",
        "• Developing new products, services, features, and functionality"
      ]
    },
    {
      title: "4. How We Share Your Information",
      content: [
        "We don't share our users data with any third party entity, except",
        "• Law enforcement or regulators for legal reasons if requested."
      ]
    },
    {
      title: "5. Your Rights",
      content: [
        "Depending on where you reside, you may have certain rights with respect to your information, such as:",
        "• Right to access",
        "• Right to rectification",
        "• Right to erasure",
        "• Right to restrict processing",
        "• Right to data portability"
      ]
    },
  ];


  interface Cryptocurrency {
    id: string;
    name: string;
    symbol: string;
    logoUrl: string;
  }
  
  export const popularCryptocurrencies: Cryptocurrency[] = [
    {
      id: "bitcoin",
      name: "Bitcoin",
      symbol: "BTC",
      logoUrl: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    },
    {
      id: "ethereum",
      name: "Ethereum",
      symbol: "ETH",
      logoUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    },
    {
      id: "tether",
      name: "Tether",
      symbol: "USDT",
      logoUrl: "https://cryptologos.cc/logos/tether-usdt-logo.png",
    },
    {
      id: "binancecoin",
      name: "Binance Coin",
      symbol: "BNB",
      logoUrl: "https://cryptologos.cc/logos/bnb-bnb-logo.png",
    },
    {
      id: "cardano",
      name: "Cardano",
      symbol: "ADA",
      logoUrl: "https://cryptologos.cc/logos/cardano-ada-logo.png",
    },
    {
      id: "ripple",
      name: "XRP",
      symbol: "XRP",
      logoUrl: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
    },
    {
      id: "solana",
      name: "Solana",
      symbol: "SOL",
      logoUrl: "https://cryptologos.cc/logos/solana-sol-logo.png",
    },
    {
      id: "polkadot",
      name: "Polkadot",
      symbol: "DOT",
      logoUrl: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png",
    },
    {
      id: "dogecoin",
      name: "Dogecoin",
      symbol: "DOGE",
      logoUrl: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
    },
    {
      id: "avalanche",
      name: "Avalanche",
      symbol: "AVAX",
      logoUrl: "https://cryptologos.cc/logos/avalanche-avax-logo.png",
    },
  ];
  