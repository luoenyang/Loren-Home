import{_ as s,p as a}from"./app.e6691f45.js";const e={};function p(t,n){return n[0]||(n[0]=a(`<h1 id="vue-\u5F15\u5165jquery" tabindex="-1"><a class="header-anchor" href="#vue-\u5F15\u5165jquery" aria-hidden="true">#</a> vue \u5F15\u5165jquery</h1><h3 id="\u5B89\u88C5jquery" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5jquery" aria-hidden="true">#</a> \u5B89\u88C5jquery</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm isntall jquery

yarn add jquery
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u6DFB\u52A0\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u914D\u7F6E" aria-hidden="true">#</a> \u6DFB\u52A0\u914D\u7F6E</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5728 vue.config.js \u6587\u4EF6\u4E2D\u914D\u7F6E</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token literal-property property">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>ProvidePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">$</span><span class="token operator">:</span> <span class="token string">&quot;jquery&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">jQuery</span><span class="token operator">:</span> <span class="token string">&quot;jquery&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;windows.jquery&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jquery&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h1 id="vite\u9879\u76EE\u5F15\u5165jquery" tabindex="-1"><a class="header-anchor" href="#vite\u9879\u76EE\u5F15\u5165jquery" aria-hidden="true">#</a> vite\u9879\u76EE\u5F15\u5165jquery</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u65B0\u5EFA vite \u81EA\u5E26vue \uFF0C\u4F46\u6253\u5305\u7528\u7684\u4E0D\u662Fwebpack</span>
<span class="token comment">// \u76F4\u63A5\u5982\u4E0B\u5F15\u5165\u5373\u53EF\u5168\u5C40\u4F7F\u7528\uFF0C\u5F53\u7136\u4E5F\u53EF\u5728\u5355\u6587\u4EF6\u5185\u5C40\u90E8\u5F15\u5165</span>
<span class="token comment">// main.ts</span>
mport jquery <span class="token keyword">from</span> <span class="token string">&#39;jquery&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">(</span>window <span class="token keyword">as</span> any<span class="token punctuation">)</span><span class="token punctuation">.</span>jQuery <span class="token operator">=</span> jquery<span class="token punctuation">;</span>
<span class="token punctuation">(</span>window <span class="token keyword">as</span> any<span class="token punctuation">)</span><span class="token punctuation">.</span>$ <span class="token operator">=</span> jquery<span class="token punctuation">;</span>

<span class="token comment">// \u82E5\u662F main.js</span>
mport jquery <span class="token keyword">from</span> <span class="token string">&#39;jquery&#39;</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span>jQuery <span class="token operator">=</span> jquery<span class="token punctuation">;</span>
window<span class="token punctuation">.</span>$ <span class="token operator">=</span> jquery<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,7))}var o=s(e,[["render",p],["__file","14-vue\u5F15\u5165jquery.html.vue"]]);export{o as default};
