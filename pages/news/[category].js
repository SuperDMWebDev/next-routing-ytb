export default function CategoryList(props){
    const {data}=props;
    return(
        <>
            <h1>CategoryList</h1>
            {
                data.map((e)=>{
                    return(
                        <div key={e.id}>
                            <h1>{e.title} | {e.description}</h1>
                        </div>
                    )
                })
            }
        </>
    )

}

export async function getServerSideProps(context){
    const {params, req, res}=context
    console.log(req.headers.cookie)
    res.setHeader('Set-Cookie',['name=Vishwas']);
    const {category}= params;
  

    const response = await fetch(`http://localhost:4000/news?category=${category}`)

    const data= await response.json();
    return{

        props:{
            data:data
            
        }
    }
    
}