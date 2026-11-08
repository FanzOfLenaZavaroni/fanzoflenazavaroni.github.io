---
layout: post-no-comments-no-date
title: Private Passions
maintitle: Private Passions
---

<ul>
{% for post in site.categories["Private Passions"] reversed %}
{% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
