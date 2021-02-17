import path from 'path';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

const plugins = [
    peerDepsExternal(),
    typescript({
        typescript: require('typescript'),
    }),
    commonjs(),
    terser(),
];

export default {
    input: path.resolve(__dirname, './src/index.tsx'),
    output: [
        {
            file: path.resolve("build", "index.es.js"),
            format: "es",
            sourcemap: true,
        },
        {
            file: path.resolve("build", "index.cjs.js"),
            format: 'cjs',
            sourcemap: true,
        },
    ],
    plugins,
};