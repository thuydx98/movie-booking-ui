import React, { Component, createRef } from 'react';
import '../assets/css/index.css';
import '../assets/img/apple-icon.png';




export default class NavAdmin extends Component {
    constructor(props) {
        super(props);
        this.carousel = createRef();
    }

    render() {
        return (
            <div>
                <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"></link>
                <div className="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
                    <div className="logo"><a href="http://www.creative-tim.com" className="simple-text logo-normal">
                        Creative Tim
                    </a></div>
                    <div className="sidebar-wrapper">
                        <ul className="nav">
                            <li className="nav-item  ">
                                <a className="nav-link" href="./dashborad">
                                    <i className="material-icons">dashboard</i>
                                    <p>Dashboard</p>
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="./user.html">
                                    <i className="material-icons">person</i>
                                    <p>User Profile</p>
                                </a>
                            </li>
                            <li className="nav-item active ">
                                <a className="nav-link" href="./tables.html">
                                    <i className="material-icons">content_paste</i>
                                    <p>Table List</p>
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="./typography.html">
                                    <i className="material-icons">library_books</i>
                                    <p>Typography</p>
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="./icons.html">
                                    <i className="material-icons">bubble_chart</i>
                                    <p>Icons</p>
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="./map.html">
                                    <i className="material-icons">location_ons</i>
                                    <p>Maps</p>
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="./notifications.html">
                                    <i className="material-icons">notifications</i>
                                    <p>Notifications</p>
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="./rtl.html">
                                    <i className="material-icons">language</i>
                                    <p>RTL Support</p>
                                </a>
                            </li>
                            <li className="nav-item active-pro ">
                                <a className="nav-link" href="./upgrade.html">
                                    <i className="material-icons">unarchive</i>
                                    <p>Upgrade to PRO</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}