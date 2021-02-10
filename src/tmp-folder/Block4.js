import React, {useState} from 'react';
import {data} from '../data/data';
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import Results from './Results'


const Block4 = () => {
    const dispatch = useDispatch();
    const selectNewMax = state => state.newAchievedMax;
    const achievedMax = useSelector(selectNewMax);
    const [exercises] = useState(data[3]);
    const [submittedMax, setSubmittedMax] = useState('')
    const [showResults, setShowResults] = useState(false);

    const handleSubmit = (e) => {
        dispatch({type:'SET_NEW_MAX', payload:submittedMax})
        e.preventDefault()
    }
    const Test = () => {
        return (
            <h1>TEST</h1>
        )
    }

    return (
        <>
            {showResults &&
            <Results/>
            }
            {<Test/>}
            <h1> Max attempt</h1>
            <h5>This is achieved max :{achievedMax}</h5>
            {exercises.map((exercise) => {
                const{id, fields} = exercise;
                return (
                <div key={id} className='item'>
                    <h4>{fields.name}</h4>
                    <p>Sets/Reps: {fields.sets} x {fields.reps}</p>
                </div>
            )
            })}
            <form className='form' onSubmit={handleSubmit}>
                <input
                    type='number'
                    value={submittedMax}
                    onChange={(e ) => setSubmittedMax(e.target.value)}
                />
                    <button type='submit'>Submit new Max</button>
            </form>
        </>

    )
};
export default Block4;
