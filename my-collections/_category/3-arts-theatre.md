---
layout: post-no-title-link
title: "Category: 3 Arts Theatre"
maintitle: "Category: 3 Arts Theatre"
---

<ul>
  {% for post in site.categories.3-Arts-Theatre reversed %}
    {% if post.url %}
        <li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></li>
    {% endif %}
  {% endfor %}
</ul>

