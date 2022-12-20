import Image from "next/image";
import Link from "next/link";

const fetchComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // throw new Error("Somethings wrong");

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());
};

export default async function Comments({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);

  return (
    <ul style={{ padding: "32px", background: "#444" }}>
      {comments.map((comment) => (
        <li key={comment.id}>
          <Image
            width={50}
            height={50}
            alt={comment.name}
            src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`}
          />

          <h4>{comment.name}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  );
}
