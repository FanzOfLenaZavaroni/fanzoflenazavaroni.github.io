---
layout: post-no-comments
title: Categories
maintitle: Categories
subtitle: "Categories that aren’t displayed on posts are listed here."
permalink: /categories/
add-cats: [Biography Of Lena Zavaroni, Cash Box, Record and Radio Mirror, Sunday Post, Wordpress]
---

<div id="archives">
{% assign sorted_cats = site.categories | sort %}
{% assign allowed_categories = page.add-cats %}

<ul>
{% for category in sorted_cats %}
  {% if allowed_categories contains category[0] %}
    <li>
      <a href="/category/{{ category[0] | downcase | replace: ' ', '-' }}">
        {{ category[0] }}
      </a>
    </li>
  {% endif %}
{% endfor %}
</ul>

</div>

