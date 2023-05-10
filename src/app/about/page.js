import Link from "next/link";

export const metadata = {
    title: 'About Us - BEGOINGTO',
    description: 'welcome to Begoingto web application development.',
}

export default function Page(){
    return (
        <main className="max-w-screen-xl mx-auto">
            <div>
                <div className="d-flex justify-content-center p-3">
                    <button className="btn btn-sm btn-secondary rounded-pill"><i className="bi bi-brightness-low"></i></button>
                </div>
                <h1 className="text-uppercase fw-bold text-danger">Welcome to About Page</h1>
                <ul className="d-flex gap-4 list-unstyled justify-content-center">
                    <li><a href="#" className="text-decoration-none"><i className="bi bi-speedometer"></i> Dashboard</a>
                    </li>
                    <li><Link href="/" className="text-decoration-none"><i className="bi bi-house-lock"></i> Home</Link></li>
                    <li><a href="#" className="text-decoration-none">Product</a></li>
                    <li><a href="#" className="text-decoration-none">Category</a></li>
                    <li><Link href="#" className="text-decoration-none">About Us</Link></li>
                </ul>
            </div>
        </main>
    )
}