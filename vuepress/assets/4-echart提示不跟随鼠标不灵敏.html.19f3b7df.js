import{_ as s,p as a}from"./app.e6691f45.js";const p={};function t(o,n){return n[0]||(n[0]=a(`<h3 id="echart\u63D0\u793A\u4E0D\u8DDF\u968F\u9F20\u6807\u4E0D\u7075\u654F" tabindex="-1"><a class="header-anchor" href="#echart\u63D0\u793A\u4E0D\u8DDF\u968F\u9F20\u6807\u4E0D\u7075\u654F" aria-hidden="true">#</a> echart\u63D0\u793A\u4E0D\u8DDF\u968F\u9F20\u6807\u4E0D\u7075\u654F</h3><ul><li>\u73B0\u8C61\uFF1A</li></ul><p>echart\u7684\u63D0\u793A\u4E0D\u8DDF\u968F\u9F20\u6807\uFF0C\u4E0D\u7075\u654F</p><ul><li>\u539F\u56E0\uFF1A</li></ul><p>\u9875\u9762\u7F29\u653E\u5BFC\u81F4 \u5982\uFF1Azoom:0.8</p><ul><li>\u89E3\u51B3\uFF1A</li></ul><p>\u6839\u636Ebody\u7684zoom\u52A8\u6001\u8BBE\u7F6E\u56FE\u8868\u5BB9\u5668\u7684\u5BBD\u9AD8\u548C\u7F29\u653E\uFF08\u548C\u5BBD\u9AD8\u7684\u8BBE\u7F6E\u76F8\u53CD\uFF09</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> zoom <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;body&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">&#39;zoom&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> dh <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#dataBoard_chart&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">&#39;height&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;px&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#chart&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> zoom <span class="token operator">*</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token string">&#39;%&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#chart&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">height</span><span class="token operator">:</span> zoom <span class="token operator">*</span> dh<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> _chart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;chart&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
_chart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u8FD9\u4E00\u6B65\u8981\u653E\u5728\u6700\u540E</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#chart&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token operator">/</span> zoom <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,8))}var e=s(p,[["render",t],["__file","4-echart\u63D0\u793A\u4E0D\u8DDF\u968F\u9F20\u6807\u4E0D\u7075\u654F.html.vue"]]);export{e as default};
