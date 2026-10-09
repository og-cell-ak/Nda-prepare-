const fs=require('fs'),vm=require('vm'),path=require('path');
const root=path.resolve(__dirname,'..');
const bankCode=fs.readFileSync(path.join(root,'bank.js'),'utf8');
const appCode=fs.readFileSync(path.join(root,'app.js'),'utf8');
new vm.Script(bankCode,{filename:'bank.js'}); new vm.Script(appCode,{filename:'app.js'});
const sandbox={}; vm.runInNewContext(bankCode+'\nthis.__bank=BANK;',sandbox); const bank=sandbox.__bank;
if(!Array.isArray(bank)||bank.length<20) throw Error('Question bank needs at least 20 questions');
const ids=new Set(); for(const q of bank){if(!q.id||ids.has(q.id))throw Error('Missing or duplicate id: '+q.id);ids.add(q.id);if(!Array.isArray(q.options)||q.options.length!==4)throw Error('Question needs four options: '+q.id);if(!Number.isInteger(q.answer)||q.answer<0||q.answer>3)throw Error('Invalid answer: '+q.id);if(!q.explanation||!q.topic||!q.level)throw Error('Missing explanation/topic/level: '+q.id);}
for(const f of ['index.html','styles.css'])if(!fs.existsSync(path.join(root,f)))throw Error('Missing '+f);
console.log('PASS: syntax, required files, '+bank.length+' questions, unique IDs, answer indices and explanations.');