---
layout: post-no-comments-no-date
title: Sunday Post
maintitle: Sunday Post
---

<ul>
{% for post in site.categories["Sunday Post"] reversed %}
{% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
