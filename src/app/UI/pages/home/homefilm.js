/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React, { Component } from 'react';
import * as moment from 'moment';
import { SortMovieType } from '../../../constants/movie.const';
import { getPagingListMovie } from '../../../service/movie.service';
import '../../@css_user/index.sass';


export default class HomeFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mostViewMovies: [],
            newestMovies: [],
            isLoadViews: 1,
            isLoadNewest: 1,
        }
        this.loadViews = this.loadViews.bind(this);
        this.loadNewest = this.loadNewest.bind(this);
    }

    componentDidMount() {
        getPagingListMovie(1, 10, SortMovieType.Newest).then(data => {
            this.setState({
                mostViewMovies: data?.items || [],
            })
        });

        getPagingListMovie(1, 10, SortMovieType.View).then(data => {
            this.setState({
                newestMovies: data?.items || [],
            })
        });
    }

    formatDate(date) {
        return moment(date).format('MM/DD/YYYY');
    }

    loadViews() {
        this.setState({isLoadViews: 2});
    }

    loadNewest() {
        this.setState({
            newestMovies: [...this.state.newestMovies, this.state.newestMovies]
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
                                    this.state.newestMovies.map((value, index) => {
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
                                                <a href="javascript:void(0)" onclick="goToTicket('10714');" class="btn_reserve">Đặt vé</a>
                                                <a href="javascript:void(0)" onclick="goToMovie('10714');" class="btn_View">Chi tiết</a>
                                            </div>
                                            <dl class="list_text">
                                                <dt>
                                                    <a href="javascript:void(0);" onclick="goToMovie('10714');">
                                                        <span class="grade_18">청불</span>{value.name}</a>
                                                </dt>
                                                <dd>
                                                    <span class="rate">{value.duration} Phút</span>
                                                    <span class="grade"><em>{this.formatDate(value.publishAt)}</em>
                                                    </span>
                                                </dd>
                                            </dl>
                                        </li>
                                    })
                                }
                            </ul>
                            <a onClick={this.loadNewest} href="javascript:void(0);" className="btn_view" id="aMore2" style={{ display: 'block' }}>
                                <span class="Lang-LBL0000">Thêm</span>
                            </a>

                            <h3 class="cinema_stit pt30">Được xem nhiều nhất</h3>
                            <ul class="curr_list movie_clist" id="ulMovieList">
                                {
                                    this.state.mostViewMovies.map((value, index) => {
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
                                                <a href="javascript:void(0)" onclick="goToTicket('10714');" class="btn_reserve">Đặt vé</a>
                                                <a href="javascript:void(0)" onclick="goToMovie('10714');" class="btn_View">Chi tiết</a>
                                            </div>
                                            <dl class="list_text">
                                                <dt>
                                                    <a href="javascript:void(0);" onclick="goToMovie('10714');">
                                                        <span class="grade_18">청불</span>{value.name}</a>
                                                </dt>
                                                <dd>
                                                    <span class="rate">{value.duration} Phút</span>
                                                    <span class="grade"><em>{this.formatDate(value.publishAt)}</em>
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