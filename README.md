# Microfrontend Monorepo

This project is a microfrontend architecture example that showcases how to integrate multiple frontend frameworks (React, Angular, and Vue) into a single application. The architecture allows for independent development and deployment of each microfrontend while sharing common components.

## Project Structure

```
microfrontend-monorepo
├── packages
│   ├── shell-react         # Main React application
│   ├── mfe-angular         # Angular microfrontend
│   ├── mfe-vue            # Vue microfrontend
│   └── shared-components    # Shared components library
├── package.json            # Root configuration for the monorepo
├── pnpm-workspace.yaml     # Workspace configuration for pnpm
└── README.md               # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (latest LTS version)
- pnpm (latest version)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd microfrontend-monorepo
   ```

2. Install dependencies:
   ```
   pnpm install
   ```

### Running the Applications

- **React Shell Application**
  - Navigate to the `shell-react` directory:
    ```
    cd packages/shell-react
    ```
  - Start the React application:
    ```
    pnpm dev
    ```

- **Angular Microfrontend**
  - Navigate to the `mfe-angular` directory:
    ```
    cd packages/mfe-angular
    ```
  - Start the Angular application:
    ```
    pnpm start
    ```

- **Vue Microfrontend**
  - Navigate to the `mfe-vue` directory:
    ```
    cd packages/mfe-vue
    ```
  - Start the Vue application:
    ```
    pnpm dev
    ```

### Shared Components

The `shared-components` package contains reusable components that can be used across all applications. To use these components, import them in your application as follows:

```javascript
import { Button } from 'shared-components';
```

### Building the Applications

To build each application for production, navigate to the respective directory and run:

```
pnpm build
```

### Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

### License

This project is licensed under the MIT License. See the LICENSE file for more details.