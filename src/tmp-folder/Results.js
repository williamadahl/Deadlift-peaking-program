import React from 'react'
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

const Results = () => {
    const dispatch = useDispatch();
    const selectNewMax = state => state.newAchievedMax;
    const achievedMax = useSelector(selectNewMax);

    return(

        <>
            <h3> Congratulations on completing this peaking program</h3>
        </>
    )
}
export default Results;