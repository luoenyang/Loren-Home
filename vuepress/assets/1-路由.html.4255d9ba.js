import{_ as s,p as a}from"./app.5c80a7c1.js";const p={};function e(t,n){return n[0]||(n[0]=a(`<h3 id="vue-router\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#vue-router\u7B80\u4ECB" aria-hidden="true">#</a> vue-router\u7B80\u4ECB</h3><p>vue-router\u662FVue.js\u7684\u5B98\u65B9\u8DEF\u7531\u7BA1\u7406\u5668\u3002\u5B83\u548CVue.js\u6DF1\u5EA6\u96C6\u6210\uFF0C\u7528\u4E8E\u6784\u5EFA\u5355\u9875\u9762\u5E94\u7528\uFF08SPA\uFF09\u3002\u5728\u5355\u9875\u9762\u5E94\u7528\u4E2D\uFF0C\u9875\u9762\u7684\u8DEF\u7531\u548C\u7EC4\u4EF6\u662F\u7D27\u5BC6\u5173\u8054\u7684\uFF0C\u901A\u8FC7\u8DEF\u7531\u7684\u53D8\u5316\u6765\u52A8\u6001\u5730\u6E32\u67D3\u4E0D\u540C\u7684\u7EC4\u4EF6\uFF0C\u4ECE\u800C\u5B9E\u73B0\u9875\u9762\u7684\u5207\u6362\u3002</p><h3 id="vue-router\u7684\u6838\u5FC3\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#vue-router\u7684\u6838\u5FC3\u6982\u5FF5" aria-hidden="true">#</a> vue-router\u7684\u6838\u5FC3\u6982\u5FF5</h3><ul><li>\u8DEF\u7531\uFF08Route\uFF09\uFF1A</li></ul><p>\u8DEF\u7531\u63CF\u8FF0\u4E86URL\u4E0EUI\u4E4B\u95F4\u7684\u6620\u5C04\u5173\u7CFB\u3002\u5728vue-router\u4E2D\uFF0C\u6BCF\u4E2A\u8DEF\u7531\u5BF9\u8C61\u90FD\u5305\u542B\u4E86\u4E00\u4E2Apath\u5C5E\u6027\uFF08\u7528\u4E8E\u5339\u914DURL\uFF09\u548C\u4E00\u4E2Acomponent\u5C5E\u6027\uFF08\u7528\u4E8E\u6307\u5B9A\u5F53URL\u5339\u914D\u65F6\u5E94\u8BE5\u6E32\u67D3\u7684\u7EC4\u4EF6\uFF09\u3002</p><ul><li>\u8DEF\u7531\u8868\uFF08Router Table\uFF09\uFF1A</li></ul><p>\u8DEF\u7531\u8868\u662F\u4E00\u4E2A\u5305\u542B\u591A\u4E2A\u8DEF\u7531\u5BF9\u8C61\u7684\u6570\u7EC4\u3002\u5B83\u5B9A\u4E49\u4E86\u5E94\u7528\u4E2D\u6240\u6709\u53EF\u80FD\u7684URL\u4E0E\u7EC4\u4EF6\u4E4B\u95F4\u7684\u6620\u5C04\u5173\u7CFB\u3002</p><ul><li>\u8DEF\u7531\u5668\uFF08Router\uFF09\uFF1A</li></ul><p>\u8DEF\u7531\u5668\u662Fvue-router\u7684\u6838\u5FC3\u5BF9\u8C61\u3002\u5B83\u8D1F\u8D23\u89E3\u6790URL\u3001\u5339\u914D\u8DEF\u7531\u8868\u3001\u6E32\u67D3\u5BF9\u5E94\u7684\u7EC4\u4EF6\uFF0C\u5E76\u5904\u7406\u7528\u6237\u7684\u5BFC\u822A\u8BF7\u6C42\u3002</p><ul><li>\u5BFC\u822A\u5B88\u536B\uFF08Navigation Guards\uFF09\uFF1A</li></ul><p>\u5BFC\u822A\u5B88\u536B\u7528\u4E8E\u5728\u8DEF\u7531\u5207\u6362\u8FC7\u7A0B\u4E2D\u6267\u884C\u4E00\u4E9B\u989D\u5916\u7684\u903B\u8F91\uFF0C\u5982\u6743\u9650\u9A8C\u8BC1\u3001\u9875\u9762\u8DF3\u8F6C\u7B49\u3002vue-router\u63D0\u4F9B\u4E86\u5168\u5C40\u5B88\u536B\u3001\u8DEF\u7531\u72EC\u4EAB\u5B88\u536B\u548C\u7EC4\u4EF6\u5185\u5B88\u536B\u7B49\u591A\u79CD\u7C7B\u578B\u7684\u5BFC\u822A\u5B88\u536B\u3002</p><h1 id="vue-router\u7684\u5E95\u5C42\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#vue-router\u7684\u5E95\u5C42\u539F\u7406" aria-hidden="true">#</a> vue-router\u7684\u5E95\u5C42\u539F\u7406</h1><ul><li><p>URL\u4E0E\u7EC4\u4EF6\u7684\u6620\u5C04\uFF1Avue-router\u901A\u8FC7\u8DEF\u7531\u8868\u6765\u5EFA\u7ACBURL\u4E0E\u7EC4\u4EF6\u4E4B\u95F4\u7684\u6620\u5C04\u5173\u7CFB\u3002\u5F53\u7528\u6237\u8BBF\u95EE\u4E00\u4E2AURL\u65F6\uFF0Cvue-router\u4F1A\u89E3\u6790\u8FD9\u4E2AURL\uFF0C\u5E76\u5728\u8DEF\u7531\u8868\u4E2D\u67E5\u627E\u5339\u914D\u7684\u8DEF\u7531\u5BF9\u8C61\u3002\u4E00\u65E6\u627E\u5230\u5339\u914D\u7684\u8DEF\u7531\u5BF9\u8C61\uFF0Cvue-router\u5C31\u4F1A\u6E32\u67D3\u8BE5\u8DEF\u7531\u5BF9\u8C61\u6307\u5B9A\u7684\u7EC4\u4EF6\u3002</p></li><li><p>\u524D\u7AEF\u8DEF\u7531\u7684\u5B9E\u73B0\uFF1Ahash\u6A21\u5F0F\uFF0Chistory\u6A21\u5F0F</p></li><li><p>\u5BFC\u822A\u5B88\u536B\u7684\u6267\u884C\uFF1A\u5728\u8DEF\u7531\u5207\u6362\u8FC7\u7A0B\u4E2D\uFF0Cvue-router\u4F1A\u6267\u884C\u76F8\u5E94\u7684\u5BFC\u822A\u5B88\u536B\u3002</p></li></ul><h3 id="\u8DEF\u7531\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u6A21\u5F0F" aria-hidden="true">#</a> \u8DEF\u7531\u6A21\u5F0F</h3><h3 id="_1-hash-\u5982-http-www-abc-com-hello" tabindex="-1"><a class="header-anchor" href="#_1-hash-\u5982-http-www-abc-com-hello" aria-hidden="true">#</a> 1. hash \uFF0C\u5982\uFF1Ahttp://www.abc.com/#/hello</h3><ul><li>\u539F\u7406\uFF1A\u4F7F\u7528 <code>hashchange</code> \u4E8B\u4EF6\u6765\u76D1\u542C <code>hash</code> \u503C\u7684\u53D8\u5316\uFF0C\u4ECE\u800C\u5BF9\u9875\u9762\u8FDB\u884C\u8DF3\u8F6C\uFF08\u6E32\u67D3\uFF09</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 1. hash \u2014\u2014\u5373\u5730\u5740\u680FURL\u4E2D\u7684#\u7B26\u53F7</span>
<span class="token comment">// 2. hash \u503C\u7684\u6539\u53D8\uFF0C\u90FD\u4F1A\u5728\u6D4F\u89C8\u5668\u7684\u8BBF\u95EE\u5386\u53F2\u4E2D\u589E\u52A0\u4E00\u4E2A\u8BB0\u5F55\u3002\u56E0\u6B64\u6211\u4EEC\u80FD\u901A\u8FC7\u6D4F\u89C8\u5668\u7684\u56DE\u9000\u3001\u524D\u8FDB\u6309\u94AE\u63A7\u5236hash \u7684\u5207\u6362\uFF1B</span>
<span class="token comment">// 3. hash\u867D\u7136\u51FA\u73B0URL\u4E2D\uFF0C\u4F46\u4E0D\u4F1A\u88AB\u5305\u542B\u5728HTTP\u8BF7\u6C42\u4E2D\uFF0C\u5BF9\u540E\u7AEF\u5B8C\u5168\u6CA1\u6709\u5F71\u54CD\uFF0C\u56E0\u6B64\u6539\u53D8hash\u4E0D\u4F1A\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\u3002</span>
<span class="token comment">// 4. \u7F51\u7EDC\u8BF7\u6C42\u4E0D\u4F1A404\u9519\u8BEF\uFF0C\u53EF\u4EE5\u914D\u7F6Evue\u8DEF\u7531404\u9875\u9762\u3002</span>
<span class="token comment">// 5. onhashchange\u4E8B\u4EF6\uFF0C\u53EF\u4EE5\u5728windows\u5BF9\u8C61\u4E0A\u76D1\u542C\u8FD9\u4E2A\u4E8B\u4EF6:</span>
windows<span class="token punctuation">.</span><span class="token function-variable function">onhashchange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>oldURL<span class="token punctuation">,</span> event<span class="token punctuation">.</span>newURL<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> hash <span class="token operator">=</span> location<span class="token punctuation">.</span>hash<span class="token punctuation">;</span> <span class="token comment">//\u901A\u8FC7location\u5BF9\u8C61\u6765\u83B7\u53D6hash\u5730\u5740</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>hash<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// #/notebooks/123456/list  \u5730\u5740\u4ECE#\u53F7\u5F00\u59CB</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u4E5F\u5E38\u7528vue\u7684\u8DEF\u7531\u76D1\u542C</span>
<span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u76D1\u542C\u8DEF\u7531\u53D8\u5316</span>
    <span class="token function">$route</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="_2-history-\u4F20\u7EDF" tabindex="-1"><a class="header-anchor" href="#_2-history-\u4F20\u7EDF" aria-hidden="true">#</a> 2. history\uFF08\u4F20\u7EDF\uFF09</h3><p>\u5229\u7528\u4E86 HTML5 History Interface \u4E2D\u65B0\u589E\u7684 pushState() \u548C replaceState() \u65B9\u6CD5\u3002</p><ul><li>\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u5E94\u7528\u4E8E\u6D4F\u89C8\u5668\u7684\u5386\u53F2\u8BB0\u5F55\u7AD9\uFF0C\u5728\u5F53\u524D\u5DF2\u6709\u7684 back\u3001forward\u3001go \u7684\u57FA\u7840\u4E4B\u4E0A\uFF0C\u5B83\u4EEC\u63D0\u4F9B\u4E86\u5BF9\u5386\u53F2\u8BB0\u5F55\u8FDB\u884C\u4FEE\u6539\u7684\u529F\u80FD\u3002</li><li>\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u6709\u4E2A\u5171\u540C\u7684\u7279\u70B9\uFF1A\u5F53\u8C03\u7528\u4ED6\u4EEC\u4FEE\u6539\u6D4F\u89C8\u5668\u5386\u53F2\u8BB0\u5F55\u6808\u540E\uFF0C\u867D\u7136\u5F53\u524D URL \u6539\u53D8\u4E86\uFF0C\u4F46\u6D4F\u89C8\u5668\u4E0D\u4F1A\u5237\u65B0\u9875\u9762\uFF0C\u8FD9\u5C31\u4E3A\u5355\u9875\u5E94\u7528\u524D\u7AEF\u8DEF\u7531\u201C\u66F4\u65B0\u89C6\u56FE\u4F46\u4E0D\u91CD\u65B0\u8BF7\u6C42\u9875\u9762\u201D\u63D0\u4F9B\u4E86\u57FA\u7840\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 1. \u53EF\u4F7F\u7528 back,forward,go \u65B9\u6CD5</span>
history<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u540E\u9000\u4E24\u6B21</span>
history<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u524D\u8FDB\u4E24\u6B21</span>
history<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u540E\u9000</span>
history<span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u524D\u8FDB</span>

<span class="token comment">// 2. \u7F51\u7EDC\u8BF7\u6C42\u4F1A\u6709404\u9519\u8BEF\u60C5\u51B5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_3-abstract-\u652F\u6301\u6240\u6709-javascript-\u8FD0\u884C\u73AF\u5883-\u5982-node-js-\u670D\u52A1\u5668\u7AEF" tabindex="-1"><a class="header-anchor" href="#_3-abstract-\u652F\u6301\u6240\u6709-javascript-\u8FD0\u884C\u73AF\u5883-\u5982-node-js-\u670D\u52A1\u5668\u7AEF" aria-hidden="true">#</a> 3. abstract : \u652F\u6301\u6240\u6709 JavaScript \u8FD0\u884C\u73AF\u5883\uFF0C\u5982 Node.js \u670D\u52A1\u5668\u7AEF</h3><ul><li>\u5982\u679C\u53D1\u73B0\u6CA1\u6709\u6D4F\u89C8\u5668\u7684 API\uFF0C\u8DEF\u7531\u4F1A\u81EA\u52A8\u5F3A\u5236\u8FDB\u5165\u8FD9\u4E2A\u6A21\u5F0F</li></ul><h3 id="\u8DEF\u7531\u61D2\u52A0\u8F7D-\u6309\u9700\u52A0\u8F7D-\u3001\u5F02\u6B65\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u61D2\u52A0\u8F7D-\u6309\u9700\u52A0\u8F7D-\u3001\u5F02\u6B65\u8DEF\u7531" aria-hidden="true">#</a> \u8DEF\u7531\u61D2\u52A0\u8F7D\uFF08\u6309\u9700\u52A0\u8F7D\uFF09 \u3001\u5F02\u6B65\u8DEF\u7531</h3><ul><li>\u539F\u56E0\uFF1A\u6253\u5305\u540E\u7684\u6587\u4EF6\u5C06\u4F1A\u5F02\u5E38\u7684\u5927\uFF0C\u9020\u6210\u8FDB\u5165\u9996\u9875\u65F6\uFF0C\u9700\u8981\u52A0\u8F7D\u7684\u5185\u5BB9\u8FC7\u591A\uFF0C\u5EF6\u65F6\u8FC7\u957F\uFF0C\u4E0D\u5229\u4E8E\u7528\u6237\u4F53\u9A8C\u3002</li><li>\u64CD\u4F5C\uFF1A\u61D2\u52A0\u8F7D\u5219\u53EF\u4EE5\u5C06\u9875\u9762\u8FDB\u884C\u5212\u5206\uFF0C\u9700\u8981\u7684\u65F6\u5019\u52A0\u8F7D\u9875\u9762\uFF0C\u53EF\u4EE5\u6709\u6548\u7684\u5206\u62C5\u9996\u9875\u6240\u627F\u62C5\u7684\u52A0\u8F7D\u538B\u529B\uFF0C\u51CF\u5C11\u9996\u9875\u52A0\u8F7D\u7528\u65F6\u3002</li><li>\u539F\u7406\uFF1A\u5F02\u6B65\u52A0\u8F7D\uFF0Cvue-router \u914D\u7F6E\u8DEF\u7531 , \u4F7F\u7528 vue \u7684\u5F02\u6B65\u7EC4\u4EF6\u6280\u672F , \u5B9E\u73B0\u6309\u9700\u52A0\u8F7D\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span> <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/home/home.vue&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span> <span class="token comment">// \u61D2\u52A0\u8F7D\uFF08\u6309\u9700\u52A0\u8F7D\u8DEF\u7531\uFF09</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u8DEF\u7531\u91CD\u5B9A\u5411" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u91CD\u5B9A\u5411" aria-hidden="true">#</a> \u8DEF\u7531\u91CD\u5B9A\u5411</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">redirect</span><span class="token operator">:</span><span class="token string">&#39;/home&#39;</span> <span class="token punctuation">}</span> <span class="token comment">// \u61D2\u52A0\u8F7D\uFF08\u6309\u9700\u52A0\u8F7D\u8DEF\u7531\uFF09</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u5D4C\u5957\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u5D4C\u5957\u8DEF\u7531" aria-hidden="true">#</a> \u5D4C\u5957\u8DEF\u7531</h3><p>/about \u8DEF\u5F84\u4E0B\u6709\u4E00\u4E2A\u5D4C\u5957\u8DEF\u7531 /about/user/:id\u3002\u5F53\u8BBF\u95EE /about/user/123 \u65F6\uFF0CUser \u7EC4\u4EF6\u5C06\u88AB\u6E32\u67D3\u5728 About \u7EC4\u4EF6\u7684\u5185\u90E8\u3002<br> \u5F53\u4F60\u5728About\u7EC4\u4EF6\u5185\u90E8\u4F7F\u7528 <code>&lt;router-view&gt;</code> \u65F6\uFF0C\u5D4C\u5957\u8DEF\u7531\u4E2D\u7684User\u7EC4\u4EF6\u5C06\u88AB\u6E32\u67D3\u5728\u8FD9\u4E2A\u4F4D\u7F6E\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// vue2</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&#39;./components/Home.vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">&#39;./components/About.vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> User <span class="token keyword">from</span> <span class="token string">&#39;./components/User.vue&#39;</span><span class="token punctuation">;</span>
 
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Home
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;about&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> About<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;user/:id&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> User
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
 
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;history&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">BASE_URL</span><span class="token punctuation">,</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span><span class="token punctuation">;</span>
 
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  router<span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u7B80\u5355\u8DEF\u7531\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u8DEF\u7531\u5B9E\u4F8B" aria-hidden="true">#</a> \u7B80\u5355\u8DEF\u7531\u5B9E\u4F8B</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// vue2</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">;</span>
 
<span class="token comment">// \u5F15\u5165\u7EC4\u4EF6</span>
<span class="token keyword">import</span> HomePage <span class="token keyword">from</span> <span class="token string">&#39;./components/HomePage.vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> AboutPage <span class="token keyword">from</span> <span class="token string">&#39;./components/AboutPage.vue&#39;</span><span class="token punctuation">;</span>
 
<span class="token comment">// \u4F7F\u7528VueRouter</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">// \u521B\u5EFA\u8DEF\u7531\u5B9E\u4F8B</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;history&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u4F7F\u7528HTML5 History\u6A21\u5F0F</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// \u5B9A\u4E49\u8DEF\u7531</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6839\u8DEF\u5F84</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u547D\u540D\u8DEF\u7531</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> HomePage <span class="token comment">// \u5BF9\u5E94\u7684\u7EC4\u4EF6</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5173\u4E8E\u9875\u9762\u7684\u8DEF\u5F84</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;about&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u547D\u540D\u8DEF\u7531</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> AboutPage <span class="token comment">// \u5BF9\u5E94\u7684\u7EC4\u4EF6</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">// \u521B\u5EFA\u548C\u6302\u8F7DVue\u5B9E\u4F8B</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  router <span class="token comment">// \u4F7F\u7528\u8DEF\u7531</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div>`,34))}var c=s(p,[["render",e],["__file","1-\u8DEF\u7531.html.vue"]]);export{c as default};
