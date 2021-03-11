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
            data:[]
        }
        this.changeView=this.changeView.bind(this)
    }
    changeView(view){
        this.setState({
            view:view
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
    renderView(){
        const {view}=this.state
        if(view ==='home'){
            return <Home handleClick={()=>this.changeView('anypost')}/>
        }else if(view ==='form'){
           return <Form mydata={this.state.data}/>
        }else if(view === 'Post'){
            return <Post />
        }
    }
    render(){
        return(
            <div>
                {console.log(this.state.data)}
              <div className="nav">
                  <span className='logo'
                      onClick={()=>this.changeView('home')}>
                        HOME PAGE
                  </span>
                  <span className={this.state.view === 'login'
                   ? 'nav-selected'
                   : 'nav-unselected'}
                   onClick={() => this.renderView('login')}>
                   Admin
                 </span>
                  <span  className={this.state.view==='home'
                  ?'nav-selected'
                   :'nav-unselected'}
                   onClick={()=>this.changeView('home')}>
                   All Post
                   </span>
                   <span className={this.state.view === 'form'
                   ? 'nav-selected'
                   : 'nav-unselected'}
                   onClick={() => this.changeView('form')}>
                   Register Information
                 </span>
                 <span className={this.state.view === 'Post'
                   ? 'nav-selected'
                   : 'nav-unselected'}
                   onClick={() => this.changeView('Post')}>
                   Write Post
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