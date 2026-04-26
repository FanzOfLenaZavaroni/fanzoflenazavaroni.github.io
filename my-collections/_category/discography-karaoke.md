---
layout: post-no-comments-no-date
title: "Discography: Karaoke"
maintitle: "Discography: Karaoke"
---

{% assign items = site.karaoke | where: "categories", "Discography Karaoke" %}

<ul>
{% for item in items %}
  <li><a href="{{ item.url | relative_url }}">{{ item.maintitle }}</a></li>
{% endfor %}
</ul>
