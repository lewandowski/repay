# Welcome to RePay!

Simple template to get started with [Remix](https://remix.run) and [PayloadCMS](https://payloadcms.com).

## Development

run `docker compose up -d` *or*...

1. make sure you have a mongodb running on port 27017
1. create a `.env` file in the root of the project and add the following environment variables:
    ```sh
    PAYLOAD_SECRET=secret
    MONGODB_URI=mongodb://localhost:27017/app
    ```
2. run `yarn dev`

## Production

First, build your app for production:

```sh
yarn build
```

Then run the app in production mode:

```sh
yarn start
```

## Deployment

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/iRjSBO?referralCode=0dh7vZ)

one-click deployment on [Railway](https://railway.app)! 🚂