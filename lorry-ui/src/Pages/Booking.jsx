import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Booking.css';


function Booking() {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        date: '',
        goods: 'Food', // Default to 'Food' as it's the first option in the select dropdown
        origin: '',
        destination: '',
        amount: '',
        lorrynumber: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const token = localStorage.getItem('token'); // Retrieve the token from localStorage
    
        fetch('https://lorry-backend.onrender.com/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token  // Include the token in the request headers
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .then(() => {
            alert('Booking created successfully!'); // Success message
            navigate('/bookinghistory'); // Navigate on successful POST
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Failed to create booking. Make sure you are logged in.'); // Notify the user of the error
        });
    };
    

    return (
        <>
            <p>1</p>
            <div className="container-top-book"></div>
            <div className="book-page">
            <div className="container py-5">
                <div className="text-center text-white">
                    <h1 className="bookhead display-4 fw-bold">Book Transportation</h1>
                </div>
                <form className='form-container mt-4 text-white p-4 rounded shadow-lg' onSubmit={handleSubmit}>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label"> Name </label>
                            <input type="text" className="form-control" name="name" placeholder="Enter your name" onChange={handleChange} required/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label"> Mobile </label>
                            <input type="text" className="form-control" name="mobile" placeholder="Enter your phone number" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label"> Date </label>
                            <input type="date" className="form-control" name="date" onChange={handleChange} required/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label"> Goods </label>
                                <select name="goods" className="form-control" onChange={handleChange}>
                                    <option>select</option>
                                    <option>Food</option>
                                    <option>Iron</option>
                                    <option>Wood</option>
                                    <option>Others</option>
                                </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label"> Origin </label>
                            <input type="text" className="form-control" name="origin" placeholder="From" onChange={handleChange} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label"> Destination </label>
                            <input type="text" className="form-control" name="destination" placeholder="To" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label"> Amount </label>
                            <input type="text" className="form-control" name="amount" placeholder="Price" onChange={handleChange} required/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label"> Lorry Number </label>
                            <input type="text" className="form-control" name="lorrynumber" placeholder="Enter Lorry number" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="textcenter">
                        <button type="submit">Book</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Booking;
