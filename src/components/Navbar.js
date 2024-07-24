import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-info">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className='nav-item me-4'><Link className='nav-link active fs-5' to='/about'>About Us</Link></li>
                        <li className='nav-item me-4'><Link className='nav-link active fs-5' to='/Academics'>Academics</Link></li>
                        <li className='nav-item me-4'><Link className='nav-link active fs-5' to='/Admission'>Admissions</Link></li>
                        <li className='nav-item me-4'><Link className='nav-link active fs-5' to='/Faculty'>Faculty</Link></li>
                        <li className='nav-item me-4'><Link className='nav-link active fs-5' to='/Student'>Students</Link></li>
                        <li className='nav-item me-4'><Link className='nav-link active fs-5' to='/Gallary'>Gallery</Link></li>
                        <li className='nav-item me-4'><Link className='nav-link active fs-5' to='/contact'>Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
