/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import '../assets/css/index.css';
import '../assets/img/apple-icon.png';

export default class HeaderAdmin extends Component {

	render() {
		return (
			<div>
				<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"></link>
				{/* Navbar */}
				<nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
					<div className="container-fluid">
						<div className="navbar-wrapper">
							<a className="navbar-brand" href="javascript:;">
								Table List
							</a>
						</div>
						<button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
							<span className="sr-only">Toggle navigation</span>
							<span className="navbar-toggler-icon icon-bar" />
							<span className="navbar-toggler-icon icon-bar" />
							<span className="navbar-toggler-icon icon-bar" />
						</button>
						<div className="collapse navbar-collapse justify-content-end">
							<form className="navbar-form">
								<div className="input-group no-border">
									<input type="text" defaultValue className="form-control" placeholder="Search..." />
									<button type="submit" className="btn btn-white btn-round btn-just-icon">
										<i className="material-icons">search</i>
										<div className="ripple-container" />
									</button>
								</div>
							</form>
							<ul className="navbar-nav">
								<li className="nav-item">
									<a className="nav-link" href="javascript:;">
										<i className="material-icons">dashboard</i>
										<p className="d-lg-none d-md-block">Stats</p>
									</a>
								</li>
								<li className="nav-item dropdown">
									<a className="nav-link" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										<i className="material-icons">notifications</i>
										<span className="notification">5</span>
										<p className="d-lg-none d-md-block">Some Actions</p>
									</a>
									<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
										<a className="dropdown-item" href="#">
											Mike John responded to your email
										</a>
										<a className="dropdown-item" href="#">
											You have 5 new tasks
										</a>
										<a className="dropdown-item" href="#">
											You're now friend with Andrew
										</a>
										<a className="dropdown-item" href="#">
											Another Notification
										</a>
										<a className="dropdown-item" href="#">
											Another One
										</a>
									</div>
								</li>
								<li className="nav-item dropdown">
									<a className="nav-link" href="javascript:;" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										<i className="material-icons">person</i>
										<p className="d-lg-none d-md-block">Account</p>
									</a>
									<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfile">
										<a className="dropdown-item" href="#">
											Profile
										</a>
										<a className="dropdown-item" href="#">
											Settings
										</a>
										<div className="dropdown-divider" />
										<a className="dropdown-item" href="#">
											Log out
										</a>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}
