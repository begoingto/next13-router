import Link from "next/link";
import NavbarComponent from "@/components/NavbarComponent";

export default function Home() {
    return (
        <>
            <main>
                <div>
                    <div className="d-flex justify-content-center p-3">
                        <button className="btn btn-sm btn-secondary rounded-pill"><i className="bi bi-brightness-low"></i></button>
                    </div>
                    <h1 className="text-uppercase fw-bold text-danger">Welcome to new NextJS 13.4</h1>
                    <ul className="d-flex gap-4 list-unstyled justify-content-center">
                        <li><Link href="/dashboard" className="text-decoration-none"><i className="bi bi-speedometer"></i> Dashboard</Link>
                        </li>
                        <li><Link href="/" className="text-decoration-none"><i className="bi bi-house-lock"></i> Home</Link></li>
                        <li><a href="#" className="text-decoration-none">Product</a></li>
                        <li><a href="#" className="text-decoration-none">Category</a></li>
                        <li><Link href="/about" className="text-decoration-none">About Us</Link></li>
                    </ul>
                </div>
            </main>
        </>
    )
}
