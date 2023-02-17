import { Outlet, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <nav>

            <div>
            <p className="comp">WASSERSTOFF</p>
            </div>
                
                <div className="input">
                    <input type={'text'} />
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
                <div className="link-container">
                    <NavLink to="/" className="link">Statistics</NavLink>
                    
                    <NavLink to="overview" className="link">Overview</NavLink>
                    <NavLink to="dashboard" className="link">Dashboard</NavLink>
                    <Link to="#" className="link">Analytics</Link>
                </div>
            <div>
            <div className="nav-icons">
            <i className="fa fa-user fa-lg" aria-hidden="true"></i>
            <i className="fa-solid fa-sort fa-lg"></i>
            </div>
           
            </div>
            </nav>
        </>
    )
};

export default Nav;