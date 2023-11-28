import React from "react";

class ToDo extends React.Component{

     constructor(props) {
        super(props);
        this.state={productName:"",unitPrice:"",quantity:"",amount:""}
        this.handleProductName=this.handleProductName.bind(this);
        this.handleUnitPrice=this.handleUnitPrice.bind(this);
        this.handleQuantity=this.handleQuantity.bind(this);
        this.calculate=this.calculate.bind(this);
     }
     handleProductName(event)
     {
       // alert(event.target.value);
        this.setState({ productName :event.target.value});      
     }
     handleUnitPrice(event)
     {
        this.setState({ unitPrice :event.target.value});      
     }
     handleQuantity(event)
     {
        this.setState({ quantity :event.target.value});      
     }
     calculate(){
        alert(this.state.unitPrice);
       let amount= this.state.unitPrice*this.state.quantity;
       alert(amount);
       if(this.state.quantity>10){
        amount=amount-(amount*10)%100;
       }
       this.setState({amount:amount});
     }
 
  
    render(){
        return(
            <>
            <fieldset>
                <legend>TODO LIST</legend>

                <label>Product Name : </label>
                <input type="text" onChange={this.handleProductName} />
                <br/><br/>

                <label>Unit Price  : </label>
                <input type="text"  onChange={this.handleUnitPrice} />
                <br/><br/>

                <label>Quantity  : </label>
                <input type="text"  onChange={this.handleQuantity} />
                <br/><br/>

                <input type="button" onClick={this.calculate} value="Calculate"/>

                <h1>${this.state.amount}</h1>
             </fieldset>

            </>

        )
    }
}
export default ToDo