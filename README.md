# GitHub User Creation Date Finder

A Bootstrap-based static site that fetches a GitHub user account creation date using the public GitHub REST API. The page is deployable on GitHub Pages and supports an optional token via query string for higher rate limits.

## Project summary
- Minimal, dependency-free static site designed for GitHub Pages.
- Uses Bootstrap for responsive layout and styling.
- Client-side JavaScript fetches the GitHub user data and formats the account creation date in UTC (YYYY-MM-DD UTC).
- Token support via URL query param (?token=...): includes the token in the Authorization header when provided.

## Setup (GitHub Pages)
1. Create a new repository on GitHub (for example: username/gh-pages-demo).
2. Push this project’s files to the repository’s root branch (main) or a docs folder, depending on your GitHub Pages settings.
3. In your repository settings, enable GitHub Pages:
   - Source: main (or the branch you pushed to)
   - / (root) or /docs depending on your chosen layout
4. After enabling, wait a moment for GitHub to publish the site. Access it at:
   - https://<your-username>.github.io/<repository-name>/

Optional: If you want to use a custom domain, add a CNAME file with your domain name and configure DNS accordingly.

## Usage
- Open the deployment URL in a browser.
- Enter a GitHub username (e.g., octocat) into the input field and press Fetch Creation Date.
- If you have a GitHub token, you can pass it via the URL query string: ?token=YOUR_TOKEN. Example:
  https://<your-username>.github.io/<repository-name>/?token=ghp_exampletoken123
- The page will display the account creation date in UTC as YYYY-MM-DD UTC inside the element with id:
  github-created-at

Note: The script uses a broad, public API access pattern suitable for static pages. Token usage is optional and only affects rate limits for authenticated requests.

## Key files and their purpose
- index.html: Main HTML page, includes a Bootstrap-based UI and a form with id github-user-${seed} as required. It hosts the user input and result display area.
- assets/css/styles.css: Lightweight styling to improve visuals while keeping the page fully static.
- assets/js/main.js: Client-side logic to fetch GitHub user data and format the creation date (UTC) for display.
- README.md: This file, with project details and setup instructions.
- LICENSE: MIT license text for the project.

## How to run locally (optional)
- Open index.html directly in a browser from your filesystem or serve it with a simple static server
  (e.g., python -m http.server 8000 in the project root).

## Code overview
- index.html: Bootstrap-powered layout and a form with id="github-user-${seed}" as specified. The form collects a GitHub username and triggers the fetch logic.
- assets/js/main.js: Uses modern async/await for HTTP requests, reads optional token from URL, handles error states, and formats the creation date as UTC (YYYY-MM-DD UTC).
- assets/css/styles.css: Basic styling for consistent visuals across devices.

## License
MIT License

Copyright (c) 2025 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
