

##Start the keycloak

$ docker run -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin jboss/keycloak


1 - Create a new realm ifood
2 - Create  a new client graph-shop
	access type: public
	add roles: product-read, sku-read, offer-read, ...

create a new user
add role to user



##Create token
curl -X POST "http://localhost:8080/auth/realms/ifood/protocol/openid-connect/token"  -H "Content-Type: application/x-www-form-urlencoded"  -d "username=rafael.tessaroto@gmail.com"  -d "password=123456"  -d 'grant_type=password'  -d "client_id=graph-shop" | jq -r '.refresh_token'