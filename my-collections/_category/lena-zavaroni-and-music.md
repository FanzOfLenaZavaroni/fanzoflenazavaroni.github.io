---
layout: post-no-comments
title: "Category: Lena Zavaroni and Music"
maintitle: "Category: Lena Zavaroni and Music"
---

<figure class="fig3">
<div class="CardLayout">
<div class="CardItem">
<ul>
{% for post in site.categories.Lena-Zavaroni-and-Music reversed %}
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

