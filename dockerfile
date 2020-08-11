FROM node:alpine

ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

ENV NODE_ENV production

COPY ./server /server
RUN cd /server\
    && npm install

WORKDIR /server/

EXPOSE 8888
CMD ["node", "index.js"]