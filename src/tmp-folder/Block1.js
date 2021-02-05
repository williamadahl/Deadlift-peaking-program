import React, {useState} from 'react';
import {data} from '../data/data'

import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import WeekNew from "./WeekNew";

const calculateWeight = (percentile,weight) => {
    console.log(percentile, weight)
    return (percentile*weight) /100;
    // const weightToLift = exercise * weight;
    // return weightToLift/100;
};

const Block1 = () => {
    const dispatch = useDispatch();
    const selector = state => state.globalWeight;
    const globalWeight = useSelector(selector)

    const [weekNumber, setWeekNumber] = useState(0);
    const [targetReps] = useState(5);
    const [exercises] = useState(data[0]);

    return(
        <>
            <h1> Block 1 </h1>
            <h5> Store weight: {globalWeight}</h5>
            <button className='btn' onClick={()=>setWeekNumber(1)}> Week 1</button>
            <button className='btn' onClick={()=>setWeekNumber(2)}> Week 2</button>
            <button className='btn' onClick={()=>setWeekNumber(3)}> Week 3</button>
            <button className='btn' onClick={()=>setWeekNumber(4)}>Week 4</button>

            { (weekNumber === 1)   &&
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
// const mapDispatchToProps = (dispatch) => {
//     return{
//         onSetWeight: () => dispatch({type:'SET_WEIGHT', payload: 5})
//     }
// }
//
// const mapStateToProps = (state) => ({
//     globalWeight: state.globalWeight
// })
// export default connect(mapStateToProps, mapDispatchToProps)(Block1);
export default Block1;