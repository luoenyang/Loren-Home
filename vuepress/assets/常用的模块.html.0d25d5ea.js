import{_ as s,p as a}from"./app.5c80a7c1.js";const p={};function e(t,n){return n[0]||(n[0]=a(`<h1 id="\u5E38\u7528\u81EA\u5E26\u7684\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u81EA\u5E26\u7684\u6A21\u5757" aria-hidden="true">#</a> \u5E38\u7528\u81EA\u5E26\u7684\u6A21\u5757</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6587\u4EF6\u64CD\u4F5C</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u4E8B\u4EF6</span>
<span class="token keyword">const</span> events<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;events&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u538B\u7F29\u548C\u89E3\u538B</span>
<span class="token keyword">const</span> zlib <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zlib&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5DE5\u5177\u7C7B</span>
<span class="token keyword">const</span> util <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;util&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// http \u670D\u52A1</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// url \u5904\u7406\u5DE5\u5177</span>
<span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Express \u662F\u4E00\u4E2A\u7B80\u6D01\u800C\u7075\u6D3B\u7684 node.js Web\u5E94\u7528\u6846\u67B6, \u7C7B\u4F3Ckoa</span>
<span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// os \u63D0\u4F9B\u57FA\u672C\u7684\u7CFB\u7EDF\u64CD\u4F5C\u51FD</span>
<span class="token keyword">const</span> os <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;os&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// path \u63D0\u4F9B\u4E86\u5904\u7406\u548C\u8F6C\u6362\u6587\u4EF6\u8DEF\u5F84\u7684\u5DE5\u5177</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u89E3\u6790\u57DF\u540D</span>
<span class="token keyword">const</span> dns <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;dns&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u63D0\u4F9B\u670D\u52A1\u7AEF\u4E0E\u5BA2\u6237\u7AEF\u7684\u64CD\u4F5C</span>
<span class="token keyword">const</span> net <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;net&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div>`,2))}var c=s(p,[["render",e],["__file","\u5E38\u7528\u7684\u6A21\u5757.html.vue"]]);export{c as default};
