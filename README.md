# GitHub Pages upload package

Upload the two files in this folder to the root of a GitHub repository:

- `index.html` - the complete offline learning platform. Its styling and interactions are embedded, so no CSS or JavaScript files are required.
- `.nojekyll` - tells GitHub Pages to serve this static site without Jekyll processing.

Then open the repository's **Settings > Pages**, choose **Deploy from a branch**, and select **main** and **/(root)**.

Do not upload the separate `script.js` file supplied with the original download. It is a duplicate of the script already embedded inside `index.html` and is not referenced by the page.
