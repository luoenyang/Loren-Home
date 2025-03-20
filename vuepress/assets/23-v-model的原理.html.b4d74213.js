import{_ as a,p as s}from"./app.5c80a7c1.js";const t={};function e(p,n){return n[0]||(n[0]=s(`<h3 id="v-model-\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#v-model-\u6307\u4EE4" aria-hidden="true">#</a> v-model \u6307\u4EE4</h3><blockquote><p>\u5728\u8868\u5355 input\u3001textarea\u3001select \u7B49\u5143\u7D20\u4E0A\u521B\u5EFA\u53CC\u5411\u6570\u636E\u7ED1\u5B9A</p></blockquote><blockquote><p><code>v-model</code> \u672C\u8D28\u4E0A\u4E0D\u8FC7\u662F\u8BED\u6CD5\u7CD6\uFF0Cv-model \u5728\u5185\u90E8\u4E3A\u4E0D\u540C\u7684\u8F93\u5165\u5143\u7D20\u4F7F\u7528\u4E0D\u540C\u7684\u5C5E\u6027\u5E76\u629B\u51FA\u4E0D\u540C\u7684\u4E8B\u4EF6\uFF1A</p></blockquote><div class="custom-container warning"><p class="custom-container-title">\u4F7F\u7528\u7684\u5C5E\u6027\u548C\u4E8B\u4EF6</p><p>text \u548C textarea \u5143\u7D20\u4F7F\u7528 value \u5C5E\u6027\u548C <code>input</code> \u4E8B\u4EF6\uFF1B</p><p>checkbox \u548C radio \u4F7F\u7528 checked \u5C5E\u6027\u548C <code>change</code> \u4E8B\u4EF6\uFF1B</p><p>select \u5B57\u6BB5\u5C06 value \u4F5C\u4E3A prop \u5E76\u5C06 <code> change</code>\u4F5C\u4E3A\u4E8B\u4EF6\u3002</p></div><h3 id="v-model-\u662F\u8BED\u6CD5\u7CD6-\u5185\u90E8\u7B49\u6548-v-bind-\u7684\u53CA\u76F8\u5E94\u4E8B\u4EF6\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#v-model-\u662F\u8BED\u6CD5\u7CD6-\u5185\u90E8\u7B49\u6548-v-bind-\u7684\u53CA\u76F8\u5E94\u4E8B\u4EF6\u64CD\u4F5C" aria-hidden="true">#</a> v-model \u662F\u8BED\u6CD5\u7CD6\uFF0C\u5185\u90E8\u7B49\u6548 v-bind \u7684\u53CA\u76F8\u5E94\u4E8B\u4EF6\u64CD\u4F5C</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- \u7B2C\u4E00\u884C\uFF1Av-model --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>v<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

<span class="token comment">&lt;!-- \u4E0A\u9762\u7B49\u6548\u4E8E\u4E0B\u9762 --&gt;</span>

<span class="token comment">&lt;!-- \u7B2C\u4E8C\u884C\uFF1Av-bind --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>v<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">v-on:</span>input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>v=$event.target.value<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

<span class="token comment">&lt;!-- \u4E0A\u9762\u7B49\u6548\u4E8E\u4E0B\u9762 --&gt;</span>

<span class="token comment">&lt;!-- \u7B2C\u4E09\u884C\uFF1A\u7B80\u5199 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>v<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>v=$event.target.value<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,6))}var o=a(t,[["render",e],["__file","23-v-model\u7684\u539F\u7406.html.vue"]]);export{o as default};
