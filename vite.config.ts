import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import macrosPlugin from 'vite-plugin-babel-macros';
<<<<<<< HEAD
import svgr from 'vite-plugin-svgr';
=======
>>>>>>> fab955c87e1b8fab0c6f7332eb63258215345d9e

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), macrosPlugin(), svgr()],

  resolve: {
    alias: [
      // { find: '/', replacement: path.resolve(__dirname, '/') },
      { find: 'pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: 'components', replacement: path.resolve(__dirname, 'src/components') },
      { find: 'assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: 'styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: 'hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: 'utils', replacement: path.resolve(__dirname, 'src/utils') },
      { find: 'atoms', replacement: path.resolve(__dirname, 'src/atoms') },
    ],
  },
});
