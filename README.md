# Installling specific version of Angular:

### npx @angular/cli@9 new navigation

### Errors

1. options has an unknown property 'firewall'

   Use this version - "webpack-config-single-spa-ts": "^3.0.0",

2. Uncaught Error: Unable to resolve bare specifier '@demo/utility'

   Check if the module is added in the importmap
   Check if the import map is valid (No Missing/extra comma)
