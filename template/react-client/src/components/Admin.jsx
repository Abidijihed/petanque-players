import React, { Component } from 'react';

class Admin extends Component {
    constructor(props){
        super(props)
        this.state={
            togle:false
        }
        this.handleClick=this.handleClick.bind(this)
        // this.handleChange=this.handleChange.bind(this)
    }
    handleClick(e){
        e.preventDefault()
        this.setState({
            togle:!this.state.togle
        })
    }
    render() {
        const {togle}=this.state
        return (
   
   <div className='Admin'>   
       {!togle && <form>
    <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
   </div>
    <div className="form-group">
       <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
 
</form>}
   
{togle &&<div>
      {console.log(this.props.data)}
      <ul>
          {this.props.data.map(e=>  
             <li className="post-list-entry" key={e.id}>
            <div className="post-list-entry-title">{e.firstName}</div>
             <div className="post-list-entry-byline">{e.lastName}</div>
             <div className="stats-list-item-views">{e.numberPhone}</div>
        </li>
            )}
        
     </ul>
     </div>}
  </div>
        );
    }
}

export default Admin;