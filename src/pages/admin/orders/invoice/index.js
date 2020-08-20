import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import './invoice.css';

class Invoice extends Component{

    constructor(props){
        super(props);
        this.state = {
            invoiceDetails : ""
        }
    }


    componentDidMount(){
        if(this.props.location.state!==""){
            const orderDetails = this.props.location.state.orderDetails;
            this.setState({
                invoiceDetails : orderDetails
            })
        }
        else {
            this.props.history.goBack();
        }
    }



    render(){

        const {invoiceDetails} = this.state;

        return(
            <div className="invoice-box">
        <table cellpadding="0" cellspacing="0">
                <tr className="top">
                    <td colspan="2">
                        <table>
                            <tr>
                                <td className="title">
                                    <img src="https://www.designparamount.com/images/logo-header.svg" style={{width:"100%",maxWidth : "200px"}}/>
                                </td>
                                
                                <td>
                                    Invoice #: {invoiceDetails!==""?invoiceDetails.invoice_id:""}<br />
                                    Created: {invoiceDetails!==""?invoiceDetails.created_date:""}<br />   
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            
                <tr className="information">
                    <td colspan="2">
                        <table>
                            <tr>
                                <td>
                                    315 Madison Avenue, 42nd Street, New York, New York(NY), 10001<br />
                                    Phone No: +1 844-77746-25     
                                </td> 
                                <td>
                                    <b>Billed to</b><br />
                                    {(invoiceDetails.firstname!==""?invoiceDetails.firstname:"")+" "+(invoiceDetails.lastname!==""?invoiceDetails.lastname:"")}<br />
                                    {invoiceDetails.address!==""?invoiceDetails.address:""}<br />
                                    {invoiceDetails.phone_number!==""?invoiceDetails.phone_number:""}
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            
                <tr className="heading">
                    <td>
                        Client Information
                    </td>
                    
                    <td>
                        
                    </td>
                </tr>
            
                <tr className="item">
                    <td>
                        Total
                    </td>
                    
                    <td>
                    <b>{(invoiceDetails.currency!==null?invoiceDetails.currency:"$")+" "+(invoiceDetails.itemprice)}</b>
                    </td>
                </tr>
            
            
                {invoiceDetails.discount!==null?(
                    <tr className="item">
                    <td>
                        Discount
                    </td>
                    
                    <td>
                        <b>
                            {
                                (invoiceDetails.currency!==""?invoiceDetails.discount:"$")+" "+(invoiceDetails.discount)
                        
                            }
                        </b>
                    </td>
                </tr>
                ):""
                }
            
                <tr className="item">
                    <td>
                        Full name
                    </td>
                    
                    <td>
                        <b>{(invoiceDetails.firstname!==""?invoiceDetails.firstname:"")+" "+(invoiceDetails.lastname!==""?invoiceDetails.lastname:"")}</b>
                    </td>
                </tr>
                <tr className="item">
                    <td>
                        Email
                    </td>
                    
                    <td>
                    <b>{invoiceDetails.client_email}</b>
                    </td>
                </tr>
                <tr className="item">
                    <td>
                        Phone No.
                    </td>
                    
                    <td>
                        <b>{invoiceDetails.phone_number}</b>
                    </td>
                </tr>
                <tr className="item">
                    <td>
                        Company
                    </td>
                    
                    <td>
                        <b>{invoiceDetails.company}</b>
                    </td>
                </tr>
                <tr className="item">
                    <td>
                        State
                    </td>
                    
                    <td>
                        <b>{invoiceDetails.statename}</b>
                    </td>
                </tr>
                <tr className="item">
                    <td>
                        City
                    </td>
                    
                    <td>
                    <b>{invoiceDetails.city}</b>
                    </td>
                </tr>
                <tr className="item">
                    <td>
                        Address
                    </td>
                    
                    <td>
                        <b>{invoiceDetails.address}</b>
                    </td>
                </tr>
                <tr className="item">
                    <td>
                        Post Code
                    </td>
                    
                    <td>
                        <b>{invoiceDetails.zipcode}</b>
                    </td>
                </tr>
                <tr className="item">
                    <td>
                        Country
                    </td>
                    
                    <td>
                        {invoiceDetails.country}
                    </td>
                </tr>
                <tr className="item">
                    <td>
                        Order Category
                    </td>
                    
                    <td>
                        <b>{invoiceDetails.category}</b>
                    </td>
                </tr>
            
            
                {invoiceDetails.item_desc!==""?(
                    <tr className="item">
                    <td>
                        Order Description
                    </td>
                    
                    <td>
                        <b>{invoiceDetails.item_desc}</b>
                    </td>
                </tr>
                ):""
                }
            
                <tr className="heading">
                    <td>
                        Invoice Detail
                    </td>
                    
                    <td>
                        Price
                    </td>
                </tr>
                <tr className="item">
                    <td>
                        {invoiceDetails.itemname}
                    </td>
                    
                    <td>
                        {invoiceDetails.currency!==""?invoiceDetails.itemprice:"$"+" "+invoiceDetails.itemprice}
                    </td>
                </tr>
                <tr className="total">
                    <td></td>
                    
                    <td>
                    Total: {invoiceDetails.currency!==""?invoiceDetails.itemprice:"$"+" "+invoiceDetails.itemprice}
                    </td>
                </tr>
            
            
                {/* // <!--<tr className="total">
                //     <td></td>
                    
                //     <td>
                //        Equivalent Total (USD): <?php echo "$".(isset($converted_amount) ? $converted_amount : '');?>
                //     </td>
                // </tr>--> */}
            
                <tr>
                    <td colspan="2">
                        <b>Note:</b><br />
                        <i> &nbsp; We have received reports of chargebacks recently solely due to the customer not knowing our merchant name for the charges applied to their card, Please remember that our merchant account is </i><b>"Design Paramount"</b>
                        <br />
                        <i> &nbsp; The final price in the invoice includes all applicable taxes including VAT & other import tax if any</i>
                        <br />
                        <i>&nbsp; In case of refund your amount will only be returned on the billing details that were provided on order. designparamount will not be responsible if in case those billing details expire.</i>
                    </td>
                </tr>
            </table>
        </div>
        )
    }
}



export default withRouter(Invoice);