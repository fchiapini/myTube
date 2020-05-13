# myTube

A video player web app with curated Youtube playlists to learn new skills

Customize your playlists changing the file "topics.json" and adding the images to the folder myTube-frontend/assets

## Live Demo

[Live Demo](https://evening-reaches-01206.herokuapp.com)

## Getting Started

### Prerequisites Backend

- Create a firebase account:
  [Firebase](https://firebase.google.com/)

- Create a YOUTUBE API KEY:
  [YOUTUBE API KEY](https://developers.google.com/youtube/v3/getting-started)

- Node 10.20.0+

  - [Node](https://nodejs.org/en/)

- Install and setup firebase

```
npm install -g firebase-tools
firebase login
firebase init
```

- Create .firebaserc file inside client folder

```
{
  "projects": {
    "default": "your_firebase_app"
  }
}
```

- In the functions/src folder create a .env file for firebase project information

```
YOUTUBE_API_KEY=YOUR_YOUTUBE_API_KEY
```

## Installing backend

```
cd myTube-backend/functions
```

### Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Deployment

```
cd functions
npm run build
npm run deploy
```

### Prerequisites Frontend

- Node 10.20.0+

  - [Node](https://nodejs.org/en/)

- Yarn 1.22.0+
  - [Yarn](https://classic.yarnpkg.com/)

## Build Setup Frontend

    ```bash
    $ cd myTube-frontend
    # install dependencies
    $ yarn install

    # serve with hot reload at localhost:3000
    $ yarn dev

    # build for production and launch server
    $ yarn build
    $ yarn start

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Built With

- [Nuxt.js](https://nuxtjs.org/) - The Progressive Vue.js Framework
- [Firebase Cloud Functions](https://firebase.google.com/docs/functions) - Cloud functions
- [Vuetify](https://vuetifyjs.com) - Vue UI Library with beautifully handcrafted Material Components
- [Youtube API](https://developers.google.com/youtube/v3/getting-started) - Getting playlists from Youtube

## Contributing

Please send me an email to fchiapini@gmail.com I will be happy to help

## Author

- **Felipe Chiapini** - Project owner - [GitHub](https://github.com/fchiapini)

## Acknowledgments

- A special thanks to my wife for supporting me
