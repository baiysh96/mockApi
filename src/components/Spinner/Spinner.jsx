import React from 'react';
import HashLoader from "react-spinners/HashLoader";

const Spinner = () => {
    return (
        <div className=" container text-center spinner">
            <HashLoader className="my-8"
                color="F5A623"  size={110} />
        </div>
    );
};

export default Spinner;