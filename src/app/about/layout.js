import Link from "next/link";
import './about.css';

export default function Layout({ children }) {

    return <div>
        <nav className="navbar">
            <h4>About Menu</h4>
            <ul>
                <Link href="/about">
                    <li>About</li>
                </Link>
                <Link href="/about/aboutstudent">
                    <li>About Student</li>
                </Link>
                <Link href="/about/aboutcollege">
                    <li>About College</li>
                </Link>
            </ul>
        </nav>
        <div className="container">
            {
                children
            }
        </div>
    </div>
}