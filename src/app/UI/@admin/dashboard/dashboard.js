/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import '../assets/css/index.css';
import '../assets/img/apple-icon.png';

export default class Dashborad extends Component {
	render() {
		return (
			<div>
				<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"></link>
				<div className="content">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-12">
								<div className="card">
									<div className="card-header card-header-primary">
										<h4 className="card-title ">Simple Table</h4>
										<p className="card-category"> Here is a subtitle for this table</p>
									</div>
									<div className="card-body">
										<div className="table-responsive">
											<table className="table">
												<thead className=" text-primary">
													<tr>
														<th>ID</th>
														<th>Name</th>
														<th>Country</th>
														<th>City</th>
														<th>Salary</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>1</td>
														<td>Dakota Rice</td>
														<td>Niger</td>
														<td>Oud-Turnhout</td>
														<td className="text-primary">$36,738</td>
													</tr>
													<tr>
														<td>2</td>
														<td>Minerva Hooper</td>
														<td>Curaçao</td>
														<td>Sinaai-Waas</td>
														<td className="text-primary">$23,789</td>
													</tr>
													<tr>
														<td>3</td>
														<td>Sage Rodriguez</td>
														<td>Netherlands</td>
														<td>Baileux</td>
														<td className="text-primary">$56,142</td>
													</tr>
													<tr>
														<td>4</td>
														<td>Philip Chaney</td>
														<td>Korea, South</td>
														<td>Overland Park</td>
														<td className="text-primary">$38,735</td>
													</tr>
													<tr>
														<td>5</td>
														<td>Doris Greene</td>
														<td>Malawi</td>
														<td>Feldkirchen in Kärnten</td>
														<td className="text-primary">$63,542</td>
													</tr>
													<tr>
														<td>6</td>
														<td>Mason Porter</td>
														<td>Chile</td>
														<td>Gloucester</td>
														<td className="text-primary">$78,615</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-12">
								<div className="card card-plain">
									<div className="card-header card-header-primary">
										<h4 className="card-title mt-0"> Table on Plain Background</h4>
										<p className="card-category"> Here is a subtitle for this table</p>
									</div>
									<div className="card-body">
										<div className="table-responsive">
											<table className="table table-hover">
												<thead className>
													<tr>
														<th>ID</th>
														<th>Name</th>
														<th>Country</th>
														<th>City</th>
														<th>Salary</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>1</td>
														<td>Dakota Rice</td>
														<td>Niger</td>
														<td>Oud-Turnhout</td>
														<td>$36,738</td>
													</tr>
													<tr>
														<td>2</td>
														<td>Minerva Hooper</td>
														<td>Curaçao</td>
														<td>Sinaai-Waas</td>
														<td>$23,789</td>
													</tr>
													<tr>
														<td>3</td>
														<td>Sage Rodriguez</td>
														<td>Netherlands</td>
														<td>Baileux</td>
														<td>$56,142</td>
													</tr>
													<tr>
														<td>4</td>
														<td>Philip Chaney</td>
														<td>Korea, South</td>
														<td>Overland Park</td>
														<td>$38,735</td>
													</tr>
													<tr>
														<td>5</td>
														<td>Doris Greene</td>
														<td>Malawi</td>
														<td>Feldkirchen in Kärnten</td>
														<td>$63,542</td>
													</tr>
													<tr>
														<td>6</td>
														<td>Mason Porter</td>
														<td>Chile</td>
														<td>Gloucester</td>
														<td>$78,615</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<footer className="footer">
					<div className="container-fluid">
						<nav className="float-left">
							<ul>
								<li>
									<a href="https://www.creative-tim.com">Creative Tim</a>
								</li>
								<li>
									<a href="https://creative-tim.com/presentation">About Us</a>
								</li>
								<li>
									<a href="http://blog.creative-tim.com">Blog</a>
								</li>
								<li>
									<a href="https://www.creative-tim.com/license">Licenses</a>
								</li>
							</ul>
						</nav>
						<div className="copyright float-right">
							© , made with <i className="material-icons">favorite</i> by
							<a href="https://www.creative-tim.com" target="_blank">
								Creative Tim
							</a>{' '}
							for a better web.
						</div>
					</div>
				</footer>
				<div className="fixed-plugin">
					<div className="dropdown show-dropdown">
						<a href="#" data-toggle="dropdown">
							<i className="fa fa-cog fa-2x"> </i>
						</a>
						<ul className="dropdown-menu">
							<li className="header-title"> Sidebar Filters</li>
							<li className="adjustments-line">
								<a href="javascript:void(0)" className="switch-trigger active-color">
									<div className="badge-colors ml-auto mr-auto">
										<span className="badge filter badge-purple" data-color="purple" />
										<span className="badge filter badge-azure" data-color="azure" />
										<span className="badge filter badge-green" data-color="green" />
										<span className="badge filter badge-warning" data-color="orange" />
										<span className="badge filter badge-danger" data-color="danger" />
										<span className="badge filter badge-rose active" data-color="rose" />
									</div>
									<div className="clearfix" />
								</a>
							</li>
							<li className="header-title">Images</li>
							<li className="active">
								<a className="img-holder switch-trigger" href="javascript:void(0)">
									<img src="../assets/img/sidebar-1.jpg" alt="" />
								</a>
							</li>
							<li>
								<a className="img-holder switch-trigger" href="javascript:void(0)">
									<img src="../assets/img/sidebar-2.jpg" alt="" />
								</a>
							</li>
							<li>
								<a className="img-holder switch-trigger" href="javascript:void(0)">
									<img src="../assets/img/sidebar-3.jpg" alt="" />
								</a>
							</li>
							<li>
								<a className="img-holder switch-trigger" href="javascript:void(0)">
									<img src="../assets/img/sidebar-4.jpg" alt="" />
								</a>
							</li>
							<li className="button-container">
								<a href="https://www.creative-tim.com/product/material-dashboard" target="_blank" className="btn btn-primary btn-block">
									Free Download
								</a>
							</li>
							<li className="button-container">
								<a href="https://demos.creative-tim.com/material-dashboard/docs/2.1/getting-started/introduction.html" target="_blank" className="btn btn-default btn-block">
									View Documentation
								</a>
							</li>
							<li className="button-container github-star">
								<a
									className="github-button"
									href="https://github.com/creativetimofficial/material-dashboard"
									data-icon="octicon-star"
									data-size="large"
									data-show-count="true"
									aria-label="Star ntkme/github-buttons on GitHub"
								>
									Star
								</a>
							</li>
							<li className="header-title">Thank you for 95 shares!</li>
							<li className="button-container text-center">
								<button id="twitter" className="btn btn-round btn-twitter">
									<i className="fa fa-twitter" /> · 45
								</button>
								<button id="facebook" className="btn btn-round btn-facebook">
									<i className="fa fa-facebook-f" /> · 50
								</button>
								<br />
								<br />
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
