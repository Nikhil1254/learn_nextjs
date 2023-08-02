'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import './main.css';

const Home = () => {
    const router = useRouter();

    const navigate = (route) => {
        router.push(route);
    }

    return <>
        <header>
            <h1>This is Home page</h1>
            <nav>
                <Link href="/about">Go to about page</Link><br /><br />
                <Link href="/login">Go to login page</Link> <br /> <br />
                <button onClick={() => navigate("/login")}>Go to login page</button>
                <button onClick={() => navigate("/about")}>Go to about page</button>
            </nav>
        </header>
    </>
};

export default Home;