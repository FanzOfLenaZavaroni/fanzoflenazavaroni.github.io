---
layout: post-no-comments-no-date
title: "Category: Reflections"
maintitle: "Category: Reflections"
---

<ul>
{% for post in site.categories.Reflections reversed %}
{% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
