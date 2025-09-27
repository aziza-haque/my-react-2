import { useState } from "react"

export default function Batsman(){
    const [runs,setRuns] = useState(0);
    const handleSingles=()=>{
        const updateRuns=runs+1;
        setRuns(updateRuns);
    }
    const handleSix=()=>{
        const updateRuns=runs+6;
        setRuns(updateRuns);

    }
    return(
        <div>

            <h3>player:bangla batsman</h3>
            {
                runs>50&&<p>your score:50</p>
            }
            <h1>score : {runs}</h1>
            <button onClick={handleSingles}>singles</button>
            <button onClick={handleSix}>six</button>
            <button>four</button>
        </div>
    )
}