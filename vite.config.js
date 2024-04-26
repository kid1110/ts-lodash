
import { defineConfig } from "vite";
import  dts from "vite-plugin-dts"

export default defineConfig({
    plugins:[
        dts({
            include:["src/*.ts"],
            rollupTypes: true
        })
        
    ],
    build:{
        target:"es2020",
        outDir: "dist",
        lib:{
            entry: 'src/index.ts',
            formats: ['es','cjs']
        }
    },
    test:{
        include:['test/*.test.ts'],
        environment: "jsdom",
        coverage:{
            provider: "istanbul",
            include:['src/*/*.ts']
        }
    }

})