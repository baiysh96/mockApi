import './App.css';
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form"
import axios from "axios";
import Spinner from "./components/Spinner";
import {BASE_API} from "./constants/constants";
import Modal from "./components/Modal";

function App() {
    const { register,formState: { errors,isValid } } = useForm({
        mode: "onBlur",
    })
    const [modalActive,setModalActive] = useState(false)
    const [students,setStudents] = useState([])
    const [isEditing,setIsEditing] = useState(false)
    const [updateUserId,setUpdateUserId] = useState(null)
    const [newStudent,setNewStudent] = useState({
        name : "",
        group: "",
        year: "",
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
        setNewStudent({...newStudent, [e.target.name]: e.target.value})
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        const uploadUser = await axios.post(`${BASE_API}`,newStudent)
        setStudents([...students,uploadUser.data])
        setNewStudent({
            name: "",
            group: "",
            year: "",
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
            year: student.year,
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
            year: "",
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
            <button onClick={() => setModalActive(true)} type="button" className="modalBtn">Add new student</button>
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
                                <button onClick={() => handleEdite(student) || setModalActive(true)}
                                        className="border border-primary mr-2 py-2 px-4  inline-block rounded bg-yellow-500 text-white hover:text-black-300  hover:bg-amber-700 "
                                        type="button"
                                >
                                    Edite
                                </button>
                                <button onClick={() => deleteStudent(student.id)}
                                        className="border border-primary  py-2 px-4  inline-block rounded bg-red-700 text-white hover:bg-red-400 hover:text-black-300 "
                                        type="button"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <Modal active={modalActive} setActive={setModalActive} setStudents={setStudents} >
                <div >
                    <div onClick={() =>
                        setModalActive(false) ||
                        setNewStudent({
                            name: "",
                            group: "",
                            year: "",
                            email: "",
                            phone: ""
                        })
                    }
                         className="absolute right-6 top-10 cursor-pointer">
                        <strong>X</strong>
                    </div>
                    <div className="container mx-auto py-8">
                        <div className="w-96 mx-auto bg-white rounded shadow">
                            <div className="mx-16 py-4 px-8 text-black text-lg font-bold border-b border-grey-500">
                                Добавить студента
                            </div>
                            <form
                                onSubmit={isEditing ? updateUser: handleSubmit}
                               >
                                <div className="py-4 px-8">
                                    <div className="mb-2">
                                        <label htmlFor="name"
                                               className="block text-grey-darker text-xm font-bold mb-2">
                                            Ф.И.О студента
                                        </label>
                                        <input {...register("name",{ required: true })}
                                               onChange={handleChange}
                                               value={newStudent.name}
                                               className=" border rounded w-full py-2 px-3 text-grey-darker"
                                               type="text" id="name"
                                               name="name"
                                               placeholder="Enter student name"
                                        />
                                        {errors.name && <span style={{
                                            marginTop:"10px",
                                            color:"red",
                                            fontSize:"14px"
                                         }}>This field is required</span>}

                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="group" className="block text-grey-darker text-xm font-bold mb-2">
                                            Группа
                                        </label>
                                        <input {...register("group",{ required: true })}
                                               onChange={handleChange}
                                               value={newStudent.group}
                                               id="group"
                                               name="group"
                                               className=" border rounded w-full py-2 px-3 text-grey-darker"
                                               type="text"
                                               placeholder="Enter your group number"
                                        />
                                        {errors.group && <span style={{
                                            marginTop:"10px",
                                            color:"red",
                                            fontSize:"14px"
                                        }}>This field is required</span>}
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="year"
                                               className="block text-grey-darker text-xm font-bold mb-2">
                                            Год поступления
                                        </label>
                                        <input {...register("year",{ required: true })}
                                               onChange={handleChange}
                                               name="year"
                                               value={newStudent.year}
                                               className=" border w-full py-2 px-3 text-grey-darker"
                                               type="date"
                                               id="year"
                                               placeholder="Enter your date"/>
                                        {errors.year && <span style={{
                                            marginTop:"10px",
                                            color:"red",
                                            fontSize:"14px"
                                        }}>This field is required</span>}

                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="email"
                                               className=" text-grey-darker text-xm font-bold mb-2">
                                            E-mail
                                        </label>
                                        <input {...register("email",{ required: true })}
                                               onChange={handleChange}
                                               name="email"
                                               value={newStudent.email}
                                               className=" border rounded w-full py-2 px-3 text-grey-darker"
                                               type="email"
                                               id="email"
                                               placeholder="Enter your E-mail"/>
                                        {errors.email && <span style={{
                                            marginTop:"10px",
                                            color:"red",
                                            fontSize:"14px"
                                        }}>This field is required</span>}

                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="phone"
                                               className=" text-grey-darker text-xm font-bold mb-2">
                                            Номер телефона
                                        </label>
                                        <input {...register("phone",{ required: true })}
                                               onChange={handleChange}
                                               value={newStudent.phone}
                                               className=" border rounded w-full py-3 px-3 text-grey-darker text-xm"
                                               type="tel"
                                               id="phone"
                                               name="phone"
                                               placeholder="Enter your phone number"/>
                                        {errors.phone && <span style={{
                                            marginTop:"10px",
                                            color:"red",
                                            fontSize:"14px"
                                        }}>This field is required</span>}

                                    </div>
                                    <div className="mb-2">
                                        <button onClick={() =>
                                            setModalActive(false) &&
                                            setNewStudent({
                                            name: "",
                                            group: "",
                                            year: "",
                                            email: "",
                                            phone: ""
                                        })
                                        }
                                                disabled={!isValid}
                                                type="submit"
                                                className=" mx-20 rounded-full py-2 px-10 text-white-300 bg-pink-500 hover:bg-red-900 "
                                        >
                                            {isEditing ?'Update': 'Create'}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </Modal>

        </div>
    );
}

export default App;
