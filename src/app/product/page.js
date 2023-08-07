export default function Product(){

    return <>
        <h1>Product Page</h1>
    </>
}

export function generateMetadata(){
    return {
        title : "Product Page",
        description : "Product page description"
    }
}

// correct way to change metadata dynamically