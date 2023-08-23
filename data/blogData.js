export default async function blogData(){

    const res= await fetch("https://basic-blog.teamrabbil.com/api/post-newest?_limit=5");

    if(!res.ok){
        throw new Error('Error Something');
    }
return res.json();
}