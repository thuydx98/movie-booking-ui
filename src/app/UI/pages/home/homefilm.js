import React, { Component, createRef } from 'react';
import { getFilmByNewEst, getFilmByView } from '../../../service/film.service';
import '../../@css_user/index.sass';
import * as moment from 'moment';


export default class HomeFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filmViews: [],
            flimNewEst: [],
            isLoadViews: 1,
            isLoadNewEst: 1,
        }
        this.loadViews = this.loadViews.bind(this);
        this.loadNewEst = this.loadNewEst.bind(this);
    }

    componentDidMount() {
        getFilmByNewEst(1, 10).then(res => {
            this.setState({
                filmViews: res && res.data && res.data.items ? res.data.items : [],
            })
        });

        getFilmByView(1, 10).then(res => {
            this.setState({
                flimNewEst: res && res.data && res.data.items ? res.data.items : [],
            })
        });
    }

    formartDate(date) {
        return moment(date).format('MM/DD/YYYY');
    }

    loadViews() {
        this.setState({isLoadViews: 2});
    }

    loadNewEst() {
        this.setState({
            flimNewEst: [...this.state.flimNewEst, this.state.flimNewEst]
        });
    }

    render() {
        return (
            <div className="HomeContentPage">
                <div id="content">
                    <div class="screen_cwrap">
                        {/* <ul class="tab_st02">
                            <li><a href="javascript:;" id="aNow">Phim đang chiếu</a></li>
                            <li><a href="javascript:;" id="aSoon" class="on">Phim sắp chiếu</a></li>
                        </ul> */}
                        <div class="tab_content on">
                            <h3 class="cinema_stit pt30">Mới công chiếu</h3>
                            <ul class="curr_list movie_clist" id="ulMovieList">
                                {
                                    this.state.flimNewEst.map((value, index) => {
                                        return <li class="">
                                            <div class="curr_box">
                                                <span class="num">{index}</span>
                                                <span class="img">
                                                    <a href="javascript:void(0);" id="aFocusItem0">
                                                        <img src={value.posterUrl}
                                                            alt={value.posterUrl} />
                                                    </a>
                                                </span>
                                            </div>
                                            <div class="layer_hover">
                                                <a href="javascript:void(0)" onclick="goToTiketing('10714');" class="btn_reserve">Đặt vé</a>
                                                <a href="javascript:void(0)" onclick="goToMovie('10714');" class="btn_View">Chi tiết</a>
                                            </div>
                                            <dl class="list_text">
                                                <dt>
                                                    <a href="javascript:void(0);" onclick="goToMovie('10714');">
                                                        <span class="grade_18">청불</span>{value.name}</a>
                                                </dt>
                                                <dd>
                                                    <span class="rate">{value.duration}Phút</span>
                                                    <span class="grade"><em>{this.formartDate(value.publishAt)}</em>
                                                    </span>
                                                </dd>
                                            </dl>
                                        </li>
                                    })
                                }
                            </ul>
                            <a onClick={this.loadNewEst} href="javascript:void(0);" className="btn_view" id="aMore2" style={{ display: 'block' }}>
                                <span class="Lang-LBL0000">Thêm</span>
                            </a>

                            {/* //////////// */}
                            <h3 class="cinema_stit pt30">Được xem nhiều nhất</h3>
                            <ul class="curr_list movie_clist" id="ulMovieList">
                                {
                                    this.state.filmViews.map((value, index) => {
                                        return <li class="">
                                            <div class="curr_box">
                                                <span class="num">{index}</span>
                                                <span class="img">
                                                    <a href="javascript:void(0);" id="aFocusItem0">
                                                        <img src={value.posterUrl}
                                                            alt={value.posterUrl} />
                                                    </a>
                                                </span>
                                            </div>
                                            <div class="layer_hover">
                                                <a href="javascript:void(0)" onclick="goToTiketing('10714');" class="btn_reserve">Đặt vé</a>
                                                <a href="javascript:void(0)" onclick="goToMovie('10714');" class="btn_View">Chi tiết</a>
                                            </div>
                                            <dl class="list_text">
                                                <dt>
                                                    <a href="javascript:void(0);" onclick="goToMovie('10714');">
                                                        <span class="grade_18">청불</span>{value.name}</a>
                                                </dt>
                                                <dd>
                                                    <span class="rate">{value.duration}Phút</span>
                                                    <span class="grade"><em>{this.formartDate(value.publishAt)}</em>
                                                    </span>
                                                </dd>
                                            </dl>
                                        </li>
                                    })
                                }
                            </ul>
                            <a onClick={this.loadViews} href="javascript:void(0);" className="btn_view" id="aMore2" style={{ display: 'block' }}>
                                <span class="Lang-LBL0000">Thêm</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}