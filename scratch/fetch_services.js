const https = require('https');
const fs = require('fs');

https.get('https://thepermanentmakeupstudios.com/services/', (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        // Parse services using a simple regex extractor
        const services = [];
        
        // Find elementor heading titles
        // <h2 class="elementor-heading-title [^"]*">([^<]+)</h2>
        // Find price titles and prices
        // <span class="title">([^<]+)</span> <span class="line"></span> <span class="price">([^<]+)</span>
        
        // Let's just output the whole HTML to a temporary file in the workspace where we can run a parser script!
        fs.writeFileSync('d:/KRETOSS PROJECT/pm-react/scratch/temp_services.html', data);
        console.log('HTML saved successfully.');
    });
}).on('error', (err) => {
    console.error('Fetch error:', err);
});
