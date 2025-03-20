import{_ as c,k as p,o as i,c as r,p as l,a as s,b as a,l as t,m as o,F as d}from"./app.e6691f45.js";const m={},k={id:"_4-vuex-\u4ED3\u5E93store",tabindex:"-1"},b={id:"_5-\u4F5C\u7528\u57DF\u63D2\u69FD-\u5B50\u7EC4\u4EF6\u56DE\u4F20\u7ED9\u7236\u7EC4\u4EF69-\u63D2\u69FD",tabindex:"-1"},h={class:"custom-container details"};function g(v,n){const e=p("RouterLink"),u=p("v-model-parent");return i(),r(d,null,[n[7]||(n[7]=l(`<h3 id="_1-\u7236\u5411\u5B50\u7EC4\u4EF6\u4F20\u503C-props" tabindex="-1"><a class="header-anchor" href="#_1-\u7236\u5411\u5B50\u7EC4\u4EF6\u4F20\u503C-props" aria-hidden="true">#</a> 1. \u7236\u5411\u5B50\u7EC4\u4EF6\u4F20\u503C props</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- \u5728\u5B50\u7EC4\u4EF6props\u7684\u5B9A\u4E49\u8981\u4F20\u7684\u5C5E\u6027\u503C --&gt;</span>
props: {fromParentAge: Number }

<span class="token comment">&lt;!-- \u5728\u7236\u7EC4\u4EF6\u4F7F\u7528 v-bind\uFF08\u7B80\u5199 :\uFF09\u8FDB\u884C\u4F20\u5165 --&gt;</span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child</span> <span class="token attr-name">:fromParentAge</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onedata<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>child</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_2-\u5B50\u5411\u7236\u7EC4\u4EF6\u4F20\u503C-emit" tabindex="-1"><a class="header-anchor" href="#_2-\u5B50\u5411\u7236\u7EC4\u4EF6\u4F20\u503C-emit" aria-hidden="true">#</a> 2. \u5B50\u5411\u7236\u7EC4\u4EF6\u4F20\u503C $emit</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- \u5B50\u7EC4\u4EF6\u901A\u8FC7\u4E8B\u4EF6\u89E6\u53D1\u5411\u7236\u7EC4\u4EF6\u901A\u4FE1 \u544A\u8BC9\u7236\u7EC4\u4EF6 --&gt;</span>
emits:[&#39;eventName&#39;]
this.$emit(&quot;eventName&quot;, data)

<span class="token comment">&lt;!-- \u7236\u7EC4\u4EF6\u901A\u8FC7 v-on \uFF08\u7B80\u5199\uFF1A@\uFF09\u8FDB\u884C\u76D1\u542C --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child</span> <span class="token attr-name">@eventName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parentMethodName<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>child</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_2-1-\u7236\u8C03\u7528\u5B50\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-1-\u7236\u8C03\u7528\u5B50\u7684\u65B9\u6CD5" aria-hidden="true">#</a> 2-1 \u7236\u8C03\u7528\u5B50\u7684\u65B9\u6CD5</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 1. \u4F7F\u7528refs.todosome()  \u4F7F\u7528\u8FD9\u4E2A\u76F8\u5BF9\u597D\u70B9</span>

<span class="token comment">// 2. \u4F7F\u7528 $on\u3001$emit</span>
<span class="token comment">// \u7236 </span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>child<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&quot;childmethod&quot;</span><span class="token punctuation">)</span>    <span class="token comment">// \u5B50\u7EC4\u4EF6$on\u4E2D\u7684\u540D\u5B57\uFF0C\u8FD9\u6837\u662F\u4E0D\u662F\u4E5F\u4F1A\u4F60\u9020\u6210\u6267\u884C\u5BF9\u7236</span>

<span class="token comment">// \u5B50</span>
<span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&#39;childmethod&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6211\u662F\u5B50\u7EC4\u4EF6\u65B9\u6CD5&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="_3-\u901A\u8FC7ref-refs-\u8FDB\u884C\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#_3-\u901A\u8FC7ref-refs-\u8FDB\u884C\u901A\u4FE1" aria-hidden="true">#</a> 3. \u901A\u8FC7ref\uFF0C $refs \u8FDB\u884C\u901A\u4FE1</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- \u5B50\u7EC4\u4EF6\u5B9A\u4E49\u4E00\u4E2A\u5185\u90E8\u65B9\u6CD5 childMethod  --&gt;</span>
methods:{ getSomeData(){}

<span class="token comment">&lt;!-- \u5F15\u5165\u5B50\u7EC4\u4EF6\u65F6 \u8BBE\u7F6E\u4E00\u4E2Aref --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>childRef<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>child</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- \u8981\u83B7\u53D6\u6216\u64CD\u4F5C\u5B50\u7EC4\u4EF6\u65F6\uFF0C\u5728\u7236\u7EC4\u4EF6\u8FDB\u884C\u67E5\u627E\u5B50\u7EC4\u4EF6\uFF0C\u5E76\u6267\u884C\u5B50\u7EC4\u4EF6\u5185\u90E8\u65B9\u6CD5 --&gt;</span>
this.$refs.childRef.getSomeData()
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,8)),s("h3",k,[n[1]||(n[1]=s("a",{class:"header-anchor",href:"#_4-vuex-\u4ED3\u5E93store","aria-hidden":"true"},"#",-1)),n[2]||(n[2]=a(" 4. vuex ")),t(e,{to:"/zh/vue%E7%94%9F%E6%80%81/vuex/1-%E4%BB%80%E4%B9%88%E6%98%AFvuex.html"},{default:o(()=>n[0]||(n[0]=[a("\u4ED3\u5E93store")])),_:1})]),s("h3",b,[n[4]||(n[4]=s("a",{class:"header-anchor",href:"#_5-\u4F5C\u7528\u57DF\u63D2\u69FD-\u5B50\u7EC4\u4EF6\u56DE\u4F20\u7ED9\u7236\u7EC4\u4EF69-\u63D2\u69FD","aria-hidden":"true"},"#",-1)),n[5]||(n[5]=a(" 5. \u4F5C\u7528\u57DF\u63D2\u69FD-\u5B50\u7EC4\u4EF6\u56DE\u4F20\u7ED9\u7236\u7EC4\u4EF6")),t(e,{to:"/zh/vue%E7%94%9F%E6%80%81/vue/9-%E6%8F%92%E6%A7%BD.html"},{default:o(()=>n[3]||(n[3]=[a("9-\u63D2\u69FD")])),_:1})]),n[8]||(n[8]=s("h3",{id:"\u6269\u5C55-\u7236\u5B50\u901A\u4FE1v-model\u7684\u5B9E\u73B0",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u6269\u5C55-\u7236\u5B50\u901A\u4FE1v-model\u7684\u5B9E\u73B0","aria-hidden":"true"},"#"),a(" \u6269\u5C55\uFF1A \u7236\u5B50\u901A\u4FE1v-model\u7684\u5B9E\u73B0")],-1)),n[9]||(n[9]=s("p",null,'\u4F7F\u7528\u4E86 mounted\u3001watch\u3001$emit("update:xx",value)',-1)),n[10]||(n[10]=s("p",null,'\u53EF\u4EE5\u4F7F\u7528\u8BED\u6CD5\u7CD6.sync \u914D\u5408 $emit("update:XXX",val)',-1)),n[11]||(n[11]=s("p",null,'vue2\uFF1Athis.$emit("update:xx",value)',-1)),n[12]||(n[12]=s("p",null,"ts\uFF1A\u5982\u793A\u4F8B",-1)),s("details",h,[n[6]||(n[6]=l(`<summary>\u67E5\u770B\u793A\u4F8B</summary><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hello-world</span> <span class="token attr-name">:message.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u53EF\u4EE5\u4F7F\u7528 $emit</li></ul>`,3)),t(u)]),n[13]||(n[13]=s("h3",{id:"\u6CE8\u610F",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u6CE8\u610F","aria-hidden":"true"},"#"),a(" \u6CE8\u610F:")],-1)),n[14]||(n[14]=s("blockquote",null,[s("p",null,"\u5982\u679C\u5B50\u7EC4\u4EF6\u662F\u4E2Adialog, \u5728\u5B50\u7EC4\u4EF6\u5185\u70B9\u51FB\u9876\u90E8\u7684\u5173\u95ED\u6309\u94AE\uFF0C\u8981\u540C\u6B65\u4FEE\u6539\u663E\u793A\u5C5E\u6027\u503C\uFF0C\u7B49\u540C\u4E8E\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u5904\u7406")],-1))],64)}var x=c(m,[["render",g],["__file","4-vue\u7236\u5B50\u901A\u4FE1.html.vue"]]);export{x as default};
