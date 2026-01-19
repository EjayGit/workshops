export default async function PostPage({params}){
    const slug = await params;
    console.log(slug);
    return(
        <>
            <h1>Post page {slug.id}</h1>
        </>
    )
}