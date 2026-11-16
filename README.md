# Academic homepage

A single-page academic website with a light cardinal-and-gold theme and space for a profile photo. The files are ready to serve directly through GitHub Pages.

## Customize

| What to update | Where to edit |
| --- | --- |
| Name, affiliation, bio, and browser tab title | `index.html` |
| Research, publications, teaching, and contact | `index.html` |
| Profile photo | Add a JPEG as `assets/profile.jpg`. The page displays it in the existing photo slot. |
| Colors and typography | `assets/styles.css` |

Edit the page's description in the `<head>` of `index.html` when you update the bio. If you rename a section's `id`, update its matching navigation link.

## Preview locally

From the folder containing `index.html`, run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open [localhost:8000](http://127.0.0.1:8000) and refresh after editing. Press Ctrl+C to stop the server.

## Publish with GitHub Pages

1. Create a public GitHub repository named `<username>.github.io`, using your own GitHub username. If you already have that repository, use it.
2. Commit `index.html`, `assets/`, `.nojekyll`, and `README.md` at the root of the repository. Keep `.nojekyll` in place so GitHub Pages serves the static files directly.
3. In the repository, open **Settings → Pages**. Set **Source** to **Deploy from a branch**, select **main** and **/(root)**, then click **Save**. If you use a different branch, select the one containing the site files.
4. When the deployment finishes, open `https://<username>.github.io`. GitHub will deploy updates when you push changes to the selected branch.

[GitHub Pages quickstart](https://docs.github.com/en/pages/quickstart) · [Publishing source settings](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
