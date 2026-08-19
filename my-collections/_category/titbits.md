---
layout: post-no-comments-no-date
title: Titbits
maintitle: Titbits
---

<ul>
{% for post in site.categories.Titbits reversed %}
{% if post.url %}
<li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}{{ post.suffix }}</a></li>
{% endif %}
{% endfor %}
</ul>
