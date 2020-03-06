import React from 'react';
//lodash needs typy definition npm i @types/lodash
import _ from 'lodash';
import ReactDOM from 'react-dom';

// custom
import TopManagementListContainer from './logic/TopManagementListContainer';
//custom HOC exercise
//import withSubscription from './logic/HOC_pass_component'
//import ArticleAndCommentList from './functional/ArticleAndCommentList';
import ServeAllHocs from './logic/HOC_2_types/serveAllHocs'

// sample data;
//Array<{name:string,side:string}>  === {name:string,side:string}[]
const starWarsChars: Array<{name:string,side:string}> = [
  { name: 'Luke', side: 'light' },
  { name: 'Darth Vader', side: 'dark' },
  { name: 'Obi-wan Kenobi', side: 'light' },
  { name: 'Palpatine', side: 'dark' }
];

interface articleI {
  articleTitle:string,
  articleID:number,
  articleText:string
}[]
const articles: Array<articleI> = [
  { articleTitle: 'Luke', articleID:1,articleText: 'this is 1 article' },
  { articleTitle: 'Darth Vader', articleID:2,articleText: 'this is 2 article' },
  { articleTitle: 'Obi-wan Kenobi', articleID:3,articleText: 'this is 3 article' },
  { articleTitle: 'Palpatine', articleID:4,articleText: 'this is 4 article' }
];

interface commentsI {
  title:string,
  articleID:number,
  text:string
}[]
const comments: Array<commentsI> = [
  { title: 'Luke',text: 'this is 1 comment', articleID:1, },
  { title: 'Darth Vader', text: 'this is 2 comment',articleID:1, },
  { title: 'Obi-wan Kenobi',text: 'this is 3 comment', articleID:3, },
  { title: 'Palpatine',text: 'this is 4 comment',articleID:4 },
  { title: 'Palpatine',text: 'this is 4 comment article 1',articleID:1 },
  { title: 'Palpatine',text: 'this is 4 comment article 2',articleID:2 },
  { title: 'Palpatine',text: 'this is 4 comment article 3',articleID:3 },
  { title: 'Palpatine',text: 'this is 4 comment article 4',articleID:4 },
];

interface commentsAvatarI {
  avatar:string,
  title:string,
  articleID:number,
  text:string
}[]

const commentsAvatar: Array<commentsAvatarI> = [
  { avatar:'picture',title: 'Luke',text: 'this is 1 comment', articleID:1, },
  { avatar:'picture',title: 'Darth Vader', text: 'this is 2 comment',articleID:1, },
  { avatar:'picture',title: 'Obi-wan Kenobi',text: 'this is 3 comment', articleID:3, },
  { avatar:'picture',title: 'Palpatine',text: 'this is 4 comment',articleID:4 },
  { avatar:'picture',title: 'Palpatine',text: 'this is 4 comment article 1',articleID:1 },
  { avatar:'picture',title: 'Palpatine',text: 'this is 4 comment article 2',articleID:2 },
  { avatar:'picture',title: 'Palpatine',text: 'this is 4 comment article 3',articleID:3 },
  { avatar:'picture',title: 'Palpatine',text: 'this is 4 comment article 4',articleID:4 },
];

const pickArticle:number = 4;

//this should be done with generators to watch once condition is completed start next one 
//just like promise
/* const HOC_Comments = withSubscription(
  ArticleAndCommentList,
  comments,
  //(data:Array<commentsI>) => data.filter(({articleID})=>articleID===pickArticle)  
  //<Dtype extends commentsI>(data:Array<Dtype>):Array<Dtype> same as below  
  (data:Array<commentsI>):Array<commentsI> => data.filter(({articleID})=>articleID===pickArticle)  
   );

 const HOC_CommentsAvatar = withSubscription(
    ArticleAndCommentList,
    commentsAvatar,
    <Dtype extends commentsAvatarI>(data:Array<Dtype>):Array<Dtype> => data.filter(({articleID})=>articleID===pickArticle)  
    ); */

//------ article component ----//
interface Iprops {
  data:Array<articleI>,
  articleID:number,
}
const HOC_article:React.FC<Iprops> = ({data,articleID:pick}) => {
  const article = data.find( ({articleID})=>articleID===pick);
    return article?(<>
      <h2>{article.articleTitle}</h2>
       <p>{article.articleText}</p>
    </>):null
}
//------//

const jsx = (
  <div>
    <div>
      <h2>table</h2>
      <TopManagementListContainer list={starWarsChars} />
     
       {/* <h3 >my hoc article</h3>
      <HOC_article data={articles} articleID={pickArticle}/>
      <h3 >{`my hoc comments to article ${pickArticle} with avatar pic`}</h3>

     <HOC_CommentsAvatar dataSelectors={{avatar:'',text:''}} type={'commentAvatar'}/>
      <h3 >{`my hoc comments to article ${pickArticle}`}</h3>
      <HOC_Comments dataSelectors={{text:''}} type={'comment'}/> */}
      <h3>{'HOC simple examples'}</h3>
      <ServeAllHocs />
    </div>
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));

// lodash examples
const camelCaseName = starWarsChars.map(({ name }) => _.capitalize(name));

console.log(camelCaseName);
