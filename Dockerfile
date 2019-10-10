FROM node:11.9-alpine AS build

RUN mkdir -p /usr/app 
WORKDIR /usr/app

COPY . /usr/app/

RUN npm clean-install \
		&& npm run-script build


# Create final image
FROM node:11.9-alpine

#RUN apk update \
#		&& apk upgrade \
#		&& apk add bash \
#		&& apk add curl

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY --from=0 /usr/app/build .
RUN ls -la


RUN npm clean-install --production

WORKDIR /usr/app

RUN ls -la
# Add node-user user so we aren't running as root.
RUN adduser -S node-user -h /usr/app \
    && chown -R node-user /usr/app

USER node-user

EXPOSE 3000

CMD ["node", "index.js"]
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
