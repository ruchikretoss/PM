import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'
import https from 'https'

// Auto-copy generated assets from brain folder to public folder on Vite startup

try {
    const srcDir = 'C:/Users/Admin/.gemini/antigravity-ide/brain/826b11f8-82f3-44b5-92c0-54e90e71a0c7';
    const destDir = 'd:/KRETOSS PROJECT/pm-react/public';

    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
    }

    if (fs.existsSync(srcDir)) {
        const files = fs.readdirSync(srcDir);
        
        const fileMap = {
            'lash_training_split': 'lash_training_split.png',
            'lip_blush_training_split': 'lip_blush_training_split.png',
            'powder_brows_training_split': 'powder_brows_training_split.png',
            'eyeliner_training_split': 'eyeliner_training_split.png',
            'lash_training_single': 'lash_training_single.png',
            'lip_blush_training_single': 'lip_blush_training_single.png',
            'powder_brows_training_single': 'powder_brows_training_single.png',
            'eyeliner_training_single': 'eyeliner_training_single.png',
            'classic_eyelash_extensions': 'classic_eyelash_extensions.png',
            'hybrid_eyelash_extensions': 'hybrid_eyelash_extensions.png',
            'smp_before': 'smp_before.png',
            'smp_after': 'smp_after.png',
            'lip_blush_before': 'lip_blush_before.png',
            'lip_blush_after': 'lip_blush_after.png',
            'powder_brows_before': 'powder_brows_before.png',
            'powder_brows_after': 'powder_brows_after.png',
            'about_parallax_bg': 'about_parallax_bg.png',
            'service_lashes': 'service_lashes.png',
            'service_brows': 'service_brows.png',
            'service_lipblush': 'service_lipblush.png',
            'smp_hero_banner': 'smp_hero_banner.png',
            'smp_treatment_close_up': 'smp_treatment_close_up.png',
            'scar_camouflage_hero_banner': 'scar_camouflage_hero_banner.png',
            'scar_camouflage_treatment_needle': 'scar_camouflage_treatment_needle.png',
            'scar_before': 'scar_before.png',
            'scar_after': 'scar_after.png'
        };

        files.forEach(file => {
            Object.keys(fileMap).forEach(key => {
                if (file.startsWith(key) && file.endsWith('.png')) {
                    const srcPath = path.join(srcDir, file);
                    const destPath = path.join(destDir, fileMap[key]);
                    fs.copyFileSync(srcPath, destPath);
                    
                    // Duplicate lash_training_single for volume eyelash extensions
                    if (key === 'lash_training_single') {
                        fs.copyFileSync(srcPath, path.join(destDir, 'volume_eyelash_extensions.png'));
                    }
                }
            });
        });
    }
} catch (err) {
    console.error('Vite startup asset auto-copy failed:', err);
}

// Custom Vite plugin to copy generated assets on compilation start
const copyGeneratedAssetsPlugin = () => ({
    name: 'copy-generated-assets',
    buildStart() {
        try {
            const srcDir = 'C:/Users/Admin/.gemini/antigravity-ide/brain/826b11f8-82f3-44b5-92c0-54e90e71a0c7';
            const destDir = 'd:/KRETOSS PROJECT/pm-react/public';

            if (!fs.existsSync(destDir)) {
                fs.mkdirSync(destDir, { recursive: true });
            }

            if (fs.existsSync(srcDir)) {
                const files = fs.readdirSync(srcDir);
                
                const fileMap = {
                    'lash_training_split': 'lash_training_split.png',
                    'lip_blush_training_split': 'lip_blush_training_split.png',
                    'powder_brows_training_split': 'powder_brows_training_split.png',
                    'eyeliner_training_split': 'eyeliner_training_split.png',
                    'lash_training_single': 'lash_training_single.png',
                    'lip_blush_training_single': 'lip_blush_training_single.png',
                    'powder_brows_training_single': 'powder_brows_training_single.png',
                    'eyeliner_training_single': 'eyeliner_training_single.png',
                    'classic_eyelash_extensions': 'classic_eyelash_extensions.png',
                    'hybrid_eyelash_extensions': 'hybrid_eyelash_extensions.png',
                    'smp_before': 'smp_before.png',
                    'smp_after': 'smp_after.png',
                    'lip_blush_before': 'lip_blush_before.png',
                    'lip_blush_after': 'lip_blush_after.png',
                    'powder_brows_before': 'powder_brows_before.png',
                    'powder_brows_after': 'powder_brows_after.png',
                    'about_parallax_bg': 'about_parallax_bg.png',
                    'service_lashes': 'service_lashes.png',
                    'service_brows': 'service_brows.png',
                    'service_lipblush': 'service_lipblush.png',
                    'smp_hero_banner': 'smp_hero_banner.png',
                    'smp_treatment_close_up': 'smp_treatment_close_up.png',
                    'scar_camouflage_hero_banner': 'scar_camouflage_hero_banner.png',
                    'scar_camouflage_treatment_needle': 'scar_camouflage_treatment_needle.png',
                    'scar_before': 'scar_before.png',
                    'scar_after': 'scar_after.png'
                };

                files.forEach(file => {
                    Object.keys(fileMap).forEach(key => {
                        if (file.startsWith(key) && file.endsWith('.png')) {
                            const srcPath = path.join(srcDir, file);
                            const destPath = path.join(destDir, fileMap[key]);
                            fs.copyFileSync(srcPath, destPath);
                            
                            if (key === 'lash_training_single') {
                                  fs.copyFileSync(srcPath, path.join(destDir, 'volume_eyelash_extensions.png'));
                            }
                        }
                    });
                });
            }
        } catch (err) {
            console.error('Vite asset plugin failed:', err);
        }
    }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset(),] }),
    copyGeneratedAssetsPlugin(),
    {
      name: 'copy-assets-on-request',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url.startsWith('/copy-assets-trigger')) {
            try {
              const srcDir = 'C:/Users/Admin/.gemini/antigravity-ide/brain/826b11f8-82f3-44b5-92c0-54e90e71a0c7';
              const destDir = 'd:/KRETOSS PROJECT/pm-react/public';
              if (fs.existsSync(srcDir)) {
                const files = fs.readdirSync(srcDir);
                const fileMap = {
                  'scar_camouflage_hero_banner': 'scar_camouflage_hero_banner.png',
                  'scar_camouflage_treatment_needle': 'scar_camouflage_treatment_needle.png',
                  'scar_before': 'scar_before.png',
                  'scar_after': 'scar_after.png'
                };
                files.forEach(file => {
                  Object.keys(fileMap).forEach(key => {
                    if (file.startsWith(key) && file.endsWith('.png')) {
                      fs.copyFileSync(path.join(srcDir, file), path.join(destDir, fileMap[key]));
                    }
                  });
                });
                res.end('Assets copied successfully!');
                return;
              }
            } catch (e) {
              res.end('Error copying assets: ' + e.message);
              return;
            }
          }
          next();
        });
      }
    }
  ],
  server: {
    historyApiFallback: true,
  },
})

