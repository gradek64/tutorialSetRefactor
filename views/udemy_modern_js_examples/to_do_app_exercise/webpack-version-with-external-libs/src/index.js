import { getSavedNodes, 
		createNode, 
		removeNode, 
		sortNotes, 
		updateNodeStatus,
		updateNode,
} from './nodes';

import { getFilters, setFilters } from './filters';
import { prepareAndRenderList } from './views';
//append task to the list;
	


	/*
			IMPORTANT 

		There is no need for selecting HTML element by ids , Webpack will automatically select them as example below:

		<button id="addTaskSubmit" >add Task</button> 

		console.log(addTaskSubmit); //it will return html element <button id="addTaskSubmit" >add Task</button> 

		works only for IDS not for classes or any other attrbutes;
	*/



prepareAndRenderList();

//add task 
addTask.addEventListener('click',(e)=>{
	const title = addTaskField.value;
	createNode(title);
	prepareAndRenderList();
});

//show only incoplete task 
showIncomplete.addEventListener('change', (e)=>{
	setFilters({hideCompleted:e.target.checked});
	prepareAndRenderList();
});

//filter by text;
search.addEventListener('input',(e)=>{
	let textEntered = e.target.value;
	setFilters({searchText:textEntered});
	prepareAndRenderList();
});

//sort by tasks 
sortBy.addEventListener('change', (e)=>{
	setFilters({sortBy:e.target.value});
	prepareAndRenderList();
});
