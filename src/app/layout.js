import './globals.css'
import {Inter} from 'next/font/google'
// import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import NavbarComponent from "@/components/NavbarComponent";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Home - BEGOINGTO', description: 'welcome to Begoingto web application development.',
}

export default function RootLayout({children}) {
    return (<html lang="en">
        <body className={inter.className}>
            <NavbarComponent />
            {children}
        </body>
        </html>)
}
