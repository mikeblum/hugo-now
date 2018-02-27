# Hugo Now

![Powered By Hugo](https://raw.githubusercontent.com/mikeblum/hugo-now/master/static/logo/hugo-now.png)

A Hugo port of [Jekyll Now](https://github.com/barryclark/jekyll-now). The Hugo implementation is inspired by [Hemingway](https://github.com/tanksuzuki/hemingway).

## Screenshots

### Home Page

<img src="https://raw.githubusercontent.com/mikeblum/hugo-now/master/static/screenshots/homepage.png" alt="home page"></img>

---

### Posts

<img src="https://raw.githubusercontent.com/mikeblum/hugo-now/master/static/screenshots/post.png" alt="post"></img>

---

### Dashboard

<img src="https://raw.githubusercontent.com/mikeblum/hugo-now/master/static/screenshots/dashboard.png" alt="dashboard"></img>

---

### Projects

<img src="https://raw.githubusercontent.com/mikeblum/hugo-now/master/static/screenshots/project.png" alt="dashboard"></img>

---

### Table of Contents

<img src="https://raw.githubusercontent.com/mikeblum/hugo-now/master/static/screenshots/table-of-contents.png" alt="table of contents"></img>

---

## Features

<img src="https://raw.githubusercontent.com/mikeblum/hugo-now/master/static/images/bootstrap-solid.png" alt="bootstrap 4" width="120px" height="120px"></img>

<h3 class="mt-0">Bootstrap V4</h3>
Update from Bootstrap 3 to 4
      
<img src="https://raw.githubusercontent.com/mikeblum/hugo-now/master/static/images/font-awesome-logo.png" alt="font awesome logo" width="120px" height="120px"></img>

<h3 class="mt-0">Font Awesome</h3>
Latest Font Awesome icons

<img src="https://raw.githubusercontent.com/mikeblum/hugo-now/master/static/images/javascript.png" alt="no javascript" width="120px" height="120px"></img>

<h3 class="mt-0">Progressive Enhancement</h3>
Disabling Javascript should retain the same experience.

<img src="https://raw.githubusercontent.com/mikeblum/hugo-now/master/static/images/sass.png" alt="sass" width="120px" height="120px"></img>

<h3 class="mt-0">Powerful Styling</h3>
Using the power of SASS to power our build pipeline. All major dependencies have .scss support.

<img src="https://raw.githubusercontent.com/mikeblum/hugo-now/master/static/images/gulp.png" alt="gulp" height="120px"></img>

<h3 class="mt-0">Modern Build Pipeline</h3>
Without Jekyll's Asset pipeline, a Hugo theme needs a build system. I opted for <a href="http://gulpjs.com/">gulp.js</a>

<h3 class="mt-0">Emoji :sunglasses:</h3>
Support for emojis found here: <a href="https://www.webpagefx.com/tools/emoji-cheat-sheet/">Emoji Cheatsheet</a>

Available for:

- :white_check_mark: tags

- :white_check_mark: titles

- :white_check_mark: posts / .Content


<img src="https://raw.githubusercontent.com/mikeblum/hugo-now/master/static/images/pygments-logo.png" alt="pygments" width="120px" height="120px"></img>

<h3 class="mt-0">Syntax Highlighting</h3>
<p>
Rather then using a JS library like <a href="https://highlightjs.org/">hightlight.js</a> I opt for server-side rendering with <a href="http://pygments.org/">Pygments</a> to keep in line with progressive enhamcements. Here is Hugo's <a href="https://gohugo.io/extras/highlighting">opinion</a> on the matter:
<blockquote class="blockquote">
    <p class="mb-0">The advantage of server side is that it doesn’t depend on a JavaScript library and consequently works very well when read from an RSS feed.</p>
</blockquote>
I would argue site usability / robustness far out weighs build times.
</p>
      
<img src="https://raw.githubusercontent.com/mikeblum/hugo-now/master/static/images/google-analytics.png" alt="google analytics" width="120px" height="120px"></img>

<h3 class="mt-0">Google Analytics</h3>
Configure Google Analytics with `GoogleAnalytics`

<h3 class="mt-0">Table of Contents</h3>
<h4>Headings are resolved into a styleable Table of Contents</h4>

Enabled via `toc` in your front matter:

```
toc: true
```

* true = show table of contents
* false = hide table of contents

---

## Install

Add Hugo Now as a submodule:

`git submodule add git@github.com:mikeblum/hugo-now.git themes/hugo-now`

Your `.gitmodules` should now contain:

```
[submodule "themes/hugo-now"]
	path = themes/hugo-now
	url = git@github.com:mikeblum/hugo-now.git
```

> Remember to commit your .gitmodules

## Configure

`config.toml`

```toml
baseurl = "http://example.org/"
languageCode = "en-us"
title = "My New Hugo Site"
# theme
theme = "hugo-now"
# Comment the themesDir option if you use this theme in production
themesDir = "../.."
# google analytics
GoogleAnalytics = "UA-XXXXXX"

[taxonomies]
  category = "categories"
  tag = "tags"

[params]
  description = "Hugo port of Jekyll Now"
  author = "Hugo Now"
  keywords = ["hugo-now", "hugo"]
  avatar = "/images/hugo.png"
  displayauthor = false
  # pygments
  PygmentsUseClasses = true
  PygmentsCodeFences = true
  # pagination
  paginate = 10
  paginatePath = "page"
```

## Content

* `Use SVG rather than PNG / JPG`
	 - they style better and take less bandwidth
* `Pygments styles use SASS`
	- PygmentsStyle is configured by changing the `sass/style.scss`
	- Defaults to `default` Pygments style - see [Pygments Styles](https://help.farbox.com/pygments.html)

## Build

### Hugo

```
hugo server
```

You can go to localhost:1313 and this theme should be visible.

### SASS

Build SASS updates by running `gulp` (development) or `gulp dist` (production)

Update `includes.html` with the appropriate CSS file (default is style.min.css):

```
<!-- CSS -->
<link rel="stylesheet" href="/css/style.min.css">
```

### Javascript

Hugo Now supports Bootstrap JS but Github Pages and others disable Javascript. This is available for sites hosted on S3 and elsewhere.

Build JS updates by running `gulp` (development) or `gulp dist` (production)

Update `javascript.html` with the appropriate JS files (defaults are bootstrap dependencies).

## License

Hugo Now is licensed under the [MIT License](LICENSE.md).

## Author

[Michael Blum](https://github.com/mikeblum)

## Credits

is based on [Hemingway](https://github.com/tanksuzuki/hemingway) created by [Asuka Suzuki](https://github.com/tanksuzuki).

