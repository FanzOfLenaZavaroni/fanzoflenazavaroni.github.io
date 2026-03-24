---
layout: post-no-comments-no-date
title: "Category: BBC World Service"
maintitle: "Category: BBC World Service"
---

<ul>
{% for post in site.categories["BBC World Service"] reversed %}
{% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
