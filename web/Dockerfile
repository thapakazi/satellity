FROM node:alpine

RUN adduser deploy -D
USER deploy

WORKDIR /home/deploy
COPY package.json package-lock.json /home/deploy/

RUN npm install
COPY . /home/deploy

ENTRYPOINT ["npm"]
CMD ["start"]
