import Link from "next/link";
import './login.css';

export default function Layout({ children }) {

    return <>
        <nav>
            <h4>Login Menu</h4>
            <ul>
                <li><Link href="/login">Login</Link></li>
                <li><Link href="/login/loginstudent">Student login</Link></li>
                <li><Link href="/login/loginteacher">Teacher login</Link></li>
            </ul>
        </nav>
        <div className="container">
            {children}
        </div>
    </>
}