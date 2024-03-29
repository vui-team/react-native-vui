module.exports = {
    plugins: [
        [
            'module-resolver',
            {
                alias: {
                    components: './src/components',
                },
                extensions: [
                    '.ios.ts',
                    '.android.ts',
                    '.ts',
                    '.ios.tsx',
                    '.android.tsx',
                    '.tsx',
                    '.jsx',
                    '.js',
                    '.json',
                ],
                root: ['./src'],
            },
        ],
    ],
    presets: ['module:metro-react-native-babel-preset', '@babel/preset-typescript'],
}
