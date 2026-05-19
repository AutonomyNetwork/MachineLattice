import type { NextConfig } from "next";

// Node 25.6.0 has globalThis.localStorage enabled by default but incomplete when --localstorage-file is not configured.
// This mock/deletion ensures standard SSR library checks do not crash on typeof localStorage !== 'undefined'.
if (typeof globalThis !== 'undefined' && globalThis.localStorage && !globalThis.localStorage.getItem) {
  try {
    delete (globalThis as any).localStorage;
  } catch (e) {
    Object.defineProperty(globalThis, "localStorage", {
      value: {
        getItem: () => null,
        setItem: () => {},
        removeItem: () => {},
        clear: () => {},
        length: 0,
        key: () => null,
      },
      writable: true,
      configurable: true,
    });
  }
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    if (dev) {
      // Disable persistent filesystem caching to prevent concurrent/HMR conflicts on disk
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
