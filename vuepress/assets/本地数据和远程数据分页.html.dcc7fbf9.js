import{_ as s,p as a}from"./app.5c80a7c1.js";const p={};function t(e,n){return n[0]||(n[0]=a(`<h1 id="\u672C\u5730\u6570\u636E\u548C\u8FDC\u7A0B\u6570\u636E\u5206\u9875" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u6570\u636E\u548C\u8FDC\u7A0B\u6570\u636E\u5206\u9875" aria-hidden="true">#</a> \u672C\u5730\u6570\u636E\u548C\u8FDC\u7A0B\u6570\u636E\u5206\u9875</h1><h3 id="\u672C\u5730\u6570\u636E\u5206\u9875" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u6570\u636E\u5206\u9875" aria-hidden="true">#</a> \u672C\u5730\u6570\u636E\u5206\u9875</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>

<span class="token keyword">var</span> gridData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> positionCheckGridStore <span class="token operator">=</span> Ext<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&#39;Ext.data.Store&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">pageSize</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">autoLoad</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> gridData<span class="token punctuation">,</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;memory&#39;</span><span class="token punctuation">,</span>     <span class="token comment">// \u5173\u952E</span>
        <span class="token literal-property property">enablePaging</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u5173\u952E</span>
        <span class="token literal-property property">reader</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">rootProperty</span><span class="token operator">:</span> <span class="token string">&#39;data&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// grid</span>
<span class="token keyword">var</span> positionCheckGrid <span class="token operator">=</span> Ext<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&#39;Ext.grid.Panel&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token operator">!</span>window<span class="token punctuation">.</span>platformConfig<span class="token punctuation">.</span>isAsyncLoadOU<span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u5DF2\u9009\u62E9\u7684\u5C97\u4F4D&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">region</span><span class="token operator">:</span> <span class="token string">&#39;east&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">split</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">store</span><span class="token operator">:</span> positionCheckGridStore<span class="token punctuation">,</span>
    <span class="token comment">// queryMode: &#39;local&#39;,</span>
    <span class="token comment">// tbar: [&#39;-&gt;&#39;, searchField],</span>
    <span class="token literal-property property">selModel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;checkboxmodel&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">checkOnly</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token comment">// type: &#39;rowmodel&#39;   //\u53BB\u6389\u590D\u9009\u6846</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u5C97\u4F4D\u540D\u79F0&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">align</span><span class="token operator">:</span> <span class="token string">&#39;left&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">sortable</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">bbar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">xtype</span><span class="token operator">:</span> <span class="token string">&#39;pagingtoolbar&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">displayInfo</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">inputItemWidth</span><span class="token operator">:</span> <span class="token number">64</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u91CD\u65B0\u8BBE\u7F6E\u6570\u636E\uFF08\u5982\u641C\u7D22\u540E\uFF09</span>
<span class="token keyword">var</span> s <span class="token operator">=</span> Ext<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&#39;Ext.data.Store&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">pageSize</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">autoLoad</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;memory&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">enablePaging</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">reader</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">rootProperty</span><span class="token operator">:</span> <span class="token string">&#39;data&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
positionCheckGrid<span class="token punctuation">.</span><span class="token function">setStore</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br></div></div><h3 id="\u8FDC\u7A0B\u6570\u636E\u5206\u9875" tabindex="-1"><a class="header-anchor" href="#\u8FDC\u7A0B\u6570\u636E\u5206\u9875" aria-hidden="true">#</a> \u8FDC\u7A0B\u6570\u636E\u5206\u9875</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> positionCheckGridStore <span class="token operator">=</span> Ext<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&#39;Ext.data.Store&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">pageSize</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">autoLoad</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;ajax&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> url<span class="token punctuation">,</span>
        <span class="token literal-property property">reader</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">rootProperty</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> node<span class="token punctuation">.</span>children <span class="token operator">||</span> node<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">actionMethods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">read</span><span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">extraParams</span><span class="token operator">:</span> extraParams
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// grid</span>
<span class="token keyword">var</span> positionCheckGrid <span class="token operator">=</span> Ext<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&#39;Ext.grid.Panel&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token operator">!</span>window<span class="token punctuation">.</span>platformConfig<span class="token punctuation">.</span>isAsyncLoadOU<span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u5DF2\u9009\u62E9\u7684\u5C97\u4F4D&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">region</span><span class="token operator">:</span> <span class="token string">&#39;east&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">split</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">store</span><span class="token operator">:</span> positionCheckGridStore<span class="token punctuation">,</span>
    <span class="token comment">// queryMode: &#39;local&#39;,</span>
    <span class="token comment">// tbar: [&#39;-&gt;&#39;, searchField],</span>
    <span class="token literal-property property">selModel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;checkboxmodel&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">checkOnly</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token comment">// type: &#39;rowmodel&#39;   //\u53BB\u6389\u590D\u9009\u6846</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u5C97\u4F4D\u540D\u79F0&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">align</span><span class="token operator">:</span> <span class="token string">&#39;left&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">sortable</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">bbar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">xtype</span><span class="token operator">:</span> <span class="token string">&#39;pagingtoolbar&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">displayInfo</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">inputItemWidth</span><span class="token operator">:</span> <span class="token number">64</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

positionCheckGridStore<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
positionCheckGridStore<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
positionCheckGridStore<span class="token punctuation">.</span><span class="token function">getProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setExtraParam</span><span class="token punctuation">(</span><span class="token string">&#39;queryKey&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div>`,5))}var r=s(p,[["render",t],["__file","\u672C\u5730\u6570\u636E\u548C\u8FDC\u7A0B\u6570\u636E\u5206\u9875.html.vue"]]);export{r as default};
