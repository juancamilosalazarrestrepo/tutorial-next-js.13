import "./globals.css"

import { Navigation } from "./components/Navigation.jsx";
import {font} from "./font"




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head /> <title>😶‍🌫️</title>
      <head />
      <body className={font.variable} >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
