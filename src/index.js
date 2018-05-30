import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_detail';

const API_KEY = 'AIzaSyAj2ouOcnwrv0XP5iXjOqd18WSBWyUEUTM';


// Create a new component. This component should produce some html
class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
         };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key:API_KEY, term: term}, (videos) =>{
            console.log(videos)
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            //this.setState({videos}); this is the same as above
        });
    }

    render(){
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
        return (
            <div className="container">
              <SearchBar onSearchTermChange={videoSearch}/>
              <VideoDetails video={this.state.selectedVideo}/>
              <VideoList  
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos}/>
            </div>
        );
    }
}

//Take component's generated html and put it on the page (DOM)
ReactDOM.render(<App/>, document.querySelector("#root"));