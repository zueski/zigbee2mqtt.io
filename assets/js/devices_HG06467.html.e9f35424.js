"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[67600],{79629:(e,s,n)=>{n.r(s),n.d(s,{comp:()=>a,data:()=>i});var t=n(23785);const o={},a=(0,n(86670).A)(o,[["render",function(e,s){const n=(0,t.g2)("RouteLink");return(0,t.uX)(),(0,t.CE)("div",null,[s[8]||(s[8]=(0,t.Lk)("h1",{id:"lidl-hg06467",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#lidl-hg06467"},[(0,t.Lk)("span",null,"Lidl HG06467")])],-1)),(0,t.Lk)("table",null,[s[6]||(s[6]=(0,t.Lk)("thead",null,[(0,t.Lk)("tr",null,[(0,t.Lk)("th"),(0,t.Lk)("th")])],-1)),(0,t.Lk)("tbody",null,[s[2]||(s[2]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Model"),(0,t.Lk)("td",null,"HG06467")],-1)),(0,t.Lk)("tr",null,[s[1]||(s[1]=(0,t.Lk)("td",null,"Vendor",-1)),(0,t.Lk)("td",null,[(0,t.bF)(n,{to:"/supported-devices/#v=Lidl"},{default:(0,t.k6)((()=>s[0]||(s[0]=[(0,t.eW)("Lidl")]))),_:1})])]),s[3]||(s[3]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Description"),(0,t.Lk)("td",null,"Melinera smart LED string lights")],-1)),s[4]||(s[4]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Exposes"),(0,t.Lk)("td",null,"light (state, brightness, color_hs), linkquality")],-1)),s[5]||(s[5]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Picture"),(0,t.Lk)("td",null,[(0,t.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/HG06467.png",alt:"Lidl HG06467"})])],-1))])]),s[9]||(s[9]=(0,t.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Factory reset the LED string by holding the &quot;F&quot; button for 5 seconds. When you let go of the button the LED string should blink slowly After resetting the LED string will automatically connect.</p><p>While pairing, keep the string close to the adapter.</p><h3 id="trigger-effects" tabindex="-1"><a class="header-anchor" href="#trigger-effects"><span>Trigger effects</span></a></h3><p>Controls the 16 build-in effects of the LED string. An effect expects 3 parameters: <code>speed</code>, <code>colors</code> and <code>effect</code>. To trigger an effect send a message to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;effect&quot;: {&quot;effect&quot;: EFFECT, &quot;speed&quot;: SPEED, &quot;colors&quot;: COLORS}}</code>. Description:</p><ul><li><code>SPEED</code> should be a number between 1 and 100.</li><li><code>COLORS</code> is an array of JSON objects containing <code>r</code>, <code>g</code>, <code>b</code>. Note: some effects support multiple colors</li><li><code>EFFECT</code> is a string, below is a list of possible values and the amount of colors it supports</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">|     effect             |     # colors    |</span>\n<span class="line">|------------------------|-----------------|</span>\n<span class="line">|     steady             |     1           |</span>\n<span class="line">|     snow               |     1           |</span>\n<span class="line">|     rainbow            |     0           |</span>\n<span class="line">|     snake              |     6           |</span>\n<span class="line">|     twinkle            |     2           |</span>\n<span class="line">|     firework           |     2           |</span>\n<span class="line">|     horizontal_flag    |     3           |</span>\n<span class="line">|     waves              |     3           |</span>\n<span class="line">|     updown             |     2           |</span>\n<span class="line">|     vintage            |     1           |</span>\n<span class="line">|     fading             |     1           |</span>\n<span class="line">|     collide            |     1           |</span>\n<span class="line">|     strobe             |     5           |</span>\n<span class="line">|     sparkles           |     3           |</span>\n<span class="line">|     carnaval           |     6           |</span>\n<span class="line">|     glow               |     6           |</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-message-payload" tabindex="-1"><a class="header-anchor" href="#example-message-payload"><span>Example message payload</span></a></h4><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;snake&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">        <span class="token property">&quot;speed&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>\n<span class="line">        <span class="token property">&quot;colors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>\n<span class="line">            <span class="token punctuation">{</span></span>\n<span class="line">                <span class="token property">&quot;r&quot;</span><span class="token operator">:</span> <span class="token number">255</span><span class="token punctuation">,</span></span>\n<span class="line">                <span class="token property">&quot;g&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>\n<span class="line">                <span class="token property">&quot;b&quot;</span><span class="token operator">:</span> <span class="token number">0</span></span>\n<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line">            <span class="token punctuation">{</span></span>\n<span class="line">                <span class="token property">&quot;r&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>\n<span class="line">                <span class="token property">&quot;g&quot;</span><span class="token operator">:</span> <span class="token number">255</span><span class="token punctuation">,</span></span>\n<span class="line">                <span class="token property">&quot;b&quot;</span><span class="token operator">:</span> <span class="token number">0</span></span>\n<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line">            <span class="token punctuation">{</span></span>\n<span class="line">                <span class="token property">&quot;r&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>\n<span class="line">                <span class="token property">&quot;g&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>\n<span class="line">                <span class="token property">&quot;b&quot;</span><span class="token operator">:</span> <span class="token number">255</span></span>\n<span class="line">            <span class="token punctuation">}</span></span>\n<span class="line">        <span class="token punctuation">]</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',11)),(0,t.Lk)("p",null,[(0,t.Lk)("em",null,[(0,t.bF)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,t.k6)((()=>s[7]||(s[7]=[(0,t.eW)("How to use device type specific configuration")]))),_:1})])]),s[10]||(s[10]=(0,t.Fv)('<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light"><span>Light</span></a></h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>, <code>color_hs</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li><li><code>color_hs</code>: To control the hue/saturation (color) publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;color&quot;: {&quot;hue&quot;: HUE, &quot;saturation&quot;: SATURATION}}</code> (e.g. <code>{&quot;color&quot;:{&quot;hue&quot;:360,&quot;saturation&quot;:100}}</code>). To read the hue/saturation send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;color&quot;:{&quot;hue&quot;:&quot;&quot;,&quot;saturation&quot;:&quot;&quot;}}</code>. Alternatively it is possible to set the hue/saturation via: <ul><li>HSB space (hue, saturation, brightness): <code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;b&quot;: B}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;b&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsb&quot;: &quot;H,S,B&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsb&quot;:&quot;360,100,100&quot;}}</code></li><li>HSV space (hue, saturation, value):<code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;v&quot;: V}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;v&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsv&quot;: &quot;H,S,V&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsv&quot;:&quot;360,100,100&quot;}}</code></li><li>HSL space (hue, saturation, lightness)<code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;l&quot;: L}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;l&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsl&quot;: &quot;H,S,L&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsl&quot;:&quot;360,100,100&quot;}}</code></li></ul></li></ul><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the light will not answer to other on with timed off commands. Support depends on the light firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9))])}]]),i=JSON.parse('{"path":"/devices/HG06467.html","title":"Lidl HG06467 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Lidl HG06467 control via MQTT","description":"Integrate your Lidl HG06467 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-11-26T15:32:23.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Trigger effects","slug":"trigger-effects","link":"#trigger-effects","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Light","slug":"light","link":"#light","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1727204311000},"filePathRelative":"devices/HG06467.md"}')}}]);