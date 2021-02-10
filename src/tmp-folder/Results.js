import React from 'react'
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

const Results = () => {


    /* New best */
    const dispatch = useDispatch();
    const selectNewMax = state => state.newAchievedMax;
    const newMax = useSelector(selectNewMax);

    return(

        <>
            <h3> Congratulations on completing this peaking program</h3>
            {/*<h5>Previous best: {previousMax}</h5>*/}
            <h5>New best: {newMax}</h5>
            {/*<h5>That is an increase of: {newMax-previousMax}</h5>*/}
        </>
    )
}
export default Results;