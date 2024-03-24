import "./Anstime.scss"
import { useEffect ,useState , useRef } from "react"
function Anstime({duration , onTime}){
   

    const intRef =useRef();
    
    const [ count , setCount ] = useState(0);

    const [ prog , setprog ] = useState(0);


       useEffect(()=>{
         setInterval(()=>{
          setCount((cur)=>cur+1);
         },1000);
           

         return ()=>clearInterval(intRef.current)



       },[]);


       useEffect(()=>{


            setprog(100*(count/duration))


            if(count===duration){
                clearInterval(intRef.current)

                setTimeout(()=>{
                onTime();
                },1000)
            }

       },[count])


    return (
        <>
        <div className="ans-time-cont">
             <div  style={{width:`${prog}%`,
                backgroundColor:`${
                    prog<40
                    ?'lightgreen'
                     :prog<70
                     ?'orange'
                     :'red'

                }`
            
            
            }} className="pro"></div>

        </div>
        </>
    )
}

export default Anstime