import{a as g,S as f,i}from"./assets/vendor-CC7y-xQd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function h(a){return g.get("https://pixabay.com/api/",{params:{key:"54612397-f95ccc6630e34cb503ef4faef",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits).catch(r=>console.log(res.statusText))}const m=document.querySelector(".gallery"),c=document.querySelector(".loader");let y=new f(".gallery a");function v(a){const r=a.map(({webformatURL:s,largeImageURL:l,tags:e,likes:t,views:o,comments:d,downloads:p})=>`<li class="gallery-item">
        <a class="gallery-link" href="${l}">
            <img src="${s}" class="gallery-img" alt="${e}"/>
        </a>
        <div class=gallery-wrapper>
            <div class="text-wrapper">
                <h3 class="gallery-subtitle">Likes</h3>
                <p class="gallery-text">${t}</p>
            </div>
            <div class="text-wrapper">
                <h3 class="gallery-subtitle">Views</h3>
                <p class="gallery-text">${o}</p>
            </div>
            <div class="text-wrapper">
                <h3 class="gallery-subtitle">Comments</h3>
                <p class="gallery-text">${d}</p>
            </div>
            <div class="text-wrapper">
                <h3 class="gallery-subtitle">Downloads</h3>
                <p class="gallery-text">${p}</p>
            </div>
        </div>
        </li>`).join("");m.innerHTML=r,y.refresh()}function x(){c.classList.add("active")}function n(){c.classList.remove("active")}n();const u=document.querySelector(".form");u.addEventListener("submit",L);function L(a){a.preventDefault(),x();const r=a.target.elements["search-text"].value.trim();if(r.length===0){i.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"});return}h(r).then(s=>{n(),s.length===0&&i.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"}),v(s)}).catch(s=>s.message),u.reset()}
//# sourceMappingURL=index.js.map
