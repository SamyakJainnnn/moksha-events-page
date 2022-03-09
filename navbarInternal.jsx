import React from 'react';
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="internalNav">
            <li>
                <Link to="/">Day 1</Link>
            </li>
            <li>
                <Link to="/Day2">Day 2</Link>
            </li>
            <li>
                <Link to="/Day3">Day 3</Link>
            </li>
        </div>
    );
}
export default Navbar;