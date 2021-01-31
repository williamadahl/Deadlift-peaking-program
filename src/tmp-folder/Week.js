import React from 'react';

const calculateWeight = (percentile,weight) => {
    console.log(percentile, weight)
    return (percentile*weight) /100;
};


const Week = (props) => {
    const weightIncreasePerRepOverTarget = 2.5;
    const baseWeight = props.initialWeight + (weightIncreasePerRepOverTarget*props.repsOverTargetLastWeek)
    console.log('Target reps: ' + props.targetReps);
    console.log('Reps over target last week: ' + props.repsOverTargetLastWeek);
    console.log('This is the base weight: ' + baseWeight);


    // const baseWeight = props.weight +
    const functionHandler = (repNumber) => {
        props.getNumberOfReps(repNumber);
    }


    return (
        <>
            <h2>Week:{props.weekNumber}</h2>
            <h5> Got this number of repsOverTarget: {props.targetReps}</h5>
            <h5> Gives us total weight: </h5>
            <input
               input='number'
               onChange={(e) =>functionHandler(parseInt(e.target.value))}
            />
            {props.exercises.map((exercise) => {
                const {id, fields} = exercise;
                return (
                    <div key = {id} className='item'>
                        <h4>{fields.name}</h4>
                        <p>Sets/Reps: {fields.sets} x {fields.reps}</p>
                        <p>Weight: {calculateWeight(fields.percentile, baseWeight)}</p>
                    </div>
                );
            })}
            <h5>Something after input</h5>
        </>
    )
}
export default Week;