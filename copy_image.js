import fs from 'fs';
import path from 'path';

const srcDir = 'C:/Users/Admin/.gemini/antigravity-ide/brain/968320d7-b2da-488f-bfd6-02eb957b9f90';
const destDir = 'd:/KRETOSS PROJECT/pm-react/public';

const files = [
    { src: 'eyelash_before_base_1784269665913.png', dest: 'eyebrows_before.png' },
    { src: 'eyebrows_after_1784269809253.png', dest: 'eyebrows_after.png' },
    { src: 'eyelash_before_base_1784269665913.png', dest: 'eyeliner_before.png' },
    { src: 'eyeliner_after_1784269794588.png', dest: 'eyeliner_after.png' },
    { src: 'eyelash_before_base_1784269665913.png', dest: 'volume_lashes_before.png' },
    { src: 'volume_lashes_after_1784269766974.png', dest: 'volume_lashes_after.png' },
    { src: 'eyelash_before_base_1784269665913.png', dest: 'hybrid_lashes_before.png' },
    { src: 'hybrid_lashes_after_1784269780865.png', dest: 'hybrid_lashes_after.png' },
    { src: 'eyelash_before_base_1784269665913.png', dest: 'lash_lift_before.png' },
    { src: 'lash_lift_after_1784269680606.png', dest: 'lash_lift_after.png' },
    { src: 'eyelash_before_base_1784269665913.png', dest: 'classic_lashes_before.png' },
    { src: 'classic_lashes_after_1784270603253.png', dest: 'classic_lashes_after.png' }
];

files.forEach(f => {
    try {
        fs.copyFileSync(path.join(srcDir, f.src), path.join(destDir, f.dest));
        console.log(`Copied ${f.src} to ${f.dest}`);
    } catch (e) {
        console.error(`Failed to copy ${f.src}:`, e.message);
    }
});
