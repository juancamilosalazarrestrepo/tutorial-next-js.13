
import { resolve } from "styled-jsx/css";
import Image from "next/image"

const fetchComments = async (id) => {
  //await new Promise((resolve) => setTimeout(resolve, 3000));
  //throw new Error('Error al cargar los comentarios')
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());
};

export default async function Post({ params }) {
  const { id } = params;

  const Comments = await fetchComments(id);
  return (
    <div style={{ background: "#444", fontSize: "14px", padding: "10px" }}>
      <ul>
        {Comments.map((comment) => (
          <li key={comment.id}>
            <Image width="50" height="50" src={`https://i.pravatar.cc/300`} alt={comment.name} />
            <h4>{comment.name}</h4>
            <h4>{comment.email}</h4>
            <small>{comment.body}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
