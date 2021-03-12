import React, { Component } from 'react';
import axios from 'axios'
class Admin extends Component {
    constructor(props){
        super(props)
        this.state={
            togle:false,
            password:'',
            email:'',
            data:[]
        }
        this.handleClick=this.handleClick.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.addUser=this.addUser.bind(this)
        this.CheckUser=this.CheckUser.bind(this)
    }
    addUser(){
        const {password,email}=this.state
          axios.post('/admin/admin',{
                 password:password,
                 email:email
          }).then(res=>{
              console.log(res)
          })
    }
    CheckUser(e){
        const {password,email}=this.state
          axios.post('/login/login',{
                 password:password,
                 email:email
          }).then(res=>{
              console.log('hhhh',res)
             this.handleClick(e)
          })
    }
    handleClick(e){
        e.preventDefault()
        this.setState({
            togle:!this.state.togle
        })
    }
    handleChange(e){ 
        this.setState({[e.target.name]:e.target.value})
        console.log(
          {[e.target.name]:e.target.value}
        );
      }
  delete(id){
      axios.delete('/post/delete/'+id,{
       
      })
      .then((res)=>{
        this.GetData()
      })
  }

  GetData(){
    axios.get('/team').then(res=>{
        this.setState({
            data:res.data
        })
    }).catch(error =>{
        console.log(error)
    })
  }
  componentDidMount(){
    this.GetData()
  }
    
    render() {
        const {togle}=this.state
        return (
   
   <div className='Admin'>  
   {console.log(this.props)}
       {!togle && <form>
    <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input onChange={(e)=>this.handleChange(e)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"name="email"/>
    
   </div>
    <div className="form-group">
       <label htmlFor="exampleInputPassword1">Password</label>
    <input onChange={(e)=>this.handleChange(e)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"name="password"/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="button" className="btn btn-primary" onClick={()=>this.addUser()}>Sign up</button>
  <button type="button" className="btn btn-primary" onClick={(e)=>this.CheckUser(e)}>Sign in</button>

</form>}
   
{togle &&<div>
      {console.log(this.state.data)}
      <ul>
          {this.state.data.map(e=>  
             <li className="post-list-entry" key={e.id}>
            <div className="post-list-entry-title">{e.firstName}</div>
             <div className="post-list-entry-byline">{e.lastName}</div>
             <div className="stats-list-item-views">{e.numberPhone}</div>
             <button type='button'onClick={()=>this.delete(e.id)}>❌</button>
        </li>
            )}
        
     </ul>
     </div>}
  </div>
        );
    }
}

export default Admin;