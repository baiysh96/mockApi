// import React from 'react';
// import axios from "axios";
// import {BASE_API} from "../../constants/constants";
// import {useState} from "react";
// import "../Modal/Modal.css"
//
// const AddUserModal = ({students,setStudents,active,setModalActive,setEditUser,editUser}) => {
//     const [newStudent,setNewStudent] = useState({
//         name: editUser?.name || "",
//         group: editUser?.group || "",
//         year: editUser?.year || "",
//         email: editUser?.email || "",
//         phone: editUser?.phone || ""
//     })
//     const handleChange = (e) => {
//         setNewStudent({...newStudent, [e.target.name]: e.target.value})
//     }
//     const handleSubmit = async(e) => {
//         e.preventDefault();
//         const uploadUser = await axios.post(`${BASE_API}`,newStudent)
//         setStudents([...students,uploadUser.data])
//         setNewStudent({
//             name : "",
//             group: "",
//             year: "",
//             email: "",
//             phone: ""
//         })
//     }
//     const updateUser = async(e) => {
//         e.preventDefault()
//         const {data:updatedUser} = await axios.put(`${BASE_API}/${editUser.id}`,newStudent)
//         const updateStudentList = students.map(item => item.id === editUser.id? updatedUser:item)
//         setStudents(updateStudentList)
//         setModalActive(false)
//     }
//     return (
//         <div className={ active ? "modal active":"modal"} onClick={() => {
//              setModalActive(false)
//              setEditUser(null)
//         }}>
//             <div className={ active ? "modal__content active":"modal__content"} onClick={(e) => e.stopPropagation()}>
//                 <div>
//                     <div className="w-96 mx-auto bg-white rounded shadow">
//                         <div className="absolute right-6 top-6 cursor-pointer" onClick={() => {
//                             setModalActive(false)
//                             setEditUser(null)
//                         }}><strong>x</strong>
//                         </div>
//                         <div className="mx-16 py-4 px-8 text-black text-lg font-bold border-b border-grey-500">
//                             Добавить студента
//                         </div>
//                         <form
//                             onSubmit={editUser?updateUser:handleSubmit}
//                             name="student_application" id="student_application">
//                             <div className="py-4 px-8">
//                                 <div className="mb-2">
//                                     <label htmlFor="name"
//                                            className="block text-grey-darker text-xm font-bold mb-2">
//                                         Ф.И.О студента
//                                     </label>
//                                     <input required="required" onChange={handleChange}
//                                            value={newStudent.name}
//                                            className=" border rounded w-full py-2 px-3 text-grey-darker"
//                                            type="text" id="name"
//                                            name="name"
//                                            placeholder="Enter student name"
//                                     />
//
//                                 </div>
//                                 <div className="mb-2">
//                                     <label htmlFor="group" className="block text-grey-darker text-xm font-bold mb-2">
//                                         Группа
//                                     </label>
//                                     <input required="required"
//                                            onChange={handleChange}
//                                            value={newStudent.group}
//                                            id="group"
//                                            name="group"
//                                            className=" border rounded w-full py-2 px-3 text-grey-darker"
//                                            type="text"
//                                            placeholder="Enter your group number"/>
//                                 </div>
//                                 <div className="mb-2">
//                                     <label htmlFor="date"
//                                            className="block text-grey-darker text-xm font-bold mb-2">
//                                         Год поступления
//                                     </label>
//                                     <input required="required"
//                                            id="year"
//                                            onChange={handleChange}
//                                            name="year"
//                                            value={newStudent.year}
//                                            className=" border w-full py-2 px-3 text-grey-darker"
//                                            type="date"
//                                            placeholder="Enter your date"/>
//
//                                 </div>
//                                 <div className="mb-2">
//                                     <label htmlFor="email"
//                                            className=" text-grey-darker text-xm font-bold mb-2">
//                                         E-mail
//                                     </label>
//                                     <input required="required"
//                                            onChange={handleChange}
//                                            name="email"
//                                            value={newStudent.email}
//                                            className=" border rounded w-full py-2 px-3 text-grey-darker"
//                                            type="email"
//                                            id="email"
//                                            placeholder="Enter your E-mail"/>
//
//                                 </div>
//                                 <div className="mb-2">
//                                     <label htmlFor="phone"
//                                            className=" text-grey-darker text-xm font-bold mb-2">
//                                         Номер телефона
//                                     </label>
//                                     <input required="required"
//                                            onChange={handleChange}
//                                            value={newStudent.phone}
//                                            className=" border rounded w-full py-3 px-3 text-grey-darker text-xm"
//                                            type="phone"
//                                            id="phone"
//                                            name="phone"
//                                            placeholder="Enter your phone number"
//                                     />
//
//                                 </div>
//                                 <div className="mb-2">
//                                     <button onClick={() => {
//                                         setModalActive(false)
//                                         setEditUser(null)
//                                     }}
//                                             type="submit"
//                                             className=" mx-20 rounded-full py-2 px-10 text-white-300 transition-0.5s bg-green-400 hover:bg-green-600 "
//                                     >
//                                         {editUser?'Update': 'Create'}
//                                     </button>
//                                 </div>
//                             </div>
//                         </form>
//
//                     </div>
//                 </div>
//             </div>
//
//         </div>
//     );
// };
//
// export default AddUserModal;