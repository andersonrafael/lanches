const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const idx = html.indexOf('cancelBtn');
if (idx > -1) {
    console.log(html.substring(Math.max(0, idx - 500), idx + 500));
} else {
    console.log('not found');
}
