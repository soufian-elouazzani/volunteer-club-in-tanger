(self.webpackChunkfairfield_programming=self.webpackChunkfairfield_programming||[]).push([[223],{1396:function(e){e.exports={pathPrefix:"/volunteer-club-in-tanger",siteMetadata:{title:"نادي سفراء متطوع",description:"               نادي متطوعي طنجة هو نادي ينشط أساسا في مساعدة الجمعيات في الاعمال التطوعية، حل مشاكل الإجتماعية ، القيام بأنشطة مختلفة تستهدف فئات معينة ، جلب متبرعين بالمال للنادي للمساعدات الإنسانية، مساعدات التنظيمات سواء متل حفلات او مهراجانات او تظاهرة كروية ، والكتير من الأنشطة الأخرى ",author:"@soufian5907",siteUrl:"https://about.fairfieldprogramming.org"},plugins:["gatsby-plugin-postcss","gatsby-plugin-sharp","gatsby-plugin-image","gatsby-transformer-sharp","gatsby-plugin-sitemap",{resolve:"gatsby-plugin-robots-txt",options:{host:!1,sitemap:"https://about.fairfieldprogramming.org/sitemap/sitemap-index.xml",policy:[{userAgent:"*",allow:"/"}]}},{resolve:"gatsby-plugin-manifest",options:{name:"Fairfield Programming Association",short_name:"fpa",start_url:"/",background_color:"#0F006C",theme_color:"#0F006C",display:"minimal-ui",icon:"src/res/favicon.png"}},{resolve:"gatsby-plugin-breadcrumb",options:{defaultCrumb:{location:{pathname:"/"},crumbLabel:"Home",crumbSeparator:" /"}}}]}},6983:function(e,t,a){"use strict";var r=a(4994);t.__esModule=!0,t.default=void 0;var n=r(a(6540)),i=r(a(9344)),l=r(a(2146)),o=a(6052),s=function(e){return n.default.useContext(o.OptionsContext).useAutoGen?n.default.createElement(i.default,e):n.default.createElement(l.default,e)};t.default=s},9344:function(e,t,a){"use strict";var r=a(4994);t.__esModule=!0,t.default=void 0;var n=r(a(4634)),i=r(a(4893)),l=r(a(6540)),o=r(a(5556)),s=a(8007),c=["title","crumbs","crumbLabel","crumbSeparator","disableLinks","hiddenCrumbs"],u=function(e){var t=e.title,a=e.crumbs,r=e.crumbLabel,o=e.crumbSeparator,u=e.disableLinks,m=e.hiddenCrumbs,d=(0,i.default)(e,c);return l.default.createElement(l.default.Fragment,null,t&&l.default.createElement("span",{className:"breadcrumb__title"},t),l.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},l.default.createElement("ol",{className:"breadcrumb__list"},a.map((function(e,t){return m.includes(e.pathname)?null:l.default.createElement(l.default.Fragment,{key:t+"-"+e.pathname},!u.includes(e.pathname)&&l.default.createElement("li",{className:"breadcrumb__list__item"},l.default.createElement(s.Link,(0,n.default)({to:e.pathname,className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===a.length-1?"page":null},d),r&&t===a.length-1?r:e.crumbLabel)),u.includes(e.pathname)&&l.default.createElement("li",{className:"breadcrumb__list__item"},l.default.createElement("span",(0,n.default)({className:"breadcrumb__link__disabled"},d),r&&t===a.length-1?r:e.crumbLabel)),t===a.length-1?null:l.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},o))})))))};u.defaultProps={title:"",crumbSeparator:" / ",crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},u.propTypes={title:o.default.string,crumbSeparator:o.default.oneOfType([o.default.string,o.default.element]),crumbs:o.default.arrayOf(o.default.shape({location:o.default.shape(),pathname:o.default.string.isRequired})).isRequired,crumbLabel:o.default.string,disableLinks:o.default.arrayOf(o.default.string),hiddenCrumbs:o.default.arrayOf(o.default.string)};var m=u;t.default=m},2146:function(e,t,a){"use strict";var r=a(4994);t.__esModule=!0,t.default=void 0;var n=r(a(4634)),i=r(a(4893)),l=r(a(6540)),o=r(a(5556)),s=a(8007),c=a(6052),u=r(a(4762)),m=["title","location","crumbLabel","crumbSeparator"],d=function(e){var t=e.title,a=e.location,r=e.crumbLabel,o=e.crumbSeparator,d=(0,i.default)(e,m),p=l.default.useContext(c.OptionsContext).usePathPrefix,g=(0,u.default)({location:(0,n.default)({},a,{pathname:p?a.pathname.replace(new RegExp("^"+p),""):a.pathname}),crumbLabel:r,crumbSeparator:o}).crumbs,f=void 0===g?[]:g;return l.default.createElement(l.default.Fragment,null,t&&l.default.createElement("span",{className:"breadcrumb__title"},t),l.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},l.default.createElement("ol",{className:"breadcrumb__list"},f.map((function(e,t){return l.default.createElement("li",{className:"breadcrumb__item",key:t},l.default.createElement(s.Link,(0,n.default)({to:e.pathname||"",className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===f.length-1?"page":null},d),e.crumbLabel),t===f.length-1?null:l.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},e.crumbSeparator))})))))};d.defaultProps={title:"",crumbSeparator:" / "},d.propTypes={location:o.default.shape().isRequired,crumbLabel:o.default.string.isRequired,title:o.default.string,crumbSeparator:o.default.string};var p=d;t.default=p},5092:function(e,t,a){"use strict";var r=a(4994);t.__esModule=!0;var n=r(a(6983));t.Breadcrumb=n.default;var i=r(a(9344));t.AutoGenCrumb=i.default;var l=a(2513);t.BreadcrumbContext=l.BreadcrumbContext,t.BreadcrumbConsumer=l.BreadcrumbConsumer,t.BreadcrumbProvider=l.BreadcrumbProvider;var o=r(a(4762));t.useBreadcrumb=o.default},4762:function(e,t,a){"use strict";var r=a(4994);t.__esModule=!0,t.default=void 0;var n=r(a(6540)),i=a(2513),l=function(e){var t=e.location,a=e.crumbLabel,r=e.crumbSeparator,l=n.default.useContext(i.BreadcrumbContext),o=l.crumbs,s=l.updateCrumbs;return n.default.useEffect((function(){s({location:t,crumbLabel:a,crumbSeparator:r})}),[t,a,r,s]),{crumbs:o}};t.default=l},3931:function(e,t,a){"use strict";var r=a(5092);r.Breadcrumb,r.BreadcrumbContext,r.BreadcrumbConsumer,r.BreadcrumbProvider,r.useBreadcrumb,r.AutoGenCrumb},1043:function(e,t,a){"use strict";a.d(t,{A:function(){return s}});var r=a(6540),n=a.p+"static/fpa-528dba3b560fd8f1e3e666bf267cbd8a.svg",i=a(8007);var l=e=>{let{}=e;return r.createElement("header",{"aria-label":"Site Header",class:"shadow-sm"},r.createElement("div",{class:"mx-auto max-w-screen-xl p-2"},r.createElement("div",{class:"flex items-center justify-center"},r.createElement(i.Link,{class:"m-0 p-0",to:"/"},r.createElement("img",{class:"h-16 m-0",src:n,alt:"The Fairfield Programming Association Logo"}))),r.createElement("div",{class:"flex items-center justify-center gap-4 lg:gap-10"},r.createElement("nav",{"aria-label":"Site Nav",class:"w-min gap-4 text-sm font-medium flex md:gap-8"},r.createElement(i.Link,{class:"text-gray-500 no-underline",to:"/support"},"الدعم"),r.createElement(i.Link,{class:"text-gray-500 no-underline",to:"/partnerships"},"الشركاء"),r.createElement(i.Link,{class:"text-gray-500 no-underline",to:"/programs"},"برامجنا"),r.createElement(i.Link,{class:"text-gray-500 no-underline",to:"/impact"},"تأتيرنا"),r.createElement(i.Link,{class:"text-gray-500 no-underline",to:"/mission"},"مهمتنا")))))};var o=e=>{let{siteTitle:t}=e;a(2294).programs;return r.createElement("footer",{"aria-label":"Site Footer",class:"bg-white"},r.createElement("div",{class:"max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8"},r.createElement("div",{class:"grid grid-cols-1 gap-8 lg:grid-cols-3",style:{direction:"rtl",textAlign:"right",padding:"10px",margin:"10px"}},r.createElement("div",null,r.createElement("div",{class:"text-teal-600"},r.createElement("img",{class:"h-16",src:n,alt:"The Fairfield Programming Association Inc. Logo"})),r.createElement("p",{class:"max-w-xs mt-4 text-gray-500",style:{direction:"rtl",textAlign:"right",padding:"10px",margin:"10px"}},"مهمتنا جعل طنجة مدينة أفضل و مساعدة الناس و الجمعيات في أعمالها"),r.createElement("ul",{class:"flex gap-6 mt-8"},r.createElement("li",null,r.createElement("a",{href:"#",target:"_blank",class:"text-gray-700 transition hover:opacity-75"},r.createElement("span",{class:"sr-only"},"Twitter"),r.createElement("svg",{class:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"},r.createElement("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})))),r.createElement("li",null,r.createElement("a",{href:"#",target:"_blank",class:"text-gray-700 transition hover:opacity-75"},r.createElement("span",{class:"sr-only"},"GitHub"),r.createElement("svg",{class:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"},r.createElement("path",{"fill-rule":"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z","clip-rule":"evenodd"})))),r.createElement("li",null,r.createElement("a",{href:"#",target:"_blank",class:"text-gray-700 transition hover:opacity-75"},r.createElement("span",{class:"sr-only"},"Discord"),r.createElement("svg",{class:"w-8 h-9",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"},r.createElement("path",{d:"M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"})))))),r.createElement("div",{class:"grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4"},r.createElement("div",null,r.createElement("p",{class:"font-medium text-gray-900"},"عن النادي"),r.createElement("nav",{"aria-label":"Footer Navigation - Organization",class:"mt-6"},r.createElement("ul",{class:"space-y-4 text-sm"},r.createElement("li",null,r.createElement(i.Link,{to:"/team",class:"text-gray-700 transition hover:opacity-75"},"تعرف على فريقنا")),r.createElement("li",null,r.createElement(i.Link,{to:"/contact",class:"text-gray-700 transition hover:opacity-75"},"تواصل معنا"))))),r.createElement("div",null,r.createElement("p",{class:"font-medium text-gray-900"},"روابط مفيدة"),r.createElement("nav",{"aria-label":"Footer Navigation - Company",class:"mt-6"},r.createElement("ul",{class:"space-y-4 text-sm"},r.createElement("li",null,r.createElement(i.Link,{to:"/documents",class:"text-gray-700 transition hover:opacity-75"},"مستندات")),r.createElement("li",null,r.createElement(i.Link,{to:"/press",class:"text-gray-700 transition hover:opacity-75"},"الصحافة و التواصل")),r.createElement("li",null,r.createElement(i.Link,{to:"/faq",class:"text-gray-700 transition hover:opacity-75"},"أسئلة و أجوبة")),r.createElement("li",null,r.createElement(i.Link,{to:"/support",class:"text-gray-700 transition hover:opacity-75"},"تبرع"))))),r.createElement("div",null,r.createElement("p",{class:"font-medium text-gray-900"},"قانوني"),r.createElement("nav",{"aria-label":"Footer Navigation - Legal",class:"mt-6"},r.createElement("ul",{class:"space-y-4 text-sm"},r.createElement("li",null,r.createElement(i.Link,{to:"/terms",class:"text-gray-700 transition hover:opacity-75"},"شروط الاستعمال")),r.createElement("li",null,r.createElement(i.Link,{to:"/privacy",class:"text-gray-700 transition hover:opacity-75"},"سباسة الخصوصية"))))))),r.createElement("p",{class:"text-xs text-gray-500"},"© ",(new Date).getFullYear(),". نادي التطوع بطنجة. كل الحقوق محفوظة.")))};a(3931);var s=e=>{let{children:t,location:a="",crumbLabel:n}=e;return r.createElement(r.Fragment,null,r.createElement(l,null),r.createElement("main",null,t),r.createElement(o,null))}},7528:function(e,t,a){"use strict";var r=a(6540);t.A=function(e){var t;let{description:n,title:i,children:l,image:o,breadcrumbs:s}=e;const c=a(1396),u=n||c.siteMetadata.description;null==s&&(s={});const m={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[Object.keys(s).map(((e,t)=>({"@type":"ListItem",position:t+1,name:e,item:s[e]})))]};return r.createElement(r.Fragment,null,r.createElement("title",null,`${i} | ${c.siteMetadata.title}`),r.createElement("meta",{name:"description",content:u}),r.createElement("meta",{property:"og:title",content:i}),r.createElement("meta",{property:"og:description",content:u}),o&&r.createElement("meta",{property:"og:image",content:o}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(t=c.siteMetadata)||void 0===t?void 0:t.author)||""}),r.createElement("meta",{name:"twitter:title",content:i}),r.createElement("meta",{name:"twitter:description",content:u}),r.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(m)}}),l)}},4893:function(e){e.exports=function(e,t){if(null==e)return{};var a={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;a[r]=e[r]}return a},e.exports.__esModule=!0,e.exports.default=e.exports},2294:function(e){"use strict";e.exports=JSON.parse('{"description":"Below is a list of all the programs that  runs in order to help the world . ","programs":[{"slug":"charter-outreach","title":"Charter Outreach","description":"This program focuses on partnering with local schools, enabling them to build clubs, all in order to educate future generations.","joining":"We are always looking for dedicated and talented individuals to join our team in managing the charter program. If you are interested in taking on this exciting opportunity to contribute to the success of the program, please email Neil Chaudhari at chaudharin@fairfieldprogramming.org with the subject \'Request to Join Charter Program Management Team\'. In your email, please introduce yourself, provide details about your relevant experience and skills, and explain why you are interested in helping to manage the program. We look forward to considering your application and the potential for you to make a valuable impact on the program.","since":"2022-07-17"},{"slug":"charter-events","title":"Charter Events","description":"This program uses the charter system implemented in The Charter Outreach Program, but uses it for hosting learning events.","since":"2022-04-22"},{"slug":"cherry-cake","title":"Cherry Cake Programming Language","description":"The Cherry Cake Programming Language was designed and built by the Fairfield Programming Association in order to build fast, flexible, and scalable servers.","joining":"Joining the Cherry Cake Development Group is quite easy as members are split up based on their skills. If you are good at writing fast, detailed, and meaningful papers then you will be good at writing specifications for the language. If you are good at programming in C or C++, or have a general knowledge of programming language development, then CLI development is probably for you. If neither of these areas seem to fit, don\'t worry– there is no-doubt a job for you. To join, simply email Alden Grover, the head of the Cherry Cake Development Group and ask how you can help.","since":"2022-12-18"},{"slug":"metaverse","title":"Metaverse Research Group","description":"This group focuses on researching the future of the Metaverse and Web3 in order to build a equitable, distributed, and fair future.","since":"2023-01-13"},{"slug":"opensource-legal","title":"Open Source Licensing","description":"Our Open Source Licensing Program was built out of necessity for more modern licenses that reflect the current tech-landscape.","since":"2022-09-05","contents":[{"title":"Documents","contents":{"FPA General Code License":"fpa-general-code"}}],"pages":[{"slug":"fpa-general-code","title":"FPA General Code License","description":"The FPA General Code License was originally created as a way to permissively license our software for all without having to deal with commercial entities \'asset-ripping\' code from our open projects.","content":[{"type":"banner"},{"type":"markdown","content":["## How is the FPA General Code License Open Source?","The FPA General Code License permits the use, modification, and distribution of code for personal and educational purposes. It also prohibits companies from using the code commercially without significant modification. These characteristics are consistent with the definition of open source, as they permit collaboration and reuse of code under specified constraints.","## What does the license allow?","The license allows for anyone to use, copy, modify, merge, publish, or distribute the code in an educational or personal context. In a commercial context, users must substantially modify the code- prohibiting companies from copying code and selling it as their own on stores.","## Can I modify it?","Yes! The license is designed so that copyright owners can input different conditions that software users must fulfill. But, we do recommend that you have a lawyer look at the document before use as we do not claim any legal responsibility.","## Does it protect me?","The license includes a clause from the MIT license that protects the copyright owners by limiting liability and stating that the software is provided without warranty. This clause will limit liability as long as it is kept unmodified."]},{"type":"code","title":"","content":["Copyright <YEAR> <COPYRIGHT HOLDER>","","Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \\"Software\\"), to deal in the Software without limitation in the rights to use, copy, modify, merge, publish, and/ or distribute copies of the Software in an educational or personal context, subject to the following conditions:","","- The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.","","Permission is granted to sell and/ or distribute copies of the Software in a commercial context, subject to the following conditions:","","- Substantial changes: adding, removing, or modifying large parts, shall be developed in the Software. Reorganizing logic in the software does not warrant a substantial change.","","THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."]}]},{"slug":"fpa-cla","title":"FPA Contributor License Agreement","description":"","content":[{"type":"banner"},{"type":"markdown","content":[]}]}]},{"slug":"fpa-vault","title":"The Vault","description":"The Vault is an open-source standards platform similar to W3, IETF, IEEE, and specification organizations, but with less red-tape.","since":"2022-12-24"},{"slug":"fpa-games","title":"FPA Games","description":"A Partnership between Preponderous Software, the FPA, and Unity Software to create Open Source Games and learning materials.","since":"2022-12-18"},{"slug":"fpa-learn","title":"The Learning Platform","description":"A free and open-source learning platform that enables anyone to learn computer-related ideas: programming, electrical engineering, and mathematics.","since":"2023-02-8"}]}')}}]);
//# sourceMappingURL=commons-4eac7cf33276e065fece.js.map