---
layout: post-no-comments-no-date
title: "Category: Biography"
maintitle: "Category: Biography"
---

<ul>
{% for post in site.categories.Biography reversed %}
{% if post.url %}
<li>
<p><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></p>
</li>
{% endif %}
{% endfor %}
</ul>
