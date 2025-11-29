// jest.config.js
module.exports = {
  // テスト対象のファイルがあるディレクトリを指定（srcフォルダ内）
  roots: ["<rootDir>/src"],
  
  // テストファイルを見つける正規表現パターンを定義
  // (__tests__フォルダ内のファイルや、*.test.ts, *.spec.tsという名前のファイルを見つけます)
  testMatch: ["**/__tests__/**/*.+(ts|tsx|js)", "**/?(*.)+(spec|test).+(ts|tsx|js)"],
  
  // TypeScriptをJestで実行できるように ts-jest を利用
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  
  // テスト実行時に使用する環境をNode.jsに設定
  testEnvironment: "node",
};