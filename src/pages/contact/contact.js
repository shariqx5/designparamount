import React,{Component} from 'react';
import HowCanWeHelp from './howCanWeHelp';
import {Layout,ContactJumbotron,HelpAction} from '../../components';
import './contact.css';

class Contact extends Component{

    render(){
        return(
            <Layout>
                 <ContactJumbotron />
                 <HowCanWeHelp />
                 <HelpAction />
            </Layout>
        )
    }
}


export default Contact;