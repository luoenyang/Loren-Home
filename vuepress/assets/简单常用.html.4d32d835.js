import{_ as s,p as a}from"./app.5c80a7c1.js";const p={};function t(e,n){return n[0]||(n[0]=a(`<h1 id="\u6821\u9A8C\u624B\u673A\u53F7" tabindex="-1"><a class="header-anchor" href="#\u6821\u9A8C\u624B\u673A\u53F7" aria-hidden="true">#</a> \u6821\u9A8C\u624B\u673A\u53F7</h1><details class="custom-container details"><summary>\u67E5\u770B</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^1(2|3|4|5|6|7|8|9)\\d{9}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>phone<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;\u624B\u673A\u53F7\u7801\u6709\u8BEF&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></details><h1 id="jq\u6587\u4EF6\u4E0A\u4F20" tabindex="-1"><a class="header-anchor" href="#jq\u6587\u4EF6\u4E0A\u4F20" aria-hidden="true">#</a> jq\u6587\u4EF6\u4E0A\u4F20</h1><details class="custom-container details"><summary>\u67E5\u770B</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> url<span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">contentType</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u4E0D\u8BBE\u7F6E\u5185\u5BB9\u7C7B\u578B contentType \u6CE8\u610FType\u9996\u5B57\u6BCD\u5927\u5199</span>
    <span class="token literal-property property">processData</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u4E0D\u5904\u7406\u6570\u636E     contentType \u6CE8\u610FType\u9996\u5B57\u6BCD\u5927\u5199</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> formData<span class="token punctuation">,</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">fail</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">error</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u5982\u9700\u8BBE\u7F6E\u8BF7\u6C42\u5934</span>
headers<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;Content-Type&quot;</span><span class="token operator">:</span><span class="token string">&#39;application/x-www-form-urlencoded&#39;</span>  <span class="token comment">// \u8868\u5355\u65B9\u5F0F \u3010\u6D4F\u89C8\u5668 \u9ED8\u8BA4\u662F\u8BE5\u79CD\u65B9\u5F0F\u3011</span>
    <span class="token string-property property">&quot;Content-Type&quot;</span><span class="token operator">:</span><span class="token string">&#39;multipart/form-data&#39;</span>  <span class="token comment">// \u8868\u5355\u65B9\u5F0F \u3010\u6D4F\u89C8\u5668 \u9ED8\u8BA4\u662F\u8BE5\u79CD\u65B9\u5F0F\u3011</span>
    <span class="token string-property property">&quot;Content-Type&quot;</span><span class="token operator">:</span><span class="token string">&#39;application/json&#39;</span>  <span class="token comment">// \u4F7F\u7528\u8868\u5355\u4E0A\u4F20\u6587\u4EF6\u65F6,\u5FC5\u987B\u8BA9 \u8868\u5355\u7684 enctype \u7B49\u4E8E multipart/form-data</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></details><h1 id="\u83B7\u53D6url\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6url\u53C2\u6570" aria-hidden="true">#</a> \u83B7\u53D6url\u53C2\u6570</h1><details class="custom-container details"><summary>\u67E5\u770B</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getUrlParam</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u83B7\u53D6\u67E5\u8BE2\u53C2\u6570</span>
    <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span>search<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u83B7\u53D6\u6307\u5B9A\u53C2\u6570\u7684\u503C</span>
    <span class="token keyword">let</span> paramValue <span class="token operator">=</span> params<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u6253\u5370\u53C2\u6570\u503C</span>
    <span class="token comment">// console.log(&#39;paramValue &#39;+name+&#39;=&#39;, paramValue);</span>


    <span class="token comment">// \u83B7\u53D6\u6240\u6709\u53C2\u6570\u5BF9\u8C61</span>
    <span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u7A7A\u5BF9\u8C61</span>
    <span class="token keyword">let</span> paramsObj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// \u904D\u5386\u67E5\u8BE2\u53C2\u6570\u8FED\u4EE3\u5668\uFF0C\u5E76\u5C06\u6BCF\u4E2A\u53C2\u6570\u6DFB\u52A0\u5230\u5BF9\u8C61\u4E2D</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> params<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        paramsObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// console.log(&#39;paramsObj&#39;, paramsObj);</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> paramValue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> paramsObj<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div></details><h1 id="base64\u52A0\u5BC6\u89E3\u5BC6" tabindex="-1"><a class="header-anchor" href="#base64\u52A0\u5BC6\u89E3\u5BC6" aria-hidden="true">#</a> base64\u52A0\u5BC6\u89E3\u5BC6</h1><details class="custom-container details"><summary>\u67E5\u770B</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">base64Encode</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">btoa</span><span class="token punctuation">(</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">%([0-9A-F]{2})</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">match<span class="token punctuation">,</span> p1</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span><span class="token string">&#39;0x&#39;</span> <span class="token operator">+</span> p1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">base64Decode</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Going backwards: from bytestream, to percent-encoding, to original string.</span>
    <span class="token keyword">return</span> <span class="token function">decodeURIComponent</span><span class="token punctuation">(</span><span class="token function">atob</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;%&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token string">&#39;00&#39;</span> <span class="token operator">+</span> c<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></details>`,8))}var c=s(p,[["render",t],["__file","\u7B80\u5355\u5E38\u7528.html.vue"]]);export{c as default};
