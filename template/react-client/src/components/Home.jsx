import React, { Component } from 'react';
import moment from 'moment'
import axios from  'axios'
class Home extends Component {
    constructor(props){
        super(props)
        this.state={
          data:[]
        }
    }
  //get all poste and render them   
 componentDidMount(){
   axios.get('/post/post').then(res=>{
            this.setState({
                data:res.data
            })
        }).catch(error =>{
            console.log(error)
        })
    }
    
    render() {
        return (
            <div className='home'> 
            {console.log(this.state.data)}
                  <ul>
              {this.state.data.map((e,index)=>
              <li className="feed-list-item" key={index}>
          <div className="feed-list-item-title" >{e.title}</div>
          <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">{e.namee}</span>{ moment(e.createdAt).fromNow()}</div>
         <img src={e.imageUrl}  className="feed-list-item-image"/>
         <span className="feed-list-item-lede">{e.body}</span>
      </li>
    )}
    </ul>
            </div>
        );
    }
}

export default Home;