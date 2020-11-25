import React,{Component} from 'react';
import StandardTable from '../../pricingTables/standardTable';
import ProTable from '../../pricingTables/proTable';
import UltimateTable from '../../pricingTables/ultimateTable';

class SectionPricing extends Component{

    render(){
        return(
            <section class="white-section three-pricing-sec pb-0">
                <img src="images/shapes/triangle.png" alt="" class="position-absolute top-0 right-0 triangle-top-right max-width-190" />
                <img src="images/shapes/circle.png" alt="" class="position-absolute top-0 left-0 circle-top-left-2 max-width-190" />
                <img src="images/shapes/lines.png" alt="" class="position-absolute top-20 left-0 lines-top-left max-width-200" />
                <img src="images/shapes/lines.png" alt="" class="position-absolute bottom-20 right-0 lines-bottom-right max-width-200" />

			    <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="section-heading mb-80">
                                <h1>Whatever You Need, <br /><span>We've Got the Right Plan for You</span></h1>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <StandardTable />
                        </div>
                        <div class="col-md-4">
                            <ProTable />
                        </div>
                        <div class="col-md-4">
                            <UltimateTable />
                        </div>
                    </div>
			</div>
		</section>
        )
    }
}


export default SectionPricing;