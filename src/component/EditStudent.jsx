import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getStudentById, updateStudent } from '../redux/Slices/studentSlice';

function EditStudent() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Local state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const { student, loading, error } = useSelector(state => state.students);

    useEffect(() => {
        dispatch(getStudentById(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (student) {
            setName(student.name || ''); 
            setEmail(student.email || ''); 
        }
    }, [student]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateStudent({ id, name, email })).then((result) => {
            navigate('/students');
        }).catch((err) => {
            console.log(err);
        })
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='card container mt-5'>
            <div className='card-body'>
                <h5 className='mt-2 card-title'>Edit Student</h5>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter The Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter The email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <button type="submit" className='btn btn-primary'>Update</button>
                </form>
            </div>
        </div>
    );
}

export default EditStudent;
