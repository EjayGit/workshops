// I want to render a list of users data
// Sort users into alphabetical order
// /users?sort=asc // /users?sort=desc
// in searchParams, we can have access to the query string key and value.

import Link from "next/link";

export default async function UserPage({searchParams}){
    const query = await searchParams;
    if(query.sort === 'desc'){
        users.sort((a, b) => {
            return b.firstname.localeCompare(a.firstname);
        });
    }else if(query.sort === 'asc'){
        users.sort((a,b) => {
        return a.firstname.localeCompare(b.firstName);
    })}
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    //const users = data.users;
    const {users} = data;
    console.log(data);
    return(
        <>
            <h1>UserPage</h1>
            <Link/>
            {
                users.map((item) => {
                    return(
                        <div key={item}>
                            <h2>{item.firstname} {item.lastname}</h2>
                        </div>
                    )
                })
            }
        </>
    )
}