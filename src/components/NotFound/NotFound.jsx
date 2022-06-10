import React from 'react';
import "./NotFound.css"

const NotFound = () => {
    return (
        <div>
            {/*<div className="w-full bg-grey-500">*/}
            {/*    <div onClick={() =>*/}
            {/*        setModalActive(false) ||*/}
            {/*        setNewStudent({*/}
            {/*            name: "",*/}
            {/*            group: "",*/}
            {/*            year: "",*/}
            {/*            email: "",*/}
            {/*            phone: ""*/}
            {/*        })*/}
            {/*    }*/}
            {/*         className="absolute right-6 top-6 cursor-pointer">*/}
            {/*        <strong>x</strong>*/}
            {/*    </div>*/}
            {/*    <div className="container mx-auto py-8">*/}
            {/*        <div className="w-96 mx-auto bg-white rounded shadow">*/}
            {/*            <div className="mx-16 py-4 px-8 text-black text-lg font-bold border-b border-grey-500">*/}
            {/*                Добавить студента*/}
            {/*            </div>*/}
            {/*            <form*/}
            {/*                onSubmit={isEditing ? updateUser: handleSubmit}*/}
            {/*                name="student_application" id="student_application">*/}
            {/*                <div className="py-4 px-8">*/}
            {/*                    <div className="mb-2">*/}
            {/*                        <label htmlFor="name"*/}
            {/*                               className="block text-grey-darker text-xm font-bold mb-2">*/}
            {/*                            Ф.И.О студента*/}
            {/*                        </label>*/}
            {/*                        <input required="required" onChange={handleChange}*/}
            {/*                               className=" border rounded w-full py-2 px-3 text-grey-darker"*/}
            {/*                               type="text" id="name"*/}
            {/*                               value={newStudent.name}*/}
            {/*                               name="name"*/}
            {/*                               placeholder="Enter student name"*/}
            {/*                        />*/}

            {/*                    </div>*/}
            {/*                    <div className="mb-2">*/}
            {/*                        <label htmlFor="group" className="block text-grey-darker text-xm font-bold mb-2">*/}
            {/*                            Группа*/}
            {/*                        </label>*/}
            {/*                        <input required="required"*/}
            {/*                               onChange={handleChange}*/}
            {/*                               value={newStudent.group}*/}
            {/*                               id="group"*/}
            {/*                               name="group"*/}
            {/*                               className=" border rounded w-full py-2 px-3 text-grey-darker"*/}
            {/*                               type="text"*/}
            {/*                               placeholder="Enter your group number"/>*/}
            {/*                    </div>*/}
            {/*                    <div className="mb-2">*/}
            {/*                        <label htmlFor="year"*/}
            {/*                               className="block text-grey-darker text-xm font-bold mb-2">*/}
            {/*                            Год поступления*/}
            {/*                        <input*/}
            {/*                            {...register("year",{*/}
            {/*                                required:"Введите номер телефона"*/}
            {/*                            }*/}
            {/*                            )}*/}
            {/*                               onChange={handleChange}*/}
            {/*                               name="year"*/}
            {/*                               value={newStudent.year}*/}
            {/*                               className=" border w-full py-2 px-3 text-grey-darker"*/}
            {/*                               type="date"*/}
            {/*                               id="year"*/}
            {/*                               placeholder="Enter your date"/>*/}
            {/*                        </label>*/}
            {/*                         {errors?.year && <div style={{margin:"20 0",color:"red",fontSize:"8"}}>{errors?.year?.message ||"This field is required"}</div>}*/}

            {/*                    </div>*/}
            {/*                    <div className="mb-2">*/}
            {/*                        <label htmlFor="email"*/}
            {/*                               className=" text-grey-darker text-xm font-bold mb-2">*/}
            {/*                            E-mail*/}
            {/*                        </label>*/}
            {/*                        <input required="required"*/}
            {/*                               onChange={handleChange}*/}
            {/*                               name="email"*/}
            {/*                               value={newStudent.email}*/}
            {/*                               className=" border rounded w-full py-2 px-3 text-grey-darker"*/}
            {/*                               type="email"*/}
            {/*                               id="email"*/}
            {/*                               placeholder="Enter your E-mail"/>*/}

            {/*                    </div>*/}
            {/*                    <div className="mb-2">*/}
            {/*                        <label htmlFor="phone"*/}
            {/*                               className=" text-grey-darker text-xm font-bold mb-2">*/}
            {/*                            Номер телефона*/}
            {/*                        </label>*/}
            {/*                        <input required="required"*/}
            {/*                               onChange={handleChange}*/}
            {/*                               value={newStudent.phone}*/}
            {/*                               className=" border rounded w-full py-3 px-3 text-grey-darker text-xm"*/}
            {/*                               type="phone"*/}
            {/*                               id="phone"*/}
            {/*                               name="phone"*/}
            {/*                               placeholder="Enter your phone number"/>*/}

            {/*                    </div>*/}
            {/*                    <div className="mb-2">*/}
            {/*                        <button onClick={() =>*/}
            {/*                            setModalActive(false)*/}
            {/*                        }*/}
            {/*                            type="submit"*/}
            {/*                            className=" mx-20 rounded-full py-2 px-10 text-white-300 bg-blue-500 hover:bg-sky-700 "*/}
            {/*                        >*/}
            {/*                            {isEditing ?'Update': 'Create'}*/}
            {/*                        </button>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </form>*/}

            {/*        </div>*/}

            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default NotFound;