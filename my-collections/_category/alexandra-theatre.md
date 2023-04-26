---
layout: post-no-title-link
title: "Category: Alexandra Theatre"
maintitle: "Category: Alexandra Theatre"
---

<ul>
  {% for post in site.categories.Alexandra-Theatre reversed %}
    {% if post.url %}
        <li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></li>
    {% endif %}
  {% endfor %}
</ul>

