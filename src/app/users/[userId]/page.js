import getUsers from "../../../../services/getUsers";

export default async function UserDetails(props){
    console.log(props);

    let users = await getUsers();
    let user = users[props.params.userId-1];

    return <>
        <h1>User Details -</h1>
        <ul>
            <li>name : {user.firstName}</li>
            <li>age : {user.age}</li>
            <li>gender : {user.gender}</li>
            <li>phone : {user.phone}</li>
        </ul>
    </>
}

// generateStaticParams is used for dynamic routes for SSG.
export async function generateStaticParams(){
    const users = await getUsers();
    
    return users.map(user=>({
        userId: user.id.toString()
    }))
}