import useSWR from 'swr';

//useSWR dung de fetch data ve ( la mot react hook ), tham so nhan vao dau tien la key cua du lieu ,
// tham so thu 2 la du lieu duoc tra ve
// ham tra ve {data,error} la du lieu + loi neu co 
export default function DashboardSWR(){
    const {data, error}=useSWR('dashboard', async()=>{
        const response= await fetch('http://localhost:4000/dashboard');
        const data= await response.json();
        return data;
    })
    if(error){
        return 'An error occur';
    }
    if(!data)
    {
        return 'Loading';
    }
    return(
        <div>
            <h2>Dashboard</h2>
            <h2>Posts-{data.posts}</h2>
            <h2>Likes-{data.likes}</h2>
        </div>
    )
}