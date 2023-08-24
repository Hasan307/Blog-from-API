import blogData from "../../data/blogData";
import Image from "next/image";
import Link from "next/link";
import './blog.css';
export default async function Blogs() {
    const posts = await blogData();
    return (
        <div class="maincontainer">
      

      <div class="container11">
      <div class="bloghero">
        <h1 class="text-center">Browse Blogs Here...</h1>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </div>
      <div class="section11">
      {posts.map((post) => {
       
          return (
            <div class="heropost">
              <Link href={`./post/${post.id}`}>
              <div>
                <img src={post.img} alt="Image Description" width="200px" />
              </div>
              <div>
                <h1 class="title11">{post.title}</h1>
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
