import React, {Component} from 'react';

// This is a Component - called a functionaly component
// const NameOfFunc = () => {
//     return <div>HI</div>
// }

//This is a Component - called a class base component
class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: ''}
    }

    render() {
        return(
            <div className="search-bar">
                <input 
                    placeholder="Video Search"
                    value={this.state.term}
                    onChange={(event) => this.onInputChange(event.target.value)}/>
            </div>
        );
    }

    // this is the same as what is in the input
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    onInputChange(term) {
        this.setState({term:term});
        this.props.onSearchTermChange(term)
    }
}

export default SearchBar;