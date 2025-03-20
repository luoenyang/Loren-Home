import{_ as e,o as t,c as l,a as s,b as a,p as c,F as r}from"./app.e6691f45.js";const o={},u=["href"];function i(p,n){return t(),l(r,null,[n[1]||(n[1]=s("h1",{id:"flex\u5E03\u5C40",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#flex\u5E03\u5C40","aria-hidden":"true"},"#"),a(" flex\u5E03\u5C40")],-1)),n[2]||(n[2]=s("p",null,"\u5E38\u7528\u7684\u5E03\u5C40\u65B9\u5F0F",-1)),s("p",null,[s("a",{href:p.$withBase("/html/\u76D2\u5B50\u6A21\u578B\u5E03\u5C40\u7684\u4E24\u79CD\u65B9\u5F0F.html"),target:"_blank"},"\u76D2\u5B50\u5E03\u5C40\u76842\u79CD\u65B9\u5F0F",8,u),n[0]||(n[0]=a(" \u6700\u597D\u7528flex\u5E03\u5C40"))]),n[3]||(n[3]=c(`<div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.flex</span> <span class="token punctuation">{</span>
<span class="token comment">/*  1.                    */</span>
<span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token property">display</span><span class="token punctuation">:</span> -moz-felx<span class="token punctuation">;</span>
<span class="token property">display</span><span class="token punctuation">:</span> -webkit-felx<span class="token punctuation">;</span>

<span class="token comment">/*  2.  \u5B50\u4EE3\u6309\u6C34\u5E73\u6392\u5217\u6216\u7AD6\u76F4\u6392\u5217   */</span>
<span class="token comment">/*flex-direction/row/reverse/column/column-reverse  */</span>
<span class="token property">flex-direction</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span>

<span class="token comment">/*  3   \u5B50\u4EE3\u662F\u5426\u6362\u884C        */</span>
<span class="token comment">/*flex-wrap:nowrap/wrap/wrap-reverse  */</span>
<span class="token property">flex-wrap</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>

<span class="token comment">/*  4.  \u4E0A\u9762\u4E24\u79CD\u5C5E\u6027\u7684\u7B80\u5199      */</span>
<span class="token comment">/* flex-flow     */</span>
<span class="token property">flex-flow</span><span class="token punctuation">:</span> row nowrap<span class="token punctuation">;</span>

<span class="token comment">/*  5.  \u9879\u76EE\u5728\u6C34\u5E73\u65B9\u5411\u7684\u5BF9\u9F50\u65B9\u5F0F\u3002   */</span>
<span class="token comment">/*justify-content: flex-start | flex-end | center | space-between\uFF08\u4E24\u7AEF\u5BF9\u9F50\uFF0C\u4E2D\u95F4\u7B49\u9694\uFF09 | space-around\uFF08\u6BCF\u4E2A\u9879\u76EE\u7B49\u9694\uFF09; */</span>
<span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>

<span class="token comment">/*  6.  \u9879\u76EE\u5728\u5782\u76F4\u65B9\u5411\u7684\u5BF9\u9F50\u65B9\u5F0F\u3002   */</span>
<span class="token comment">/*align-items: flex-start | flex-end | center | baseline | stretch;   */</span>
<span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>

<span class="token comment">/*  7.  \u9879\u76EE\u5728\u591A\u8F74\u65B9\u5411\u7684\u5BF9\u9F50\u65B9\u5F0F\u3002   */</span>
<span class="token comment">/*align-content: flex-start | flex-end | center | space-between | space-around | stretch;  */</span>
<span class="token property">align-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>

<span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">/* \u5982\u679C li \u4E0D\u8BBE\u7F6Eflex \u5219\u81EA\u9002\u5E94\u663E\u793A */</span>
<span class="token selector">.flex li</span> <span class="token punctuation">{</span>
<span class="token comment">/*  1.   \u6570\u503C\u8D8A\u5C0F\uFF0C\u6392\u5217\u8D8A\u9760\u524D\uFF0C\u9ED8\u8BA4\u4E3A0  */</span>
<span class="token property">order</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>

<span class="token comment">/*  2.   \u6709\u5269\u4F59\u7A7A\u95F4\u65F6 \u9879\u76EE\u7684\u653E\u5927\u6BD4\u4F8B   0 \u4E0D\u653E\u5927   */</span>
<span class="token property">flex-grow</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>

<span class="token comment">/*  3.   \u7A7A\u95F4\u4E0D\u8DB3\u65F6 \u9879\u76EE\u7684\u7F29\u5C0F\u6BD4\u4F8B   0 \u4E0D\u7F29\u5C0F      */</span>
<span class="token property">flex-shrink</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>

<span class="token comment">/*  4.   \u5206\u914D\u591A\u4F59\u7A7A\u95F4\u4E4B\u524D\uFF0C\u9879\u76EE\u5360\u636E\u7684\u4E3B\u8F74\u7A7A\u95F4   \uFF0C auto\uFF0C\u5373\u9879\u76EE\u7684\u672C\u6765\u5927\u5C0F   */</span>
<span class="token property">flex-basis</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>

<span class="token comment">/*  5.   \u4E0A\u97623\u4E2A\u7684\u7ED3\u5408    0 1 auto(\u540E\u4E8C\u53EF\u9009)    */</span>
<span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token comment">/* \u7A7A\u95F4\u5145\u8DB3\u548C\u4E0D\u8DB3\u65F6\u8BA1\u7B97\u7684\u65B9\u5F0F\u4E0D\u4E00\u6837\uFF0C\u4E0D\u8DB3\u65F6\u8981\u8BA1\u7B97\u5404\u4E2A\u5B50\u9879\u7684\u6743\u91CD\uFF0C\u4EE5\u53CA\u6743\u91CD\u4E4B\u548C\uFF0C\u518D\u7528\u8981\u7F29\u5C0F\u7684\u5927\u5C0F\u4E58\u4EE5\u5404\u4E2A\u5B50\u9879\u7684\u6743\u91CD */</span>
<span class="token property">flex</span><span class="token punctuation">:</span> 2 1 300px<span class="token punctuation">;</span>  

<span class="token comment">/*  6.   \u5141\u8BB8\u5355\u4E2A\u9879\u76EE\u6709\u4E0E\u5176\u4ED6\u9879\u76EE\u4E0D\u4E00\u6837\u7684\u5BF9\u9F50\u65B9\u5F0F       */</span>
<span class="token comment">/*align-self: auto | flex-start | flex-end | center | baseline | stretch;*/</span>
<span class="token property">align-self</span><span class="token punctuation">:</span> flex-end<span class="token punctuation">;</span>

<span class="token property">list-style-type</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token property">min-height</span><span class="token punctuation">:</span> 30vh<span class="token punctuation">;</span>
<span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br></div></div>`,1))],64)}var m=e(o,[["render",i],["__file","8-flex\u5E03\u5C40.html.vue"]]);export{m as default};
