import React, { Component } from 'react';

class Admin extends Component {
    render() {
        return (
   <div className='Admin'>           
     <ul>
         <li className="post-list-entry">
            <div className="post-list-entry-title">This is an example post title.</div>
             <div className="post-list-entry-byline">Bob Loblaw 11/10/17 1:45pm</div>
             <div className="stats-list-item-views">Views: 536</div>
        </li>
     </ul>
  </div>
        );
    }
}

export default Admin;