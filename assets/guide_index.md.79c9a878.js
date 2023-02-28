import{_ as s,c as a,o as e,a as n}from"./app.55aea0e7.js";const y=JSON.parse('{"title":"Quick Start Guide","description":"","frontmatter":{"title":"Quick Start Guide"},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Using path modifiers","slug":"using-path-modifiers","link":"#using-path-modifiers","children":[]},{"level":3,"title":"Using query parameters modifiers","slug":"using-query-parameters-modifiers","link":"#using-query-parameters-modifiers","children":[]}]},{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[{"level":3,"title":"cacheDir","slug":"cachedir","link":"#cachedir","children":[]},{"level":3,"title":"maxAge","slug":"maxage","link":"#maxage","children":[]}]}],"relativePath":"guide/index.md","lastUpdated":1677596455000}'),o={name:"guide/index.md"},l=n(`<h1 id="quick-start-guide" tabindex="-1">Quick Start Guide <a class="header-anchor" href="#quick-start-guide" aria-hidden="true">#</a></h1><p>Convert any uploaded images with local provider using sharp modifier. No extra configuration needed, the modifiers will be applied based on the url.</p><blockquote><p>This is made using <a href="https://github.com/unjs/ipx" target="_blank" rel="noreferrer">ipx</a></p></blockquote><p>To install this plugin, run the following command in your Strapi project:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">strapi-plugin-local-image-sharp</span></span>
<span class="line"></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><p>This plugin works by setting modifiers either the path, or in the query string parameters.</p><ul><li>Original image:<br><code>http://localhost:1337/uploads/buffalo_56442f4096.png</code></li><li>WebP (Path modifier):<br><code>http://localhost:1337/uploads/format_webp/buffalo_56442f4096.png</code></li><li>WebP (Query parameters):<br><code>http://localhost:1337/uploads/buffalo_56442f4096.png?format=webp</code></li></ul><h3 id="using-path-modifiers" tabindex="-1">Using path modifiers <a class="header-anchor" href="#using-path-modifiers" aria-hidden="true">#</a></h3><p>Change format to <code>webp</code> and keep other things same as source:</p><p><code>http://localhost:1337/uploads/f_webp/buffalo_56442f4096.png</code></p><p>Keep original format <code>png</code> and set width to <code>200</code>:</p><p><code>http://localhost:1337/uploads/w_200/buffalo_56442f4096.png</code></p><p>You can combine modifiers using a coma, for example: Resize to <code>200x200px</code> using <code>embed</code> method and change format to <code>webp</code>:</p><p><code>http://localhost:1337/uploads/embed,f_webp,s_200x200/buffalo_56442f4096.png</code></p><h3 id="using-query-parameters-modifiers" tabindex="-1">Using query parameters modifiers <a class="header-anchor" href="#using-query-parameters-modifiers" aria-hidden="true">#</a></h3><p>Change format to <code>webp</code> and keep other things same as source:</p><p><code>http://localhost:1337/uploads/buffalo_56442f4096.png?format=webp</code></p><p>Keep original format <code>png</code> and set width to <code>200</code>:</p><p><code>http://localhost:1337/uploads/buffalo_56442f4096.png?width=200</code></p><p>You can combine modifiers using a coma, for example: Resize to <code>200x200px</code> using <code>embed</code> method and change format to <code>webp</code>:</p><p><code>http://localhost:1337/uploads/buffalo_56442f4096.png?format=webp&amp;resize=200x200&amp;embed</code></p><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-hidden="true">#</a></h2><h3 id="cachedir" tabindex="-1"><code>cacheDir</code> <a class="header-anchor" href="#cachedir" aria-hidden="true">#</a></h3><p>The directory where the generated files will be stored.</p><blockquote><p><em>By default, no value is set, so cache is disabled, meaning that the image will be generated on every request.</em></p></blockquote><p>You can set the cache directory using <code>STRAPI_PLUGIN_LOCAL_IMAGE_SHARP_CACHE_DIR</code> environment variable. Or you can set it in <code>config/plugins.js</code>:</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-82xS9" id="tab-0RvD7tW" checked="checked"><label for="tab-0RvD7tW">enviroment variables</label><input type="radio" name="group-82xS9" id="tab--kqGRWf"><label for="tab--kqGRWf">config/plugins.js</label></div><div class="blocks"><div class="language-bash active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">STRAPI_PLUGIN_LOCAL_IMAGE_SHARP_CACHE_DIR</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">.image-cache</span><span style="color:#A6ACCD;"> yarn start</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># or STRAPI_PLUGIN_LOCAL_IMAGE_SHARP_CACHE_DIR=.image-cache yarn develop</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">use strict</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">local-image-sharp</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">config</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">cacheDir</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.image-cache</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div></div></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>When providing a relative path, it will be resolved from the root of your project.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Don&#39;t forget to add <code>.image-cache</code> to your <code>.gitignore</code> file.</p></div><h3 id="maxage" tabindex="-1"><code>maxAge</code> <a class="header-anchor" href="#maxage" aria-hidden="true">#</a></h3><p>You can set the <code>Cache-Control</code> HTTP response header to improve the load performance. It&#39;s a good practice cache static resources using HTTP caching. <a href="https://developer.chrome.com/docs/lighthouse/performance/uses-long-cache-ttl" target="_blank" rel="noreferrer">See more here</a></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">use strict</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">local-image-sharp</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">config</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">maxAge</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">31536000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// which corresponds to 1 year: 60 seconds × 60 minutes × 24 hours × 365 days = 31536000 seconds.</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div>`,33),p=[l];function t(c,i,r,d,h,u){return e(),a("div",null,p)}const D=s(o,[["render",t]]);export{y as __pageData,D as default};
