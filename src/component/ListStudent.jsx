import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteStudentById, getAllStudents } from '../redux/Slices/studentSlice';
import { useNavigate } from 'react-router-dom';


function ListStudent() {
    const dispatch = useDispatch();
    const [id , setId] = useState('');
    const {students , error , loading} = useSelector((state) => state.students);
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getAllStudents());
        // console.log(students);
    }, [dispatch]);

    const deleteStudent = () => {
        dispatch(deleteStudentById(id)).then(() => {
            // dispatch(getAllStudents());
            dispatch(getAllStudents());
        })
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return (
        <>
            <div
                className="table-responsive container pt-5 mt-5">
                <table
                    className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope='col'>Control</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students &&students.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item?.id}</td>
                                        <td>{item?.name}</td>
                                        <td>{item?.email}</td>
                                        <td>
                                            <button className="btn btn-warning me-2" 
                                            onClick={() => {navigate(`${item?.id}`) }}>Edit</button>

                                            <button className="btn btn-danger me-2" data-bs-toggle="modal" data-bs-target="#modalId" onClick={() =>setId(item?.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
            
            
            <div
                className="modal fade"
                id="modalId"
                tabIndex="-1"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                role="dialog"
                aria-labelledby="modalTitleId"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog "
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalTitleId">
                                {
                                    id && <h5>Are you sure you want to delete {id}</h5>
                                }
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">Body</div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button  type="button" className="btn btn-primary" onClick={deleteStudent}>Yes</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default ListStudent