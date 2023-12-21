import { Chain } from "@rainbow-me/rainbowkit";

export const Fhenix: Chain = {
  id: 5_432,
  name: "Fhenix DevNet",
  network: "Fhenix DevNet",
  iconUrl:
    "https://www.fhenix.io/wp-content/uploads/2023/12/Group-963.png",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "Fhenix DevNet",
    symbol: "tFHE",
  },
  rpcUrls: {
    public: { http: ["https://fhenode.fhenix.io/new/evm/"] },
    default: { http: ["https://fhenode.fhenix.io/new/evm/"] },
  },
  blockExplorers: {
    default: { name: "Fhenix", url: "https://demoexplorer.fhenix.io/" },
    etherscan: { name: "Fhenix", url: "https://demoexplorer.fhenix.io/" },
  },
  testnet: true,
};
