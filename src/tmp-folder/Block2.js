import React, {useState} from 'react';
import {data} from '../data/data'
import Week from './Week';



const Block2 = () => {
    const [someShit, setSomeShit] = useState(3);

    const getData = (value) =>{
        console.log(value);
    }

    return(
        <>
            <h1> Block 2 </h1>
            <h4> Lick my ass {someShit} times, slave</h4>
            <Week getNumberOfLicks={setSomeShit}/>
        </>

    )
};
export default Block2;
