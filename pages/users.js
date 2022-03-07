import User from "../components/user";

export default function UserList({users}){
    return(
        <>
        <div>List of users</div>
        {
            users.map((user)=>{
                return(
                    <User user={user}/> 
                )})
        }
        </>
    )
}

export async function getStaticProps(){
    const response= await fetch('https://jsonplaceholder.typicode.com/users');
    const data= await response.json();
    console.log(data);
    return { props:{
        users:data
    }};

}