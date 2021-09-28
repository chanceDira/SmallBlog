import React, { Component } from 'react';
//import axios from "axios";
//import axios from "../../axios";
import Posts from "./Posts/Posts";
//import NewPost from "./NewPost/NewPost";

//import FullPost from "./FullPost/FullPost";
import { Route, NavLink,Switch,Redirect } from "react-router-dom";

//import Post from '../../components/Post/Post';
// import FullPost from './FullPost/FullPost';
// import NewPost from './NewPost/NewPost';
import asyncComponent from "../../hoc/asyncComponent";
import './Blog.css';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true
    }

    render () {
        

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/posts/" 
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: "#fa923f",
                                    textDecoration: "underline"
                                }}>Posts</NavLink></li>
                            <li><NavLink to ={{
                                pathname: "/new-post",
                                hash: "#submit",
                                search: "?quick-submit=true"
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                
                {/* <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section> */}
                {/* <Route path="/" exact render={() => <h1>Home</h1>}/>
                <Route path="/" render={() => <h1>Home 2</h1>}/> */}
                {/* <Posts /> */}
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    <Route path="/" component={Posts} />
                    <Route render={() => <h1>Not found</h1>} />
                    <Redirect from="/" to="/posts" />
                  
                    
                </Switch>
                

            </div>
        );
    }
}

export default Blog;