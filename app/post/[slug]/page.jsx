import postData from "../../../data/postId";
import blogData from "../../../data/blogData";
import Link from "next/link";
import "./post.css";

export default async function Post({ params }) {
  const ids = parseInt(params.slug);
  const post = await postData(ids);
  const posts = await blogData();

  const res = await fetch(
    `https://basic-blog.teamrabbil.com/api/post-details/${ids}`
  );
  const lol = await res.json();

  if (!lol.postDetails) {
    return (
      <div class="text-center py-8">The Post Data is Empty on The Link</div>
    );
  } else {
    return (
      <div class="container">
        <div class="Section1">
          <div class="blogpost">
            <div class="postimage">
              <img
                src={post.postDetails.img}
                alt="Image Description"
                width="900px"
              />
            </div>
            <div class="posttitle">
              <h1 class="title">{post.postDetails.title}</h1>
            </div>
            <div class="mx-0 postdetails">
              <p class="mx">{post.postDetails.content}</p>
            </div>
          </div>

          <div class="container1">
            <div class="section2">
              <div class="sideposts">
                  <h1 class="py-8 text-3xl">Latest.....</h1>

                {posts.map((posts) => {
                  return (
                    <div class="bolgposts py-3">
                        <Link href={`../../post/${posts.id}`}>
                          <h1 class="title ">
                            {posts.id} {posts.title}
                          </h1>
                          </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
