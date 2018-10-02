import { getFilters } from './filters';
import { sortNotes , removeNode , updateNodeStatus  } from './nodes';


const generateDOMEList = (node) => {

	let row = document.createElement('div');

	let checkbox = document.createElement('input');
	checkbox.setAttribute('type','checkbox');

	//task completed checked;
	checkbox.checked = node.completed;
	//check task as done or undone;
	checkbox.addEventListener('change',function(evt){
		updateNodeStatus(node);
		prepareAndRenderList();
	});

	let atag = document.createElement('a');
	atag.href = `/edit.html#${node.id}`;
	atag.textContent = node.title;

	let button = document.createElement('button');
	button.className = 'delete_bttn';
	button.textContent = 'x';
	button.addEventListener('click',function(){
		removeNode(node);
		prepareAndRenderList();
	});

	row.appendChild(checkbox);
	row.appendChild(atag);
	row.appendChild(button);

	return row;

};

// Get the DOM elements for list summary
const generateSummaryTitle = function (nodes) {

	let incompleteTodos = nodes.filter((e)=>!e.completed);
	summary.textContent = '';
    let summaryText = incompleteTodos.length === 0 && nodes.length === 0 ? 
    		'No tasks yet' : `You have ${incompleteTodos.length} todos left`;
    summary.textContent = summaryText;

    return summary;
};

const prepareAndRenderList = function() {

	let filters = getFilters();
	console.log(filters);
	const { searchText, hideCompleted, sortBy} = getFilters();
	let nodes = sortNotes(sortBy);

	console.log(nodes);
	//create summuary Title (no need to select DOM for taskContainer it is ID of html element ,Webpack will know it;)
	taskContainer.prepend(generateSummaryTitle(nodes));

	//empty container first 
	taskList.innerHTML = '';
	let filterTasks = nodes.filter((el) => { 
		const searchTextFilter = el.title.toLowerCase().trim().includes(searchText);
		const showIncompletedOnly = !hideCompleted || !el.completed;

		return searchTextFilter && showIncompletedOnly;
	});

	filterTasks.forEach((task)=>{
		taskList.append(generateDOMEList(task));
	});

};

export { prepareAndRenderList };