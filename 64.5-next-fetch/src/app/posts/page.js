import Link from 'next/link'

export default async function PostsListPage({searchParams}) {
    const query = await searchParams;
    console.log("searchParams", query);
    const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // call the API
    const posts = await response.json(); // parse the response as JSON

    if (query.sort === 'desc'){
        posts.reverse();
    }

  return (
    <div>
      <h2>Posts List</h2>
      <Link href='/posts?sort=asc'>Sort ascending</Link> - <Link href='/posts?sort=desc'>Sort descending</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}