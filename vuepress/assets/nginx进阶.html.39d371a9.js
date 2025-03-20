import{_ as s,p as a}from"./app.e6691f45.js";const e={};function l(i,n){return n[0]||(n[0]=a(`<h1 id="nginx-\u8FDB\u9636" tabindex="-1"><a class="header-anchor" href="#nginx-\u8FDB\u9636" aria-hidden="true">#</a> nginx \u8FDB\u9636</h1><ul><li><a href="#%E4%BB%80%E4%B9%88%E6%98%AFnginx">\u4EC0\u4E48\u662Fnginx</a></li><li><a href="#%E5%8F%AF%E4%BB%A5%E5%81%9A%E4%BB%80%E4%B9%88%E7%94%A8">\u53EF\u4EE5\u505A\u4EC0\u4E48\u7528</a></li><li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86">\u4EC0\u4E48\u662F\u6B63\u5411\u4EE3\u7406</a></li><li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86">\u4EC0\u4E48\u662F\u53CD\u5411\u4EE3\u7406</a></li><li><a href="#nginx%E5%AE%9E%E7%8E%B0%E9%AB%98%E5%B9%B6%E5%8F%91%E5%8E%9F%E7%90%86">nginx\u5B9E\u73B0\u9AD8\u5E76\u53D1\u539F\u7406</a></li><li><a href="#%E5%8A%A8%E9%9D%99%E5%88%86%E7%A6%BB">\u52A8\u9759\u5206\u79BB</a></li><li><a href="#%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E9%85%8D%E7%BD%AE">\u8D1F\u8F7D\u5747\u8861\u914D\u7F6E</a></li><li><a href="#%E5%86%85%E7%BD%AE%E7%9A%84%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F">\u5185\u7F6E\u7684\u5168\u5C40\u53D8\u91CF</a></li></ul><h3 id="\u4EC0\u4E48\u662Fnginx" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662Fnginx" aria-hidden="true">#</a> \u4EC0\u4E48\u662Fnginx</h3><blockquote><p>Nginx\u662F\u4E00\u4E2A \u8F7B\u91CF\u7EA7/\u9AD8\u6027\u80FD\u7684\u53CD\u5411\u4EE3\u7406Web\u670D\u52A1\u5668\u3002<br> \u9AD8\u6548\u7684\u53CD\u5411\u4EE3\u7406\u3001\u8D1F\u8F7D\u5E73\u8861\u3002\u5B98\u65B9\u652F\u63015\u4E07\u5DE6\u53F3\u7684\u5E76\u53D1\u3002<br> \u4F18\u70B9\uFF1A\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\u53EF\u4EE5\u9690\u85CF\u6E90\u670D\u52A1\u5668\u7684\u5B58\u5728\u548C\u7279\u5F81\u3002</p></blockquote><h3 id="\u53EF\u4EE5\u505A\u4EC0\u4E48\u7528" tabindex="-1"><a class="header-anchor" href="#\u53EF\u4EE5\u505A\u4EC0\u4E48\u7528" aria-hidden="true">#</a> \u53EF\u4EE5\u505A\u4EC0\u4E48\u7528</h3><blockquote><ul><li>\u9759\u6001\u6587\u4EF6\u670D\u52A1\u5668</li><li>\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668</li><li>\u865A\u62DF\u4E3B\u673A</li><li>\u5B89\u5168\u7BA1\u7406\uFF0C\u5BF9\u63A5\u53E3\u670D\u52A1\u8FDB\u884C\u62E6\u622A</li></ul></blockquote><h3 id="\u4EC0\u4E48\u662F\u6B63\u5411\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u6B63\u5411\u4EE3\u7406" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u6B63\u5411\u4EE3\u7406</h3><blockquote><ul><li>\u4EE3\u7406\u7AEF\u4EE3\u7406\u7684\u662F\u5BA2\u6237\u7AEF\uFF0C\u7AD9\u5728\u5BA2\u6237\u7AEF\u90A3\u8FB9\u4E3A\u5BA2\u6237\u7AEF\u8BF4\u8BDD;</li><li>\u5BA2\u6237\u7AEF\u7ED9\u4EC0\u4E48 \u4EE3\u7406\u7AEF\u63D0\u4EA4\u4EC0\u4E48\uFF0C\u5F97\u5230\u4EC0\u4E48\u53D6\u51B3\u4E8E\u76EE\u6807\u670D\u52A1\u5668\uFF0C\u4EE3\u7406\u7AEF\u57FA\u672C\u4E0D\u53C2\u4E0E\uFF0C\u4E00\u5BF9\u4E00\u7684\u5173\u7CFB\u3002</li></ul></blockquote><blockquote><ul><li>\u6BD4\u5982\u7528nodejs\u505A\u5C0F\u540E\u53F0\uFF08\u8F6C\u53D1\uFF09\uFF0C</li><li>nodejs\u662F\u540E\u53F0\u8BED\u8A00\u4E0D\u662F\u670D\u52A1\u5668\uFF0C\u4F46\u53EF\u4EE5\u5229\u7528nodejs\u505A\u4E2D\u8F6C\u670D\u52A1\uFF0C\u53EF\u6B63\u5411\u4EE3\u7406\u4E5F\u53EF\u53CD\u5411\u4EE3\u7406 ;</li></ul></blockquote><h3 id="\u4EC0\u4E48\u662F\u53CD\u5411\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u53CD\u5411\u4EE3\u7406" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u53CD\u5411\u4EE3\u7406</h3><blockquote><ul><li>\u666E\u901Aweb\u4EE3\u7406\u670D\u52A1\u5668\u4E0D\u652F\u6301\u5916\u90E8\u5BF9\u5185\u90E8\u7F51\u7EDC\u7684\u8BBF\u95EE\u8BF7\u6C42\uFF0C</li><li>\u5F53\u4E00\u4E2A\u4EE3\u7406\u670D\u52A1\u5668\u80FD\u591F\u66FF\u4EE3\u5916\u90E8\u7F51\u7EDC\u7684\u4E3B\u673A\u8BBF\u95EE\u5185\u90E8\u7F51\u7EDC\u65F6\uFF0C\u8FD9\u79CD\u4EE3\u7406\u79F0\u4E3A\u53CD\u5411\u4EE3\u7406\u3002</li><li>\u5373\u53EF\u4EE5\u6307\u5B9A\u4E00\u4E2A\u5730\u5740\u4E3A\u5185\u90E8\u670D\u52A1\u5668\u5730\u5740\u7684\u4EE3\u7406\u3002</li></ul></blockquote><blockquote><ul><li>\u4EE3\u7406\u7AEF\u4EE3\u7406\u7684\u662F\u670D\u52A1\u7AEF\uFF0C\u7AD9\u5728\u670D\u52A1\u7AEF\u8FD9\u8FB9\uFF0C\u4E3A\u670D\u52A1\u7AEF\u8BF4\u8BDD\uFF0C\u5BF9\u5916\u5C4F\u853D\u4E86\u670D\u52A1\u5668\u4FE1\u606F\uFF08\u4FDD\u62A4\u4F5C\u7528\uFF09\uFF1B</li><li>\u5E76\u4E0D\u662F\u5BA2\u6237\u7AEF\u7ED9\u4EC0\u4E48\u5C31\u63D0\u4EA4\u4EC0\u4E48\uFF0C\u4E14\u5BA2\u6237\u7AEF\u5F97\u5230\u4EC0\u4E48\u53D6\u51B3\u4E8E\u5728nginx\u7684\u914D\u7F6E\uFF0C\u4E00\u5BF9\u591A\u7684\u5173\u7CFB\uFF1B</li><li>nginx\u63A5\u53D7\u8BF7\u6C42\u540E\u53BB\u6839\u636E\u914D\u7F6E\u7684\u89C4\u5219\u8F6C\u53D1\u5230\u67D0\u4E2A\u670D\u52A1\u5668\uFF0C\u83B7\u53D6\u76F8\u5E94\u6570\u636E\uFF0C\u7136\u540E\u5C06\u8D44\u6E90\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u3002</li><li>\u5BA2\u6237\u7AEF\u53EF\u4EE5\u4ECE\u4E00\u4E2A\u6216\u591A\u4E2A\u670D\u52A1\u5668\u83B7\u53D6\u8D44\u6E90\uFF08\u53D6\u51B3nginx\u7684\u5177\u4F53\u914D\u7F6E\uFF09\u3002</li><li>\u4EE3\u7406\u7AEF\u5BF9\u5916\u8868\u73B0\u4E3A\u4E00\u4E2Aweb\u670D\u52A1\u5668\u3002</li></ul></blockquote><h3 id="nginx\u5B9E\u73B0\u9AD8\u5E76\u53D1\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#nginx\u5B9E\u73B0\u9AD8\u5E76\u53D1\u539F\u7406" aria-hidden="true">#</a> nginx\u5B9E\u73B0\u9AD8\u5E76\u53D1\u539F\u7406</h3><blockquote><ul><li>\u6BCF\u8FDB\u6765\u4E00\u4E2A request \uFF0C\u4F1A\u6709\u4E00\u4E2A worker \u8FDB\u7A0B\uFF08\u8C03\u5EA6\u8FDB\u7A0B\uFF09\u53BB\u5904\u7406\uFF0C\u4F46\u4E0D\u662F\u5168\u7A0B\u5904\u7406\uFF1B\u5904\u7406\u5230\u53EF\u80FD\u5835\u585E\u7684\u5730\u65B9\u5C31\u6CE8\u518C\u4E00\u4E2A\u4E8B\u4EF6\uFF0C\u5982\u679C\u8FDB\u7A0B\u7A7A\u95F2\u4E86\u5B83\u56DE\u6765\u63A5\u7740\u5904\u7406\u5B8C\u8FD9\u4E2A\u8BF7\u6C42\u3002</li><li>\u5C31\u597D\u50CF\u4E00\u4E2A\u4EBA\u5728\u642C\u8FD0\u4E1C\u897F\uFF0C\u4ECEA\u70B9\uFF08\u5C71\u4E0A\uFF09\u642C\u5230B\u70B9\uFF08\u5C71\u4E0B\uFF09\uFF0C\u518D\u4ECEB\u70B9\u642C\u4E0A\u8F66\uFF1B\u8F66\u6CA1\u6765\u7684\u65F6\u5019\uFF0C\u4ED6\u4F1A\u7EE7\u7EED\u53BBA\u70B9\u642C\u5230B\u70B9\uFF1B\u800C\u4E0D\u662F\u4E00\u76F4\u5728B\u70B9\u7B49\u5F85\u3002</li></ul></blockquote><blockquote><ul><li>\u603B\u7ED3\uFF1A</li><li>nignx\u91C7\u7528\u5355\u7EBF\u7A0B\u6765\u5F02\u6B65\u975E\u963B\u585E\u5904\u7406\u8BF7\u6C42\uFF0C\u4E0D\u4F1A\u4E3A\u6BCF\u4E2A\u8BF7\u6C42\u5206\u914D cpu \u548C\u5185\u5B58\u8D44\u6E90\uFF0C\u8282\u7701\u4E86\u5927\u91CF\u8D44\u6E90\uFF0C\u540C\u65F6\u4E5F\u51CF\u5C11\u4E86\u5927\u91CF\u7684 CPU \u7684\u4E0A\u4E0B\u6587\u5207\u6362\u3002\u6240\u4EE5\u624D\u4F7F\u5F97 Nginx \u652F\u6301\u66F4\u9AD8\u7684\u5E76\u53D1\u3002</li><li>\u548Cnodejs\u5355\u7EBF\u7A0B\u51E0\u4E4E\u4E00\u4E2A\u9053\u7406\uFF08\u4E8B\u4EF6\u9A71\u52A8\uFF0C\u4E8B\u4EF6\u5FAA\u73AF\uFF0C\u7EBF\u7A0B\u6C60\uFF09\u3002</li></ul></blockquote><h3 id="\u7F13\u5B58\u914D\u7F6E-\u52A8\u9759\u5206\u79BB" tabindex="-1"><a class="header-anchor" href="#\u7F13\u5B58\u914D\u7F6E-\u52A8\u9759\u5206\u79BB" aria-hidden="true">#</a> \u7F13\u5B58\u914D\u7F6E \u52A8\u9759\u5206\u79BB</h3><blockquote><p>\u52A8\u6001\u6587\u4EF6\u4E0E\u9759\u6001\u6587\u4EF6\u7684\u5206\u79BB\u3002 \u9759\u6001\u6587\u4EF6\u505A\u7F13\u5B58\u3002\u63D0\u9AD8\u8BBF\u95EE\u901F\u5EA6\u3002<br> \u5982\u679C\u60A8\u5728nginx\u4E2D\u8BBE\u7F6E\u4E86\u9759\u6001\u76EE\u5F55\uFF0C\u90A3\u4E48nginx\u4F1A\u81EA\u52A8\u7F13\u5B58\u9759\u6001\u6587\u4EF6\uFF0C\u65E0\u9700\u518D\u8FDB\u884C\u989D\u5916\u7684\u7F13\u5B58\u914D\u7F6E\u3002<br> nginx\u4F1A\u5C06\u9759\u6001\u6587\u4EF6\u7F13\u5B58\u5230\u5185\u5B58\u4E2D\uFF0C\u5E76\u4E14\u7F13\u5B58\u65F6\u95F4\u4E3A10\u79D2\u3002</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>location ^~ /static <span class="token punctuation">{</span>
    <span class="token comment"># \u5982\u679C\u60A8\u5728Nginx\u4E2D\u8BBE\u7F6E\u4E86\u9759\u6001\u76EE\u5F55\uFF0C\u90A3\u4E48Nginx\u4F1A\u81EA\u52A8\u7F13\u5B58\u9759\u6001\u6587\u4EF6\uFF0C\u65E0\u9700\u518D\u8FDB\u884C\u989D\u5916\u7684\u7F13\u5B58\u914D\u7F6E\u3002</span>
    <span class="token comment"># nginx\u4F1A\u5C06\u9759\u6001\u6587\u4EF6\u7F13\u5B58\u5230\u5185\u5B58\u4E2D\uFF0C\u5E76\u4E14\u7F13\u5B58\u65F6\u95F4\u4E3A10\u79D2</span>
    root <span class="token variable">$frontend_root</span><span class="token punctuation">;</span>


    <span class="token comment"># \u4FEE\u6539\u7F13\u5B58\u914D\u7F6E</span>

    <span class="token comment"># expires\u53C2\u6570\u6307\u5B9A\u7F13\u5B58\u65F6\u95F4\uFF0C\u8FD9\u91CC\u8BBE\u7F6E\u4E3A1\u5929</span>
    expires 1d<span class="token punctuation">;</span> 
    <span class="token comment"># expires 30s; # \u7F13\u5B58\u65F6\u95F4\u4E3A30\u79D2</span>
    <span class="token comment"># expires 30m; # \u7F13\u5B58\u65F6\u95F4\u4E3A30\u5206\u949F</span>
    <span class="token comment"># expires 3h; # \u7F13\u5B58\u65F6\u95F4\u4E3A3\u5C0F\u65F6</span>

    <span class="token comment"># \u8BBE\u7F6E\u4E3Apublic\uFF0C\u8868\u793A\u53EF\u4EE5\u88AB\u4EFB\u4F55\u7F13\u5B58\u670D\u52A1\u5668\u7F13\u5B58</span>
    add_header Cache-Control <span class="token string">&quot;public&quot;</span><span class="token punctuation">;</span>

    <span class="token comment"># \u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5982\u679C\u60A8\u7684\u9759\u6001\u6587\u4EF6\u7ECF\u5E38\u66F4\u65B0\uFF0C\u5EFA\u8BAE\u4E0D\u8981\u8BBE\u7F6E\u8FC7\u957F\u7684\u7F13\u5B58\u65F6\u95F4\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u5BFC\u81F4\u5BA2\u6237\u7AEF\u65E0\u6CD5\u83B7\u53D6\u6700\u65B0\u7684\u6587\u4EF6\u3002</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="\u8D1F\u8F7D\u5747\u8861\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u8D1F\u8F7D\u5747\u8861\u914D\u7F6E" aria-hidden="true">#</a> \u8D1F\u8F7D\u5747\u8861\u914D\u7F6E</h3><p>\u8D1F\u8F7D\u5747\u8861\u5B9E\u73B0\u7684\u7B56\u7565\u6709\u4EE5\u4E0B\u5E38\u89C43\u79CD\uFF0C2\u79CD\u63D2\u4EF6\uFF1A</p><blockquote><ul><li><ol><li>\u8F6E\u8BE2(\u9ED8\u8BA4)\uFF1A\u6BCF\u4E2A\u8BF7\u6C42\u6309\u65F6\u95F4\u987A\u5E8F\u9010\u4E00\u5206\u914D\u5230\u4E0D\u540C\u7684\u540E\u7AEF\u670D\u52A1\u5668\uFF0C\u5982\u679C\u540E\u7AEF\u67D0\u4E2A\u670D\u52A1\u5668\u5B95\u673A\uFF0C\u80FD\u81EA\u52A8\u5254\u9664\u6545\u969C\u7CFB\u7EDF\u3002</li></ol></li></ul></blockquote><details class="custom-container details"><summary>\u4EE3\u7801\u793A\u4F8B</summary><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>upstream backserver <span class="token punctuation">{</span> 
 server <span class="token number">192.168</span>.0.12<span class="token punctuation">;</span> 
 server <span class="token number">192.168</span>.0.13<span class="token punctuation">;</span> 
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></details><blockquote><ul><li><ol start="2"><li>\u6743\u91CD weight\uFF1Aweight\u7684\u503C\u8D8A\u5927\uFF0C\u5206\u914D\u5230\u7684\u8BBF\u95EE\u6982\u7387\u8D8A\u9AD8</li></ol></li></ul></blockquote><details class="custom-container details"><summary>\u4EE3\u7801\u793A\u4F8B</summary><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6743\u91CD\u8D8A\u9AD8\uFF0C\u5728\u88AB\u8BBF\u95EE\u7684\u6982\u7387\u8D8A\u5927\uFF0C\u5982\u4E0B\uFF0C\u5206\u522B\u662F20%\uFF0C80%\u3002</span>
upstream backserver <span class="token punctuation">{</span> 
 server <span class="token number">192.168</span>.0.12 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span> 
 server <span class="token number">192.168</span>.0.13 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">8</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></details><blockquote><ul><li><ol start="3"><li>ip_hash( IP\u7ED1\u5B9A)\uFF1A\u6BCF\u4E2A\u8BF7\u6C42\u6309\u8BBF\u95EEIP\u7684\u54C8\u5E0C\u7ED3\u679C\u5206\u914D</li></ol></li></ul></blockquote><details class="custom-container details"><summary>\u4EE3\u7801\u793A\u4F8B</summary><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ip_hash<span class="token punctuation">;</span> 
 server <span class="token number">192.168</span>.0.12:88<span class="token punctuation">;</span> 
 server <span class="token number">192.168</span>.0.13:80<span class="token punctuation">;</span> 
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></details><blockquote><ul><li><ol start="4"><li>fair(\u7B2C\u4E09\u65B9\u63D2\u4EF6)<br> \u5FC5\u987B\u5B89\u88C5upstream_fair\u6A21\u5757\u3002<br> \u5BF9\u6BD4 weight\u3001ip_hash\u66F4\u52A0\u667A\u80FD\u7684\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5\uFF0Cfair\u7B97\u6CD5\u53EF\u4EE5\u6839\u636E\u9875\u9762\u5927\u5C0F\u548C\u52A0\u8F7D\u65F6\u95F4\u957F\u77ED\u667A\u80FD\u5730\u8FDB\u884C\u8D1F\u8F7D\u5747\u8861\uFF0C\u54CD\u5E94\u65F6\u95F4\u77ED\u7684\u4F18\u5148\u5206\u914D\u3002</li></ol></li></ul></blockquote><details class="custom-container details"><summary>\u4EE3\u7801\u793A\u4F8B</summary><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u54EA\u4E2A\u670D\u52A1\u5668\u7684\u54CD\u5E94\u901F\u5EA6\u5FEB\uFF0C\u5C31\u5C06\u8BF7\u6C42\u5206\u914D\u5230\u90A3\u4E2A\u670D\u52A1\u5668\u4E0A\u3002</span>
upstream backserver <span class="token punctuation">{</span> 
 server server1<span class="token punctuation">;</span> 
 server server2<span class="token punctuation">;</span> 
 fair<span class="token punctuation">;</span> 
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></details><blockquote><ul><li><ol start="5"><li>url_hash(\u7B2C\u4E09\u65B9\u63D2\u4EF6)<br> \u5BF9\u6807\u4E0A\u9762\u7684ip_hash \uFF0C \u5FC5\u987B\u5B89\u88C5Nginx\u7684hash\u8F6F\u4EF6\u5305 \u3002<br> \u6309\u8BBF\u95EEurl\u7684hash\u7ED3\u679C\u6765\u5206\u914D\u8BF7\u6C42\uFF0C\u4F7F\u6BCF\u4E2Aurl\u5B9A\u5411\u5230\u540C\u4E00\u4E2A\u540E\u7AEF\u670D\u52A1\u5668\uFF0C\u53EF\u4EE5\u8FDB\u4E00\u6B65\u63D0\u9AD8\u540E\u7AEF\u7F13\u5B58\u670D\u52A1\u5668\u7684\u6548\u7387\u3002</li></ol></li></ul></blockquote><details class="custom-container details"><summary>\u4EE3\u7801\u793A\u4F8B</summary><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>upstream backserver <span class="token punctuation">{</span> 
 server squid1:3128<span class="token punctuation">;</span> 
 server squid2:3128<span class="token punctuation">;</span> 
 <span class="token builtin class-name">hash</span> <span class="token variable">$request_uri</span><span class="token punctuation">;</span> 
 hash_method crc32<span class="token punctuation">;</span> 
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></details><h3 id="\u5185\u7F6E\u7684\u5168\u5C40\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F6E\u7684\u5168\u5C40\u53D8\u91CF" aria-hidden="true">#</a> \u5185\u7F6E\u7684\u5168\u5C40\u53D8\u91CF</h3><p>ingnx\u6709\u5185\u7F6E\u7684\u5168\u5C40\u53D8\u91CF\uFF0C\u914D\u7F6E\u6587\u4EF6\u53EF\u76F4\u63A5\u7528</p><blockquote><ul><li>$args\uFF1A #\u8FD9\u4E2A\u53D8\u91CF\u7B49\u4E8E\u8BF7\u6C42\u884C\u4E2D\u7684\u53C2\u6570\uFF0C\u540C$query_string</li><li>$content_length\uFF1A \u8BF7\u6C42\u5934\u4E2D\u7684Content-length\u5B57\u6BB5\u3002</li><li>$content_type\uFF1A \u8BF7\u6C42\u5934\u4E2D\u7684Content-Type\u5B57\u6BB5\u3002</li><li>$document_root\uFF1A \u5F53\u524D\u8BF7\u6C42\u5728root\u6307\u4EE4\u4E2D\u6307\u5B9A\u7684\u503C\u3002</li><li>$host\uFF1A \u8BF7\u6C42\u4E3B\u673A\u5934\u5B57\u6BB5\uFF0C\u5426\u5219\u4E3A\u670D\u52A1\u5668\u540D\u79F0\u3002</li><li>$http_user_agent\uFF1A \u5BA2\u6237\u7AEFagent\u4FE1\u606F</li><li>$http_cookie\uFF1A \u5BA2\u6237\u7AEFcookie\u4FE1\u606F</li><li>$limit_rate\uFF1A \u8FD9\u4E2A\u53D8\u91CF\u53EF\u4EE5\u9650\u5236\u8FDE\u63A5\u901F\u7387\u3002</li><li>$request_method\uFF1A \u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u52A8\u4F5C\uFF0C\u901A\u5E38\u4E3AGET\u6216POST\u3002</li><li>$remote_addr\uFF1A \u5BA2\u6237\u7AEF\u7684IP\u5730\u5740\u3002</li><li>$remote_port\uFF1A \u5BA2\u6237\u7AEF\u7684\u7AEF\u53E3\u3002</li><li>$remote_user\uFF1A \u5DF2\u7ECF\u7ECF\u8FC7Auth Basic Module\u9A8C\u8BC1\u7684\u7528\u6237\u540D\u3002</li><li>$request_filename\uFF1A \u5F53\u524D\u8BF7\u6C42\u7684\u6587\u4EF6\u8DEF\u5F84\uFF0C\u7531root\u6216alias\u6307\u4EE4\u4E0EURI\u8BF7\u6C42\u751F\u6210\u3002</li><li>$scheme\uFF1A HTTP\u534F\u8BAE\uFF08\u5982http\uFF0Chttps\uFF09\u3002</li><li>$server_protocol\uFF1A \u8BF7\u6C42\u4F7F\u7528\u7684\u534F\u8BAE\uFF0C\u901A\u5E38\u662FHTTP/1.0\u6216HTTP/1.1\u3002</li><li>$server_addr\uFF1A \u670D\u52A1\u5668\u5730\u5740\uFF0C\u5728\u5B8C\u6210\u4E00\u6B21\u7CFB\u7EDF\u8C03\u7528\u540E\u53EF\u4EE5\u786E\u5B9A\u8FD9\u4E2A\u503C\u3002</li><li>$server_name\uFF1A \u670D\u52A1\u5668\u540D\u79F0\u3002</li><li>$server_port\uFF1A \u8BF7\u6C42\u5230\u8FBE\u670D\u52A1\u5668\u7684\u7AEF\u53E3\u53F7\u3002</li><li>$request_uri\uFF1A \u5305\u542B\u8BF7\u6C42\u53C2\u6570\u7684\u539F\u59CBURI\uFF0C\u4E0D\u5305\u542B\u4E3B\u673A\u540D\uFF0C\u5982\uFF1A\u201D/foo/bar.php?arg=baz\u201D\u3002</li><li>$uri\uFF1A \u4E0D\u5E26\u8BF7\u6C42\u53C2\u6570\u7684\u5F53\u524DURI\uFF0C$uri\u4E0D\u5305\u542B\u4E3B\u673A\u540D\uFF0C\u5982\u201D/foo/bar.html\u201D\u3002</li><li>$document_uri\uFF1A \u4E0E$uri\u76F8\u540C\u3002</li></ul></blockquote>`,33))}var t=s(e,[["render",l],["__file","nginx\u8FDB\u9636.html.vue"]]);export{t as default};
