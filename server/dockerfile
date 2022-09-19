FROM node:slim
WORKDIR /usr/src/app
ENV WELCOME_MESSAGE="LearnIt"
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "start"]