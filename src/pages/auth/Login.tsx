import React from 'react'
import {Link} from 'react-router-dom'

export default function Login() {
  return (
    <body className="auth-bg">
      <div className="wrapper">
		{/* <!-- Page Content  --> */}
		<div id="content">
			<div className="container">
				<div className="row">
					<div className="col-sm-6 auth-box">
						<div className="proclinic-box-shadow">
							<h3 className="widget-title">Login</h3>
							<form className="widget-form">
								{/* <!-- form-group --> */}
								<div className="form-group row">
									<div className="col-sm-12">
										<input name="user" placeholder="Username" className="form-control" required data-validation="length alphanumeric" data-validation-length="3-12"
										 data-validation-error-msg="User name has to be an alphanumeric value (3-12 chars)" data-validation-has-keyup-event="true"/>
									</div>
								</div>
								{/* <!-- /.form-group -->
								<!-- form-group --> */}
								<div className="form-group row">
									<div className="col-sm-12">
										<input type="password" placeholder="Password" name="pass_confirmation" className="form-control" data-validation="strength" data-validation-strength="2"
										 data-validation-has-keyup-event="true"/>
									</div>
								</div>
								{/* <!-- /.form-group -->
								<!-- Check Box -->		 */}
								<div className="form-check row">
									<div className="col-sm-12 text-left">
										<div className="custom-control custom-checkbox">
											<input className="custom-control-input" type="checkbox" id="ex-check-2"/>
											<label className="custom-control-label" htmlFor="ex-check-2">Remember Me</label>
										</div>
									</div>
								</div>
								{/* <!-- /Check Box -->	
								<!-- Login Button -->			 */}
								<div className="button-btn-block">
									<button type="button" className="btn btn-primary btn-lg btn-block">Login</button>
								</div>
								{/* <!-- /Login Button -->	
								<!-- Links -->	 */}
								<div className="auth-footer-text">
									<small>New User,
										<Link to="/signup">Sign Up</Link> Here</small>
								</div>
								{/* <!-- /Links --> */}
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- /Page Content  --> */}
	</div>
    </body>
  )
}
