import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/block1'>Block 1</Link>
                </li>
                <li>
                    <Link to='/block2'>Block 2</Link>
                </li>
                <li>
                    <Link to='/block3'>Block 3</Link>
                </li>
                <li>
                    <Link to='/maxAttempt'> Max attempt</Link>
                </li>
            </ul>
        </nav>

    )
};
export default Navbar;