import React, {useState} from 'react';
import {data} from '../data/data'
import Week from './Week';



const Block2 = () => {

    const [weekNumber, setWeekNumber] = useState(0);
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
            <h4> Tarjet reps : {targetReps} </h4>
            <button className='btn' onClick={()=>setWeekNumber(1)}> Week 1</button>
            <button className='btn' onClick={()=>setWeekNumber(2)}> Week 2</button>
            <button className='btn' onClick={()=>setWeekNumber(3)}> Week 3</button>
            <button className='btn' onClick={()=>setWeekNumber(4)}>Week 4</button>

            { (weekNumber === 1)   &&
            <Week
                getNumberOfReps={getNumberOfReps}
                exercises={exercises}
                initialWeight={initialWeight}
                weekNumber={weekNumber}
                targetReps={targetReps}
                repsOverTargetLastWeek={repsOverTargetLastWeek}
            />
            }
            { (weekNumber === 2) &&
            <Week
                getNumberOfReps={getNumberOfReps}
                exercises={exercises}
                initialWeight={initialWeight}
                weekNumber={weekNumber}
                targetReps={targetReps}
                repsOverTargetLastWeek={repsOverTargetLastWeek}
            />
            }
            { (weekNumber === 3) &&
                <Week
                getNumberOfReps={getNumberOfReps}
                exercises={exercises}
                initialWeight={initialWeight}
                weekNumber={weekNumber}
                targetReps={targetReps}
                repsOverTargetLastWeek={repsOverTargetLastWeek}
                />
            }

            { (weekNumber === 4) &&
            <Week
                getNumberOfReps={getNumberOfReps}
                exercises={exercises}
                initialWeight={initialWeight}
                weekNumber={weekNumber}
                targetReps={targetReps}
                repsOverTargetLastWeek={repsOverTargetLastWeek}
            />
            }



        </>

    )
};
export default Block2;
