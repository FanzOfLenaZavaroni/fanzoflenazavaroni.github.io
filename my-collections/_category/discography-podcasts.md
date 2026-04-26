---
layout: post-no-comments-no-date
title: "Discography: Podcasts"
maintitle: "Discography: Podcasts"
---

<ul>
{% for post in site.categories["Discography Podcasts"] reversed %}
{% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
