import React from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
//import {robots} from '../robots'; //destruct so write in angular brackets
import Scroll from '../Components/Scroll';

/* STATE = object that describes our application */
/* props = properties (never change) */

/*function App(props){
	return (
		<div className="tc">
			<h1> RoboFriends</h1>

			<SearchBox />

			<CardList robots={robots}/>
		</div>

		);
}*/

/* 
any component that have state uses the class syntax, 
so they can use constructor to create state 
App component have two states: robots and searchfiled 
can be passed as props to child
not pure function bcoz it contains state
*/

class App extends React.Component{
	constructor(){
		super()
		this.state ={
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		/* fetch for making http request to server */
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => {
			return response.json();
		})
		.then(users =>{
			this.setState({robots: users });
		});
		
	}

	onSearchChange =(event) =>{
		console.log(event.target.value);
		this.setState({searchfield : event.target.value});

	}

	render(){
		const filterRobots = this.state.robots.filter(robot =>
		{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		console.log(filterRobots);

		if(this.state.robots.length ===0){
			return <h1> Loading </h1>

		}
		else{

			return (
					<div className="tc">
						<h1 className="f2"> RoboFriends</h1>

						<SearchBox searchChange={this.onSearchChange}/>
						<Scroll>

							<CardList robots={filterRobots}/>
						</Scroll>
					</div>

					);
			}
	}
}


export default App;