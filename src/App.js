import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Spinner from "./components/Spinner";
import {BASE_API} from "./constants/constants";

function App() {
    const [students,setStudents] = useState([])
    const [data,setData] = useState({
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
        },[data])
    const deleteStudent = async(id) => {
        await axios.delete(`${BASE_API}${id}`)
         const studentList = students.filter((item) => item.id !== id)
         setStudents(studentList)
    }
    const handle = (e) => {
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
    }
    const submit = (e) => {
        e.preventDefault();
        console.log(data)
        axios.post(`${BASE_API}`,{
            name : data.name,
            group: data.group,
            date: data.date,
            email: data.email,
            phone: data.phone
        }).then((res) => res.data)
        alert("Добавлено успешно!")
    }
    if(isLoading) {
        return <Spinner />
    }
    return (
        <div className="container m-auto my-14">
            <div className="w-full bg-grey-500">
                <div className="container mx-auto py-8">
                    <div className="w-96 mx-auto bg-white rounded shadow">
                        <div className="mx-16 py-4 px-8 text-black text-xl font-bold border-b border-grey-500">Добавить студента
                        </div>
                        <form onSubmit={(e) => submit(e)} name="student_application" id="student_application">
                            <div className="py-4 px-8">
                                <div className="mb-2">
                                    <label className="block text-grey-darker text-sm font-bold mb-2">Ф.И.О студента:</label>
                                    <input required="required" onChange={(e) => handle(e)}
                                        className=" border rounded w-full py-2 px-3 text-grey-darker"
                                        type="text" id="name"
                                        placeholder="Enter Student Name"/>
                                </div>
                                 <div className="mb-2">
                                    <label className="block text-grey-darker text-sm font-bold mb-2">Группа:</label>
                                    <input required="required"
                                         onChange={(e) => handle(e) }
                                           value={data.group}
                                           id="group"
                                        className=" border rounded w-full py-2 px-3 text-grey-darker"
                                           type="number"
                                           placeholder="Enter Your Group number"/>

                                </div>

                                <div className="mb-2">
                                    <label className="block text-grey-darker text-sm font-bold mb-2">Год поступления:</label>
                                    <input required="required"
                                        onChange={(e) => handle(e)}
                                           value={data.date}
                                        className=" border w-full py-2 px-3 text-grey-darker"
                                           type="date"
                                           id="date"
                                           placeholder="Enter Your Date"/>

                                </div>
                                <div className="mb-2">
                                    <label className=" text-grey-darker text-sm font-bold mb-2">E-mail</label>
                                    <input required="required"
                                        onChange={(e) => handle(e)}
                                           value={data.email}
                                        className=" border rounded w-full py-2 px-3 text-grey-darker"
                                        type="email"
                                         id="email"
                                        placeholder="Enter Your E-mail"/>

                                </div>
                                <div className="mb-2">
                                    <label className=" text-grey-darker text-sm font-bold mb-2">Номер телефона</label>
                                    <input required="required"
                                        onChange={(e) => handle(e)}
                                           value={data.phone}
                                        className=" border rounded w-full py-3 px-3 text-grey-darker"
                                        type="phone"
                                        id="phone"
                                        placeholder="Enter Your Phone Number"/>

                                </div>
                                <div className="mb-2">
                                    <button onClick={(e) => submit(e) }
                                            type="submit"
                                        className=" ml-16  rounded-full py-2 px-10 bg-gradient-to-r from-green-400 to-blue-500 hover:bg-sky-700 ">
                                      Добавить
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
                       Удалить
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
                                <button onClick={() => deleteStudent(student.id)}
                                        className="border border-primary  py-2 px-4  inline-block rounded bg-red-500 text-white hover:bg-white-800 hover:text-red-300 "
                                type="submit"
                                >
                                    Удалить
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
