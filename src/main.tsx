import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import HLogo from "@/assets/H_logo.png";

// Ensure the browser tab favicon uses the provided logo.
// Browsers cache favicons aggressively, so you may need a hard refresh.
const upsertFavicon = (href: string) => {
  // Try to find any existing favicon link (some setups use rel="icon" and others use shortcut icon).
  const existing = (document.querySelector(
    "link[rel*='icon']",
  ) ||
    document.querySelector("link[rel='shortcut icon']")) as HTMLLinkElement | null;

  if (existing) {
    existing.href = href;
    return;
  }

  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/png";
  link.href = href;
  document.head.appendChild(link);
};

upsertFavicon(HLogo);

createRoot(document.getElementById("root")!).render(<App />);
