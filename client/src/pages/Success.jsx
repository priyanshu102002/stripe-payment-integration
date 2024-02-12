import React from "react";

const Success = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className=" py-20 w-1/3 bg-white text-green-500 rounded-2xl flex flex-col items-center gap-6">
                <img className="w-40" src="./checkbox.png" alt="" />
                <h1 className="text-4xl font-bold">Payment Successful</h1>
                <p className="text-black">Your order is on the way!</p>
            </div>
        </div>
    );
};

export default Success;
