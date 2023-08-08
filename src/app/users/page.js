async function getUsers() {
    let streamData = await fetch("https://dummyjson.com/users");
    let data = await streamData.json();

    return data.users;
}

export default async function Users() {

    let users = await getUsers();

    return <>
        <div>
            <h1>Users List - </h1>
            <ul>
                {
                    users.map((user, idx) => (<li key={idx}>{user.firstName} {user.lastName}</li>))
                }
            </ul>
        </div>
    </>
}