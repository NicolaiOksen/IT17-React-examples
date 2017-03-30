# IT17 - React & Webpack Examples
In this repository, you'll find three react applications. Each of the applications consists of the same elements. 
The difference lies in how each project was created and used.

### Table of contents
- [IT17 - React & Webpack Examples](#it17---react--webpack-examples)
  * [create-react-app-project](#create-react-app-project)
  * [create-react-app-project-ejected](#create-react-app-project-ejected)
  * [manual-react-app-project](#manual-react-app-project)
    + [Important points in webpack configurations](#important-points-in-webpack-configurations)
  * [Getting `create-react-app`](#getting-create-react-app)

## create-react-app-project
This project is created with the `create-react-app` command, nothing else is done afterwards. `create-react-app` is a predifined command from `npm`, which can handle setting up a full-blown react application in a few minutes. 

All configuration is taken care of and the `webpack` configuration is hidden from view.

## create-react-app-project-ejected
This project is likewise created with the `create-react-app` command, but this project was **ejected** and all underlying configuration and setup is revealed. 

To eject a `create-react-app` project, run `npm run eject`. 

## manual-react-app-project
This project is manually configured with webpack and package.json it is setup with webpack 1.12.x and *webpack-dev-server*. 

### Important points in webpack configurations
The entry point defined in `webpack.config.js` is the file first accessed by webpack and is the root for getting all required files. 
From here, webpack follows all imports and bundles everything together.
```
entry: {
    main: './app/index.js'
}
```

`devServer` is the part pertaining to `webpack-dev-server`. This part is required for this development server to function. 
```
devServer: {
    contentBase: 'public',
    inline: true,
}
```
Likewise to run your React application using `webpack-dev-server`, use `set DEV=1 && webpack-dev-server -d --inline --hot --port 3000`. These commands sets the environment to *DEV* and starts an instance of `webpack-dev-server`.

`--hot` enables hot reload, so when the server is started, all saves to Javascript files, will trigger a re-compilation and page reload.

The above can be achieved by running `npm run dev`, from the commandline. 

This configuration bit, defines the loader used to handle the react components. Presets are necessary for `babel-loader` to understand react and jsx. **Stage-3** allows for using the latest ES2015 features. 
```
{
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    query: {
        presets: ['es2015', 'react', 'stage-3']
    }
}
```
`babel-loader` is installed using npm and is defined in *package.json*.
```
"devDependencies": {
    ...
    "babel-loader": "^6.0.0",
    ...
}
```

## Getting `create-react-app`
To get access to `create-react-app`, it has to be installed globally on your computer. 
To do this, follow these steps:
1. Install Node.js
    1. Download
        1. [Node.js for Windows](https://nodejs.org/dist/v7.8.0/node-v7.8.0-x64.msi)
        2. [Node.js for Mac](https://nodejs.org/dist/v6.10.1/node-v6.10.1.pkg)
    2. Run the downloaded installer
2. Open a command prompt
    1. On windows: 
        1. **Win** + **R**
        2. Type *cmd* and hit **Enter** 
    2. On mac:
        1. **Command** + **Spacebar**
        2. Type *iterm* and hit **Enter**
3. Type `npm install -g create-react-app`
4. `create-react-app` is now installed and ready for use.

