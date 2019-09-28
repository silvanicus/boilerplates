# Project Title - October 2019

Repository small description.

> **Note:** This project uses Next framework

## **Table of Contents**

1. [Tech Stack](#tech-stack)
1. [Getting Started](#getting-started)
1. [Format and eslint](#format-and-eslint)
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

```bash
# install dependencies.
$ npm i

# serve in a local environment.
$ npm run dev
```

## **Format and eslint**

This project uses prettier for code formating and eslint for static code analysis. Please make sure you update the config files to adapt to the specific project rules. Also, please add extensions for better a better developer experience with prettier and eslint.

## **Git**

### _Git flow_

| Branch name | Description                       |
| ----------- | --------------------------------- |
| master      | Production / Staging environment. |
| qa          | Testing environment.              |
| develop     | Development environment.          |

### _Naming Convention examples_

Please relate _Agile System Ticket IDs_ with branches and commit messages.

```bash
git checkout -d feature/<Ticket ID>branch-descriptive-title

git commit -m "<Ticket ID> Header - Descriptive information about the edit"
```

Always add the type of edit you are doing to the branch name, ej: _feature, improvement, hotfix_

```bash
git checkout -d feature/<Ticket ID>branch-descriptive-title

git checkout -d bugfix/<Ticket ID>branch-descriptive-title
```

If ticket is not required or available, please keep descriptive title and descriptive title

```bash
git checkout -d feature/<Ticket ID>branch-title

git checkout -d hotfix/descriptive-title
```

### **Deployment for Production**

Add all the information related to the Deployment here.
