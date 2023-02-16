import "./globals.css"
import { Navigation } from "./components/Navigation.jsx";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head /> <title>😶‍🌫️</title>
      <head />
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
