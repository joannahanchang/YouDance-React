import React, { Component } from 'react';

class VideoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: props.videos,
        };
    }

    componentWillReceiveProps(props) {
        console.log('componentWillReceiveProps', props)
        this.setState({
            videos: props.videos,
        });
    }

    render() {
        console.log('this.state.videos', this.state.videos)
        const videoElements = this.state.videos.map((video) => {
            return(
                <React.Fragment>
                    <h5>{video.description}</h5>
                    <iframe width="750" height="315" src={video.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </React.Fragment>
            )
        });
        
        return (<div>
            {videoElements}
        </div>);

    }
} 

export default VideoList;
