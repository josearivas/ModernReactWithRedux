import React from 'react';
import { connect } from 'react-redux';
import { fecthPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
    componentDidMount() {
        // Generate an action for fecth posts through REST API
        //this.props.fetchPosts();
        this.props.fecthPostsAndUsers();

    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId} />
                    </div>
                </div>
            );
        });
    }

    render() {
        //console.log(this.props.posts);
        return <div className="ui relax divided list">{this.renderList()}</div>;
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts };
};

export default connect(mapStateToProps, { fecthPostsAndUsers })(PostList);