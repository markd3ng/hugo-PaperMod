# Hugo PaperMod

**A fast, clean, and responsive theme for [Hugo](https://gohugo.io/).**

[![hugo-papermod](https://img.shields.io/badge/Hugo--Themes-@PaperMod-blue)](https://themes.gohugo.io/themes/hugo-papermod/)
[![Minimum Hugo Version](https://img.shields.io/static/v1?label=Hugo&message=v0.146.0%2B&color=blue&logo=hugo)](https://github.com/gohugoio/hugo/releases/tag/v0.146.0)
[![Discord](https://img.shields.io/discord/971046860317921340?label=Discord&logo=discord)](https://discord.gg/ahpmTvhVmp)

> Based on [hugo-paper](https://github.com/nanxiaobei/hugo-paper/tree/4330c8b12aa48bfdecbcad6ad66145f679a430b3), with additional features and customization options.

| Resource         | Link                                                                                    |
| ---------------- | --------------------------------------------------------------------------------------- |
| Live Demo        | [adityatelange.github.io/hugo-PaperMod](https://adityatelange.github.io/hugo-PaperMod/) |
| Documentation 📚 | [Wiki](https://github.com/adityatelange/hugo-PaperMod/wiki)                             |
| Changelog 🧾     | [CHANGELOG.md](./CHANGELOG.md)                                                          |

<p align="center">
  <kbd><img src="https://user-images.githubusercontent.com/21258296/114303440-bfc0ae80-9aeb-11eb-8cfa-48a4bb385a6d.png" alt="Mockup image" title="Mockup"/></kbd>
</p>

---

## Features 💥

`☄️ Fast | ☁️ Fluent | 🌙 Smooth | 📱 Responsive`

- **Asset pipeline** -- Hugo's built-in asset generator with fingerprinting, bundling, and minification.
- **Three layout modes** -- [Regular](https://github.com/adityatelange/hugo-PaperMod/wiki/Features#regular-mode-default-mode), [Home-Info](https://github.com/adityatelange/hugo-PaperMod/wiki/Features#home-info-mode), and [Profile](https://github.com/adityatelange/hugo-PaperMod/wiki/Features#profile-mode).
- **Light and dark themes** -- Automatic switching based on browser preference, plus a manual toggle.
- **Multilingual support** -- Includes a built-in language selector.
- **Search** -- Client-side search powered by Fuse.js.
- **SEO optimized** -- Open Graph, Twitter Cards, and Schema.org structured data out of the box.
- **Cover images** -- Per-post cover images with responsive image support.
- **Table of contents** -- Auto-generated from heading structure.
- **Native TOC sidebar rail** -- Relocate the native TOC to a sticky left/right outer sidebar on single pages (`ShowSidebarTOC`, `TocSide`) while preserving fallback behavior on smaller screens.
- **Vivia-style code typography** -- Optional Vivia-inspired code rendering with configurable font loading (`codeStyleVivia`, `codeFontFamily`, `codeFontSource`, CDN options).
- **Multiple authors** -- Native support for multi-author sites.
- **Social icons and share buttons** -- Configurable social links and per-post sharing.
- **Breadcrumb navigation**
- **Post archives and taxonomies**
- **Code block copy buttons** -- One-click copying with Chroma syntax highlighting.
- **Related post suggestions**
- **Zero JS build dependencies** -- No webpack, Node.js, or other tooling required.

| Topic                                                                                             | Description                                     |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| **[Installation guide](https://github.com/adityatelange/hugo-PaperMod/wiki/Installation)**        | Detailed installation and update instructions   |
| **[Features wiki page](https://github.com/adityatelange/hugo-PaperMod/wiki/Features)**            | In-depth explanations of all features           |
| **[FAQ wiki](https://github.com/adityatelange/hugo-PaperMod/wiki/FAQs)**                          | Common questions and configuration walkthroughs |
| **[Icons wiki](https://github.com/adityatelange/hugo-PaperMod/wiki/Icons)**                       | Documentation for social icons and share icons  |
| **[Variables wiki](https://github.com/adityatelange/hugo-PaperMod/wiki/Variables)**               | List of all available template variables        |
| **[Overiding templates](https://github.com/adityatelange/hugo-PaperMod/wiki/Template_Overrides)** | Guide to customizing templates without forking  |
| **[Releases](https://github.com/adityatelange/hugo-PaperMod/releases)**                           | Detailed history of releases                    |

---

## Performance ☄️

PaperMod consistently scores near-perfect results on [Pagespeed Insights](https://pagespeed.web.dev/report?url=https://adityatelange.github.io/hugo-PaperMod/).

<img width="481" height="116" alt="image" src="https://github.com/user-attachments/assets/497d831b-d143-4a46-bc11-b1d7f8ef4a83" />

---

## Support 🫶

- Star this repository to show your support.
- Share PaperMod with others who might find it useful.
- Sponsor the project on [GitHub Sponsors](https://github.com/sponsors/adityatelange) or [Ko-Fi](https://ko-fi.com/adityatelange).

---

## Special Thanks 🌟

- [Highlight.js](https://github.com/highlightjs/highlight.js)
- [Fuse.js](https://github.com/krisk/fuse)
- [Feather Icons](https://github.com/feathericons/feather)
- [Simple Icons](https://github.com/simple-icons/simple-icons)
- All contributors and supporters

---

## Stargazers 📈

[![Stargazers over time](https://starchart.cc/adityatelange/hugo-PaperMod.svg?background=%23ffffff00&axis=%23858585&line=%236b63ff)](https://starchart.cc/adityatelange/hugo-PaperMod)

---

## Customizations

This section tracks intentional deviations from upstream `adityatelange/hugo-PaperMod`.

- Compatibility fixes were applied for modern Hugo behavior and template parameter alignment.
- Added Vivia-style code typography port with configurable webfont loading (`codeStyleVivia`, `codeFontFamily`, `codeFontSource`).
- CDN strategy supports `google`, `jsdelivr`, and `custom` providers with graceful local font fallback.
- To disable Vivia typography and use default PaperMod code appearance, set `codeStyleVivia = false` in site params.
- Added native TOC sidebar rail support for single pages via `ShowSidebarTOC` and `TocSide`.
- Added homepage stream controls via `params.homePage` (`limit`, `moreText`, `moreLink`) without introducing `layouts/index.html`.
- Added reusable post card partial `layouts/partials/post_entry.html` to keep home/list rendering semantics aligned.
- Enhanced `homeInfoParams` with optional avatar support (`imageUrl`, `imageTitle`, `imageWidth`, `imageHeight`, `AlignSocialIconsTo`).
- Reduced image-related CLS across `cover`, Markdown image render hook, and `figure` shortcode by emitting stable dimensions whenever possible.
- `figure` shortcode policy: only infer `width`/`height` when the image resolves to local Hugo resources; external URLs keep explicit user-provided dimensions.
- Added built-in `gallery` shortcode with responsive CSS in `assets/css/extended/gallery.css`.

### Homepage Stream + Home-Info Avatar

Example params:

```toml
hasCJKLanguage = true

[params.homePage]
limit = 6
moreText = "View More Posts"
moreLink = "posts/"

[params.homeInfoParams]
Title = "PaperMod's Demo"
Content = "Welcome!"
imageUrl = "images/papermod-cover.png"
imageTitle = "PaperMod avatar"
imageWidth = 112
imageHeight = 112
AlignSocialIconsTo = "left"
```

Behavior notes:
- Home page shows only `params.homePage.limit` posts and renders a “view more” link.
- Section, taxonomy, and term list pages continue to use normal pagination.
- `hasCJKLanguage = true` delegates CJK word counting to Hugo core.

### Built-in Gallery Shortcode

Use page resources with a lightweight grid output:

```md
{{< gallery pattern="*" columns="3" thumbWidth="480" >}}
```

Optional global defaults:

```toml
[params.gallery]
thumbWidth = 480
columns = 3
gap = "0.9rem"
```

### Optional PhotoSwipe Lightbox (Gallery, Phase 1)

Enable PhotoSwipe only for built-in `gallery` shortcode output (`.pm-gallery`) via theme extension injection points.

```toml
[params.lightbox]
enabled = false
provider = "photoswipe"
gallerySelector = ".pm-gallery"

# Optional overrides (fork default uses local static vendor assets)
# cssURL = "https://cdn.jsdelivr.net/npm/photoswipe@5.4.4/dist/photoswipe.css"
# moduleURL = "https://cdn.jsdelivr.net/npm/photoswipe@5.4.4/dist/photoswipe-lightbox.esm.min.js"
# pswpModuleURL = "https://cdn.jsdelivr.net/npm/photoswipe@5.4.4/dist/photoswipe.esm.min.js"
```

Behavior notes:
- When `enabled = true`, theme injects PhotoSwipe assets through `extend_head` / `extend_footer` and initializes per gallery container.
- This fork defaults to local assets under `static/vendor/photoswipe/*` to avoid CDN/network failures in local preview.
- You can still override `cssURL` / `moduleURL` / `pswpModuleURL` in config to use external CDN. Treat these URLs as trusted configuration because external modules execute in the browser.
- Multi-instance safe: one page can contain multiple `.pm-gallery` blocks without selector collision.
- Progressive enhancement: original `<a href="...">` links remain valid fallback when JavaScript is disabled or fails.
- Phase boundary: Markdown `render-image` integration is intentionally out of scope for Phase 1 and will be assessed separately.
- Phase 2 assessment (render-image):
  - Scope: extend the Markdown image render hook to emit PhotoSwipe-compatible anchor/metadata for non-gallery images.
  - Compatibility risk: medium, because existing render hook currently guarantees width/height and lazy loading for general Markdown images; introducing lightbox wrappers can affect author expectations, external image behavior, and caption/title semantics.
  - Recommended rollout: opt-in by separate switch (e.g. `params.lightbox.enableRenderImage = false`), validate against local resources and remote URLs, then enable gradually.

### Content Security Note

The example site enables Goldmark unsafe rendering and includes a `rawhtml` shortcode for trusted author workflows. Do not enable raw HTML for multi-author or user-submitted content unless submissions are reviewed and sanitized before publishing.


### Native TOC Sidebar (Minimal Relocation)

PaperMod now supports relocating the native TOC container to a sticky sidebar on single pages, while reusing the existing `layouts/partials/toc.html` logic and keeping native TOC styling unchanged.

Example params:

```toml
[params]
ShowToc = true
ShowSidebarTOC = true
TocSide = "right" # "left" or "right"
# TocOpen remains the native control for the initial expanded/collapsed state.
```

Behavior notes:
- Desktop: post content stays on a centered 1024px track, while the sticky TOC lives on a separate outer rail and does not consume post width.
- Desktop: `TocSide = "left"` or `"right"` only changes which outer rail hosts the TOC; the post content remains centered.
- Desktop: the TOC still starts slightly lower and uses a larger sticky offset to align more naturally with the post header area.
- Small screens (`<=1280px`): the desktop rail is disabled and TOC falls back above the post content to avoid overflow.
- If `ShowSidebarTOC` is disabled, TOC keeps the original in-flow position.
- Compatibility fallback: if a browser does not support `:has()`, desktop sidebar rail auto-degrades to the inline TOC flow.
- Compatibility fallback: if `::details-content` is unsupported, TOC remains usable without the open/close animation.

### Run `exampleSite` locally

From repository root, run:

```powershell
go run github.com/gohugoio/hugo@v0.146.0 server --source exampleSite --themesDir ../.. --disableFastRender --bind 127.0.0.1 --port 1313
```

Then open `http://127.0.0.1:1313/` in your browser.

### Changelog

See [CHANGELOG.md](./CHANGELOG.md) for unreleased and released changes.





