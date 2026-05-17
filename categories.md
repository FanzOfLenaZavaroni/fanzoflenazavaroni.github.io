---
layout: post-no-comments
title: Categories
maintitle: Categories
subtitle: "Categories for posts that are redirected to external sites or have plain text in the On This Day section or other reasons why you will not normal see them."
permalink: /categories/
add-cats: [Biography Of Lena Zavaroni, Magazines#Cash Box, Magazines#Music & Video Week, Magazines#record business, Magazines#Record and Radio Mirror, Redirects To PDF, The Stage and Television Today, theatre#grand-theatre-leeds, Sunday Post, Wordpress]
---

{% assign real = site.categories | map: "first" %}
{% assign placeholders = page.add-cats %}
{% assign merged = real | concat: placeholders | uniq %}

{% assign objects = "" | split: "" %}
{% for cat in merged %}
  {% assign obj = cat | downcase | append: "::" | append: cat %}
  {% assign objects = objects | push: obj %}
{% endfor %}

{% assign sorted = objects | sort %}

<ul>
{% for item in sorted %}
  {% assign cat = item | split: "::" | last %}
  <li>
    <a href="/category/{{ cat | downcase | replace: ' ', '-' }}">{{ cat }}</a>
  </li>
{% endfor %}
</ul>

