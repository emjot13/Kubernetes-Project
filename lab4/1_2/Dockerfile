FROM node:16
WORKDIR /usr/src/my-node-app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node", "server.js" ]

# obraz z jakiego korzystamy
# tworzymy folder
# kopiujemy dependencies
# instalujemy dependencies
# kopiujemy zawartość
# ustawiamy domyślny port
# uruchamiamy komendy

# obraz na dockerhubie => docker pull emjot13/mydockerimage:latest