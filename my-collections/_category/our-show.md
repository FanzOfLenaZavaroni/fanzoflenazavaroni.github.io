---
layout: post-no-comments-no-date
title: Our Show
maintitle: Our Show
---

<ul>
{% for post in site.categories["Our Show"] reversed %}
{% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
