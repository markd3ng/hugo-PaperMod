# hugo-paperMod Example

This repository offers an example site for [hugo-PaperMod](https://github.com/adityatelange/hugo-PaperMod)

## Install

Read Wiki => [hugo-PaperMod - Installation](https://github.com/adityatelange/hugo-PaperMod/wiki/Installation)

## Directory Tree

```
.(site root)
├── config.toml
├── content
│   ├── archives.fr.md
│   ├── archives.md
│   ├── posts
│   │   ├── emoji-support.md
│   │   ├── markdown-syntax.fa.md
│   │   ├── markdown-syntax.fr.md
│   │   ├── markdown-syntax.md
│   │   └── ...
│   ├── search.fr.md
│   ├── search.md
│   └── tags
├── static
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   └── papermod-cover.png
├── resources
│   └── _gen
└── themes
    └── hugo-PaperMod
```

## Lightbox Demo

- PhotoSwipe demo content is available at `content/posts/papermod/papermod-features/index.md` via built-in `gallery` shortcode.
- Example config enables it in `config.toml` under `[params.lightbox]`.
- Fork default loads PhotoSwipe assets from local theme static files (`/vendor/photoswipe/*`).

