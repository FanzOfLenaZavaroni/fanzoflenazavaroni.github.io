---
layout: post-no-comments-no-date
title: New Theatre Southport
maintitle: New Theatre Southport
---

<ul>
{% for post in site.categories["New Theatre Southport"] reversed %}
{% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
