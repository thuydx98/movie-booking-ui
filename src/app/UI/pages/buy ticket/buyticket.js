import React, { Component } from 'react';
import { DatePicker, Empty, Radio, Space, Modal, message, Tooltip, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import * as showTimeService from '../../../service/show-time.service';
import * as bookingService from '../../../service/booking.service';
import '../../css/buyticket.sass';

export default class BuyTicket extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			date: moment(),
			selectedMovieId: undefined,
			selectedBranchId: undefined,
			selectedShowTimeId: undefined,
			selectedSeats: [],
			isRedirect: false,
		};

		this.handleOk = this.handleOk.bind(this);
		this.getData = this.getData.bind(this);
		this.onChangeDate = this.onChangeDate.bind(this);
		this.onChangeMovie = this.onChangeMovie.bind(this);
		this.onChangeBranch = this.onChangeBranch.bind(this);
		this.onChangeShowTime = this.onChangeShowTime.bind(this);
		this.onSelectSeat = this.onSelectSeat.bind(this);
	}

	componentDidMount() {
		this.getData(this.state.date);
	}

	getData(date) {
		const params = {
			startTime: date.format(date.isSame(moment(), 'day') ? 'YYYY-MM-DDTHH:mm:ss' : 'YYYY-MM-DD'),
			endTime: date.format('YYYY-MM-DD'),
		};

		this.setState({ data: [], loading: true });
		showTimeService.get(params).then((data) => {
			this.setState({ data, loading: false });
		});
	}

	onChangeDate(date) {
		this.setState({ date, selectedMovieId: undefined, selectedBranchId: undefined, selectedShowTimeId: undefined, selectedSeats: [] });
		this.getData(date);
	}

	onChangeMovie(event) {
		this.setState({ selectedMovieId: event.target.value, selectedBranchId: undefined, selectedShowTimeId: undefined, selectedSeats: [] });
	}

	onChangeBranch(event) {
		this.setState({ selectedBranchId: event.target.value, selectedShowTimeId: undefined, selectedSeats: [] });
	}

	onChangeShowTime(event) {
		this.setState({ selectedShowTimeId: event.target.value, selectedSeats: [] });
	}

	onSelectSeat(seat) {
		const index = this.state.selectedSeats.findIndex((item) => item === seat);
		if (index === -1) {
			this.setState({ selectedSeats: [...this.state.selectedSeats, seat] });
		} else {
			this.setState({ selectedSeats: this.state.selectedSeats.filter((item) => item !== seat) });
		}
	}

	handleOk() {
		const { data, selectedShowTimeId, selectedSeats } = this.state;
		const showTime = data.find((item) => item.id === selectedShowTimeId);
		Modal.confirm({
			title: 'Xác nhận đặt vé?',
			icon: <ExclamationCircleOutlined />,
			content:
				`Bạn sẽ đặt vé xem phim ${showTime.movie.name} vào lúc ` +
				`${moment(showTime.startAt).format('DD/MM/yyyy HH:mm')} với số ghế: ` +
				`${selectedSeats.join(', ')}. Số tiền cần thanh toán là 100,000 x ` +
				`${selectedSeats.length} = ${(100000 * selectedSeats.length).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}đ.`,
			onOk: () => {
				return new Promise((resolve, reject) => {
					bookingService
						.create({
							showTimeId: selectedShowTimeId,
							tickets: selectedSeats.map((item) => ({
								seat: item,
								price: 100000,
							})),
						})
						.then(() => {
							resolve();
							this.setState({ isRedirect: true });
							message.success('Đặt vé thành công');
						})
						.catch((err) => {
							reject();
							message.error('Đặt vé thất bại');
						});
				});
			},
		});
	};

	renderSeatContainer(showTime) {
		const result = [];
		for (let i = 0; i < showTime?.cinema.verticalSize; i++) {
			result.push(<Space className="mb-2">{this.renderSeats(showTime, i)}</Space>);
		}

		return result;
	}

	renderSeats(showTime, i) {
		const result = [];
		for (let j = 0; j < showTime.cinema.horizontalSize; j++) {
			const seat = (i + 10).toString(36).toUpperCase() + (j + 1);
			const selectedSeat = this.state.selectedSeats.find((item) => item === seat);
			let bookedSeat = false;
			showTime.bookings.forEach((booking) => {
				booking.tickets.forEach((ticket) => {
					if (ticket.seat === seat) bookedSeat = true;
				});
			});

			result.push(
				<Tooltip placement="top" title={(bookedSeat && 'Đã đặt') || (selectedSeat && 'Đã chọn')} arrowPointAtCenter>
					<Button disabled={bookedSeat} className="seat" type={selectedSeat && 'primary'} onClick={() => this.onSelectSeat(seat)}>
						{seat}
					</Button>
				</Tooltip>
			);
		}

		return result;
	}

	render() {
		const isAuthenticated = localStorage.getItem('access_token');
		if (!isAuthenticated) {
			return <Redirect to={'/login'} />;
		}
		
		const { loading, data, selectedMovieId, selectedBranchId, selectedShowTimeId, selectedSeats, isRedirect } = this.state;
		if (isRedirect) {
			return <Redirect to="/booking-histories" />;
		}

		const movies = [...new Map(data.map((item) => item.movie).map((item) => [item.id, item])).values()];
		const branches = [
			...new Map(
				data
					.filter((item) => item.movie.id === selectedMovieId)
					.map((item) => item.cinema.branch)
					.map((item) => [item.id, item])
			).values(),
		];
		const showTimes = data.filter((item) => item.movie.id === selectedMovieId && item.cinema.branch.id === selectedBranchId);
		const showTime = showTimes.find((item) => item.id === selectedShowTimeId);

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
												<DatePicker disabledDate={(d) => !d || d.isBefore(moment().add(-1, 'd'))} allowClear={false} defaultValue={this.state.date} onChange={this.onChangeDate} />
											</Space>
										</dt>
									</dl>

									<div class="theater_cont">
										<span className="ml-4 mb-3" style={{ 'font-weight': 'bold', 'font-size': '16px' }}>
											Phòng chiếu:
										</span>
										<div className="m-4">
											{selectedMovieId && (
												<Radio.Group value={selectedBranchId} onChange={this.onChangeBranch}>
													<Space size={[20, 10]} wrap>
														{branches.map((branch) => (
															<Radio.Button ghost key={branch.id} value={branch.id} className="text-center" style={{ width: '130px', height: '40px', 'font-size': '12px' }}>
																<p className="mt-1">{branch.name}</p>
															</Radio.Button>
														))}
													</Space>
												</Radio.Group>
											)}
											{!selectedMovieId && <Empty description="Vui lòng chọn phim" />}
										</div>
									</div>

									{selectedBranchId && (
										<>
											<span className="ml-4 mb-3" style={{ 'font-weight': 'bold', 'font-size': '16px' }}>
												Giờ chiếu:
											</span>
											<div className="m-4">
												<Radio.Group value={selectedShowTimeId} onChange={this.onChangeShowTime}>
													<Space>
														{showTimes.map((showTime) => (
															<Radio.Button key={showTime.id} value={showTime.id} className="text-center" style={{ height: 'auto', 'line-height': 16 }}>
																<small>{showTime.cinema.name}</small>
																<br />
																<h5 className="font-weight-bold m-0">{moment(showTime.startAt).format('HH:mm')}</h5>
																<small>
																	{showTime.bookings.reduce((a, b) => a + b.tickets.length, 0)} / {showTime.cinema.horizontalSize * showTime.cinema.verticalSize} ghế ngồi
																</small>
															</Radio.Button>
														))}
													</Space>
												</Radio.Group>
											</div>
										</>
									)}
								</div>
								<div class="ticket_right" style={{ 'max-height': '400px' }}>
									<dl class="theater_header">
										<dt class="Lang-LBL0011">Phim</dt>
									</dl>
									<div class="movie_cont">
										<div class="scroll_bar">
											<Radio.Group value={selectedMovieId} onChange={this.onChangeMovie}>
												<Space direction="vertical">
													{movies.map((movie) => (
														<Radio key={movie.id} value={movie.id} className="ml-3" style={{ border: 'none' }}>
															<div>
																<span class="grade_13">18</span>
																<em>{movie.name.toUpperCase()}</em>
															</div>
														</Radio>
													))}
												</Space>
											</Radio.Group>
											{!loading && movies.length === 0 && <Empty description="Hiện không còn phim nào chiếu trong ngày bạn chọn" />}
										</div>
									</div>
								</div>
							</div>
						</div>
						{selectedShowTimeId && (
							<>
								<div style={{ background: 'white' }} className="pb-3">
									<span className="ml-4 mb-3" style={{ 'font-weight': 'bold', 'font-size': '16px' }}>
										Ghế ngồi:
									</span>
									<div className="mx-4 mt-4 mb-1">
										{this.renderSeatContainer(showTime)}
										{selectedSeats.length > 0 && (
											<>
												<br />
												<br />
												<Button size="large" type="primary" onClick={this.handleOk}>
													Đặt vé
												</Button>
											</>
										)}
									</div>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		);
	}
}
