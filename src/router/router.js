import { Switch, Route } from "react-router-dom";
import React, { Component } from 'react';
import Home from '../app/UI/pages/home/home';
import GiftShop from '../app/UI/pages/gift shop/giftshop';
import HomeFilm from "../app/UI/pages/home/homefilm";
import BuyTicket from "../app/UI/pages/buy ticket/buyticket";
import Cinema from '../app/UI/pages/cinema/cinema';
import Promotion from "../app/UI/pages/promotion/promotion";
import Login from "../app/UI/@user/login";
import Resgister from "../app/UI/@user/resgister";
import Profile from "../app/UI/@user/profile";
import Dashborad from "../app/UI/@admin/dashboard/dashboard";
import HeaderAdmin from "../app/UI/@admin/header/header_admin";
import NavAdmin from "../app/UI/@admin/nav/nav_admin";
import Header from "../app/UI/pages/header/header";
import Footer from "../app/UI/pages/footer/footer";
import CodeVerification from "../app/UI/@user/codeverification";
import ForgetPassword from "../app/UI/@user/forgetPasword";

export default class RouterURL extends Component {
    render() {
        return (
            <Switch>
                <Route path="/admin">
                    <div className="wrapper">
                        <div className="main-panel">
                            <HeaderAdmin />
                            <NavAdmin />
                            <Switch>
                                <Route path="/admin/dashborad" component={Dashborad} />
                            </Switch>
                        </div>
                    </div>
                </Route>

                <Route path="/">
                    <div id="container" class="sub">
                        <Header />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/login" component={Login} />
                            <Route path="/code" component={CodeVerification} />
                            <Route path="/forget-pasword" component={ForgetPassword} />
                            <Route path="/resgister" component={Resgister} />
                            <Route path="/gift-shop" component={GiftShop} />
                            <Route path="/film" component={HomeFilm} />
                            <Route path="/buy-ticket" component={BuyTicket} />
                            <Route path="/cinema" component={Cinema} />
                            <Route path="/promotion" component={Promotion} />
                            <Route path="/profile" component={Profile} />
                        </Switch>
                        <Footer />
                    </div>
                </Route>
            </Switch>
        );
    }
}