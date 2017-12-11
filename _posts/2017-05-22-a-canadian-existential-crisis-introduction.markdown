---
title:  "A Canadian Existential Crisis Introduction"
date:   2017-05-22T17:30:32
categories: featured introduction crisis
image:
  name: 0-hamilton.webp
  alt_text: "Truly, it's more of a Canadian/Hong Konger/American existential crisis."
tags:
  - featured
  - introduction
  - existential crisis
  - rants
---
## Intro
Hey there! My name is Jason, and for some reason you've stumbled onto my site.
Whether it was to laugh at/with me on my rants, geeking out over playing games
(currently [Overwatch](https://playoverwatch.com/) is my drug of choice), or
because a technical guide sparked your interest, I hope you derive some
enjoyment from this site.

This is actually the 5th or 6th time I've tried to get a blog going. I kept
building and rebuilding prior versions on different platforms, and ended up
learning five or six different ways to deploy blog platforms instead of just
writing posts.

## Platform Overview
Technically speaking, I am proud that I managed to get everything to this point,
because:

1.) I get to be lazy
  - There is no maintenance required for the site, just content updates. Since
  hosting is taken care of by [Github Pages](https://pages.github.com/), and
  deployment taken care of by [Cloudflare's CDN](https://www.cloudflare.com/),
  all I have to do to update content is push to the github repo.
  - In this fashion the site also becomes distributed among the CDN's
  edge nodes, becoming fault-tolerant in the process (barring catastrophic
  failure), all while minimizing latency globally.

2.) I get free stuff until the [heat death of the universe](https://www.youtube.com/watch?v=F1CddzgVW14),
or until they run out of business, whichever comes first
  - Free automatic optimization of static assets and `TLS` provided by Cloudflare
  - Free sending/receiving of emails from a custom email address via [Mailgun](https://www.mailgun.com/) *

3.) This site has an extremely strong foundation
  - By fully leveraging [Jekyll](https://jekyllrb.com/)'s liquid templating,
  this site can [generate multiple output files from a single source](https://github.com/jekyll/jekyll/issues/3041#issuecomment-303910050)
  - Has proper `404` error code handling
  - Has automatic redirects to the `www.` subdomain for better SEO
  - Automatically leverages [Opengraph](https://developers.facebook.com/docs/sharing/opengraph) for all pages,
  making any sharing on Facebook look good.
  - Automatically adds metadata to all blog posts and projects via [Schema.org](https://schema.org/docs/schemas.html)
  markup
  - Is mobile-friendly

\* Up to 10k emails a month, which is overkill for my purposes.

## Existential Crisis Question
If you play Genji in Overwatch, are you supposed to spam
"I NEED HEALING" when you get a kill, or emote over the
enemy's corpse?

### My Answer
I think I would uninstall the game and re-evaluate my life
for picking trash heroes. At least it isn't as bad as
instalocking Hanzo.

## Future Steps
There's a couple projects that I'll be adding to the site over time,
along with the writing of technical articles and other blog posts.

## Blog Posts & Technical Articles
- The first planned article will be on AWS and dev-ops in general
- The second planned article will be on a specific clever trick
to build in a programmatic circuit breaker into AWS
- The third planned post will be something different, and be a
rant about NYC's terrible housing market for renters
- A fourth planned post fawning over the
[Hamilton Musical](http://www.hamiltonbroadway.com/), since I only just
saw it recently and was completely blown away and need to vent.
