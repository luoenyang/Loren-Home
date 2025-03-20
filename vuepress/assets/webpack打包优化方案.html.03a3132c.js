import{_ as s,p as a}from"./app.e6691f45.js";const p={};function t(e,n){return n[0]||(n[0]=a(`<h1 id="webpack\u6253\u5305\u4F18\u5316\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#webpack\u6253\u5305\u4F18\u5316\u65B9\u6848" aria-hidden="true">#</a> webpack\u6253\u5305\u4F18\u5316\u65B9\u6848</h1><h3 id="webpack-\u7684\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#webpack-\u7684\u4F18\u5316" aria-hidden="true">#</a> Webpack \u7684\u4F18\u5316</h3><ul><li><ol><li>\u4EE3\u7801\u5206\u5272</li></ol></li><li><ol><li>Webpack \u5BF9\u56FE\u7247\u8FDB\u884C\u538B\u7F29</li></ol></li><li><ol start="2"><li>\u51CF\u5C11 ES6 \u8F6C\u4E3A ES5 \u7684\u5197\u4F59\u4EE3\u7801</li></ol></li><li><ol start="3"><li>\u914D\u7F6E\u7F13\u5B58</li></ol></li><li><ol start="4"><li>\u914D\u7F6E\u522B\u540D</li></ol></li><li><ol start="5"><li>\u6A21\u677F\u9884\u7F16\u8BD1</li></ol></li></ul><h3 id="\u751F\u4EA7\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u751F\u4EA7\u6A21\u5F0F" aria-hidden="true">#</a> \u751F\u4EA7\u6A21\u5F0F</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// ... \u5176\u4ED6\u914D\u7F6E</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_1-\u4EE3\u7801\u5206\u5272" tabindex="-1"><a class="header-anchor" href="#_1-\u4EE3\u7801\u5206\u5272" aria-hidden="true">#</a> 1.\u4EE3\u7801\u5206\u5272</h3><p>SplitChunksPlugin\u62BD\u53D6\u516C\u5171\u4EE3\u7801</p><details class="custom-container details"><summary>\u67E5\u770B</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
    <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span>  
      <span class="token literal-property property">cacheGroups</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
        <span class="token literal-property property">vendor</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\\\/]node_modules[\\\\/]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>  
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;vendors&#39;</span><span class="token punctuation">,</span>  
          <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">&#39;all&#39;</span>  
        <span class="token punctuation">}</span><span class="token punctuation">,</span>  
        <span class="token literal-property property">common</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;common&#39;</span><span class="token punctuation">,</span>  
          <span class="token literal-property property">minChunks</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>  
          <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">20</span><span class="token punctuation">,</span>  
          <span class="token literal-property property">reuseExistingChunk</span><span class="token operator">:</span> <span class="token boolean">true</span>  
        <span class="token punctuation">}</span>  
      <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>Webpack\u5141\u8BB8\u4F7F\u7528ES6\u7684import()\u51FD\u6570\u6765\u52A8\u6001\u52A0\u8F7D\u6A21\u5757\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Webpack Code Splitting<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loadFeature<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Load Feature<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">  
    <span class="token keyword">const</span> button <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#loadFeature&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    button<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  
      <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./feature.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">module</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  
        module<span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8C03\u7528\u6A21\u5757\u4E2D\u7684\u9ED8\u8BA4\u5BFC\u51FA\u51FD\u6570  </span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;Failed to load feature:&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>  
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u591A\u5165\u53E3\u6587\u4EF6\u5206\u5272<br> \u901A\u8FC7\u914D\u7F6EWebpack\u7684entry\u5C5E\u6027\uFF0C\u53EF\u4EE5\u6307\u5B9A\u591A\u4E2A\u5165\u53E3\u6587\u4EF6\uFF0C\u4ECE\u800C\u5B9E\u73B0\u4EE3\u7801\u5206\u5272\u3002\u6BCF\u4E2A\u5165\u53E3\u6587\u4EF6\u90FD\u4F1A\u751F\u6210\u4E00\u4E2A\u5BF9\u5E94\u7684\u8F93\u51FA\u6587\u4EF6\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>  
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
    <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>  
    <span class="token literal-property property">login</span><span class="token operator">:</span> <span class="token string">&#39;./src/login.js&#39;</span>  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>  
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].js&#39;</span><span class="token punctuation">,</span>  
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>  
  <span class="token punctuation">}</span>  
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u8DEF\u7531\u6309\u9700\u52A0\u8F7D<br> \u786E\u4FDD\u53EA\u6709\u5728\u7528\u6237\u8BBF\u95EE\u7279\u5B9A\u8DEF\u7531\u65F6\u624D\u52A0\u8F7D\u76F8\u5E94\u7684\u4EE3\u7801\u5757\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>  
  <span class="token punctuation">{</span>  
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>  
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./components/Home.vue&#39;</span><span class="token punctuation">)</span>  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>  
  <span class="token punctuation">{</span>  
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>  
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./components/About.vue&#39;</span><span class="token punctuation">)</span>  
  <span class="token punctuation">}</span>  
<span class="token punctuation">]</span><span class="token punctuation">;</span>  
  
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>  
  routes  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></details><h3 id="_2-\u4F18\u5316loader\u914D\u7F6E-\u6BD4\u5982\u4F7F\u7528cache-loader\u6765\u7F13\u5B58babel\u7F16\u8BD1\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#_2-\u4F18\u5316loader\u914D\u7F6E-\u6BD4\u5982\u4F7F\u7528cache-loader\u6765\u7F13\u5B58babel\u7F16\u8BD1\u7ED3\u679C" aria-hidden="true">#</a> 2. \u4F18\u5316loader\u914D\u7F6E\uFF0C\u6BD4\u5982\u4F7F\u7528cache-loader\u6765\u7F13\u5B58Babel\u7F16\u8BD1\u7ED3\u679C\uFF1A</h3><details class="custom-container details"><summary>\u67E5\u770B</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;cache-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// ... \u5176\u4ED6\u89C4\u5219</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></details><h3 id="_3-\u4F7F\u7528\u76F8\u5173\u63D2\u4EF6\u5BF9js-css-\u56FE\u7247\u8FDB\u884C\u538B\u7F29" tabindex="-1"><a class="header-anchor" href="#_3-\u4F7F\u7528\u76F8\u5173\u63D2\u4EF6\u5BF9js-css-\u56FE\u7247\u8FDB\u884C\u538B\u7F29" aria-hidden="true">#</a> 3. \u4F7F\u7528\u76F8\u5173\u63D2\u4EF6\u5BF9js,css,\u56FE\u7247\u8FDB\u884C\u538B\u7F29</h3><h3 id="_4-\u901A\u8FC7\u914D\u7F6Ewebpack\u7684resolve-alias\u914D\u7F6E\u522B\u540D-\u53EF\u4EE5\u52A0\u5FEBwebpack\u67E5\u627E\u6A21\u5757\u7684\u901F\u5EA6\u3002" tabindex="-1"><a class="header-anchor" href="#_4-\u901A\u8FC7\u914D\u7F6Ewebpack\u7684resolve-alias\u914D\u7F6E\u522B\u540D-\u53EF\u4EE5\u52A0\u5FEBwebpack\u67E5\u627E\u6A21\u5757\u7684\u901F\u5EA6\u3002" aria-hidden="true">#</a> 4.\u901A\u8FC7\u914D\u7F6EWebpack\u7684resolve.alias\u914D\u7F6E\u522B\u540D\uFF0C\u53EF\u4EE5\u52A0\u5FEBWebpack\u67E5\u627E\u6A21\u5757\u7684\u901F\u5EA6\u3002</h3><h3 id="_5-\u914D\u7F6E\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#_5-\u914D\u7F6E\u7F13\u5B58" aria-hidden="true">#</a> 5. \u914D\u7F6E\u7F13\u5B58</h3><p>Webpack \u7684\u7F13\u5B58\u914D\u7F6E\u4E3B\u8981\u901A\u8FC7 output \u914D\u7F6E\u9879\u4E2D\u7684 filename \u548C chunkFilename \u5C5E\u6027\uFF0C\u7ED3\u5408\u5185\u5BB9\u54C8\u5E0C\u503C\uFF08\u5982 [contenthash]\uFF09\u6765\u5B9E\u73B0</p><details class="custom-container details"><summary>\u67E5\u770B</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
  
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>  
  <span class="token comment">// \u5165\u53E3\u6587\u4EF6  </span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>  
    
  <span class="token comment">// \u8F93\u51FA\u914D\u7F6E  </span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
    <span class="token comment">// \u8F93\u51FA\u76EE\u5F55  </span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  
      
    <span class="token comment">// \u8F93\u51FA\u6587\u4EF6\u540D\uFF0C\u4F7F\u7528 [contenthash] \u6765\u786E\u4FDD\u6587\u4EF6\u5185\u5BB9\u53D8\u5316\u65F6\u6587\u4EF6\u540D\u4E5F\u4F1A\u53D8\u5316  </span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].[contenthash].js&#39;</span><span class="token punctuation">,</span>  
      
    <span class="token comment">// \u975E\u5165\u53E3 chunk \u7684\u6587\u4EF6\u540D\uFF08\u5982\u6309\u9700\u52A0\u8F7D\u7684\u6A21\u5757\uFF09  </span>
    <span class="token literal-property property">chunkFilename</span><span class="token operator">:</span> <span class="token string">&#39;[name].[contenthash].js&#39;</span><span class="token punctuation">,</span>  
      
    <span class="token comment">// \u6E05\u7406 /dist \u6587\u4EF6\u5939\u4E0B\u7684\u65E7\u6587\u4EF6\u5728\u6BCF\u6B21\u6784\u5EFA\u4E4B\u524D  </span>
    <span class="token literal-property property">clean</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>  
    
  <span class="token comment">// \u5176\u4ED6\u914D\u7F6E...  </span>
    
  <span class="token comment">// \u4F18\u5316\u914D\u7F6E  </span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
    <span class="token comment">// \u62C6\u5206\u4EE3\u7801\uFF0C\u63D0\u9AD8\u7F13\u5B58\u5229\u7528\u7387  </span>
    <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u62C6\u5206\u6240\u6709\u7C7B\u578B\u7684\u4EE3\u7801\u5757  </span>
      <span class="token literal-property property">cacheGroups</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
        <span class="token literal-property property">vendor</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\\\/]node_modules[\\\\/]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// \u5339\u914D node_modules \u76EE\u5F55\u4E0B\u7684\u6A21\u5757  </span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;vendors&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u63D0\u53D6\u51FA\u7684\u6587\u4EF6\u540D  </span>
          <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u4F5C\u7528\u4E8E\u5F02\u6B65\u548C\u975E\u5F02\u6B65\u4EE3\u7801\u5757  </span>
          <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// \u4F18\u5148\u7EA7\uFF0C\u6570\u5B57\u8D8A\u5927\u4F18\u5148\u7EA7\u8D8A\u9AD8  </span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>  
        <span class="token comment">// \u53EF\u4EE5\u6DFB\u52A0\u66F4\u591A\u7684\u7F13\u5B58\u7EC4...  </span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>  
    <span class="token punctuation">}</span><span class="token punctuation">,</span>  
      
    <span class="token comment">// \u8FD0\u884C\u65F6\u4EE3\u7801\u5206\u5272  </span>
    <span class="token literal-property property">runtimeChunk</span><span class="token operator">:</span> <span class="token string">&#39;single&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5C06\u8FD0\u884C\u65F6\u4EE3\u7801\u62C6\u5206\u4E3A\u4E00\u4E2A\u5355\u72EC\u7684 chunk  </span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>  
    
  <span class="token comment">// \u63D2\u4EF6\u914D\u7F6E...  </span>
    
  <span class="token comment">// \u5F00\u53D1\u670D\u52A1\u5668\u914D\u7F6E\uFF08\u5982\u679C\u9002\u7528\uFF09  </span>
  <span class="token comment">// devServer: {  </span>
  <span class="token comment">//   // \u914D\u7F6E\u5F00\u53D1\u670D\u52A1\u5668\u9009\u9879...  </span>
  <span class="token comment">// },  </span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div></details>`,15))}var l=s(p,[["render",t],["__file","webpack\u6253\u5305\u4F18\u5316\u65B9\u6848.html.vue"]]);export{l as default};
