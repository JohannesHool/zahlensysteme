(this.webpackJsonpzahlensysteme=this.webpackJsonpzahlensysteme||[]).push([[0],{38:function(e,t,s){},79:function(e,t,s){},96:function(e,t,s){"use strict";s.r(t);var c=s(0),i=s(1),n=s.n(i),a=s(7),l=s.n(a),r=(s(38),s(18)),d=s(19),j=s(22),h=s(20),o=(s(39),s(31)),b=s(11),x=s(5),m=s(32),u=s(9),p=s.n(u),v=s(99),O=s(21),f=(s(79),[{label:"Dezimal     \u2192 Dezimal",value:[10,10]},{label:"Dezimal     \u2192 Bin\xe4r",value:[10,2]},{label:"Bin\xe4r       \u2192 Dezimal",value:[2,10]},{label:"Dezimal     \u2192 Oktal",value:[10,8]},{label:"Oktal       \u2192 Dezimal",value:[8,10]},{label:"Dezimal     \u2192 Hexadezimal",value:[10,16]},{label:"Hexadezimal \u2192 Dezimal",value:[16,10]}]),g=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).changeConversionHandler=function(e){c.state.input;c.setState({conversionSettings:e.value,inputDisabled:!1,inputConverted:0,input:0}),document.getElementById("number-input").value=0},c.changeInputHandler=function(e){c.setState({input:c.readAsDec(e.target.value,c.state.conversionSettings[0]),inputConverted:c.convert(c.readAsDec(e.target.value,c.state.conversionSettings[0]),c.state.conversionSettings[1])})},c.readAsDec=function(e,t){var s=parseInt(e,t);return s.toString(t).replace(/^0+/,"")===e.replace(/^0+/,"")?s:NaN},c.convert=function(e,t){return e===e?e.toString(t):""},c.increase=function(){var e=c.state.input+1;c.setState({input:e,inputConverted:c.convert(e,c.state.conversionSettings[1])}),document.getElementById("number-input").value=c.convert(e,c.state.conversionSettings[0])},c.decrease=function(){var e=c.state.input-1;c.setState({input:e,inputConverted:c.convert(e,c.state.conversionSettings[1])}),document.getElementById("number-input").value=c.convert(e,c.state.conversionSettings[0])},c.multiply_2=function(){var e=2*c.state.input;c.setState({input:e,inputConverted:c.convert(e,c.state.conversionSettings[1])}),document.getElementById("number-input").value=c.convert(e,c.state.conversionSettings[0])},c.multiply_10=function(){var e=10*c.state.input;c.setState({input:e,inputConverted:c.convert(e,c.state.conversionSettings[1])}),document.getElementById("number-input").value=c.convert(e,c.state.conversionSettings[0])},c.getNonDecimalNumber=function(){return 10===c.state.conversionSettings[0]?[c.state.inputConverted,c.state.conversionSettings[1]]:[c.convert(parseInt(c.state.inputConverted),c.state.conversionSettings[0]),c.state.conversionSettings[0]]},c.state={conversionSettings:"",input:"",inputConverted:"",inputDisabled:!0},c}return Object(d.a)(s,[{key:"render",value:function(){return Object(c.jsx)(o.a,{children:Object(c.jsx)(b.a,{children:Object(c.jsxs)(x.a,{lg:12,className:"center-bar",children:[Object(c.jsxs)("div",{className:"text-right",children:["Contact: ",Object(c.jsx)("a",{href:"mailto:hooljohannes@gmail.com",children:"Johannes Hool"})]}),Object(c.jsx)("div",{className:"title-container",children:Object(c.jsx)("h1",{children:"Zahlensysteme"})}),Object(c.jsxs)(b.a,{children:[Object(c.jsxs)(x.a,{md:4,children:[Object(c.jsx)("div",{className:"title-container",children:Object(c.jsx)("h4",{children:"Umrechnung von ... zu ..."})}),Object(c.jsx)(m.a,{options:f,placeholder:"W\xe4hle Zahlensysteme",onChange:this.changeConversionHandler})]}),Object(c.jsxs)(x.a,{md:4,children:[Object(c.jsx)("div",{className:"title-container",children:Object(c.jsx)("h4",{children:"Eingabe"})}),Object(c.jsx)("input",{id:"number-input",className:"form-control text-center big-text",type:"text",disabled:this.state.inputDisabled,onChange:this.changeInputHandler}),Object(c.jsx)(v.a,{color:"outline-success",className:"button-with-space",onClick:this.multiply_10,children:"*10"}),Object(c.jsx)(v.a,{color:"outline-success",className:"button-with-space",onClick:this.multiply_2,children:"*2"}),Object(c.jsx)(v.a,{color:"outline-success",className:"button-with-space",onClick:this.decrease,children:"-1"}),Object(c.jsx)(v.a,{color:"outline-success",className:"button-with-space",onClick:this.increase,children:"+1"})]}),Object(c.jsxs)(x.a,{md:4,children:[Object(c.jsx)("div",{className:"title-container",children:Object(c.jsx)("h4",{children:"Resultat"})}),Object(c.jsx)("div",{id:"result-box",className:"text-centered big-text",children:Object(c.jsx)("b",{children:this.state.inputConverted})})]})]}),Object(c.jsx)(N,{number:this.getNonDecimalNumber()[0],radix:this.getNonDecimalNumber()[1]})]})})})}}]),s}(n.a.Component),N=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var i;return Object(r.a)(this,s),(i=t.call(this,e)).chiffreValues=function(e){var t="Bin\xe4r";8==i.props.radix&&(t="Oktal"),16==i.props.radix&&(t="Hexadezimal");for(var s=[],n=0,a=0;a<e.length;a++){var l=Math.pow(i.props.radix,e.length-1-a),r=parseInt(e[a],16),d={color:"black",borderColor:"black",fontWeight:"bold"};n+=r*l,0===r&&(d.color="grey",d.borderColor="lightgrey",d.fontWeight="normal"),16===i.props.radix?(s.push(Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"chiffre-white",style:{fontWeight:"bold"},children:e[a]}),Object(c.jsx)("div",{className:"chiffre-dec",children:r}),Object(c.jsx)("div",{className:"sign",children:"*"}),Object(c.jsxs)("div",{className:"chiffre",style:d,"data-tip":!0,"data-for":"tooltip_"+a,children:[Object(c.jsx)(p.a,{maxFontSize:20,widthOnly:!0,children:l}),Object(c.jsx)(O.a,{id:"tooltip_"+a,place:"bottom",type:"success",effect:"solid",children:Object(c.jsxs)("p",{children:[l,"=",i.props.radix,Object(c.jsx)("sup",{children:e.length-a-1})]})})]}),Object(c.jsx)("div",{className:"sign",children:"="}),Object(c.jsx)("div",{className:"chiffre",style:d,children:Object(c.jsx)(p.a,{maxFontSize:20,widthOnly:!0,children:l*r})})]})),e.length>1&&a<e.length-1&&s.push(Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"chiffre-white",style:d}),Object(c.jsx)("div",{className:"chiffre-dec",style:d}),Object(c.jsx)("div",{className:"chiffre-placeholder"}),Object(c.jsx)("div",{className:"chiffre-placeholder",style:d}),Object(c.jsx)("div",{className:"chiffre-placeholder"}),Object(c.jsx)("div",{className:"chiffre-placeholder",children:"+"})]})),a==e.length-1&&s.push(Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"chiffre-placeholder",style:d}),Object(c.jsx)("div",{className:"chiffre-dec",style:d}),Object(c.jsx)("div",{className:"chiffre-placeholder"}),Object(c.jsx)("div",{className:"chiffre-placeholder",style:d}),Object(c.jsx)("div",{className:"chiffre-placeholder"}),Object(c.jsx)("div",{className:"chiffre-white",children:"="})]}))):(s.push(Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"chiffre-white",style:{fontWeight:"bold"},children:e[a]}),Object(c.jsx)("div",{className:"sign",children:"*"}),Object(c.jsxs)("div",{className:"chiffre",style:d,"data-tip":!0,"data-for":"tooltip_"+a,children:[Object(c.jsx)(p.a,{maxFontSize:20,widthOnly:!0,children:l}),Object(c.jsx)(O.a,{id:"tooltip_"+a,place:"bottom",type:"success",effect:"solid",children:Object(c.jsxs)("p",{children:[l,"=",i.props.radix,Object(c.jsx)("sup",{children:e.length-a-1})]})})]}),Object(c.jsx)("div",{className:"sign",children:"="}),Object(c.jsx)("div",{className:"chiffre",style:d,children:Object(c.jsx)(p.a,{maxFontSize:20,widthOnly:!0,children:l*r})})]})),e.length>1&&a<e.length-1&&s.push(Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"chiffre-white",style:d}),Object(c.jsx)("div",{className:"chiffre-placeholder"}),Object(c.jsx)("div",{className:"chiffre-placeholder",style:d}),Object(c.jsx)("div",{className:"chiffre-placeholder"}),Object(c.jsx)("div",{className:"chiffre-placeholder",children:"+"})]})),a==e.length-1&&s.push(Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"chiffre-placeholder",style:d}),Object(c.jsx)("div",{className:"chiffre-placeholder"}),Object(c.jsx)("div",{className:"chiffre-placeholder",style:d}),Object(c.jsx)("div",{className:"chiffre-placeholder"}),Object(c.jsx)("div",{className:"chiffre-white",children:"="})]})))}return 16===i.props.radix?(s.unshift(Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"row-name",children:Object(c.jsxs)("b",{children:["Ziffernwerte (",t,")"]})}),Object(c.jsx)("div",{className:"row-name",style:{marginTop:"40px",color:"lightgrey"},children:Object(c.jsx)("b",{children:"Ziffernwerte (Dezimal)"})}),Object(c.jsx)("div",{className:"row-name"}),Object(c.jsx)("div",{className:"row-name",children:Object(c.jsx)("b",{children:"Stellenwerte (Dezimal)"})}),Object(c.jsx)("div",{className:"row-name"}),Object(c.jsx)("div",{className:"row-name",children:Object(c.jsx)("b",{children:"Resultat (Dezimal)"})})]})),s.push(Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"chiffre-placeholder"}),Object(c.jsx)("div",{className:"chiffre-dec"}),Object(c.jsx)("div",{className:"chiffre-placeholder"}),Object(c.jsx)("div",{className:"chiffre-placeholder"}),Object(c.jsx)("div",{className:"chiffre-placeholder"}),Object(c.jsx)("div",{className:"chiffre-white",style:{width:"150px"},children:Object(c.jsx)(p.a,{maxFontSize:20,widthOnly:!0,children:Object(c.jsx)("b",{children:n})})})]}))):(s.unshift(Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"row-name",children:Object(c.jsxs)("b",{children:["Ziffernwerte (",t,")"]})}),Object(c.jsx)("div",{className:"row-name"}),Object(c.jsx)("div",{className:"row-name",children:Object(c.jsx)("b",{children:"Stellenwerte (Dezimal)"})}),Object(c.jsx)("div",{className:"row-name"}),Object(c.jsx)("div",{className:"row-name",children:Object(c.jsx)("b",{children:"Resultat (Dezimal)"})})]})),s.push(Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"chiffre-placeholder"}),Object(c.jsx)("div",{className:"chiffre-placeholder"}),Object(c.jsx)("div",{className:"chiffre-placeholder"}),Object(c.jsx)("div",{className:"chiffre-placeholder"}),Object(c.jsx)("div",{className:"chiffre-white",style:{width:"150px"},children:Object(c.jsx)(p.a,{maxFontSize:20,widthOnly:!0,children:Object(c.jsx)("b",{children:n})})})]}))),s},i.result=function(e){for(var t=[],s=0,n=0;n<e.length;n++){var a=Math.pow(i.props.radix,e.length-1-n),l=parseInt(e[n],16);t.push(Object(c.jsx)("span",{children:a*l})),t.push(Object(c.jsx)("span",{children:"+"})),s+=a*l}return t.pop(),t.push(Object(c.jsx)("span",{children:"="})),t.push(Object(c.jsx)("span",{style:{fontWeight:"bold"},children:s})),t},i.convert=function(e){for(var t=0,s=e.length-1;s>=0;s--){t+=Math.pow(i.props.radix,e.length-1-s)*parseInt(e[s],16)}return t},i}return Object(d.a)(s,[{key:"render",value:function(){return console.log(this.props.number,this.props.radix),""===this.props.number||void 0==this.props.number?Object(c.jsx)(x.a,{md:12}):Object(c.jsxs)(x.a,{md:12,children:[Object(c.jsx)(b.a,{children:Object(c.jsx)(x.a,{md:12,children:Object(c.jsx)("div",{className:"title-container-faded",children:Object(c.jsx)("h3",{children:"Herleitung"})})})}),Object(c.jsxs)(b.a,{children:[Object(c.jsx)(x.a,{md:1}),Object(c.jsxs)(x.a,{md:11,className:"text-center margin-bottom",children:["Umrechnung von ",Object(c.jsxs)("b",{children:[this.props.number,Object(c.jsx)("sub",{children:this.props.radix})]})," in ",Object(c.jsxs)("b",{children:[this.convert(this.props.number),Object(c.jsx)("sub",{children:"10"})]})]})]}),Object(c.jsx)(b.a,{children:Object(c.jsx)("div",{className:"no-stack",children:this.chiffreValues(this.props.number)})})]})}}]),s}(n.a.Component),y=g,w=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,100)).then((function(t){var s=t.getCLS,c=t.getFID,i=t.getFCP,n=t.getLCP,a=t.getTTFB;s(e),c(e),i(e),n(e),a(e)}))};l.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),w()}},[[96,1,2]]]);
//# sourceMappingURL=main.60187dac.chunk.js.map