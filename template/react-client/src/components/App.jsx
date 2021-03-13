import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import Admin from './Admin.jsx';
import Form from './Form.jsx'
import Home from './Home.jsx'
import Post from './Post.jsx'
class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            view:'home',
            data:[],
            post:{}
        }
        this.changeView=this.changeView.bind(this)
    }
    changeView(view,post){
        this.setState({
            view:view,
            post:post
        })
    }
  componentDidMount(){
         axios.get('/team').then(res=>{
           this.setState({
               data:res.data
           })
       }).catch(error =>{
           console.log(error)
       })
   }
//changing view between componenet
    renderView(){
        const {view,data}=this.state 
        if(view ==='home'){
            return <Home data={data}/>
        }else if(view ==='form'){
           return <Form mydata={data}/>
        }else if(view === 'Post'){
            return <Post data={data}/>
        }else if(view === 'Admin'){
            return <Admin />
        }
    }
    render(){
        return(
            <div>
                {console.log(this.state.data)}
              <div className="nav">
                  <span className='logo'
                      onClick={()=>this.changeView('home')}>
                       <img className="logo" src='https://thumbs.dreamstime.com/b/boules-red-orange-yellow-tone-fire-white-background-sport-ball-logo-design-petanque-logo-pantangue-original-name-92966076.jpg' />
                  </span>
                  <span className={this.state.view === 'Admin'
                   ? 'nav-selected'
                   : 'nav-unselected'}
                   onClick={() => this.changeView('Admin')}>
                   ADMIN
                 </span>
                  <span  className={this.state.view==='home'
                  ?'nav-selected'
                   :'nav-unselected'}
                   onClick={()=>this.changeView('home')}>
                   All POST
                   </span>
                   <span className={this.state.view === 'form'
                   ? 'nav-selected'
                   : 'nav-unselected'}
                   onClick={() => this.changeView('form')}>
                  REGISTER INFORMATION
                 </span>
                 <span className={this.state.view === 'Post'
                   ? 'nav-selected'
                   : 'nav-unselected'}
                   onClick={() => this.changeView('Post')}>
                   ADD NEW POST
                 </span>
              </div>
              <div className='home'>
                  {this.renderView()}
              </div>
            </div>
        )
    }
}
export default App