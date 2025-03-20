import{_ as s,p as a}from"./app.5c80a7c1.js";const e={};function p(l,n){return n[0]||(n[0]=a(`<h1 id="nginx\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#nginx\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> nginx\u57FA\u672C\u4F7F\u7528</h1><p>\u6CE8\u610F\uFF1A\u4F7F\u7528\u4EE3\u7406\u65F6\u53EF\u4EE5\u662Fhttp\u4E5F\u53EF\u4EE5\u662Fhttps\uFF08\u5177\u4F53\u63A5\u53E3\u80FD\u5426\u8C03\u7528\u8981\u770B\u5BF9\u65B9\u670D\u52A1\u5668\u548C\u63A5\u53E3\u8BBE\u7F6E\uFF09\uFF0C\u5C40\u57DF\u7F51\u4F7F\u7528ip\u5730\u5740\u8BBF\u95EE\u4E0D\u53EF\u8BBF\u95EE\u65F6 \u5173\u95ED\u9632\u706B\u5899\uFF0Cvue\u9879\u76EE\u8BBE\u7F6E\u4EE3\u7406\u4E5F\u662F\u4E00\u6837\u3002</p><h3 id="\u8DE8\u534F\u8BAE\u8D44\u6E90\u8BBF\u95EE-https\u3001http" tabindex="-1"><a class="header-anchor" href="#\u8DE8\u534F\u8BAE\u8D44\u6E90\u8BBF\u95EE-https\u3001http" aria-hidden="true">#</a> \u8DE8\u534F\u8BAE\u8D44\u6E90\u8BBF\u95EE\uFF08https\u3001http\uFF09</h3><p>\u4E00\u822Chttps\u7F51\u7AD9\u4E0D\u80FD\u76F4\u63A5\u8BBF\u95EEhttp\u8D44\u6E90\uFF0C\u6216\u8005\u4F7F\u7528\u4EE3\u7406\uFF1A\u5728\u751F\u4EA7\u73AF\u5883\u642D\u5EFA\u7B2C\u4E00\u4E2Anginx\uFF0C\u5C06\u8BF7\u6C42\u8F6C\u53D1\u5230\u8D44\u6E90\u670D\u52A1\u5668\u4E0A\uFF0C\u5373http\u90A3\u4E2A\u94FE\u63A5\u4E0A\uFF0C\u5728\u8D44\u6E90\u670D\u52A1\u5668\u4E0A\u518D\u6B21\u642D\u5EFAnginx\uFF0C\u5C06\u8BF7\u6C42\u8F6C\u53D1\u5230\u9759\u6001\u8D44\u6E90\u4E0A\uFF0C\u8FBE\u5230\u56DE\u663E\u4F5C\u7528\u3002</p><p>http\u53EF\u4EE5\u8BF7\u6C42https\u8D44\u6E90\uFF0C\u53CD\u8FC7\u6765\u4E0D\u884C</p><p>\u5982\u679Chttp\u8D44\u6E90\u652F\u6301https\u8BF7\u6C42\u53EF\u4EE5\u5C06http\u8BF7\u6C42\u81EA\u52A8\u5347\u7EA7\u4E3Ahttps\u8BF7\u6C42<br> \u4F46\u5927\u90E8\u5206\u8D44\u6E90\u670D\u52A1\u5668\u4E0D\u4F1A\u7533\u8BF7https , \u6240\u4EE5\u4F7F\u7528nginx\u4EE3\u7406</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Content-Security-Policy<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>upgrade-insecure-requests<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u6CE8\u610F-\u4E0D\u8981\u4F7F\u7528\u4E2D\u6587\u540D\u79F0\u6587\u4EF6\u5939-\u8DEF\u5F84\u5185" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F-\u4E0D\u8981\u4F7F\u7528\u4E2D\u6587\u540D\u79F0\u6587\u4EF6\u5939-\u8DEF\u5F84\u5185" aria-hidden="true">#</a> \u6CE8\u610F:\u4E0D\u8981\u4F7F\u7528\u4E2D\u6587\u540D\u79F0\u6587\u4EF6\u5939/\u8DEF\u5F84\u5185</h3><p>\u5426\u5219\u53EF\u80FD\u4F1A\u542F\u52A8\u4E0D\u4E86</p><h3 id="location-\u5339\u914D\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#location-\u5339\u914D\u89C4\u5219" aria-hidden="true">#</a> location \u5339\u914D\u89C4\u5219</h3><ul><li>\u6CE8\u610F\uFF1A\u6700\u5927\u5339\u914D\u539F\u5219\uFF08\u5339\u914D\u7684\u957F\u5EA6\u6700\u957F\uFF09\u3001\u5339\u914D\u987A\u5E8F\u4F18\u5148\u539F\u5219\uFF08\u8C01\u5199\u5728\u524D\u9762\uFF09\u3001\u6B63\u5219\u662F\u5426\u4F18\u5148\u95EE\u9898\u3002</li><li>\u5982\u679C\u628A\u201C^~\u201D\u8FD9\u4E2A\u524D\u7F00\u7528\u4E8E\u4E00\u4E2A\u5E38\u89C4\u5B57\u7B26\u4E32,\u90A3\u4E48\u544A\u8BC9nginx \u5982\u679C\u8DEF\u5F84\u5339\u914D\u90A3\u4E48\u4E0D\u6D4B\u8BD5\u6B63\u5219\u8868\u8FBE\u5F0F\u3002</li></ul><table><thead><tr><th><div style="width:150px;">\u5339\u914D\u7B26</div></th><th>\u542B\u4E49</th></tr></thead><tbody><tr><td>location = /url</td><td>\u8868\u793A\u7CBE\u786E\u5339\u914D\uFF0C\u53EA\u6709\u5B8C\u5168\u5339\u914D\u4E0A\u624D\u80FD\u751F\u6548</td></tr><tr><td>location ^~ /url</td><td>\u5BF9URL\u8DEF\u5F84\u8FDB\u884C\u524D\u7F00\u5339\u914D\uFF0C\u5E76\u4E14\u5728\u6B63\u5219\u4E4B\u524D</td></tr><tr><td>location ^~ /url/</td><td>\u5BF9URL\u8DEF\u5F84\u8FDB\u884C\u524D\u7F00\u5339\u914D\uFF0C\u5E76\u4E14\u5728\u6B63\u5219\u4E4B\u524D , \u533A\u522B\u4E8E\u4E0A\u9762url\u540E\u9762\u662F\u5426\u5E26 &quot;/&quot;</td></tr><tr><td>location /url</td><td>\u4E0D\u5E26\u4EFB\u4F55\u4FEE\u9970\u7B26\uFF0C\u4E5F\u8868\u793A\u524D\u7F00\u5339\u914D\uFF0C\u4F46\u662F\u5728\u6B63\u5219\u5339\u914D\u4E4B\u540E</td></tr><tr><td>location ~ pattern</td><td>\u8868\u793A\u533A\u5206\u5927\u5C0F\u5199\u7684\u6B63\u5219\u5339\u914D</td></tr><tr><td>location ~* pattern</td><td>\u5F00\u5934\u8868\u793A\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u7684\u6B63\u5219\u5339\u914D</td></tr><tr><td>location /</td><td>\u901A\u7528\u5339\u914D\uFF0C\u4EFB\u4F55\u672A\u5339\u914D\u5230\u5176\u5B83location\u7684\u8BF7\u6C42\u90FD\u4F1A\u5339\u914D\u5230\uFF0C\u76F8\u5F53\u4E8Eswitch\u4E2D\u7684default</td></tr></tbody></table><h3 id="\u6B63\u5219\u5339\u914D\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5219\u5339\u914D\u793A\u4F8B" aria-hidden="true">#</a> \u6B63\u5219\u5339\u914D\u793A\u4F8B</h3><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>location ~ \\.(gif|jpg|png|js|css)$ {
  echo &quot;\u6B63\u5219\u5339\u914D\u56FE\u7247&quot;;
}

location ~ \\.php$ {
    proxy_set_header referer $ref;
    proxy_pass https://xxx.com;
}


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="proxy-pass-\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#proxy-pass-\u7528\u6CD5" aria-hidden="true">#</a> proxy_pass \u7528\u6CD5</h3><ul><li>\u914D\u7F6E\u4EE3\u7406\u8F6C\u53D1 url</li><li>url\u540E\u9762\u52A0/\uFF0C\u8868\u793A\u7EDD\u5BF9\u6839\u8DEF\u5F84\uFF1B\u5982\u679C\u6CA1\u6709/\uFF0C\u8868\u793A\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u628A\u5339\u914D\u7684\u8DEF\u5F84\u90E8\u5206\u4E5F\u7ED9\u4EE3\u7406\u8D70\u3002</li></ul><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>location ^~ /api/ {            # \u5982\u679C\u662F\u8981\u5339\u966A\u201Capi\u201D\u6CE8\u610F\u540E\u9762\u8981\u52A0\u659C\u6760\uFF0C\u5426\u5219\u5B83\u53EF\u80FD\u5339\u914D\u6574\u4E2A\u8DEF\u5F84\u6216\u8005api\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26
   proxy_pass https://xxx.cn   # \u5B9E\u9645\u8BF7\u6C42 https://xxx.cn/api
   proxy_pass https://xxx.cn/  # \u5B9E\u9645\u8BF7\u6C42 https://xxx.cn/ 
}

# \u548C\u4E0A\u9762\u51E0\u4E4E\u7B49\u6548 \u53BB\u6389mig  (~*\u4E0D\u533A\u5206\u5927\u5C0F\u5199) (^/(mig)\u6B63\u5219\u5339\u914D)
location  ~* ^/(mig) {
    proxy_set_header Host 192.168.1.5:12320;
    rewrite ^/mig/(.*)$ /$1 break;
    proxy_pass http://192.168.1.5:12320;
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="\u57FA\u672C\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u914D\u7F6E" aria-hidden="true">#</a> \u57FA\u672C\u914D\u7F6E</h3><details class="custom-container details"><summary>\u4EE3\u7801\u793A\u4F8B</summary><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#user  nobody;</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">#error_log  logs/error.log;</span>
<span class="token comment">#error_log  logs/error.log  notice;</span>
<span class="token comment">#error_log  logs/error.log  info;</span>

<span class="token comment">#pid        logs/nginx.pid;</span>


events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


http <span class="token punctuation">{</span>
    include       mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>

    <span class="token comment">#log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
    <span class="token comment">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
    <span class="token comment">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span>

    <span class="token comment">#access_log  logs/access.log  main;</span>

    sendfile        on<span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>


    <span class="token comment"># \u8D85\u65F6\u8BBE\u7F6E</span>
    <span class="token comment"># \u8FD9\u4E9B\u8D85\u65F6\u65F6\u95F4\u540C\u6837\u53EF\u4EE5\u5728 http\u3001server\u3001location \u5757\u4E2D\u8BBE\u7F6E</span>

    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span> <span class="token comment"># \u8BBE\u7F6E\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u4E4B\u95F4\u7684 keepalive \u8FDE\u63A5\u7684\u8D85\u65F6\u65F6\u95F4\u3002\u5982\u679C\u5728\u6307\u5B9A\u65F6\u95F4\u5185\u6CA1\u6709\u6D3B\u52A8\uFF0C\u5219\u8FDE\u63A5\u4F1A\u88AB\u5173\u95ED\u3002</span>
    <span class="token comment"># client_body_timeout 10s; # \u5982\u679C\u5728\u6307\u5B9A\u65F6\u95F4\u5185\u5BA2\u6237\u7AEF\u6CA1\u6709\u53D1\u9001\u5B8C\u6574\u7684\u8BF7\u6C42\u4F53\uFF0C\u5219 Nginx \u4F1A\u5173\u95ED\u8FDE\u63A5\u3002</span>
    <span class="token comment"># client_header_timeout 10s; # \u5982\u679C\u5728\u6307\u5B9A\u65F6\u95F4\u5185\u5BA2\u6237\u7AEF\u6CA1\u6709\u53D1\u9001\u5B8C\u6574\u7684\u8BF7\u6C42\u5934\uFF0C\u5219 Nginx \u4F1A\u5173\u95ED\u8FDE\u63A5\u3002</span>
    <span class="token comment"># send_timeout; # \u5982\u679C\u5728\u6307\u5B9A\u65F6\u95F4\u5185 Nginx \u6CA1\u6709\u5411\u5BA2\u6237\u7AEF\u53D1\u9001\u4EFB\u4F55\u6570\u636E\uFF0C\u5219\u8FDE\u63A5\u4F1A\u88AB\u5173\u95ED\u3002</span>
    <span class="token comment"># proxy_connect_timeout 500; # \u8BBE\u7F6E\u4E0E\u4EE3\u7406\u670D\u52A1\u5668\u5EFA\u7ACB\u8FDE\u63A5\u7684\u8D85\u65F6\u65F6\u95F4\u3002</span>
    <span class="token comment"># proxy_send_timeout 500; # \u8BBE\u7F6E\u5411\u4EE3\u7406\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42\u7684\u8D85\u65F6\u65F6\u95F4\u3002</span>
    <span class="token comment"># proxy_read_timeout 500; # \u8BBE\u7F6E\u4ECE\u4EE3\u7406\u670D\u52A1\u5668\u8BFB\u53D6\u54CD\u5E94\u7684\u8D85\u65F6\u65F6\u95F4\u3002</span>



    <span class="token comment">#gzip  on;</span>

    <span class="token comment"># \u8BBE\u7F6Ehttp ref </span>
    map <span class="token variable">$http_referer</span> <span class="token variable">$ref</span> <span class="token punctuation">{</span>
        default <span class="token variable">$http_referer</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token comment"># proxy_connect_timeout 500;</span>
    <span class="token comment"># #\u8DDF\u540E\u7AEF\u670D\u52A1\u5668\u8FDE\u63A5\u7684\u8D85\u65F6\u65F6\u95F4_\u53D1\u8D77\u63E1\u624B\u7B49\u5019\u54CD\u5E94\u8D85\u65F6\u65F6\u95F4</span>
    <span class="token comment"># proxy_read_timeout 600;</span>
    <span class="token comment"># #\u8FDE\u63A5\u6210\u529F\u540E_\u7B49\u5019\u540E\u7AEF\u670D\u52A1\u5668\u54CD\u5E94\u7684\u65F6\u95F4_\u5176\u5B9E\u5DF2\u7ECF\u8FDB\u5165\u540E\u7AEF\u7684\u6392\u961F\u4E4B\u4E2D\u7B49\u5019\u5904\u7406</span>
    <span class="token comment"># proxy_send_timeout 500;</span>
    <span class="token comment"># #\u540E\u7AEF\u670D\u52A1\u5668\u6570\u636E\u56DE\u4F20\u65F6\u95F4_\u5C31\u662F\u5728\u89C4\u5B9A\u65F6\u95F4\u5185\u540E\u7AEF\u670D\u52A1\u5668\u5FC5\u987B\u4F20\u5B8C\u6240\u6709\u6570\u636E</span>
    <span class="token comment"># proxy_buffer_size 128k;</span>
    <span class="token comment"># #\u4EE3\u7406\u8BF7\u6C42\u7F13\u5B58\u533A_\u8FD9\u4E2A\u7F13\u5B58\u533A\u95F4\u4F1A\u4FDD\u5B58\u7528\u6237\u7684\u5934\u4FE1\u606F\u4EE5\u4F9BNginx\u8FDB\u884C\u89C4\u5219\u5904\u7406_\u4E00\u822C\u53EA\u8981\u80FD\u4FDD\u5B58\u4E0B\u5934\u4FE1\u606F\u5373\u53EF  </span>
    <span class="token comment"># proxy_buffers 4 128k;</span>
    <span class="token comment"># #\u540C\u4E0A \u544A\u8BC9Nginx\u4FDD\u5B58\u5355\u4E2A\u7528\u7684\u51E0\u4E2ABuffer\u6700\u5927\u7528\u591A\u5927\u7A7A\u95F4</span>
    <span class="token comment"># proxy_busy_buffers_size 256k;</span>
    <span class="token comment"># #\u5982\u679C\u7CFB\u7EDF\u5F88\u5FD9\u7684\u65F6\u5019\u53EF\u4EE5\u7533\u8BF7\u66F4\u5927\u7684proxy_buffers \u5B98\u65B9\u63A8\u8350*2</span>
    <span class="token comment"># proxy_temp_file_write_size 128k;</span>
    <span class="token comment"># #proxy\u7F13\u5B58\u4E34\u65F6\u6587\u4EF6\u7684\u5927\u5C0F</span>
    <span class="token comment"># proxy_temp_path D:/loren/jzWeb/web3.0/nginx_customTest/temp;</span>
    <span class="token comment"># #\u7528\u4E8E\u6307\u5B9A\u672C\u5730\u76EE\u5F55\u6765\u7F13\u51B2\u8F83\u5927\u7684\u4EE3\u7406\u8BF7\u6C42</span>
    <span class="token comment"># # proxy_cache_path /usr/local/nginx/cache levels=1:2 keys_zone=cache_one:200m inactive=1d max_size=30g;</span>
    <span class="token comment"># #\u8BBE\u7F6Eweb\u7F13\u5B58\u533A\u540D\u4E3Acache_one,\u5185\u5B58\u7F13\u5B58\u7A7A\u95F4\u5927\u5C0F\u4E3A200M\uFF0C\u81EA\u52A8\u6E05\u9664\u8D85\u8FC71\u5929\u6CA1\u6709\u88AB\u8BBF\u95EE\u8FC7\u7684\u7F13\u5B58\u6570\u636E\uFF0C\u786C\u76D8\u7F13\u5B58\u7A7A\u95F4\u5927\u5C0F30g</span>
    

    <span class="token comment"># \u4EE3\u7406\u8FC7\u7A0B: </span>
    <span class="token comment"># \u5148\u76D1\u542C 8888\u7AEF\u53E3 \u8F6C\u53D1\u5230vue\u524D\u7AEF\u9879\u76EE localhost:8084 , </span>
    <span class="token comment"># \u7136\u540E\u6240\u6709\u7684\u6570\u636E\u8BF7\u6C42\u4EE3\u7406\u5230\u4E86 hwuat.dadayun.cn ,</span>
    <span class="token comment"># (\u5373: \u4E0B\u9762\u914D\u7F6E\u4E86\u5F88\u591A\u63A5\u53E3\u7684\u8F6C\u53D1[\u4EE3\u7406])</span>
    
    <span class="token comment"># \u5B9E\u9645\u7684vue\u9879\u76EE\u672C\u8EAB\u5C31\u53EF\u4EE5\u914D\u7F6E\u4EE3\u7406\uFF0C\u8FD9\u91CC\u53EA\u662F\u793A\u4F8B</span>
    server <span class="token punctuation">{</span>
        listen       <span class="token number">8888</span><span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>
        add_header X-XSS-Protection <span class="token string">&quot;1; mode=block&quot;</span><span class="token punctuation">;</span>
        proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
        proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>

        <span class="token comment">#charset koi8-r;</span>

        <span class="token comment">#access_log  logs/host.access.log  main;</span>

       


        <span class="token comment"># \u524D\u7AEF\u6587\u4EF6\u6240\u5728\u8DEF\u5F84</span>
		<span class="token builtin class-name">set</span> <span class="token variable">$frontend_root</span> D:<span class="token punctuation">\\</span><span class="token punctuation">\\</span>loren<span class="token punctuation">\\</span><span class="token punctuation">\\</span>jzWeb<span class="token punctuation">\\</span>web3.0<span class="token punctuation">\\</span><span class="token punctuation">\\</span>frontEndV3<span class="token punctuation">\\</span><span class="token punctuation">\\</span>frontend-node<span class="token punctuation">\\</span><span class="token punctuation">\\</span>src<span class="token punctuation">;</span>

        <span class="token comment"># \u9759\u6001\u8D44\u6E90\u6587\u4EF6-\u8BF7\u6C42\u672C\u5730-\u5B9E\u9645\u4E0A\u4E5F\u662Fvue\u9879\u76EE\u8DEF\u5F84</span>
        location ^~ /assets <span class="token punctuation">{</span>
            root <span class="token variable">$frontend_root</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


        <span class="token comment"># \u5982\u679C\u60A8\u5728nginx\u4E2D\u8BBE\u7F6E\u4E86\u9759\u6001\u76EE\u5F55\uFF0C\u90A3\u4E48nginx\u4F1A\u81EA\u52A8\u7F13\u5B58\u9759\u6001\u6587\u4EF6\uFF0C\u65E0\u9700\u518D\u8FDB\u884C\u989D\u5916\u7684\u7F13\u5B58\u914D\u7F6E\u3002</span>
        <span class="token comment"># nginx\u4F1A\u5C06\u9759\u6001\u6587\u4EF6\u7F13\u5B58\u5230\u5185\u5B58\u4E2D\uFF0C\u5E76\u4E14\u7F13\u5B58\u65F6\u95F4\u4E3A10\u79D2</span>
        location ^~ /static <span class="token punctuation">{</span>
            
            root <span class="token variable">$frontend_root</span><span class="token punctuation">;</span>


            <span class="token comment"># \u4FEE\u6539\u7F13\u5B58\u914D\u7F6E</span>

            <span class="token comment"># expires\u53C2\u6570\u6307\u5B9A\u7F13\u5B58\u65F6\u95F4\uFF0C\u8FD9\u91CC\u8BBE\u7F6E\u4E3A1\u5929</span>
            expires 1d<span class="token punctuation">;</span> 
            <span class="token comment"># expires 30s; # \u7F13\u5B58\u65F6\u95F4\u4E3A30\u79D2</span>
            <span class="token comment"># expires 30m; # \u7F13\u5B58\u65F6\u95F4\u4E3A30\u5206\u949F</span>
            <span class="token comment"># expires 3h; # \u7F13\u5B58\u65F6\u95F4\u4E3A3\u5C0F\u65F6</span>

            <span class="token comment"># \u8BBE\u7F6E\u4E3Apublic\uFF0C\u8868\u793A\u53EF\u4EE5\u88AB\u4EFB\u4F55\u7F13\u5B58\u670D\u52A1\u5668\u7F13\u5B58</span>
            add_header Cache-Control <span class="token string">&quot;public&quot;</span><span class="token punctuation">;</span>

            <span class="token comment"># \u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5982\u679C\u60A8\u7684\u9759\u6001\u6587\u4EF6\u7ECF\u5E38\u66F4\u65B0\uFF0C\u5EFA\u8BAE\u4E0D\u8981\u8BBE\u7F6E\u8FC7\u957F\u7684\u7F13\u5B58\u65F6\u95F4\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u5BFC\u81F4\u5BA2\u6237\u7AEF\u65E0\u6CD5\u83B7\u53D6\u6700\u65B0\u7684\u6587\u4EF6\u3002</span>

        <span class="token punctuation">}</span>


        <span class="token comment"># \u82E5\u7F13\u5B58\u4EE3\u7406\u670D\u52A1\u7AEF\u9759\u6001\u6587\u4EF6</span>
        <span class="token comment">#  location ~ .*\\.(js|css|gif|jpg|jpeg|png|bmp|swf|flv|html|htm)$ {</span>

        <span class="token comment">#     # \u9700\u5148\u5728http\u914D\u7F6E\u533A\u914D\u7F6Eproxy_cache_path</span>

        <span class="token comment">#     # proxy_pass http://proxyserver;</span>
        <span class="token comment">#     # proxy_set_header Host proxyserver;</span>

        <span class="token comment">#     # proxy_redirect default;</span>
        <span class="token comment">#     # proxy_set_header X-Forwarded-For $remote_addr;</span>
        <span class="token comment">#     # proxy_cache cache_one;</span>
        <span class="token comment">#     # proxy_cache_valid 200 304 5m;</span>
        <span class="token comment">#     # proxy_cache_valid any 1m;</span>
        <span class="token comment">#     # proxy_cache_key $host$uri$is_args$args;</span>
        <span class="token comment">#     # add_header Nginx-Cache &quot;$upstream_cache_status&quot;;</span>
        <span class="token comment">#     # expires 10d;</span>
        <span class="token comment"># }</span>


        <span class="token comment"># \u6B63\u5219\u5339\u914D</span>
        <span class="token comment"># location ~* \\.html$ {</span>
        <span class="token comment">#     root $frontend_root;</span>
        <span class="token comment">#     try_files $uri $uri/ /404.html;</span>
        <span class="token comment"># }</span>

        <span class="token comment"># \u6700\u597D\u7528\u4E0A\u9762\u8FD9\u79CD</span>

        <span class="token comment"># location ~* /(index|reader|ads_test) {</span>
        <span class="token comment">#     root $frontend_root;</span>
        <span class="token comment"># }</span>


        <span class="token comment"># \u6570\u636E\u8BF7\u6C42-\u8F6C\u53D1\uFF08\u4EE3\u7406\uFF09\u8BF7\u6C42 https://hwuat.dadayun.cn/v1/</span>
        location /v1/ <span class="token punctuation">{</span>
            <span class="token comment"># \u8BBE\u7F6E\u8BF7\u6C42header Host</span>
            proxy_set_header Host xxx.cn<span class="token punctuation">;</span>
            <span class="token comment"># \u8BBE\u7F6E\u8BF7\u6C42header referer (\u9632\u76D7\u94FE\u7684\u4F5C\u7528)</span>
            proxy_set_header referer <span class="token variable">$ref</span><span class="token punctuation">;</span>
            <span class="token comment"># \u8BBE\u7F6E\u8BF7\u6C42\u5730\u5740</span>
            proxy_pass https://xxx.cn/v1/<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        location ~ <span class="token punctuation">\\</span>.php$ <span class="token punctuation">{</span>
            proxy_set_header referer <span class="token variable">$ref</span><span class="token punctuation">;</span>
            proxy_pass https://xxx.cn<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


        <span class="token comment"># \u9ED8\u8BA4\u9875\u9762, \u8F93\u5165\u57DF\u540D\u5373\u663E\u793A\u524D\u7AEF index.html</span>
        location <span class="token operator">=</span>/ <span class="token punctuation">{</span>
            root <span class="token variable">$frontend_root</span><span class="token punctuation">;</span>
            index index.html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment"># \u9ED8\u8BA4\u8F6C\u5230\uFF08\u4EE3\u7406\uFF09vue\u9879\u76EE</span>
        location / <span class="token punctuation">{</span>
            <span class="token comment"># vue\u9879\u76EE\u7AEF\u53E3</span>
            proxy_set_header localhost:8084<span class="token punctuation">;</span>
            proxy_pass http://localhost:8084<span class="token punctuation">;</span>

            <span class="token comment"># \u5982\u679C\u662F\u672C\u5730\u975Evue\uFF08\u6216\u975E\u5E26\u670D\u52A1\u7684\u9879\u76EE \u5982php\uFF09</span>
            <span class="token comment"># root $frontend_root;</span>
            <span class="token comment"># index index.php;</span>
            
        <span class="token punctuation">}</span>

        <span class="token comment"># \u7ED9\u63A5\u53E3\u6DFB\u52A0\u652F\u6301 CORS \u7684\u914D\u7F6E\uFF08\u4E5F\u53EF\u4EE5\u5168\u5C40\u914D\u7F6E\uFF0C\u653E\u5728server\u91CC\uFF09\uFF1A</span>
        <span class="token comment"># \u914D\u7F6E\u662F\u4E3A\u4E86\u4ECE\u522B\u7684\u57DF\u540D\u3001\u7AEF\u53E3\u53F7\u4E5F\u53EF\u4EE5\u8BBF\u95EEnginx\u6240\u4EE3\u7406\u7684\u57DF\u540D\u7AEF\u53E3\u53F7\uFF0C\u4ECE\u800C\u5B9E\u73B0\u522B\u7684\u57DF\u540D\u53EF\u8DE8\u57DF\u8BBF\u95EEnginx</span>
        location /rest<span class="token punctuation">{</span>
            <span class="token comment"># \u7ED9OPTIONS\u6DFB\u52A0200\u7684\u8FD4\u56DE\uFF0C\u662F\u4E3A\u4E86\u5904\u7406\u5728\u53D1\u9001POST\u8BF7\u6C42\u65F6Nginx\u4F9D\u7136\u62D2\u7EDD\u8BBF\u95EE\u7684\u9519\u8BEF,</span>
            <span class="token comment"># \u53D1\u9001&quot;\u9884\u68C0\u8BF7\u6C42&quot;\u65F6\uFF0C\u9700\u8981\u7528\u5230\u65B9\u6CD5 OPTIONS ,\u6240\u4EE5\u670D\u52A1\u5668\u9700\u8981\u5141\u8BB8\u8BE5\u65B9\u6CD5\u3002</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$request_method</span> <span class="token operator">=</span> <span class="token string">&#39;OPTIONS&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                add_header Access-Control-Allow-Origin * always<span class="token punctuation">;</span>
                add_header Access-Control-Allow-Methods <span class="token string">&#39;GET,POST,PUT,DELETE,OPTIONS&#39;</span><span class="token punctuation">;</span>
                add_header Access-Control-Allow-Headers <span class="token string">&#39;DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range&#39;</span><span class="token punctuation">;</span>
                <span class="token builtin class-name">return</span> <span class="token number">200</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            add_header Access-Control-Allow-Origin <span class="token string">&#39;*&#39;</span> always<span class="token punctuation">;</span>
            add_header Access-Control-Allow-Methods <span class="token string">&#39;GET, PUT, POST, DELETE, OPTIONS&#39;</span><span class="token punctuation">;</span>
            add_header Access-Control-Allow-Headers <span class="token string">&#39;DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range&#39;</span><span class="token punctuation">;</span>
             <span class="token comment"># \u5982\u679C\u8DE8\u57DF\u8BF7\u6C42\u643A\u5E26\u4E86\u81EA\u5B9A\u4E49\u8BF7\u6C42\u5934\uFF0C\u90A3\u4E48\u670D\u52A1\u5668\u7AEF\u9700\u8981\u8BBE\u7F6E Access-Control-Allow-Headers \u54CD\u5E94\u5934\uFF0C\u4EE5\u5141\u8BB8\u8FD9\u4E9B\u8BF7\u6C42\u5934\u3002\u5982\u679C\u670D\u52A1\u5668\u7AEF\u6CA1\u6709\u6B63\u786E\u8BBE\u7F6EAccess-Control-Allow-Headers\uFF0C\u90A3\u4E48\u5373\u4F7F\u8BBE\u7F6E\u4E86Access-Control-Allow-Origin: *\uFF0C\u4ECD\u7136\u4F1A\u51FA\u73B0CORS\u9519\u8BEF\u3002</span>

            proxy_pass  http://ip:port/thing<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

 


        <span class="token comment"># \u6216\u8005 \u7528\u4EE5\u4E0B\u5B9A\u4E49404</span>

        error_page <span class="token number">404</span> /404.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /404.html <span class="token punctuation">{</span>
            root <span class="token variable">$frontend_root</span><span class="token punctuation">;</span>
            <span class="token comment"># internal; # internal\u6307\u4EE4\u7528\u4E8E\u9650\u5236\u53EA\u80FD\u901A\u8FC7\u5185\u90E8\u91CD\u5B9A\u5411\u8BBF\u95EE\u8BE5location\u5757\u5185\u7684\u5185\u5BB9</span>
        <span class="token punctuation">}</span>


        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root  <span class="token variable">$frontend_root</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


        <span class="token comment"># location / \u4F18\u5148\u7EA7\u9AD8\uFF0C\u5728\u4E0A\u9762\u5B9A\u4E49404\uFF0C50x</span>
        <span class="token comment">#error_page  404              /404.html;</span>

        <span class="token comment"># redirect server error pages to the static page /50x.html</span>
        <span class="token comment">#</span>
      
    <span class="token punctuation">}</span>

    <span class="token comment"># HTTPS server</span>
    <span class="token comment">#</span>
    <span class="token comment">#server {</span>
    <span class="token comment">#    listen       443 ssl;</span>
    <span class="token comment">#    server_name  localhost;</span>

    <span class="token comment">#    ssl_certificate      cert.pem;</span>
    <span class="token comment">#    ssl_certificate_key  cert.key;</span>

    <span class="token comment">#    ssl_session_cache    shared:SSL:1m;</span>
    <span class="token comment">#    ssl_session_timeout  5m;</span>

    <span class="token comment">#    ssl_ciphers  HIGH:!aNULL:!MD5;</span>
    <span class="token comment">#    ssl_prefer_server_ciphers  on;</span>

    <span class="token comment">#    location / {</span>
    <span class="token comment">#        root   html;</span>
    <span class="token comment">#        index  index.html index.htm;</span>
    <span class="token comment">#    }</span>
    <span class="token comment">#}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br></div></div><h3 id="\u57FA\u4E8E\u8BBF\u95EE\u57DF\u540D\u8FDB\u884C\u5206\u53D1" tabindex="-1"><a class="header-anchor" href="#\u57FA\u4E8E\u8BBF\u95EE\u57DF\u540D\u8FDB\u884C\u5206\u53D1" aria-hidden="true">#</a> \u57FA\u4E8E\u8BBF\u95EE\u57DF\u540D\u8FDB\u884C\u5206\u53D1</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5F53\u5BA2\u6237\u7AEF\u8BBF\u95EEwww.xxx.com,\u76D1\u542C\u7AEF\u53E3\u53F7\u4E3A80,\u76F4\u63A5\u8DF3\u8F6C\u5230data/www\u76EE\u5F55\u4E0B\u6587\u4EF6</span>
server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  www.xxx.com<span class="token punctuation">;</span>
    location / <span class="token punctuation">{</span>
        root   data/www<span class="token punctuation">;</span>
        index  index.html index.htm<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment"># \u5F53\u5BA2\u6237\u7AEF\u8BBF\u95EEwww.lijie.com,\u76D1\u542C\u7AEF\u53E3\u53F7\u4E3A80,\u76F4\u63A5\u8DF3\u8F6C\u5230data/bbs\u76EE\u5F55\u4E0B\u6587\u4EF6</span>
    server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  bbs.xxx.com<span class="token punctuation">;</span>
    location / <span class="token punctuation">{</span>
        root   data/bbs<span class="token punctuation">;</span>
        index  index.html index.htm<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></details><h1 id="\u672C\u5730\u8C03\u8BD5\u4EE3\u7406\u5230https-\u8BF7\u6C42\u65F6\u62A5\u9519502" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u8C03\u8BD5\u4EE3\u7406\u5230https-\u8BF7\u6C42\u65F6\u62A5\u9519502" aria-hidden="true">#</a> \u672C\u5730\u8C03\u8BD5\u4EE3\u7406\u5230https\uFF0C\u8BF7\u6C42\u65F6\u62A5\u9519502</h1><p>\u89E3\u51B3\uFF1A\u6DFB\u52A0 proxy_ssl_server_name on</p><p>\u539F\u56E0\uFF1Anginx\u53CD\u5411\u4EE3\u7406\uFF0C\u5728\u8BF7\u6C42\u65F6DNS\u57DF\u540D\u8FDB\u884C\u89E3\u6790\uFF0C\u771F\u6B63\u8BF7\u6C42\u51FA\u53BB\u7684\u4E3AIP\u4E0E\u7AEF\u53E3\uFF0C\u4F46\u5BF9\u65B9\u7CFB\u7EDF\u662F\u591A\u4E2A\u57DF\u540D\u5BF9\u5E94\u4E00\u4E2A\u516C\u7F51ip\uFF0C\u8FD9\u4E2A\u4E00\u4E2A\u516C\u7F51IP\u4E0B\u6620\u5C04\u5230\u4E86\u591A\u4E2A\u9879\u76EE\u548C\u670D\u52A1\uFF0C\u901A\u8FC7nginx\u7684server_name\u8FDB\u884C\u533A\u5206\u3002</p><details class="custom-container details"><summary>\u793A\u4F8B</summary><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>location / {
    proxy_ssl_server_name on;
    proxy_set_header Host ywzypt.fzgxctgroup.com;
    proxy_pass https://ywzypt.fzgxctgroup.com; 
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></details>`,23))}var r=s(e,[["render",p],["__file","nginx\u57FA\u672C\u4F7F\u7528.html.vue"]]);export{r as default};
