import React from 'react'

export default function PageHeader() {
  return (
    <div className="container mt-0">
				<div className="row breadcrumb-bar">
					<div className="col-md-6">
						<h3 className="block-title">Quick Statistics</h3>
					</div>
					<div className="col-md-6">
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="index.html">
									<span className="ti-home"></span>
								</a>
							</li>
							<li className="breadcrumb-item active">Dashboard</li>
						</ol>
					</div>
				</div>
			</div>
  )
}
