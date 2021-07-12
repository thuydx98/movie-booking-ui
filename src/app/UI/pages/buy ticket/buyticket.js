/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { DatePicker, Divider, Radio, Space } from 'antd';
import { Modal, Button } from 'antd';
import '../../css/buyticket.sass';
import Text from 'antd/lib/typography/Text';

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
			<div className="BuyTicketPage mb-0">
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

									<div class="theater_cont">
										<span className="ml-4 mb-3" style={{ 'font-weight': 'bold', 'font-size': '16px' }}>
											Phòng chiếu:
										</span>
										<div className="m-4">
											<Radio.Group value={10} onChange={this.handleSizeChange}>
												<Space size={[20, 10]} wrap>
													<Radio.Button ghost className="text-center" style={{ width: '130px', height: '40px' }} value="large">
														<p className="mt-1">Cantavil</p>
													</Radio.Button>
													<Radio.Button ghost className="text-center" style={{ width: '130px', height: '40px' }} value="large">
														<p className="mt-1">Cantavil</p>
													</Radio.Button>
													<Radio.Button ghost className="text-center" style={{ width: '130px', height: '40px' }} value="large">
														<p className="mt-1">Cantavil</p>
													</Radio.Button>
													<Radio.Button ghost className="text-center" style={{ width: '130px', height: '40px' }} value="large">
														<p className="mt-1">Cantavil</p>
													</Radio.Button>
													<Radio.Button ghost className="text-center" style={{ width: '130px', height: '40px' }} value="large">
														<p className="mt-1">Cantavil</p>
													</Radio.Button>
													<Radio.Button ghost className="text-center" style={{ width: '130px', height: '40px' }} value="large">
														<p className="mt-1">Cantavil</p>
													</Radio.Button>
													<Radio.Button ghost className="text-center" style={{ width: '130px', height: '40px' }} value="large">
														<p className="mt-1">Cantavil</p>
													</Radio.Button>
													<Radio.Button ghost className="text-center" style={{ width: '130px', height: '40px' }} value="large">
														<p className="mt-1">Cantavil</p>
													</Radio.Button>
													<Radio.Button ghost className="text-center" style={{ width: '130px', height: '40px' }} value="large">
														<p className="mt-1">Cantavil</p>
													</Radio.Button>
													<Radio.Button ghost className="text-center" style={{ width: '130px', height: '40px' }} value="large">
														<p className="mt-1">Cantavil</p>
													</Radio.Button>
												</Space>
											</Radio.Group>
										</div>
									</div>

									<span className="ml-4 mb-3" style={{ 'font-weight': 'bold', 'font-size': '16px' }}>
										Giờ chiếu:
									</span>
									<div className="m-4">
										<Radio.Group value={50} onChange={this.handleSizeChange}>
											<Space>
												<Radio.Button className="text-center" style={{ height: 'auto' }} value="large">
													<span>Screen 1 </span>
													<br />
													<h5 className="font-weight-bold m-0">15:00 </h5>
													<small>138 / 182 ghế ngồi</small>
												</Radio.Button>
												<Radio.Button className="text-center" style={{ height: 'auto' }} value="large">
													<span>Screen 1 </span>
													<br />
													<h5 className="font-weight-bold m-0">15:00 </h5>
													<small>138 / 182 ghế ngồi</small>
												</Radio.Button>
												<Radio.Button className="text-center" style={{ height: 'auto' }} value="large">
													<span>Screen 1 </span>
													<br />
													<h5 className="font-weight-bold m-0">15:00 </h5>
													<small>138 / 182 ghế ngồi</small>
												</Radio.Button>
											</Space>
										</Radio.Group>
									</div>
								</div>
								<div class="ticket_right" style={{ 'max-height': '400px' }}>
									<dl class="theater_header">
										<dt class="Lang-LBL0011">Phim</dt>
									</dl>
									<div class="movie_cont">
										<div class="scroll_bar">
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
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div style={{ background: 'white' }} className="pb-3">
							<span className="ml-4 mb-3" style={{ 'font-weight': 'bold', 'font-size': '16px' }}>
								Ghế ngồi:
							</span>
							<div className="mx-4 mt-4 mb-1">
								<Space className="mb-2">
									<Button value="A15" className="text-center" style={{ width: '60px' }}>
										A15
									</Button>
									<Button disabled value="A15" className="text-center" style={{ width: '60px' }}>
										A15
									</Button>
									<Button type="primary" value="A15" className="text-center" style={{ width: '60px' }}>
										A15
									</Button>
								</Space>
								<br />
								<br />
								<br />
								<Button className="float-right" size="large" type="primary">
									Đặt vé
								</Button>
								<br />
								<br />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
