



<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link rel="icon" type="image/vnd.microsoft.icon" href="http://www.gstatic.com/codesite/ph/images/phosting.ico">
 
 
 <script type="text/javascript">
 
 
 
 
 var codesite_token = "W6wBHExkqjiJ8o_UXD-L5Oa8XEw:1349402984343";
 
 
 var CS_env = {"profileUrl":["/u/114898197985471151069/"],"token":"W6wBHExkqjiJ8o_UXD-L5Oa8XEw:1349402984343","assetHostPath":"http://www.gstatic.com/codesite/ph","domainName":null,"assetVersionPath":"http://www.gstatic.com/codesite/ph/7129612649507440983","projectHomeUrl":"/p/io-2012-slides","relativeBaseUrl":"","projectName":"io-2012-slides","loggedInUserEmail":"rogerioassis@gmail.com"};
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
 
 
 <title>lang-xq.js - 
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
 | <a href="https://www.google.com/accounts/Logout?continue=http%3A%2F%2Fcode.google.com%2Fp%2Fio-2012-slides%2Fsource%2Fbrowse%2Fjs%2Fprettify%2Flang-xq.js" 
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
 <span id="crumb_links" class="ifClosed"><a href="/p/io-2012-slides/source/browse/js/">js</a><span class="sp">/&nbsp;</span><a href="/p/io-2012-slides/source/browse/js/prettify/">prettify</a><span class="sp">/&nbsp;</span>lang-xq.js</span>
 
 
 
 
 
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
 <a href="/p/io-2012-slides/source/browse/js/prettify/lang-xq.js?edit=1"
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

><td class="source">PR.registerLangHandler(PR.createSimpleLexer([[&quot;var pln&quot;,/^\$[\w-]+/,null,&quot;$&quot;]],[[&quot;pln&quot;,/^[\s=][&lt;&gt;][\s=]/],[&quot;lit&quot;,/^@[\w-]+/],[&quot;tag&quot;,/^&lt;\/?[a-z](?:[\w-.:]*\w)?|\/?&gt;$/i],[&quot;com&quot;,/^\(:[\S\s]*?:\)/],[&quot;pln&quot;,/^[(),/;[\]{}]$/],[&quot;str&quot;,/^(?:&quot;(?:[^&quot;\\{]|\\[\S\s])*(?:&quot;|$)|&#39;(?:[^&#39;\\{]|\\[\S\s])*(?:&#39;|$))/,null,&quot;\&quot;&#39;&quot;],[&quot;kwd&quot;,/^(?:xquery|where|version|variable|union|typeswitch|treat|to|then|text|stable|sortby|some|self|schema|satisfies|returns|return|ref|processing-instruction|preceding-sibling|preceding|precedes|parent|only|of|node|namespace|module|let|item|intersect|instance|in|import|if|function|for|follows|following-sibling|following|external|except|every|else|element|descending|descendant-or-self|descendant|define|default|declare|comment|child|cast|case|before|attribute|assert|ascending|as|ancestor-or-self|ancestor|after|eq|order|by|or|and|schema-element|document-node|node|at)\b/],<br></td></tr
><tr
id=sl_svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8_2

><td class="source">[&quot;typ&quot;,/^(?:xs:yearMonthDuration|xs:unsignedLong|xs:time|xs:string|xs:short|xs:QName|xs:Name|xs:long|xs:integer|xs:int|xs:gYearMonth|xs:gYear|xs:gMonthDay|xs:gDay|xs:float|xs:duration|xs:double|xs:decimal|xs:dayTimeDuration|xs:dateTime|xs:date|xs:byte|xs:boolean|xs:anyURI|xf:yearMonthDuration)\b/,null],[&quot;fun pln&quot;,/^(?:xp:dereference|xinc:node-expand|xinc:link-references|xinc:link-expand|xhtml:restructure|xhtml:clean|xhtml:add-lists|xdmp:zip-manifest|xdmp:zip-get|xdmp:zip-create|xdmp:xquery-version|xdmp:word-convert|xdmp:with-namespaces|xdmp:version|xdmp:value|xdmp:user-roles|xdmp:user-last-login|xdmp:user|xdmp:url-encode|xdmp:url-decode|xdmp:uri-is-file|xdmp:uri-format|xdmp:uri-content-type|xdmp:unquote|xdmp:unpath|xdmp:triggers-database|xdmp:trace|xdmp:to-json|xdmp:tidy|xdmp:subbinary|xdmp:strftime|xdmp:spawn-in|xdmp:spawn|xdmp:sleep|xdmp:shutdown|xdmp:set-session-field|xdmp:set-response-encoding|xdmp:set-response-content-type|xdmp:set-response-code|xdmp:set-request-time-limit|xdmp:set|xdmp:servers|xdmp:server-status|xdmp:server-name|xdmp:server|xdmp:security-database|xdmp:security-assert|xdmp:schema-database|xdmp:save|xdmp:role-roles|xdmp:role|xdmp:rethrow|xdmp:restart|xdmp:request-timestamp|xdmp:request-status|xdmp:request-cancel|xdmp:request|xdmp:redirect-response|xdmp:random|xdmp:quote|xdmp:query-trace|xdmp:query-meters|xdmp:product-edition|xdmp:privilege-roles|xdmp:privilege|xdmp:pretty-print|xdmp:powerpoint-convert|xdmp:platform|xdmp:permission|xdmp:pdf-convert|xdmp:path|xdmp:octal-to-integer|xdmp:node-uri|xdmp:node-replace|xdmp:node-kind|xdmp:node-insert-child|xdmp:node-insert-before|xdmp:node-insert-after|xdmp:node-delete|xdmp:node-database|xdmp:mul64|xdmp:modules-root|xdmp:modules-database|xdmp:merging|xdmp:merge-cancel|xdmp:merge|xdmp:md5|xdmp:logout|xdmp:login|xdmp:log-level|xdmp:log|xdmp:lock-release|xdmp:lock-acquire|xdmp:load|xdmp:invoke-in|xdmp:invoke|xdmp:integer-to-octal|xdmp:integer-to-hex|xdmp:http-put|xdmp:http-post|xdmp:http-options|xdmp:http-head|xdmp:http-get|xdmp:http-delete|xdmp:hosts|xdmp:host-status|xdmp:host-name|xdmp:host|xdmp:hex-to-integer|xdmp:hash64|xdmp:hash32|xdmp:has-privilege|xdmp:groups|xdmp:group-serves|xdmp:group-servers|xdmp:group-name|xdmp:group-hosts|xdmp:group|xdmp:get-session-field-names|xdmp:get-session-field|xdmp:get-response-encoding|xdmp:get-response-code|xdmp:get-request-username|xdmp:get-request-user|xdmp:get-request-url|xdmp:get-request-protocol|xdmp:get-request-path|xdmp:get-request-method|xdmp:get-request-header-names|xdmp:get-request-header|xdmp:get-request-field-names|xdmp:get-request-field-filename|xdmp:get-request-field-content-type|xdmp:get-request-field|xdmp:get-request-client-certificate|xdmp:get-request-client-address|xdmp:get-request-body|xdmp:get-current-user|xdmp:get-current-roles|xdmp:get|xdmp:function-name|xdmp:function-module|xdmp:function|xdmp:from-json|xdmp:forests|xdmp:forest-status|xdmp:forest-restore|xdmp:forest-restart|xdmp:forest-name|xdmp:forest-delete|xdmp:forest-databases|xdmp:forest-counts|xdmp:forest-clear|xdmp:forest-backup|xdmp:forest|xdmp:filesystem-file|xdmp:filesystem-directory|xdmp:exists|xdmp:excel-convert|xdmp:eval-in|xdmp:eval|xdmp:estimate|xdmp:email|xdmp:element-content-type|xdmp:elapsed-time|xdmp:document-set-quality|xdmp:document-set-property|xdmp:document-set-properties|xdmp:document-set-permissions|xdmp:document-set-collections|xdmp:document-remove-properties|xdmp:document-remove-permissions|xdmp:document-remove-collections|xdmp:document-properties|xdmp:document-locks|xdmp:document-load|xdmp:document-insert|xdmp:document-get-quality|xdmp:document-get-properties|xdmp:document-get-permissions|xdmp:document-get-collections|xdmp:document-get|xdmp:document-forest|xdmp:document-delete|xdmp:document-add-properties|xdmp:document-add-permissions|xdmp:document-add-collections|xdmp:directory-properties|xdmp:directory-locks|xdmp:directory-delete|xdmp:directory-create|xdmp:directory|xdmp:diacritic-less|xdmp:describe|xdmp:default-permissions|xdmp:default-collections|xdmp:databases|xdmp:database-restore-validate|xdmp:database-restore-status|xdmp:database-restore-cancel|xdmp:database-restore|xdmp:database-name|xdmp:database-forests|xdmp:database-backup-validate|xdmp:database-backup-status|xdmp:database-backup-purge|xdmp:database-backup-cancel|xdmp:database-backup|xdmp:database|xdmp:collection-properties|xdmp:collection-locks|xdmp:collection-delete|xdmp:collation-canonical-uri|xdmp:castable-as|xdmp:can-grant-roles|xdmp:base64-encode|xdmp:base64-decode|xdmp:architecture|xdmp:apply|xdmp:amp-roles|xdmp:amp|xdmp:add64|xdmp:add-response-header|xdmp:access|trgr:trigger-set-recursive|trgr:trigger-set-permissions|trgr:trigger-set-name|trgr:trigger-set-module|trgr:trigger-set-event|trgr:trigger-set-description|trgr:trigger-remove-permissions|trgr:trigger-module|trgr:trigger-get-permissions|trgr:trigger-enable|trgr:trigger-disable|trgr:trigger-database-online-event|trgr:trigger-data-event|trgr:trigger-add-permissions|trgr:remove-trigger|trgr:property-content|trgr:pre-commit|trgr:post-commit|trgr:get-trigger-by-id|trgr:get-trigger|trgr:document-scope|trgr:document-content|trgr:directory-scope|trgr:create-trigger|trgr:collection-scope|trgr:any-property-content|thsr:set-entry|thsr:remove-term|thsr:remove-synonym|thsr:remove-entry|thsr:query-lookup|thsr:lookup|thsr:load|thsr:insert|thsr:expand|thsr:add-synonym|spell:suggest-detailed|spell:suggest|spell:remove-word|spell:make-dictionary|spell:load|spell:levenshtein-distance|spell:is-correct|spell:insert|spell:double-metaphone|spell:add-word|sec:users-collection|sec:user-set-roles|sec:user-set-password|sec:user-set-name|sec:user-set-description|sec:user-set-default-permissions|sec:user-set-default-collections|sec:user-remove-roles|sec:user-privileges|sec:user-get-roles|sec:user-get-description|sec:user-get-default-permissions|sec:user-get-default-collections|sec:user-doc-permissions|sec:user-doc-collections|sec:user-add-roles|sec:unprotect-collection|sec:uid-for-name|sec:set-realm|sec:security-version|sec:security-namespace|sec:security-installed|sec:security-collection|sec:roles-collection|sec:role-set-roles|sec:role-set-name|sec:role-set-description|sec:role-set-default-permissions|sec:role-set-default-collections|sec:role-remove-roles|sec:role-privileges|sec:role-get-roles|sec:role-get-description|sec:role-get-default-permissions|sec:role-get-default-collections|sec:role-doc-permissions|sec:role-doc-collections|sec:role-add-roles|sec:remove-user|sec:remove-role-from-users|sec:remove-role-from-role|sec:remove-role-from-privileges|sec:remove-role-from-amps|sec:remove-role|sec:remove-privilege|sec:remove-amp|sec:protect-collection|sec:privileges-collection|sec:privilege-set-roles|sec:privilege-set-name|sec:privilege-remove-roles|sec:privilege-get-roles|sec:privilege-add-roles|sec:priv-doc-permissions|sec:priv-doc-collections|sec:get-user-names|sec:get-unique-elem-id|sec:get-role-names|sec:get-role-ids|sec:get-privilege|sec:get-distinct-permissions|sec:get-collection|sec:get-amp|sec:create-user-with-role|sec:create-user|sec:create-role|sec:create-privilege|sec:create-amp|sec:collections-collection|sec:collection-set-permissions|sec:collection-remove-permissions|sec:collection-get-permissions|sec:collection-add-permissions|sec:check-admin|sec:amps-collection|sec:amp-set-roles|sec:amp-remove-roles|sec:amp-get-roles|sec:amp-doc-permissions|sec:amp-doc-collections|sec:amp-add-roles|search:unparse|search:suggest|search:snippet|search:search|search:resolve-nodes|search:resolve|search:remove-constraint|search:parse|search:get-default-options|search:estimate|search:check-options|prof:value|prof:reset|prof:report|prof:invoke|prof:eval|prof:enable|prof:disable|prof:allowed|ppt:clean|pki:template-set-request|pki:template-set-name|pki:template-set-key-type|pki:template-set-key-options|pki:template-set-description|pki:template-in-use|pki:template-get-version|pki:template-get-request|pki:template-get-name|pki:template-get-key-type|pki:template-get-key-options|pki:template-get-id|pki:template-get-description|pki:need-certificate|pki:is-temporary|pki:insert-trusted-certificates|pki:insert-template|pki:insert-signed-certificates|pki:insert-certificate-revocation-list|pki:get-trusted-certificate-ids|pki:get-template-ids|pki:get-template-certificate-authority|pki:get-template-by-name|pki:get-template|pki:get-pending-certificate-requests-xml|pki:get-pending-certificate-requests-pem|pki:get-pending-certificate-request|pki:get-certificates-for-template-xml|pki:get-certificates-for-template|pki:get-certificates|pki:get-certificate-xml|pki:get-certificate-pem|pki:get-certificate|pki:generate-temporary-certificate-if-necessary|pki:generate-temporary-certificate|pki:generate-template-certificate-authority|pki:generate-certificate-request|pki:delete-template|pki:delete-certificate|pki:create-template|pdf:make-toc|pdf:insert-toc-headers|pdf:get-toc|pdf:clean|p:status-transition|p:state-transition|p:remove|p:pipelines|p:insert|p:get-by-id|p:get|p:execute|p:create|p:condition|p:collection|p:action|ooxml:runs-merge|ooxml:package-uris|ooxml:package-parts-insert|ooxml:package-parts|msword:clean|mcgm:polygon|mcgm:point|mcgm:geospatial-query-from-elements|mcgm:geospatial-query|mcgm:circle|math:tanh|math:tan|math:sqrt|math:sinh|math:sin|math:pow|math:modf|math:log10|math:log|math:ldexp|math:frexp|math:fmod|math:floor|math:fabs|math:exp|math:cosh|math:cos|math:ceil|math:atan2|math:atan|math:asin|math:acos|map:put|map:map|map:keys|map:get|map:delete|map:count|map:clear|lnk:to|lnk:remove|lnk:insert|lnk:get|lnk:from|lnk:create|kml:polygon|kml:point|kml:interior-polygon|kml:geospatial-query-from-elements|kml:geospatial-query|kml:circle|kml:box|gml:polygon|gml:point|gml:interior-polygon|gml:geospatial-query-from-elements|gml:geospatial-query|gml:circle|gml:box|georss:point|georss:geospatial-query|georss:circle|geo:polygon|geo:point|geo:interior-polygon|geo:geospatial-query-from-elements|geo:geospatial-query|geo:circle|geo:box|fn:zero-or-one|fn:years-from-duration|fn:year-from-dateTime|fn:year-from-date|fn:upper-case|fn:unordered|fn:true|fn:translate|fn:trace|fn:tokenize|fn:timezone-from-time|fn:timezone-from-dateTime|fn:timezone-from-date|fn:sum|fn:subtract-dateTimes-yielding-yearMonthDuration|fn:subtract-dateTimes-yielding-dayTimeDuration|fn:substring-before|fn:substring-after|fn:substring|fn:subsequence|fn:string-to-codepoints|fn:string-pad|fn:string-length|fn:string-join|fn:string|fn:static-base-uri|fn:starts-with|fn:seconds-from-time|fn:seconds-from-duration|fn:seconds-from-dateTime|fn:round-half-to-even|fn:round|fn:root|fn:reverse|fn:resolve-uri|fn:resolve-QName|fn:replace|fn:remove|fn:QName|fn:prefix-from-QName|fn:position|fn:one-or-more|fn:number|fn:not|fn:normalize-unicode|fn:normalize-space|fn:node-name|fn:node-kind|fn:nilled|fn:namespace-uri-from-QName|fn:namespace-uri-for-prefix|fn:namespace-uri|fn:name|fn:months-from-duration|fn:month-from-dateTime|fn:month-from-date|fn:minutes-from-time|fn:minutes-from-duration|fn:minutes-from-dateTime|fn:min|fn:max|fn:matches|fn:lower-case|fn:local-name-from-QName|fn:local-name|fn:last|fn:lang|fn:iri-to-uri|fn:insert-before|fn:index-of|fn:in-scope-prefixes|fn:implicit-timezone|fn:idref|fn:id|fn:hours-from-time|fn:hours-from-duration|fn:hours-from-dateTime|fn:floor|fn:false|fn:expanded-QName|fn:exists|fn:exactly-one|fn:escape-uri|fn:escape-html-uri|fn:error|fn:ends-with|fn:encode-for-uri|fn:empty|fn:document-uri|fn:doc-available|fn:doc|fn:distinct-values|fn:distinct-nodes|fn:default-collation|fn:deep-equal|fn:days-from-duration|fn:day-from-dateTime|fn:day-from-date|fn:data|fn:current-time|fn:current-dateTime|fn:current-date|fn:count|fn:contains|fn:concat|fn:compare|fn:collection|fn:codepoints-to-string|fn:codepoint-equal|fn:ceiling|fn:boolean|fn:base-uri|fn:avg|fn:adjust-time-to-timezone|fn:adjust-dateTime-to-timezone|fn:adjust-date-to-timezone|fn:abs|feed:unsubscribe|feed:subscription|feed:subscribe|feed:request|feed:item|feed:description|excel:clean|entity:enrich|dom:set-pipelines|dom:set-permissions|dom:set-name|dom:set-evaluation-context|dom:set-domain-scope|dom:set-description|dom:remove-pipeline|dom:remove-permissions|dom:remove|dom:get|dom:evaluation-context|dom:domains|dom:domain-scope|dom:create|dom:configuration-set-restart-user|dom:configuration-set-permissions|dom:configuration-set-evaluation-context|dom:configuration-set-default-domain|dom:configuration-get|dom:configuration-create|dom:collection|dom:add-pipeline|dom:add-permissions|dls:retention-rules|dls:retention-rule-remove|dls:retention-rule-insert|dls:retention-rule|dls:purge|dls:node-expand|dls:link-references|dls:link-expand|dls:documents-query|dls:document-versions-query|dls:document-version-uri|dls:document-version-query|dls:document-version-delete|dls:document-version-as-of|dls:document-version|dls:document-update|dls:document-unmanage|dls:document-set-quality|dls:document-set-property|dls:document-set-properties|dls:document-set-permissions|dls:document-set-collections|dls:document-retention-rules|dls:document-remove-properties|dls:document-remove-permissions|dls:document-remove-collections|dls:document-purge|dls:document-manage|dls:document-is-managed|dls:document-insert-and-manage|dls:document-include-query|dls:document-history|dls:document-get-permissions|dls:document-extract-part|dls:document-delete|dls:document-checkout-status|dls:document-checkout|dls:document-checkin|dls:document-add-properties|dls:document-add-permissions|dls:document-add-collections|dls:break-checkout|dls:author-query|dls:as-of-query|dbk:convert|dbg:wait|dbg:value|dbg:stopped|dbg:stop|dbg:step|dbg:status|dbg:stack|dbg:out|dbg:next|dbg:line|dbg:invoke|dbg:function|dbg:finish|dbg:expr|dbg:eval|dbg:disconnect|dbg:detach|dbg:continue|dbg:connect|dbg:clear|dbg:breakpoints|dbg:break|dbg:attached|dbg:attach|cvt:save-converted-documents|cvt:part-uri|cvt:destination-uri|cvt:basepath|cvt:basename|cts:words|cts:word-query-weight|cts:word-query-text|cts:word-query-options|cts:word-query|cts:word-match|cts:walk|cts:uris|cts:uri-match|cts:train|cts:tokenize|cts:thresholds|cts:stem|cts:similar-query-weight|cts:similar-query-nodes|cts:similar-query|cts:shortest-distance|cts:search|cts:score|cts:reverse-query-weight|cts:reverse-query-nodes|cts:reverse-query|cts:remainder|cts:registered-query-weight|cts:registered-query-options|cts:registered-query-ids|cts:registered-query|cts:register|cts:query|cts:quality|cts:properties-query-query|cts:properties-query|cts:polygon-vertices|cts:polygon|cts:point-longitude|cts:point-latitude|cts:point|cts:or-query-queries|cts:or-query|cts:not-query-weight|cts:not-query-query|cts:not-query|cts:near-query-weight|cts:near-query-queries|cts:near-query-options|cts:near-query-distance|cts:near-query|cts:highlight|cts:geospatial-co-occurrences|cts:frequency|cts:fitness|cts:field-words|cts:field-word-query-weight|cts:field-word-query-text|cts:field-word-query-options|cts:field-word-query-field-name|cts:field-word-query|cts:field-word-match|cts:entity-highlight|cts:element-words|cts:element-word-query-weight|cts:element-word-query-text|cts:element-word-query-options|cts:element-word-query-element-name|cts:element-word-query|cts:element-word-match|cts:element-values|cts:element-value-ranges|cts:element-value-query-weight|cts:element-value-query-text|cts:element-value-query-options|cts:element-value-query-element-name|cts:element-value-query|cts:element-value-match|cts:element-value-geospatial-co-occurrences|cts:element-value-co-occurrences|cts:element-range-query-weight|cts:element-range-query-value|cts:element-range-query-options|cts:element-range-query-operator|cts:element-range-query-element-name|cts:element-range-query|cts:element-query-query|cts:element-query-element-name|cts:element-query|cts:element-pair-geospatial-values|cts:element-pair-geospatial-value-match|cts:element-pair-geospatial-query-weight|cts:element-pair-geospatial-query-region|cts:element-pair-geospatial-query-options|cts:element-pair-geospatial-query-longitude-name|cts:element-pair-geospatial-query-latitude-name|cts:element-pair-geospatial-query-element-name|cts:element-pair-geospatial-query|cts:element-pair-geospatial-boxes|cts:element-geospatial-values|cts:element-geospatial-value-match|cts:element-geospatial-query-weight|cts:element-geospatial-query-region|cts:element-geospatial-query-options|cts:element-geospatial-query-element-name|cts:element-geospatial-query|cts:element-geospatial-boxes|cts:element-child-geospatial-values|cts:element-child-geospatial-value-match|cts:element-child-geospatial-query-weight|cts:element-child-geospatial-query-region|cts:element-child-geospatial-query-options|cts:element-child-geospatial-query-element-name|cts:element-child-geospatial-query-child-name|cts:element-child-geospatial-query|cts:element-child-geospatial-boxes|cts:element-attribute-words|cts:element-attribute-word-query-weight|cts:element-attribute-word-query-text|cts:element-attribute-word-query-options|cts:element-attribute-word-query-element-name|cts:element-attribute-word-query-attribute-name|cts:element-attribute-word-query|cts:element-attribute-word-match|cts:element-attribute-values|cts:element-attribute-value-ranges|cts:element-attribute-value-query-weight|cts:element-attribute-value-query-text|cts:element-attribute-value-query-options|cts:element-attribute-value-query-element-name|cts:element-attribute-value-query-attribute-name|cts:element-attribute-value-query|cts:element-attribute-value-match|cts:element-attribute-value-geospatial-co-occurrences|cts:element-attribute-value-co-occurrences|cts:element-attribute-range-query-weight|cts:element-attribute-range-query-value|cts:element-attribute-range-query-options|cts:element-attribute-range-query-operator|cts:element-attribute-range-query-element-name|cts:element-attribute-range-query-attribute-name|cts:element-attribute-range-query|cts:element-attribute-pair-geospatial-values|cts:element-attribute-pair-geospatial-value-match|cts:element-attribute-pair-geospatial-query-weight|cts:element-attribute-pair-geospatial-query-region|cts:element-attribute-pair-geospatial-query-options|cts:element-attribute-pair-geospatial-query-longitude-name|cts:element-attribute-pair-geospatial-query-latitude-name|cts:element-attribute-pair-geospatial-query-element-name|cts:element-attribute-pair-geospatial-query|cts:element-attribute-pair-geospatial-boxes|cts:document-query-uris|cts:document-query|cts:distance|cts:directory-query-uris|cts:directory-query-depth|cts:directory-query|cts:destination|cts:deregister|cts:contains|cts:confidence|cts:collections|cts:collection-query-uris|cts:collection-query|cts:collection-match|cts:classify|cts:circle-radius|cts:circle-center|cts:circle|cts:box-west|cts:box-south|cts:box-north|cts:box-east|cts:box|cts:bearing|cts:arc-intersection|cts:and-query-queries|cts:and-query-options|cts:and-query|cts:and-not-query-positive-query|cts:and-not-query-negative-query|cts:and-not-query|css:get|css:convert|cpf:success|cpf:failure|cpf:document-set-state|cpf:document-set-processing-status|cpf:document-set-last-updated|cpf:document-set-error|cpf:document-get-state|cpf:document-get-processing-status|cpf:document-get-last-updated|cpf:document-get-error|cpf:check-transition|alert:spawn-matching-actions|alert:rule-user-id-query|alert:rule-set-user-id|alert:rule-set-query|alert:rule-set-options|alert:rule-set-name|alert:rule-set-description|alert:rule-set-action|alert:rule-remove|alert:rule-name-query|alert:rule-insert|alert:rule-id-query|alert:rule-get-user-id|alert:rule-get-query|alert:rule-get-options|alert:rule-get-name|alert:rule-get-id|alert:rule-get-description|alert:rule-get-action|alert:rule-action-query|alert:remove-triggers|alert:make-rule|alert:make-log-action|alert:make-config|alert:make-action|alert:invoke-matching-actions|alert:get-my-rules|alert:get-all-rules|alert:get-actions|alert:find-matching-rules|alert:create-triggers|alert:config-set-uri|alert:config-set-trigger-ids|alert:config-set-options|alert:config-set-name|alert:config-set-description|alert:config-set-cpf-domain-names|alert:config-set-cpf-domain-ids|alert:config-insert|alert:config-get-uri|alert:config-get-trigger-ids|alert:config-get-options|alert:config-get-name|alert:config-get-id|alert:config-get-description|alert:config-get-cpf-domain-names|alert:config-get-cpf-domain-ids|alert:config-get|alert:config-delete|alert:action-set-options|alert:action-set-name|alert:action-set-module-root|alert:action-set-module-db|alert:action-set-module|alert:action-set-description|alert:action-remove|alert:action-insert|alert:action-get-options|alert:action-get-name|alert:action-get-module-root|alert:action-get-module-db|alert:action-get-module|alert:action-get-description|zero-or-one|years-from-duration|year-from-dateTime|year-from-date|upper-case|unordered|true|translate|trace|tokenize|timezone-from-time|timezone-from-dateTime|timezone-from-date|sum|subtract-dateTimes-yielding-yearMonthDuration|subtract-dateTimes-yielding-dayTimeDuration|substring-before|substring-after|substring|subsequence|string-to-codepoints|string-pad|string-length|string-join|string|static-base-uri|starts-with|seconds-from-time|seconds-from-duration|seconds-from-dateTime|round-half-to-even|round|root|reverse|resolve-uri|resolve-QName|replace|remove|QName|prefix-from-QName|position|one-or-more|number|not|normalize-unicode|normalize-space|node-name|node-kind|nilled|namespace-uri-from-QName|namespace-uri-for-prefix|namespace-uri|name|months-from-duration|month-from-dateTime|month-from-date|minutes-from-time|minutes-from-duration|minutes-from-dateTime|min|max|matches|lower-case|local-name-from-QName|local-name|last|lang|iri-to-uri|insert-before|index-of|in-scope-prefixes|implicit-timezone|idref|id|hours-from-time|hours-from-duration|hours-from-dateTime|floor|false|expanded-QName|exists|exactly-one|escape-uri|escape-html-uri|error|ends-with|encode-for-uri|empty|document-uri|doc-available|doc|distinct-values|distinct-nodes|default-collation|deep-equal|days-from-duration|day-from-dateTime|day-from-date|data|current-time|current-dateTime|current-date|count|contains|concat|compare|collection|codepoints-to-string|codepoint-equal|ceiling|boolean|base-uri|avg|adjust-time-to-timezone|adjust-dateTime-to-timezone|adjust-date-to-timezone|abs)\b/],<br></td></tr
><tr
id=sl_svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8_3

><td class="source">[&quot;pln&quot;,/^[\w:-]+/],[&quot;pln&quot;,/^[\t\n\r \xa0]+/]]),[&quot;xq&quot;,&quot;xquery&quot;]);<br></td></tr
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
 &nbsp; <a href="/p/io-2012-slides/source/diff?spec=svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8&r=db92c5e0c26ba0bb545993bb48533d39f1934b95&amp;format=side&amp;path=/js/prettify/lang-xq.js&amp;old_path=/js/prettify/lang-xq.js&amp;old=">Diff</a>
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
 
 
 changed_paths.push('/js/prettify/lang-wiki.js');
 changed_urls.push('/p/io-2012-slides/source/browse/js/prettify/lang-wiki.js?r\x3ddb92c5e0c26ba0bb545993bb48533d39f1934b95\x26spec\x3dsvnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8');
 
 
 changed_paths.push('/js/prettify/lang-xq.js');
 changed_urls.push('/p/io-2012-slides/source/browse/js/prettify/lang-xq.js?r\x3ddb92c5e0c26ba0bb545993bb48533d39f1934b95\x26spec\x3dsvnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8');
 
 var selected_path = '/js/prettify/lang-xq.js';
 
 
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
 
 >/js/prettify/lang-vhdl.js</option>
 
 <option value="/p/io-2012-slides/source/browse/js/prettify/lang-wiki.js?r=db92c5e0c26ba0bb545993bb48533d39f1934b95&amp;spec=svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8"
 
 >/js/prettify/lang-wiki.js</option>
 
 <option value="/p/io-2012-slides/source/browse/js/prettify/lang-xq.js?r=db92c5e0c26ba0bb545993bb48533d39f1934b95&amp;spec=svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8"
 selected="selected"
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
 
 <a href="/p/io-2012-slides/source/list?path=/js/prettify/lang-xq.js&r=db92c5e0c26ba0bb545993bb48533d39f1934b95">All revisions of this file</a>
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
 
 <div>Size: 23242 bytes,
 3 lines</div>
 
 <div><a href="//io-2012-slides.googlecode.com/git/js/prettify/lang-xq.js">View raw file</a></div>
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
 var paths = {'svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8': '/js/prettify/lang-xq.js'}
 codereviews = CR_controller.setup(
 {"profileUrl":["/u/114898197985471151069/"],"token":"W6wBHExkqjiJ8o_UXD-L5Oa8XEw:1349402984343","assetHostPath":"http://www.gstatic.com/codesite/ph","domainName":null,"assetVersionPath":"http://www.gstatic.com/codesite/ph/7129612649507440983","projectHomeUrl":"/p/io-2012-slides","relativeBaseUrl":"","projectName":"io-2012-slides","loggedInUserEmail":"rogerioassis@gmail.com"}, '', 'svnf208307cbdd403d3fa92a1aae1dc9c094c7ec9d8', paths,
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

