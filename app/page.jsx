import blogData from "../data/blogData";
import Image from "next/image";
import Link from "next/link";
export default async function Home() {
  const posts = await blogData();

  return (
    <div>


<div class="video">
        <video  autoPlay loop muted playsInline >
          <source src="bg.mp4" />  
        </video>
      </div>
      

      <div class="explore">
        <h1 class="slogan ">Welcome to This Blog Site</h1>
        <Link href="./blogs" class="bg-transparent hover:bg-black text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-orange-800 rounded-3xl ">
        
           Explore Blogs
      
        </Link>
        
      </div>

     
     <div class="title1">
      <div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      </div>Latest Blogs<div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        </div>
     </div>

      <div class="bbd">
      <div class="posts">
      {posts.map((post) => {
       
          return (
            <div class="post rounded-3xl">
              <Link href={`./post/${post.id}`}>
              <div>
                <img src={post.img} alt="Image Description" width="400px" />
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
}
