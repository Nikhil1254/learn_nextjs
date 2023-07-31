'use client'
import { useRouter } from 'next/navigation';

const About = () => {
    const router = useRouter();

    return <>
        <h1>This is About page.</h1>
        <br />
        <button onClick={() => router.push("/")}>Go to home page</button>
    </>
}

export default About;