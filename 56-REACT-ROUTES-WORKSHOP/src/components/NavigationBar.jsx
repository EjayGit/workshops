import { Link } from "react-router";

export default function NavigationBar(){
    return (
        <div className='navBar'>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
        </div>
    )
}