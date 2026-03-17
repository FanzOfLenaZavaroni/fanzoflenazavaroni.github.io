---
layout: post-no-comments-no-date
title: "Category: Alexandra Theatre"
maintitle: "Category: Alexandra Theatre"
---

<ul>
  {% for post in site.categories.Theatre-Alexandra-Theatre reversed %}
    {% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
</li>
    {% endif %}
  {% endfor %}
</ul>
