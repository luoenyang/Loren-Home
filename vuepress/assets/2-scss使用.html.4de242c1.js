import{_ as s,p as a}from"./app.e6691f45.js";const p={};function e(t,n){return n[0]||(n[0]=a(`<h1 id="scss-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#scss-\u4F7F\u7528" aria-hidden="true">#</a> scss \u4F7F\u7528</h1><h2 id="_1-\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_1-\u53D8\u91CF" aria-hidden="true">#</a> 1. \u53D8\u91CF</h2><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$nav-color</span></span><span class="token punctuation">:</span> #f90<span class="token punctuation">;</span>
<span class="token selector">.nav </span><span class="token punctuation">{</span>
  <span class="token property"><span class="token variable">$width</span></span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$width</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$nav-color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u7F16\u8BD1\u540E</span>

<span class="token selector">.nav </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #f90<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="_2-\u5D4C\u5957" tabindex="-1"><a class="header-anchor" href="#_2-\u5D4C\u5957" aria-hidden="true">#</a> 2. \u5D4C\u5957</h2><h5 id="_2-1-\u7236\u9009\u62E9\u5668\u6807\u8BC6\u7B26" tabindex="-1"><a class="header-anchor" href="#_2-1-\u7236\u9009\u62E9\u5668\u6807\u8BC6\u7B26" aria-hidden="true">#</a> 2.1 \u7236\u9009\u62E9\u5668\u6807\u8BC6\u7B26 &amp;</h5><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token selector">#content aside </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token selector">.parent <span class="token parent important">&amp;</span> </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">article a </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7F16\u8BD1\u540E</span>

<span class="token selector">#content aside </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.parent #content aside </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">article a </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">article a:hover </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h5 id="_2-2-\u7FA4\u7EC4\u9009\u62E9\u5668\u7684\u5D4C\u5957" tabindex="-1"><a class="header-anchor" href="#_2-2-\u7FA4\u7EC4\u9009\u62E9\u5668\u7684\u5D4C\u5957" aria-hidden="true">#</a> 2.2. \u7FA4\u7EC4\u9009\u62E9\u5668\u7684\u5D4C\u5957</h5><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token selector">h1,
  h2,
  h3 </span><span class="token punctuation">{</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 0.8em<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7F16\u8BD1\u540E</span>

<span class="token selector">.container h1,
.container h2,
.container h3 </span><span class="token punctuation">{</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 0.8em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h5 id="_2-3-\u5B50\u7EC4\u5408\u9009\u62E9\u5668\u548C\u540C\u5C42\u7EC4\u5408\u9009\u62E9\u5668-\u3001-\u548C" tabindex="-1"><a class="header-anchor" href="#_2-3-\u5B50\u7EC4\u5408\u9009\u62E9\u5668\u548C\u540C\u5C42\u7EC4\u5408\u9009\u62E9\u5668-\u3001-\u548C" aria-hidden="true">#</a> 2.3 \u5B50\u7EC4\u5408\u9009\u62E9\u5668\u548C\u540C\u5C42\u7EC4\u5408\u9009\u62E9\u5668\uFF1A&gt;\u3001+\u548C~;</h5><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// \u6CE8\u610F\u533A\u522B</span>

<span class="token comment">// \u9009\u62E9article\u4E0B\u7684\u6240\u6709\u547D\u4E2Dsection\u9009\u62E9\u5668\u7684\u5143\u7D20</span>
<span class="token selector">article section </span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u9009\u62E9\u5668\u53EA\u4F1A\u9009\u62E9article\u4E0B\u7D27\u8DDF\u7740\u7684\u5B50\u5143\u7D20\u4E2D\u547D\u4E2Dsection\u9009\u62E9\u5668\u7684\u5143\u7D20</span>
<span class="token selector">article &gt; section </span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u540C\u5C42\u76F8\u90BB\u7EC4\u5408\u9009\u62E9\u5668+\u9009\u62E9header\u5143\u7D20\u540E\u7D27\u8DDF\u7684p\u5143\u7D20</span>
<span class="token selector">header + p </span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.1em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u540C\u5C42\u6240\u6709</span>
<span class="token selector">header ~ p </span><span class="token punctuation">{</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> 1px dashed #ccc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h5 id="_2-4-\u5C5E\u6027\u5D4C\u5957" tabindex="-1"><a class="header-anchor" href="#_2-4-\u5C5E\u6027\u5D4C\u5957" aria-hidden="true">#</a> 2.4 \u5C5E\u6027\u5D4C\u5957</h5><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token selector">.nav </span><span class="token punctuation">{</span>
  <span class="token selector">border: </span><span class="token punctuation">{</span>
    <span class="token property">style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="_3-\u6DF7\u5408\u5668" tabindex="-1"><a class="header-anchor" href="#_3-\u6DF7\u5408\u5668" aria-hidden="true">#</a> 3. \u6DF7\u5408\u5668</h2><ul><li>\u6DF7\u5408\u5668\u4F7F\u7528@mixin \u6807\u8BC6\u7B26\u5B9A\u4E49\u3002\u770B\u4E0A\u53BB\u5F88\u50CF\u5176\u4ED6\u7684 CSS @\u6807\u8BC6\u7B26\uFF0C\u6BD4\u5982\u8BF4@media \u6216\u8005@font-face\u3002\u8FD9\u4E2A\u6807\u8BC6\u7B26\u7ED9\u4E00\u5927\u6BB5\u6837\u5F0F\u8D4B\u4E88\u4E00\u4E2A\u540D\u5B57\uFF0C\u8FD9\u6837\u4F60\u5C31\u53EF\u4EE5\u8F7B\u6613\u5730\u901A\u8FC7\u5F15\u7528\u8FD9\u4E2A\u540D\u5B57\u91CD\u7528\u8FD9\u6BB5\u6837\u5F0F\u3002</li></ul><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// \u5B9A\u4E49</span>
<span class="token keyword">@mixin</span> <span class="token selector">no-bullets </span><span class="token punctuation">{</span>
  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token selector">li </span><span class="token punctuation">{</span>
    <span class="token property">list-style-image</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">list-style-type</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u4F7F\u7528</span>
<span class="token selector">ul.plain </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #444<span class="token punctuation">;</span>
  <span class="token keyword">@include</span> no-bullets<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7F16\u8BD1\u540E</span>

<span class="token selector">ul.plain </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #444<span class="token punctuation">;</span>
  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">ul.plain li </span><span class="token punctuation">{</span>
  <span class="token property">list-style-image</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">list-style-type</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h5 id="_3-1-\u7ED9\u6DF7\u5408\u5668\u4F20\u53C2" tabindex="-1"><a class="header-anchor" href="#_3-1-\u7ED9\u6DF7\u5408\u5668\u4F20\u53C2" aria-hidden="true">#</a> 3.1 \u7ED9\u6DF7\u5408\u5668\u4F20\u53C2</h5><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// ****** \u7ED9\u6DF7\u5408\u5668\u4F20\u53C2 *****</span>
<span class="token keyword">@mixin</span> <span class="token function">link-colors</span><span class="token punctuation">(</span><span class="token variable">$normal</span><span class="token punctuation">,</span> <span class="token variable">$hover</span><span class="token punctuation">,</span> <span class="token variable">$visited</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$normal</span><span class="token punctuation">;</span>
  <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$hover</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector"><span class="token parent important">&amp;</span>:visited </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$visited</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_4-\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#_4-\u7EE7\u627F" aria-hidden="true">#</a> 4. \u7EE7\u627F</h2><ul><li>\u4F7F\u7528 sass \u7684\u65F6\u5019\uFF0C\u6700\u540E\u4E00\u4E2A\u51CF\u5C11\u91CD\u590D\u7684\u4E3B\u8981\u7279\u6027\u5C31\u662F\u9009\u62E9\u5668\u7EE7\u627F\u3002\u57FA\u4E8E Nicole Sullivan \u9762\u5411\u5BF9\u8C61\u7684 css \u7684\u7406\u5FF5\uFF0C\u9009\u62E9\u5668\u7EE7\u627F\u662F\u8BF4\u4E00\u4E2A\u9009\u62E9\u5668\u53EF\u4EE5\u7EE7\u627F\u4E3A\u53E6\u4E00\u4E2A\u9009\u62E9\u5668\u5B9A\u4E49\u7684\u6240\u6709\u6837\u5F0F\uFF0C\u7528\u6CD5\u548C\u6DF7\u5408\u5668\u7C7B\u4F3C\u800C\u53C8\u6709\u533A\u522B\u3002\u8FD9\u4E2A\u901A\u8FC7@extend \u8BED\u6CD5\u5B9E\u73B0\uFF0C\u5982\u4E0B\u4EE3\u7801:</li></ul><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">//\u901A\u8FC7\u9009\u62E9\u5668\u7EE7\u627F\u7EE7\u627F\u6837\u5F0F</span>
<span class="token selector">.error </span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fdd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.seriousError </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> .error<span class="token punctuation">;</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h5 id="_4-1-\u7EE7\u627F\u7684\u9AD8\u7EA7\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#_4-1-\u7EE7\u627F\u7684\u9AD8\u7EA7\u7528\u6CD5" aria-hidden="true">#</a> 4.1 \u7EE7\u627F\u7684\u9AD8\u7EA7\u7528\u6CD5</h5><ul><li>\u8FD9\u6BB5\u4EE3\u7801\u5B9A\u4E49\u4E86\u4E00\u4E2A\u540D\u4E3A disabled \u7684\u7C7B\uFF0C\u6837\u5F0F\u4FEE\u9970\u4F7F\u5B83\u770B\u4E0A\u53BB\u50CF\u4E00\u4E2A\u7070\u6389\u7684\u8D85\u94FE\u63A5\u3002\u901A\u8FC7\u7EE7\u627F a \u8FD9\u4E00\u8D85\u94FE\u63A5\u5143\u7D20\u6765\u5B9E\u73B0\uFF1A</li></ul><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token selector">.disabled </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> gray<span class="token punctuation">;</span>
  <span class="token keyword">@extend</span> a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_5-sass-\u5BFC\u5165" tabindex="-1"><a class="header-anchor" href="#_5-sass-\u5BFC\u5165" aria-hidden="true">#</a> 5. sass \u5BFC\u5165</h2><blockquote><p>@import &quot;theme-color&quot; , \u65E0\u9700.scss</p></blockquote><h5 id="_5-1-\u5C40\u90E8\u6587\u4EF6\u5BFC\u5165" tabindex="-1"><a class="header-anchor" href="#_5-1-\u5C40\u90E8\u6587\u4EF6\u5BFC\u5165" aria-hidden="true">#</a> 5.1 \u5C40\u90E8\u6587\u4EF6\u5BFC\u5165</h5><ul><li>sass \u5C40\u90E8\u6587\u4EF6\u7684\u6587\u4EF6\u540D\u4EE5\u4E0B\u5212\u7EBF\u5F00\u5934\u3002\u8FD9\u6837\uFF0Csass \u5C31\u4E0D\u4F1A\u5728\u7F16\u8BD1\u65F6\u5355\u72EC\u7F16\u8BD1\u8FD9\u4E2A\u6587\u4EF6\u8F93\u51FA css\uFF0C\u800C\u53EA\u628A\u8FD9\u4E2A\u6587\u4EF6\u7528\u4F5C\u5BFC\u5165\u3002</li></ul><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// \u4E3E\u4F8B\u6765\u8BF4\uFF0C\u4F60\u60F3\u5BFC\u5165themes/_night-sky.scss\u8FD9\u4E2A\u5C40\u90E8\u6587\u4EF6\u91CC\u7684\u53D8\u91CF\uFF0C\u4F60\u53EA\u9700\u5728\u6837\u5F0F\u8868\u4E2D\u5199\uFF1A</span>
<span class="token keyword">@import</span> <span class="token string">&quot;themes/night-sky&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h5 id="_5-2-\u5D4C\u5957\u5BFC\u5165" tabindex="-1"><a class="header-anchor" href="#_5-2-\u5D4C\u5957\u5BFC\u5165" aria-hidden="true">#</a> 5.2 \u5D4C\u5957\u5BFC\u5165</h5><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token selector">.blue-theme </span><span class="token punctuation">{</span>
  <span class="token keyword">@import</span> <span class="token string">&quot;blue-theme&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u751F\u6210\u7684\u7ED3\u679C\u8DDF\u4F60\u76F4\u63A5\u5728.blue-theme\u9009\u62E9\u5668\u5185\u5199_blue-theme.scss\u6587\u4EF6\u7684\u5185\u5BB9\u5B8C\u5168\u4E00\u6837\u3002</span>

<span class="token selector">.blue-theme </span><span class="token punctuation">{</span>
  <span class="token selector">aside </span><span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h5 id="_5-3-\u539F\u751F\u7684-css-\u5BFC\u5165-\u628A-css-\u6539\u4E3A-scss" tabindex="-1"><a class="header-anchor" href="#_5-3-\u539F\u751F\u7684-css-\u5BFC\u5165-\u628A-css-\u6539\u4E3A-scss" aria-hidden="true">#</a> 5.3 \u539F\u751F\u7684 CSS \u5BFC\u5165\uFF1A\u628A.css \u6539\u4E3A.scss</h5><ul><li>\u56E0\u4E3A sass \u4F1A\u8BA4\u4E3A\u4F60\u60F3\u7528 css \u539F\u751F\u7684@import\uFF0C\u9020\u6210\u6D4F\u89C8\u5668\u7684\u989D\u5916\u4E0B\u8F7D</li></ul><h2 id="_6-default-\u7684\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#_6-default-\u7684\u7528\u6CD5" aria-hidden="true">#</a> 6. !default \u7684\u7528\u6CD5</h2><ul><li>\u5B83\u5F88\u50CF css \u5C5E\u6027\u4E2D!important \u6807\u7B7E\u7684\u5BF9\u7ACB\u9762\uFF0C\u4E0D\u540C\u7684\u662F!default \u7528\u4E8E\u53D8\u91CF\uFF0C\u542B\u4E49\u662F\uFF1A\u5982\u679C\u8FD9\u4E2A\u53D8\u91CF\u88AB\u58F0\u660E\u8D4B\u503C\u4E86\uFF0C\u90A3\u5C31\u7528\u5B83\u58F0\u660E\u7684\u503C\uFF0C\u5426\u5219\u5C31\u7528\u8FD9\u4E2A\u9ED8\u8BA4\u503C\u3002</li></ul><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// \u5982\u679C\u7528\u6237\u5728\u5BFC\u5165\u4F60\u7684sass\u5C40\u90E8\u6587\u4EF6\u4E4B\u524D\u58F0\u660E\u4E86\u4E00\u4E2A$fancybox-width\u53D8\u91CF\uFF0C</span>
<span class="token comment">// \u90A3\u4E48\u4F60\u7684\u5C40\u90E8\u6587\u4EF6\u4E2D\u5BF9$fancybox-width\u8D4B\u503C400px\u7684\u64CD\u4F5C\u5C31\u65E0\u6548\u3002</span>
<span class="token comment">// \u5982\u679C\u7528\u6237\u6CA1\u6709\u505A\u8FD9\u6837\u7684\u58F0\u660E\uFF0C\u5219$fancybox-width\u5C06\u9ED8\u8BA4\u4E3A400px\u3002</span>
<span class="token property"><span class="token variable">$fancybox-width</span></span><span class="token punctuation">:</span> 400px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_7-\u9759\u9ED8\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#_7-\u9759\u9ED8\u6CE8\u91CA" aria-hidden="true">#</a> 7. \u9759\u9ED8\u6CE8\u91CA</h2><blockquote><p>\u4F7F\u7528&quot;//&quot;\uFF0C \u6CE8\u91CA\u53EF\u5728\u751F\u6210\u7684 css \u4E2D\u62B9\u53BB</p></blockquote><h2 id="_8-\u63A7\u5236\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#_8-\u63A7\u5236\u6307\u4EE4" aria-hidden="true">#</a> 8. \u63A7\u5236\u6307\u4EE4</h2><blockquote><p>@if , @for , @each , @while</p></blockquote><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// 1. @if</span>
<span class="token property"><span class="token variable">$type</span></span><span class="token punctuation">:</span> monster<span class="token punctuation">;</span>
<span class="token selector">p </span><span class="token punctuation">{</span>
  <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$type</span> == ocean </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">@else if</span> <span class="token selector"><span class="token variable">$type</span> == matador </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">@else if</span> <span class="token selector"><span class="token variable">$type</span> == monster </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">@else</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u7F16\u8BD1\u540E*/</span>
<span class="token selector">p </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 2. @for</span>
<span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> 1 <span class="token keyword">through</span> <span class="token selector">3 </span><span class="token punctuation">{</span>
  <span class="token selector">.item-<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 2em <span class="token operator">*</span> <span class="token variable">$i</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u7F16\u8BD1\u540E*/</span>
<span class="token selector">.item-1 </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item-2 </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 4em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item-3 </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 6em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 3. @each</span>
<span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$animal</span> in puma, sea-slug, egret, salamander </span><span class="token punctuation">{</span>
  <span class="token selector">.<span class="token variable">#{$animal}</span>-icon </span><span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">&quot;/images/#{$animal}.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u7F16\u8BD1\u540E*/</span>
<span class="token selector">.puma-icon </span><span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">&quot;/images/puma.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.sea-slug-icon </span><span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">&quot;/images/sea-slug.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.egret-icon </span><span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">&quot;/images/egret.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.salamander-icon </span><span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">&quot;/images/salamander.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 4. @while</span>
<span class="token property"><span class="token variable">$i</span></span><span class="token punctuation">:</span> 6<span class="token punctuation">;</span>
<span class="token keyword">@while</span> <span class="token selector"><span class="token variable">$i</span> &gt; 0 </span><span class="token punctuation">{</span>
  <span class="token selector">.item-<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 2em <span class="token operator">*</span> <span class="token variable">$i</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token property"><span class="token variable">$i</span></span><span class="token punctuation">:</span> <span class="token variable">$i</span> <span class="token operator">-</span> 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u7F16\u8BD1\u540E*/</span>
<span class="token selector">.item-6 </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 12em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.item-4 </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 8em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.item-2 </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 4em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br></div></div>`,40))}var l=s(p,[["render",e],["__file","2-scss\u4F7F\u7528.html.vue"]]);export{l as default};
