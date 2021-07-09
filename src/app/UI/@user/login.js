/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { actUpdateStateUserLoginRequest } from '../../actions/actions';
import { SignIn } from '../../service/auth.service';
import './css/login.sass';
import { connect } from 'react-redux';
import { message as toastr } from 'antd';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			redirectToReferrer: '',
		};
		this.login = this.login.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	login() {
		if (this.state.username && this.state.password) {
			console.log(this.state.username + '-' + this.state.password);

			var model = {
				email: this.state.username,
				password: this.state.password,
			};

			SignIn(model)
				.then((res) => {
					if (res && res.data) {
						if (res.data) {
							localStorage.setItem('user', JSON.stringify(res.data));
						}

						if (res.data.token) {
							localStorage.setItem('access_token', res.data.token);
						}

						toastr.error('Đăng nhập thành công.');

						if (res.data.role === 'admin') {
							this.updateUserLogin();
							this.setState({ redirectToReferrer: 'admin' });
						}

						if (res.data.role === 'user') {
							this.updateUserLogin();
							this.setState({ redirectToReferrer: 'user' });
						}
					}
				})
				.catch((error) => {
					console.log(error);
					var message = 'Đăng nhập thất bại.';
					if (error && error.response && error.response.data && error.response.data.message) {
						message = error.response.data.message;
						if (message === 'user-not-exist') {
							message = 'Tài khoản không tồn tại.';
						}
					}
					toastr.error(message);
				});
		}
	}

	updateUserLogin() {
		var { dispatch } = this.props;
		dispatch(actUpdateStateUserLoginRequest());
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	render() {
		if (this.state.redirectToReferrer === 'admin') {
			return <Redirect to={'/admin/dashborad'} />;
		}
		if (this.state.redirectToReferrer === 'user') {
			return <Redirect to={'/'} />;
		}
		// if (localStorage.getItem('userData')) {
		//     return (<Redirect to={'/'} />)
		// }

		return (
			<div className="LoginPage">
				<div id="content">
					<div class="login_wrap">
						<div class="login_inner">
							<h2 class="login_tit Lang-LBL0005">Đăng nhập</h2>
							<div class="login_top">
								<section>
									<dl class="tabdl_login" id="jq-tabdl_login">
										<dd class="tab_login_con active">
											<div class="clear_fix">
												<div class="login_left">
													<ul class="etc_list">
														<li class="Lang-LBL5021">Vui lòng đăng nhập để nhận nhiều ưu đãi dành riêng cho thành viên của Lotte Cinema.</li>
													</ul>
													<div class="login_box">
														<span>
															<label for="userId" class="Lang-LBL0121">
																ID
															</label>
															<input onChange={this.onChange} type="text" id="userId" name="username" maxlength="50" placeholder="Vui lòng nhập địa chỉ Email" />
														</span>
														<span>
															<label for="userPassword" class="Lang-LBL0085">
																Mật khẩu
															</label>
															<input onChange={this.onChange} type="password" id="userPassword" name="password" maxlength="20" placeholder="Vui lòng nhập mật khẩu" />
														</span>
													</div>
													<div class="login_find">
														<span>
															<label for="saveId" class="Lang-LBL5024"></label>
														</span>
														<input onClick={this.login} type="button" class="btn_login Lang-LBL0005" value="Đăng nhập" id="btnMember" style={{ cursor: 'pointer' }} title="login" />
														<Link to="/forget-pasword">
															<span>
																<input type="checkbox" id="saveId" name="saveId" value="Y" style={{ marginRight: '4px' }} />
																<a href="javascript:void(0);" target="_blank" title="Tìm mật khẩu Đã mở cửa sổ mới" id="aFindPassword" class="Lang-LBL5026">
																	Tìm mật khẩu
																</a>
															</span>
														</Link>
													</div>
												</div>
											</div>
										</dd>
									</dl>
								</section>
							</div>

							<div class="login_bottom">
								<p class="login_etxt Lang-LBL5022">Nếu bạn chưa có tài khoản, bạn có thể đăng ký!</p>
								<Link to="/resgister">
									<a href="#" class="btn_join Lang-LBL5023" title="Đăng kí tài khoản Đã mở cửa sổ mới" id="aMemberJoin">
										Đăng kí tài khoản
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(function (state) {
	return { rdcUser: state.rdcUser };
})(Login);
