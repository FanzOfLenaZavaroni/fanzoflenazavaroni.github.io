---
layout: post-no-comments
title: "Category: Theatre"
maintitle: "Category: Theatre"
---

<figure class="fig3">
<div class="CardLayout">
<div class="CardItem">
<ul>
{% assign reversed_posts = site.posts | reverse %}
{% for post in reversed_posts %}
  {% assign has_theatre_category = false %}

  {% for category in post.categories %}
    {% if category contains "Theatre-" %}
      {% assign has_theatre_category = true %}
    {% endif %}
  {% endfor %}

  {% if has_theatre_category %}
    <li>
      <a href="{{ post.url }}">{{ post.date | date: "%-d %B %Y" }} - {{ post.maintitle }}</a>
    </li>
  {% endif %}
{% endfor %}
</ul>
</div>
</div>
</figure>
