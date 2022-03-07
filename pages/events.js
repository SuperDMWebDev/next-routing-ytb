import { useState } from "react";
import {useRouter} from 'next/router';
export default function EvenList({eventList}){
    const  [event,setEvent]=useState(eventList);
    const router=useRouter()

    const fetchSportEvent=async()=>{
        const response= await fetch('http://localhost:4000/events?category=sports');
        const data= await response.json();
        setEvent(data);
        router.push('/events/category=sports',undefined,{shallow:true})
    }
    return(
        <>
            <button onClick={fetchSportEvent}>Sports Event</button>
            {
                event.map((e)=>{
                    return(
                        <div key={e.id}>
                            
                            <h2>
                                {e.id} | {e.category}

                            </h2>

                        </div>
                    )
                })
            }
        </>
    )
}

export async function getServerSideProps(context){
    const {query}=context
    const {category}= query
    const queryString=category?'category=sports':''
     const response= await fetch(`http://localhost:4000/events/${queryString}`);
    const data= await response.json();
    return{
        props:{
            eventList : data
        }
    }
}