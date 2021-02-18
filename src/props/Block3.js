import React, {useState} from 'react';
import {data} from '../data/data'
import {useSelector} from "react-redux";
import Week from "./Week";
import InfoModal from "./Modal";
import {modalContent} from "../data/modalContent";

const Block3 = () => {

    const selectCalculatedTrainingMax = state => state.calculatedTrainingMax;
    const calculatedTrainingMax = useSelector(selectCalculatedTrainingMax)
    const selectShowBlock3Modal = state => state.showBlock3Modal;
    const showBlock3Modal = useSelector(selectShowBlock3Modal);
    const [hideWeek1, setHideWeek1] = useState(false);
    const [hideWeek2, setHideWeek2] = useState(false);
    const [hideWeek3, setHideWeek3] = useState(false);
    const [weekNumber, setWeekNumber] = useState(0);
    const [targetReps] = useState(2);
    const [exercises] = useState(data[2]);
    const [myModalData] = useState(modalContent[3])

    return(
        <>
            <h2> Block 3 </h2>
            <h5>Calculated training max: {calculatedTrainingMax}</h5>
            <InfoModal
                header={'Block 3'}
                submitWeight={false}
                modalContent={myModalData}
                showModal={showBlock3Modal}
                dispatchCode={'SET_SHOW_BLOCK3_MODAL'}
            />
            <button className='btn' onClick={()=>setWeekNumber(1)}> Week 1</button>
            <button className='btn' onClick={()=>setWeekNumber(2)}> Week 2</button>
            <button className='btn' onClick={()=>setWeekNumber(3)}> Week 3</button>

            { (weekNumber === 1 && !hideWeek1)   &&
            <Week
                exercises={exercises}
                calculatedTrainingMax={calculatedTrainingMax}
                weekNumber={weekNumber}
                targetReps={targetReps}
                handleCloseWeek={()=>setHideWeek1(true)}
            />
            }
            { (weekNumber === 2 && !hideWeek2)   &&
            <Week
                exercises={exercises}
                calculatedTrainingMax={calculatedTrainingMax}
                weekNumber={weekNumber}
                targetReps={targetReps}
                handleCloseWeek={()=>setHideWeek2(true)}
            />
            }
            { (weekNumber === 3 && !hideWeek3)   &&
            <Week
                exercises={exercises}
                calculatedTrainingMax={calculatedTrainingMax}
                weekNumber={weekNumber}
                targetReps={targetReps}
                handleCloseWeek={()=> setHideWeek3(true)}
                isWeekEleven = {true}
            />
            }
        </>
    );
};
export default Block3;