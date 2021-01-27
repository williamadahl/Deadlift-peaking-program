import React, {useState} from 'react';

import Block1 from "./Block1";

const Home = () => {
    const [value, setValue] = useState(5);
    const [onChangeValue, setOnChangeValue] = useState(0);
    console.log(value);
    const [message, setMessage] = useState('');

    const callbackFunction = (childData) =>{
        setMessage(childData);
    }


    // const handleSubmit =(e) =>{
    //     e.preventDefault();
        // if(value){
        //     setValue(value);
        // }
    // };

    return(
        <>
            <h3> Home page  {value}</h3>
            <Block1 parentCallback = {callbackFunction}/>
            <p>This is the message: {message}</p>
            {/*<form className='form'>*/}
            {/*    <input type='number' value={value} onChange={setValue}/>*/}
            {/*</form>*/}
        </>

    )
};
export default Home;
