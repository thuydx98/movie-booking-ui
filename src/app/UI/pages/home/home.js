/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, createRef } from 'react';
import { Carousel, Button } from 'antd';
import HomeContent from './homeconent';
import '../../@css_user/index.sass';


const contentStyle = {
    height: '645px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

function onChange(a, b, c) {
    // console.log(a, b, c);
}

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.carousel = createRef();
    }

    handleNext = () => this.carousel.current.next();
    handlePrev = () => this.carousel.current.prev();

    render() {
        return (
            <div className="HomePage">
                <div id="divADLeftPlotting" class="ad_pic" style={{ display: 'none', top: '323px' }}>
                    <a target="_blank" href="https://www.lottecinemavn.com/LCHS/Contents/Event/infomation-delivery-event.aspx?EventID=201010000621002" rel="noreferrer"><img src="https://media.lottecinemavn.com/Media/WebAdmin/bf9a618204c343d685490cfec021aced.jpg" width="145" border="0" alt="Banner Chay" /></a>
                    <a href="javascript:void(0);" class="btn_appicClose" title="Đóng biểu ngữ">
                        <img src="/LCHS/Image/Btn/btn_appicClose.gif" alt="Xóa" />
                    </a>
                </div>
                <div className="container">
                    <div className="mKeyVi">
                        <div className="main_key_visual">
                            <div className="trailer">
                                <Carousel afterChange={onChange} autoplay ref={this.carousel}>
                                    <div>
                                        <h3 style={contentStyle}>
                                            <img src="https://media.lottecinemavn.com/Media/WebAdmin/665ea93744c84f619e285c1f32ea0625.jpg" alt="Cantavil" width="980" height="669" />
                                        </h3>
                                    </div>
                                    <div>
                                        <h3 style={contentStyle}>
                                            <img src="https://media.lottecinemavn.com/Media/WebAdmin/9b5494601af14d32ba26d310819b8c8a.jpg" alt="FAST 9" width="980" height="669" />
                                        </h3>
                                    </div>
                                    {/* <div>
                                        <h3  style={contentStyle}>3</h3>
                                    </div>
                                    <div>
                                        <h3 style={contentStyle}>4</h3>
                                    </div> */}
                                </Carousel>
                            </div>
                            <div class="prev prev-left">
                                <Button onClick={this.handlePrev}>Previous</Button>
                            </div>
                            <div class="prev prev-right">
                                <Button onClick={this.handleNext}>Next</Button>

                            </div>
                        </div>
                    </div>
                </div>
                <HomeContent></HomeContent>
            </div>
        );
    }
}