import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


const Home = (props) => {

    return(
        <>
            <h3> Home page </h3>
            <h5> Global weight: {props.globalWeight}</h5>
            <button className='btn' onClick={props.onSetWeight}> Weight up</button>
            <Link to='/block1'>
                <button className='btn'>Block 1</button>
            </Link>
            <Link to='/block2'>
                <button className='btn'>Block 2</button>
            </Link>
            <Link to='/block3'>
                <button className='btn'>Block 3</button>
            </Link>
            <Link to='/block4'>
                <button className='btn'>Block 4</button>
            </Link>
            {/*<button className='btn' onClick={}> Block 2</button>*/}
            {/*<button className='btn' onClick={}> Block 3</button>*/}
            {/*<button className='btn' onClick={}> Block 4</button>*/}
            {/*<Block1 onChange= {value =>setMessage(value)}/>*/}
            {/*<p>This is the message:  {message}</p>*/}
            {/*<form className='form'>*/}
            {/*    <input type='number' value={value} onChange={setValue}/>*/}
            {/*</form>*/}
        </>

    )
};
const mapStateToProps = (state) => ({
    globalWeight: state.globalWeight
})

const mapDispatchToProps = (dispatch) => {
    return{
        onSetWeight: () => dispatch({type:'SET_WEIGHT'})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
