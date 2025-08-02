---
layout: post-no-comments
title: "Category: Alexandra Theatre"
maintitle: "Category: Alexandra Theatre"
---

<figure class="fig3">
<div class="CardLayout">
<div class="CardItem">
<ul>
  {% for post in site.categories.Theatre-Alexandra-Theatre reversed %}
    {% if post.url %}
<li>
<p><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></p>
<p>{{ post.subtitle }}</p>
</li>
    {% endif %}
  {% endfor %}
</ul>
</div>
</div>
</figure>
