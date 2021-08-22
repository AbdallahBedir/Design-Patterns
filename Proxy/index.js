/***
 * Proxy is a structural design pattern that lets you provide a substitute or placeholder for another object.
 * A proxy controls access to the original object, allowing you to perform something either before or after
 * the request gets through to the original object.
 */
// External API Service
function CryptocurrencyAPI()
{
  this.getValue = function(coin)
  {
    console.log("Calling External API...")
    switch(coin)
    {
      case "Bitcoin":
        return "$8,500"
      case "Litecoin":
        return "$50"
      case "Ethereum":
        return "$175"
       default:
        return "NA"
    }
  }
}
////////////////////////////////////////////////

const api = new CryptocurrencyAPI()
console.log("----------Without Proxy----------")
console.log(api.getValue("Bitcoin"))
console.log(api.getValue("Litecoin"))
console.log(api.getValue("Ethereum"))
console.log(api.getValue("Bitcoin"))
console.log(api.getValue("Litecoin"))
console.log(api.getValue("Ethereum"))


function CryptocurrencyProxy()
{
  this.api = new CryptocurrencyAPI()
  this.cache = {}

  this.getValue = function(coin)
  {
    if(this.cache[coin] == null)
    {
      this.cache[coin] = this.api.getValue(coin)
    }
    return this.cache[coin]
  }
}

console.log("----------With Proxy----------")
const proxy = new CryptocurrencyProxy()
console.log(proxy.getValue("Bitcoin"))
console.log(proxy.getValue("Litecoin"))
console.log(proxy.getValue("Ethereum"))
console.log(proxy.getValue("Bitcoin"))
console.log(proxy.getValue("Litecoin"))
console.log(proxy.getValue("Ethereum"))