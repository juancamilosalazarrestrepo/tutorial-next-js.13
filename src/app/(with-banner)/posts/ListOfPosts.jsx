import Link from "next/link";
import { LikeButton } from "./LikeButton";

const fetchPosts = async () => {
  console.log("fetch de datos");

  //getStaticProps
  // return fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json());

  //getServerSideProps
  //return fetch("https://jsonplaceholder.typicode.com/posts",{cache:"no-store"}).then((res) => res.json());

  //incrementalStaticRegeneration

  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  }).then((res) => res.json());
};

export async function ListOfPost() {
  const posts = await fetchPosts();

  return posts.slice(0, 5).map((post) => (
    <article key={post.id}>
      <Link href="/posts/[id]" as={`/posts/${post.id}`}>
        <h1 style={{ color: "#09f" }}>{post.title}</h1>
        <p>{post.body}</p>
      </Link>

      <LikeButton id={post.id} />
    </article>
  ));
}
