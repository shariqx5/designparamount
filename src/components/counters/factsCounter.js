import React,{Component} from 'react';

class FactsCounter extends Component{

    render(){
        return(
            <section className="bgpurplecolor corevaluesec aboutfactsec position-rel">
                <img src="images/aboutus/5.png" alt="" className="position-absolute" style={{width:"100%",left:"190px",zIndex:"2",maxWidth:"85px",top:"165px"}} />
                <img src="images/aboutus/6.png" alt="" className="position-absolute" style={{width:"100%",right:"236px",bottom:"35px",zIndex:"2",maxWidth:"110px"}}/>
                <img src="images/aboutus/4.png" alt="" className="position-absolute" style={{width:"100%",left:"-25px",bottom:"35px",zIndex:"2",maxWidth:"75px"}}/>
                <img src="images/aboutus/3.png" alt="" className="position-absolute" style={{width:"100%",top:"65px",right:"-46px",zIndex:"2",maxWidth:"100px"}}/>
                <div className="container">
                    <div className="section-heading mb-40 text-center aboutfactheading">
                        <h1>Some Interesting Facts <span>About Michail</span></h1>
                    </div>
                    <div className="row aboutfactsecdiv">
                        <div className="col-md-6">
                            <div className="row aboutfactrow">
                                <div className="col-md-5 text-right">
                                    <img src="images/aboutus/icons-02.png" />
                                </div>
                                <div className="col-md-7 aboutfactheading">
                                    <h6>Customer<br /> <span>Response Rate</span></h6>
                                    <div>
                                        <h1 class="counter-count">100</h1>&nbsp;
                                        <span>%</span> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row aboutfactrow">
                                <div className="col-md-5 text-right">
                                    <img src="images/aboutus/icons-05.png" />
                                </div>
                                <div className="col-md-7 aboutfactheading">
                                    <h6>Completed<br /> <span>Projects</span></h6>
                                    <div>
                                    <h1 class="counter-count">600</h1>&nbsp;
                                        <span>+</span> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row aboutfactsecdiv">
                        <div className="col-md-6">
                            <div className="row aboutfactrow">
                                <div className="col-md-5 text-right">
                                    <img src="images/aboutus/icons-03.png" />
                                </div>
                                <div className="col-md-7 aboutfactheading">
                                    <h6>Success<br /> <span>Rate</span></h6>
                                    <div>
                                    <h1 class="counter-count">80</h1>&nbsp;
                                        <span>%</span> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row aboutfactrow">
                                <div className="col-md-5 text-right">
                                    <img src="images/aboutus/icons-04.png" />
                                </div>
                                <div className="col-md-7 aboutfactheading">
                                    <h6>Designer Of The<br /> <span>Month Awards</span></h6>
                                <div>
                                <h1 class="counter-count">10</h1>&nbsp;
                                    <span>+</span> 
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        )
    }
}

export default FactsCounter;