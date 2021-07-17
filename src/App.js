import React, { Component } from 'react';
import './App.css';
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
    constructor(props) {
        super(props); // calls superclass constructor function

        // This is the component's state, with its props & their attributes
        this.state = {
            monsters: [], // initially empty; data from JSONPlaceholder's API
            searchField: "" // stores what the user types in the search field
        };
    }

    // Lifecycle methods
    componentDidMount() {
        // Make API request to jsonplaceholder; gets a Promise object as response
        fetch("https://jsonplaceholder.typicode.com/users")
            // This gets another Promise object with the body in JSON format
            .then(response => response.json()) // get Promise with body in JSON
            // This sets the component state with the JSON body data
            .then(users => this.setState({ monsters: users }));
    };

    // Handler methods
    handleChange = (e) => {
        // Sets a state prop to the event target value on an event (onChange,
        // from the SearchBox component's input)
        this.setState({ searchField: e.target.value });
    };

    render() {
        // Destructure state object properties into constants (use same name)
        const { monsters, searchField } = this.state;
        // Create new array with filtered monster names, keeping the ones that
        // have what the user types in the searchField
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                {/* Pass props of placeholder and an (onChange) event handler */}
                <SearchBox
                    placeholder="search monsters"
                    handleChange={this.handleChange}
                />
                {/* pass as props only ones that match what the user has typed */}
                <CardList monsters={filteredMonsters} />
                <footer>
                    Made with &hearts; after following along the first chapters of&nbsp;
                    <a href="https://www.udemy.com/course/complete-react-developer-zero-to-mastery" rel="noreferrer" target="_blank">
                        Complete React Developer in 2021 (w/Redux, Hooks, GraphQL)
                    </a>
                </footer>
            </div>
        ); // end return
    }; // end render
}; // end App

export default App;
