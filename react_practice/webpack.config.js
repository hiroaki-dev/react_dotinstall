module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    // webpackの出力をデバッグするためのsourcemapsを有効化
    devtool: "source-map",
    resolve: {
        // 解決可能な拡張子に'.ts'と'.tsx'を追加
        extensions: ["*", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            // '.ts'または'.tsx'の全てのファイルを、'awesome-typescript-loader'で扱う
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            // '.js'の全てのファイルに、'source-map-loader'によて予め処理されたsourcemapsを持たせる
            { test: /\.js$/, enforce: "pre", loader: "source-map-loader" }
        ]
    },
    // インポートしたモジュールのパスが下記のいずれかにマッチする場合、
    // それに相当するグローバル変数が存在するものとしてそれを使用します。
    // 依存性の全てを扱うことを避けることができるようになり、
    // ビルド間でそれらのライブラリがキャッシュ可能になるため重要です。
    // 代わりにindex.htmlの方でも./node_modules/react/dist/react.jsやreact-dom.jsを読み込む必要がある
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};
