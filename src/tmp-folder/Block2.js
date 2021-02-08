import React, {useState} from 'react';
import {data} from '../data/data'
import {useSelector} from "react-redux";
import WeekNew from "./WeekNew";

const Block2 = () => {

    const selector = state => state.calculatedTrainingMax;
    const calculatedTrainingMax = useSelector(selector)
    const [hideWeek1, setHideWeek1] = useState(false);
    const [hideWeek2, setHideWeek2] = useState(false);
    const [hideWeek3, setHideWeek3] = useState(false);
    const [hideWeek4, setHideWeek4] = useState(false);
    const [weekNumber, setWeekNumber] = useState(0);
    const [targetReps] = useState(3);
    const [exercises] = useState(data[1]);

    return(
        <>
            <h1> Block 2 </h1>
            <h5> Store weight: {calculatedTrainingMax}</h5>
            <button className='btn' onClick={()=>setWeekNumber(1)}> Week 1</button>
            <button className='btn' onClick={()=>setWeekNumber(2)}> Week 2</button>
            <button className='btn' onClick={()=>setWeekNumber(3)}> Week 3</button>
            <button className='btn' onClick={()=>setWeekNumber(4)}>Week 4</button>

            { (weekNumber === 1 && !hideWeek1)   &&
            <WeekNew
                exercises={exercises}
                calculatedTrainingMax={calculatedTrainingMax}
                weekNumber={weekNumber}
                targetReps={targetReps}
                handleCloseWeek={()=>setHideWeek1(true)}
            />
            }
            { (weekNumber === 2 && !hideWeek2)   &&
            <WeekNew
                exercises={exercises}
                calculatedTrainingMax={calculatedTrainingMax}
                weekNumber={weekNumber}
                targetReps={targetReps}
                handleCloseWeek={()=>setHideWeek2(true)}
            />
            }
            { (weekNumber === 3 && !hideWeek3)   &&
            <WeekNew
                exercises={exercises}
                calculatedTrainingMax={calculatedTrainingMax}
                weekNumber={weekNumber}
                targetReps={targetReps}
                handleCloseWeek={()=> setHideWeek3(true)}
            />
            }
            { (weekNumber === 4 && !hideWeek4)   &&
            <WeekNew
                exercises={exercises}
                calculatedTrainingMax={calculatedTrainingMax}
                weekNumber={weekNumber}
                targetReps={targetReps}
                handleCloseWeek={() => setHideWeek4(true)}
            />
            }
        </>
    );
};
export default Block2;
