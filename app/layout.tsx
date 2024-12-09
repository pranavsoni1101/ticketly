import { Inter } from "next/font/google"
import Provider from "./provider"
import Layout from "./components/Layout"
import { ColorModeProvider } from "../components/ui/color-mode"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={inter.className} suppressHydrationWarning>
      <head />
      <body>
        <Provider>
          <Layout>
            <ColorModeProvider>
              {children}
            </ColorModeProvider>
          </Layout>
        </Provider>
      </body>
    </html>
  )
}