FROM node:lts-alpine as build

LABEL maintainer="" contact=""

ENV NODE_ENV=production
ENV PATH /frontend/node_modules/.bin:$PATH

COPY . /frontend
WORKDIR /frontend

RUN npm i esbuild-linux-64
RUN npm i --production
RUN npm run build


FROM nginx:latest as serve

COPY --from=build /frontend/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
