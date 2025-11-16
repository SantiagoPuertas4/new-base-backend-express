import js from '@eslint/js';
import globals from 'globals';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import n from 'eslint-plugin-n';
import promise from 'eslint-plugin-promise';
import prettierConfig from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
  {
    ignores: [
      'dist/**',
      'build/**',
      'logs/**',
      'node_modules/**',
      'scripts/**',
      'pnpm-lock.yaml',
      'package-lock.json',
      'src/lib/prisma/generated/**',
      'yarn.lock',
      '.env',
      '.vscode/**',
      'prisma.config.ts',
    ],
  },
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
      globals: { ...globals.node, ...globals.es2021 },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      n,
      promise,
      prettier,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      eqeqeq: 'error',
      curly: 'error',
      'no-else-return': 'warn',
      'no-unneeded-ternary': 'warn',
      'prefer-const': 'warn',
      'n/no-extraneous-import': 'error',
      'n/no-deprecated-api': 'warn',
      'n/no-missing-import': 'off',
      'n/shebang': 'error',
      'promise/no-return-wrap': 'warn',
      'promise/always-return': 'warn',
      'promise/catch-or-return': 'warn',
      'promise/no-native': 'off',
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
  },
  prettierConfig,
];
