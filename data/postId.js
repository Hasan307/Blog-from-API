export default async function postData(id){
     const res= await fetch(`https://basic-blog.teamrabbil.com/api/post-details/${id}`);

    if(!res.ok){
        alert('jhdshdfdsjdsffs');
    }
    else{
        return res.json();
    }

}