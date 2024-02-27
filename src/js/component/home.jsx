import React, { useEffect, useState } from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	let[textInput, updateTextInput] = useState ("");
	let[todoList, updateTodoList]=useState ([]);

	useEffect(() => {
		createUser("pepito");
	}, []);
	
	function handleInputOnChange (evento){
		updateTextInput (evento.target.value);		
	}

	function handleCreateTaskOnclick (evento){
		let nuevoArray = Array.from(todoList);
		nuevoArray.push(textInput);
		updateTodoList(nuevoArray);
	}
	function handleCreateTaskOnKeyDown (evento){
		if (evento.key === "Enter") {
			let nuevoArray = Array.from(todoList);
			nuevoArray.push(textInput);
			updateTodoList(nuevoArray);
		}
	}
	function createUser (name){
		fetch("https://playground.4geeks.com/apis/fake/todos/user/" + name, {
			method: "POST",
			body: JSON.stringify([]),
			headers: {
				"Content-Type": "application/json",
			}
		})
			.then ((response)=>{
				return response.jason();
			})
			.then((data)=>{
				console.log(data)
			})
			.catch((error)=>{
				console.log (error);
			})
	}





	return (
		<>
			<h1>Todo list</h1>
			<input type="text" onChange={handleInputOnChange} onKeyDown={handleCreateTaskOnKeyDown}/>
			<button onClick={handleCreateTaskOnclick}>Agregar tarea</button>
			<ul>
				{
					todoList.map((item, index)=> {
						return <li key={index}>{item}</li>
					})
				}
			</ul>
		</>
	);
};

export default Home;
