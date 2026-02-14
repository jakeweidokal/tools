# GEMINI.md

## Project Overview

This repository is a collection of single-page, serverless web tools built with vanilla HTML, CSS, and JavaScript. The tools serve various purposes, from real estate analysis to SVG viewing. The project is deployed on Vercel and leverages Vercel's edge middleware for setting security headers.

### Main Technologies

*   **Frontend:** HTML, CSS, JavaScript
*   **Libraries:** Leaflet.js (in "Drive for Deals")
*   **Deployment:** Vercel

### Architecture

The project is structured as a monorepo containing multiple independent, single-page applications. Each tool is self-contained within a single HTML file or a dedicated directory. There is no shared code or complex build process.

## Key Files and Directories

*   `index.html`: The main entry point that links to the other tools.
*   `property-analyzer.html`: A tool to analyze property listings by pasting HTML content.
*   `drive-for-deals/`: A Progressive Web App (PWA) for mapping and tracking investment properties. It uses Leaflet.js for the interactive map.
*   `svg-viewer.html`: A utility to view, pan, and zoom SVG files.
*   `paint-palette/`: A tool for searching and comparing paint colors.
*   `middleware.js`: Vercel edge middleware to inject security headers into responses.
*   `package.json`: Defines the single dependency for Vercel edge functions.

## Building and Running

This project does not have a build step. To run any of the tools locally, follow these steps:

1.  Clone the repository:
    ```sh
    git clone https://github.com/jakeweidokal/tools.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd tools
    ```
3.  Open the desired HTML file in your web browser. For example, to open the main index page:
    ```sh
    open index.html
    ```

## Development Conventions

*   The project uses vanilla JavaScript (ES6+).
*   There are no specified linting or formatting rules.
*   Each tool is self-contained, and there is no shared application logic.
