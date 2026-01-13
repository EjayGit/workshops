import {Link, Outlet, useParams, useSearchParams} from 'react-router'

export default function UserPage(){
    const [searchParams] = useSearchParams();
    const sort = searchParams.get('sort');
    let {username} = useParams();
    
    return (
        <div>
            <hr />
            sort: {sort}
            <h2>User: {username}</h2>
            <Link to={`/users/${username}`}>User's Profile</Link>
            <Link to={`/users/${username}/posts`}>User's Posts</Link>
            <Link to={`/users/${username}/likes`}>User's likes</Link>
            <Outlet/>
        </div>
    )
}