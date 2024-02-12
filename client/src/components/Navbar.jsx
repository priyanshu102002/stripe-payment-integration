import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="p-4 px-32 text-xl bg-[#01161E] flex justify-between items-center sticky top-0">
            <div>
                <Link to={"/"}>Logo</Link>
            </div>
            <ul className="flex gap-6">
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/payment"}>Payment</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
