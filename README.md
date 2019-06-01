# Rafi Barash Personal Website

## Tech Stack

This web app is completely static and simply served through a CDN. It is based on the [JAMstack](https://jamstack.org/) architecture. For the frontend, I am using [Gatsby.js](https://www.gatsbyjs.org/), a blazing-fast static-site generator based on [React.js](https://reactjs.org/). This site sources most of its content through GraphQL queries to [Contentful](https://www.contentful.com/), a headless CMS with a very nice free tier. The site is built and deployed on (Netlify)[https://www.netlify.com/], an unreal all-in-one platform for automating web projects. Form management and all other backend functionality is powered through Netlify's extremely generous free tier.

## Setup

If you want to run this website on your local machine, follow these steps.

1. Make sure you have [node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/get-npm) installed.

1. Fork this repo by clicking the "Fork" button on the top right of your page.

1. Click on the green "Clone or download" button on the right-side of your page. Under the "Clone with HTTPS" header, copy the link to your clipboard (_should look like `https://github.com/<your repo>/rafi-personal-website.git`_).

1. Open terminal and run the following commands.

   ```sh
   git clone <your repo link>  # Clones repo to your local machine, use link you copied

   npm install  # Installs necessary dependencies stated in package.json

   npm run start  # Starts a development server serving the local repo
   ```

1. That's it! Feel free to mess around with the code and use it in your own project. A shoutout would be nice :)
