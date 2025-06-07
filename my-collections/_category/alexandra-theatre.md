---
layout: post-no-comments
title: "Category: Alexandra Theatre"
maintitle: "Category: Alexandra Theatre"
---

<figure class="fig3">
<div class="CardLayout">
<div class="CardItem">
<ul>
  {% for post in site.categories.Alexandra-Theatre reversed %}
    {% if post.url %}
        <li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
</div>
</div>
</figure>
