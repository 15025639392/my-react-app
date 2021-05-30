import { defineConfig } from 'vite';
import vitePluginImp from 'vite-plugin-imp';
import reactRefresh from '@vitejs/plugin-react-refresh';
// https://vitejs.dev/config/
export default defineConfig({
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
            },
        }
    },
	
    esbuild: {
        jsxInject: 'import React from \'react\''
    },
    server:{
        proxy:{
            '^/api/.*':{
                target: 'https://www.baidu.com',
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
