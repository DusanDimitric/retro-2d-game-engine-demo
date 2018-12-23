!function(t){var e={};function s(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(i,o,function(e){return t[e]}.bind(null,o));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=6)}([function(t){t.exports={CANVAS_WIDTH:480,CANVAS_HEIGHT:320,TILE_SIZE:32,SCALE:2}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=s(0),o=s(3),a=document.getElementById("canvas");a.width=i.CANVAS_WIDTH,a.height=i.CANVAS_HEIGHT,a.style.width=1!==i.SCALE?i.SCALE*i.CANVAS_WIDTH+"px":"auto",a.style.height=1!==i.SCALE?i.SCALE*i.CANVAS_HEIGHT+"px":"auto";const n=a.getContext("2d");class l{static clear(){n.clearRect(0,0,a.width,a.height)}static drawBox(t){n.strokeStyle=t.color,n.lineWidth=1,n.beginPath(),n.moveTo(.5+t.x,.5+t.y),n.lineTo(-.5+t.x+i.TILE_SIZE,.5+t.y),n.lineTo(-.5+t.x+i.TILE_SIZE,-.5+t.y+i.TILE_SIZE),n.lineTo(.5+t.x,-.5+t.y+i.TILE_SIZE),n.lineTo(.5+t.x,.5+t.y),n.moveTo(.5+t.x,.5+t.y),n.lineTo(-.5+t.x+i.TILE_SIZE,-.5+t.y+i.TILE_SIZE),n.moveTo(-.5+t.x+i.TILE_SIZE,.5+t.y),n.lineTo(.5+t.x,-.5+t.y+i.TILE_SIZE),n.stroke()}static drawPlayer(t){n.beginPath(),n.fillStyle="#00AA00",n.font="10px Monospace",n.fillText(`p (${t.x}, ${t.y})`,10,20);const e=o.default.x-a.offsetLeft,s=o.default.y-a.offsetTop;n.fillText(`m (${e}, ${s})`,10,32);const i=e-this.center.x,l=s-this.center.y;n.fillText(`d (${i}, ${l})`,10,44);const r=Math.atan2(l,i);n.fillText(`θ = ${r}`,10,56),n.strokeStyle="#523DA5",n.lineWidth=2,n.moveTo(this.center.x,this.center.y),n.lineTo(this.center.x+t.sightLineLength*Math.cos(r),this.center.y+t.sightLineLength*Math.sin(r)),n.stroke()}static drawCrosshair(){const t=o.default.x-a.offsetLeft,e=o.default.y-a.offsetTop;let s,i;n.strokeStyle="#FFFFFF",n.lineWidth=.5,n.beginPath(),s=.5,i=-1.5,n.moveTo(t+s,e+i),i=-3.5,n.lineTo(t+s,e+i),i=2.5,n.moveTo(t+s,e+i),i=4.5,n.lineTo(t+s,e+i),i=.5,s=-3.5,n.moveTo(t+s,e+i),s=-1.5,n.lineTo(t+s,e+i),s=2.5,n.moveTo(t+s,e+i),s=4.5,n.lineTo(t+s,e+i),n.stroke()}static drawPlayerVisionRay(t){const e=l.getCanvasMouseX(),s=l.getCanvasMouseY();n.strokeStyle="#FF4444",n.lineWidth=.1,n.beginPath(),n.moveTo(this.center.x,this.center.y),n.lineTo(e,s),n.stroke()}static drawProjectiles(t,e,s){n.fillStyle="#FFFFFF",n.lineWidth=1,t.forEach(t=>{n.beginPath(),n.arc(t.x+this.center.x-e,t.y+this.center.y-s,2,0,2*Math.PI),n.stroke()})}}l.rows=Math.floor(a.height/i.TILE_SIZE),l.cols=Math.floor(a.width/i.TILE_SIZE),l.halfRows=Math.floor(a.height/2/i.TILE_SIZE),l.halfCols=Math.floor(a.width/2/i.TILE_SIZE),l.rowRemainder=a.height/2%i.TILE_SIZE,l.colRemainder=a.width/2%i.TILE_SIZE,l.center={x:i.CANVAS_WIDTH/2,y:i.CANVAS_HEIGHT/2},l.getCanvasDomElement=(()=>a),l.getCanvasMouseX=(()=>o.default.x-a.offsetLeft+.5),l.getCanvasMouseY=(()=>o.default.y-a.offsetTop+.5),e.default=l},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=s(0),o=s(1),a=s(10),n=s(13);e.gameObjects=[];e.default=class{constructor(t,e){this.grid=t,this.player=e,this.loadMap(n)}draw(){let t=this.player.x%i.TILE_SIZE-o.default.colRemainder,s=this.player.y%i.TILE_SIZE-o.default.rowRemainder;this.player.col<0&&(t===-o.default.colRemainder&&(t=-(i.TILE_SIZE+o.default.colRemainder)),t+=i.TILE_SIZE),this.player.row<0&&(1/s==-1/0&&(s=-i.TILE_SIZE),s+=i.TILE_SIZE);const a=this.player.row-o.default.halfRows,n=this.player.col-o.default.halfCols;let l;for(let r=a;r<a+o.default.rows+1;++r)for(let c=n;c<n+o.default.cols+1;++c)e.gameObjects[r]&&e.gameObjects[r][c]&&((l=e.gameObjects[r][c]).x=(c-n)*i.TILE_SIZE-t,l.y=(r-a)*i.TILE_SIZE-s,l.draw())}loadMap(t){for(let s=0;s<t.length;++s){e.gameObjects[s]=[];for(let i=0;i<t[s].length;++i)switch(t[s][i]){case 1:e.gameObjects[s][i]=a.default.createBox("#572F17",s,i);break;case 2:e.gameObjects[s][i]=a.default.createBox("#403550",s,i);break;case 3:e.gameObjects[s][i]=a.default.createBox("#27531B",s,i);break;default:e.gameObjects[s][i]=null}}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=s(1);class o{static init(t){this.hijackRightClick(),this.trackMouseOnCanvas(),this.listenForLeftClicks(t)}static hijackRightClick(){window.addEventListener("contextmenu",t=>{t.preventDefault()},!1)}static trackMouseOnCanvas(){i.default.getCanvasDomElement().addEventListener("mousemove",t=>{this.x=t.pageX,this.y=t.pageY},!1)}static listenForLeftClicks(t){const e=i.default.getCanvasDomElement();e.addEventListener("mousedown",e=>{t.setShooting(!0)},!1),e.addEventListener("mouseup",e=>{t.setShooting(!1)},!1)}}o.x=0,o.y=0,e.default=o},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=s(16),o=s(5),a=s(17);class n{static async load(){this.SMG[0]=await a.load("./audio/smg_1.wav"),this.SMG[1]=await a.load("./audio/smg_2.wav"),this.SMG[2]=await a.load("./audio/smg_3.wav"),this.SMG[3]=await a.load("./audio/smg_4.wav"),this.SMG[4]=await a.load("./audio/smg_5.wav")}static playSMG(){const t=o.default.createBufferSource();t.buffer=this.SMG[this.SMG_INDEX];const e=o.default.createGain();e.gain.value=i.default.soundFxVolume,t.connect(e),e.connect(o.default.destination),t.start(),this.SMG_INDEX=++this.SMG_INDEX%this.SMG.length}}n.SMG=[],n.SMG_INDEX=0,e.default=n},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=new AudioContext;e.default=i},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),(new(s(7).default)).start()},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=s(1),o=s(3),a=s(8),n=s(9),l=s(2),r=s(14);s(18).default.load();const c=new n.default,h=new r.default(128,64),u=new l.default(c,h);a.default.init(h),o.default.init(h);e.default=class{start(){window.requestAnimationFrame(()=>this.gameLoop())}gameLoop(){this.update(),this.render(),window.requestAnimationFrame(()=>this.gameLoop())}update(){h.update()}render(){i.default.clear(),u.draw(),h.draw()}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=class{static init(t){document.addEventListener("keydown",e=>{switch(e.keyCode){case 87:t.moving.up=!0;break;case 65:t.moving.left=!0;break;case 83:t.moving.down=!0;break;case 68:t.moving.right=!0}}),document.addEventListener("keyup",e=>{switch(e.keyCode){case 87:t.moving.up=!1;break;case 65:t.moving.left=!1;break;case 83:t.moving.down=!1;break;case 68:t.moving.right=!1}})}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=s(0);e.default=class{constructor(){this.rows=i.CANVAS_HEIGHT/i.TILE_SIZE,this.cols=i.CANVAS_WIDTH/i.TILE_SIZE}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=s(0),o=s(11);e.default=class{static createBox(t,e,s){return new o.default(t,e,s,i.TILE_SIZE,i.TILE_SIZE)}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=s(1),o=s(12);e.default=class extends o.default{draw(){i.default.drawBox(this)}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=s(0);e.default=class{constructor(t,e,s,o,a){this.color=t,this.row=e,this.col=s,this.width=o,this.height=a,this.mapX=s*i.TILE_SIZE,this.mapY=e*i.TILE_SIZE}}},function(t){t.exports=[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],[1,0,3,0,0,0,0,0,0,0,1,0,2,3,0,1],[1,0,0,3,0,0,0,0,0,0,1,0,2,2,0,1],[2,0,0,0,0,0,0,0,0,0,1,0,0,0,0,3],[2,0,0,0,0,0,0,0,0,0,1,0,0,0,0,3],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,2,2,0,0,0,0,0,0,0,1],[1,0,1,0,0,0,2,2,0,0,0,0,0,1,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=s(0),o=s(1),a=s(15),n=s(2),l=s(4);e.default=class{constructor(t,e){this.x=t,this.y=e,this.rotation=0,this.maxSpeed=4,this.moving={left:!1,right:!1,up:!1,down:!1},this.sightLineLength=10,this.shooting=!1,this.shootingCooldown=6,this.projectiles=[],this.updateMapPosition()}update(){this.move(),this.shoot(),this.projectiles.forEach((t,e)=>{t.update(this.x,this.y),!1===t.alive&&this.projectiles.splice(e,1)})}move(){this.moving.left&&(this.x-=this.maxSpeed),this.moving.right&&(this.x+=this.maxSpeed),this.moving.up&&(this.y-=this.maxSpeed),this.moving.down&&(this.y+=this.maxSpeed),this.adjustCollisionWithGameObjects(),this.updateMapPosition()}adjustCollisionWithGameObjects(){let t;n.gameObjects[this.row]&&((t=n.gameObjects[this.row][this.col-1])&&this.x<=t.mapX+t.width&&(this.x=t.mapX+t.width+1),(t=n.gameObjects[this.row][this.col+1])&&this.x>=t.mapX&&(this.x=t.mapX-1)),n.gameObjects[this.row-1]&&((t=n.gameObjects[this.row-1][this.col])&&this.y<=t.mapY+t.height&&(this.y=t.mapY+t.height+1),(t=n.gameObjects[this.row-1][this.col+1])&&this.y<=t.mapY+t.height&&this.x>=t.mapX&&(this.y=t.mapY+t.height+1),(t=n.gameObjects[this.row-1][this.col-1])&&this.y<=t.mapY+t.height&&this.x<=t.mapX+t.width&&(this.y=t.mapY+t.height+1)),n.gameObjects[this.row+1]&&((t=n.gameObjects[this.row+1][this.col])&&this.y>=t.mapY&&(this.y=t.mapY-1),(t=n.gameObjects[this.row+1][this.col+1])&&this.x>=t.mapX&&this.y>=t.mapY&&(this.y=t.mapY-1),(t=n.gameObjects[this.row+1][this.col-1])&&this.x<=t.mapX+t.width&&this.y>=t.mapY&&(this.y=t.mapY-1))}updateMapPosition(){this.row=Math.floor(this.y/i.TILE_SIZE),this.col=Math.floor(this.x/i.TILE_SIZE)}shoot(){if(this.shooting&&this.shootingCooldown<=0){const t=o.default.getCanvasMouseX(),e=o.default.getCanvasMouseY(),s=t-o.default.center.x,i=e-o.default.center.y;let n=s/(Math.abs(s)+Math.abs(i)),r=i/(Math.abs(s)+Math.abs(i));const c=.1*Math.random()-.05,h=.1*Math.random()-.05;n+=c,r+=h,this.projectiles.push(new a.default(this.x,this.y,n,r)),this.shootingCooldown=6,l.default.playSMG()}else--this.shootingCooldown}draw(){o.default.drawPlayer(this),o.default.drawPlayerVisionRay(this),o.default.drawCrosshair(),o.default.drawProjectiles(this.projectiles,this.x,this.y)}setShooting(t){this.shooting=t}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=s(1),o=s(2);e.default=class{constructor(t,e,s,i){this.x=t,this.y=e,this.directionX=s,this.directionY=i,this.speed=24,this.alive=!0}update(t,e){let s;this.x+=this.directionX*this.speed,this.y+=this.directionY*this.speed,(this.x<t-i.default.center.x||this.x>t+i.default.center.x||this.y<e-i.default.center.y||this.y>e+i.default.center.y)&&(this.alive=!1);for(let t=0;t<o.gameObjects.length;++t)for(let e=0;e<o.gameObjects[t].length;++e)(s=o.gameObjects[t][e])&&this.x>=s.mapX&&this.x<=s.mapX+s.width&&this.y>=s.mapY&&this.y<=s.mapY+s.height&&(this.alive=!1,o.gameObjects[t][e]=null)}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});class i{static get musicVolume(){return this._musicVolume}static set musicVolume(t){t>=0&&t<=1&&(this._musicVolume=t)}static get soundFxVolume(){return this._soundFxVolume}static set soundFxVolume(t){t>=0&&t<=1&&(this._soundFxVolume=t)}}i._musicVolume=.3,i._soundFxVolume=.3,e.default=i},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=s(5);e.load=function(t){return new Promise((e,s)=>{const o=new XMLHttpRequest;o.open("GET",t,!0),o.responseType="arraybuffer",o.onload=(()=>{i.default.decodeAudioData(o.response,t=>e(t))}),o.send()})}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=s(4);e.default=class{static async load(){await i.default.load()}}}]);
//# sourceMappingURL=app.js.map