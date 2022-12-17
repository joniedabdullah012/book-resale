import React from 'react';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hook/useAdmin';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashBoardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><Link to='/dashboard'>My Orders</Link></li>
                        {

                            isAdmin &&


                            <>

                                <li><Link to='/dashboard/allseller'>All seller</Link></li>
                                <li><Link to='/dashboard/allbuyer'>All Buyer</Link></li>
                            </>


                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;