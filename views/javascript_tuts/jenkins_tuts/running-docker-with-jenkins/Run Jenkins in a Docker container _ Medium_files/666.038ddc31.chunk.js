(self.webpackChunklite=self.webpackChunklite||[]).push([[666],{97147:(e,n,t)=>{"use strict";t.d(n,{c:()=>c});var i=t(319),a=t.n(i),o=t(13740),l=t(82002),d=t(47282),r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CatalogsListItemCovers_catalog"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"listItemsConnection"},name:{kind:"Name",value:"itemsConnection"},arguments:[{kind:"Argument",name:{kind:"Name",value:"pagingOptions"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"10"}}]}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogItemId"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PreviewCatalogCovers_catalogItemV2"}}]}}]}}]}}].concat(a()(d.x.definitions))},c={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CatalogsListItem_catalog"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"predefined"}},{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"username"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"getCatalogSlugId_Catalog"}},{kind:"FragmentSpread",name:{kind:"Name",value:"formatItemsCount_catalog"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CatalogsListItemCovers_catalog"}}]}}].concat(a()(o.g.definitions),a()(l.B.definitions),a()(r.definitions))}},48456:(e,n,t)=>{"use strict";t.d(n,{D:()=>s});var i=t(319),a=t.n(i),o=t(88398),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CatalogAddToListItem_catalog"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"Field",name:{kind:"Name",value:"predefined"}},{kind:"Field",name:{kind:"Name",value:"version"}},{kind:"FragmentSpread",name:{kind:"Name",value:"WithToggleInsideCatalog_catalog"}}]}}].concat(a()(o.s.definitions))},d={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CatalogAddToList_catalog"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"CatalogAddToListItem_catalog"}}]}}].concat(a()(l.definitions))},r=t(97147),c={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"YourCatalogsScreen_catalog"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CatalogsListItem_catalog"}}]}}].concat(a()(r.c.definitions))},u={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"GetCatalogsByUserReadingList_catalog"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"CatalogAddToList_catalog"},directives:[{kind:"Directive",name:{kind:"Name",value:"skip"},arguments:[{kind:"Argument",name:{kind:"Name",value:"if"},value:{kind:"Variable",name:{kind:"Name",value:"withCatalogDetails"}}}]}]},{kind:"FragmentSpread",name:{kind:"Name",value:"YourCatalogsScreen_catalog"},directives:[{kind:"Directive",name:{kind:"Name",value:"include"},arguments:[{kind:"Argument",name:{kind:"Name",value:"if"},value:{kind:"Variable",name:{kind:"Name",value:"withCatalogDetails"}}}]}]}]}}].concat(a()(d.definitions),a()(c.definitions))},m={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"GetCatalogsByUserCatalogs_catalog"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"CatalogAddToList_catalog"},directives:[{kind:"Directive",name:{kind:"Name",value:"skip"},arguments:[{kind:"Argument",name:{kind:"Name",value:"if"},value:{kind:"Variable",name:{kind:"Name",value:"withCatalogDetails"}}}]}]},{kind:"FragmentSpread",name:{kind:"Name",value:"YourCatalogsScreen_catalog"},directives:[{kind:"Directive",name:{kind:"Name",value:"include"},arguments:[{kind:"Argument",name:{kind:"Name",value:"if"},value:{kind:"Variable",name:{kind:"Name",value:"withCatalogDetails"}}}]}]}]}}].concat(a()(d.definitions),a()(c.definitions))},s={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetCatalogsByUserQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"userId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"pagingOptions"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"CatalogPagingOptionsInput"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"type"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"CatalogType"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"withCatalogDetails"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"readingList"},name:{kind:"Name",value:"getPredefinedCatalog"},arguments:[{kind:"Argument",name:{kind:"Name",value:"userId"},value:{kind:"Variable",name:{kind:"Name",value:"userId"}}},{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"EnumValue",value:"READING_LIST"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"GetCatalogsByUserReadingList_catalog"}}]}},{kind:"Field",name:{kind:"Name",value:"catalogsByUser"},arguments:[{kind:"Argument",name:{kind:"Name",value:"userId"},value:{kind:"Variable",name:{kind:"Name",value:"userId"}}},{kind:"Argument",name:{kind:"Name",value:"pagingOptions"},value:{kind:"Variable",name:{kind:"Name",value:"pagingOptions"}}},{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"Variable",name:{kind:"Name",value:"type"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"catalogs"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GetCatalogsByUserCatalogs_catalog"}}]}},{kind:"Field",name:{kind:"Name",value:"paging"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"nextPageCursor"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}}]}}]}}].concat(a()(u.definitions),a()(m.definitions))}},39210:(e,n,t)=>{"use strict";t.d(n,{W:()=>a,WU:()=>o,dT:()=>l,u7:()=>d,Ln:()=>r});var i=t(97217),a=50,o=20,l=20,d=10,r=function(e){var n=e.limit,t=e.withCatalogDetails,a=void 0!==t&&t;return{userId:e.userId,pagingOptions:{limit:n},type:i.HQ.LISTS,withCatalogDetails:a}}},19416:(e,n,t)=>{"use strict";t.d(n,{I:()=>l});var i=t(67294),a=t(77355),o=t(87529),l=function(e){var n=e.loading,t=e.text,l=void 0===t?"Done":t;return i.createElement(a.x,{display:"inline-flex",alignItems:"center",tag:"span"},l,n&&i.createElement(a.x,{paddingLeft:"10px",tag:"span"},i.createElement(o.T,{size:"18px"})))}},88398:(e,n,t)=>{"use strict";t.d(n,{s:()=>i,m:()=>a});var i={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"WithToggleInsideCatalog_catalog"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"version"}},{kind:"Field",name:{kind:"Name",value:"predefined"}}]}}]},a={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"WithToggleInsideCatalog_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogsConnection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogsContainingThis"},arguments:[{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"EnumValue",value:"LISTS"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogId"}}]}},{kind:"Field",name:{kind:"Name",value:"predefinedContainingThis"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"predefined"}}]}}]}}]}}]}}]}},63508:(e,n,t)=>{"use strict";t.d(n,{a:()=>y});var i=t(63038),a=t.n(i),o=t(67294),l=t(19416),d=t(1109),r=t(66916),c=t(54758),u=t(13791),m=t(77355),s=t(77593),k=t(93310),g=t(61609),v=t(52069),f=t(87691),p=t(97217),N=t(78285),C=t(43487),S=t(50458);function y(e){var n=e.isVisible,t=e.hide,i=e.target,y=e.kind,I=e.viewer,b=o.useState(""),h=a()(b,2),F=h[0],E=h[1],D=o.useState(!1),_=a()(D,2),w=_[0],T=_[1],O=o.useState(""),x=a()(O,2),V=x[0],P=x[1],L=o.useState(!1),j=a()(L,2),A=j[0],R=j[1],B=(0,C.v9)((function(e){return e.config.authDomain})),M=(0,r.Ax)(I.id),U=M.createCatalog,W=M.loading,Y=M.data,z=M.error,H=(0,c.T2)(),Q=(0,N.w)();o.useEffect((function(){if("Catalog"===(null==Y?void 0:Y.createCatalog.__typename))if(y&&i){var e=Y.createCatalog,n=e.id,t=e.version;H({userId:I.id,catalogId:n,version:t,kind:y,itemId:i.id}),Z()}else window.location.assign((0,S.ykG)(Y.createCatalog,B))}),[null==Y?void 0:Y.createCatalog,y,null==i?void 0:i.id,H,I.id]),o.useEffect((function(){z&&Q({toastStyle:"RETRYABLE_ERROR",duration:4e3})}),[z,Q]);var G=o.useCallback((function(e){E(e.target.value)}),[E]),$=o.useCallback((function(e){P(e.target.value)}),[P]),Z=o.useCallback((function(){E(""),P(""),T(!1),R(!1),t()}),[t]),q=o.useCallback((function(){var e=F.trim();e.length>0&&U({attributes:{title:e,description:V.trim(),type:p.HQ.LISTS,visibility:A?p.n2.PRIVATE:p.n2.PUBLIC}})}),[F,V,A,U]);return o.createElement(u.v,{isVisible:n,hide:Z,confirmText:o.createElement(l.I,{loading:W,text:"Create"}),isDestructiveAction:!1,onConfirm:q,disableConfirm:!F.trim()||W||(0,d.G6)(F)||(0,d.z6)(V),hideOnConfirm:!1},o.createElement(m.x,{height:"400px"},o.createElement(m.x,{paddingBottom:"60px"},o.createElement(v.Dx,{scale:"L"},"Create new list")),o.createElement(m.x,{textAlign:"left",width:"400px",sm:{width:"100%"}},o.createElement(m.x,{paddingBottom:"20px"},o.createElement(s.n,{value:F,onChange:G,placeholder:"Give it a name",characterCountLimit:d.lp})),o.createElement(m.x,{paddingBottom:"20px"},w?o.createElement(m.x,{maxHeight:"170px",overflow:"auto"},o.createElement(s.n,{value:V,onChange:$,placeholder:"Description",isMultiline:!0,autoFocus:!0,characterCountLimit:d.B0})):o.createElement(k.r,{onClick:function(){return T(!0)}},o.createElement(f.F,{scale:"L",color:"ACCENT"},"Add a description"))),o.createElement(m.x,null,o.createElement(g.X,{checked:A,onChange:function(){return R(!A)},textScale:"L"},"Make it private")))))}},82002:(e,n,t)=>{"use strict";t.d(n,{n:()=>i,B:()=>a});var i={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"getCatalogMiroURLForMetadata_catalog"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"thumbnailImage"}}]}}]},a={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"formatItemsCount_catalog"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"postItemsCount"}}]}}]}},1109:(e,n,t)=>{"use strict";t.d(n,{KB:()=>g,fg:()=>v,Fd:()=>f,SZ:()=>p,gs:()=>N,C2:()=>C,lp:()=>S,B0:()=>y,z6:()=>I,G6:()=>b});var i=t(28655),a=t.n(i),o=t(92471),l=t(23450),d=t.n(l),r=t(67294),c=t(25550),u=t(97217),m=t(46696);function s(){var e=a()(["\n  fragment formatItemsCount_catalog on Catalog {\n    postItemsCount\n  }\n"]);return s=function(){return e},e}function k(){var e=a()(["\n  fragment getCatalogMiroURLForMetadata_catalog on Catalog {\n    thumbnailImage\n  }\n"]);return k=function(){return e},e}var g=function(){var e=(0,c.r)().viewerId;return(0,r.useCallback)((function(n){return e===n}),[e])},v=function(e){return g()(e)},f=function(e){return(0,m.W6)({miroId:e.thumbnailImage})},p=function(e){var n=e.postItemsCount;return n>0?"".concat(e.postItemsCount," ").concat(d()("story",n)):""},N=((0,o.Ps)(k()),(0,o.Ps)(s()),function(){return"This story is no longer available"}),C=function(e){var n;return"Post"===(null===(n=e.entity)||void 0===n?void 0:n.__typename)&&e.entity.visibility===u.Wn.UNLISTED},S=60,y=280;function I(e){return!!e&&e.length>y}function b(e){return e.length>S}},12476:(e,n,t)=>{"use strict";t.d(n,{Rx:()=>C,p9:()=>I,uA:()=>y,Wt:()=>S,S_:()=>N,fN:()=>b,UV:()=>f});var i=t(63038),a=t.n(i),o=t(319),l=t.n(o),d=t(59713),r=t.n(d),c=t(90386),u=t(44922),m=t(97217),s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"updateCatalogVersionInCache_catalog"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"version"}}]}}]},k={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"newCatalogItemV2_catalogItemV2"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"CatalogItemV2"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"catalogItemId"}}]}}]};function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){r()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function f(e,n,t){e.writeFragment({id:"Catalog:".concat(n),fragment:s,data:{version:t}})}function p(e,n){var t=r()({},m.ej.POST,"postItemsCount");if(t[e])return r()({},t[e],(function(e){return e+n}))}function N(e,n,t,i){e.modify({id:"Catalog:".concat(n),fields:v(v({},p(i,-t.length)),{},{itemsConnection:function(e){if(null==e||!e.items)return e;var n=e.items.filter((function(e){return!t.some((function(n){return t={catalogItemId:n},e.__ref==="CatalogItemV2:".concat(JSON.stringify(t));var t}))}));return v(v({},e),{},{items:n})}})})}function C(e,n,t,i){var a=t.map((function(n){return e.writeFragment({data:{__typename:"CatalogItemV2",catalogItemId:n},fragment:k})})).filter((function(e){return!!e}));a.length>0&&e.modify({id:e.identify({__typename:"Catalog",id:n}),fields:v(v({},p(i,a.length)),{},{itemsConnection:function(e){var n=(null==e?void 0:e.items)||[];return v(v({},e),{},{items:[].concat(l()(a),l()(n))})}})})}function S(e,n){e.modify({id:e.identify((0,c.kQ)("ROOT_QUERY")),fields:{catalogsByUser:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,i=t.DELETE,o={},l=(0,u.b)({userId:n}),d=0,r=Object.entries(e);d<r.length;d++){var c=a()(r[d],2),m=c[0],s=c[1];o[m]=m.startsWith(l)?i:s}return o}}})}function y(e,n){e.modify({id:e.identify({__typename:"Catalog",id:n}),fields:{itemsConnection:function(e,n){return n.DELETE}}})}function I(e,n,t,i){e.modify({id:e.identify((0,c.kQ)("ROOT_QUERY")),fields:{catalogsByUser:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,d=o.readField,r=o.DELETE,c={},m=(0,u.b)({userId:n,type:t}),s=0,k=Object.entries(e);s<k.length;s++){var g=a()(k[s],2),f=g[0],p=g[1];if(f.startsWith(m)){var N=(null==p?void 0:p.catalogs)||[],C=l()(N),S=C.findIndex((function(e){return d("id",e)===i}));if(-1===S)c[f]=r;else{var y=C.splice(S,1),I=a()(y,1),b=I[0];C.unshift(b),c[f]=v(v({},p),{},{catalogs:C})}}else c[f]=p}return c}}})}function b(e,n,t,i){e.modify({id:e.identify({__typename:"CatalogViewerEdge",id:"catalogId:".concat(t,"-viewerId:").concat(n)}),fields:{isFollowing:function(){return i}}})}},54758:(e,n,t)=>{"use strict";t.d(n,{PH:()=>I,xt:()=>b,T2:()=>E,qY:()=>D,Yi:()=>_,oj:()=>T});var i=t(59713),a=t.n(i),o=t(63038),l=t.n(o),d=t(28655),r=t.n(d),c=t(50361),u=t.n(c),m=t(92471),s=t(21919),k=t(67294),g=t(12476),v=t(18627),f=t(97217),p=t(11462);function N(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?N(Object(t),!0).forEach((function(n){a()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function S(){var e=r()(["\n  fragment editCatalogItemsMutation_postViewerEdge on PostViewerEdge {\n    id\n    catalogsConnection {\n      catalogsContainingThis(type: LISTS) {\n        catalogId\n        version\n        catalogItemIds\n      }\n      predefinedContainingThis {\n        catalogId\n        predefined\n        version\n        catalogItemIds\n      }\n    }\n  }\n"]);return S=function(){return e},e}function y(){var e=r()(["\n  mutation EditCatalogItems(\n    $catalogId: String!\n    $version: String!\n    $operations: [CatalogItemMutateOperationInput!]!\n  ) {\n    editCatalogItems(catalogId: $catalogId, version: $version, operations: $operations) {\n      __typename\n      ... on EditCatalogItemsSuccess {\n        version\n        operations {\n          __typename\n          preprend {\n            __typename\n            catalogItemId\n          }\n          append {\n            __typename\n            catalogItemId\n          }\n          move\n        }\n      }\n    }\n  }\n"]);return y=function(){return e},e}var I="temp-cat-item-id",b="temp-cat-version",h=(0,m.Ps)(y()),F=(0,m.Ps)(S());function E(){var e=(0,v.Av)(),n=(0,k.useRef)(),t=(0,k.useRef)((function(t){var i=n.current;i&&"EditCatalogItemsSuccess"===t.editCatalogItems.__typename&&i.kind===f.ej.POST&&e.event("post.addToList",{listId:i.catalogId,postId:i.itemId})})).current,i=(0,s.D)(h,{onCompleted:t}),a=l()(i,1)[0];return(0,k.useCallback)((function(e){n.current=e,a({variables:{catalogId:e.catalogId,version:e.version,operations:[{preprend:{type:e.kind,id:e.itemId}}]},update:function(n,t){w({viewerId:e.userId,cache:n,result:t,catalogId:e.catalogId,itemId:e.itemId,kind:e.kind,operation:"preprend",predefined:e.predefined}),(0,g.p9)(n,e.userId,f.HQ.LISTS,e.catalogId)}})}),[a])}function D(e,n,t,i,a,o){var l=(0,v.Av)();return(0,s.D)(h,{variables:{catalogId:n,version:t,operations:[{preprend:{type:a,id:i}}]},update:function(t,l){w({viewerId:e,cache:t,result:l,catalogId:n,itemId:i,kind:a,operation:"preprend",predefined:o}),o||(0,g.p9)(t,e,f.HQ.LISTS,n),(0,g.Rx)(t,n,[i],a)},optimisticResponse:{editCatalogItems:{__typename:"EditCatalogItemsSuccess",operations:[{__typename:"EditCatalogItemMutationOperationResponse",preprend:{__typename:"CatalogItemV2",catalogItemId:I},append:null,move:null}],version:b}},onCompleted:function(e){"EditCatalogItemsSuccess"===e.editCatalogItems.__typename&&a===f.ej.POST&&l.event("post.addToList",{listId:n,postId:i})}})}var _=function(e,n,t,i,a,o){var l=(0,v.Av)(),d=i.map((function(e){return e.catalogItemIds})).flat();return(0,s.D)(h,{variables:{catalogId:n,version:t,operations:d.map((function(e){return{delete:{itemId:e}}}))},update:function(t,o){i.forEach((function(i){w({viewerId:e,cache:t,result:o,catalogId:n,itemId:i.entityId,kind:i.entityType,operation:"delete",predefined:a,deletedCatalogItemIds:i.catalogItemIds})})),(0,g.S_)(t,n,d,f.ej.POST),a||(0,g.p9)(t,e,f.HQ.LISTS,n)},optimisticResponse:{editCatalogItems:{__typename:"EditCatalogItemsSuccess",operations:i.map((function(e){return{__typename:"EditCatalogItemMutationOperationResponse",append:null,preprend:null,move:null}})),version:b}},onCompleted:function(e){if("EditCatalogItemsSuccess"===e.editCatalogItems.__typename){o&&o();var t=i.length;t>1?l.event("list.itemsDeleted",{listId:n,itemsCount:t}):i[0].entityType===f.ej.POST&&l.event("post.removeFromList",{listId:n,postId:i[0].entityId})}}})};function w(e){var n,t,i,o=e.cache,l=e.result,d=e.catalogId,r=e.viewerId,c=e.itemId,m=e.kind,s=e.operation,k=e.predefined,v=e.deletedCatalogItemIds,N=null===(n=l.data)||void 0===n?void 0:n.editCatalogItems;if("EditCatalogItemsSuccess"===(null==N?void 0:N.__typename)&&((0,g.UV)(o,d,N.version),m===f.ej.POST)){t=(0,p.Q)(c,r),i=F;var S="".concat("PostViewerEdge",":").concat(t),y=o.readFragment({id:S,fragment:i});if(null!=y&&y.catalogsConnection){var I=N.operations,b=N.version,h=I[0];if(!h||"move"===s)return;var E=u()(k?y.catalogsConnection.predefinedContainingThis:y.catalogsConnection.catalogsContainingThis),D=E.findIndex((function(e){return k?e.predefined===k:e.catalogId===d}));if("append"===s||"preprend"===s){var _=h[s];if(-1!==D)E[D].catalogItemIds.push(_.catalogItemId);else{var w={catalogId:d,version:b,catalogItemIds:[_.catalogItemId]};k&&(w.predefined=k),E.push(w)}}else if("delete"===s&&-1!==D&&v){var T=E[D].catalogItemIds;E[D].catalogItemIds=T.filter((function(e){return!v.includes(e)})),0===E[D].catalogItemIds.length&&E.splice(D,1)}o.writeFragment({id:S,fragment:i,data:C(C({},y),{},{catalogsConnection:C(C({},null==y?void 0:y.catalogsConnection),{},a()({},k?"predefinedContainingThis":"catalogsContainingThis",E))})})}}}function T(e,n,t,i){return(0,s.D)(h,{variables:{catalogId:e,version:n,operations:t},update:function(n){(0,g.uA)(n,e)},onCompleted:i})}},66916:(e,n,t)=>{"use strict";t.d(n,{ok:()=>I,Ax:()=>S,h6:()=>y,es:()=>b,Yz:()=>h,mC:()=>F});var i=t(63038),a=t.n(i),o=t(21919),l=t(67294),d=t(12476),r=t(18627),c=t(78285),u=t(92305),m={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"ClapCatalog"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"catalogId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"numClaps"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"clapCatalog"},arguments:[{kind:"Argument",name:{kind:"Name",value:"catalogId"},value:{kind:"Variable",name:{kind:"Name",value:"catalogId"}}},{kind:"Argument",name:{kind:"Name",value:"numClaps"},value:{kind:"Variable",name:{kind:"Name",value:"numClaps"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"clapCount"}},{kind:"Field",name:{kind:"Name",value:"clappersCount"}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"clapCount"}}]}}]}}]}}]}}]},s=t(319),k=t.n(s),g=t(68216),v={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"CreateCatalog"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"attributes"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"CreateCatalogInput"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createCatalog"},arguments:[{kind:"Argument",name:{kind:"Name",value:"attributes"},value:{kind:"Variable",name:{kind:"Name",value:"attributes"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"Field",name:{kind:"Name",value:"version"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"catalogUrl_catalog"}}]}}]}}]}}].concat(k()(g.Ui.definitions))},f={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"DeleteCatalog"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"catalogId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"deleteCatalog"},arguments:[{kind:"Argument",name:{kind:"Name",value:"catalogId"},value:{kind:"Variable",name:{kind:"Name",value:"catalogId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"MutationSuccess"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"success"}}]}}]}}]}}]},p={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"FlagCatalog"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"catalogId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"flagCatalog"},arguments:[{kind:"Argument",name:{kind:"Name",value:"catalogId"},value:{kind:"Variable",name:{kind:"Name",value:"catalogId"}}}]}]}}]},N={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"FollowCatalog"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"catalogId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"followCatalog"},arguments:[{kind:"Argument",name:{kind:"Name",value:"catalogId"},value:{kind:"Variable",name:{kind:"Name",value:"catalogId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"MutationSuccess"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"success"}}]}}]}}]}}]},C={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"UnfollowCatalog"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"catalogId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"unfollowCatalog"},arguments:[{kind:"Argument",name:{kind:"Name",value:"catalogId"},value:{kind:"Variable",name:{kind:"Name",value:"catalogId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"MutationSuccess"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"success"}}]}}]}}]}}]};function S(e){var n=(0,r.Av)(),t=(0,o.D)(v,{update:function(n){(0,d.Wt)(n,e)},onCompleted:function(e){var t=e.createCatalog;"Catalog"===t.__typename&&n.event("list.new",{listId:t.id,listName:t.name,userId:t.creator.id,listPrivacyLevel:u.eF[t.visibility]})}}),i=a()(t,2),l=i[0],c=i[1];return{createCatalog:function(e){return l({variables:e})},loading:c.loading,data:c.data,error:c.error}}function y(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.onCompleted;return(0,o.D)(f,{onCompleted:t,update:function(n){(0,d.Wt)(n,e)}})}function I(){var e=(0,o.D)(m),n=a()(e,2),t=n[0],i=n[1];return{clapCatalog:function(e){return t({variables:e})},loading:i.loading,data:i.data,error:i.error}}function b(){var e=(0,c.w)(),n=(0,o.D)(p,{onCompleted:function(){e({message:"Successfully reported list."})},onError:function(){e({toastStyle:"RETRYABLE_ERROR",duration:4e3})}}),t=a()(n,1)[0];return{flagCatalog:function(e){return t({variables:e})}}}function h(e,n){var t=(0,c.w)(),i=(0,o.D)(N,{update:function(t){(0,d.fN)(t,e,n,!0)},onCompleted:function(){t({message:"List saved to Your Library"})}}),r=a()(i,2),u=r[0],m=r[1].loading;return{followCatalog:(0,l.useCallback)((function(){u({variables:{catalogId:n}})}),[n]),loading:m}}function F(e,n){var t=(0,c.w)(),i=(0,o.D)(C,{update:function(t){(0,d.fN)(t,e,n,!1)},onCompleted:function(){t({message:"List removed from Your Library"})}}),r=a()(i,2),u=r[0],m=r[1].loading;return{unfollowCatalog:(0,l.useCallback)((function(){u({variables:{catalogId:n}})}),[n]),loading:m}}},14813:(e,n,t)=>{"use strict";t.d(n,{P:()=>m});var i=t(63038),a=t.n(i),o=t(67294),l=o.createContext({isFetching:!1}),d=t(77355),r=t(47230),c=t(34135),u=!1;t.g.window&&function e(){window.requestAnimationFrame((function(){u=!0,setImmediate((function(){u=!1,e()}))}))}();var m=function(e){var n=e.children,t=e.fetchMore,i=e.scrollableEl,m=e.disabled,s=e.fetchMoreText,k=void 0===s?"Load more":s,g=e.fetchingPlaceholder,v=function(e){var n=e.fetchMore,t=e.scrollableEl,i=e.disabled,l=(0,o.useState)(!1),d=a()(l,2),r=d[0],m=d[1],s=(0,o.useRef)(null),k=(0,o.useRef)(!1),g=(0,o.useRef)(),v=(0,o.useMemo)((function(){return(0,c.jC)(t||void 0)}),[t]),f=(0,o.useRef)(r),p=(0,o.useRef)(n);(0,o.useEffect)((function(){f.current=r,p.current=n}),[r,n]);var N=(0,o.useCallback)((function(){return p.current?(m(!0),p.current().then((function(){return m(!1)}))):Promise.resolve()}),[]),C=(0,o.useCallback)((function(){k.current||(k.current=!0,g.current=function(e){if(!u)return window.requestAnimationFrame((function(){setImmediate((function(){return e()}))}));setImmediate((function(){return e()}))}((function(){if(k.current=!1,s.current&&!f.current&&p.current&&v instanceof c.pY){var e=v.ref,n=s.current.getBoundingClientRect(),t=e instanceof Window?e.innerHeight:e.clientHeight;n.top-t<3*t&&N().then((function(){return C()}))}})))}),[v]);return(0,o.useEffect)((function(){if(!i)return v.on("scroll_throttled",C),v.on("resize_throttled",C),function(){v.off("scroll_throttled",C),v.off("resize_throttled",C)}}),[v,C,i]),(0,o.useEffect)((function(){return C(),function(){g.current&&cancelAnimationFrame(g.current)}}),[]),{isFetching:r,bottomEdgeRef:s,handleFetchMore:N}}({fetchMore:t,scrollableEl:i,disabled:m}),f=v.isFetching,p=v.bottomEdgeRef,N=v.handleFetchMore;return o.createElement(l.Provider,{value:{isFetching:f}},o.createElement("div",null,n,f&&g,m&&t&&!f&&o.createElement(d.x,{display:"flex",justifyContent:"center",marginBottom:"48px"},o.createElement(r.z,{onClick:N},k)),o.createElement("div",{ref:p})))}},77593:(e,n,t)=>{"use strict";t.d(n,{n:()=>j});var i=t(67154),a=t.n(i),o=t(63038),l=t.n(o),d=t(6479),r=t.n(d),c=t(67294),u=t(77355),m=t(87691),s=t(14199),k=t(14646);function g(){return(g=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var v=c.createElement("path",{fill:"#CC5454",d:"M13.3 13.9l.14-7.08h-1.78l.15 7.08h1.48zm-.74 1.43c-.68 0-1.13.44-1.13 1.12 0 .67.45 1.12 1.13 1.12.68 0 1.13-.45 1.13-1.12 0-.68-.44-1.12-1.12-1.12"}),f=c.createElement("path",{fill:"#CC5454",d:"M12.5 21a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17zm0 1a9.5 9.5 0 1 1 0-19 9.5 9.5 0 0 1 0 19z"});const p=function(e){return c.createElement("svg",g({width:25,height:25,viewBox:"0 0 25 25"},e),v,f)};var N=t(83934),C={border:0,flex:1,overflow:"hidden",resize:"none",width:"100%"},S={color:"inherit",background:"inherit",fontStyle:"inherit"},y=function(e){var n=[N.Z,C];return e?[].concat(n,[S]):n},I=function(e){if(e.current){e.current.rows=1;var n=e.current.scrollHeight/parseInt(getComputedStyle(e.current).lineHeight);e.current.rows=n}},b=c.forwardRef((function(e,n){var t=e.value,i=e.ariaLabel,a=e.autoFocus,o=e.onChange,l=e.placeholder,d=e.inheritCustomStyleSheet,r=function(e,n){var t=c.useRef(null);return c.useEffect((function(){[e,n].forEach((function(e){e&&("function"==typeof e?e(t.current):e.current=t.current)}))}),[e,n]),t}(c.useRef(null),n),u=c.useCallback((function(e){o&&o(e),I(r)}),[o,r]);c.useEffect((function(){return I(r)}),[t]);var m=(0,k.I)();return c.createElement("textarea",{"aria-label":i,autoFocus:a,className:m(y(d)),placeholder:l,onChange:u,ref:r,rows:1,value:t})})),h=function(e){var n=e.count,t=void 0===n?0:n,i=e.limit,a=e.scale,o=(0,k.I)();return c.createElement(m.F,{scale:a||"S"},c.createElement("span",{className:o((function(e){return{color:t>i?e.errorColor:e.baseColor.text.dark}}))},t),"/",i)},F={flex:"1"},E=function(e){var n=e.value,t=e.ariaLabel,i=e.autoFocus,a=e.isPassword,o=e.onChange,l=e.placeholder,d=e.name,r=(0,k.I)();return c.createElement("input",{"aria-label":t,className:r([[N.Z,F]]),type:a?"password":"text",placeholder:l,value:n,name:d,onChange:o,autoFocus:i})},D=t(59713),_=t.n(D);function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function T(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){_()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var O=function(e){return{borderWidth:"0px 0px 1px 0px",background:"linear-gradient(to right, ".concat(e.baseColor.border.normal,", 90%, white 100%)"),"-webkit-background-clip":"text","-webkit-text-fill-color":"transparent",color:"transparent",whiteSpace:"nowrap",overflow:"hidden",width:"100%"}},x=function(){return T(T({},O),{},{background:"white"})},V=function(e){var n=e.value,t=e.isAreaField,i=(0,k.I)(),a=t?x:O;return c.createElement("p",{key:n,className:i([N.Z,a])},n)},P=function(e){return{fontWeight:e.newFonts.detail.boldWeight}},L=function(e){return{marginBottom:"10px",color:e.baseColor.border.dark}},j=function(e){var n,t=e.characterCountLimit,i=e.characterCountScale,o=e.characterCount,d=e.description,g=e.errorMessage,v=e.isEditable,f=void 0===v||v,C=e.isMultiline,S=void 0!==C&&C,y=e.label,I=e.omitBorder,F=e.onFocus,D=e.isPassword,_=void 0!==D&&D,w=e.scale,T=void 0===w?"M":w,O=e.hideErrorIcon,x=void 0!==O&&O,j=e.bold,A=void 0!==j&&j,R=e.inheritCustomStyleSheet,B=void 0!==R&&R,M=e.forwardedRef,U=r()(e,["characterCountLimit","characterCountScale","characterCount","description","errorMessage","isEditable","isMultiline","label","omitBorder","onFocus","isPassword","scale","hideErrorIcon","bold","inheritCustomStyleSheet","forwardedRef"]),W=U.autoFocus,Y=U.onBlur,z=!!g,H=(0,k.I)(),Q=c.useState(!!W),G=l()(Q,2),$=G[0],Z=G[1],q=c.useCallback((function(e){F&&F(e),Z(!0)}),[F,Z]),K=c.useCallback((function(e){Y&&Y(e),Z(!1)}),[Y,Z]),J=(0,s.n)({name:"detail",scale:"S",color:"ERROR"}),X=(0,s.n)({name:"detail",scale:T,color:"DARKER"});return c.createElement("span",{className:H(A?[X,P]:X)},c.createElement(u.x,{display:"flex",flexDirection:"column",width:"100%"},y&&c.createElement("label",{className:H(L)},y),c.createElement("div",{onFocus:q,onBlur:K,className:H((0,N.l)({hasError:z,isFocused:$,omitBorder:I,isEditable:f}))},f?S?c.createElement(b,a()({},U,{inheritCustomStyleSheet:B,ref:M})):c.createElement(E,a()({},U,{isPassword:_})):c.createElement(V,a()({},U,{isAreaField:S})),z&&!x&&c.createElement("span",{style:{paddingLeft:"10px"}},c.createElement(p,null))),c.createElement(u.x,{marginTop:"4px",display:"flex",justifyContent:"space-between"},z?c.createElement("h4",{className:H([J,{width:"100%",textAlign:"inherit"}])},g):c.createElement(m.F,{scale:"S"},d),!!t&&c.createElement(h,{count:null!=o?o:null===(n=U.value)||void 0===n?void 0:n.length,limit:t,scale:i}))))}},83934:(e,n,t)=>{"use strict";t.d(n,{l:()=>a,Z:()=>o});var i=function(e){var n=e.hasError,t=e.isFocused,i=e.theme,a=e.isEditable;return n&&t||n?i.errorColor:t?i.baseColor.border.dark:a?i.baseColor.border.light:i.baseColor.border.lighter},a=function(e){var n=e.hasError,t=e.isFocused,a=e.omitBorder,o=e.isEditable;return function(e){return{display:"flex",width:"100%",borderStyle:"solid",borderWidth:a&&!n?0:"0px 0px 1px 0px",borderColor:i({hasError:n,isFocused:t,theme:e,isEditable:o})}}},o=function(e){return{padding:"4px 0",fontFamily:"inherit",fontSize:"inherit",fontWeight:"inherit",lineHeight:"inherit",textAlign:"inherit",borderWidth:0,outline:0,"::placeholder":{color:e.baseColor.text.lighter,opacity:.5}}}},11462:(e,n,t)=>{"use strict";function i(e,n){return"postId:".concat(e,"-viewerId:").concat(n)}t.d(n,{Q:()=>i})}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/666.038ddc31.chunk.js.map