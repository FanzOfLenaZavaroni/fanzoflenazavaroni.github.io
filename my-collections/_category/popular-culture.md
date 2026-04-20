---
layout: post-no-comments-no-date
title: "Category: Popular Culture"
maintitle: "Category: Popular Culture"
---

<ul>
{% for post in site.categories["Popular Culture"] reversed %}
{% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
