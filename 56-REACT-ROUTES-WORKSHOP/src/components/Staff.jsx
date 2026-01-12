import {Outlet} from 'react-router'

export default function Staff(){
return(
        <>
            <h1>Staff List</h1>
            {/* We use Outlet whenever we are rendering a component in a nested route */}
            {/* Here Outlet is StaffMember, but it will only show when we navigate to "/staff/":staffMember */}
            <Outlet/>
        </>
    )
}