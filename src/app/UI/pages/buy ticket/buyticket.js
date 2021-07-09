/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { DatePicker, Space } from 'antd';
import { Modal, Button } from 'antd';
import '../../css/buyticket.sass';

function onChange(date, dateString) {
	console.log(date, dateString);
}

export default class BuyTicket extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalVisible: false,
		};
	}

	showModal = () => {
		this.setState({ isModalVisible: true });
	};

	handleOk = () => {
		this.setState({ isModalVisible: false });
	};

	handleCancel = () => {
		this.setState({ isModalVisible: false });
	};

	render() {
		return (
			<div className="BuyTicketPage">
				<div class="cont_ticket">
					<div class="cont_ticket_Area">
						<div class="ticket_inner">
							<div class="ticket_step">
								<div class="ticket_left">
									<dl class="theater_header">
										<dt class="Lang-LBL0001">Rạp</dt>
										<dd class="txt_add"></dd>
										<dt class="date_picker">
											<Space direction="vertical">
												<DatePicker onChange={onChange} />
											</Space>
										</dt>
									</dl>
									<dl class="ticket_My">
										<dt class="Lang-LBL0003">Rạp chiếu phim của tôi</dt>
										<dd class="default">
											<span class="txtCiadd Lang-LBL0004">Bạn có thể kiểm tra sau khi đăng nhập.</span>
											<a href="javascript:openLoginPopup($(this));" class="btnLogin" title="Xem thông tin chi tiết phim">
												<span class="Lang-LBL0005">Đăng nhập</span>
											</a>
										</dd>
										<dd class="other" style={{ display: 'none' }}>
											<span class="txtCiadd Lang-LBL0006">Bạn có thể kiểm tra rạp hát MY bằng cách đăng nhập với tư cách thành viên đầy đủ.</span>
										</dd>
										<dd class="list" style={{ display: 'none' }}>
											<span class="txtCiadd Lang-LBL0007">Vui lòng đăng ký rạp chiếu phim MY.</span>
											<ul class="favorite_list"></ul>
											<a href="javascript:void(0);" class="btnCinema" title="Xem thông tin chi tiết phim">
												<em class="Lang-LBL0008">Cài đặt</em>
											</a>
										</dd>
									</dl>
									{/* //// */}

									<div class="theater_cont">
										<div class="theater_top">
											<ul class="theater_list">
												<li>
													<a href="javascript:void(0);" class="tab01">
														<span class="Lang-LBL0009">Tất cả</span>
													</a>
												</li>
												<li>
													<a href="javascript:void(0);" class="tab02 on">
														<span class="Lang-LBL0010">Phòng chiếu đặc biệt</span>
													</a>
												</li>
											</ul>
										</div>
										<div class="tab_srcoll">
											<div class="tab_cont on" style={{ display: 'block' }}>
												<ul class="theater_zone screen1">
													<li class="area0001">
														<span class="area_zone">
															<a href="javascript:void(0);" class="on">
																<h4>
																	TPHCM(<em>0</em>)
																</h4>
																<div class="blind">Đã chọn</div>
															</a>
														</span>
														<div class="area_cont on">
															<ul class="area_list d0001">
																<li>
																	<a href="javascript:void(0);" class="100018009 disabled">
																		Cantavil
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);" class="100018008 disabled">
																		Cộng Hòa
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);" class="100018027 disabled">
																		Gò Vấp
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);" class="100018044 disabled">
																		Gold View
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);" class="100018046 disabled">
																		Moonlight
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);" class="100018001 disabled">
																		Nam Sài Gòn
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);" class="100018024 disabled">
																		Nowzone
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);" class="100018012 disabled">
																		Phú Thọ
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);" class="100018028 disabled">
																		Thủ Đức
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);" class="100018042 disabled">
																		Ung Văn Khiêm
																	</a>
																</li>
															</ul>
														</div>
													</li>
													<li class="area0002">
														<span class="area_zone">
															<a href="javascript:void(0);">
																<h4>
																	Hà Nội(<em>5</em>)
																</h4>
															</a>
														</span>
														<div class="area_cont">
															<ul class="area_list d0002">
																<li>
																	<a href="javascript:void(0);" class="100028005">
																		Hà Đông
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);" class="100028049">
																		Kosmo
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);" class="100028034">
																		Long Biên
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);" class="100028048">
																		Minh Khai
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);" class="100028025">
																		Thăng Long
																	</a>
																</li>
															</ul>
														</div>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div class="ticket_right">
									<dl class="theater_header">
										<dt class="Lang-LBL0011">Phim</dt>
										<dd class="txt_add"></dd>
									</dl>
									<div class="movie_cont">
										<ul class="tkMTab">
											<li class="on">
												<a href="javascript:void(0);" class="Lang-LBL0012" data-sort="BookingSortSequence">
													Xem nhiều nhất
												</a>
											</li>
											<li>
												<a href="javascript:void(0);" class="Lang-LBL0014" data-sort="ViewSortSequence">
													Đánh giá tốt nhất
												</a>
											</li>
										</ul>
										<div class="scroll_bar">
											<div class="blind">
												<h4 id="title_h4">Đặt vé trước</h4>
											</div>
											<ul class="movie_list">
												<li>
													<a href="javascript:void(0);" class="mov10714">
														<span class="grade_18">18</span>
														<em>BÀN TAY DIỆT QUỶ</em>
													</a>
												</li>
												<li>
													<a href="javascript:void(0);" class="mov10686">
														<span class="grade_18">18</span>
														<em>SIÊU TRỘM</em>
													</a>
												</li>
												<li>
													<a href="javascript:void(0);" class="mov10675">
														<span class="grade_16">16</span>
														<em>49K NGƯỜI NHÂN BẢN</em>
													</a>
												</li>
												<li>
													<a href="javascript:void(0);" class="mov10552">
														<span class="grade_16">16</span>
														<em>49K ĐIỆP VIÊN SIÊU LẦY</em>
													</a>
												</li>
												<li>
													<a href="javascript:void(0);" class="mov10707">
														<span class="grade_18">18</span>
														<em>49K PALM SPRINGS: MỞ MẮT THẤY HÔM QUA</em>
													</a>
												</li>
												<li>
													<a href="javascript:void(0);" class="mov10717">
														<span class="grade_18">18</span>
														<em>ẤN QUỶ</em>
													</a>
												</li>
												<li>
													<a href="javascript:void(0);" class="mov10656">
														<span class="grade_13">13</span>
														<em>BỐ GIÀ</em>
													</a>
												</li>
												<li>
													<a href="javascript:void(0);" class="mov10708">
														<span class="grade_13">13</span>
														<em>GODZILLA VS. KONG</em>
													</a>
												</li>
												<li>
													<a href="javascript:void(0);" class="mov10710">
														<span class="grade_18">18</span>
														<em>MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ</em>
													</a>
												</li>
												<li>
													<a href="javascript:void(0);" class="mov10668">
														<span class="grade_18">18</span>
														<em>NHÀ KHO QUỶ ÁM</em>
													</a>
												</li>
												<li>
													<a href="javascript:void(0);" class="mov10726">
														<span class="grade_13">13</span>
														<em>THÁM TỬ LỪNG DANH CONAN: VIÊN ĐẠN ĐỎ</em>
													</a>
												</li>
												<li>
													<a href="javascript:void(0);" class="mov10729">
														<span class="grade_18">18</span>
														<em>TRÙM CUỐI SIÊU ĐẲNG</em>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="selectMv">
					<div class="selectMv_Area">
						<dl class="txtdate">
							<dt class="Lang-LBL0015">Ngày</dt>
							<dd class="viewCinemaDate">04/07/2021(CN)</dd>
						</dl>
						<dl class="txtCin">
							<dt class="Lang-LBL0001">Rạp</dt>
							<dd>
								<span class="Lang-LBL0017" style={{ display: 'none' }}>
									Vui lòng chọn phòng chiếu
								</span>
								<ul class="listMv viewCinemaList">
									<li class="100048021">
										Việt Trì
										<a href="javascript:void(0);">
											<img src="https://www.lottecinemavn.com/LCHS/Image/Btn/btn_mv_close.gif" alt="close" />
										</a>
									</li>
								</ul>
							</dd>
						</dl>
						<dl class="txtName">
							<dt class="Lang-LBL0011">Phim</dt>
							<dd>
								<span class="Lang-LBL0019" style={{ display: 'none' }}>
									Vui lòng chọn phim
								</span>
								<ul class="listMv viewMovieList">
									<li class="mov10656">
										BỐ GIÀ
										<a href="javascript:void(0);">
											<img src="https://www.lottecinemavn.com/LCHS/Image/Btn/btn_mv_close.gif" alt="close" />
										</a>
									</li>
								</ul>
							</dd>
						</dl>
					</div>
				</div>
				<div class="time_inner">
					<div class="time_stop">
						<h3 class="sub_tit02">
							<span class="Lang-LBL0020">Giờ chiếu</span>
							<span class="sub_etc Lang-LBL0021">Thời gian chiếu phim có thể chênh lệch 15 phút do chiếu quảng cáo, giới thiệu phim ra rạp</span>
						</h3>
						<div class="time_fr">
							<ul class="time_tab">
								<li>
									<a href="javascript:void(0);" class="on Lang-LBL0022"></a>
								</li>
								<li>
									<a href="javascript:void(0);" class="Lang-LBL0023"></a>
								</li>
							</ul>
							<div class="select_box" style={{ width: '59px' }}>
								<a href="#Tất cả" class="ui_fold_btn">
									Tất cả
								</a>
								<ul>
									<li>
										<a href="javascript:void(0)" class="on">
											Tất cả
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">2D</a>
									</li>
									<li>
										<a href="javascript:void(0)">3D</a>
									</li>
								</ul>
								<select name="allselect" class="select_box widthAuto" title="Chọn rạp chiếu phim" style={{ display: 'none' }}>
									<option value="all" selected="" class="Lang-LBL0024">
										Tất cả
									</option>
									<option value="200" class="Lang-LBL0025">
										2D
									</option>
									<option value="300" class="Lang-LBL0026">
										3D
									</option>
								</select>
							</div>
						</div>
					</div>
					<strong class="blind" id="time_tab_title">
						Xem theo rạp chiếu phim
					</strong>
					<div class="time_noData" style={{ display: 'none' }}>
						<span class="noData Lang-LBL0027">Kính mời quý khách chọn phim để xem lịch chiếu chi tiết tại rạp</span>
					</div>
					<div class="time_box time_list02" style={{ display: 'none' }}>
						<div class="time_noData_case1" style={{ display: 'none' }}>
							<span class="noData Lang-LBL0028">Kính mời quý khách chọn phim để xem lịch chiếu chi tiết tại rạp</span>
						</div>
						<div class="time_aType time8021">
							<h4 class="time_tit">Việt Trì</h4>
							<dl class="time_line movie10656">
								<dt>
									<span class="grade_13">전체</span>BỐ GIÀ{' '}
									<a href="javascript:void(0)" class="btn_detail" title="Xem thông tin chi tiết phim">
										<img src="https://www.lottecinemavn.com/LCHS/Image/Btn/btn_time_view.png" alt="Chi tiết phòng hát" />
									</a>
								</dt>
								<dd class="screen20050100100100 film200">
									<ul class="cineD1">
										<li>2D</li>
										<li>Lồng tiếng</li>
									</ul>
									<ul class="theater_time list10656" screendiv="100">
										<li>
											<a href="javascript:void(0);" class="time_active t0">
												<span class="cineD2 brand">
													{' '}
													<em>Screen01</em>
												</span>
												<span class="clock">
													15:00 <span> ~ 17:28</span>
												</span>
												<span class="ppNum">
													<em class="color_brown" title="Kiểm tra chỗ ngồi của bạn">
														138
													</em>{' '}
													/ 182 Ghế ngồi
												</span>
											</a>
										</li>
										<li>
											<a href="javascript:void(0);" class="time_active t1">
												<span class="cineD2 brand">
													{' '}
													<em>Screen01</em>
												</span>
												<span class="clock">
													20:00 <span> ~ 22:28</span>
												</span>
												<span class="ppNum">
													<em class="color_brown" title="Kiểm tra chỗ ngồi của bạn">
														138
													</em>{' '}
													/ 182 Ghế ngồi
												</span>
											</a>
										</li>
									</ul>
								</dd>
							</dl>
						</div>
					</div>
					<div class="time_box time_list01">
						<div class="time_noData_case1" style={{ display: 'none' }}>
							<span class="noData Lang-LBL0028">Kính mời quý khách chọn phim để xem lịch chiếu chi tiết tại rạp</span>
						</div>
						<div class="time_aType movie10656">
							<h4 class="time_tit">
								<span class="grade_13">전체</span>
								<em>BỐ GIÀ</em>{' '}
								<a href="javascript:void(0)" class="btn_detail" title="Xem thông tin chi tiết phim">
									<img src="https://www.lottecinemavn.com/LCHS/Image/Btn/btn_time_view.png" alt="Chi tiết phòng hát" />
								</a>
							</h4>
							<dl class="time_line cinema8021">
								<dt>Việt Trì</dt>
								<dd class="screen20050100100100 film200">
									<ul class="cineD1">
										<li>2D</li>
										<li>Lồng tiếng</li>
									</ul>
									<ul class="theater_time list10656" screendiv="100">
										<li>
											<a href="javascript:void(0);" class="time_active t0" onClick={this.showModal}>
												<span class="cineD2 brand">
													{' '}
													<em>Screen01</em>
												</span>
												<span class="clock">
													15:00 <span> ~ 17:28</span>
												</span>
												<span class="ppNum">
													<em class="color_brown" title="Kiểm tra chỗ ngồi của bạn">
														138
													</em>{' '}
													/ 182 Ghế ngồi
												</span>
											</a>
										</li>
										<li>
											<a href="javascript:void(0);" class="time_active t1" onClick={this.showModal}>
												<span class="cineD2 brand">
													{' '}
													<em>Screen01</em>
												</span>
												<span class="clock">
													20:00 <span> ~ 22:28</span>
												</span>
												<span class="ppNum">
													<em class="color_brown" title="Kiểm tra chỗ ngồi của bạn">
														138
													</em>{' '}
													/ 182 Ghế ngồi
												</span>
											</a>
										</li>
									</ul>
									<Modal title="Chọn hàng ghế" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
										<Button type="primary" shape="round">
											A1
										</Button>
										<Button type="primary" shape="round">
											A2
										</Button>
										<Button type="primary" shape="round" disabled>
											A3
										</Button>
										<Button type="primary" shape="round">
											A4
										</Button>
										<Button type="primary" shape="round" disabled>
											A5
										</Button>
										<Button type="primary" shape="round">
											A1
										</Button>
										<Button type="primary" shape="round">
											A2
										</Button>
										<Button type="primary" shape="round" disabled>
											A3
										</Button>
										<Button type="primary" shape="round" danger>
											A4
										</Button>
										<Button type="primary" shape="round">
											A5
										</Button>
										<Button type="primary" shape="round">
											A1
										</Button>
										<Button type="primary" shape="round">
											A2
										</Button>
										<Button type="primary" shape="round">
											A3
										</Button>
										<Button type="primary" shape="round">
											A4
										</Button>
										<Button type="primary" shape="round">
											A5
										</Button>
									</Modal>
								</dd>
							</dl>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
