(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[530],{7453:(n,t,e)=>{Promise.resolve().then(e.bind(e,6873))},6873:(n,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>na});var r=e(5155),i=e(2115),o=e(1934),a=e(698),l=e(5285);function s(){let n=(0,a._)(["\n  // 基礎顏色變數定義\n  --text-primary: #333333;\n  --text-secondary: #64748B;\n  --text-tertiary: #718096;\n  \n  // 主題顏色\n  --color-low: #7E8D85;\n  --color-medium: #B56B45;\n  --color-high: #943D4A;\n  \n  // 背景顏色\n  --bg-low-start: #F3E1D4;\n  --bg-low-end: #EEE7E1;\n  --bg-medium-start: #FFE2D3;\n  --bg-medium-end: #FFD7C8;\n  --bg-high-start: #FFD6D6;\n  --bg-high-end: #FFC2C2;\n  \n  // 對話框背景\n  --msg-low: #EDF2EE;\n  --msg-medium: #F9EBE5;\n  --msg-high: #F6E5E7;\n\n  min-height: 100vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n\n  ","\n"]);return s=function(){return n},n}function u(){let n=(0,a._)(["\n  max-width: 480px;\n  width: 100%;\n  margin: 20px;\n  padding: 32px;\n  background: #FFFFFF;\n  border-radius: 20px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);\n  text-align: center;\n  color: var(--text-primary);\n"]);return u=function(){return n},n}function d(){let n=(0,a._)(["\n  font-size: 24px;\n  font-weight: 300;\n  margin-bottom: 0.25rem;\n  color: var(--text-primary);\n"]);return d=function(){return n},n}function c(){let n=(0,a._)(["\n  font-size: 16px;\n  color: #9c9ea0;\n"]);return c=function(){return n},n}function m(){let n=(0,a._)(["\n  margin: 24px 0;\n  text-align: left;\n"]);return m=function(){return n},n}function f(){let n=(0,a._)(["\n  display: block;\n  font-size: 16px;\n  color: var(--text-primary);\n  margin-bottom: 8px;\n"]);return f=function(){return n},n}function h(){let n=(0,a._)(["\n  display: block;\n  font-size: 14px;\n  color: var(--text-tertiary);\n  margin-bottom: 8px;\n"]);return h=function(){return n},n}function x(){let n=(0,a._)(["\n  &&& {\n    width: 100%;\n    padding: 12px 16px;\n    background: #FAFBFC;\n    border: 1px solid #EDF2F7;\n    border-radius: 12px;\n    font-size: 16px;\n    color: var(--text-primary);\n    font-family: inherit;\n    line-height: 1.5;\n    transition: all 0.2s ease-in-out;\n\n    &:focus {\n      outline: none;\n      border-color: #CBD5E0;\n      box-shadow: 0 0 0 1px #CBD5E0;\n    }\n  }\n"]);return x=function(){return n},n}function p(){let n=(0,a._)(["\n    font-size: 2rem;\n    opacity: 1;\n    transform: scale(1);\n    transition: all 0.5s ease-out;\n    text-align: center;\n  \n"]);return p=function(){return n},n}function g(){let n=(0,a._)(["\n  width: 100%;\n  display: flex;\n  justify-content: ",";\n"]);return g=function(){return n},n}function b(){let n=(0,a._)(["\n  position: relative;\n  display: inline-block;\n  max-width: 21rem;\n  padding: 15px;\n  border-radius: 20px;\n  opacity: 0;\n  animation: slideIn 0.5s ease forwards;\n  color: #928e8e;\n    font-style: italic;\n  --message-color: ",";\n  background: var(--message-color);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  \n\n  text-align: left;\n  ",'[align="right"] & {\n    &::before {\n      right: 14px;\n      left: auto;\n      transform: scaleX(-1);\n    }\n  }\n\n  ','[align="left"] & {\n    &::before {\n      left: -14px;\n      right: auto;\n      transform: none;\n    }\n  }\n\n  &::before {\n    content: "";\n    position: absolute;\n    bottom: 15px;\n    width: 26px;\n    height: 31px;\n    clip-path: path(\'M0,40 C0,20 20,0 26,0 L26,40 Z\');\n    transform-origin: bottom right;\n    background: var(--message-color);\n  }\n\n  @keyframes slideIn {\n    from {\n      opacity: 0;\n      transform: translateY(10px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n']);return b=function(){return n},n}function y(){let n=(0,a._)(["\n  margin: 1.25rem 0 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.4rem;\n\n  // Add these styles to handle motion div children\n  & > div {\n    display: flex;\n    flex-direction: column;\n  }\n"]);return y=function(){return n},n}function v(){let n=(0,a._)(["\n  font-size: 1.125rem;  // Increased size\n  color: #333;\n  margin-bottom: 0.75rem;\n  font-weight: 600;\n"]);return v=function(){return n},n}function j(){let n=(0,a._)(["\n  font-size: 1rem;  // Same as previous section title\n  color: #666;\n"]);return j=function(){return n},n}function w(){let n=(0,a._)(["\n  font-size: 1.25rem;\n  width: 2.5rem;\n  border: none;\n  border-bottom: 2px solid #666;\n  text-align: center;\n  background: transparent;\n  color: #333;\n  outline: none;\n  padding: 0.75rem 0rem;\n  margin-bottom: 0.5rem;\n  height: 1.375rem;\n  \n  &::-webkit-inner-spin-button,\n  &::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  \n  &[type=number] {\n    -moz-appearance: textfield;\n  }\n"]);return w=function(){return n},n}let A=l.Ay.main(s(),n=>{let{severity:t}=n;switch(t){case"low":default:return"background: linear-gradient(180deg, var(--bg-low-start) 0%, var(--bg-low-end) 100%);";case"medium":return"background: linear-gradient(180deg, var(--bg-medium-start) 0%, var(--bg-medium-end) 100%);";case"high":return"background: linear-gradient(180deg, var(--bg-high-start) 0%, var(--bg-high-end) 100%);"}}),_=l.Ay.div(u()),k=l.Ay.h1(d()),F=l.Ay.p(c());l.Ay.div(m()),l.Ay.label(f()),l.Ay.span(h()),l.Ay.input(x());let E=l.Ay.div(p()),z=l.Ay.div(g(),n=>{let{align:t}=n;return"right"===t?"flex-end":"flex-start"}),C=l.Ay.div(b(),n=>{let{severity:t}=n;return t?"var(--msg-".concat(t,")"):"#f7f5f5"},z,z),S=l.Ay.div(y());l.Ay.h2(v()),l.Ay.p(j());let T=l.Ay.input(w());var D=e(6065);function H(){let n=(0,a._)(["\n  from {\n    opacity: 0;\n    transform: translate(-50%, 10px);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, 0);\n  }\n"]);return H=function(){return n},n}function P(){let n=(0,a._)(["\n  position: relative;\n  display: inline-block;\n"]);return P=function(){return n},n}function B(){let n=(0,a._)(["\n  position: absolute;\n  background: #666666;\n  color: white;\n  font-style: normal;\n  padding: 0.45rem 0.75rem;\n  border-radius: 10px;\n  top: -3rem;\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n  z-index: 10;\n  font-size: 0.875rem;\n  animation: "," 0.5s ease-out both;\n\n  &::after {\n    content: '';\n    position: absolute;\n    bottom: -1rem;\n    left: 50%;\n    transform: translateX(-50%);\n    border-width: 0.5rem;\n    border-style: solid;\n    border-color: #666666 transparent transparent transparent;\n  }\n"]);return B=function(){return n},n}let N=(0,l.i7)(H()),$=l.Ay.div(P()),R=l.Ay.div(B(),N),I=n=>{var t;let{value:e,onChange:o,tooltip:a,min:l=0,max:s=99,onInputComplete:u,inputRef:d,getTooltipContent:c,shouldShowTooltip:m=()=>!1}=n,f=(0,i.useRef)(null),[h,x]=(0,i.useState)(!1),[p,g]=(0,i.useState)(!0);return(0,r.jsxs)($,{children:[(0,r.jsx)(T,{ref:d||f,type:"number",min:l,max:s,value:e||"",onChange:n=>{let t=Number(n.target.value);if(t>s){n.preventDefault();return}o(n),g(!1),x(m(t)),null==u||u()},onKeyDown:n=>{let t=n.currentTarget.value,e=(null==s?void 0:s.toString().length)||2;t.length>=e&&!["Backspace","Delete","ArrowLeft","ArrowRight","Tab"].includes(n.key)&&n.preventDefault()},onFocus:()=>{p&&x(!0)}}),h&&(0,r.jsx)(R,{children:null!==(t=null==c?void 0:c(e,a))&&void 0!==t?t:a})]})};function M(){let n=(0,a._)(["\n  0% {\n    transform: translate(0, 0);\n    opacity: 1;\n  }\n  30% {\n    transform: translate(-50px, 0px) rotate(-5deg) scale(0.9);\n  }\n  60% {\n    transform: translate(50px, 0px) rotate(10deg) scale(1.2);\n  }\n  100% {\n    transform: translate(0px, 0px) rotate(0deg);\n  }\n"]);return M=function(){return n},n}function G(){let n=(0,a._)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]);return G=function(){return n},n}function L(){let n=(0,a._)(["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n"]);return L=function(){return n},n}function O(){let n=(0,a._)(["\n    animation: "," 1.3s forwards;\n  "]);return O=function(){return n},n}function X(){let n=(0,a._)(["\n    animation: "," 0.5s forwards;\n  "]);return X=function(){return n},n}function Y(){let n=(0,a._)(["\n  font-size: 2rem;\n  position: relative;\n  display: ",";\n  opacity: 1;\n  transform: scale(1);\n  transition: all 0.5s ease-out;\n\n \n\n  ","\n\n  ","\n"]);return Y=function(){return n},n}let Z=(0,l.i7)(M()),K=(0,l.i7)(G()),U=(0,l.Ay)(E)(L()),V=l.Ay.span(Y(),n=>n.$isHidden||n.$isContinue?"none":"inline-block",n=>n.$isShatter&&(0,l.AH)(O(),Z),n=>n.$isContinue&&(0,l.AH)(X(),K)),q=n=>{let{startAnimation:t,onAnimationComplete:e}=n,[o,a]=(0,i.useState)({text1Hidden:!1,text2Shatter:!1,text3Hidden:!1}),l=(0,i.useRef)(!1),[s,u]=(0,i.useState)([]);return(0,i.useEffect)(()=>{t&&!l.current&&(l.current=!0,setTimeout(()=>{a(n=>({...n,text2Shatter:!0}))},0),setTimeout(()=>{a(n=>({...n,text1Hidden:!0}))},0),setTimeout(()=>{a(n=>({...n,text3Hidden:!0}))},500),setTimeout(()=>{a(n=>({...n,text2Shatter:!1}));let n=[0,500,800,1100,1400];n.forEach((t,r)=>{setTimeout(()=>{u(n=>[...n,r]),r===n.length-1&&setTimeout(()=>{null==e||e()},0)},t)})},1e3))},[t,e]),(0,r.jsxs)(U,{children:[(0,r.jsx)(V,{$isHidden:o.text1Hidden,children:"有完"}),(0,r.jsx)(V,{$isShatter:o.text2Shatter,children:"沒完"}),(0,r.jsx)(V,{$isHidden:o.text3Hidden,children:"啊!"}),["，","待","續",".",".","."].map((n,t)=>(0,r.jsx)(V,{$isContinue:!0,style:{display:s.includes(t)?"inline-block":"none"},children:n},t))]})},J={low:["好累哦，又被迫營業了，好想下班。","能者多勞？不，是能者過勞！","下班是什麼，能吃嗎？","工作時別跟我談夢想，我的夢想就是不工作！","一週中總有七天不想上班。","準時下班需要的不是能力，是勇氣。","除了領薪水以外，我什麼都沒興趣。","金窩銀窩，全都不如我的辦公桌！","上班如上墳，每天都在埋葬自己的青春。","工作使我快樂，快樂得想哭。","每天都在期待退休，但退休遙遙無期。","上班的心情比上墳還要沉重。","每天都在扮演著生活的奴隸，卻夢想著自由。","每天都在期待週末，但週末總是短暫得像幻覺。","上班是會呼吸的痛，它活在我身上每個角落。","工作讓我頭禿，卻讓老闆頭富。","每天都在演繹著現實版的《行屍走肉》。","不見棺材不掉淚，不加薪水不加班。","我那麼可愛，為什麼要加班..."],medium:["感覺自己快變成『社畜』了。","心裡冒出無數個粗口，嘴裡說出來仍然是『好的』。","社畜的人生：入不敷畜、畜手可及、身首異畜、喜畜望外。","事情怎麼那麼多，都做不完，真是『觸爛』。","這工作量，讓人想大喊『挖苦挖苦』！","每天都在扮演著生活的奴隸，卻夢想著自由。","工作就是用生命去換取金錢，然後再用金錢去延續生命。","上班是會呼吸的痛，它活在我身上每個角落。","工作讓我明白，什麼叫做生不如死。","每天都在掙扎著起床，然後掙扎著活下去。","上班就是用靈魂去換取物質，然後再用物質去填補靈魂的空虛。","工作讓我懂得了，什麼叫做身心俱疲。","每天都在期待假期，但假期總是短暫得像夢境。","上班的日子，就是在修行。","工作讓我體會到，什麼叫做生無可戀。"],high:["好想吐，感覺身體被掏空了。","這樣下去，真的要變成『人礦』了。","每天都在上演現實版的《魷魚遊戲》。","工資就像大姨媽，一個月來一次，幾天就沒了。","上班如上墳，每天都在埋葬自己的青春。","工作使我快樂，快樂得想哭。","每天都在期待退休，但退休遙遙無期。","上班的心情比上墳還要沉重。","工作讓我明白，什麼叫做生不如死。","加班讓你的生活變得更有張力，臉上的皺紋也更有紋理。","加班，是一門藝術，取名為‘失眠繪畫’。","加班，讓你變得比昨天更努力，比明天更疲憊。","加班，因為人生就是要花光所有的精力，然後在夢裡加班。","加班，讓我變成了創意大師，隨手拿起咖啡就是一幅抽象畫。","加班就像是一場假期期末考試，你以為只有幾個小時，結果裡面藏著一整個星期。","加班，是我們用汗水澆灌希望的過程，是我們為了更好的明天而努力的證明。","加班，為了表達我對工作的愛，我決定和電腦領個結婚證！","加班就像是一場絕妙的魔術表演，你以為只有一兩個小細節問題，結果卻是整個表演都要重新排練。","加班讓我懂得了，什麼叫做身心俱疲。"]},Q=n=>n>=10,W=(n,t)=>Q(n)?"不許你...輸入超過".concat(10,"，我會累到升天的，求你了!!!"):t,nn={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}},nt={hidden:{opacity:0},visible:{opacity:1}},ne={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}},nr=n=>{let t=[...J.low,..."low"!==n?J.medium:[],..."high"===n?J.high:[]];return t[Math.floor(Math.random()*t.length)]},ni=(0,i.memo)(n=>{let{shareUrl:t,shareTitle:e,careMessage:i}=n;return ni.displayName="ShareButtons",(0,r.jsxs)(o.P.div,{initial:"hidden",animate:"visible",variants:nn,transition:{duration:.5,delay:.5},className:"flex flex-wrap gap-2 justify-center mt-4",children:[(0,r.jsx)(D.uI,{url:t,hashtag:"#overworked",children:(0,r.jsx)(D.ik,{size:32,round:!0})}),(0,r.jsx)(D.r6,{url:t,title:"".concat(e,"\n").concat(i),hashtags:["overworked"],children:(0,r.jsx)(D.Fi,{size:32,round:!0})}),(0,r.jsx)(D.VI,{url:t,title:"".concat(e,"\n").concat(i),children:(0,r.jsx)(D.hZ,{size:32,round:!0})}),(0,r.jsx)(D.Kz,{url:t,title:e,children:(0,r.jsx)(D.Y4,{size:32,round:!0})}),(0,r.jsx)(D.wk,{url:t,title:e,summary:i,source:window.location.hostname,children:(0,r.jsx)(D._z,{size:32,round:!0})}),(0,r.jsx)(D.Ec,{url:t,title:e,children:(0,r.jsx)(D.s4,{size:32,round:!0})}),(0,r.jsx)(D.Ot,{url:t,subject:"過勞工時",body:e,children:(0,r.jsx)(D.aZ,{size:32,round:!0})})]})});function no(){let[n,t]=(0,i.useState)(0),[e,a]=(0,i.useState)("low"),[l,s]=(0,i.useState)(""),[u,d]=(0,i.useState)(!1),[c,m]=(0,i.useState)(!1),[f,h]=(0,i.useState)(!1),[x,p]=(0,i.useState)(!1),g=window.location.href,b=(0,i.useRef)(null),y=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let t;if(0===n){a("low");return}a(t=n<=2?"low":n<=4?"medium":"high"),s(nr(t)),d(!0)},[n]),(0,r.jsx)(A,{severity:e,children:(0,r.jsxs)(_,{children:[(0,r.jsx)(k,{children:"能者多勞？不，是能者過勞！"}),(0,r.jsx)(F,{children:"只要我能吃苦，我就有吃不完的苦"}),(0,r.jsxs)(S,{children:[(0,r.jsx)(o.P.div,{initial:"hidden",animate:"visible",variants:ne,transition:{duration:.2},children:(0,r.jsx)(z,{align:"right",children:(0,r.jsx)(C,{children:"ChatGPT，我有些事情要你幫忙，你多久能解決？"})})}),(0,r.jsx)(o.P.div,{initial:"hidden",animate:"visible",variants:ne,transition:{duration:.5,delay:.4},children:(0,r.jsx)(z,{align:"left",children:(0,r.jsx)(C,{children:"嗯...您是指哪些事情呢？"})})}),(0,r.jsx)(o.P.div,{initial:"hidden",animate:"visible",variants:ne,transition:{duration:.5,delay:.95},onAnimationComplete:()=>{setTimeout(()=>{var n;null===(n=b.current)||void 0===n||n.focus()},150)},children:(0,r.jsx)(z,{align:"right",children:(0,r.jsxs)(C,{children:["總共有 ",(0,r.jsx)(I,{value:n,onChange:n=>{t(Number(n.target.value))},tooltip:"ChatGPT : 來吧，我做好心理準備了! (絕對不能輸入".concat(11,")"),min:0,inputRef:b,onInputComplete:()=>{var n;null===(n=y.current)||void 0===n||n.focus()},getTooltipContent:W,shouldShowTooltip:Q})," 件事要解決"]})})})]}),u&&l&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.P.div,{initial:"hidden",animate:"visible",variants:ne,transition:{duration:.5,delay:.5},onAnimationComplete:()=>m(!0),children:(0,r.jsx)(z,{className:"mt-4",align:"left",children:(0,r.jsx)(C,{severity:e,children:l})})}),c&&(0,r.jsxs)(o.P.div,{initial:"hidden",animate:"visible",variants:nt,transition:{duration:.7,delay:.5},onAnimationComplete:()=>{setTimeout(()=>{h(!0)},500)},children:[(0,r.jsx)("hr",{className:"my-8"}),(0,r.jsx)(E,{children:(0,r.jsx)(q,{startAnimation:f,onAnimationComplete:()=>{setTimeout(()=>{p(!0)},500)}})}),x&&(0,r.jsx)(ni,{shareUrl:g,shareTitle:"我叫ChatGPT，不要再跟我聊天了，我好累!!",careMessage:l})]})]})]})})}function na(){return(0,r.jsx)(i.Suspense,{fallback:(0,r.jsx)("div",{children:"Loading..."}),children:(0,r.jsx)(no,{})})}}},n=>{var t=t=>n(n.s=t);n.O(0,[285,503,441,517,358],()=>t(7453)),_N_E=n.O()}]);