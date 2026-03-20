---
layout: post-no-comments-no-date
title: "Category: New Theatre Cardiff"
maintitle: "Category: New Theatre Cardiff"
---

<ul>
{% for post in site.categories.New-Theatre-Cardiff reversed %}
{% if post.url %}
<li>
<p><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></p>
</li>
{% endif %}
{% endfor %}
</ul>
