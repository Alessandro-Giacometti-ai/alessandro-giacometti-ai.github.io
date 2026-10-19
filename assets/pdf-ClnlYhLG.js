import{f as e,n as t,s as n}from"./i18n-C2FcT1bq.js";import{C as r,T as i,c as a,l as o,o as s,w as c,x as l}from"./dateisystem-DbjAh0_2.js";import{t as u}from"./symbole-C2vW5uaA.js";var d=[.8,.9,1,1.15,1.3,1.5];function f(){let a=(e,n,r=``)=>`<div class="cv-eintrag"><span class="cv-wann">${t(e)}</span><div>${n}${r}</div></div>`;return`
    <article class="cv-blatt" lang="${document.documentElement.lang}">
      <header class="cv-kopf">
        <h1>${t(e(`nutzer.name`))}</h1>
        <p>${t(e(`cv.untertitel`))} · <a href="mailto:${t(l.mail)}">${t(l.mail)}</a> · <a href="${t(l.linkedin)}" target="_blank" rel="noopener">LinkedIn</a></p>
      </header>
      <section><h2>${t(e(`cv.ausbildung`))}</h2>
        ${a(e(`cv.lehreWann`),`<b>${t(e(`cv.lehreTitel`))}</b>, ${t(e(`cv.lehreOrt`))}`,`<p>${t(e(`cv.lehreText`))}</p>`)}
        ${r.map(([e,r,i])=>a(n(e),`<b>${t(n(r))}</b>, ${t(n(i))}`)).join(``)}
      </section>
      <section><h2>${t(e(`cv.praxis`))}</h2>
        ${a(e(`cv.praxisWann`),`<b>${t(e(`cv.praxisTitel`))}</b>`,`<ul><li>${t(e(`cv.praxisPreis`))}</li><li>${t(e(`cv.praxisAblage`))}</li><li>${t(e(`cv.praxisKapa`))}</li></ul>`)}
      </section>
      <section><h2>${t(e(`cv.kenntnisse`))}</h2>
        ${i.map(([e,r])=>a(n(e),t(n(r)))).join(``)}
      </section>
      <section><h2>${t(e(`cv.wettbewerb`))}</h2>
        ${a(`2026`,`<b>${t(e(`cv.wettbewerbTitel`))}</b>`,`<p>${t(e(`cv.wettbewerbText`))}</p>`)}
      </section>
      <section><h2>${t(e(`cv.nachweise`))}</h2>
        ${a(`2023`,`<b>${t(e(`cv.multicheckTitel`))}</b>`,`<p>${t(e(`cv.multicheckText`))}</p>`)}
        ${a(e(`cv.attestWann`),`<b>${t(e(`cv.attestTitel`))}</b>`,`<p>${t(e(`cv.attestText`))}</p>`)}
      </section>
      <section><h2>${t(e(`cv.sprachen`))}</h2>
        ${c.map(([e,r])=>a(n(e),t(n(r)))).join(``)}
      </section>
    </article>`}function p(n){let r=o(n),i=s(n);return`<div class="pdf-seiten">${r.map((n,a)=>`
    <figure class="pdf-blatt">
      <img src="${t(n.url)}" width="${n.b}" height="${n.h}" alt="${t(e(`pdf.seiteBild`,{a:a+1,n:r.length,name:i}))}"${a?` loading="lazy"`:``} decoding="async">
    </figure>`).join(``)}
  </div>`}async function m(n,r){let i=r.datei&&r.datei.typ===`pdf`?r.datei:null,c=2,l=window.matchMedia(`(max-width: 767px)`).matches,m=i&&i.textfassung&&l?`text`:`original`;n.innerHTML=`
    <div class="pdf-leiste">
      <span class="pdf-name"></span>
      <span class="pdf-seite" aria-live="polite"></span>
      <span class="pdf-ansicht" role="group" hidden>
        <button type="button" data-ansicht="original"></button>
        <button type="button" data-ansicht="text"></button>
      </span>
      <span class="pdf-datei" hidden>
        <a class="pdf-oeffnen" target="_blank" rel="noopener"></a>
        <a class="pdf-laden"></a>
      </span>
      <span class="pdf-zoom">
        <button type="button" class="pdf-minus">${u(`minus`,16)}</button>
        <output class="pdf-prozent"></output>
        <button type="button" class="pdf-plus">${u(`plus`,16)}</button>
      </span>
    </div>
    <div class="pdf-buehne" tabindex="0"></div>`;let h=e=>n.querySelector(e),g=h(`.pdf-buehne`),_=()=>m===`original`?o(i).length:1;function v(){if(!i)return;let t=[...g.querySelectorAll(`.pdf-blatt`)],n=g.scrollTop+g.clientHeight/3,r=1;t.forEach((e,t)=>{e.offsetTop-g.offsetTop<=n&&(r=t+1)}),h(`.pdf-seite`).textContent=e(`pdf.seite`,{a:r,n:_()})}function y(){h(`.pdf-prozent`).textContent=`${Math.round(d[c]*100)} %`,h(`.pdf-minus`).disabled=!i||c===0,h(`.pdf-plus`).disabled=!i||c===d.length-1,g.style.setProperty(`--pdf-zoom`,String(d[c]))}function b(){if(h(`.pdf-minus`).setAttribute(`aria-label`,e(`pdf.zoomMinus`)),h(`.pdf-minus`).title=e(`pdf.zoomMinus`),h(`.pdf-plus`).setAttribute(`aria-label`,e(`pdf.zoomPlus`)),h(`.pdf-plus`).title=e(`pdf.zoomPlus`),g.setAttribute(`aria-label`,e(`pdf.dokument`)),y(),!i){r.fenster.titelSetzen(null),h(`.pdf-name`).textContent=``,h(`.pdf-seite`).textContent=``;return}let t=s(i);r.fenster.titelSetzen(t),h(`.pdf-name`).textContent=t;let n=h(`.pdf-ansicht`);n.hidden=!i.textfassung,n.setAttribute(`aria-label`,e(`pdf.ansicht`)),n.querySelector(`[data-ansicht="original"]`).textContent=e(`pdf.original`),n.querySelector(`[data-ansicht="text"]`).textContent=e(`pdf.textfassung`),n.querySelectorAll(`button`).forEach(e=>e.setAttribute(`aria-pressed`,String(e.dataset.ansicht===m)));let o=a(i);if(h(`.pdf-datei`).hidden=!o,o){let n=h(`.pdf-oeffnen`);n.href=o,n.textContent=e(`pdf.oeffnen`);let r=h(`.pdf-laden`);r.href=o,r.download=t,r.textContent=e(`pdf.herunterladen`)}v()}function x(){i?(g.innerHTML=m===`text`||!o(i).length?f():p(i),g.scrollTop=0):g.innerHTML=`<p class="pdf-leer">${t(e(`pdf.leer`))}</p>`}function S(){x(),b()}function C(){if(i&&m===`original`){let t=s(i),n=g.querySelectorAll(`.pdf-blatt img`);n.forEach((r,i)=>{r.alt=e(`pdf.seiteBild`,{a:i+1,n:n.length,name:t})})}else x();b()}function w(e){if(e===c)return;let t=g.scrollHeight?g.scrollTop/g.scrollHeight:0;c=e,y(),g.scrollTop=t*g.scrollHeight,v()}h(`.pdf-minus`).addEventListener(`click`,()=>w(Math.max(0,c-1))),h(`.pdf-plus`).addEventListener(`click`,()=>w(Math.min(d.length-1,c+1))),h(`.pdf-ansicht`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-ansicht]`);t&&t.dataset.ansicht!==m&&(m=t.dataset.ansicht,S())}),g.addEventListener(`scroll`,v,{passive:!0});let T=r.aufSprache(C);return S(),{beenden:T}}export{m as starten};