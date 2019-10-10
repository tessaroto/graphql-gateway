module.exports = {
 "bearer": {
     "keycloak_url": "http://localhost:8080",
     "realm": "ifood",
     "client_id": "graph-shop",
     "cache":{
         "cert": {
             "ttl": 10000,
             "stale_ttl": 100000,
             "stale_short_ttl": 1000
         }
     }
 }
}