---
layout: post-no-comments
permalink: /categories/
title: Categories
maintitle: Categories
subtitle: "Note: Currently only content with a full date is listed in this section."
skip-cats: OnThisDay
---

<ul>
{% for page in site.pages %}
  {% if page.path contains '/_category/' %}
    {% assign name = page.basename %}
    <li><a href="/category/{{ name }}/">{{ name }}</a></li>
  {% endif %}
{% endfor %}
</ul>
