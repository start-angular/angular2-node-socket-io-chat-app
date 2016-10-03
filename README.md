Angular2 Chat App
==========================

> An Angular 2 chat app using [Angular 2](https://angular.io/), [Node](https://nodejs.org/), [socket.io](http://socket.io/), [Express](https://expressjs.com/), [SystemJS](https://github.com/systemjs/systemjs), [TypeScript](http://www.typescriptlang.org/), Services, Injectables, Forms, Routing & Navigation, and [tslint](http://palantir.github.io/tslint/) by [GeekyAnts team](https://www.geekyants.com/)

This repo shows an example chat application using Socket.io, Node and Angular 2. The goal is to implement Socket Programming with Angular 2. It also features:

* Express configuration with TypeScript, and tslint
* Use of injectables, forms, routing & navigation services in Angular 2
* Wiring together Angular2 client-side components with Socket.io and Express on the server. 
* And much more

> View the chat-app GIF here: 
	
<p align="center">
  <img src="/public/chat-app.gif" alt="Angular 2 Node Socket.io Chat"/>
</p>


## Quick start

```bash
# clone the repo
git clone https://github.com/start-angular/angular2-node-socket-io-chat-app.git 

# change into the repo directory
cd angular2-node-socket-io-chat-app

# install 
npm install

# run
npm start
```

Then visit [http://localhost:3000](http://localhost:3000) in your browser. 

## Architecture

<p align="center">
  <img src="/public/Sequence-Diagram.png" alt="Angular 2 Node Socket.io Chat" width="800" height="577"/>
</p>

There are two components:

* [`NickName`](client/nickName-component/nickName.component.ts) - for the welcome page that initiates socket client connection
* [`Chat`](client/chat-component/chat.component.ts) - for the chat page that depicts message flow between different sockets 

<p align="center">
  <img src="/public/Welcome-Page.png" alt="Angular 2 Node Socket.io Chat" width="600" height="360"/>
</p>

<p align="center">
  <img src="/public/Chat-Page.png" alt="Angular 2 Node Socket.io Chat" width="600" height="360"/>
</p>


There are mainly three sections of the Chat-component:
* [`ChatBox`](client/chat-component/chat.component.ts) - for the interaction between different chat-Users/socket connections
* [`ChatUsersList`](client/chat-component/chat.component.ts) - shows the currently active chat-Users/Scokets
* [`ChatUserAlerts`](client/chat-component/chat.component.ts) - shows the chat-user alerts for new user connection, dis-connected user and success for message passing

<p align="center">
  <img src="/public/ChatPage-Description.png" alt="Angular 2 Node Socket.io Chat" width="800" height="577"/>
</p>


## File Structure

Here's an overview of how the files are laid out in this project:

```
angular2-node-socket-io-chat-app/
|
├── client/                         	* Where our Angular2 client code is stored
│   ├── chat-component/               * All of our chat-component files are here
│   │   ├── chat.component.ts       	* Chat Component
│   │   ├── chat.component.html     	* chat Component HTML
│   │   ├── chat.module.ts      		* chat module 
│   │   ├── chat.route.ts      		* chat component routes
│   │   └── index.ts       		    * index file for chat Component
|   |   
│   ├── nickName-component/           * All of our TypeScript is here
|   |	|
│   │   ├── nickName.component.ts 	* nickName Component
│   │   ├── nickName.component.html   * nickName Component HTML
│   │   ├── nickName.module.ts 		* nickName module
│   │   ├── nickName.route.ts 	    * nickName component routes
│   │   └── index.ts 					* index file for nickName Component
|   |   
│   ├── service/ 		      	      * service for all components
|   |	|
│   │   └── global.ts 		        * file with global attributes
|   |  
│   ├── app.component.html 			  * Home component HTML   
│   ├── app.component.ts 			  * Home component 
│   ├── app.module.ts                 * Aap Module  
│   ├── app.routing.ts                * App images  
│   └── main.ts            			  * Angular 2 Entry point  
|    
├── public/							* Stores app images and gif
|	|
│   ├── Chat-Page.png       		  * chat page image
│   ├── chat-app.gif       		      * chat app gif
│   ├── ChatPage-Description.png      * chat page description image
│   ├── Sequence-Diagram.png      	  * app sequence diagram image
│   └── Welcome-page.png			  * welcome page image
|   
├── server/             		        * Server side code (socket.io,express,node)
│   └── index.js       			      * Aap entry point
|
├── typings/                          * tsd managed typings
├── index.html                  	    * HTML entry point 
├── styles.css                   		* Contains app CSS
├── package.json                    	* Our javascript dependencies
├── README.md                       	* This file
├── systemjs.config.js                * syatemJS configuration file
├── tsconfig.js                 	    * Some hacks to get TypeScript tests
├── tslint.json                       * Configures our TypeScript linter
└── typings.json                      * Configures our TypeScript linter 
```

## Known Issues

There is a issue with Windows systems. The directory path doesn't gets resolved correctly thereby creates compile issues with typecsript files. The app works fine on **MAC** and **Linux** systems. This issue will be resolved in coming weeks. Also If anyone finds a fix for the same, do send a pull request.

