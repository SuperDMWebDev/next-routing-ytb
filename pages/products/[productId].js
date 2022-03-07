import {useRouter} from 'next/router';
export default function Product({product}){
    const router= useRouter();
    if(router.isFallback)
    {
        return(
            <div>is Loading...</div>
        )
    }
    return(
        <>
            
                
            <div>

                 <h2>{product.id} {product.title} {product.price}</h2>
                <hr/>
            </div>
                        
            
            
            
          
        </>
    )
}
export async function getStaticPaths(){
    // Cach 1
    return{
        paths:[
            {
               params:{ productId:'1'}
            },
            // {
            //     params:{ productId:'2'}
            //  },
            //  {
            //     params:{ productId:'3'}
            //  }
        ],
        fallback:true 
    }
    // //Cach 2 dung khi so luong phan tu nhieu 
    // const response= await fetch('https://jsonplaceholder.typicode.com/posts');
    // const data= await response.json();
    // const paths= data.map((element)=>{
            
    //         return{
    //            params:{productId: `${element.id}`}
    //         }
    //     })
    // return {
    //     paths:paths,
    //     fallback:false
    // }
}
export async function getStaticProps(context){
    const {params}=context;
    const response= await fetch(`http://localhost:4000/products/${params.productId}`);
    const data= await response.json();
    return {
        props:{
            product:data
        },
        validate:1
    }
}