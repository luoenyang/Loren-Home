import{_ as a,p as i}from"./app.e6691f45.js";const d={};function l(o,e){return e[0]||(e[0]=i(`<h1 id="_1-\u6A21\u677F\u5B9E\u73B0\u539F\u7406-vue\u7EC4\u4EF6\u7684\u6E32\u67D3\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#_1-\u6A21\u677F\u5B9E\u73B0\u539F\u7406-vue\u7EC4\u4EF6\u7684\u6E32\u67D3\u8FC7\u7A0B" aria-hidden="true">#</a> 1. \u6A21\u677F\u5B9E\u73B0\u539F\u7406\uFF08vue\u7EC4\u4EF6\u7684\u6E32\u67D3\u8FC7\u7A0B\uFF09</h1><div class="custom-container tip"><p class="custom-container-title">\u539F\u7406</p><p>\u9996\u5148\u5C06\u6A21\u677F\u8F6C\u5316\u4E3A<code>ast\u8BED\u6CD5\u6811</code>\uFF0C\u8FDB\u884C\u9759\u6001\u8282\u70B9\u6807\u8BB0\uFF0C\u4E3B\u8981\u7528\u6765\u505A\u865A\u62DFDOM\u7684\u6E32\u67D3\u4F18\u5316\uFF08\u4F18\u5316\u5668\uFF09\uFF0C\u8BED\u6CD5\u6811\u518D\u901A\u8FC7generate\u8F6C\u5316\u4E3A<code>render\u51FD\u6570</code>\uFF0C\u518D\u901A\u8FC7<code>watcher</code>\u76D1\u6D4B\uFF0C \u5F53\u5C5E\u6027\u53D1\u751F\u53D8\u5316\u65F6\u8C03\u7528<code>render</code>\u51FD\u6570\u751F\u6210<code>VNode</code>\u5BF9\u8C61, vNode\u901A\u8FC7createElement\u65B9\u6CD5\u751F\u6210\u865A\u62DF<code>dom</code>\uFF0C\u518D\u901A\u8FC7patch\u65B9\u6CD5, <code>DOM Diff</code>\u7B97\u6CD5\u6E32\u67D3\u6210<code>\u771F\u5B9Edom</code></p></div><blockquote><ol><li>\u6A21\u677F - \u8BED\u6CD5\u6811 - render\u51FD\u6570 - watcher</li><li>watcher - render\u51FD\u6570 - vnode\u5BF9\u8C61 - \u865A\u62DFdom - dom diff \u7B97\u6CD5 - \u6E32\u67D3\u6210\u771F\u5B9Edom</li></ol></blockquote><h3 id="vue\u7EC4\u4EF6\u7684\u6E32\u67D3\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#vue\u7EC4\u4EF6\u7684\u6E32\u67D3\u8FC7\u7A0B" aria-hidden="true">#</a> vue\u7EC4\u4EF6\u7684\u6E32\u67D3\u8FC7\u7A0B</h3><ul><li>\u89E3\u6790\u6A21\u677F-\u62BD\u8C61\u6210\u8BED\u6CD5\u6811\uFF08ast\uFF09</li><li>\u5C06\u8BED\u6CD5\u6811\u8F6C\u4E3A\u6E32\u67D3\u51FD\u6570\uFF0C\u4EE5\u751F\u6210\u865A\u62DF\u8282\u70B9\uFF08vNode\uFF09</li><li>\u4F7F\u7528\u6E32\u67D3\u51FD\u6570\u8FDB\u884C\u865A\u62DFDOM\u7684\u6E32\u67D3\uFF0C\u518D\u8FDB\u884CDiff\u7B97\u6CD5\u8FDB\u884C\u4E0E\u771F\u5B9EDOM\u7684\u6BD4\u5BF9</li><li>\u6700\u540E\u8FDB\u884C\u771F\u5B9EDOM\u66F4\u65B0</li></ul><h1 id="_2-\u6D4F\u89C8\u5668\u6E32\u67D3\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_2-\u6D4F\u89C8\u5668\u6E32\u67D3\u6D41\u7A0B" aria-hidden="true">#</a> 2. \u6D4F\u89C8\u5668\u6E32\u67D3\u6D41\u7A0B</h1><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. \u7528HTML\u5206\u6790\u5668\u521B\u5EFADOM\u6811
2. \u7528CSS\u5206\u6790\u5668\u751F\u6210\u6837\u5F0F\u8868
3. \u5C06DOM\u6811\u548C\u6837\u5F0F\u8868\uFF0C\u5173\u8054\u8D77\u6765\uFF0C\u6784\u5EFA\u4E00\u9897Render\u6811  
4. \u6D4F\u89C8\u5668\u8FDB\u884C\u5E03\u5C40Layout 
5. Render\u6811\u548C\u8282\u70B9\u663E\u793A\u5750\u6807\u90FD\u6709\u4E86\uFF0C\u5C31\u8C03\u7528\u6BCF\u4E2A\u8282\u70B9paint\u65B9\u6CD5\uFF0C\u628A\u5B83\u4EEC\u7ED8\u5236\u51FA\u6765\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="dom\u6811\u7684\u6784\u5EFA\u662F\u6587\u6863\u52A0\u8F7D\u5B8C\u6210\u5F00\u59CB\u7684" tabindex="-1"><a class="header-anchor" href="#dom\u6811\u7684\u6784\u5EFA\u662F\u6587\u6863\u52A0\u8F7D\u5B8C\u6210\u5F00\u59CB\u7684" aria-hidden="true">#</a> DOM\u6811\u7684\u6784\u5EFA\u662F\u6587\u6863\u52A0\u8F7D\u5B8C\u6210\u5F00\u59CB\u7684</h3><blockquote><p>\u4E0A\u8FF0 1\uFF0C2\uFF0C3 \u662F\u4EA4\u53C9\u8FDB; CSS\u7684\u89E3\u6790\uFF1A\u5D4C\u5957\u6807\u7B7E\u8D8A\u591A\uFF0C\u89E3\u6790\u8D8A\u6162</p></blockquote><h1 id="_3-dom-diff-\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-dom-diff-\u7B97\u6CD5" aria-hidden="true">#</a> 3. dom diff \u7B97\u6CD5</h1><div class="custom-container warning"><p class="custom-container-title">\u5B9A\u4E49\uFF1A\u5EFA\u865A\u62DFDOM\u5E76\u5C06\u5176\u6620\u5C04\u6210\u771F\u5B9EDOM</p><p>\u4F5C\u7528\uFF1A\u67D0\u4E9B\u64CD\u4F5C\u7684\u65F6\u5019\u53EF\u80FD\u4F1A\u51FA\u73B0\u9700\u8981\u66F4\u65B0\u67D0\u4E00\u4E2Adom\u5143\u7D20\uFF0C\u4E0D\u66F4\u65B0\u6574\u4E2A\u7EC4\u4EF6\uFF0C\u4F7F\u7528diff\u7B97\u6CD5\u914D\u5408\u865A\u62DFdom\u5373\u53EF\u5B9E\u73B0\u5C40\u90E8dom\u66F4\u65B0\u3002</p><p>\u8FC7\u7A0B\uFF1A\u5F53\u6570\u636E\u53D8\u5316\u540E(setState())\uFF0C\u4F1A\u91CD\u65B0\u6839\u636E\u65B0\u7684\u6570\u636E\uFF0C\u521B\u5EFA\u65B0\u7684\u865A\u62DFDOM\u5BF9\u8C61\uFF08\u6811\uFF09\u4E0E\u4E0A\u4E00\u6B21\u5F97\u5230\u7684\u865A\u62DFDOM\u5BF9\u8C61\uFF0C\u4F7F\u7528Diff\u7B97\u6CD5\u6BD4\u5BF9\uFF08\u627E\u4E0D\u540C\uFF09\uFF0C\u5F97\u5230\u9700\u8981\u66F4\u65B0\u7684\u5185\u5BB9.</p><p>vue \u7684 diff \u4F18\u52BF\uFF1A\u53EA\u8FDB\u884C\u540C\u5C42\u7EA7\u6BD4\u8F83\uFF0C\u5FFD\u7565\u8DE8\u7EA7\u64CD\u4F5C</p></div><h1 id="\u865A\u62DFdom\u4E0E\u771F\u5B9Edom\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u865A\u62DFdom\u4E0E\u771F\u5B9Edom\u7684\u533A\u522B" aria-hidden="true">#</a> \u865A\u62DFDOM\u4E0E\u771F\u5B9EDOM\u7684\u533A\u522B</h1><blockquote><p>\u6CE8\u610F\uFF1A\u9700\u4E0D\u9700\u8981\u865A\u62DFDOM\uFF0C\u5176\u5B9E\u4E0E\u6846\u67B6\u7684DOM\u64CD\u4F5C\u673A\u5236\u6709\u5173</p></blockquote><ul><li><ol><li>\u865A\u62DFDOM\u4E0D\u4F1A\u8FDB\u884C\u6392\u7248\u4E0E\u91CD\u7ED8\u64CD\u4F5C,\u672C\u8D28\u4E0A\u5C31\u662F\u4E00\u4E2AJS\u5BF9\u8C61\uFF0C\u7528\u6765\u63CF\u8FF0\u4F60\u5E0C\u671B\u5728\u5C4F\u5E55\u4E0A\u770B\u5230\u7684\u5185\u5BB9</li></ol></li><li><ol start="2"><li>\u865A\u62DFDOM\u8FDB\u884C\u9891\u7E41\u4FEE\u6539\uFF0C\u7136\u540E\u4E00\u6B21\u6027\u6BD4\u8F83\u5E76\u4FEE\u6539\u771F\u5B9EDOM\u4E2D\u9700\u8981\u6539\u7684\u90E8\u5206\uFF0C\u6700\u540E\u5E76\u5728\u771F\u5B9EDOM\u4E2D\u8FDB\u884C\u6392\u7248\u4E0E\u91CD\u7ED8\uFF0C\u51CF\u5C11\u6392\u7248\u4E0E\u91CD\u7ED8\u635F\u8017</li></ol></li><li><ol start="3"><li>\u771F\u5B9EDOM\u9891\u7E41\u6392\u7248\u4E0E\u91CD\u7ED8\u7684\u6548\u7387\u662F\u76F8\u5F53\u4F4E\u7684</li></ol></li></ul><h1 id="vue\u4E2D-key\u503C\u5F97\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#vue\u4E2D-key\u503C\u5F97\u4F5C\u7528" aria-hidden="true">#</a> vue\u4E2D key\u503C\u5F97\u4F5C\u7528</h1><ul><li><ol><li>\u53EF\u4EE5\u552F\u4E00\u7684\u786E\u5B9A\u4E00\u4E2ADOM\u5143\u7D20\uFF0C\u8BA9diff\u7B97\u6CD5\u66F4\u52A0\u9AD8\u6548(\u66F4\u65B0\u865A\u62DFdom\u548C\u771F\u5B9Edom\u5BF9\u6BD4)</li></ol></li><li><ol start="2"><li>\u9AD8\u6548\u7684\u66F4\u65B0\u865A\u62DF DOM\uFF0C\u63D0\u9AD8\u6027\u80FD</li></ol></li><li><ol start="3"><li>vue\u5728\u4F7F\u7528\u76F8\u540C\u7684\u6807\u7B7E\u540D\u5143\u7D20\u7684\u8FC7\u6E21\u5207\u6362\u65F6\uFF0C\u4E5F\u4F1A\u4F7F\u7528\u5230key\u5C5E\u6027\uFF0C\u5176\u76EE\u7684\u4E5F\u662F\u4E3A\u4E86\u8BA9vue\u53EF\u4EE5\u533A\u5206\u5B83\u4EEC\uFF0C\u5426\u5219vue\u53EA\u4F1A\u66FF\u6362\u5176\u5185\u90E8\u5C5E\u6027\u800C\u4E0D\u4F1A\u89E6\u53D1\u8FC7\u6E21\u6548\u679C\u3002</li></ol></li><li><ol start="4"><li>\u53E6\u5916\uFF0C\u82E5\u4E0D\u8BBE\u7F6Ekey\uFF0C\u8FD8\u53EF\u80FD\u5728\u5217\u8868\u66F4\u65B0\u65F6\u5F15\u53D1\u4E00\u4E9B\u9690\u853D\u7684bug(\u5982\u5217\u8868\u5220\u9664\u67D0\u9879)</li></ol></li></ul>`,16))}var n=a(d,[["render",l],["__file","1-vue\u6A21\u677F\u5B9E\u73B0\u539F\u7406.html.vue"]]);export{n as default};
