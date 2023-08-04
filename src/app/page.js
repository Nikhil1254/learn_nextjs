import Link from "next/link";

export default function HomePage() {

    return <>
        <h1>This is Home Page</h1>
        <Link href="/productlist">go to productlist</Link>
    </>
}