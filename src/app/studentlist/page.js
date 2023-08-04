import Link from "next/link";

const StudentList = () => {
    const studentlist = ["Nikhil", "Manjunath", "Kedar", "Rushikesh"];

    return <>
        <div style={{ padding: "2rem" }}>
            <h1>Student list</h1>
        </div>
        <ul style={{ padding: "2rem" }}>
            {
                studentlist.map((student, idx) => {
                    return <li key={idx}>
                        <Link href={`/studentlist/${student.toLowerCase()}`}>{student}</Link>
                    </li>
                })
            }
        </ul>
    </>
}

export default StudentList;