---
layout: post-no-title-link
title: "Category: BBC One"
maintitle: "Category: BBC One"
---

<ul>
  {% for post in site.categories.BBC-One reversed %}
    {% if post.url %}
        <li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></li>
    {% endif %}
  {% endfor %}
</ul>

