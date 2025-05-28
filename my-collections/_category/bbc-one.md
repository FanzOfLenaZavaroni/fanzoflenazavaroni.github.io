---
layout: post-no-title-link
title: "Category: BBC One"
maintitle: "Category: BBC One"
---

<figure class="fig3">
<div class="CardLayout">
<div class="CardItem"><strong id="infobox1"><a href="#infobox1">Series 1</a></strong></div>
<div class="CardItem">
<ul>
  {% for post in site.categories.BBC-One reversed %}
    {% if post.url %}
        <li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
</div>
</div>
</figure>
