---
layout: post-no-comments-no-date
title: David Schofield
maintitle: David Schofield
---

<ul>
{% for post in site.categories["David Schofield"] reversed %}
{% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
