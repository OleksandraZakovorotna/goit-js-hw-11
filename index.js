import{a as p,S as f,i as y}from"./assets/vendor--6n4cVRZ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function g(a){return p.get("https://pixabay.com/api/",{params:{key:"54612397-f95ccc6630e34cb503ef4faef",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits).catch(r=>console.log(res.statusText))}const o=document.querySelector(".gallery"),n=document.querySelector(".loader");let h=new f(".gallery a");function m(a){const r=a.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:l,comments:u,downloads:d})=>`<li class="gallery-item">
        <a class="gallery-link" href="${i}">
            <img src="${s}" class="gallery-img" alt="${e}"/>
        </a>
        <div class=gallery-wrapper>
            <div class="text-wrapper">
                <h3 class="gallery-subtitle">Likes</h3>
                <p class="gallery-text">${t}</p>
            </div>
            <div class="text-wrapper">
                <h3 class="gallery-subtitle">Views</h3>
                <p class="gallery-text">${l}</p>
            </div>
            <div class="text-wrapper">
                <h3 class="gallery-subtitle">Comments</h3>
                <p class="gallery-text">${u}</p>
            </div>
            <div class="text-wrapper">
                <h3 class="gallery-subtitle">Downloads</h3>
                <p class="gallery-text">${d}</p>
            </div>
        </div>
        </li>`).join("");o.innerHTML=r,h.refresh()}function v(){o.innerHTML=""}function x(){n.classList.remove("hidden")}function L(){n.classList.add("hidden")}const c=document.querySelector(".form");c.addEventListener("submit",b);function b(a){a.preventDefault();const r=a.target.elements["search-text"].value.trim();r.length!==0&&(v(),x(),g(r).then(s=>{if(s.length===0){y.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"});return}m(s)}).catch(s=>s.message).finally(L),c.reset())}
//# sourceMappingURL=index.js.map
