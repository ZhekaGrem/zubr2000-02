# Getting Started with Create NEXT App
This project was bootstrapped with Create Next App, which is a popular tool for creating React applications.\
It provides a pre-configured development environment and a set of scripts to streamline various tasks during the development process.

Available Scripts
In the project directory, you can run the following scripts:

### `npm run start`
This script runs the app in development mode. When you execute npm start, it will start a local development server and open http://localhost:3000 in your default web browser.\
The page will automatically reload whenever you make changes to the code. Additionally, any lint errors (code style violations) will be displayed in the console.

### `npm run test`
This script launches the test runner in an interactive watch mode. It allows you to run the tests associated with your React components and observe the results in real-time.\
Refer to the section about running tests in the Create React App documentation for more information on testing React applications.

### `npm run build`
This script builds the app for production and generates an optimized, minified bundle in the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.
.\The build is minified, and the filenames include hashes for caching purposes. After running this script, your app is ready to be deployed.

### `npm run eject`
Note: This is a one-way operation. Once you eject, you can't go back!

If you're not satisfied with the build tool and configuration choices provided by Create React App, you can eject at any time. 
.\This command will remove the single build dependency from your project and copy all the configuration files and transitive dependencies (webpack, Babel, ESLint, etc.) directly into your project.

After ejecting, you'll have full control over the build process and can tweak the configurations as needed. However, all the commands except eject will still work, but they will point to the copied scripts within your project.

You don't have to use eject unless you want to customize the build process or integrate additional tools and configurations that are not supported out-of-the-box by Create React App. The curated feature set provided by Create React App is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature unless you have specific requirements.

## Learn More
The Create Nextjs App documentation provides detailed information on various topics, including code splitting, analyzing bundle sizes, creating a Progressive Web App (PWA), advanced configuration, deployment, and troubleshooting.

The Nextjs documentation is an excellent resource for learning React and its core concepts, such as components, state management, and lifecycle methods.

## Project Details
Based on the provided package.json file, this project is named "zubr-jsx-02" and is a website for selling lumber products. It is built using Next.js, a React framework for server-side rendering and static site generation.

## The project has the following dependencies:

@emailjs/browser: A library for sending emails using the EmailJS service.\
@sanity/client and @sanity/vision: Libraries for interacting with the Sanity content management system.\
@vercel/analytics: A library for integrating Vercel Analytics into the application.\
multiformats: A library for handling various data formats.\
next: The Next.js framework itself.\
next-intl: A library for internationalization and localization in Next.js applications.\
next-sanity: A library for integrating Sanity with Next.js.\
react and react-is: The core React library and utilities.\
react-transition-group: A library for animating component transitions.\
styled-components: A library for styling React components using CSS-in-JS.\
The project also includes development dependencies for linting, formatting, and TypeScript support.\

The scripts defined in the package.json file are:\

dev: Runs the Next.js development server.\
build: Builds the Next.js application for production.\
start: Starts the Next.js production server.\
lint: Runs the linter to check for code style violations.\
Overall, this project appears to be a Next.js application for an e-commerce website selling lumber products, with various integrations and libraries for content management, email handling, analytics, and styling.
