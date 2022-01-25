FROM node:16

WORKDIR /automation

COPY . .

RUN npm install

EXPOSE 7070

ENTRYPOINT ["npm", "run"]
CMD ["test"]
