import{_ as s,p as a}from"./app.5c80a7c1.js";const e={};function p(t,n){return n[0]||(n[0]=a(`<h1 style="text-align:center;">\u4F7Fdiv\u5C45\u4E2D</h1><h3 id="_1-flex\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#_1-flex\u5E03\u5C40" aria-hidden="true">#</a> 1. flex\u5E03\u5C40</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.flex</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>

  <span class="token property">flex-direction</span><span class="token punctuation">:</span>row<span class="token punctuation">;</span> <span class="token comment">/* column */</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>  <span class="token comment">/* wrap */</span>
  <span class="token comment">/* flex-flow: row nowrap */</span>

  <span class="token comment">/* \u6C34\u5E73 */</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-around<span class="token punctuation">;</span> <span class="token comment">/* flex-start | flex-end | center | space-between | space-around; */</span>

  <span class="token comment">/* \u5782\u76F4 */</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span>            <span class="token comment">/* flex-start | flex-end | center | baseline | stretch; */</span>

  <span class="token comment">/* \u6362\u884C\uFF08\u591A\u8F74\uFF09\u5782\u76F4 */</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span>          <span class="token comment">/* flex-start | flex-end | center | space-between | space-around | stretch; */</span>
<span class="token punctuation">}</span>

<span class="token selector">.flexItem</span><span class="token punctuation">{</span>
  <span class="token property">order</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
  <span class="token property">flex</span><span class="token punctuation">:</span>0 1 auto<span class="token punctuation">;</span>
  
  <span class="token comment">/* \u5269\u4F59\u7A7A\u95F4\u653E\u5927 */</span>
  <span class="token comment">/* flex-grow:0; */</span>
  <span class="token comment">/* \u5269\u4F59\u7A7A\u95F4\u7F29\u5C0F */</span>
  <span class="token comment">/* flex-shrink:1; */</span>
  <span class="token comment">/* flex-basis:auto; */</span>

  <span class="token comment">/* \u5355\u4E2A\u9879\u76EE\u7684\u5BF9\u9F50\u65B9\u5F0F */</span>
  <span class="token property">align-self</span><span class="token punctuation">:</span>auto<span class="token punctuation">;</span> <span class="token comment">/* auto | flex-start | flex-end | center | baseline | stretch; */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h3 id="_2-margin-\u503C" tabindex="-1"><a class="header-anchor" href="#_2-margin-\u503C" aria-hidden="true">#</a> 2. margin \u503C</h3><h3 id="_3-\u7EDD\u5BF9\u5B9A\u4F4D" tabindex="-1"><a class="header-anchor" href="#_3-\u7EDD\u5BF9\u5B9A\u4F4D" aria-hidden="true">#</a> 3. \u7EDD\u5BF9\u5B9A\u4F4D</h3><h3 id="_4-\u4F7F\u5176\u53D8\u4E3A\u884C\u5185\u5143\u7D20-\u7136\u540E\u4F7F\u7528text-align-center" tabindex="-1"><a class="header-anchor" href="#_4-\u4F7F\u5176\u53D8\u4E3A\u884C\u5185\u5143\u7D20-\u7136\u540E\u4F7F\u7528text-align-center" aria-hidden="true">#</a> 4. \u4F7F\u5176\u53D8\u4E3A\u884C\u5185\u5143\u7D20 \u7136\u540E\u4F7F\u7528text-align:center;</h3><blockquote><p>inline \u548C inline-block \u533A\u522B\u5728\u4E8Einline-block\u53EF\u8BBE\u7F6E\u5BBD\u9AD8\u76F8\u5BF9\u81EA\u7531\u7075\u6D3B</p></blockquote><h3 id="_5-css3\u7684-transform" tabindex="-1"><a class="header-anchor" href="#_5-css3\u7684-transform" aria-hidden="true">#</a> 5. css3\u7684 transform</h3><blockquote><p>transform: translate(-50%, -50%); \u504F\u79FB\u91CF\uFF0C\u4E5F\u53EF\u4EE5\u914D\u5408\u7EDD\u5BF9\u5B9A\u4F4D\u4F7F\u7528</p></blockquote><h3 id="_6-\u4F7F\u7528\u8868\u683C\u7C7B\u578B-display" tabindex="-1"><a class="header-anchor" href="#_6-\u4F7F\u7528\u8868\u683C\u7C7B\u578B-display" aria-hidden="true">#</a> 6. \u4F7F\u7528\u8868\u683C\u7C7B\u578B display</h3><blockquote><p>display: table-cell;text-align: center;vertical-align: middle;</p></blockquote><h3 id="\u5B9E\u73B0\u9AD8\u5EA6\u662F\u5BBD\u5EA6\u7684\u51E0\u500D" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u9AD8\u5EA6\u662F\u5BBD\u5EA6\u7684\u51E0\u500D" aria-hidden="true">#</a> \u5B9E\u73B0\u9AD8\u5EA6\u662F\u5BBD\u5EA6\u7684\u51E0\u500D</h3><p>\u53EF\u4EE5\u4F7F\u7528CSS\u4E2D\u7684\u201Cpadding-top\u201D\u6216\u201Cpadding-bottom\u201D\u5C5E\u6027\u3002<br> \u5982\u679C\u5C06\u201Cpadding-top\u201D\u6216\u201Cpadding-bottom\u201D\u7684\u503C\u8BBE\u7F6E\u4E3A\u4E00\u4E2A\u767E\u5206\u6BD4\uFF0C\u90A3\u4E48\u5B83\u4EEC\u5C06\u57FA\u4E8E\u5143\u7D20\u7684\u5BBD\u5EA6\u6765\u8BA1\u7B97\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.imgbox</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token comment">/* \u9AD8\u5EA6\u4E3A400px */</span>
  <span class="token property">padding-top</span><span class="token punctuation">:</span> 200%<span class="token punctuation">;</span> 


  <span class="token property">width</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span>
   <span class="token comment">/* \u9AD8\u5EA6\u4E3A\u5BBD\u5EA6\u76842\u500D\uFF0C\u6839\u636E\u56FE\u7247\u5B9E\u9645\u6BD4\u4F8B\u8FDB\u884C\u8C03\u8282 */</span>
  <span class="token property">padding-top</span><span class="token punctuation">:</span> 200%<span class="token punctuation">;</span> 
  <span class="token property">position</span><span class="token punctuation">:</span>relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.imgbox img</span><span class="token punctuation">{</span>
 <span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
 <span class="token property">height</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
 <span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span>
 <span class="token property">top</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
 <span class="token property">left</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>`,14))}var l=s(e,[["render",p],["__file","1-\u4F7F\u4E00\u4E2Adiv\u5C45\u4E2D.html.vue"]]);export{l as default};
