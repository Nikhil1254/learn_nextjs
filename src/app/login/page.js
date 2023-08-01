'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
    const router = useRouter();

    const navigate = (page)=>{
        router.push(`/login/${page}`);
    }

    return <>
        <h1>This is login page.</h1>
        <Link href="/">Go to home page</Link><br /><br />
        <button onClick={()=>navigate("loginstudent")}>go to Student Login</button>
        <br /><br />
        <button onClick={()=>navigate("loginteacher")}>go to Teachers Login</button>
    </>
};

export default Login;