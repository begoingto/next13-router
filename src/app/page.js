import CardProduct from "@/components/CardProduct";


export const metadata = {
    title: 'Home',
};

export async function getData(){
    const res = await fetch("https://api.escuelajs.co/api/v1/products?limit=10&offset=1",{ cache: "no-store"})
    return await res.json()
}

export default async function Home() {
    const products = await getData();
    return (
        <>
            <main className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.map((product,i) =>  <CardProduct
                        key={i}
                        image={product.images[product.images.length-1]}
                        title={product.title}
                        id={product.id}
                    />)}
                </div>
            </main>
        </>
    )
}
