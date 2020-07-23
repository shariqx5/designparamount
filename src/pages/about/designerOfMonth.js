import React,{Component} from 'react';

class DesignerOfMonth extends Component{
    
    render(){
        return(
            <section className="designerofthemonthsec position-rel">
                <img src="images/aboutus/2.png" alt="" className="position-absolute" style={{width:"100%",left:"-35px",top:"136px",zIndex:"2",maxWidth:"90px"}}/>
                <img src="images/aboutus/7.png" alt="" className="position-absolute" style={{width:"100%",top:"120px",right:"-39px",maxWidth:"90px"}}/>
         
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 posirion-rel designerofmonthsideimg">
                            <img src="images/aboutus/designer.png" />
                        </div>
                        <div className="col-md-6">
                            <div className="section-heading designerofmonthheading">
                                <h2>Designer Of The <span className="text-white">Month</span></h2>
                                <h5><i>Mikhail Sain Diego</i></h5>
                                <h5 className="text-white"><i>Graphic Designer</i></h5>
                                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default DesignerOfMonth;