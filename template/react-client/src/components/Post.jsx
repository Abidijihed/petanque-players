import React, { Component } from 'react';
import moment from 'moment'
import axios from 'axios'
class Post extends Component {
  constructor(props){
    super(props)
    this.state={
      title:'',
      namee:'',
      imageUrl:'',
      body:''
     
    }
    this.handleClick=this.handleClick.bind(this)
  }

 handleClick(){
   const{title,namee,imageUrl,body}=this.state
   axios.post('/new/new',{
     title:title,
     namee:namee,
     imageUrl:imageUrl,
     body:body,
   }).then(res=>{
    console.log(res.data)
 })

}
 handleChange(e){ 
  this.setState({[e.target.name]:e.target.value})
  console.log(
    {[e.target.name]:e.target.value}
  )
}
 
    render() {
     
        return (
            <div className="Post">
            <div className="create-editor">
              <h2>NEW POST</h2>
              <form>
                <input onChange={(e)=>this.handleChange(e)} name="title"  className="create-input" type="text"  placeholder="Post Title"/>
                <input onChange={(e)=>this.handleChange(e)} name="namee"  className="create-input" type="text"  placeholder="your name"/>
                <input onChange={(e)=>this.handleChange(e)} name="imageUrl"  className="create-input" type="text"  placeholder="Image URL"/>
                <textarea onChange={(e)=>this.handleChange(e)} name="body"  className="create-body-textarea"  placeholder="Post Body"></textarea>
                <button className="create-submit-button" type="submit" onClick={this.handleClick}>Save post</button>
              </form>
            </div>
          </div>
        );
    }
}

export default Post;