import React, {useState} from 'react';

const Home = () => {
    const [value, setValue] = useState(5);
    const [onChangeValue, setOnChangeValue] = useState(0);
    console.log(value);

    // const handleSubmit =(e) =>{
    //     e.preventDefault();
        // if(value){
        //     setValue(value);
        // }
    // };

    return(
        <>
            <h3> Home page  {value}</h3>
            <form className='form'>
                <input type='number' value={value} onChange={setValue}/>
            </form>
        </>

    )
};
export default Home;
