(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{141:function(e,t,a){},142:function(e,t,a){},161:function(e,t,a){e.exports=a(203)},169:function(e,t,a){},170:function(e,t,a){},203:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(28),c=a.n(i),l=(a(169),a(1)),r=a(2),o=a(6),m=a(5),u=a(7),d=a(113),p=a.n(d),h=(a(170),a(79)),f=a(124),b=a(137),E=a.n(b),v={fps_limit:60,interactivity:{detect_on:"canvas",events:{onclick:{enable:!0,mode:"push"},onhover:{enable:!0,mode:"attract",parallax:{enable:!1,force:60,smooth:10}},resize:!0},modes:{push:{quantity:4},attract:{distance:200,duration:.4,factor:5}}},particles:{color:{value:"#ffffff"},line_linked:{color:"#ffffff",distance:150,enable:!0,opacity:.4,width:1},move:{attract:{enable:!1,rotateX:600,rotateY:1200},bounce:!1,direction:"none",enable:!0,out_mode:"out",random:!1,speed:2,straight:!1},number:{density:{enable:!0,value_area:800},value:80},opacity:{anim:{enable:!1,opacity_min:.1,speed:1,sync:!1},random:!1,value:.5},shape:{character:{fill:!1,font:"Verdana",style:"",value:"*",weight:"400"},image:{height:100,replace_color:!0,src:"images/github.svg",width:100},polygon:{nb_sides:5},stroke:{color:"#000000",width:0},type:"circle"},size:{anim:{enable:!1,size_min:.1,speed:40,sync:!1},random:!0,value:5}},polygon:{draw:{enable:!1,lineColor:"#ffffff",lineWidth:.5},move:{radius:10},scale:1,type:"none",url:""},retina_detect:!0},y=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).titles=[],e.state={checked:!1},e.onThemeSwitchChange=e.onThemeSwitchChange.bind(Object(h.a)(Object(h.a)(e))),e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"onThemeSwitchChange",value:function(e){this.setState({checked:e})}},{key:"render",value:function(){var e=this;if(this.props.sharedData){var t=this.props.sharedData.name;this.titles=this.props.sharedData.titles.map(function(e){return[e.toUpperCase(),1500]}).flat()}var a=s.a.memo(function(){return s.a.createElement(f.a,{className:"title-styles",steps:e.titles,loop:50})},function(e,t){return!0});return s.a.createElement("header",{id:"home",style:{height:window.innerHeight,display:"block"}},s.a.createElement("div",{className:"col-md-12"},s.a.createElement(E.a,{options:v,id:"headerParticles"})),s.a.createElement("div",{className:"row aligner",style:{height:"100%"}},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",null,s.a.createElement("span",{className:"iconify header-icon","data-icon":"la:laptop-code","data-inline":"false"}),s.a.createElement("br",null),s.a.createElement("h1",{className:"mb-0"},s.a.createElement(f.a,{steps:[t],wrapper:"p"})),s.a.createElement("div",{className:"title-container"},s.a.createElement(a,null))))))}}]),t}(n.Component),g=a(145),N=a(221),j=a(219),k=a(220),w=a(204),x=a(121),O=a.n(x),S=(a(182),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"col mx-auto"},s.a.createElement("h1",{className:"section-title"},s.a.createElement("span",null,"Contact Form")),s.a.createElement("p",{class:"after-section-title"},"Message me with any questions or if you just want to drop a hello")),s.a.createElement("div",{className:"col mx-auto contact-form"},s.a.createElement("div",{className:"contact-form-submit ui font-trebuchet"},s.a.createElement(N.a,{onSubmit:function(e){e.preventDefault(),g.a.sendForm("service_jtaqkov","template_dy9nac6",e.target,"bw10-tWgbHn6bp-aL").then(function(){O.a.fire({icon:"success",title:"Message Sent Successfully"})},function(e){O.a.fire({icon:"error",title:"Something went wrong",text:e.text})}),e.target.reset()}},s.a.createElement(N.a.Field,{id:"form-input-control-email font-trebuchet",control:j.a,label:"Email",name:"user_email",placeholder:"Email\u2026",required:!0,icon:"mail",iconPosition:"left"}),s.a.createElement(N.a.Field,{id:"form-input-control-last-name",control:j.a,label:"Name",name:"user_name",placeholder:"Name\u2026",required:!0,icon:"user circle",iconPosition:"left"}),s.a.createElement(N.a.Field,{id:"form-textarea-control-opinion",control:k.a,label:"Message",name:"user_message",placeholder:"Message\u2026",required:!0}),s.a.createElement(w.a,{type:"submit",color:"blue"},"Submit")))))}}]),t}(n.Component)),_=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("footer",null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},s.a.createElement(S,null))))}}]),t}(n.Component),B=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){if(this.props.sharedBasicInfo)var e="images/"+this.props.sharedBasicInfo.image;if(this.props.resumeBasicInfo)var t=this.props.resumeBasicInfo.section_name.about,a=this.props.resumeBasicInfo.description_header,n=this.props.resumeBasicInfo.description;return s.a.createElement("section",{id:"about"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h1",{class:"section-title",style:{color:"black"}},s.a.createElement("span",null,t)),s.a.createElement("div",{className:"row center mx-auto mb-5"},s.a.createElement("div",{className:"col-md-4 mb-5 center"},s.a.createElement("div",{className:"polaroid"},s.a.createElement("span",{style:{cursor:"auto"}},s.a.createElement("img",{height:"250px",src:e,alt:"Avatar placeholder"})))),s.a.createElement("div",{className:"col-md-8 center"},s.a.createElement("div",{className:"col-md-10"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-header"},s.a.createElement("span",{className:"iconify","data-icon":"emojione:red-circle","data-inline":"false"})," ","\xa0"," ",s.a.createElement("span",{className:"iconify","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",s.a.createElement("span",{className:"iconify","data-icon":"twemoji:green-circle","data-inline":"false"})),s.a.createElement("div",{className:"card-body font-trebuchet text-justify ml-3 mr-3",style:{height:"auto",fontSize:"132%",lineHeight:"200%"}},s.a.createElement("br",null),s.a.createElement("span",{className:"wave"},a," :) "),s.a.createElement("br",null),s.a.createElement("br",null),n)))))))}}]),t}(n.Component),D=a(115),C=(a(191),a(123)),I=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){if(this.props.resumeExperience&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.experience,t=this.props.resumeExperience.map(function(e,t){var a=e.technologies,n=e.mainTech.map(function(e,t){return s.a.createElement(C.a,{pill:!0,className:"main-badge mr-2 mb-2",key:t},e)}),i=a.map(function(e,t){return s.a.createElement(C.a,{pill:!0,className:"experience-badge mr-2 mb-2",key:t},e)});return s.a.createElement(D.VerticalTimelineElement,{className:"vertical-timeline-element--work font-trebuchet",date:e.years,iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:s.a.createElement("i",{className:"fas fa-map-marker-alt experience-icon"}),key:t},s.a.createElement("div",{style:{textAlign:"left",marginBottom:"4px"}},n),s.a.createElement("h3",{className:"vertical-timeline-element-title",style:{textAlign:"left"}},e.title),s.a.createElement("h4",{className:"vertical-timeline-element-subtitle",style:{textAlign:"left"}},e.company),s.a.createElement("p",{className:"resume-experience font-trebuchet ",style:{whiteSpace:"pre-line"}},e.blurb),s.a.createElement("div",{style:{textAlign:"left",marginTop:"15px"}},i))});return s.a.createElement("section",{id:"resume",className:"pb-5"},s.a.createElement("div",{className:"col-md-12 mx-auto"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h1",{className:"section-title",style:{color:"black"}},s.a.createElement("span",{className:"text-black",style:{textAlign:"center"}},e)))),s.a.createElement("div",{className:"col-md-8 mx-auto"},s.a.createElement(D.VerticalTimeline,null,t,s.a.createElement(D.VerticalTimelineElement,{iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:s.a.createElement("i",{className:"fas fa-hourglass-start mx-auto experience-icon"})}))))}}]),t}(n.Component),T=a(222),A=a(140),F=a.n(A),P=a(141),M=a.n(P),W=a(142),z=a.n(W),q=(a(192),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.technologies,t=this.props.data.images,a=this.props.data.title,n=this.props.data.description,i=this.props.data.url;if(this.props.data.technologies){e.map(function(e,t){return s.a.createElement("li",{className:"list-inline-item mx-3",key:t},s.a.createElement("span",null,s.a.createElement("div",{className:"text-center"},s.a.createElement("i",{className:e.class,style:{fontSize:"300%"}},s.a.createElement("p",{className:"text-center",style:{fontSize:"30%"}},e.name)))))});if(this.props.data.images)var c=t.map(function(e,t){return s.a.createElement("div",{key:t,"data-src":e})})}}return s.a.createElement(T.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"modal-inside"}),s.a.createElement("span",{onClick:this.props.onHide,className:"modal-close"},s.a.createElement("i",{className:"fas fa-times fa-3x close-icon"})),s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"col-md-10 mx-auto",style:{paddingBottom:"50px"}},s.a.createElement("div",{className:"slider-tab"},s.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"emojione:red-circle","data-inline":"false",style:{marginLeft:"5px"}})," ","\xa0"," ",s.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",s.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:green-circle","data-inline":"false"})),s.a.createElement(F.a,{cssModule:[M.a,z.a],animation:"scaleOutAnimation",className:"slider-image"},c)),s.a.createElement("div",{className:"col-md-10 mx-auto"},s.a.createElement("h3",{style:{padding:"5px 5px 0 5px"}},a,i?s.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"link-href"},s.a.createElement("i",{className:"fas fa-external-link-alt",style:{marginLeft:"10px"}})):null),s.a.createElement("p",{className:"modal-description"},n))))}}]),t}(n.Component)),L=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={deps:{},detailsModalShow:!1},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;if(this.props.resumeProjects&&this.props.resumeBasicInfo)var t=this.props.resumeBasicInfo.section_name.projects,a=this.props.resumeProjects.map(function(t){return s.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4",key:t.title,style:{cursor:"pointer"}},s.a.createElement("span",{className:"portfolio-item d-block"},s.a.createElement("div",{className:"foto",onClick:function(){return a=t,void e.setState({detailsModalShow:!0,deps:a});var a}},s.a.createElement("div",null,s.a.createElement("img",{src:t.images[0],alt:"projectImages",height:"230",style:{marginBottom:0,paddingBottom:0,position:"relative"}}),s.a.createElement("span",{className:"project-date"},t.startDate),s.a.createElement("br",null),s.a.createElement("p",{className:"project-title-settings mt-3"},t.title)))))});return s.a.createElement("section",{id:"portfolio"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h1",{className:"section-title",style:{color:"black"}},s.a.createElement("span",null,t)),s.a.createElement("div",{className:"col-md-12 mx-auto"},s.a.createElement("div",{className:"row mx-auto"},a)),s.a.createElement(q,{show:this.state.detailsModalShow,onHide:function(){return e.setState({detailsModalShow:!1})},data:this.state.deps})))}}]),t}(n.Component),H=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){if(this.props.sharedSkills&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.skills,t=this.props.sharedSkills.icons.map(function(e,t){return s.a.createElement("li",{className:"list-inline-item mx-3",key:t},s.a.createElement("span",null,s.a.createElement("div",{className:"text-center skills-tile"},s.a.createElement("i",{className:e.class,style:{fontSize:"220%"}},s.a.createElement("p",{className:"text-center",style:{fontSize:"30%",marginTop:"4px"}},e.name)))))});return s.a.createElement("section",{id:"skills",className:"col-md-12"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h1",{className:"section-title"},s.a.createElement("span",{className:"text-white"},e))),s.a.createElement("div",{className:"col-md-12 text-center"},s.a.createElement("ul",{className:"list-inline mx-auto skill-icon"},t))))}}]),t}(n.Component),R=(a(194),a(144)),U=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){if(this.props.testimonialsFeedback)var e=this.props.testimonialsFeedback.map(function(e,t){var a=e.name,n=e.position,i=e.blurb;return s.a.createElement("div",null,s.a.createElement("div",{className:"myCarousel",key:t},s.a.createElement("h3",null,a),s.a.createElement("h4",null,n),s.a.createElement("p",null,i)))});return s.a.createElement("section",{id:"testimonials"},s.a.createElement("h1",{className:"section-title",style:{color:"black"}},s.a.createElement("span",null,"Testimonials")),s.a.createElement("div",{className:"col-md-12"},s.a.createElement(R.Carousel,{showArrows:!0,infiniteLoop:!0,showThumbs:!1,showStatus:!1,showIndicators:!1,swipeable:!0,autoPlay:!0,interval:6100},e)))}}]),t}(n.Component),V=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this))).state={foo:"bar",resumeData:{},sharedData:{},testimonialsFeedback:{}},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.loadSharedData(),this.loadTestimonials();this.loadResumeFromPath("info.json")}},{key:"loadResumeFromPath",value:function(e){p.a.ajax({url:e,dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,a){alert(a)}})}},{key:"loadSharedData",value:function(){p.a.ajax({url:"portfolio_shared_data.json",dataType:"json",cache:!1,success:function(e){this.setState({sharedData:e}),document.title="".concat(this.state.sharedData.basic_info.name)}.bind(this),error:function(e,t,a){alert(a)}})}},{key:"loadTestimonials",value:function(){p.a.ajax({url:"testimonials.json",dataType:"json",cache:!1,success:function(e){this.setState({testimonialsFeedback:e})}.bind(this),error:function(e,t,a){alert(a)}})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(y,{sharedData:this.state.sharedData.basic_info}),s.a.createElement(B,{resumeBasicInfo:this.state.resumeData.basic_info,sharedBasicInfo:this.state.sharedData.basic_info}),s.a.createElement(U,{testimonialsFeedback:this.state.testimonialsFeedback.testimonials}),s.a.createElement(H,{sharedSkills:this.state.sharedData.skills,resumeBasicInfo:this.state.resumeData.basic_info}),s.a.createElement(I,{resumeExperience:this.state.resumeData.experience,resumeBasicInfo:this.state.resumeData.basic_info}),s.a.createElement(L,{resumeProjects:this.state.resumeData.projects,resumeBasicInfo:this.state.resumeData.basic_info}),s.a.createElement(_,{sharedBasicInfo:this.state.sharedData.basic_info}))}}]),t}(n.Component),J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(201);c.a.render(s.a.createElement(V,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");J?(function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):X(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):X(t,e)})}}()}},[[161,1,2]]]);
//# sourceMappingURL=main.2d71eeeb.chunk.js.map