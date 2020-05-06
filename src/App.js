import React from 'react';
import CardList from './components/card-list/CardList';
import SearchBox from './components/searchbox/SearchBox';
import './App.css';

class App extends React.Component {

  state = {
    cartoons: [],
    searchField: ''
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({cartoons: users}))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value})
  }

  render(){ 
    const { cartoons, searchField } = this.state;
    const filteredCartoons = cartoons.filter(cartoon =>
      cartoon.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className="App">
        <h1>Cartoon Rolodex</h1>
        <SearchBox
        placeholder= 'search'
        handleChange = {this.handleChange}
        />
        <CardList cartoons={filteredCartoons} /> 
      </div>
    );
  }
}

export default App;
