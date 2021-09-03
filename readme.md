## Developing these bindings
To update this, copy .env.example to .env.

Then run
```sh
npm i
npm run generate
```

This will pull specs from the API and save them.

## Using these bindings

To use the types;
```js

import {profileComponents} from 'awe-ts-bindings';
type EstablishmentDto = profileComponents["schemas"]["EstablishmentDto"];
async function establishment_data(auth_token) : Promise<Array<EstablishmentDto>>{
```

