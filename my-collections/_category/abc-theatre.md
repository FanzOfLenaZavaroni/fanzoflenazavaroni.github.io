---
layout: post-no-title-link
title: "Category: ABC Theatre"
maintitle: "Category: ABC Theatre"
---

<ul>
  {% for post in site.categories.ABC-Theatre %}
    {% if post.url %}
        <li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></li>
    {% endif %}
  {% endfor %}
</ul>

