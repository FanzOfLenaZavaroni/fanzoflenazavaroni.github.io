---
layout: post-no-title-link
title: "Category: Hughie Green"
maintitle: "Category: Hughie Green"
---

<ul>
  {% for post in site.categories.Hughie-Green reversed %}
    {% if post.url %}
        <li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
