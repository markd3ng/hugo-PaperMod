(function () {
    function normalizeLang(raw) {
        if (!raw) return "";
        return raw
            .trim()
            .replace(/^language-/i, "")
            .replace(/[^a-z0-9+#\-_.]/gi, "")
            .toUpperCase();
    }

    function detectLang(container) {
        if (!container) return "";

        const direct = container.getAttribute("data-lang");
        if (direct) return normalizeLang(direct);

        const codeEl = container.querySelector("pre code, code");
        if (codeEl) {
            const m = codeEl.className.match(/language-([a-z0-9+#\-_.]+)/i);
            if (m && m[1]) return normalizeLang(m[1]);
        }

        const m2 = container.className.match(/language-([a-z0-9+#\-_.]+)/i);
        if (m2 && m2[1]) return normalizeLang(m2[1]);

        return "";
    }

    function applyLangBadge() {
        document.querySelectorAll(".post-content .highlight").forEach((container) => {
            const lang = detectLang(container);
            if (lang) {
                container.dataset.lang = lang;
            } else if (!container.dataset.lang) {
                container.dataset.lang = "CODE";
            }
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", applyLangBadge);
    } else {
        applyLangBadge();
    }
})();
