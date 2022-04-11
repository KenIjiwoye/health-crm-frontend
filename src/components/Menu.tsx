import React from 'react'

export default function Menu() {
  return (
    <div className="container menu-nav">
				<nav className="navbar navbar-expand-lg proclinic-bg text-white">
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
					 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="ti-menu text-white"></span>
					</button>
			
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item dropdown active">
								<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
								 aria-expanded="false"><span className="ti-home"></span> Dashboard</a>
								<div className="dropdown-menu">
									<a className="dropdown-item" href="https://www.konnectplugins.com/proclinic/Vertical/index.html">Vertical</a>
									<a className="dropdown-item" href="https://www.konnectplugins.com/proclinic/Vertical-RTL/index.html">Vertical RTL</a>
									<a className="dropdown-item" href="index.html">Horizantal</a>
								</div>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
								 aria-expanded="false"><span className="ti-wheelchair"></span> Patients</a>
								<div className="dropdown-menu">
									<a className="dropdown-item" href="add-patient.html">Add Patient</a>
									<a className="dropdown-item" href="patients.html">All Patients</a>
									<a className="dropdown-item" href="about-patient.html">Patient Details</a>
									<a className="dropdown-item" href="edit-patient.html">Edit Patient</a>
								</div>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
								 aria-expanded="false"><span className="ti-user"></span> Doctors</a>
								<div className="dropdown-menu">
									<a className="dropdown-item" href="add-doctor.html">Add Doctor</a>
									<a className="dropdown-item" href="doctors.html">All Doctors</a>
									<a className="dropdown-item" href="about-doctor.html">Doctor Details</a>
									<a className="dropdown-item" href="edit-doctor.html">Edit Doctor</a>
								</div>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
								 aria-expanded="false"><span className="ti-pencil-alt"></span> Appointments</a>
								<div className="dropdown-menu">
									<a className="dropdown-item" href="add-appointment.html">Add Appointment</a>
									<a className="dropdown-item" href="appointments.html">All Appointments</a>
									<a className="dropdown-item" href="about-appointment.html">Appointment Details</a>
									<a className="dropdown-item" href="edit-appointment.html">Edit Appointment</a>
								</div>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
								 aria-expanded="false"><span className="ti-money"></span> Payments</a>
								<div className="dropdown-menu">
									<a className="dropdown-item" href="add-payment.html">Add Payment</a>
									<a className="dropdown-item" href="payments.html">All Payments</a>
									<a className="dropdown-item" href="about-payment.html">Payment Invoice</a>
								</div>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
								 aria-expanded="false"><span className="ti-key"></span> Room Allotments</a>
								<div className="dropdown-menu">
									<a className="dropdown-item" href="add-room.html">Add Room Allotment</a>
									<a className="dropdown-item" href="rooms.html">All Rooms</a>
									<a className="dropdown-item" href="edit-room.html">Edit Room Allotment</a>
								</div>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
								 aria-expanded="false"><span className="ti-layout-tab"></span> UI Kit</a>
								<div className="dropdown-menu">
									<a className="dropdown-item" href="typography.html">Typography</a>
									<a className="dropdown-item" href="buttons.html">Buttons</a>
									<a className="dropdown-item" href="cards.html">Cards</a>
									<a className="dropdown-item" href="tabs.html">Tabs</a>
									<a className="dropdown-item" href="accordions.html">Accordions</a>
									<a className="dropdown-item" href="modals.html">Modals</a>
									<a className="dropdown-item" href="lists.html">Lists &amp; Media Object</a>
									<a className="dropdown-item" href="grid.html">Grid</a>
									<a className="dropdown-item" href="progress-bars.html">Progress Bars</a>
									<a className="dropdown-item" href="notifications-alerts.html">Notifications &amp; Alerts</a>
									<a className="dropdown-item" href="pagination.html">Pagination</a>
									<a className="dropdown-item" href="carousel.html">Carousel</a>
									<a className="dropdown-item" href="tables.html"> Tables</a>
									<a className="dropdown-item" href="charts-1.html">Morris</a>
									<a className="dropdown-item" href="charts-2.html">Flot</a>
									<a className="dropdown-item" href="map-1.html">Google Maps</a>
									<a className="dropdown-item" href="map-2.html">Vector Maps</a>
									<a className="dropdown-item" href="forms.html">Forms</a>
									<a className="dropdown-item" href="font-awesome.html">Font Awesome </a>
									<a className="dropdown-item" href="themify.html">Themify</a>
								</div>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
								 aria-expanded="false"><span className="ti-file"></span> Other Pages</a>
								<div className="dropdown-menu">
									<a className="dropdown-item" href="login.html">Login </a>
									<a className="dropdown-item" href="sign-up.html">Sign Up</a>
									<a className="dropdown-item" href="404.html">404</a>
									<a className="dropdown-item" href="blank-page.html">Blank Page</a>
									<a className="dropdown-item" href="pricing.html">Pricing</a>
									<a className="dropdown-item" href="faq.html">FAQ</a>
									<a className="dropdown-item" href="invoice.html">Invoice</a>
								</div>
							</li>
						</ul>
					</div>
				</nav>
			</div>
  )
}
