import '../component/Nav.css';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png'

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light py-3 bg-white shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold" to="/">
                        <div className='logo_set'>
                            <img src={Logo} />
                        </div>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i class="bi bi-list"></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>

                        </ul>
                        <div className='buttons'>
                            <NavLink to='/login' className='btn btn-outline-dark me-1'>
                                <i className='bi bi-box-arrow-in-right'></i> Login</NavLink>
                            <NavLink to='/register' className='btn btn-outline-dark me-1'>
                                <i className='bi bi-person-fill'></i> Register</NavLink>
                            <NavLink to='/cart' className='btn btn-outline-dark me-1'>
                                <i className='bi bi-cart-fill'></i> Cart
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;