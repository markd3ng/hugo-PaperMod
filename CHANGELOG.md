# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
- Initialized single-branch baseline with synced `exampleSite/` content.
- Migrated example site configuration from YAML to `exampleSite/config.toml`.
- Grouped configuration for SEO, Search, Social, and Analytics with English comments.
- Replaced legacy analytics partial usage with Hugo internal analytics template.
- Added repository-level customization tracking section in `README.md`.
- feat(ui): port Vivia code rendering and typography.
- feat(ui): relocate native TOC to sidebar with minimal logic changes.
- fix(ui): constrain single-page TOC sidebar layout to a 1024px reading target and lower the default sticky alignment.
- feat(ui): widen homepage main container to match the 1024px reading layout used by sidebar-TOC single pages.
- feat(ui): keep single post content on a centered 1024px track and move sidebar TOC to an outer left/right rail.
- feat(ui): add shared post card partial with homepage stream limit and "view more" entry.
- feat(ui): enhance home-info with optional avatar layout and reusable avatar processing partial.
- feat(media): reduce CLS across cover, markdown render-image, and figure shortcode via size emission.
- feat(shortcode): add built-in gallery shortcode with responsive extended CSS.
- fix(list): prevent `tag-entry` + `has-cover` class collision and remove low-hit no-cover dead style.
- fix(search): make `params.search.enabled` a real runtime switch for asset injection and search page fallback.
- fix(seo): prioritize `params.seo.*` in meta/template pipelines while keeping legacy key compatibility.
- fix(toc): add graceful fallback for browsers without `:has()` or `::details-content` support.
- fix(style): migrate copy-code colors from hardcoded rgba to theme variables.
- docs(readme): align TOC responsive breakpoint to `<=1280px` and document compatibility fallback.
- docs(example): refresh `exampleSite/README.md` tree to current TOML-based structure.
- docs(figure): clarify shortcode behavior boundary for local-resource dimension inference.
- feat(lightbox): plan and document optional PhotoSwipe integration for built-in gallery with config-driven toggle (`params.lightbox.enabled`, default off).
- docs(lightbox): add README parameters, multi-instance selector guidance, progressive fallback behavior, and phase boundary notes.
- docs(lightbox): add Phase 2 assessment for Markdown `render-image` integration scope, risks, and opt-in rollout strategy.
- fix(lightbox): correct PhotoSwipe runtime parameter serialization to avoid quoted URL/selector initialization failure.
- feat(lightbox): bundle PhotoSwipe static assets under `static/vendor/photoswipe` and switch default injection to local URLs.
- docs(lightbox): clarify local-vendor defaults and optional CDN override params in README.








