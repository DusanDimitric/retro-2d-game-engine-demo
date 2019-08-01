!function(t){var e={};function o(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=e,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(i,s,function(e){return t[e]}.bind(null,s));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=8)}([function(t){t.exports={CANVAS_WIDTH:480,CANVAS_HEIGHT:320,TILE_SIZE:32,SCALE:2,RAYCASTER:{DEBUG:!1}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=o(0),s=o(3),a=document.getElementById("canvas");a.width=i.CANVAS_WIDTH,a.height=i.CANVAS_HEIGHT,a.style.width=1!==i.SCALE?i.SCALE*i.CANVAS_WIDTH+"px":"auto",a.style.height=1!==i.SCALE?i.SCALE*i.CANVAS_HEIGHT+"px":"auto",e.context=a.getContext("2d");class n{static clear(){e.context.clearRect(0,0,a.width,a.height)}static update(){this.mousePosition={x:Math.floor((s.default.x-a.offsetLeft)/i.SCALE),y:Math.floor((s.default.y-a.offsetTop)/i.SCALE)}}}n.rows=Math.floor(a.height/i.TILE_SIZE),n.cols=Math.floor(a.width/i.TILE_SIZE),n.halfRows=Math.floor(a.height/2/i.TILE_SIZE),n.halfCols=Math.floor(a.width/2/i.TILE_SIZE),n.rowRemainder=a.height/2%i.TILE_SIZE,n.colRemainder=a.width/2%i.TILE_SIZE,n.center={x:i.CANVAS_WIDTH/2,y:i.CANVAS_HEIGHT/2},n.getCanvasDomElement=(()=>a),e.default=n},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=o(0),s=o(1),a=o(13),n=o(17);e.gameObjects=[];e.default=class{constructor(t,e){this.grid=t,this.player=e,this.loadMap(n)}draw(){const t=this.player.deltas.dxLeft-s.default.colRemainder,o=this.player.deltas.dyTop-s.default.rowRemainder,a=this.player.row-s.default.halfRows,n=this.player.col-s.default.halfCols;let l;for(let c=a;c<a+s.default.rows+1;++c)for(let r=n-1;r<n+s.default.cols+1;++r)e.gameObjects[c]&&e.gameObjects[c][r]&&((l=e.gameObjects[c][r]).x=(r-n)*i.TILE_SIZE-t,l.y=(c-a)*i.TILE_SIZE-o,l.draw())}loadMap(t){for(let o=0;o<t.length;++o){e.gameObjects[o]=[];for(let i=0;i<t[o].length;++i)e.gameObjects[o][i]=a.default.createGameObject(o,i,t[o][i])}}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=o(1);class s{static init(t){this.hijackRightClick(),this.trackMouseOnCanvas(),this.listenForLeftClicks(t)}static hijackRightClick(){window.addEventListener("contextmenu",t=>{t.preventDefault()},!1)}static trackMouseOnCanvas(){i.default.getCanvasDomElement().addEventListener("mousemove",t=>{this.x=t.pageX,this.y=t.pageY},!1)}static listenForLeftClicks(t){const e=i.default.getCanvasDomElement();e.addEventListener("mousedown",e=>{t.setShooting(!0)},!1),e.addEventListener("mouseup",e=>{t.setShooting(!1)},!1)}}s.x=window.innerWidth/2+100,s.y=window.innerHeight/2+50,e.default=s},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=o(9),s=o(12),a=o(2),n=o(18),l=o(1),c=o(22),r=o(3),h=o(24);class d{constructor(){i.default.load(),this.grid=new s.default,this.player=new n.default(128,64),this.map=new a.default(this.grid,this.player),c.default.init(this.player),r.default.init(this.player)}start(){window.requestAnimationFrame(()=>this.gameLoop())}gameLoop(){!1===d.paused&&(this.update(),this.render()),window.requestAnimationFrame(()=>this.gameLoop())}update(){h.default.update(this.player),l.default.update(),this.player.update()}render(){l.default.clear(),this.map.draw(),this.player.draw()}}d.paused=!1,e.default=d},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=o(10),s=o(6),a=o(11);class n{static async load(){this.SMG[0]=await a.load("./audio/smg_1.wav"),this.SMG[1]=await a.load("./audio/smg_2.wav"),this.SMG[2]=await a.load("./audio/smg_3.wav"),this.SMG[3]=await a.load("./audio/smg_4.wav"),this.SMG[4]=await a.load("./audio/smg_5.wav")}static playSMG(){const t=s.default.createBufferSource();t.buffer=this.SMG[this.SMG_INDEX];const e=s.default.createGain();e.gain.value=i.default.soundFxVolume,t.connect(e),e.connect(s.default.destination),t.start(),this.SMG_INDEX=++this.SMG_INDEX%this.SMG.length}}n.SMG=[],n.SMG_INDEX=0,e.default=n},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=new AudioContext;e.default=i},function(t,e,o){"use strict";var i;Object.defineProperty(e,"__esModule",{value:!0}),function(t){t[t.Empty=0]="Empty",t[t.BoxGray=1]="BoxGray",t[t.BoxGreen=2]="BoxGreen",t[t.BoxBlue=3]="BoxBlue"}(i||(i={})),e.isBox=function(t){return i[t].startsWith("Box")},e.default=i},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),(new(o(4).default)).start()},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=o(5);e.default=class{static async load(){await i.default.load()}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});class i{static get musicVolume(){return this._musicVolume}static set musicVolume(t){t>=0&&t<=1&&(this._musicVolume=t)}static get soundFxVolume(){return this._soundFxVolume}static set soundFxVolume(t){t>=0&&t<=1&&(this._soundFxVolume=t)}}i._musicVolume=.3,i._soundFxVolume=.15,e.default=i},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=o(6);e.load=function(t){return new Promise((e,o)=>{const s=new XMLHttpRequest;s.open("GET",t,!0),s.responseType="arraybuffer",s.onload=(()=>{i.default.decodeAudioData(s.response,t=>e(t))}),s.send()})}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=o(0);e.default=class{constructor(){this.rows=i.CANVAS_HEIGHT/i.TILE_SIZE,this.cols=i.CANVAS_WIDTH/i.TILE_SIZE}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=o(7),s=o(14);e.default=class{static createGameObject(t,e,o){return i.isBox(o)?s.default.createBox(t,e,o):null}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=o(0),s=o(15),a=o(7);e.default=class{static createBox(t,e,o){switch(o){case a.default.BoxGray:return new s.default(t,e,i.TILE_SIZE,i.TILE_SIZE,"#4B4B4B",!1);case a.default.BoxGreen:return new s.default(t,e,i.TILE_SIZE,i.TILE_SIZE,"#27531B");case a.default.BoxBlue:return new s.default(t,e,i.TILE_SIZE,i.TILE_SIZE,"#572F17");default:throw new Error("No such box!")}}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=o(0),s=o(1),a=o(16);e.default=class extends a.default{draw(){s.context.strokeStyle=this.color,s.context.lineWidth=1,s.context.beginPath(),s.context.moveTo(.5+this.x,.5+this.y),s.context.lineTo(-.5+this.x+i.TILE_SIZE,.5+this.y),s.context.lineTo(-.5+this.x+i.TILE_SIZE,-.5+this.y+i.TILE_SIZE),s.context.lineTo(.5+this.x,-.5+this.y+i.TILE_SIZE),s.context.lineTo(.5+this.x,.5+this.y),s.context.moveTo(.5+this.x,.5+this.y),s.context.lineTo(-.5+this.x+i.TILE_SIZE,-.5+this.y+i.TILE_SIZE),s.context.moveTo(-.5+this.x+i.TILE_SIZE,.5+this.y),s.context.lineTo(.5+this.x,-.5+this.y+i.TILE_SIZE),s.context.stroke()}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=o(0);e.default=class{constructor(t,e,o,s,a,n=!0){this.row=t,this.col=e,this.width=o,this.height=s,this.color=a,this.destructable=n,this.mapX=e*i.TILE_SIZE,this.mapY=t*i.TILE_SIZE}}},function(t){t.exports=[[1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0],[1,0,3,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,3,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0],[1,0,0,0,0,0,0,0,0,0,1,0,2,3,0,2,0,0,0,0,0,1,0,0],[1,0,0,0,0,0,0,0,0,0,1,0,2,2,0,2,0,0,2,2,0,1,0,0],[1,0,0,0,0,3,3,0,1,1,1,0,0,0,0,1,0,0,2,3,0,1,1,1],[1,0,0,0,3,3,3,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],[1,0,1,0,3,3,0,0,1,0,0,0,0,1,0,1,0,0,0,1,3,0,0,1],[1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,1,0,0,0,3,2,0,0,1],[1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,2,2,2,1,1,1],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,3,3,3,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,3,3,3,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0]]},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=o(0),s=o(1),a=o(19),n=o(2),l=o(20),c=o(21),r=o(5);e.default=class{constructor(t,e){this.x=t,this.y=e,this.rotation=0,this.moving={left:!1,right:!1,up:!1,down:!1},this.sightLineLength=10,this.deltas={dyTop:0,dyBottom:0,dxLeft:0,dxRight:0},this.maxSpeed=4,this.shooting=!1,this.shootingCooldown=6,this.projectiles=[],this.updateMapPosition()}update(){this.move(),this.updateTileDeltas(),this.shoot(),this.projectiles.forEach((t,e)=>{t.update(this.x,this.y),!1===t.alive&&this.projectiles.splice(e,1)})}move(){this.moving.left&&(this.x-=this.maxSpeed),this.moving.right&&(this.x+=this.maxSpeed),this.moving.up&&(this.y-=this.maxSpeed),this.moving.down&&(this.y+=this.maxSpeed),this.adjustCollisionWithGameObjects(),this.updateMapPosition()}shoot(){if(this.shooting&&this.shootingCooldown<=0){const t=s.default.mousePosition.x-s.default.center.x,e=s.default.mousePosition.y-s.default.center.y;let o=t/(Math.abs(t)+Math.abs(e)),i=e/(Math.abs(t)+Math.abs(e));const a=.1*Math.random()-.05,n=.1*Math.random()-.05;o+=a,i+=n,this.projectiles.push(new c.default(this.x,this.y,o,i)),this.shootingCooldown=6,r.default.playSMG()}else--this.shootingCooldown}setShooting(t){this.shooting=t}draw(){const t=this.calculateTheta();this.drawPlayer(t),this.drawPlayerVisionRay(t),l.default.draw(),this.drawProjectiles()}calculateTheta(){const t=Math.atan2(s.default.mousePosition.y-s.default.center.y,s.default.mousePosition.x-s.default.center.x);return s.context.fillStyle="#44FF44",s.context.fillText(`θ = ${t}`,10,56),t}drawPlayer(t){s.context.beginPath(),s.context.fillStyle="#00AA00",s.context.font="10px Monospace",s.context.fillText(`p (${this.x}, ${this.y})`,10,20),s.context.strokeStyle="#523DA5",s.context.lineWidth=2,s.context.moveTo(s.default.center.x,s.default.center.y),s.context.lineTo(s.default.center.x+this.sightLineLength*Math.cos(t),s.default.center.y+this.sightLineLength*Math.sin(t)),s.context.stroke(),s.context.beginPath(),s.context.lineWidth=1,s.context.arc(s.default.center.x,s.default.center.y,10,0,2*Math.PI),s.context.stroke()}drawPlayerVisionRay(t){const{hitPoint:e,hitObject:o}=a.default.cast(this,t);e&&(o?a.default.drawRay(e,"#FF4444"):a.default.drawRay(e))}drawProjectiles(){this.projectiles.forEach(t=>t.draw(this.x,this.y))}updateMapPosition(){this.row=Math.floor(this.y/i.TILE_SIZE),this.col=Math.floor(this.x/i.TILE_SIZE)}updateTileDeltas(){this.deltas.dyTop=this.y%i.TILE_SIZE,this.deltas.dyBottom=i.TILE_SIZE-this.deltas.dyTop,this.deltas.dxLeft=this.x%i.TILE_SIZE,this.deltas.dxRight=i.TILE_SIZE-this.deltas.dxLeft}adjustCollisionWithGameObjects(){let t;n.gameObjects[this.row]&&((t=n.gameObjects[this.row][this.col-1])&&this.x<=t.mapX+t.width&&(this.x=t.mapX+t.width+1),(t=n.gameObjects[this.row][this.col+1])&&this.x>=t.mapX&&(this.x=t.mapX-1)),n.gameObjects[this.row-1]&&((t=n.gameObjects[this.row-1][this.col])&&this.y<=t.mapY+t.height&&(this.y=t.mapY+t.height+1),(t=n.gameObjects[this.row-1][this.col+1])&&this.y<=t.mapY+t.height&&this.x>=t.mapX&&(this.y=t.mapY+t.height+1),(t=n.gameObjects[this.row-1][this.col-1])&&this.y<=t.mapY+t.height&&this.x<=t.mapX+t.width&&(this.y=t.mapY+t.height+1)),n.gameObjects[this.row+1]&&((t=n.gameObjects[this.row+1][this.col])&&this.y>=t.mapY&&(this.y=t.mapY-1),(t=n.gameObjects[this.row+1][this.col+1])&&this.x>=t.mapX&&this.y>=t.mapY&&(this.y=t.mapY-1),(t=n.gameObjects[this.row+1][this.col-1])&&this.x<=t.mapX+t.width&&this.y>=t.mapY&&(this.y=t.mapY-1))}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=o(0),s=o(2),a=o(1);class n{static cast(t,e){if(!(e>=0)){t.deltas.dyTop;const o=t.deltas.dyTop/Math.tan(-e),i=1/o>0;return o>=0&&i?n.getInterceptPointNE(t,e):n.getInterceptPointNW(t,e)}{t.deltas.dyBottom;const o=t.deltas.dyBottom/Math.tan(e);if(o>=0)return n.getInterceptPointSE(t,e);if(o<0)return n.getInterceptPointSW(t,e)}}static drawRay(t,e="#4444FF"){a.context.strokeStyle=e,a.context.lineWidth=.5,a.context.beginPath(),a.context.moveTo(a.default.center.x,a.default.center.y),a.context.lineTo(a.default.center.x+t.x,a.default.center.y+t.y),a.context.stroke(),a.context.lineWidth=1}static getInterceptPointSE(t,e){let o,s,l=null,c=null,r=0;for(;s=r*i.TILE_SIZE,o=0===e?0:(t.deltas.dxRight+s)*Math.tan(e),!(s+t.deltas.dxRight>a.default.center.x||o>a.default.center.y);){if(i.RAYCASTER.DEBUG&&(a.context.beginPath(),a.context.arc(a.default.center.x+t.deltas.dxRight+s,a.default.center.y+o,2,0,2*Math.PI),a.context.stroke()),c=n.checkGameObjectCollisionVerticalSE(r,t,o)){l={x:s+t.deltas.dxRight,y:o};break}++r}let h,d,u=null,f=null,x=0;for(;!(d=x*i.TILE_SIZE,0===e||(h=(t.deltas.dyBottom+d)/Math.tan(e),d+t.deltas.dyBottom>a.default.center.y||h>a.default.center.x)||(i.RAYCASTER.DEBUG&&(a.context.strokeStyle="#44FF44",a.context.beginPath(),a.context.arc(a.default.center.x+h,a.default.center.y+t.deltas.dyBottom+d,2,0,2*Math.PI),a.context.stroke()),o<d));){if(f=n.checkGameObjectCollisionHorizontalSE(x,t,h)){u={x:h,y:d+t.deltas.dyBottom};break}++x}if(l&&null===u)return{hitPoint:l,hitObject:c};if(u&&null===l)return{hitPoint:u,hitObject:f};if(u&&l){return Math.sqrt(Math.pow(l.x,2)+Math.pow(l.y,2))>Math.sqrt(Math.pow(u.x,2)+Math.pow(u.y,2))?{hitPoint:u,hitObject:f}:{hitPoint:l,hitObject:c}}if(null===u&&null===l){const e={x:h,y:d+t.deltas.dyBottom},i={x:s+t.deltas.dxRight,y:o};return Math.sqrt(Math.pow(i.x,2)+Math.pow(i.y,2))>Math.sqrt(Math.pow(e.x,2)+Math.pow(e.y,2))?{hitPoint:e,hitObject:f}:{hitPoint:i,hitObject:c}}}static getInterceptPointNE(t,e){let o,s,l=null,c=null,r=0;for(;s=r*i.TILE_SIZE,o=0===e?0:(t.deltas.dxRight+s)*Math.tan(-e),!(s+t.deltas.dxRight>a.default.center.x||o>a.default.center.y);){if(i.RAYCASTER.DEBUG&&(a.context.beginPath(),a.context.arc(a.default.center.x+s+t.deltas.dxRight,a.default.center.y-o,2,0,2*Math.PI),a.context.stroke()),c=n.checkGameObjectCollisionVerticalNE(r,t,o)){l={x:s+t.deltas.dxRight,y:-o};break}++r}let h,d,u=null,f=null,x=0;for(;!(d=x*i.TILE_SIZE,0===e||(h=(t.deltas.dyTop+d)/Math.tan(-e),d+t.deltas.dyTop>a.default.center.y||h>a.default.center.x)||(i.RAYCASTER.DEBUG&&(a.context.strokeStyle="#44FF44",a.context.beginPath(),a.context.arc(a.default.center.x+h,a.default.center.y-d-t.deltas.dyTop,2,0,2*Math.PI),a.context.stroke()),o<d));){if(f=n.checkGameObjectCollisionHorizontalNE(x,t,h)){u={x:h,y:-d-t.deltas.dyTop};break}++x}if(l&&null===u)return{hitPoint:l,hitObject:c};if(u&&null===l)return{hitPoint:u,hitObject:f};if(u&&l){return Math.sqrt(Math.pow(l.x,2)+Math.pow(l.y,2))>Math.sqrt(Math.pow(u.x,2)+Math.pow(u.y,2))?{hitPoint:u,hitObject:f}:{hitPoint:l,hitObject:c}}if(null===u&&null===l){const e={x:h,y:-d-t.deltas.dyTop},i={x:s+t.deltas.dxRight,y:-o};return Math.sqrt(Math.pow(i.x,2)+Math.pow(i.y,2))>Math.sqrt(Math.pow(e.x,2)+Math.pow(e.y,2))?{hitPoint:e,hitObject:f}:{hitPoint:i,hitObject:c}}}static getInterceptPointNW(t,e){let o,s,l=null,c=null,r=0;for(;s=r*i.TILE_SIZE,o=0===e?0:(t.deltas.dxLeft+s)*Math.tan(Math.PI- -e),!(s+t.deltas.dxLeft>a.default.center.x||o>a.default.center.y);){if(i.RAYCASTER.DEBUG&&(a.context.beginPath(),a.context.arc(a.default.center.x-s-t.deltas.dxLeft,a.default.center.y-o,2,0,2*Math.PI),a.context.stroke()),c=n.checkGameObjectCollisionVerticalNW(r,t,o)){l={x:-s-t.deltas.dxLeft,y:-o};break}++r}let h,d,u=null,f=null,x=0;for(;!(d=x*i.TILE_SIZE,0===e||(h=(t.deltas.dyTop+d)/Math.tan(Math.PI- -e),d+t.deltas.dyTop>a.default.center.y||h>a.default.center.x)||(i.RAYCASTER.DEBUG&&(a.context.strokeStyle="#44FF44",a.context.beginPath(),a.context.arc(a.default.center.x-h,a.default.center.y-d-t.deltas.dyTop,2,0,2*Math.PI),a.context.stroke()),o<d));){if(f=n.checkGameObjectCollisionHorizontalNW(x,t,h)){u={x:-h,y:-d-t.deltas.dyTop};break}++x}if(l&&null===u)return{hitPoint:l,hitObject:c};if(u&&null===l)return{hitPoint:u,hitObject:f};if(u&&l){return Math.sqrt(Math.pow(l.x,2)+Math.pow(l.y,2))>Math.sqrt(Math.pow(u.x,2)+Math.pow(u.y,2))?{hitPoint:u,hitObject:f}:{hitPoint:l,hitObject:c}}if(null===u&&null===l){const e={x:-h,y:-d-t.deltas.dyTop},i={x:-s-t.deltas.dxLeft,y:-o};return Math.sqrt(Math.pow(i.x,2)+Math.pow(i.y,2))>Math.sqrt(Math.pow(e.x,2)+Math.pow(e.y,2))?{hitPoint:e,hitObject:f}:{hitPoint:i,hitObject:c}}}static getInterceptPointSW(t,e){let o,s,l=null,c=null,r=0;for(;s=r*i.TILE_SIZE,o=0===e?0:(t.deltas.dxLeft+s)*Math.tan(Math.PI-e),!(s+t.deltas.dxLeft>a.default.center.x||o>a.default.center.y);){if(i.RAYCASTER.DEBUG&&(a.context.beginPath(),a.context.arc(a.default.center.x-t.deltas.dxLeft-s,a.default.center.y+o,2,0,2*Math.PI),a.context.stroke()),c=n.checkGameObjectCollisionVerticalSW(r,t,o)){l={x:-s-t.deltas.dxLeft,y:o};break}++r}let h,d,u=null,f=null,x=0;for(;!(d=x*i.TILE_SIZE,0===e||(h=(t.deltas.dyBottom+d)/Math.tan(e),d+t.deltas.dyBottom>a.default.center.y||-h>a.default.center.x)||(i.RAYCASTER.DEBUG&&(a.context.strokeStyle="#44FF44",a.context.beginPath(),a.context.arc(a.default.center.x+h,a.default.center.y+t.deltas.dyBottom+d,2,0,2*Math.PI),a.context.stroke()),o<d));){if(f=n.checkGameObjectCollisionHorizontalSW(x,t,h)){u={x:h,y:d+t.deltas.dyBottom};break}++x}if(l&&null===u)return{hitPoint:l,hitObject:c};if(u&&null===l)return{hitPoint:u,hitObject:f};if(u&&l){return Math.sqrt(Math.pow(l.x,2)+Math.pow(l.y,2))>Math.sqrt(Math.pow(u.x,2)+Math.pow(u.y,2))?{hitPoint:u,hitObject:f}:{hitPoint:l,hitObject:c}}if(null===u&&null===l){const e={x:h,y:d+t.deltas.dyBottom},i={x:-s-t.deltas.dxLeft,y:o};return Math.sqrt(Math.pow(i.x,2)+Math.pow(i.y,2))>Math.sqrt(Math.pow(e.x,2)+Math.pow(e.y,2))?{hitPoint:e,hitObject:f}:{hitPoint:i,hitObject:c}}}static checkGameObjectCollisionVerticalSE(t,e,o){const n=1+e.col+t,l=e.row+Math.floor((e.deltas.dyTop+o)/i.TILE_SIZE);let c=null;return s.gameObjects[l]&&s.gameObjects[l][n]&&(c=s.gameObjects[l][n]),i.RAYCASTER.DEBUG&&a.context.fillText(`col: ${n}, row: ${l}, hit: ${c?[c.row,c.col]:null}`,10,112+12*t),c}static checkGameObjectCollisionHorizontalSE(t,e,o){const n=e.col+Math.floor((e.deltas.dxLeft+o)/i.TILE_SIZE),l=e.row+t+1;let c=null;return s.gameObjects[l]&&s.gameObjects[l][n]&&(c=s.gameObjects[l][n]),i.RAYCASTER.DEBUG&&a.context.fillText(`col: ${n}, row: ${l}, hit: ${c?[c.row,c.col]:null}`,10,212+12*t),c}static checkGameObjectCollisionVerticalNE(t,e,o){const n=1+e.col+t,l=e.row+Math.floor((e.deltas.dyTop-o)/i.TILE_SIZE);let c=null;return s.gameObjects[l]&&s.gameObjects[l][n]&&(c=s.gameObjects[l][n]),i.RAYCASTER.DEBUG&&a.context.fillText(`col: ${n}, row: ${l}, hit: ${c?[c.row,c.col]:null}`,10,112+12*t),c}static checkGameObjectCollisionHorizontalNE(t,e,o){const n=e.col+Math.floor((e.deltas.dxLeft+o)/i.TILE_SIZE),l=e.row-t-1;let c=null;return s.gameObjects[l]&&s.gameObjects[l][n]&&(c=s.gameObjects[l][n]),i.RAYCASTER.DEBUG&&a.context.fillText(`col: ${n}, row: ${l}, hit: ${c?[c.row,c.col]:null}`,10,212+12*t),c}static checkGameObjectCollisionVerticalNW(t,e,o){const n=-1+e.col-t,l=e.row+Math.floor((e.deltas.dyTop-o)/i.TILE_SIZE);let c=null;return s.gameObjects[l]&&s.gameObjects[l][n]&&(c=s.gameObjects[l][n]),i.RAYCASTER.DEBUG&&a.context.fillText(`col: ${n}, row: ${l}, hit: ${c?[c.row,c.col]:null}`,10,112+12*t),c}static checkGameObjectCollisionHorizontalNW(t,e,o){const n=e.col-Math.floor((e.deltas.dxRight+o)/i.TILE_SIZE),l=e.row-t-1;let c=null;return s.gameObjects[l]&&s.gameObjects[l][n]&&(c=s.gameObjects[l][n]),i.RAYCASTER.DEBUG&&a.context.fillText(`col: ${n}, row: ${l}, hit: ${c?[c.row,c.col]:null}`,10,212+12*t),c}static checkGameObjectCollisionVerticalSW(t,e,o){const n=e.col-t-1,l=e.row+Math.floor((e.deltas.dyTop+o)/i.TILE_SIZE);let c=null;return s.gameObjects[l]&&s.gameObjects[l][n]&&(c=s.gameObjects[l][n]),i.RAYCASTER.DEBUG&&a.context.fillText(`col: ${n}, row: ${l}, hit: ${c?[c.row,c.col]:null}`,10,112+12*t),c}static checkGameObjectCollisionHorizontalSW(t,e,o){const n=e.col-Math.floor((e.deltas.dxRight-o)/i.TILE_SIZE),l=e.row+t+1;let c=null;return s.gameObjects[l]&&s.gameObjects[l][n]&&(c=s.gameObjects[l][n]),i.RAYCASTER.DEBUG&&a.context.fillText(`col: ${n}, row: ${l}, hit: ${c?[c.row,c.col]:null}`,10,212+12*t),c}}e.default=n},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=o(1);e.default=class{static draw(){const t=i.default.mousePosition.x,e=i.default.mousePosition.y;let o,s;i.context.strokeStyle="#FFFFFF",i.context.lineWidth=.5,i.context.beginPath(),o=.5,s=-1.5,i.context.moveTo(t+o,e+s),s=-3.5,i.context.lineTo(t+o,e+s),s=2.5,i.context.moveTo(t+o,e+s),s=4.5,i.context.lineTo(t+o,e+s),s=.5,o=-3.5,i.context.moveTo(t+o,e+s),o=-1.5,i.context.lineTo(t+o,e+s),o=2.5,i.context.moveTo(t+o,e+s),o=4.5,i.context.lineTo(t+o,e+s),i.context.stroke()}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=o(0),s=o(1),a=o(2);e.default=class{constructor(t,e,o,i){this.x=t,this.y=e,this.directionX=o,this.directionY=i,this.speed=24,this.alive=!0,this.numberOfIntermediatePositions=3,this.intermediatePositions=[];for(let t=0;t<this.numberOfIntermediatePositions;++t)this.intermediatePositions[t]={x:null,y:null,row:null,col:null}}update(t,e){this.previousX=this.x,this.previousY=this.y,this.x+=this.directionX*this.speed,this.y+=this.directionY*this.speed,this.row=Math.floor(this.y/i.TILE_SIZE),this.col=Math.floor(this.x/i.TILE_SIZE),this.calculateIntermediatePoints(),this.isOffScreen(t,e)&&(this.alive=!1),this.intermediatePositions.forEach(t=>{this.alive&&this.checkCollisionWithGameObject(t)}),this.alive&&this.checkCollisionWithGameObject()}draw(t,e){this.x===t&&this.y===e||(s.context.strokeStyle="#8AFCFF",s.context.lineWidth=1,s.context.beginPath(),s.context.arc(this.x+s.default.center.x-t,this.y+s.default.center.y-e,2,0,2*Math.PI),s.context.stroke())}calculateIntermediatePoints(){const t=(this.x-this.previousX)/(this.numberOfIntermediatePositions+1),e=(this.y-this.previousY)/(this.numberOfIntermediatePositions+1);for(let o=this.numberOfIntermediatePositions-1;o>=0;--o)this.intermediatePositions[o].x=this.x-t*(o+1),this.intermediatePositions[o].y=this.y-e*(o+1),this.intermediatePositions[o].row=Math.floor(this.intermediatePositions[o].y/i.TILE_SIZE),this.intermediatePositions[o].col=Math.floor(this.intermediatePositions[o].x/i.TILE_SIZE)}isOffScreen(t,e){return this.x<t-s.default.center.x||this.x>t+s.default.center.x||this.y<e-s.default.center.y||this.y>e+s.default.center.y}checkCollisionWithGameObject(t){t||(t=this);const e=a.gameObjects[t.row][t.col];e&&(this.alive=!1,e.destructable&&(a.gameObjects[t.row][t.col]=null))}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=o(4),s=o(23);e.default=class{static init(t){document.addEventListener("keydown",e=>{switch(e.keyCode){case s.KEYBOARD_KEYS.w:t.moving.up=!0;break;case s.KEYBOARD_KEYS.a:t.moving.left=!0;break;case s.KEYBOARD_KEYS.s:t.moving.down=!0;break;case s.KEYBOARD_KEYS.d:t.moving.right=!0;break;case s.KEYBOARD_KEYS.p:i.default.paused=!i.default.paused}}),document.addEventListener("keyup",e=>{switch(e.keyCode){case s.KEYBOARD_KEYS.w:t.moving.up=!1;break;case s.KEYBOARD_KEYS.a:t.moving.left=!1;break;case s.KEYBOARD_KEYS.s:t.moving.down=!1;break;case s.KEYBOARD_KEYS.d:t.moving.right=!1}})}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.KEYBOARD_KEYS={w:87,a:65,s:83,d:68,p:80}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=o(3);class s{static update(t){const e=navigator.getGamepads();e[0]&&(this.handleMovement(e[0],t),this.handleAiming(e[0]),this.handleButtons(e[0],t))}static handleMovement(t,e){const o=+t.axes[0].toFixed(2);o>0?e.moving.right=!0:o<0?e.moving.left=!0:(e.moving.left=!1,e.moving.right=!1);const i=+t.axes[1].toFixed(2);i>0?e.moving.down=!0:i<0?e.moving.up=!0:(e.moving.up=!1,e.moving.down=!1)}static handleAiming(t){const e=t.axes[2],o=t.axes[3];0!=+e.toFixed(2)&&(i.default.x+=e*this.aimModifier),0!=+o.toFixed(2)&&(i.default.y+=o*this.aimModifier)}static handleButtons(t,e){t.buttons[5].pressed?e.setShooting(!0):e.setShooting(!1)}}s.aimModifier=10,e.default=s}]);
//# sourceMappingURL=app.js.map