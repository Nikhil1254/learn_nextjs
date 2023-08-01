'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const About = () => {
    const router = useRouter();

    return <>
        <h1>This is About page.</h1>
        <br />
        <button onClick={() => router.push("/")}>Go to home page</button>
        <br /><br />
        <Link href="/about/aboutcollege">go to About College page</Link>
        <br /><br />
        <Link href="/about/aboutstudent">go to About Student page</Link>
    </>
}

export default About;