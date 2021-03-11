import React, { Component } from 'react';
class Post extends Component {
    render() {
        return (
            <div className="Post">
            <div className="create-editor">
              <h2>NEW POST</h2>
              <form>
                <input className="create-input" type="text"  placeholder="Post Title"></input>
                <input className="create-input" type="text"  placeholder="Author"></input>
                <input className="create-input" type="text"  placeholder="Image URL"></input>
                <textarea className="create-body-textarea"  placeholder="Post Body"></textarea>
                <button className="create-submit-button" type="submit">Save post</button>
              </form>
            </div>
            <div className="create-preview">
              <h2>PREVIEW POST</h2>
             
            </div>
          </div>
        );
    }
}

export default Post;