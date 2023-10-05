# Contributing to NeoBrutalismCSS

Thank you for considering contributing to NeoBrutalismCSS! We appreciate your interest and are excited to have you as part of our open-source community.

## Before You Start

Before you begin your contribution journey, please take a moment to do the following:

- Search the [existing issues](https://github.com/matifandy8/NeoBrutalismCSS/issues) and [pull requests](https://github.com/matifandy8/NeoBrutalismCSS/pulls) to check if there's already an issue or PR related to your contribution.
- If you find a relevant issue, comment on it to express your interest in working on it or create a new issue if none exists.
- Discuss your proposed changes with the community, especially for significant additions or changes. You can use the issue or the project's communication channels for this purpose.

## Development Guidelines

Here are some guidelines to follow while developing for NeoBrutalismCSS:

- Our primary development branch is `main`. Please create your branches and pull requests against this branch.
- We follow [Conventional Commits](https://www.conventionalcommits.org/) for clear and structured commit messages.
- When naming your branch, include the issue ID and a descriptive title:

  ```sh
  git checkout -b feat/issue-123-new-feature
  ```

- When you're ready, start the css compiler (scss) with `yarn watch` (or `npm run watch`). Write the scss code in the `/src` folder, and scss will compile it and output it to the `/dist` folder.
- If you want to contribute to the website , in the folder website have a html and css
- You can see your changes by opening `index.html` in your browser. There's no local server, so you'll have to open the file itself in your browser

## Open a Pull Request

> If you're new to contributing to open source, see <http://makeapullrequest.com/>. 0. When you're happy with your changes, run `yarn build` or `npm run build`. This will update `/dist/index.min.css` to reflect any changes you made.

1. Open a new pull request, and include
   **a)** a short description of the changes you made, and
   **b)** a reference to the related issue (just "fixes #40" is fine).
2. will review your contribution, provide feedback, and work with you to ensure the successful integration of your changes into NeoBrutalismCSS.

Thank you for contributing to NeoBrutalismCSS! Your efforts are highly valued and contribute to the growth of our project.
