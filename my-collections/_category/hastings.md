---
layout: post-no-comments-no-date
title: Hastings
maintitle: Hastings
---

<ul>
{% for post in site.categories.Hastings reversed %}
{% if post.url %}
<li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></li>
{% endif %}
{% endfor %}
</ul>
