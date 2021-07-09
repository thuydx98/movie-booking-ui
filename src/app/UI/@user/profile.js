import React, { Component } from 'react';
import './css/profile.sass';
import { Tabs } from 'antd';

const { TabPane } = Tabs;


export default class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ProfilePage">
                <div id="content">
                    <div class="profile_wrap">
                        <div class="profile_inner">
                            <Tabs defaultActiveKey="1" type="card" size={"large"}>
                                <TabPane tab="Thông tin" key="1">
                                    <div class="wrapper_profile">
                                        <div class="left">
                                            <img src="https://i.imgur.com/cMy8V5j.png" alt="user" width="100" />
                                            <h4>Alex William</h4>
                                            <p>UI Developer</p>
                                        </div>
                                        <div class="right">
                                            <div class="info">
                                                <h3>Information</h3>
                                                <div class="info_data">
                                                    <div class="data">
                                                        <h4>Email</h4>
                                                        <p>alex@gmail.com</p>
                                                    </div>
                                                    <div class="data">
                                                        <h4>Phone</h4>
                                                        <p>0001-213-998761</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="projects">
                                                <h3>Projects</h3>
                                                <div class="projects_data">
                                                    <div class="data">
                                                        <h4>Recent</h4>
                                                        <p>Lorem ipsum dolor sit amet.</p>
                                                    </div>
                                                    <div class="data">
                                                        <h4>Most Viewed</h4>
                                                        <p>dolor sit amet.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="social_media">
                                                <ul>
                                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tab="Chỉnh sửa" key="2">
                                    <div class="wrapper">
                                        <div class="left">
                                            <img src="https://i.imgur.com/cMy8V5j.png" alt="user" width="100" />
                                            <h4>Alex William</h4>
                                            <p>UI Developer</p>
                                        </div>
                                        <div class="right">
                                            <div class="info">
                                                <h3>Information</h3>
                                                <div class="info_data" style={{ display: 'grid' }}>
                                                    <span>
                                                        <label for="userId" class="Lang-LBL0121">Name</label>
                                                        <input onChange={this.onChange} type="text" id="userId" name="username" maxlength="50" placeholder="Vui lòng nhập Tên" />
                                                    </span>
                                                    <span>
                                                        <label for="userId" class="Lang-LBL0121">Email</label>
                                                        <input onChange={this.onChange} type="text" id="userId" name="username" maxlength="50" placeholder="Vui lòng nhập địa chỉ Email" />
                                                    </span>
                                                    <span>
                                                        <label for="userId" class="Lang-LBL0121">Số điện thoại</label>
                                                        <input onChange={this.onChange} type="text" id="userId" name="username" maxlength="50" placeholder="Vui lòng nhập Số điện thoại" />
                                                    </span>
                                                </div>
                                            </div>

                                            <div class="projects">
                                                <h3>Projects</h3>
                                                <div class="projects_data">
                                                    <div class="data">
                                                        <h4>Recent</h4>
                                                        <p>Lorem ipsum dolor sit amet.</p>
                                                    </div>
                                                    <div class="data">
                                                        <h4>Most Viewed</h4>
                                                        <p>dolor sit amet.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="social_media">
                                                <ul>
                                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tab="Đổi mặt khẩu" key="3">
                                    <div class="wrapper">
                                        <div class="change_password">
                                            <div class="info_data" style={{ display: 'grid' }}>
                                                <span>
                                                    <label for="userPhone" class="Lang-LBL0085">Mật khẩu cũ</label>
                                                    <input onChange={this.onChange} type="password" id="userPhone" name="userpassworded" maxlength="20" placeholder="Nhập mật khẩu cũ" />
                                                </span>
                                                <span>
                                                    <label for="userPassword" class="Lang-LBL0085">Mật khẩu mới</label>
                                                    <input onChange={this.onChange} type="password" id="userPassword" name="userpassword" maxlength="20" placeholder="Nhập mật khẩu" />
                                                </span>
                                                <span>
                                                    <label for="userPassword2" class="Lang-LBL0085">Nhập lại mật khẩu mới</label>
                                                    <input onChange={this.onChange} type="password" id="userPassword2" name="userpassword2" maxlength="20" placeholder="Nhập lại mật khẩu" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tab="Lịch sử đặt phim" key="4">
                                    Content of card tab 4
                                </TabPane>
                            </Tabs>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}