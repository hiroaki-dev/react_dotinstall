# ドットインストールのReact入門メモ

## npm installやwebpack.config.js,tsconfig.jsonの書き方

* [React &amp; Webpack | TypeScript 日本語ハンドブック | js STUDIO](http://js.studio-kingdom.com/typescript/tutorials/react_and_webpack)
* [TypeScriptでReactを書く &#8211; webpackを使った開発環境の構築方法 | maesblog](https://mae.chab.in/archives/59782)

### 疑問

#### Q. Typescriptを使う場合、Babelはいらないのか

A. Typescript2.1以降はtargetにES5を指定しても問題なくasync等使えるようになったため不要

[参考](http://js.studio-kingdom.com/typescript/release_note/typescript_2_1#downlevel_async_functions)


#### Q. index.htmlにreactやreact-domを読み込んでるのはなぜ？バンドルするのでは？

A. reactやreact-domもバンドルするようにするとビルドの時間がかかるため、開発時はwebpack.config.jsのexternalsに記し、バンドルしないようにする。そのため、index.htmlでnode_modulesからreactやreact-domを読み込んでいる。ブラウザのキャッシュも効くため早い。

[参考](https://mae.chab.in/archives/59782#post59782-7)

#### Q. tsconfig.jsのmodulesをES2015からcommonに変更しているのはなぜ？

A. React使う場合csstype moduleがnotfoundになるから。

[参考](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/24788)


### Webpack4への対応

* loaders,preLoadersが廃止されrulesに。  
    [参考](https://stackoverflow.com/questions/42476185/webpack-config-has-an-unknown-property-preloaders)  
    [参考](https://qiita.com/shota_abe/items/fbd6d988188442a4d11c)

* extensionsに""が指定できなくなったため"*"に。  

### React v16への対応

* index.htmlで読み込んでいるreactやreact-domのパスを``react/umd/react.development.js``,``react-dom/umd/react-dom.development.js``に修正

[参考](https://github.com/facebook/react/issues/10294)

## gitについて調べたこと

### Q. Hunkの破棄をコマンドでやるには

A. ``git checkout [file]``

[参考](http://grainrigi.hatenablog.com/entry/2017/10/08/224246)

### Q. .gitignoreをあとから適応するには

A. ``git rm -r --cached .``

[参考](https://qiita.com/hsylife/items/287081ae58788fcc34f2)

### Q. コミット済みのファイルを.gitignoreに追記した場合管理下から外れない問題

A. ``git rm --cached [file]``

[参考](https://teratail.com/questions/909)

### Q. 1つ前のコミットに修正を加えるには

A. ``git commit --amend**``

[参考](https://qiita.com/piruty/items/402b5bf83479f7e3480a)