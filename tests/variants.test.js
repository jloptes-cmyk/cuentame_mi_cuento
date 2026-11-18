'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');
const root = path.resolve(__dirname,'..');
const window = {};
vm.runInNewContext(fs.readFileSync(path.join(root,'stories.js'),'utf8'), {window});
const unbold = s => s.replace(/<\/?strong>/g,'');
const book = window.STORY_LIBRARY;
for (const creature of ['unicornio', 'conejo']) {
  for (const gender of ['nina','nino']) {
    const female = gender === 'nina';
    const unicorn = creature === 'unicornio';
    const name = female ? 'Iris' : 'Leo';
    const context = {name,female,unicorn};
    const renderedES = book.es.pages.map(p => unbold(p.text(context))).join('\n\n');
    const expected = fs.readFileSync(path.join(root,'variantes',`Las_golosinas_del_lobo_${creature}_${gender}.txt`),'utf8')
      .trim().replace(/^LAS GOLOSINAS DEL LOBO\n\n/,'');
    assert.strictEqual(renderedES,expected,`El texto castellano no coincide: ${creature}/${gender}`);
    assert.strictEqual(book.es.pages.length,10);
    assert(renderedES.includes(`Nadie volvió a ver a ${name}.`));
    assert(!renderedES.includes('{{'));
    if (!unicorn) assert(!/unicornio|unicornia/i.test(renderedES));
    if (unicorn) assert(!/conejito|conejita/i.test(renderedES));
    if (!female) {
      for (const fragment of ['engañarlo.', 'lo dejó encerrado.', 'tú mismo.', 'Su papá lo llevó']) assert(renderedES.includes(fragment));
      for (const fragment of ['engañarla.', 'la dejó encerrada.', 'tú misma.', 'Su papá la llevó']) assert(!renderedES.includes(fragment));
    }
    const renderedCA = book.ca.pages.map(p => unbold(p.text(context))).join('\n\n');
    assert(renderedCA.includes(`Ningú no va tornar a veure ${name}.`));
    assert(!renderedCA.includes('{{'));
    assert.strictEqual(renderedCA.split('\n\n').length,60);
    if (!female) assert(renderedCA.includes('enganyar-lo') && renderedCA.includes('va deixar tancat'));
    if (female) assert(renderedCA.includes('enganyar-la') && renderedCA.includes('va deixar tancada'));
    if (!unicorn) assert(!/\bunicorn\b/.test(renderedCA));
    if (unicorn) assert(!/\bconillet\b|\bconilleta\b/.test(renderedCA));
    if (!unicorn) {
      assert(renderedES.includes(female ? 'una pequeña conejita blanca' : 'un pequeño conejito blanco'));
      assert(renderedES.includes(female ? 'estaba contenta' : 'estaba contento'));
      assert(renderedCA.includes(female ? 'una petita conilleta blanca' : 'un petit conillet blanc'));
      assert(renderedCA.includes(female ? 'estava contenta' : 'estava content'));
      assert(renderedES.includes('levantó las orejas'));
      assert(renderedCA.includes('va alçar les orelles'));
    }
    console.log(`✓ ${creature} / ${gender} (ES y CAT)`);
  }
}
for (const lang of ['es','ca']) {
 const escaped=book[lang].pages[0].text({name:'<script>alert(1)</script>',female:true,unicorn:true});
 assert(!escaped.includes('<script>') && escaped.includes('&lt;script&gt;'));
}
console.log('✓ Nombres escapados y textos completos verificados');
