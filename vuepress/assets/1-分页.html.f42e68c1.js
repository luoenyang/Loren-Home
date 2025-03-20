import{_ as s,p as a}from"./app.e6691f45.js";const p={};function t(e,n){return n[0]||(n[0]=a(`<h3 style="text-align:center;">elementui \u5206\u9875</h3><blockquote><p>\u6269\u5C55\u4E86\u5E26\u5237\u65B0\u5F53\u524D\u9875</p></blockquote><h3 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> html</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>paginationDiv<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-pagination</span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>elPagination<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@size-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleSizeChange<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@current-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleCurrentChange<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:current-page</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentPage<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:page-sizes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pageSizes<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:page-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pageSize<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>total, sizes, prev, pager, next, jumper<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>total<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-pagination</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>reloadCurrentPage<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5237\u65B0\u5F53\u524D\u9875<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="data" tabindex="-1"><a class="header-anchor" href="#data" aria-hidden="true">#</a> data</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5217\u8868</span>
<span class="token literal-property property">dataList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

<span class="token comment">// \u6392\u5E8F</span>
<span class="token literal-property property">currentSort</span><span class="token operator">:</span> <span class="token string">&quot;CreateTime&quot;</span><span class="token punctuation">,</span>
<span class="token literal-property property">currentDir</span><span class="token operator">:</span> <span class="token string">&quot;DESC&quot;</span><span class="token punctuation">,</span>

<span class="token comment">// \u5206\u9875</span>
<span class="token literal-property property">currentPage</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token literal-property property">pageSize</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
<span class="token literal-property property">pageSizes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token literal-property property">total</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="style" tabindex="-1"><a class="header-anchor" href="#style" aria-hidden="true">#</a> style</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.paginationDiv</span> <span class="token punctuation">{</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 28px<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.elPagination</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.reloadCurrentPage</span> <span class="token punctuation">{</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.reloadCurrentPage:hover</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>8<span class="token punctuation">,</span> 151<span class="token punctuation">,</span> 247<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.reloadCurrentPage:active</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>8<span class="token punctuation">,</span> 120<span class="token punctuation">,</span> 247<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> methods</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u83B7\u53D6\u5217\u8868 \uFF08\u8868\u5355\u5217\u8868\u793A\u5217\uFF0C\u5176\u5B83\u5217\u8868\u9875\u5DEE\u4E0D\u591A\uFF09</span>
<span class="token function">getDataList</span><span class="token punctuation">(</span><span class="token parameter">querykey</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> _this <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> formId <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>formId<span class="token punctuation">;</span>
    <span class="token keyword">let</span> sort <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>currentSort<span class="token punctuation">;</span>
    <span class="token keyword">let</span> dir <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>currentDir<span class="token punctuation">;</span>
    <span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>currentPage <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>pageSize<span class="token punctuation">;</span>
    <span class="token keyword">let</span> page <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>currentPage<span class="token punctuation">;</span>
    <span class="token keyword">let</span> limit <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>pageSize<span class="token punctuation">;</span>

    <span class="token comment">// querykey = querykey || [];</span>
    <span class="token comment">// let titleV = this.inputSearchValue;</span>
    <span class="token comment">// querykey.push({</span>
    <span class="token comment">//   id: &quot;title&quot;,</span>
    <span class="token comment">//   value1: titleV,</span>
    <span class="token comment">// });</span>

    httpUtil<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>
    <span class="token string">&quot;data/GetListFormData&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">formId</span><span class="token operator">:</span> formId<span class="token punctuation">,</span>
        <span class="token literal-property property">formVersion</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">querykey</span><span class="token operator">:</span> querykey<span class="token punctuation">,</span>
        <span class="token literal-property property">limit</span><span class="token operator">:</span> limit<span class="token punctuation">,</span>
        <span class="token literal-property property">sort</span><span class="token operator">:</span> sort<span class="token punctuation">,</span>
        <span class="token literal-property property">dir</span><span class="token operator">:</span> dir<span class="token punctuation">,</span>
        <span class="token literal-property property">start</span><span class="token operator">:</span> start<span class="token punctuation">,</span>
        <span class="token literal-property property">page</span><span class="token operator">:</span> page<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">rs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        _this<span class="token punctuation">.</span>dataList <span class="token operator">=</span> rs<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
        _this<span class="token punctuation">.</span>total <span class="token operator">=</span> rs<span class="token punctuation">.</span>total<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>


<span class="token comment">// \u6BCF\u9875\u663E\u793A\u6761\u6570\u6539\u53D8</span>
<span class="token function">handleSizeChange</span><span class="token punctuation">(</span><span class="token parameter">size</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>currentPage <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>pageSize <span class="token operator">=</span> size<span class="token punctuation">;</span>
    <span class="token comment">// this.getDataList();</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token comment">// \u9875\u7801\u6539\u53D8</span>
<span class="token function">handleCurrentChange</span><span class="token punctuation">(</span><span class="token parameter">page</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>currentPage <span class="token operator">=</span> page<span class="token punctuation">;</span>
    <span class="token comment">// this.getDataList();</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token comment">// \u70B9\u51FB\u8F93\u5165\u6846\u7684\u641C\u7D22</span>
  <span class="token function">doInputSearch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>currentPage <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token comment">// this.getDataList();</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token comment">// \u5237\u65B0\u5F53\u524D\u9875</span>
<span class="token function">reloadCurrentPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// this.getDataList();</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div><h3 id="\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a> \u6CE8\u610F</h3><blockquote><p>this.currentPage = currentPage; \u662F\u4E0D\u4F1A\u89E6\u53D1 handleCurrentChange\uFF08\u9875\u7801\u6539\u53D8\u4E8B\u4EF6\uFF09</p></blockquote>`,12))}var c=s(p,[["render",t],["__file","1-\u5206\u9875.html.vue"]]);export{c as default};
