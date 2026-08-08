# AGENTS.md - Academic Pages (Jekyll)

## Running locally

```bash
bundle install              # Install Ruby dependencies to vendor/bundle
jekyll serve -l -H localhost # Preview at localhost:4000, auto-rebuild
npm run build:js             # Minify JavaScript assets
```

**Note**: Restart Jekyll server after changing `_config.yml`.

## Collections

File structure by type:
- `_posts/` - Blog posts (YYYY-MM-DD-title.md)
- `_publications/` - Publications (YYYY-MM-DD-title.md)
- `_talks/` - Talks (YYYY-MM-DD-title.md)
- `_teaching/` - Teaching (title.md)
- `_projects/` - Projects (YYYY-MM-DD-title.md)
- `_pages/` - Static pages

Each file uses YAML front matter with required fields like `title`, `collection`, and `date`.

## Directory structure

- `_site/` - Generated HTML (delete before commit)
- `scripts/` - Jupyter notebooks for generating content from BibTeX (`PubsFromBib.ipynb`, `TalksFromBib.ipynb`, `talkmap.ipynb`)
- `talkmap/` - Talk visualization scripts
- `vendor/bundle/` - Bundled Ruby gems (managed by `.bundle/config`)
- `assets/` - JS/CSS (minify with `npm run build:js`)
- `_data/` - JSON/YAML data files

## Key files

- `_config.yml` - Main site configuration, reloads on change except when running `jekyll serve`
- `Gemfile` - Ruby dependencies (delete Gemfile.lock if `bundle install` fails)