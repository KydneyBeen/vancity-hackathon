# Starter Environment for React Frontend Development
This environment will probably need some tweaks for each case, but essentially it is for the following stack:
- Node/Express serving static files
- LESS for CSS preprocessing
- single HTML page importing stylesheet and React for production
- starter React app

## To Use:
For front-end development only edit the front-end/src files.  Additional files you create will need to be added to the Gruntfile so that they get processed or at least copied into the public folder.

## To Run:
Fork the repository and build on it yourself.  Locally you can run it like this:

```
// one time only per local machine
npm install grunt -g  
npm install

// first time + every change to front-end src files
grunt  

// first-time + every change to back-end files
node server.js  
```

The npm install only needs to be run the first time.  If you run the node server.js in one terminal you can leave it running and just run grunt in another terminal window everytime you make changes.  The only reason to restart the server is if you make server-side changes.