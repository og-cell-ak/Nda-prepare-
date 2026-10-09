const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const out = path.join(root, 'www');
fs.rmSync(out, {recursive:true, force:true});
fs.mkdirSync(out, {recursive:true});
for (const file of ['index.html','styles.css','app.js','bank.js']) fs.copyFileSync(path.join(root,file),path.join(out,file));
console.log('Built offline web app into www/');