---
title: "Javascript Support"
date: 2017-07-04T20:55:50-05:00
tags: ["bootstrap", "javascript", "noscript", "demo", "feature"]
toc: true
banner: [
    {
        src: "/images/javascript.svg",
        alt: "javascript"
    }
]
---

<!--more-->

---

# Javascript Enabled?

<noscript>
    <div class="bd-callout bd-callout-warning">
        <strong>Javascript Disabled</strong>
        <p>Hugo Now assumes javascript is disabled (as does Github Pages) but if your posts make use of bootstrap JS plugins read on...</p>
        <strong>No special fallbacks when JavaScript is disabled</strong>
        <p>Bootstrap’s plugins don’t fall back particularly gracefully when JavaScript is disabled. If you care about the user experience in this case, use <noscript> to explain the situation (and how to re-enable JavaScript) to your users, and/or add your own custom fallbacks.
        </p>
    </div>
</noscript>

<div id="js-enabled-msg" class="bd-callout bd-callout-success js-enabled">
    <strong>Javascript Enabled</strong>
    <p>While Hugo Now assumes javascript is disabled, full Bootstrap JS is supported</p>
    <p>(see <code>partials/javascript.html</code>)</p>
</div>

<!-- jQuery not loaded yet -->
<script type="text/javascript">
    var element = document.getElementById('js-enabled-msg')
    element.style.display = 'block';
</script>