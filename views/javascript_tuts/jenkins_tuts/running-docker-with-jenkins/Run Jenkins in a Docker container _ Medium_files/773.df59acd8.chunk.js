(self.webpackChunklite=self.webpackChunklite||[]).push([[773],{57711:(e,n,t)=>{"use strict";t.d(n,{w:()=>o});var i=t(319),a=t.n(i),l=t(68216),r=t(82864),d=t(4088),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"RightColumnPostListItem_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"createdAt"}},{kind:"Field",name:{kind:"Name",value:"readingTime"}},{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"Field",name:{kind:"Name",value:"imageId"}},{kind:"Field",name:{kind:"Name",value:"mediumMemberAt"}},{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}}]}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"FragmentSpread",name:{kind:"Name",value:"collectionUrl_collection"}},{kind:"Field",name:{kind:"Name",value:"avatar"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"Field",name:{kind:"Name",value:"logo"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"Field",name:{kind:"Name",value:"navItems"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}}]}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"Star_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"usePostUrl_post"}}]}}].concat(a()(l.$m.definitions),a()(l.nf.definitions),a()(r.W.definitions),a()(d.u.definitions))}},64505:(e,n,t)=>{"use strict";t.d(n,{B:()=>E});var i=t(59713),a=t.n(i),l=t(67294),r=t(35989),d=t(25145),o=t(63459),m=t(1210),c=t(18704),u=t(73279),s=t(77355),k=t(93310),v=t(52069),p=t(87691),g=t(18305),f=t(97217);function N(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?N(Object(t),!0).forEach((function(n){a()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var E=function(e){var n=e.post,t=e.onClickTracking,i=e.noPadding,a=e.hideDetails,N=e.allowCollectionAvatar,E=void 0===N||N,y=n.title,h=n.createdAt,F=n.readingTime,b=n.visibility===f.Wn.LOCKED,x=(0,d.L)(n);return l.createElement(s.x,{onClickTracking:t,paddingBottom:i?void 0:"20px"},l.createElement(g.o,{post:S(S({},n),{},{previewContent:null}),presentationContext:"POST_PREVIEW"},l.createElement(s.x,{marginBottom:"8px"},l.createElement(m.q,{post:n,allowCollectionAvatar:E})),l.createElement(s.x,{marginBottom:a?"0px":"8px"},l.createElement(k.r,{href:x},l.createElement(v.Dx,{scale:"XS"},y))),!a&&l.createElement(s.x,{display:"flex",alignItems:"center"},h&&l.createElement(l.Fragment,null,l.createElement(k.r,{href:x},l.createElement(p.F,{scale:"S",color:"LIGHTER"},l.createElement(o.E,{timestamp:h}))),l.createElement(s.x,{margin:"0 6px",ariaHidden:"true"},l.createElement(u.O,null))),l.createElement(k.r,{href:x},l.createElement(c.N,{readingTime:F})),b&&l.createElement(r.U,{padding:"0 0 0 4px",post:n,hideLabel:!0}))))}},1210:(e,n,t)=>{"use strict";t.d(n,{q:()=>w});var i=t(67294),a=t(68427),l=t(84739),r=t(71652),d=t(63038),o=t.n(d),m=t(28655),c=t.n(m),u=t(92471),s=t(64718),k=t(28695),v=t(54341),p=t(77355),g=t(26244),f=t(31889);function N(){var e=c()(["\n  query AuthorCardQuery($id: ID!) {\n    user(id: $id) {\n      ...UserMentionTooltip_user\n    }\n  }\n  ","\n"]);return N=function(){return e},e}var S=(0,u.Ps)(N(),v.O),E=function(e){var n=e.userId,t=(0,s.a)(S,{ssr:!1,variables:{id:n}}),a=t.loading,l=t.data,r=t.error,d=null==l?void 0:l.user;return a||r||!d?i.createElement(k.u,null):i.createElement(k.K,{user:d})},y=function(e){var n=e.children,t=e.creatorId,a=e.showAuthorCard,l=void 0!==a&&a,r=i.useState(0),d=o()(r,2),m=d[0],c=d[1],u=(0,f.F)();i.useEffect((function(){m||c(window.innerWidth)}),[]);var s=m<=u.breakpoints.sm;return l&&t&&!s?i.createElement(p.x,{height:"16px"},i.createElement(g.$,{placement:"right",targetDistance:15,mouseLeaveDelay:200,popoverRenderFn:function(){return i.createElement(E,{userId:t})},display:"block"},n)):n},h=t(17193),F=t(93310),b=t(66216),x=t(88018),I=t(14646),C=function(e){var n=e.clamp,t=e.children,a=e.rules,l=e.tag,r=void 0===l?"h4":l,d=(0,I.I)(),o=(0,f.F)(),m=o.newFonts.detail,c=[{fontFamily:m.family,fontWeight:"500"},(0,x.M)({fontConfig:m,scale:"S"}),n?(0,b.V)({clamp:n,lineHeight:16}):void 0,{lineHeight:"16px",color:o.baseColor.text.normal},a];return i.createElement(r,{className:d(c)},t)};function w(e){var n,t=e.post,d=e.showAuthorCard,o=e.withAvatar,m=void 0===o||o,c=e.avatarTag,u=e.allowCollectionAvatar,s=void 0===u||u,k=t.creator,v=t.collection,g=(0,l.I)(),f=(0,a.B)();if(!k)return null;var N,S,E=k.name,b=g(k);return null!=v&&v.id&&(null==v?void 0:v.name)!==k.name&&(N=f(v),S=v.name),i.createElement(p.x,{display:"flex",flexDirection:"row",alignItems:"center"},m?null!=v&&v.id&&s?i.createElement(r.v,{collection:v,size:20,link:!0}):i.createElement(h.Yt,{user:k,scale:"XXXS",link:!0}):null,i.createElement(p.x,{marginLeft:m?"8px":"0",display:"flex",flexWrap:"wrap",alignItems:"center"},i.createElement(y,{creatorId:null===(n=t.creator)||void 0===n?void 0:n.id,showAuthorCard:d},i.createElement(F.r,{href:b},i.createElement(C,{clamp:1,rules:{paddingRight:"2px"},tag:c},E))),S&&i.createElement(p.x,{display:"flex"},i.createElement(C,{rules:{paddingRight:"2px",color:"#757575"},tag:c},"in"),i.createElement(F.r,{href:N,display:"inline-block"},i.createElement(C,{clamp:1,tag:c},S)))))}},18704:(e,n,t)=>{"use strict";t.d(n,{N:()=>r});var i=t(67294),a=t(87691),l=t(21372);function r(e){var n=e.readingTime,t=e.scale,r=void 0===t?"S":t,d=e.includeRead,o=void 0===d||d,m=e.color,c=e.tag,u=void 0===c?"span":c,s=o?" read":"";return i.createElement(a.F,{scale:r,color:m,tag:u,playwrightClassName:"pw-reading-time"},"".concat((0,l.Vd)(n||0)," min").concat(s))}},80773:(e,n,t)=>{"use strict";t.d(n,{IK:()=>I,Dn:()=>x,co:()=>F,$N:()=>b});var i=t(64718),a=t(67294),l=t(64505),r=t(77355),d=t(93310),o=t(87691),m=t(66411),c=t(43487),u=t(92305),s=t(50458),k=t(319),v=t.n(k),p=t(68216),g=t(57711),f={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"SidebarReadingListQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"catalogId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogById"},arguments:[{kind:"Argument",name:{kind:"Name",value:"catalogId"},value:{kind:"Variable",name:{kind:"Name",value:"catalogId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"catalogUrl_catalog"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"itemsConnection"},arguments:[{kind:"Argument",name:{kind:"Name",value:"pagingOptions"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}}]}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogItemId"}},{kind:"Field",name:{kind:"Name",value:"entity"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"RightColumnPostListItem_post"}}]}}]}}]}}]}}]}}]}}].concat(v()(p.Ui.definitions),v()(g.w.definitions))},N=t(20113),S=t(14646),E=function(e,n){return e?n.accentColor.text.dark:n.accentColor.text.normal},y=function(e){return function(n){return{marginRight:"8px",marginBottom:"1px",height:"8px",width:"8px",borderRadius:"50%",backgroundColor:E(e,n),flex:"none",display:"inline-block"}}},h=function(e){var n=e.title,t=e.includeDot,i=e.darker,l=void 0!==i&&i,r=(0,S.I)();return a.createElement(N.X6,{scale:"XS"},t&&a.createElement("span",{className:r(y(l))}),n)},F="765235bf6ef8",b="2022 in Review",x=function(e){return!1},I=function(e){var n=e.catalogId,t=e.currentPostId,k=e.title,v=e.maxItems,p=(0,c.v9)((function(e){return e.config.authDomain})),g=v?v+1:3,N=null!=v?v:3,S=(0,i.a)(f,{variables:{catalogId:n,limit:g}}).data,E=null==S?void 0:S.catalogById;if("Catalog"!==(null==E?void 0:E.__typename))return null;var y=(0,s.ykG)(E,p),F=E.itemsConnection.items.map((function(e){var n;return"Post"===(null===(n=e.entity)||void 0===n?void 0:n.__typename)?e.entity:void 0})).filter((function(e){return!!e&&e.id!==t})).slice(0,N);return a.createElement(m.cW,{extendSource:!0,source:{name:"list_module",catalogId:E.id}},a.createElement(r.x,{marginBottom:"22px"},a.createElement(d.r,{href:y},a.createElement(h,{title:k||"On this list: ".concat((0,u.Ze)(E)),includeDot:!1}))),F.map((function(e,n){return a.createElement(l.B,{key:"".concat(e.id,"-").concat(n),post:e,hideDetails:!0,allowCollectionAvatar:!1})})),a.createElement(o.F,{scale:"S",color:"ACCENT"},a.createElement(d.r,{href:y},"See the full list")))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/773.df59acd8.chunk.js.map