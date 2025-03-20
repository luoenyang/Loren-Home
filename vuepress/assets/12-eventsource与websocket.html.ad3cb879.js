import{_ as s,p as a}from"./app.5c80a7c1.js";const t={};function p(o,n){return n[0]||(n[0]=a(`<h1 id="eventsource-\u4E0E-websocket" tabindex="-1"><a class="header-anchor" href="#eventsource-\u4E0E-websocket" aria-hidden="true">#</a> eventsource \u4E0E websocket</h1><ul><li>\u7528\u6765\u4E0E\u670D\u52A1\u5668\u5EFA\u7ACB\u957F\u8FDE\u63A5\u7684</li><li>vue\u9879\u76EE\u5E38\u7528\u7684\u70ED\u66F4\u65B0\u5C31\u662F\u4F7F\u7528webpack-dev-server\u670D\u52A1\u7684eventsource\u8FDB\u884C\u70ED\u66F4\u65B0\u3001\u70ED\u91CD\u542F</li></ul><h4 id="eventsource-\u4E0E-websocket-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#eventsource-\u4E0E-websocket-\u7684\u533A\u522B" aria-hidden="true">#</a> eventsource \u4E0E websocket \u7684\u533A\u522B</h4><div class="custom-container warning"><p class="custom-container-title">\u533A\u522B</p><ul><li><code>eventSource</code> \u672C\u8D28\u4ECD\u7136\u662F http\uFF0C\u4EC5\u63D0\u4F9B\u670D\u52A1\u5668\u7AEF\u5230\u6D4F\u89C8\u5668\u7AEF\u7684\u5355\u5411\u6587\u672C\u4F20\u8F93\uFF0C\u4E0D\u9700\u8981\u5FC3\u8DF3\u94FE\u63A5\uFF0C\u94FE\u63A5\u65AD\u5F00\u56DE\u6301\u7EED\u91CD\u53D1\u94FE\u63A5\u3002</li><li><code>websocket</code> \u662F\u57FA\u4E8E TCP \u7684\u534F\u8BAE\uFF0C\u63D0\u4F9B\u53CC\u5411\u6570\u636E\u4F20\u8F93\uFF0C\u652F\u6301\u4E8C\u8FDB\u5236\uFF0C\u9700\u8981\u5FC3\u8DF3\u94FE\u63A5\uFF0C\u65AD\u5F00\u94FE\u63A5\u4E0D\u4F1A\u91CD\u94FE\u3002</li></ul></div><h4 id="\u4EC0\u4E48\u662F\u5FC3\u8DF3\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u5FC3\u8DF3\u94FE\u63A5" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u5FC3\u8DF3\u94FE\u63A5</h4><div class="custom-container tip"><p class="custom-container-title">\u5FC3\u8DF3\u94FE\u63A5</p><p>\u5FC3\u8DF3\u94FE\u63A5\uFF1A\u662F\u4E00\u79CD\u673A\u5236\uFF0C\u6765\u68C0\u6D4B\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u662F\u5426\u5904\u4E8E\u6B63\u5E38\u7684\u94FE\u63A5\u72B6\u6001\u3002</p><p>\u5FC3\u8DF3\u673A\u5236\uFF1A\u8DF3\u673A\u5236\u662F\u6BCF\u9694\u4E00\u6BB5\u65F6\u95F4\u4F1A\u5411\u670D\u52A1\u5668\u53D1\u9001\u4E00\u4E2A\u6570\u636E\u5305\uFF0C\u544A\u8BC9\u670D\u52A1\u5668\u81EA\u5DF1\u8FD8\u6D3B\u7740\uFF0C\u540C\u65F6\u5BA2\u6237\u7AEF\u4F1A\u786E\u8BA4\u670D\u52A1\u5668\u7AEF\u662F\u5426\u8FD8\u6D3B\u7740\uFF0C\u5982\u679C\u8FD8\u6D3B\u7740\u7684\u8BDD\uFF0C\u5C31\u4F1A\u56DE\u4F20\u4E00\u4E2A\u6570\u636E\u5305\u7ED9\u5BA2\u6237\u7AEF\u6765\u786E\u5B9A\u670D\u52A1\u5668\u7AEF\u4E5F\u8FD8\u6D3B\u7740\uFF0C\u5426\u5219\u7684\u8BDD\uFF0C\u6709\u53EF\u80FD\u662F\u7F51\u7EDC\u65AD\u5F00\u8FDE\u63A5\u4E86\uFF0C\u9700\u8981\u91CD\u8FDE\u3002</p></div><h5 id="eventsource" tabindex="-1"><a class="header-anchor" href="#eventsource" aria-hidden="true">#</a> eventsource</h5><details class="custom-container details"><summary>\u793A\u4F8B\u4EE3\u7801</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span>EventSource<span class="token punctuation">)</span><span class="token operator">!==</span><span class="token string">&quot;undefined&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">var</span> source<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">EventSource</span><span class="token punctuation">(</span><span class="token string">&quot;/demo/api&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">//\u8BF7\u6C42\u7684url</span>
    source<span class="token punctuation">.</span><span class="token function-variable function">onopen</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                <span class="token comment">//\u63E1\u624B\u8FDE\u63A5</span>
    source<span class="token punctuation">.</span><span class="token function-variable function">onerror</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>                <span class="token comment">//\u9519\u8BEF</span>
    source<span class="token punctuation">.</span><span class="token function-variable function">onclose</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>              <span class="token comment">//\u5173\u95ED</span>
    source<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span>             <span class="token comment">//\u63A5\u6536\u4FE1\u606F</span>
        document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;result&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML<span class="token operator">+=</span>event<span class="token punctuation">.</span>data <span class="token operator">+</span> <span class="token string">&quot;&lt;br&gt;&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span>
<span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;result&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML<span class="token operator">=</span><span class="token string">&quot;\u62B1\u6B49\uFF0C\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 server-sent \u4E8B\u4EF6...&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></details><h5 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket" aria-hidden="true">#</a> websocket</h5><details class="custom-container details"><summary>\u793A\u4F8B\u4EE3\u7801</summary><h5 id="\u524D\u7AEF-js" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF-js" aria-hidden="true">#</a> \u524D\u7AEF js</h5><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// &lt;div&gt;user input\uFF1A&lt;input type=&quot;text&quot;&gt;&lt;/div&gt;</span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://cdn.bootcss.com/socket.io/2.2.0/socket.io.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> socket <span class="token operator">=</span> <span class="token function">io</span><span class="token punctuation">(</span><span class="token string">&quot;http://www.demo.com:8080&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u8FDE\u63A5\u6210\u529F\u5904\u7406</span>
socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;connect&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u76D1\u542C\u670D\u52A1\u7AEF\u6D88\u606F</span>
  socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;data from server: ---&gt; &quot;</span> <span class="token operator">+</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u9519\u8BEF</span>
  socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;data from server: ---&gt; &quot;</span> <span class="token operator">+</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u76D1\u542C\u670D\u52A1\u7AEF\u5173\u95ED</span>
  socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;disconnect&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Server socket has closed.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

socket<span class="token punctuation">.</span><span class="token function-variable function">onopen</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
socket<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
socket<span class="token punctuation">.</span><span class="token function-variable function">onerror</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
socket<span class="token punctuation">.</span><span class="token function-variable function">onclose</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// \u521B\u5EFA\u5FC3\u8DF3\u68C0\u6D4B\uFF08\u7701\u7565\uFF09</span>
<span class="token comment">// ...</span>

<span class="token comment">// \u53D1\u9001\u6D88\u606F/\u6570\u636E</span>
document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function-variable function">onblur</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  socket<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h5 id="nodejs-\u540E\u53F0" tabindex="-1"><a class="header-anchor" href="#nodejs-\u540E\u53F0" aria-hidden="true">#</a> nodejs \u540E\u53F0</h5><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> socket <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;socket.io&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u542Fhttp\u670D\u52A1</span>
<span class="token keyword">var</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;Content-type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text/html&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token string">&quot;8080&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Server is running at port 8080...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u76D1\u542Csocket\u8FDE\u63A5</span>
socket<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>server<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;connection&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">client</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u63A5\u6536\u4FE1\u606F</span>
  client<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u53D1\u9001\u6D88\u606F</span>
    client<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;hello\uFF1A&quot;</span> <span class="token operator">+</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;data from client: ---&gt; &quot;</span> <span class="token operator">+</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u65AD\u5F00\u5904\u7406</span>
  client<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;disconnect&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Client socket has closed.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div></details>`,10))}var c=s(t,[["render",p],["__file","12-eventsource\u4E0Ewebsocket.html.vue"]]);export{c as default};
