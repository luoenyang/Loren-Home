import{_ as s,p as a}from"./app.e6691f45.js";const p={};function e(t,n){return n[0]||(n[0]=a(`<h3 id="vue-\u548C-uniapp-\u672C\u5730\u8C03\u8BD5\u7684\u4EE3\u7406\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#vue-\u548C-uniapp-\u672C\u5730\u8C03\u8BD5\u7684\u4EE3\u7406\u914D\u7F6E" aria-hidden="true">#</a> vue \u548C uniApp \u672C\u5730\u8C03\u8BD5\u7684\u4EE3\u7406\u914D\u7F6E</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5728\u6839\u76EE\u5F55\u5EFA\u7ACB vue.config.js</span>


<span class="token comment">// vue \u9879\u76EE\u7B80\u5355\u914D\u7F6E\u793A\u4F8B\uFF0C\u4E5F\u548CuniApp \u4E00\u6837</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">lintOnSave</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// proxy: &#39;https://hwuat.dadayun.cn&#39;,</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8891</span><span class="token punctuation">,</span> <span class="token comment">// \u542F\u52A8\u7AEF\u53E3</span>
        <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// \u542F\u52A8\u540E\u662F\u5426\u81EA\u52A8\u6253\u5F00\u7F51\u9875</span>
        <span class="token literal-property property">hotOnly</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// uniApp \u9879\u76EE\u914D\u7F6E\u793A\u4F8B\uFF1A</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">/* webpack-dev-server \u76F8\u5173\u914D\u7F6E */</span>
    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">/* \u81EA\u52A8\u6253\u5F00\u6D4F\u89C8\u5668 */</span>
        <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">/* \u8BBE\u7F6E\u4E3A0.0.0.0\u5219\u6240\u6709\u7684\u5730\u5740\u5747\u80FD\u8BBF\u95EE */</span>
        <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;0.0.0.0&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8880</span><span class="token punctuation">,</span>
        <span class="token literal-property property">https</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">hotOnly</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">/* \u4F7F\u7528\u4EE3\u7406 */</span>
        <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">/* \u76EE\u6807\u4EE3\u7406\u670D\u52A1\u5668\u5730\u5740 */</span>
                <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;https://mzy.dadayun.net&#39;</span><span class="token punctuation">,</span>
                <span class="token comment">/* \u5141\u8BB8\u8DE8\u57DF */</span>
                <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div>`,2))}var r=s(p,[["render",e],["__file","19-\u4EE3\u7406\u914D\u7F6E.html.vue"]]);export{r as default};
