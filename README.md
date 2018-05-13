# form-generator
Generate a form at runtime based on a input JSON contract. Exports the result on submit

## Table of Contents

1. [Application Structure](#application-structure)
1. [Development](#development)
    1. [Requirements](#requirements)
    1. [Getting Started](#getting-started)
    1. [Code Formatting](#code-formatting)
1. [Build System](#build-system)
    1. [Styles](#styles)

## Application Structure

```
├── app                          # Application related logic
│   │                            # Main HTML page container for app
│   │── src                      # Source code
│   │   │
│   │   ├── components                   # Global Reusable Presentational Components.
│   │   │   │   │                        # Unlike containers, components are provided with their data either from other components or a container.
│   │   │   │   └── atoms                # Atoms include basic HTML elements like form labels, inputs, buttons, and others that can’t be broken down any further without ceasing to be functional.
│   │   │   │   └── molecules            # Molecules are relatively simple groups of UI elements functioning together as a unit. For example, a form label, search input, and button can join together to create a search form molecule.
│   │   │   │   └── organisms            # Organisms are relatively complex UI components composed of groups of molecules and/or atoms and/or other organisms. These organisms form distinct sections of an interface.
│   │   │   ├── containers               # Global Reusable Container Components.
├── node_modules                         # Installed JS dependencies
```

## Development

### Requirements

* node `^8.11.1`
* npm `^5.6.0`

### Getting Started

Install the dependent libraries using [Yarn](https://github.com/yarnpkg/yarn).

#### Node

|`yarn run <script>`|Description|
|------------------|-----------|
|`build`|Builds the project.|
|`dev`|Serves the app at `localhost:8081` with HMR enabled.|
|`lint:js`|Checks for JS linting issues|
|`test`|Runs the project unit tests|
|`test:watch`|Runs the project unit tests in watch mode|

