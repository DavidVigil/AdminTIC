import AppBarGlobal from "@/components/appbar-global";
import Footer from "@/components/footer";
import { theme } from "@/styles/global-theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import localFont from "next/font/local";
//import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* To add the bar navigator */}
          <AppBarGlobal/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}