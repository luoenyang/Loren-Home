import{_ as s,p as a}from"./app.5c80a7c1.js";const p={};function t(e,n){return n[0]||(n[0]=a(`<h1 id="js-\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#js-\u5B57\u7B26\u4E32" aria-hidden="true">#</a> js \u5B57\u7B26\u4E32</h1><details class="custom-container details"><summary>\u4EE3\u7801\u793A\u4F8B</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> result3 <span class="token operator">=</span> <span class="token string">&quot;       &quot;</span> <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// \u5F97\u5230\u7684\u7ED3\u679C\u662F&quot;       5&quot;</span>
<span class="token keyword">var</span> result2 <span class="token operator">=</span> <span class="token string">&quot;&quot;</span> <span class="token operator">+</span> <span class="token number">5</span> <span class="token operator">+</span> <span class="token number">5</span> <span class="token operator">+</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span> <span class="token comment">//\u7ED3\u679C\u5C06\u662F&quot;55abc&quot;</span>
<span class="token keyword">var</span> result1 <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">+</span> <span class="token number">5</span> <span class="token operator">+</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span> <span class="token comment">//\u7ED3\u679C\u5C06\u662F&quot;10abc&quot;</span>

<span class="token keyword">var</span> string <span class="token operator">=</span> <span class="token string">&quot;123456789&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> string1 <span class="token operator">=</span> <span class="token string">&quot; \u524D\u540E\u7A7A\u767D &quot;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> string3 <span class="token operator">=</span> <span class="token string">&quot;aBcDe&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u5B57\u7B26\u4E32\u8865\u5168\u957F\u5EA6</span>
<span class="token string">&#39;x&#39;</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;ab&#39;</span><span class="token punctuation">)</span>  <span class="token comment">// &#39;ababx&#39;</span>
<span class="token string">&#39;x&#39;</span><span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;ab&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;xabab&#39;</span>
<span class="token string">&#39;xxx&#39;</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;ab&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;xxx&#39;</span>
<span class="token string">&#39;xxx&#39;</span><span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;ab&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;xxx&#39;</span>

<span class="token comment">// \u5982\u679C\u7701\u7565\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u9ED8\u8BA4\u4F7F\u7528\u7A7A\u683C\u8865\u5168\u957F\u5EA6</span>
<span class="token string">&#39;x&#39;</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">// &#39; x&#39;</span>
<span class="token string">&#39;x&#39;</span><span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">// &#39;x &#39;</span>


<span class="token comment">//\u5220\u9664\u5B57\u7B26\u4E32\u7684\u524D\u540E\u7A7A\u767D</span>
<span class="token string">&#39; abc &#39;</span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u63D0\u53D6\u5B57\u7B26, \u4ECB\u4E8E\u4E24\u4E2A\u6307\u5B9A\u4E0B\u6807\u4E4B\u95F4\u7684\u5B57\u7B26, \u5305\u542B\u524D\u9762\u4E0D\u5305\u542B\u540E\u9762\u3002     </span>
string<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>from<span class="token punctuation">,</span> to<span class="token punctuation">)</span>

<span class="token comment">// \u63D0\u53D6\u5B57\u7B26, \u8D77\u59CB\u4F4D\u7F6E\u548C\u6307\u5B9A\u6570\u76EE</span>
string<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u63D0\u53D6\u5B57\u7B26, \u4ECB\u4E8E\u4E24\u4E2A\u6307\u5B9A\u4E0B\u6807\u4E4B\u95F4\u7684\u5B57\u7B26, start end\u53EF\u4EE5\u662F\u8D1F\u6570\uFF08\u4ECE\u7ED3\u5C3E\u7B97\u8D77\uFF0C-1\u5F00\u59CB\uFF09\u3002</span>
string<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">)</span>

<span class="token comment">// \u8FD4\u56DE\u6307\u5B9A\u4F4D\u7F6E\u7684\u5B57\u7B26 \uFF0C0 \u5F00\u59CB</span>
string<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token comment">// \u5B9A\u4F4D\u5B57\u7B26\u4E32\u4E2D\u67D0\u4E00\u4E2A\u6307\u5B9A\u7684\u5B57\u7B26\u9996\u6B21\u51FA\u73B0\u7684\u4F4D\u7F6E\u3002</span>
string<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// \u5B9A\u4F4D\u5B57\u7B26\u4E32\u4E2D\u67D0\u4E00\u4E2A\u6307\u5B9A\u7684\u5B57\u7B26\u6700\u540E\u4E00\u6B21\u51FA\u73B0\u7684\u4F4D\u7F6E\u3002</span>
string<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// \u67E5\u627E\u5B57\u7B26\u4E32\u4E2D\u7279\u5B9A\u7684\u5B57\u7B26\uFF0C\u5E76\u4E14\u5982\u679C\u627E\u5230\u7684\u8BDD\uFF0C\u5219\u8FD4\u56DE\u8FD9\u4E2A\u5B57\u7B26 \u5426\u5219\u8FD4\u56DEnull\u3002</span>
string<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// \u83B7\u53D6 /video/id?region \u4E2D\u7684id</span>
id <span class="token operator">=</span> href<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">video\\/(\\S*)\\/\\?region</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// \u83B7\u53D6video\u7684src\u6807\u7B7E</span>
<span class="token keyword">let</span> r<span class="token operator">=</span> <span class="token string">&#39;&lt;video[^&lt;&gt;]*? src=&quot;([^&lt;&gt;]*?)&quot;&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> urlArr<span class="token operator">=</span>body<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> src<span class="token operator">=</span>urlArr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>

<span class="token comment">// \u5B57\u7B26\u4E32\u4E2D\u7528\u67D0\u4E9B\u5B57\u7B26\u66FF\u6362\u53E6\u4E00\u4E9B\u5B57\u7B26\u3002</span>
string<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span>
string<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// \u5168\u90E8\u66FF\u6362</span>
string<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span>
string<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\n</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// \u8F6C\u5316\u5927\u5C0F\u5199</span>
string<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
string<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u5C06\u5B57\u7B26\u4E32\u5206\u5272\u6210\u5B57\u7B26\uFF0Climit\u53EF\u4EE5\u4E0D\u8BBE</span>
string<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span>separator<span class="token punctuation">,</span>limit<span class="token punctuation">)</span>


<span class="token comment">//\u4E0A\u6807\u548C\u4E0B\u6807</span>
 string<span class="token punctuation">.</span><span class="token function">sup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 string<span class="token punctuation">.</span><span class="token function">sub</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u53CD\u8F6C</span>
<span class="token comment">// string.reverse()    \u4F1A\u62A5\u9519\uFF0C\u56E0\u4E3A\u53EA\u5BF9\u6570\u7EC4\u624D\u6709\u7528\uFF0C\u5BF9\u5B57\u7B26\u4E32\u6CA1\u6709\u7528\uFF0C\u7528\u5982\u4E0Bprototype\u6DFB\u52A0\u65B9\u6CD5</span>

<span class="token comment">//	String.prototype.reverse = function(){</span>
<span class="token comment">//	    var str = &quot;&quot;;</span>
<span class="token comment">//	    for(var i = this.length - 1; i &gt; -1; i--){</span>
<span class="token comment">//	        str += this[i];</span>
<span class="token comment">//	    }</span>
<span class="token comment">//	    return str;</span>
<span class="token comment">//	}</span>
<span class="token comment">//</span>
<span class="token comment">//	var str = &quot;Hello World!&quot;;</span>
<span class="token comment">//	document.write(str.reverse());</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br></div></div></details><h1 id="\u4E00\u4E9B\u5B9E\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E9B\u5B9E\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u4E00\u4E9B\u5B9E\u7528\u65B9\u6CD5</h1><details class="custom-container details"><summary>\u5B9E\u7528\u65B9\u6CD5</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u56DE\u8F66\u7B26-\u6362\u884C</span>
string<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\r\\n]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span><span class="token string">&#39;&lt;br/&gt;&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></details>`,4))}var o=s(p,[["render",t],["__file","18-js\u5BF9\u5B57\u7B26\u4E32\u7684\u5904\u7406.html.vue"]]);export{o as default};
