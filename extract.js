const fs = require('fs');

if (!fs.existsSync('index.html')) {
    console.error('index.html not found');
    process.exit(1);
}

// Backup index.html
fs.copyFileSync('index.html', 'index.html.bak');
console.log('Backed up index.html to index.html.bak');

let html = fs.readFileSync('index.html', 'utf8');

// Extract all styles
let styles = [];
html = html.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (match, p1) => {
    styles.push(p1);
    return ''; // remove from html
});

if (styles.length > 0) {
    fs.writeFileSync('style.css', styles.join('\n'));
    console.log('Created style.css');
    // Inject link to style.css in head
    if (html.includes('</head>')) {
        html = html.replace('</head>', '<link rel="stylesheet" href="style.css">\n</head>');
    } else {
        html = '<link rel="stylesheet" href="style.css">\n' + html;
    }
} else {
    console.log('No <style> tags found.');
}

// Extract all scripts
// But exclude scripts with src attributes because those are already external
let scripts = [];
html = html.replace(/<script([^>]*)>([\s\S]*?)<\/script>/gi, (match, p1, p2) => {
    if (p1.includes('src=')) {
        return match; // keep external scripts
    }
    if (p2.trim().length > 0) {
        scripts.push(p2);
        return ''; // remove inline script
    }
    return match;
});

if (scripts.length > 0) {
    fs.writeFileSync('script.js', scripts.join('\n'));
    console.log('Created script.js');
    // Inject script.js before </body>
    if (html.includes('</body>')) {
        html = html.replace('</body>', '<script src="script.js"></script>\n</body>');
    } else {
        html += '\n<script src="script.js"></script>';
    }
} else {
    console.log('No inline <script> tags found.');
}

fs.writeFileSync('index.html', html);
console.log('Updated index.html');
