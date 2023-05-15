import React from 'react';


async function getProduct(id){
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
    return await res.json()
}

// export async function generateStaticParams(){
//     const products = await fetch("https://api.escuelajs.co/api/v1/products?limit=10&offset=0").then(res => res.json())
//     return products.map(product => ({
//         id: product.id.toString()
//     }))
// }


async function ProductDetail({params: { id }}) {
    const product = await getProduct(id)
    const image = product.images[product.images.length-1]
    const title= product.title
    console.log(product)
    return (
        <div className={"max-w-screen-xl mx-auto"}>
            <div className="mx-auto max-w-[500px]">
                <div className="flex flex-col iteclassNamenter border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-fuclassNameunded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                         src={image ? image : "https://bit.ly/44Oio4m"} alt="thumbnail" />
                    <div className="flex flex-col jusclassNamebetween p-4 leading-normal">
                        <h5 className="mb-2 text-2xl fonclassNamed tracking-tight dark:text-white">
                            {title ? title : "Default title product"}
                        </h5>
                        <p className="mb-3 font-normal classNamegray-700 dark:text-gray-400">
                            {product.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;