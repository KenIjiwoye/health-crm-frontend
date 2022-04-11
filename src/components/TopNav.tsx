import React from 'react'

export default function TopNav() {
    return (
        <div className="container top-brand">
            <nav className="navbar navbar-default">
                <div className="navbar-header">
                    <div className="sidebar-header"> <a href="index.html"><img src={`${process.env.PUBLIC_URL}/assets/images/logo-dark.png`} className="logo" alt="logo" /></a>
                    </div>
                </div>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link">
                            <span title="Fullscreen" className="ti-fullscreen fullscreen"></span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="modal" data-target=".proclinic-modal-lg" >
                            <span className="ti-search"></span>
                        </a>
                        <div className="modal fade proclinic-modal-lg" tabIndex={-1} role="dialog" aria-hidden="true">
                            <div className="modal-dialog modal-lorvens">
                                <div className="modal-content proclinic-box-shadow2">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Search Patient/Doctor:</h5>
                                        <span className="ti-close" data-dismiss="modal" aria-label="Close">
                                        </span>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="search-term" placeholder="Type text here" />
                                                <button type ="button" className="btn btn-lorvens proclinic-bg">
                                                <span className="ti-location-arrow"></span> Search</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
                            aria-expanded="false">
                            <span className="ti-announcement"></span>
                        </a>
                        <div className="dropdown-menu proclinic-box-shadow2 notifications animated flipInY">
                            <h5>Notifications</h5>
                            <a className="dropdown-item" href="#">
                                <span className="ti-wheelchair"></span> New Patient Added</a>
                            <a className="dropdown-item" href="#">
                                <span className="ti-money"></span> Patient payment done</a>
                            <a className="dropdown-item" href="#">
                                <span className="ti-time"></span>Patient Appointment booked</a>
                            <a className="dropdown-item" href="#">
                                <span className="ti-wheelchair"></span> New Patient Added</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
                            aria-expanded="false">
                            <span className="ti-user"></span>
                        </a>
                        <div className="dropdown-menu proclinic-box-shadow2 profile animated flipInY">
                            <h5>John Willing</h5>
                            <a className="dropdown-item" href="#">
                                <span className="ti-settings"></span> Settings</a>
                            <a className="dropdown-item" href="#">
                                <span className="ti-help-alt"></span> Help</a>
                            <a className="dropdown-item" href="#">
                                <span className="ti-power-off"></span> Logout</a>
                        </div>
                    </li>
                </ul>

            </nav>
        </div>
    )
}
