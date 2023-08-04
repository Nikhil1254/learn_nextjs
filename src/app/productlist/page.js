import Button from "./button";

async function getData() {
    let streamData = await fetch("https://dummyjson.com/products");
    let data = await streamData.json();
    return data.products;
}

export default async function ProductList() {
    let products = await getData();
    return <>
        <div>
            <h3>Product list -</h3>
            <ul>
                {
                    products.map((product, idx) => {
                        return <>
                            <li key={idx}>{product.title}</li>
                            <Button title={product.title} price={product.price} />
                            <br />
                        </>
                    })
                }
            </ul>
        </div>
    </>
}