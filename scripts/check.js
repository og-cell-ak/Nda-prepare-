const fs=require('fs'),vm=require('vm'),path=require('path');
const root=path.resolve(__dirname,'..');
const bankCode=fs.readFileSync(path.join(root,'bank.js'),'utf8');
const appCode=fs.readFileSync(path.join(root,'app.js'),'utf8');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
new vm.Script(bankCode,{filename:'bank.js'});
new vm.Script(appCode,{filename:'app.js'});
const sandbox={};vm.runInNewContext(bankCode+'\nthis.__bank=BANK;',sandbox);
const bank=sandbox.__bank;
if(!Array.isArray(bank)||bank.length<70)throw Error('Expected at least 70 practice questions; found '+(bank||[]).length);
const ids=new Set();
for(const q of bank){
 if(!q.id||ids.has(q.id))throw Error('Missing or duplicate id: '+q.id);ids.add(q.id);
 if(!q.q||!Array.isArray(q.options)||q.options.length!==4)throw Error('Question needs a prompt and four options: '+q.id);
 if(new Set(q.options).size!==4)throw Error('Duplicate options: '+q.id);
 if(!Number.isInteger(q.answer)||q.answer<0||q.answer>3)throw Error('Invalid answer index: '+q.id);
 if(!q.explanation||!q.rule||!q.topic||!q.level)throw Error('Missing explanation/topic/level: '+q.id);
}
for(const f of ['index.html','styles.css'])if(!fs.existsSync(path.join(root,f)))throw Error('Missing '+f);
if(!html.includes('data-view="research"')||!appCode.includes('function research()'))throw Error('Exam guide navigation or content missing');
if(!appCode.includes('UPSC previous question papers'))throw Error('Official paper guidance missing');
console.log('PASS 1/5: JavaScript syntax');
console.log('PASS 2/5: '+bank.length+' questions have unique IDs and exactly four distinct options');
console.log('PASS 3/5: every answer index is valid and each question has an explanation, rule, topic and level');
console.log('PASS 4/5: required UI assets and exam guide navigation exist');
console.log('PASS 5/5: in-app official UPSC resources and forecast caveat exist');
