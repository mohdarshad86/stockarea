import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWH } from '../redux/action';
import { useNavigate } from 'react-router-dom';

function WarehouseForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            dispatch(addWH(formData))
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
            <h2>Add a Warehouse</h2>

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
                <button type="submit">Add Warehouse</button>
                <button type="button" onClick={() => navigate('/')}>
                    Go Back to List
                </button>
            </form>
        </div>
    );
}

export default WarehouseForm;