import React, { Component } from 'react';
import axios from 'axios'
import swal from 'sweetalert'
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
       this.check=this.check.bind(this)
       this.handleChange=this.handleChange.bind(this)
    }
  
addUser(e){
  e.preventDefault(e)
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
    this.setState({[e.target.name]:e.target.value})
    console.log(
      {[e.target.name]:e.target.value}
    );
  }
     check(e){
       e.preventDefault()
       const {firstName ,lastName, email, numberPhone}=this.state
       if(email.match(/.+@.+.(com|net|fr)/) && firstName.length>0 && lastName.length> 0 && numberPhone)
        {
          this.addUser(e)
         return swal({title: "good job!",text: "Youre register is done!",icon: "success" })
       }else{
        return swal({title: "Failed!",text: "Please Fill again your form!",icon: "warning" })
       }
     }
    
    render() {
       
        return (
            
             <form className= 'form'>
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
                 <input  onChange={(e)=>this.handleChange(e)} type="number" className="form-control" placeholder="phoneNumber" name="numberPhone" />
              </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={(e)=>this.check(e)}>Register</button>
            
         </form>
        )
    }
}

export default Form;