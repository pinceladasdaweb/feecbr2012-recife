



<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link rel="icon" type="image/vnd.microsoft.icon" href="http://www.gstatic.com/codesite/ph/images/phosting.ico">
 
 
 <script type="text/javascript">
 
 
 
 
 var codesite_token = "EKy51S0IV-izFSEaysBmL5AodYE:1349402974816";
 
 
 var CS_env = {"profileUrl":["/u/114898197985471151069/"],"token":"EKy51S0IV-izFSEaysBmL5AodYE:1349402974816","assetHostPath":"http://www.gstatic.com/codesite/ph","domainName":null,"assetVersionPath":"http://www.gstatic.com/codesite/ph/7129612649507440983","projectHomeUrl":"/p/io-2012-slides","relativeBaseUrl":"","projectName":"io-2012-slides","loggedInUserEmail":"rogerioassis@gmail.com"};
 var _gaq = _gaq || [];
 _gaq.push(
 ['siteTracker._setAccount', 'UA-18071-1'],
 ['siteTracker._trackPageview']);
 
 _gaq.push(
 ['projectTracker._setAccount', 'UA-33321305-1'],
 ['projectTracker._trackPageview']);
 
 (function() {
 var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
 ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
 (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
 })();
 
 </script>
 
 
 <title>lang-vhdl.js - 
 io-2012-slides -
 
 
 HTML5 slide template for Google I/O 2012 - Google Project Hosting
 </title>
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/7129612649507440983/css/core.css">
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/7129612649507440983/css/ph_detail.css" >
 
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/7129612649507440983/css/d_sb.css" >
 
 
 
<!--[if IE]>
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/7129612649507440983/css/d_ie.css" >
<![endif]-->
 <style type="text/css">
 .menuIcon.off { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -42px }
 .menuIcon.on { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -28px }
 .menuIcon.down { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 0; }
 
 
 
  tr.inline_comment {
 background: #fff;
 vertical-align: top;
 }
 div.draft, div.published {
 padding: .3em;
 border: 1px solid #999; 
 margin-bottom: .1em;
 font-family: arial, sans-serif;
 max-width: 60em;
 }
 div.draft {
 background: #ffa;
 } 
 div.published {
 background: #e5ecf9;
 }
 div.published .body, div.draft .body {
 padding: .5em .1em .1em .1em;
 max-width: 60em;
 white-space: pre-wrap;
 white-space: -moz-pre-wrap;
 white-space: -pre-wrap;
 white-space: -o-pre-wrap;
 word-wrap: break-word;
 font-size: 1em;
 }
 div.draft .actions {
 margin-left: 1em;
 font-size: 90%;
 }
 div.draft form {
 padding: .5em .5em .5em 0;
 }
 div.draft textarea, div.published textarea {
 width: 95%;
 height: 10em;
 font-family: arial, sans-serif;
 margin-bottom: .5em;
 }

 
 .nocursor, .nocursor td, .cursor_hidden, .cursor_hidden td {
 background-color: white;
 height: 2px;
 }
 .cursor, .cursor td {
 background-color: darkblue;
 height: 2px;
 display: '';
 }
 
 
.list {
 border: 1px solid white;
 border-bottom: 0;
}

 
 </style>
</head>
<body class="t4">
<script type="text/javascript">
 window.___gcfg = {lang: 'en'};
 (function() 
 {var po = document.createElement("script");
 po.type = "text/javascript"; po.async = true;po.src = "https://apis.google.com/js/plusone.js";
 var s = document.getElementsByTagName("script")[0];
 s.parentNode.insertBefore(po, s);
 })();
</script>
<div class="headbg">

 <div id="gaia">
 

 <span>
 
 
 
 <b>rogerioassis@gmail.com</b>
 
 
 | <a href="/u/114898197985471151069/" id="projects-dropdown" onclick="return false;"
 ><u>My favorites</u> <small>&#9660;</small></a>
 | <a href="/u/114898197985471151069/" onclick="_CS_click('/gb/ph/profile');"
 title="Profile, Updates, and Settings"
 ><u>Profile</u></a>
 | <a href="https://www.google.com/accounts/Logout?continue=http%3A%2F%2Fcode.google.com%2Fp%2Fio-2012-slides%2Fsource%2Fbrowse%2Fjs%2Fprettify%2Flang-vhdl.js" 
 onclick="_CS_click('/gb/ph/signout');"
 ><u>Sign out</u></a>
 
 </span>

 </div>

 <div class="gbh" style="left: 0pt;"></div>
 <div class="gbh" style="right: 0pt;"></div>
 
 
 <div style="height: 1px"></div>
<!--[if lte IE 7]>
<div style="text-align:center;">
Your version of Internet Explorer is not supported. Try a browser that
contributes to open source, such as <a href="http://www.firefox.com">Firefox</a>,
<a href="http://www.google.com/chrome">Google Chrome</a>, or
<a href="http://code.google.com/chrome/chromeframe/">Google Chrome Frame</a>.
</div>
<![endif]-->



 <table style="padding:0px; margin: 0px 0px 10px 0px; width:100%" cellpadding="0" cellspacing="0"
 itemscope itemtype="http://schema.org/CreativeWork">
 <tr style="height: 58px;">
 
 
 
 <td id="plogo">
 <link itemprop="url" href="/p/io-2012-slides">
 <a href="/p/io-2012-slides/">
 
 <img src="http://www.gstatic.com/codesite/ph/images/defaultlogo.png" alt="Logo" itemprop="image">
 
 </a>
 </td>
 
 <td style="padding-left: 0.5em">
 
 <div id="pname">
 <a href="/p/io-2012-slides/"><span itemprop="name">io-2012-slides</span></a>
 </div>
 
 <div id="psum">
 <a id="project_summary_link"
 href="/p/io-2012-slides/"><span itemprop="description">HTML5 slide template for Google I/O 2012</span></a>
 
 </div>
 
 
 </td>
 <td style="white-space:nowrap;text-align:right; vertical-align:bottom;">
 
 <form action="/hosting/search">
 <input size="30" name="q" value="" type="text">
 
 <input type="submit" name="projectsearch" value="Search projects" >
 </form>
 
 </tr>
 </table>

</div>

 
<div id="mt" class="gtb"> 
 <a href="/p/io-2012-slides/" class="tab ">Project&nbsp;Home</a>
 
 
 
 
 <a href="/p/io-2012-slides/downloads/list" class="tab ">Downloads</a>
 
 
 
 
 
 <a href="/p/io-2012-slides/w/list" class="tab ">Wiki</a>
 
 
 
 
 
 <a href="/p/io-2012-slides/issues/list"
 class="tab ">Issues</a>
 
 
 
 
 
 <a href="/p/io-2012-slides/source/checkout"
 class="tab active">Source</a>
 
 
 
 
 
 
 
 <div class=gtbc></div>
</div>
<table cellspacing="0" cellpadding="0" width="100%" align="center" border="0" class="st">
 <tr>
 
 
 
 
 
 
 
 <td class="subt">
 <div class="st2">
 <div class="isf">
 
 <form action="/p/io-2012-slides/source/browse" style="display: inline">
 
 Repository:
 <select name="repo" id="repo" style="font-size: 92%" onchange="submit()">
 <option value="default">default</option><option value="wiki">wiki</option>
 </select>
 </form>
 
 


 <span class="inst1"><a href="/p/io-2012-slides/source/checkout">Checkout</a></span> &nbsp;
 <span class="inst2"><a href="/p/io-2012-slides/source/browse/">Browse</a></span> &nbsp;
 <span class="inst3"><a href="/p/io-2012-slides/source/list">Changes</a></span> &nbsp;
 <span class="inst4"><a href="/p/io-2012-slides/source/clones">Clones</a></span> &nbsp; 
 &nbsp;
 
 
 <form action="/p/io-2012-slides/source/search" method="get" style="display:inline"
 onsubmit="document.getElementById('codesearchq').value = document.getElementById('origq').value">
 <input type="hidden" name="q" id="codesearchq" value="">
 <input type="text" maxlength="2048" size="38" id="origq" name="origq" value="" title="Google Code Search" style="font-size:92%">&nbsp;<input type="submit" value="Search Trunk" name="btnG" style="font-size:92%">
 
 
 
 
 
 
 </form>
 <script type="text/javascript">
 
 function codesearchQuery(form) {
 var query = document.getElementById('q').value;
 if (query) { form.action += '%20' + query; }
 }
 </script>
 </div>
</div>

 </td>
 
 
 
 <td align="right" valign="top" class="bevel-right"></td>
 </tr>
</table>


<script type="text/javascript">
 var cancelBubble = false;
 function _go(url) { document.location = url; }
</script>
<div id="maincol"
 
>

 
<!-- IE -->




<div class="expand">
<div id="colcontrol">
<style type="text/css">
 #file_flipper { white-space: nowrap; padding-right: 2em; }
 #file_flipper.hidden { display: none; }
 #file_flipper .pagelink { color: #0000CC; text-decoration: underline; }
 #file_flipper #visiblefiles { padding-left: 0.5em; padding-right: 0.5em; }
</style>
<table id="nav_and_rev" class="list"
 cellpadding="0" cellspacing="0" width="100%">
 <tr>
 
 <td nowrap="nowrap" class="src_crumbs src_nav" width="33%">
 <strong class="src_nav">Source path:&nbsp;</strong>
 <span id="crumb_root">
 
 <a href="/p/io-2012-slides/source/browse/">git</a>/&nbsp;</span>
 <span id="crumb_links" class="ifClosed"><a href="/p/io-2012-slides/source/browse/js/">js</a><span class="sp">/&nbsp;</span><a href="/p/io-2012-slides/source/browse/js/prettify/">prettify</a><span class="sp">/&nbsp;</span>lang-vhdl.js</span>
 
 
 
 
 
 <form class="src_nav">
 
 <span class="sourcelabel"><strong>Branch:</strong>
 <select id="branch_select" name="name" onchange="submit()">
 
 <option value="master"
 selected>
 master
 </option>
 
 <option value="web-components"
 >
 web-components
 </option>
 
 
 </select>
 </span>
 </form>
 
 
 
 
 


 </td>
 
 
 <td nowrap="nowrap" width="33%" align="center">
 <a href="/p/io-2012-slides/source/browse/js/prettify/lang-vhdl.js?edit=1"
 ><img src="http://www.gstatic.com/codesite/ph/images/pencil-y14.png"
 class="edit_icon">Edit file</a>
 </td>
 
 
 <td nowrap="nowrap" width="33%" align="right">
 <table cellpadding="0" cellspacing="0" style="font-size: 100%"><tr>
 
 
 <td class="flipper"><b>f208307cbdd4</b></td>
 
 </tr></table>
 </td> 
 </tr>
</table>

<div class="fc">
 
 
 
<style type="text/css">
.undermouse span {
 background-image: url(http://www.gstatic.com/codesite/ph/images/comments.gif); }
</style>
<table class="opened" id="review_comment_area"
><tr>
<td id="nums">
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
<pre><table width="100%" id="nums_table_0"><tr id="gr_svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8_1"

><td id="1"><a href="#1">1</a></td></tr
><tr id="gr_svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8_2"

><td id="2"><a href="#2">2</a></td></tr
><tr id="gr_svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8_3"

><td id="3"><a href="#3">3</a></td></tr
></table></pre>
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
</td>
<td id="lines">
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
<pre class="prettyprint lang-js"><table id="src_table_0"><tr
id=sl_svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8_1

><td class="source">PR.registerLangHandler(PR.createSimpleLexer([[&quot;pln&quot;,/^[\t\n\r \xa0]+/,null,&quot;\t\n\r Â\xa0&quot;]],[[&quot;str&quot;,/^(?:[box]?&quot;(?:[^&quot;]|&quot;&quot;)*&quot;|&#39;.&#39;)/i],[&quot;com&quot;,/^--[^\n\r]*/],[&quot;kwd&quot;,/^(?:abs|access|after|alias|all|and|architecture|array|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|constant|disconnect|downto|else|elsif|end|entity|exit|file|for|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|mod|nand|new|next|nor|not|null|of|on|open|or|others|out|package|port|postponed|procedure|process|pure|range|record|register|reject|rem|report|return|rol|ror|select|severity|shared|signal|sla|sll|sra|srl|subtype|then|to|transport|type|unaffected|units|until|use|variable|wait|when|while|with|xnor|xor)(?=[^\w-]|$)/i,<br></td></tr
><tr
id=sl_svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8_2

><td class="source">null],[&quot;typ&quot;,/^(?:bit|bit_vector|character|boolean|integer|real|time|string|severity_level|positive|natural|signed|unsigned|line|text|std_u?logic(?:_vector)?)(?=[^\w-]|$)/i,null],[&quot;typ&quot;,/^&#39;(?:active|ascending|base|delayed|driving|driving_value|event|high|image|instance_name|last_active|last_event|last_value|left|leftof|length|low|path_name|pos|pred|quiet|range|reverse_range|right|rightof|simple_name|stable|succ|transaction|val|value)(?=[^\w-]|$)/i,null],[&quot;lit&quot;,/^\d+(?:_\d+)*(?:#[\w.\\]+#(?:[+-]?\d+(?:_\d+)*)?|(?:\.\d+(?:_\d+)*)?(?:e[+-]?\d+(?:_\d+)*)?)/i],<br></td></tr
><tr
id=sl_svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8_3

><td class="source">[&quot;pln&quot;,/^(?:[a-z]\w*|\\[^\\]*\\)/i],[&quot;pun&quot;,/^[^\w\t\n\r &quot;&#39;\xa0][^\w\t\n\r &quot;&#39;\xa0-]*/]]),[&quot;vhdl&quot;,&quot;vhd&quot;]);<br></td></tr
></table></pre>
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
</td>
</tr></table>

 
<script type="text/javascript">
 var lineNumUnderMouse = -1;
 
 function gutterOver(num) {
 gutterOut();
 var newTR = document.getElementById('gr_svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8_' + num);
 if (newTR) {
 newTR.className = 'undermouse';
 }
 lineNumUnderMouse = num;
 }
 function gutterOut() {
 if (lineNumUnderMouse != -1) {
 var oldTR = document.getElementById(
 'gr_svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8_' + lineNumUnderMouse);
 if (oldTR) {
 oldTR.className = '';
 }
 lineNumUnderMouse = -1;
 }
 }
 var numsGenState = {table_base_id: 'nums_table_'};
 var srcGenState = {table_base_id: 'src_table_'};
 var alignerRunning = false;
 var startOver = false;
 function setLineNumberHeights() {
 if (alignerRunning) {
 startOver = true;
 return;
 }
 numsGenState.chunk_id = 0;
 numsGenState.table = document.getElementById('nums_table_0');
 numsGenState.row_num = 0;
 if (!numsGenState.table) {
 return; // Silently exit if no file is present.
 }
 srcGenState.chunk_id = 0;
 srcGenState.table = document.getElementById('src_table_0');
 srcGenState.row_num = 0;
 alignerRunning = true;
 continueToSetLineNumberHeights();
 }
 function rowGenerator(genState) {
 if (genState.row_num < genState.table.rows.length) {
 var currentRow = genState.table.rows[genState.row_num];
 genState.row_num++;
 return currentRow;
 }
 var newTable = document.getElementById(
 genState.table_base_id + (genState.chunk_id + 1));
 if (newTable) {
 genState.chunk_id++;
 genState.row_num = 0;
 genState.table = newTable;
 return genState.table.rows[0];
 }
 return null;
 }
 var MAX_ROWS_PER_PASS = 1000;
 function continueToSetLineNumberHeights() {
 var rowsInThisPass = 0;
 var numRow = 1;
 var srcRow = 1;
 while (numRow && srcRow && rowsInThisPass < MAX_ROWS_PER_PASS) {
 numRow = rowGenerator(numsGenState);
 srcRow = rowGenerator(srcGenState);
 rowsInThisPass++;
 if (numRow && srcRow) {
 if (numRow.offsetHeight != srcRow.offsetHeight) {
 numRow.firstChild.style.height = srcRow.offsetHeight + 'px';
 }
 }
 }
 if (rowsInThisPass >= MAX_ROWS_PER_PASS) {
 setTimeout(continueToSetLineNumberHeights, 10);
 } else {
 alignerRunning = false;
 if (startOver) {
 startOver = false;
 setTimeout(setLineNumberHeights, 500);
 }
 }
 }
 function initLineNumberHeights() {
 // Do 2 complete passes, because there can be races
 // between this code and prettify.
 startOver = true;
 setTimeout(setLineNumberHeights, 250);
 window.onresize = setLineNumberHeights;
 }
 initLineNumberHeights();
</script>

 
 
 <div id="log">
 <div style="text-align:right">
 <a class="ifCollapse" href="#" onclick="_toggleMeta(this); return false">Show details</a>
 <a class="ifExpand" href="#" onclick="_toggleMeta(this); return false">Hide details</a>
 </div>
 <div class="ifExpand">
 
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="changelog">
 <p>Change log</p>
 <div>
 <a href="/p/io-2012-slides/source/detail?spec=svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8&amp;r=db92c5e0c26ba0bb545993bb48533d39f1934b95">db92c5e0c26b</a>
 by Eric Bidelman &lt;ebidel&gt;
 on Apr 8, 2012
 &nbsp; <a href="/p/io-2012-slides/source/diff?spec=svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8&r=db92c5e0c26ba0bb545993bb48533d39f1934b95&amp;format=side&amp;path=/js/prettify/lang-vhdl.js&amp;old_path=/js/prettify/lang-vhdl.js&amp;old=">Diff</a>
 </div>
 <pre>Adding prettyprint. Clean up old files
</pre>
 </div>
 
 
 
 
 
 
 <script type="text/javascript">
 var detail_url = '/p/io-2012-slides/source/detail?r=db92c5e0c26ba0bb545993bb48533d39f1934b95&spec=svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8';
 var publish_url = '/p/io-2012-slides/source/detail?r=db92c5e0c26ba0bb545993bb48533d39f1934b95&spec=svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8#publish';
 // describe the paths of this revision in javascript.
 var changed_paths = [];
 var changed_urls = [];
 
 changed_paths.push('/images/bubbles.png');
 changed_urls.push('/p/io-2012-slides/source/browse/images/bubbles.png?r\x3ddb92c5e0c26ba0bb545993bb48533d39f1934b95\x26spec\x3dsvnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8');
 
 
 changed_paths.push('/images/colorbar.png');
 changed_urls.push('/p/io-2012-slides/source/browse/images/colorbar.png?r\x3ddb92c5e0c26ba0bb545993bb48533d39f1934b95\x26spec\x3dsvnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8');
 
 
 changed_paths.push('/images/devfest_logo_small.png');
 changed_urls.push('/p/io-2012-slides/source/browse/images/devfest_logo_small.png?r\x3ddb92c5e0c26ba0bb545993bb48533d39f1934b95\x26spec\x3dsvnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8');
 
 
 changed_paths.push('/images/gdd2011_banner.png');
 changed_urls.push('/p/io-2012-slides/source/browse/images/gdd2011_banner.png?r\x3ddb92c5e0c26ba0bb545993bb48533d39f1934b95\x26spec\x3dsvnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8');
 
 
 changed_paths.push('/js/prettify/lang-apollo.js');
 changed_urls.push('/p/io-2012-slides/source/browse/js/prettify/lang-apollo.js?r\x3ddb92c5e0c26ba0bb545993bb48533d39f1934b95\x26spec\x3dsvnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8');
 
 
 changed_paths.push('/js/prettify/lang-clj.js');
 changed_urls.push('/p/io-2012-slides/source/browse/js/prettify/lang-clj.js?r\x3ddb92c5e0c26ba0bb545993bb48533d39f1934b95\x26spec\x3dsvnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8');
 
 
 changed_paths.push('/js/prettify/lang-css.js');
 changed_urls.push('/p/io-2012-slides/source/browse/js/prettify/lang-css.js?r\x3ddb92c5e0c26ba0bb545993bb48533d39f1934b95\x26spec\x3dsvnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8');
 
 
 changed_paths.push('/js/prettify/lang-go.js');
 changed_urls.push('/p/io-2012-slides/source/browse/js/prettify/lang-go.js?r\x3ddb92c5e0c26ba0bb545993bb48533d39f1934b95\x26spec\x3dsvnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8');
 
 
 changed_paths.push('/js/prettify/lang-hs.js');
 changed_urls.push('/p/io-2012-slides/source/browse/js/prettify/lang-hs.js?r\x3ddb92c5e0c26ba0bb545993bb48533d39f1934b95\x26spec\x3dsvnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8');
 
 
 changed_paths.push('/js/prettify/lang-lisp.js');
 changed_urls.push('/p/io-2012-slides/source/browse/js/prettify/lang-lisp.js?r\x3ddb92c5e0c26ba0bb545993bb48533d39f1934b95\x26spec\x3dsvnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8');
 
 
 changed_paths.push('/js/prettify/lang-lua.js');
 changed_urls.push('/p/io-2012-slides/source/browse/js/prettify/lang-lua.js?r\x3ddb92c5e0c26ba0bb545993bb48533d39f1934b95\x26spec\x3dsvnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8');
 
 
 changed_paths.push('/js/prettify/lang-ml.js');
 changed_urls.push('/p/io-2012-slides/source/browse/js/prettify/lang-ml.js?r\x3ddb92c5e0c26ba0bb545993bb48533d39f1934b95\x26spec\x3dsvnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8');
 
 
 changed_paths.push('/js/prettify/lang-n.js');
 changed_urls.push('/p/io-2012-slides/source/browse/js/prettify/lang-n.js?r\x3ddb92c5e0c26ba0bb545993bb48533d39f1934b95\x26spec\x3dsvnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8');
 
 
 changed_paths.push('/js/prettify/lang-proto.js');
 changed_urls.push('/p/io-2012-slides/source/browse/js/prettify/lang-proto.js?r\x3ddb92c5e0c26ba0bb545993bb48533d39f1934b95\x26spec\x3dsvnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8');
 
 
 changed_paths.push('/js/prettify/lang-scala.js');
 changed_urls.push('/p/io-2012-slides/source/browse/js/prettify/lang-scala.js?r\x3ddb92c5e0c26ba0bb545993bb48533d39f1934b95\x26spec\x3dsvnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8');
 
 
 changed_paths.push('/js/prettify/lang-sql.js');
 changed_urls.push('/p/io-2012-slides/source/browse/js/prettify/lang-sql.js?r\x3ddb92c5e0c26ba0bb545993bb48533d39f1934b95\x26spec\x3dsvnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8');
 
 
 changed_paths.push('/js/prettify/lang-tex.js');
 changed_urls.push('/p/io-2012-slides/source/browse/js/prettify/lang-tex.js?r\x3ddb92c5e0c26ba0bb545993bb48533d39f1934b95\x26spec\x3dsvnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8');
 
 
 changed_paths.push('/js/prettify/lang-vb.js');
 changed_urls.push('/p/io-2012-slides/source/browse/js/prettify/lang-vb.js?r\x3ddb92c5e0c26ba0bb545993bb48533d39f1934b95\x26spec\x3dsvnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8');
 
 
 changed_paths.push('/js/prettify/lang-vhdl.js');
 changed_urls.push('/p/io-2012-slides/source/browse/js/prettify/lang-vhdl.js?r\x3ddb92c5e0c26ba0bb545993bb48533d39f1934b95\x26spec\x3dsvnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8');
 
 var selected_path = '/js/prettify/lang-vhdl.js';
 
 
 changed_paths.push('/js/prettify/lang-wiki.js');
 changed_urls.push('/p/io-2012-slides/source/browse/js/prettify/lang-wiki.js?r\x3ddb92c5e0c26ba0bb545993bb48533d39f1934b95\x26spec\x3dsvnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8');
 
 
 changed_paths.push('/js/prettify/lang-xq.js');
 changed_urls.push('/p/io-2012-slides/source/browse/js/prettify/lang-xq.js?r\x3ddb92c5e0c26ba0bb545993bb48533d39f1934b95\x26spec\x3dsvnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8');
 
 
 changed_paths.push('/js/prettify/lang-yaml.js');
 changed_urls.push('/p/io-2012-slides/source/browse/js/prettify/lang-yaml.js?r\x3ddb92c5e0c26ba0bb545993bb48533d39f1934b95\x26spec\x3dsvnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8');
 
 
 changed_paths.push('/js/prettify/prettify.css');
 changed_urls.push('/p/io-2012-slides/source/browse/js/prettify/prettify.css?r\x3ddb92c5e0c26ba0bb545993bb48533d39f1934b95\x26spec\x3dsvnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8');
 
 
 changed_paths.push('/js/prettify/prettify.js');
 changed_urls.push('/p/io-2012-slides/source/browse/js/prettify/prettify.js?r\x3ddb92c5e0c26ba0bb545993bb48533d39f1934b95\x26spec\x3dsvnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8');
 
 
 function getCurrentPageIndex() {
 for (var i = 0; i < changed_paths.length; i++) {
 if (selected_path == changed_paths[i]) {
 return i;
 }
 }
 }
 function getNextPage() {
 var i = getCurrentPageIndex();
 if (i < changed_paths.length - 1) {
 return changed_urls[i + 1];
 }
 return null;
 }
 function getPreviousPage() {
 var i = getCurrentPageIndex();
 if (i > 0) {
 return changed_urls[i - 1];
 }
 return null;
 }
 function gotoNextPage() {
 var page = getNextPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoPreviousPage() {
 var page = getPreviousPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoDetailPage() {
 window.location = detail_url;
 }
 function gotoPublishPage() {
 window.location = publish_url;
 }
</script>

 
 <style type="text/css">
 #review_nav {
 border-top: 3px solid white;
 padding-top: 6px;
 margin-top: 1em;
 }
 #review_nav td {
 vertical-align: middle;
 }
 #review_nav select {
 margin: .5em 0;
 }
 </style>
 <div id="review_nav">
 <table><tr><td>Go to:&nbsp;</td><td>
 <select name="files_in_rev" onchange="window.location=this.value">
 
 <option value="/p/io-2012-slides/source/browse/images/bubbles.png?r=db92c5e0c26ba0bb545993bb48533d39f1934b95&amp;spec=svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8"
 
 >/images/bubbles.png</option>
 
 <option value="/p/io-2012-slides/source/browse/images/colorbar.png?r=db92c5e0c26ba0bb545993bb48533d39f1934b95&amp;spec=svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8"
 
 >/images/colorbar.png</option>
 
 <option value="/p/io-2012-slides/source/browse/images/devfest_logo_small.png?r=db92c5e0c26ba0bb545993bb48533d39f1934b95&amp;spec=svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8"
 
 >/images/devfest_logo_small.png</option>
 
 <option value="/p/io-2012-slides/source/browse/images/gdd2011_banner.png?r=db92c5e0c26ba0bb545993bb48533d39f1934b95&amp;spec=svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8"
 
 >/images/gdd2011_banner.png</option>
 
 <option value="/p/io-2012-slides/source/browse/js/prettify/lang-apollo.js?r=db92c5e0c26ba0bb545993bb48533d39f1934b95&amp;spec=svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8"
 
 >/js/prettify/lang-apollo.js</option>
 
 <option value="/p/io-2012-slides/source/browse/js/prettify/lang-clj.js?r=db92c5e0c26ba0bb545993bb48533d39f1934b95&amp;spec=svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8"
 
 >/js/prettify/lang-clj.js</option>
 
 <option value="/p/io-2012-slides/source/browse/js/prettify/lang-css.js?r=db92c5e0c26ba0bb545993bb48533d39f1934b95&amp;spec=svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8"
 
 >/js/prettify/lang-css.js</option>
 
 <option value="/p/io-2012-slides/source/browse/js/prettify/lang-go.js?r=db92c5e0c26ba0bb545993bb48533d39f1934b95&amp;spec=svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8"
 
 >/js/prettify/lang-go.js</option>
 
 <option value="/p/io-2012-slides/source/browse/js/prettify/lang-hs.js?r=db92c5e0c26ba0bb545993bb48533d39f1934b95&amp;spec=svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8"
 
 >/js/prettify/lang-hs.js</option>
 
 <option value="/p/io-2012-slides/source/browse/js/prettify/lang-lisp.js?r=db92c5e0c26ba0bb545993bb48533d39f1934b95&amp;spec=svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8"
 
 >/js/prettify/lang-lisp.js</option>
 
 <option value="/p/io-2012-slides/source/browse/js/prettify/lang-lua.js?r=db92c5e0c26ba0bb545993bb48533d39f1934b95&amp;spec=svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8"
 
 >/js/prettify/lang-lua.js</option>
 
 <option value="/p/io-2012-slides/source/browse/js/prettify/lang-ml.js?r=db92c5e0c26ba0bb545993bb48533d39f1934b95&amp;spec=svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8"
 
 >/js/prettify/lang-ml.js</option>
 
 <option value="/p/io-2012-slides/source/browse/js/prettify/lang-n.js?r=db92c5e0c26ba0bb545993bb48533d39f1934b95&amp;spec=svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8"
 
 >/js/prettify/lang-n.js</option>
 
 <option value="/p/io-2012-slides/source/browse/js/prettify/lang-proto.js?r=db92c5e0c26ba0bb545993bb48533d39f1934b95&amp;spec=svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8"
 
 >/js/prettify/lang-proto.js</option>
 
 <option value="/p/io-2012-slides/source/browse/js/prettify/lang-scala.js?r=db92c5e0c26ba0bb545993bb48533d39f1934b95&amp;spec=svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8"
 
 >/js/prettify/lang-scala.js</option>
 
 <option value="/p/io-2012-slides/source/browse/js/prettify/lang-sql.js?r=db92c5e0c26ba0bb545993bb48533d39f1934b95&amp;spec=svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8"
 
 >/js/prettify/lang-sql.js</option>
 
 <option value="/p/io-2012-slides/source/browse/js/prettify/lang-tex.js?r=db92c5e0c26ba0bb545993bb48533d39f1934b95&amp;spec=svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8"
 
 >/js/prettify/lang-tex.js</option>
 
 <option value="/p/io-2012-slides/source/browse/js/prettify/lang-vb.js?r=db92c5e0c26ba0bb545993bb48533d39f1934b95&amp;spec=svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8"
 
 >/js/prettify/lang-vb.js</option>
 
 <option value="/p/io-2012-slides/source/browse/js/prettify/lang-vhdl.js?r=db92c5e0c26ba0bb545993bb48533d39f1934b95&amp;spec=svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8"
 selected="selected"
 >/js/prettify/lang-vhdl.js</option>
 
 <option value="/p/io-2012-slides/source/browse/js/prettify/lang-wiki.js?r=db92c5e0c26ba0bb545993bb48533d39f1934b95&amp;spec=svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8"
 
 >/js/prettify/lang-wiki.js</option>
 
 <option value="/p/io-2012-slides/source/browse/js/prettify/lang-xq.js?r=db92c5e0c26ba0bb545993bb48533d39f1934b95&amp;spec=svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8"
 
 >/js/prettify/lang-xq.js</option>
 
 <option value="/p/io-2012-slides/source/browse/js/prettify/lang-yaml.js?r=db92c5e0c26ba0bb545993bb48533d39f1934b95&amp;spec=svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8"
 
 >/js/prettify/lang-yaml.js</option>
 
 <option value="/p/io-2012-slides/source/browse/js/prettify/prettify.css?r=db92c5e0c26ba0bb545993bb48533d39f1934b95&amp;spec=svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8"
 
 >/js/prettify/prettify.css</option>
 
 <option value="/p/io-2012-slides/source/browse/js/prettify/prettify.js?r=db92c5e0c26ba0bb545993bb48533d39f1934b95&amp;spec=svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8"
 
 >/js/prettify/prettify.js</option>
 
 </select>
 </td></tr></table>
 
 
 



 
 </div>
 
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="older_bubble">
 <p>Older revisions</p>
 
 <a href="/p/io-2012-slides/source/list?path=/js/prettify/lang-vhdl.js&r=db92c5e0c26ba0bb545993bb48533d39f1934b95">All revisions of this file</a>
 </div>
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="fileinfo_bubble">
 <p>File info</p>
 
 <div>Size: 1449 bytes,
 3 lines</div>
 
 <div><a href="//io-2012-slides.googlecode.com/git/js/prettify/lang-vhdl.js">View raw file</a></div>
 </div>
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 </div>
 </div>


</div>

</div>
</div>

<script src="http://www.gstatic.com/codesite/ph/7129612649507440983/js/prettify/prettify.js"></script>
<script type="text/javascript">prettyPrint();</script>


<script src="http://www.gstatic.com/codesite/ph/7129612649507440983/js/source_file_scripts.js"></script>

 <script type="text/javascript" src="http://www.gstatic.com/codesite/ph/7129612649507440983/js/kibbles.js"></script>
 <script type="text/javascript">
 var lastStop = null;
 var initialized = false;
 
 function updateCursor(next, prev) {
 if (prev && prev.element) {
 prev.element.className = 'cursor_stop cursor_hidden';
 }
 if (next && next.element) {
 next.element.className = 'cursor_stop cursor';
 lastStop = next.index;
 }
 }
 
 function pubRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftDestroyed(data) {
 updateCursorForCell(data.cellId, 'nocursor');
 if (initialized) {
 reloadCursors();
 }
 }
 function reloadCursors() {
 kibbles.skipper.reset();
 loadCursors();
 if (lastStop != null) {
 kibbles.skipper.setCurrentStop(lastStop);
 }
 }
 // possibly the simplest way to insert any newly added comments
 // is to update the class of the corresponding cursor row,
 // then refresh the entire list of rows.
 function updateCursorForCell(cellId, className) {
 var cell = document.getElementById(cellId);
 // we have to go two rows back to find the cursor location
 var row = getPreviousElement(cell.parentNode);
 row.className = className;
 }
 // returns the previous element, ignores text nodes.
 function getPreviousElement(e) {
 var element = e.previousSibling;
 if (element.nodeType == 3) {
 element = element.previousSibling;
 }
 if (element && element.tagName) {
 return element;
 }
 }
 function loadCursors() {
 // register our elements with skipper
 var elements = CR_getElements('*', 'cursor_stop');
 var len = elements.length;
 for (var i = 0; i < len; i++) {
 var element = elements[i]; 
 element.className = 'cursor_stop cursor_hidden';
 kibbles.skipper.append(element);
 }
 }
 function toggleComments() {
 CR_toggleCommentDisplay();
 reloadCursors();
 }
 function keysOnLoadHandler() {
 // setup skipper
 kibbles.skipper.addStopListener(
 kibbles.skipper.LISTENER_TYPE.PRE, updateCursor);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_top', 50);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_bottom', 100);
 // Register our keys
 kibbles.skipper.addFwdKey("n");
 kibbles.skipper.addRevKey("p");
 kibbles.keys.addKeyPressListener(
 'u', function() { window.location = detail_url; });
 kibbles.keys.addKeyPressListener(
 'r', function() { window.location = detail_url + '#publish'; });
 
 kibbles.keys.addKeyPressListener('j', gotoNextPage);
 kibbles.keys.addKeyPressListener('k', gotoPreviousPage);
 
 
 }
 </script>
<script src="http://www.gstatic.com/codesite/ph/7129612649507440983/js/code_review_scripts.js"></script>
<script type="text/javascript">
 function showPublishInstructions() {
 var element = document.getElementById('review_instr');
 if (element) {
 element.className = 'opened';
 }
 }
 var codereviews;
 function revsOnLoadHandler() {
 // register our source container with the commenting code
 var paths = {'svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8': '/js/prettify/lang-vhdl.js'}
 codereviews = CR_controller.setup(
 {"profileUrl":["/u/114898197985471151069/"],"token":"EKy51S0IV-izFSEaysBmL5AodYE:1349402974816","assetHostPath":"http://www.gstatic.com/codesite/ph","domainName":null,"assetVersionPath":"http://www.gstatic.com/codesite/ph/7129612649507440983","projectHomeUrl":"/p/io-2012-slides","relativeBaseUrl":"","projectName":"io-2012-slides","loggedInUserEmail":"rogerioassis@gmail.com"}, '', 'svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8', paths,
 CR_BrowseIntegrationFactory);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, showPublishInstructions);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_PUB_PLATE, pubRevealed);
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, draftRevealed);
 codereviews.registerActivityListener(CR_ActivityType.DISCARD_DRAFT_COMMENT, draftDestroyed);
 
 
 
 
 
 
 
 var initialized = true;
 reloadCursors();
 }
 window.onload = function() {keysOnLoadHandler(); revsOnLoadHandler();};

</script>
<script type="text/javascript" src="http://www.gstatic.com/codesite/ph/7129612649507440983/js/dit_scripts.js"></script>

 
 
 
 <script type="text/javascript" src="http://www.gstatic.com/codesite/ph/7129612649507440983/js/ph_core.js"></script>
 
 
 
 
</div> 

<div id="footer" dir="ltr">
 <div class="text">
 <a href="/projecthosting/terms.html">Terms</a> -
 <a href="http://www.google.com/privacy.html">Privacy</a> -
 <a href="/p/support/">Project Hosting Help</a>
 </div>
</div>
 <div class="hostedBy" style="margin-top: -20px;">
 <span style="vertical-align: top;">Powered by <a href="http://code.google.com/projecthosting/">Google Project Hosting</a></span>
 </div>

 
 


 
 </body>
</html>

