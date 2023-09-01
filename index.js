// const api = new Proxy({}, {
//   get(target, property) {
//     return (...args) => {
//     const endpoint = `https://api.ht/${property}${args.length ? '/' + args.join('/') : ''}`
//     console.log(endpoint)
//     return endpoint
//     return fetch(endpoint)
//       .then(response => response.json())
//       .catch(error => console.error('Error:', error))
//     }
//   }
// })


export const api = (props = [], options = {}) => {
    const handler = {
      get(target, property, receiver) {
        if (property === 'toString' || typeof property === 'symbol') {
          return target[property]
        }
        // console.log(`Accessed property: ${String(property)}`)
        return api([...props, property], {...options})
      },
  
      apply(target, thisArg, argumentsList) {
        // console.log(`Called: ${props.join('.') || 'anonymous'}(${argumentsList.join(', ')})`)
        // console.log([...props, argumentsList])
        // console.log({thisArg})
        const [ apiName, ...pathSegments ] = props
        const hostname = apiName ? apiName.includes('.') ? apiName : `${apiName}.api.ht` : 'api.ht'
        // const url = `https://${hostname}/${pathSegments.join('/')}/${argumentsList.map(arg => relaxedJSON.stringify(arg)).join('/')}`
        // const query = argumentsList.map(arg => new URLSearchParams(flatten(arg)).toString()).join('&')
        const query = argumentsList > 0 ? '?' + argumentsList.map(arg => new URLSearchParams(arg).toString()).join('&') : ''
        const url = `https://${hostname}/${pathSegments.join('/')}${query}`
        console.log({url})
        const data = fetch(url).then(res => res.json()).catch(console.error)
        return data
      }
    }
  
    const proxy = new Proxy(() => {}, handler)
    return proxy
  }
  
  
  
  export const API = (resourceName, options = {}) => {
  // export const API = (resourceName = 'schema', options = {}) => {
    // TODO: add default databaseName from process.env or Deno.env
    // TODO: add default credentials from process.env or Deno.env
    const baseURL = resourceName?.startsWith('http') ? resourceName 
                  : resourceName?.includes('.') ? `https://${resourceName}` : `https://${resourceName}.api.ht`
  
    return api([resourceName], options)
  }