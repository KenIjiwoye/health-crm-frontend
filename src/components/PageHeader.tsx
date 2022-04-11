import React from 'react'

type PageHeaderProps = {
	title: string;
	items: string[];
}

const handleBreadcrumbs = (items:any) => {
	items.map((a:any,i:number) => {
		console.log('inside the breadcrumb loop', a)
		return <li className="breadcrumb-item active">Test</li>
	})
}

export default function PageHeader({title,items}:PageHeaderProps) {
  return (
    <div className="container mt-0">
				<div className="row breadcrumb-bar">
					<div className="col-md-6">
						<h3 className="block-title">{title}</h3>
					</div>
					<div className="col-md-6">
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="index.html">
									<span className="ti-home"></span>
								</a>
							</li>
							{/* <li className="breadcrumb-item active">Dashboard</li> */}
							{
								items.map((a:any,i:number) => {
									return <li className="breadcrumb-item active">{a}</li>
								})
							}
						</ol>
					</div>
				</div>
			</div>
  )
}
