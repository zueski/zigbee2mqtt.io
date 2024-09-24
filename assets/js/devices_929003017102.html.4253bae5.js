"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[95966],{1215:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>s,data:()=>a});var n=i(23785);const o={},s=(0,i(86670).A)(o,[["render",function(e,t){const i=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[t[8]||(t[8]=(0,n.Lk)("h1",{id:"philips-929003017102",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#philips-929003017102"},[(0,n.Lk)("span",null,"Philips 929003017102")])],-1)),(0,n.Lk)("table",null,[t[6]||(t[6]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[t[2]||(t[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"929003017102")],-1)),(0,n.Lk)("tr",null,[t[1]||(t[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(i,{to:"/supported-devices/#v=Philips"},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("Philips")]))),_:1})])]),t[3]||(t[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"Hue wall switch module")],-1)),t[4]||(t[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"battery, action, device_mode, linkquality")],-1)),t[5]||(t[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/929003017102.png",alt:"Philips 929003017102"})])],-1))])]),t[9]||(t[9]=(0,n.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Press the reset button for ten seconds to reset the device - the red LED flashes one time confirming the reset. Then short the pins of input one.<br> The red LED begins to flash every two seconds indicating pairing mode. Out of the box, the device enters pairing mode, as soon as the pins of input 1 are shortened - the red LED starts to flash. If the device has not been paired yet, it can also be put into pairing mode by short pressing the reset button.</p><h3 id="directly-control-zigbee-groups" tabindex="-1"><a class="header-anchor" href="#directly-control-zigbee-groups"><span>Directly control Zigbee groups</span></a></h3><p>It&#39;s possible to configure this switch to directly control Zigbee groups. In this way, the switch can control e.g. a group of light bulbs even when Zigbee2MQTT is not running, and it can also make controlling the lights feel a bit more responsive. This switch can also act as a dimmer: for each successive long press of the switch, it will alternate between increasing and decreasing brightness. To set this all up, follow these steps in the Zigbee2MQTT frontend:</p><ol><li>Go to the <em>Groups</em> tab and create a new group if it does not already exist. Add devices to the groups that you want to be controlled by this switch.</li><li>Add this Hue Wall Switch Module to the group. Note that this device might not show up in the group, but this step is important.</li><li>Click on this device and go to the <em>Bind</em> tab. Modify the checkboxes so that only <code>manuSpecificPhilips</code>, <code>OnOff</code>, and <code>LevelCtrl</code> (optional ¹) are checked, and click <em>Unbind</em> in the row where the destination is <code>Coordinator</code>.</li><li>In the blank row at the bottom select endpoint 1 as the source endpoint, the group as the destination, tick <code>OnOff</code> and <code>LevelCtrl</code> (optional ¹), and click bind.</li></ol><p>Notes:</p><ul><li>¹ If you don&#39;t want to use the brightness control capabilities of the switch, ignore <code>LevelCtrl</code> in the steps.</li><li>The device needs to be awake to respond to changes, so you will need to trigger the switch to wake it up before assigning it to the group or changing the bindings.</li><li>This device does not support direct binding (to a device instead of a group).</li><li>After doing this, the power events are still sent and can hence be used for automation.</li><li>Pressing the yellow reconfigure button in the <em>About</em> tab will reset the bindings of the coordinator, but it will not unbind any groups - they have to be unbound explicitly.</li><li>Actions are only sent for input 1 of the device. For input 2 no actions will be sent (so a double rocker is <strong>not</strong> supported).</li></ul><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',9)),(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>t[7]||(t[7]=[(0,n.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,n.Fv)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>left_press</code>, <code>left_press_release</code>, <code>right_press</code>, <code>right_press_release</code>, <code>left_hold</code>, <code>left_hold_release</code>, <code>right_hold</code>, <code>right_hold_release</code>, <code>toggle</code>.</p><h3 id="device-mode-enum" tabindex="-1"><a class="header-anchor" href="#device-mode-enum"><span>Device mode (enum)</span></a></h3><p>Value can be found in the published state on the <code>device_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;device_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;device_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>single_rocker</code>, <code>single_push_button</code>, <code>dual_rocker</code>, <code>dual_push_button</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11))])}]]),a=JSON.parse('{"path":"/devices/929003017102.html","title":"Philips 929003017102 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Philips 929003017102 control via MQTT","description":"Integrate your Philips 929003017102 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-03-30T20:29:35.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Directly control Zigbee groups","slug":"directly-control-zigbee-groups","link":"#directly-control-zigbee-groups","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Device mode (enum)","slug":"device-mode-enum","link":"#device-mode-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1727204311000},"filePathRelative":"devices/929003017102.md"}')}}]);