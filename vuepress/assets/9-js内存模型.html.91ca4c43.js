import{_ as p,o as t,c as l,p as e,a as s,b as o,F as c}from"./app.e6691f45.js";const r={},i=["src"],u=["src"],m=["src"];function b(a,n){return t(),l(c,null,[n[0]||(n[0]=e('<h1 id="js-\u5185\u5B58\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#js-\u5185\u5B58\u6A21\u578B" aria-hidden="true">#</a> js \u5185\u5B58\u6A21\u578B</h1><h3 id="_1-js-\u7684\u5185\u5B58\u6A21\u578B\u53EF\u4EE5\u7B80\u5355\u7684\u7406\u89E3\u4E3A\u4E24\u4E2A\u4E0D\u540C\u7684\u533A\u57DF-\u8C03\u7528\u6808\u548C\u5806\u3002" tabindex="-1"><a class="header-anchor" href="#_1-js-\u7684\u5185\u5B58\u6A21\u578B\u53EF\u4EE5\u7B80\u5355\u7684\u7406\u89E3\u4E3A\u4E24\u4E2A\u4E0D\u540C\u7684\u533A\u57DF-\u8C03\u7528\u6808\u548C\u5806\u3002" aria-hidden="true">#</a> 1. JS \u7684\u5185\u5B58\u6A21\u578B\u53EF\u4EE5\u7B80\u5355\u7684\u7406\u89E3\u4E3A\u4E24\u4E2A\u4E0D\u540C\u7684\u533A\u57DF\uFF1A\u8C03\u7528\u6808\u548C\u5806\u3002</h3><div class="custom-container tip"><p class="custom-container-title">\u6808(stack)\u3001\u5806(heap)</p><ol><li>\u6808\u7528\u6765\u4FDD\u5B58\u539F\u59CB\u6570\u636E\u4EE5\u53CA\u51FD\u6570\u8C03\u7528\u3002</li><li>\u5806\u4FDD\u5B58\u7740\u6240\u6709\u975E\u539F\u59CB\u7C7B\u578B\u7684\u6570\u636E\u3002 \u5B83\u548C\u6808\u6700\u5927\u7684\u533A\u522B\u662F\uFF0C\u5806\u53EF\u4EE5\u4FDD\u5B58\u65E0\u5E8F\u3001\u80FD\u591F\u52A8\u6001\u589E\u5220\u7684\u6570\u636E\u2014\u2014\u5BF9\u4E8E\u5BF9\u8C61\u548C\u6570\u7EC4\u6765\u8BF4\uFF0C\u8FD9\u662F\u5B8C\u7F8E\u7684\u5B58\u50A8\u7A7A\u95F4\u3002</li></ol></div>',3)),s("img",{alt:"\u5806\u6808",src:a.$withBase("/img/stackHeap.png")},null,8,i),n[1]||(n[1]=e(`<h3 id="_2-let-vs-const-\u6211\u4EEC\u5E94\u8BE5\u4F18\u5148\u4F7F\u7528const\u800C\u4E0D\u662Flet-\u9664\u975E\u53D8\u91CF\u4F1A\u88AB\u6539\u53D8\u3002" tabindex="-1"><a class="header-anchor" href="#_2-let-vs-const-\u6211\u4EEC\u5E94\u8BE5\u4F18\u5148\u4F7F\u7528const\u800C\u4E0D\u662Flet-\u9664\u975E\u53D8\u91CF\u4F1A\u88AB\u6539\u53D8\u3002" aria-hidden="true">#</a> 2. let vs const : \u6211\u4EEC\u5E94\u8BE5\u4F18\u5148\u4F7F\u7528const\u800C\u4E0D\u662Flet\uFF0C\u9664\u975E\u53D8\u91CF\u4F1A\u88AB\u6539\u53D8\u3002</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u7A0B\u5E8F\u5458\u4F1A\u5199\u4E0B\u8FD9\u6837\u7684\u4EE3\u7801\uFF1A</span>

<span class="token comment">// \u8FD9\u6BB5\u4EE3\u7801\u6B63\u786E\u7684\u4F7F\u7528let\u58F0\u660E\u53D8\u91CFsum\uFF0C\u56E0\u4E3A\u503C\u88AB\u6539\u53D8\u4E86\u3002</span>
<span class="token comment">// \u7136\u800C\u5374\u9519\u8BEF\u7684\u4F7F\u7528let\u6765\u58F0\u660E\u53D8\u91CFnumbers\uFF0C\u56E0\u4E3A\u4ED6\u4EEC\u8BA4\u4E3A\u7ED9\u6570\u7EC4 push \u4E00\u4E9B\u6570\u636E\u540E\uFF0C\u6570\u7EC4\u7684\u503C\u88AB\u6539\u53D8\u4E86\u3002</span>

<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span>
sum <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span>

<span class="token keyword">let</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
numbers<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
numbers<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>

<span class="token comment">// \u201C\u6539\u53D8\u201D\u7684\u6B63\u786E\u89E3\u91CA\u662F\u2014\u2014\u5185\u5B58\u5730\u5740\u53D8\u4E86\u3002let\u5141\u8BB8\u4F60\u6539\u53D8\u5185\u5B58\u5730\u5740\uFF0Cconst\u5219\u4E0D\u5141\u8BB8</span>
<span class="token comment">// \u4E0A\u9762\u7684numbers\u5176\u5B9E\u53EF\u4EE5\u4F7F\u7528const\u8FDB\u884C\u58F0\u660E\uFF0C\u56E0\u4E3A\u5B83\u662F\u6570\u7EC4\uFF0C\u5B83\u7684\u503C\u6539\u53D8\u4E86\uFF08\u5B58\u5728\u5806\u4E2D\uFF09\uFF0C\u4F46\u662F\u5185\u5B58\u5730\u5740\u6CA1\u53D8</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="_3-\u4F7F\u7528const\u7684\u597D\u5904" tabindex="-1"><a class="header-anchor" href="#_3-\u4F7F\u7528const\u7684\u597D\u5904" aria-hidden="true">#</a> 3. \u4F7F\u7528const\u7684\u597D\u5904</h3><blockquote><ul><li><ol><li>\u51CF\u5C11\u672A\u6765\u7684bug\u3002</li></ol></li><li><ol start="2"><li>\u66F4\u597D\u7684\u4F5C\u7528\u57DF\u7BA1\u7406,\u66F4\u597D\u7684\u5185\u5B58\u7BA1\u7406\u548C\u6027\u80FD\u3002</li></ol></li><li><ol start="3"><li>\u66F4\u597D\u7684\u53EF\u8BFB\u6027</li></ol></li></ul></blockquote><h3 id="_4-var\u3001let\u3001const\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_4-var\u3001let\u3001const\u7684\u533A\u522B" aria-hidden="true">#</a> 4. var\u3001let\u3001const\u7684\u533A\u522B</h3><ul><li><ol><li>var\u5B9A\u4E49\u7684\u53D8\u91CF\uFF0C\u6CA1\u6709\u5757\u7684\u6982\u5FF5\uFF0C\u53EF\u4EE5\u8DE8\u5757\u8BBF\u95EE, \u4E0D\u80FD\u8DE8\u51FD\u6570\u8BBF\u95EE\uFF0C\u6709\u53D8\u91CF\u63D0\u5347\u3002</li></ol></li><li><ol start="2"><li>let\u5B9A\u4E49\u7684\u53D8\u91CF\uFF0C\u53EA\u80FD\u5728\u5757\u4F5C\u7528\u57DF\u91CC\u8BBF\u95EE\uFF0C\u4E0D\u80FD\u8DE8\u5757\u8BBF\u95EE\uFF0C\u4E5F\u4E0D\u80FD\u8DE8\u51FD\u6570\u8BBF\u95EE\uFF0C\u65E0\u53D8\u91CF\u63D0\u5347\uFF0C\u4E0D\u53EF\u4EE5\u91CD\u590D\u58F0\u660E\u3002</li></ol></li><li><ol start="3"><li>const\u7528\u6765\u5B9A\u4E49\u5E38\u91CF\uFF0C\u4F7F\u7528\u65F6\u5FC5\u987B\u521D\u59CB\u5316(\u5373\u5FC5\u987B\u8D4B\u503C)\uFF0C\u53EA\u80FD\u5728\u5757\u4F5C\u7528\u57DF\u91CC\u8BBF\u95EE\uFF0C\u800C\u4E14\u4E0D\u80FD\u4FEE\u6539\uFF0C\u65E0\u53D8\u91CF\u63D0\u5347\uFF0C\u4E0D\u53EF\u4EE5\u91CD\u590D\u58F0\u660E\u3002</li></ol></li><li><ol start="4"><li>const\u5B9A\u4E49\u7684\u662F\u5E38\u91CF\uFF0C\u4E0D\u80FD\u4FEE\u6539\uFF0C\u4F46\u662F\u5982\u679C\u5B9A\u4E49\u7684\u662F\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u4FEE\u6539\u5BF9\u8C61\u5185\u90E8\u7684\u6570\u636E</li></ol></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token comment">// \u4F8B\u5982\uFF1A</span>

    <span class="token comment">// \u4F1A\u62A5\u9519\uFF0C\u4E0D\u4EC5\u503C\u6539\u53D8\u4E86\uFF0C\u5185\u5B58\u5730\u5740\u4E5F\u6539\u53D8\u4E86</span>
    <span class="token keyword">const</span> a<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> a<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>  
    <span class="token comment">// \u4E0D\u4F1A\u62A5\u9519    </span>
    <span class="token keyword">const</span> a<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> a<span class="token punctuation">.</span>b<span class="token operator">=</span><span class="token number">13</span><span class="token punctuation">;</span>
    <span class="token comment">// \u4E0D\u4F1A\u62A5\u9519</span>
    <span class="token keyword">const</span> arr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_5-\u6269\u5C55-\u5BF9\u8C61\u5185\u5B58\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#_5-\u6269\u5C55-\u5BF9\u8C61\u5185\u5B58\u6A21\u578B" aria-hidden="true">#</a> 5. \u6269\u5C55\uFF1A\u5BF9\u8C61\u5185\u5B58\u6A21\u578B</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6784\u9020\u51FD\u6570</span>

<span class="token comment">// \u5F53\u6784\u9020\u51FD\u6570\u7684\u5BF9\u8C61\u521B\u5EFA\u5B8C\u6210\u540E\uFF0CJS\u5F15\u64CE\u968F\u4E4B\u4F1A\u4E3A\u8BE5\u5BF9\u8C61\u521B\u5EFA\u4E00\u4E2A\u539F\u578B\u5BF9\u8C61</span>
<span class="token comment">// \u539F\u578B\u5BF9\u8C61\u9ED8\u8BA4\u53EA\u6709\u4E00\u4E2A\u5C5E\u6027\u201Cconstrucor\u201D\uFF0C\u6307\u5411\u5B83\u7684\u6784\u9020\u51FD\u6570\u5BF9\u8C61\u3002</span>
<span class="token comment">// \u800C\u6BCF\u4E2A\u51FD\u6570\u5BF9\u8C61\u9ED8\u8BA4\u90FD\u6709\u4E00\u4E2Aprototype\u5C5E\u6027\uFF0C\u8BE5\u5C5E\u6027\u6307\u5411\u5B83\u7684\u539F\u578B\u5BF9\u8C61\u3002</span>
<span class="token keyword">function</span> <span class="token function">Person</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u4F7F\u7528new\u521B\u5EFA\u5BF9\u8C61</span>
<span class="token comment">// \u5728\u6784\u9020\u51FD\u6570\u6267\u884C\u524D\u589E\u52A0\u4E86\u4E00\u53E5var object=new Object()</span>
<span class="token comment">// \u8FD9\u4E2Aobject\u5BF9\u8C61\u5C06\u4F1A\u6709\u4E00\u4E2A\u6307\u5411\u539F\u578B\u5BF9\u8C61\u7684\u5C5E\u6027\uFF0C\u5B83\u662F\u4E00\u4E2A\u9690\u5F0F\u5C5E\u6027\uFF0C\u5927\u591A\u6570\u6D4F\u89C8\u5668\u5C06\u5B83\u5B9A\u4E49\u4E3A\u201Cproto\u201D</span>
<span class="token keyword">var</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;\u67F4\u6BDB\u6BDB&#39;</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6B64\u65F6\u5185\u5B58\u4E2D\u4E00\u5171\u5B58\u5728\u4E09\u4E2A\u5BF9\u8C61\u3002</span>
<span class="token comment">// \u5206\u522B\u662F\uFF1A\u6784\u9020\u51FD\u6570\u672C\u8EAB\u7684\u51FD\u6570\u5BF9\u8C61\u3001\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\u5BF9\u8C61\u3001\u6784\u9020\u51FD\u6570\u7684\u5B9E\u4F8B\u5BF9\u8C61\u3002</span>
<span class="token comment">// \u5B83\u4EEC\u4E4B\u95F4\u901A\u8FC7prototype\u3001proto\u3001constructor\u6307\u9488\u76F8\u4E92\u5F15\u7528\u3002</span>
<span class="token comment">// \u5982\u4E0B\u56FE\uFF1A</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,9)),s("img",{alt:"\u5185\u5B58\u6A21\u578B",src:a.$withBase("/img/1.png")},null,8,u),n[2]||(n[2]=s("h4",{id:"_5-0-this-\u6307\u5411\u5B9E\u4F8B\u5BF9\u8C61",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_5-0-this-\u6307\u5411\u5B9E\u4F8B\u5BF9\u8C61","aria-hidden":"true"},"#"),o(" 5.0 this \u6307\u5411\u5B9E\u4F8B\u5BF9\u8C61")],-1)),n[3]||(n[3]=s("div",{class:"custom-container warning"},[s("p",{class:"custom-container-title"},"this"),s("p",null,"\u5185\u5B58\u4E2D\u5B58\u5728\u4E24\u5927\u5757\u5185\u5BB9\uFF0C"),s("p",null,"\u4E00\u5757\u662F\u7528\u4E8E\u6267\u884C\u6784\u9020\u51FD\u6570\u7684\u201C\u6784\u9020\u51FD\u6570\u6267\u884C\u73AF\u5883\u201D\uFF0C\u5B83\u5305\u62EC\uFF1A\u6784\u9020\u51FD\u6570\u7684\u6267\u884C\u73AF\u5883\u3001\u6784\u9020\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u94FE\u3001\u6784\u9020\u51FD\u6570\u7684\u53D8\u91CF\u5BF9\u8C61\u3002"),s("p",null,"\u53E6\u4E00\u5757\u5185\u5B58\u7A7A\u95F4\u5B58\u50A8\u4E86\u4E0E\u521B\u5EFA\u5BF9\u8C61\u76F8\u5173\u7684\u5185\u5BB9\uFF0C\u5305\u62EC\uFF1A\u6784\u9020\u51FD\u6570\u672C\u8EAB\u7684\u51FD\u6570\u5BF9\u8C61\u3001\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\u5BF9\u8C61\u3001\u6784\u9020\u51FD\u6570\u7684\u5B9E\u4F8B\u5BF9\u8C61\u3002")],-1)),s("img",{alt:"this",src:a.$withBase("/img/2.png")},null,8,m),n[4]||(n[4]=e('<h4 id="_5-1-\u53D8\u91CF\u67E5\u627E-\u4F5C\u7528\u57DF\u67E5\u627E" tabindex="-1"><a class="header-anchor" href="#_5-1-\u53D8\u91CF\u67E5\u627E-\u4F5C\u7528\u57DF\u67E5\u627E" aria-hidden="true">#</a> 5.1 \u53D8\u91CF\u67E5\u627E\uFF08\u4F5C\u7528\u57DF\u67E5\u627E\uFF09</h4><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u6211\u4EEC\u77E5\u9053\uFF0C\u901A\u8FC7\u6784\u9020\u51FD\u6570\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\u65F6\uFF0C\u4F1A\u53D1\u751F\u4EE5\u4E0B\u51E0\u4EF6\u4E8B\uFF1A</p><p>new\u7684\u539F\u7406</p><ol><li>\u65B0\u5EFA\u4E86\u4E00\u4E2AObject\u5BF9\u8C61</li><li>\u4FEE\u6539\u6784\u9020\u51FD\u6570this\u6307\u5411\u8FD9\u4E2AObject\u5BF9\u8C61\uFF0C\u5E76\u6267\u884C\u6784\u9020\u51FD\u6570</li><li>\u4E3AObject\u5BF9\u8C61\u6DFB\u52A0\u4E86\u4E00\u4E2Aproto\u5C5E\u6027\uFF0C\u662F\u5176\u6307\u5411\u6784\u9020\u51FD\u6570\u7684prototype\u5C5E\u6027</li><li>\u8FD4\u56DE\u8FD9\u4E2AObject\u5BF9\u8C61</li></ol><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C\u901A\u8FC7new\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\u672C\u8D28\u4E0A\u4ECD\u7136\u662F\u628A\u6784\u9020\u51FD\u6570\u5F53\u4F5C\u666E\u901A\u51FD\u6570\u6267\u884C\uFF0C \u53EA\u4E0D\u8FC7\u5728\u6784\u9020\u51FD\u6570\u6267\u884C\u524D\u589E\u52A0\u4E86\u4E00\u53E5var object=new Object(); \u5E76\u4E14\u5728\u6784\u9020\u51FD\u6570\u6267\u884C\u7ED3\u675F\u540E\u8FD4\u56DE\u8FD9\u4E2Aobject\uFF1B\u5176\u4F59\u8FC7\u7A0B\u5C31\u662F\u5728\u6267\u884C\u4E00\u4E2A\u666E\u901A\u51FD\u6570\u3002</p></div><h4 id="_5-2-\u5C5E\u6027\u67E5\u627E-\u539F\u578B\u94FE\u67E5\u627E" tabindex="-1"><a class="header-anchor" href="#_5-2-\u5C5E\u6027\u67E5\u627E-\u539F\u578B\u94FE\u67E5\u627E" aria-hidden="true">#</a> 5.2 \u5C5E\u6027\u67E5\u627E\uFF08\u539F\u578B\u94FE\u67E5\u627E\uFF09</h4><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u53D8\u91CF\u67E5\u627E\u662F\u5728\u4F5C\u7528\u57DF\u94FE\u4E0A\u8FDB\u884C\uFF0C\u800C\u5C5E\u6027\u67E5\u627E\u662F\u5728\u539F\u578B\u94FE\u4E0A\u8FDB\u884C\u7684\u3002</p><p>\u7EE7\u7EED\u4E0A\u8FF0\u4F8B\u5B50\u3002 \u5F53JS\u5F15\u64CE\u5728\u67D0\u4E2A\u53D8\u91CF\u5BF9\u8C61\u4E2D\u627E\u5230this\u540E\uFF0C\u53D8\u91CF\u67E5\u627E\u7684\u8FC7\u7A0B\u7ED3\u675F\uFF0C\u82E5\u67E5\u627E\u7684\u662F\u4E00\u4E2A\u57FA\u672C\u6570\u636E\u7C7B\u578B\u7684\u53D8\u91CF\uFF0C\u90A3\u4E48\u67E5\u627E\u7ED3\u675F\uFF1B \u82E5\u67E5\u627E\u7684\u53D8\u91CF\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5E76\u4E14\u9700\u8981\u5BF9\u8BE5\u5BF9\u8C61\u7684\u5C5E\u6027\u8FDB\u884C\u64CD\u4F5C\uFF0C\u90A3\u4E48\u63A5\u4E0B\u6765\u5C31\u8981\u8FDB\u5165\u5C5E\u6027\u67E5\u627E\u7684\u8FC7\u7A0B\u3002</p><p>\u6211\u4EEC\u77E5\u9053\uFF0C\u6784\u9020\u51FD\u6570\u6267\u884C\u524D\u4F1A\u5C06\u5B83\u7684this\u6307\u5411\u6784\u9020\u51FD\u6570\u7684\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u56E0\u6B64\uFF0C\u5F53\u6267\u884C\u201Cthis.name\u201D\u65F6\uFF0CJS\u5F15\u64CE\u5C31\u4F1A\u5728this\u6307\u5411\u7684\u5B9E\u4F8B\u5BF9\u8C61\u4E2D\u67E5\u627E\u3002 \u82E5\u5728this\u6307\u5411\u7684\u5B9E\u4F8B\u5BF9\u8C61\u4E2D\u67E5\u627E\u4E0D\u5230\uFF0C\u5C31\u4F1A\u7EE7\u7EED\u67E5\u627E\u8BE5\u5B9E\u4F8B\u5BF9\u8C61proto\u5C5E\u6027\u6307\u5411\u7684\u539F\u578B\u5BF9\u8C61\uFF0C \u82E5\u8BE5\u539F\u578B\u5BF9\u8C61\u4E2D\u6CA1\u6709\uFF0C\u5219\u7EE7\u7EED\u67E5\u627E\u539F\u578B\u5BF9\u8C61\u7684\u539F\u578B\u5BF9\u8C61\uFF0C\u76F4\u5230\u67E5\u627E\u6210\u529F\u6216\u627E\u5230Object\u7684\u539F\u578B\u5BF9\u8C61\u4E3A\u6B62\u3002</p></div>',4))],64)}var d=p(r,[["render",b],["__file","9-js\u5185\u5B58\u6A21\u578B.html.vue"]]);export{d as default};
