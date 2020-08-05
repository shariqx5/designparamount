import React,{Component} from 'react';
import {Layout,HelpAction,CaseStudyJumbotron,Search,Categories,Sidebar} from '../../components';
import ShortCastStudyThumbnail from './shortCastStudyThumbnail';
import {CaseStudyAPI} from '../../api';
import {StringHelper} from '../../helpers';
import {Redirect} from 'react-router-dom';
import './singleCaseStudy.css';


const caseStudyAPI = new CaseStudyAPI();
const stringHelper = new StringHelper();

class SingleCaseStudy extends Component{

    constructor(props){
        super(props);
        this.state = {
			caseStudy : '',
			redirect:false,
			url:""
		}
		
		this.handleSearch = this.handleSearch.bind(this);
    }


    async componentDidMount(){
		if(this.props.match.params!==""){
			const title = this.props.match.params.title;
			const data = await caseStudyAPI.fetchSinglePostDetails(title);
			this.setState({
				caseStudy:data.data[0]
			})
		}
		else{
			this.props.history.goBack();
		}
	}



	handleSearch(searchText){
		this.setState({
			redirect:true,
			url:"/case-study?search="+searchText
		})        
    }



    render(){
		const {redirect,url} = this.state;

		if(redirect){
			return(
				<Redirect to={url} />
			)
		}

        return(
           <Layout>
               <CaseStudyJumbotron />
                <section class="white-section position-rel padd-sec">
		    
                <img src="/images/shapes/triangle.png" alt="" class="position-absolute" style={{width:"100%",top:"500px",left:"-20px",zIndex:"2",maxWidth:"160px"}}/>
                <img src="/images/shapes/lines.png" alt="" class="position-absolute" style={{width:"100%",top:"430px",right:"-80px",zIndex:"2",maxWidth:"180px"}}/>
                <img src="/images/shapes/lines.png" alt="" class="position-absolute" style={{width:"100%",bottom:"100px",left:"-90px",zIndex:"2",maxWidth:"180px"}} />
                <img src="/images/shapes/circle.png" alt="" class="position-absolute" style={{width:"100%",bottom:"230px",right:"-90px",zIndex:"2",maxWidth:"180px"}} />
               <div className="container">
				<div className="row section-upto-banner">
					<div className="col-md-8">
                       <div className="container position-rel">
                            {this.state.caseStudy!==""?stringHelper.decodeHtmlEntities(this.state.caseStudy.study):""}
                       </div>
	                </div>
					<div className="col-md-4 margin-fixed-mob" style={{zIndex:2}}>
						<Sidebar>
							<div className="blog-right-detail">
								<h3>Search</h3>
								<div className="row">
									<div className="col-12">
										<Search handleSearch={this.handleSearch}/>
									</div>
								</div>
							</div>
							<div className="blog-right-detail">
								<h3>Categories</h3>
								<Categories />
							</div>
							<div class="blog-right-detail">
								<h3>Related Case Study</h3>
								<ul class="blog-recent">
									<li>
										<ShortCastStudyThumbnail />
									</li>
									<li>    
                                        <ShortCastStudyThumbnail />
									</li>
									<li>
                                        <ShortCastStudyThumbnail />
									</li>
								</ul>
							</div>
						</Sidebar>
					</div>
				</div>
			</div>
        </section>
               <HelpAction />
           </Layout>
        )
    }
}


export default SingleCaseStudy;