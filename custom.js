// Custom JavaScript

// Add jQuery (using a CDN link)
var script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

// Add Font Awesome (using a CDN link)
var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css';
document.getElementsByTagName('head')[0].appendChild(link);
