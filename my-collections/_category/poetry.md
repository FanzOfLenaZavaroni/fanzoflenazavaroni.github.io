---
layout: post-no-comments-no-date
title: "Category: Poetry"
maintitle: "Category: Poetry"
---

<ul>
{% for post in site.categories.Poetry reversed %}
{% if post.url %}
<li>
<p><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></p>
</li>
{% endif %}
{% endfor %}
</ul>
