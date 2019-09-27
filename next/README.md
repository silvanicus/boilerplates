# Project Title

Repository small description

> **Note:** This codebase is constantly being updated.

## **Table of Contents**

1. [Tech Stack](#tech-stack)
1. [Getting Started](#getting-Started)
1. [Git](#git)
1. [Deployment for production](#deployment-for-production)

## **Tech Stack**

List here all the tech stack

- Next
- React + React-Dom
- Jest
- Storybook

## **Getting Started**

### _Requirements_

- Node.js version 10 or higher

_Node Installation_

- [Node](https://nodejs.org/en/)
- [Node Version Manager](https://github.com/creationix/nvm)

> **ProTip:** In case you have other Node.js versions installed, please use nvm to switch from one version to another.

### _Dev Environment_

The project would be serve at [http://localhost:4000](http://localhost:4000/)

``` bash
# install dependencies.
$ npm i

# serve in a local environment.
$ npm run dev
```

## **Git**

### _Git flow_

Branch name | Description
------------ | -------------
master | Production / Staging environment.
qa | Testing environment.
develop | Development environment.

### _Naming Conventions_

When ever possible, relate _Ticket IDs_ with branches and commit messages:

``` bash
git checkout -d feature/<Ticket ID>branch-descriptive-title

git commit -m "<Ticket ID> Header - Descriptive information about the edit"
```

Always add the type of edit you are doing to the branch name, ej: _feature, improvement, hotfix_

``` bash
git checkout -d feature/<Ticket ID>branch-descriptive-title

git checkout -d bugfix/<Ticket ID>branch-descriptive-title
```

If ticket is not required or available, please keep descriptive title and descriptive title

``` bash
git checkout -d feature/<Ticket ID>branch-title

git checkout -d hotfix/descriptive-title
```

### **Deployment for Production**

For further documentation on deployment, please visit < link here >

``` bash
# Install project dependencies.
$ npm i

# Build App
$ NODE_ENV=<environmentConfig> npm build

# Run App
$ npm run <environmentConfig>
```
