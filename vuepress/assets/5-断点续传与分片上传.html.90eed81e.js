import{_ as l,k as t,o as r,c,a as s,b as a,l as p,m as u,p as i,F as k}from"./app.e6691f45.js";const b={},m={href:"http://fex.baidu.com/webuploader/getting-started.html",target:"_blank",rel:"noopener noreferrer"},d={href:"http://fex.baidu.com/webuploader/",target:"_blank",rel:"noopener noreferrer"};function f(w,n){const o=t("RouterLink"),e=t("ExternalLinkIcon");return r(),c(k,null,[n[10]||(n[10]=s("h1",{id:"\u65AD\u70B9\u7EED\u4F20",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u65AD\u70B9\u7EED\u4F20","aria-hidden":"true"},"#"),a(" \u65AD\u70B9\u7EED\u4F20")],-1)),n[11]||(n[11]=s("p",null,"\u4E3B\u8981\u539F\u7406\uFF1A",-1)),s("ul",null,[n[2]||(n[2]=s("li",null,[a("\u5BA2\u6237\u7AEF\u8BF7\u6C42\u5934 "),s("code",null,"Range"),a(" \uFF1A\u544A\u8BC9\u670D\u52A1\u7AEF\u4ECE\u54EA\u91CC\u5F00\u59CB\u4E0B\u8F7D/\u4E0A\u4F20")],-1)),n[3]||(n[3]=s("li",null,[a("\u670D\u52A1\u7AEF\u54CD\u5E94\u5934 "),s("code",null,"Content-Range \u3001 Content-Length"),a(" \uFF1A\u8FD4\u56DE\u4ECE\u54EA\u91CC\u5F00\u59CB\u63A5\u6536/\u8FD4\u56DE\u3001\u603B\u5927\u5C0F")],-1)),s("li",null,[n[1]||(n[1]=a("\u53EF\u81EA\u884C\u7EC4\u88C5blob \u518D\u8FDB\u884C\u4E0B\u8F7D\u3002 ")),p(o,{to:"/zh/%E5%85%B6%E4%BB%96/%E7%AE%80%E5%8D%95%E5%B0%81%E8%A3%85/%E7%AE%80%E5%8D%95%E5%B8%B8%E7%94%A8.html#axios"},{default:u(()=>n[0]||(n[0]=[a("\u53EF\u53C2\u8003Axios\u4E0B\u8F7D")])),_:1})])]),n[12]||(n[12]=s("h1",{id:"\u5206\u7247\u4E0A\u4F20\u4E0E\u5408\u5E76",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5206\u7247\u4E0A\u4F20\u4E0E\u5408\u5E76","aria-hidden":"true"},"#"),a(" \u5206\u7247\u4E0A\u4F20\u4E0E\u5408\u5E76")],-1)),n[13]||(n[13]=s("blockquote",null,[s("p",null,"\u5728\u5BA2\u6237\u7AEF\u5C06\u6574\u4E2A\u6587\u4EF6\u5206\u9694\u6210\u591A\u4E2A\u6570\u636E\u5757\u6765\u8FDB\u884C\u5206\u522B\u4E0A\u4F20\uFF0C\u4E0A\u4F20\u5B8C\u4E4B\u540E\u518D\u7531\u670D\u52A1\u7AEF\u5BF9\u6240\u6709\u4E0A\u4F20\u7684\u6587\u4EF6\u8FDB\u884C\u6C47\u603B\u6574\u5408\u6210\u539F\u59CB\u7684\u6587\u4EF6\u3002")],-1)),s("ul",null,[n[8]||(n[8]=s("li",null,"\u524D\u7AEF\u81EA\u884C\u5206\u7247\u539F\u751F\u6587\u4EF6API\uFF1A file.slice(start,end) \u8FDB\u884C\u5207\u7247",-1)),s("li",null,[n[6]||(n[6]=a("\u524D\u7AEF\u5206\u7247\u63D2\u4EF6\uFF1A")),s("a",m,[n[4]||(n[4]=a("\u767E\u5EA6 webuploader")),p(e)]),n[7]||(n[7]=a()),s("a",d,[n[5]||(n[5]=a("\u9996\u9875")),p(e)])]),n[9]||(n[9]=s("li",null,"\u540E\u7AEF\u5408\u5E76\u4E0E\u5199\u5165\uFF1A\u4E24\u79CD\u5DE5\u5177\uFF1ARandomAccessFile\u3001MappedByteBuffer",-1))]),n[14]||(n[14]=i(`<p>\u524D\u7AEF\u5207\u7247\u5C01\u88C5\u793A\u4F8B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5F88\u597D\u89E3\u91CA\u4E86 generator\uFF08\u4E0D\u4F1A\u7ACB\u5373\u6267\u884C\uFF0C\u53EF\u5FAA\u73AF\u81EA\u52A8\u6267\u884C\uFF09\uFF0Cyield\uFF08\u6682\u505C\u6267\u884C \u4EA4\u51FA\u6267\u884C\u6743\uFF0C\u7B49\u5F85\u7ED3\u679C\u8FD4\u56DE\uFF09</span>



<span class="token keyword">const</span> <span class="token constant">MB</span><span class="token operator">=</span><span class="token number">1024</span><span class="token operator">*</span><span class="token number">1024</span><span class="token punctuation">;</span>

<span class="token comment">// \u5207\u7247\u65B9\u6CD5</span>
<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">slice</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> start<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// \u8FD9\u91CC\u89C4\u5B9A\u6BCF\u72471MB\uFF0C\u6700\u540E\u4E00\u7247\u5C0F\u4E8E1MB</span>
        <span class="token keyword">const</span> end<span class="token operator">=</span>start<span class="token operator">+</span><span class="token constant">MB</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> blob<span class="token operator">=</span>file<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span>end<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>blod<span class="token punctuation">.</span>size<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// \u8DF3\u51FA\u5FAA\u73AF\u4F53</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">yield</span> <span class="token punctuation">{</span><span class="token literal-property property">chunk</span><span class="token operator">:</span><span class="token operator">++</span>i<span class="token punctuation">,</span>blob<span class="token punctuation">}</span>
        start<span class="token operator">=</span>end<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// generator\u51FD\u6570\u8FD4\u56DE\u7684\u662Fgenerator\u5BF9\u8C61\uFF0C \u6EE1\u8DB3\u8FED\u4EE3\u5668\u534F\u8BAE\uFF0C\u53EF\u4EE5\u4F7F\u7528 for of \u8FDB\u884C\u904D\u5386\u3002\u4E0D\u9700\u8981.next()</span>
<span class="token comment">// \u6240\u4EE5 slicer \u4E2D \u5176\u5B9E\u5305\u542B\u6240\u6709\u7684 { chunk, blob } \u5207\u7247\u4FE1\u606F\u3002</span>
<span class="token keyword">let</span> slicer<span class="token operator">=</span><span class="token function">slice</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">const</span> slice <span class="token keyword">of</span> slicer<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// slice \u5305\u542B\u8FD4\u56DE\u7684{chunk,blob}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div>`,2))],64)}var g=l(b,[["render",f],["__file","5-\u65AD\u70B9\u7EED\u4F20\u4E0E\u5206\u7247\u4E0A\u4F20.html.vue"]]);export{g as default};
