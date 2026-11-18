(() => {
  'use strict';
  const dictionary = {
    es:{eyebrow:'UN CUENTO SOLO PARA TI',heroTitle:'Érase una vez... ¡tú!',heroBody:'Elige tu nombre y en qué criatura mágica quieres convertirte. El bosque y sus aventuras te esperan.',nameLabel:'¿Cómo se llama quien protagoniza el cuento?',privacyNote:'Su nombre se utiliza solo en este dispositivo. No se envía a ningún servidor.',genderLabel:'¿Cómo quieres que hablemos del personaje?',girl:'Niña',boy:'Niño',creatureLabel:'¿Quién quieres ser en esta aventura?',unicorn:'Unicornio',unicornDetail:'Con un cuerno brillante',dinosaur:'Dinosaurio',dinosaurDetail:'Con escamas y cola',start:'¡Empezar mi cuento!',footer:'Una historia para leer en familia · Castellano y catalán',footerShort:'Tu nombre. Tu personaje. Tu aventura.',change:'Cambiar personaje',previous:'Anterior',next:'Siguiente',end:'¡He terminado!',page:'PÁGINA',of:'DE',storyDraft:'Basado en el cuento original de Javier L. Teso. Narración completa personalizada.',quizTitle:'¿Qué recuerdas del cuento?',quizIntro:'Responde y comprueba al final. Las respuestas acertadas desaparecerán; podrás corregir las demás.',check:'Comprobar respuestas',reread:'Volver a leer el cuento',retry:'Inténtalo otra vez.',tryAgain:'Tienes respuestas para revisar. ¡Prueba de nuevo!',wellDone:'¡Fantástico! Has respondido todas correctamente.',needAnswer:'Responde a todas las preguntas que aparecen.'},
    ca:{eyebrow:'UN CONTE NOMÉS PER A TU',heroTitle:'Vet aquí una vegada... tu!',heroBody:'Tria el teu nom i en quina criatura màgica et vols convertir. El bosc i les seves aventures t’esperen.',nameLabel:'Com es diu qui protagonitza el conte?',privacyNote:'El nom només s’utilitza en aquest dispositiu. No s’envia a cap servidor.',genderLabel:'Com vols que parlem del personatge?',girl:'Nena',boy:'Nen',creatureLabel:'Qui vols ser en aquesta aventura?',unicorn:'Unicorn',unicornDetail:'Amb una banya brillant',dinosaur:'Dinosaure',dinosaurDetail:'Amb escates i cua',start:'Comença el meu conte!',footer:'Una història per llegir en família · Castellà i català',footerShort:'El teu nom. El teu personatge. La teva aventura.',change:'Canviar el personatge',previous:'Anterior',next:'Següent',end:'Ja he acabat!',page:'PÀGINA',of:'DE',storyDraft:'Basat en el conte original de Javier L. Teso. Traducció catalana.',quizTitle:'Què recordes del conte?',quizIntro:'Respon i comprova al final. Les respostes correctes desapareixeran; podràs corregir les altres.',check:'Comprovar les respostes',reread:'Tornar a llegir el conte',retry:'Torna-ho a provar.',tryAgain:'Tens respostes per revisar. Torna-ho a provar!',wellDone:'Fantàstic! Has respost totes les preguntes correctament.',needAnswer:'Respon totes les preguntes que es mostren.'}
  };
  const quiz = {
    es:[
      {q:'¿Dónde ocurre la historia?',options:['En una ciudad','En un bosque','En la playa'],answer:1},
      {q:'¿Quién cuida la muela del protagonista?',options:['El señor Castor','El señor Lobo','Un dragón'],answer:0},
      {q:'¿Qué transportaba el lobo?',options:['Libros y lápices','Frutas y verduras','Caramelos, helados y chocolatinas'],answer:2},
      {q:'¿Qué es lo más importante que aprendemos?',options:['Seguir a un desconocido si trae regalos','Consultar a un adulto de confianza antes de aceptar regalos de desconocidos','Comer dulces a todas horas'],answer:1}
    ],
    ca:[
      {q:'On passa la història?',options:['En una ciutat','En un bosc','A la platja'],answer:1},
      {q:'Qui cura el queixal del protagonista?',options:['El senyor Castor','El senyor Llop','Un drac'],answer:0},
      {q:'Què portava el llop?',options:['Llibres i llapis','Fruita i verdures','Caramels, gelats i xocolatines'],answer:2},
      {q:'Què és el més important que aprenem?',options:['Seguir un desconegut si porta regals','Consultar un adult de confiança abans d’acceptar regals de desconeguts','Menjar dolços a totes hores'],answer:1}
    ]
  };
  const $ = id => document.getElementById(id);
  const by = selector => [...document.querySelectorAll(selector)];
  const initial = {name:'',gender:'f',creature:'unicorn',lang:'es'};
  function getPrefs(){try{const value=JSON.parse(localStorage.getItem('cuentame-prefs')||'{}');return {...initial,...value}}catch{return {...initial}}}
  const state={...getPrefs(),view:'setup',page:0,answers:{},solved:[]};
  if(!['es','ca'].includes(state.lang))state.lang='es';
  if(!['f','m'].includes(state.gender))state.gender='f';
  if(!['unicorn','dinosaur'].includes(state.creature))state.creature='unicorn';
  state.name=String(state.name||'').slice(0,24);
  const t = key => dictionary[state.lang][key];
  function prefs(){try{localStorage.setItem('cuentame-prefs',JSON.stringify({name:state.name,gender:state.gender,creature:state.creature,lang:state.lang}))}catch{}}
  function context(){return {name:state.name,female:state.gender==='f',unicorn:state.creature==='unicorn'}}
  function show(view){state.view=view;by('.view').forEach(el=>el.classList.toggle('hidden',el.id!==view+'View'));window.scrollTo({top:0,behavior:'auto'});}
  function translate(){document.documentElement.lang=state.lang;by('[data-i18n]').forEach(el=>{el.textContent=t(el.dataset.i18n)});by('[data-lang]').forEach(el=>{const a=el.dataset.lang===state.lang;el.classList.toggle('active',a);el.setAttribute('aria-pressed',String(a))});$('childName').placeholder=state.lang==='es'?'Escribe su nombre':'Escriu el seu nom';if(state.view==='reader')renderPage();if(state.view==='quiz')renderQuiz();}
  function restoreForm(){$('childName').value=state.name;by('input[name=gender]').forEach(x=>x.checked=x.value===state.gender);by('input[name=creature]').forEach(x=>x.checked=x.value===state.creature)}
  function pageData(){return window.STORY_LIBRARY[state.lang]}
  function renderPage(){const story=pageData(),p=story.pages[state.page],c=context();$('storyLabel').textContent=story.title.toLocaleUpperCase(state.lang);$('chapterLabel').textContent=`${t('page')} ${state.page+1} ${t('of')} ${story.pages.length}`;$('storyTitle').textContent=p.title;$('storyText').innerHTML=p.text(c).split('\n\n').map(s=>`<p>${s}</p>`).join('');$('illustrationHero').textContent=state.creature==='unicorn'?'🦄':'🦕';$('illustrationOther').textContent=p.other;$('storyIllustration').dataset.scene=p.scene;$('prevButton').disabled=state.page===0;$('nextButton').querySelector('span').textContent=state.page===story.pages.length-1?t('end'):t('next');$('pageDots').replaceChildren();for(let i=0;i<story.pages.length;i++){const btn=document.createElement('button');btn.type='button';btn.className='page-dot'+(i===state.page?' active':'');btn.title=`${t('page')} ${i+1}`;btn.setAttribute('aria-label',`${t('page')} ${i+1}`);btn.setAttribute('aria-current',String(i===state.page));btn.addEventListener('click',()=>{state.page=i;renderPage()});$('pageDots').appendChild(btn)}}
  function read(){show('reader');renderPage()}
  function renderQuiz(){const root=$('quizQuestions');root.replaceChildren();quiz[state.lang].forEach((item,i)=>{if(state.solved.includes(i))return;const field=document.createElement('fieldset');field.className='quiz-question';field.dataset.question=String(i);const leg=document.createElement('legend');leg.textContent=`${i+1}. ${item.q}`;field.appendChild(leg);item.options.forEach((option,j)=>{const label=document.createElement('label');label.className='quiz-option';const input=document.createElement('input');input.type='radio';input.name=`q${i}`;input.value=String(j);input.checked=state.answers[i]===j;input.addEventListener('change',()=>state.answers[i]=j);label.append(input,document.createTextNode(option));field.appendChild(label)});root.appendChild(field)});$('quizResult').textContent=state.solved.length===quiz[state.lang].length?t('wellDone'):'';}
  by('[data-lang]').forEach(btn=>btn.addEventListener('click',()=>{state.lang=btn.dataset.lang;state.answers={};state.solved=[];prefs();translate()}));
  $('setupForm').addEventListener('submit',e=>{e.preventDefault();const name=$('childName').value.trim().replace(/\s+/g,' ');if(!name){$('childName').focus();return}state.name=name;state.gender=document.querySelector('input[name=gender]:checked').value;state.creature=document.querySelector('input[name=creature]:checked').value;state.page=0;state.answers={};state.solved=[];prefs();read()});
  $('editButton').addEventListener('click',()=>{restoreForm();show('setup')});
  $('homeLink').addEventListener('click',e=>{e.preventDefault();restoreForm();show('setup')});
  $('prevButton').addEventListener('click',()=>{state.page=Math.max(0,state.page-1);renderPage()});
  $('nextButton').addEventListener('click',()=>{if(state.page===pageData().pages.length-1){show('quiz');renderQuiz()}else{state.page++;renderPage()}});
  $('quizForm').addEventListener('submit',e=>{e.preventDefault();const pending=quiz[state.lang].map((q,i)=>i).filter(i=>!state.solved.includes(i));if(pending.some(i=>state.answers[i]===undefined)){$('quizResult').textContent=t('needAnswer');return}pending.forEach(i=>{if(state.answers[i]===quiz[state.lang][i].answer)state.solved.push(i)});renderQuiz();if(state.solved.length!==quiz[state.lang].length){$('quizResult').textContent=t('tryAgain');by('.quiz-question').forEach(el=>{el.classList.add('is-wrong');const note=document.createElement('p');note.className='retry';note.textContent=t('retry');el.appendChild(note)})}});
  $('rereadButton').addEventListener('click',()=>{state.page=0;read()});
  restoreForm();translate();
  if('serviceWorker' in navigator && (location.protocol==='https:' || location.hostname==='localhost'))navigator.serviceWorker.register('./sw.js').catch(()=>{});
})();
