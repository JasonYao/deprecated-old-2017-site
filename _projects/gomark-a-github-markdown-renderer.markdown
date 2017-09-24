---
title:  "gomark | A Github Markdown Renderer"
date:   2017-05-30T17:30:32
image:
  name: 0-hamilton.jpg
  alt_text: "Idle hands are the Devils playthings. In this case the devil was a really bored geek."
tags:
  - featured
  - github renderer
  - go
  - technology
  - in-progress
types:
  - cli-project
github_link: "https://www.github.com/JasonYao/gomark"
---
## Test

## Test of responsive image
{% responsive_image path: assets/img/projects/0-hamilton.jpg template: _includes/image-templates/amp.html alt: "Idle hands are the Devils playthings. In this case the devil was a really bored geek." title: "The existential crisis that occurs when choosing which type of bubble tea to get it real." %}

## Test of code block highlighting
### Direct
{% highlight ruby %}
def foo
  puts 'foo'
end
{% endhighlight %}

### Normal markdown
```ruby
def foo
  puts 'foo'
end
```

## Bash test
### Normal markdown
```sh
function something() {
    echo "hi"
}
```

### Direct
{% highlight bash %}
function something() {
    echo "hi"
}
{% endhighlight %}


# hello, This is Markdown Live Preview

----
## what is Markdown?
see [Wikipedia](http://en.wikipedia.org/wiki/Markdown)

> Markdown is a lightweight markup language, originally created by John Gruber and Aaron Swartz allowing people "to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML)".

----
## usage
1. Write markdown text in this textarea.
2. Click 'HTML Preview' button.

----
## markdown quick reference
# headers

*emphasis*

**strong**

* list

>block quote

    code (4 spaces indent)
[links](http://wikipedia.org)

----
## changelog
* 17-Feb-2013 re-design

----
## thanks
* [markdown-js](https://github.com/evilstreak/markdown-js)
## End Test

## Intro
When building out documentation for projects on github, I've found
that writing everything in a `.md` markdown file is both the simplest
and most pleasant solution to solving the problem of documentation.

A problem then occurs, however, when I try and see the output file
before committing. In the past, I could rely on
[grip](https://github.com/joeyespo/grip), but a huge limitation was
the inability to render markdown when offline.
As the project development seems to have stalled
(last commit was 3 months ago, with 4 outstanding `PR`s and 20 open issues),
the need for a new markdown renderer project became apparent.

This markdown renderer project will render markdown files locally,
even when offline, allowing you to see how they look before
committing and pushing to Github.

{% responsive_image path: assets/img/projects/0-hamilton.jpg template: _includes/image-templates/amp.html alt: "Idle hands are the Devils playthings. In this case the devil was a really bored geek." title: "The existential crisis that occurs when choosing which type of bubble tea to get it real." %}

More than that, it uses the latest [Github GraphQL v4 API](https://developer.github.com/v4/),
enabling for more efficient calls than the v3 REST API used by grip.

## Features
- Server application that will re-render file automatically as it
changes- will not need a page refresh either
- Built in [Golang](https://golang.org/), making it extremely fast
- Allows for offline rendering based on prior cached responses
- Allows for `HTML` file output generation

## Installation
### MacOS
```sh
brew install grender
```

### Others
```sh
go get -u github.com/JasonYao/gRender/cmd/gRender
```

## Usage

### Rendering a Markdown file
```sh
grender SOME_MARKDOWN_FILE.md
```

### Rendering All Markdown Files in a Directory
```sh
grender SOME_DIRECTORY_WITH_MARKDOWN_FILES
```

### Generate HTML Output
#### Single File Output
```sh
grender SOME_MARKDOWN_FILE.md -o OUTPUTFILE.html
```
#### Directory Output
```sh
grender SOME_DIRECTORY_WITH_MARKDOWN_FILES -o OUTPUT_DIRECTORY
```

### Seeing the Help Menu
```sh
grender -h
```

### Seeing the Help Submenu of a Command
```sh
grender SOME_COMMAND -h
```

### Equivalence With Github's Online Renderer
The goal for this project is two-fold:
- Match Github's online rendering exactly, or close to exactly
in offline situations
- Provide offline rendering when there is no access
to the internet or rate limits are hit.

In order for this to occur, `gRender` will make a call
to github's [markdown](https://developer.github.com/v3/markdown/) API. If it fails for rate limiting
or connectivity issues, it will automatically fall back to
the offline renderer, with any cached values from the last call
to Github overriding shipped defaults.

It should be noted that any calls to Github will be over HTTPS,
encrypting your data when it's transported over the wire.

