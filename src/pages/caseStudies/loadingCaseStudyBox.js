import React,{Component} from 'react';
import Skeleton from 'react-loading-skeleton';

class LoadingCaseStudyBox extends Component{

    render(){
        return(
            <div className="single-blog case-study-item">
                <a href="case-study.html">
                    <div className="blog-img">
                        <Skeleton height={200}/>
                    </div>
                </a>
                <div className="blog-detail">
                    <p className="blog-date"><Skeleton /></p>
                    <a href="case-study.html">
                        <h6><Skeleton count={3}/></h6>
                    </a>
                    <p className="blog-description">
                        <a href="case-study.html"><Skeleton /></a>
                    </p>
                </div>
            </div>
        )
    }
}


export default LoadingCaseStudyBox;