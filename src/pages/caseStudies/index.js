import React,{Component} from 'react';
import {Layout,BlogJumbotron,HelpAction,Sidebar,Search,Categories} from '../../components';
import CaseStudyBox from './caseStudyBox';
import ShortCastStudyThumbnail from './shortCastStudyThumbnail';
import LoadingCaseStudyBox from './loadingCaseStudyBox';
import {CaseStudyAPI} from '../../api';


const caseStudyAPI = new CaseStudyAPI();

class CaseStudies extends Component{

    constructor(props){
        super(props);
        this.state = {
			loading : true,
            caseStudies : [],
			limit : 10,
			currentPage:0,
			offset:0,
			searchQuery:''
		}

		this.handleSearch = this.handleSearch.bind(this);
    }


    componentDidMount(){
		this.loadScripts();
		this.checkSearchParamExist();
	}



	loadScripts = ()=>{
        const scriptsPath = ["/js/stickyKit.js"];
        scriptsPath.map((scriptPath,i)=>{
            const script = document.createElement("script");
            script.src = scriptPath;
            script.async = true;
            document.body.append(script);
        });
    }



	checkSearchParamExist(){
        const search = window.location.search;
        const params = new URLSearchParams(search);
		const query = params.get('search');
        if(query){
           const encodedQuery = encodeURI(query);
             this.setState({
                searchQuery:encodedQuery
            },()=>this.searchData());
		}
		else{
			this.fetchAllData();
		}
	}
	


	searchData = async()=>{
        const data = await caseStudyAPI.searchCaseStudy(this.state.searchQuery);
        this.setState({
			caseStudies:data.data,
			loading : false
        })
    }



    fetchAllData = async()=>{
		const data = await caseStudyAPI.fetchAllCaseStudy();
        this.setState({
			caseStudies : data.data,
			loading : false
        });
    }
	


	handleSearch(searchText){
        this.props.history.push(window.location.pathname+"?search="+searchText);
        searchText = encodeURI(searchText);
        this.setState({
            searchQuery:searchText,
            loading : true
        },()=>this.searchData());
        
    }


    render(){

        const {loading,limit,caseStudies} = this.state;
		const LoadingCaseStudy = [];
		if(loading){
			for(let i = 0;i<limit;i++){
				LoadingCaseStudy.push(<div className="col-md-6"><LoadingCaseStudyBox /></div>);
			}
        }
        
        return(
            <Layout>
                <BlogJumbotron />
                <section className="white-section pt-0 position-rel">
                <img src="/images/shapes/triangle.png" alt="" className="position-absolute" style={{width:"100%",top:"230px",left:"-20px",zIndex:"2",maxWidth:"160px"}} />
                <img src="/images/shapes/lines.png" alt="" className="position-absolute" style={{width:"100%",top:"430px",right:"-80px",zIndex:"2",maxWidth:"180px"}} />
                <img src="/images/shapes/lines.png" alt="" className="position-absolute" style={{width:"100%",bottom:"100px",left:"-90px",zIndex:"2",maxWidth:"180px"}} />
                <img src="/images/shapes/circle.png" alt="" className="position-absolute" style={{width:"100%",bottom:"210px",right:"-90px",zIndex:"2",maxWidth:"180px"}} />
			<div className="container">
				<div className="row section-upto-banner blog-list-page">
					<div className="col-md-8">
						<div className="row">
                        {
							loading ? (
								LoadingCaseStudy
							): (
								caseStudies.length>0?(
									caseStudies.map((caseStudy,j)=>(
										<div className="col-md-6">
											<CaseStudyBox key={j} {...caseStudy}/>
										</div>
									))
								):<h2>No Data Found!</h2>
							)		
						}
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


export default CaseStudies;