import fs from 'fs';
import path from 'path';

const src = 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\e94564d5-b850-4040-9122-7d57625e501a\\microneedling_session_1783407735724.png';
const dest = 'd:\\KRETOSS PROJECT\\pm-react\\public\\microneedling_session.png';

try {
  fs.copyFileSync(src, dest);
  console.log('SUCCESS: Image copied successfully to public/microneedling_session.png');
} catch (err) {
  console.error('ERROR copying file:', err.message);
}
