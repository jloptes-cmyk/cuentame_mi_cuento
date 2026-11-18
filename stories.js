/*
 * CONTENIDO PROVISIONAL
 * Esta versión de ocho páginas reproduce el argumento general del cuento
 * compartido por su autor, pero NO es una transcripción literal del original.
 * Sustituir estas ocho páginas por los textos definitivos antes del lanzamiento.
 */
(function(){
  const h = s => String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const marked = n => `<strong>${h(n)}</strong>`;
  const data = {
    es: {
      title:'Las golosinas del lobo',
      pages:[
        {title:'En el bosque encantado',scene:'forest',other:'🌸',text:c=>`En un bosque lleno de árboles enormes y flores de mil colores vivía ${marked(c.name)}, ${c.unicorn ? (c.female?'una pequeña unicornia rosa':'un pequeño unicornio rosa') : (c.female?'una pequeña dinosauria verde':'un pequeño dinosaurio verde')}.

${marked(c.name)} era ${c.female?'alegre y curiosa':'alegre y curioso'} y disfrutaba jugando por los caminos del bosque.`},
        {title:'¡Qué ricas golosinas!',scene:'candy',other:'🍭',text:c=>`A ${marked(c.name)} le encantaban los caramelos, las chocolatinas y los helados. Si pudiera, ¡comería dulces a todas horas!

Pero un día, después de tantas golosinas, empezó a dolerle una muela. ¡Ay, ay, ay!`},
        {title:'El señor Castor',scene:'dentist',other:'🦫',text:c=>`${marked(c.name)} fue a visitar al señor Castor, el dentista del bosque.

—Veamos esa muela —dijo el castor con amabilidad—. Tienes una caries. Vamos a curarla para que puedas volver a sonreír.`},
        {title:'Un consejo importante',scene:'dentist',other:'🪥',text:c=>`Después de arreglarle la muela, el señor Castor le dio un cepillo de dientes.

—Los dulces son para ocasiones especiales. Y recuerda: nunca aceptes regalos de desconocidos sin hablar antes con tu familia.

${marked(c.name)} prometió tenerlo muy presente.`},
        {title:'Una carretilla misteriosa',scene:'candy',other:'🐺',text:c=>`Una tarde, mientras paseaba por el bosque, ${marked(c.name)} encontró a un lobo junto a una carretilla repleta de caramelos, helados y chocolatinas.

—¡Acércate! —le dijo el lobo con una sonrisa—. Tengo las golosinas más deliciosas de todo el bosque.`},
        {title:'El chocolate de corazón',scene:'candy',other:'🍫',text:c=>`En lo alto de la carretilla brillaba una chocolatina con forma de corazón. Era tan bonita que ${marked(c.name)} se acercó para verla mejor.

—Está justo aquí, al fondo —susurró el lobo—. Puedes cogerla tú ${c.female?'misma':'mismo'}.

${marked(c.name)} olvidó por un instante el consejo del señor Castor.`},
        {title:'El secreto del lobo',scene:'night',other:'🐺',text:c=>`Cuando ${marked(c.name)} se asomó a la carretilla, el lobo ${c.female?'la':'lo'} empujó de golpe y cerró la tapa.

El lobo agarró las asas y se adentró entre los árboles, hasta perderse en la parte más oscura del bosque.

Nadie volvió a ver a ${marked(c.name)}.`},
        {title:'Lo que aprendemos',scene:'warning',other:'💛',text:c=>`El cuento de ${marked(c.name)} nos recuerda algo importante: aunque un regalo parezca maravilloso, no debemos seguir a desconocidos ni aceptar sus propuestas sin consultar a un adulto de confianza.

Y para cuidar nuestros dientes, ¡mejor disfrutar de los dulces con moderación y cepillarnos bien!`}
      ]
    },
    ca: {
      title:'Les llaminadures del llop',
      pages:[
        {title:'Al bosc encantat',scene:'forest',other:'🌸',text:c=>`En un bosc ple d'arbres enormes i flors de mil colors hi vivia ${marked(c.name)}, ${c.unicorn ? (c.female?"una petita criatura amb forma d'unicorn rosa":'un petit unicorn rosa') : (c.female?'una petita criatura amb forma de dinosaure verd':'un petit dinosaure verd')}.

A ${marked(c.name)} li agradava molt jugar pels camins del bosc i sempre tenia ganes de descobrir coses noves.`},
        {title:'Que bones, les llaminadures!',scene:'candy',other:'🍭',text:c=>`A ${marked(c.name)} li encantaven els caramels, les xocolatines i els gelats. Si pogués, menjaria dolços a totes hores!

Però un dia, després de menjar tantes llaminadures, li va començar a fer mal un queixal. Ai, ai, ai!`},
        {title:'El senyor Castor',scene:'dentist',other:'🦫',text:c=>`${marked(c.name)} va anar a visitar el senyor Castor, el dentista del bosc.

—A veure aquest queixal —va dir el castor amablement—. Tens una càries. Te la curarem perquè puguis tornar a somriure.`},
        {title:'Un consell important',scene:'dentist',other:'🪥',text:c=>`Després d'arreglar-li el queixal, el senyor Castor li va donar un raspall de dents.

—Els dolços són per a ocasions especials. I recorda: no acceptis mai regals de desconeguts sense parlar abans amb la teva família.

${marked(c.name)} va prometre que no ho oblidaria.`},
        {title:'Un carretó misteriós',scene:'candy',other:'🐺',text:c=>`Una tarda, mentre passejava pel bosc, ${marked(c.name)} va trobar un llop al costat d'un carretó ple de caramels, gelats i xocolatines.

—Acosta't! —li va dir el llop amb un somriure—. Tinc les llaminadures més delicioses de tot el bosc.`},
        {title:'La xocolatina en forma de cor',scene:'candy',other:'🍫',text:c=>`Dalt de tot del carretó brillava una xocolatina en forma de cor. Era tan bonica que ${marked(c.name)} s'hi va acostar per veure-la millor.

—És aquí al fons —va xiuxiuejar el llop—. La pots agafar.

${marked(c.name)} va oblidar per un instant el consell del senyor Castor.`},
        {title:'El secret del llop',scene:'night',other:'🐺',text:c=>`Quan ${marked(c.name)} es va abocar al carretó, el llop hi va donar una empenta i en va tancar la tapa de cop.

El llop va agafar les nanses i es va endinsar entre els arbres, fins que es va perdre a la part més fosca del bosc.

Ningú no va tornar a veure ${marked(c.name)}.`},
        {title:"Què n’aprenem?",scene:'warning',other:'💛',text:c=>`El conte de ${marked(c.name)} ens recorda una cosa important: encara que un regal sembli meravellós, no hem de seguir desconeguts ni acceptar les seves propostes sense consultar abans un adult de confiança.

I per cuidar les dents, és millor gaudir dels dolços amb moderació i raspallar-nos-les bé!`}
      ]
    }
  };
  window.STORY_LIBRARY = data;
})();
