import Header from "@/components/header/header";
import "./globals.css";

export const metadata = {
  title: "Messaging & Chat Upload App",
  description: "Explore messaging features and seamless chat uploads.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
