import React, {useState} from 'react';
import {data} from "../data/data";

const calculateWeight = (exercise,weight) => {
        console.log(exercise, weight)
        const weightToLift = exercise * weight;
        return weightToLift;
};


const Index = () =>{
    const [exercises, setExercises] = useState(data);
    const [weight, setWeight] = useState(0);

    const handleSubmit =(e) =>{
        e.preventDefault();
        if(weight){
            setWeight(weight);
        }
    };

    return (
        <>
            <h2>Exercises</h2>
            <form onSubmit={handleSubmit} className='form'>
                <input type='number' value={weight} onChange={(e) =>setWeight(e.target.value)}/>
                <button className='btn'>Submit</button>
            </form>
            {exercises.map((exercise) => {
                const {id, fields} = exercise;
                return (
                    <div key = {id} className='item'>
                        <h4>{fields.name}</h4>
                        <p>Sets/Reps: {fields.main.sets[0]} x {fields.main.reps[0]}</p>
                        <p> Percentile: {fields.percentile}</p>
                        <p>Weight: {calculateWeight(percentile, weight)}</p>
                    </div>
                );
            })}
        </>
    );
};
export default Index;