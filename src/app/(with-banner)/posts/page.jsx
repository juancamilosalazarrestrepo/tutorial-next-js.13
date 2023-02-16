import { Suspense } from "react";
import {ListOfPost} from "./ListOfPosts"

export default async function PostPage() {


  return (
    <section>
      {
      //para suspender a nivel granular loadin por componente
      /*<Suspense fallback={<p>Cargando posts ...</p>}>*/}
      <ListOfPost/>
      {/*</Suspense>*/}
 
    </section>
  );
}
