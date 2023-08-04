'use client';
import { useEffect, useState } from "react"

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products/")
            .then((res) => res.json())
            .then((data) => setProducts(data.products))
            .catch((err) => {
                console.log("Something went wrong!")
            })
    },[])

    return <>
        <div>
            <h3>Product List -</h3>
            <ul>
                {
                    products.map((product, idx) => {
                        return <li key={idx}>{product.title}</li>
                    })
                }
            </ul>
        </div>
    </>
}