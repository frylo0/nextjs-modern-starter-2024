# Next.js Modern Starter 2024

This project is maintained by the @frylo-d-ts.

## Reference <!-- omit from toc -->

- [How to use this template?](#how-to-use-this-template)
- [Run Locally](#run-locally)
- [Technical stack](#technical-stack)
- [File structure](#file-structure)
	- [Components folder](#components-folder)
- [Code style](#code-style)
- [Documentation](#documentation)
- [Git](#git)
	- [Prettier and Pre-commit (lint-staged)](#prettier-and-pre-commit-lint-staged)
	- [Branch naming](#branch-naming)
	- [Commit naming](#commit-naming)
	- [Git flow](#git-flow)
- [Environment](#environment)
	- [Deployment](#deployment)
	- [Docker guides](#docker-guides)
- [Support](#support)

## How to use this template?

1. README changes
   1. Change the h1 title to the name of your project.
   2. Change line `This project is maintained`, place there your email.
   3. Replace all `PROJ` instances to your Jira tasks code.
   4. Add emails in support part of readme.
2. [`package.json`](./package.json)
   1. Change name of the project
   2. Change description
   3. Change version
   4. Change author
   5. Change keywords or remove this prop
3. [`commitlint.config.js`](./commitlint.config.js)
   1. Change Jira tasks number prefix to validate commit messages correctly
      ```js
	  module.exports = {
		rules: {
			'task-numbers': [2, 'always', 'NEXT-'], // Replace 'NEXT-' with your Jira task prefix
		},
		plugins: [
	  ```
4. Env files ([`.env.development`](./.env.development), [`.env.prod`](./.env.prod), [`.env.stage`](./.env.stage))
   1. Replace domain names
   2. Configure what env should be pass protected
5. Docker config
   1. Change `project-name` at [`package.json`](./package.json), at script with name `docker`.
   2. Rename [`.env example`](<./.env example>) file to [`.env`](./.env) and put real creds to DB inside.
   3. Replace `projectName` instances to the name of a project at: [`dev docker-compose.yml`](./docker/development/docker-compose.yml), [`prod docker-compose.yml`](./docker/production/docker-compose.yml).
   4. Replace `example.com` to real domain at [`nginx.conf`](./docker/production/nginx.conf).
6. Final steps
   1. Remove this chapter from README
   2. Remove unnecessary pages from `./src/app` folder
   3. Enjoy development ;)

## Run Locally

Below are the instructions on how to run project locally:

Preconditions:
1. Install NVM ([windows](https://github.com/coreybutler/nvm-windows), [linux / macos](https://github.com/nvm-sh/nvm))
2. Install Docker ([windows / linux / macos](https://docs.docker.com/engine/install/))

```bash
# Clone the project
git clone <github-project-link>
# Go to the project directory
cd <project-folder>
# Switch to correct node version
nvm install
nvm use
# Install pnpm - https://pnpm.io/
npm install -g pnpm
# Install all dependencies
pnpm i
# Start the server in dev mode
pnpm dev
```

## Technical stack

1. [Next.js](https://nextjs.org/) - SSR React.js framework.
2. [Vanilla Extract CSS](https://vanilla-extract.style/) - Zero-runtime lib for writing styles.
3. [Zustand](https://zustand-demo.pmnd.rs/) - State management lib.
4. [clsx](https://www.npmjs.com/package/clsx) - Combinator for class names.
5. [Storybook](https://storybook.js.org/) - Framework for writing powerful docs for UI Kit.
6. [Docker](https://www.docker.com/) - Virtual environment to run your project easily.
7. [MongoDB](https://www.mongodb.com/) - NoSQL database to store your data.

## File structure

<details><summary><code>Press to open</code></summary>

```
.
├── .husky                         Contains tasks for precommit
├── .vscode                        All required plugins are stored here as recommendations
├── @types                         Global types
├── src                            Folder with all sources
│   ├── app                            Folder defining routing of app
│   ├── assets                         Folder with assets, could be imported from code
│   ├── components                     Check "Components folder" chapter
│   │   ├── blocks                         Check "Components folder" chapter
│   │   ├── common                         Check "Components folder" chapter
│   │   └── sections                       Check "Components folder" chapter
│   ├── stores                         Folders with all zustand stores
│   ├── styles                         Folders with all basic vanilla-extract/css styles
│   ├── constants                      Project constants
├── next.config.js                 Config for NextJS
├── next-env.d.ts                  Typing config for NextJS
├── package.json                   Yarn package list and config
├── public                         Static files
│   ├── favicon.ico                    Favicon of site
│   └── fonts                          Folder with all fonts
└── README.md                      You are here
```

</details>
<br>

### Components folder

Folder `/src/components` is divided to few folders. Take a look at the main idea of this folders:

| Priority | Folder               | Idea                                                                                                                                                                                                        |
| -------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1        | /src/components/sections | Usually each page is built from sections. So this folder contains sections for each page. SECTION - it is components taking full width of device.                                                           |
| 2        | /src/components/blocks   | Blocks are reusable components, used inside in sections. Main difference between Block and Section - Block can't take full width of page.                                                                   |
| 3        | /src/components/common   | This components could be used everywhere. By other words, components in this folder could be named as UI Kit of project. Any change in this folder **have to be documented via storybook**. |

## Code style

-   [TSX](./README/jsx-codestyle.md)

## Documentation

Some of project components are covered by `storybook`. To open project docs do the following:

```bash
pnpm sb:dev # Starts locally OR
pnpm sb:build # Make static build
```

This command will open storybook on you local machine. Read more about `storybook` at [official documentation](https://storybook.js.org/docs/get-started/whats-a-story).

## Git

### Prettier and Pre-commit (lint-staged)

When any developer finished his work, he **commits** files and `lint-staged` package runs commands before making a commit.

It is run ONLY for **STAGED** files. So do not be worried to make commits.

```js
// Check TS files for no errors
	'**/*.(ts|tsx)': () => 'pnpm tsc --noEmit',

// Lint and format TS and JS files
'**/*.(ts|tsx|js)': (filenames) => [
    `pnpm eslint --fix ${filenames.join(' ')}`,
    `pnpm prettier --write ${filenames.join(' ')}`,
],
```

### Branch naming

Format of branch names:

> PROJ-{task-number}-{short-description}

Examples:

-   `PROJ-821-fix-bug` - if task exists when branch created
-   `NOTASK-update-deps` - if task do not exists when branch created

### Commit naming

Format of commit messages:

> PROJ-{task-number}: What has been done

Examples:

-   `PROJ-872: Update mobx to 0.1.2`
-   `PROJ-324: Added shift and debugVideoPos. Upd docs`
-   `NOTASK: Logging into chat`

### Git flow

We work in sprints. So git flow adjusted for sprint logic.

Graph:
![git graph](README/git-hub-release-flow.png)

Tips:

1. All tasks are forked from current `main`.
2. When task ready for code review - you create MR into current `main` branch.
3. If task do not pass tests, you simply fix bugs at same branch and merge it to `main` again.
4. At the end of sprint we create release branch to perform regression testing on testing stage.
5. All hot-fixed from regression testing are located on release branch.
6. After all fixed hot-fixes release branch merge to main.

## Environment

### Deployment

[Deployment script](./src/env/deploy.mjs) uses [`.creds.mjs`](<./.creds.mjs>) file from the root of the project. This file gitignored, that allows you to store creds in more secure manner.

If you do not have [`.creds.mjs`](<./.creds.mjs>), then create it by copying [`.creds.example.mjs`](<./.creds.example.mjs>) file. Put credentials to your server inside of it.

For not deployment supports only VPS servers with SSH connection to them. It is because of necessary to run CLI commands to restart docker-compose on server.

To deploy your app, simply run one of the following commands, matching the env you gonna to deploy:

```bash
pnpm deploy:stage # Deploy to staging environment
pnpm deploy:prod # Deploy to production environment
```

### Docker guides

There are several scripts to manage docker:

1. `pnpm docker:dev` - base docker-compose command for dev environment.
2. `pnpm docker:dev.reset` - resets docker with dev docker-compose.yml file.
3. `pnpm docker:prod` - base docker-compose command for prod environment.
4. `pnpm docker:prod.reset` - resets docker with prod docker-compose.yml file.

I'll show you some examples of usage of this command on development env example. They gonna work same for prod env.

Examples:

```bash
pnpm docker:dev up # `docker compose up` for local development
pnpm docker:dev down --volumes # `docker compose down --volumes`, stops containers & networks, removes volumes
pnpm docker:dev build --no-cache # `docker compose build --no-cache`, builds all containers from scratch
pnpm docker:dev.reset # downs docker-compose with all volumes and performs build without cache usage
```

## Support

For any support, email maintainer of the project or:

- frylo.d.ts@gmail.com

