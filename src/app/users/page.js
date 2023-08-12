import Link from "next/link";
import getUsers from "../../../services/getUsers";

export default async function Users() {

    let users = await getUsers();

    return <>
        <div>
            <h1>User List - </h1>
            {
                users.map((user) => (<h3 key={user.id}><Link href={`/users/${user.id}`}>{user.firstName}</Link></h3>))
            }
        </div>
    </>
}

