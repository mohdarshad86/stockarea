import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, updateWH } from '../redux/action';
import { useNavigate, useParams } from 'react-router-dom';

function EditWarehouse() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const all_warehouse = useSelector((state) => state.warehouse.value);
    const [formData, setFormData] = useState({
        name: '',
        code: '',
        city: '',
        space_available: '',
        type: '',
        cluster: '',
        is_registered: false,
        is_live: false,
    });

    const params = useParams();

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch]);

    useEffect(() => {
        if (all_warehouse.length === 0) return;
        const warehouse = all_warehouse.find((ele) => ele._id === params.id)
        setFormData(warehouse)
    }, [all_warehouse, params.id])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            dispatch(updateWH(formData))
            navigate('/');
        } catch (error) {
            console.error(error.response.data.message);
            alert(`Error occurred: ${error.response.data.message}`);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="warehouse-form-container">
            <h2>Edit Warehouse</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Warehouse Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="code"
                    placeholder="Warehouse Code"
                    value={formData.code}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="space_available"
                    placeholder="Space Available"
                    value={formData.space_available}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="type"
                    placeholder="Type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="cluster"
                    placeholder="Cluster"
                    value={formData.cluster}
                    onChange={handleChange}
                    required
                />
                <label>
                    Is Registered:
                    <input
                        type="checkbox"
                        name="is_registered"
                        checked={formData.is_registered}
                        onChange={() => setFormData({ ...formData, is_registered: !formData.is_registered })}
                    />
                </label>
                <label>
                    Is Live:
                    <input
                        type="checkbox"
                        name="is_live"
                        checked={formData.is_live}
                        onChange={() => setFormData({ ...formData, is_live: !formData.is_live })}
                    />
                </label>
                <button type="submit">Update</button>
                <button type="button" onClick={() => navigate('/details/' + formData._id)}>
                    Go Back to Details
                </button>
            </form>
        </div>
    );
}

export default EditWarehouse;