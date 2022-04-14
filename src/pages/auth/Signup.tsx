import React from 'react'
import {Link} from 'react-router-dom'

export default function Signup() {
  return (
    <body className="auth-bg">
        <div className="wrapper">
		<div id="content">
			<div className="container">
				<div className="row">
					<div className="col-sm-6 auth-box">
						<div className="proclinic-box-shadow">
							<h3 className="widget-title">Sign Up</h3>

							<form className="widget-form">
								<div className="form-group row">
									<div className="col-sm-12">
										<input type="email" placeholder="Email" name="email" className="form-control" required data-validation="email" data-validation-has-keyup-event="true"/>
									</div>
								</div>
								
								<div className="form-group row">
									<div className="col-sm-12">
										<input name="user" placeholder="Username" className="form-control" required data-validation="length alphanumeric" data-validation-length="3-12"
										 data-validation-error-msg="User name has to be an alphanumeric value (3-12 chars)" data-validation-has-keyup-event="true"/>
									</div>
								</div>
								
								<div className="form-group row">
									<div className="col-sm-12">
										<input type="password" placeholder="Password" name="pass_confirmation" className="form-control" data-validation="strength" data-validation-strength="2"
										 data-validation-has-keyup-event="true"/>
									</div>
								</div>
								
								<div className="form-group row">
									<div className="col-sm-12">
										<input type="password" placeholder="Confirm Password" name="pass_confirmation" className="form-control" data-validation="strength"
										 data-validation-strength="2" data-validation-has-keyup-event="true"/>
									</div>
								</div>
								<div className="form-check row">
									<div className="col-sm-12 text-left">
										<div className="custom-control custom-checkbox">
											<input className="custom-control-input" type="checkbox" id="ex-check-2"/>
											<label className="custom-control-label" htmlFor="ex-check-2">I agree to Terms & Conditions</label>
										</div>
									</div>
								</div>
								<div className="button-btn-block">
									<button type="button" className="btn btn-primary btn-lg btn-block">Sign Up</button>
								</div>
								<div className="auth-footer-text">
									<small>Already Sign Up,
										<Link to="/">Login</Link> Here</small>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </body>
  )
}
