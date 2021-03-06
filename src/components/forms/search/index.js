import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';

class Search extends Component{

    constructor(props){
        super(props);
        this.state = {
            searchText : "",
            redirect : false,
            url : ''
        }
    }



    submitForm = (event) => {
        event.preventDefault();
            var input = document.getElementById("search-input");
            this.setState({
                    searchText : input.value
            });

            this.props.handleSearch(input.value);
            
    }


    render(){
        return(
            <form onSubmit={this.submitForm}>
				<input id="search-input" type="text" name = "searchText" placeholder="Search" className="blog-form-input" onKeyUp={this.onTextChange} contentEditable={true}/> 
				<i class="fas fa-search"></i>
			</form>
        )
    }
}


export default withRouter(Search);