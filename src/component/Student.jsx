import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllStudents } from '../redux/Slices/studentSlice';


function Student() {
    // const dispatch = useDispatch();
    // const { students } = useSelector((state) => state.students);

    // useEffect(() => {
    //     dispatch(getAllStudents());
    // },[dispatch])

    return (
        <>
            <div  className="bg-light flex-fill mt-3">
                <div className="p-2 d-md-none d-flex text-white bg-info">
                    <table className="table table-bordered table-hover table-responsive p-3">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {
                                students.map((student) => {
                                    return (
                                        <tr key={student.id}>
                                            <td>{student.name}</td>
                                            <td>{student.email}</td>
                                        </tr>
                                    )
                                })
                            } */}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Student