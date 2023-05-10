import Link from "next/link";

export default function Dashboard(){
    return (
        <main className="dashboard">
            <div>
                <div className="row">
                    <div className="col-4 border-end border-danger border-2">
                        <ul className="list-group">
                            <Link href="/" className="list-group-item text-bg-dark">Home</Link>
                            <li className="list-group-item text-bg-dark">A second item</li>
                            <li className="list-group-item text-bg-dark">A third item</li>
                            <li className="list-group-item text-bg-dark">A fourth item</li>
                            <li className="list-group-item text-bg-dark">And a fifth one</li>
                        </ul>
                    </div>
                    <div className="col-8">
                        <h1>Dashboard Page</h1>
                    </div>
                </div>
            </div>
        </main>
    )
}