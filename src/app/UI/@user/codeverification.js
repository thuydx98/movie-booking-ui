import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import './css/login.sass';
import { message as toastr } from 'antd';
import { checkCode } from '../../service/auth.service';

export default class CodeVerification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usercode: '',
            gmail: '',
            type: null,
            redirectToReferrer: false
        };
        this.submit = this.submit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        let gmail = sessionStorage.getItem('gmail');
        if (gmail) {
            this.setState({ gmail: gmail });
        }

        let type = sessionStorage.getItem('type'); // forgetpassword || registeraccount
        if (type) {
            this.setState({ type: type });
        }
    }

    submit() {
        if (this.state.usercode) {
            var model = {
                email: this.state.usercode,
                code: this.state.gmail
            }

            checkCode(model).then(res => {
                toastr.success("Đăng ký thành công.");
                this.setState({ redirectToReferrer: true });
            }).catch(error => {
                console.log(error);
                toastr.success("Đăng ký thất bại.");
            });
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        if (this.state.redirectToReferrer == true) {
            return (<Redirect to={'/login'} />)
        }

        return (
            <div className="LoginPage">
                <div id="content">
                    <div class="login_wrap">
                        <div class="login_inner">
                            <h2 class="login_tit Lang-LBL0005">Nhập mã xác minh</h2>
                            <div class="login_top">
                                <section>
                                    <dl class="tabdl_login" id="jq-tabdl_login">
                                        <dd class="tab_login_con active">
                                            <div class="clear_fix">
                                                <div class="login_left">
                                                    <ul class="etc_list">
                                                        <li class="Lang-LBL5021">Vui lòng nhập mã code để trở thành viên của Lotte Cinema.</li>
                                                        <li class="Lang-LBL5021">Với gmail: {this.state.gmail}</li>
                                                    </ul>
                                                    <div class="login_box">
                                                        <span>
                                                            <label for="userId" class="Lang-LBL0121">Mã code:</label>
                                                            <input onChange={this.onChange} type="text" id="userId" name="usercode" maxlength="50" placeholder="Nhập mã code" />
                                                        </span>
                                                    </div>
                                                    <div class="login_find">
                                                        <span>
                                                            <label for="saveId" class="Lang-LBL5024"></label>
                                                        </span>
                                                        <input onClick={this.submit} type="button" class="btn_login Lang-LBL0005" value="Xác nhận" id="btnMember" style={{ cursor: 'pointer' }} title="submit" />
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
                                    <a href="#" class="btn_join Lang-LBL5023"
                                        title="Đăng kí tài khoản Đã mở cửa sổ mới" id="aMemberJoin">Đăng kí tài khoản</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}