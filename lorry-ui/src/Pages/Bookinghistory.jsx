import React, { useState, useEffect } from 'react';
import '../Styles/Bookinghistory.css'
import jsPDF from 'jspdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faDownload } from '@fortawesome/free-solid-svg-icons';


function Bookinghistory(){
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState('');
    const [dateFilter, setDateFilter] = useState('');
    const [settled, setSettled] = useState({});
    const [readyToDownload, setReadyToDownload] = useState({});

    useEffect(() => {
      const token = localStorage.getItem('token');
      const query = dateFilter ? `date=${dateFilter}` : `search=${encodeURIComponent(search)}`;
      fetch(`http://localhost:4000/bookinghistory/?${query}`, {
          headers: {
              'Content-Type': 'application/json',
              'auth-token': token
          }
      })
      .then(response => {
        if (response.ok) return response.json();
        else throw new Error('Failed to fetch data');
      })
      .then(data => setItems(data))
      .catch(err => console.error('Error fetching data: ', err));
    }, [search, dateFilter]);  // Include dateFilter in dependency array
    
  

  function formatDate(isoDateString) {
    return new Date(isoDateString).toLocaleDateString('en-GB'); // 'en-GB' uses day-month-year format (DD-MM-YYYY)
   }

   function deleteItem(itemId) {
    // Confirmation dialog
      if (window.confirm("Are you sure you want to delete this record?")) {
          fetch(`http://localhost:4000/booking/${itemId}`, {
              method: 'DELETE',
          })
          .then(response => response.json())
          .then(() => {
              // Refresh the list after a successful delete
              setItems(prevItems => prevItems.filter(item => item._id !== itemId));
              alert("Record deleted successfully."); // Optional: Add an alert for confirmation of deletion
          })
          .catch(err => console.error('Error deleting item:', err));
      }
    }


    function generatePDF(item) {
      const pdf = new jsPDF();
  
      // Add the header
      pdf.setFontSize(22);
      pdf.text('SRI SAI TEJASWI LORRY SERVICE', 105, 20, null, null, 'center');
  
      // Add the mobile number
      pdf.setFontSize(12);
      pdf.text(`Address: `, 105, 30, null, null, 'center');
      pdf.text(`Contact: `, 105, 40, null, null, 'center');

      // Transaction Details
      pdf.setFontSize(12);
      pdf.text(`Date: `, 20, 60);
      pdf.text(`Day: `, 20, 70);
      pdf.text(`Customer Name: ${item.name}`, 20, 80);
      pdf.text(`Mobile: ${item.mobile}`, 20, 90);
      pdf.text(`From: ${item.origin} - To: ${item.destination}`, 20, 100);
      pdf.text(`Goods: ${item.goods}`, 20, 110);
      pdf.text(`Amount: ${item.amount}`, 20, 120);

      // Footer
      pdf.text("This is an e-generated slip and doesn't need a signature.", 20, 130);
  
      // Save the PDF
      pdf.save(`${item.name}-booking.pdf`);
  }

  function handleSettlement(item) {
    // Mark the item as ready for download
    setReadyToDownload(prev => ({ ...prev, [item._id]: true }));
  }
  
  function handleDownload(item) {
    if (readyToDownload[item._id]) {
      generatePDF(item);
    }
  }
  
  

  return (
    <>
    <p>1</p>
    <div className="container-top"></div>
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <input
        type="date"
        value={dateFilter}
        onChange={(e) => setDateFilter(e.target.value)}
        className="date-picker"
      />
    </div>
    <div className="container my-3">
      <div className="row">
        {items.map((item, index) => (
          <div key={index} className="col-md-4 mb-5">
            <div className={`card card-animate ${item.amount > 1000 ? 'high-value' : ''}`}>

              <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>{item.name}</span>
                <button onClick={() => deleteItem(item._id)} className="deleteIcon" style={{ border: 'none', background: 'none' }}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </div>

              <div className="card-body">
                {/* <h5 className="card-title">{item.name}</h5> */}
                <p className="card-text">Date: <span className='textHistory'>{formatDate(item.date)}</span></p>
                <p className="card-text">Lorry Number: <span className='textHistory'><span style={{textTransform: "uppercase"}}>{item.lorrynumber}</span></span></p>
                <p className="card-text">From: <span className='textHistory'><span style={{textTransform: "capitalize"}}>{item.origin}</span></span> To: <span className='textHistory'><span style={{textTransform: "capitalize"}}>{item.destination}</span></span> </p>
                <p className="card-text">Mobile: <span className='textHistory'>{item.mobile}</span></p>
                <p className="card-text">Goods: <span className='textHistory'>{item.goods}</span></p>
                <p className="card-text">Amount: <span className='textHistory'>{item.amount}/-</span></p>
                <button className={`btn ${readyToDownload[item._id] ? 'btn-success' : 'btn-danger'}`} 
                  onClick={() => readyToDownload[item._id] ? handleDownload(item) : handleSettlement(item)} 
                  id='history-btn'>
                  {readyToDownload[item._id] ? <FontAwesomeIcon icon={faDownload} /> : 'Settlement Done'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  ); 
}

export default Bookinghistory