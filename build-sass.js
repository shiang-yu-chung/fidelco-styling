const fs = require('fs');
const { exec } = require('child_process');

const distFolder = 'dist';

// Ensure dist folder exists
if (!fs.existsSync(distFolder)) {
  fs.mkdirSync(distFolder);
}

// Get build type or watch mode from arguments
const arg = process.argv[2] || 'expanded';
let command = '';

if (arg === 'watch') {
  command = `npx sass --watch src/scss:${distFolder} --style=expanded --source-map`;
} else if (arg === 'compressed') {
  command = `npx sass src/scss:${distFolder} --style=compressed --no-source-map`;
} else {
  command = `npx sass src/scss:${distFolder} --style=expanded --source-map`;
}

const sassProcess = exec(command);

sassProcess.stdout.on('data', (data) => console.log(data));
sassProcess.stderr.on('data', (data) => console.error(data));
sassProcess.on('exit', (code) => console.log(`Sass process exited with code ${code}`));