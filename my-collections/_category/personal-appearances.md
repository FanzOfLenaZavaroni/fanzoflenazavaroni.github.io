---
layout: post-no-comments-no-date
title: "Category: Personal Appearances"
maintitle: "Category: Personal Appearances"
---

<ul>
{% for post in site.categories["Personal Appearances"] reversed %}
{% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}: {{ post.suffix }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
