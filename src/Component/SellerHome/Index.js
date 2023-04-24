import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Index.css'
export default function () {
    const navigate=useNavigate();
  return (
    <div>
        <nav className="navbar navbar-dark bg-dark sell">
            <span className='text-white logo'>Junk Trade</span>
            <div>
            <button type="button" class="btn btn-outline-light" style={{marginRight:'10px'}}
            onClick={()=>{
                localStorage.removeItem('sellerauthenticate');
                navigate('/');
            }}>Logout</button>
            </div>
        </nav>
        <div className='login-container'>
            <div className='card login-card shadow-lg p-3 mb-5 bg-white rounded'>
                <button type="button" class="btn btn-secondary btn-lg sellerbtn"
                onClick={()=>{navigate('/seller/dashboard')}}>Order</button>
                <button type="button" class="btn btn-secondary btn-lg sellerbtn">My Orders</button>
            </div>
        </div> 
    </div>
  )
}
