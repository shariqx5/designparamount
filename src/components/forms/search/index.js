import React,{Component} from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

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
            console.log(input.value);
            if(input.value === ""){
                this.setState({
                    redirect : false,
                    url : '/blogs'
                })
            }
            else{
                this.setState({
                    searchText : input.value
                });

                this.props.handleSearch(input.value);
            }
    }


    render(){

        const {redirect, url} = this.state;
        if(redirect){
            return (
                <Redirect to={url} />
            )
        }

        return(
            <form onSubmit={this.submitForm}>
				<input id="search-input" type="text" name = "searchText" placeholder="Enter Your Company Name" className="blog-form-input" onKeyUp={this.onTextChange} contentEditable={true}/> 
				<i class="fas fa-search"></i>
			</form>
        )
    }
}


export default Search;