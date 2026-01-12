import {useParams} from 'react-router'

export default function StaffMember(){
    let { staffMember } = useParams();
    return(
        <>
            <h2>Staff member</h2>
            <p>Name: {staffMember}</p>
        </>
    )
}