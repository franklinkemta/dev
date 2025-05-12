"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([["807"],{2689:function(t,e,a){a.d(e,{diagram:function(){return C}});var r=a(7684),l=a(2696),o=a(1559),i=a(5587),n=a(3194),c={packet:[]},s=structuredClone(c),d=i.vZ.packet,k=(0,i.eW)(()=>{let t=(0,l.Rb)({...d,...(0,i.iE)().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),p=(0,i.eW)(()=>s.packet,"getPacket"),b={pushWord:(0,i.eW)(t=>{t.length>0&&s.packet.push(t)},"pushWord"),getPacket:p,getConfig:k,clear:(0,i.eW)(()=>{(0,i.ZH)(),s=structuredClone(c)},"clear"),setAccTitle:i.GN,getAccTitle:i.eu,setDiagramTitle:i.g2,getDiagramTitle:i.Kr,getAccDescription:i.Mx,setAccDescription:i.U$},g=(0,i.eW)(t=>{(0,r.A)(t,b);let e=-1,a=[],l=1,{bitsPerRow:o}=b.getConfig();for(let{start:r,end:n,label:c}of t.blocks){if(n&&n<r)throw Error(`Packet block ${r} - ${n} is invalid. End must be greater than start.`);if(r!==e+1)throw Error(`Packet block ${r} - ${n??r} is not contiguous. It should start from ${e+1}.`);for(e=n??r,i.cM.debug(`Packet block ${r} - ${e} with label ${c}`);a.length<=o+1&&b.getPacket().length<1e4;){let[t,e]=f({start:r,end:n,label:c},l,o);if(a.push(t),t.end+1===l*o&&(b.pushWord(a),a=[],l++),!e)break;({start:r,end:n,label:c}=e)}}b.pushWord(a)},"populate"),f=(0,i.eW)((t,e,a)=>{if(void 0===t.end&&(t.end=t.start),t.start>t.end)throw Error(`Block start ${t.start} is greater than block end ${t.end}.`);return t.end+1<=e*a?[t,void 0]:[{start:t.start,end:e*a-1,label:t.label},{start:e*a,end:t.end,label:t.label}]},"getNextFittingBlock"),h={parse:(0,i.eW)(async t=>{let e=await (0,n.Qc)("packet",t);i.cM.debug(e),g(e)},"parse")},u=(0,i.eW)((t,e,a,r)=>{let l=r.db,n=l.getConfig(),{rowHeight:c,paddingY:s,bitWidth:d,bitsPerRow:k}=n,p=l.getPacket(),b=l.getDiagramTitle(),g=c+s,f=g*(p.length+1)-(b?0:c),h=d*k+2,u=(0,o.P)(e);for(let[t,e]of(u.attr("viewbox",`0 0 ${h} ${f}`),(0,i.v2)(u,f,h,n.useMaxWidth),p.entries()))x(u,e,t,n);u.append("text").text(b).attr("x",h/2).attr("y",f-g/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),x=(0,i.eW)((t,e,a,{rowHeight:r,paddingX:l,paddingY:o,bitWidth:i,bitsPerRow:n,showBits:c})=>{let s=t.append("g"),d=a*(r+o)+o;for(let t of e){let e=t.start%n*i+1,a=(t.end-t.start+1)*i-l;if(s.append("rect").attr("x",e).attr("y",d).attr("width",a).attr("height",r).attr("class","packetBlock"),s.append("text").attr("x",e+a/2).attr("y",d+r/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(t.label),!c)continue;let o=t.end===t.start,k=d-2;s.append("text").attr("x",e+(o?a/2:0)).attr("y",k).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",o?"middle":"start").text(t.start),o||s.append("text").attr("x",e+a).attr("y",k).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(t.end)}},"drawWord"),$={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},C={parser:h,db:b,renderer:{draw:u},styles:(0,i.eW)(({packet:t}={})=>{let e=(0,l.Rb)($,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles")}}}]);