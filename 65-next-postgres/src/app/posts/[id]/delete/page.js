// Tools:
// - SQL query to delete
// - server func -> trigger delete
// - form -> button

import {db} from '@/utils/dbConnection'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
// server func by default

export default async function DeletePage({params}){
    //I have access to params because this route is nested in the dynamic route.
    const {id} = await params;
    
    console.log(id);
    
    async function handleDelete(){
        "use server";
        console.log(id);
        await db.query('DELETE FROM postworkshop WHERE id = $1', [
            id
        ]);
        revalidatePath('/posts');
        redirect('/posts');
    }
    
    return(
        <>
            <h1>Delete this rollercoaster</h1>
            <form action={handleDelete}>
                <button className="bg-red-400 text-amber-800" >Delete</button>
            </form>
        </>
    )
}