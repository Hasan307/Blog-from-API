export default async function postData(id){

console.log(id);

    const res= await fetch('https://basic-blog.teamrabbil.com/api/post-details/${id}');

    if(!res.ok){
        throw new Error('Error Something');
    }
return res.json();
}