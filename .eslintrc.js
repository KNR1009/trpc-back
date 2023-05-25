module.exports = {
  parser: '@typescript-eslint/parser', // TypeScriptの解析を行うパーサとして'@typescript-eslint/parser'を使用します
  parserOptions: {
    project: 'tsconfig.json', // TypeScriptの設定ファイルとして'tsconfig.json'を使用します
    tsconfigRootDir: __dirname, // TypeScriptの設定ファイルのルートディレクトリとして現在のディレクトリを指定します
    sourceType: 'module', // ソースコードはES Moduleとして扱います
  },
  plugins: ['@typescript-eslint/eslint-plugin'], // TypeScript用のESLintプラグインを使用します
  extends: [
    'plugin:@typescript-eslint/recommended', // TypeScriptの推奨ルールを適用します
    'plugin:prettier/recommended', // Prettierの推奨ルールを適用します
    'plugin:security/recommended', // セキュリティに関する推奨ルールを適用します
    'plugin:jest/recommended', // Jestの推奨ルールを適用します
  ],
  root: true, // このファイルをESLintの設定のルートとします
  env: {
    node: true, // Node.jsの環境として設定します
    jest: true, // Jestのテスト環境として設定します
  },
  ignorePatterns: ['.eslintrc.js'], // '.eslintrc.js'ファイルはESLintの対象から除外します
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off', // TypeScriptのインターフェース名のプレフィクスに関するルールを無効化します
    '@typescript-eslint/explicit-function-return-type': 'off', // 関数の戻り値の型の明示に関するルールを無効化します
    '@typescript-eslint/explicit-module-boundary-types': 'off', // モジュール境界の型の明示に関するルールを無効化します
    '@typescript-eslint/no-explicit-any': 'off', // any型の明示的な使用に関するルールを無効化します
    'security/detect-object-injection': 'off', // オブジェクトインジェクション攻撃を防ぐためのルールを適用します（false positiveが多い場合は無効化を検討します）
    'no-console': 'warn', // console.logの使用を警告します
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // 未使用の変数をエラーとして扱います。ただし、変数名が"_"で始まる場合は無視します
    '@typescript-eslint/no-non-null-assertion': 'error', // Non-null assertion（!）の使用をエラーとします
  },
};
