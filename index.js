const api = new Proxy({}, {
  get(target, property) {
    return (...args) => {
    const endpoint = `https://api.ht/${property}${args.length ? '/' + args.join('/') : ''}`
    return fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.error('Error:', error))
    }
  }
})


// export const api = (props = [], options = {}) => {
//     const handler = {
//       get(target, property, receiver) {
//         if (property === 'toString' || typeof property === 'symbol') {
//           return target[property]
//         }
//         // console.log(`Accessed property: ${String(property)}`)
//         return db([...props, property], {...options})
//       },
  
//       apply(target, thisArg, argumentsList) {
//         // console.log(`Called: ${props.join('.') || 'anonymous'}(${argumentsList.join(', ')})`)
//         // console.log([...props, argumentsList])
//         // console.log({thisArg})
//         const [ databaseName, ...pathSegments ] = props
//         const hostname = databaseName.includes('.') ? databaseName : `${databaseName}.db.ht`
//         // const url = `https://${hostname}/${pathSegments.join('/')}/${argumentsList.map(arg => relaxedJSON.stringify(arg)).join('/')}`
//         const query = argumentsList.map(arg => new URLSearchParams(flatten(arg)).toString()).join('&')
//         const url = `https://${hostname}/${pathSegments.join('/')}?${query}`
//         // console.log({url})
//         const data = fetch(url).then(res => res.json())
//         return data
//       }
//     }
  
//     const proxy = new Proxy(() => {}, handler)
//     return proxy
//   }
  
  
  
  
//   export const API = (resourceName = 'schema', options = {}) => {
//     // TODO: add default databaseName from process.env or Deno.env
//     // TODO: add default credentials from process.env or Deno.env
//     const baseURL = resourceName.startsWith('http') ? resourceName 
//                   : resourceName.includes('.') ? `https://${resourceName}` : `https://${resourceName}.api.ht`
  
//     return db([resourceName], options)
//   }