import blogData from "../../data/blogData";
import Image from "next/image";
import Link from "next/link";
export default async function Blogs() {
    const posts = await blogData();
    return (
        <div>
      <div>
        <h1 class="text-center">Brows Blogs Here...</h1>
      </div>

      <div class="bbd">
      <div class="bposts">
      {posts.map((post) => {
       
          return (
            <div class="bpost">
              <Link href={`./post/${post.id}`}>
              <div>
                <img src={post.img} alt="Image Description" width="200px" />
              </div>
              <div>
                <h1 class="title">{post.title}</h1>
              </div>
              
              <div class="mx-0 text-sm py-3">
                <p class="mx">{post.short}</p>
              </div>
            </Link>
            </div>
          
          );
        
      })}
      </div>
      </div>
    </div>
    );
};
