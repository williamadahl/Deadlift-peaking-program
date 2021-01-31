import React, {useState} from 'react';
import {data} from '../data/data'
import Week from './Week';



const Block2 = () => {

    const [showWeekOne, setShowWeekOne] = useState(false);
    const [showWeekTwo, setShowWeekTwo] = useState(false);
    const [showWeekThree, setShowWeekThree] = useState(false);
    const [showWeekFour, setShowWeekFour] = useState(false);

    const [exercises, setExercises] = useState(data[1]);
    const [initialWeight, setInitialWeight] = useState(250);
    const weightIncreasePerRepOverTarget = 2.5;

    const [repsOverTargetLastWeek, setRepsOverTargetLastWeek] = useState(0);
    const [targetReps, setTargetReps] = useState(3);



    const getNumberOfReps = (value) =>{
        if(!isNaN(value)){
            console.log('Recieved value: ' + value)
            const repDifference = (value-targetReps)
            setRepsOverTargetLastWeek(repDifference);
            console.log('Parent got number ov reps over: ' + repDifference);
            /* If you reach target weight, you add 2.5 kg as well */
            if (repDifference === 0){
                setInitialWeight(initialWeight+2.5);
            }else {
                const newInitialWeight = (initialWeight + (repDifference*weightIncreasePerRepOverTarget));
                setInitialWeight(newInitialWeight);
            }
        }
    }

    return(
        <>
            <h1> Block 2 </h1>
            <h4> Lick my ass {targetReps} times, slave</h4>
            <button className='btn' onClick={()=>setShowWeekOne(!showWeekOne)}> Week 1</button>
            <button className='btn' onClick={()=>setShowWeekTwo(!showWeekTwo)}> Week 2</button>
            <button className='btn' onClick={()=>setShowWeekThree(!showWeekThree)}> Week 3</button>
            <button className='btn' onClick={()=>setShowWeekFour(!showWeekFour)}> Week 4</button>
            {showWeekOne &&
            <Week
                getNumberOfReps={getNumberOfReps}
                exercises={exercises}
                initialWeight={initialWeight}
                weekNumber={1}
                targetReps={targetReps}
                repsOverTargetLastWeek={repsOverTargetLastWeek}
            />
            }

        </>

    )
};
export default Block2;
