// async function getPosts(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     return data;
// }

const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
}

async function main(){
    const posts = await getPosts();
    console.log("Posts:", posts);
}
main()