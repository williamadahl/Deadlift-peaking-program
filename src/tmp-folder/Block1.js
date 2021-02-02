import React, {useState} from 'react';
import {data} from '../data/data'
import {connect} from 'react-redux';

const calculateWeight = (percentile,weight) => {
    console.log(percentile, weight)
    return (percentile*weight) /100;
    // const weightToLift = exercise * weight;
    // return weightToLift/100;
};

const Block1 = (props) => {

    const [exercises] = useState(data[0]);
    const [showWeekOne, setShowWeekOne] = useState(false);
    const [showWeekTwo, setShowWeekTwo] = useState(false);
    const [showWeekThree, setShowWeekThree] = useState(false);
    const [showWeekFour, setShowWeekFour] = useState(false);
    const [weight] = useState(250); // Remember to update this weight to be 80% of input
    const [repNumber, setRepNumber] = useState(5);
    console.log(weight);

    return(
        <>
            <h1> Block 1 </h1>
            <h5> Global weight: {props.globalWeight}</h5>
            <h4> Reps managed {repNumber}</h4>
            <button className='btn' onClick={()=>setShowWeekOne(!showWeekOne)}> Week 1</button>
            <button className='btn' onClick={()=>setShowWeekTwo(!showWeekTwo)}> Week 2</button>
            <button className='btn' onClick={()=>setShowWeekThree(!showWeekThree)}> Week 3</button>
            <button className='btn' onClick={()=>setShowWeekFour(!showWeekFour)}> Week 4</button>
            {showWeekOne && <>
                <h2>Week 1</h2>
            {exercises.map((exercise) => {
                const {id, fields} = exercise;
                return (
                <div key = {id} className='item'>
                <h4>{fields.name}</h4>
                <p>Sets/Reps: {fields.sets} x {fields.reps}</p>
                    <p>Weight: {calculateWeight(fields.percentile, weight)}</p>
                </div>
                );
            })}
            <form className='form'>
                <div className='form-control'>
                    <label htmlFor='repNumber'>Enter number of reps: </label>
                        <input
                            type='number'
                            value={repNumber}
                            onChange={(e) => setRepNumber(parseInt(e.target.value))}
                        />
                </div>
            </form>
            </>
            }
</>
    );
};


const mapStateToProps = state => ({
    globalWeight: state.globalWeight
})
export default connect(mapStateToProps)(Block1);