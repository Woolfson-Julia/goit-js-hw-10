import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as o}from"./assets/vendor-Dov3POoy.js";const i=document.querySelector(".js-input"),n=document.querySelector(".js-form"),c=()=>{const e=document.querySelector('input[name="state"]:checked');return e?e.value:null},m=(e,t)=>new Promise((r,s)=>{setTimeout(()=>{if(e==="fulfilled")r(`Fulfilled promise in ${t}ms`);else if(e==="rejected")s(`Rejected promise in ${t}ms`);else return},t)}),u=e=>{e.preventDefault();const t=c(),r=parseInt(i.value,10);!isNaN(r)&&r>=0&&t&&m(t,r).then(s=>{o.success({message:s})}).catch(s=>{o.error({message:s})})};n.addEventListener("submit",u);
//# sourceMappingURL=2-snackbar.js.map
