import{_ as p,o as t,c as o,p as s,a,b as c,t as l,F as r}from"./app.5c80a7c1.js";const u={},i={id:"\u66FF\u6362-\u53D8\u91CF-\u503C",tabindex:"-1"};function k(e,n){return t(),o(r,null,[n[1]||(n[1]=s(`<h1 id="\u5168\u5C40\u66FF\u6362" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u66FF\u6362" aria-hidden="true">#</a> \u5168\u5C40\u66FF\u6362</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>str<span class="token operator">=</span>str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">some</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span>newsome<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="\u6B63\u5219\u4F7F\u7528\u53D8\u91CF-\u5E76\u5168\u5C40\u66FF\u6362" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5219\u4F7F\u7528\u53D8\u91CF-\u5E76\u5168\u5C40\u66FF\u6362" aria-hidden="true">#</a> \u6B63\u5219\u4F7F\u7528\u53D8\u91CF,\u5E76\u5168\u5C40\u66FF\u6362</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> replace <span class="token operator">=</span> cp<span class="token punctuation">;</span>
<span class="token keyword">var</span> re <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>replace<span class="token punctuation">,</span> <span class="token string">&quot;g&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>re<span class="token punctuation">,</span> newsome<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,4)),a("h1",i,[n[0]||(n[0]=a("a",{class:"header-anchor",href:"#\u66FF\u6362-\u53D8\u91CF-\u503C","aria-hidden":"true"},"#",-1)),c(" \u66FF\u6362"+l(e.\u53D8\u91CF)+"\u503C",1)]),n[2]||(n[2]=s(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> regex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">{{.*?}}</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> str<span class="token operator">=</span><span class="token string">&#39;\u7EDF\u8BA1\uFF1A{{\u91D1\u989D}}&#39;</span><span class="token punctuation">;</span>
str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>regex<span class="token punctuation">,</span> number<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h1 id="\u622A\u53D6\u4E24\u4E2A\u5B57\u7B26\u4E4B\u95F4\u7684\u503C" tabindex="-1"><a class="header-anchor" href="#\u622A\u53D6\u4E24\u4E2A\u5B57\u7B26\u4E4B\u95F4\u7684\u503C" aria-hidden="true">#</a> \u622A\u53D6\u4E24\u4E2A\u5B57\u7B26\u4E4B\u95F4\u7684\u503C</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u793A\u4F8B1  \u5339\u914D\u5728\u4E00\u4E2A\u5192\u53F7\u4E4B\u540E\uFF0C\u5230\u4E0B\u4E00\u4E2A\u5192\u53F7\u4E4B\u524D\u7684\u6240\u6709\u5B57\u7B26</span>
<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&quot;\u8FD9\u662F\u4E00\u4E2A\u793A\u4F8B::\u622A\u53D6\u8FD9\u4E2A\u503C::\u8FD9\u4E5F\u662F\u4E00\u4E2A\u793A\u4F8B&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> regex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?&lt;=:).*?(?=:)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> match <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>regex<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>match<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8F93\u51FA\uFF1A\u622A\u53D6\u8FD9\u4E2A\u503C</span>


<span class="token comment">// \u793A\u4F8B2  \u622A\u53D6e\u548C1\u4E4B\u95F4\u7684\u5B57\u7B26</span>
<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&quot;abcde\u54C8\u54C8123456&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> regex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">e(.*?)1</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> regex<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8F93\u51FA\uFF1A\u54C8\u54C812345</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u672A\u627E\u5230\u5339\u914D\u7684\u5B57\u7B26\u4E32&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,3))],64)}var m=p(u,[["render",k],["__file","25-\u6B63\u5219.html.vue"]]);export{m as default};
