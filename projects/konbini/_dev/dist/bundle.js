(()=>{var Ml="186";var pd=0,yh=1,md=2;var Do=1,gd=2,hr=3,Ki=0,sn=1,Ae=2,mi=0,gi=1,gn=2,vh=3,Sh=4,xd=5;var _s=100,_d=101,yd=102,vd=103,Sd=104,Md=200,bd=201,Ed=202,Td=203,Mh=204,bh=205,wd=206,Ad=207,Rd=208,Cd=209,Pd=210,Id=211,Ld=212,Dd=213,Nd=214,Fa=0,Oa=1,Ba=2,Zs=3,za=4,Ha=5,Va=6,ka=7,Eh=0,Ud=1,Fd=2,Nn=0,Th=1,wh=2,Ah=3,Rh=4,Ch=5,Ph=6,Ih=7;var Lh=300,Qi=301,ys=302,bl=303,El=304,No=306,Wi=1e3,zn=1001,Ga=1002,Ze=1003,Od=1004;var Uo=1005;var fn=1006,Tl=1007;var ji=1008;var Rn=1009,Dh=1010,Nh=1011,ur=1012,wl=1013,jn=1014,Hn=1015,ti=1016,Al=1017,Rl=1018,dr=1020,Uh=35902,Fh=35899,Oh=1021,Bh=1022,Cn=1023,hi=1026,ts=1027,Cl=1028,Pl=1029,es=1030,Il=1031;var Ll=1033,Fo=33776,Oo=33777,Bo=33778,zo=33779,Dl=35840,Nl=35841,Ul=35842,Fl=35843,Ol=36196,Bl=37492,zl=37496,Hl=37488,Vl=37489,Ho=37490,kl=37491,Gl=37808,Wl=37809,Xl=37810,ql=37811,Yl=37812,$l=37813,Zl=37814,Jl=37815,Kl=37816,Ql=37817,jl=37818,tc=37819,ec=37820,nc=37821,ic=36492,sc=36494,rc=36495,oc=36283,ac=36284,Vo=36285,lc=36286;var Kr=2300,Wa=2301,Na=2302,ah=2303,lh=2400,ch=2401,hh=2402;var Bd=3200;var cc=0,zd=1,ei="",$e="srgb",Qr="srgb-linear",jr="linear",Ce="srgb";var Ua=7680;var Hd=519,Vd=512,kd=513,Gd=514,hc=515,Wd=516,Xd=517,uc=518,qd=519,zh=35044;var Hh="300 es",Kn=2e3,Js=2001;function Yp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function $p(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function to(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yd(){let i=to("canvas");return i.style.display="block",i}var Pu={},Ks=null;function eo(...i){let t="THREE."+i.shift();Ks?Ks("log",t,...i):console.log(t,...i)}function $d(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function re(...i){i=$d(i);let t="THREE."+i.shift();if(Ks)Ks("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function le(...i){i=$d(i);let t="THREE."+i.shift();if(Ks)Ks("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function fs(...i){let t=i.join(" ");t in Pu||(Pu[t]=!0,re(...i))}function Zd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Jd={[Fa]:Oa,[Ba]:Va,[za]:ka,[Zs]:Ha,[Oa]:Fa,[Va]:Ba,[ka]:za,[Ha]:Zs},ui=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Iu=1234567,Yr=Math.PI/180,Qs=180/Math.PI;function ci(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]+"-"+pn[t&255]+pn[t>>8&255]+"-"+pn[t>>16&15|64]+pn[t>>24&255]+"-"+pn[e&63|128]+pn[e>>8&255]+"-"+pn[e>>16&255]+pn[e>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function ye(i,t,e){return Math.max(t,Math.min(e,i))}function Vh(i,t){return(i%t+t)%t}function Zp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Jp(i,t,e){return i!==t?(e-i)/(t-i):0}function $r(i,t,e){return(1-e)*i+e*t}function Kp(i,t,e,n){return $r(i,t,1-Math.exp(-e*n))}function Qp(i,t=1){return t-Math.abs(Vh(i,t*2)-t)}function jp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function t0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function e0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function n0(i,t){return i+Math.random()*(t-i)}function i0(i){return i*(.5-Math.random())}function s0(i){i!==void 0&&(Iu=i);let t=Iu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function r0(i){return i*Yr}function o0(i){return i*Qs}function a0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function l0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function c0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function h0(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Jn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function De(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var fr={DEG2RAD:Yr,RAD2DEG:Qs,generateUUID:ci,clamp:ye,euclideanModulo:Vh,mapLinear:Zp,inverseLerp:Jp,lerp:$r,damp:Kp,pingpong:Qp,smoothstep:jp,smootherstep:t0,randInt:e0,randFloat:n0,randFloatSpread:i0,seededRandom:s0,degToRad:r0,radToDeg:o0,isPowerOfTwo:a0,ceilPowerOfTwo:l0,floorPowerOfTwo:c0,setQuaternionFromProperEuler:h0,normalize:De,denormalize:Jn},St=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ye(this.x,t.x,e.x),this.y=ye(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ye(this.x,t,e),this.y=ye(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ye(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},di=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],g=r[o+2],S=r[o+3];if(d!==S||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*S;m<0&&(u=-u,f=-f,g=-g,S=-S,m=-m);let p=1-a;if(m<.9995){let b=Math.acos(m),R=Math.sin(b);p=Math.sin(p*b)/R,a=Math.sin(a*b)/R,l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+S*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+S*a;let b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},E=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ye(this.x,t.x,e.x),this.y=ye(this.y,t.y,e.y),this.z=ye(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ye(this.x,t,e),this.y=ye(this.y,t,e),this.z=ye(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ye(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Uc.copy(this).projectOnVector(t),this.sub(Uc)}reflect(t){return this.sub(Uc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Uc=new E,Lu=new di,de=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],S=s[0],m=s[3],p=s[6],b=s[1],R=s[4],_=s[7],T=s[2],w=s[5],I=s[8];return r[0]=o*S+a*b+l*T,r[3]=o*m+a*R+l*w,r[6]=o*p+a*_+l*I,r[1]=c*S+h*b+d*T,r[4]=c*m+h*R+d*w,r[7]=c*p+h*_+d*I,r[2]=u*S+f*b+g*T,r[5]=u*m+f*R+g*w,r[8]=u*p+f*_+g*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/g;return t[0]=d*S,t[1]=(s*c-h*n)*S,t[2]=(a*n-s*o)*S,t[3]=u*S,t[4]=(h*e-s*l)*S,t[5]=(s*r-a*e)*S,t[6]=f*S,t[7]=(n*l-c*e)*S,t[8]=(o*e-n*r)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fc.makeScale(t,e)),this}rotate(t){return fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fc.makeRotation(-t)),this}translate(t,e){return fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Fc=new de,Du=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nu=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function u0(){let i={enabled:!0,workingColorSpace:Qr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ce&&(s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ce&&(s.r=$s(s.r),s.g=$s(s.g),s.b=$s(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ei?jr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qr]:{primaries:t,whitePoint:n,transfer:jr,toXYZ:Du,fromXYZ:Nu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:t,whitePoint:n,transfer:Ce,toXYZ:Du,fromXYZ:Nu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),i}var Me=u0();function Pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ps,Xa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ps===void 0&&(Ps=to("canvas")),Ps.width=t.width,Ps.height=t.height;let s=Ps.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ps}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=to("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Pi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Pi(e[n]/255)*255):e[n]=Pi(e[n]);return{data:e,width:t.width,height:t.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},d0=0,js=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=ci(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Oc(s[o].image)):r.push(Oc(s[o]))}else r=Oc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Oc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}var f0=0,Bc=new E,Mn=class i extends ui{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=zn,s=zn,r=fn,o=ji,a=Cn,l=Rn,c=i.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=ci(),this.name="",this.source=new js(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Bc).x}get height(){return this.source.getSize(Bc).y}get depth(){return this.source.getSize(Bc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){re(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){re(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wi:t.x=t.x-Math.floor(t.x);break;case zn:t.x=t.x<0?0:1;break;case Ga:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wi:t.y=t.y-Math.floor(t.y);break;case zn:t.y=t.y<0?0:1;break;case Ga:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=Lh;Mn.DEFAULT_ANISOTROPY=1;var He=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],S=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+S)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(c+1)/2,_=(f+1)/2,T=(p+1)/2,w=(h+u)/4,I=(d+S)/4,y=(g+m)/4;return R>_&&R>T?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=w/n,r=I/n):_>T?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=w/s,r=y/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=I/r,s=y/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(d-S)*(d-S)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-S)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ye(this.x,t.x,e.x),this.y=ye(this.y,t.y,e.y),this.z=ye(this.z,t.z,e.z),this.w=ye(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ye(this.x,t,e),this.y=ye(this.y,t,e),this.z=ye(this.z,t,e),this.w=ye(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ye(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qa=class extends ui{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new He(0,0,t,e),this.scissorTest=!1,this.viewport=new He(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Mn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new js(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},An=class extends qa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},no=class extends Mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ya=class extends Mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Pe=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,l,c,h,d,u,f,g,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,f,g,S,m)}set(t,e,n,s,r,o,a,l,c,h,d,u,f,g,S,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Is.setFromMatrixColumn(t,0).length(),r=1/Is.setFromMatrixColumn(t,1).length(),o=1/Is.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,g=a*h,S=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-S*c,e[9]=-a*l,e[2]=S-u*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,S=c*d;e[0]=u+S*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=S+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,S=c*d;e[0]=u-S*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=S-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,g=a*h,S=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+S,e[1]=l*d,e[5]=S*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,g=a*l,S=a*c;e[0]=l*h,e[4]=S-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-S*d}else if(t.order==="XZY"){let u=o*l,f=o*c,g=a*l,S=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+S,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=S*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(p0,t,m0)}lookAt(t,e,n){let s=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),zi.crossVectors(n,Pn),zi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),zi.crossVectors(n,Pn)),zi.normalize(),ra.crossVectors(Pn,zi),s[0]=zi.x,s[4]=ra.x,s[8]=Pn.x,s[1]=zi.y,s[5]=ra.y,s[9]=Pn.y,s[2]=zi.z,s[6]=ra.z,s[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],S=n[6],m=n[10],p=n[14],b=n[3],R=n[7],_=n[11],T=n[15],w=s[0],I=s[4],y=s[8],v=s[12],A=s[1],L=s[5],O=s[9],W=s[13],F=s[2],G=s[6],j=s[10],K=s[14],ct=s[3],U=s[7],J=s[11],D=s[15];return r[0]=o*w+a*A+l*F+c*ct,r[4]=o*I+a*L+l*G+c*U,r[8]=o*y+a*O+l*j+c*J,r[12]=o*v+a*W+l*K+c*D,r[1]=h*w+d*A+u*F+f*ct,r[5]=h*I+d*L+u*G+f*U,r[9]=h*y+d*O+u*j+f*J,r[13]=h*v+d*W+u*K+f*D,r[2]=g*w+S*A+m*F+p*ct,r[6]=g*I+S*L+m*G+p*U,r[10]=g*y+S*O+m*j+p*J,r[14]=g*v+S*W+m*K+p*D,r[3]=b*w+R*A+_*F+T*ct,r[7]=b*I+R*L+_*G+T*U,r[11]=b*y+R*O+_*j+T*J,r[15]=b*v+R*W+_*K+T*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],S=t[7],m=t[11],p=t[15],b=l*f-c*u,R=a*f-c*d,_=a*u-l*d,T=o*f-c*h,w=o*u-l*h,I=o*d-a*h;return e*(S*b-m*R+p*_)-n*(g*b-m*T+p*w)+s*(g*R-S*T+p*I)-r*(g*_-S*w+m*I)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],S=t[13],m=t[14],p=t[15],b=e*a-n*o,R=e*l-s*o,_=e*c-r*o,T=n*l-s*a,w=n*c-r*a,I=s*c-r*l,y=h*S-d*g,v=h*m-u*g,A=h*p-f*g,L=d*m-u*S,O=d*p-f*S,W=u*p-f*m,F=b*W-R*O+_*L+T*A-w*v+I*y;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/F;return t[0]=(a*W-l*O+c*L)*G,t[1]=(s*O-n*W-r*L)*G,t[2]=(S*I-m*w+p*T)*G,t[3]=(u*w-d*I-f*T)*G,t[4]=(l*A-o*W-c*v)*G,t[5]=(e*W-s*A+r*v)*G,t[6]=(m*_-g*I-p*R)*G,t[7]=(h*I-u*_+f*R)*G,t[8]=(o*O-a*A+c*y)*G,t[9]=(n*A-e*O-r*y)*G,t[10]=(g*w-S*_+p*b)*G,t[11]=(d*_-h*w-f*b)*G,t[12]=(a*v-o*L-l*y)*G,t[13]=(e*L-n*v+s*y)*G,t[14]=(S*R-g*T-m*b)*G,t[15]=(h*T-d*R+u*b)*G,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,S=o*h,m=o*d,p=a*d,b=l*c,R=l*h,_=l*d,T=n.x,w=n.y,I=n.z;return s[0]=(1-(S+p))*T,s[1]=(f+_)*T,s[2]=(g-R)*T,s[3]=0,s[4]=(f-_)*w,s[5]=(1-(u+p))*w,s[6]=(m+b)*w,s[7]=0,s[8]=(g+R)*I,s[9]=(m-b)*I,s[10]=(1-(u+S))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Is.set(s[0],s[1],s[2]).length(),a=Is.set(s[4],s[5],s[6]).length(),l=Is.set(s[8],s[9],s[10]).length();r<0&&(o=-o),qn.copy(this);let c=1/o,h=1/a,d=1/l;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=d,qn.elements[9]*=d,qn.elements[10]*=d,e.setFromRotationMatrix(qn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Kn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),g,S;if(l)g=r/(o-r),S=o*r/(o-r);else if(a===Kn)g=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(a===Js)g=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Kn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),g,S;if(l)g=1/(o-r),S=o/(o-r);else if(a===Kn)g=-2/(o-r),S=-(o+r)/(o-r);else if(a===Js)g=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Is=new E,qn=new Pe,p0=new E(0,0,0),m0=new E(1,1,1),zi=new E,ra=new E,Pn=new E,Uu=new Pe,Fu=new di,Xi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Uu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fu.setFromEuler(this),this.setFromQuaternion(Fu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xi.DEFAULT_ORDER="XYZ";var io=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},g0=0,Ou=new E,Ls=new di,Ei=new Pe,oa=new E,Fr=new E,x0=new E,_0=new di,Bu=new E(1,0,0),zu=new E(0,1,0),Hu=new E(0,0,1),Vu={type:"added"},y0={type:"removed"},Ds={type:"childadded",child:null},zc={type:"childremoved",child:null},Je=class i extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new E,e=new Xi,n=new di,s=new E(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pe},normalMatrix:{value:new de}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ls.setFromAxisAngle(t,e),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(t,e){return Ls.setFromAxisAngle(t,e),this.quaternion.premultiply(Ls),this}rotateX(t){return this.rotateOnAxis(Bu,t)}rotateY(t){return this.rotateOnAxis(zu,t)}rotateZ(t){return this.rotateOnAxis(Hu,t)}translateOnAxis(t,e){return Ou.copy(t).applyQuaternion(this.quaternion),this.position.add(Ou.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bu,t)}translateY(t){return this.translateOnAxis(zu,t)}translateZ(t){return this.translateOnAxis(Hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?oa.copy(t):oa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Fr,oa,this.up):Ei.lookAt(oa,Fr,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(Ei),this.quaternion.premultiply(Ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vu),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null):le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(y0),zc.child=t,this.dispatchEvent(zc),zc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vu),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,t,x0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,_0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Je.DEFAULT_UP=new E(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var li=class extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}},v0={type:"move"},tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let S of t.hand.values()){let m=e.getJointPose(S,n),p=this._getHandJoint(c,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(v0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new li;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},aa={h:0,s:0,l:0};function Hc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Me.workingColorSpace){return this.r=t,this.g=e,this.b=n,Me.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Me.workingColorSpace){if(t=Vh(t,1),e=ye(e,0,1),n=ye(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Hc(o,r,t+1/3),this.g=Hc(o,r,t),this.b=Hc(o,r,t-1/3)}return Me.colorSpaceToWorking(this,s),this}setStyle(t,e=$e){function n(r){r!==void 0&&parseFloat(r)<1&&re("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:re("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);re("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){let n=Kd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):re("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}copyLinearToSRGB(t){return this.r=$s(t.r),this.g=$s(t.g),this.b=$s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return Me.workingToColorSpace(mn.copy(this),t),Math.round(ye(mn.r*255,0,255))*65536+Math.round(ye(mn.g*255,0,255))*256+Math.round(ye(mn.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Me.workingColorSpace){Me.workingToColorSpace(mn.copy(this),e);let n=mn.r,s=mn.g,r=mn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Me.workingColorSpace){return Me.workingToColorSpace(mn.copy(this),e),t.r=mn.r,t.g=mn.g,t.b=mn.b,t}getStyle(t=$e){Me.workingToColorSpace(mn.copy(this),t);let e=mn.r,n=mn.g,s=mn.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Hi),this.setHSL(Hi.h+t,Hi.s+e,Hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hi),t.getHSL(aa);let n=$r(Hi.h,aa.h,e),s=$r(Hi.s,aa.s,e),r=$r(Hi.l,aa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new jt;jt.NAMES=Kd;var so=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new jt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ro=class extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Yn=new E,Ti=new E,Vc=new E,wi=new E,Ns=new E,Us=new E,ku=new E,kc=new E,Gc=new E,Wc=new E,Xc=new He,qc=new He,Yc=new He,Ci=class i{constructor(t=new E,e=new E,n=new E){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Yn.subVectors(t,e),s.cross(Yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Yn.subVectors(s,e),Ti.subVectors(n,e),Vc.subVectors(t,e);let o=Yn.dot(Yn),a=Yn.dot(Ti),l=Yn.dot(Vc),c=Ti.dot(Ti),h=Ti.dot(Vc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wi.x),l.addScaledVector(o,wi.y),l.addScaledVector(a,wi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Xc.setScalar(0),qc.setScalar(0),Yc.setScalar(0),Xc.fromBufferAttribute(t,e),qc.fromBufferAttribute(t,n),Yc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Xc,r.x),o.addScaledVector(qc,r.y),o.addScaledVector(Yc,r.z),o}static isFrontFacing(t,e,n,s){return Yn.subVectors(n,e),Ti.subVectors(t,e),Yn.cross(Ti).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),Yn.cross(Ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ns.subVectors(s,n),Us.subVectors(r,n),kc.subVectors(t,n);let l=Ns.dot(kc),c=Us.dot(kc);if(l<=0&&c<=0)return e.copy(n);Gc.subVectors(t,s);let h=Ns.dot(Gc),d=Us.dot(Gc);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ns,o);Wc.subVectors(t,r);let f=Ns.dot(Wc),g=Us.dot(Wc);if(g>=0&&f<=g)return e.copy(r);let S=f*c-l*g;if(S<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Us,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return ku.subVectors(r,s),a=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(ku,a);let p=1/(m+S+u);return o=S*p,a=u*p,e.copy(n).addScaledVector(Ns,o).addScaledVector(Us,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},fi=class{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint($n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint($n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=$n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,$n):$n.fromBufferAttribute(r,o),$n.applyMatrix4(t.matrixWorld),this.expandByPoint($n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),la.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),la.copy(n.boundingBox)),la.applyMatrix4(t.matrixWorld),this.union(la)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$n),$n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Or),ca.subVectors(this.max,Or),Fs.subVectors(t.a,Or),Os.subVectors(t.b,Or),Bs.subVectors(t.c,Or),Vi.subVectors(Os,Fs),ki.subVectors(Bs,Os),ls.subVectors(Fs,Bs);let e=[0,-Vi.z,Vi.y,0,-ki.z,ki.y,0,-ls.z,ls.y,Vi.z,0,-Vi.x,ki.z,0,-ki.x,ls.z,0,-ls.x,-Vi.y,Vi.x,0,-ki.y,ki.x,0,-ls.y,ls.x,0];return!$c(e,Fs,Os,Bs,ca)||(e=[1,0,0,0,1,0,0,0,1],!$c(e,Fs,Os,Bs,ca))?!1:(ha.crossVectors(Vi,ki),e=[ha.x,ha.y,ha.z],$c(e,Fs,Os,Bs,ca))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ai=[new E,new E,new E,new E,new E,new E,new E,new E],$n=new E,la=new fi,Fs=new E,Os=new E,Bs=new E,Vi=new E,ki=new E,ls=new E,Or=new E,ca=new E,ha=new E,cs=new E;function $c(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){cs.fromArray(i,r);let a=s.x*Math.abs(cs.x)+s.y*Math.abs(cs.y)+s.z*Math.abs(cs.z),l=t.dot(cs),c=e.dot(cs),h=n.dot(cs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Qe=new E,ua=new St,S0=0,Oe=class extends ui{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:S0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=zh,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ua.fromBufferAttribute(this,e),ua.applyMatrix3(t),this.setXY(e,ua.x,ua.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix3(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=De(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var oo=class extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ao=class extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Se=class extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}},M0=new fi,Br=new E,Zc=new E,pi=class{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):M0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Br.subVectors(t,this.center);let e=Br.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Br,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Br.copy(t.center).add(Zc)),this.expandByPoint(Br.copy(t.center).sub(Zc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},b0=0,Bn=new Pe,Jc=new Je,zs=new E,In=new fi,zr=new fi,un=new E,Ve=class i extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yp(t)?ao:oo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new de().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Bn.makeRotationFromQuaternion(t),this.applyMatrix4(Bn),this}rotateX(t){return Bn.makeRotationX(t),this.applyMatrix4(Bn),this}rotateY(t){return Bn.makeRotationY(t),this.applyMatrix4(Bn),this}rotateZ(t){return Bn.makeRotationZ(t),this.applyMatrix4(Bn),this}translate(t,e,n){return Bn.makeTranslation(t,e,n),this.applyMatrix4(Bn),this}scale(t,e,n){return Bn.makeScale(t,e,n),this.applyMatrix4(Bn),this}lookAt(t){return Jc.lookAt(t),Jc.updateMatrix(),this.applyMatrix4(Jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Se(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(t){let n=this.boundingSphere.center;if(In.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];zr.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(In.min,zr.min),In.expandByPoint(un),un.addVectors(In.max,zr.max),In.expandByPoint(un)):(In.expandByPoint(zr.min),In.expandByPoint(zr.max))}In.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)un.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(un));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)un.fromBufferAttribute(a,c),l&&(zs.fromBufferAttribute(t,c),un.add(zs)),s=Math.max(s,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Oe(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new E,l[y]=new E;let c=new E,h=new E,d=new E,u=new St,f=new St,g=new St,S=new E,m=new E;function p(y,v,A){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,v),d.fromBufferAttribute(n,A),u.fromBufferAttribute(r,y),f.fromBufferAttribute(r,v),g.fromBufferAttribute(r,A),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(S.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),a[y].add(S),a[v].add(S),a[A].add(S),l[y].add(m),l[v].add(m),l[A].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let y=0,v=b.length;y<v;++y){let A=b[y],L=A.start,O=A.count;for(let W=L,F=L+O;W<F;W+=3)p(t.getX(W+0),t.getX(W+1),t.getX(W+2))}let R=new E,_=new E,T=new E,w=new E;function I(y){T.fromBufferAttribute(s,y),w.copy(T);let v=a[y];R.copy(v),R.sub(T.multiplyScalar(T.dot(v))).normalize(),_.crossVectors(w,v);let L=_.dot(l[y])<0?-1:1;o.setXYZW(y,R.x,R.y,R.z,L)}for(let y=0,v=b.length;y<v;++y){let A=b[y],L=A.start,O=A.count;for(let W=L,F=L+O;W<F;W+=3)I(t.getX(W+0)),I(t.getX(W+1)),I(t.getX(W+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new E,r=new E,o=new E,a=new E,l=new E,c=new E,h=new E,d=new E;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),S=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,S),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)un.fromBufferAttribute(t,e),un.normalize(),t.setXYZ(e,un.x,un.y,un.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?f=l[S]*a.data.stride+a.offset:f=l[S]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Oe(u,h,d)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},$a=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=zh,this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Sn=new E,lo=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.applyMatrix4(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.applyNormalMatrix(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.transformDirection(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=De(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Jn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Jn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Jn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Jn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array),r=De(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){eo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Oe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){eo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Kc=new E,E0=new E,T0=new de,Zn=class{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Kc.subVectors(n,e).cross(E0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Kc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||T0.getNormalMatrix(t),s=this.coplanarPoint(Kc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},w0=0,Qn=class extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=gi,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mh,this.blendDst=bh,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ua,this.stencilZFail=Ua,this.stencilZPass=Ua,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){re(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){re(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Zn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new St().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new St().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},qi=class extends Qn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Hs,Hr=new E,Vs=new E,ks=new E,Gs=new St,Vr=new St,Qd=new Pe,da=new E,kr=new E,fa=new E,Gu=new St,Qc=new St,Wu=new St,ps=class extends Je{constructor(t=new qi){if(super(),this.isSprite=!0,this.type="Sprite",Hs===void 0){Hs=new Ve;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new $a(e,5);Hs.setIndex([0,1,2,0,2,3]),Hs.setAttribute("position",new lo(n,3,0,!1)),Hs.setAttribute("uv",new lo(n,2,3,!1))}this.geometry=Hs,this.material=t,this.center=new St(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&le('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vs.setFromMatrixScale(this.matrixWorld),Qd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ks.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vs.multiplyScalar(-ks.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;pa(da.set(-.5,-.5,0),ks,o,Vs,s,r),pa(kr.set(.5,-.5,0),ks,o,Vs,s,r),pa(fa.set(.5,.5,0),ks,o,Vs,s,r),Gu.set(0,0),Qc.set(1,0),Wu.set(1,1);let a=t.ray.intersectTriangle(da,kr,fa,!1,Hr);if(a===null&&(pa(kr.set(-.5,.5,0),ks,o,Vs,s,r),Qc.set(0,1),a=t.ray.intersectTriangle(da,fa,kr,!1,Hr),a===null))return;let l=t.ray.origin.distanceTo(Hr);l<t.near||l>t.far||e.push({distance:l,point:Hr.clone(),uv:Ci.getInterpolation(Hr,da,kr,fa,Gu,Qc,Wu,new St),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function pa(i,t,e,n,s,r){Gs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Vr.x=r*Gs.x-s*Gs.y,Vr.y=s*Gs.x+r*Gs.y):Vr.copy(Gs),i.copy(t),i.x+=Vr.x,i.y+=Vr.y,i.applyMatrix4(Qd)}var Ri=new E,jc=new E,ma=new E,ga=new E,er=class{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ri.copy(this.origin).addScaledVector(this.direction,e),Ri.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){jc.copy(t).add(e).multiplyScalar(.5),ma.copy(e).sub(t).normalize(),ga.copy(this.origin).sub(jc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ma),a=ga.dot(this.direction),l=-ga.dot(ma),c=ga.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let S=1/h;d*=S,u*=S,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(jc).addScaledVector(ma,u),f}intersectSphere(t,e){if(t.radius<0)return null;Ri.subVectors(t.center,this.origin);let n=Ri.dot(this.direction),s=Ri.dot(Ri)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ri)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,g=e.x-o.x,S=e.y-o.y,m=e.z-o.z,p=n.x-o.x,b=n.y-o.y,R=n.z-o.z,_=Math.abs(l),T=Math.abs(c),w=Math.abs(h),I,y,v,A,L,O,W,F,G,j,K,ct;if(_>=T&&_>=w?(v=l,O=d,G=g,ct=p,l>=0?(I=c,y=h,A=u,L=f,W=S,F=m,j=b,K=R):(I=h,y=c,A=f,L=u,W=m,F=S,j=R,K=b)):T>=w?(v=c,O=u,G=S,ct=b,c>=0?(I=h,y=l,A=f,L=d,W=m,F=g,j=R,K=p):(I=l,y=h,A=d,L=f,W=g,F=m,j=p,K=R)):(v=h,O=f,G=m,ct=R,h>=0?(I=l,y=c,A=d,L=u,W=g,F=S,j=p,K=b):(I=c,y=l,A=u,L=d,W=S,F=g,j=b,K=p)),v===0)return null;let U=I/v,J=y/v,D=1/v,rt=A-U*O,ut=L-J*O,Yt=W-U*G,Kt=F-J*G,_t=j-U*ct,X=K-J*ct,et=_t*Kt-X*Yt,At=rt*X-ut*_t,Xt=Yt*ut-Kt*rt;if(s){if(et<0||At<0||Xt<0)return null}else if((et<0||At<0||Xt<0)&&(et>0||At>0||Xt>0))return null;let Dt=et+At+Xt;if(Dt===0)return null;let Zt=D*(et*O+At*G+Xt*ct);return(Dt>0?Zt<0:Zt>0)?null:this.at(Zt/Dt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ie=class extends Qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=Eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Xu=new Pe,hs=new er,xa=new pi,qu=new E,_a=new E,ya=new E,va=new E,th=new E,Sa=new E,Yu=new E,Ma=new E,It=class extends Je{constructor(t=new Ve,e=new Ie){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Sa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(th.fromBufferAttribute(d,t),o?Sa.addScaledVector(th,h):Sa.addScaledVector(th.sub(e),h))}e.add(Sa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(r),hs.copy(t.ray).recast(t.near),!(xa.containsPoint(hs.origin)===!1&&(hs.intersectSphere(xa,qu)===null||hs.origin.distanceToSquared(qu)>(t.far-t.near)**2))&&(Xu.copy(r).invert(),hs.copy(t.ray).applyMatrix4(Xu),!(n.boundingBox!==null&&hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,hs)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,S=u.length;g<S;g++){let m=u[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),R=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=b,T=R;_<T;_+=3){let w=a.getX(_),I=a.getX(_+1),y=a.getX(_+2);s=ba(this,p,t,n,c,h,d,w,I,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),S=Math.min(a.count,f.start+f.count);for(let m=g,p=S;m<p;m+=3){let b=a.getX(m),R=a.getX(m+1),_=a.getX(m+2);s=ba(this,o,t,n,c,h,d,b,R,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,S=u.length;g<S;g++){let m=u[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),R=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=b,T=R;_<T;_+=3){let w=_,I=_+1,y=_+2;s=ba(this,p,t,n,c,h,d,w,I,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),S=Math.min(l.count,f.start+f.count);for(let m=g,p=S;m<p;m+=3){let b=m,R=m+1,_=m+2;s=ba(this,o,t,n,c,h,d,b,R,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function A0(i,t,e,n,s,r,o,a){let l;if(t.side===sn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ki,a),l===null)return null;Ma.copy(a),Ma.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ma);return c<e.near||c>e.far?null:{distance:c,point:Ma.clone(),object:i}}function ba(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,_a),i.getVertexPosition(l,ya),i.getVertexPosition(c,va);let h=A0(i,t,e,n,_a,ya,va,Yu);if(h){let d=new E;Ci.getBarycoord(Yu,_a,ya,va,d),s&&(h.uv=Ci.getInterpolatedAttribute(s,a,l,c,d,new St)),r&&(h.uv1=Ci.getInterpolatedAttribute(r,a,l,c,d,new St)),o&&(h.normal=Ci.getInterpolatedAttribute(o,a,l,c,d,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new E,materialIndex:0};Ci.getNormal(_a,ya,va,u.normal),h.face=u,h.barycoord=d}return h}var ms=class extends Mn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ze,h=Ze,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var co=class extends Oe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ws=new Pe,$u=new Pe,Ea=[],Zu=new fi,R0=new Pe,Gr=new It,Wr=new pi,ho=class extends It{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new co(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,R0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new fi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ws),Zu.copy(t.boundingBox).applyMatrix4(Ws),this.boundingBox.union(Zu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ws),Wr.copy(t.boundingSphere).applyMatrix4(Ws),this.boundingSphere.union(Wr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Gr.geometry=this.geometry,Gr.material=this.material,Gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wr.copy(this.boundingSphere),Wr.applyMatrix4(n),t.ray.intersectsSphere(Wr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ws),$u.multiplyMatrices(n,Ws),Gr.matrixWorld=$u,Gr.raycast(t,Ea);for(let o=0,a=Ea.length;o<a;o++){let l=Ea[o];l.instanceId=r,l.object=this,e.push(l)}Ea.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new co(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ms(new Float32Array(s*this.count),s,this.count,Cl,Hn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},us=new pi,C0=new St(.5,.5),Ta=new E,nr=class{constructor(t=new Zn,e=new Zn,n=new Zn,s=new Zn,r=new Zn,o=new Zn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Kn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],S=r[9],m=r[10],p=r[11],b=r[12],R=r[13],_=r[14],T=r[15];if(s[0].setComponents(c-o,f-h,p-g,T-b).normalize(),s[1].setComponents(c+o,f+h,p+g,T+b).normalize(),s[2].setComponents(c+a,f+d,p+S,T+R).normalize(),s[3].setComponents(c-a,f-d,p-S,T-R).normalize(),n)s[4].setComponents(l,u,m,_).normalize(),s[5].setComponents(c-l,f-u,p-m,T-_).normalize();else if(s[4].setComponents(c-l,f-u,p-m,T-_).normalize(),e===Kn)s[5].setComponents(c+l,f+u,p+m,T+_).normalize();else if(e===Js)s[5].setComponents(l,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(t){us.center.set(0,0,0);let e=C0.distanceTo(t.center);return us.radius=.7071067811865476+e,us.applyMatrix4(t.matrixWorld),this.intersectsSphere(us)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ta.x=s.normal.x>0?t.max.x:t.min.x,Ta.y=s.normal.y>0?t.max.y:t.min.y,Ta.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Za=class extends Qn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ja=new E,Ka=new E,Ju=new Pe,Xr=new er,wa=new pi,eh=new E,Ku=new E,Qa=class extends Je{constructor(t=new Ve,e=new Za){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ja.fromBufferAttribute(e,s-1),Ka.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ja.distanceTo(Ka);t.setAttribute("lineDistance",new Se(n,1))}else re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(s),wa.radius+=r,t.ray.intersectsSphere(wa)===!1)return;Ju.copy(s).invert(),Xr.copy(t.ray).applyMatrix4(Ju);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let S=f,m=g-1;S<m;S+=c){let p=h.getX(S),b=h.getX(S+1),R=Aa(this,t,Xr,l,p,b,S);R&&e.push(R)}if(this.isLineLoop){let S=h.getX(g-1),m=h.getX(f),p=Aa(this,t,Xr,l,S,m,g-1);p&&e.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let S=f,m=g-1;S<m;S+=c){let p=Aa(this,t,Xr,l,S,S+1,S);p&&e.push(p)}if(this.isLineLoop){let S=Aa(this,t,Xr,l,g-1,f,g-1);S&&e.push(S)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Aa(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Ja.fromBufferAttribute(a,s),Ka.fromBufferAttribute(a,r),e.distanceSqToSegment(Ja,Ka,eh,Ku)>n)return;eh.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(eh);if(!(c<t.near||c>t.far))return{distance:c,point:Ku.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Qu=new E,ju=new E,uo=class extends Qa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Qu.fromBufferAttribute(e,s),ju.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Qu.distanceTo(ju);t.setAttribute("lineDistance",new Se(n,1))}else re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ja=class extends Qn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},td=new Pe,uh=new er,Ra=new pi,Ca=new E,fo=class extends Je{constructor(t=new Ve,e=new ja){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(s),Ra.radius+=r,t.ray.intersectsSphere(Ra)===!1)return;td.copy(s).invert(),uh.copy(t.ray).applyMatrix4(td);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,S=f;g<S;g++){let m=c.getX(g);Ca.fromBufferAttribute(d,m),ed(Ca,m,l,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,S=f;g<S;g++)Ca.fromBufferAttribute(d,g),ed(Ca,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ed(i,t,e,n,s,r,o){let a=uh.distanceSqToPoint(i);if(a<e){let l=new E;uh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var po=class extends Mn{constructor(t=[],e=Qi,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ii=class extends Mn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Yi=class extends Mn{constructor(t,e,n=jn,s,r,o,a=Ze,l=Ze,c,h=hi,d=1){if(h!==hi&&h!==ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new js(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},tl=class extends Yi{constructor(t,e=jn,n=Qi,s,r,o=Ze,a=Ze,l,c=hi){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},mo=class extends Mn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},we=class i extends Ve{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(h,3)),this.setAttribute("uv",new Se(d,2));function g(S,m,p,b,R,_,T,w,I,y,v){let A=_/I,L=T/y,O=_/2,W=T/2,F=w/2,G=I+1,j=y+1,K=0,ct=0,U=new E;for(let J=0;J<j;J++){let D=J*L-W;for(let rt=0;rt<G;rt++){let ut=rt*A-O;U[S]=ut*b,U[m]=D*R,U[p]=F,c.push(U.x,U.y,U.z),U[S]=0,U[m]=0,U[p]=w>0?1:-1,h.push(U.x,U.y,U.z),d.push(rt/I),d.push(1-J/y),K+=1}}for(let J=0;J<y;J++)for(let D=0;D<I;D++){let rt=u+D+G*J,ut=u+D+G*(J+1),Yt=u+(D+1)+G*(J+1),Kt=u+(D+1)+G*J;l.push(rt,ut,Kt),l.push(ut,Yt,Kt),ct+=6}a.addGroup(f,ct,v),f+=ct,u+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var bn=class i extends Ve{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new E,h=new St;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Se(o,3)),this.setAttribute("normal",new Se(a,3)),this.setAttribute("uv",new Se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},En=class i extends Ve{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,S=[],m=n/2,p=0;b(),o===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new Se(d,3)),this.setAttribute("normal",new Se(u,3)),this.setAttribute("uv",new Se(f,2));function b(){let _=new E,T=new E,w=0,I=(e-t)/n;for(let y=0;y<=r;y++){let v=[],A=y/r,L=A*(e-t)+t;for(let O=0;O<=s;O++){let W=O/s,F=W*l+a,G=Math.sin(F),j=Math.cos(F);T.x=L*G,T.y=-A*n+m,T.z=L*j,d.push(T.x,T.y,T.z),_.set(G,I,j).normalize(),u.push(_.x,_.y,_.z),f.push(W,1-A),v.push(g++)}S.push(v)}for(let y=0;y<s;y++)for(let v=0;v<r;v++){let A=S[v][y],L=S[v+1][y],O=S[v+1][y+1],W=S[v][y+1];(t>0||v!==0)&&(h.push(A,L,W),w+=3),(e>0||v!==r-1)&&(h.push(L,O,W),w+=3)}c.addGroup(p,w,0),p+=w}function R(_){let T=g,w=new St,I=new E,y=0,v=_===!0?t:e,A=_===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,m*A,0),u.push(0,A,0),f.push(.5,.5),g++;let L=g;for(let O=0;O<=s;O++){let F=O/s*l+a,G=Math.cos(F),j=Math.sin(F);I.x=v*j,I.y=m*A,I.z=v*G,d.push(I.x,I.y,I.z),u.push(0,A,0),w.x=G*.5+.5,w.y=j*.5*A+.5,f.push(w.x,w.y),g++}for(let O=0;O<s;O++){let W=T+O,F=L+O;_===!0?h.push(F,F+1,W):h.push(F+1,F,W),y+=3}c.addGroup(p,y,_===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Li=class i extends En{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},el=class i extends Ve{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Se(r,3)),this.setAttribute("normal",new Se(r.slice(),3)),this.setAttribute("uv",new Se(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let R=new E,_=new E,T=new E;for(let w=0;w<e.length;w+=3)f(e[w+0],R),f(e[w+1],_),f(e[w+2],T),l(R,_,T,b)}function l(b,R,_,T){let w=T+1,I=[];for(let y=0;y<=w;y++){I[y]=[];let v=b.clone().lerp(_,y/w),A=R.clone().lerp(_,y/w),L=w-y;for(let O=0;O<=L;O++)O===0&&y===w?I[y][O]=v:I[y][O]=v.clone().lerp(A,O/L)}for(let y=0;y<w;y++)for(let v=0;v<2*(w-y)-1;v++){let A=Math.floor(v/2);v%2===0?(u(I[y][A+1]),u(I[y+1][A]),u(I[y][A])):(u(I[y][A+1]),u(I[y+1][A+1]),u(I[y+1][A]))}}function c(b){let R=new E;for(let _=0;_<r.length;_+=3)R.x=r[_+0],R.y=r[_+1],R.z=r[_+2],R.normalize().multiplyScalar(b),r[_+0]=R.x,r[_+1]=R.y,r[_+2]=R.z}function h(){let b=new E;for(let R=0;R<r.length;R+=3){b.x=r[R+0],b.y=r[R+1],b.z=r[R+2];let _=m(b)/2/Math.PI+.5,T=p(b)/Math.PI+.5;o.push(_,1-T)}g(),d()}function d(){for(let b=0;b<o.length;b+=6){let R=o[b+0],_=o[b+2],T=o[b+4],w=Math.max(R,_,T),I=Math.min(R,_,T);w>.9&&I<.1&&(R<.2&&(o[b+0]+=1),_<.2&&(o[b+2]+=1),T<.2&&(o[b+4]+=1))}}function u(b){r.push(b.x,b.y,b.z)}function f(b,R){let _=b*3;R.x=t[_+0],R.y=t[_+1],R.z=t[_+2]}function g(){let b=new E,R=new E,_=new E,T=new E,w=new St,I=new St,y=new St;for(let v=0,A=0;v<r.length;v+=9,A+=6){b.set(r[v+0],r[v+1],r[v+2]),R.set(r[v+3],r[v+4],r[v+5]),_.set(r[v+6],r[v+7],r[v+8]),w.set(o[A+0],o[A+1]),I.set(o[A+2],o[A+3]),y.set(o[A+4],o[A+5]),T.copy(b).add(R).add(_).divideScalar(3);let L=m(T);S(w,A+0,b,L),S(I,A+2,R,L),S(y,A+4,_,L)}}function S(b,R,_,T){T<0&&b.x===1&&(o[R]=b.x-1),_.x===0&&_.z===0&&(o[R]=T/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){re("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new St:new E);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new E,s=[],r=[],o=[],a=new E,l=new Pe;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new E)}r[0]=new E,o[0]=new E;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ye(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ye(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ir=class extends Ln{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new St){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},nl=class extends ir{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function kh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var nd=new E,id=new E,nh=new kh,ih=new kh,sh=new kh,sr=class extends Ln{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new E){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(id.subVectors(s[0],s[1]).add(s[0]),c=id);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(nd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=nd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),S=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);S<1e-4&&(S=1),g<1e-4&&(g=S),m<1e-4&&(m=S),nh.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,S,m),ih.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,S,m),sh.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,S,m)}else this.curveType==="catmullrom"&&(nh.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),ih.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),sh.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(nh.calc(l),ih.calc(l),sh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new E().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function sd(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function P0(i,t){let e=1-i;return e*e*t}function I0(i,t){return 2*(1-i)*i*t}function L0(i,t){return i*i*t}function Zr(i,t,e,n){return P0(i,t)+I0(i,e)+L0(i,n)}function D0(i,t){let e=1-i;return e*e*e*t}function N0(i,t){let e=1-i;return 3*e*e*i*t}function U0(i,t){return 3*(1-i)*i*i*t}function F0(i,t){return i*i*i*t}function Jr(i,t,e,n,s){return D0(i,t)+N0(i,e)+U0(i,n)+F0(i,s)}var go=class extends Ln{constructor(t=new St,e=new St,n=new St,s=new St){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new St){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Jr(t,s.x,r.x,o.x,a.x),Jr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},il=class extends Ln{constructor(t=new E,e=new E,n=new E,s=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new E){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Jr(t,s.x,r.x,o.x,a.x),Jr(t,s.y,r.y,o.y,a.y),Jr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},xo=class extends Ln{constructor(t=new St,e=new St){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new St){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new St){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sl=class extends Ln{constructor(t=new E,e=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new E){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new E){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_o=class extends Ln{constructor(t=new St,e=new St,n=new St){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new St){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Zr(t,s.x,r.x,o.x),Zr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yo=class extends Ln{constructor(t=new E,e=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new E){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Zr(t,s.x,r.x,o.x),Zr(t,s.y,r.y,o.y),Zr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vo=class extends Ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new St){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(sd(a,l.x,c.x,h.x,d.x),sd(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new St().fromArray(s))}return this}},rl=Object.freeze({__proto__:null,ArcCurve:nl,CatmullRomCurve3:sr,CubicBezierCurve:go,CubicBezierCurve3:il,EllipseCurve:ir,LineCurve:xo,LineCurve3:sl,QuadraticBezierCurve:_o,QuadraticBezierCurve3:yo,SplineCurve:vo}),ol=class extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new rl[s.type]().fromJSON(s))}return this}},So=class extends ol{constructor(t){super(),this.type="Path",this.currentPoint=new St,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new xo(this.currentPoint.clone(),new St(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new _o(this.currentPoint.clone(),new St(t,e),new St(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new go(this.currentPoint.clone(),new St(t,e),new St(n,s),new St(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new vo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new ir(t,e,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},rr=class extends So{constructor(t){super(t),this.uuid=ci(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new So().fromJSON(s))}return this}};function O0(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=jd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=k0(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,d=l;for(let u=e;u<s;u+=e){let f=i[u],g=i[u+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Mo(r,o,e,a,l,c,0),o}function jd(i,t,e,n,s){let r;if(s===j0(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=rd(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=rd(o/n|0,i[o],i[o+1],r);return r&&or(r,r.next)&&(Eo(r),r=r.next),r}function gs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(or(e,e.next)||We(e.prev,e,e.next)===0)){if(Eo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Mo(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Y0(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?z0(i,n,s,r):B0(i)){t.push(l.i,i.i,c.i),Eo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=H0(gs(i),t),Mo(i,t,e,n,s,r,2)):o===2&&V0(i,t,e,n,s,r):Mo(gs(i),t,e,n,s,r,1);break}}}function B0(i){let t=i.prev,e=i,n=i.next;if(We(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&qr(s,a,r,l,o,c,g.x,g.y)&&We(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function z0(i,t,e,n){let s=i.prev,r=i,o=i.next;if(We(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),g=Math.min(h,d,u),S=Math.max(a,l,c),m=Math.max(h,d,u),p=dh(f,g,t,e,n),b=dh(S,m,t,e,n),R=i.prevZ,_=i.nextZ;for(;R&&R.z>=p&&_&&_.z<=b;){if(R.x>=f&&R.x<=S&&R.y>=g&&R.y<=m&&R!==s&&R!==o&&qr(a,h,l,d,c,u,R.x,R.y)&&We(R.prev,R,R.next)>=0||(R=R.prevZ,_.x>=f&&_.x<=S&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&qr(a,h,l,d,c,u,_.x,_.y)&&We(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;R&&R.z>=p;){if(R.x>=f&&R.x<=S&&R.y>=g&&R.y<=m&&R!==s&&R!==o&&qr(a,h,l,d,c,u,R.x,R.y)&&We(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;_&&_.z<=b;){if(_.x>=f&&_.x<=S&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&qr(a,h,l,d,c,u,_.x,_.y)&&We(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function H0(i,t){let e=i;do{let n=e.prev,s=e.next.next;!or(n,s)&&ef(n,e,e.next,s)&&bo(n,s)&&bo(s,n)&&(t.push(n.i,e.i,s.i),Eo(e),Eo(e.next),e=i=s),e=e.next}while(e!==i);return gs(e)}function V0(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&J0(o,a)){let l=nf(o,a);o=gs(o,o.next),l=gs(l,l.next),Mo(o,t,e,n,s,r,0),Mo(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function k0(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=jd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Z0(c))}s.sort(G0);for(let r=0;r<s.length;r++)e=W0(s[r],e);return e}function G0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function W0(i,t){let e=X0(i,t);if(!e)return t;let n=nf(e,i);return gs(n,n.next),gs(e,e.next)}function X0(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(or(i,e))return e;do{if(or(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&tf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);bo(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&q0(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function q0(i,t){return We(i.prev,i,t.prev)<0&&We(t.next,i,i.next)<0}function Y0(i,t,e,n){let s=i;do s.z===0&&(s.z=dh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,$0(s)}function $0(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function dh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Z0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function tf(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function qr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&tf(i,t,e,n,s,r,o,a)}function J0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!K0(i,t)&&(bo(i,t)&&bo(t,i)&&Q0(i,t)&&(We(i.prev,i,t.prev)||We(i,t.prev,t))||or(i,t)&&We(i.prev,i,i.next)>0&&We(t.prev,t,t.next)>0)}function We(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function or(i,t){return i.x===t.x&&i.y===t.y}function ef(i,t,e,n){let s=Ia(We(i,t,e)),r=Ia(We(i,t,n)),o=Ia(We(e,n,i)),a=Ia(We(e,n,t));return!!(s!==r&&o!==a||s===0&&Pa(i,e,t)||r===0&&Pa(i,n,t)||o===0&&Pa(e,i,n)||a===0&&Pa(e,t,n))}function Pa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ia(i){return i>0?1:i<0?-1:0}function K0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ef(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function bo(i,t){return We(i.prev,i,i.next)<0?We(i,t,i.next)>=0&&We(i,i.prev,t)>=0:We(i,t,i.prev)<0||We(i,i.next,t)<0}function Q0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function nf(i,t){let e=fh(i.i,i.x,i.y),n=fh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function rd(i,t,e,n){let s=fh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Eo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function fh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function j0(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var ph=class{static triangulate(t,e,n=2){return O0(t,e,n)}},ds=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];od(t),ad(n,t);let o=t.length;e.forEach(od);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,ad(n,e[l]);let a=ph.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function od(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ad(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var To=class i extends Ve{constructor(t=new rr([new St(.5,.5),new St(-.5,.5),new St(-.5,-.5),new St(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Se(s,3)),this.setAttribute("uv",new Se(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:tm,R,_=!1,T,w,I,y;if(p){R=p.getSpacedPoints(h),_=!0,u=!1;let st=p.isCatmullRomCurve3?p.closed:!1;T=p.computeFrenetFrames(h,st),w=new E,I=new E,y=new E}u||(m=0,f=0,g=0,S=0);let v=a.extractPoints(c),A=v.shape,L=v.holes;if(!ds.isClockWise(A)){A=A.reverse();for(let st=0,ft=L.length;st<ft;st++){let mt=L[st];ds.isClockWise(mt)&&(L[st]=mt.reverse())}}function W(st){let mt=10000000000000001e-36,pt=st[0];for(let bt=1;bt<=st.length;bt++){let Jt=bt%st.length,vt=st[Jt],te=vt.x-pt.x,oe=vt.y-pt.y,N=te*te+oe*oe,ge=Math.max(Math.abs(vt.x),Math.abs(vt.y),Math.abs(pt.x),Math.abs(pt.y)),ue=mt*ge*ge;if(N<=ue){st.splice(Jt,1),bt--;continue}pt=vt}}W(A),L.forEach(W);let F=L.length,G=A;for(let st=0;st<F;st++){let ft=L[st];A=A.concat(ft)}function j(st,ft,mt){return ft||le("ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(ft,mt)}let K=A.length;function ct(st,ft,mt){let pt,bt,Jt,vt=st.x-ft.x,te=st.y-ft.y,oe=mt.x-st.x,N=mt.y-st.y,ge=vt*vt+te*te,ue=vt*N-te*oe;if(Math.abs(ue)>Number.EPSILON){let C=Math.sqrt(ge),x=Math.sqrt(oe*oe+N*N),B=ft.x-te/C,Y=ft.y+vt/C,tt=mt.x-N/x,yt=mt.y+oe/x,Mt=((tt-B)*N-(yt-Y)*oe)/(vt*N-te*oe);pt=B+vt*Mt-st.x,bt=Y+te*Mt-st.y;let nt=pt*pt+bt*bt;if(nt<=2)return new St(pt,bt);Jt=Math.sqrt(nt/2)}else{let C=!1;vt>Number.EPSILON?oe>Number.EPSILON&&(C=!0):vt<-Number.EPSILON?oe<-Number.EPSILON&&(C=!0):Math.sign(te)===Math.sign(N)&&(C=!0),C?(pt=-te,bt=vt,Jt=Math.sqrt(ge)):(pt=vt,bt=te,Jt=Math.sqrt(ge/2))}return new St(pt/Jt,bt/Jt)}let U=[];for(let st=0,ft=G.length,mt=ft-1,pt=st+1;st<ft;st++,mt++,pt++)mt===ft&&(mt=0),pt===ft&&(pt=0),U[st]=ct(G[st],G[mt],G[pt]);let J=[],D,rt=U.concat();for(let st=0,ft=F;st<ft;st++){let mt=L[st];D=[];for(let pt=0,bt=mt.length,Jt=bt-1,vt=pt+1;pt<bt;pt++,Jt++,vt++)Jt===bt&&(Jt=0),vt===bt&&(vt=0),D[pt]=ct(mt[pt],mt[Jt],mt[vt]);J.push(D),rt=rt.concat(D)}let ut;if(m===0)ut=ds.triangulateShape(G,L);else{let st=[],ft=[];for(let mt=0;mt<m;mt++){let pt=mt/m,bt=f*Math.cos(pt*Math.PI/2),Jt=g*Math.sin(pt*Math.PI/2)+S;for(let vt=0,te=G.length;vt<te;vt++){let oe=j(G[vt],U[vt],Jt);At(oe.x,oe.y,-bt),pt===0&&st.push(oe)}for(let vt=0,te=F;vt<te;vt++){let oe=L[vt];D=J[vt];let N=[];for(let ge=0,ue=oe.length;ge<ue;ge++){let C=j(oe[ge],D[ge],Jt);At(C.x,C.y,-bt),pt===0&&N.push(C)}pt===0&&ft.push(N)}}ut=ds.triangulateShape(st,ft)}let Yt=ut.length,Kt=g+S;for(let st=0;st<K;st++){let ft=u?j(A[st],rt[st],Kt):A[st];_?(I.copy(T.normals[0]).multiplyScalar(ft.x),w.copy(T.binormals[0]).multiplyScalar(ft.y),y.copy(R[0]).add(I).add(w),At(y.x,y.y,y.z)):At(ft.x,ft.y,0)}for(let st=1;st<=h;st++)for(let ft=0;ft<K;ft++){let mt=u?j(A[ft],rt[ft],Kt):A[ft];_?(I.copy(T.normals[st]).multiplyScalar(mt.x),w.copy(T.binormals[st]).multiplyScalar(mt.y),y.copy(R[st]).add(I).add(w),At(y.x,y.y,y.z)):At(mt.x,mt.y,d/h*st)}for(let st=m-1;st>=0;st--){let ft=st/m,mt=f*Math.cos(ft*Math.PI/2),pt=g*Math.sin(ft*Math.PI/2)+S;for(let bt=0,Jt=G.length;bt<Jt;bt++){let vt=j(G[bt],U[bt],pt);At(vt.x,vt.y,d+mt)}for(let bt=0,Jt=L.length;bt<Jt;bt++){let vt=L[bt];D=J[bt];for(let te=0,oe=vt.length;te<oe;te++){let N=j(vt[te],D[te],pt);_?At(N.x,N.y+R[h-1].y,R[h-1].x+mt):At(N.x,N.y,d+mt)}}}_t(),X();function _t(){let st=s.length/3;if(u){let ft=0,mt=K*ft;for(let pt=0;pt<Yt;pt++){let bt=ut[pt];Xt(bt[2]+mt,bt[1]+mt,bt[0]+mt)}ft=h+m*2,mt=K*ft;for(let pt=0;pt<Yt;pt++){let bt=ut[pt];Xt(bt[0]+mt,bt[1]+mt,bt[2]+mt)}}else{for(let ft=0;ft<Yt;ft++){let mt=ut[ft];Xt(mt[2],mt[1],mt[0])}for(let ft=0;ft<Yt;ft++){let mt=ut[ft];Xt(mt[0]+K*h,mt[1]+K*h,mt[2]+K*h)}}n.addGroup(st,s.length/3-st,0)}function X(){let st=s.length/3,ft=0;et(G,ft),ft+=G.length;for(let mt=0,pt=L.length;mt<pt;mt++){let bt=L[mt];et(bt,ft),ft+=bt.length}n.addGroup(st,s.length/3-st,1)}function et(st,ft){let mt=st.length;for(;--mt>=0;){let pt=mt,bt=mt-1;bt<0&&(bt=st.length-1);for(let Jt=0,vt=h+m*2;Jt<vt;Jt++){let te=K*Jt,oe=K*(Jt+1),N=ft+pt+te,ge=ft+bt+te,ue=ft+bt+oe,C=ft+pt+oe;Dt(N,ge,ue,C)}}}function At(st,ft,mt){l.push(st),l.push(ft),l.push(mt)}function Xt(st,ft,mt){Zt(st),Zt(ft),Zt(mt);let pt=s.length/3,bt=b.generateTopUV(n,s,pt-3,pt-2,pt-1);Lt(bt[0]),Lt(bt[1]),Lt(bt[2])}function Dt(st,ft,mt,pt){Zt(st),Zt(ft),Zt(pt),Zt(ft),Zt(mt),Zt(pt);let bt=s.length/3,Jt=b.generateSideWallUV(n,s,bt-6,bt-3,bt-2,bt-1);Lt(Jt[0]),Lt(Jt[1]),Lt(Jt[3]),Lt(Jt[1]),Lt(Jt[2]),Lt(Jt[3])}function Zt(st){s.push(l[st*3+0]),s.push(l[st*3+1]),s.push(l[st*3+2])}function Lt(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return em(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new rl[s.type]().fromJSON(s)),new i(n,t.options)}},tm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new St(r,o),new St(a,l),new St(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],S=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new St(o,1-l),new St(c,1-d),new St(u,1-g),new St(S,1-p)]:[new St(a,1-l),new St(h,1-d),new St(f,1-g),new St(m,1-p)]}};function em(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var xs=class i extends el{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var je=class i extends Ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],S=[],m=[];for(let p=0;p<h;p++){let b=p*u-o;for(let R=0;R<c;R++){let _=R*d-r;g.push(_,-b,0),S.push(0,0,1),m.push(R/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let R=b+c*p,_=b+c*(p+1),T=b+1+c*(p+1),w=b+1+c*p;f.push(R,_,w),f.push(_,T,w)}this.setIndex(f),this.setAttribute("position",new Se(g,3)),this.setAttribute("normal",new Se(S,3)),this.setAttribute("uv",new Se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},wo=class i extends Ve{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=t,u=(e-t)/s,f=new E,g=new St;for(let S=0;S<=s;S++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let S=0;S<s;S++){let m=S*(n+1);for(let p=0;p<n;p++){let b=p+m,R=b,_=b+n+1,T=b+n+2,w=b+1;a.push(R,_,w),a.push(_,T,w)}}this.setIndex(a),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ke=class i extends Ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new E,u=new E,f=[],g=[],S=[],m=[];for(let p=0;p<=n;p++){let b=[],R=p/n,_=o+R*a,T=t*Math.cos(_),w=Math.sqrt(t*t-T*T),I=0;p===0&&o===0?I=.5/e:p===n&&l===Math.PI&&(I=-.5/e);for(let y=0;y<=e;y++){let v=y/e,A=s+v*r;d.x=-w*Math.cos(A),d.y=T,d.z=w*Math.sin(A),g.push(d.x,d.y,d.z),u.copy(d).normalize(),S.push(u.x,u.y,u.z),m.push(v+I,1-R),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){let R=h[p][b+1],_=h[p][b],T=h[p+1][b],w=h[p+1][b+1];(p!==0||o>0)&&f.push(R,_,w),(p!==n-1||l<Math.PI)&&f.push(_,T,w)}this.setIndex(f),this.setAttribute("position",new Se(g,3)),this.setAttribute("normal",new Se(S,3)),this.setAttribute("uv",new Se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var nn=class i extends Ve{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new E,f=new E,g=new E;for(let S=0;S<=n;S++){let m=o+S/n*a;for(let p=0;p<=s;p++){let b=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(b),f.y=(t+e*Math.cos(m))*Math.sin(b),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(b),u.y=t*Math.sin(b),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(S/n)}}for(let S=1;S<=n;S++)for(let m=1;m<=s;m++){let p=(s+1)*S+m-1,b=(s+1)*(S-1)+m-1,R=(s+1)*(S-1)+m,_=(s+1)*S+m;l.push(p,b,_),l.push(b,R,_)}this.setIndex(l),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(h,3)),this.setAttribute("uv",new Se(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Ao=class i extends Ve{constructor(t=new yo(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new E,l=new E,c=new St,h=new E,d=[],u=[],f=[],g=[];S(),this.setIndex(g),this.setAttribute("position",new Se(d,3)),this.setAttribute("normal",new Se(u,3)),this.setAttribute("uv",new Se(f,2));function S(){for(let R=0;R<e;R++)m(R);m(r===!1?e:0),b(),p()}function m(R){h=t.getPointAt(R/e,h);let _=o.normals[R],T=o.binormals[R];for(let w=0;w<=s;w++){let I=w/s*Math.PI*2,y=Math.sin(I),v=-Math.cos(I);l.x=v*_.x+y*T.x,l.y=v*_.y+y*T.y,l.z=v*_.z+y*T.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let R=1;R<=e;R++)for(let _=1;_<=s;_++){let T=(s+1)*(R-1)+(_-1),w=(s+1)*R+(_-1),I=(s+1)*R+_,y=(s+1)*(R-1)+_;g.push(T,w,y),g.push(w,I,y)}}function b(){for(let R=0;R<=e;R++)for(let _=0;_<=s;_++)c.x=R/e,c.y=_/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new rl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function vs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(ld(s))s.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ld(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function xn(i){let t={};for(let e=0;e<i.length;e++){let n=vs(i[e]);for(let s in n)t[s]=n[s]}return t}function ld(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function nm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Gh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Me.workingColorSpace}var sf={clone:vs,merge:xn},im=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xe=class extends Qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=im,this.fragmentShader=sm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vs(t.uniforms),this.uniformsGroups=nm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new jt().setHex(s.value);break;case"v2":this.uniforms[n].value=new St().fromArray(s.value);break;case"v3":this.uniforms[n].value=new E().fromArray(s.value);break;case"v4":this.uniforms[n].value=new He().fromArray(s.value);break;case"m3":this.uniforms[n].value=new de().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Pe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},al=class extends Xe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ro=class extends Qn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new jt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cc,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ll=class extends Qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},cl=class extends Qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Xs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function rh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var $i=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},hl=class extends $i{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lh,endingEnd:lh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ch:r=t,a=2*e-n;break;case hh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ch:o=t,l=2*n-e;break;case hh:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),S=g*g,m=S*g,p=-u*m+2*u*S-u*g,b=(1+u)*m+(-1.5-2*u)*S+(-.5+u)*g+1,R=(-1-f)*m+(1.5+f)*S+.5*g,_=f*m-f*S;for(let T=0;T!==a;++T)r[T]=p*o[h+T]+b*o[c+T]+R*o[l+T]+_*o[d+T];return r}},ul=class extends $i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},dl=class extends $i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},fl=class extends $i{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(s-e),S=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*S+o[l+m]*g;return r}let u=a*2,f=t-1;for(let g=0;g!==a;++g){let S=o[c+g],m=o[l+g],p=f*u+g*2,b=d[p],R=d[p+1],_=t*u+g*2,T=h[_],w=h[_+1],I=om(n,e,b,T,s);r[g]=rf(I,S,R,w,m)}return r}};function rf(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function rm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function om(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=rf(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=rm(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Dn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Xs(e,this.TimeBufferType),this.values=Xs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Xs(t.times,Array),values:Xs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),rh(t.settings)&&(n.settings={inTangents:Xs(t.settings.inTangents,Array),outTangents:Xs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ul(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new hl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new fl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Kr:e=this.InterpolantFactoryMethodDiscrete;break;case Wa:e=this.InterpolantFactoryMethodLinear;break;case Na:e=this.InterpolantFactoryMethodSmooth;break;case ah:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return re("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Kr;case this.InterpolantFactoryMethodLinear:return Wa;case this.InterpolantFactoryMethodSmooth:return Na;case this.InterpolantFactoryMethodBezier:return ah}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;rh(this.settings)&&(cd(this.settings.inTangents,t),cd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(le("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(le("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){le("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){le("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&$p(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){le("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Na,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let S=e[d+g];if(S!==e[u+g]||S!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,rh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function cd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Dn.prototype.ValueTypeName="";Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=Wa;var Zi=class extends Dn{constructor(t,e,n){super(t,e,n)}};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Kr;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var pl=class extends Dn{constructor(t,e,n,s){super(t,e,n,s)}};pl.prototype.ValueTypeName="color";var ml=class extends Dn{constructor(t,e,n,s){super(t,e,n,s)}};ml.prototype.ValueTypeName="number";var gl=class extends $i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)di.slerpFlat(r,0,o,c-a,o,c,l);return r}},Co=class extends Dn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new gl(this.times,this.values,this.getValueSize(),t)}};Co.prototype.ValueTypeName="quaternion";Co.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends Dn{constructor(t,e,n){super(t,e,n)}};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=Kr;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var xl=class extends Dn{constructor(t,e,n,s){super(t,e,n,s)}};xl.prototype.ValueTypeName="vector";var _l=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},of=new _l,yl=class{constructor(t){this.manager=t!==void 0?t:of,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};yl.DEFAULT_MATERIAL_NAME="__DEFAULT";var ar=class extends Je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Po=class extends ar{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},oh=new Pe,hd=new E,ud=new E,Io=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nr,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;hd.setFromMatrixPosition(t.matrixWorld),e.position.copy(hd),ud.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ud),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){oh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(oh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Js||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(oh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},La=new E,Da=new di,ai=new E,Lo=class extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(La,Da,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(La,Da,ai.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(La,Da,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(La,Da,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Gi=new E,dd=new St,fd=new St,dn=class extends Lo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Yr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(Yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z)}getViewSize(t,e){return this.getViewBounds(t,dd,fd),e.subVectors(fd,dd)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Yr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var mh=class extends Io{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0}},Tn=class extends ar{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new mh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},lr=class extends Lo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},gh=class extends Io{constructor(){super(new lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cr=class extends ar{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new gh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var qs=-90,Ys=1,vl=class extends Je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new dn(qs,Ys,t,e);s.layers=this.layers,this.add(s);let r=new dn(qs,Ys,t,e);r.layers=this.layers,this.add(r);let o=new dn(qs,Ys,t,e);o.layers=this.layers,this.add(o);let a=new dn(qs,Ys,t,e);a.layers=this.layers,this.add(a);let l=new dn(qs,Ys,t,e);l.layers=this.layers,this.add(l);let c=new dn(qs,Ys,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Js)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Sl=class extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Wh="\\[\\]\\.:\\/",am=new RegExp("["+Wh+"]","g"),Xh="[^"+Wh+"]",lm="[^"+Wh.replace("\\.","")+"]",cm=/((?:WC+[\/:])*)/.source.replace("WC",Xh),hm=/(WCOD+)?/.source.replace("WCOD",lm),um=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xh),dm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xh),fm=new RegExp("^"+cm+hm+um+dm+"$"),pm=["material","materials","bones","map"],xh=class{constructor(t,e,n){let s=n||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(am,"")}static parseTrackName(t){let e=fm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);pm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){re("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;le("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=xh;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Gy=new Float32Array(1);var _h=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function qh(i,t,e,n){let s=mm(n);switch(e){case Oh:return i*t;case Cl:return i*t/s.components*s.byteLength;case Pl:return i*t/s.components*s.byteLength;case es:return i*t*2/s.components*s.byteLength;case Il:return i*t*2/s.components*s.byteLength;case Bh:return i*t*3/s.components*s.byteLength;case Cn:return i*t*4/s.components*s.byteLength;case Ll:return i*t*4/s.components*s.byteLength;case Fo:case Oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Bo:case zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nl:case Fl:return Math.max(i,16)*Math.max(t,8)/4;case Dl:case Ul:return Math.max(i,8)*Math.max(t,8)/2;case Ol:case Bl:case Hl:case Vl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zl:case Ho:case kl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Gl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Xl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ql:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case $l:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Jl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Kl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case jl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case tc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ec:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case nc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ic:case sc:case rc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case oc:case ac:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Vo:case lc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mm(i){switch(i){case Rn:case Dh:return{byteLength:1,components:1};case ur:case Nh:case ti:return{byteLength:2,components:1};case Al:case Rl:return{byteLength:2,components:4};case jn:case wl:case Hn:return{byteLength:4,components:1};case Uh:case Fh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ml}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ml);function Rf(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function gm(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],S=d[f];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++u,d[u]=S)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let S=d[f];i.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var xm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_m=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ym=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Em=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,wm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Am=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Pm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Im=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Hm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,km=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Gm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ym="gl_FragColor = linearToOutputTexel( gl_FragColor );",$m=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Jm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Km=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ng=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ig=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,og=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ag=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,cg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,hg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ug=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_g=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,vg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Eg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ag=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ig=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ng=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ug=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Hg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Yg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$g=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,tx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ix=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ox=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ax=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ux=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_x=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ex=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Tx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Px=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ix=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Lx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ux=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ox=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$x=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_e={alphahash_fragment:xm,alphahash_pars_fragment:_m,alphamap_fragment:ym,alphamap_pars_fragment:vm,alphatest_fragment:Sm,alphatest_pars_fragment:Mm,aomap_fragment:bm,aomap_pars_fragment:Em,batching_pars_vertex:Tm,batching_vertex:wm,begin_vertex:Am,beginnormal_vertex:Rm,bsdfs:Cm,iridescence_fragment:Pm,bumpmap_pars_fragment:Im,clipping_planes_fragment:Lm,clipping_planes_pars_fragment:Dm,clipping_planes_pars_vertex:Nm,clipping_planes_vertex:Um,color_fragment:Fm,color_pars_fragment:Om,color_pars_vertex:Bm,color_vertex:zm,common:Hm,cube_uv_reflection_fragment:Vm,defaultnormal_vertex:km,displacementmap_pars_vertex:Gm,displacementmap_vertex:Wm,emissivemap_fragment:Xm,emissivemap_pars_fragment:qm,colorspace_fragment:Ym,colorspace_pars_fragment:$m,envmap_fragment:Zm,envmap_common_pars_fragment:Jm,envmap_pars_fragment:Km,envmap_pars_vertex:Qm,envmap_physical_pars_fragment:cg,envmap_vertex:jm,fog_vertex:tg,fog_pars_vertex:eg,fog_fragment:ng,fog_pars_fragment:ig,gradientmap_pars_fragment:sg,lightmap_pars_fragment:rg,lights_lambert_fragment:og,lights_lambert_pars_fragment:ag,lights_pars_begin:lg,lights_toon_fragment:hg,lights_toon_pars_fragment:ug,lights_phong_fragment:dg,lights_phong_pars_fragment:fg,lights_physical_fragment:pg,lights_physical_pars_fragment:mg,lights_fragment_begin:gg,lights_fragment_maps:xg,lights_fragment_end:_g,lightprobes_pars_fragment:yg,logdepthbuf_fragment:vg,logdepthbuf_pars_fragment:Sg,logdepthbuf_pars_vertex:Mg,logdepthbuf_vertex:bg,map_fragment:Eg,map_pars_fragment:Tg,map_particle_fragment:wg,map_particle_pars_fragment:Ag,metalnessmap_fragment:Rg,metalnessmap_pars_fragment:Cg,morphinstance_vertex:Pg,morphcolor_vertex:Ig,morphnormal_vertex:Lg,morphtarget_pars_vertex:Dg,morphtarget_vertex:Ng,normal_fragment_begin:Ug,normal_fragment_maps:Fg,normal_pars_fragment:Og,normal_pars_vertex:Bg,normal_vertex:zg,normalmap_pars_fragment:Hg,clearcoat_normal_fragment_begin:Vg,clearcoat_normal_fragment_maps:kg,clearcoat_pars_fragment:Gg,iridescence_pars_fragment:Wg,opaque_fragment:Xg,packing:qg,premultiplied_alpha_fragment:Yg,project_vertex:$g,dithering_fragment:Zg,dithering_pars_fragment:Jg,roughnessmap_fragment:Kg,roughnessmap_pars_fragment:Qg,shadowmap_pars_fragment:jg,shadowmap_pars_vertex:tx,shadowmap_vertex:ex,shadowmask_pars_fragment:nx,skinbase_vertex:ix,skinning_pars_vertex:sx,skinning_vertex:rx,skinnormal_vertex:ox,specularmap_fragment:ax,specularmap_pars_fragment:lx,tonemapping_fragment:cx,tonemapping_pars_fragment:hx,transmission_fragment:ux,transmission_pars_fragment:dx,uv_pars_fragment:fx,uv_pars_vertex:px,uv_vertex:mx,worldpos_vertex:gx,background_vert:xx,background_frag:_x,backgroundCube_vert:yx,backgroundCube_frag:vx,cube_vert:Sx,cube_frag:Mx,depth_vert:bx,depth_frag:Ex,distance_vert:Tx,distance_frag:wx,equirect_vert:Ax,equirect_frag:Rx,linedashed_vert:Cx,linedashed_frag:Px,meshbasic_vert:Ix,meshbasic_frag:Lx,meshlambert_vert:Dx,meshlambert_frag:Nx,meshmatcap_vert:Ux,meshmatcap_frag:Fx,meshnormal_vert:Ox,meshnormal_frag:Bx,meshphong_vert:zx,meshphong_frag:Hx,meshphysical_vert:Vx,meshphysical_frag:kx,meshtoon_vert:Gx,meshtoon_frag:Wx,points_vert:Xx,points_frag:qx,shadow_vert:Yx,shadow_frag:$x,sprite_vert:Zx,sprite_frag:Jx},Ft={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new E},probesMax:{value:new E},probesResolution:{value:new E}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},_i={basic:{uniforms:xn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:xn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new jt(0)},envMapIntensity:{value:1}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:xn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:xn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:xn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new jt(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:xn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:xn([Ft.points,Ft.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:xn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:xn([Ft.common,Ft.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:xn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:xn([Ft.sprite,Ft.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distance:{uniforms:xn([Ft.common,Ft.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distance_vert,fragmentShader:_e.distance_frag},shadow:{uniforms:xn([Ft.lights,Ft.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};_i.physical={uniforms:xn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};var dc={r:0,b:0,g:0},Kx=new Pe,Cf=new de;Cf.set(-1,0,0,0,1,0,0,0,1);function Qx(i,t,e,n,s,r){let o=new jt(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(b){let R=b.isScene===!0?b.background:null;if(R&&R.isTexture){let _=b.backgroundBlurriness>0;R=t.get(R,_)}return R}function g(b){let R=!1,_=f(b);_===null?m(o,a):_&&_.isColor&&(m(_,1),R=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(b,R){let _=f(R);_&&(_.isCubeTexture||_.mapping===No)?(c===void 0&&(c=new It(new we(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:vs(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Kx.makeRotationFromEuler(R.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Cf),c.material.toneMapped=Me.getTransfer(_.colorSpace)!==Ce,(h!==_||d!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new It(new je(2,2),new Xe({name:"BackgroundMaterial",uniforms:vs(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=Me.getTransfer(_.colorSpace)!==Ce,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,R){b.getRGB(dc,Gh(i)),e.buffers.color.setClear(dc.r,dc.g,dc.b,R,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,R=1){o.set(b),a=R,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,m(o,a)},render:g,addToRenderList:S,dispose:p}}function jx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(L,O,W,F,G){let j=!1,K=d(L,F,W,O);r!==K&&(r=K,c(r.object)),j=f(L,F,W,G),j&&g(L,F,W,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,_(L,O,W,F),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function d(L,O,W,F){let G=F.wireframe===!0,j=n[O.id];j===void 0&&(j={},n[O.id]=j);let K=L.isInstancedMesh===!0?L.id:0,ct=j[K];ct===void 0&&(ct={},j[K]=ct);let U=ct[W.id];U===void 0&&(U={},ct[W.id]=U);let J=U[G];return J===void 0&&(J=u(l()),U[G]=J),J}function u(L){let O=[],W=[],F=[];for(let G=0;G<e;G++)O[G]=0,W[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:W,attributeDivisors:F,object:L,attributes:{},index:null}}function f(L,O,W,F){let G=r.attributes,j=O.attributes,K=0,ct=W.getAttributes();for(let U in ct)if(ct[U].location>=0){let D=G[U],rt=j[U];if(rt===void 0&&(U==="instanceMatrix"&&L.instanceMatrix&&(rt=L.instanceMatrix),U==="instanceColor"&&L.instanceColor&&(rt=L.instanceColor)),D===void 0||D.attribute!==rt||rt&&D.data!==rt.data)return!0;K++}return r.attributesNum!==K||r.index!==F}function g(L,O,W,F){let G={},j=O.attributes,K=0,ct=W.getAttributes();for(let U in ct)if(ct[U].location>=0){let D=j[U];D===void 0&&(U==="instanceMatrix"&&L.instanceMatrix&&(D=L.instanceMatrix),U==="instanceColor"&&L.instanceColor&&(D=L.instanceColor));let rt={};rt.attribute=D,D&&D.data&&(rt.data=D.data),G[U]=rt,K++}r.attributes=G,r.attributesNum=K,r.index=F}function S(){let L=r.newAttributes;for(let O=0,W=L.length;O<W;O++)L[O]=0}function m(L){p(L,0)}function p(L,O){let W=r.newAttributes,F=r.enabledAttributes,G=r.attributeDivisors;W[L]=1,F[L]===0&&(i.enableVertexAttribArray(L),F[L]=1),G[L]!==O&&(i.vertexAttribDivisor(L,O),G[L]=O)}function b(){let L=r.newAttributes,O=r.enabledAttributes;for(let W=0,F=O.length;W<F;W++)O[W]!==L[W]&&(i.disableVertexAttribArray(W),O[W]=0)}function R(L,O,W,F,G,j,K){K===!0?i.vertexAttribIPointer(L,O,W,G,j):i.vertexAttribPointer(L,O,W,F,G,j)}function _(L,O,W,F){S();let G=F.attributes,j=W.getAttributes(),K=O.defaultAttributeValues;for(let ct in j){let U=j[ct];if(U.location>=0){let J=G[ct];if(J===void 0&&(ct==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),ct==="instanceColor"&&L.instanceColor&&(J=L.instanceColor)),J!==void 0){let D=J.normalized,rt=J.itemSize,ut=t.get(J);if(ut===void 0)continue;let Yt=ut.buffer,Kt=ut.type,_t=ut.bytesPerElement,X=Kt===i.INT||Kt===i.UNSIGNED_INT||J.gpuType===wl;if(J.isInterleavedBufferAttribute){let et=J.data,At=et.stride,Xt=J.offset;if(et.isInstancedInterleavedBuffer){for(let Dt=0;Dt<U.locationSize;Dt++)p(U.location+Dt,et.meshPerAttribute);L.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Dt=0;Dt<U.locationSize;Dt++)m(U.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let Dt=0;Dt<U.locationSize;Dt++)R(U.location+Dt,rt/U.locationSize,Kt,D,At*_t,(Xt+rt/U.locationSize*Dt)*_t,X)}else{if(J.isInstancedBufferAttribute){for(let et=0;et<U.locationSize;et++)p(U.location+et,J.meshPerAttribute);L.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let et=0;et<U.locationSize;et++)m(U.location+et);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let et=0;et<U.locationSize;et++)R(U.location+et,rt/U.locationSize,Kt,D,rt*_t,rt/U.locationSize*et*_t,X)}}else if(K!==void 0){let D=K[ct];if(D!==void 0)switch(D.length){case 2:i.vertexAttrib2fv(U.location,D);break;case 3:i.vertexAttrib3fv(U.location,D);break;case 4:i.vertexAttrib4fv(U.location,D);break;default:i.vertexAttrib1fv(U.location,D)}}}}b()}function T(){v();for(let L in n){let O=n[L];for(let W in O){let F=O[W];for(let G in F){let j=F[G];for(let K in j)h(j[K].object),delete j[K];delete F[G]}}delete n[L]}}function w(L){if(n[L.id]===void 0)return;let O=n[L.id];for(let W in O){let F=O[W];for(let G in F){let j=F[G];for(let K in j)h(j[K].object),delete j[K];delete F[G]}}delete n[L.id]}function I(L){for(let O in n){let W=n[O];for(let F in W){let G=W[F];if(G[L.id]===void 0)continue;let j=G[L.id];for(let K in j)h(j[K].object),delete j[K];delete G[L.id]}}}function y(L){for(let O in n){let W=n[O],F=L.isInstancedMesh===!0?L.id:0,G=W[F];if(G!==void 0){for(let j in G){let K=G[j];for(let ct in K)h(K[ct].object),delete K[ct];delete G[j]}delete W[F],Object.keys(W).length===0&&delete n[O]}}}function v(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:v,resetDefaultState:A,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:I,initAttributes:S,enableAttribute:m,disableUnusedAttributes:b}}function t_(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function e_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==Cn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let y=I===ti&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Rn&&I!==Hn&&!y&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(re("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:R,maxFragmentUniforms:_,maxSamples:T,samples:w}}function n_(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Zn,a=new de,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,R=b*4,_=p.clippingState||null;l.value=_,_=h(g,u,R,f);for(let T=0;T!==R;++T)_[T]=e[T];p.clippingState=_,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let S=d!==null?d.length:0,m=null;if(S!==0){if(m=l.value,g!==!0||m===null){let p=f+S*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let R=0,_=f;R!==S;++R,_+=4)o.copy(d[R]).applyMatrix4(b,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}var mr=4,i_=6,s_=20,r_=256,ko=new lr,af=new jt,Yh=null,$h=0,Zh=0,Jh=!1,o_=new E,Ss=new E,pc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=o_}=r;Yh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Yh,$h,Zh),this._renderer.xr.enabled=Jh,t.scissorTest=!1,pr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:ti,format:Cn,colorSpace:Qr,depthBuffer:!1},s=lf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=a_(r)),this._blurMaterial=c_(r,t,e),this._ggxMaterial=l_(r,t,e)}return s}_compileMaterial(t){let e=new It(new Ve,t);this._renderer.compile(e,ko)}_sceneToCubeUV(t,e,n,s,r){let l=new dn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(af),d.toneMapping=Nn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new It(new we,new Ie({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,m=S.material,p=!1,b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,p=!0):(m.color.copy(af),p=!0);for(let R=0;R<6;R++){let _=R%3;_===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[R],r.y,r.z)):_===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[R]));let T=this._cubeSize;pr(s,_*T,R>2?T:0,T,T),d.setRenderTarget(s),p&&d.render(S,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Qi||t.mapping===ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;pr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ko)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,S=this._sizeLods[n],m=3*S*(n>g-mr?n-g+mr:0),p=4*(this._cubeSize-S);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,pr(r,m,p,3*S,2*S),s.setRenderTarget(r),s.render(a,ko),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,pr(t,m,p,3*S,2*S),s.setRenderTarget(t),s.render(a,ko)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-mr?s-this._lodMax+mr:0),u=4*(this._cubeSize-h);pr(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,ko)}};function a_(i){let t=[],e=[],n=i,s=i-mr+1+i_;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),S=new Float32Array(f*u*d);for(let p=0;p<d;p++){let b=p%3*2/3-1,R=p>2?0:-1,_=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];g.set(_,f*u*p);for(let T=0;T<u;T++){let w=h[T*2]*2-1,I=h[T*2+1]*2-1;p===0?Ss.set(1,I,w):p===1?Ss.set(-w,1,-I):p===2?Ss.set(-w,I,1):p===3?Ss.set(-1,I,-w):p===4?Ss.set(-w,-1,I):Ss.set(w,I,-1),Ss.toArray(S,(p*u+T)*f)}}let m=new Ve;m.setAttribute("position",new Oe(g,f)),m.setAttribute("outputDirection",new Oe(S,f)),e.push(new It(m,null)),n>mr&&n--}return{lodMeshes:e,sizeLods:t}}function lf(i,t,e){let n=new An(i,t,e);return n.texture.mapping=No,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function l_(i,t,e){return new Xe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:r_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function c_(i,t,e){return new Xe({name:"SphericalGaussianBlur",defines:{SAMPLES:s_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:xc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function cf(){return new Xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function hf(){return new Xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function xc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var mc=class extends An{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new po(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new we(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:mi});r.uniforms.tEquirect.value=e;let o=new It(s,r),a=e.minFilter;return e.minFilter===ji&&(e.minFilter=fn),new vl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function h_(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===bl||f===El)if(t.has(u)){let g=t.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let S=new mc(g.height);return S.fromEquirectangularTexture(i,u),t.set(u,S),u.addEventListener("dispose",c),a(S.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,g=f===bl||f===El,S=f===Qi||f===ys;if(g||S){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new pc(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let b=u.image;return g&&b&&b.height>0||S&&b&&l(b)?(n===null&&(n=new pc(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===bl?u.mapping=Qi:f===El&&(u.mapping=ys),u}function l(u){let f=0,g=6;for(let S=0;S<g;S++)u[S]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function u_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&fs("WebGLRenderer: "+n+" extension not supported."),s}}}function d_(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,S=0;if(g===void 0)return;if(f!==null){let b=f.array;S=f.version;for(let R=0,_=b.length;R<_;R+=3){let T=b[R+0],w=b[R+1],I=b[R+2];u.push(T,w,w,I,I,T)}}else{let b=g.array;S=g.version;for(let R=0,_=b.length/3-1;R<_;R+=3){let T=R+0,w=R+1,I=R+2;u.push(T,w,w,I,I,T)}}let m=new(g.count>=65535?ao:oo)(u,1);m.version=S;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function f_(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let S=0;for(let m=0;m<f;m++)S+=u[m];e.update(S,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function p_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:le("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function m_(i,t,e){let n=new WeakMap,s=new He;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let v=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",v)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],R=0;f===!0&&(R=1),g===!0&&(R=2),S===!0&&(R=3);let _=a.attributes.position.count*R,T=1;_>t.maxTextureSize&&(T=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let w=new Float32Array(_*T*4*d),I=new no(w,_,T,d);I.type=Hn,I.needsUpdate=!0;let y=R*4;for(let A=0;A<d;A++){let L=m[A],O=p[A],W=b[A],F=_*T*4*A;for(let G=0;G<L.count;G++){let j=G*y;f===!0&&(s.fromBufferAttribute(L,G),w[F+j+0]=s.x,w[F+j+1]=s.y,w[F+j+2]=s.z,w[F+j+3]=0),g===!0&&(s.fromBufferAttribute(O,G),w[F+j+4]=s.x,w[F+j+5]=s.y,w[F+j+6]=s.z,w[F+j+7]=0),S===!0&&(s.fromBufferAttribute(W,G),w[F+j+8]=s.x,w[F+j+9]=s.y,w[F+j+10]=s.z,w[F+j+11]=W.itemSize===4?s.w:1)}}u={count:d,texture:I,size:new St(_,T)},n.set(a,u),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let S=0;S<c.length;S++)f+=c[S];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function g_(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var x_={[Th]:"LINEAR_TONE_MAPPING",[wh]:"REINHARD_TONE_MAPPING",[Ah]:"CINEON_TONE_MAPPING",[Rh]:"ACES_FILMIC_TONE_MAPPING",[Ph]:"AGX_TONE_MAPPING",[Ih]:"NEUTRAL_TONE_MAPPING",[Ch]:"CUSTOM_TONE_MAPPING"};function __(i,t,e,n,s,r){let o=new An(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ve;c.setAttribute("position",new Se([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Se([0,2,0,0,2,0],2));let h=new al({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new It(c,h),u=new lr(-1,1,1,-1,0,1),f=null,g=null,S=!1,m,p=null,b=[],R=!1;this.setSize=function(_,T){o.setSize(_,T),a!==null&&a.setSize(_,T),l!==null&&l.setSize(_,T);for(let w=0;w<b.length;w++){let I=b[w];I.setSize&&I.setSize(_,T)}},this.setEffects=function(_){b=_,R=b.length>0&&b[0].isRenderPass===!0;let T=o.width,w=o.height;b.length>0&&a===null&&(a=new An(T,w,{type:ti,depthBuffer:!1,stencilBuffer:!1}),l=new An(T,w,{type:ti,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<b.length;I++){let y=b[I];y.setSize&&y.setSize(T,w)}},this.begin=function(_,T){if(S||_.toneMapping===Nn&&b.length===0)return!1;if(p=T,T!==null){let w=T.width,I=T.height;(o.width!==w||o.height!==I)&&this.setSize(w,I)}return R===!1&&_.setRenderTarget(o),m=_.toneMapping,_.toneMapping=Nn,!0},this.hasRenderPass=function(){return R},this.end=function(_,T){_.toneMapping=m,S=!0;let w=o,I=a;for(let y=0;y<b.length;y++){let v=b[y];v.enabled!==!1&&(v.render(_,I,w,T),v.needsSwap!==!1&&(w=I,I=I===a?l:a))}if(f!==_.outputColorSpace||g!==_.toneMapping){f=_.outputColorSpace,g=_.toneMapping,h.defines={},Me.getTransfer(f)===Ce&&(h.defines.SRGB_TRANSFER="");let y=x_[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,_.setRenderTarget(p),_.render(d,u),p=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Pf=new Mn,jh=new Yi(1,1),If=new no,Lf=new Ya,Df=new po,uf=[],df=[],ff=new Float32Array(16),pf=new Float32Array(9),mf=new Float32Array(4);function xr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=uf[s];if(r===void 0&&(r=new Float32Array(s),uf[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function rn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function on(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function _c(i,t){let e=df[t];e===void 0&&(e=new Int32Array(t),df[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function y_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function v_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2fv(this.addr,t),on(e,t)}}function S_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(rn(e,t))return;i.uniform3fv(this.addr,t),on(e,t)}}function M_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4fv(this.addr,t),on(e,t)}}function b_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),on(e,t)}else{if(rn(e,n))return;mf.set(n),i.uniformMatrix2fv(this.addr,!1,mf),on(e,n)}}function E_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),on(e,t)}else{if(rn(e,n))return;pf.set(n),i.uniformMatrix3fv(this.addr,!1,pf),on(e,n)}}function T_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),on(e,t)}else{if(rn(e,n))return;ff.set(n),i.uniformMatrix4fv(this.addr,!1,ff),on(e,n)}}function w_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function A_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2iv(this.addr,t),on(e,t)}}function R_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;i.uniform3iv(this.addr,t),on(e,t)}}function C_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4iv(this.addr,t),on(e,t)}}function P_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function I_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2uiv(this.addr,t),on(e,t)}}function L_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;i.uniform3uiv(this.addr,t),on(e,t)}}function D_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4uiv(this.addr,t),on(e,t)}}function N_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(jh.compareFunction=e.isReversedDepthBuffer()?uc:hc,r=jh):r=Pf,e.setTexture2D(t||r,s)}function U_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Lf,s)}function F_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Df,s)}function O_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||If,s)}function B_(i){switch(i){case 5126:return y_;case 35664:return v_;case 35665:return S_;case 35666:return M_;case 35674:return b_;case 35675:return E_;case 35676:return T_;case 5124:case 35670:return w_;case 35667:case 35671:return A_;case 35668:case 35672:return R_;case 35669:case 35673:return C_;case 5125:return P_;case 36294:return I_;case 36295:return L_;case 36296:return D_;case 35678:case 36198:case 36298:case 36306:case 35682:return N_;case 35679:case 36299:case 36307:return U_;case 35680:case 36300:case 36308:case 36293:return F_;case 36289:case 36303:case 36311:case 36292:return O_}}function z_(i,t){i.uniform1fv(this.addr,t)}function H_(i,t){let e=xr(t,this.size,2);i.uniform2fv(this.addr,e)}function V_(i,t){let e=xr(t,this.size,3);i.uniform3fv(this.addr,e)}function k_(i,t){let e=xr(t,this.size,4);i.uniform4fv(this.addr,e)}function G_(i,t){let e=xr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function W_(i,t){let e=xr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function X_(i,t){let e=xr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function q_(i,t){i.uniform1iv(this.addr,t)}function Y_(i,t){i.uniform2iv(this.addr,t)}function $_(i,t){i.uniform3iv(this.addr,t)}function Z_(i,t){i.uniform4iv(this.addr,t)}function J_(i,t){i.uniform1uiv(this.addr,t)}function K_(i,t){i.uniform2uiv(this.addr,t)}function Q_(i,t){i.uniform3uiv(this.addr,t)}function j_(i,t){i.uniform4uiv(this.addr,t)}function t1(i,t,e){let n=this.cache,s=t.length,r=_c(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=jh:o=Pf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function e1(i,t,e){let n=this.cache,s=t.length,r=_c(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Lf,r[o])}function n1(i,t,e){let n=this.cache,s=t.length,r=_c(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Df,r[o])}function i1(i,t,e){let n=this.cache,s=t.length,r=_c(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||If,r[o])}function s1(i){switch(i){case 5126:return z_;case 35664:return H_;case 35665:return V_;case 35666:return k_;case 35674:return G_;case 35675:return W_;case 35676:return X_;case 5124:case 35670:return q_;case 35667:case 35671:return Y_;case 35668:case 35672:return $_;case 35669:case 35673:return Z_;case 5125:return J_;case 36294:return K_;case 36295:return Q_;case 36296:return j_;case 35678:case 36198:case 36298:case 36306:case 35682:return t1;case 35679:case 36299:case 36307:return e1;case 35680:case 36300:case 36308:case 36293:return n1;case 36289:case 36303:case 36311:case 36292:return i1}}var tu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=B_(e.type)}},eu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=s1(e.type)}},nu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Kh=/(\w+)(\])?(\[|\.)?/g;function gf(i,t){i.seq.push(t),i.map[t.id]=t}function r1(i,t,e){let n=i.name,s=n.length;for(Kh.lastIndex=0;;){let r=Kh.exec(n),o=Kh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){gf(e,c===void 0?new tu(a,i,t):new eu(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new nu(a),gf(e,d)),e=d}}}var gr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);r1(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function xf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var o1=37297,a1=0;function l1(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var _f=new de;function c1(i){Me._getMatrix(_f,Me.workingColorSpace,i);let t=`mat3( ${_f.elements.map(e=>e.toFixed(4))} )`;switch(Me.getTransfer(i)){case jr:return[t,"LinearTransferOETF"];case Ce:return[t,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function yf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+l1(i.getShaderSource(t),a)}else return r}function h1(i,t){let e=c1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var u1={[Th]:"Linear",[wh]:"Reinhard",[Ah]:"Cineon",[Rh]:"ACESFilmic",[Ph]:"AgX",[Ih]:"Neutral",[Ch]:"Custom"};function d1(i,t){let e=u1[t];return e===void 0?(re("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var fc=new E;function f1(){Me.getLuminanceCoefficients(fc);let i=fc.x.toFixed(4),t=fc.y.toFixed(4),e=fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function m1(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function g1(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Wo(i){return i!==""}function vf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var x1=/^[ \t]*#include +<([\w\d./]+)>/gm;function iu(i){return i.replace(x1,y1)}var _1=new Map;function y1(i,t){let e=_e[t];if(e===void 0){let n=_1.get(t);if(n!==void 0)e=_e[n],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return iu(e)}var v1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mf(i){return i.replace(v1,S1)}function S1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bf(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var M1={[Do]:"SHADOWMAP_TYPE_PCF",[hr]:"SHADOWMAP_TYPE_VSM"};function b1(i){return M1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var E1={[Qi]:"ENVMAP_TYPE_CUBE",[ys]:"ENVMAP_TYPE_CUBE",[No]:"ENVMAP_TYPE_CUBE_UV"};function T1(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":E1[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var w1={[ys]:"ENVMAP_MODE_REFRACTION"};function A1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":w1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var R1={[Eh]:"ENVMAP_BLENDING_MULTIPLY",[Ud]:"ENVMAP_BLENDING_MIX",[Fd]:"ENVMAP_BLENDING_ADD"};function C1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":R1[i.combine]||"ENVMAP_BLENDING_NONE"}function P1(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function I1(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=b1(e),c=T1(e),h=A1(e),d=C1(e),u=P1(e),f=p1(e),g=m1(r),S=s.createProgram(),m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wo).join(`
`),p.length>0&&(p+=`
`)):(m=[bf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),p=[bf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?_e.tonemapping_pars_fragment:"",e.toneMapping!==Nn?d1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,h1("linearToOutputTexel",e.outputColorSpace),f1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wo).join(`
`)),o=iu(o),o=vf(o,e),o=Sf(o,e),a=iu(a),a=vf(a,e),a=Sf(a,e),o=Mf(o),a=Mf(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let R=b+m+o,_=b+p+a,T=xf(s,s.VERTEX_SHADER,R),w=xf(s,s.FRAGMENT_SHADER,_);s.attachShader(S,T),s.attachShader(S,w),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function I(L){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(S)||"",W=s.getShaderInfoLog(T)||"",F=s.getShaderInfoLog(w)||"",G=O.trim(),j=W.trim(),K=F.trim(),ct=!0,U=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(ct=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,T,w);else{let J=yf(s,T,"vertex"),D=yf(s,w,"fragment");le("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+J+`
`+D)}else G!==""?re("WebGLProgram: Program Info Log:",G):(j===""||K==="")&&(U=!1);U&&(L.diagnostics={runnable:ct,programLog:G,vertexShader:{log:j,prefix:m},fragmentShader:{log:K,prefix:p}})}s.deleteShader(T),s.deleteShader(w),y=new gr(s,S),v=g1(s,S)}let y;this.getUniforms=function(){return y===void 0&&I(this),y};let v;this.getAttributes=function(){return v===void 0&&I(this),v};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(S,o1)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=a1++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=T,this.fragmentShader=w,this}var L1=0,su=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ru(t),e.set(t,n)),n}},ru=class{constructor(t){this.id=L1++,this.code=t,this.usedTimes=0}};function D1(i){return i===es||i===Ho||i===Vo}function N1(i,t,e,n,s,r){let o=new io,a=new su,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function S(y,v,A,L,O,W){let F=L.fog,G=O.geometry,j=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,K=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,ct=t.get(y.envMap||j,K),U=ct&&ct.mapping===No?ct.image.height:null,J=f[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&re("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let D=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,rt=D!==void 0?D.length:0,ut=0;G.morphAttributes.position!==void 0&&(ut=1),G.morphAttributes.normal!==void 0&&(ut=2),G.morphAttributes.color!==void 0&&(ut=3);let Yt,Kt,_t,X;if(J){let Tt=_i[J];Yt=Tt.vertexShader,Kt=Tt.fragmentShader}else{Yt=y.vertexShader,Kt=y.fragmentShader;let Tt=a.getVertexShaderStage(y),ie=a.getFragmentShaderStage(y);a.update(y,Tt,ie),_t=Tt.id,X=ie.id}let et=i.getRenderTarget(),At=i.state.buffers.depth.getReversed(),Xt=O.isInstancedMesh===!0,Dt=O.isBatchedMesh===!0,Zt=!!y.map,Lt=!!y.matcap,st=!!ct,ft=!!y.aoMap,mt=!!y.lightMap,pt=!!y.bumpMap&&y.wireframe===!1,bt=!!y.normalMap,Jt=!!y.displacementMap,vt=!!y.emissiveMap,te=!!y.metalnessMap,oe=!!y.roughnessMap,N=y.anisotropy>0,ge=y.clearcoat>0,ue=y.dispersion>0,C=y.retroreflectivity>0,x=y.iridescence>0,B=y.sheen>0,Y=y.transmission>0,tt=N&&!!y.anisotropyMap,yt=ge&&!!y.clearcoatMap,Mt=ge&&!!y.clearcoatNormalMap,nt=ge&&!!y.clearcoatRoughnessMap,ot=x&&!!y.iridescenceMap,Rt=x&&!!y.iridescenceThicknessMap,Gt=B&&!!y.sheenColorMap,gt=B&&!!y.sheenRoughnessMap,Et=!!y.specularMap,Ht=!!y.specularColorMap,$t=!!y.specularIntensityMap,ae=Y&&!!y.transmissionMap,H=Y&&!!y.thicknessMap,Ct=!!y.gradientMap,at=!!y.alphaMap,lt=y.alphaTest>0,dt=!!y.alphaHash,it=!!y.extensions,xt=Nn;y.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(xt=i.toneMapping);let q={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:Yt,fragmentShader:Kt,defines:y.defines,customVertexShaderID:_t,customFragmentShaderID:X,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Dt,batchingColor:Dt&&O._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&O.instanceColor!==null,instancingMorph:Xt&&O.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Me.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Zt,matcap:Lt,envMap:st,envMapMode:st&&ct.mapping,envMapCubeUVHeight:U,aoMap:ft,lightMap:mt,bumpMap:pt,normalMap:bt,displacementMap:Jt,emissiveMap:vt,normalMapObjectSpace:bt&&y.normalMapType===zd,normalMapTangentSpace:bt&&y.normalMapType===cc,packedNormalMap:bt&&y.normalMapType===cc&&D1(y.normalMap.format),metalnessMap:te,roughnessMap:oe,anisotropy:N,anisotropyMap:tt,clearcoat:ge,clearcoatMap:yt,clearcoatNormalMap:Mt,clearcoatRoughnessMap:nt,dispersion:ue,retroreflection:C,iridescence:x,iridescenceMap:ot,iridescenceThicknessMap:Rt,sheen:B,sheenColorMap:Gt,sheenRoughnessMap:gt,specularMap:Et,specularColorMap:Ht,specularIntensityMap:$t,transmission:Y,transmissionMap:ae,thicknessMap:H,gradientMap:Ct,opaque:y.transparent===!1&&y.blending===gi&&y.alphaToCoverage===!1,alphaMap:at,alphaTest:lt,alphaHash:dt,combine:y.combine,mapUv:Zt&&g(y.map.channel),aoMapUv:ft&&g(y.aoMap.channel),lightMapUv:mt&&g(y.lightMap.channel),bumpMapUv:pt&&g(y.bumpMap.channel),normalMapUv:bt&&g(y.normalMap.channel),displacementMapUv:Jt&&g(y.displacementMap.channel),emissiveMapUv:vt&&g(y.emissiveMap.channel),metalnessMapUv:te&&g(y.metalnessMap.channel),roughnessMapUv:oe&&g(y.roughnessMap.channel),anisotropyMapUv:tt&&g(y.anisotropyMap.channel),clearcoatMapUv:yt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:gt&&g(y.sheenRoughnessMap.channel),specularMapUv:Et&&g(y.specularMap.channel),specularColorMapUv:Ht&&g(y.specularColorMap.channel),specularIntensityMapUv:$t&&g(y.specularIntensityMap.channel),transmissionMapUv:ae&&g(y.transmissionMap.channel),thicknessMapUv:H&&g(y.thicknessMap.channel),alphaMapUv:at&&g(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(bt||N),vertexNormals:!!G.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!G.attributes.uv&&(Zt||at),fog:!!F,useFog:y.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||G.attributes.normal===void 0&&bt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:At,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:ut,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:xt,decodeVideoTexture:Zt&&y.map.isVideoTexture===!0&&Me.getTransfer(y.map.colorSpace)===Ce,decodeVideoTextureEmissive:vt&&y.emissiveMap.isVideoTexture===!0&&Me.getTransfer(y.emissiveMap.colorSpace)===Ce,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ae,flipSided:y.side===sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:it&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&y.extensions.multiDraw===!0||Dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return q.vertexUv1s=l.has(1),q.vertexUv2s=l.has(2),q.vertexUv3s=l.has(3),l.clear(),q}function m(y){let v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(let A in y.defines)v.push(A),v.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(p(v,y),b(v,y),v.push(i.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function p(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numSunLights),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numSunLightShadows),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function b(y,v){o.disableAll(),v.instancing&&o.enable(0),v.instancingColor&&o.enable(1),v.instancingMorph&&o.enable(2),v.matcap&&o.enable(3),v.envMap&&o.enable(4),v.normalMapObjectSpace&&o.enable(5),v.normalMapTangentSpace&&o.enable(6),v.clearcoat&&o.enable(7),v.iridescence&&o.enable(8),v.alphaTest&&o.enable(9),v.vertexColors&&o.enable(10),v.vertexAlphas&&o.enable(11),v.vertexUv1s&&o.enable(12),v.vertexUv2s&&o.enable(13),v.vertexUv3s&&o.enable(14),v.vertexTangents&&o.enable(15),v.anisotropy&&o.enable(16),v.alphaHash&&o.enable(17),v.batching&&o.enable(18),v.dispersion&&o.enable(19),v.retroreflection&&o.enable(24),v.batchingColor&&o.enable(20),v.gradientMap&&o.enable(21),v.packedNormalMap&&o.enable(22),v.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),v.numLightProbeGrids>0&&o.enable(22),v.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function R(y){let v=f[y.type],A;if(v){let L=_i[v];A=sf.clone(L.uniforms)}else A=y.uniforms;return A}function _(y,v){let A=h.get(v);return A!==void 0?++A.usedTimes:(A=new I1(i,v,y,s),c.push(A),h.set(v,A)),A}function T(y){if(--y.usedTimes===0){let v=c.indexOf(y);c[v]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function w(y){a.remove(y)}function I(){a.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:R,acquireProgram:_,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:I}}function U1(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function F1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ef(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Tf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,S,m,p){let b=i[t];return b===void 0?(b={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:S,renderOrder:u.renderOrder,z:m,group:p},i[t]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=g,b.materialVariant=o(u),b.groupOrder=S,b.renderOrder=u.renderOrder,b.z=m,b.group=p),t++,b}function l(u,f,g,S,m,p,b){b.reversedDepth===!0&&(m=-m);let R=a(u,f,g,S,m,p);g.transmission>0?n.push(R):g.transparent===!0?s.push(R):e.push(R)}function c(u,f,g,S,m,p){let b=a(u,f,g,S,m,p);g.transmission>0?n.unshift(b):g.transparent===!0?s.unshift(b):e.unshift(b)}function h(u,f){e.length>1&&e.sort(u||F1),n.length>1&&n.sort(f||Ef),s.length>1&&s.sort(f||Ef)}function d(){for(let u=t,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function O1(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Tf,i.set(n,[o])):s>=r.length?(o=new Tf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function B1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new E,color:new jt};break;case"SpotLight":e={position:new E,direction:new E,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new E,halfWidth:new E,halfHeight:new E};break}return i[t.id]=e,e}}}function z1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var H1=0;function V1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function k1(i){let t=new B1,e=z1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);let s=new E,r=new Pe,o=new Pe;function a(c){let h=0,d=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,g=0,S=0,m=0,p=0,b=0,R=0,_=0,T=0,w=0,I=0,y=0,v=0,A=0;c.sort(V1);for(let O=0,W=c.length;O<W;O++){let F=c[O],G=F.color,j=F.intensity,K=F.distance,ct=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===es?ct=F.shadow.map.texture:ct=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)h+=G.r*j,d+=G.g*j,u+=G.b*j;else if(F.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(F.sh.coefficients[U],j);A++}else if(F.isSunLight){let U=t.get(F);if(U.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let J=F.shadow,D=e.get(F);D.shadowIntensity=J.intensity,D.shadowBias=J.bias,D.shadowNormalBias=J.normalBias,D.shadowRadius=J.radius,D.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[g]=D,n.sunShadowMap[g]=ct;let rt=J.getViewportCount();for(let ut=0;ut<rt;ut++)n.sunShadowMatrix[S+ut]=J.getMatrix(ut),n.sunShadowCascade[S+ut]=J._cascadeData[ut];S+=rt,g++}n.sun[f]=U,f++}else if(F.isDirectionalLight){let U=t.get(F);if(U.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let J=F.shadow,D=e.get(F);D.shadowIntensity=J.intensity,D.shadowBias=J.bias,D.shadowNormalBias=J.normalBias,D.shadowRadius=J.radius,D.shadowMapSize=J.mapSize,n.directionalShadow[m]=D,n.directionalShadowMap[m]=ct,n.directionalShadowMatrix[m]=F.shadow.matrix,T++}n.directional[m]=U,m++}else if(F.isSpotLight){let U=t.get(F);U.position.setFromMatrixPosition(F.matrixWorld),U.color.copy(G).multiplyScalar(j),U.distance=K,U.coneCos=Math.cos(F.angle),U.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),U.decay=F.decay,n.spot[b]=U;let J=F.shadow;if(F.map&&(n.spotLightMap[y]=F.map,y++,J.updateMatrices(F),F.castShadow&&v++),n.spotLightMatrix[b]=J.matrix,F.castShadow){let D=e.get(F);D.shadowIntensity=J.intensity,D.shadowBias=J.bias,D.shadowNormalBias=J.normalBias,D.shadowRadius=J.radius,D.shadowMapSize=J.mapSize,n.spotShadow[b]=D,n.spotShadowMap[b]=ct,I++}b++}else if(F.isRectAreaLight){let U=t.get(F);U.color.copy(G).multiplyScalar(j),U.halfWidth.set(F.width*.5,0,0),U.halfHeight.set(0,F.height*.5,0),n.rectArea[R]=U,R++}else if(F.isPointLight){let U=t.get(F);if(U.color.copy(F.color).multiplyScalar(F.intensity),U.distance=F.distance,U.decay=F.decay,F.castShadow){let J=F.shadow,D=e.get(F);D.shadowIntensity=J.intensity,D.shadowBias=J.bias,D.shadowNormalBias=J.normalBias,D.shadowRadius=J.radius,D.shadowMapSize=J.mapSize,D.shadowCameraNear=J.camera.near,D.shadowCameraFar=J.camera.far,n.pointShadow[p]=D,n.pointShadowMap[p]=ct,n.pointShadowMatrix[p]=F.shadow.matrix,w++}n.point[p]=U,p++}else if(F.isHemisphereLight){let U=t.get(F);U.skyColor.copy(F.color).multiplyScalar(j),U.groundColor.copy(F.groundColor).multiplyScalar(j),n.hemi[_]=U,_++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ft.LTC_FLOAT_1,n.rectAreaLTC2=Ft.LTC_FLOAT_2):(n.rectAreaLTC1=Ft.LTC_HALF_1,n.rectAreaLTC2=Ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let L=n.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==b||L.rectAreaLength!==R||L.hemiLength!==_||L.numSunShadows!==g||L.numDirectionalShadows!==T||L.numPointShadows!==w||L.numSpotShadows!==I||L.numSpotMaps!==y||L.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=m,n.spot.length=b,n.rectArea.length=R,n.point.length=p,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=I,n.spotShadowMap.length=I,n.spotLightMatrix.length=I+y-v,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=v,n.numLightProbes=A,L.sunLength=f,L.directionalLength=m,L.pointLength=p,L.spotLength=b,L.rectAreaLength=R,L.hemiLength=_,L.numSunShadows=g,L.numDirectionalShadows=T,L.numPointShadows=w,L.numSpotShadows=I,L.numSpotMaps=y,L.numLightProbes=A,n.version=H1++)}function l(c,h){let d=0,u=0,f=0,g=0,S=0,m=0,p=h.matrixWorldInverse;for(let b=0,R=c.length;b<R;b++){let _=c[b];if(_.isSunLight){let T=n.sun[d];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(p),d++}else if(_.isDirectionalLight){let T=n.directional[u];T.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),u++}else if(_.isSpotLight){let T=n.spot[g];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),g++}else if(_.isRectAreaLight){let T=n.rectArea[S];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),T.halfWidth.set(_.width*.5,0,0),T.halfHeight.set(0,_.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),S++}else if(_.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let T=n.hemi[m];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:n}}function wf(i){let t=new k1(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function G1(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new wf(i),t.set(s,[a])):r>=o.length?(a=new wf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var W1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,q1=[new E(1,0,0),new E(-1,0,0),new E(0,1,0),new E(0,-1,0),new E(0,0,1),new E(0,0,-1)],Y1=[new E(0,-1,0),new E(0,-1,0),new E(0,0,1),new E(0,0,-1),new E(0,-1,0),new E(0,-1,0)],Af=new Pe,Go=new E,Qh=new E;function $1(i,t,e){let n=new nr,s=new St,r=new St,o=new He,a=new ll,l=new cl,c={},h=e.maxTextureSize,d={[Ki]:sn,[sn]:Ki,[Ae]:Ae},u=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:W1,fragmentShader:X1}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ve;g.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new It(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Do;let p=this.type;this.render=function(w,I,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===gd&&(re("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Do);let v=i.getRenderTarget(),A=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),O=i.state;O.setBlending(mi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let W=p!==this.type;W&&I.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(G=>G.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,G=w.length;F<G;F++){let j=w[F],K=j.shadow;if(K===void 0){re("WebGLShadowMap:",j,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let ct=K.getFrameExtents();s.multiply(ct),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ct.x),s.x=r.x*ct.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ct.y),s.y=r.y*ct.y,K.mapSize.y=r.y));let U=i.state.buffers.depth.getReversed();if(K.camera._reversedDepth=U,K.map===null||W===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===hr){if(j.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new An(s.x,s.y,{format:es,type:ti,minFilter:fn,magFilter:fn,generateMipmaps:!1}),K.map.texture.name=j.name+".shadowMap",K.map.depthTexture=new Yi(s.x,s.y,Hn),K.map.depthTexture.name=j.name+".shadowMapDepth",K.map.depthTexture.format=hi,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Ze,K.map.depthTexture.magFilter=Ze}else j.isPointLight?(K.map=new mc(s.x),K.map.depthTexture=new tl(s.x,jn)):(K.map=new An(s.x,s.y),K.map.depthTexture=new Yi(s.x,s.y,jn)),K.map.depthTexture.name=j.name+".shadowMap",K.map.depthTexture.format=hi,this.type===Do?(K.map.depthTexture.compareFunction=U?uc:hc,K.map.depthTexture.minFilter=fn,K.map.depthTexture.magFilter=fn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Ze,K.map.depthTexture.magFilter=Ze);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==s.x||K.map.height!==s.y)&&K.map.setSize(s.x,s.y);let J=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();j.isPointLight!==!0&&K.updateMatrices(j,y);for(let D=0;D<J;D++){let rt=K.getCamera(D);if(j.isPointLight){let ut=K.camera,Yt=K.matrix,Kt=j.distance||ut.far;Kt!==ut.far&&(ut.far=Kt,ut.updateProjectionMatrix()),Go.setFromMatrixPosition(j.matrixWorld),ut.position.copy(Go),Qh.copy(ut.position),Qh.add(q1[D]),ut.up.copy(Y1[D]),ut.lookAt(Qh),ut.updateMatrixWorld(),Yt.makeTranslation(-Go.x,-Go.y,-Go.z),Af.multiplyMatrices(ut.projectionMatrix,ut.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Af,ut.coordinateSystem,ut.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)i.setRenderTarget(K.map,D),i.clear();else{D===0&&(i.setRenderTarget(K.map),i.clear());let ut=K.getViewport(D);o.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),O.viewport(o)}n=K.getFrustum(D),_(I,y,rt,j,this.type)}K.isPointLightShadow!==!0&&this.type===hr&&b(K,y),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(v,A,L)};function b(w,I){let y=t.update(S);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new An(s.x,s.y,{format:es,type:ti}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(I,null,y,u,S,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(I,null,y,f,S,null)}function R(w,I,y,v){let A=null,L=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)A=L;else if(A=y.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let O=A.uuid,W=I.uuid,F=c[O];F===void 0&&(F={},c[O]=F);let G=F[W];G===void 0&&(G=A.clone(),F[W]=G,I.addEventListener("dispose",T)),A=G}if(A.visible=I.visible,A.wireframe=I.wireframe,v===hr?A.side=I.shadowSide!==null?I.shadowSide:I.side:A.side=I.shadowSide!==null?I.shadowSide:d[I.side],A.alphaMap=I.alphaMap,A.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,A.map=I.map,A.clipShadows=I.clipShadows,A.clippingPlanes=I.clippingPlanes,A.clipIntersection=I.clipIntersection,A.displacementMap=I.displacementMap,A.displacementScale=I.displacementScale,A.displacementBias=I.displacementBias,A.wireframeLinewidth=I.wireframeLinewidth,A.linewidth=I.linewidth,y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let O=i.properties.get(A);O.light=y}return A}function _(w,I,y,v,A){if(w.visible===!1)return;if(w.layers.test(I.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&A===hr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);let W=t.update(w),F=w.material;if(Array.isArray(F)){let G=W.groups;for(let j=0,K=G.length;j<K;j++){let ct=G[j],U=F[ct.materialIndex];if(U&&U.visible){let J=R(w,U,v,A);w.onBeforeShadow(i,w,I,y,W,J,ct),i.renderBufferDirect(y,null,W,J,w,ct),w.onAfterShadow(i,w,I,y,W,J,ct)}}}else if(F.visible){let G=R(w,F,v,A);w.onBeforeShadow(i,w,I,y,W,G,null),i.renderBufferDirect(y,null,W,G,w,null),w.onAfterShadow(i,w,I,y,W,G,null)}}let O=w.children;for(let W=0,F=O.length;W<F;W++)_(O[W],I,y,v,A)}function T(w){w.target.removeEventListener("dispose",T);for(let y in c){let v=c[y],A=w.target.uuid;A in v&&(v[A].dispose(),delete v[A])}}}function Z1(i,t){function e(){let H=!1,Ct=new He,at=null,lt=new He(0,0,0,0);return{setMask:function(dt){at!==dt&&!H&&(i.colorMask(dt,dt,dt,dt),at=dt)},setLocked:function(dt){H=dt},setClear:function(dt,it,xt,q,Tt){Tt===!0&&(dt*=q,it*=q,xt*=q),Ct.set(dt,it,xt,q),lt.equals(Ct)===!1&&(i.clearColor(dt,it,xt,q),lt.copy(Ct))},reset:function(){H=!1,at=null,lt.set(-1,0,0,0)}}}function n(){let H=!1,Ct=!1,at=null,lt=null,dt=null;return{setReversed:function(it){if(Ct!==it){let xt=t.get("EXT_clip_control");it?xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.ZERO_TO_ONE_EXT):xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.NEGATIVE_ONE_TO_ONE_EXT),Ct=it;let q=dt;dt=null,this.setClear(q)}},getReversed:function(){return Ct},setTest:function(it){it?et(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(it){at!==it&&!H&&(i.depthMask(it),at=it)},setFunc:function(it){if(Ct&&(it=Jd[it]),lt!==it){switch(it){case Fa:i.depthFunc(i.NEVER);break;case Oa:i.depthFunc(i.ALWAYS);break;case Ba:i.depthFunc(i.LESS);break;case Zs:i.depthFunc(i.LEQUAL);break;case za:i.depthFunc(i.EQUAL);break;case Ha:i.depthFunc(i.GEQUAL);break;case Va:i.depthFunc(i.GREATER);break;case ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=it}},setLocked:function(it){H=it},setClear:function(it){dt!==it&&(dt=it,Ct&&(it=1-it),i.clearDepth(it))},reset:function(){H=!1,at=null,lt=null,dt=null,Ct=!1}}}function s(){let H=!1,Ct=null,at=null,lt=null,dt=null,it=null,xt=null,q=null,Tt=null;return{setTest:function(ie){H||(ie?et(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function(ie){Ct!==ie&&!H&&(i.stencilMask(ie),Ct=ie)},setFunc:function(ie,Le,ln){(at!==ie||lt!==Le||dt!==ln)&&(i.stencilFunc(ie,Le,ln),at=ie,lt=Le,dt=ln)},setOp:function(ie,Le,ln){(it!==ie||xt!==Le||q!==ln)&&(i.stencilOp(ie,Le,ln),it=ie,xt=Le,q=ln)},setLocked:function(ie){H=ie},setClear:function(ie){Tt!==ie&&(i.clearStencil(ie),Tt=ie)},reset:function(){H=!1,Ct=null,at=null,lt=null,dt=null,it=null,xt=null,q=null,Tt=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],S=null,m=!1,p=null,b=null,R=null,_=null,T=null,w=null,I=null,y=new jt(0,0,0),v=0,A=!1,L=null,O=null,W=null,F=null,G=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,ct=0,U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec(U)[1]),K=ct>=1):U.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),K=ct>=2);let J=null,D={},rt=i.getParameter(i.SCISSOR_BOX),ut=i.getParameter(i.VIEWPORT),Yt=new He().fromArray(rt),Kt=new He().fromArray(ut);function _t(H,Ct,at,lt){let dt=new Uint8Array(4),it=i.createTexture();i.bindTexture(H,it),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let xt=0;xt<at;xt++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(Ct,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(Ct+xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return it}let X={};X[i.TEXTURE_2D]=_t(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=_t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=_t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=_t(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(i.DEPTH_TEST),o.setFunc(Zs),pt(!1),bt(yh),et(i.CULL_FACE),ft(mi);function et(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function At(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function Xt(H,Ct){return u[H]!==Ct?(i.bindFramebuffer(H,Ct),u[H]=Ct,H===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ct),H===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Dt(H,Ct){let at=g,lt=!1;if(H){at=f.get(Ct),at===void 0&&(at=[],f.set(Ct,at));let dt=H.textures;if(at.length!==dt.length||at[0]!==i.COLOR_ATTACHMENT0){for(let it=0,xt=dt.length;it<xt;it++)at[it]=i.COLOR_ATTACHMENT0+it;at.length=dt.length,lt=!0}}else at[0]!==i.BACK&&(at[0]=i.BACK,lt=!0);lt&&i.drawBuffers(at)}function Zt(H){return S!==H?(i.useProgram(H),S=H,!0):!1}let Lt={[_s]:i.FUNC_ADD,[_d]:i.FUNC_SUBTRACT,[yd]:i.FUNC_REVERSE_SUBTRACT};Lt[vd]=i.MIN,Lt[Sd]=i.MAX;let st={[Md]:i.ZERO,[bd]:i.ONE,[Ed]:i.SRC_COLOR,[Mh]:i.SRC_ALPHA,[Pd]:i.SRC_ALPHA_SATURATE,[Rd]:i.DST_COLOR,[wd]:i.DST_ALPHA,[Td]:i.ONE_MINUS_SRC_COLOR,[bh]:i.ONE_MINUS_SRC_ALPHA,[Cd]:i.ONE_MINUS_DST_COLOR,[Ad]:i.ONE_MINUS_DST_ALPHA,[Id]:i.CONSTANT_COLOR,[Ld]:i.ONE_MINUS_CONSTANT_COLOR,[Dd]:i.CONSTANT_ALPHA,[Nd]:i.ONE_MINUS_CONSTANT_ALPHA};function ft(H,Ct,at,lt,dt,it,xt,q,Tt,ie){if(H===mi){m===!0&&(At(i.BLEND),m=!1);return}if(m===!1&&(et(i.BLEND),m=!0),H!==xd){if(H!==p||ie!==A){if((b!==_s||T!==_s)&&(i.blendEquation(i.FUNC_ADD),b=_s,T=_s),ie)switch(H){case gi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gn:i.blendFunc(i.ONE,i.ONE);break;case vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:le("WebGLState: Invalid blending: ",H);break}else switch(H){case gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case vh:le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sh:le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:le("WebGLState: Invalid blending: ",H);break}R=null,_=null,w=null,I=null,y.set(0,0,0),v=0,p=H,A=ie}return}dt=dt||Ct,it=it||at,xt=xt||lt,(Ct!==b||dt!==T)&&(i.blendEquationSeparate(Lt[Ct],Lt[dt]),b=Ct,T=dt),(at!==R||lt!==_||it!==w||xt!==I)&&(i.blendFuncSeparate(st[at],st[lt],st[it],st[xt]),R=at,_=lt,w=it,I=xt),(q.equals(y)===!1||Tt!==v)&&(i.blendColor(q.r,q.g,q.b,Tt),y.copy(q),v=Tt),p=H,A=!1}function mt(H,Ct){H.side===Ae?At(i.CULL_FACE):et(i.CULL_FACE);let at=H.side===sn;Ct&&(at=!at),pt(at),H.blending===gi&&H.transparent===!1?ft(mi):ft(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let lt=H.stencilWrite;a.setTest(lt),lt&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),vt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function pt(H){L!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),L=H)}function bt(H){H!==pd?(et(i.CULL_FACE),H!==O&&(H===yh?i.cullFace(i.BACK):H===md?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),O=H}function Jt(H){H!==W&&(K&&i.lineWidth(H),W=H)}function vt(H,Ct,at){H?(et(i.POLYGON_OFFSET_FILL),(F!==Ct||G!==at)&&(F=Ct,G=at,o.getReversed()&&(Ct=-Ct),i.polygonOffset(Ct,at))):At(i.POLYGON_OFFSET_FILL)}function te(H){H?et(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function oe(H){H===void 0&&(H=i.TEXTURE0+j-1),J!==H&&(i.activeTexture(H),J=H)}function N(H,Ct,at){at===void 0&&(J===null?at=i.TEXTURE0+j-1:at=J);let lt=D[at];lt===void 0&&(lt={type:void 0,texture:void 0},D[at]=lt),(lt.type!==H||lt.texture!==Ct)&&(J!==at&&(i.activeTexture(at),J=at),i.bindTexture(H,Ct||X[H]),lt.type=H,lt.texture=Ct)}function ge(){let H=D[J];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function ue(){try{i.compressedTexImage2D(...arguments)}catch(H){le("WebGLState:",H)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(H){le("WebGLState:",H)}}function x(){try{i.texSubImage2D(...arguments)}catch(H){le("WebGLState:",H)}}function B(){try{i.texSubImage3D(...arguments)}catch(H){le("WebGLState:",H)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(H){le("WebGLState:",H)}}function tt(){try{i.compressedTexSubImage3D(...arguments)}catch(H){le("WebGLState:",H)}}function yt(){try{i.texStorage2D(...arguments)}catch(H){le("WebGLState:",H)}}function Mt(){try{i.texStorage3D(...arguments)}catch(H){le("WebGLState:",H)}}function nt(){try{i.texImage2D(...arguments)}catch(H){le("WebGLState:",H)}}function ot(){try{i.texImage3D(...arguments)}catch(H){le("WebGLState:",H)}}function Rt(H){return d[H]!==void 0?d[H]:i.getParameter(H)}function Gt(H,Ct){d[H]!==Ct&&(i.pixelStorei(H,Ct),d[H]=Ct)}function gt(H){Yt.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Yt.copy(H))}function Et(H){Kt.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),Kt.copy(H))}function Ht(H,Ct){let at=c.get(Ct);at===void 0&&(at=new WeakMap,c.set(Ct,at));let lt=at.get(H);lt===void 0&&(lt=i.getUniformBlockIndex(Ct,H.name),at.set(H,lt))}function $t(H,Ct){let lt=c.get(Ct).get(H);l.get(Ct)!==lt&&(i.uniformBlockBinding(Ct,lt,H.__bindingPointIndex),l.set(Ct,lt))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},J=null,D={},u={},f=new WeakMap,g=[],S=null,m=!1,p=null,b=null,R=null,_=null,T=null,w=null,I=null,y=new jt(0,0,0),v=0,A=!1,L=null,O=null,W=null,F=null,G=null,Yt.set(0,0,i.canvas.width,i.canvas.height),Kt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:At,bindFramebuffer:Xt,drawBuffers:Dt,useProgram:Zt,setBlending:ft,setMaterial:mt,setFlipSided:pt,setCullFace:bt,setLineWidth:Jt,setPolygonOffset:vt,setScissorTest:te,activeTexture:oe,bindTexture:N,unbindTexture:ge,compressedTexImage2D:ue,compressedTexImage3D:C,texImage2D:nt,texImage3D:ot,pixelStorei:Gt,getParameter:Rt,updateUBOMapping:Ht,uniformBlockBinding:$t,texStorage2D:yt,texStorage3D:Mt,texSubImage2D:x,texSubImage3D:B,compressedTexSubImage2D:Y,compressedTexSubImage3D:tt,scissor:gt,viewport:Et,reset:ae}}function J1(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new St,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(C,x){return g?new OffscreenCanvas(C,x):to("canvas")}function m(C,x,B){let Y=1,tt=ue(C);if((tt.width>B||tt.height>B)&&(Y=B/Math.max(tt.width,tt.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let yt=Math.floor(Y*tt.width),Mt=Math.floor(Y*tt.height);u===void 0&&(u=S(yt,Mt));let nt=x?S(yt,Mt):u;return nt.width=yt,nt.height=Mt,nt.getContext("2d").drawImage(C,0,0,yt,Mt),re("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+yt+"x"+Mt+")."),nt}else return"data"in C&&re("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),C;return C}function p(C){return C.generateMipmaps}function b(C){i.generateMipmap(C)}function R(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(C,x,B,Y,tt,yt=!1){if(C!==null){if(i[C]!==void 0)return i[C];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Mt;Y&&(Mt=t.get("EXT_texture_norm16"),Mt||re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let nt=x;if(x===i.RED&&(B===i.FLOAT&&(nt=i.R32F),B===i.HALF_FLOAT&&(nt=i.R16F),B===i.UNSIGNED_BYTE&&(nt=i.R8),B===i.UNSIGNED_SHORT&&Mt&&(nt=Mt.R16_EXT),B===i.SHORT&&Mt&&(nt=Mt.R16_SNORM_EXT)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(nt=i.R8UI),B===i.UNSIGNED_SHORT&&(nt=i.R16UI),B===i.UNSIGNED_INT&&(nt=i.R32UI),B===i.BYTE&&(nt=i.R8I),B===i.SHORT&&(nt=i.R16I),B===i.INT&&(nt=i.R32I)),x===i.RG&&(B===i.FLOAT&&(nt=i.RG32F),B===i.HALF_FLOAT&&(nt=i.RG16F),B===i.UNSIGNED_BYTE&&(nt=i.RG8),B===i.UNSIGNED_SHORT&&Mt&&(nt=Mt.RG16_EXT),B===i.SHORT&&Mt&&(nt=Mt.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(nt=i.RG8UI),B===i.UNSIGNED_SHORT&&(nt=i.RG16UI),B===i.UNSIGNED_INT&&(nt=i.RG32UI),B===i.BYTE&&(nt=i.RG8I),B===i.SHORT&&(nt=i.RG16I),B===i.INT&&(nt=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),B===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),B===i.UNSIGNED_INT&&(nt=i.RGB32UI),B===i.BYTE&&(nt=i.RGB8I),B===i.SHORT&&(nt=i.RGB16I),B===i.INT&&(nt=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),B===i.UNSIGNED_INT&&(nt=i.RGBA32UI),B===i.BYTE&&(nt=i.RGBA8I),B===i.SHORT&&(nt=i.RGBA16I),B===i.INT&&(nt=i.RGBA32I)),x===i.RGB&&(B===i.UNSIGNED_SHORT&&Mt&&(nt=Mt.RGB16_EXT),B===i.SHORT&&Mt&&(nt=Mt.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(nt=i.R11F_G11F_B10F)),x===i.RGBA){let ot=yt?jr:Me.getTransfer(tt);B===i.FLOAT&&(nt=i.RGBA32F),B===i.HALF_FLOAT&&(nt=i.RGBA16F),B===i.UNSIGNED_BYTE&&(nt=ot===Ce?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&Mt&&(nt=Mt.RGBA16_EXT),B===i.SHORT&&Mt&&(nt=Mt.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function T(C,x){let B;return C?x===null||x===jn||x===dr?B=i.DEPTH24_STENCIL8:x===Hn?B=i.DEPTH32F_STENCIL8:x===ur&&(B=i.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===jn||x===dr?B=i.DEPTH_COMPONENT24:x===Hn?B=i.DEPTH_COMPONENT32F:x===ur&&(B=i.DEPTH_COMPONENT16),B}function w(C,x){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ze&&C.minFilter!==fn?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function I(C){let x=C.target;x.removeEventListener("dispose",I),v(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function y(C){let x=C.target;x.removeEventListener("dispose",y),L(x)}function v(C){let x=n.get(C);if(x.__webglInit===void 0)return;let B=C.source,Y=f.get(B);if(Y){let tt=Y[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&A(C),Object.keys(Y).length===0&&f.delete(B)}n.remove(C)}function A(C){let x=n.get(C);i.deleteTexture(x.__webglTexture);let B=C.source,Y=f.get(B);delete Y[x.__cacheKey],o.memory.textures--}function L(C){let x=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let tt=0;tt<x.__webglFramebuffer[Y].length;tt++)i.deleteFramebuffer(x.__webglFramebuffer[Y][tt]);else i.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)i.deleteFramebuffer(x.__webglFramebuffer[Y]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let B=C.textures;for(let Y=0,tt=B.length;Y<tt;Y++){let yt=n.get(B[Y]);yt.__webglTexture&&(i.deleteTexture(yt.__webglTexture),o.memory.textures--),n.remove(B[Y])}n.remove(C)}let O=0;function W(){O=0}function F(){return O}function G(C){O=C}function j(){let C=O;return C>=s.maxTextures&&re("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,C}function K(C){let x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function ct(C,x){let B=n.get(C);if(C.isVideoTexture&&N(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){let Y=C.image;if(Y===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{At(B,C,x);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function U(C,x){let B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){At(B,C,x);return}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function J(C,x){let B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){At(B,C,x);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function D(C,x){let B=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&B.__version!==C.version){Xt(B,C,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}let rt={[Wi]:i.REPEAT,[zn]:i.CLAMP_TO_EDGE,[Ga]:i.MIRRORED_REPEAT},ut={[Ze]:i.NEAREST,[Od]:i.NEAREST_MIPMAP_NEAREST,[Uo]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[Tl]:i.LINEAR_MIPMAP_NEAREST,[ji]:i.LINEAR_MIPMAP_LINEAR},Yt={[Vd]:i.NEVER,[qd]:i.ALWAYS,[kd]:i.LESS,[hc]:i.LEQUAL,[Gd]:i.EQUAL,[uc]:i.GEQUAL,[Wd]:i.GREATER,[Xd]:i.NOTEQUAL};function Kt(C,x){if(x.type===Hn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===fn||x.magFilter===Tl||x.magFilter===Uo||x.magFilter===ji||x.minFilter===fn||x.minFilter===Tl||x.minFilter===Uo||x.minFilter===ji)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,rt[x.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,rt[x.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,rt[x.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ut[x.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ut[x.minFilter]),x.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Yt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ze||x.minFilter!==Uo&&x.minFilter!==ji||x.type===Hn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function _t(C,x){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",I));let Y=x.source,tt=f.get(Y);tt===void 0&&(tt={},f.set(Y,tt));let yt=K(x);if(yt!==C.__cacheKey){tt[yt]===void 0&&(tt[yt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),tt[yt].usedTimes++;let Mt=tt[C.__cacheKey];Mt!==void 0&&(tt[C.__cacheKey].usedTimes--,Mt.usedTimes===0&&A(x)),C.__cacheKey=yt,C.__webglTexture=tt[yt].texture}return B}function X(C,x,B){return Math.floor(Math.floor(C/B)/x)}function et(C,x,B,Y){let yt=C.updateRanges;if(yt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,B,Y,x.data);else{yt.sort((Gt,gt)=>Gt.start-gt.start);let Mt=0;for(let Gt=1;Gt<yt.length;Gt++){let gt=yt[Mt],Et=yt[Gt],Ht=gt.start+gt.count,$t=X(Et.start,x.width,4),ae=X(gt.start,x.width,4);Et.start<=Ht+1&&$t===ae&&X(Et.start+Et.count-1,x.width,4)===$t?gt.count=Math.max(gt.count,Et.start+Et.count-gt.start):(++Mt,yt[Mt]=Et)}yt.length=Mt+1;let nt=e.getParameter(i.UNPACK_ROW_LENGTH),ot=e.getParameter(i.UNPACK_SKIP_PIXELS),Rt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Gt=0,gt=yt.length;Gt<gt;Gt++){let Et=yt[Gt],Ht=Math.floor(Et.start/4),$t=Math.ceil(Et.count/4),ae=Ht%x.width,H=Math.floor(Ht/x.width),Ct=$t,at=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),e.pixelStorei(i.UNPACK_SKIP_ROWS,H),e.texSubImage2D(i.TEXTURE_2D,0,ae,H,Ct,at,B,Y,x.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,nt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(i.UNPACK_SKIP_ROWS,Rt)}}function At(C,x,B){let Y=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=i.TEXTURE_3D);let tt=_t(C,x),yt=x.source;e.bindTexture(Y,C.__webglTexture,i.TEXTURE0+B);let Mt=n.get(yt);if(yt.version!==Mt.__version||tt===!0){if(e.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let at=Me.getPrimaries(Me.workingColorSpace),lt=x.colorSpace===ei?null:Me.getPrimaries(x.colorSpace),dt=x.colorSpace===ei||at===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let ot=m(x.image,!1,s.maxTextureSize);ot=ge(x,ot);let Rt=r.convert(x.format,x.colorSpace),Gt=r.convert(x.type),gt=_(x.internalFormat,Rt,Gt,x.normalized,x.colorSpace,x.isVideoTexture);Kt(Y,x);let Et,Ht=x.mipmaps,$t=x.isVideoTexture!==!0,ae=Mt.__version===void 0||tt===!0,H=yt.dataReady,Ct=w(x,ot);if(x.isDepthTexture)gt=T(x.format===ts,x.type),ae&&($t?e.texStorage2D(i.TEXTURE_2D,1,gt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,gt,ot.width,ot.height,0,Rt,Gt,null));else if(x.isDataTexture)if(Ht.length>0){$t&&ae&&e.texStorage2D(i.TEXTURE_2D,Ct,gt,Ht[0].width,Ht[0].height);for(let at=0,lt=Ht.length;at<lt;at++)Et=Ht[at],$t?H&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,Et.width,Et.height,Rt,Gt,Et.data):e.texImage2D(i.TEXTURE_2D,at,gt,Et.width,Et.height,0,Rt,Gt,Et.data);x.generateMipmaps=!1}else $t?(ae&&e.texStorage2D(i.TEXTURE_2D,Ct,gt,ot.width,ot.height),H&&et(x,ot,Rt,Gt)):e.texImage2D(i.TEXTURE_2D,0,gt,ot.width,ot.height,0,Rt,Gt,ot.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){$t&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,gt,Ht[0].width,Ht[0].height,ot.depth);for(let at=0,lt=Ht.length;at<lt;at++)if(Et=Ht[at],x.format!==Cn)if(Rt!==null)if($t){if(H)if(x.layerUpdates.size>0){let dt=qh(Et.width,Et.height,x.format,x.type);for(let it of x.layerUpdates){let xt=Et.data.subarray(it*dt/Et.data.BYTES_PER_ELEMENT,(it+1)*dt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,it,Et.width,Et.height,1,Rt,xt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,Et.width,Et.height,ot.depth,Rt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,gt,Et.width,Et.height,ot.depth,0,Et.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?H&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,Et.width,Et.height,ot.depth,Rt,Gt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,gt,Et.width,Et.height,ot.depth,0,Rt,Gt,Et.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{$t&&ae&&e.texStorage2D(i.TEXTURE_2D,Ct,gt,Ht[0].width,Ht[0].height);for(let at=0,lt=Ht.length;at<lt;at++)Et=Ht[at],x.format!==Cn?Rt!==null?$t?H&&e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,Et.width,Et.height,Rt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,at,gt,Et.width,Et.height,0,Et.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?H&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,Et.width,Et.height,Rt,Gt,Et.data):e.texImage2D(i.TEXTURE_2D,at,gt,Et.width,Et.height,0,Rt,Gt,Et.data)}else if(x.isDataArrayTexture)if($t){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,gt,ot.width,ot.height,ot.depth),H)if(x.layerUpdates.size>0){let at=qh(ot.width,ot.height,x.format,x.type);for(let lt of x.layerUpdates){let dt=ot.data.subarray(lt*at/ot.data.BYTES_PER_ELEMENT,(lt+1)*at/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,ot.width,ot.height,1,Rt,Gt,dt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,Rt,Gt,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,gt,ot.width,ot.height,ot.depth,0,Rt,Gt,ot.data);else if(x.isData3DTexture)$t?(ae&&e.texStorage3D(i.TEXTURE_3D,Ct,gt,ot.width,ot.height,ot.depth),H&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,Rt,Gt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,gt,ot.width,ot.height,ot.depth,0,Rt,Gt,ot.data);else if(x.isFramebufferTexture){if(ae)if($t)e.texStorage2D(i.TEXTURE_2D,Ct,gt,ot.width,ot.height);else{let at=ot.width,lt=ot.height;for(let dt=0;dt<Ct;dt++)e.texImage2D(i.TEXTURE_2D,dt,gt,at,lt,0,Rt,Gt,null),at>>=1,lt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let at=i.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),ot.parentNode!==at){at.appendChild(ot),d.add(x),at.onpaint=lt=>{let dt=lt.changedElements;for(let it of d)dt.includes(it.image)&&(it.needsUpdate=!0)},at.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ot);else{let dt=i.RGBA,it=i.RGBA,xt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,dt,it,xt,ot)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ht.length>0){if($t&&ae){let at=ue(Ht[0]);e.texStorage2D(i.TEXTURE_2D,Ct,gt,at.width,at.height)}for(let at=0,lt=Ht.length;at<lt;at++)Et=Ht[at],$t?H&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,Rt,Gt,Et):e.texImage2D(i.TEXTURE_2D,at,gt,Rt,Gt,Et);x.generateMipmaps=!1}else if($t){if(ae){let at=ue(ot);e.texStorage2D(i.TEXTURE_2D,Ct,gt,at.width,at.height)}H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,Gt,ot)}else e.texImage2D(i.TEXTURE_2D,0,gt,Rt,Gt,ot);p(x)&&b(Y),Mt.__version=yt.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Xt(C,x,B){if(x.image.length!==6)return;let Y=_t(C,x),tt=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+B);let yt=n.get(tt);if(tt.version!==yt.__version||Y===!0){e.activeTexture(i.TEXTURE0+B);let Mt=Me.getPrimaries(Me.workingColorSpace),nt=x.colorSpace===ei?null:Me.getPrimaries(x.colorSpace),ot=x.colorSpace===ei||Mt===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let Rt=x.isCompressedTexture||x.image[0].isCompressedTexture,Gt=x.image[0]&&x.image[0].isDataTexture,gt=[];for(let it=0;it<6;it++)!Rt&&!Gt?gt[it]=m(x.image[it],!0,s.maxCubemapSize):gt[it]=Gt?x.image[it].image:x.image[it],gt[it]=ge(x,gt[it]);let Et=gt[0],Ht=r.convert(x.format,x.colorSpace),$t=r.convert(x.type),ae=_(x.internalFormat,Ht,$t,x.normalized,x.colorSpace),H=x.isVideoTexture!==!0,Ct=yt.__version===void 0||Y===!0,at=tt.dataReady,lt=w(x,Et);Kt(i.TEXTURE_CUBE_MAP,x);let dt;if(Rt){H&&Ct&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,ae,Et.width,Et.height);for(let it=0;it<6;it++){dt=gt[it].mipmaps;for(let xt=0;xt<dt.length;xt++){let q=dt[xt];x.format!==Cn?Ht!==null?H?at&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,xt,0,0,q.width,q.height,Ht,q.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,xt,ae,q.width,q.height,0,q.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,xt,0,0,q.width,q.height,Ht,$t,q.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,xt,ae,q.width,q.height,0,Ht,$t,q.data)}}}else{if(dt=x.mipmaps,H&&Ct){dt.length>0&&lt++;let it=ue(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,ae,it.width,it.height)}for(let it=0;it<6;it++)if(Gt){H?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,gt[it].width,gt[it].height,Ht,$t,gt[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,ae,gt[it].width,gt[it].height,0,Ht,$t,gt[it].data);for(let xt=0;xt<dt.length;xt++){let Tt=dt[xt].image[it].image;H?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,xt+1,0,0,Tt.width,Tt.height,Ht,$t,Tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,xt+1,ae,Tt.width,Tt.height,0,Ht,$t,Tt.data)}}else{H?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ht,$t,gt[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,ae,Ht,$t,gt[it]);for(let xt=0;xt<dt.length;xt++){let q=dt[xt];H?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,xt+1,0,0,Ht,$t,q.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,xt+1,ae,Ht,$t,q.image[it])}}}p(x)&&b(i.TEXTURE_CUBE_MAP),yt.__version=tt.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Dt(C,x,B,Y,tt,yt){let Mt=r.convert(B.format,B.colorSpace),nt=r.convert(B.type),ot=_(B.internalFormat,Mt,nt,B.normalized,B.colorSpace),Rt=n.get(x),Gt=n.get(B);if(Gt.__renderTarget=x,!Rt.__hasExternalTextures){let gt=Math.max(1,x.width>>yt),Et=Math.max(1,x.height>>yt);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,yt,ot,gt,Et,x.depth,0,Mt,nt,null):e.texImage2D(tt,yt,ot,gt,Et,0,Mt,nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),oe(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,tt,Gt.__webglTexture,0,te(x)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,tt,Gt.__webglTexture,yt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Zt(C,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,C),x.depthBuffer){let Y=x.depthTexture,tt=Y&&Y.isDepthTexture?Y.type:null,yt=T(x.stencilBuffer,tt),Mt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;oe(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te(x),yt,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,te(x),yt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,yt,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,C)}else{let Y=x.textures;for(let tt=0;tt<Y.length;tt++){let yt=Y[tt],Mt=r.convert(yt.format,yt.colorSpace),nt=r.convert(yt.type),ot=_(yt.internalFormat,Mt,nt,yt.normalized,yt.colorSpace);oe(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te(x),ot,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,te(x),ot,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ot,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Lt(C,x,B){let Y=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=n.get(x.depthTexture);if(tt.__renderTarget=x,(!tt.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,x.depthTexture.addEventListener("dispose",I)),tt.__webglTexture===void 0){tt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),Kt(i.TEXTURE_CUBE_MAP,x.depthTexture);let Rt=r.convert(x.depthTexture.format),Gt=r.convert(x.depthTexture.type),gt;x.depthTexture.format===hi?gt=i.DEPTH_COMPONENT24:x.depthTexture.format===ts&&(gt=i.DEPTH24_STENCIL8);for(let Et=0;Et<6;Et++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,gt,x.width,x.height,0,Rt,Gt,null)}}else ct(x.depthTexture,0);let yt=tt.__webglTexture,Mt=te(x),nt=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,ot=x.depthTexture.format===ts?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===hi)oe(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,nt,yt,0,Mt):i.framebufferTexture2D(i.FRAMEBUFFER,ot,nt,yt,0);else if(x.depthTexture.format===ts)oe(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,nt,yt,0,Mt):i.framebufferTexture2D(i.FRAMEBUFFER,ot,nt,yt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(C){let x=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){let Y=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){let tt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",tt)};Y.addEventListener("dispose",tt),x.__depthDisposeCallback=tt}x.__boundDepthTexture=Y}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let Y=0;Y<6;Y++)Lt(x.__webglFramebuffer[Y],C,Y);else{let Y=C.texture.mipmaps;Y&&Y.length>0?Lt(x.__webglFramebuffer[0],C,0):Lt(x.__webglFramebuffer,C,0)}else if(B){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=i.createRenderbuffer(),Zt(x.__webglDepthbuffer[Y],C,!1);else{let tt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=x.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,yt)}}else{let Y=C.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Zt(x.__webglDepthbuffer,C,!1);else{let tt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,yt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(C,x,B){let Y=n.get(C);x!==void 0&&Dt(Y.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&st(C)}function mt(C){let x=C.texture,B=n.get(C),Y=n.get(x);C.addEventListener("dispose",y);let tt=C.textures,yt=C.isWebGLCubeRenderTarget===!0,Mt=tt.length>1;if(Mt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=x.version,o.memory.textures++),yt){B.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[nt]=[];for(let ot=0;ot<x.mipmaps.length;ot++)B.__webglFramebuffer[nt][ot]=i.createFramebuffer()}else B.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let nt=0;nt<x.mipmaps.length;nt++)B.__webglFramebuffer[nt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let nt=0,ot=tt.length;nt<ot;nt++){let Rt=n.get(tt[nt]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&oe(C)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let nt=0;nt<tt.length;nt++){let ot=tt[nt];B.__webglColorRenderbuffer[nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[nt]);let Rt=r.convert(ot.format,ot.colorSpace),Gt=r.convert(ot.type),gt=_(ot.internalFormat,Rt,Gt,ot.normalized,ot.colorSpace,C.isXRRenderTarget===!0),Et=te(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,gt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,B.__webglColorRenderbuffer[nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Zt(B.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(yt){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Kt(i.TEXTURE_CUBE_MAP,x);for(let nt=0;nt<6;nt++)if(x.mipmaps&&x.mipmaps.length>0)for(let ot=0;ot<x.mipmaps.length;ot++)Dt(B.__webglFramebuffer[nt][ot],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ot);else Dt(B.__webglFramebuffer[nt],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);p(x)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let nt=0,ot=tt.length;nt<ot;nt++){let Rt=tt[nt],Gt=n.get(Rt),gt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(gt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,Gt.__webglTexture),Kt(gt,Rt),Dt(B.__webglFramebuffer,C,Rt,i.COLOR_ATTACHMENT0+nt,gt,0),p(Rt)&&b(gt)}e.unbindTexture()}else{let nt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(nt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,Y.__webglTexture),Kt(nt,x),x.mipmaps&&x.mipmaps.length>0)for(let ot=0;ot<x.mipmaps.length;ot++)Dt(B.__webglFramebuffer[ot],C,x,i.COLOR_ATTACHMENT0,nt,ot);else Dt(B.__webglFramebuffer,C,x,i.COLOR_ATTACHMENT0,nt,0);p(x)&&b(nt),e.unbindTexture()}C.depthBuffer&&st(C)}function pt(C){let x=C.textures;for(let B=0,Y=x.length;B<Y;B++){let tt=x[B];if(p(tt)){let yt=R(C),Mt=n.get(tt).__webglTexture;e.bindTexture(yt,Mt),b(yt),e.unbindTexture()}}}let bt=[],Jt=[];function vt(C){if(C.samples>0){if(oe(C)===!1){let x=C.textures,B=C.width,Y=C.height,tt=i.COLOR_BUFFER_BIT,yt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(C),nt=x.length>1;if(nt)for(let Rt=0;Rt<x.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);let ot=C.texture.mipmaps;ot&&ot.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Rt=0;Rt<x.length;Rt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[Rt]);let Gt=n.get(x[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,B,Y,0,0,B,Y,tt,i.NEAREST),l===!0&&(bt.length=0,Jt.length=0,bt.push(i.COLOR_ATTACHMENT0+Rt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(bt.push(yt),Jt.push(yt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Jt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),nt)for(let Rt=0;Rt<x.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[Rt]);let Gt=n.get(x[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let x=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function te(C){return Math.min(s.maxSamples,C.samples)}function oe(C){let x=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function N(C){let x=o.render.frame;h.get(C)!==x&&(h.set(C,x),C.update())}function ge(C,x){let B=C.colorSpace,Y=C.format,tt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Qr&&B!==ei&&(Me.getTransfer(B)===Ce?(Y!==Cn||tt!==Rn)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):le("WebGLTextures: Unsupported texture color space:",B)),x}function ue(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=W,this.getTextureUnits=F,this.setTextureUnits=G,this.setTexture2D=ct,this.setTexture2DArray=U,this.setTexture3D=J,this.setTextureCube=D,this.rebindTextures=ft,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=oe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function K1(i,t){function e(n,s=ei){let r,o=Me.getTransfer(s);if(n===Rn)return i.UNSIGNED_BYTE;if(n===Al)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Rl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Uh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Dh)return i.BYTE;if(n===Nh)return i.SHORT;if(n===ur)return i.UNSIGNED_SHORT;if(n===wl)return i.INT;if(n===jn)return i.UNSIGNED_INT;if(n===Hn)return i.FLOAT;if(n===ti)return i.HALF_FLOAT;if(n===Oh)return i.ALPHA;if(n===Bh)return i.RGB;if(n===Cn)return i.RGBA;if(n===hi)return i.DEPTH_COMPONENT;if(n===ts)return i.DEPTH_STENCIL;if(n===Cl)return i.RED;if(n===Pl)return i.RED_INTEGER;if(n===es)return i.RG;if(n===Il)return i.RG_INTEGER;if(n===Ll)return i.RGBA_INTEGER;if(n===Fo||n===Oo||n===Bo||n===zo)if(o===Ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Oo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Bo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Dl||n===Nl||n===Ul||n===Fl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Dl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ul)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ol||n===Bl||n===zl||n===Hl||n===Vl||n===Ho||n===kl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ol||n===Bl)return o===Ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Hl)return r.COMPRESSED_R11_EAC;if(n===Vl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ho)return r.COMPRESSED_RG11_EAC;if(n===kl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===$l||n===Zl||n===Jl||n===Kl||n===Ql||n===jl||n===tc||n===ec||n===nc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Gl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ql)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$l)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Kl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ql)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ec)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ic||n===sc||n===rc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ic)return o===Ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===oc||n===ac||n===Vo||n===lc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===oc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===dr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Q1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,j1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ou=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new mo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Xe({vertexShader:Q1,fragmentShader:j1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new It(new je(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},au=class extends ui{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,S=typeof XRWebGLBinding<"u",m=new ou,p={},b=e.getContextAttributes(),R=null,_=null,T=[],w=[],I=new St,y=null,v=null,A=new dn;A.viewport=new He;let L=new dn;L.viewport=new He;let O=[A,L],W=new Sl,F=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=T[X];return et===void 0&&(et=new tr,T[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=T[X];return et===void 0&&(et=new tr,T[X]=et),et.getGripSpace()},this.getHand=function(X){let et=T[X];return et===void 0&&(et=new tr,T[X]=et),et.getHandSpace()};function j(X){let et=w.indexOf(X.inputSource);if(et===-1)return;let At=T[et];At!==void 0&&(At.update(X.inputSource,X.frame,c||o),At.dispatchEvent({type:X.type,data:X.inputSource}))}function K(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",ct);for(let X=0;X<T.length;X++){let et=w[X];et!==null&&(w[X]=null,T[X].disconnect(et))}F=null,G=null,m.reset();for(let X in p)delete p[X];if(t.setRenderTarget(R),f=null,u=null,d=null,s=null,_=null,_t.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(I.width,I.height,!1),v!==null){let X=v.camera;X.fov=v.fov,X.zoom=v.zoom,X.updateProjectionMatrix(),v=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",K),s.addEventListener("inputsourceschange",ct),b.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(I),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Xt=null,Dt=null;b.depth&&(Dt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,At=b.stencil?ts:hi,Xt=b.stencil?dr:jn);let Zt={colorFormat:e.RGBA8,depthFormat:Dt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Zt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new An(u.textureWidth,u.textureHeight,{format:Cn,type:Rn,depthTexture:new Yi(u.textureWidth,u.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let At={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,At),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new An(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),_t.setContext(s),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ct(X){for(let et=0;et<X.removed.length;et++){let At=X.removed[et],Xt=w.indexOf(At);Xt>=0&&(w[Xt]=null,T[Xt].disconnect(At))}for(let et=0;et<X.added.length;et++){let At=X.added[et],Xt=w.indexOf(At);if(Xt===-1){for(let Zt=0;Zt<T.length;Zt++)if(Zt>=w.length){w.push(At),Xt=Zt;break}else if(w[Zt]===null){w[Zt]=At,Xt=Zt;break}if(Xt===-1)break}let Dt=T[Xt];Dt&&Dt.connect(At)}}let U=new E,J=new E;function D(X,et,At){U.setFromMatrixPosition(et.matrixWorld),J.setFromMatrixPosition(At.matrixWorld);let Xt=U.distanceTo(J),Dt=et.projectionMatrix.elements,Zt=At.projectionMatrix.elements,Lt=Dt[14]/(Dt[10]-1),st=Dt[14]/(Dt[10]+1),ft=(Dt[9]+1)/Dt[5],mt=(Dt[9]-1)/Dt[5],pt=(Dt[8]-1)/Dt[0],bt=(Zt[8]+1)/Zt[0],Jt=Lt*pt,vt=Lt*bt,te=Xt/(-pt+bt),oe=te*-pt;if(et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(oe),X.translateZ(te),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Dt[10]===-1)X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let N=Lt+te,ge=st+te,ue=Jt-oe,C=vt+(Xt-oe),x=ft*st/ge*N,B=mt*st/ge*N;X.projectionMatrix.makePerspective(ue,C,x,B,N,ge),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function rt(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let et=X.near,At=X.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(At=m.depthFar)),W.near=L.near=A.near=et,W.far=L.far=A.far=At,(F!==W.near||G!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),F=W.near,G=W.far),W.layers.mask=X.layers.mask|6,A.layers.mask=W.layers.mask&-5,L.layers.mask=W.layers.mask&-3;let Xt=X.parent,Dt=W.cameras;rt(W,Xt);for(let Zt=0;Zt<Dt.length;Zt++)rt(Dt[Zt],Xt);Dt.length===2?D(W,A,L):W.projectionMatrix.copy(A.projectionMatrix),v===null&&X.isPerspectiveCamera&&(v={camera:X,fov:X.fov,zoom:X.zoom}),ut(X,W,Xt)};function ut(X,et,At){At===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(At.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Qs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(X){return p[X]};let Yt=null;function Kt(X,et){if(h=et.getViewerPose(c||o),g=et,h!==null){let At=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let Xt=!1;At.length!==W.cameras.length&&(W.cameras.length=0,Xt=!0);for(let st=0;st<At.length;st++){let ft=At[st],mt=null;if(f!==null)mt=f.getViewport(ft);else{let bt=d.getViewSubImage(u,ft);mt=bt.viewport,st===0&&(t.setRenderTargetTextures(_,bt.colorTexture,bt.depthStencilTexture),t.setRenderTarget(_))}let pt=O[st];pt===void 0&&(pt=new dn,pt.layers.enable(st),pt.viewport=new He,O[st]=pt),pt.matrix.fromArray(ft.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(ft.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(mt.x,mt.y,mt.width,mt.height),st===0&&(W.matrix.copy(pt.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Xt===!0&&W.cameras.push(pt)}let Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=n.getBinding();let st=d.getDepthInformation(At[0]);st&&st.isValid&&st.texture&&m.init(st,s.renderState)}if(Dt&&Dt.includes("camera-access")&&S){t.state.unbindTexture(),d=n.getBinding();for(let st=0;st<At.length;st++){let ft=At[st].camera;if(ft){let mt=p[ft];mt||(mt=new mo,p[ft]=mt);let pt=d.getCameraImage(ft);mt.sourceTexture=pt}}}}for(let At=0;At<T.length;At++){let Xt=w[At],Dt=T[At];Xt!==null&&Dt!==void 0&&Dt.update(Xt,et,c||o)}Yt&&Yt(X,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}let _t=new Rf;_t.setAnimationLoop(Kt),this.setAnimationLoop=function(X){Yt=X},this.dispose=function(){}}},ty=new Pe,Nf=new de;Nf.set(-1,0,0,0,1,0,0,0,1);function ey(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Gh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,R,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),S(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,R):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p),R=b.envMap,_=b.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(ty.makeRotationFromEuler(_)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Nf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,R){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=R*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ny(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,T){let w=T.program;n.uniformBlockBinding(_,w)}function c(_,T){let w=s[_.id];w===void 0&&(m(_),w=h(_),s[_.id]=w,_.addEventListener("dispose",b));let I=T.program;n.updateUBOMapping(_,I);let y=t.render.frame;r[_.id]!==y&&(u(_),r[_.id]=y)}function h(_){let T=d();_.__bindingPointIndex=T;let w=i.createBuffer(),I=_.__size,y=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,I,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,w),w}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let T=s[_.id],w=_.uniforms,I=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let y=0,v=w.length;y<v;y++){let A=w[y];if(Array.isArray(A))for(let L=0,O=A.length;L<O;L++)f(A[L],y,L,I);else f(A,y,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,T,w,I){if(S(_,T,w,I)===!0){let y=_.__offset,v=_.value;if(Array.isArray(v)){let A=0;for(let L=0;L<v.length;L++){let O=v[L],W=p(O);g(O,_.__data,A),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(A+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(v,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,_.__data)}}function g(_,T,w){typeof _=="number"||typeof _=="boolean"?T[0]=_:_.isMatrix3?(T[0]=_.elements[0],T[1]=_.elements[1],T[2]=_.elements[2],T[3]=0,T[4]=_.elements[3],T[5]=_.elements[4],T[6]=_.elements[5],T[7]=0,T[8]=_.elements[6],T[9]=_.elements[7],T[10]=_.elements[8],T[11]=0):ArrayBuffer.isView(_)?T.set(new _.constructor(_.buffer,_.byteOffset,T.length)):_.toArray(T,w)}function S(_,T,w,I){let y=_.value,v=T+"_"+w;if(I[v]===void 0)return typeof y=="number"||typeof y=="boolean"?I[v]=y:ArrayBuffer.isView(y)?I[v]=y.slice():I[v]=y.clone(),!0;{let A=I[v];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return I[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(A.equals(y)===!1)return A.copy(y),!0}}return!1}function m(_){let T=_.uniforms,w=0,I=16;for(let v=0,A=T.length;v<A;v++){let L=Array.isArray(T[v])?T[v]:[T[v]];for(let O=0,W=L.length;O<W;O++){let F=L[O],G=Array.isArray(F.value)?F.value:[F.value];for(let j=0,K=G.length;j<K;j++){let ct=G[j],U=p(ct),J=w%I,D=J%U.boundary,rt=J+D;w+=D,rt!==0&&I-rt<U.storage&&(w+=I-rt),F.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=w,w+=U.storage}}}let y=w%I;return y>0&&(w+=I-y),_.__size=w,_.__cache={},this}function p(_){let T={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(T.boundary=4,T.storage=4):_.isVector2?(T.boundary=8,T.storage=8):_.isVector3||_.isColor?(T.boundary=16,T.storage=12):_.isVector4?(T.boundary=16,T.storage=16):_.isMatrix3?(T.boundary=48,T.storage=48):_.isMatrix4?(T.boundary=64,T.storage=64):_.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(T.boundary=16,T.storage=_.byteLength):re("WebGLRenderer: Unsupported uniform value type.",_),T}function b(_){let T=_.target;T.removeEventListener("dispose",b);let w=o.indexOf(T.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function R(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:R}}var iy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),xi=null;function sy(){return xi===null&&(xi=new ms(iy,16,16,es,ti),xi.name="DFG_LUT",xi.minFilter=fn,xi.magFilter=fn,xi.wrapS=zn,xi.wrapT=zn,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}var gc=class{constructor(t={}){let{canvas:e=Yd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Rn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let S=f,m=new Set([Ll,Il,Pl]),p=new Set([Rn,jn,ur,dr,Al,Rl]),b=new Uint32Array(4),R=new Int32Array(4),_=new E,T=null,w=null,I=[],y=[],v=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,L=!1,O=null,W=null,F=null,G=null;this._outputColorSpace=$e;let j=0,K=0,ct=null,U=-1,J=null,D=new He,rt=new He,ut=null,Yt=new jt(0),Kt=0,_t=e.width,X=e.height,et=1,At=null,Xt=null,Dt=new He(0,0,_t,X),Zt=new He(0,0,_t,X),Lt=!1,st=new nr,ft=!1,mt=!1,pt=new Pe,bt=new E,Jt=new He,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},te=!1;function oe(){return ct===null?et:1}let N=n;function ge(M,V){return e.getContext(M,V)}let ue,C,x,B,Y,tt,yt,Mt,nt,ot,Rt,Gt,gt,Et,Ht,$t,ae,H,Ct,at,lt,dt,it;try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ml}`),e.addEventListener("webglcontextlost",Tt,!1),e.addEventListener("webglcontextrestored",ie,!1),e.addEventListener("webglcontextcreationerror",Le,!1),N===null){let V="webgl2";if(N=ge(V,M),N===null)throw ge(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}xt()}catch(M){throw e.removeEventListener("webglcontextlost",Tt,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",Le,!1),le("WebGLRenderer: "+M.message),M}function xt(){ue=new u_(N),ue.init(),lt=new K1(N,ue),C=new e_(N,ue,t,lt),x=new Z1(N,ue),C.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),W=N.createFramebuffer(),F=N.createFramebuffer(),G=N.createFramebuffer(),B=new p_(N),Y=new U1,tt=new J1(N,ue,x,Y,C,lt,B),yt=new h_(A),Mt=new gm(N),dt=new jx(N,Mt),nt=new d_(N,Mt,B,dt),ot=new g_(N,nt,Mt,dt,B),H=new m_(N,C,tt),Ht=new n_(Y),Rt=new N1(A,yt,ue,C,dt,Ht),Gt=new ey(A,Y),gt=new O1,Et=new G1(ue),ae=new Qx(A,yt,x,ot,g,l),$t=new $1(A,ot,C),it=new ny(N,B,C,x),Ct=new t_(N,ue,B),at=new f_(N,ue,B),B.programs=Rt.programs,A.capabilities=C,A.extensions=ue,A.properties=Y,A.renderLists=gt,A.shadowMap=$t,A.state=x,A.info=B}S!==Rn&&(v=new __(S,e.width,e.height,a,s,r));let q=new au(A,N);this.xr=q,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let M=ue.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ue.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(M){M!==void 0&&(et=M,this.setSize(_t,X,!1))},this.getSize=function(M){return M.set(_t,X)},this.setSize=function(M,V,Q=!0){if(q.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}_t=M,X=V,e.width=Math.floor(M*et),e.height=Math.floor(V*et),Q===!0&&(e.style.width=M+"px",e.style.height=V+"px"),v!==null&&v.setSize(e.width,e.height),this.setViewport(0,0,M,V)},this.getDrawingBufferSize=function(M){return M.set(_t*et,X*et).floor()},this.setDrawingBufferSize=function(M,V,Q){_t=M,X=V,et=Q,e.width=Math.floor(M*Q),e.height=Math.floor(V*Q),this.setViewport(0,0,M,V)},this.setEffects=function(M){if(S===Rn){le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let V=0;V<M.length;V++)if(M[V].isOutputPass===!0){re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(D)},this.getViewport=function(M){return M.copy(Dt)},this.setViewport=function(M,V,Q,Z){M.isVector4?Dt.set(M.x,M.y,M.z,M.w):Dt.set(M,V,Q,Z),x.viewport(D.copy(Dt).multiplyScalar(et).round())},this.getScissor=function(M){return M.copy(Zt)},this.setScissor=function(M,V,Q,Z){M.isVector4?Zt.set(M.x,M.y,M.z,M.w):Zt.set(M,V,Q,Z),x.scissor(rt.copy(Zt).multiplyScalar(et).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(M){x.setScissorTest(Lt=M)},this.setOpaqueSort=function(M){At=M},this.setTransparentSort=function(M){Xt=M},this.getClearColor=function(M){return M.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(M=!0,V=!0,Q=!0){let Z=0;if(M){let $=!1;if(ct!==null){let Ut=ct.texture.format;$=m.has(Ut)}if($){let Ut=ct.texture.type,Ot=p.has(Ut),Nt=ae.getClearColor(),Wt=ae.getClearAlpha(),qt=Nt.r,me=Nt.g,ee=Nt.b;Ot?(b[0]=qt,b[1]=me,b[2]=ee,b[3]=Wt,N.clearBufferuiv(N.COLOR,0,b)):(R[0]=qt,R[1]=me,R[2]=ee,R[3]=Wt,N.clearBufferiv(N.COLOR,0,R))}else Z|=N.COLOR_BUFFER_BIT}V&&(Z|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&N.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),O=M},this.dispose=function(){e.removeEventListener("webglcontextlost",Tt,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",Le,!1),ae.dispose(),gt.dispose(),Et.dispose(),Y.dispose(),yt.dispose(),ot.dispose(),dt.dispose(),it.dispose(),Rt.dispose(),q.dispose(),q.removeEventListener("sessionstart",Es),q.removeEventListener("sessionend",Ts),Gn.stop()};function Tt(M){M.preventDefault(),eo("WebGLRenderer: Context Lost."),L=!0}function ie(){eo("WebGLRenderer: Context Restored."),L=!1;let M=B.autoReset,V=$t.enabled,Q=$t.autoUpdate,Z=$t.needsUpdate,$=$t.type;xt(),B.autoReset=M,$t.enabled=V,$t.autoUpdate=Q,$t.needsUpdate=Z,$t.type=$}function Le(M){le("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ln(M){let V=M.target;V.removeEventListener("dispose",ln),ii(V)}function ii(M){Fi(M),Y.remove(M)}function Fi(M){let V=Y.get(M).programs;V!==void 0&&(V.forEach(function(Q){Rt.releaseProgram(Q)}),M.isShaderMaterial&&Rt.releaseShaderCache(M))}this.renderBufferDirect=function(M,V,Q,Z,$,Ut){V===null&&(V=vt);let Ot=$.isMesh&&$.matrixWorld.determinantAffine()<0,Nt=ta(M,V,Q,Z,$);x.setMaterial(Z,Ot);let Wt=Q.index,qt=1;if(Z.wireframe===!0){if(Wt=nt.getWireframeAttribute(Q),Wt===void 0)return;qt=2}let me=Q.drawRange,ee=Q.attributes.position,Bt=me.start*qt,be=(me.start+me.count)*qt;Ut!==null&&(Bt=Math.max(Bt,Ut.start*qt),be=Math.min(be,(Ut.start+Ut.count)*qt)),Wt!==null?(Bt=Math.max(Bt,0),be=Math.min(be,Wt.count)):ee!=null&&(Bt=Math.max(Bt,0),be=Math.min(be,ee.count));let Ge=be-Bt;if(Ge<0||Ge===1/0)return;dt.setup($,Z,Nt,Q,Wt);let Ne,Ee=Ct;if(Wt!==null&&(Ne=Mt.get(Wt),Ee=at,Ee.setIndex(Ne)),$.isMesh)Z.wireframe===!0?(x.setLineWidth(Z.wireframeLinewidth*oe()),Ee.setMode(N.LINES)):Ee.setMode(N.TRIANGLES);else if($.isLine){let tn=Z.linewidth;tn===void 0&&(tn=1),x.setLineWidth(tn*oe()),$.isLineSegments?Ee.setMode(N.LINES):$.isLineLoop?Ee.setMode(N.LINE_LOOP):Ee.setMode(N.LINE_STRIP)}else $.isPoints?Ee.setMode(N.POINTS):$.isSprite&&Ee.setMode(N.TRIANGLES);if($.isBatchedMesh)if(ue.get("WEBGL_multi_draw"))Ee.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let tn=$._multiDrawStarts,Vt=$._multiDrawCounts,cn=$._multiDrawCount,ve=Wt?Mt.get(Wt).bytesPerElement:1,he=Y.get(Z).currentProgram.getUniforms();for(let hn=0;hn<cn;hn++)he.setValue(N,"_gl_DrawID",hn),Ee.render(tn[hn]/ve,Vt[hn])}else if($.isInstancedMesh)Ee.renderInstances(Bt,Ge,$.count);else if(Q.isInstancedBufferGeometry){let tn=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Vt=Math.min(Q.instanceCount,tn);Ee.renderInstances(Bt,Ge,Vt)}else Ee.render(Bt,Ge)};function Oi(M,V,Q,Z){O!==null&&M.isNodeMaterial&&O.setObject(Z,M),ft===!0&&Ht.setState(M,Q,!1),M.transparent===!0&&M.side===Ae&&M.forceSinglePass===!1?(M.side=sn,M.needsUpdate=!0,Be(M,V,Z),M.side=Ki,M.needsUpdate=!0,Be(M,V,Z),M.side=Ae):Be(M,V,Z)}this.compile=function(M,V,Q=null){Q===null&&(Q=M),O!==null&&O.renderStart(M,V,Q),w=Et.get(Q),w.init(V),y.push(w),Q.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(w.pushLight($),$.castShadow&&w.pushShadow($))}),M!==Q&&M.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(w.pushLight($),$.castShadow&&w.pushShadow($))}),w.setupLights(),O!==null&&O.updateLights(w.state.lightsArray),mt=this.localClippingEnabled,ft=Ht.init(this.clippingPlanes,mt),ft===!0&&Ht.setGlobalState(this.clippingPlanes,V),O!==null&&$t.render(w.state.shadowsArray,Q,V);let Z=new Set;return M.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Ut=$.material;if(Ut)if(Array.isArray(Ut))for(let Ot=0;Ot<Ut.length;Ot++){let Nt=Ut[Ot];Oi(Nt,Q,V,$),Z.add(Nt)}else Oi(Ut,Q,V,$),Z.add(Ut)}),w=y.pop(),O!==null&&O.renderEnd(),Z},this.compileAsync=function(M,V,Q=null){let Z=this.compile(M,V,Q);return new Promise($=>{function Ut(){if(Z.forEach(function(Ot){let Wt=Y.get(Ot).currentProgram;(Wt===void 0||Wt.isReady())&&Z.delete(Ot)}),Z.size===0){$(M);return}setTimeout(Ut,10)}ue.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let bs=null;function Rc(M){bs&&bs(M)}function Es(){Gn.stop()}function Ts(){Gn.start()}let Gn=new Rf;Gn.setAnimationLoop(Rc),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(M){bs=M,q.setAnimationLoop(M),M===null?Gn.stop():Gn.start()},q.addEventListener("sessionstart",Es),q.addEventListener("sessionend",Ts),this.render=function(M,V){if(V!==void 0&&V.isCamera!==!0){le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;O!==null&&O.renderStart(M,V);let Q=q.enabled===!0&&q.isPresenting===!0,Z=v!==null&&(ct===null||Q)&&v.begin(A,ct);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(q.cameraAutoUpdate===!0&&q.updateCamera(V),V=q.getCamera()),M.isScene===!0&&M.onBeforeRender(A,M,V,ct),w=Et.get(M,y.length),w.init(V),w.state.textureUnits=tt.getTextureUnits(),y.push(w),pt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),st.setFromProjectionMatrix(pt,Kn,V.reversedDepth),mt=this.localClippingEnabled,ft=Ht.init(this.clippingPlanes,mt),T=gt.get(M,I.length),T.init(),I.push(T),q.enabled===!0&&q.isPresenting===!0){let Ot=A.xr.getDepthSensingMesh();Ot!==null&&ws(Ot,V,-1/0,A.sortObjects)}ws(M,V,0,A.sortObjects),T.finish(),O!==null&&O.updateLights(w.state.lightsArray),A.sortObjects===!0&&T.sort(At,Xt),te=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,te&&ae.addToRenderList(T,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ft===!0&&Ht.beginShadows();let $=w.state.shadowsArray;if($t.render($,M,V),ft===!0&&Ht.endShadows(),(Z&&v.hasRenderPass())===!1){let Ot=T.opaque,Nt=T.transmissive;if(w.setupLights(),V.isArrayCamera){let Wt=V.cameras;if(Nt.length>0)for(let qt=0,me=Wt.length;qt<me;qt++){let ee=Wt[qt];Ir(Ot,Nt,M,ee)}te&&ae.render(M);for(let qt=0,me=Wt.length;qt<me;qt++){let ee=Wt[qt];Pr(T,M,ee,ee.viewport)}}else Nt.length>0&&Ir(Ot,Nt,M,V),te&&ae.render(M),Pr(T,M,V)}ct!==null&&K===0&&(tt.updateMultisampleRenderTarget(ct),tt.updateRenderTargetMipmap(ct)),Z&&v.end(A),M.isScene===!0&&M.onAfterRender(A,M,V),dt.resetDefaultState(),U=-1,J=null,y.pop(),y.length>0?(w=y[y.length-1],tt.setTextureUnits(w.state.textureUnits),ft===!0&&Ht.setGlobalState(A.clippingPlanes,w.state.camera)):w=null,I.pop(),I.length>0?T=I[I.length-1]:T=null,O!==null&&O.renderEnd()};function ws(M,V,Q,Z){if(M.visible===!1)return;if(M.layers.test(V.layers)){if(M.isGroup)Q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(V);else if(M.isLightProbeGrid)w.pushLightProbeGrid(M);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(st)){Z&&Jt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(pt);let Ot=ot.update(M),Nt=M.material;Nt.visible&&T.push(M,Ot,Nt,Q,Jt.z,null,V)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(st))){let Ot=ot.update(M),Nt=M.material;if(Z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Jt.copy(M.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),Jt.copy(Ot.boundingSphere.center)),Jt.applyMatrix4(M.matrixWorld).applyMatrix4(pt)),Array.isArray(Nt)){let Wt=Ot.groups;for(let qt=0,me=Wt.length;qt<me;qt++){let ee=Wt[qt],Bt=Nt[ee.materialIndex];Bt&&Bt.visible&&T.push(M,Ot,Bt,Q,Jt.z,ee,V)}}else Nt.visible&&T.push(M,Ot,Nt,Q,Jt.z,null,V)}}let Ut=M.children;for(let Ot=0,Nt=Ut.length;Ot<Nt;Ot++)ws(Ut[Ot],V,Q,Z)}function Pr(M,V,Q,Z){let{opaque:$,transmissive:Ut,transparent:Ot}=M;w.setupLightsView(Q),ft===!0&&Ht.setGlobalState(A.clippingPlanes,Q),Z&&x.viewport(D.copy(Z)),$.length>0&&os($,V,Q),Ut.length>0&&os(Ut,V,Q),Ot.length>0&&os(Ot,V,Q),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Ir(M,V,Q,Z){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Z.id]===void 0){let Bt=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Z.id]=new An(1,1,{generateMipmaps:!0,type:Bt?ti:Rn,minFilter:ji,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Me.workingColorSpace})}let Ut=w.state.transmissionRenderTarget[Z.id],Ot=Z.viewport||D;Ut.setSize(Ot.z*A.transmissionResolutionScale,Ot.w*A.transmissionResolutionScale);let Nt=A.getRenderTarget(),Wt=A.getActiveCubeFace(),qt=A.getActiveMipmapLevel();A.setRenderTarget(Ut),A.getClearColor(Yt),Kt=A.getClearAlpha(),Kt<1&&A.setClearColor(16777215,.5),A.clear(),te&&ae.render(Q);let me=A.toneMapping;A.toneMapping=Nn;let ee=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),w.setupLightsView(Z),ft===!0&&Ht.setGlobalState(A.clippingPlanes,Z),os(M,Q,Z),tt.updateMultisampleRenderTarget(Ut),tt.updateRenderTargetMipmap(Ut),ue.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let be=0,Ge=V.length;be<Ge;be++){let Ne=V[be],{object:Ee,geometry:tn,material:Vt,group:cn}=Ne;if(Vt.side===Ae&&Ee.layers.test(Z.layers)){let ve=Vt.side;Vt.side=sn,Vt.needsUpdate=!0,Lr(Ee,Q,Z,tn,Vt,cn),Vt.side=ve,Vt.needsUpdate=!0,Bt=!0}}Bt===!0&&(tt.updateMultisampleRenderTarget(Ut),tt.updateRenderTargetMipmap(Ut))}A.setRenderTarget(Nt,Wt,qt),A.setClearColor(Yt,Kt),ee!==void 0&&(Z.viewport=ee),A.toneMapping=me}function os(M,V,Q){let Z=V.isScene===!0?V.overrideMaterial:null;for(let $=0,Ut=M.length;$<Ut;$++){let Ot=M[$],{object:Nt,geometry:Wt,group:qt}=Ot,me=Ot.material;me.allowOverride===!0&&Z!==null&&(me=Z),Nt.layers.test(Q.layers)&&Lr(Nt,V,Q,Wt,me,qt)}}function Lr(M,V,Q,Z,$,Ut){O!==null&&$.isNodeMaterial&&O.setObject(M,$),M.onBeforeRender(A,V,Q,Z,$,Ut),M.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),$.onBeforeRender(A,V,Q,Z,M,Ut),$.transparent===!0&&$.side===Ae&&$.forceSinglePass===!1?($.side=sn,$.needsUpdate=!0,A.renderBufferDirect(Q,V,Z,$,M,Ut),$.side=Ki,$.needsUpdate=!0,A.renderBufferDirect(Q,V,Z,$,M,Ut),$.side=Ae):A.renderBufferDirect(Q,V,Z,$,M,Ut),M.onAfterRender(A,V,Q,Z,$,Ut)}function Be(M,V,Q){V.isScene!==!0&&(V=vt);let Z=Y.get(M),$=w.state.lights,Ut=w.state.shadowsArray,Ot=$.state.version,Nt=Rt.getParameters(M,$.state,Ut,V,Q,w.state.lightProbeGridArray),Wt=Rt.getProgramCacheKey(Nt),qt=Z.programs;Z.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?V.environment:null,Z.fog=V.fog;let me=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;Z.envMap=yt.get(M.envMap||Z.environment,me),Z.envMapRotation=Z.environment!==null&&M.envMap===null?V.environmentRotation:M.envMapRotation,qt===void 0&&(M.addEventListener("dispose",ln),qt=new Map,Z.programs=qt);let ee=qt.get(Wt);if(ee!==void 0){if(Z.currentProgram===ee&&Z.lightsStateVersion===Ot)return Dr(M,Nt),ee}else Nt.uniforms=Rt.getUniforms(M),O!==null&&M.isNodeMaterial&&O.build(M,Q,Nt),M.onBeforeCompile(Nt,A),ee=Rt.acquireProgram(Nt,Wt),qt.set(Wt,ee),Z.uniforms=Nt.uniforms;let Bt=Z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Bt.clippingPlanes=Ht.uniform),Dr(M,Nt),Z.needsLights=ea(M),Z.lightsStateVersion=Ot,Z.needsLights&&(Bt.ambientLightColor.value=$.state.ambient,Bt.lightProbe.value=$.state.probe,Bt.sunLights.value=$.state.sun,Bt.sunLightShadows.value=$.state.sunShadow,Bt.directionalLights.value=$.state.directional,Bt.directionalLightShadows.value=$.state.directionalShadow,Bt.spotLights.value=$.state.spot,Bt.spotLightShadows.value=$.state.spotShadow,Bt.rectAreaLights.value=$.state.rectArea,Bt.ltc_1.value=$.state.rectAreaLTC1,Bt.ltc_2.value=$.state.rectAreaLTC2,Bt.pointLights.value=$.state.point,Bt.pointLightShadows.value=$.state.pointShadow,Bt.hemisphereLights.value=$.state.hemi,Bt.sunShadowMatrix.value=$.state.sunShadowMatrix,Bt.sunShadowCascade.value=$.state.sunShadowCascade,Bt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Bt.spotLightMatrix.value=$.state.spotLightMatrix,Bt.spotLightMap.value=$.state.spotLightMap,Bt.pointShadowMatrix.value=$.state.pointShadowMatrix),Z.lightProbeGrid=w.state.lightProbeGridArray.length>0,Z.currentProgram=ee,Z.uniformsList=null,ee}function Wn(M){if(M.uniformsList===null){let V=M.currentProgram.getUniforms();M.uniformsList=gr.seqWithValue(V.seq,M.uniforms)}return M.uniformsList}function Dr(M,V){let Q=Y.get(M);Q.outputColorSpace=V.outputColorSpace,Q.batching=V.batching,Q.batchingColor=V.batchingColor,Q.instancing=V.instancing,Q.instancingColor=V.instancingColor,Q.instancingMorph=V.instancingMorph,Q.skinning=V.skinning,Q.morphTargets=V.morphTargets,Q.morphNormals=V.morphNormals,Q.morphColors=V.morphColors,Q.morphTargetsCount=V.morphTargetsCount,Q.numClippingPlanes=V.numClippingPlanes,Q.numIntersection=V.numClipIntersection,Q.vertexAlphas=V.vertexAlphas,Q.vertexTangents=V.vertexTangents,Q.toneMapping=V.toneMapping}function jo(M,V){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;_.setFromMatrixPosition(V.matrixWorld);for(let Q=0,Z=M.length;Q<Z;Q++){let $=M[Q];if($.texture!==null&&$.boundingBox.containsPoint(_))return $}return null}function ta(M,V,Q,Z,$){V.isScene!==!0&&(V=vt),tt.resetTextureUnits();let Ut=V.fog,Ot=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?V.environment:null,Nt=ct===null?A.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Me.workingColorSpace,Wt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,qt=yt.get(Z.envMap||Ot,Wt),me=Z.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ee=!!Q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Bt=!!Q.morphAttributes.position,be=!!Q.morphAttributes.normal,Ge=!!Q.morphAttributes.color,Ne=Nn;Z.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Ne=A.toneMapping);let Ee=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,tn=Ee!==void 0?Ee.length:0,Vt=Y.get(Z),cn=w.state.lights;if(ft===!0&&(mt===!0||M!==J)){let Re=M===J&&Z.id===U;Ht.setState(Z,M,Re)}let ve=!1;Z.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==cn.state.version||Vt.outputColorSpace!==Nt||$.isBatchedMesh&&Vt.batching===!1||!$.isBatchedMesh&&Vt.batching===!0||$.isBatchedMesh&&Vt.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Vt.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Vt.instancing===!1||!$.isInstancedMesh&&Vt.instancing===!0||$.isSkinnedMesh&&Vt.skinning===!1||!$.isSkinnedMesh&&Vt.skinning===!0||$.isInstancedMesh&&Vt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Vt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Vt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Vt.instancingMorph===!1&&$.morphTexture!==null||Vt.envMap!==qt||Z.fog===!0&&Vt.fog!==Ut||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Ht.numPlanes||Vt.numIntersection!==Ht.numIntersection)||Vt.vertexAlphas!==me||Vt.vertexTangents!==ee||Vt.morphTargets!==Bt||Vt.morphNormals!==be||Vt.morphColors!==Ge||Vt.toneMapping!==Ne||Vt.morphTargetsCount!==tn||!!Vt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ve=!0):(ve=!0,Vt.__version=Z.version);let he=Vt.currentProgram;ve===!0&&(he=Be(Z,V,$),O&&Z.isNodeMaterial&&O.onUpdateProgram(Z,he,Vt));let hn=!1,Xn=!1,si=!1,Te=he.getUniforms(),ze=Vt.uniforms;if(x.useProgram(he.program)&&(hn=!0,Xn=!0,si=!0),Z.id!==U&&(U=Z.id,Xn=!0),Vt.needsLights){let Re=jo(w.state.lightProbeGridArray,$);Vt.lightProbeGrid!==Re&&(Vt.lightProbeGrid=Re,Xn=!0)}if(hn||J!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Te.setValue(N,"projectionMatrix",M.projectionMatrix),Te.setValue(N,"viewMatrix",M.matrixWorldInverse);let On=Te.map.cameraPosition;On!==void 0&&On.setValue(N,bt.setFromMatrixPosition(M.matrixWorld)),C.logarithmicDepthBuffer&&Te.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Te.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),J!==M&&(J=M,Xn=!0,si=!0)}if(Vt.needsLights&&(cn.state.sunShadowMap.length>0&&Te.setValue(N,"sunShadowMap",cn.state.sunShadowMap,tt),cn.state.directionalShadowMap.length>0&&Te.setValue(N,"directionalShadowMap",cn.state.directionalShadowMap,tt),cn.state.spotShadowMap.length>0&&Te.setValue(N,"spotShadowMap",cn.state.spotShadowMap,tt),cn.state.pointShadowMap.length>0&&Te.setValue(N,"pointShadowMap",cn.state.pointShadowMap,tt)),$.isSkinnedMesh){Te.setOptional(N,$,"bindMatrix"),Te.setOptional(N,$,"bindMatrixInverse");let Re=$.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),Te.setValue(N,"boneTexture",Re.boneTexture,tt))}$.isBatchedMesh&&(Te.setOptional(N,$,"batchingTexture"),Te.setValue(N,"batchingTexture",$._matricesTexture,tt),Te.setOptional(N,$,"batchingIdTexture"),Te.setValue(N,"batchingIdTexture",$._indirectTexture,tt),Te.setOptional(N,$,"batchingColorTexture"),$._colorsTexture!==null&&Te.setValue(N,"batchingColorTexture",$._colorsTexture,tt));let ri=Q.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&H.update($,Q,he),(Xn||Vt.receiveShadow!==$.receiveShadow)&&(Vt.receiveShadow=$.receiveShadow,Te.setValue(N,"receiveShadow",$.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&V.environment!==null&&(ze.envMapIntensity.value=V.environmentIntensity),ze.dfgLUT!==void 0&&(ze.dfgLUT.value=sy()),Xn){if(Te.setValue(N,"toneMappingExposure",A.toneMappingExposure),Vt.needsLights&&Cc(ze,si),Ut&&Z.fog===!0&&Gt.refreshFogUniforms(ze,Ut),Gt.refreshMaterialUniforms(ze,Z,et,X,w.state.transmissionRenderTarget[M.id]),Vt.needsLights&&Vt.lightProbeGrid){let Re=Vt.lightProbeGrid;ze.probesSH.value=Re.texture,ze.probesMin.value.copy(Re.boundingBox.min),ze.probesMax.value.copy(Re.boundingBox.max),ze.probesResolution.value.copy(Re.resolution)}gr.upload(N,Wn(Vt),ze,tt)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(gr.upload(N,Wn(Vt),ze,tt),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Te.setValue(N,"center",$.center),Te.setValue(N,"modelViewMatrix",$.modelViewMatrix),Te.setValue(N,"normalMatrix",$.normalMatrix),Te.setValue(N,"modelMatrix",$.matrixWorld),Z.uniformsGroups!==void 0){let Re=Z.uniformsGroups;for(let On=0,Bi=Re.length;On<Bi;On++){let as=Re[On];it.update(as,he),it.bind(as,he)}}return he}function Cc(M,V){M.ambientLightColor.needsUpdate=V,M.lightProbe.needsUpdate=V,M.sunLights.needsUpdate=V,M.sunLightShadows.needsUpdate=V,M.directionalLights.needsUpdate=V,M.directionalLightShadows.needsUpdate=V,M.pointLights.needsUpdate=V,M.pointLightShadows.needsUpdate=V,M.spotLights.needsUpdate=V,M.spotLightShadows.needsUpdate=V,M.rectAreaLights.needsUpdate=V,M.hemisphereLights.needsUpdate=V}function ea(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return ct},this.setRenderTargetTextures=function(M,V,Q){let Z=Y.get(M);Z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),Y.get(M.texture).__webglTexture=V,Y.get(M.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:Q,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,V){let Q=Y.get(M);Q.__webglFramebuffer=V,Q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(M,V=0,Q=0){ct=M,j=V,K=Q;let Z=null,$=!1,Ut=!1;if(M){let Nt=Y.get(M);if(Nt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(N.FRAMEBUFFER,Nt.__webglFramebuffer),D.copy(M.viewport),rt.copy(M.scissor),ut=M.scissorTest,x.viewport(D),x.scissor(rt),x.setScissorTest(ut),U=-1;return}else if(Nt.__webglFramebuffer===void 0)tt.setupRenderTarget(M);else if(Nt.__hasExternalTextures)tt.rebindTextures(M,Y.get(M.texture).__webglTexture,Y.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let me=M.depthTexture;if(Nt.__boundDepthTexture!==me){if(me!==null&&Y.has(me)&&(M.width!==me.image.width||M.height!==me.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(M)}}let Wt=M.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Ut=!0);let qt=Y.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(qt[V])?Z=qt[V][Q]:Z=qt[V],$=!0):M.samples>0&&tt.useMultisampledRTT(M)===!1?Z=Y.get(M).__webglMultisampledFramebuffer:Array.isArray(qt)?Z=qt[Q]:Z=qt,D.copy(M.viewport),rt.copy(M.scissor),ut=M.scissorTest}else D.copy(Dt).multiplyScalar(et).floor(),rt.copy(Zt).multiplyScalar(et).floor(),ut=Lt;if(Q!==0&&(Z=W),x.bindFramebuffer(N.FRAMEBUFFER,Z)&&x.drawBuffers(M,Z),x.viewport(D),x.scissor(rt),x.setScissorTest(ut),$){let Nt=Y.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+V,Nt.__webglTexture,Q)}else if(Ut){let Nt=V;for(let Wt=0;Wt<M.textures.length;Wt++){let qt=Y.get(M.textures[Wt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Wt,qt.__webglTexture,Q,Nt)}}else if(M!==null&&Q!==0){let Nt=Y.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Nt.__webglTexture,Q)}U=-1};function Fn(M){let V=Y.get(M);return(V.__readFormat!==M.format||V.__readType!==M.type)&&(V.__readFormat=M.format,V.__readType=M.type,V.__formatReadable=C.textureFormatReadable(M.format),V.__typeReadable=C.textureTypeReadable(M.type)),V}this.readRenderTargetPixels=function(M,V,Q,Z,$,Ut,Ot,Nt=0){if(!(M&&M.isWebGLRenderTarget)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=Y.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ot!==void 0&&(Wt=Wt[Ot]),Wt){x.bindFramebuffer(N.FRAMEBUFFER,Wt);try{let qt=M.textures[Nt],me=qt.format,ee=qt.type;M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Nt);let Bt=Fn(qt);if(Bt.__formatReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Bt.__typeReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=M.width-Z&&Q>=0&&Q<=M.height-$&&N.readPixels(V,Q,Z,$,lt.convert(me),lt.convert(ee),Ut)}finally{let qt=ct!==null?Y.get(ct).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(M,V,Q,Z,$,Ut,Ot,Nt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=Y.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ot!==void 0&&(Wt=Wt[Ot]),Wt)if(V>=0&&V<=M.width-Z&&Q>=0&&Q<=M.height-$){x.bindFramebuffer(N.FRAMEBUFFER,Wt);let qt=M.textures[Nt],me=qt.format,ee=qt.type;M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Nt);let Bt=Fn(qt);if(Bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let be=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,be),N.bufferData(N.PIXEL_PACK_BUFFER,Ut.byteLength,N.STREAM_READ),N.readPixels(V,Q,Z,$,lt.convert(me),lt.convert(ee),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Ge=ct!==null?Y.get(ct).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,Ge);let Ne=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Zd(N,Ne,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,be),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Ut),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(be),N.deleteSync(Ne),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,V=null,Q=0){let Z=Math.pow(2,-Q),$=Math.floor(M.image.width*Z),Ut=Math.floor(M.image.height*Z),Ot=V!==null?V.x:0,Nt=V!==null?V.y:0;tt.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,Q,0,0,Ot,Nt,$,Ut),x.unbindTexture()},this.copyTextureToTexture=function(M,V,Q=null,Z=null,$=0,Ut=0){let Ot,Nt,Wt,qt,me,ee,Bt,be,Ge,Ne=M.isCompressedTexture?M.mipmaps[Ut]:M.image;if(Q!==null)Ot=Q.max.x-Q.min.x,Nt=Q.max.y-Q.min.y,Wt=Q.isBox3?Q.max.z-Q.min.z:1,qt=Q.min.x,me=Q.min.y,ee=Q.isBox3?Q.min.z:0;else{let ze=Math.pow(2,-$);Ot=Math.floor(Ne.width*ze),Nt=Math.floor(Ne.height*ze),M.isDataArrayTexture?Wt=Ne.depth:M.isData3DTexture?Wt=Math.floor(Ne.depth*ze):Wt=1,qt=0,me=0,ee=0}Z!==null?(Bt=Z.x,be=Z.y,Ge=Z.z):(Bt=0,be=0,Ge=0);let Ee=lt.convert(V.format),tn=lt.convert(V.type),Vt;V.isData3DTexture?(tt.setTexture3D(V,0),Vt=N.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(tt.setTexture2DArray(V,0),Vt=N.TEXTURE_2D_ARRAY):(tt.setTexture2D(V,0),Vt=N.TEXTURE_2D),x.activeTexture(N.TEXTURE0),x.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,V.flipY),x.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),x.pixelStorei(N.UNPACK_ALIGNMENT,V.unpackAlignment);let cn=x.getParameter(N.UNPACK_ROW_LENGTH),ve=x.getParameter(N.UNPACK_IMAGE_HEIGHT),he=x.getParameter(N.UNPACK_SKIP_PIXELS),hn=x.getParameter(N.UNPACK_SKIP_ROWS),Xn=x.getParameter(N.UNPACK_SKIP_IMAGES);x.pixelStorei(N.UNPACK_ROW_LENGTH,Ne.width),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ne.height),x.pixelStorei(N.UNPACK_SKIP_PIXELS,qt),x.pixelStorei(N.UNPACK_SKIP_ROWS,me),x.pixelStorei(N.UNPACK_SKIP_IMAGES,ee);let si=M.isDataArrayTexture||M.isData3DTexture,Te=V.isDataArrayTexture||V.isData3DTexture;if(M.isDepthTexture){let ze=Y.get(M),ri=Y.get(V),Re=Y.get(ze.__renderTarget),On=Y.get(ri.__renderTarget);x.bindFramebuffer(N.READ_FRAMEBUFFER,Re.__webglFramebuffer),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,On.__webglFramebuffer);for(let Bi=0;Bi<Wt;Bi++)si&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Y.get(M).__webglTexture,$,ee+Bi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Y.get(V).__webglTexture,Ut,Ge+Bi)),N.blitFramebuffer(qt,me,Ot,Nt,Bt,be,Ot,Nt,N.DEPTH_BUFFER_BIT,N.NEAREST);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if($!==0||M.isRenderTargetTexture||Y.has(M)){let ze=Y.get(M),ri=Y.get(V);x.bindFramebuffer(N.READ_FRAMEBUFFER,F),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,G);for(let Re=0;Re<Wt;Re++)si?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ze.__webglTexture,$,ee+Re):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ze.__webglTexture,$),Te?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ri.__webglTexture,Ut,Ge+Re):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ri.__webglTexture,Ut),$!==0?N.blitFramebuffer(qt,me,Ot,Nt,Bt,be,Ot,Nt,N.COLOR_BUFFER_BIT,N.NEAREST):Te?N.copyTexSubImage3D(Vt,Ut,Bt,be,Ge+Re,qt,me,Ot,Nt):N.copyTexSubImage2D(Vt,Ut,Bt,be,qt,me,Ot,Nt);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Te?M.isDataTexture||M.isData3DTexture?N.texSubImage3D(Vt,Ut,Bt,be,Ge,Ot,Nt,Wt,Ee,tn,Ne.data):V.isCompressedArrayTexture?N.compressedTexSubImage3D(Vt,Ut,Bt,be,Ge,Ot,Nt,Wt,Ee,Ne.data):N.texSubImage3D(Vt,Ut,Bt,be,Ge,Ot,Nt,Wt,Ee,tn,Ne):M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Ut,Bt,be,Ot,Nt,Ee,tn,Ne.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Ut,Bt,be,Ne.width,Ne.height,Ee,Ne.data):N.texSubImage2D(N.TEXTURE_2D,Ut,Bt,be,Ot,Nt,Ee,tn,Ne);x.pixelStorei(N.UNPACK_ROW_LENGTH,cn),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ve),x.pixelStorei(N.UNPACK_SKIP_PIXELS,he),x.pixelStorei(N.UNPACK_SKIP_ROWS,hn),x.pixelStorei(N.UNPACK_SKIP_IMAGES,Xn),Ut===0&&V.generateMipmaps&&N.generateMipmap(Vt),x.unbindTexture()},this.initRenderTarget=function(M){Y.get(M).__webglFramebuffer===void 0&&tt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?tt.setTextureCube(M,0):M.isData3DTexture?tt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?tt.setTexture2DArray(M,0):tt.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){j=0,K=0,ct=null,x.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Me._getDrawingBufferColorSpace(t),e.unpackColorSpace=Me._getUnpackColorSpace()}};var uu={ink:658968,outline:725024,asphalt:2370104,asphaltHi:3094088,pavement:5660014,pavementWarm:7040627,curb:9146265,cream:15853522,creamShade:14207922,storeGreen:1993303,storeGreenLight:3120249,storeBlue:2321304,amber:15774308,warmLight:16769712,interiorWall:16116438,interiorFloor:15524299,shelf:14997696,shelfDark:6051661,metal:9278884,darkMetal:3883344,wood:8018500,neonPink:16740264,neonBlue:7333631,lampCool:13625599,moon:10336751,hedge:2439471,leaf:3626303,concrete:7238272,red:12864074,signWhite:16775142},ry=(()=>{let i=[.42,.63,.82,.95,1],t=new Uint8Array(i.length*4);i.forEach((n,s)=>{let r=Math.round(n*255);t[s*4+0]=r,t[s*4+1]=r,t[s*4+2]=r,t[s*4+3]=255});let e=new ms(t,i.length,1,Cn);return e.minFilter=Ze,e.magFilter=Ze,e.generateMipmaps=!1,e.needsUpdate=!0,e})(),lu=new Map;function P(i,t={}){let e=JSON.stringify([i,t.emissive||0,t.emissiveIntensity??1,t.map?t.map.uuid:null,t.transparent||!1,t.opacity??1,t.side??0]);if(!t.map&&!t.unique&&lu.has(e))return lu.get(e);let{unique:n,...s}=t,r=new Ro({color:i,gradientMap:ry,...s,emissive:t.emissive!==void 0?new jt(t.emissive):new jt(0),emissiveIntensity:t.emissiveIntensity??1});return!t.map&&!t.unique&&lu.set(e,r),r}var cu=new Map;function ht(i,t={}){let e=JSON.stringify([i,t.map?t.map.uuid:null,t.transparent||!1,t.opacity??1,t.side??0,t.blending??1,t.depthWrite??!0]);if(!t.map&&!t.unique&&cu.has(e))return cu.get(e);let{unique:n,...s}=t,r=new Ie({color:i,...s,transparent:t.transparent??!1,opacity:t.opacity??1});return!t.map&&!t.unique&&cu.set(e,r),r}var du=new St(1600,1e3),oy=`
  uniform vec2 uRes;
  uniform float uWidth;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vec4 clip = projectionMatrix * mv;
    vec3 n = normalize(normalMatrix * normal);
    vec2 dir = n.xy;
    float l = length(dir);
    dir = l > 0.0001 ? dir / l : vec2(0.0);
    clip.xy += dir * uWidth * clip.w * (2.0 / uRes);
    gl_Position = clip;
  }
`,ay=`
  uniform vec3 uColor;
  void main() {
    gl_FragColor = vec4(uColor, 1.0);
  }
`;function yc(i){return new Xe({uniforms:{uRes:{value:du},uWidth:{value:i},uColor:{value:new jt(uu.outline)}},vertexShader:oy,fragmentShader:ay,side:sn,toneMapped:!1})}var _r={hairline:yc(1),thin:yc(1.45),normal:yc(1.95),bold:yc(2.6)};function Uf(i){_r.hairline.uniforms.uWidth.value=1*i,_r.thin.uniforms.uWidth.value=1.45*i,_r.normal.uniforms.uWidth.value=1.95*i,_r.bold.uniforms.uWidth.value=2.6*i}function an(i,t="normal"){if(!i?.isMesh||i.userData.isOutline||i.userData.noOutline)return i;let e=_r[t]||_r.normal,n=new It(i.geometry,e);return n.name="outline",n.userData.isOutline=!0,n.frustumCulled=i.frustumCulled,n.renderOrder=-1,i.add(n),i}var Xo;function yr(){if(Xo)return Xo;let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.22,"rgba(255,255,255,0.72)"),e.addColorStop(.55,"rgba(255,255,255,0.16)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Xo=new Ii(i),Xo.colorSpace=$e,Xo}var qo;function ly(){if(qo)return qo;let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,64);return e.addColorStop(0,"rgba(0,0,0,0.62)"),e.addColorStop(.5,"rgba(0,0,0,0.3)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),qo=new Ii(i),qo.colorSpace=$e,qo}var hu;function Ff(){if(hu)return hu;let i=document.createElement("canvas");i.width=256,i.height=512;let t=i.getContext("2d");t.clearRect(0,0,256,512);for(let l=0;l<46;l++){let c=10+Math.random()*236,h=1+Math.random()*16,d=Math.random()*90,u=100+Math.random()*300,f=.05+Math.random()*.16,g=t.createLinearGradient(0,d,0,d+u);g.addColorStop(0,`rgba(255,255,255,${f})`),g.addColorStop(.35,`rgba(255,255,255,${f*.75})`),g.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=g,t.fillRect(c,d,h,u)}let e=t.createLinearGradient(0,0,0,512);e.addColorStop(0,"rgba(255,255,255,0.42)"),e.addColorStop(.4,"rgba(255,255,255,0.13)"),e.addColorStop(.85,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,256,512);let n=t.createLinearGradient(0,0,0,512);n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(.12,"rgba(0,0,0,1)"),n.addColorStop(.78,"rgba(0,0,0,1)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.globalCompositeOperation="multiply",t.fillStyle=n,t.fillRect(0,0,256,512);let s=t.createLinearGradient(0,0,256,0);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(.18,"rgba(0,0,0,1)"),s.addColorStop(.82,"rgba(0,0,0,1)"),s.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=s,t.fillRect(0,0,256,512),t.globalCompositeOperation="source-over";let r=document.createElement("canvas");r.width=256,r.height=512;let o=r.getContext("2d");o.filter="blur(4px)",o.drawImage(i,0,0);let a=new Ii(r);return a.colorSpace=$e,hu=a,a}function se(i,t,e,n,s=.6){let r=new qi({map:yr(),color:t,transparent:!0,opacity:s,blending:gn,depthWrite:!1,toneMapped:!1,fog:!1}),o=new ps(r);return o.position.copy(n),o.scale.set(e,e,1),o.renderOrder=8,i.add(o),o}function vr(i,t,e,n,s,r=.35,o=.028){let a=new It(new je(t,e),new Ie({map:ly(),transparent:!0,opacity:r,depthWrite:!1,toneMapped:!1}));return a.rotation.x=-Math.PI/2,a.position.set(n,o,s),a.renderOrder=1,i.add(a),a}var cy=new E(0,1,0);function zt(i,t=0,e=0,n=0){let s=new li;return s.position.set(t,e,n),i?.add(s),s}function z(i,t,e,n,s={}){let r=new It(new we(i,t,e),n);return s.outline&&an(r,s.outline),r.userData.isProp=!0,r}function Qt(i,t,e,n,s={}){let r=s.segments??14,o=new It(new En(i,t,e,r,1,s.openEnded??!1),n);return s.outline&&an(o,s.outline),o}function kt(i,t,e,n={}){let s=new It(new je(i,t,n.wSeg,n.hSeg),e);return n.outline&&an(s,n.outline),s}function Yo(i,t,e,n={}){let s=new li,r=new It(new je(i,t,n.wSeg,n.hSeg),e),o=r.clone();return o.rotation.y=Math.PI,o.position.z=-.003,s.add(r,o),s}function qe(i,t,e,n=0,s=0,r=.01){let o=kt(i,t,e);return o.rotation.x=-Math.PI/2,o.position.set(n,r,s),o}function Ue(i,t,e,n,s={}){let r=new E().subVectors(t,i),o=r.length(),a=new It(new En(e,s.taper?e*.75:e,o,s.segments??6),n);return a.position.copy(i).add(t).multiplyScalar(.5),a.quaternion.setFromUnitVectors(cy,r.clone().normalize()),s.outline&&an(a,s.outline),a}function fu(i,t,e,n=28){let s=new sr(i.map(o=>new E(...o))),r=new Ao(s,n,t,3,!1);return new It(r,e)}function Of(i,t,e){let n=new rr,s=-i/2,r=-t/2;return n.moveTo(s+e,r),n.lineTo(s+i-e,r),n.quadraticCurveTo(s+i,r,s+i,r+e),n.lineTo(s+i,r+t-e),n.quadraticCurveTo(s+i,r+t,s+i-e,r+t),n.lineTo(s+e,r+t),n.quadraticCurveTo(s,r+t,s,r+t-e),n.lineTo(s,r+e),n.quadraticCurveTo(s,r,s+e,r),n}function Bf(i,t,e=.03){return new To(i,{depth:t,bevelEnabled:e>0,bevelThickness:e,bevelSize:e,bevelSegments:2,curveSegments:12})}function ce(i,t,e,n={}){let s=document.createElement("canvas");s.width=i,s.height=t;let r=s.getContext("2d");e(r,i,t);let o=new Ii(s);return o.colorSpace=n.data?ei:$e,o.anisotropy=8,n.repeat&&(o.wrapS=o.wrapT=Wi,o.repeat.set(n.repeat[0],n.repeat[1])),n.clamp!==!1&&(o.wrapS=o.wrapT=zn),o}function _n(i,t,e,n={}){let s=new ho(i,t,e.length),r=new Je;return e.forEach((o,a)=>{r.position.set(...o.pos||[0,0,0]),r.rotation.set(...o.rot||[0,0,0]),r.scale.set(...o.scale||[1,1,1]),r.updateMatrix(),s.setMatrixAt(a,r.matrix),o.color!==void 0&&s.setColorAt(a,new jt(o.color))}),s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s.frustumCulled=n.frustumCulled??!0,s}function Ye(i=1){let t=i>>>0;return()=>{t+=1831565813;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var fe='"Yu Gothic UI","Yu Gothic","Meiryo","Hiragino Kaku Gothic ProN","Noto Sans JP",sans-serif',pe='"Segoe UI","Helvetica Neue",Arial,sans-serif';function ns(i,t,e,n,s,r){let o=Math.min(r,n/2,s/2);i.beginPath(),i.moveTo(t+o,e),i.arcTo(t+n,e,t+n,e+s,o),i.arcTo(t+n,e+s,t,e+s,o),i.arcTo(t,e+s,t,e,o),i.arcTo(t,e,t+n,e,o),i.closePath()}function yn(i,t,e,n,s,r,o){i.fillStyle=o,ns(i,t,e,n,s,r),i.fill()}function wt(i,t,e,n,s,r,o="left",a="middle"){i.font=s,i.fillStyle=r,i.textAlign=o,i.textBaseline=a,i.fillText(t,e,n)}function hy(i,t,e,n,s,r=4,o="#fff"){i.beginPath();for(let a=0;a<r*2;a++){let l=a%2===0?n:s,c=-Math.PI/2+a*Math.PI/r,h=t+Math.cos(c)*l,d=e+Math.sin(c)*l;a===0?i.moveTo(h,d):i.lineTo(h,d)}i.closePath(),i.fillStyle=o,i.fill()}function zf(i,t,e,n,s="#fff8e8",r=8){i.save(),i.translate(t,e),i.strokeStyle=s,i.lineWidth=r,i.lineCap="round",i.lineJoin="round";for(let o=0;o<6;o++)i.rotate(Math.PI/3),i.beginPath(),i.moveTo(0,0),i.lineTo(0,-n),i.stroke(),i.beginPath(),i.moveTo(0,-n*.58),i.lineTo(-n*.26,-n*.8),i.moveTo(0,-n*.58),i.lineTo(n*.26,-n*.8),i.stroke(),i.beginPath(),i.moveTo(0,-n*.34),i.lineTo(-n*.17,-n*.48),i.moveTo(0,-n*.34),i.lineTo(n*.17,-n*.48),i.stroke();i.restore()}function Di(i,t,e){let n=i.clone();return n.needsUpdate=!0,n.wrapS=n.wrapT=Wi,n.repeat.set(t,e),n}var Hf=ce(512,512,(i,t,e)=>{let n=Ye(31);i.fillStyle="#2b3040",i.fillRect(0,0,t,e);for(let s=0;s<9e3;s++){let r=.018+n()*.05,o=120+n()*80;i.fillStyle=`rgba(${o},${o+6},${o+20},${r})`,i.fillRect(n()*t,n()*e,1+n()*2,1+n()*2)}for(let s=0;s<14;s++){let r=n()*t,o=n()*e,a=30+n()*110,l=i.createRadialGradient(r,o,2,r,o,a);l.addColorStop(0,"rgba(12,15,24,0.16)"),l.addColorStop(1,"rgba(12,15,24,0)"),i.fillStyle=l,i.fillRect(r-a,o-a,a*2,a*2)}for(let s=0;s<5;s++){i.strokeStyle="rgba(16,19,28,0.35)",i.lineWidth=1.2,i.beginPath();let r=n()*t,o=n()*e;i.moveTo(r,o);for(let a=0;a<6;a++)r+=(n()-.5)*70,o+=25+n()*40,i.lineTo(r,o);i.stroke()}for(let s of[120,390]){let r=i.createLinearGradient(s-40,0,s+40,0);r.addColorStop(0,"rgba(150,160,190,0)"),r.addColorStop(.5,"rgba(150,160,190,0.045)"),r.addColorStop(1,"rgba(150,160,190,0)"),i.fillStyle=r,i.fillRect(s-40,0,80,e)}},{repeat:[9,9]}),Vf=ce(512,512,(i,t,e)=>{let n=Ye(77);i.fillStyle="#454b59",i.fillRect(0,0,t,e);let s=4,r=t/s;for(let o=0;o<s;o++)for(let a=0;a<s;a++){let l=70+n()*15;i.fillStyle=`rgb(${l},${l+4},${l+13})`,i.fillRect(o*r+2,a*r+2,r-4,r-4),i.fillStyle=`rgba(255,255,255,${.012+n()*.018})`,i.fillRect(o*r+6,a*r+6,r-12,3)}i.strokeStyle="rgba(30,34,44,0.6)",i.lineWidth=3;for(let o=0;o<=s;o++)i.beginPath(),i.moveTo(o*r,0),i.lineTo(o*r,e),i.stroke(),i.beginPath(),i.moveTo(0,o*r),i.lineTo(t,o*r),i.stroke();for(let o=0;o<220;o++)i.fillStyle=`rgba(18,22,30,${.02+n()*.06})`,i.fillRect(n()*t,n()*e,2+n()*8,1+n()*3);for(let o=0;o<7;o++){let a=n()*t,l=n()*e,c=40+n()*90,h=i.createRadialGradient(a,l,2,a,l,c);h.addColorStop(0,"rgba(10,16,24,0.16)"),h.addColorStop(1,"rgba(10,16,24,0)"),i.fillStyle=h,i.fillRect(a-c,l-c,c*2,c*2)}},{repeat:[6,6]}),kf=ce(512,512,(i,t,e)=>{let n=Ye(9);i.fillStyle="#e9dfc9",i.fillRect(0,0,t,e);let s=4,r=t/s;for(let o=0;o<s;o++)for(let a=0;a<s;a++)i.fillStyle=o%2===a%2?"#f0e7d3":"#eae0cb",i.fillRect(o*r+2,a*r+2,r-4,r-4),i.fillStyle="rgba(180,166,140,0.18)",i.fillRect(o*r+2,a*r+2,r-4,2);i.strokeStyle="rgba(163,148,122,0.65)",i.lineWidth=2;for(let o=0;o<=s;o++)i.beginPath(),i.moveTo(o*r,0),i.lineTo(o*r,e),i.stroke(),i.beginPath(),i.moveTo(0,o*r),i.lineTo(t,o*r),i.stroke();for(let o=0;o<90;o++)i.fillStyle=`rgba(255,255,255,${.02+n()*.04})`,i.fillRect(n()*t,n()*e,2+n()*10,1+n()*4)},{repeat:[8,4]}),vc=ce(256,128,(i,t,e)=>{i.fillStyle="#2a2e38",i.fillRect(0,0,t,e);for(let n=0;n<16;n++)i.fillStyle=n%2?"#171a22":"#0d1016",i.fillRect(8+n*15,10,7,e-20);i.fillStyle="rgba(150,170,200,0.2)",i.fillRect(0,0,t,3),i.fillRect(0,e-5,t,3)}),Gf=ce(2048,256,(i,t,e)=>{let n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#fffdf2"),n.addColorStop(1,"#f4e9d1"),i.fillStyle=n,i.fillRect(0,0,t,e),yn(i,30,38,180,180,34,"#175b4b"),zf(i,120,120,68,"#fff8e8",10),i.strokeStyle="rgba(255,255,255,0.4)",i.lineWidth=4,ns(i,42,50,156,156,26),i.stroke(),wt(i,"Yukiii",244,108,`800 100px ${pe}`,"#17483e"),wt(i,"\u3086\u304D\u3044\u30DE\u30FC\u30C8",244,178,`700 48px ${fe}`,"#1d6a57"),wt(i,"YUKIII MART  \xB7  EVERYDAY",246,220,`500 21px ${pe}`,"#8b7f69"),i.letterSpacing="2px",i.fillStyle="rgba(28,75,63,0.18)",i.fillRect(1130,44,2,166),wt(i,"\u307E\u3061\u306E\u3001\u3044\u3064\u3082\u306E\u3002",1190,118,`600 68px ${fe}`,"#2c4b42"),wt(i,"\u3042\u305F\u305F\u304B\u3044 \u304A\u5F01\u5F53 \u30FB \u305F\u3070\u3053 \u30FB ATM",1192,184,`500 30px ${fe}`,"#7d725f"),yn(i,1770,38,248,180,24,"#1d6a57"),wt(i,"24",1798,112,`800 92px ${pe}`,"#fff8e8"),wt(i,"\u6642\u9593\u55B6\u696D",1798,180,`700 44px ${fe}`,"#cfe8d5"),wt(i,"Y",1978,110,`800 70px ${pe}`,"rgba(255,255,255,0.24)"),i.fillStyle="#2ba578",i.fillRect(0,e-18,t*.42,18),i.fillStyle="#2c7fbe",i.fillRect(t*.42,e-18,t*.32,18),i.fillStyle="#e8a04b",i.fillRect(t*.74,e-18,t*.26,18)}),Wf=ce(512,1024,(i,t,e)=>{let n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#15534a"),n.addColorStop(1,"#0d3c3a"),i.fillStyle=n,i.fillRect(0,0,t,e),i.strokeStyle="rgba(255,248,232,0.85)",i.lineWidth=12,i.strokeRect(18,18,t-36,e-36),zf(i,256,150,70,"#fff8e8",11),wt(i,"24",256,350,`800 190px ${pe}`,"#fff8e8","center"),wt(i,"\u6642\u9593\u55B6\u696D",256,500,`700 74px ${fe}`,"#d8ead9","center"),i.fillStyle="rgba(255,248,232,0.3)",i.fillRect(90,566,332,2),wt(i,"Yukiii",256,660,`800 78px ${pe}`,"#fff8e8","center"),wt(i,"YUKIII MART",256,750,`600 42px ${pe}`,"rgba(255,248,232,0.72)","center"),wt(i,"OPEN",256,900,`700 54px ${pe}`,"#f0b25e","center"),wt(i,"\u3088\u3046\u3053\u305D",256,960,`500 34px ${fe}`,"rgba(255,248,232,0.6)","center")}),Xf=ce(512,128,(i,t,e)=>{i.clearRect(0,0,t,e),wt(i,"\u3044\u3089\u3063\u3057\u3083\u3044\u307E\u305B",256,52,`700 54px ${fe}`,"rgba(255,248,232,0.95)","center"),wt(i,"WELCOME  \xB7  OPEN 24H",256,100,`500 22px ${pe}`,"rgba(205,235,220,0.75)","center")}),qf=ce(512,512,(i,t,e)=>{i.clearRect(0,0,t,e),i.save(),i.translate(t*.5,e*.5),i.rotate(-.55);let n=i.createLinearGradient(-t*.55,0,t*.5,0);n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.35,"rgba(230,246,255,0.1)"),n.addColorStop(.52,"rgba(255,255,255,0.22)"),n.addColorStop(.7,"rgba(220,242,255,0.06)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(-t,-e*.12,t*2,e*.24),i.restore();let s=Ye(93);for(let o=0;o<140;o++){let a=s()*t,l=e*.28+s()*e*.7,c=.7+s()*3.4,h=.08+s()*.28;i.fillStyle=`rgba(235,248,255,${h})`,i.beginPath(),i.arc(a,l,c,0,Math.PI*2),i.fill(),i.fillStyle=`rgba(255,255,255,${h*.9})`,i.beginPath(),i.arc(a-c*.25,l-c*.3,c*.35,0,Math.PI*2),i.fill()}for(let o=0;o<9;o++){let a=20+s()*(t-40),l=i.createLinearGradient(0,0,0,e);l.addColorStop(0,"rgba(255,255,255,0)"),l.addColorStop(.4,`rgba(230,246,255,${.02+s()*.04})`),l.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=l,i.fillRect(a,0,1+s()*2,e)}let r=i.createLinearGradient(0,e*.7,0,e);r.addColorStop(0,"rgba(220,240,250,0)"),r.addColorStop(1,"rgba(220,240,250,0.12)"),i.fillStyle=r,i.fillRect(0,e*.7,t,e*.3)});function pu(i=0){let t=i===0,e=t?"#c23b40":"#1d6d7d",n=t?"#9e2a30":"#134c5a",s=t?"#ffd9a0":"#bdf5ee";return ce(512,1024,(r,o,a)=>{let l=r.createLinearGradient(0,0,0,a);l.addColorStop(0,e),l.addColorStop(.55,e),l.addColorStop(1,n),r.fillStyle=l,r.fillRect(0,0,o,a),r.fillStyle="rgba(255,255,255,0.08)",r.fillRect(0,0,o,88),wt(r,"DRINK",28,46,`800 46px ${pe}`,"#fff8ec"),wt(r,"\u3064\u3081\u305F\u301C\u3044",320,48,`700 34px ${fe}`,s),yn(r,22,100,468,540,12,"#0d1218");let c=r.createLinearGradient(0,108,0,632);c.addColorStop(0,"#fbf6e6"),c.addColorStop(.5,"#f2ead6"),c.addColorStop(1,"#e6dcc2"),yn(r,32,108,448,524,8,"#f8f2df"),r.fillStyle=c,r.fillRect(32,108,448,524);let h=4,d=3,u=448/h,f=520/d,g=[["#e9663f","#f5d9a2"],["#3f7dc9","#cfe3ff"],["#4ba36a","#e3f6c8"],["#d8b23f","#fff2bb"],["#b24c8c","#ffd9ec"],["#4c4f66","#e5e8f2"],["#e08a3c","#ffe4bf"],["#3aa0a0","#d2ffff"],["#c74848","#ffd1c9"],["#6b4d9c","#e5d7ff"],["#7c8b3a","#eff7c4"],["#2f5d7c","#d0e9f8"]];for(let S=0;S<d;S++)for(let m=0;m<h;m++){let p=32+m*u+u/2,b=120+S*f+f*.42,[R,_]=g[(S*h+m)%g.length];yn(r,p-34,b-58,68,120,16,R),r.fillStyle=_,r.fillRect(p-34,b-44,68,22),r.fillStyle="rgba(255,255,255,0.55)",r.fillRect(p-24,b-58,8,116),r.fillStyle="rgba(0,0,0,0.18)",r.fillRect(p-34,b+40,68,22),wt(r,`${120+(S+m)%3*10}`,p,b+80,`700 22px ${pe}`,"#34302a","center"),r.fillStyle="#fff8e8",r.fillRect(p-26,b+62,52,26),wt(r,`\xA5${120+(S+m)%3*10}`,p,b+76,`700 20px ${pe}`,"#33302a","center")}r.fillStyle="rgba(255,255,255,0.13)",r.beginPath(),r.moveTo(32,108),r.lineTo(220,108),r.lineTo(90,632),r.lineTo(32,632),r.closePath(),r.fill(),r.strokeStyle="rgba(255,255,255,0.4)",r.lineWidth=3,r.strokeRect(32,108,448,524);for(let S=0;S<4;S++)yn(r,40+S*112,664,88,40,10,"#f8f2e2"),r.fillStyle=S===1?"#f0b25e":"#303642",r.beginPath(),r.arc(84+S*112,684,9,0,Math.PI*2),r.fill();wt(r,"\u3064\u308A\u92AD",40,736,`600 24px ${fe}`,s),wt(r,"\xA51,000",152,736,`700 26px ${pe}`,"#fff"),r.fillStyle="#151a22",r.fillRect(300,706,168,52),r.fillStyle="#4b5464",r.fillRect(314,720,140,8),r.fillStyle="#8d97a8",r.fillRect(314,736,100,8),yn(r,48,806,416,132,14,"#141820"),r.fillStyle="rgba(255,255,255,0.08)",r.fillRect(70,830,372,18),r.fillStyle="#0a0c12",r.fillRect(70,862,372,56),wt(r,"YUKIII DRINK",256,970,`700 30px ${pe}`,"rgba(255,248,236,0.65)","center"),wt(r,"\xA5130",420,716,`600 22px ${pe}`,"#fff8e8","right")})}function Ni(i="karaage"){let t={karaage:["#f3a23d","#d85b35","#fff3d6"],coffee:["#5a3a2e","#c08a5c","#ffe9c9"],oden:["#e7d3ab","#a84a37","#fff8e6"],onigiri:["#7fae6a","#315f46","#fffaf0"],ice:["#5e9ed6","#27476b","#e8f7ff"],sale:["#d94b5e","#8d2238","#fff1e4"]},[e,n,s]=t[i]||t.sale;return ce(512,720,(r,o,a)=>{let l=r.createLinearGradient(0,0,0,a);l.addColorStop(0,e),l.addColorStop(1,n),r.fillStyle=l,r.fillRect(0,0,o,a),r.fillStyle="rgba(255,255,255,0.09)";for(let c=0;c<9;c++)r.beginPath(),r.arc(430+c%3*20,60+c*70,70,0,Math.PI*2),r.fill();if(yn(r,36,36,440,648,18,"rgba(0,0,0,0.12)"),i==="karaage"){for(let c=0;c<7;c++)r.fillStyle=c%2?"#b96e2e":"#d68a3f",ns(r,120+c%4*72,300+Math.floor(c/4)*66,78,58,22),r.fill();wt(r,"\u30B8\u30E5\u30FC\u30B7\u30FC",256,150,`800 72px ${fe}`,s,"center"),wt(r,"\u304B\u3089\u3042\u3052",256,236,`800 92px ${fe}`,"#fff6df","center"),wt(r,"\u65B0\u767A\u58F2",256,520,`700 56px ${fe}`,"#ffe3a4","center"),wt(r,"\xA5240",256,610,`800 62px ${pe}`,s,"center")}else if(i==="coffee")r.fillStyle="#e9c79c",r.beginPath(),r.ellipse(256,505,128,36,0,0,Math.PI*2),r.fill(),yn(r,168,330,176,172,22,"#f5e7d2"),yn(r,178,348,156,40,12,"#7a4a34"),r.strokeStyle="#f5e7d2",r.lineWidth=22,r.beginPath(),r.arc(350,408,44,-Math.PI/2,Math.PI/2),r.stroke(),wt(r,"\u3053\u3060\u308F\u308A",256,140,`700 58px ${fe}`,"#f6ddba","center"),wt(r,"\u30AB\u30D5\u30A7\u30E9\u30C6",256,226,`800 86px ${fe}`,"#fff3dc","center"),wt(r,"HOT / ICE",256,602,`600 44px ${pe}`,"#f6ddba","center"),wt(r,"\xA5180",256,668,`800 52px ${pe}`,s,"center");else if(i==="oden"){r.fillStyle="#6b3a2c",r.beginPath(),r.ellipse(256,470,150,48,0,0,Math.PI*2),r.fill(),r.fillStyle="#8b4b35",r.beginPath(),r.ellipse(256,450,150,48,0,0,Math.PI*2),r.fill();for(let c=0;c<9;c++)r.fillStyle=["#e8c47a","#d9a05c","#f0d9a0","#a9663e"][c%4],r.beginPath(),r.ellipse(170+c%3*80,430+Math.floor(c/3)*44,28,20,.3,0,Math.PI*2),r.fill();wt(r,"\u304A\u3067\u3093",256,150,`800 96px ${fe}`,"#5c3026","center"),wt(r,"\u306F\u3058\u3081\u307E\u3057\u305F",256,240,`700 52px ${fe}`,"#7c3d2c","center"),wt(r,"\u5927\u6839 \u30FB \u7389\u5B50 \u30FB \u3053\u3093\u306B\u3083\u304F",256,596,`600 30px ${fe}`,"#5c3026","center"),wt(r,"\xA5100\u301C",256,662,`800 54px ${pe}`,"#5c3026","center")}else i==="onigiri"?(r.fillStyle="#fdf8e9",r.beginPath(),r.moveTo(256,270),r.lineTo(382,488),r.lineTo(130,488),r.closePath(),r.fill(),r.fillStyle="#24462f",r.fillRect(206,400,100,92),r.fillStyle="#f5ecd8",r.beginPath(),r.arc(256,258,30,0,Math.PI*2),r.fill(),wt(r,"\u65B0\u7C73",256,120,`800 70px ${fe}`,"#fffdf0","center"),wt(r,"\u304A\u306B\u304E\u308A",256,200,`800 76px ${fe}`,"#fffdf0","center"),wt(r,"100\u5186",256,600,`800 66px ${pe}`,"#fdf8e9","center"),wt(r,"everyday rice ball",256,664,`500 26px ${pe}`,"rgba(255,255,255,0.7)","center")):i==="ice"?(wt(r,"\u30A2\u30A4\u30B9",256,170,`800 96px ${fe}`,"#eefaff","center"),wt(r,"COLD SNACK",256,250,`600 34px ${pe}`,"#bce6ff","center"),yn(r,156,340,200,220,30,"#e9f7ff"),yn(r,156,340,200,76,30,"#7fc4e6"),r.fillStyle="#d9b46a",r.beginPath(),r.moveTo(226,340),r.lineTo(286,340),r.lineTo(256,470),r.closePath(),r.fill(),wt(r,"\xA5160",256,630,`800 56px ${pe}`,s,"center")):(wt(r,"\u672C\u65E5",256,150,`800 96px ${fe}`,s,"center"),wt(r,"\u304A\u3059\u3059\u3081",256,250,`800 82px ${fe}`,"#fff5ec","center"),r.fillStyle=s,r.beginPath(),r.arc(256,430,120,0,Math.PI*2),r.fill(),wt(r,"20%",256,420,`800 78px ${pe}`,n,"center"),wt(r,"OFF",256,490,`700 52px ${pe}`,n,"center"),wt(r,"\u304A\u5F01\u5F53 \u5168\u54C1",256,600,`600 38px ${fe}`,s,"center"))})}var Yf=ce(1024,512,(i,t,e)=>{let n=Ye(11),s=4,r=2,o=t/s,a=e/r,l=["\u5468\u520A \u661F\u753A","CITY","\u30A2\u30CB\u30E1","TRIP","FASHION","\u30B2\u30FC\u30E0","\u66AE\u3089\u3057","MOVIE"];for(let c=0;c<r;c++)for(let h=0;h<s;h++){let d=c*s+h,u=h*o+6,f=c*a+6,g=`hsl(${Math.floor(n()*360)},${45+n()*25}%,${68+n()*14}%)`;i.fillStyle=g,i.fillRect(u,f,o-12,a-12),i.fillStyle="rgba(255,255,255,0.92)",i.fillRect(u+12,f+12,o-24,46),wt(i,l[d],u+22,f+36,`800 28px ${fe}`,"#2c3040"),i.fillStyle="rgba(20,26,38,0.28)",i.beginPath(),i.arc(u+o*.62,f+a*.62,62,0,Math.PI*2),i.fill(),i.fillStyle="rgba(255,255,255,0.65)",i.beginPath(),i.arc(u+o*.4,f+a*.66,42,0,Math.PI*2),i.fill(),i.fillStyle="rgba(30,36,52,0.5)",i.fillRect(u+16,f+a-62,o-90,10),i.fillRect(u+16,f+a-44,o-130,8),i.fillStyle="#fffdf2",i.fillRect(u+16,f+a-30,58,16),wt(i,"\xA5580",u+22,f+a-22,`700 13px ${pe}`,"#333")}}),$f=ce(768,512,(i,t,e)=>{i.fillStyle="#9a6d45",i.fillRect(0,0,t,e);let n=Ye(4);for(let r=0;r<400;r++)i.fillStyle=`rgba(60,38,22,${.02+n()*.05})`,i.fillRect(n()*t,n()*e,2+n()*8,1+n()*4);i.fillStyle="#6f4c2f",i.fillRect(0,0,t,54),wt(i,"\u661F\u753A \u63B2\u793A\u677F",24,28,`700 28px ${fe}`,"#f5e8d2"),i.strokeStyle="rgba(245,232,210,0.4)",i.lineWidth=3,i.strokeRect(8,8,t-16,e-16),[[44,92,190,250,"#fbf5e3","#8b3a3a","\u753A\u5185\u4F1A \u304A\u77E5\u3089\u305B",20],[270,110,220,210,"#f4efdd","#2f5f7c","\u9632\u707D\u8A13\u7DF4",22],[530,88,180,240,"#fff9ea","#4d6b3a","\u3053\u3069\u3082\u4F1A",18],[90,372,260,110,"#f8f1dc","#6f4c2f","\u8CC7\u6E90\u56DE\u53CE",18],[400,360,290,118,"#fff7e4","#8a5a33","\u30A2\u30EB\u30D0\u30A4\u30C8\u52DF\u96C6",18]].forEach(([r,o,a,l,c,h,d,u])=>{i.save(),i.translate(r+a/2,o+l/2),i.rotate((n()-.5)*.06),i.translate(-(r+a/2),-(o+l/2)),i.fillStyle="rgba(20,16,10,0.22)",i.fillRect(r+5,o+6,a,l),i.fillStyle=c,i.fillRect(r,o,a,l),wt(i,d,r+14,o+30,`700 ${u}px ${fe}`,h),i.fillStyle="rgba(40,40,40,0.35)";for(let f=0;f<6;f++)i.fillRect(r+16,o+58+f*18,a-32-n()*40,4);i.fillStyle="#d44",i.beginPath(),i.arc(r+a/2,o+12,5,0,Math.PI*2),i.fill(),i.restore()})}),mu=ce(1024,320,(i,t,e)=>{i.fillStyle="#f6ecd6",i.fillRect(0,0,t,e);let n=[{title:"\u304A\u3067\u3093",color:"#a8452f",price:"\xA5100\u301C",kind:"pot"},{title:"\u304B\u3089\u3042\u3052",color:"#b8642b",price:"\xA5240",kind:"chicken"},{title:"\u30B3\u30FC\u30D2\u30FC",color:"#4b3527",price:"\xA5150",kind:"coffee"}],s=t/3;n.forEach((r,o)=>{let a=o*s;if(i.fillStyle=o%2?"#fffaf0":"#fbf3e2",i.fillRect(a+8,8,s-16,e-16),i.fillStyle=r.color,i.fillRect(a+8,8,s-16,54),wt(i,r.title,a+s/2,36,`700 34px ${fe}`,"#fff8e8","center"),r.kind==="pot"){i.fillStyle="#5d5b57",i.beginPath(),i.ellipse(a+s/2,196,110,34,0,0,Math.PI*2),i.fill();for(let l=0;l<6;l++)i.fillStyle=["#e6c581","#d5a05e","#edd9a8"][l%3],i.beginPath(),i.arc(a+s/2-70+l*28,190+l%2*10,16,0,Math.PI*2),i.fill()}else if(r.kind==="chicken")for(let l=0;l<5;l++)i.fillStyle=l%2?"#d38a3e":"#e8a34f",ns(i,a+70+l%3*52,150+Math.floor(l/3)*50,54,42,16),i.fill();else i.fillStyle="#fbf7ec",ns(i,a+s/2-48,148,96,100,12),i.fill(),i.fillStyle="#5c3a2b",i.fillRect(a+s/2-48,168,96,22),i.strokeStyle="#fbf7ec",i.lineWidth=12,i.beginPath(),i.arc(a+s/2+50,200,24,-Math.PI/2,Math.PI/2),i.stroke();wt(i,r.price,a+s/2,272,`700 34px ${pe}`,r.color,"center"),o>0&&(i.fillStyle="rgba(120,100,70,0.25)",i.fillRect(a,30,2,e-60))})});function Sc(i=0){return ce(256,256,(t,e,n)=>{if(t.fillStyle="#171a22",t.fillRect(0,0,e,n),i===3){t.fillStyle="#1b2130",t.fillRect(10,10,e-20,n-20),t.fillStyle="rgba(120,160,220,0.12)",t.fillRect(20,24,e-40,n-80),t.fillStyle="#2a2f3c",t.fillRect(0,n*.62,e,8);return}let s=i===0?["#ffdca4","#f0a95e"]:i===1?["#ffe9c2","#e8b56f"]:["#d9ecff","#7da6c9"],r=t.createLinearGradient(0,0,0,n);r.addColorStop(0,s[0]),r.addColorStop(1,s[1]),t.fillStyle=r,t.fillRect(14,14,e-28,n-28),t.fillStyle="rgba(255,255,255,0.32)",t.fillRect(14,14,54,n-28),t.fillRect(e-74,14,60,n-28),t.fillStyle="rgba(70,50,40,0.18)";for(let o=0;o<5;o++)t.fillRect(20+o*10,14,3,n-28);i!==2&&(t.fillStyle="rgba(50,60,45,0.5)",t.beginPath(),t.ellipse(e-58,n-58,26,36,-.2,0,Math.PI*2),t.fill(),t.fillRect(e-64,n-76,10,60)),t.fillStyle="rgba(24,26,34,0.9)",t.fillRect(e/2-4,0,8,n),t.fillRect(0,n/2-3,e,6),t.strokeStyle="#171a22",t.lineWidth=14,t.strokeRect(7,7,e-14,n-14)})}var Zf=ce(512,512,(i,t,e)=>{let n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#59626a"),n.addColorStop(1,"#454d55"),i.fillStyle=n,i.fillRect(0,0,t,e);for(let s=0;s<e;s+=22)i.fillStyle="rgba(28,32,38,0.35)",i.fillRect(0,s,t,5),i.fillStyle="rgba(210,220,225,0.09)",i.fillRect(0,s+6,t,3);i.fillStyle="rgba(20,22,26,0.35)",i.fillRect(0,e-26,t,26),i.fillStyle="#e8e0c8",i.fillRect(348,120,110,86),wt(i,"\u672C\u65E5",403,146,`700 20px ${fe}`,"#5c4a33","center"),wt(i,"\u5B9A\u4F11\u65E5",403,176,`700 24px ${fe}`,"#8b3a3a","center")},{repeat:[1,1]}),Jf=ce(512,128,(i,t,e)=>{yn(i,0,0,t,e,10,"#1e5b9e"),i.strokeStyle="#f6f4e8",i.lineWidth=6,ns(i,8,8,t-16,e-16,6),i.stroke(),wt(i,"\u661F\u753A\u4E00\u4E01\u76EE",46,56,`700 50px ${fe}`,"#fffdf0"),wt(i,"Hoshimachi 1-chome",48,100,`500 24px ${pe}`,"rgba(255,255,255,0.82)"),i.fillStyle="#fffdf0",i.beginPath(),i.moveTo(442,50),i.lineTo(482,50),i.lineTo(462,82),i.closePath(),i.fill()}),Kf=ce(256,320,(i,t,e)=>{yn(i,8,8,240,240,22,"#1e5b9e"),i.strokeStyle="#f7f4e6",i.lineWidth=10,ns(i,18,18,220,220,16),i.stroke(),wt(i,"P",128,130,`800 150px ${pe}`,"#fffdf0","center"),wt(i,"24H",128,292,`800 50px ${pe}`,"#d9e8ff","center")}),Qf=ce(512,256,(i,t,e)=>{i.clearRect(0,0,t,e),wt(i,"\u6B62\u307E\u308C",256,120,`800 130px ${fe}`,"rgba(245,244,232,0.94)","center"),wt(i,"STOP",256,212,`700 38px ${pe}`,"rgba(245,244,232,0.8)","center")}),jf=ce(256,512,(i,t,e)=>{i.clearRect(0,0,t,e),i.fillStyle="rgba(240,239,226,0.9)",i.beginPath(),i.moveTo(128,20),i.lineTo(226,170),i.lineTo(164,170),i.lineTo(164,492),i.lineTo(92,492),i.lineTo(92,170),i.lineTo(30,170),i.closePath(),i.fill()}),tp=ce(512,256,(i,t,e)=>{i.clearRect(0,0,t,e),i.fillStyle="rgba(84,147,112,0.9)",i.beginPath(),i.moveTo(70,128),i.lineTo(150,74),i.lineTo(150,108),i.lineTo(330,108),i.lineTo(330,68),i.lineTo(430,128),i.lineTo(330,188),i.lineTo(330,148),i.lineTo(150,148),i.lineTo(150,182),i.closePath(),i.fill(),wt(i,"\u304A\u4F1A\u8A08\u306F\u3053\u3061\u3089",256,230,`600 30px ${fe}`,"rgba(72,118,92,0.9)","center")}),ep=ce(256,896,(i,t,e)=>{let n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#1b4d70"),n.addColorStop(1,"#12344f"),i.fillStyle=n,i.fillRect(0,0,t,e),i.fillStyle="rgba(255,248,232,0.9)",i.fillRect(0,0,t,115),wt(i,"\u661F\u753A",128,56,`800 62px ${fe}`,"#1b4d70","center"),wt(i,"\u5546\u5E97\u4F1A",128,96,`600 24px ${fe}`,"#2c6b8c","center"),[..."\u96E8\u591C\u306E\u8857\u89D2"].forEach((r,o)=>wt(i,r,128,210+o*118,`700 66px ${fe}`,"#e8f2e4","center")),hy(i,128,800,40,12,4,"rgba(255,248,232,0.6)")}),np=ce(128,128,(i,t,e)=>{i.fillStyle="#d8b23f",i.fillRect(0,0,t,e),i.fillStyle="#b8922c";for(let n=0;n<4;n++)for(let s=0;s<4;s++)i.beginPath(),i.arc(16+s*32,16+n*32,7,0,Math.PI*2),i.fill();i.fillStyle="rgba(255,240,170,0.45)";for(let n=0;n<4;n++)for(let s=0;s<4;s++)i.beginPath(),i.arc(14+s*32,14+n*32,4,0,Math.PI*2),i.fill()},{repeat:[1,8]}),ip=ce(512,512,(i,t,e)=>{let n=Ye(57);i.fillStyle="#656a70",i.fillRect(0,0,t,e);for(let s=0;s<4;s++)for(let r=0;r<2;r++){let o=96+n()*12;i.fillStyle=`rgb(${o},${o+3},${o+8})`,i.fillRect(s*128+3,r*256+3,122,250)}i.strokeStyle="rgba(26,30,35,0.55)",i.lineWidth=4;for(let s=0;s<=4;s++)i.beginPath(),i.moveTo(s*128,0),i.lineTo(s*128,e),i.stroke();for(let s=0;s<=2;s++)i.beginPath(),i.moveTo(0,s*256),i.lineTo(t,s*256),i.stroke();for(let s=0;s<1800;s++)i.fillStyle=`rgba(30,34,38,${.03+n()*.08})`,i.fillRect(n()*t,n()*e,1+n()*3,1+n()*3);for(let s=0;s<12;s++){let r=n()*t,o=n()*e,a=20+n()*70,l=i.createRadialGradient(r,o,2,r,o,a);l.addColorStop(0,"rgba(26,30,36,0.16)"),l.addColorStop(1,"rgba(26,30,36,0)"),i.fillStyle=l,i.fillRect(r-a,o-a,a*2,a*2)}i.fillStyle="rgba(175,185,195,0.22)";for(let s=0;s<5;s++)i.fillRect(n()*t,0,2+n()*3,e)},{repeat:[4,2]}),sp=ce(256,256,(i,t,e)=>{i.fillStyle="#3c414c",i.fillRect(0,0,t,e),i.fillStyle="#555b66",i.beginPath(),i.arc(128,128,116,0,Math.PI*2),i.fill(),i.fillStyle="#363b45",i.beginPath(),i.arc(128,128,108,0,Math.PI*2),i.fill(),i.strokeStyle="rgba(170,180,195,0.28)",i.lineWidth=3;for(let n=100;n>18;n-=20)i.beginPath(),i.arc(128,128,n,0,Math.PI*2),i.stroke();i.strokeStyle="rgba(18,22,28,0.55)",i.lineWidth=5;for(let n=0;n<12;n++){let s=n/12*Math.PI*2;i.beginPath(),i.moveTo(128+Math.cos(s)*24,128+Math.sin(s)*24),i.lineTo(128+Math.cos(s)*100,128+Math.sin(s)*100),i.stroke()}i.strokeStyle="rgba(255,255,255,0.18)",i.lineWidth=2,i.beginPath(),i.arc(128,128,108,0,Math.PI*2),i.stroke()}),rp=ce(1024,256,(i,t,e)=>{i.fillStyle="#1b1e26",i.fillRect(0,0,t,e),i.strokeStyle="rgba(205,178,118,0.75)",i.lineWidth=4,i.strokeRect(14,14,t-28,e-28),wt(i,"Yukiii",56,84,`700 62px ${pe}`,"#e8d7b0"),wt(i,"\u96E8\u591C\u306E\u8857\u89D2",58,148,`500 42px ${fe}`,"#b9c7d6"),wt(i,"RAINY NIGHT CORNER",58,198,`400 24px ${pe}`,"rgba(185,199,214,0.7)"),wt(i,"1 / 100",940,84,`600 38px ${pe}`,"#cdb276","right"),wt(i,"YUKIII MART",940,128,`400 20px ${pe}`,"rgba(205,178,118,0.75)","right"),wt(i,"MINIATURE DIORAMA",940,206,`400 18px ${pe}`,"rgba(185,199,214,0.55)","right")}),gu=ce(512,256,(i,t,e)=>{i.fillStyle="#233b34",i.fillRect(0,0,t,e),i.strokeStyle="rgba(220,232,210,0.55)",i.lineWidth=7,i.strokeRect(14,14,t-28,e-28),wt(i,"Yukiii",256,112,`700 48px ${pe}`,"rgba(235,238,220,0.85)","center"),wt(i,"WELCOME",256,174,`500 32px ${pe}`,"rgba(235,238,220,0.5)","center")});function op(i,t){return ce(256,128,(e,n,s)=>{e.fillStyle="#e8e4d6",e.fillRect(0,0,n,s),e.fillStyle="#2f5c4b",e.fillRect(0,0,n,10),wt(e,i,128,52,`700 30px ${fe}`,"#2b3a34","center"),wt(e,t,128,94,`500 18px ${pe}`,"#5c665e","center")})}var ap=ce(256,384,(i,t,e)=>{i.fillStyle="#f2c94c",i.fillRect(0,0,t,e),i.fillStyle="#d8a72b",i.fillRect(0,0,t,16),i.fillRect(0,e-16,t,16),wt(i,"\u6E05\u6383\u4E2D",128,82,`800 46px ${fe}`,"#3b2d0a","center"),wt(i,"\u8DB3\u5143\u306B\u3054\u6CE8\u610F\u304F\u3060\u3055\u3044",128,126,`600 19px ${fe}`,"#4a3a12","center"),i.fillStyle="#3b2d0a",i.beginPath(),i.arc(112,172,13,0,Math.PI*2),i.fill(),i.save(),i.translate(112,194),i.rotate(-.5),yn(i,-9,-4,18,54,8,"#3b2d0a"),i.restore(),i.strokeStyle="#3b2d0a",i.lineWidth=9,i.lineCap="round",i.beginPath(),i.moveTo(120,238),i.lineTo(148,266),i.stroke(),i.beginPath(),i.moveTo(108,234),i.lineTo(84,260),i.stroke(),i.beginPath(),i.moveTo(124,204),i.lineTo(152,188),i.stroke(),wt(i,"CAUTION",128,306,`800 27px ${pe}`,"#4a3a12","center"),wt(i,"WET FLOOR",128,338,`700 18px ${pe}`,"#5c4a12","center")}),lp=ce(512,256,(i,t,e)=>{i.clearRect(0,0,t,e),yn(i,36,48,440,160,26,"rgba(17,80,65,0.95)"),i.strokeStyle="rgba(255,245,220,0.9)",i.lineWidth=6,ns(i,46,58,420,140,20),i.stroke(),wt(i,"OPEN",256,118,`800 72px ${pe}`,"#fff6df","center"),wt(i,"24\u6642\u9593 \u55B6\u696D\u4E2D",256,176,`600 30px ${fe}`,"#cfe6cf","center")});function ni(i,t="#2f7d63"){return ce(512,128,(e,n,s)=>{e.fillStyle=t,e.fillRect(0,0,n,s),e.fillStyle="rgba(255,255,255,0.12)",e.fillRect(0,0,n,12),wt(e,i,256,66,`700 44px ${fe}`,"#fff8e8","center")})}var xu=ce(256,768,(i,t,e)=>{i.clearRect(0,0,t,e),i.shadowColor="rgba(255,105,170,0.95)",i.shadowBlur=28,wt(i,"\u3086",128,140,`700 92px ${fe}`,"#ffd0e4","center"),wt(i,"\u3081",128,250,`700 92px ${fe}`,"#ffd0e4","center"),i.shadowBlur=10,i.strokeStyle="rgba(255,160,200,0.9)",i.lineWidth=4,i.strokeRect(34,40,188,292),wt(i,"\u30B9\u30CA\u30C3\u30AF",128,390,`600 30px ${fe}`,"rgba(255,190,215,0.85)","center"),i.shadowBlur=0,i.fillStyle="rgba(255,140,190,0.8)",i.fillRect(56,448,144,3),wt(i,"OPEN",128,530,`600 34px ${pe}`,"rgba(255,190,215,0.8)","center"),wt(i,"20:00 - 02:00",128,580,`400 20px ${pe}`,"rgba(255,190,215,0.6)","center")}),YS=pu(1);var uy=P(15328982,{emissive:2302752,unique:!0}),_u=P(13223866,{emissive:1250066,unique:!0}),dy=P(14726734,{emissive:2826504,unique:!0});function fy(i,t,e=Vf,n=2.2){return P(14080479,{map:Di(e,Math.max(1,i/n),Math.max(1,t/n)),unique:!0})}function py(i,t,e,n,s=.13){let r=e-i,o=n-t,a=P(5988460),l=fy(r,o),c=new It(new we(r,s,o),[a,a,l,a,a,a]);return c.position.set((i+e)/2,s/2,(t+n)/2),an(c,"thin"),c}function my(i,t,e,n,s=.15){let r=Math.max(.14,e-i),o=Math.max(.14,n-t),a=z(r,s,o,P(uu.curb,{unique:!0}),{outline:"thin"});a.position.set((i+e)/2,s/2,(t+n)/2);let l=qe(r+.02,o+.02,P(10462898),(i+e)/2,(t+n)/2,s+.004);return a.add(l),l.position.set(0,s/2+.004,0),a}function is(i,t,e,n,s=uy,r=.026,o=0){let a=qe(i,t,s,e,n,r);return a.rotation.z=o,a}function cp(i,t){let e=zt(i),n=(v,A,L=.7,O=1.4)=>(e.add(v),t?.add(v,{start:A,dur:L,rise:O}),v),s=Of(20.4,20.4,.55),r=Bf(s,.86,.07);r.rotateX(-Math.PI/2),r.computeBoundingBox();let o=P(2435898),a=P(1449001),l=new It(r,[o,a]);l.position.y=-r.boundingBox.max.y,an(l,"bold"),n(l,.02,1.15,2.4);let c=kt(3.1,.78,ht(16777215,{map:rp,toneMapped:!1}));c.position.set(-2.1,-.44,10.218),n(c,.02,1.15,2.4);let h=z(3.2,.88,.03,P(9074248),{outline:"hairline"});h.position.set(-2.1,-.44,10.2),n(h,.02,1.15,2.4);let d=new It(new je(19.7,19.7),P(13094618,{map:Di(Hf,9,9),unique:!0}));d.rotation.x=-Math.PI/2,d.position.set(0,.012,0),n(d,.62,.9,.8),[[4,-4.4,5.4,3.2],[5.4,2.2,8.6,3.2],[8.6,-10,9.9,3.2],[-10,-1.4,-5.2,3.2]].forEach((v,A)=>{let L=py(...v);n(L,.82+A*.09,.7,.75)}),[[5.34,-4.4,5.48,.3],[5.34,2,5.48,2.25],[8.54,-10,8.68,.3],[8.54,2,8.68,2.25],[5.34,3.12,5.92,3.26],[8.48,3.12,8.68,3.26],[-10,3.14,-5.2,3.28],[-5.28,-1.4,-5.14,3.2],[3.98,.65,4.12,3.2]].forEach((v,A)=>n(my(...v),.98+A*.035,.45,.45));let g=new It(new je(1.35,.8),P(8291474));g.rotation.x=-Math.PI/2,g.rotation.z=0,g.position.set(4.7,.067,1.16),g.rotation.y=0,n(g,1.2,.4,.3);for(let v=0;v<7;v++)n(is(2.55,.46,7.2,3.75+v*.87),1.08+v*.045,.38,.35);for(let v=0;v<4;v++)n(is(.4,1.5,5.66+v*.82,1.16),1.05+v*.045,.38,.35);n(is(3.06,.34,7,-.55),1.22,.35,.3);let S=qe(2.2,1.1,ht(16777215,{map:Qf,transparent:!0,opacity:.88,depthWrite:!1}),7,-1.75,.03);S.rotation.z=Math.PI;let m=zt(e);m.add(S),n(m,1.26,.35,.3);for(let v=0;v<7;v++)n(is(1.5,.11,-8.6+v*2.6,6.55),1.12+v*.03,.35,.3,_u);n(is(18.8,.1,0,9.85,_u),1.2,.35,.3),n(is(18.8,.1,0,3.72,_u),1.2,.35,.3);let p=ht(16777215,{map:jf,transparent:!0,opacity:.5,depthWrite:!1});for(let[v,A]of[[-3.4,5.6]]){let L=qe(.5,1.1,p,v,A,.031);n(L,1.24,.3,.25)}for(let v=0;v<3;v++){let A=-4.8+v*1.95;n(is(.08,2.1,A,2),1.18+v*.04,.3,.25)}n(is(3.98,.08,-2.85,1),1.28,.3,.25);for(let v=0;v<2;v++){let A=z(.86,.13,.24,P(9277319),{outline:"thin"});A.position.set(-3.82+v*1.95,.08,1.12),n(A,1.35+v*.05,.3,.3);let L=qe(.7,.07,dy,0,0,.067);A.add(L),L.position.set(0,.065,.06)}let b=P(16777215,{map:Di(np,1,4),emissive:2760968,unique:!0});[[.36,1.55,5.05,1.16,0],[.36,1.55,8.75,1.16,0],[2.4,.36,7.2,2.98,0]].forEach(([v,A,L,O],W)=>{let F=qe(v,A,b,L,O,.137);n(F,1.3+W*.04,.35,.3)});let _=P(3159620),T=z(.26,.02,7.4,_);T.position.set(5.58,.018,-.7),n(T,1.16,.5,.4);let w=ht(16777215,{map:vc});for(let v=0;v<7;v++){let A=qe(.24,.7,w,5.58,-3.8+v*1,.031);A.rotation.y=0,n(A,1.22+v*.025,.25,.2)}let I=ht(16777215,{map:sp});for(let[v,A,L]of[[2.6,5.3,.46],[7.1,-2.9,.42],[-1.4,7.4,.34]]){let O=new It(new bn(L,26),I);O.rotation.x=-Math.PI/2,O.position.set(v,.028,A),n(O,1.3,.35,.25)}let y=P(4541531);for(let[v,A]of[[4.7,-2.1],[9.2,-4.8],[-7.8,1.3]]){let L=qe(.48,.48,y,v,A,.135);n(L,1.4,.25,.2)}return e}var Ms={x1:-5.2,x2:4,z1:-4.2,z2:.6,wall:.14,floor:.18,ceiling:3.36,top:3.56,sill:.46,glassTop:2.92,frontGlass:{x1:-3.4,x2:1.82,z:.55},door:{x1:1.95,x2:3.82,z:.55},sideGlass:{z1:-1.32,z2:.46,x:3.95},canopyY:2.94,signY:3.58,signZ:.7},hp={x1:-5.04,x2:3.84,z1:-4.04,z2:.46,counter:{x1:1,x2:3.3,z1:-1.78,z2:-.72,h:1.02},backCounter:{x1:.95,x2:3.3,z1:-3.36,z2:-2.56,h:1.02},coffee:{x1:3.36,x2:3.82,z1:-2.95,z2:-1.9,h:1.04},freezer:{x1:3.38,x2:3.82,z1:-1.15,z2:-.2,h:1.78},fridges:{x1:-2.35,x2:2.82,z1:-3.96,z2:-3.36,h:2.4},bento:{x1:-3.98,x2:-2.55,z1:-4,z2:-3.44,h:2.05},frontFridge:{x1:-.62,x2:.5,z1:-.98,z2:-.34,h:1.98},gondolaA:{x1:-4.2,x2:-1.35,z:-1.45,d:.62,h:1.28},gondolaB:{x1:-4.2,x2:-1.35,z:-2.72,d:.62,h:1.28},magazines:{x1:-3.3,x2:-1.3,z:-.2,d:.54,h:.92}},Sr={exterior:15853265,exteriorShade:14141613,trim:1854016,trimLight:2977116,frame:2374197,interiorWall:16314332,interiorWallWarm:15786696,shelf:15655884,shelfEdge:14207664,counter:15787728,counterTop:13483940,glassTint:12574954,roof:5659494};var rs='"Yu Gothic UI","Yu Gothic","Meiryo","Noto Sans JP",sans-serif',up='"Segoe UI", Arial, sans-serif',gy=P(15326662,{emissive:1775376,unique:!0}),uM=P(14997181,{emissive:1775120,unique:!0}),dM=P(14471870,{emissive:1512206,unique:!0}),fM=P(13615268),$o=P(3422788),Mr=P(9607587),br=P(15919057,{emissive:1577999,unique:!0}),Mc=P(13483940),yu=P(3111779),xy=new Ie({color:12575980,transparent:!0,opacity:.1,depthWrite:!1,side:Ae,toneMapped:!1}),ss=[14241605,15769658,15976780,6924634,3119752,4035017,4286643,8738736,13787026,15043194,15785144,16775920,8363850,15119178,12872255,4763829,10275792,14522986,10125200,6643594],dp=[15087942,4553629,2792847,16032353,16765286,9485933,10182117,15817653,46296,16748451,15858414,16483584];function _y(i,t,e){let n=ce(256,512,(r,o,a)=>{r.fillStyle=t,r.fillRect(0,0,o,a),r.fillStyle="rgba(255,255,255,0.12)",r.fillRect(0,0,o,14),r.strokeStyle="rgba(255,255,255,0.55)",r.lineWidth=4,r.strokeRect(10,10,o-20,a-20),[...i].forEach((c,h)=>{r.font=`700 64px ${rs}`,r.fillStyle=e,r.textAlign="center",r.textBaseline="middle",r.fillText(c,o/2,80+h*86)})});return new It(new je(.46,.92),ht(16777215,{map:n,side:Ae,toneMapped:!1}))}function fp(i,t,e){let n=zt(i),s=(k,Pt,ne=.55,xe=1.3)=>(t?.add(k,{start:Pt,dur:ne,rise:xe}),k),r=k=>(n.add(k),k),o=zt(n),a=hp,l=z(9,.04,4.44,P(16248539,{emissive:2762012}),{outline:"hairline"});l.position.set(-.6,3.34,-1.79),r(l),s(l,e+.32,.5,1.4);let c=zt(n);for(let k of[-3.3,-.8,1.7])for(let Pt of[-1.15,-2.95]){let ne=z(1.62,.035,.3,ht(16774104),{outline:!1});ne.position.set(k,3.315,Pt),c.add(ne);let xe=z(1.7,.06,.4,P(14933195),{outline:"hairline"});xe.position.set(k,3.3,Pt),c.add(xe)}let h=z(5.2,.055,.08,ht(16771522));h.position.set(-.8,2.84,.22),c.add(h);for(let k of[-2.8,-.8,1.2])se(c,16768432,1.6,new E(k,2.76,.26),.1);let d=kt(4.9,.22,ht(16777215,{map:ce(1600,96,(k,Pt,ne)=>{k.fillStyle="#1e6656",k.fillRect(0,0,Pt,ne),k.fillStyle="#f0b25e",k.fillRect(0,0,Pt,5),k.fillStyle="#fff8e8",k.font=`700 42px ${rs}`,k.textBaseline="middle",k.fillText("\u304B\u3089\u3042\u3052  \u30FB  \u304A\u3067\u3093  \u30FB  \u3067\u304D\u305F\u3066\u30B3\u30FC\u30D2\u30FC",36,52),k.fillStyle="rgba(255,248,232,0.62)",k.font=`500 22px ${up}`,k.textAlign="right",k.fillText("YUKIII MART HOT SNACK",Pt-30,54)}),toneMapped:!1}));d.position.set(-.8,2.69,.33),c.add(d);for(let[k,Pt]of[[-2.25,-.72],[.45,-.68]]){let ne=z(.9,.055,.13,ht(16772551));ne.position.set(k,2.64,Pt),c.add(ne);let xe=z(.96,.1,.18,P(4086354),{outline:"hairline"});xe.position.set(k,2.7,Pt),c.add(xe);for(let en of[-.32,.32]){let bi=Qt(.006,.006,.65,$o);bi.position.set(k+en,3.03,Pt),c.add(bi)}se(c,16768168,1.5,new E(k,2.55,Pt+.05),.18)}let u=new Tn(16760954,16,7.2,2);u.position.set(-1.6,3,-1.5),n.add(u);let f=new Tn(16763274,13,6.4,2);f.position.set(2.25,3,-2.4),n.add(f);let g=new Tn(16765856,8,5.2,2);g.position.set(-3.5,2.7,-.7),n.add(g);let S=new Tn(16760184,9,3.6,2);S.position.set(2.2,2.35,-1.1),n.add(S),s(c,e+.5,.5,1.2),se(c,16770747,3.2,new E(-.6,3.08,-1.7),.1);let m=z(9,3.1,.05,gy);m.position.set(-.6,1.78,-4.045),r(m),s(m,e+.88,.5,1.4);let p=z(.82,2.1,.06,P(4411723),{outline:"thin"});p.position.set(-4.5,1.27,-4),r(p);let b=kt(.46,.16,ht(16777215,{map:ce(256,96,(k,Pt,ne)=>{k.fillStyle="#e8e2d2",k.fillRect(0,0,Pt,ne),k.fillStyle="#3c4a44",k.font=`700 30px ${rs}`,k.textAlign="center",k.textBaseline="middle",k.fillText("STAFF ONLY",Pt/2,ne/2)})}));b.position.set(-4.5,1.78,-3.965),o.add(b);let R=se(o,16766106,.9,new E(-4.5,2.25,-3.9),.25),_=zt(n,-3.55,2.92,-4),T=new It(new bn(.19,20),ht(16117727));_.add(T);let w=new It(new nn(.19,.018,6,22),P(4870235));_.add(w);let I=z(.014,.1,.006,P(3357252));I.position.set(.02,.04,.01),I.rotation.z=-.7,_.add(I);let y=z(.012,.14,.006,P(3357252));y.position.set(-.03,.05,.01),y.rotation.z=.4,_.add(y),s(p,e+1.1,.45,1),s(_,e+1.25,.45,1);let v=a.fridges,A=zt(n),L=v.x2-v.x1,O=v.h,W=(v.z1+v.z2)/2,F=P(15327178,{emissive:1906963});for(let k of[v.x1-.02,v.x2+.02]){let Pt=z(.08,O,.54,F,{outline:"hairline"});Pt.position.set(k,.18+O/2,W),A.add(Pt)}let G=z(L+.1,.1,.54,F,{outline:"hairline"});G.position.set((v.x1+v.x2)/2,.18+O-.05,W),A.add(G);let j=z(L+.1,.12,.54,P(12169373),{outline:"hairline"});j.position.set((v.x1+v.x2)/2,.27,W),A.add(j);for(let k of[v.x1-.01,v.x1+L*.5,v.x2+.01]){let Pt=z(.075,O,.08,P(2842966),{outline:"hairline"});Pt.position.set(k,.18+O/2,v.z2+.03),A.add(Pt)}let K=z(L+.06,.07,.08,P(2842966));K.position.set((v.x1+v.x2)/2,.18+O-.04,v.z2+.03),A.add(K);let ct=z(L,O-.24,.04,ht(16773074));ct.position.set((v.x1+v.x2)/2,.3+(O-.24)/2,v.z1+.03),A.add(ct);for(let k of[.7,1.2,1.7,2.15]){let Pt=z(L-.2,.025,.01,ht(16771270));Pt.position.set((v.x1+v.x2)/2,k,v.z1+.06),A.add(Pt)}let U=[.52,.92,1.32,1.74];for(let k of U){let Pt=z(L-.08,.035,.42,P(14674149,{emissive:2764844}));Pt.position.set((v.x1+v.x2)/2,k,v.z2-.22),A.add(Pt);let ne=z(L-.1,.045,.02,ht(16381156));ne.position.set((v.x1+v.x2)/2,k-.04,v.z2-.01),A.add(ne)}let J=[],D=[],rt=[],ut=Ye(18),Yt=4;for(let k=0;k<Yt;k++){let Pt=U[k]+.1,ne=0;for(let xe=v.x1+.15;xe<v.x2-.1;xe+=.155){for(let en=0;en<2;en++){let bi=v.z2-.36+en*.16,Ur=dp[Math.floor(ut()*dp.length)];if(ne%5===3)rt.push({pos:[xe,Pt-.02,bi],scale:[.085,.13,.085],color:Ur});else{let As=ut()>.72;J.push({pos:[xe,Pt+(As?.02:0),bi],scale:[.082,As?.27:.21,.082],color:Ur}),D.push({pos:[xe,Pt+(As?.17:.135),bi],scale:[.038,.031,.038],color:15986660})}}ne++}}let Kt=new En(.5,.5,1,8),_t=_n(Kt,ht(16777215,{unique:!0}),J);A.add(_t);let X=_n(new En(.5,.5,1,10),ht(16777215,{unique:!0}),rt);A.add(X);let et=_n(new En(.5,.5,1,8),ht(16117986),D);A.add(et);let At=4,Xt=L/At;for(let k=0;k<=At;k++){let Pt=v.x1+k*Xt,ne=z(.055,O-.18,.06,P(4027240),{outline:"hairline"});ne.position.set(Pt,.18+O/2,v.z2+.02),A.add(ne)}for(let k=0;k<At;k++){let Pt=v.x1+Xt*(k+.5),ne=kt(Xt-.08,O-.26,xy);ne.position.set(Pt,.18+O/2,v.z2+.005),ne.renderOrder=4,A.add(ne);let xe=z(.035,.42,.05,Mr);xe.position.set(Pt+Xt*.5-.13,1.28,v.z2+.06),A.add(xe)}let Dt=kt(L-.1,.19,ht(16777215,{map:ni("\u3064\u3081\u305F\u3044 \u306E\u307F\u3082\u306E\u3000DRINKS","#1f6f63"),toneMapped:!1}));Dt.position.set((v.x1+v.x2)/2,2.5,v.z2+.045),A.add(Dt);let Zt=se(A,14284287,5.4,new E((v.x1+v.x2)/2,1.35,v.z2+.4),.16);s(A,e+1.05,.7,1.6);let Lt=a.bento,st=zt(n),ft=Lt.x2-Lt.x1,mt=Lt.z2-Lt.z1,pt=P(15195592,{emissive:1906963});for(let k of[Lt.x1,Lt.x2]){let Pt=z(.06,Lt.h,mt,pt,{outline:"hairline"});Pt.position.set(k,.18+Lt.h/2,(Lt.z1+Lt.z2)/2),st.add(Pt)}let bt=z(ft,.1,mt,pt,{outline:"hairline"});bt.position.set((Lt.x1+Lt.x2)/2,.18+Lt.h-.05,(Lt.z1+Lt.z2)/2),st.add(bt);let Jt=z(ft,.12,mt,P(12169373),{outline:"hairline"});Jt.position.set((Lt.x1+Lt.x2)/2,.27,(Lt.z1+Lt.z2)/2),st.add(Jt);let vt=z(ft-.12,Lt.h-.3,.02,ht(16774361));vt.position.set((Lt.x1+Lt.x2)/2,.3+(Lt.h-.3)/2,Lt.z1+.05),st.add(vt);let te=[.44,.86,1.28];for(let k of te){let Pt=z(Lt.x2-Lt.x1-.06,.035,.44,P(15134441));Pt.position.set((Lt.x1+Lt.x2)/2,k,(Lt.z1+Lt.z2)/2+.02),st.add(Pt)}let oe=[],N=[];for(let k=0;k<2;k++)for(let Pt=0;Pt<4;Pt++){let ne=Lt.x1+.22+Pt*.31,xe=te[0]+.055,en=(Lt.z1+Lt.z2)/2+.02;oe.push({pos:[ne,xe,en],scale:[.27,.055,.2],color:k===0?16249311:2894892}),N.push({pos:[ne,xe+.045,en],scale:[.16,.04,.11],color:k===0?13206077:14274740}),N.push({pos:[ne-.09,xe+.045,en+.03],scale:[.07,.035,.06],color:8101979})}st.add(_n(new we(1,1,1),ht(16777215,{unique:!0}),oe)),st.add(_n(new we(1,1,1),ht(16777215,{unique:!0}),N));let ge=[],ue=[];for(let k=0;k<6;k++){let Pt=Lt.x1+.24+k%3*.31,ne=te[2]+.14+Math.floor(k/3)*.2,xe=(Lt.z1+Lt.z2)/2+.03;ge.push({pos:[Pt,ne,xe],scale:[.18,.07,.18],color:16513e3,rot:[Math.PI/2,0,0]}),ue.push({pos:[Pt,ne-.05,xe+.07],scale:[.08,.1,.022],color:2307369})}st.add(_n(new En(.5,.5,1,3),ht(16777215,{unique:!0}),ge)),st.add(_n(new we(1,1,1),ht(2899246),ue));let C=kt(Lt.x2-Lt.x1-.08,.26,ht(16777215,{map:ni("\u304A\u5F01\u5F53 \u30FB \u304A\u306B\u304E\u308A","#a85230"),toneMapped:!1}));C.position.set((Lt.x1+Lt.x2)/2,Lt.h+.02,Lt.z2+.02),st.add(C),s(st,e+1.16,.65,1.5);function x(k,Pt){let ne=zt(n),xe=k.x2-k.x1,en=(k.x1+k.x2)/2,bi=z(xe,.14,k.d+.08,P(9077361),{outline:"thin"});bi.position.set(en,.25,k.z),ne.add(bi);let Ur=z(xe-.1,.11,.03,yu);Ur.position.set(en,.25,k.z+k.d/2+.045),ne.add(Ur);let As=z(xe,k.h-.18,.06,P(12169115),{outline:"thin"});As.position.set(en,.32+(k.h-.18)/2,k.z),ne.add(As);let Dc=[.46,.82,1.16];for(let vn of Dc){let oi=z(xe,.035,k.d,P(13813424),{outline:"hairline"});oi.position.set(en,vn,k.z),ne.add(oi);let sa=z(xe,.05,.02,P(10194809));sa.position.set(en,vn-.045,k.z+k.d/2),ne.add(sa);let Cs=z(xe-.2,.012,.02,ht(16774365));Cs.position.set(en,vn-.07,k.z+k.d/2-.02),ne.add(Cs)}let wu=z(xe,.06,k.d+.06,P(12102806),{outline:"hairline"});wu.position.set(en,k.h,k.z),ne.add(wu);for(let vn of[k.x1+.03,k.x2-.03]){let oi=z(.06,k.h-.1,k.d+.02,P(3107671));oi.position.set(vn,.32+(k.h-.1)/2,k.z),ne.add(oi)}let Au=[],Rs=Ye(Math.floor((k.x1+10)*13));for(let vn=0;vn<Dc.length;vn++){let oi=Dc[vn]+.03;for(let sa of[-1,1])for(let Cs=0;Cs<2;Cs++)for(let Nc=k.x1+.14;Nc<k.x2-.1;Nc+=.17){if(Rs()<.04)continue;let Xp=k.z+sa*(.12+Cs*.11),Cu=.15+Rs()*.11,qp=.11+Rs()*.06;Au.push({pos:[Nc+(Rs()-.5)*.025,oi+Cu/2,Xp],scale:[qp,Cu,.08],rot:[0,(Rs()-.5)*.18,0],color:ss[Math.floor(Rs()*ss.length)]})}}let Gp=_n(new we(1,1,1),ht(16777215,{unique:!0}),Au);ne.add(Gp);let Wp=["\u30B9\u30CA\u30C3\u30AF","\u304A\u83D3\u5B50"];for(let vn=0;vn<2;vn++){let oi=kt(.62,.13,ht(16777215,{map:ni(Wp[(vn+(Pt>3.1?1:0))%2],vn===1?"#a85230":"#2f7b63"),toneMapped:!1}));oi.position.set(en-.95+vn*1.9,k.h+.11,k.z+.27),ne.add(oi)}let Ru=z(xe-.1,.025,.02,P(16249055));return Ru.position.set(en,k.h+.04,k.z+.33),ne.add(Ru),s(ne,Pt,.65,1.4),ne}x(a.gondolaA,e+1.3),x(a.gondolaB,e+1.48);let B=a.magazines,Y=zt(n),tt=z(B.x2-B.x1,.5,B.d,P(15392712),{outline:"thin"});tt.position.set((B.x1+B.x2)/2,.43,B.z),Y.add(tt);let yt=z(B.x2-B.x1+.04,.05,B.d+.06,P(13287337));yt.position.set((B.x1+B.x2)/2,.69,B.z),Y.add(yt);let Mt=kt(B.x2-B.x1-.1,.68,ht(16777215,{map:Yf,toneMapped:!1}));Mt.position.set((B.x1+B.x2)/2,.94,B.z+.05),Mt.rotation.x=-.26,Y.add(Mt);let nt=z(B.x2-B.x1,.66,.05,P(14340283));nt.position.set((B.x1+B.x2)/2,.92,B.z-.25),nt.rotation.x=-.12,Y.add(nt);let ot=[],Rt=Ye(41);for(let k=0;k<14;k++)ot.push({pos:[B.x1+.1+k*.15,.73,B.z+.2+Rt()*.02],scale:[.13,.035,.24],rot:[0,0,(Rt()-.5)*.06],color:ss[Math.floor(Rt()*ss.length)]});Y.add(_n(new we(1,1,1),ht(16777215,{unique:!0}),ot));let Gt=kt(.78,.16,ht(16777215,{map:ni("\u96D1\u8A8C \u30FB \u30B3\u30DF\u30C3\u30AF","#4b5e86"),toneMapped:!1}));Gt.position.set((B.x1+B.x2)/2,1.12,B.z+.26),Y.add(Gt),s(Y,e+1.42,.6,1.3);let gt=zt(n);for(let k=0;k<3;k++){let Pt=z(.32,.16,.26,P(12143429,{unique:!0}),{outline:"thin"});Pt.position.set(.28,.29+k*.17,.1),gt.add(Pt);let ne=z(.34,.035,.28,P(10107960));ne.position.set(.28,.36+k*.17,.1),gt.add(ne);let xe=z(.24,.022,.022,P(8793643));xe.position.set(.28,.44+k*.17,.23),gt.add(xe)}let Et=kt(.42,.13,ht(16777215,{map:ni("\u8CB7\u3044\u7269\u304B\u3054","#2f7b63"),toneMapped:!1}));Et.position.set(.28,1.06,.27),gt.add(Et),s(gt,e+1.9,.5,1);let Ht=zt(n,-1.22,0,-1.3);Ht.scale.setScalar(.72),Ht.rotation.y=-.16;let $t=z(.56,.92,.26,P(14201975),{outline:"thin"});$t.position.y=.64,Ht.add($t);let ae=kt(.48,.58,ht(16777215,{map:Ni("karaage"),toneMapped:!1}));ae.position.set(0,.88,.14),Ht.add(ae);let H=z(.52,.04,.24,P(14864042));H.position.set(0,.48,.02),Ht.add(H);let Ct=[],at=Ye(73);for(let k=0;k<6;k++)Ct.push({pos:[-.19+k%3*.19,.55,-.02+Math.floor(k/3)*.1],scale:[.14,.14,.07],color:ss[Math.floor(at()*ss.length)]});Ht.add(_n(new we(1,1,1),ht(16777215,{unique:!0}),Ct)),s(Ht,e+1.95,.5,1);let lt=kt(1.15,.52,ht(16777215,{map:ce(512,232,(k,Pt,ne)=>{k.fillStyle="#1d6555",k.fillRect(0,0,Pt,ne),k.strokeStyle="#e9e0ca",k.lineWidth=6,k.strokeRect(8,8,Pt-16,ne-16),k.fillStyle="#fff8e8",k.font=`800 66px ${up}`,k.fillText("Yukiii",34,92),k.font=`600 34px ${rs}`,k.fillText("\u3086\u304D\u3044\u30DE\u30FC\u30C8 \u30FB \u3044\u3089\u3063\u3057\u3083\u3044\u307E\u305B",36,156),k.fillStyle="#f0b25e",k.fillRect(34,178,260,8)}),toneMapped:!1}));lt.position.set(3.83,2.42,-2.28),lt.rotation.y=-Math.PI/2,r(lt);let dt=z(.03,.06,2.9,yu);dt.position.set(3.84,2.72,-2.1),r(dt);let it=se(n,16769716,1.2,new E(3.7,2.35,-2.28),.1);s(lt,e+2,.4,.9),s(dt,e+2,.4,.9),s(it,e+2,.4,.9);let xt=a.counter,q=zt(n),Tt=xt.x2-xt.x1,ie=xt.z2-xt.z1,Le=new It(new we(Tt,xt.h-.04,ie),[br,br,Mc,br,br,br]);Le.position.set((xt.x1+xt.x2)/2,.18+(xt.h-.04)/2,(xt.z1+xt.z2)/2),an(Le,"thin"),q.add(Le);let ln=z(Tt+.08,.05,ie+.08,Mc,{outline:"hairline"});ln.position.set((xt.x1+xt.x2)/2,.18+xt.h,(xt.z1+xt.z2)/2),q.add(ln);let ii=z(Tt-.1,.12,.02,yu);ii.position.set((xt.x1+xt.x2)/2,.9,xt.z2+.005),q.add(ii);let Fi=z(Tt+.01,.58,.035,P(3107671,{unique:!0}),{outline:"hairline"});Fi.position.set((xt.x1+xt.x2)/2,.6,xt.z2+.02),q.add(Fi);let Oi=z(Tt+.02,.1,.04,P(2374453));Oi.position.set((xt.x1+xt.x2)/2,.25,xt.z2+.025),q.add(Oi);let bs=z(.44,.1,.34,$o,{outline:"hairline"});bs.position.set(2.55,1.24,-1.68),q.add(bs);let Rc=Ue(new E(2.55,1.28,-1.68),new E(2.55,1.48,-1.66),.025,Mr);q.add(Rc);let Es=kt(.42,.28,ht(14676448,{map:ce(256,160,(k,Pt,ne)=>{k.fillStyle="#eaf3e4",k.fillRect(0,0,Pt,ne),k.fillStyle="#2f7b63",k.fillRect(0,0,Pt,30),k.fillStyle="#fff",k.font=`700 18px ${rs}`,k.fillText("YUKIII POS",12,22),k.fillStyle="#6a7b6e";for(let xe=0;xe<5;xe++)k.fillRect(12,46+xe*18,120+xe%3*20,5);k.fillStyle="#c74a4a",k.font=`700 26px ${rs}`,k.textAlign="right",k.fillText("\xA5 1,280",Pt-12,126)})}));Es.position.set(2.55,1.62,-1.56),Es.rotation.x=-.16,q.add(Es);let Ts=kt(.3,.12,ht(13495260));Ts.position.set(2.95,1.2,-1.05),Ts.rotation.y=Math.PI,q.add(Ts);let Gn=kt(1.5,.48,new Ie({color:12576495,transparent:!0,opacity:.12,side:Ae,depthWrite:!1}));Gn.position.set(2.35,1.6,-1.12),Gn.renderOrder=5,q.add(Gn);for(let k of[1.62,3.08]){let Pt=Qt(.012,.012,.5,Mr);Pt.position.set(k,1.36,-1.12),q.add(Pt)}let ws=z(.16,.07,.12,$o);ws.position.set(3.28,1.22,-1.22),q.add(ws);let Pr=z(.42,.035,.28,P(5922652));Pr.position.set(3.15,1.2,-1.65),q.add(Pr);let Ir=kt(.94,.42,ht(16777215,{map:ce(512,256,(k,Pt,ne)=>{k.fillStyle="#f6edda",k.fillRect(0,0,Pt,ne),k.fillStyle="#2f7b63",k.fillRect(0,0,26,ne),k.fillStyle="#2f3f38",k.font=`700 54px ${rs}`,k.fillText("\u304A\u4F1A\u8A08",52,96),k.fillStyle="#688071",k.font=`500 28px ${rs}`,k.fillText("CASHIER \u30FB \u30AB\u30FC\u30C9 OK",54,154),k.fillStyle="#d9b25e",k.fillRect(52,186,260,12)})}));Ir.position.set((xt.x1+xt.x2)/2,.66,xt.z2+.045),q.add(Ir),se(q,16765851,.8,new E(2.35,2.5,-1.3),.16);let os=kt(1.85,.54,ht(16777215,{map:mu,toneMapped:!1}));os.position.set(2.2,2.38,-1.55),q.add(os);let Lr=z(1.94,.62,.07,P(2964019),{outline:"thin"});Lr.position.set(2.2,2.38,-1.6),q.add(Lr);for(let k of[1.42,2.98]){let Pt=Ue(new E(k,3.3,-1.55),new E(k,2.66,-1.55),.007,Mr);q.add(Pt)}se(q,16766882,1.9,new E(2.2,2.3,-1.4),.16),s(q,e+1.5,.7,1.4);let Be=a.backCounter,Wn=zt(n),Dr=z(Be.x2-Be.x1,Be.h,Be.z2-Be.z1,br,{outline:"thin"});Dr.position.set((Be.x1+Be.x2)/2,.18+Be.h/2,(Be.z1+Be.z2)/2),Wn.add(Dr);let jo=z(Be.x2-Be.x1+.05,.05,Be.z2-Be.z1+.05,Mc);jo.position.set((Be.x1+Be.x2)/2,.18+Be.h,(Be.z1+Be.z2)/2),Wn.add(jo);for(let k=0;k<2;k++){let Pt=z(2.2,.03,.22,P(15261643));Pt.position.set(2.05,1.8+k*.4,-3.9),Wn.add(Pt)}let ta=[],Cc=Ye(66);for(let k=0;k<5;k++)for(let Pt=0;Pt<12;Pt++)ta.push({pos:[1.05+Pt*.17,1.5+k*.14,-3.84],scale:[.11,.1,.06],color:ss[Math.floor(Cc()*ss.length)]});Wn.add(_n(new we(1,1,1),ht(16777215,{unique:!0}),ta));let ea=kt(2.3,.24,ht(16777215,{map:ni("\u305F\u3070\u3053 \u30FB \u5207\u624B \u30FB \u30B3\u30D4\u30FC","#4b5e86"),toneMapped:!1}));ea.position.set(2.2,2.32,-3.95),Wn.add(ea);let Fn=zt(n,1.35,0,-2.82),M=z(.62,.22,.42,P(9344413),{outline:"thin"});M.position.y=1.27,Fn.add(M);let V=z(.56,.02,.36,P(10119733));V.position.y=1.39,Fn.add(V);let Q=[],Z=Ye(7);for(let k=0;k<6;k++)Q.push({pos:[-.2+k%3*.2,1.41,-.1+Math.floor(k/3)*.18],scale:[.12,.035,.1],color:[15190666,14265196,15851696,11890749][k%4]});Fn.add(_n(new we(1,1,1),ht(16777215,{unique:!0}),Q));for(let k=0;k<4;k++){let Pt=Qt(.006,.006,.28,P(14139532));Pt.position.set(-.2+k*.13,1.5,-.05),Pt.rotation.z=.4+k*.1,Fn.add(Pt)}let $=z(.68,.28,.48,new Ie({color:16773324,transparent:!0,opacity:.09,depthWrite:!1}));$.position.y=1.45,Fn.add($);let Ut=kt(.62,.2,ht(16777215,{map:ni("\u304A\u3067\u3093","#a8452f"),toneMapped:!1}));Ut.position.set(0,1.66,.18),Fn.add(Ut),se(Fn,16761469,.9,new E(0,1.48,.1),.28),Wn.add(Fn),s(Fn,e+1.72,.5,1);let Ot=zt(n,2.45,0,-2.82),Nt=z(.78,.46,.46,new Ie({color:16773324,transparent:!0,opacity:.12,side:Ae,depthWrite:!1}));Nt.position.y=1.5,Ot.add(Nt);let Wt=z(.82,.04,.5,Mr);Wt.position.y=1.74,Ot.add(Wt);let qt=[];for(let k=0;k<8;k++)qt.push({pos:[-.26+k%4*.17,1.38+Math.floor(k/4)*.16,0],scale:[.13,.1,.11],color:k%2?13206066:14721092});Ot.add(_n(new Ke(.5,6,5),ht(16777215,{unique:!0}),qt));let me=kt(.8,.2,ht(16777215,{map:ni("\u30DB\u30C3\u30C8\u30B9\u30CA\u30C3\u30AF","#b4562d"),toneMapped:!1}));me.position.set(0,1.84,.12),Ot.add(me),se(Ot,16757854,1,new E(0,1.55,.1),.3),Wn.add(Ot),s(Ot,e+1.78,.45,1),s(Wn,e+1.58,.6,1.4);let ee=a.coffee,Bt=zt(n),be=z(ee.x2-ee.x1,ee.h,ee.z2-ee.z1,P(15524558),{outline:"thin"});be.position.set((ee.x1+ee.x2)/2,.18+ee.h/2,(ee.z1+ee.z2)/2),Bt.add(be);let Ge=z(ee.x2-ee.x1+.05,.05,ee.z2-ee.z1+.05,Mc);Ge.position.set((ee.x1+ee.x2)/2,.18+ee.h,(ee.z1+ee.z2)/2),Bt.add(Ge);let Ne=z(.44,.66,.5,P(3093564),{outline:"thin"});Ne.position.set(3.58,1.56,-2.38),Bt.add(Ne);let Ee=kt(.36,.26,ht(12579038));Ee.position.set(3.35,1.7,-2.38),Ee.rotation.y=-Math.PI/2,Bt.add(Ee);let tn=z(.26,.02,.3,Mr);tn.position.set(3.36,1.3,-2.38),Bt.add(tn);let Vt=Qt(.05,.04,.12,ht(16315624));Vt.position.set(3.35,1.37,-2.38),Bt.add(Vt);let cn=[];for(let k=0;k<3;k++)cn.push({pos:[3.66,1.32+k*.17,-2],scale:[.1,.2,.1],color:15985884});Bt.add(_n(new En(.5,.4,1,8),P(16777215,{unique:!0}),cn));let ve=kt(.72,.2,ht(16777215,{map:ni("COFFEE","#5c3a2b"),toneMapped:!1}));ve.position.set(3.62,2,-2.1),ve.rotation.y=-Math.PI/2,Bt.add(ve),se(Bt,16764815,.9,new E(3.32,1.7,-2.38),.2),s(Bt,e+1.86,.55,1.2);let he=a.freezer,hn=zt(n),Xn=z(he.x2-he.x1,he.h,he.z2-he.z1,P(15659760),{outline:"thin"});Xn.position.set((he.x1+he.x2)/2,.18+he.h/2,(he.z1+he.z2)/2),hn.add(Xn);let si=kt(he.z2-he.z1-.12,he.h-.34,new Ie({color:13496063,transparent:!0,opacity:.18,depthWrite:!1}));si.position.set(he.x1-.005,.18+he.h/2,(he.z1+he.z2)/2),si.rotation.y=-Math.PI/2,hn.add(si);let Te=z(.05,he.h-.4,he.z2-he.z1-.16,ht(15334399));Te.position.set(he.x2-.1,.18+he.h/2,(he.z1+he.z2)/2),hn.add(Te);let ze=[],ri=Ye(88);for(let k=0;k<3;k++)for(let Pt=0;Pt<3;Pt++)ze.push({pos:[he.x1+.1,.55+k*.32,he.z1+.18+Pt*.27],scale:[.1,.16,.18],color:[16748459,9358054,16765286,11920524,13481179,16032353][Math.floor(ri()*6)]});hn.add(_n(new we(1,1,1),ht(16777215,{unique:!0}),ze));let Re=kt(he.z2-he.z1-.1,.28,ht(16777215,{map:ni("\u30A2\u30A4\u30B9 \u30FB ICE","#3a7594"),toneMapped:!1}));Re.position.set(he.x1-.01,1.86,(he.z1+he.z2)/2),Re.rotation.y=-Math.PI/2,hn.add(Re),se(hn,13496319,1.8,new E(he.x1-.2,1.2,(he.z1+he.z2)/2),.2),s(hn,e+1.95,.6,1.3);let On=kt(3.6,.62,ht(16777215,{map:mu,toneMapped:!1}));On.position.set(.15,2.82,-4.005),r(On),s(On,e+2,.45,1);let Bi=se(o,16768424,2.6,new E(.15,2.7,-3.9),.12),as=kt(.72,1,ht(16777215,{map:Ni("onigiri"),toneMapped:!1}));as.position.set(3.85,2.16,-3.55),as.rotation.y=-Math.PI/2,r(as);let na=kt(.6,.84,ht(16777215,{map:Ni("ice"),toneMapped:!1}));na.position.set(3.85,2.15,-.62),na.rotation.y=-Math.PI/2,r(na),s(as,e+2.05,.4,.9),s(na,e+2.08,.4,.9),se(o,16769200,1,new E(3.7,2.15,-3.55),.1);let ia=_y("\u304B\u3089\u3042\u3052","#b4562d","#fff2da");ia.scale.set(.72,.72,1),ia.position.set(-2.75,2.72,-1.35),r(ia);let Bp=Ue(new E(-2.9,3.3,-1.35),new E(-2.87,3.05,-1.35),.006,$o),zp=Ue(new E(-2.6,3.3,-1.35),new E(-2.63,3.05,-1.35),.006,$o);o.add(Bp),o.add(zp),s(ia,e+2.15,.5,1);let Pc=qe(1.5,.75,ht(16777215,{map:tp,transparent:!0,opacity:.9,depthWrite:!1}),1.35,-.55,.188);Pc.rotation.z=-Math.PI/2,r(Pc),s(Pc,e+2.2,.4,.6);let Hp=qe(1.1,.55,P(10272681),2.9,.3,.19);o.add(Hp);let Vp=qe(.055,3,P(10139559),-3.45,-1.5,.188);o.add(Vp);let kp=qe(.06,3.2,P(9416348),-.3,-1.5,.188);o.add(kp);let Nr=zt(n,2.45,0,.22);Nr.rotation.y=.25;let Eu=new Ie({map:ap,side:Ae,toneMapped:!1}),Ic=kt(.26,.42,Eu,{outline:!1});Ic.position.set(0,.38,.09),Ic.rotation.x=-.28;let Lc=kt(.26,.42,Eu,{outline:!1});Lc.position.set(0,.38,-.09),Lc.rotation.x=.28,Nr.add(Ic),Nr.add(Lc);let Tu=z(.26,.02,.16,P(14266936));return Tu.position.y=.585,Nr.add(Tu),s(Nr,e+2.25,.35,.8),t?.add(o,{start:e+2.2,dur:.5,rise:1.1}),{root:n,fill1:u,fill2:f,fill3:g,fridgeGlow:Zt,odenAnchor:new E(1.35,1.52,-2.72),coffeeAnchor:new E(3.3,1.55,-2.38),hotAnchor:new E(2.45,1.6,-2.7),menuGlow:Bi}}var Zo=P(Sr.exterior,{unique:!0}),vu=P(Sr.exteriorShade,{unique:!0}),Er=P(Sr.trim,{unique:!0}),TM=P(Sr.trimLight,{unique:!0}),pp=P(Sr.frame,{unique:!0}),Su=P(8160404),Mu=new Ie({color:10471638,transparent:!0,opacity:.095,depthWrite:!1,side:Ae,toneMapped:!1});function yi(i,t,e,n,s,r,o,a=pp){let l=z(t,e,n,a,{outline:"hairline"});return l.position.set(s,r,o),i.add(l),l}function mp(i,t){let e=zt(i),n=(lt,dt,it=.6,xt=1.5)=>(t?.add(lt,{start:dt,dur:it,rise:xt}),lt),s=lt=>(e.add(lt),lt),r=Ms,o=1.48,a=zt(e);s(a),t?.add(a,{start:o+.5,dur:.5,rise:1.1});let l=P(13222062,{map:Di(kf,7.6,4),unique:!0}),c=P(9077106),h=new It(new we(9.2,.18,4.8),[c,c,l,c,c,c]);h.position.set(-.6,.09,-1.8),s(h),n(h,o,.7,1.2);let d=z(9.3,.06,.5,P(12170406));d.position.set(-.6,.21,.7),s(d),n(d,o+.15,.4,.5);let u=z(9.2,3.38,.14,Zo,{outline:"thin"});u.position.set(-.6,1.87,-4.13),s(u),n(u,o+.1,.7,1.8);let f=z(.14,3.38,4.8,vu,{outline:"thin"});f.position.set(-5.13,1.87,-1.8),s(f),n(f,o+.16,.7,1.8);let g=z(.14,3.38,2.88,Zo,{outline:"thin"});g.position.set(3.93,1.87,-2.76),s(g),n(g,o+.22,.7,1.8);let S=z(1.8,3.38,.14,Zo,{outline:"thin"});S.position.set(-4.3,1.87,.53),s(S),n(S,o+.28,.7,1.8);let m=z(7.55,.64,.14,Zo,{outline:"thin"});m.position.set(.225,3.24,.53),s(m),n(m,o+.36,.6,1.6);let p=z(5.22,.28,.14,vu,{outline:"thin"});p.position.set(-.79,.32,.53),s(p),n(p,o+.4,.5,1.2);let b=z(.14,.64,1.78,Zo,{outline:"thin"});b.position.set(3.93,3.24,-.43),s(b),n(b,o+.34,.5,1.5);let R=z(.14,.28,1.78,vu,{outline:"thin"});R.position.set(3.93,.32,-.43),s(R),n(R,o+.4,.5,1.2);let _=z(.18,3.38,.16,Er,{outline:"thin"});_.position.set(3.91,1.87,.53),s(_),n(_,o+.45,.5,1.4);let T=z(9.3,.1,.18,Er,{outline:"hairline"});T.position.set(-.6,2.9,.57),s(T),n(T,o+.55,.4,.9);let w=z(.18,.1,4.86,Er,{outline:"hairline"});w.position.set(3.97,2.9,-1.8),s(w),n(w,o+.58,.4,.9);let I=z(9.22,.2,.03,Er);I.position.set(-.6,.27,.605),s(I),n(I,o+.5,.4,.8);let y=z(.03,.2,4.8,Er);y.position.set(4.005,.27,-1.8),s(y),n(y,o+.5,.4,.8);for(let lt of[-4.85,-3.95]){let dt=z(.018,2.9,.018,Er);dt.position.set(lt,1.85,.605),s(dt),n(dt,o+.6,.3,.6)}let v=[],A=(r.sill+r.glassTop)/2,L=r.glassTop-r.sill,O=[[-2.53,1.74],[-.79,1.74],[.95,1.74]];for(let[lt,dt]of O){let it=kt(dt,L,Mu);it.position.set(lt,A,r.frontGlass.z),it.renderOrder=4,s(it),n(it,o+.7,.4,1.3),v.push({w:dt,h:L,x:lt,y:A,z:r.frontGlass.z+.01,ry:0})}for(let lt of[-3.4,-1.66,.08,1.82])yi(a,.075,L+.1,.11,lt,A,r.frontGlass.z);yi(a,5.3,.08,.12,-.79,r.sill,r.frontGlass.z),yi(a,5.3,.08,.12,-.79,r.glassTop,r.frontGlass.z);let W=[[-.875,.87],[.015,.78]];for(let[lt,dt]of W){let it=kt(dt,L,Mu);it.rotation.y=Math.PI/2,it.position.set(r.sideGlass.x,A,lt),it.renderOrder=4,s(it),n(it,o+.78,.4,1.3),v.push({w:dt,h:L,x:r.sideGlass.x+.012,y:A,z:lt,ry:Math.PI/2})}for(let lt of[-1.32,-.43,.46])yi(a,.11,L+.1,.075,r.sideGlass.x,A,lt);yi(a,.12,.08,1.86,r.sideGlass.x,r.sill,-.43),yi(a,.12,.08,1.86,r.sideGlass.x,r.glassTop,-.43);let F=kt(1.1,.28,ht(16777215,{map:Xf,transparent:!0,depthWrite:!1,opacity:.8}));F.position.set(-1.3,2.55,r.frontGlass.z+.018),F.renderOrder=5,a.add(F);let G=kt(.5,.7,ht(16777215,{map:Ni("sale")}));G.position.set(1.3,1.45,r.frontGlass.z+.02),G.renderOrder=5,a.add(G);let j=z(.56,.76,.02,P(14207920));j.position.set(1.3,1.45,r.frontGlass.z+.008),a.add(j);let K=zt(e,0,0,0),ct=.905,U=2.7,J=.18+U/2,D=r.door.z,rt=[];for(let lt=0;lt<2;lt++){let dt=zt(K,lt===0?2.405:3.365,0,0),it=kt(ct-.14,U-.2,Mu);it.position.set(0,J,D),it.renderOrder=4,dt.add(it),v.push({w:ct-.14,h:U-.2,x:lt===0?2.405:3.365,y:J,z:D+.01,ry:0,door:lt});let xt=[[ct,.085,.1,0,J+U/2-.04],[ct,.085,.1,0,J-U/2+.04],[.07,U,.1,-ct/2+.035,J],[.07,U,.1,ct/2-.035,J],[ct-.14,.035,.09,0,J+.55]];for(let[q,Tt,ie,Le,ln]of xt){let ii=z(q,Tt,ie,pp,{outline:"hairline"});ii.position.set(Le,ln,D),dt.add(ii)}rt.push(dt),n(dt,o+.86+lt*.06,.5,1.4)}yi(a,.1,U+.1,.14,1.95,J,D),yi(a,.1,U+.1,.14,3.82,J,D),yi(a,1.92,.1,.14,2.885,J+U/2+.05,D),yi(a,1.92,.06,.16,2.885,.18,D);let ut=z(.3,.1,.12,P(2764600));ut.position.set(2.9,2.95,.72),a.add(ut);let Yt=z(.05,.03,.02,ht(14240330));Yt.position.set(2.9,2.95,.79),a.add(Yt);let Kt=qe(1.15,.44,ht(16777215,{map:gu}),2.88,.7,.245);s(Kt),n(Kt,o+.9,.3,.4);let _t=qe(1.15,.62,ht(16777215,{map:gu}),2.88,.36,.192);a.add(_t);let X=kt(.56,.28,ht(16777215,{map:lp,transparent:!0,depthWrite:!1}));X.position.set(2.88,2.42,.38),X.renderOrder=5,a.add(X),se(a,16769714,1,new E(2.88,2.4,.42),.12);let et=z(9.4,.13,1.22,P(3099204,{unique:!0}),{outline:"thin"});et.position.set(-.6,r.canopyY+.065,1.14),s(et),n(et,o+.88,.55,1.2);let At=z(9.4,.16,.05,P(9080726));At.position.set(-.6,r.canopyY+.06,1.75),s(At),n(At,o+.96,.3,.8);let Xt=z(9.2,.02,1.06,P(15392712));Xt.position.set(-.6,r.canopyY-.005,1.14),a.add(Xt);let Dt=[];for(let lt of[-4.3,-2.2,-.1,2,3.4]){let dt=z(.2,.07,.2,P(3230532),{outline:"hairline"});dt.position.set(lt,r.canopyY-.035,1.56),a.add(dt);let it=new It(new bn(.075,14),ht(16770747));it.rotation.x=Math.PI/2,it.position.set(lt,r.canopyY-.075,1.56),a.add(it);let xt=se(a,16764820,1,new E(lt,r.canopyY-.12,1.6),.4);Dt.push(xt);let q=Ue(new E(lt,3.2,.62),new E(lt,r.canopyY+.02,1.58),.018,Su);a.add(q)}let Zt=z(9.36,.025,.04,ht(16769973));Zt.position.set(-.6,r.canopyY-.015,1.74),a.add(Zt);for(let lt of[-3,1.7]){let dt=new Tn(16763277,10,6.5,2);dt.position.set(lt,2.72,1.35),e.add(dt)}let Lt=ht(16777215,{map:Gf,toneMapped:!1}),st=P(15261642),ft=P(3751750),mt=[st,st,st,st,Lt,ft],pt=new It(new we(9.3,1.08,.2),mt);pt.position.set(-.6,r.signY,r.signZ),s(pt),n(pt,o+1.02,.7,1);let bt=z(9.36,.045,.24,P(2832179));bt.position.set(-.6,r.signY+.56,r.signZ),a.add(bt);let Jt=z(9.36,.045,.24,P(2832179));Jt.position.set(-.6,r.signY-.56,r.signZ),a.add(Jt);let vt=zt(e);t?.add(vt,{start:o+1.1,dur:.6,rise:1});let te=se(vt,16773325,2.6,new E(-4,r.signY,1.1),.22),oe=se(vt,16772546,2.4,new E(2.9,r.signY,1.1),.2),N=kt(9.6,2.3,new Ie({map:yr(),color:16769973,transparent:!0,opacity:.11,blending:gn,depthWrite:!1,toneMapped:!1}));N.position.set(-.6,r.signY,1.18),N.renderOrder=7,vt.add(N);let ge=ht(16777215,{map:Wf,toneMapped:!1}),ue=[ge,ge.clone(),P(15261642),P(3620165),P(3620165),P(3620165)],C=new It(new we(.16,2.36,.8),ue);C.position.set(4.31,3.02,-1.08),s(C),n(C,o+1.14,.6,1.2);let x=se(a,9431769,2.1,new E(4.52,3,-1.08),.2),B=Ue(new E(4,3.9,-1.08),new E(4.28,3.9,-1.08),.03,Su);a.add(B);let Y=Ue(new E(4,2.35,-1.08),new E(4.28,2.35,-1.08),.025,Su);a.add(Y);let tt=kt(.84,1.12,ht(16777215,{map:Ni("coffee"),toneMapped:!1}));tt.position.set(-4.55,2.22,.615),s(tt),n(tt,o+1,.4,.7);let yt=z(.92,1.2,.08,P(3951172));yt.position.set(-4.55,2.22,.59),a.add(yt),se(a,16769200,1.1,new E(-4.55,2.22,.72),.18);let Mt=z(.66,.5,.3,P(14210505),{outline:"thin"});Mt.position.set(4.25,2.55,-3.05),s(Mt),n(Mt,o+1.2,.5,1);let nt=new It(new nn(.17,.02,6,16),P(5660008));nt.rotation.y=Math.PI/2,nt.position.set(4.42,2.55,-3.05),a.add(nt);let ot=Ue(new E(4.36,2.3,-3.2),new E(4.36,.2,-3.2),.035,P(11580595));a.add(ot);let Rt=Ue(new E(4.42,2.3,-3.2),new E(4.42,1.4,-2.5),.025,P(8291712));a.add(Rt);let Gt=z(9.2,.16,4.8,P(9870498,{map:Di(ip,4,2),unique:!0}),{outline:"thin"});Gt.position.set(-.6,3.64,-1.8),s(Gt),n(Gt,o+.62,.5,1);let gt=[[9.24,.24,.12,-.6,3.84,-4.2],[.12,.24,4.8,-5.16,3.84,-1.8],[.12,.24,4.8,3.96,3.84,-1.8],[9.24,.24,.12,-.6,3.84,.6]];for(let[lt,dt,it,xt,q,Tt]of gt){let ie=z(lt,dt,it,P(14472127),{outline:"hairline"});ie.position.set(xt,q,Tt),s(ie),n(ie,o+.7,.4,.9);let Le=z(lt+.04,.035,it+.04,P(9804707));Le.position.set(xt,q+.13,Tt),a.add(Le)}let Et=zt(e);for(let[lt,dt,it,xt]of[[1.9,-3,1,.15],[-3.3,-3.15,.8,-.1]]){let q=z(.85*it,.55*it,.6*it,P(9869974),{outline:"thin"});q.position.set(lt,3.98,dt),q.rotation.y=xt,Et.add(q);let Tt=new It(new nn(.18*it,.02,6,16),P(5593956));Tt.rotation.x=-Math.PI/2,Tt.position.set(lt,4.27,dt),Et.add(Tt)}let Ht=Qt(.1,.1,.7,P(9343897),{outline:"thin"});Ht.position.set(-1.4,4.05,-3.4),Et.add(Ht);let $t=Qt(.18,.18,.08,P(5857128));$t.position.set(-1.4,4.43,-3.4),Et.add($t),n(Et,o+.82,.5,1);let ae=z(.9,2.15,.08,P(3951175),{outline:"thin"});ae.position.set(-4.6,1.26,-4.215),s(ae),n(ae,o+.95,.5,1);let H=new It(new Ke(.06,8,6),ht(16769192));H.position.set(-4.6,2.55,-4.28),a.add(H),se(a,16765850,.6,new E(-4.6,2.55,-4.32),.35);let Ct=z(1.3,.12,.55,P(8093056));Ct.position.set(-4.55,.06,-4.35),a.add(Ct);let at=fp(e,t,o+.9);return{root:e,signFront:Lt,signGlow:vt,sideSign:C,sideSignGlow:x,door:{left:rt[0],right:rt[1],leftBaseX:2.405,rightBaseX:3.365},glassPanes:v,doorPanels:rt,interior:at,downlights:Dt,haloPlane:N,glowA:te,glowB:oe}}var bu='"Yu Gothic UI","Yu Gothic","Meiryo","Noto Sans JP",sans-serif',yy='"Segoe UI", Arial, sans-serif';function wn(i,t,e,n,s,r,o=0,a=0){let l=z(s+.12,r+.12,.1,P(3883328),{outline:"hairline"});l.position.set(t,e,n),l.rotation.y=a,i.add(l);let c=kt(s,r,ht(16777215,{map:Sc(o),toneMapped:!1}));c.position.set(t,e,n+.055),c.rotation.y=a,a!==0&&c.position.set(t+Math.sin(a)*.055,e,n+Math.cos(a)*.055),i.add(c);let h=z(s+.24,.06,.18,P(8027768));return h.position.set(t,e-r/2-.08,n+.05),h.rotation.y=a,i.add(h),c}function bc(i,t,e,n=!0){return ce(256,512,(s,r,o)=>{s.fillStyle=t,s.fillRect(0,0,r,o),n&&(s.strokeStyle=e,s.lineWidth=8,s.strokeRect(12,12,r-24,o-24)),s.fillStyle=e,s.textAlign="center",s.textBaseline="middle",i.forEach((a,l)=>{s.font=`700 ${l===0?68:42}px ${bu}`,s.fillText(a,r/2,120+l*110)})})}function gp(i,t){let e=zt(i),n=(q,Tt,ie=.8,Le=2)=>(t?.add(q,{start:Tt,dur:ie,rise:Le}),q),s=zt(e),r=z(3.2,5.3,7.8,P(7041120,{unique:!0}),{outline:"thin"});r.position.set(-8.4,2.65,-5.3),s.add(r);let o=z(3.34,.14,7.94,P(3817537));o.position.set(-8.4,5.37,-5.3),s.add(o);let a=z(3.4,.3,.14,P(8619898),{outline:"hairline"});a.position.set(-8.4,5.5,-1.3),s.add(a),n(s,1.15,1,2.6);let l=zt(s);t?.add(l,{start:1.55,dur:.65,rise:1.6});let c=kt(2.05,2.35,ht(16777215,{map:Di(Zf,1,1)}));c.position.set(-8.9,1.32,-1.335),l.add(c);let h=z(2.2,2.5,.16,P(5067083),{outline:"thin"});h.position.set(-8.9,1.3,-1.41),l.add(h);let d=z(.5,.08,.22,ht(16768941));d.position.set(-7.8,2.72,-1.25),l.add(d),se(l,16762501,1.2,new E(-7.8,2.6,-1.1),.3);let u=z(.82,2.16,.08,P(3160889),{outline:"thin"});u.position.set(-7.35,1.24,-1.37),l.add(u);let f=z(.24,.1,.1,ht(16767394));f.position.set(-7.35,2.52,-1.3),l.add(f),se(l,16764825,.8,new E(-7.35,2.45,-1.16),.24),wn(l,-9.15,3.95,-1.31,1,1.15,0,0),wn(l,-7.55,3.95,-1.31,.94,1.15,3,0),wn(l,-8.4,4.7,-1.31,.7,.7,2,0);let g=z(2,.12,.55,P(7435883),{outline:"thin"});g.position.set(-8.55,3.2,-1.08),l.add(g);for(let q=0;q<7;q++){let Tt=Qt(.018,.018,.5,P(9278087));Tt.position.set(-9.45+q*.3,3.48,-.85),l.add(Tt)}let S=z(2.05,.04,.04,P(9278087));S.position.set(-8.55,3.73,-.85),l.add(S);let m=z(.56,.42,.3,P(14144712),{outline:"thin"});m.position.set(-9.35,3.48,-1.15),l.add(m);for(let q=0;q<6;q++){let Tt=z(.56,.012,.29,P(12829110));Tt.position.set(-9.35,3.32+q*.055,-1.15),l.add(Tt)}let p=bc(["\u305F\u3070\u3053"],"#f1e6cd","#a83a35"),b=new It(new we(.5,1.68,.14),[P(15853261),P(15853261),P(15853261),P(15853261),ht(16777215,{map:p,toneMapped:!1}),P(15853261)]);b.position.set(-7,2.2,-1.2),l.add(b),se(l,16764827,1,new E(-7,2.35,-1),.2);let R=-6.79;for(let q of[-2.4,-4.2,-6.5]){let Tt=Ue(new E(R,4.8,q),new E(R,.4,q),.045,P(9079424));l.add(Tt);let ie=z(.08,.06,.08,P(6251356));ie.position.set(R+.02,3.1,q),l.add(ie)}let _=z(.3,.42,.16,P(10855835),{outline:"thin"});_.position.set(R-.02,2.25,-3.1),_.rotation.y=Math.PI/2,l.add(_);let T=kt(.62,1.9,ht(16777215,{map:xu,transparent:!0,blending:gn,depthWrite:!1,toneMapped:!1}));T.position.set(R+.03,2.55,-2.25),T.rotation.y=Math.PI/2,T.renderOrder=6,l.add(T);let w=se(l,16742321,2,new E(-6.7,2.5,-2.25),.3);se(l,16755145,.9,new E(-6.7,2.8,-2.25),.25);let I=kt(.5,1.25,ht(16777215,{map:xu,transparent:!0,blending:gn,depthWrite:!1,toneMapped:!1,side:Ae}));I.position.set(-6.35,4.3,-1.08),l.add(I);let y=z(.04,.04,.55,P(5067856));y.position.set(-6.35,4.98,-1.3),l.add(y);let v=new It(new Ke(.11,8,6),ht(16744607));v.scale.set(1,1.45,1),v.position.set(-6.35,3.55,-1.08),l.add(v),se(l,16748200,1.5,new E(-6.25,4.2,-.98),.28);let A=z(.9,2.05,.08,P(4081474),{outline:"thin"});A.position.set(R-.02,1.2,-3.8),A.rotation.y=Math.PI/2,l.add(A);let L=new It(new Ke(.07,8,6),ht(16768422));L.position.set(-6.7,2.35,-3.8),l.add(L),se(l,16764306,1.1,new E(-6.68,2.35,-3.8),.3),wn(l,-6.77,4.2,-3.2,.78,.88,0,Math.PI/2),wn(l,-6.77,4.2,-5.45,.78,.88,2,Math.PI/2);let O=bc(["\u661F\u753A","\u5546\u5E97\u4F1A"],"#e8e1cc","#2c5b50"),W=kt(.46,1.04,ht(16777215,{map:O,toneMapped:!1}));W.position.set(-6.76,3,-5),W.rotation.y=Math.PI/2,l.add(W),se(l,16769972,.8,new E(-6.68,3,-5),.12);let F=z(.05,.08,7.8,P(9145726));F.position.set(-6.77,2.72,-5.3),l.add(F);let G=z(.05,.07,7.8,P(9145726));G.position.set(-6.77,4.92,-5.3),l.add(G);let j=z(3.2,.07,.05,P(9145726));j.position.set(-8.4,4.92,-1.36),l.add(j);let K=z(.5,.38,.3,P(13947074),{outline:"thin"});K.position.set(-6.62,4.55,-6.55),K.rotation.y=Math.PI/2,l.add(K);let ct=new It(new nn(.14,.018,5,14),P(6120287));ct.position.set(-6.45,4.55,-6.55),ct.rotation.y=Math.PI/2,l.add(ct);let U=Qt(.045,.045,5.1,P(9408904),{segments:8});U.position.set(-6.73,2.6,-7.9),l.add(U);let J=Qt(.045,.045,.5,P(9408904),{segments:8});J.position.set(-6.73,.3,-7.65),J.rotation.x=Math.PI/2,l.add(J);let D=new Tn(16763274,3.2,4.6,2);D.position.set(-7.6,2.6,-.6),l.add(D),se(l,16766624,1.2,new E(-7.6,2.9,-.7),.12);for(let q=0;q<4;q++){let Tt=Qt(.02,.02,.4,P(9278087));Tt.position.set(-9.7+q*.85,5.72,-1.45),l.add(Tt)}let rt=z(2.7,.035,.035,P(9278087));rt.position.set(-8.4,5.93,-1.45),l.add(rt);let ut=Qt(.03,.03,2.4,P(9278353));ut.position.set(-8.2,5.9,-6.2),ut.rotation.z=Math.PI/2,l.add(ut);let Yt=Qt(.45,.45,.8,P(10397092),{outline:"thin",segments:12});Yt.position.set(-9.2,5.85,-7.1),l.add(Yt);let Kt=Qt(.48,.48,.08,P(7568250),{segments:12});Kt.position.set(-9.2,6.3,-7.1),l.add(Kt);let _t=Qt(.02,.03,2.6,P(7830914));_t.position.set(-7.1,6.4,-8.3),l.add(_t);for(let q=0;q<4;q++){let Tt=z(.8-q*.12,.018,.018,P(7830914));Tt.position.set(-7.1,6.9+q*.35,-8.3),l.add(Tt)}let X=zt(e),et=qe(1.56,7,P(1777707),-6,-4.9,.022);X.add(et);let At=z(.16,.02,6.8,P(2895930));At.position.set(-5.36,.028,-4.9),X.add(At);let Xt=z(1.5,.09,.38,P(7828583));Xt.position.set(-6,.06,-1.35),X.add(Xt);let Dt=kt(1.3,.5,ht(4012876,{side:Ae}));Dt.position.set(-6,2.25,-8.4),X.add(Dt);let Zt=z(1.4,2,.1,P(4080704),{outline:"thin"});Zt.position.set(-6,1.1,-8.42),X.add(Zt);let Lt=new It(new Ke(.07,8,6),ht(16767904));Lt.position.set(-6,2.7,-8.3),X.add(Lt),se(X,16764047,1.4,new E(-6,2.7,-8.2),.3),n(X,1.8,.6,1);let st=zt(e),ft=P(7101507);for(let q=0;q<4;q++){let Tt=z(.42,.32,.42,ft,{outline:"hairline"});Tt.position.set(-5.45,.18+q%2*.34,-2.4-Math.floor(q/2)*.48),st.add(Tt)}let mt=vy(.32,.2,P(2370096));mt.position.set(-5.55,.24,-4.1),st.add(mt),n(st,1.95,.45,.8);let pt=zt(e),bt=z(10.4,6.1,1.55,P(4608092,{unique:!0}),{outline:"thin"});bt.position.set(-1.6,3.05,-9.25),pt.add(bt);let Jt=z(10.6,.3,.2,P(7568774),{outline:"hairline"});Jt.position.set(-1.6,6.2,-8.5),pt.add(Jt),n(pt,1.28,.9,2.4);let vt=zt(pt);t?.add(vt,{start:1.7,dur:.6,rise:1.4}),wn(vt,-4.9,4.3,-8.46,.8,.9,1,0),wn(vt,-3.1,4.3,-8.46,.8,.9,3,0),wn(vt,.7,3.3,-8.46,.9,1,0,0),wn(vt,2.5,5.1,-8.46,.7,.8,2,0),wn(vt,-.9,5.2,-8.46,.75,.85,3,0);let te=Qt(.62,.62,1,P(6845309),{outline:"thin",segments:12});te.position.set(1.9,6.85,-9.2),vt.add(te);let oe=Qt(.66,.66,.1,P(5068641),{segments:12});oe.position.set(1.9,7.4,-9.2),vt.add(oe);let N=Qt(.025,.04,3.2,P(5594984));N.position.set(-4.9,7.7,-9.3),vt.add(N);for(let q=0;q<3;q++){let Tt=z(.9-q*.16,.02,.02,P(5594984));Tt.position.set(-4.9,8.5+q*.4,-9.3),vt.add(Tt)}let ge=new It(new Ke(.055,8,6),ht(16730698));ge.position.set(-4.9,9.35,-9.3),vt.add(ge),se(vt,16732754,.55,new E(-4.9,9.35,-9.25),.4);let ue=(q,Tt,ie)=>{let Le=z(ie,.12,.58,P(8291978,{unique:!0}),{outline:"thin"});Le.position.set(q,Tt,-8.18),vt.add(Le);for(let Fi=0;Fi<5;Fi++){let Oi=Qt(.016,.016,.5,P(9410459));Oi.position.set(q-ie/2+.18+Fi*(ie-.36)/4,Tt+.3,-7.93),vt.add(Oi)}let ln=z(ie,.04,.035,P(9410459));ln.position.set(q,Tt+.55,-7.93),vt.add(ln);let ii=z(.48,.34,.28,P(13749695),{outline:"hairline"});ii.position.set(q+ie*.28,Tt+.2,-8),vt.add(ii)};ue(-3.6,4.35,2.6),ue(1.55,5.1,2.4);for(let q of[-6.55,3.25]){let Tt=Qt(.04,.04,6,P(8225929),{segments:8});Tt.position.set(q,3,-8.43),vt.add(Tt)}let C=z(2.2,.95,1.35,P(5463655),{outline:"thin"});C.position.set(-2,6.55,-9.5),vt.add(C);let x=kt(.65,.55,ht(16770231));x.position.set(-2,6.48,-8.82),vt.add(x),se(vt,16765851,1.1,new E(-2,6.45,-8.75),.2);let B=ce(1024,256,(q,Tt,ie)=>{let Le=q.createLinearGradient(0,0,0,ie);Le.addColorStop(0,"#2d3a43"),Le.addColorStop(1,"#1d282f"),q.fillStyle=Le,q.fillRect(0,0,Tt,ie),q.strokeStyle="rgba(230,218,190,0.55)",q.lineWidth=6,q.strokeRect(14,14,Tt-28,ie-28),q.fillStyle="#f0e2c2",q.font=`700 92px ${bu}`,q.fillText("\u661F\u753A\u9280\u5EA7",60,128),q.fillStyle="#c99f63",q.font=`600 32px ${yy}`,q.fillText("HOSHIMACHI GINZA  \xB7  SINCE 1968",64,196),q.fillStyle="#e07b91",q.fillRect(760,60,180,8),q.fillStyle="#efe3c4",q.beginPath(),q.arc(864,120,58,0,Math.PI*2),q.fill(),q.fillStyle="#26343a",q.font=`700 46px ${bu}`,q.textAlign="center",q.fillText("\u661F",864,138)}),Y=kt(4.3,1.08,ht(16777215,{map:B,toneMapped:!1}));Y.position.set(-1,7.55,-9.35),vt.add(Y);let tt=z(4.45,1.2,.1,P(4081485));tt.position.set(-1,7.55,-9.43),vt.add(tt);for(let q of[-3,1]){let Tt=Qt(.045,.045,1.6,P(5002587),{segments:8});Tt.position.set(q,6.85,-9.45),vt.add(Tt)}se(vt,16769203,1.1,new E(-2.4,7.55,-9.2),.12);for(let q=0;q<9;q++){let Tt=Qt(.018,.018,.35,P(8358029));Tt.position.set(-6.1+q*1.2,6.28,-8.42),vt.add(Tt)}let yt=z(9.7,.035,.035,P(8358029));yt.position.set(-1.3,6.44,-8.42),vt.add(yt);let Mt=bc(["\u661F\u753A","\u8358"],"#283039","#e8d8b4"),nt=kt(.8,1.5,ht(16777215,{map:Mt,toneMapped:!1}));nt.position.set(3.1,4.1,-8.45),vt.add(nt),se(vt,16768942,1.1,new E(3.1,4.2,-8.3),.16);let ot=zt(e),Rt=z(1.1,4.9,4.6,P(5660003,{unique:!0}),{outline:"thin"});Rt.position.set(9.45,2.45,-7.7),ot.add(Rt);let Gt=z(1.2,.16,4.7,P(4015180));Gt.position.set(9.45,4.98,-7.7),ot.add(Gt),n(ot,1.4,.8,2.2);let gt=zt(ot);t?.add(gt,{start:1.8,dur:.6,rise:1.2}),wn(gt,9.45,3.15,-5.36,.72,.82,0,0),wn(gt,9.45,2,-5.36,.68,.75,3,0);let Et=z(.8,2,.08,P(4475723),{outline:"thin"});Et.position.set(9.45,1.1,-5.35),gt.add(Et);let Ht=z(.28,.08,.18,ht(16766877));Ht.position.set(9.45,2.45,-5.3),gt.add(Ht),se(gt,16764825,1,new E(9.45,2.4,-5.2),.2),wn(gt,8.89,3.45,-8.5,.75,.9,0,-Math.PI/2),wn(gt,8.89,3.55,-6.35,.72,.85,1,-Math.PI/2),wn(gt,8.89,2.15,-7.5,.68,.8,3,-Math.PI/2);let $t=z(.46,.32,.28,P(13618368),{outline:"hairline"});$t.position.set(8.72,2.55,-5.8),$t.rotation.y=Math.PI/2,gt.add($t);let ae=Qt(.035,.035,4.7,P(8094343),{segments:8});ae.position.set(8.88,2.4,-9.55),gt.add(ae);for(let q=0;q<5;q++){let Tt=Qt(.015,.015,.32,P(9147030));Tt.position.set(8.9,5.12,-9.6+q*.95),gt.add(Tt)}let H=z(.03,.03,3.9,P(9147030));H.position.set(8.9,5.26,-7.7),gt.add(H);let Ct=bc(["\u30B3\u30A4\u30F3","\u30E9\u30F3\u30C9\u30EA\u30FC"],"#e9e2ce","#2e6a72"),at=Yo(.6,1.2,ht(16777215,{map:Ct,toneMapped:!1}));at.position.set(8.9,2,-6.2),at.rotation.y=-Math.PI/2,gt.add(at),se(gt,11070192,1,new E(8.7,2,-6.2),.14);let lt=z(.12,3.2,.12,P(8225671));lt.position.set(8.84,1.8,-9.4),gt.add(lt);let dt=zt(e),it=z(.38,.42,5.4,P(7370351),{outline:"thin"});it.position.set(9.64,.21,-.7),dt.add(it);let xt=Ye(123);for(let q=0;q<9;q++){let Tt=new It(new xs(.42+xt()*.12,1),P(2901045));Tt.scale.set(.8,.85+xt()*.3,.8),Tt.position.set(9.62+(xt()-.5)*.12,.68+xt()*.12,-3.2+q*.58),an(Tt,"hairline"),dt.add(Tt)}return n(dt,1.85,.6,.9),{root:e,left:s,back:pt,right:ot,alley:X,neon:T,neonGlow:w,beacon:ge,alleyLamp:L,crates:st}}function vy(i,t,e){let n=new It(new Ke(1,8,6),e);return n.scale.set(i,t,i*.8),an(n,"hairline"),n}var Sy='"Yu Gothic UI","Yu Gothic","Meiryo","Noto Sans JP",sans-serif',Tr=P(3883339),Ui=P(10199723),qM=P(15197916,{emissive:1315858});function My(i,t){let e=zt(i),n=Qt(.085,.15,8.4,P(5659224,{unique:!0}),{outline:"thin",segments:12});n.position.set(9.24,4.2,-1),e.add(n);let s=Qt(.25,.3,.35,P(5922660),{segments:12});s.position.set(9.24,.18,-1),e.add(s);for(let[d,u,f]of[[7.45,2,-.15],[6.85,1.5,.35]]){let g=z(u,.09,.12,Tr,{outline:"hairline"});g.position.set(9.55-u/2,d,-1+f),g.rotation.z=.02,e.add(g);for(let S=0;S<3;S++){let m=Qt(.045,.055,.12,P(14276296),{segments:8});m.position.set(9.55-u+.18+S*(u-.3)/2,d+.11,-1+f),e.add(m)}}let r=Qt(.27,.27,.78,P(8093828),{outline:"thin",segments:12});r.position.set(9.02,5.95,-1.25),e.add(r);let o=Qt(.3,.3,.08,P(6054246),{segments:12});o.position.set(9.02,6.38,-1.25),e.add(o);let a=fu([[9,5.55,-1.2],[9.03,4.8,-1.2],[9.05,4.2,-1.15]],.022,P(2435633));e.add(a);for(let d=0;d<7;d++){let u=Qt(.022,.022,.22,P(9212309));u.rotation.z=Math.PI/2,u.position.set(9.24,1.2+d*.55,-1.15),e.add(u)}let l=kt(.28,.2,ht(16777215,{map:ce(128,96,(d,u,f)=>{d.fillStyle="#d8d4c2",d.fillRect(0,0,u,f),d.fillStyle="#2e3a44",d.font=`700 24px ${xp}`,d.textAlign="center",d.fillText("\u661F\u753A",u/2,38),d.font=`500 15px ${xp}`,d.fillText("No. 12",u/2,68)})}));l.position.set(9.24,2.2,-.82),e.add(l);let c=P(2435895);return[[[9.2,7.35,-1],[2,6.2,-.6],[-7.8,5.85,-2.2]],[[9.3,7.4,-1.05],[1.8,6.1,-.9],[-7.6,5.7,-2.6]],[[9,6.95,-1],[2.2,5.6,-.2],[-7.9,5.4,-1.8]],[[9.2,7.2,-1],[9.2,6.9,-5.6],[9,6.6,-9.8]],[[9.2,7.5,-1],[9.7,6.9,-5.5]]].forEach((d,u)=>{for(let f=0;f<(u===4?1:3);f++){let g=d.map((_,T)=>[_[0],_[1]-f*.13+(T===0?0:-.12),_[2]+f*.1]),S=g[0],m=g[g.length-1],p=[(S[0]+m[0])/2,(S[1]+m[1])/2-.55-f*.03,(S[2]+m[2])/2],b=[...g.slice(0,1),p,...g.slice(1)],R=fu(b,.018,c,22);e.add(R)}}),t?.add(e,{start:4,dur:.8,rise:1.6}),e}var xp='"Segoe UI", Arial, sans-serif';function by(i,t){let e=zt(i,5.7,0,3.05),n=Qt(.18,.22,.3,P(6186091),{outline:"thin",segments:10});n.position.y=.15,e.add(n);let s=Qt(.06,.085,4.7,P(5593954,{unique:!0}),{outline:"thin",segments:10});s.position.y=2.5,e.add(s);let r=Qt(.1,.1,.22,P(3949129));r.position.y=1,e.add(r);let o=Ue(new E(0,4.75,0),new E(.75,5,.25),.05,Ui);e.add(o);let a=Ue(new E(.75,5,.25),new E(1.35,5.02,.42),.045,Ui);e.add(a);let l=z(.58,.09,.24,P(3356991),{outline:"thin"});l.position.set(1.55,5,.48),l.rotation.y=.25,e.add(l);let c=z(.62,.05,.28,P(2567475));c.position.set(1.55,4.96,.48),c.rotation.y=.25,e.add(c);let h=kt(.46,.18,ht(14675967));h.rotation.x=Math.PI/2,h.rotation.z=.25,h.position.set(1.55,4.935,.48),e.add(h),se(e,13625599,1.3,new E(1.55,4.9,.48),.13),se(e,13625599,.55,new E(1.55,4.96,.48),.24);let d=new Tn(12376319,34,14,2);d.position.set(1.55,4.6,.48),e.add(d);let u=kt(.38,1.35,ht(16777215,{map:ep,side:Ae,toneMapped:!1}));u.position.set(.02,3.1,.32),e.add(u);let f=Ue(new E(0,3.8,0),new E(0,3.8,.35),.02,Ui);e.add(f);let g=Ue(new E(0,2.4,0),new E(0,2.4,.35),.02,Ui);return e.add(g),t?.add(e,{start:4.05,dur:.75,rise:1.6}),{group:e,light:d}}function Ey(i,t){let e=zt(i,8.83,0,2.72),n=Qt(.16,.2,.3,P(5528161),{segments:10});n.position.y=.15,e.add(n);let s=Qt(.06,.08,3.55,P(7304572,{unique:!0}),{outline:"thin",segments:10});s.position.y=1.95,e.add(s);let r=Ue(new E(0,3.5,0),new E(-1.8,3.5,0),.05,Ui);e.add(r);let o=z(1.3,.44,.24,P(4146251),{outline:"thin"});o.position.set(-1.75,3.16,0),e.add(o);let a=z(1.4,.55,.03,P(3224891));a.position.set(-1.75,3.16,-.14),e.add(a);let l=[],c=[14172995,14723132,5224570];for(let g=0;g<3;g++){let S=new Ie({color:c[g],transparent:!0,opacity:.25,toneMapped:!1}),m=new It(new bn(.13,16),S);m.position.set(-2.17+g*.42,3.16,.128),e.add(m);let p=new It(new nn(.15,.018,5,14),P(2896183));p.position.set(-2.17+g*.42,3.16,.14),e.add(p);let b=se(e,c[g],.85,new E(-2.17+g*.42,3.16,.24),0);l.push({mat:S,glow:b})}let h=z(.3,.55,.16,P(3883078),{outline:"hairline"});h.position.set(.04,2.2,.1),e.add(h);let d=kt(.16,.16,ht(14174280));d.position.set(.04,2.3,.19),e.add(d);let u=kt(.16,.16,ht(5222006));u.position.set(.04,2.08,.19),e.add(u);let f=Yo(1.08,.29,ht(16777215,{map:Jf,toneMapped:!1}));return f.position.set(.02,2.72,.22),e.add(f),t?.add(e,{start:4.15,dur:.7,rise:1.4}),{group:e,lights:l,pedRed:d,pedGreen:u}}function _p(i,t,e,n,s,r){let o=zt(i),a=e===0?10825525:1926258,l=new It(new we(.96,1.9,.74),[P(a),P(a),ht(15920349),P(a),P(a),P(a)]);l.position.set(n,1.09,s),an(l,"thin"),o.add(l);let c=kt(.98,1.92,ht(16777215,{map:pu(e),toneMapped:!1}));c.position.set(n,1.09,s+.375),o.add(c);let h=z(.98,.12,.76,P(2961464));h.position.set(n,.19,s),o.add(h);let d=z(.98,.16,.8,ht(e===0?16767398:12449775));d.position.set(n,2.1,s),o.add(d);let u=z(1,.05,.82,Tr);u.position.set(n,2.19,s),o.add(u);let f=new Tn(e===0?16745848:8382432,4.5,3.2,2);return f.position.set(n,1.3,s+.65),o.add(f),se(o,e===0?16748418:9433832,2.2,new E(n,1.2,s+.5),.26),vr(o,1.4,1.1,n,s+.1,.3,.03),t?.add(o,{start:r,dur:.6,rise:1.4}),o}function Ty(i,t){let e=zt(i,-2.05,.069,1.45);e.rotation.y=.2;let n=P(2317916),s=P(1843238),r=P(11975874),o=_=>{let T=zt(e),w=new It(new nn(.325,.028,6,22),s);w.position.set(_,.33,0),an(w,"hairline"),T.add(w);for(let v=0;v<10;v++){let A=v/10*Math.PI*2,L=Ue(new E(_,.33,0),new E(_+Math.cos(A)*.3,.33+Math.sin(A)*.3,0),.0045,r);T.add(L)}let I=Qt(.035,.035,.08,r,{segments:8});I.rotation.x=Math.PI/2,I.position.set(_,.33,0),T.add(I);let y=new It(new nn(.35,.022,4,12,Math.PI*.75),P(2502703));return y.position.set(_,.33,.01),y.rotation.z=Math.PI*.15,T.add(y),T};o(-.52),o(.52);let a={rear:new E(-.52,.33,0),front:new E(.52,.33,0),bb:new E(-.08,.36,0),seat:new E(-.2,.88,0),head:new E(.34,.82,0),rack:new E(-.45,.78,0)},l=[[a.rear,a.bb],[a.rear,a.seat],[a.bb,a.seat],[a.bb,a.head],[a.seat,a.head],[a.head,a.front],[a.seat,a.rack],[a.rack,a.rear]];for(let[_,T]of l){let w=Ue(_,T,.022,n,{segments:6});e.add(w)}let c=Ue(new E(.36,.84,0),new E(.3,1,.02),.018,r);e.add(c);let h=Ue(new E(.3,1,-.22),new E(.3,1,.22),.016,r);e.add(h);let d=Qt(.022,.022,.1,s,{segments:6});d.rotation.x=Math.PI/2,d.position.set(.3,1,.22),e.add(d);let u=d.clone();u.position.z=-.22,e.add(u);let f=z(.26,.06,.13,s,{outline:"hairline"});f.position.set(-.2,.94,0),e.add(f);let g=new It(new we(.34,.24,.3),new Ie({color:9278877,wireframe:!0}));g.position.set(.5,.92,0),e.add(g);let S=new It(new we(.33,.02,.29),Tr);S.position.set(.5,.8,0),e.add(S);let m=z(.45,.035,.22,r,{outline:"hairline"});m.position.set(-.5,.8,0),e.add(m);let p=z(.07,.05,.05,ht(16734794));p.position.set(-.72,.72,0),e.add(p);let b=Qt(.05,.05,.06,ht(16771256),{segments:10});b.rotation.z=Math.PI/2,b.position.set(.62,.87,0),e.add(b),se(e,16769440,.7,new E(.68,.87,0),.25);let R=Ue(new E(-.32,.36,.05),new E(-.42,.02,.18),.012,r);return e.add(R),vr(e,1.6,.8,0,-.05,.34,-.017),t?.add(e,{start:4.45,dur:.65,rise:1.4}),e}function wy(i,t){let e=zt(i,1.55,.046,1.3),n=z(.4,.06,.34,Tr,{outline:"hairline"});n.position.y=.03,e.add(n);for(let[a,l]of[[-.16,-.12],[.16,-.12],[-.16,.12],[.16,.12]]){let c=Qt(.012,.012,.55,Ui);c.position.set(a,.28,l),e.add(c)}let s=z(.36,.02,.3,Tr);s.position.y=.56,e.add(s);let r=(a,l,c,h)=>{let d=zt(e,a,.1,l);d.rotation.z=h;let u=Qt(.012,.012,.82,Ui,{segments:6});u.position.y=.42,d.add(u);let f=new It(new Li(.07,.62,7),new Ie({color:c,transparent:!0,opacity:c===14282485?.55:.92,depthWrite:!1}));f.position.y=.58,d.add(f);let g=new It(new nn(.055,.014,5,8,Math.PI),P(3817285));return g.position.y=.07,g.rotation.z=Math.PI/2,d.add(g),d};r(-.08,.02,2898506,.08),r(.05,-.05,14282485,-.06),r(.1,.09,8276824,.12);let o=Yo(.34,.2,ht(16777215,{map:ce(256,128,(a,l,c)=>{a.fillStyle="#e8e2d2",a.fillRect(0,0,l,c),a.fillStyle="#2f6a58",a.font=`700 34px ${Sy}`,a.textAlign="center",a.fillText("\u5098\u7ACB\u3066",l/2,78)})}));o.position.set(0,.78,.17),e.add(o),t?.add(e,{start:4.5,dur:.5,rise:1.2})}function Ay(i,t){let e=zt(i);[["\u304B\u3093\u30FB\u3073\u3093","CANS / BOTTLES",4.22,.35,.9],["\u30DA\u30C3\u30C8","PET BOTTLES",4.22,.82,.9],["\u3082\u3048\u308B\u30B4\u30DF","BURNABLE",4.22,1.29,.9]].forEach(([s,r,o,a,l],c)=>{let h=z(.36,l,.38,P(c===0?3560540:c===1?5069638:5917509),{outline:"thin"});h.position.set(o+.2,.13+l/2,a),e.add(h);let d=kt(.2,.09,ht(1119515));d.rotation.y=Math.PI/2,d.position.set(o+.385,.13+l-.16,a),e.add(d);let u=kt(.26,.13,ht(16777215,{map:op(s,r)}));u.rotation.y=Math.PI/2,u.position.set(o+.385,.13+l-.36,a),e.add(u)}),vr(e,1.4,.7,4.45,.85,.28,.03),t?.add(e,{start:4.55,dur:.5,rise:1})}function Ry(i,t){let e=zt(i,.78,.046,1.42);e.rotation.y=.2;let n=Ni("oden");for(let a of[-1,1]){let l=kt(.5,.76,ht(16777215,{map:n,side:Ae}));l.position.set(0,.42,a*.1),l.rotation.x=a===1?-.17:.17,l.rotation.y=a===1?0:Math.PI,e.add(l)}let s=Qt(.015,.015,.56,Tr);s.rotation.z=Math.PI/2,s.position.set(0,.8,0),e.add(s);let r=z(.5,.04,.05,P(7428931));r.position.set(0,.02,.16),e.add(r);let o=r.clone();o.position.z=-.16,e.add(o),t?.add(e,{start:4.6,dur:.45,rise:1})}function Cy(i,t){let e=zt(i,-8.9,.13,2.1);e.rotation.y=.06;let n=P(7822147,{unique:!0}),s=P(3422781);for(let o=0;o<4;o++){let a=z(1.65,.05,.085,n,{outline:"hairline"});a.position.set(0,.47,-.16+o*.1),e.add(a)}for(let o=0;o<3;o++){let a=z(1.65,.085,.045,n,{outline:"hairline"});a.position.set(0,.62+o*.12,-.23),e.add(a)}for(let o of[-.7,.7]){let a=z(.06,.47,.38,s);a.position.set(o,.235,-.08),e.add(a);let l=z(.05,.45,.05,s);l.position.set(o,.68,-.24),l.rotation.x=-.12,e.add(l)}let r=z(.35,.18,.22,s);r.position.set(1,.2,.02),e.add(r),t?.add(e,{start:4.8,dur:.5,rise:1})}function Py(i,t){let e=zt(i,-9.55,.13,2.6),n=z(.7,.32,.7,P(7040874),{outline:"thin"});n.position.y=.16,e.add(n);let s=z(.6,.03,.6,P(2696479));s.position.y=.33,e.add(s);let r=Qt(.06,.1,2,P(4930607,{unique:!0}),{outline:"thin",segments:8});r.position.y=1.3,e.add(r);for(let a=0;a<3;a++){let l=Ue(new E(0,1.9+a*.25,0),new E((a-1)*.35,2.35+a*.3,.1),.03,P(4930607));e.add(l)}let o=[[0,2.85,0,.62],[-.42,2.65,.08,.4],[.4,2.72,-.05,.45],[.05,2.45,.28,.36]];for(let[a,l,c,h]of o){let d=new It(new xs(h,1),P(2900788,{unique:!0}));d.position.set(a,l,c),d.scale.set(1,.85,1),an(d,"hairline"),e.add(d)}t?.add(e,{start:4.75,dur:.6,rise:1.2})}function yp(i,t,e,n,s=1,r=4.65){let o=zt(i,e,.13,n),a=Qt(.2*s,.15*s,.3*s,P(9067845),{outline:"thin",segments:10});a.position.y=.15*s,o.add(a);let l=Qt(.18*s,.18*s,.02,P(3156257),{segments:10});l.position.y=.3*s,o.add(l);for(let c=0;c<5;c++){let h=new It(new Ke(.14*s,7,5),P(4087876));h.scale.set(.7,1.4+c%3*.2,.7),h.position.set(Math.sin(c*2.1)*.11*s,.44*s+c%3*.08*s,Math.cos(c*2.1)*.1*s),an(h,"hairline"),o.add(h)}t?.add(o,{start:r,dur:.45,rise:.9})}function vp(i,t,e,n,s,r,o){let a=zt(i),l=Math.hypot(s-e,r-n),c=(s-e)/l,h=(r-n)/l,d=Math.max(2,Math.round(l/1.15));for(let f=0;f<=d;f++){let g=f/d,S=Qt(.035,.045,.82,P(15132380,{emissive:1184272}),{segments:8});S.position.set(e+c*l*g,.13+.41,n+h*l*g),a.add(S);let m=new It(new Ke(.055,8,6),P(14672601));m.position.set(S.position.x,.96,S.position.z),a.add(m)}for(let f of[.52,.82]){let g=z(l,.055,.055,P(15790310,{emissive:1447444}),{outline:"hairline"});g.position.set((e+s)/2,.13+f,(n+r)/2),g.rotation.y=-Math.atan2(h,c),a.add(g)}let u=z(l-.1,.012,.012,ht(12575470));u.position.set((e+s)/2,.955,(n+r)/2),u.rotation.y=-Math.atan2(h,c),a.add(u),t?.add(a,{start:o,dur:.5,rise:1})}function Iy(i,t){let e=zt(i,-6.79,0,-3.55),n=kt(1.15,.82,ht(16777215,{map:$f}));n.rotation.y=Math.PI/2,n.position.set(.02,1.65,0),e.add(n);let s=z(.08,.94,1.27,P(6967865),{outline:"thin"});s.position.set(-.02,1.65,0),e.add(s);let r=z(.22,.06,.1,ht(16768944));r.position.set(.16,2.18,0),e.add(r),se(e,16764820,.9,new E(.18,2.1,0),.25),t?.add(e,{start:4.5,dur:.5,rise:1})}function Ly(i,t){let e=zt(i,-6.55,.13,-1.95);e.rotation.z=.22,e.rotation.x=-.08;let n=Qt(.015,.015,1.15,P(9080985),{segments:6});n.position.y=.58,e.add(n);let s=new It(new Li(.52,.34,10,1,!0),new Ie({color:14151414,transparent:!0,opacity:.48,side:Ae,depthWrite:!1}));s.position.y=1.05,e.add(s);for(let o=0;o<10;o++){let a=o/10*Math.PI*2,l=Ue(new E(0,1.15,0),new E(Math.cos(a)*.5,.88,Math.sin(a)*.5),.006,Ui);e.add(l)}let r=new It(new nn(.07,.016,5,8,Math.PI),P(4864558));r.position.y=.03,r.rotation.z=Math.PI/2,e.add(r),t?.add(e,{start:4.55,dur:.5,rise:1})}function Dy(i,t){let e=zt(i);for(let[n,s]of[[-.95,3],[-4.55,2.85]]){let r=z(.34,.04,.34,P(13924914));r.position.set(n,.15,s),e.add(r);let o=new It(new Li(.14,.45,10),P(14712114));o.position.set(n,.38,s),an(o,"hairline"),e.add(o);let a=new It(new En(.11,.13,.08,10,1,!0),ht(15789536));a.position.set(n,.34,s),e.add(a)}t?.add(e,{start:4.7,dur:.45,rise:.9})}function Sp(i,t){let e=zt(i),n=My(e,t),s=by(e,t),r=Ey(e,t),o=_p(e,t,0,-4.93,1.05,4.2),a=_p(e,t,1,-3.9,1.05,4.27),l=Ty(e,t);wy(e,t),Ay(e,t),Ry(e,t),Cy(e,t),Py(e,t),yp(e,t,4.72,2.02,1,4.65),yp(e,t,-4.9,1.86,.8,4.68),vp(e,t,5.31,-4.35,5.31,-2.5,4.35),vp(e,t,-9.55,3.32,-6.4,3.32,4.4),Iy(e,t),Ly(e,t),Dy(e,t);let c=zt(e,-5.72,.13,2.55);c.rotation.y=.18;let h=Qt(.035,.045,2.25,Ui,{segments:8});h.position.y=1.13,c.add(h);let d=z(.58,.72,.035,P(3490636));d.position.set(0,1.95,.05),c.add(d);let u=kt(.54,.68,ht(16777215,{map:Kf,toneMapped:!1}));return u.position.set(0,1.95,.085),c.add(u),se(c,13624575,.7,new E(0,1.95,.16),.1),t?.add(c,{start:4.55,dur:.45,rise:1}),{root:e,pole:n,lamp:s,signal:r,vending:[o,a],bike:l}}var wr='"Yu Gothic UI","Yu Gothic","Meiryo","Noto Sans JP",sans-serif';function Ar(i,t,e,n,s,r,o){let a=z(s+.14,r+.14,.1,P(3949122),{outline:"hairline"});a.position.set(t,e,n-.01),i.add(a);let l=kt(s,r,ht(16777215,{map:Sc(o),toneMapped:!1}));l.rotation.y=Math.PI,l.position.set(t,e,n-.067),i.add(l);let c=z(s+.22,.055,.18,P(8093821));c.position.set(t,e-r/2-.08,n-.08),i.add(c),(o===0||o===1)&&se(i,16764822,.8,new E(t,e,n-.2),.1)}function Ec(i,t,e,n,s=0){let r=Qt(.04,.04,n,P(8226184),{segments:8});return r.position.set(t,s+n/2,e),i.add(r),r}function Mp(i,t){let e=zt(i),n=(D,rt,ut=.55,Yt=1.2)=>(e.add(D),t?.add(D,{start:rt,dur:ut,rise:Yt}),D),s=zt(e),r=-10.055;[-5.5,-2.9,-.2,2.5].forEach((D,rt)=>{Ar(s,D,3.25,r,.76,.86,rt===1?3:rt%2===0?1:2)}),[-4.4,-1.4,1.6].forEach((D,rt)=>{Ar(s,D,5.05,r,.7,.8,rt===1?0:3)});let l=z(.85,2,.08,P(3950403),{outline:"thin"});l.position.set(.3,1.1,-10.06),s.add(l);let c=z(.24,.1,.12,ht(16768164));c.position.set(.3,2.3,-10.12),s.add(c),se(s,16763023,.9,new E(.3,2.25,-10.2),.22),Ec(s,-6.4,-10.12,6),Ec(s,3.3,-10.12,6);for(let[D,rt]of[[-3.6,4.6],[2,4.4]]){let ut=z(.5,.36,.26,P(13223867),{outline:"hairline"});ut.position.set(D,rt,-10.16),s.add(ut);let Yt=new It(new nn(.14,.015,5,14),P(5594202));Yt.position.set(D,rt,-10.3),Yt.rotation.y=Math.PI,s.add(Yt)}let h=kt(.55,1.2,ht(16777215,{map:ce(256,512,(D,rt,ut)=>{D.fillStyle="#202a30",D.fillRect(0,0,rt,ut),D.strokeStyle="#e7d8b7",D.lineWidth=6,D.strokeRect(10,10,rt-20,ut-20),D.fillStyle="#e7d8b7",D.textAlign="center",D.font=`700 56px ${wr}`,D.fillText("\u661F",rt/2,130),D.fillText("\u753A",rt/2,230),D.fillText("\u8358",rt/2,330),D.font=`500 24px ${wr}`,D.fillStyle="rgba(231,216,183,0.7)",D.fillText("APARTMENT",rt/2,430)}),toneMapped:!1}));h.rotation.y=Math.PI,h.position.set(-.8,4.15,-10.13),s.add(h),n(s,1.75,.6,1.2);let d=zt(e);Ar(d,-9.15,3.55,-9.22,.72,.82,0),Ar(d,-7.6,4.5,-9.22,.72,.82,3),Ec(d,-6.95,-9.28,5.1);let u=z(3.2,.08,.1,P(8751486));u.position.set(-8.4,2.55,-9.24),d.add(u);let f=z(.8,2,.08,P(4015425),{outline:"thin"});f.position.set(-8.4,1.1,-9.23),d.add(f),n(d,1.85,.5,1);let g=zt(e);Ar(g,9.4,3.45,-10.03,.72,.82,1),Ar(g,9.4,2.1,-10.03,.65,.7,3),Ec(g,9.85,-10.08,4.9);let S=z(.46,.32,.26,P(13092282),{outline:"hairline"});S.position.set(9.1,2.9,-10.12),g.add(S),n(g,2,.5,1);let m=zt(e),p=zt(m,2.25,0,-6.2),b=z(1.35,.82,.78,P(3101254,{unique:!0}),{outline:"thin"});b.position.y=.58,p.add(b);let R=z(1.42,.08,.84,P(2376249));R.position.set(0,1.02,-.02),R.rotation.x=-.06,p.add(R);for(let D of[-.5,.5])for(let rt of[-.32,.32]){let ut=Qt(.08,.08,.06,P(1777700),{segments:8});ut.rotation.z=Math.PI/2,ut.position.set(D,.1,rt),p.add(ut)}let _=kt(.55,.2,ht(16777215,{map:ce(512,192,(D,rt,ut)=>{D.fillStyle="#e8dfc7",D.fillRect(0,0,rt,ut),D.fillStyle="#315b4a",D.font=`700 58px ${wr}`,D.textAlign="center",D.fillText("\u8CC7\u6E90\u56DE\u53CE",rt/2,94),D.font=`500 26px ${wr}`,D.fillStyle="#5c6d61",D.fillText("HOSHIMACHI 1-CHOME",rt/2,146)}),toneMapped:!1}));_.position.set(0,.65,.4),p.add(_),vr(p,1.7,1.1,0,.03,.32,.035),m.add(p);let T=zt(m,-3.25,0,-5.9);for(let D=0;D<4;D++){let rt=z(.48,.36,.48,P(7035458),{outline:"hairline"});rt.position.set(D%2*.52,.18+Math.floor(D/2)*.38,D%3*.1),T.add(rt);let ut=z(.5,.04,.5,P(5194548));ut.position.set(rt.position.x,rt.position.y+.12,rt.position.z+.01),T.add(ut)}m.add(T);let w=zt(m,-.8,0,-7.3);for(let D=0;D<3;D++){let rt=z(1,.06,.8,P(9074006),{outline:"hairline"});rt.position.y=.06+D*.09,w.add(rt)}m.add(w);let I=qe(.32,.7,ht(16777215,{map:vc}),.4,-5.1,.032);m.add(I);let y=kt(.8,.34,ht(16777215,{map:ce(512,220,(D,rt,ut)=>{D.fillStyle="#d9d2c0",D.fillRect(0,0,rt,ut),D.fillStyle="#6b3f34",D.font=`700 52px ${wr}`,D.textAlign="center",D.fillText("STAFF ONLY",rt/2,90),D.font=`500 26px ${wr}`,D.fillStyle="#4d5a50",D.fillText("\u95A2\u4FC2\u8005\u4EE5\u5916 \u7ACB\u5165\u7981\u6B62",rt/2,150)}),toneMapped:!1}));y.rotation.y=Math.PI,y.position.set(-4.55,2.1,-4.23),m.add(y),n(m,2.05,.55,1);let v=zt(e),A=z(.9,.22,.7,P(6581102),{outline:"thin"});A.position.set(.7,3.85,-2.7),v.add(A);let L=z(.98,.05,.78,P(8225927));L.position.set(.7,3.985,-2.7),v.add(L);for(let[D,rt]of[[-1.5,-3.5],[-1,-3.7],[1.7,-3.7]]){let ut=Qt(.09,.09,.5,P(7831426),{segments:8});ut.position.set(D,3.92,rt),v.add(ut);let Yt=Qt(.14,.14,.06,P(5988965),{segments:8});Yt.position.set(D,4.18,rt),v.add(Yt)}let O=Qt(.03,.03,1.25,P(8028548));O.position.set(-3.4,4.28,-3),v.add(O);let W=Qt(.42,.42,.8,P(8357769),{segments:12,outline:"thin"});W.position.set(-3.4,4.75,-3),v.add(W);let F=Qt(.46,.46,.08,P(6449773),{segments:12});F.position.set(-3.4,5.19,-3),v.add(F);for(let D=0;D<5;D++){let rt=Qt(.015,.015,.35,P(9080978));rt.position.set(-4.2+D*1.6,3.95,-4.05),v.add(rt)}let G=z(6.5,.035,.035,P(9080978));G.position.set(-1,4.12,-4.05),v.add(G);let j=z(1.4,.12,.9,P(6712945),{outline:"thin"});j.position.set(-1.2,3.76,-2.1),v.add(j);let K=z(1.24,.05,.74,ht(14201987));K.position.set(-1.2,3.83,-2.1),v.add(K);let ct=z(.5,.3,1.1,P(7107703),{outline:"thin"});ct.position.set(2.9,3.85,-2.7),v.add(ct);let U=qe(.34,.34,ht(4870231),3.7,-.6,3.729);v.add(U);let J=new It(new bn(.7,18),new Ie({color:5530743,transparent:!0,opacity:.35,depthWrite:!1}));return J.rotation.x=-Math.PI/2,J.scale.set(1.4,.6,1),J.position.set(3.2,3.725,-.8),v.add(J),n(v,2.15,.5,1),{root:e}}var Jo={value:0};function Ny(i,t,e,n,s,r={}){let o=Ye(r.seed??Math.floor((i+11)*91+(t+11)*17)),a=new bn(1,28),l=a.attributes.position;for(let d=0;d<l.count;d++){let u=l.getX(d),f=l.getY(d);if(Math.abs(u)<1e-4&&Math.abs(f)<1e-4)continue;let g=Math.atan2(f,u),S=.82+o()*.3;l.setX(d,Math.cos(g)*S),l.setY(d,Math.sin(g)*S)}a.computeVertexNormals();let c=new Xe({transparent:!0,depthWrite:!1,side:Ae,uniforms:{uTime:Jo,uBase:{value:new jt(r.base??1055269)},uTint:{value:new jt(r.tint??7183298)},uOpacity:{value:0},uSeed:{value:o()*10}},vertexShader:`
      varying vec2 vUv;
      varying vec3 vWorld;
      void main() {
        vUv = uv;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorld = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }`,fragmentShader:`
      varying vec2 vUv;
      varying vec3 vWorld;
      uniform float uTime; uniform float uOpacity; uniform float uSeed;
      uniform vec3 uBase; uniform vec3 uTint;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float ripple(vec2 uv, vec2 c, float speed, float phase) {
        float t = fract(uTime * speed + phase);
        float d = distance(uv, c);
        float band = smoothstep(0.022 + t * 0.012, 0.0, abs(d - t * 0.4));
        return band * (1.0 - t) * 0.9;
      }
      void main() {
        vec2 uv = vUv;
        vec2 p = uv - 0.5;
        float ang = atan(p.y, p.x);
        float edgeNoise = 0.445 + 0.045 * sin(ang * 7.0 + uSeed * 2.3) + 0.02 * sin(ang * 13.0 - uSeed);
        float edge = smoothstep(edgeNoise, edgeNoise - 0.055, length(p));
        float grain = hash(floor(uv * 220.0)) * 0.05;
        vec3 col = mix(uBase, uTint * 0.8, smoothstep(0.05, 0.95, uv.y) * 0.6);
        col += vec3(0.14, 0.22, 0.32) * smoothstep(0.32, 0.98, uv.y);
        float rp = ripple(uv, vec2(0.32, 0.38), 0.52, uSeed)
                 + ripple(uv, vec2(0.67, 0.58), 0.41, uSeed + 0.37)
                 + ripple(uv, vec2(0.5, 0.74), 0.68, uSeed + 0.71)
                 + ripple(uv, vec2(0.24, 0.64), 0.79, uSeed + 0.13);
        col += vec3(0.4, 0.56, 0.72) * rp * 0.3;
        float colA = smoothstep(0.1, 0.0, abs(uv.x - 0.36)) * smoothstep(0.98, 0.2, uv.y);
        float colB = smoothstep(0.08, 0.0, abs(uv.x - 0.66)) * smoothstep(0.9, 0.25, uv.y);
        col += uTint * (colA * 0.45 + colB * 0.32);
        col += uTint * smoothstep(0.3, 0.0, length(uv - vec2(0.5, 0.24))) * 0.16;
        col += uTint * smoothstep(0.42, 0.0, length(uv - vec2(0.5, 0.6))) * 0.08;
        col += grain;
        gl_FragColor = vec4(col, uOpacity * edge * (0.96 + 0.04 * sin(uTime * 1.3 + uSeed)));
      }`}),h=new It(a,c);return h.rotation.x=-Math.PI/2,h.scale.set(e,n,1),h.position.set(i,s,t),h.renderOrder=3,h.userData.baseOpacity=r.opacity??.62,h}function Uy(i,t){let e=t.streak?Ff():yr(),n=new Ie({map:e,color:t.color??16764821,transparent:!0,opacity:0,blending:gn,depthWrite:!1,toneMapped:!1,fog:!1,side:Ae}),s=new It(new je(t.w,t.d),n);return s.rotation.x=-Math.PI/2,t.ry&&(s.rotation.z=t.ry),s.position.set(t.x,t.y??.046,t.z),s.renderOrder=4,s.userData.baseOpacity=t.opacity??.22,s.userData.flicker=t.flicker??0,s.userData.phase=Math.random()*10,i.add(s),s}function Ep(i,t){return i>Ms.x1-.2&&i<Ms.x2+.2&&t>Ms.z1-.2&&t<Ms.z2+1.2||i<-6.7&&t<-1.3||t<-8.4||i>8.8&&t<-5.3}function Fy(i,t=1600){let e=Ye(2024),n=new Float32Array(t*2*3),s=new Float32Array(t*2*3),r=new Float32Array(t*2),o=new Float32Array(t*2),a=new Float32Array(t*2),l=new Float32Array(t*2),c=0;for(;c<t;){let f=-10+e()*20,g=-10+e()*20;if(Ep(f,g))continue;let S=8+e()*6,m=e()*14,p=.24+e()*.34,b=.35+e()*.65;for(let R=0;R<2;R++){let _=c*2+R;n[_*3+0]=0,n[_*3+1]=R,n[_*3+2]=0,s[_*3+0]=f,s[_*3+1]=0,s[_*3+2]=g,r[_]=S,o[_]=m,a[_]=p,l[_]=b}c++}let h=new Ve;h.setAttribute("position",new Oe(n,3)),h.setAttribute("aBase",new Oe(s,3)),h.setAttribute("aSpeed",new Oe(r,1)),h.setAttribute("aPhase",new Oe(o,1)),h.setAttribute("aLen",new Oe(a,1)),h.setAttribute("aAlpha",new Oe(l,1));let d=new Xe({transparent:!0,depthWrite:!1,blending:gi,uniforms:{uTime:Jo,uOpacity:{value:0},uTop:{value:13},uHeight:{value:13},uColor:{value:new jt(11125469)}},vertexShader:`
      attribute vec3 aBase;
      attribute float aSpeed;
      attribute float aPhase;
      attribute float aLen;
      attribute float aAlpha;
      uniform float uTime;
      uniform float uHeight;
      uniform float uTop;
      varying float vFade;
      void main() {
        float fall = mod(aPhase + uTime * aSpeed, uHeight);
        vec3 p = vec3(aBase.x, uTop - fall, aBase.z);
        p.y -= position.y * aLen;
        p.x += position.y * 0.18;
        p.z += position.y * 0.06;
        vFade = smoothstep(0.0, 1.5, p.y) * smoothstep(0.0, 1.2, uTop - p.y) * aAlpha;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }`,fragmentShader:`
      uniform vec3 uColor;
      uniform float uOpacity;
      varying float vFade;
      void main() {
        gl_FragColor = vec4(uColor, uOpacity * vFade);
      }`}),u=new uo(h,d);return u.frustumCulled=!1,u.renderOrder=12,i.add(u),u}function Oy(i,t=150){let e=Ye(707),n=new Float32Array(t*3),s=new Float32Array(t),r=new Float32Array(t),o=new Float32Array(t);for(let h=0;h<t;h++){let d,u,f;do d=-9.7+e()*19.4,u=-9.7+e()*19.4;while(Ep(d,u));d>4&&d<9.9&&u>-10&&u<3.2||d<-5.2&&u>-1.4&&u<3.2?f=.145:f=.038,n[h*3]=d,n[h*3+1]=f,n[h*3+2]=u,s[h]=e(),r[h]=.45+e()*.7,o[h]=.08+e()*.14}let a=new Ve;a.setAttribute("position",new Oe(n,3)),a.setAttribute("aPhase",new Oe(s,1)),a.setAttribute("aRate",new Oe(r,1)),a.setAttribute("aSize",new Oe(o,1));let l=new Xe({transparent:!0,depthWrite:!1,blending:gn,uniforms:{uTime:Jo,uOpacity:{value:0}},vertexShader:`
      attribute float aPhase;
      attribute float aRate;
      attribute float aSize;
      uniform float uTime;
      varying float vAlpha;
      void main() {
        float prog = fract(uTime * aRate + aPhase);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aSize * (0.35 + prog * 1.15) * 780.0 / max(1.0, -mv.z);
        vAlpha = (1.0 - prog);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform float uOpacity;
      varying float vAlpha;
      void main() {
        vec2 c = gl_PointCoord - 0.5;
        float r = length(c) * 2.0;
        float ring = smoothstep(0.11, 0.0, abs(r - 0.72));
        float a = ring * vAlpha * uOpacity;
        if (a < 0.01) discard;
        gl_FragColor = vec4(0.7, 0.84, 1.0, a);
      }`}),c=new fo(a,l);return c.frustumCulled=!1,c.renderOrder=10,i.add(c),c}function bp(i){return new Xe({transparent:!0,depthWrite:!1,blending:gi,side:Ae,uniforms:{uTime:Jo,uOpacity:{value:0},uSeed:{value:i}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      varying vec2 vUv;
      uniform float uTime; uniform float uOpacity; uniform float uSeed;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      void main() {
        vec2 uv = vUv;
        float sheen = smoothstep(0.35, 1.0, uv.x + uv.y * 0.5) * 0.09;
        float band = smoothstep(0.16, 0.0, abs(uv.x - 0.78 + uv.y * 0.22)) * 0.025;
        float trails = 0.0;
        for (int i = 0; i < 3; i++) {
          float scale = 9.0 + float(i) * 8.0;
          float col = floor(uv.x * scale);
          float speed = 0.09 + hash(vec2(col, float(i) + uSeed)) * 0.22;
          float y = fract(uv.y + uTime * speed + hash(vec2(col, 4.0 + float(i))));
          float dx = fract(uv.x * scale) - 0.5;
          float trail = smoothstep(0.13, 0.0, abs(dx)) * smoothstep(1.0, 0.72, y);
          trail *= step(0.56, hash(vec2(col, 9.0 + float(i) + uSeed)));
          trails += trail * (0.12 + 0.05 * float(i));
        }
        vec2 grid = vec2(18.0, 30.0);
        vec2 cell = floor(uv * grid);
        vec2 gv = fract(uv * grid) - 0.5;
        float bead = smoothstep(0.22, 0.03, length(gv)) * step(0.87, hash(cell + uSeed));
        float alpha = (sheen + band + trails + bead * 0.22) * uOpacity;
        gl_FragColor = vec4(vec3(0.78, 0.9, 1.0), alpha);
      }`})}function By(i,t){let e=[-4.35,-3.25,-2.15,-1.05,.05,1.15,2.25,3.35],n=zt(i),s=new Ie({color:14084863,transparent:!0,opacity:.72}),r=[],o=[];return e.forEach((a,l)=>{let c=new It(new Ke(.04,6,5),s);c.scale.set(.7,3.4,.7);let h=new Ie({color:12574719,transparent:!0,opacity:0,blending:gn,depthWrite:!1}),d=new It(new wo(.62,1,14),h);d.rotation.x=-Math.PI/2,d.position.set(a,.05,1.73),d.renderOrder=6,n.add(c),n.add(d),r.push({mesh:c,x:a,phase:l*.37%1,speed:.55+l%3*.08}),o.push({mesh:d,phase:0})}),t?.add(n,{start:5.2,dur:.5,rise:1}),{group:n,drops:r,rings:o}}function zy(i,t){let e=[];return t.forEach((n,s)=>{for(let r=0;r<4;r++){let o=new qi({map:yr(),color:16773592,transparent:!0,opacity:0,depthWrite:!1,blending:gi,toneMapped:!1,fog:!1}),a=new ps(o);a.position.copy(n),a.scale.set(.25,.25,1),a.renderOrder=8,i.add(a),e.push({sprite:a,anchor:n.clone(),phase:(r*.27+s*.41)%1})}}),e}function Tp(i,{build:t,store:e,street:n,neighbors:s}){let r=zt(i),o=[];[[.6,4.7,2.4,1.25,.038,791581,8363194,.62],[2.3,6.7,1.5,.8,.038,725789,7309992,.56],[6.25,5.1,1.35,.9,.038,659996,7311278,.55],[7.35,1.2,1.05,.66,.038,659995,7179176,.58],[-1.35,2.1,1.9,1.05,.038,1511693,13210979,.6],[3.15,1.5,1.9,.85,.04,1577485,14067832,.62],[-4.1,1.85,1.4,.9,.038,1511437,12159587,.58],[4.62,-2.05,.95,.8,.15,659736,7179170,.52],[8,-2.7,1.5,1,.038,659996,7047848,.54],[-5.95,-2.25,1.3,1.55,.036,593172,10182523,.66],[-8.4,1.2,1.35,.8,.15,659736,7311270,.52],[-2.8,6.2,1,.6,.039,659736,7047588,.5],[1.4,3.4,.75,.55,.04,1511694,13212524,.55],[5,4.1,.8,.55,.039,659737,7179176,.5],[-3.8,6.7,1.6,1,.039,725788,7311016,.55],[.4,8.7,1.2,.8,.039,725788,7311016,.5],[-1.2,-5.6,1.6,1,.04,659736,7178914,.5],[2.6,-5.4,1.2,.8,.04,659736,7178914,.45]].forEach(([U,J,D,rt,ut,Yt,Kt,_t],X)=>{let et=Ny(U,J,D,rt,ut,{base:Yt,tint:Kt,opacity:_t,seed:X*7+3});r.add(et),o.push(et)});let l=[],c=U=>{let J=Uy(r,U);return l.push(J),J};c({x:-.8,z:2.05,w:8.6,d:4.2,color:16767406,opacity:.14,streak:!0}),c({x:-.4,z:1.25,w:8.4,d:2.1,color:14219224,opacity:.12,streak:!0}),c({x:2.9,z:1.55,w:3.2,d:3.1,color:16769200,opacity:.14}),c({x:-2.5,z:2.45,w:1.4,d:3.6,color:16763274,opacity:.3,streak:!0}),c({x:-.75,z:2.5,w:1.5,d:3.9,color:16765850,opacity:.32,streak:!0}),c({x:1,z:2.35,w:1.25,d:3.5,color:16760693,opacity:.26,streak:!0}),c({x:3,z:1.7,w:1.4,d:3,color:16768176,opacity:.2,streak:!0}),c({x:-4.93,z:2,w:1.35,d:2.3,color:16747389,opacity:.25,streak:!0}),c({x:-3.9,z:2,w:1.2,d:2.2,color:8384742,opacity:.2,streak:!0});let h=c({x:7.25,z:3.5,w:6.4,d:5.6,color:12442879,opacity:.22});c({x:7.25,z:5.4,w:1.8,d:4.8,color:11129592,opacity:.2,streak:!0});let d=c({x:7.3,z:4.4,w:2.6,d:2.6,color:5224570,opacity:.18}),u=c({x:7.3,z:5.4,w:.62,d:4.2,color:5224570,opacity:.18,streak:!0});c({x:-5.95,z:-1.3,w:2.2,d:3.1,color:16742321,opacity:.18,streak:!0}),c({x:-2.5,z:3.6,w:3.4,d:2.4,color:16765600,opacity:.09}),c({x:4.55,z:.4,w:1.1,d:2.5,color:10482400,opacity:.13,streak:!0}),c({x:-.9,z:3.8,w:4.6,d:5,color:16763274,opacity:.12,streak:!0}),c({x:6.8,z:5.8,w:2.6,d:4.4,color:10209520,opacity:.12,streak:!0}),c({x:-4.35,z:3.1,w:1.8,d:2.8,color:16748656,opacity:.1,streak:!0}),c({x:-.4,z:3.9,w:1.2,d:4.4,color:13631456,opacity:.1,streak:!0}),c({x:-2.5,z:2.4,w:2.2,d:4.6,color:16758126,opacity:.22}),c({x:-.7,z:2.5,w:2.4,d:4.8,color:16761980,opacity:.24}),c({x:1.15,z:2.3,w:1.9,d:4.2,color:16756838,opacity:.2}),c({x:2.95,z:2.1,w:2.2,d:4,color:16766106,opacity:.2}),c({x:-4.2,z:2.2,w:1.8,d:3,color:16744303,opacity:.24}),c({x:-3.25,z:2.2,w:1.7,d:2.8,color:7596252,opacity:.2}),c({x:-.4,z:1.3,w:5.4,d:2.6,color:13956824,opacity:.13}),c({x:7.2,z:4.3,w:3.2,d:5.2,color:11852031,opacity:.22}),c({x:7.2,z:4.4,w:1.5,d:4,color:8833279,opacity:.12}),c({x:-6,z:-1.3,w:1.7,d:3.4,color:16743080,opacity:.18});let f=c({x:7.2,z:6.2,w:2.8,d:6.2,color:12113646,opacity:.12,streak:!0});f.rotation.z=.01,c({x:0,z:6.6,w:19,d:6.6,color:9418456,opacity:.07,streak:!0,y:.043}),c({x:7.2,z:.8,w:3,d:4.4,color:10471656,opacity:.08,streak:!0,y:.044});let g=Fy(r,1700),S=Oy(r,190),m=[],p=(U,J,D,rt,ut,Yt,Kt,_t)=>{let X=bp(_t),et=new It(new je(J,D),X);return et.position.set(rt,ut,Yt),et.rotation.y=Kt,et.renderOrder=7,U.add(et),m.push(X),et};e.glassPanes.forEach((U,J)=>{U.door===void 0&&(U.ry===0?p(r,U.w,U.h,U.x,U.y,U.z+.055,0,J*2.3):p(r,U.w,U.h,U.x+.06,U.y,U.z,U.ry,J*2.3))}),[e.door.left,e.door.right].forEach((U,J)=>{let D=bp(40+J*3.1),rt=new It(new je(.78,2.5),D);rt.position.set(0,1.53,.61),rt.renderOrder=7,U.add(rt),m.push(D)});let b=new Ie({map:qf,transparent:!0,opacity:0,blending:gn,depthWrite:!1,toneMapped:!1,side:Ae}),R=(U,J,D,rt,ut,Yt,Kt)=>{let _t=new It(new je(J,D),b);return _t.position.set(rt,ut,Yt),_t.rotation.y=Kt,_t.renderOrder=6,U.add(_t),_t};e.glassPanes.forEach(U=>{U.door===void 0&&(U.ry===0?R(r,U.w,U.h,U.x,U.y,U.z+.07,0):R(r,U.w,U.h,U.x+.075,U.y,U.z,U.ry))}),[e.door.left,e.door.right].forEach(U=>{R(U,.78,2.5,0,1.53,.63,0)}),c({x:-.5,z:.95,w:7.5,d:1,color:16766880,opacity:.26}),c({x:-4.4,z:1.25,w:2.4,d:.9,color:16748664,opacity:.25});let _=By(r,t),T=zy(r,[e.interior?.odenAnchor||new E(1.35,1.5,-2.7),e.interior?.coffeeAnchor||new E(3.3,1.5,-2.4),e.interior?.hotAnchor||new E(2.4,1.6,-2.7)]),w=new Xe({transparent:!0,depthWrite:!1,blending:gn,side:Ae,uniforms:{uOpacity:{value:0},uColor:{value:new jt(10406143)}},vertexShader:`
      varying float vH;
      void main() {
        vH = uv.y;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform float uOpacity; uniform vec3 uColor;
      varying float vH;
      void main() {
        float a = smoothstep(0.0, 1.0, vH) * smoothstep(0.02, 0.25, 1.0 - vH) * uOpacity;
        gl_FragColor = vec4(uColor, a);
      }`}),I=new It(new Li(2.7,4.4,24,1,!0),w);I.position.set(7.25,2.75,3.55),I.renderOrder=9,r.add(I);let y=se(r,13625599,4,new E(7.25,4.9,3.55),0),v=se(r,12376319,6.2,new E(7.25,.12,3.7),0);v.scale.set(6.2,1,1);let A={t:0,rainOn:0,rainLevel:1,rainTarget:1,fxOn:0,doorOpen:0,doorMode:"auto",signFlicker:1,signal:"green",signalTimer:0,lastLampFlicker:0,firstDoorOpened:!1},L=e.signGlow.children.map(U=>U.material?.opacity??0),O=20,W=11;function F(U){return U<.5?2*U*U:1-Math.pow(-2*U+2,2)/2}function G(U){A.signal=U;let D={red:0,amber:1,green:2}[U];n.signal.lights.forEach((Yt,Kt)=>{let _t=Kt===D;Yt.mat.opacity=_t?1:.04,Yt.glow.material.opacity=_t?.5:0});let rt=[14172995,14723132,5224570][D];d.material.color.setHex(rt),u.material.color.setHex(rt);let ut=U==="green";n.signal.pedGreen.material.color.setHex(ut?7331982:2771512),n.signal.pedRed.material.color.setHex(ut?4859944:14703194)}G("green");function j(U,J){A.t+=U;let D=A.t;Jo.value=D;let rt=fr.smoothstep(D,4.8,7.6);A.rainLevel+=(A.rainTarget-A.rainLevel)*Math.min(1,U*4);let ut=fr.smoothstep(D,5.2,7.8)*A.rainLevel;A.rainOn=ut,g.material.uniforms.uOpacity.value=.27*ut,S.material.uniforms.uOpacity.value=.42*ut,m.forEach((_t,X)=>{_t.uniforms.uOpacity.value=.5*fr.smoothstep(D,5.6+X*.05,7.4+X*.05)*A.rainLevel}),o.forEach((_t,X)=>{_t.material.uniforms.uOpacity.value=_t.userData.baseOpacity*.92*rt}),b.opacity=.32*fr.smoothstep(D,2.5,4.6),l.forEach(_t=>{_t.material.opacity=_t.userData.baseOpacity*rt*(.9+.1*Math.sin(D*1.1+_t.userData.phase))}),w.uniforms.uOpacity.value=.16*rt,y.material.opacity=.3*rt,v.material.opacity=.18*rt,_.drops.forEach((_t,X)=>{let et=(D*_t.speed+_t.phase)%1,At=Math.min(1,et/.72),Xt=2.9-2.86*Math.pow(At,1.6);_t.mesh.position.set(_t.x,Xt,1.73),_t.mesh.visible=rt>.02&&et<.95;let Dt=Math.max(0,(et-.72)/.28),Zt=_.rings[X];if(et>.72&&et<.98){let Lt=Dt;Zt.mesh.scale.setScalar(.07+Lt*.16),Zt.mesh.material.opacity=(1-Lt)*.24*rt}else Zt.mesh.material.opacity=0}),T.forEach(_t=>{_t.phase=(_t.phase+U*.14)%1;let X=_t.phase;_t.sprite.position.set(_t.anchor.x+Math.sin(D*.6+_t.anchor.z)*.04*X,_t.anchor.y+X*.55,_t.anchor.z+Math.cos(D*.5+_t.anchor.x)*.03*X);let et=.16+X*.5;_t.sprite.scale.set(et,et,1),_t.sprite.material.opacity=Math.sin(X*Math.PI)*.1*(e.interior?1:.5)*Math.min(1,rt*1.4)}),A.signalTimer+=U,A.signal==="green"&&A.signalTimer>10?(A.signalTimer=0,G("amber")):A.signal==="amber"&&A.signalTimer>2.4?(A.signalTimer=0,G("red")):A.signal==="red"&&A.signalTimer>9.5&&(A.signalTimer=0,G("green"));let Yt=Math.floor(D*3),Kt=1;if(Yt%211===0||Yt%379===0?Kt=.72+.14*Math.sin(D*90):Yt%97===0&&(Kt=.9),e.signFront.color.setScalar(Kt),e.haloPlane&&(e.haloPlane.material.opacity=.11*Kt),e.signGlow.children.forEach((_t,X)=>{_t.material&&(_t.material.opacity=L[X]*(.75+.25*Kt))}),d.material.opacity=d.userData.baseOpacity*rt*(.85+.15*Math.sin(D*1.7)),D>W||A.doorMode!=="auto"){let _t=0;if(A.doorMode==="open")_t=1;else if(A.doorMode==="closed")_t=0;else{let X=(D-W)%O;X<1.3?_t=F(X/1.3):X<8.8?_t=1:X<10.2?_t=1-F((X-8.8)/1.4):_t=0}A.doorOpen+=(_t-A.doorOpen)*Math.min(1,U*6),A.doorOpen>.02&&(A.firstDoorOpened=!0),e.door.left.position.x=e.door.leftBaseX-A.doorOpen*.74,e.door.right.position.x=e.door.rightBaseX+A.doorOpen*.74}if(s.beacon){let _t=.35+.65*Math.pow(Math.max(0,Math.sin(D*.9)),12);s.beacon.material.color.setRGB(.55*_t,.06*_t,.06*_t)}if(s.neon){let _t=.82+.18*Math.sin(D*7.3)*Math.sin(D*2.1);s.neon.material.color.setScalar(_t>.9?1:.75)}}function K(U){A.doorMode=U==="open"||U==="closed"?U:"auto"}function ct(U){A.rainTarget=U?1:0}return{root:r,update:j,puddles:o,reflections:l,state:A,setSignal:G,setDoorMode:K,setRain:ct}}var Tc=class{constructor(){this.items=[],this.time=0,this.done=!1,this.duration=0,this.onDone=null,this.started=!1}add(t,{start:e=0,dur:n=.65,rise:s=2,scale:r=0}={}){let o={obj:t,start:e,dur:n,rise:s,scale:r,y0:t.position.y,s0:t.scale.clone(),appeared:!1};return t.visible=!1,t.userData.buildItem=o,this.items.push(o),this.duration=Math.max(this.duration,e+n),t}begin(t=.2){this.started=!0,this.time=-t}restart(t=.2){for(let e of this.items)if(e.obj.visible=!1,e.obj.position.y=e.y0-e.rise,e.scale>0){let n=e.s0.x*e.scale;e.obj.scale.set(n,e.s0.y*e.scale,n)}this.done=!1,this.begin(t)}update(t){if(!this.started)return;this.time+=t;let e=this.time;for(let n of this.items){if(e<n.start)continue;let s=Math.min(1,(e-n.start)/n.dur),r=1-Math.pow(1-s,3);if(n.obj.visible=!0,n.obj.position.y=n.y0-n.rise*(1-r),n.scale>0){let o=n.s0.x*(n.scale+(1-n.scale)*r);n.obj.scale.set(o,n.s0.y*(n.scale+(1-n.scale)*r),o)}}if(!this.done&&e>=this.duration){this.done=!0;for(let n of this.items)n.obj.position.y=n.y0,n.obj.scale.copy(n.s0),n.obj.visible=!0;this.onDone?.()}}finish(){this.time=this.duration+1,this.update(0)}};var Rr=(i,t,e)=>Math.min(e,Math.max(t,i)),wc=class{constructor(t,e,n={}){this.camera=t,this.dom=e,this.target=new E(...n.target||[0,1.4,0]),this.theta=n.theta??.44,this.phi=n.phi??1.235,this.radius=n.radius??30,this.thetaGoal=this.theta,this.phiGoal=this.phi,this.radiusGoal=this.radius,this.targetGoal=this.target.clone(),this.minRadius=n.minRadius??12,this.maxRadius=n.maxRadius??40,this.minPhi=n.minPhi??.34,this.maxPhi=n.maxPhi??1.42,this.minTheta=-1/0,this.maxTheta=1/0,this.pointers=new Map,this.lastPinch=0,this.dragging=!1,this.moved=0,this._tmp=new E,this._right=new E,this._forward=new E,this.intro=n.intro||null,this.introTime=0,this.introDone=!this.intro,this._home={theta:this.thetaGoal,phi:this.phiGoal,radius:this.radiusGoal,target:this.targetGoal.toArray()},e.addEventListener("pointerdown",this._down),e.addEventListener("pointermove",this._move),e.addEventListener("up",this._up),e.addEventListener("pointercancel",this._up),e.addEventListener("wheel",this._wheel,{passive:!1}),e.addEventListener("contextmenu",s=>s.preventDefault()),e.addEventListener("dblclick",()=>this.reset()),this.update(0)}reset(){this.thetaGoal=this._home.theta,this.phiGoal=this._home.phi,this.radiusGoal=this._home.radius,this.targetGoal.set(...this._home.target)}_cancelIntro(){this.introDone||(this.introDone=!0,this.thetaGoal=this.theta,this.phiGoal=this.phi,this.radiusGoal=this.radius,this.targetGoal.copy(this.target))}_down=t=>{if(t.button===0){this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY});try{this.dom.setPointerCapture?.(t.pointerId)}catch{}this.dragging=!0,this.moved=0,this._home||(this._home={theta:this.thetaGoal,phi:this.phiGoal,radius:this.radiusGoal,target:this.targetGoal.toArray()}),this._cancelIntro(),document.body.classList.add("dragging")}};_move=t=>{if(!this.dragging||!this.pointers.has(t.pointerId)||t.pointerType==="mouse"&&!(t.buttons&1))return;let e=this.pointers.get(t.pointerId),n=t.clientX-e.x,s=t.clientY-e.y;if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY}),this.pointers.size===2){let r=[...this.pointers.values()],o=Math.hypot(r[0].x-r[1].x,r[0].y-r[1].y);this.lastPinch&&(this.radiusGoal=Rr(this.radiusGoal*(this.lastPinch/o),this.minRadius,this.maxRadius)),this.lastPinch=o;return}this.moved+=Math.abs(n)+Math.abs(s),this.thetaGoal-=n*.0052,this.phiGoal=Rr(this.phiGoal-s*.0042,this.minPhi,this.maxPhi),this.thetaGoal=Rr(this.thetaGoal,this.minTheta,this.maxTheta)};_up=t=>{t.type==="pointerup"&&t.pointerType==="mouse"&&t.button!==0||(this.pointers.delete(t.pointerId),this.pointers.size<2&&(this.lastPinch=0),this.pointers.size===0&&(this.dragging=!1,document.body.classList.remove("dragging")))};_wheel=t=>{t.preventDefault(),this._cancelIntro();let e=Math.exp(Rr(t.deltaY,-120,120)*.0012);this.radiusGoal=Rr(this.radiusGoal*e,this.minRadius,this.maxRadius)};update(t){if(!this.introDone&&this.intro){this.introTime+=t;let n=Rr(this.introTime/this.intro.duration,0,1),s=1-Math.pow(1-n,3);this.theta=this.intro.theta[0]+(this.intro.theta[1]-this.intro.theta[0])*s,this.phi=this.intro.phi[0]+(this.intro.phi[1]-this.intro.phi[0])*s,this.radius=this.intro.radius[0]+(this.intro.radius[1]-this.intro.radius[0])*s,this.target.lerpVectors(new E(...this.intro.target[0]),new E(...this.intro.target[1]),s),n>=1&&(this.introDone=!0,this.thetaGoal=this.theta,this.phiGoal=this.phi,this.radiusGoal=this.radius,this.targetGoal.copy(this.target),this._home={theta:this.thetaGoal,phi:this.phiGoal,radius:this.radiusGoal,target:this.targetGoal.toArray()})}else{let n=1-Math.exp(-t*9);this.theta+=(this.thetaGoal-this.theta)*n,this.phi+=(this.phiGoal-this.phi)*n,this.radius+=(this.radiusGoal-this.radius)*n,this.target.lerp(this.targetGoal,n)}this._home===void 0&&this.introDone&&(this._home={theta:this.theta,phi:this.phi,radius:this.radius,target:this.target.toArray()});let e=Math.sin(this.phi);this.camera.position.set(this.target.x+this.radius*e*Math.sin(this.theta),this.target.y+this.radius*Math.cos(this.phi),this.target.z+this.radius*e*Math.cos(this.theta)),this.camera.lookAt(this.target)}};var Pp=document.getElementById("scene"),Si=new gc({canvas:Pp,antialias:!0,alpha:!1,powerPreference:"high-performance",stencil:!1}),Hy=Math.min(window.devicePixelRatio||1,1.75);Si.setPixelRatio(Hy);Si.setSize(window.innerWidth,window.innerHeight);Si.outputColorSpace=$e;Si.toneMapping=Nn;Si.clearColor=new jt(527639);Si.setClearColor(527639,1);var Un=new ro;Un.fog=new so(66e4,.0075);var Ko=new dn(31,window.innerWidth/window.innerHeight,.1,260),Vy=new Po(8166356,1512738,1.18);Un.add(Vy);var Ip=new cr(11125759,1.28);Ip.position.set(-11,15,9);Un.add(Ip);var Lp=new cr(5204638,.42);Lp.position.set(9,7,-12);Un.add(Lp);var ky=new It(new Ke(120,32,20),new Xe({side:sn,depthWrite:!1,fog:!1,uniforms:{uTop:{value:new jt(329745)},uMid:{value:new jt(857638)},uHorizon:{value:new jt(1912901)},uGlow:{value:new jt(2378588)}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      varying vec3 vDir;
      uniform vec3 uTop; uniform vec3 uMid; uniform vec3 uHorizon; uniform vec3 uGlow;
      void main() {
        float h = clamp(vDir.y * 0.5 + 0.5, 0.0, 1.0);
        vec3 col = mix(uHorizon, uMid, smoothstep(0.46, 0.64, h));
        col = mix(col, uTop, smoothstep(0.62, 0.94, h));
        float band = exp(-pow((h - 0.47) * 13.0, 2.0));
        col += uGlow * band * 0.55;
        float haze = exp(-pow((h - 0.5) * 5.0, 2.0));
        col += vec3(0.03, 0.05, 0.07) * haze;
        // soft rain clouds
        float cloud = sin(vDir.x * 3.1 + vDir.y * 7.0) * sin(vDir.z * 4.3 - vDir.y * 2.5);
        cloud += 0.55 * sin(vDir.x * 8.0 - vDir.z * 5.0 + vDir.y * 3.0);
        cloud = smoothstep(-0.15, 0.85, cloud);
        col += vec3(0.018, 0.026, 0.04) * cloud * smoothstep(0.44, 0.78, h);
        // gentle ordered dither so the gradient stays smooth in 8-bit
        float d = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
        col += (d - 0.5) * 0.006;
        gl_FragColor = vec4(col, 1.0);
      }`}));Un.add(ky);var kn=new Tc;cp(Un,kn);var Dp=gp(Un,kn),Np=mp(Un,kn),Up=Sp(Un,kn);Mp(Un,kn);var Qo=Tp(Un,{build:kn,store:Np,street:Up,neighbors:Dp});kn.begin(.15);var ke=new wc(Ko,Pp,{target:[0,.78,-.5],theta:.47,phi:1.232,radius:31.6,minRadius:12,maxRadius:55,minPhi:.32,maxPhi:1.43}),vi=new URLSearchParams(location.search),Cr=(i,t)=>vi.has(i)?Number(vi.get(i)):t;if(vi.has("freeze")){kn.finish();let i=Number(vi.get("ff")||220);for(let t=0;t<i;t++)Qo.update(.05,t*.05);ke.introDone=!0,ke.radius=31.6,ke.theta=.47,ke.phi=1.232,ke.radiusGoal=31.6,ke.thetaGoal=.47,ke.phiGoal=1.232,ke.target.set(0,.78,-.5),ke.targetGoal.set(0,.78,-.5),ke.update(0)}if(vi.has("r")||vi.has("th")||vi.has("ph")||vi.has("ty")||vi.has("tx")||vi.has("tz")){ke.introDone=!0,ke.radius=ke.radiusGoal=Cr("r",31.6),ke.theta=ke.thetaGoal=Cr("th",.47),ke.phi=ke.phiGoal=Cr("ph",1.232);let i=Cr("ty",.78),t=Cr("tx",0),e=Cr("tz",-.5);ke.target.set(t,i,e),ke.targetGoal.set(t,i,e),ke.update(0)}var Mi=document.createElement("div");Mi.className="hud";Mi.innerHTML=`
  <button class="hud-btn" type="button" aria-expanded="false" aria-controls="hudPanel">\u2699 \u63A7\u5236</button>
  <div class="hud-panel" id="hudPanel" hidden>
    <div class="hud-row">
      <span class="hud-label">\u81EA\u52A8\u95E8</span>
      <div class="hud-seg" id="hudDoor">
        <button type="button" data-mode="auto" class="on">\u81EA\u52A8</button>
        <button type="button" data-mode="open">\u5F00</button>
        <button type="button" data-mode="closed">\u5173</button>
      </div>
    </div>
    <div class="hud-row">
      <span class="hud-label">\u4E0B\u96E8</span>
      <button class="hud-switch on" type="button" id="hudRain" aria-pressed="true" aria-label="\u4E0B\u96E8\u5F00\u5173"><i></i></button>
    </div>
    <div class="hud-row hud-acts">
      <button class="hud-act" type="button" id="hudReplay">\u91CD\u64AD\u7EC4\u88C5</button>
      <button class="hud-act" type="button" id="hudReset">\u590D\u4F4D\u89C6\u89D2</button>
    </div>
  </div>`;document.body.appendChild(Mi);var wp=Mi.querySelector(".hud-btn"),Ap=Mi.querySelector("#hudPanel");wp.addEventListener("click",()=>{let i=Ap.hidden;Ap.hidden=!i,wp.setAttribute("aria-expanded",String(i))});Mi.querySelector("#hudDoor").addEventListener("click",i=>{let t=i.target.closest("button[data-mode]");t&&(Mi.querySelectorAll("#hudDoor button").forEach(e=>e.classList.toggle("on",e===t)),Qo.setDoorMode(t.dataset.mode))});var Ac=Mi.querySelector("#hudRain");Ac.addEventListener("click",()=>{let i=!Ac.classList.contains("on");Ac.classList.toggle("on",i),Ac.setAttribute("aria-pressed",String(i)),Qo.setRain(i)});Mi.querySelector("#hudReplay").addEventListener("click",()=>kn.restart(.2));Mi.querySelector("#hudReset").addEventListener("click",()=>ke.reset());function Fp(){let i=window.innerWidth,t=window.innerHeight,e=Math.min(window.devicePixelRatio||1,1.75);Si.setPixelRatio(e),Si.setSize(i,t),Ko.aspect=i/t,Ko.updateProjectionMatrix(),du.set(i*e,t*e),Uf(e)}Fp();window.addEventListener("resize",Fp);var Rp=performance.now(),Cp=0;function Op(i){let t=Math.min(.05,(i-Rp)/1e3);Rp=i,Cp+=t,kn.update(t),ke.update(t),Qo.update(t,Cp),Si.render(Un,Ko),requestAnimationFrame(Op)}requestAnimationFrame(Op);window.__READY=!0;window.__APP={scene:Un,camera:Ko,renderer:Si,build:kn,controls:ke,store:Np,street:Up,neighbors:Dp,effects:Qo,setFrozen(){kn.finish(),ke.introDone=!0}};})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
