import React, {useState} from 'react';
import {data} from '../data/data'

import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import WeekNew from "./WeekNew";

const calculateWeight = (percentile,weight) => {
    console.log(percentile, weight)
    return (percentile*weight) /100;
};

const Block1 = () => {
    const dispatch = useDispatch();
    const selector = state => state.globalWeight;
    const globalWeight = useSelector(selector)
    const [hideWeek1, setHideWeek1] = useState(false);
    const [hideWeek2, setHideWeek2] = useState(false);
    const [hideWeek3, setHideWeek3] = useState(false);
    const [hideWeek4, setHideWeek4] = useState(false);
    const [weekNumber, setWeekNumber] = useState(0);
    const [targetReps] = useState(5);
    const [exercises] = useState(data[0]);

    const handleCloseWeek = (e) =>{
        console.log('retuned from child')
        setHideWeek1(true);
    }

    return(
        <>
            <h1> Block 1 </h1>
            <h5> Store weight: {globalWeight}</h5>
            <button className='btn' onClick={()=>setWeekNumber(1)}> Week 1</button>
            <button className='btn' onClick={()=>setWeekNumber(2)}> Week 2</button>
            <button className='btn' onClick={()=>setWeekNumber(3)}> Week 3</button>
            <button className='btn' onClick={()=>setWeekNumber(4)}>Week 4</button>

            { ((weekNumber === 1) && !hideWeek1)   &&
            <WeekNew
                exercises={exercises}
                globalWeight={globalWeight}
                weekNumber={weekNumber}
                targetReps={targetReps}
                handleCloseWeek={handleCloseWeek}
            />
            }
            { (weekNumber === 2 && !hideWeek2)   &&
            <WeekNew
                exercises={exercises}
                globalWeight={globalWeight}
                weekNumber={weekNumber}
                targetReps={targetReps}
            />
            }
            { (weekNumber === 3 && !hideWeek3)   &&
            <WeekNew
                exercises={exercises}
                globalWeight={globalWeight}
                weekNumber={weekNumber}
                targetReps={targetReps}
            />
            }
            { (weekNumber === 4 && !hideWeek4)   &&
            <WeekNew
                exercises={exercises}
                globalWeight={globalWeight}
                weekNumber={weekNumber}
                targetReps={targetReps}
            />
            }
            </>
    );
};
export default Block1;