import React, {useState} from 'react';

import Block1 from "./Block1";

const Home = () => {
    const [onChangeValue, setOnChangeValue] = useState(0);
    const [message, setMessage] = useState('I am home');


    // const handleSubmit =(e) =>{
    //     e.preventDefault();
        // if(value){
        //     setValue(value);
        // }
    // };

    return(
        <>
            <h3> Home page </h3>
            <Block1 onChange= {value =>setMessage(value)}/>
            <p>This is the message:  {message}</p>
            {/*<form className='form'>*/}
            {/*    <input type='number' value={value} onChange={setValue}/>*/}
            {/*</form>*/}
        </>

    )
};
export default Home;
