System.register(["./installCanvasRenderer-legacy.8c9c1aa6.js"],(function(t){"use strict";var e,n,r,a,i,o,s,l,u,d,c,h,f,g,p,v,y,x,m,M,A,T,S,I,b,w,C,_,P,k,L,D,E,R,z,G,B,W,F,O,V,j,Z,N,U,q,H,K,Q,J,X,Y,$,tt,et,nt,rt,at,it,ot,st,lt,ut,dt,ct,ht,ft;return{setters:[function(t){e=t._,n=t.g,r=t.h,a=t.B,i=t.r,o=t.t,s=t.j,l=t.A,u=t.m,d=t.k,c=t.l,h=t.C,f=t.S,g=t.n,p=t.o,v=t.p,y=t.q,x=t.s,m=t.v,M=t.w,A=t.x,T=t.y,S=t.z,I=t.D,b=t.E,w=t.F,C=t.G,_=t.H,P=t.R,k=t.L,L=t.I,D=t.J,E=t.K,R=t.M,z=t.Z,G=t.N,B=t.O,W=t.P,F=t.Q,O=t.T,V=t.U,j=t.V,Z=t.u,N=t.W,U=t.X,q=t.Y,H=t.$,K=t.a0,Q=t.a1,J=t.a2,X=t.a3,Y=t.a4,$=t.a5,tt=t.a6,et=t.a7,nt=t.a8,rt=t.a9,at=t.aa,it=t.ab,ot=t.ac,st=t.ad,lt=t.ae,ut=t.af,dt=t.ag,ct=t.ah,ht=t.ai,ft=t.aj}],execute:function(){t({a:function(t){t.registerUpdateLifecycle("series:beforeupdate",(function(t,e,n){A(ot(n.seriesTransition),(function(t){A(ot(t.to),(function(t){for(var e=n.updatedSeries,r=0;r<e.length;r++)(null!=t.seriesIndex&&t.seriesIndex===e[r].seriesIndex||null!=t.seriesId&&t.seriesId===e[r].id)&&(e[r][st]=!0)}))}))})),t.registerUpdateLifecycle("series:transition",(function(t,e,n){var r=ke(e);if(r.oldSeries&&n.updatedSeries&&n.optionChanged){var a=n.seriesTransition;if(a)A(ot(a),(function(t){!function(t,e,n,r){var a=[],i=[];A(ot(t.from),(function(t){var n=Fe(e.oldSeries,t);n>=0&&a.push({data:e.oldData[n],divide:We(e.oldData[n]),dim:t.dimension})})),A(ot(t.to),(function(t){var e=Fe(n.updatedSeries,t);if(e>=0){var r=n.updatedSeries[e].getData();i.push({data:r,divide:We(r),dim:t.dimension})}})),a.length>0&&i.length>0&&ze(a,i,r)}(t,r,n,e)}));else{var i=function(t,e){var n=ut(),r=ut(),a=ut();return A(t.oldSeries,(function(e,n){var i=t.oldData[n],o=Ge(e),s=Be(o);r.set(s,i),M(o)&&A(o,(function(t){a.set(t,{data:i,key:s})}))})),A(e.updatedSeries,(function(t){if(t.isUniversalTransitionEnabled()&&t.isAnimationEnabled()){var e=t.getData(),i=Ge(t),o=Be(i),s=r.get(o);if(s)n.set(o,{oldSeries:[{divide:We(s),data:s}],newSeries:[{divide:We(e),data:e}]});else if(M(i)){var l=[];A(i,(function(t){var e=r.get(t);e&&l.push({divide:We(e),data:e})})),l.length&&n.set(o,{oldSeries:l,newSeries:[{data:e,divide:We(e)}]})}else{var u=a.get(i);if(u){var d=n.get(u.key);d||(d={oldSeries:[{data:u.data,divide:We(u.data)}],newSeries:[]},n.set(u.key,d)),d.newSeries.push({data:e,divide:We(e)})}}}})),n}(r,n);A(i.keys(),(function(t){var n=i.get(t);ze(n.oldSeries,n.newSeries,e)}))}A(n.updatedSeries,(function(t){t[st]&&(t[st]=!1)}))}for(var o=t.getSeries(),s=r.oldSeries=[],l=r.oldData=[],u=0;u<o.length;u++){var d=o[u].getData();d.count()<1e4&&(s.push(o[u]),l.push(d))}}))},i:function(t){Z(N),C.registerAxisPointerClass("PolarAxisPointer",vt),t.registerCoordinateSystem("polar",Dt),t.registerComponentModel(xt),t.registerComponentView(Jt),U(t,"angle",Mt,Kt),U(t,"radius",At,Qt),t.registerComponentView(Ft),t.registerComponentView(Nt),t.registerLayout(q(Ht,"bar"))}});var gt=function(t){function a(){return null!==t&&t.apply(this,arguments)||this}return e(a,t),a.prototype.makeElOption=function(t,e,a,u,d){var h=a.axis;"angle"===h.dim&&(this.animationThreshold=Math.PI/18);var f=h.polar,g=f.getOtherAxis(h).getExtent(),p=h.dataToCoord(e),v=u.get("type");if(v&&"none"!==v){var y=n(u),x=pt[v](h,f,p,g);x.style=y,t.graphicKey=x.type,t.pointer=x}var m=function(t,e,n,r,a){var u=e.axis,d=u.dataToCoord(t),h=r.getAngleAxis().getExtent()[0];h=h/180*Math.PI;var f,g,p,v=r.getRadiusAxis().getExtent();if("radius"===u.dim){var y=c();i(y,y,h),o(y,y,[r.cx,r.cy]),f=s([d,-a],y);var x=e.getModel("axisLabel").get("rotate")||0,m=l.innerTextLayout(h,x*Math.PI/180,-1);g=m.textAlign,p=m.textVerticalAlign}else{var M=v[1];f=r.coordToPoint([M+a,d]);var A=r.cx,T=r.cy;g=Math.abs(f[0]-A)/M<.3?"center":f[0]>A?"left":"right",p=Math.abs(f[1]-T)/M<.3?"middle":f[1]>T?"top":"bottom"}return{position:f,align:g,verticalAlign:p}}(e,a,0,f,u.get(["label","margin"]));r(t,a,u,d,m)},a}(a),pt={line:function(t,e,n,r){return"angle"===t.dim?{type:"Line",shape:u(e.coordToPoint([r[0],n]),e.coordToPoint([r[1],n]))}:{type:"Circle",shape:{cx:e.cx,cy:e.cy,r:n}}},shadow:function(t,e,n,r){var a=Math.max(1,t.getBandWidth()),i=Math.PI/180;return"angle"===t.dim?{type:"Sector",shape:d(e.cx,e.cy,r[0],r[1],(-n-a/2)*i,(a/2-n)*i)}:{type:"Sector",shape:d(e.cx,e.cy,n-a/2,n+a/2,0,2*Math.PI)}}},vt=gt,yt=function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e.type=n.type,e}return e(n,t),n.prototype.findAxisModel=function(t){var e;return this.ecModel.eachComponent(t,(function(t){t.getCoordSysModel()===this&&(e=t)}),this),e},n.type="polar",n.dependencies=["radiusAxis","angleAxis"],n.defaultOption={z:0,center:["50%","50%"],radius:"80%"},n}(h),xt=yt,mt=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.getCoordSysModel=function(){return this.getReferringComponents("polar",f).models[0]},n.type="polarAxis",n}(h);g(mt,p);var Mt=function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e.type=n.type,e}return e(n,t),n.type="angleAxis",n}(mt),At=function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e.type=n.type,e}return e(n,t),n.type="radiusAxis",n}(mt),Tt=function(t){function n(e,n){return t.call(this,"radius",e,n)||this}return e(n,t),n.prototype.pointToData=function(t,e){return this.polar.pointToData(t,e)["radius"===this.dim?0:1]},n}(v);Tt.prototype.dataToRadius=v.prototype.dataToCoord,Tt.prototype.radiusToData=v.prototype.coordToData;var St=Tt,It=y(),bt=function(t){function n(e,n){return t.call(this,"angle",e,n||[0,360])||this}return e(n,t),n.prototype.pointToData=function(t,e){return this.polar.pointToData(t,e)["radius"===this.dim?0:1]},n.prototype.calculateCategoryInterval=function(){var t=this,e=t.getLabelModel(),n=t.scale,r=n.getExtent(),a=n.count();if(r[1]-r[0]<1)return 0;var i=r[0],o=t.dataToCoord(i+1)-t.dataToCoord(i),s=Math.abs(o),l=x(null==i?"":i+"",e.getFont(),"center","top"),u=Math.max(l.height,7)/s;isNaN(u)&&(u=1/0);var d=Math.max(0,Math.floor(u)),c=It(t.model),h=c.lastAutoInterval,f=c.lastTickCount;return null!=h&&null!=f&&Math.abs(h-d)<=1&&Math.abs(f-a)<=1&&h>d?d=h:(c.lastTickCount=a,c.lastAutoInterval=d),d},n}(v);bt.prototype.dataToAngle=v.prototype.dataToCoord,bt.prototype.angleToData=v.prototype.coordToData;var wt=bt,Ct=["radius","angle"];function _t(t){var e=t.seriesModel,n=t.polarModel;return n&&n.coordinateSystem||e&&e.coordinateSystem}var Pt=function(){function t(t){this.dimensions=Ct,this.type="polar",this.cx=0,this.cy=0,this._radiusAxis=new St,this._angleAxis=new wt,this.axisPointerEnabled=!0,this.name=t||"",this._radiusAxis.polar=this._angleAxis.polar=this}return t.prototype.containPoint=function(t){var e=this.pointToCoord(t);return this._radiusAxis.contain(e[0])&&this._angleAxis.contain(e[1])},t.prototype.containData=function(t){return this._radiusAxis.containData(t[0])&&this._angleAxis.containData(t[1])},t.prototype.getAxis=function(t){return this["_"+t+"Axis"]},t.prototype.getAxes=function(){return[this._radiusAxis,this._angleAxis]},t.prototype.getAxesByScale=function(t){var e=[],n=this._angleAxis,r=this._radiusAxis;return n.scale.type===t&&e.push(n),r.scale.type===t&&e.push(r),e},t.prototype.getAngleAxis=function(){return this._angleAxis},t.prototype.getRadiusAxis=function(){return this._radiusAxis},t.prototype.getOtherAxis=function(t){var e=this._angleAxis;return t===e?this._radiusAxis:e},t.prototype.getBaseAxis=function(){return this.getAxesByScale("ordinal")[0]||this.getAxesByScale("time")[0]||this.getAngleAxis()},t.prototype.getTooltipAxes=function(t){var e=null!=t&&"auto"!==t?this.getAxis(t):this.getBaseAxis();return{baseAxes:[e],otherAxes:[this.getOtherAxis(e)]}},t.prototype.dataToPoint=function(t,e){return this.coordToPoint([this._radiusAxis.dataToRadius(t[0],e),this._angleAxis.dataToAngle(t[1],e)])},t.prototype.pointToData=function(t,e){var n=this.pointToCoord(t);return[this._radiusAxis.radiusToData(n[0],e),this._angleAxis.angleToData(n[1],e)]},t.prototype.pointToCoord=function(t){var e=t[0]-this.cx,n=t[1]-this.cy,r=this.getAngleAxis(),a=r.getExtent(),i=Math.min(a[0],a[1]),o=Math.max(a[0],a[1]);r.inverse?i=o-360:o=i+360;var s=Math.sqrt(e*e+n*n);e/=s,n/=s;for(var l=Math.atan2(-n,e)/Math.PI*180,u=l<i?1:-1;l<i||l>o;)l+=360*u;return[s,l]},t.prototype.coordToPoint=function(t){var e=t[0],n=t[1]/180*Math.PI;return[Math.cos(n)*e+this.cx,-Math.sin(n)*e+this.cy]},t.prototype.getArea=function(){var t=this.getAngleAxis(),e=this.getRadiusAxis().getExtent().slice();e[0]>e[1]&&e.reverse();var n=t.getExtent(),r=Math.PI/180;return{cx:this.cx,cy:this.cy,r0:e[0],r:e[1],startAngle:-n[0]*r,endAngle:-n[1]*r,clockwise:t.inverse,contain:function(t,e){var n=t-this.cx,r=e-this.cy,a=n*n+r*r-1e-4,i=this.r,o=this.r0;return a<=i*i&&a>=o*o}}},t.prototype.convertToPixel=function(t,e,n){return _t(e)===this?this.dataToPoint(n):null},t.prototype.convertFromPixel=function(t,e,n){return _t(e)===this?this.pointToData(n):null},t}();function kt(t,e){var n=this,r=n.getAngleAxis(),a=n.getRadiusAxis();if(r.scale.setExtent(1/0,-1/0),a.scale.setExtent(1/0,-1/0),t.eachSeries((function(t){if(t.coordinateSystem===n){var e=t.getData();A(T(e,"radius"),(function(t){a.scale.unionExtentFromData(e,t)})),A(T(e,"angle"),(function(t){r.scale.unionExtentFromData(e,t)}))}})),S(r.scale,r.model),S(a.scale,a.model),"category"===r.type&&!r.onBand){var i=r.getExtent(),o=360/r.scale.count();r.inverse?i[1]+=o:i[1]-=o,r.setExtent(i[0],i[1])}}function Lt(t,e){if(t.type=e.get("type"),t.scale=I(e),t.onBand=e.get("boundaryGap")&&"category"===t.type,t.inverse=e.get("inverse"),function(t){return"angleAxis"===t.mainType}(e)){t.inverse=t.inverse!==e.get("clockwise");var n=e.get("startAngle");t.setExtent(n,n+(t.inverse?-360:360))}e.axis=t,t.model=e}var Dt={dimensions:Ct,create:function(t,e){var n=[];return t.eachComponent("polar",(function(t,r){var a=new Pt(r+"");a.update=kt;var i=a.getRadiusAxis(),o=a.getAngleAxis(),s=t.findAxisModel("radiusAxis"),l=t.findAxisModel("angleAxis");Lt(i,s),Lt(o,l),function(t,e,n){var r=e.get("center"),a=n.getWidth(),i=n.getHeight();t.cx=m(r[0],a),t.cy=m(r[1],i);var o=t.getRadiusAxis(),s=Math.min(a,i)/2,l=e.get("radius");null==l?l=[0,"100%"]:M(l)||(l=[0,l]);var u=[m(l[0],s),m(l[1],s)];o.inverse?o.setExtent(u[1],u[0]):o.setExtent(u[0],u[1])}(a,t,e),n.push(a),t.coordinateSystem=a,a.model=t})),t.eachSeries((function(t){if("polar"===t.get("coordinateSystem")){var e=t.getReferringComponents("polar",f).models[0];t.coordinateSystem=e.coordinateSystem}})),n}},Et=["axisLine","axisLabel","axisTick","minorTick","splitLine","minorSplitLine","splitArea"];function Rt(t,e,n){e[1]>e[0]&&(e=e.slice().reverse());var r=t.coordToPoint([e[0],n]),a=t.coordToPoint([e[1],n]);return{x1:r[0],y1:r[1],x2:a[0],y2:a[1]}}function zt(t){return t.getRadiusAxis().inverse?0:1}function Gt(t){var e=t[0],n=t[t.length-1];e&&n&&Math.abs(Math.abs(e.coord-n.coord)-360)<1e-4&&t.pop()}var Bt=function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e.type=n.type,e.axisPointerClass="PolarAxisPointer",e}return e(n,t),n.prototype.render=function(t,e){if(this.group.removeAll(),t.get("show")){var n=t.axis,r=n.polar,a=r.getRadiusAxis().getExtent(),i=n.getTicksCoords(),o=n.getMinorTicksCoords(),s=b(n.getViewLabels(),(function(t){t=w(t);var e=n.scale,r="ordinal"===e.type?e.getRawOrdinalNumber(t.tickValue):t.tickValue;return t.coord=n.dataToCoord(r),t}));Gt(s),Gt(i),A(Et,(function(e){!t.get([e,"show"])||n.scale.isBlank()&&"axisLine"!==e||Wt[e](this.group,t,r,i,o,a,s)}),this)}},n.type="angleAxis",n}(C),Wt={axisLine:function(t,e,n,r,a,i){var o,s=e.getModel(["axisLine","lineStyle"]),l=zt(n),u=l?0:1;(o=0===i[u]?new _({shape:{cx:n.cx,cy:n.cy,r:i[l]},style:s.getLineStyle(),z2:1,silent:!0}):new P({shape:{cx:n.cx,cy:n.cy,r:i[l],r0:i[u]},style:s.getLineStyle(),z2:1,silent:!0})).style.fill=null,t.add(o)},axisTick:function(t,e,n,r,a,i){var o=e.getModel("axisTick"),s=(o.get("inside")?-1:1)*o.get("length"),l=i[zt(n)],u=b(r,(function(t){return new k({shape:Rt(n,[l,l+s],t.coord)})}));t.add(L(u,{style:D(o.getModel("lineStyle").getLineStyle(),{stroke:e.get(["axisLine","lineStyle","color"])})}))},minorTick:function(t,e,n,r,a,i){if(a.length){for(var o=e.getModel("axisTick"),s=e.getModel("minorTick"),l=(o.get("inside")?-1:1)*s.get("length"),u=i[zt(n)],d=[],c=0;c<a.length;c++)for(var h=0;h<a[c].length;h++)d.push(new k({shape:Rt(n,[u,u+l],a[c][h].coord)}));t.add(L(d,{style:D(s.getModel("lineStyle").getLineStyle(),D(o.getLineStyle(),{stroke:e.get(["axisLine","lineStyle","color"])}))}))}},axisLabel:function(t,e,n,r,a,i,o){var s=e.getCategories(!0),u=e.getModel("axisLabel"),d=u.get("margin"),c=e.get("triggerEvent");A(o,(function(r,a){var o=u,h=r.tickValue,f=i[zt(n)],g=n.coordToPoint([f+d,r.coord]),p=n.cx,v=n.cy,y=Math.abs(g[0]-p)/f<.3?"center":g[0]>p?"left":"right",x=Math.abs(g[1]-v)/f<.3?"middle":g[1]>v?"top":"bottom";if(s&&s[h]){var m=s[h];E(m)&&m.textStyle&&(o=new R(m.textStyle,u,u.ecModel))}var M=new z({silent:l.isLabelSilent(e),style:G(o,{x:g[0],y:g[1],fill:o.getTextColor()||e.get(["axisLine","lineStyle","color"]),text:r.formattedLabel,align:y,verticalAlign:x})});if(t.add(M),c){var A=l.makeAxisEventDataBase(e);A.targetType="axisLabel",A.value=r.rawLabel,B(M).eventData=A}}),this)},splitLine:function(t,e,n,r,a,i){var o=e.getModel("splitLine").getModel("lineStyle"),s=o.get("color"),l=0;s=s instanceof Array?s:[s];for(var u=[],d=0;d<r.length;d++){var c=l++%s.length;u[c]=u[c]||[],u[c].push(new k({shape:Rt(n,i,r[d].coord)}))}for(d=0;d<u.length;d++)t.add(L(u[d],{style:D({stroke:s[d%s.length]},o.getLineStyle()),silent:!0,z:e.get("z")}))},minorSplitLine:function(t,e,n,r,a,i){if(a.length){for(var o=e.getModel("minorSplitLine").getModel("lineStyle"),s=[],l=0;l<a.length;l++)for(var u=0;u<a[l].length;u++)s.push(new k({shape:Rt(n,i,a[l][u].coord)}));t.add(L(s,{style:o.getLineStyle(),silent:!0,z:e.get("z")}))}},splitArea:function(t,e,n,r,a,i){if(r.length){var o=e.getModel("splitArea").getModel("areaStyle"),s=o.get("color"),l=0;s=s instanceof Array?s:[s];for(var u=[],d=Math.PI/180,c=-r[0].coord*d,h=Math.min(i[0],i[1]),f=Math.max(i[0],i[1]),g=e.get("clockwise"),p=1,v=r.length;p<=v;p++){var y=p===v?r[0].coord:r[p].coord,x=l++%s.length;u[x]=u[x]||[],u[x].push(new W({shape:{cx:n.cx,cy:n.cy,r0:h,r:f,startAngle:c,endAngle:-y*d,clockwise:g},silent:!0})),c=-y*d}for(p=0;p<u.length;p++)t.add(L(u[p],{style:D({fill:s[p%s.length]},o.getAreaStyle()),silent:!0}))}}},Ft=Bt,Ot=["axisLine","axisTickLabel","axisName"],Vt=["splitLine","splitArea","minorSplitLine"],jt=function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e.type=n.type,e.axisPointerClass="PolarAxisPointer",e}return e(n,t),n.prototype.render=function(t,e){if(this.group.removeAll(),t.get("show")){var n=this._axisGroup,r=this._axisGroup=new F;this.group.add(r);var a=t.axis,i=a.polar,o=i.getAngleAxis(),s=a.getTicksCoords(),u=a.getMinorTicksCoords(),d=o.getExtent()[0],c=a.getExtent(),h=function(t,e,n){return{position:[t.cx,t.cy],rotation:n/180*Math.PI,labelDirection:-1,tickDirection:-1,nameDirection:1,labelRotate:e.getModel("axisLabel").get("rotate"),z2:1}}(i,t,d),f=new l(t,h);A(Ot,f.add,f),r.add(f.getGroup()),O(n,r,t),A(Vt,(function(e){t.get([e,"show"])&&!a.scale.isBlank()&&Zt[e](this.group,t,i,d,c,s,u)}),this)}},n.type="radiusAxis",n}(C),Zt={splitLine:function(t,e,n,r,a,i){var o=e.getModel("splitLine").getModel("lineStyle"),s=o.get("color"),l=0;s=s instanceof Array?s:[s];for(var u=[],d=0;d<i.length;d++){var c=l++%s.length;u[c]=u[c]||[],u[c].push(new _({shape:{cx:n.cx,cy:n.cy,r:i[d].coord}}))}for(d=0;d<u.length;d++)t.add(L(u[d],{style:D({stroke:s[d%s.length],fill:null},o.getLineStyle()),silent:!0}))},minorSplitLine:function(t,e,n,r,a,i,o){if(o.length){for(var s=e.getModel("minorSplitLine").getModel("lineStyle"),l=[],u=0;u<o.length;u++)for(var d=0;d<o[u].length;d++)l.push(new _({shape:{cx:n.cx,cy:n.cy,r:o[u][d].coord}}));t.add(L(l,{style:D({fill:null},s.getLineStyle()),silent:!0}))}},splitArea:function(t,e,n,r,a,i){if(i.length){var o=e.getModel("splitArea").getModel("areaStyle"),s=o.get("color"),l=0;s=s instanceof Array?s:[s];for(var u=[],d=i[0].coord,c=1;c<i.length;c++){var h=l++%s.length;u[h]=u[h]||[],u[h].push(new W({shape:{cx:n.cx,cy:n.cy,r0:d,r:i[c].coord,startAngle:0,endAngle:2*Math.PI},silent:!0})),d=i[c].coord}for(c=0;c<u.length;c++)t.add(L(u[c],{style:D({fill:s[c%s.length]},o.getAreaStyle()),silent:!0}))}}},Nt=jt;function Ut(t){return t.get("stack")||"__ec_stack_"+t.seriesIndex}function qt(t,e){return e.dim+t.model.componentIndex}function Ht(t,e,n){var r={},a=function(t){var e={};A(t,(function(t,n){var r=t.getData(),a=t.coordinateSystem,i=a.getBaseAxis(),o=qt(a,i),s=i.getExtent(),l="category"===i.type?i.getBandWidth():Math.abs(s[1]-s[0])/r.count(),u=e[o]||{bandWidth:l,remainedWidth:l,autoWidthCount:0,categoryGap:"20%",gap:"30%",stacks:{}},d=u.stacks;e[o]=u;var c=Ut(t);d[c]||u.autoWidthCount++,d[c]=d[c]||{width:0,maxWidth:0};var h=m(t.get("barWidth"),l),f=m(t.get("barMaxWidth"),l),g=t.get("barGap"),p=t.get("barCategoryGap");h&&!d[c].width&&(h=Math.min(u.remainedWidth,h),d[c].width=h,u.remainedWidth-=h),f&&(d[c].maxWidth=f),null!=g&&(u.gap=g),null!=p&&(u.categoryGap=p)}));var n={};return A(e,(function(t,e){n[e]={};var r=t.stacks,a=t.bandWidth,i=m(t.categoryGap,a),o=m(t.gap,1),s=t.remainedWidth,l=t.autoWidthCount,u=(s-i)/(l+(l-1)*o);u=Math.max(u,0),A(r,(function(t,e){var n=t.maxWidth;n&&n<u&&(n=Math.min(n,s),t.width&&(n=Math.min(n,t.width)),s-=n,t.width=n,l--)})),u=(s-i)/(l+(l-1)*o),u=Math.max(u,0);var d,c=0;A(r,(function(t,e){t.width||(t.width=u),d=t,c+=t.width*(1+o)})),d&&(c-=d.width*o);var h=-c/2;A(r,(function(t,r){n[e][r]=n[e][r]||{offset:h,width:t.width},h+=t.width*(1+o)}))})),n}(V(e.getSeriesByType(t),(function(t){return!e.isSeriesFiltered(t)&&t.coordinateSystem&&"polar"===t.coordinateSystem.type})));e.eachSeriesByType(t,(function(t){if("polar"===t.coordinateSystem.type){var e=t.getData(),n=t.coordinateSystem,i=n.getBaseAxis(),o=qt(n,i),s=Ut(t),l=a[o][s],u=l.offset,d=l.width,c=n.getOtherAxis(i),h=t.coordinateSystem.cx,f=t.coordinateSystem.cy,g=t.get("barMinHeight")||0,p=t.get("barMinAngle")||0;r[s]=r[s]||[];for(var v=e.mapDimension(c.dim),y=e.mapDimension(i.dim),x=j(e,v),m="radius"!==i.dim||!t.get("roundCap",!0),M=c.dataToCoord(0),A=0,T=e.count();A<T;A++){var S=e.get(v,A),I=e.get(y,A),b=S>=0?"p":"n",w=M;x&&(r[s][I]||(r[s][I]={p:M,n:M}),w=r[s][I][b]);var C=void 0,_=void 0,P=void 0,k=void 0;if("radius"===c.dim){var L=c.dataToCoord(S)-M,D=i.dataToCoord(I);Math.abs(L)<g&&(L=(L<0?-1:1)*g),C=w,_=w+L,k=(P=D-u)-d,x&&(r[s][I][b]=_)}else{var E=c.dataToCoord(S,m)-M,R=i.dataToCoord(I);Math.abs(E)<p&&(E=(E<0?-1:1)*p),_=(C=R+u)+d,P=w,k=w+E,x&&(r[s][I][b]=k)}e.setItemLayout(A,{cx:h,cy:f,r0:C,r:_,startAngle:-P*Math.PI/180,endAngle:-k*Math.PI/180,clockwise:P>=k})}}}))}var Kt={startAngle:90,clockwise:!0,splitNumber:12,axisLabel:{rotate:0}},Qt={splitNumber:5},Jt=function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e.type=n.type,e}return e(n,t),n.type="polar",n}(H),Xt=K.CMD;function Yt(t,e){return Math.abs(t-e)<1e-5}function $t(t){var e,n,r,a,i,o=t.data,s=t.len(),l=[],u=0,d=0,c=0,h=0;function f(t,n){e&&e.length>2&&l.push(e),e=[t,n]}function g(t,n,r,a){Yt(t,r)&&Yt(n,a)||e.push(t,n,r,a,r,a)}function p(t,n,r,a,i,o){var s=Math.abs(n-t),l=4*Math.tan(s/4)/3,u=n<t?-1:1,d=Math.cos(t),c=Math.sin(t),h=Math.cos(n),f=Math.sin(n),g=d*i+r,p=c*o+a,v=h*i+r,y=f*o+a,x=i*l*u,m=o*l*u;e.push(g-x*c,p+m*d,v+x*f,y-m*h,v,y)}for(var v=0;v<s;){var y=o[v++],x=1===v;switch(x&&(c=u=o[v],h=d=o[v+1],y!==Xt.L&&y!==Xt.C&&y!==Xt.Q||(e=[c,h])),y){case Xt.M:u=c=o[v++],d=h=o[v++],f(c,h);break;case Xt.L:g(u,d,n=o[v++],r=o[v++]),u=n,d=r;break;case Xt.C:e.push(o[v++],o[v++],o[v++],o[v++],u=o[v++],d=o[v++]);break;case Xt.Q:n=o[v++],r=o[v++],a=o[v++],i=o[v++],e.push(u+2/3*(n-u),d+2/3*(r-d),a+2/3*(n-a),i+2/3*(r-i),a,i),u=a,d=i;break;case Xt.A:var m=o[v++],M=o[v++],A=o[v++],T=o[v++],S=o[v++],I=o[v++]+S;v+=1;var b=!o[v++];n=Math.cos(S)*A+m,r=Math.sin(S)*T+M,x?f(c=n,h=r):g(u,d,n,r),u=Math.cos(I)*A+m,d=Math.sin(I)*T+M;for(var w=(b?-1:1)*Math.PI/2,C=S;b?C>I:C<I;C+=w)p(C,b?Math.max(C+w,I):Math.min(C+w,I),m,M,A,T);break;case Xt.R:c=u=o[v++],h=d=o[v++],n=c+o[v++],r=h+o[v++],f(n,h),g(n,h,n,r),g(n,r,c,r),g(c,r,c,h),g(c,h,n,h);break;case Xt.Z:e&&g(u,d,c,h),u=c,d=h}}return e&&e.length>2&&l.push(e),l}function te(t,e,n,r,a,i,o,s,l,u){if(Yt(t,n)&&Yt(e,r)&&Yt(a,o)&&Yt(i,s))l.push(o,s);else{var d=2/u,c=d*d,h=o-t,f=s-e,g=Math.sqrt(h*h+f*f);h/=g,f/=g;var p=n-t,v=r-e,y=a-o,x=i-s,m=p*p+v*v,M=y*y+x*x;if(m<c&&M<c)l.push(o,s);else{var A=h*p+f*v,T=-h*y-f*x;if(m-A*A<c&&A>=0&&M-T*T<c&&T>=0)l.push(o,s);else{var S=[],I=[];Q(t,n,a,o,.5,S),Q(e,r,i,s,.5,I),te(S[0],I[0],S[1],I[1],S[2],I[2],S[3],I[3],l,u),te(S[4],I[4],S[5],I[5],S[6],I[6],S[7],I[7],l,u)}}}}function ee(t,e,n){var r=t[e],a=t[1-e],i=Math.abs(r/a),o=Math.ceil(Math.sqrt(i*n)),s=Math.floor(n/o);0===s&&(s=1,o=n);for(var l=[],u=0;u<o;u++)l.push(s);var d=n-o*s;if(d>0)for(u=0;u<d;u++)l[u%o]+=1;return l}function ne(t,e,n){for(var r=t.r0,a=t.r,i=t.startAngle,o=t.endAngle,s=Math.abs(o-i),l=s*a,u=a-r,d=l>Math.abs(u),c=ee([l,u],d?0:1,e),h=(d?s:u)/c.length,f=0;f<c.length;f++)for(var g=(d?u:s)/c[f],p=0;p<c[f];p++){var v={};d?(v.startAngle=i+h*f,v.endAngle=i+h*(f+1),v.r0=r+g*p,v.r=r+g*(p+1)):(v.startAngle=i+g*p,v.endAngle=i+g*(p+1),v.r0=r+h*f,v.r=r+h*(f+1)),v.clockwise=t.clockwise,v.cx=t.cx,v.cy=t.cy,n.push(v)}}function re(t,e,n,r){return t*r-n*e}function ae(t,e,n,r,a,i,o,s){var l=n-t,u=r-e,d=o-a,c=s-i,h=re(d,c,l,u);if(Math.abs(h)<1e-6)return null;var f=re(t-a,e-i,d,c)/h;return f<0||f>1?null:new Y(f*l+t,f*u+e)}function ie(t,e,n){var r=new Y;Y.sub(r,n,e),r.normalize();var a=new Y;return Y.sub(a,t,e),a.dot(r)}function oe(t,e){var n=t[t.length-1];n&&n[0]===e[0]&&n[1]===e[1]||t.push(e)}function se(t){var e=t.points,n=[],r=[];J(e,n,r);var a=new X(n[0],n[1],r[0]-n[0],r[1]-n[1]),i=a.width,o=a.height,s=a.x,l=a.y,u=new Y,d=new Y;return i>o?(u.x=d.x=s+i/2,u.y=l,d.y=l+o):(u.y=d.y=l+o/2,u.x=s,d.x=s+i),function(t,e,n){for(var r=t.length,a=[],i=0;i<r;i++){var o=t[i],s=t[(i+1)%r],l=ae(o[0],o[1],s[0],s[1],e.x,e.y,n.x,n.y);l&&a.push({projPt:ie(l,e,n),pt:l,idx:i})}if(a.length<2)return[{points:t},{points:t}];a.sort((function(t,e){return t.projPt-e.projPt}));var u=a[0],d=a[a.length-1];if(d.idx<u.idx){var c=u;u=d,d=c}var h=[u.pt.x,u.pt.y],f=[d.pt.x,d.pt.y],g=[h],p=[f];for(i=u.idx+1;i<=d.idx;i++)oe(g,t[i].slice());for(oe(g,f),oe(g,h),i=d.idx+1;i<=u.idx+r;i++)oe(p,t[i%r].slice());return oe(p,h),oe(p,f),[{points:g},{points:p}]}(e,u,d)}function le(t,e,n,r){if(1===n)r.push(e);else{var a=Math.floor(n/2),i=t(e);le(t,i[0],a,r),le(t,i[1],n-a,r)}return r}function ue(t,e){var n,r=[],a=t.shape;switch(t.type){case"rect":!function(t,e,n){for(var r=t.width,a=t.height,i=r>a,o=ee([r,a],i?0:1,e),s=i?"width":"height",l=i?"height":"width",u=i?"x":"y",d=i?"y":"x",c=t[s]/o.length,h=0;h<o.length;h++)for(var f=t[l]/o[h],g=0;g<o[h];g++){var p={};p[u]=h*c,p[d]=g*f,p[s]=c,p[l]=f,p.x+=t.x,p.y+=t.y,n.push(p)}}(a,e,r),n=et;break;case"sector":ne(a,e,r),n=W;break;case"circle":ne({r0:0,r:a.r,startAngle:0,endAngle:2*Math.PI,cx:a.cx,cy:a.cy},e,r),n=W;break;default:var i=t.getComputedTransform(),o=i?Math.sqrt(Math.max(i[0]*i[0]+i[1]*i[1],i[2]*i[2]+i[3]*i[3])):1,s=b(function(t,e){var n=$t(t),r=[];e=e||1;for(var a=0;a<n.length;a++){var i=n[a],o=[],s=i[0],l=i[1];o.push(s,l);for(var u=2;u<i.length;){var d=i[u++],c=i[u++],h=i[u++],f=i[u++],g=i[u++],p=i[u++];te(s,l,d,c,h,f,g,p,o,e),s=g,l=p}r.push(o)}return r}(t.getUpdatedPathProxy(),o),(function(t){return function(t){for(var e=[],n=0;n<t.length;)e.push([t[n++],t[n++]]);return e}(t)})),l=s.length;if(0===l)le(se,{points:s[0]},e,r);else if(l===e)for(var u=0;u<l;u++)r.push({points:s[u]});else{var d=0,c=b(s,(function(t){var e=[],n=[];J(t,e,n);var r=(n[1]-e[1])*(n[0]-e[0]);return d+=r,{poly:t,area:r}}));c.sort((function(t,e){return e.area-t.area}));var h=e;for(u=0;u<l;u++){var f=c[u];if(h<=0)break;var g=u===l-1?h:Math.ceil(f.area/d*e);g<0||(le(se,{points:f.poly},g,r),h-=g)}}n=tt}if(!n)return function(t,e){for(var n=[],r=0;r<e;r++)n.push($(t));return n}(t,e);var p,v,y=[];for(u=0;u<r.length;u++){var x=new n;x.setShape(r[u]),p=t,(v=x).setStyle(p.style),v.z=p.z,v.z2=p.z2,v.zlevel=p.zlevel,y.push(x)}return y}function de(t,e){var n=t.length,r=e.length;if(n===r)return[t,e];for(var a=[],i=[],o=n<r?t:e,s=Math.min(n,r),l=Math.abs(r-n)/6,u=(s-2)/6,d=Math.ceil(l/u)+1,c=[o[0],o[1]],h=l,f=2;f<s;){var g=o[f-2],p=o[f-1],v=o[f++],y=o[f++],x=o[f++],m=o[f++],M=o[f++],A=o[f++];if(h<=0)c.push(v,y,x,m,M,A);else{for(var T=Math.min(h,d-1)+1,S=1;S<=T;S++){var I=S/T;Q(g,v,x,M,I,a),Q(p,y,m,A,I,i),g=a[3],p=i[3],c.push(a[1],i[1],a[2],i[2],g,p),v=a[5],y=i[5],x=a[6],m=i[6]}h-=T-1}}return o===t?[c,e]:[t,c]}function ce(t,e){for(var n=t.length,r=t[n-2],a=t[n-1],i=[],o=0;o<e.length;)i[o++]=r,i[o++]=a;return i}function he(t){for(var e=0,n=0,r=0,a=t.length,i=0,o=a-2;i<a;o=i,i+=2){var s=t[o],l=t[o+1],u=t[i],d=t[i+1],c=s*d-u*l;e+=c,n+=(s+u)*c,r+=(l+d)*c}return 0===e?[t[0]||0,t[1]||0]:[n/e/3,r/e/3,e]}function fe(t,e,n,r){for(var a=(t.length-2)/6,i=1/0,o=0,s=t.length,l=s-2,u=0;u<a;u++){for(var d=6*u,c=0,h=0;h<s;h+=2){var f=0===h?d:(d+h-2)%l+2,g=t[f]-n[0],p=t[f+1]-n[1],v=e[h]-r[0]-g,y=e[h+1]-r[1]-p;c+=v*v+y*y}c<i&&(i=c,o=u)}return o}function ge(t){for(var e=[],n=t.length,r=0;r<n;r+=2)e[r]=t[n-r-2],e[r+1]=t[n-r-1];return e}function pe(t){return t.__isCombineMorphing}var ve="__mOriginal_";function ye(t,e,n){var r=ve+e,a=t[r]||t[e];t[r]||(t[r]=t[e]);var i=n.replace,o=n.after,s=n.before;t[e]=function(){var t,e=arguments;return s&&s.apply(this,e),t=i?i.apply(this,e):a.apply(this,e),o&&o.apply(this,e),t}}function xe(t,e){var n=ve+e;t[n]&&(t[e]=t[n],t[n]=null)}function me(t,e){for(var n=0;n<t.length;n++)for(var r=t[n],a=0;a<r.length;){var i=r[a],o=r[a+1];r[a++]=e[0]*i+e[2]*o+e[4],r[a++]=e[1]*i+e[3]*o+e[5]}}function Me(t,e){var n=t.getUpdatedPathProxy(),r=e.getUpdatedPathProxy(),a=function(t,e){for(var n,r,a,i=[],o=[],s=0;s<Math.max(t.length,e.length);s++){var l=t[s],u=e[s],d=void 0,c=void 0;l?u?(r=d=(n=de(l,u))[0],a=c=n[1]):(c=ce(a||l,l),d=l):(d=ce(r||u,u),c=u),i.push(d),o.push(c)}return[i,o]}($t(n),$t(r)),i=a[0],o=a[1],s=t.getComputedTransform(),l=e.getComputedTransform();s&&me(i,s),l&&me(o,l),ye(e,"updateTransform",{replace:function(){this.transform=null}}),e.transform=null;var u=function(t,e,n,r){for(var a,i=[],o=0;o<t.length;o++){var s=t[o],l=e[o],u=he(s),d=he(l);null==a&&(a=u[2]<0!=d[2]<0);var c=[],h=[],f=0,g=1/0,p=[],v=s.length;a&&(s=ge(s));for(var y=6*fe(s,l,u,d),x=v-2,m=0;m<x;m+=2){var M=(y+m)%x+2;c[m+2]=s[M]-u[0],c[m+3]=s[M+1]-u[1]}if(c[0]=s[y]-u[0],c[1]=s[y+1]-u[1],n>0)for(var A=r/n,T=-r/2;T<=r/2;T+=A){var S=Math.sin(T),I=Math.cos(T),b=0;for(m=0;m<s.length;m+=2){var w=c[m],C=c[m+1],_=l[m]-d[0],P=l[m+1]-d[1],k=_*I-P*S,L=_*S+P*I;p[m]=k,p[m+1]=L;var D=k-w,E=L-C;b+=D*D+E*E}if(b<g){g=b,f=T;for(var R=0;R<p.length;R++)h[R]=p[R]}}else for(var z=0;z<v;z+=2)h[z]=l[z]-d[0],h[z+1]=l[z+1]-d[1];i.push({from:c,to:h,fromCp:u,toCp:d,rotation:-f})}return i}(i,o,10,Math.PI),d=[];ye(e,"buildPath",{replace:function(t){for(var n=e.__morphT,r=1-n,a=[],i=0;i<u.length;i++){var o=u[i],s=o.from,l=o.to,c=o.rotation*n,h=o.fromCp,f=o.toCp,g=Math.sin(c),p=Math.cos(c);nt(a,h,f,n);for(var v=0;v<s.length;v+=2){var y=s[v],x=s[v+1],m=y*r+(S=l[v])*n,M=x*r+(I=l[v+1])*n;d[v]=m*p-M*g+a[0],d[v+1]=m*g+M*p+a[1]}var A=d[0],T=d[1];for(t.moveTo(A,T),v=2;v<s.length;){var S=d[v++],I=d[v++],b=d[v++],w=d[v++],C=d[v++],_=d[v++];A===S&&T===I&&b===C&&w===_?t.lineTo(C,_):t.bezierCurveTo(S,I,b,w,C,_),A=C,T=_}}}})}function Ae(t,e,n){if(!t||!e)return e;var r=n.done,a=n.during;return Me(t,e),e.__morphT=0,e.animateTo({__morphT:1},D({during:function(t){e.dirtyShape(),a&&a(t)},done:function(){xe(e,"buildPath"),xe(e,"updateTransform"),e.__morphT=-1,e.createPathProxy(),e.dirtyShape(),r&&r()}},n)),e}function Te(t,e,n,r,a,i){t=a===n?0:Math.round(32767*(t-n)/(a-n)),e=i===r?0:Math.round(32767*(e-r)/(i-r));for(var o,s=0,l=32768;l>0;l/=2){var u=0,d=0;(t&l)>0&&(u=1),(e&l)>0&&(d=1),s+=l*l*(3*u^d),0===d&&(1===u&&(t=l-1-t,e=l-1-e),o=t,t=e,e=o)}return s}function Se(t){var e=1/0,n=1/0,r=-1/0,a=-1/0,i=b(t,(function(t){var i=t.getBoundingRect(),o=t.getComputedTransform(),s=i.x+i.width/2+(o?o[4]:0),l=i.y+i.height/2+(o?o[5]:0);return e=Math.min(s,e),n=Math.min(l,n),r=Math.max(s,r),a=Math.max(l,a),[s,l]}));return b(i,(function(i,o){return{cp:i,z:Te(i[0],i[1],e,n,r,a),path:t[o]}})).sort((function(t,e){return t.z-e.z})).map((function(t){return t.path}))}function Ie(t){return ue(t.path,t.count)}function be(t){return M(t[0])}function we(t,e){for(var n=[],r=t.length,a=0;a<r;a++)n.push({one:t[a],many:[]});for(a=0;a<e.length;a++){var i=e[a].length,o=void 0;for(o=0;o<i;o++)n[o%r].many.push(e[a][o])}var s=0;for(a=r-1;a>=0;a--)if(!n[a].many.length){var l=n[s].many;if(l.length<=1){if(!s)return n;s=0}i=l.length;var u=Math.ceil(i/2);n[a].many=l.slice(u,i),n[s].many=l.slice(0,u),s++}return n}var Ce={clone:function(t){for(var e=[],n=1-Math.pow(1-t.path.style.opacity,1/t.count),r=0;r<t.count;r++){var a=$(t.path);a.setStyle("opacity",n),e.push(a)}return e},split:null};function _e(t,e,n,r,a,i){if(t.length&&e.length){var o=it("update",r,a);if(o&&o.duration>0){var s,l,u=r.getModel("universalTransition").get("delay"),d=Object.assign({setToFinal:!0},o);be(t)&&(s=t,l=e),be(e)&&(s=e,l=t);for(var c=s?s===t:t.length>e.length,h=s?we(l,s):we(c?e:t,[c?t:e]),f=0,g=0;g<h.length;g++)f+=h[g].many.length;var p=0;for(g=0;g<h.length;g++)v(h[g],c,p,f),p+=h[g].many.length}}function v(t,e,r,a,o){var s=t.many,l=t.one;if(1!==s.length||o)for(var c=D({dividePath:Ce[n],individualDelay:u&&function(t,e,n,i){return u(t+r,a)}},d),h=e?function(t,e,n){var r=[];!function t(e){for(var n=0;n<e.length;n++){var a=e[n];pe(a)?t(a.childrenRef()):a instanceof rt&&r.push(a)}}(t);var a=r.length;if(!a)return{fromIndividuals:[],toIndividuals:[],count:0};var i=(n.dividePath||Ie)({path:e,count:a});if(i.length!==a)return console.error("Invalid morphing: unmatched splitted path"),{fromIndividuals:[],toIndividuals:[],count:0};r=Se(r),i=Se(i);for(var o=n.done,s=n.during,l=n.individualDelay,u=new at,d=0;d<a;d++){var c=r[d],h=i[d];h.parent=e,h.copyTransform(u),l||Me(c,h)}function f(t){for(var e=0;e<i.length;e++)i[e].addSelfToZr(t)}function g(){e.__isCombineMorphing=!1,e.__morphT=-1,e.childrenRef=null,xe(e,"addSelfToZr"),xe(e,"removeSelfFromZr")}e.__isCombineMorphing=!0,e.childrenRef=function(){return i},ye(e,"addSelfToZr",{after:function(t){f(t)}}),ye(e,"removeSelfFromZr",{after:function(t){for(var e=0;e<i.length;e++)i[e].removeSelfFromZr(t)}});var p=i.length;if(l){var v=p,y=function(){0==--v&&(g(),o&&o())};for(d=0;d<p;d++){var x=l?D({delay:(n.delay||0)+l(d,p,r[d],i[d]),done:y},n):n;Ae(r[d],i[d],x)}}else e.__morphT=0,e.animateTo({__morphT:1},D({during:function(t){for(var n=0;n<p;n++){var r=i[n];r.__morphT=e.__morphT,r.dirtyShape()}s&&s(t)},done:function(){g();for(var e=0;e<t.length;e++)xe(t[e],"updateTransform");o&&o()}},n));return e.__zr&&f(e.__zr),{fromIndividuals:r,toIndividuals:i,count:p}}(s,l,c):function(t,e,n){var r=e.length,a=[],i=n.dividePath||Ie;if(pe(t)){!function t(e){for(var n=0;n<e.length;n++){var r=e[n];pe(r)?t(r.childrenRef()):r instanceof rt&&a.push(r)}}(t.childrenRef());var o=a.length;if(o<r)for(var s=0,l=o;l<r;l++)a.push($(a[s++%o]));a.length=r}else{a=i({path:t,count:r});var u=t.getComputedTransform();for(l=0;l<a.length;l++)a[l].setLocalTransform(u);if(a.length!==r)return console.error("Invalid morphing: unmatched splitted path"),{fromIndividuals:[],toIndividuals:[],count:0}}a=Se(a),e=Se(e);var d=n.individualDelay;for(l=0;l<r;l++){var c=d?D({delay:(n.delay||0)+d(l,r,a[l],e[l])},n):n;Ae(a[l],e[l],c)}return{fromIndividuals:a,toIndividuals:e,count:e.length}}(l,s,c),f=h.fromIndividuals,g=h.toIndividuals,p=f.length,y=0;y<p;y++)x=u?D({delay:u(y,p)},d):d,i(f[y],g[y],e?s[y]:t.one,e?t.one:s[y],x);else{var x,m=e?s[0]:l,M=e?l:s[0];pe(m)?v({many:[m],one:M},!0,r,a,!0):(Ae(m,M,x=u?D({delay:u(r,a)},d):d),i(m,M,m,M,x))}}}function Pe(t){if(!t)return[];if(M(t)){for(var e=[],n=0;n<t.length;n++)e.push(Pe(t[n]));return e}var r=[];return t.traverse((function(t){t instanceof rt&&!t.disableMorphing&&!t.invisible&&!t.ignore&&r.push(t)})),r}var ke=y();function Le(t){var e=[];return A(t,(function(t){var n=t.data;if(!(n.count()>1e4))for(var r=n.getIndices(),a=function(t){for(var e=t.dimensions,n=0;n<e.length;n++){var r=t.getDimensionInfo(e[n]);if(r&&0===r.otherDims.itemGroupId)return e[n]}}(n),i=0;i<r.length;i++)e.push({data:n,dim:t.dim||a,divide:t.divide,dataIndex:i})})),e}function De(t,e,n){t.traverse((function(t){t instanceof rt&&dt(t,{style:{opacity:0}},e,{dataIndex:n,isFrom:!0})}))}function Ee(t){if(t.parent){var e=t.getComputedTransform();t.setLocalTransform(e),t.parent.remove(t)}}function Re(t){t.stopAnimation(),t.isGroup&&t.traverse((function(t){t.stopAnimation()}))}function ze(t,e,n){var r=Le(t),a=Le(e);function i(t,e,n,r,a){(n||t)&&e.animateFrom({style:n&&n!==t?ft(ft({},n.style),t.style):t.style},a)}function o(t){for(var e=0;e<t.length;e++)if(t[e].dim)return t[e].dim}var s=o(r),l=o(a),u=!1;function d(t,e){return function(n){var r=n.data,a=n.dataIndex;if(e)return r.getId(a);var i=r.hostModel&&r.hostModel.get("dataGroupId"),o=t?s||l:l||s,u=o&&r.getDimensionInfo(o),d=u&&u.ordinalMeta;if(u){var c=r.get(u.name,a);return d&&d.categories[c]||c+""}var h=r.getRawDataItem(a);return h&&h.groupId?h.groupId+"":i||r.getId(a)}}var c=function(t,e){var n=t.length;if(n!==e.length)return!1;for(var r=0;r<n;r++){var a=t[r],i=e[r];if(a.data.getId(a.dataIndex)!==i.data.getId(i.dataIndex))return!1}return!0}(r,a),h={};if(!c)for(var f=0;f<a.length;f++){var g=a[f],p=g.data.getItemGraphicEl(g.dataIndex);p&&(h[p.id]=!0)}function v(t,e){var n=r[e],o=a[t],s=o.data.hostModel,l=n.data.getItemGraphicEl(n.dataIndex),d=o.data.getItemGraphicEl(o.dataIndex);l!==d?l&&h[l.id]||d&&(Re(d),l?(Re(l),Ee(l),u=!0,_e(Pe(l),Pe(d),o.divide,s,t,i)):De(d,s,t)):d&&function(t,e,n){var r=it("update",n,e);r&&t.traverse((function(t){if(t instanceof ct){var e=ht(t);e&&t.animateFrom({style:e},r)}}))}(d,o.dataIndex,s)}new lt(r,a,d(!0,c),d(!1,c),null,"multiple").update(v).updateManyToOne((function(t,e){var n=a[t],o=n.data,s=o.hostModel,l=o.getItemGraphicEl(n.dataIndex),d=V(b(e,(function(t){return r[t].data.getItemGraphicEl(r[t].dataIndex)})),(function(t){return t&&t!==l&&!h[t.id]}));l&&(Re(l),d.length?(A(d,(function(t){Re(t),Ee(t)})),u=!0,_e(Pe(d),Pe(l),n.divide,s,t,i)):De(l,s,n.dataIndex))})).updateOneToMany((function(t,e){var n=r[e],o=n.data.getItemGraphicEl(n.dataIndex);if(!o||!h[o.id]){var s=V(b(t,(function(t){return a[t].data.getItemGraphicEl(a[t].dataIndex)})),(function(t){return t&&t!==o})),l=a[t[0]].data.hostModel;s.length&&(A(s,(function(t){return Re(t)})),o?(Re(o),Ee(o),u=!0,_e(Pe(o),Pe(s),n.divide,l,t[0],i)):A(s,(function(e){return De(e,l,t[0])})))}})).updateManyToMany((function(t,e){new lt(e,t,(function(t){return r[t].data.getId(r[t].dataIndex)}),(function(t){return a[t].data.getId(a[t].dataIndex)})).update((function(n,r){v(t[n],e[r])})).execute()})).execute(),u&&A(e,(function(t){var e=t.data.hostModel,r=e&&n.getViewOfSeriesModel(e),a=it("update",e,0);r&&e.isAnimationEnabled()&&a&&a.duration>0&&r.group.traverse((function(t){t instanceof rt&&!t.animators.length&&t.animateFrom({style:{opacity:0}},a)}))}))}function Ge(t){var e=t.getModel("universalTransition").get("seriesKey");return e||t.id}function Be(t){return M(t)?t.sort().join(","):t}function We(t){if(t.hostModel)return t.hostModel.getModel("universalTransition").get("divideShape")}function Fe(t,e){for(var n=0;n<t.length;n++)if(null!=e.seriesIndex&&e.seriesIndex===t[n].seriesIndex||null!=e.seriesId&&e.seriesId===t[n].id)return n}}}}));
