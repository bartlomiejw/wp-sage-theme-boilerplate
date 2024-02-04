<p align="center">
  <a href="https://roots.io/sage/">
    <img alt="Sage" src="https://cdn.roots.io/app/uploads/logo-sage.svg" height="100">
  </a>
</p>

## Requirements

- [WordPress](https://wordpress.org/) >= 5.9
- [PHP](https://secure.php.net/manual/en/install.php) >= 7.5.6 (
  with [`php-mbstring`](https://secure.php.net/manual/en/book.mbstring.php) enabled)
- [Node.js](http://nodejs.org/) >= 16
- [npm.js](https://www.npmjs.com/)
- [Composer](https://getcomposer.org/)
- [ACF PRO](https://www.advancedcustomfields.com/pro/)
- [Sage SVG](https://github.com/Log1x/sage-svg)
- [Sage Directives](https://github.com/Log1x/sage-directives)
- [vlucas/phpdotenv](https://github.com/vlucas/phpdotenv)
- [roots/acorn](https://github.com/roots/acorn)

## What to configure

- After `git clone` you need to `composer install` to install `vlucas/phpdotenv`
- Then you can use .env files in your project

## Build scripts

- **`dev`** - builds css & js once [development mode]
- **`build`** - builds css & js once [production mode]
- **`translate`** - generate wordpress theme translate files (.pot)

## Overview

Sage is a WordPress starter theme with block editor support.

- Harness the power of [Laravel](https://laravel.com) and its available packages thanks to [Acorn](https://github.com/roots/acorn)
- Clean, efficient theme templating utilizing [Laravel Blade](https://laravel.com/docs/master/blade)
- Modern frontend development workflow powered by [Bud](https://bud.js.org/)
- Out of the box support for [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

See the [Sage installation documentation](https://roots.io/sage/docs/installation/).
