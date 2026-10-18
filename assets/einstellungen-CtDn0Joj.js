import{a as e,i as t,l as n,n as r,t as i}from"./zustand-DODVVnzh.js";import{f as a,n as o}from"./i18n-BQC9yTwP.js";import{t as s}from"./symbole-C2vW5uaA.js";import{sr as c}from"./index-CKe8-rZc.js";var l=[{id:`personalisierung`,schluessel:`es.personalisierung`,symbol:`brush`},{id:`zeit-sprache`,schluessel:`es.zeitSprache`,symbol:`globus`},{id:`barrierefreiheit`,schluessel:`es.barrierefreiheit`,symbol:`barrierefrei`},{id:`system`,schluessel:`es.system`,symbol:`info`}],u=[{id:`halle`,schluessel:`es.hintergrundHalle`},{id:`hof`,schluessel:`es.hintergrundHof`},{id:`plan`,schluessel:`es.hintergrundPlan`},{id:`stahl`,schluessel:`es.hintergrundStahl`}];function d(){let e=navigator.userAgent,t=[[/Edg\/(\d+)/,`Edge`],[/Firefox\/(\d+)/,`Firefox`],[/Chrome\/(\d+)/,`Chrome`],[/Version\/(\d+).*Safari/,`Safari`]].find(([t])=>t.test(e));return t?`${t[1]} ${e.match(t[0])[1]}`:e.slice(0,40)}async function f(f,p){let m=l.some(e=>e.id===p.datei?.seite)?p.datei.seite:`personalisierung`;f.innerHTML=`
    <nav class="es-nav" role="tablist" aria-orientation="vertical"></nav>
    <div class="es-inhalt" role="tabpanel" tabindex="-1"></div>`;let h=f.querySelector(`.es-nav`),g=f.querySelector(`.es-inhalt`),_=(e,t,n,r,i=``)=>`<label class="es-radio"><input type="radio" name="${e}" value="${t}"${n===t?` checked`:``}><span class="es-radio-text">${i}${o(r)}</span></label>`;function v(){if(m===`personalisierung`){let e=t(`hintergrund`),n=t(`thema`);return`
        <h1>${o(a(`es.personalisierung`))}</h1>
        <fieldset class="es-gruppe">
          <legend>${o(a(`es.hintergrund`))}</legend>
          <p class="es-hilfe">${o(a(`es.hintergrundText`))}</p>
          <div class="es-hintergruende">${u.map(t=>`<label class="es-hg"><input type="radio" name="hintergrund" value="${t.id}"${e===t.id?` checked`:``}>
              <span class="es-hg-bild"><img src="${i[t.id]}" alt="" width="160" height="90"></span>
              <span class="es-hg-name">${o(a(t.schluessel))}</span></label>`).join(``)}</div>
        </fieldset>
        <div class="es-gruppe es-schalter-zeile">
          <div><div class="es-titel" id="es-ton-t">${o(a(`es.ton`))}</div><p class="es-hilfe">${o(a(`es.tonText`))}</p></div>
          <label class="es-schalter"><input type="checkbox" role="switch" name="ton" aria-labelledby="es-ton-t"${t(`ton`)?` checked`:``}><span class="es-schalter-bahn" aria-hidden="true"></span></label>
        </div>
        <fieldset class="es-gruppe">
          <legend>${o(a(`es.farbmodus`))}</legend>
          <p class="es-hilfe">${o(a(`es.farbmodusText`))}</p>
          <div class="es-reihe">${_(`thema`,`hell`,n,a(`es.hell`),s(`sonne`,18))}${_(`thema`,`dunkel`,n,a(`es.dunkel`),s(`mond`,18))}</div>
        </fieldset>`}if(m===`zeit-sprache`){let e=t(`sprache`);return`
        <h1>${o(a(`es.zeitSprache`))}</h1>
        <fieldset class="es-gruppe">
          <legend>${o(a(`es.sprache`))}</legend>
          <p class="es-hilfe">${o(a(`es.spracheText`))}</p>
          <div class="es-reihe">${_(`sprache`,`de`,e,a(`es.deutsch`))}${_(`sprache`,`en`,e,a(`es.english`))}</div>
        </fieldset>`}if(m===`barrierefreiheit`){let e=t(`textgroesse`),n=t(`bewegung`);return`
        <h1>${o(a(`es.barrierefreiheit`))}</h1>
        <div class="es-gruppe es-schalter-zeile">
          <div><div class="es-titel" id="es-bewegung-t">${o(a(`es.bewegung`))}</div><p class="es-hilfe">${o(a(`es.bewegungText`))}</p></div>
          <label class="es-schalter"><input type="checkbox" role="switch" name="bewegung" aria-labelledby="es-bewegung-t"${n?` checked`:``}><span class="es-schalter-bahn" aria-hidden="true"></span></label>
        </div>
        <fieldset class="es-gruppe">
          <legend>${o(a(`es.textgroesse`))}</legend>
          <p class="es-hilfe">${o(a(`es.textgroesseText`))}</p>
          <div class="es-reihe">${_(`textgroesse`,`normal`,e,a(`es.normal`))}${_(`textgroesse`,`gross`,e,a(`es.gross`))}${_(`textgroesse`,`sehr-gross`,e,a(`es.sehrGross`))}</div>
        </fieldset>`}let e=[[a(`es.geraet`),a(`es.geraetWert`)],[a(`es.betriebssystem`),a(`es.betriebssystemWert`)],[a(`es.gebaut`),a(`es.gebautWert`)],[a(`es.browser`),d()],[a(`es.bildschirm`),`${window.innerWidth} × ${window.innerHeight} px`],[a(`es.sprachwahl`),t(`sprache`)===`de`?a(`es.deutsch`):a(`es.english`)]];return`
      <h1>${o(a(`es.system`))}</h1>
      <section class="es-gruppe" aria-labelledby="es-info-t">
        <h2 class="es-titel" id="es-info-t">${o(a(`es.info`))}</h2>
        <dl class="es-info">${e.map(([e,t])=>`<div><dt>${o(e)}</dt><dd>${o(t)}</dd></div>`).join(``)}</dl>
        <p class="es-hilfe">${o(a(`es.hinweisNachbau`))}</p>
      </section>
      <div class="es-gruppe es-schalter-zeile">
        <div><div class="es-titel">${o(a(`es.introNochmal`))}</div><p class="es-hilfe">${o(a(`es.introNochmalText`))}</p></div>
        <button type="button" class="es-knopf" data-aktion="intro">${o(a(`es.introKnopf`))}</button>
      </div>
      <div class="es-gruppe es-schalter-zeile">
        <div><div class="es-titel">${o(a(`es.zuruecksetzen`))}</div><p class="es-hilfe">${o(a(`es.zuruecksetzenText`))}</p></div>
        <button type="button" class="es-knopf" data-aktion="zuruecksetzen">${o(a(`es.zuruecksetzenKnopf`))}</button>
      </div>
      <section class="es-gruppe" aria-labelledby="es-tasten-t">
        <h2 class="es-titel" id="es-tasten-t">${o(a(`es.tasten`))}</h2>
        <p class="es-hilfe">${o(a(`es.tastenText`))}</p>
      </section>`}function y(){let e=document.activeElement?.closest?.(`.app-einstellungen`)?[document.activeElement.name,document.activeElement.value,document.activeElement.dataset?.seite,document.activeElement.dataset?.aktion]:null;if(h.setAttribute(`aria-label`,a(`es.nav`)),h.innerHTML=l.map(e=>`<button type="button" class="es-nav-eintrag${e.id===m?` aktiv`:``}" role="tab" id="es-tab-${e.id}" aria-selected="${e.id===m}" aria-controls="es-panel" tabindex="${e.id===m?0:-1}" data-seite="${e.id}">${s(e.symbol,20)}<span>${o(a(e.schluessel))}</span></button>`).join(``),g.id=`es-panel`,g.setAttribute(`aria-labelledby`,`es-tab-${m}`),g.innerHTML=v(),e){let[t,n,r,i]=e;(t&&f.querySelector(`input[name="${t}"][value="${n}"]`)||t&&f.querySelector(`input[name="${t}"]`)||r&&f.querySelector(`[data-seite="${r}"]`)||i&&f.querySelector(`[data-aktion="${i}"]`))?.focus({preventScroll:!0})}}h.addEventListener(`click`,e=>{let t=e.target.closest(`[data-seite]`);t&&(m=t.dataset.seite,y())}),h.addEventListener(`keydown`,e=>{let t=[...h.querySelectorAll(`[data-seite]`)],n=t.indexOf(document.activeElement);n<0||![`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key)||(e.preventDefault(),m=t[e.key===`Home`?0:e.key===`End`?t.length-1:(n+(e.key===`ArrowDown`?1:-1)+t.length)%t.length].dataset.seite,y(),h.querySelector(`[data-seite="${m}"]`).focus())}),g.addEventListener(`change`,t=>{let n=t.target;n.name===`bewegung`||n.name===`ton`?e(n.name,n.checked):n.name&&e(n.name,n.value)}),g.addEventListener(`click`,e=>{let t=e.target.closest(`[data-aktion]`);t&&(t.dataset.aktion===`intro`?c():t.dataset.aktion===`zuruecksetzen`&&n())});let b=r(`*`,y);return y(),{beenden:b,neueDatei(e){e?.seite&&l.some(t=>t.id===e.seite)&&(m=e.seite,y())}}}export{f as starten};