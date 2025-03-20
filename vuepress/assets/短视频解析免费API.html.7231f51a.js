import{_ as o,k as l,o as r,c,a as s,b as a,l as t,p as e,F as u}from"./app.5c80a7c1.js";const i={},k={class:"custom-container details"},b={href:"http://www.52api.cc/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://free.mxbizhi.com/index.html",target:"_blank",rel:"noopener noreferrer"};function d(y,n){const p=l("ExternalLinkIcon");return r(),c(u,null,[n[8]||(n[8]=s("h1",{id:"\u77ED\u89C6\u9891\u89E3\u6790\u514D\u8D39api",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u77ED\u89C6\u9891\u89E3\u6790\u514D\u8D39api","aria-hidden":"true"},"#"),a(" \u77ED\u89C6\u9891\u89E3\u6790\u514D\u8D39API")],-1)),s("details",k,[n[6]||(n[6]=s("summary",null,"\u89C6\u9891\u89E3\u6790",-1)),s("ul",null,[s("li",null,[s("a",b,[n[0]||(n[0]=a("52api")),t(p)]),n[1]||(n[1]=a(" | http://www.52api.cc/"))]),s("li",null,[n[3]||(n[3]=a("GET https://free.mxbizhi.com/?url= | ")),s("a",m,[n[2]||(n[2]=a("\u5B98\u65B9")),t(p)])]),n[4]||(n[4]=s("li",null,"POST http://tool.youfanzi.cn/T/duanjx/api.php?url=",-1)),n[5]||(n[5]=s("li",null,"POST http://47.99.158.118/video-crack/v2/parse?content=",-1))]),n[7]||(n[7]=e(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * \u4E0B\u9762\u7684\u89C6\u9891 api \u53EF\u4EE5\u4F7F\u7528 \u652F\u6301\uFF1A
 * 
 * GET https://free.mxbizhi.com/?url=
 * 
 * POST http://tool.youfanzi.cn/T/duanjx/api.php?url=
 * 
 * http://www.52api.cc/   
 * \u591A\u5E73\u53F0\u5982douyin\uFF1A
 * http://www.52api.cc/douyin/api.php?url=
 *
 * \u76AE\u76AE\u867E\u3001\u6296\u97F3\u3001\u706B\u5C71/\u5FAE\u89C6/\u5FAE\u535A/\u7EFF\u6D32/\u6700\u53F3/\u8F7B\u89C6\u9891/\u5FEB\u624B/\u5168\u6C11\u5C0F\u89C6\u9891/\u76AE\u76AE\u641E\u7B11/
 * \u5DF4\u585E\u7535\u5F71/\u964C\u964C/Before\u907F\u98CE/\u5F00\u773C/Vue Vlog/\u5C0F\u5496\u79C0/\u5168\u6C11K\u6B4C\u7B49\u4E8C\u5341\u591A\u4E2A\u77ED\u89C6\u9891\u5E73\u53F0
 */</span>

<span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/x-www-form-urlencoded; charset=UTF-8&#39;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> response<span class="token punctuation">,</span> body</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>error <span class="token operator">&amp;&amp;</span> response<span class="token punctuation">.</span>statusCode <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">.</span>data<span class="token punctuation">;</span>
		<span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>



<span class="token doc-comment comment">/** 
 * \u6B64\u63A5\u53E3\u7684 \u7F51\u6613\u4E91\u94FE\u63A5 \u5DF2\u89E3\u6790\u4E0D\u51FA\u6765\uFF082022-06-20\u6D4B\u8BD5\uFF09\uFF1A
 * 
 * \u5927\u795E\u65E0\u6C34\u5370\u63A5\u53E3\u94FE\u63A5\uFF0C\u6296\u97F3\uFF0C\u897F\u74DC\uFF0C\u5934\u6761\u7B49
 * 
 * \u77E5\u4E4E\u5730\u5740\uFF1Ahttps://zhuanlan.zhihu.com/p/353544025?ivk_sa=1024320u
 * 
 * POST http://47.99.158.118/video-crack/v2/parse?content=
 * 
 * 
 */</span>

<span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://47.99.158.118/video-crack/v2/parse&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/x-www-form-urlencoded; charset=UTF-8&#39;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">&#39;content=&#39;</span> <span class="token operator">+</span> toUrl
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> response<span class="token punctuation">,</span> body</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>error <span class="token operator">&amp;&amp;</span> response<span class="token punctuation">.</span>statusCode <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">.</span>data<span class="token punctuation">;</span>
		<span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div>`,1))]),n[9]||(n[9]=e(`<details class="custom-container details"><summary>\u7F51\u6613\u4E91\u97F3\u4E50mp3</summary><ul><li>GET http://music.163.com/song/media/outer/url?id=</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * \u7F51\u6613\u4E91\u97F3\u4E50mp3\u89E3\u6790\uFF1A
 * 
 * \u590D\u5236\u6B4C\u66F2\u7684\u94FE\u63A5\uFF1Ahttps://music.163.com/song?id=496869422&amp;userid=517240734\uFF08\u53D6song?id\uFF09
 * \u628A\u540E\u7F00ID\u52A0\u5165\u63A5\u53E3\u8BBF\u95EE\u5373\u53EF\uFF1Ahttp://music.163.com/song/media/outer/url?id=496869422.mp3
 * 
 */</span>

<span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://music.163.com/song/media/outer/url?id=496869422.mp3&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> response<span class="token punctuation">,</span> body</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>error <span class="token operator">&amp;&amp;</span> response<span class="token punctuation">.</span>statusCode <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">.</span>data<span class="token punctuation">;</span>
		<span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></details>`,1))],64)}var g=o(i,[["render",d],["__file","\u77ED\u89C6\u9891\u89E3\u6790\u514D\u8D39API.html.vue"]]);export{g as default};
