import postData from "../../../data/postId";

export default async function Post({params}){
    const id=params.id;
    const post= await postData(id);
    
    return(
        <div>
                <div>
                  <img src={post.postDetails.img} alt="Image Description" width="900px" />
                </div>
                <div>
                  <h1 class="title">{post.postDetails.title}</h1>
                </div>
                <div class="mx-0">
                  <br /><br/>
                  <p class="mx">{post.short}</p>
                  </div>
    </div>

    )
    

}