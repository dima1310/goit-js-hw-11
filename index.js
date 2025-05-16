import{a as p,S as m,i as a}from"./assets/vendor-CocXUmuy.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="50326285-e5938c14f2b0dcc6b2d24cfe3",g="https://pixabay.com/api/";async function h(s){const r={key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await p.get(g,{params:r})).data}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),b=new m(".gallery a");function L(s){const r=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:i,comments:d,downloads:f})=>`
      <li class="gallery-item">
        <a href="${n}">
          <img src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${i}</p>
          <p><b>Comments:</b> ${d}</p>
          <p><b>Downloads:</b> ${f}</p>
        </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",r),b.refresh()}function w(){l.innerHTML=""}function S(){u.classList.remove("is-hidden")}function v(){u.classList.add("is-hidden")}const c=document.querySelector(".form");c.addEventListener("submit",async s=>{s.preventDefault();const r=c.elements["search-text"].value.trim();if(!r){a.error({message:"Please enter a search term",position:"topRight"});return}S(),w();try{const o=await h(r);o.hits.length===0?a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):L(o.hits)}catch{a.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{v()}});
//# sourceMappingURL=index.js.map
