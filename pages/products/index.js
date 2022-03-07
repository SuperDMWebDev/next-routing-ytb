import Link from 'next/link'
export default function Product({product}){
    console.log(product);
    return(
        <>
            {
                product.map((element)=>{
                    return(
                        <div key={element.id}>
                            <Link href={`products/${element.id}`} >
                            <h2>{element.id}  {element.title} {element.price} </h2>
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
    const response= await fetch('http://localhost:4000/products');
    const data= await response.json();
    return {
        props:{
            product:data
        },
        revalidate:10
    }
}