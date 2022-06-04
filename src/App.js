import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Spinner from "./components/Spinner";
import {BASE_API} from "./constants/constants";

function App() {
    const [students,setStudents] = useState([])
    const [isEditing,setIsEditing] = useState(false)
    const [updateUserId,setUpdateUserId] = useState(null)
    const [newStudent,setNewStudent] = useState({
        name : "",
        group: "",
        date: "",
        email: "",
        phone: ""
    })
    const [isLoading,setIsLoading] = useState(true)
        useEffect(() => {
            axios(`${BASE_API}`)
                .then((res) => {
                    setStudents(res.data)
                    setIsLoading(false)
                })
        })

    const handleChange = (e) => {
        setNewStudent({...newStudent, [e.target.id]: e.target.value})
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        const uploadUser = await axios.post(`${BASE_API}`,newStudent)
        setStudents([...students,uploadUser.data])
        setNewStudent({
            name: "",
            group: "",
            date: "",
            email: "",
            phone: ""
        })
    }

    const handleEdite = (student) => {
        setIsEditing(true)
        setUpdateUserId(student.id)
        setNewStudent({
            name: student.name,
            group: student.group,
            date: student.date,
            email: student.email,
            phone: student.phone
        })

    }
    const updateUser = async(e) => {
        e.preventDefault()
        setIsEditing(false)
        const {data:updatedUser} = await axios.put(`${BASE_API}/${updateUserId}`,newStudent)
        const updateStudentList = students.map(item => item.id === updatedUser.id? updatedUser:item)
        setStudents(updateStudentList)
        setNewStudent({
            name: "",
            group: "",
            date: "",
            email: "",
            phone: ""
        })
    }
    const deleteStudent = async(id) => {
        await axios.delete(`${BASE_API}${id}`)
        const studentList = students.filter((item) => item.id !== id)
        setStudents(studentList)
    }
    if(isLoading) {
        return <Spinner />
    }
    return (
        <div className="container m-auto my-14">
            <div className="w-full bg-grey-500">
                <div className="container mx-auto py-8">
                    <div className="w-96 mx-auto bg-white rounded shadow">
                        <div className="mx-16 py-4 px-8 text-black text-lg font-bold border-b border-grey-500">Добавить студента
                        </div>
                        <form onSubmit={isEditing ? updateUser: handleSubmit} name="student_application" id="student_application">
                            <div className="py-4 px-8">
                                <div className="mb-2">
                                    <label htmlFor="name" className="block text-grey-darker text-xm font-bold mb-2">Ф.И.О студента</label>
                                    <input required="required" onChange={handleChange}
                                           value={newStudent.name}
                                        className=" border rounded w-full py-2 px-3 text-grey-darker"
                                        type="text" id="name"
                                           name="name"
                                           placeholder="Enter student name"
                                           />

                                </div>
                                 <div className="mb-2">
                                    <label htmlFor="group" className="block text-grey-darker text-xm font-bold mb-2">Группа</label>
                                    <input required="required"
                                         onChange={handleChange}
                                           value={newStudent.group}
                                           id="group"
                                           name="group"
                                        className=" border rounded w-full py-2 px-3 text-grey-darker"
                                           type="text"
                                           placeholder="Enter your group number"/>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="date" className="block text-grey-darker text-xm font-bold mb-2">Год поступления</label>
                                    <input required="required"
                                        onChange={handleChange}
                                           name="date"
                                           value={newStudent.date}
                                        className=" border w-full py-2 px-3 text-grey-darker"
                                           type="date"
                                           id="date"
                                           placeholder="Enter your date"/>

                                </div>
                                <div className="mb-2">
                                    <label htmlFor="email" className=" text-grey-darker text-xm font-bold mb-2">E-mail</label>
                                    <input required="required"
                                        onChange={handleChange}
                                           name="email"
                                           value={newStudent.email}
                                        className=" border rounded w-full py-2 px-3 text-grey-darker"
                                        type="email"
                                         id="email"
                                        placeholder="Enter your E-mail"/>

                                </div>
                                <div className="mb-2">
                                    <label htmlFor="phone" className=" text-grey-darker text-xm font-bold mb-2">Номер телефона</label>
                                    <input required="required"
                                        onChange={handleChange}
                                           value={newStudent.phone}
                                        className=" border rounded w-full py-3 px-3 text-grey-darker text-xm"
                                        type="phone"
                                        id="phone"
                                           name="phone"
                                        placeholder="Enter your phone number"/>

                                </div>
                                <div className="mb-2">
                                    <button
                                        type="submit"
                                        className=" mx-20 rounded-full py-2 px-10 text-white-300 bg-blue-500 hover:bg-sky-700 "
                                    >
                                        {isEditing?'Update': 'Create'}
                                    </button>
                                </div>
                            </div>
                        </form>

                    </div>

                </div>
            </div>

            <table className="table-auto w-full">
                <thead>
                <tr className="bg-blue-600 text-center">
                    <th className="min-w-50px text-lg  font-semibold text-white py-4  lg:py-7 lg:px-4  border-l border-transparent">
                        #
                    </th>
                    <th className=" w-1/7  min-w-[160px] text-lg  font-semibold text-white py-4  lg:py-7 lg:px-4  border-l border-transparent">
                        Ф.И.О студента
                    </th>
                    <th className=" w-1/7  min-w-[160px] text-lg  font-semibold text-white py-4  lg:py-7 lg:px-4  border-l border-transparent">
                        Группа
                    </th>
                    <th className=" w-1/7 min-w-[160px] text-lg  font-semibold text-white py-4  lg:py-7 lg:px-4  border-l border-transparent">
                        Год поступления
                    </th>
                    <th className=" w-1/7  min-w-[160px] text-lg  font-semibold text-white py-4  lg:py-7 lg:px-4  border-l border-transparent">
                        E-mail
                    </th>
                    <th className=" w-1/7  min-w-[160px] text-lg  font-semibold text-white py-4  lg:py-7 lg:px-4  border-l border-transparent">
                        Номер телефона
                    </th>
                    <th className=" w-1/7  min-w-[160px] text-lg  font-semibold text-white py-4  lg:py-7 lg:px-4  border-l border-transparent">
                       Options
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    students.map((student) => (
                        <tr key={student.id}>
                            <td className=" text-center text-dark text-base  py-5  px-2  bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                                {student.id}
                            </td>
                            <td className=" text-center text-dark text-base  py-5  px-2  bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                                {student.name}
                            </td>
                            <td className=" text-center text-dark text-base  py-5  px-2  bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                                {student.group}
                            </td>
                            <td className=" text-center text-dark text-base  py-5  px-2  bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                                {student.year}
                            </td>
                            <td className=" text-center text-dark text-base  py-5  px-2  bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                                {student.email}
                            </td>
                            <td className=" text-center text-dark text-base  py-5  px-2  bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                                {student.phone}
                            </td>
                            <td className=" text-center text-dark text-base  py-5  px-2  bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                                <button onClick={() => handleEdite(student)}
                                        className="border border-primary mr-2 py-2 px-4  inline-block rounded bg-yellow-500 text-white hover:text-black-300  hover:bg-amber-700 "
                                        type="submit"
                                >
                                    Edite
                                </button>
                                <button onClick={() => deleteStudent(student.id)}
                                        className="border border-primary  py-2 px-4  inline-block rounded bg-red-700 text-white hover:bg-red-400 hover:text-black-300 "
                                type="submit"
                                >
                                  Delete
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>


        </div>
    );
}

export default App;
