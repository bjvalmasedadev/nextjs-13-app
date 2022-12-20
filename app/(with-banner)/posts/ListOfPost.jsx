import Link from "next/link";
import { LikeButton } from "./LikeButton";

const fetchPost = async () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  }).then((res) => res.json());
};
// with cache no store we converted this in server side
/*
  with 
  next:{
    revalidate: 60
  }
  we regenerate the data after the seconds number
*/

export async function ListOfPosts() {
  const posts = await fetchPost();

  return posts.slice(0, 5).map((post) => (
    <article key={post.id}>
      <Link href={`/posts/${post.id}`} as={`/posts/${post.id}`}>
        <h2 style={{ color: "#09f" }}>{post.title}</h2>
        <p>{post.body}</p>
        <LikeButton id={post.id} />
      </Link>
    </article>
  ));
}
