import{_ as s,p as a}from"./app.e6691f45.js";const p={};function t(e,n){return n[0]||(n[0]=a(`<h3 id="\u52A8\u6001\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u8DEF\u7531" aria-hidden="true">#</a> \u52A8\u6001\u8DEF\u7531</h3><ul><li>\u52A8\u6001\u8DEF\u7531\u662F\u6307\u8DEF\u7531\u5668\u80FD\u591F\u81EA\u52A8\u7684\u5EFA\u7ACB\u81EA\u5DF1\u7684\u8DEF\u7531\u8868\uFF0C\u80FD\u591F\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u7684\u53D8\u5316\u5B9E\u65F6\u5730\u8FDB\u884C\u8C03\u6574\u3002</li><li>\u52A8\u6001\u8DEF\u7531\u5339\u914D\u672C\u8D28\u4E0A\u5C31\u662F\u901A\u8FC7url\u8FDB\u884C\u4F20\u53C2\u3002</li></ul><p>\u6BD4\u5982\u5728\u5199\u4E00\u4E2A\u5546\u54C1\u8BE6\u60C5\u9875\u9762\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u7684\u9875\u9762\u7ED3\u6784\u90FD\u4E00\u6837\uFF0C\u53EA\u662F\u6E32\u67D3\u7684\u6570\u636E\u4E0D\u540C\u800C\u5DF2\uFF0C\u8FD9\u65F6\u5019\u5C31\u53EF\u4EE5\u6839\u636E\u5546\u54C1\u7684\u4E0D\u540Cid\u53BB\u8BBE\u7F6E\u52A8\u6001\u8DEF\u7531\uFF0C\u53EA\u9700\u8981\u5199\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u5C31\u53EF\u4EE5\u628A\u6BCF\u4E2A\u5546\u54C1\u7684\u5546\u54C1\u8BE6\u60C5\u6620\u5C04\u5230\u540C\u4E00\u4E2A\u7EC4\u4EF6\u4E0A\u53BB\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token punctuation">{</span> 
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/Jqxq/:id&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u8DEF\u7531\u914D\u7F6E\u62FC\u63A5</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Jqxq&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> Jqxq
    <span class="token punctuation">}</span>
    <span class="token comment">// \u8DF3\u8F6C this.$router.push(&#39;/Jqxq/&#39;+ item.id)</span>
    <span class="token comment">// \u63A5\u6536  \uFF1A this.$route.params.id</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u600E\u4E48\u5B9A\u4E49-vue-router-\u7684\u52A8\u6001\u8DEF\u7531-\u600E\u4E48\u83B7\u53D6\u4F20\u8FC7\u6765\u7684\u503C" tabindex="-1"><a class="header-anchor" href="#\u600E\u4E48\u5B9A\u4E49-vue-router-\u7684\u52A8\u6001\u8DEF\u7531-\u600E\u4E48\u83B7\u53D6\u4F20\u8FC7\u6765\u7684\u503C" aria-hidden="true">#</a> \u600E\u4E48\u5B9A\u4E49 vue-router \u7684\u52A8\u6001\u8DEF\u7531? \u600E\u4E48\u83B7\u53D6\u4F20\u8FC7\u6765\u7684\u503C</h3><ul><li>\u5728 router \u76EE\u5F55\u4E0B\u7684 index.js \u6587\u4EF6\u4E2D\uFF0C\u5BF9 path \u5C5E\u6027\u52A0\u4E0A /:id\uFF0C\u4F7F\u7528 route \u5BF9\u8C61\u7684 params.id \u83B7\u53D6</li></ul><h3 id="\u52A8\u6001\u6DFB\u52A0\u8DEF\u7531-router-addroutes-routes" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u6DFB\u52A0\u8DEF\u7531-router-addroutes-routes" aria-hidden="true">#</a> \u52A8\u6001\u6DFB\u52A0\u8DEF\u7531 <code>router.addRoutes(routes)</code></h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// router.addRoutes(routes) </span>

<span class="token comment">//\u63D2\u5165\u8DEF\u7531</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span>options<span class="token punctuation">.</span>routes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>                        
   <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span>
   <span class="token comment">//\u5C06\u7EC4\u4EF6\u7528require\u5F15\u8FDB\u6765</span>
   <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;../template/list.vue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> resolve<span class="token punctuation">)</span>  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//\u8C03\u7528addRoutes\u6DFB\u52A0\u8DEF\u7531</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">addRoutes</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span>options<span class="token punctuation">.</span>routes<span class="token punctuation">)</span><span class="token punctuation">;</span>                  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="\u5F02\u6B65\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u8DEF\u7531" aria-hidden="true">#</a> \u5F02\u6B65\u8DEF\u7531</h3><p>\u5F02\u6B65\u8DEF\u7531\u662F\u4E00\u79CD\u7528\u4E8E\u5EF6\u8FDF\u52A0\u8F7D\u8DEF\u7531\u7EC4\u4EF6\u7684\u65B9\u6CD5\u3002</p><ul><li>\u901A\u8FC7\u5F02\u6B65\u8DEF\u7531\uFF0C\u53EA\u6709\u5F53\u8DEF\u7531\u88AB\u8BBF\u95EE\u65F6\uFF0C\u76F8\u5173\u7684\u7EC4\u4EF6\u624D\u4F1A\u88AB\u52A0\u8F7D\uFF0C\u4ECE\u800C\u51CF\u5C11\u521D\u59CB\u52A0\u8F7D\u65F6\u95F4\uFF0C\u63D0\u9AD8\u5E94\u7528\u7684\u6027\u80FD\u548C\u54CD\u5E94\u901F\u5EA6\u3002</li><li>\u5F02\u6B65\u8DEF\u7531\u8FD8\u53EF\u4EE5\u5C06\u5E94\u7528\u62C6\u5206\u6210\u66F4\u5C0F\u7684\u6A21\u5757\uFF0C\u4FBF\u4E8E\u7EF4\u62A4\u548C\u4F18\u5316\u3002</li><li>\u5728Vue\u8DEF\u7531\u914D\u7F6E\u4E2D\uFF0C\u53EF\u4EE5\u4E3A\u6BCF\u4E2A\u8DEF\u7531\u5B9A\u4E49\u4E00\u4E2A\u5F02\u6B65\u7EC4\u4EF6\uFF0C\u8FD9\u4E2A\u5F02\u6B65\u7EC4\u4EF6\u53EF\u4EE5\u662F\u4E00\u4E2A\u8FD4\u56DEPromise\u7684\u51FD\u6570\uFF0C\u6216\u8005\u662F\u4E00\u4E2A\u4F7F\u7528import()\u51FD\u6570\u52A8\u6001\u5BFC\u5165\u7684\u6A21\u5757\u3002</li></ul><details class="custom-container details"><summary>\u67E5\u770B</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// main.js</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Router <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Router<span class="token punctuation">)</span>

<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Home&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4F7F\u7528\u52A8\u6001import\u8BED\u6CD5\u6765\u5F02\u6B65\u52A0\u8F7D\u7EC4\u4EF6</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;home&quot; */</span> <span class="token string">&#39;@/components/Home.vue&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;About&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u540C\u6837\u4F7F\u7528\u52A8\u6001import\u8BED\u6CD5</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;about&quot; */</span> <span class="token string">&#39;@/components/About.vue&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u4F60\u53EF\u4EE5\u5728\u8FD9\u91CC\u6DFB\u52A0\u66F4\u591A\u7684\u8DEF\u7531</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;history&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u4F7F\u7528HTML5\u5386\u53F2\u6A21\u5F0F</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">BASE_URL</span><span class="token punctuation">,</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span>

Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  router<span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span> |
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/about<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>About<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;App&#39;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token comment">/* \u4F60\u7684\u6837\u5F0F */</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></details>`,12))}var c=s(p,[["render",t],["__file","5-\u52A8\u6001\u6DFB\u52A0\u8DEF\u7531.html.vue"]]);export{c as default};
