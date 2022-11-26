
#ARG can be set default as bellow or be overriden in inline command docker run . --build-arg NODE_VERSION=12-alpine
ARG NODE_VERSION=16.13.2
FROM node:${NODE_VERSION}

#ENV can not be directly change during runtime but they can be assign to ARG 
ENV APP_VERSION=$NODE_VERSION

#show ENV
RUN env

#assing new user for docker to avoid permission conflicts when accessing files as shell scripts etc...
# RUN useradd -ms /bin/sh dockerUser

#metadata
LABEL author='me'

#use docker user for the session
# USER dockerUser

#copy package.json package-lock.json /app container ./ = /app
COPY  package.json package-lock.json  ./

#change directory app in container
WORKDIR /app

#example of usind default ARG value and set ENV based on it, ARG can be overriden in inline command as well
ARG CUSTOM_USER='Greg'
ENV NODE_USER=$CUSTOM_USER

#run npm install
RUN npm install 

#afer npm install copy everything to /app
COPY . /app/


# this part is responsible for running container CMD takes 2 form shell: CMD npm run start or CMD ['node','app.js']

#RUN
#starts the app on PORT 5000 default (can not be random has to be the one the app is using as default unless we have set PORT change in env variables as below
# process.env.PORT || '5000'
EXPOSE 5000
#always need to have exucutable file to start with 
RUN chmod +x shellScript.sh
#run shell script before runing container it has to have double quates ["executable","param1"."param2","..."]
ENTRYPOINT ["sh", "shellScript.sh", "npm","start"]

#ENTRYPOINT with CMD works as below:
#ENTRYPOINT ["sh", "shellScript.sh"]
#CMD ['paramToEntryPoint1','paramToEntryPoint2']

