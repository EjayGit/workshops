import {db} from '@/utils/dbConnection'
import {redirect} from 'next/navigation'
import {revalidatePath} from 'next/cache'

export default function NewPost(){
    
    async function handleSave(formData){
        "use server";
        const formValues = {
            title: formData.get('title'),
            content: formData.get('content')
        }
        db.query('INSERT INTO postworkshop (title, content) VALUES ($1, $2)', 
            [formValues.title, formValues.content]
        );
        console.log('Saved data');
        revalidatePath('/posts');
        redirect('/posts');
    }
    
    return(
        <form action={handleSave}>
            <label htmlFor='title'>Title</label>
            <input id='title' name='title' type='text' />
            <label htmlFor='content'>Content</label>
            <textarea id='content' name='content'/>
            <button type='submit'>Save</button>
        </form>
    )
}