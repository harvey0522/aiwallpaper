import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s by FLUX AI IMAGE Generator | summernails.net",
    default: "FLUX AI IMAGE Generator | summernails.net",
  },
  description:
    "FLUX AI used to generate beautiful image with AI.",
  keywords:
    "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Toaster position="top-center" richColors />

          {children}

          <script
            async
            src="https://chatgpt-umami.vercel.app/script.js"
            data-website-id="def28550-20ea-49d8-9c1a-68dbfaba0134"
          ></script>
        </body>
      </html>
    </ClerkProvider>
  );
}
