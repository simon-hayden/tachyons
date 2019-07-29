# Tachyons 4K 

This is a fork of tachyons (https://tachyons.io) with additional media queries for HD (1920x1080) and 4K (3840x2160) displays. All the tachyons goodness you're used to with extra breakpoints:


| name      | class names   | media query                                 |
| --- | --- | --- |
| all       | class-name    |                                             |
| not-small | class-name-ns | (min-width: 30em)                           |
| medium    | class-name-m  | (min-width: 30em) and (max-width: 60em)     |
| large     | class-name-l  | (min-width: 60em) and (max-width: 1920px)   |
| HD        | class-name-hd | (min-width: 1920px) and (max-width: 3840px) |
| 4K        | class-name-4k | (min-width: 3840px)                         |


# About Tachyonis

Quickly build and design new UI without writing css.

## Principles

* Everything should be 100% responsive
* Everything should be readable on any device
* Everything should be as fast as possible
* Designing in the browser should be easy
* It should be easy to change any interface or part of an interface without breaking any existing interfaces
* Doing one thing extremely well promotes reusability and reduces repetition
* Documentation helps promote reusability and shared knowledge
* Css shouldn't impede accessibility or the default functionality of Html
* You should send the smallest possible amount of code to the user

## Features

* Mobile-first css architecture
* 490 accessible color combinations
* 8px baseline grid
* Multiple debugging utilities to reduce layout struggles
* Single-purpose class structure
* Optimized for maximum gzip compression
* Lightweight (~14kB)
* Usable across projects
* Growing open source component library
* Works well with plain html, react, ember, angular, rails, and more
* Infinitely nestable responsive grid system
* Built with Postcss

## Getting started

Docs can be found at http://tachyons.io/docs
The modules are generally pretty small and thus quick and easy to read.

#### Dev

If you want to just use everything in tachyons/src as a jumping off point and
edit all the code yourself, you can compile all of your wonderful changes by
running

```npm start```

This will output both minified and unminified versions of the css to the css directory and watch the src directory for changes.
It's aliased to the command:

```npm run build:watch```

If you'd like to just build the css once without watching the src directory run

```npm run build```

If you want to check that a class hasn't been redefined or 'mutated' there is a linter to check that all of the classes have only been defined once. This can be useful if you are using another library or have written some of your own css and want to make sure there are no naming collisions. To do this run the command

```npm run mutations```

## Docs

The tachyons docs located at http://tachyons.io are all open source and located at https://github.com/tachyons-css/tachyons-css.github.io

You can clone the docs and use them as a template for documenting your own design system / patterns / components.
While not everything is automated, the component library generation makes it extremely easy to
generate and organize the documentation for components as demonstrated at http://tachyons.io/components

## License

MIT
