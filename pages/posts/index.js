import Link from 'next/link'
export default function Post({post}){
    console.log(post);
    return(
        <>
            {
                post.map((element)=>{
                    return(
                        <div key={element.id}>
                            <Link href={`posts/${element.id}`} >
                            <h2>{element.id}  {element.title} </h2>
                            </Link>
                            <hr/>
                        </div>
                        
                    )
                })
            }
          
        </>
    )
}
export async function getStaticProps(){
    const response= await fetch('https://jsonplaceholder.typicode.com/posts');
    const data= await response.json();
    return {
        props:{
            post:data.slice(0,3)
        }
    }
}