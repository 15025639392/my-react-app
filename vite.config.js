import { defineConfig } from 'vite';
import vitePluginImp from 'vite-plugin-imp';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
            },
        }
    },
    resolve:{
        alias:[
            { find: 'api', replacement: path.resolve(__dirname, './src/api') }
        ]
    },
	
    esbuild: {
        jsxInject: 'import React from \'react\''
    },
    server:{
        proxy:{
            '^/api/.*':{
                target: 'https://www.fastmock.site/mock/4f709b8a760ba4dacabe5c39c44716df',
                changeOrigin: true
            }
        }
    },
    plugins: [
        vitePluginImp({
            libList: [
                {
                    libName: 'antd',
                    style: (name) => `antd/es/${name}/style`,
                },
            ],
        }),
        reactRefresh()
    ]
});
