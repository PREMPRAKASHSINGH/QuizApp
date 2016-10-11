import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';
import Scorebox from './quiz/Scorebox.jsx';
import Result from './quiz/Result.jsx';

class App extends Component{
	constructor(props){
		super(props);
		this.state={
			questions:[
				{
					id:1,
					text: "what is your name?",
					choices:[
						{
							id:'a',
							text: 'Michael'
						},
						{
							id:'b',
							text: 'Brad'
						},
						{
							id:'c',
							text: 'Steven'
						}
					],
					correct: 'b'
				},
				{
					id:2,
					text: "what is your mother's name?",
					choices:[
						{
							id:'a',
							text: 'Sara'
						},
						{
							id:'b',
							text: 'Sue'
						},
						{
							id:'c',
							text: 'Donna'
						}
					],
					correct: 'c'
				},
				{
					id:3,
					text: "what is your fathers name?",
					choices:[
						{
							id:'a',
							text: 'Bobby'
						},
						{
							id:'b',
							text: 'Harry'
						},
						{
							id:'c',
							text: 'Wayne'
						}
					],
					correct: 'c'
				},
				{
					id:4,
					text: "what is your friends name?",
					choices:[
						{
							id:'a',
							text: 'John'
						},
						{
							id:'b',
							text: 'Paul'
						},
						{
							id:'c',
							text: 'Jose'
						}
					],
					correct: 'a'
				},
			],
			score:0,
			current:1
		}
	}
	setCurrent(current){
		this.setState({current});
	}
	setScore(score){
		this.setState({score});

	}
	render(){
		if(this.state.current > this.state.questions.length){
			var scorebox="";
			var result=<Result {...this.state} />
		}else{
			var scorebox = <Scorebox {...this.state}/>
			var result="";
		}
		return (
			<div>
				{scorebox}
				<QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)}/>
				{result}
				
			</div>
			);
	}
}
export default App