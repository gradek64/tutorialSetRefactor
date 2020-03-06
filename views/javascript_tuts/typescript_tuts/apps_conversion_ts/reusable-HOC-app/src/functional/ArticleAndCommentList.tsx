import React from 'react';
import PropTypes from 'prop-types';

/*
  *@this is presentional component
  *@it is pure component that has no login just accepets data from props
*/
interface IProps {
  list:{title?:string,text?:string,articleTitle?:string,articleText?:string,avatar:string}[],
  dataSelectors:{},
  type:string,
}

const RenderDisplayList:React.FC<IProps> = ({ list, type, dataSelectors }) => {
  const keys = Object.keys(dataSelectors)
  console.log('intereateOn',dataSelectors);
  console.log('list',list);
  console.log('keys[1]',keys[1]);
  console.log('type',type);
  
  
  
  return (<div>
    {type==='comment'?list.map((char,i) => 
      (<div key={`set${i}`}>
        {keys.find((key)=>key==='title')?<div>Character: {char.title}</div>:null}
        {keys.find((key)=>key==='text')?<div>Character: {char.text}</div>:null}
      </div>)
    ):null}
    {type==='commentAvatar'?list.map((char,i) => 
      (<div key={`set${i}`}>
        {keys.find((key)=>key==='avatar')?<div>avatar: {char.avatar}</div>:null}
        {keys.find((key)=>key==='title')?<div>Title: {char.title}</div>:null}
        {keys.find((key)=>key==='text')?<div>Character: {char.text}</div>:null}
      </div>)
    ):null
    }
  </div>
);
    }
/* RenderDisplayList.propTypes = {
  list: PropTypes.instanceOf(Array).isRequired,
}; */

export default RenderDisplayList;
