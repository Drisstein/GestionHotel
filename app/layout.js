// app/layout.js
import './globals.css'

export const metadata = {
  title: 'Mon App',
  description: 'Une app Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
