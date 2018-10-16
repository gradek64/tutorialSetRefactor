document.write('<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-0e377f317de3511c49ca97da2754f582.css">')
document.write('<div id=\"gist81232930\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-webpack-config-js\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"blob-wrapper data type-javascript\">\n      <table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-webpack-config-js-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-webpack-config-js-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">const<\/span> <span class=\"pl-c1\">path<\/span> <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">require<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>path<span class=\"pl-pds\">&#39;<\/span><\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-webpack-config-js-LC2\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">const<\/span> <span class=\"pl-c1\">CleanWebpackPlugin<\/span> <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">require<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>clean-webpack-plugin<span class=\"pl-pds\">&#39;<\/span><\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-webpack-config-js-LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">const<\/span> <span class=\"pl-c1\">HtmlWebpackPlugin<\/span> <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">require<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>html-webpack-plugin<span class=\"pl-pds\">&#39;<\/span><\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-webpack-config-js-LC4\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">const<\/span> <span class=\"pl-c1\">ExtractTextPlugin<\/span> <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">require<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>extract-text-webpack-plugin<span class=\"pl-pds\">&#39;<\/span><\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-webpack-config-js-LC5\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">const<\/span> <span class=\"pl-c1\">webpack<\/span> <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">require<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>webpack<span class=\"pl-pds\">&#39;<\/span><\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-webpack-config-js-LC6\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-webpack-config-js-LC7\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">const<\/span> <span class=\"pl-c1\">extractPlugin<\/span> <span class=\"pl-k\">=<\/span> <span class=\"pl-k\">new<\/span> <span class=\"pl-en\">ExtractTextPlugin<\/span>({ filename<span class=\"pl-k\">:<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>./assets/css/app.css<span class=\"pl-pds\">&#39;<\/span><\/span> });<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-webpack-config-js-LC8\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-webpack-config-js-LC9\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">const<\/span> <span class=\"pl-c1\">config<\/span> <span class=\"pl-k\">=<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-webpack-config-js-LC10\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-webpack-config-js-LC11\" class=\"blob-code blob-code-inner js-file-line\">  context<span class=\"pl-k\">:<\/span> <span class=\"pl-smi\">path<\/span>.<span class=\"pl-en\">resolve<\/span>(<span class=\"pl-c1\">__dirname<\/span>, <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>src<span class=\"pl-pds\">&#39;<\/span><\/span>),<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-webpack-config-js-LC12\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-webpack-config-js-LC13\" class=\"blob-code blob-code-inner js-file-line\">  entry<span class=\"pl-k\">:<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-webpack-config-js-LC14\" class=\"blob-code blob-code-inner js-file-line\">    app<span class=\"pl-k\">:<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>./app.js<span class=\"pl-pds\">&#39;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-webpack-config-js-LC15\" class=\"blob-code blob-code-inner js-file-line\">  },<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-webpack-config-js-LC16\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-webpack-config-js-LC17\" class=\"blob-code blob-code-inner js-file-line\">  output<span class=\"pl-k\">:<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-webpack-config-js-LC18\" class=\"blob-code blob-code-inner js-file-line\">    path<span class=\"pl-k\">:<\/span> <span class=\"pl-smi\">path<\/span>.<span class=\"pl-en\">resolve<\/span>(<span class=\"pl-c1\">__dirname<\/span>, <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>dist<span class=\"pl-pds\">&#39;<\/span><\/span>),<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-webpack-config-js-LC19\" class=\"blob-code blob-code-inner js-file-line\">    filename<span class=\"pl-k\">:<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>./assets/js/[name].bundle.js<span class=\"pl-pds\">&#39;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-webpack-config-js-LC20\" class=\"blob-code blob-code-inner js-file-line\">  },<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>\n        <td id=\"file-webpack-config-js-LC21\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L22\" class=\"blob-num js-line-number\" data-line-number=\"22\"><\/td>\n        <td id=\"file-webpack-config-js-LC22\" class=\"blob-code blob-code-inner js-file-line\">  module<span class=\"pl-k\">:<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L23\" class=\"blob-num js-line-number\" data-line-number=\"23\"><\/td>\n        <td id=\"file-webpack-config-js-LC23\" class=\"blob-code blob-code-inner js-file-line\">    rules<span class=\"pl-k\">:<\/span> [<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L24\" class=\"blob-num js-line-number\" data-line-number=\"24\"><\/td>\n        <td id=\"file-webpack-config-js-LC24\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L25\" class=\"blob-num js-line-number\" data-line-number=\"25\"><\/td>\n        <td id=\"file-webpack-config-js-LC25\" class=\"blob-code blob-code-inner js-file-line\">      <span class=\"pl-c\"><span class=\"pl-c\">//<\/span>babel-loader<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L26\" class=\"blob-num js-line-number\" data-line-number=\"26\"><\/td>\n        <td id=\"file-webpack-config-js-LC26\" class=\"blob-code blob-code-inner js-file-line\">      {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L27\" class=\"blob-num js-line-number\" data-line-number=\"27\"><\/td>\n        <td id=\"file-webpack-config-js-LC27\" class=\"blob-code blob-code-inner js-file-line\">        test<span class=\"pl-k\">:<\/span><span class=\"pl-sr\"> <span class=\"pl-pds\">/<\/span><span class=\"pl-cce\">\\.<\/span>js<span class=\"pl-k\">$<\/span><span class=\"pl-pds\">/<\/span><\/span>,<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L28\" class=\"blob-num js-line-number\" data-line-number=\"28\"><\/td>\n        <td id=\"file-webpack-config-js-LC28\" class=\"blob-code blob-code-inner js-file-line\">        include<span class=\"pl-k\">:<\/span><span class=\"pl-sr\"> <span class=\"pl-pds\">/<\/span>src<span class=\"pl-pds\">/<\/span><\/span>,<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L29\" class=\"blob-num js-line-number\" data-line-number=\"29\"><\/td>\n        <td id=\"file-webpack-config-js-LC29\" class=\"blob-code blob-code-inner js-file-line\">        exclude<span class=\"pl-k\">:<\/span><span class=\"pl-sr\"> <span class=\"pl-pds\">/<\/span>node_modules<span class=\"pl-pds\">/<\/span><\/span>,<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L30\" class=\"blob-num js-line-number\" data-line-number=\"30\"><\/td>\n        <td id=\"file-webpack-config-js-LC30\" class=\"blob-code blob-code-inner js-file-line\">        use<span class=\"pl-k\">:<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L31\" class=\"blob-num js-line-number\" data-line-number=\"31\"><\/td>\n        <td id=\"file-webpack-config-js-LC31\" class=\"blob-code blob-code-inner js-file-line\">          loader<span class=\"pl-k\">:<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>babel-loader<span class=\"pl-pds\">&quot;<\/span><\/span>,<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L32\" class=\"blob-num js-line-number\" data-line-number=\"32\"><\/td>\n        <td id=\"file-webpack-config-js-LC32\" class=\"blob-code blob-code-inner js-file-line\">          options<span class=\"pl-k\">:<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L33\" class=\"blob-num js-line-number\" data-line-number=\"33\"><\/td>\n        <td id=\"file-webpack-config-js-LC33\" class=\"blob-code blob-code-inner js-file-line\">            presets<span class=\"pl-k\">:<\/span> [<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>env<span class=\"pl-pds\">&#39;<\/span><\/span>]<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L34\" class=\"blob-num js-line-number\" data-line-number=\"34\"><\/td>\n        <td id=\"file-webpack-config-js-LC34\" class=\"blob-code blob-code-inner js-file-line\">          }<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L35\" class=\"blob-num js-line-number\" data-line-number=\"35\"><\/td>\n        <td id=\"file-webpack-config-js-LC35\" class=\"blob-code blob-code-inner js-file-line\">        }<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L36\" class=\"blob-num js-line-number\" data-line-number=\"36\"><\/td>\n        <td id=\"file-webpack-config-js-LC36\" class=\"blob-code blob-code-inner js-file-line\">      },<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L37\" class=\"blob-num js-line-number\" data-line-number=\"37\"><\/td>\n        <td id=\"file-webpack-config-js-LC37\" class=\"blob-code blob-code-inner js-file-line\">      <span class=\"pl-c\"><span class=\"pl-c\">//<\/span>html-loader<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L38\" class=\"blob-num js-line-number\" data-line-number=\"38\"><\/td>\n        <td id=\"file-webpack-config-js-LC38\" class=\"blob-code blob-code-inner js-file-line\">      { test<span class=\"pl-k\">:<\/span><span class=\"pl-sr\"> <span class=\"pl-pds\">/<\/span><span class=\"pl-cce\">\\.<\/span>html<span class=\"pl-k\">$<\/span><span class=\"pl-pds\">/<\/span><\/span>, use<span class=\"pl-k\">:<\/span> [<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>html-loader<span class=\"pl-pds\">&#39;<\/span><\/span>] },<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L39\" class=\"blob-num js-line-number\" data-line-number=\"39\"><\/td>\n        <td id=\"file-webpack-config-js-LC39\" class=\"blob-code blob-code-inner js-file-line\">      <span class=\"pl-c\"><span class=\"pl-c\">//<\/span>sass-loader<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L40\" class=\"blob-num js-line-number\" data-line-number=\"40\"><\/td>\n        <td id=\"file-webpack-config-js-LC40\" class=\"blob-code blob-code-inner js-file-line\">      {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L41\" class=\"blob-num js-line-number\" data-line-number=\"41\"><\/td>\n        <td id=\"file-webpack-config-js-LC41\" class=\"blob-code blob-code-inner js-file-line\">        test<span class=\"pl-k\">:<\/span><span class=\"pl-sr\"> <span class=\"pl-pds\">/<\/span><span class=\"pl-cce\">\\.<\/span>scss<span class=\"pl-k\">$<\/span><span class=\"pl-pds\">/<\/span><\/span>,<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L42\" class=\"blob-num js-line-number\" data-line-number=\"42\"><\/td>\n        <td id=\"file-webpack-config-js-LC42\" class=\"blob-code blob-code-inner js-file-line\">        include<span class=\"pl-k\">:<\/span> [<span class=\"pl-smi\">path<\/span>.<span class=\"pl-en\">resolve<\/span>(<span class=\"pl-c1\">__dirname<\/span>, <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>src<span class=\"pl-pds\">&#39;<\/span><\/span>, <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>assets<span class=\"pl-pds\">&#39;<\/span><\/span>, <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>scss<span class=\"pl-pds\">&#39;<\/span><\/span>)],<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L43\" class=\"blob-num js-line-number\" data-line-number=\"43\"><\/td>\n        <td id=\"file-webpack-config-js-LC43\" class=\"blob-code blob-code-inner js-file-line\">        use<span class=\"pl-k\">:<\/span> <span class=\"pl-smi\">extractPlugin<\/span>.<span class=\"pl-en\">extract<\/span>({<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L44\" class=\"blob-num js-line-number\" data-line-number=\"44\"><\/td>\n        <td id=\"file-webpack-config-js-LC44\" class=\"blob-code blob-code-inner js-file-line\">          use<span class=\"pl-k\">:<\/span> [<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L45\" class=\"blob-num js-line-number\" data-line-number=\"45\"><\/td>\n        <td id=\"file-webpack-config-js-LC45\" class=\"blob-code blob-code-inner js-file-line\">            {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L46\" class=\"blob-num js-line-number\" data-line-number=\"46\"><\/td>\n        <td id=\"file-webpack-config-js-LC46\" class=\"blob-code blob-code-inner js-file-line\">              loader<span class=\"pl-k\">:<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>css-loader<span class=\"pl-pds\">&#39;<\/span><\/span>,<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L47\" class=\"blob-num js-line-number\" data-line-number=\"47\"><\/td>\n        <td id=\"file-webpack-config-js-LC47\" class=\"blob-code blob-code-inner js-file-line\">              options<span class=\"pl-k\">:<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L48\" class=\"blob-num js-line-number\" data-line-number=\"48\"><\/td>\n        <td id=\"file-webpack-config-js-LC48\" class=\"blob-code blob-code-inner js-file-line\">                sourceMap<span class=\"pl-k\">:<\/span> <span class=\"pl-c1\">true<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L49\" class=\"blob-num js-line-number\" data-line-number=\"49\"><\/td>\n        <td id=\"file-webpack-config-js-LC49\" class=\"blob-code blob-code-inner js-file-line\">              }<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L50\" class=\"blob-num js-line-number\" data-line-number=\"50\"><\/td>\n        <td id=\"file-webpack-config-js-LC50\" class=\"blob-code blob-code-inner js-file-line\">            },<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L51\" class=\"blob-num js-line-number\" data-line-number=\"51\"><\/td>\n        <td id=\"file-webpack-config-js-LC51\" class=\"blob-code blob-code-inner js-file-line\">            {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L52\" class=\"blob-num js-line-number\" data-line-number=\"52\"><\/td>\n        <td id=\"file-webpack-config-js-LC52\" class=\"blob-code blob-code-inner js-file-line\">              loader<span class=\"pl-k\">:<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>sass-loader<span class=\"pl-pds\">&#39;<\/span><\/span>,<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L53\" class=\"blob-num js-line-number\" data-line-number=\"53\"><\/td>\n        <td id=\"file-webpack-config-js-LC53\" class=\"blob-code blob-code-inner js-file-line\">              options<span class=\"pl-k\">:<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L54\" class=\"blob-num js-line-number\" data-line-number=\"54\"><\/td>\n        <td id=\"file-webpack-config-js-LC54\" class=\"blob-code blob-code-inner js-file-line\">                sourceMap<span class=\"pl-k\">:<\/span> <span class=\"pl-c1\">true<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L55\" class=\"blob-num js-line-number\" data-line-number=\"55\"><\/td>\n        <td id=\"file-webpack-config-js-LC55\" class=\"blob-code blob-code-inner js-file-line\">              }<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L56\" class=\"blob-num js-line-number\" data-line-number=\"56\"><\/td>\n        <td id=\"file-webpack-config-js-LC56\" class=\"blob-code blob-code-inner js-file-line\">            }<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L57\" class=\"blob-num js-line-number\" data-line-number=\"57\"><\/td>\n        <td id=\"file-webpack-config-js-LC57\" class=\"blob-code blob-code-inner js-file-line\">          ],<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L58\" class=\"blob-num js-line-number\" data-line-number=\"58\"><\/td>\n        <td id=\"file-webpack-config-js-LC58\" class=\"blob-code blob-code-inner js-file-line\">          fallback<span class=\"pl-k\">:<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>style-loader<span class=\"pl-pds\">&#39;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L59\" class=\"blob-num js-line-number\" data-line-number=\"59\"><\/td>\n        <td id=\"file-webpack-config-js-LC59\" class=\"blob-code blob-code-inner js-file-line\">        })<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L60\" class=\"blob-num js-line-number\" data-line-number=\"60\"><\/td>\n        <td id=\"file-webpack-config-js-LC60\" class=\"blob-code blob-code-inner js-file-line\">      }<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L61\" class=\"blob-num js-line-number\" data-line-number=\"61\"><\/td>\n        <td id=\"file-webpack-config-js-LC61\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L62\" class=\"blob-num js-line-number\" data-line-number=\"62\"><\/td>\n        <td id=\"file-webpack-config-js-LC62\" class=\"blob-code blob-code-inner js-file-line\">    ]<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L63\" class=\"blob-num js-line-number\" data-line-number=\"63\"><\/td>\n        <td id=\"file-webpack-config-js-LC63\" class=\"blob-code blob-code-inner js-file-line\">  },<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L64\" class=\"blob-num js-line-number\" data-line-number=\"64\"><\/td>\n        <td id=\"file-webpack-config-js-LC64\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L65\" class=\"blob-num js-line-number\" data-line-number=\"65\"><\/td>\n        <td id=\"file-webpack-config-js-LC65\" class=\"blob-code blob-code-inner js-file-line\">  plugins<span class=\"pl-k\">:<\/span> [<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L66\" class=\"blob-num js-line-number\" data-line-number=\"66\"><\/td>\n        <td id=\"file-webpack-config-js-LC66\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">new<\/span> <span class=\"pl-en\">CleanWebpackPlugin<\/span>([<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>dist<span class=\"pl-pds\">&#39;<\/span><\/span>]),<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L67\" class=\"blob-num js-line-number\" data-line-number=\"67\"><\/td>\n        <td id=\"file-webpack-config-js-LC67\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">new<\/span> <span class=\"pl-en\">HtmlWebpackPlugin<\/span>({<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L68\" class=\"blob-num js-line-number\" data-line-number=\"68\"><\/td>\n        <td id=\"file-webpack-config-js-LC68\" class=\"blob-code blob-code-inner js-file-line\">      template<span class=\"pl-k\">:<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>index.html<span class=\"pl-pds\">&#39;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L69\" class=\"blob-num js-line-number\" data-line-number=\"69\"><\/td>\n        <td id=\"file-webpack-config-js-LC69\" class=\"blob-code blob-code-inner js-file-line\">    }),<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L70\" class=\"blob-num js-line-number\" data-line-number=\"70\"><\/td>\n        <td id=\"file-webpack-config-js-LC70\" class=\"blob-code blob-code-inner js-file-line\">    extractPlugin<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L71\" class=\"blob-num js-line-number\" data-line-number=\"71\"><\/td>\n        <td id=\"file-webpack-config-js-LC71\" class=\"blob-code blob-code-inner js-file-line\">  ],<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L72\" class=\"blob-num js-line-number\" data-line-number=\"72\"><\/td>\n        <td id=\"file-webpack-config-js-LC72\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L73\" class=\"blob-num js-line-number\" data-line-number=\"73\"><\/td>\n        <td id=\"file-webpack-config-js-LC73\" class=\"blob-code blob-code-inner js-file-line\">  devServer<span class=\"pl-k\">:<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L74\" class=\"blob-num js-line-number\" data-line-number=\"74\"><\/td>\n        <td id=\"file-webpack-config-js-LC74\" class=\"blob-code blob-code-inner js-file-line\">    contentBase<span class=\"pl-k\">:<\/span> <span class=\"pl-smi\">path<\/span>.<span class=\"pl-en\">resolve<\/span>(<span class=\"pl-c1\">__dirname<\/span>, <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>./dist/assets/media<span class=\"pl-pds\">&quot;<\/span><\/span>),<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L75\" class=\"blob-num js-line-number\" data-line-number=\"75\"><\/td>\n        <td id=\"file-webpack-config-js-LC75\" class=\"blob-code blob-code-inner js-file-line\">    compress<span class=\"pl-k\">:<\/span> <span class=\"pl-c1\">true<\/span>,<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L76\" class=\"blob-num js-line-number\" data-line-number=\"76\"><\/td>\n        <td id=\"file-webpack-config-js-LC76\" class=\"blob-code blob-code-inner js-file-line\">    port<span class=\"pl-k\">:<\/span> <span class=\"pl-c1\">12000<\/span>,<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L77\" class=\"blob-num js-line-number\" data-line-number=\"77\"><\/td>\n        <td id=\"file-webpack-config-js-LC77\" class=\"blob-code blob-code-inner js-file-line\">    stats<span class=\"pl-k\">:<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>errors-only<span class=\"pl-pds\">&#39;<\/span><\/span>,<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L78\" class=\"blob-num js-line-number\" data-line-number=\"78\"><\/td>\n        <td id=\"file-webpack-config-js-LC78\" class=\"blob-code blob-code-inner js-file-line\">    open<span class=\"pl-k\">:<\/span> <span class=\"pl-c1\">true<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L79\" class=\"blob-num js-line-number\" data-line-number=\"79\"><\/td>\n        <td id=\"file-webpack-config-js-LC79\" class=\"blob-code blob-code-inner js-file-line\">  },<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L80\" class=\"blob-num js-line-number\" data-line-number=\"80\"><\/td>\n        <td id=\"file-webpack-config-js-LC80\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L81\" class=\"blob-num js-line-number\" data-line-number=\"81\"><\/td>\n        <td id=\"file-webpack-config-js-LC81\" class=\"blob-code blob-code-inner js-file-line\">  devtool<span class=\"pl-k\">:<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>inline-source-map<span class=\"pl-pds\">&#39;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L82\" class=\"blob-num js-line-number\" data-line-number=\"82\"><\/td>\n        <td id=\"file-webpack-config-js-LC82\" class=\"blob-code blob-code-inner js-file-line\">  <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L83\" class=\"blob-num js-line-number\" data-line-number=\"83\"><\/td>\n        <td id=\"file-webpack-config-js-LC83\" class=\"blob-code blob-code-inner js-file-line\">}<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L84\" class=\"blob-num js-line-number\" data-line-number=\"84\"><\/td>\n        <td id=\"file-webpack-config-js-LC84\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-webpack-config-js-L85\" class=\"blob-num js-line-number\" data-line-number=\"85\"><\/td>\n        <td id=\"file-webpack-config-js-LC85\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">module<\/span>.<span class=\"pl-smi\">exports<\/span> <span class=\"pl-k\">=<\/span> config;<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/postNirjhor/0f94e8a78de0d2763c06fbac48f28f4e/raw/c8377e0041b17b978a922a5c108c5125e26ca118/webpack.config.js\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/postNirjhor/0f94e8a78de0d2763c06fbac48f28f4e#file-webpack-config-js\">webpack.config.js<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
