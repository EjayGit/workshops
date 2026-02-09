import {useContext} from 'react';
import {UserContext} from './UserContext';

export function UserPage(){
    let {username} = useContext(UserContext);
    return (
        <>
            <h2>User ID: {username}</h2>;
            <button conCLick={() => setUsername('spongebob')}>Change name to spongebob</button>
        </>
    )
}