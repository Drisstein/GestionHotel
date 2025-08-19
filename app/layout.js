// app/layout.js
import './globals.css'

export const metadata = {
  title: 'RED App',
  description: 'Application de gestion des hôtels',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
