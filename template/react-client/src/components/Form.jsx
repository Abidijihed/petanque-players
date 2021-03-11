import React, { Component } from 'react';
import axios from 'axios'
class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
                firstName: '',
                lastName: '',
                email: '',
                numberPhone:'',
                display_alert:false,
                data:[]
        }
       this.addUser=this.addUser.bind(this)
       this.handleChange=this.handleChange.bind(this)
    }
  
addUser(e){
  e.preventDefault()
  const {firstName ,lastName, email, numberPhone}=this.state
  axios.post('/team',{
    firstName:firstName,
    lastName:lastName,
    email:email,
    numberPhone:numberPhone,
  }).then(({data})=>{
    console.log(data)
    
  })
}
  handleChange(e){
    e.preventDefault()
    this.setState({[e.target.name]:e.target.value})
    console.log(
      {[e.target.name]:e.target.value}
    );
  }
    // check(){
    //   const {firstName ,lastName, email, numberPhone,display_alert}=this.state
    //   if(firstName ==='' || lastName==='' || email ==='' || numberPhone === ''||typeof numberPhone!=='number'){
    //     return this.setState({display_alert:true})
    //   }
    //   if(email.indexOf('@')===-1 || email.indexOf('.',email.indexOf('@')+2)===-1||email.indexOf('@')===email.length-1){
    //     return this.setState({display_alert:true})
    //   }else{
    //     this.setState({display_alert:false})
    //   }
    // }
   crateUser(){
     axios.post
   }
   
    render() {
       
        return (
            
             <form className= 'form'>{(this.state.display_Alert) ? <div className='Alert'>Fill Again <br /> </div > : <div></div>}
                  <h3>Register</h3>
                   
                 <div className="form-group">
                  <label>First Name:</label>
                  <input onChange={(e)=>this.handleChange(e)} type="text" className="form-control" placeholder="First name " name="firstName" />
                </div>

              <div className="form-group">
                 <label>Last Name:</label>
                 <input onChange={(e)=>this.handleChange(e)}type="text" className="form-control" placeholder="Last name"  name="lastName"/>
                </div>

              <div className="form-group">
                <label>Email Address:</label>
                 <input  onChange={(e)=>this.handleChange(e)} type="email" className="form-control" placeholder="Enter email" name="email"/>
              </div>
              <div className="form-group">
                 <label> phoneNumber:</label>
                 <input  onChange={(e)=>this.handleChange(e)}type="number" className="form-control" placeholder="phoneNumber" name="numberPhone" />
              </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block"onClick={()=>this.check()}onClick={this.addUser}>Register</button>
            
         </form>
        )
    }
}

export default Form;