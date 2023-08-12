export default async function getUsers() {

    let streamData = await fetch("https://dummyjson.com/users");
    let data = await streamData.json();
    return data.users;
}

