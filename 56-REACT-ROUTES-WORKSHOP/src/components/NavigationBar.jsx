import { Link } from "react-router";

export default function NavigationBar(){
    return (
        <div className='navBar'>
            <p><Link to={'/'}>Home</Link> |&nbsp;
            <Link to={'/about'}>About</Link> |&nbsp;
            <Link to={'/staff'}>Staff</Link></p>
        </div>
    )
}