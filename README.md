# george-plugin-3

npm i phantomjs -g 

npm install

npm run build:sandbox
- runs copy ./dist/bundle.js to ../georgesandbox-master/sandboxStatic/plugins/testplugin

- in first build, you have to manually copy app/sandbox-specific/pluginConfig.json to ../georgesandbox-master/sandboxStatic/plugins/testplugin

npm run test:e2e
- after build:sandbox, with running sandbox


check
/sandbox-specific/index.tsx - pluginInitialized() function is called
/runtime/index.tsx - hook and hook handler is here
/components/extendedTransactionDetail/index.tsx - sample ExtendedTransaction SFC