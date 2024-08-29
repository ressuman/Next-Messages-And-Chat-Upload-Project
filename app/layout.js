import Header from "@/components/header/header";
import "./globals.css";
import PropTypes from "prop-types";

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

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
