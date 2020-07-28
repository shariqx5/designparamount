import React,{Component} from 'react';

class Categories extends Component{

    render(){
        return(
            <ul className="blog-cat">
				<li><a href="#">Logo Branding</a></li>
				<li><a href="#">Logo Design</a></li> 
				<li><a href="#">Web Design</a></li> 
				<li><a href="#">Marketing</a></li>
			</ul>
        )
    }
}


export default Categories;