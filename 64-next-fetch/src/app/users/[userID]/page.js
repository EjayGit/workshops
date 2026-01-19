export default async function UserIDPage({params}){
    const {userId} = params;
    const response = await fetch(`https://dummyjson.com/users/${userId}`);
    const data = await response.json();
    return(
        <>
            <h1>User ID Page</h1>
            <h2>{data.firstname} {data.lastname}</h2>
            <h3>{data.email}</h3>
            <img src={data.image}/>
        </>
    )
}