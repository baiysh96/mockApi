import React from 'react';
import "./Modal.css"
const Modal = ({active,setActive,children,setNewStudent}) => {
    return (
        <div>
            <div className={ active ? "modal active":"modal"}  onClick={() =>
                setActive(false) &&
                setNewStudent({
                    name: "",
                    group: "",
                    year: "",
                    email: "",
                    phone: ""
                }) }>
                <div className={ active ? "modal__content active":"modal__content"} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;