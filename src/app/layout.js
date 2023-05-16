import './globals.css'
import {Inter} from 'next/font/google'
// import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import NavbarComponent from "@/components/NavbarComponent";
import Footer from "@/components/Footer";
import {Suspense} from "react";
import Loading from "@/app/loading";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: {
        template:'%s - BEGOINGTO'
    },
    description: 'welcome to Begoingto web application development.',
}

export default function RootLayout({children}) {
    return (<html lang="en">
        <body className={inter.className + " bg-gray-900 text-white"}>
            <NavbarComponent />
            <Suspense fallback={<Loading />}>
                {children}
            </Suspense>
            <Footer />
        </body>
        </html>)
}
