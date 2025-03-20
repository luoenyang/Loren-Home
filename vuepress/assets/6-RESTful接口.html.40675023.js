import{_ as n,p as a}from"./app.5c80a7c1.js";const e={};function l(r,s){return s[0]||(s[0]=a(`<h1 id="rest" tabindex="-1"><a class="header-anchor" href="#rest" aria-hidden="true">#</a> REST</h1><blockquote><ul><li>REST\u5373\u8868\u8FF0\u6027\u72B6\u6001\u4F20\u9012\uFF0C\u4E00\u79CD\u8F6F\u4EF6\u67B6\u6784\u98CE\u683C</li><li>\u4E00\u7EC4\u8F6F\u4EF6\u67B6\u6784\u7EA6\u675F\u6761\u4EF6\u548C\u539F\u5219,RESTful\u63A5\u53E3\u662F\u4E00\u79CD\u98CE\u683C,\u4E0D\u662F\u6807\u51C6(\u4E0D\u4E00\u5B9A\u8981\u8FD9\u4E48\u505A)</li><li>\u4EA4\u4E92\u7684\u6570\u636E\u4E00\u822C\u662Fjson\u683C\u5F0F</li></ul></blockquote><h1 id="restful\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#restful\u63A5\u53E3" aria-hidden="true">#</a> RESTful\u63A5\u53E3</h1><blockquote><p>\u8BF7\u6C42\u7684\u65B9\u6CD5</p><ol><li>GET - \u7528\u4E8E\u83B7\u53D6\u6570\u636E</li><li>POST - \u7528\u4E8E\u6DFB\u52A0\u6570\u636E</li><li>DELETE - \u7528\u4E8E\u5220\u9664\u6570\u636E</li><li>PUT - \u7528\u4E8E\u5168\u90E8\u66F4\u65B0\u6570\u636E</li><li>PATCH - \u7528\u4E8E\u5C40\u90E8\u66F4\u65B0\u6570\u636E</li></ol></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u83B7\u53D6\u7528\u6237\u5217\u8868</span>
<span class="token comment">// GET /api/users  </span>

<span class="token comment">// \u521B\u5EFA\u7528\u6237</span>
<span class="token comment">// POST /api/users </span>

<span class="token comment">// \u5168\u90E8\u66F4\u65B0 id\u4E3A123\u7684\u7528\u6237</span>
<span class="token comment">// PUT /api/users/123</span>

<span class="token comment">// \u5C40\u90E8\u66F4\u65B0 id\u4E3A123\u7684\u7528\u6237</span>
<span class="token comment">// PATCH /api/users/123</span>

<span class="token comment">// \u5220\u9664 id\u4E3A123\u7684\u7528\u6237</span>
<span class="token comment">// DELETE /api/users/123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,5))}var i=n(e,[["render",l],["__file","6-RESTful\u63A5\u53E3.html.vue"]]);export{i as default};
