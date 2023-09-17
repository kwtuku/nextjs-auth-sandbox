import Link from 'next/link'
import { UserProvider } from '@auth0/nextjs-auth0/client'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/profile-client">Profile Client</Link>
              </li>
              <li>
                <Link href="/profile-server">Profile Client</Link>
              </li>
              <li>
                <Link href="/logout">Logout</Link>
              </li>
            </ul>
          </nav>
          {children}
        </body>
      </UserProvider>
    </html>
  )
}
