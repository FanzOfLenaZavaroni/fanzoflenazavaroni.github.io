---
layout: post-no-comments
permalink: /categories/
title: Categories
maintitle: Categories
subtitle: "Note: Currently only content with a full date is listed in this section."
skip-cats: OnThisDay
---

<ul>
{% for file in site.static_files %}
  {% if file.path contains '/my-collections/_category/' and file.extname == '.md' %}
    {% assign name = file.name | replace: '.md', '' %}
    <li><a href="/category/{{ name }}/">{{ name }}</a></li>
  {% endif %}
{% endfor %}
</ul>
