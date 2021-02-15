import React, {useState} from 'react';
import {data} from '../data/data'
import {useSelector} from "react-redux";
import Week from "./Week";
import InfoModal from "./Modal";
import {modalContent} from "../data/modalContent";

const Block2 = () => {

    const selectCalculatedTrainingMax = state => state.calculatedTrainingMax;
    const calculatedTrainingMax = useSelector(selectCalculatedTrainingMax);
    const selectShowBlock2Modal = state => state.showBlock2Modal;
    const showBlock2Modal = useSelector(selectShowBlock2Modal);
    const [hideWeek1, setHideWeek1] = useState(false);
    const [hideWeek2, setHideWeek2] = useState(false);
    const [hideWeek3, setHideWeek3] = useState(false);
    const [hideWeek4, setHideWeek4] = useState(false);
    const [weekNumber, setWeekNumber] = useState(0);
    const [targetReps] = useState(3);
    const [exercises] = useState(data[1]);
    const [myModalData] = useState(modalContent[2])

    return(
        <>
            <h1> Block 2 </h1>
            <InfoModal
                header={'Block 2'}
                submitWeight={false}
                modalContent={myModalData}
                showModal={showBlock2Modal}
                dispatchCode={'SET_SHOW_BLOCK2_MODAL'}
            />
            <h5> Store weight: {calculatedTrainingMax}</h5>
            <button className='btn' onClick={()=>setWeekNumber(1)}> Week 1</button>
            <button className='btn' onClick={()=>setWeekNumber(2)}> Week 2</button>
            <button className='btn' onClick={()=>setWeekNumber(3)}> Week 3</button>
            <button className='btn' onClick={()=>setWeekNumber(4)}>Week 4</button>

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
            />
            }
            { (weekNumber === 4 && !hideWeek4)   &&
            <Week
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
