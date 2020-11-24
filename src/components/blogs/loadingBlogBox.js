import React,{Component} from 'react';
import Skeleton from 'react-loading-skeleton';

class LoadingBlogBox extends Component{

    render(){
        return(
            <div className="single-blog">
						    <a href="#">
    							<div className="blog-img">
    								<Skeleton height={200}/>
    							</div>
							</a>
							<div className="blog-detail">
								<p className="blog-date"><Skeleton /></p>
						        <a href="#">
								    <h6><Skeleton /></h6>
								</a>
								<p className="blog-description"><Skeleton count={3}/></p>
								<div className="blog-uploader">
                                    <Skeleton circle={true} height={50} width={50}/>
									<p><Skeleton /></p>
								</div>
							</div>
			</div>
        )
    }

}


export default LoadingBlogBox;