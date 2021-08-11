This demo covers the following things:
Single Spa router config

Custom Props

Integrating different versions of Angular application

Integrating Webcomponent

Intercommunication between Microfrontends

Sharing dependencies

Scope wise sharing dependencies

Working in local (Import map overrides)

# Installling specific version of Angular:

### npx @angular/cli@9 new navigation

# Using Angular core as shared dependency

### https://github.com/esm-bundle/angular__core

### Errors

1. options has an unknown property 'firewall'

   Use this version - "webpack-config-single-spa-ts": "^3.0.0",

2. Uncaught Error: Unable to resolve bare specifier '@demo/utility'

   Check if the module is added in the importmap
   Check if the import map is valid (No Missing/extra comma)

Project Installation -

Install pnpm - pnpm is being used for root config and utility module
