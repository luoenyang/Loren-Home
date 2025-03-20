import{_ as a,p as s}from"./app.5c80a7c1.js";const t={};function p(e,n){return n[0]||(n[0]=s(`<h3 style="text-align:center;">\u8868\u683C\u5355\u5143\u683C\u683C\u5F0F\u5316\u548C\u63D0\u793A</h3><h3 id="_1-\u683C\u5F0F\u5316\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_1-\u683C\u5F0F\u5316\u65B9\u6CD5" aria-hidden="true">#</a> 1. \u683C\u5F0F\u5316\u65B9\u6CD5</h3><div class="custom-container tip"><p class="custom-container-title">\u65B9\u6CD5</p><ul><li><p>\u53EF\u4EE5\u4F7F\u7528 :formatter = &quot;dateFormat&quot; \u8FDB\u884C\u5355\u5143\u683C\u683C\u5F0F\u5316</p></li><li><p>\u53EF\u4EE5\u4F7F\u7528 &lt;template #default=&quot;scope&quot;&gt; \u81EA\u5B9A\u4E49\u5355\u5143\u683C\u663E\u793A</p></li><li><p>\u53EF\u4EE5\u4F7F\u7528 &lt;template #default=&quot;scope&quot;&gt; \u7ED3\u5408 v-html = &quot;dateFormat&quot; \u8FDB\u884C\u663E\u793A\u5185\u5BB9\u683C\u5F0F\u5316</p></li><li><p>\u53EF\u4EE5\u4F7F\u7528 &lt;template #header&gt; \u81EA\u5B9A\u4E49\u5217\u7684\u8868\u5934\u663E\u793A</p></li></ul></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u65E5\u671F\u683C\u5F0F\u5316</span>
<span class="token function">dateFormat</span><span class="token punctuation">(</span><span class="token parameter">utcDate</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">moment</span><span class="token punctuation">(</span>utcDate<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;YYYY-MM-DD HH:mm:ss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_2-\u5355\u5143\u683C\u6570\u636E\u7684\u63D0\u793A\u6709" tabindex="-1"><a class="header-anchor" href="#_2-\u5355\u5143\u683C\u6570\u636E\u7684\u63D0\u793A\u6709" aria-hidden="true">#</a> 2. \u5355\u5143\u683C\u6570\u636E\u7684\u63D0\u793A\u6709</h3><blockquote><p>2 \u4E2A\u505A\u6CD5</p></blockquote><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>1. :show-overflow-tooltip=&quot;true&quot;   \u5373\u53EF

2.  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scope<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tooltip</span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#content</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
            \u53E6\u4E00\u79CD\u81EA\u5B9A\u4E49\u65B9\u5F0F\u663E\u793A\u63D0\u793A\uFF0C\u8FD9\u79CD\u663E\u793A\u65B9\u5F0F\u4E0D\u7528\u8BBE\u7F6E
            show-overflow-tooltip
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>titleCell<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ scope.row.Title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tooltip</span><span class="token punctuation">&gt;</span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_3-\u8D85\u51FA\u663E\u793A\u7701\u7565\u53F7-\u7ED3\u5408-template-\u5355\u884C\u663E\u793A" tabindex="-1"><a class="header-anchor" href="#_3-\u8D85\u51FA\u663E\u793A\u7701\u7565\u53F7-\u7ED3\u5408-template-\u5355\u884C\u663E\u793A" aria-hidden="true">#</a> 3. \u8D85\u51FA\u663E\u793A\u7701\u7565\u53F7\uFF0C\u7ED3\u5408 template\uFF08\u5355\u884C\u663E\u793A\uFF09</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.titleCell</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
  <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,9))}var o=a(t,[["render",p],["__file","5-table\u7684\u5355\u5143\u683C\u6570\u636E\u683C\u5F0F\u5316\u548C\u63D0\u793A.html.vue"]]);export{o as default};
