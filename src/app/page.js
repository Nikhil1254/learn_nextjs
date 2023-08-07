import Link from "next/link";

export default function HomePage() {

    return <>
        <h1>This is Home Page</h1>
        <Link href="/user">User Page</Link>
        <br /><br />
        <Link href='/product'>Product Page</Link>
    </>
}