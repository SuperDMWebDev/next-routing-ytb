export default function NewArticleLists(props) {
    const {articles}=props;

    return(
        <>
            <h1>List Of New Article</h1>
            {
                articles.map((e)=>{
                    return(
                        <div key={e.id}>
                            {e.title} {e.category}
                        </div>
                    )
                })
            }
        </>
    )
}




export async function getServerSideProps(){
    const response=await fetch('http://localhost:4000/news');
    const data= await response.json();

    return{
        props:{
            articles:data
        }
    }
}