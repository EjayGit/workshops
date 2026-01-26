export async function generateMetadata({params}){
  const {id} = await params;
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`); // This is one example.
  const res = await db.query(`SELECT * from posts WHERE id = $1`,[
    id,
  ])
  const post = await res.json();
  return {
    title: post.title,
  };
}

import {db} from '@/utils/dbConnection'

export default async function Post({ params }) {
  const slug = await params;

  const post = (await db.query(`SELECT * FROM posts WHERE id = ${slug.id};`)).rows;

  return (
    <div>
      {post.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
