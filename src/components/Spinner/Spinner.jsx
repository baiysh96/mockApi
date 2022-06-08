import React from 'react';
import HashLoader from "react-spinners/HashLoader";

const Spinner = () => {
    return (
        <div className="spinner">
            <HashLoader
                className="my-8"
                color="F8E71C"  size={110} />
        </div>
    );
};

export default Spinner;