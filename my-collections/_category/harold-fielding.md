---
layout: post-no-comments
title: "Category: Harold Fielding"
maintitle: "Category: Harold Fielding"
---

<figure class="fig3">
<div class="CardLayout">
<div class="CardItem">
<ul>
{% for post in site.categories.Harold-Fielding reversed %}
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
