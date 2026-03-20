---
layout: post-no-comments-no-date
title: "Category: Reflections"
maintitle: "Category: Reflections"
---

<ul>
{% for post in site.categories.Reflections reversed %}
{% if post.url %}
<li>
<p><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></p>
</li>
{% endif %}
{% endfor %}
</ul>
