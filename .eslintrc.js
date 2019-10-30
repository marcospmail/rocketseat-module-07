module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'airbnb',
        'prettier',
        'prettier/react'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'react',
        'prettier'
    ],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
            'warn', {
                extensions: ['.jsx', '.js']
            }
        ],
        'import/no-named-as-default': 0,
        'import/prefer-default-export': 'off',
        'react/state-in-constructor': 0,
        "react/static-property-placement": ['error', 'property assignment', {
            propTypes: 'static public field',
        }],
        'no-console': ["error", { allow: ["tron"] }],
        'no-param-reassign': 'off'
    },
};
