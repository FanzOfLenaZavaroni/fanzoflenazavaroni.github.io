---
layout: post-no-comments-no-date
title: "Category: White Rock Pavilion"
maintitle: "Category: White Rock Pavilion"
---

<ul>
{% for post in site.categories["White Rock Pavilion"] reversed %}
{% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
