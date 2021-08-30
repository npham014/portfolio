(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{66:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(7),s=n.n(c),r=n(21),o=(n(66),n(107)),l=n(109),d=n(111),h=n(54),j=n.n(h),b=n(110),m=n(114),p=n(80),u=n(105),O=n(115),x=n(116),f=n(112),v=n(53),g=n.n(v),N=n(2),w=Object(u.a)((function(e){return{popover:{pointerEvents:"none"},paper:{padding:e.spacing(1)}}}));function k(){var e=w(),t=a.a.useState(null),n=Object(r.a)(t,2),i=n[0],c=n[1],s=a.a.useState(null),h=Object(r.a)(s,2),u=h[0],v=h[1],k=a.a.useState(!1),y=Object(r.a)(k,2),S=y[0],C=y[1],I=function(e,t){c(e.target),v(t)},R=function(){c(null),v(null)};return Object(N.jsx)("div",{className:"navbar",children:Object(N.jsxs)("div",{className:"wrapper",children:[Object(N.jsxs)("div",{className:"left",children:[Object(N.jsx)("a",{href:"#about",className:"logo",children:"Nathan Pham"}),Object(N.jsxs)("div",{className:"itemContainer",children:[Object(N.jsx)(o.a,{className:"icon",onMouseEnter:function(e){I(e,"phonePopover")},onMouseLeave:R}),Object(N.jsx)(m.a,{id:"phonePopover",className:e.popover,classes:{paper:e.paper},open:"phonePopover"===u,anchorEl:i,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:R,disableRestoreFocus:!0,children:Object(N.jsx)(p.a,{children:"+1-(626)-800-7175"})})]}),Object(N.jsxs)("div",{className:"itemContainer",children:[Object(N.jsx)(l.a,{className:"icon",onMouseEnter:function(e){I(e,"mailPopover")},onMouseLeave:R}),Object(N.jsx)(m.a,{id:"mailPopover",className:e.popover,classes:{paper:e.paper},open:"mailPopover"===u,anchorEl:i,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:R,disableRestoreFocus:!0,children:Object(N.jsx)(p.a,{children:"natpham014@gmail.com"})})]}),Object(N.jsx)("div",{className:"itemContainer",children:Object(N.jsx)(b.a,{href:"https://www.linkedin.com/in/nathan-pham-186a2b14b/",target:"_blank",children:Object(N.jsx)(d.a,{className:"liIcon"})})}),Object(N.jsx)("div",{className:"itemContainer",children:Object(N.jsx)(b.a,{href:"https://github.com/npham014",target:"_blank",children:Object(N.jsx)(g.a,{className:"gitIcon"})})})]}),Object(N.jsx)("div",{className:"right",children:Object(N.jsxs)(b.a,{className:"menuButton",onClick:function(e){C(!S),c(e.target)},children:[Object(N.jsxs)(O.a,{id:"hamNavMenu",anchorEl:i,open:S,keepMounted:!0,onClose:function(){c(null),C(!1)},children:[Object(N.jsx)(x.a,{component:f.a,href:"#about",children:"About"}),Object(N.jsx)(x.a,{component:f.a,href:"#desc",children:"Description"}),Object(N.jsx)(x.a,{component:f.a,href:"#projects",children:"Projects"}),Object(N.jsx)(x.a,{component:f.a,href:"#testimonials",children:"Recommendations"})]}),Object(N.jsx)(j.a,{className:"icon"})]})})]})})}n(72);var y=n(55);function S(){var e=Object(i.useRef)();return Object(i.useEffect)((function(){Object(y.a)(e.current,{showCursor:!0,backDelay:700,backSpeed:50,strings:["Software Engineer","Full-Stack Developer","Senior Intern"]})}),[]),Object(N.jsxs)("div",{className:"about",id:"about",children:[Object(N.jsx)("div",{className:"left",children:Object(N.jsx)("div",{className:"imgContainer",children:Object(N.jsx)("img",{src:"assets/old_headshot.png",alt:"Headshot of Me!"})})}),Object(N.jsx)("div",{className:"right",children:Object(N.jsxs)("div",{className:"wrapper",children:[Object(N.jsx)("h2",{children:"Hi There, I'm"}),Object(N.jsx)("h1",{children:"Nathan Pham:"}),Object(N.jsxs)("h3",{children:["Freelance ",Object(N.jsx)("span",{ref:e})]})]})})]})}n(73),n(74);function C(e){var t=e.active,n=e.title,i=e.setSelected,a=e.id;return Object(N.jsx)("li",{className:t?"projectItem active":"projectItem",onClick:function(){return i(a)},children:n})}var I=[{id:1,title:"Belch: A Restaurant Review App",img:"https://i.imgur.com/XhhI1yj.png",link:"https://npham014-belch.netlify.app/"}],R=[{id:1,title:"Belch: A Restaurant Review App",img:"https://i.imgur.com/XhhI1yj.png",link:"https://npham014-belch.netlify.app/"}],M=[],P=[],A=[{id:1,name:"Erik Eppel",testimonial:"Despite not having any prior cloud computing or JavaScript experience, Nathan hit the ground running as a software engineering intern on my team and implemented some critical functions in his short time at Beautycounter. When laying out a new task for him, I always gave Nathan the chance to work things through himself first or pair program, and to my delight, he always eagerly chose the former. \n With that said, he didn't hesitate to call on me when he'd exhausted all options and needed some help getting unblocked. In my opinion, this combination of grit and prudent time sensitivity is exactly what you want to see in engineers at any stage of their career, and Nathan already exhibits it naturally. Given the opportunity, I would definitely hire Nathan in the future and am excited to see where his burgeoning career takes him.",pos:"Former Manager at Beautycounter"}];function E(){var e=a.a.useState("1"),t=Object(r.a)(e,2),n=t[0],i=t[1],c=a.a.useState([]),s=Object(r.a)(c,2),o=s[0],l=s[1];return a.a.useEffect((function(){switch(n){case"1":l(I);break;case"2":l(R);break;case"3":l(M);break;case"4":l(P);break;default:l(I)}}),[n]),Object(N.jsxs)("div",{className:"projects",id:"projects",children:[Object(N.jsx)("h1",{children:"Projects"}),Object(N.jsx)("ul",{children:[{id:"1",title:"Featured"},{id:"2",title:"Web Apps"},{id:"3",title:"Mobile Apps"},{id:"4",title:"Other Projects"}].map((function(e){return Object(N.jsx)(C,{id:e.id,title:e.title,active:n===e.id,setSelected:i})}))}),Object(N.jsx)("div",{className:"container",children:o.map((function(e){return Object(N.jsxs)(f.a,{className:"item",href:e.link,target:"_blank",children:[Object(N.jsx)("img",{src:e.img,alt:"thumbnail of website"}),Object(N.jsx)("h3",{children:e.title})]})}))})]})}n(75);function D(){return Object(N.jsxs)("div",{className:"testimonials",id:"testimonials",children:[Object(N.jsx)("h1",{children:"Recommendations"}),Object(N.jsx)("div",{className:"container",children:A.map((function(e){return Object(N.jsxs)("div",{className:"card",children:[Object(N.jsx)("div",{className:"top",children:e.testimonial}),Object(N.jsxs)("div",{className:"bottom",children:[Object(N.jsx)("h3",{children:e.name}),Object(N.jsx)("h4",{children:e.pos})]})]})}))})]})}n(76);var F=n(113);function B(){return Object(N.jsxs)("div",{className:"description",id:"desc",children:[Object(N.jsx)("h1",{children:"About Me"}),Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)("div",{className:"top",children:Object(N.jsx)("h2",{children:"I'm Nathan Pham, a software designer and developer living in Los Angeles, California. I'm currently focused on developing web applications, but work on mobile apps and games as a hobby. I graduated from UC Riverside with a degree in Computer Science, and have experience working with production level web applications with cloud technologies. Outside of work, I like to play and design video/tabletop games, snowboard, and cook."})}),Object(N.jsxs)("div",{className:"bottom",children:[Object(N.jsxs)("div",{className:"botLeft",children:[Object(N.jsx)("h2",{children:"Technical Skills:"}),Object(N.jsxs)("ul",{children:[Object(N.jsx)("li",{children:"Javascript/Typescript"}),Object(N.jsx)("li",{children:"HTML/CSS/SASS"}),Object(N.jsx)("li",{children:"React, Redux, Material-UI"}),Object(N.jsx)("li",{children:"C++"}),Object(N.jsx)("li",{children:"Git"}),Object(N.jsx)("li",{children:"Cloud Platforms: AWS, GCP/Firebase, Azure"}),Object(N.jsx)("li",{children:"Databases: MongoDB, Firestore"}),Object(N.jsx)("li",{children:"RESTful APIs"}),Object(N.jsx)("li",{children:"SCRUM and Agile work-flow"})]})]}),Object(N.jsxs)("div",{className:"botRight",children:[Object(N.jsx)("h2",{children:"My Resume"}),Object(N.jsx)("h3",{children:"Want to see more details? Download my resume:"}),Object(N.jsx)(F.a,{onClick:function(){var e=document.createElement("a");e.download="Resume.pdf",e.href="./assets/Resume.pdf",e.click()},variant:"contained",color:"primary",className:"button",children:"Download"})]})]})]})]})}n(77);var z=function(){return Object(N.jsxs)("div",{className:"app",children:[Object(N.jsx)(k,{}),Object(N.jsxs)("div",{className:"sections",children:[Object(N.jsx)(S,{id:"about"}),Object(N.jsx)(B,{id:"desc"}),Object(N.jsx)(E,{id:"projects"}),Object(N.jsx)(D,{id:"testimonials"})]})]})};s.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(z,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.f581942b.chunk.js.map