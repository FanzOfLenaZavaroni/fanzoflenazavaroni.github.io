---
layout: post-no-comments-no-date
title: "Category: Les Dawson"
maintitle: "Category: Les Dawson"
---

<ul>
{% for post in site.categories["Les Dawson"] reversed %}
{% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
