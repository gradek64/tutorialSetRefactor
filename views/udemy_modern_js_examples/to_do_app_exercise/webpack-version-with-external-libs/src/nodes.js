//import exteranl library moment npm install
const moment = require('moment'); //or import moment from 'moment';
//const taskList2 = document.getElementById('taskList');


const getSavedNodes = function () {
    const todosJSON = localStorage.getItem('todos')

    if (!todosJSON) {
    	return [];
    } else {
        return JSON.parse(todosJSON);
    }
};
let nodes = getSavedNodes();


const saveNodes = () =>{
	console.log(nodes);
	localStorage.setItem('todos', JSON.stringify(nodes));
};

const getTimeStamp = () =>  moment().valueOf();

const createNode = (title) => {
	const id = Math.round(Math.random()*10000);
	const timeStamp = getTimeStamp();

	let newTask = {id:id,
		title:title, 
		body:'', 
		createdAt: timeStamp, 
		updatedAt: timeStamp,
		completed:false
	};
	nodes.push(newTask);
	saveNodes();
};

 const removeNode = (node) =>  {
		//find index of node
		let index = nodes.findIndex((nodes)=> nodes.id === node.id);
		//0 returns false so U need index===0
		if(index || index===0){
			nodes.splice(index,1);
			saveNodes();
		}
};

const sortNotes = (sortBy) => {
	console.log('nodes', nodes);
	console.log('sortBy', sortBy);
	//default sorting byOrder = alphabetically
	if(sortBy==='byOrder'){
		nodes.sort((a,b)=>{
			if(a.title<b.title){
				return -1; //a shows up first
			}
			if(a.title>b.title){
				return 1; //b comes first 
			}else { //if they both the same
				return 0;
			}
		});
	}

	if(sortBy==='lastCreated') {
		nodes.sort((a,b)=>{
			if(a.updatedAt>b.updatedAt){
				return -1;
			}
			if(a.updatedAt<b.updatedAt){
				return 1;
			}else {
				return 0;
			}
		})
  	}
	if(sortBy==='firstCreated') {
		nodes.sort((a,b)=>{
			if (a.updatedAt>b.updatedAt){
				return 1;
			}
			if (a.updatedAt<b.updatedAt){
				return -1;
			} else {
				return 0;
			}
		})
  	}

  	return nodes;
}

console.log(sortNotes('lastCreated'));

const updateNodeStatus = (node) => {
		//just flip it;
		node.completed = !node.completed;
		saveNodes();		
};

const updateNode = (nodeID, updates) =>{
   let node = nodes.find((node)=>node.id === Number(nodeID));
	   if (!node){
	   	return;
	   }
	   		if (updates.title) { node.title = updates.title};
	   		if (updates.body) { node.body = updates.body};
	   		node.updatedAt = getTimeStamp();
	   		saveNodes();

	 return node;
};


//exporting 
export {
	getSavedNodes, 
	createNode, 
	removeNode, 
	sortNotes, 
	updateNodeStatus,
	updateNode,
}