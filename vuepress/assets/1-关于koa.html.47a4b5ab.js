import{_ as s,p as a}from"./app.e6691f45.js";const p={};function t(e,n){return n[0]||(n[0]=a(`<h3 id="_1-koa-\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_1-koa-\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 1. koa \u662F\u4EC0\u4E48\uFF1F</h3><blockquote><ul><li>koa \u662F\u57FA\u4E8ENode.js\u5E73\u53F0\u7684web\u5F00\u53D1\u6846\u67B6\u3002</li><li>\u7C7B\u4F3C\u4E8E Django \u662F\u4E00\u4E2A\u5F00\u653E\u6E90\u4EE3\u7801\u7684 Web \u5E94\u7528\u6846\u67B6\uFF0C\u7531 Python \u5199\u6210\u3002\u53EF\u4F5C\u4E3APython\u7684web\u5E94\u7528\u6846\u67B6\u3002</li><li>\u6BCF\u95E8\u540E\u53F0\u8BED\u8A00\u90FD\u6709\u5BF9\u7684\u76F8\u5173web\u6846\u67B6\u3002</li></ul></blockquote><h3 id="_2-koa-\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#_2-koa-\u7279\u70B9" aria-hidden="true">#</a> 2. koa \u7279\u70B9</h3><blockquote><ul><li><ol><li>Koa \u662F\u4E00\u4E2A\u65B0\u7684 web \u6846\u67B6\uFF0C\u7531 Express \u5E55\u540E\u7684\u539F\u73ED\u4EBA\u9A6C\u6253\u9020\u3002</li></ol></li><li><ol start="2"><li>\u901A\u8FC7\u5229\u7528 async \u51FD\u6570\uFF0CKoa \u5E2E\u4F60\u4E22\u5F03\u56DE\u8C03\u51FD\u6570\uFF0C\u5E76\u6709\u529B\u5730\u589E\u5F3A\u9519\u8BEF\u5904\u7406\u3002</li></ol></li><li><ol start="3"><li>Koa \u5F88\u5C0F\u7684\u4F53\u79EF\uFF0C\u5E76\u6CA1\u6709\u6346\u7ED1\u4EFB\u4F55\u4E2D\u95F4\u4EF6\u3002</li></ol></li><li><ol start="4"><li>\u63D0\u4F9B\u7684\u65B9\u6CD5\u6709\u5982\uFF1A\u5185\u5BB9\u534F\u5546\uFF0C\u7F13\u5B58\u6E05\u7406\uFF0C\u4EE3\u7406\u652F\u6301\u548C\u91CD\u5B9A\u5411\u7B49\u5E38\u89C1\u4EFB\u52A1\u7684\u65B9\u6CD5\u3002</li></ol></li></ul></blockquote><h3 id="_3-\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_3-\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> 3. \u57FA\u672C\u4F7F\u7528</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8F93\u51FAhello world</span>
<span class="token keyword">const</span> Koa <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Koa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u8DE8\u57DF\u8BF7\u6C42\u5904\u7406\u4E2D\u95F4\u4EF6  </span>
<span class="token comment">// app.use(async (ctx, next) =&gt; {</span>
<span class="token comment">//     if (ctx.path === &#39;/number&#39;) {</span>

<span class="token comment">//         // \u8BBE\u7F6E\u5141\u8BB8\u8DE8\u57DF\u8BBF\u95EE\u7684\u57DF\u540D\uFF0C&#39;*&#39; \u8868\u793A\u5141\u8BB8\u6240\u6709\u57DF\u540D  </span>
<span class="token comment">//         ctx.set(&#39;Access-Control-Allow-Origin&#39;, &#39;*&#39;);</span>

<span class="token comment">//         // \u8BBE\u7F6E\u5141\u8BB8\u8DE8\u57DF\u8BF7\u6C42\u7684\u65B9\u6CD5\uFF0C\u4F8B\u5982 GET\u3001POST \u7B49  </span>
<span class="token comment">//         ctx.set(&#39;Access-Control-Allow-Methods&#39;, &#39;GET, POST, PUT, DELETE, OPTIONS&#39;);</span>

<span class="token comment">//         // \u8BBE\u7F6E\u5141\u8BB8\u8DE8\u57DF\u8BF7\u6C42\u7684\u5934\u4FE1\u606F  </span>
<span class="token comment">//         ctx.set(&#39;Access-Control-Allow-Headers&#39;, &#39;Content-Type, Authorization&#39;);</span>

<span class="token comment">//         // \u8BBE\u7F6E\u9884\u68C0\u8BF7\u6C42\u7684\u7F13\u5B58\u65F6\u95F4\uFF08\u53EF\u9009\uFF09  </span>
<span class="token comment">//         ctx.set(&#39;Access-Control-Max-Age&#39;, 86400);</span>

<span class="token comment">//         // \u5982\u679C\u8BF7\u6C42\u65B9\u6CD5\u662F OPTIONS\uFF0C\u76F4\u63A5\u8FD4\u56DE\u72B6\u6001\u7801 200  </span>
<span class="token comment">//         if (ctx.request.method === &#39;OPTIONS&#39;) {</span>
<span class="token comment">//             ctx.response.status = 200;</span>
<span class="token comment">//             return;</span>
<span class="token comment">//         }</span>
<span class="token comment">//     }</span>
<span class="token comment">//     else {</span>
<span class="token comment">//         // \u7EE7\u7EED\u5904\u7406\u4E0B\u4E00\u4E2A\u4E2D\u95F4\u4EF6\u6216\u8DEF\u7531  </span>
<span class="token comment">//         await next();</span>
<span class="token comment">//     }</span>
<span class="token comment">// });</span>



<span class="token comment">// \u4E5F\u53EF\u4EE5\u4F7F\u7528\u8DE8\u57DF\u4E2D\u95F4\u4EF6 cors</span>

<span class="token comment">// const cors = require(&#39;@koa/cors&#39;);  </span>
<span class="token comment">// // \u542F\u7528 CORS \u4E2D\u95F4\u4EF6  </span>
<span class="token comment">// app.use(cors({  </span>
<span class="token comment">//   origin: &#39;*&#39;, // \u5141\u8BB8\u6240\u6709\u6765\u6E90\u7684\u8DE8\u57DF\u8BF7\u6C42\uFF0C\u751F\u4EA7\u73AF\u5883\u4E2D\u5EFA\u8BAE\u8BBE\u7F6E\u5177\u4F53\u7684\u6765\u6E90  </span>
<span class="token comment">//   allowMethods: [&#39;GET&#39;, &#39;POST&#39;, &#39;PUT&#39;, &#39;DELETE&#39;, &#39;OPTIONS&#39;], // \u5141\u8BB8\u7684\u65B9\u6CD5  </span>
<span class="token comment">//   allowHeaders: [&#39;Content-Type&#39;, &#39;Authorization&#39;, &#39;Accept&#39;], // \u5141\u8BB8\u7684\u8BF7\u6C42\u5934  </span>
<span class="token comment">// }));  </span>
 
<span class="token comment">// // \u793A\u4F8B\u8DEF\u7531  </span>
<span class="token comment">// app.use(async ctx =&gt; {  </span>
<span class="token comment">//   if (ctx.path === &#39;/api/data&#39;) {  </span>
<span class="token comment">//     ctx.body = { message: &#39;Hello, world!&#39; };  </span>
<span class="token comment">//   } else {  </span>
<span class="token comment">//     ctx.status = 404;  </span>
<span class="token comment">//     ctx.body = &#39;Not Found&#39;;  </span>
<span class="token comment">//   }  </span>
<span class="token comment">// });  </span>



<span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684 CORS \u4E2D\u95F4\u4EF6  </span>

<span class="token comment">// const conditionalCors = async (ctx, next) =&gt; {  </span>
<span class="token comment">//   // \u68C0\u67E5\u8BF7\u6C42\u7684 URL \u6216\u8DEF\u5F84  </span>
<span class="token comment">//   if (ctx.path === &#39;/api/allow-cors&#39;) {  </span>
<span class="token comment">//     // \u4F7F\u7528 @koa/cors \u4E2D\u95F4\u4EF6\u4E3A\u7279\u5B9A\u8DEF\u5F84\u8BBE\u7F6E CORS  </span>
<span class="token comment">//     await cors({  </span>
<span class="token comment">//       origin: &#39;*&#39;, // \u6216\u8005\u8BBE\u7F6E\u4E3A\u7279\u5B9A\u7684\u57DF\u540D  </span>
<span class="token comment">//       allowMethods: [&#39;GET&#39;, &#39;POST&#39;, &#39;PUT&#39;, &#39;DELETE&#39;, &#39;OPTIONS&#39;],  </span>
<span class="token comment">//       allowHeaders: [&#39;Content-Type&#39;, &#39;Authorization&#39;, &#39;Accept&#39;],  </span>
<span class="token comment">//     })(ctx, next);  </span>
<span class="token comment">//   } else {  </span>
<span class="token comment">//     // \u5BF9\u4E8E\u5176\u4ED6\u8DEF\u5F84\uFF0C\u76F4\u63A5\u8C03\u7528 next() \u4EE5\u8DF3\u8FC7 CORS \u5904\u7406  </span>
<span class="token comment">//     await next();  </span>
<span class="token comment">//   }  </span>
<span class="token comment">// };  </span>
<span class="token comment">// // \u4F7F\u7528\u81EA\u5B9A\u4E49\u7684 CORS \u4E2D\u95F4\u4EF6  </span>
<span class="token comment">// app.use(conditionalCors);  </span>


app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token parameter">ctx</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br></div></div><h3 id="_4-await-next-\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_4-await-next-\u7684\u4F7F\u7528" aria-hidden="true">#</a> 4. await next()\u7684\u4F7F\u7528</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> Koa <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Koa</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">mid1</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    ctx<span class="token punctuation">.</span>body <span class="token operator">=</span>  <span class="token string">&#39;\u524D\uFF1A&#39;</span> <span class="token operator">+</span> <span class="token string">&#39;1\\n&#39;</span>
    <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    ctx<span class="token punctuation">.</span>body <span class="token operator">=</span>   ctx<span class="token punctuation">.</span>body <span class="token operator">+</span> <span class="token string">&#39;\u540E\uFF1A&#39;</span> <span class="token operator">+</span> <span class="token string">&#39;1\\n&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">mid2</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    ctx<span class="token punctuation">.</span>body <span class="token operator">=</span>    ctx<span class="token punctuation">.</span>body <span class="token operator">+</span> <span class="token string">&#39;\u524D\uFF1A&#39;</span><span class="token operator">+</span> <span class="token string">&#39;2\\n&#39;</span>
    <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    ctx<span class="token punctuation">.</span>body <span class="token operator">=</span>    ctx<span class="token punctuation">.</span>body <span class="token operator">+</span> <span class="token string">&#39;\u540E\uFF1A&#39;</span><span class="token operator">+</span> <span class="token string">&#39;2\\n&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">mid3</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    ctx<span class="token punctuation">.</span>body <span class="token operator">=</span>  ctx<span class="token punctuation">.</span>body <span class="token operator">+</span> <span class="token string">&#39;\u524D\uFF1A&#39;</span><span class="token operator">+</span>  <span class="token string">&#39;3\\n&#39;</span>
    <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    ctx<span class="token punctuation">.</span>body <span class="token operator">=</span>   ctx<span class="token punctuation">.</span>body <span class="token operator">+</span> <span class="token string">&#39;\u540E\uFF1A&#39;</span><span class="token operator">+</span> <span class="token string">&#39;3\\n&#39;</span>
<span class="token punctuation">}</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>mid1<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>mid2<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>mid3<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>

<span class="token comment">// \u8F93\u51FA</span>
\u524D<span class="token number">1</span>
\u524D<span class="token number">2</span>
\u524D<span class="token number">3</span>
\u540E<span class="token number">3</span>
\u540E<span class="token number">2</span>
\u540E<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h3 id="_5-\u7B80\u5355\u5E94\u7528-\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#_5-\u7B80\u5355\u5E94\u7528-\u8DEF\u7531" aria-hidden="true">#</a> 5. \u7B80\u5355\u5E94\u7528-\u8DEF\u7531</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> Koa <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> koaStatic <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa-static&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> koaBody <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa-body&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> Router <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa-router&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Koa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">koaBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">// \u6216\u8005 app.use(koaBody.koaBody());</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">koaStatic</span><span class="token punctuation">(</span><span class="token string">&#39;./www&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u9759\u6001\u8D44\u6E90\u6587\u4EF6\u5939</span>

<span class="token comment">// \u8DEF\u7531\u670D\u52A1</span>
<span class="token keyword">let</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/test</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> param <span class="token operator">=</span> util<span class="token punctuation">.</span><span class="token function">getUrlParam</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;\u8BF7\u6C42\u6210\u529F\uFF01&#39;</span> <span class="token punctuation">}</span>
    <span class="token comment">// await next();</span>
    <span class="token keyword">await</span> <span class="token function">someFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    ctx<span class="token punctuation">.</span>response<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span>response<span class="token punctuation">.</span>body <span class="token operator">=</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8C03\u7528\u8DEF\u7531</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">.</span><span class="token function">routes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">.</span><span class="token function">allowedMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8888</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u542F\u52A8\u670D\u52A1: http://localhost:&#39;</span> <span class="token operator">+</span> <span class="token number">8888</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="_6-\u5E38\u7528" tabindex="-1"><a class="header-anchor" href="#_6-\u5E38\u7528" aria-hidden="true">#</a> 6. \u5E38\u7528</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// http.createServer(app.callback()).listen(3000);</span>
<span class="token comment">// https.createServer(app.callback()).listen(3001);</span>
app<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,12))}var c=s(p,[["render",t],["__file","1-\u5173\u4E8Ekoa.html.vue"]]);export{c as default};
