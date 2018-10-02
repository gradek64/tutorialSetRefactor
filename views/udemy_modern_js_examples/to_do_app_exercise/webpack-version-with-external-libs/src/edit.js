import { getSavedNodes, updateNode } from './nodes';
import moment from 'moment'

//grab cosnt value;
const nodeID = location.hash.substring(1);
const verifiedNodeId = (node)=>node.id;

const updateStatus =(timeStamp)=> {
	let message = 'last upated ' + moment(timeStamp, "YYYYMMDD").fromNow();
	timeEdited.innerHTML= message;

};

const initializeEdit = ()=>{

	const nodes = getSavedNodes();
	const node = nodes.find((node)=>node.id === Number(nodeID));

	console.log('node', node);

	if(!node){
		return;
	}
	verifiedNodeId(node)
	node_title.value = node.title;
	node_body.value = node.body;
	timeEdited.innerHTML= updateStatus(node.updatedAt);
};

initializeEdit();



node_body.addEventListener('input',(e)=>{
	console.log(e.target.value);
	console.log(updateNode);
	const node = updateNode(nodeID,{body:e.target.value});
	updateStatus(node.updatedAt);
})

node_title.addEventListener('input',(e)=>{
	updateNode(nodeID,{title:e.target.value});
})