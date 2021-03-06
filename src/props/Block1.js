import React, {useState} from 'react';
import {data} from '../data/data'
import {useSelector} from "react-redux";
import {modalContent} from "../data/modalContent";
import Week from "./Week";
import InfoModal from "./Modal";

const Block1 = () => {

    /* Local component state for weeks
    *  Sjekk ut provider, scoped state
    *  Mappestruktur
    *  Containers(4) kaller  -> component (1) , (block)
    *  Bruke proptypes [liste etc] som sendes inn til components
    *  Kan bruke hooks i steden for states (kidndof local states)
    * */
    const selectCalculatedTrainingMax = state => state.calculatedTrainingMax;
    const calculatedTrainingMax = useSelector(selectCalculatedTrainingMax)
    const selectShowBlock1Modal = state => state.showBlock1Modal;
    const showBlock1Modal = useSelector(selectShowBlock1Modal)
    const [hideWeek1, setHideWeek1] = useState(false);
    const [hideWeek2, setHideWeek2] = useState(false);
    const [hideWeek3, setHideWeek3] = useState(false);
    const [hideWeek4, setHideWeek4] = useState(false);
    const [weekNumber, setWeekNumber] = useState(0);
    const [targetReps] = useState(5);
    const [exercises] = useState(data[0]);
    const [myModalData] = useState(modalContent[1])

    return(
        <>
            <h2> Block 1 </h2>
            <h5>Calculated training max: {calculatedTrainingMax}</h5>
            <InfoModal
                header={'Block 1'}
                submitWeight={false}
                modalContent={myModalData}
                showModal={showBlock1Modal}
                dispatchCode={'SET_SHOW_BLOCK1_MODAL'}
            />
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
export default Block1;