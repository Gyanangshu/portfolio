import { Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-toggle";
import Layout from "@/components/Layout";
import Script from "next/script";

// const bebasNeue = Bebas_Neue({
//   variable: "--font-bebas-neue",
//   weight: ["400"],
//   subsets: ["latin"],
// });

const urbanistBody = Urbanist({
  variable: "--font-urbanistBody",
  subsets: ["latin"],
});

export const metadata = {
  title: "GM - Portfolio",
  description: "Personal portfolio of Gyanangshu Misra",
};

// max-w-(--screen-width) mx-auto md:px-(--padding-large-screen) px-(--padding-small-screen)

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${urbanistBody.variable} antialiased`}
      >
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "txn7gqfrpp");
          `}
        </Script>
        <ThemeProvider attribute="class" enableSystem defaultTheme="system" disableTransitionOnChange>
          <Layout>
            {children}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
