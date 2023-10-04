import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchData } from '../redux/action';

const WareHouseDetails = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const all_warehouse = useSelector((state) => state.warehouse.value);
    const params = useParams()

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch]);

    if (all_warehouse.length === 0) return <>Loading...</>
    const warehouse = all_warehouse.find((ele) => ele._id === params.id)
    return (
        <>
            <div className="homepage-container">
                <h2>Warehouse Details</h2>

                <button className='warehouse-btn' onClick={() => navigate('/edit/' + warehouse._id)}>
                    Edit Warehouse
                </button>
            </div>
            <div className="warehouse-card" key={warehouse._id}>
                <div className="warehouse-details">
                    <h2><strong>Name:</strong> {warehouse.name}</h2>
                    <p><strong>code:</strong> {warehouse.code}</p>
                    <p><strong>city:</strong> {warehouse.city}</p>
                    <p><strong>space_available:</strong> {warehouse.space_available}</p>
                    <p><strong>type:</strong> {warehouse.type}</p>
                    <p><strong>cluster:</strong> {warehouse.cluster}</p>
                    <p><strong>is_registered:</strong> {warehouse.is_registered ? "Yes" : "No"}</p>
                    <p><strong>is_live:</strong> {warehouse.is_live ? "Yes" : "No"}</p>
                </div>
            </div>
        </>
    )
}

export default WareHouseDetails;