const fs = require('fs');

try {
    const html = fs.readFileSync('d:/KRETOSS PROJECT/pm-react/scratch/temp_services.html', 'utf8');
    
    // We want to extract the structure:
    // Sections have headings like: <h2 class="elementor-heading-title elementor-size-default">...</h2>
    // Inside each section, there are accordions:
    // <span class="title">...</span> <span class="line"></span> <span class="price">...</span>
    // And descriptions: <div id="elementor-tab-content-..." ...><p>...</p></div>
    
    // Let's do a regex scan or simple parse
    const cleanOutput = [];
    
    // Let's divide by elementor-accordion-item or general structure
    const sections = html.split(/class="elementor-heading-title elementor-size-default">/g);
    
    // The first split is intro
    sections.shift();
    
    sections.forEach(sec => {
        const titleEnd = sec.indexOf('</h2>');
        if (titleEnd === -1) return;
        const sectionTitle = sec.substring(0, titleEnd).trim();
        
        cleanOutput.push(`\n=========================================\nSECTION: ${sectionTitle}\n=========================================\n`);
        
        // Find all accordion items inside this section
        const items = sec.split(/<div class="elementor-accordion-item">/g);
        items.shift(); // remove leading
        
        items.forEach(item => {
            const titleMatch = item.match(/<span class="title">([^<]+)<\/span>/);
            const priceMatch = item.match(/<span class="price">([^<]+)<\/span>/);
            
            if (titleMatch && priceMatch) {
                const title = titleMatch[1].trim();
                const price = priceMatch[1].trim();
                
                // Find content
                const contentMatch = item.match(/<div id="elementor-tab-content-[^"]*"[^>]*>([\s\S]*?)<\/div>/);
                let content = '';
                if (contentMatch) {
                    content = contentMatch[1].replace(/<[^>]+>/g, '').trim();
                }
                
                cleanOutput.push(`SERVICE: ${title} | PRICE: ${price}`);
                if (content) {
                    cleanOutput.push(`DESCRIPTION: ${content}`);
                }
                cleanOutput.push('-----------------------------------------');
            }
        });
    });
    
    fs.writeFileSync('d:/KRETOSS PROJECT/pm-react/scratch/clean_services.txt', cleanOutput.join('\n'));
    console.log('Clean services list written.');
} catch (e) {
    console.error('Error parsing:', e);
}
