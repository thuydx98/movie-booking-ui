import React, { Component, createRef } from 'react';
import '../../css/cemina.sass';


export default class Cinema extends Component {
    constructor(props) {
        super(props);
        this.carousel = createRef();
    }

    render() {
        return (
            <div className="CinemaPage">
                <div class="cont_cinema" id="a_cont_cinema">
                    <div class="cont_cinema_Area">
                        <div class="m_theader">
                            <div class="m_inner_new">
                                <div class="clear_fix">
                                    <div class="fl">
                                        <h2 class="sub_tit" id="cinemaName1">Việt Trì</h2>
                                        <ul class="m_etc">
                                            <li>
                                                <a href="javascript:void(0);" class="btn_moive on" id="aFavorCinemaOpen" title="Xem thông tin chi tiết"><em>Thêm rạp vào My Cinema</em><span>Mở</span></a>
                                            </li>
                                            <li><a href="javascript:void(0);" class="btn_fee" id="aFeeGuideOpen" title="Xem thông tin chi tiết">Bảng Giá Vé</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <p class="sub_txt2" id="cinemaIntroduction"></p>
                                <p class="sub_addr2" id="spanAddress">Tầng 5, TTTM Vincom Việt Trì, P.Tiên Cát, TP.Việt Trì, T.Phú Thọ, Việt Nam<br />
                                    <span class="p_theater">Tổng số phòng chiếu <em id="emTotalScreenCount">4</em> phòng</span>
                                    <span class="p_seat">Tổng số chỗ ngồi <em id="emTotalSeatCount">631</em> ghế</span>
                                </p>
                            </div>
                        </div>
                        <div class="c_fixed">
                            <div class="bg_fixed" style={{position: 'relative', top: '0px'}}>
                                <ul class="tab_st07" id="ulSubTap">
                                    <li class="on"><a href="#a_cont_cinema" onclick="setSelectedNavi(this);">Lịch chiếu phim</a></li>
                                    <li><a href="#a_map_cont" onclick="setSelectedNavi(this);">Vị trí của rạp</a></li>
                                    <li><a href="#a_transport" onclick="setSelectedNavi(this);">Hướng dẫn đi tới rạp</a></li>
                                    <li><a href="#a_moreinfo" onclick="setSelectedNavi(this);">Tiện ích đi kèm</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* Lich */}
                        <div class="calendar">

                        </div>
                        <ul class="cinema_grad">
                            <li><span class="grade_all">All</span> Mọi đối tượng</li>
                            <li><span class="grade_13">13</span> 13 tuổi trở lên</li>
                            <li><span class="grade_16">16</span> 16 tuổi trở lên</li>
                            <li><span class="grade_18">18</span> 18 tuổi trở lên</li>
                        </ul>



                        <div class="time_inner">
                            <div class="time_noData" style={{display: 'none'}}>
                                <span class="noData">Kính mời quý khách chọn phim để xem lịch chiếu chi tiết tại rạp</span>
                            </div>
                            <div class="time_box time_list02">
                                <div class="time_aType time8021">
                                    <dl class="time_line movie10656">
                                        <dt>
                                            <span class="grade_13">전체</span>BỐ GIÀ <a href="javascript:void(0)" class="btn_detail" title="Xem thông tin chi tiết phim"><img src="https://www.lottecinemavn.com/LCHS/Image/Btn/btn_time_view.png" alt="Chi tiết phòng hát" /></a>
                                        </dt>
                                        <dd class="screen20050100100100 film200">
                                            <ul class="cineD1">
                                                <li>2D</li>
                                                <li>Lồng tiếng</li>
                                            </ul>
                                            <ul class="theater_time list10656" screendiv="100">
                                                <li>
                                                    <a href="javascript:void(0);" class="time_active t1">
                                                        <span class="cineD2 brand"><em>Screen01</em></span><span class="clock">20:00<span> ~ 22:28</span></span>
                                                        <span class="ppNum"><em class="color_brown" title="Kiểm tra chỗ ngồi của bạn">138</em> / 182 Ghế ngồi</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </dd>
                                    </dl>
                                    <dl class="time_line movie10686">
                                        <dt>
                                            <span class="grade_18">청불</span>SIÊU TRỘM <a href="javascript:void(0)" class="btn_detail" title="Xem thông tin chi tiết phim"><img src="https://www.lottecinemavn.com/LCHS/Image/Btn/btn_time_view.png" alt="Chi tiết phòng hát" /></a>
                                        </dt>
                                        <dd class="screen200100100100100 film200">
                                            <ul class="cineD1">
                                                <li>2D</li>
                                                <li>Phụ đề</li>
                                            </ul>
                                            <ul class="theater_time list10686" screendiv="100">
                                                <li>
                                                    <a href="javascript:void(0);" class="time_active t0">
                                                        <span class="cineD2 brand"><em>Screen02</em></span><span class="clock">19:45<span> ~ 22:03</span></span>
                                                        <span class="ppNum"><em class="color_brown" title="Kiểm tra chỗ ngồi của bạn">88</em> / 124 Ghế ngồi</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>




                        <ul class="supInfo">
                            <li>Lịch chiếu phim có thể thay đổi mà không báo trước</li>
                            <li>Thời gian bắt đầu chiếu phim có thể chênh lệch 15 phút do chiếu quảng cáo, giới thiệu phim ra rạp</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}