# Contributing

We love your input! We want to make contributing to `react-native-fps-counter` as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Local Development

To get started with local development:

```bash
# Fork the repository first (using GitHub UI)

# Then clone your fork
git clone https://github.com/YOUR_USERNAME/react-native-fps-counter.git

# Add the original repo as upstream (this lets you sync with the main repository)
# You'll need this to keep your fork up to date with the latest changes
git remote add upstream https://github.com/zirgulis/react-native-fps-counter.git

# Create a new branch for your feature
git checkout -b feature/your-feature-name

# Install dependencies
yarn install

# Build the package
yarn build

# Run TypeScript type checking
yarn typescript

# Run linting
yarn lint

# Before submitting PR, make sure to get the latest changes from upstream
git fetch upstream
git rebase upstream/main
```

## Pull Request Process

1. Update the README.md with details of changes to the interface, if applicable.
2. Update the version numbers in package.json following [Semantic Versioning](https://semver.org/).
3. The PR will be merged once you have the sign-off of the maintainers.

## Any contributions you make will be under the MIT Software License
In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report bugs using GitHub's [issue tracker](https://github.com/zirgulis/react-native-fps-counter/issues)
We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/zirgulis/react-native-fps-counter/issues/new).

## Write bug reports with detail, background, and sample code

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can.
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

## License
By contributing, you agree that your contributions will be licensed under its MIT License. 