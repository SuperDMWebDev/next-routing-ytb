import {useState, useEffect} from 'react'
function Dashboard(){
    const [isLoading, setIsLoading] = useState(true);
    const [dashboardData, setDashboardData] = useState({})  
    useEffect(()=>{
        async function fetchDashboardData(){
            const response= await fetch('http://localhost:4000/dashboard');
            const data= await response.json();
            setDashboardData(data);
            setIsLoading(false);

        }
        fetchDashboardData()
    },[])

    if(isLoading)
    {
        return(
            <div>isLoading</div>
        )
        
    }
    return(
        <div>
            <h2>Dashboard</h2>
            <h2>Posts-{dashboardData.posts}</h2>
            <h2>Likes-{dashboardData.likes}</h2>
        </div>
    )
}
export default Dashboard;