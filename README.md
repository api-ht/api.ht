# api.ht

This is the JavaScript SDK for the [HyperText API (API.HT)](https://api.ht)

You can install this via NPM:

```bash
npm install api.ht
```

or 

```bash
yarn add api.ht
```

This enables simple API consumption:

```javascript
import { api } from 'api.ht'

const ipAddress = await api.ip('1.1.1.1')

const asn = await ipAddress.company()

```