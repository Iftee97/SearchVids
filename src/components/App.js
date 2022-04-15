import axios from "axios";
import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends Component {
    state = {
        videos: [],
        selectedVideo: null
    };

    onTermSubmit = async (term) => {
        const apiKey = "AIzaSyAEfpGInlEYnnbZB3bDtIslo74tGo6J6QQ";
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=${apiKey}&q=${term}`);

        // console.log(response.data.items);
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = (video) => {
        // console.log("From the app:", video);
        this.setState({ selectedVideo: video });
    };
    
    componentDidMount() {
        this.onTermSubmit("happy dogs");
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />

                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

// YT API key: AIzaSyAEfpGInlEYnnbZB3bDtIslo74tGo6J6QQ
// API Call: https://www.googleapis.com/youtube/v3/search

