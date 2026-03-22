---
layout: post-no-comments
permalink: /categories/
title: Categories
maintitle: Categories
subtitle: "Note: Currently only content with a full date is listed in this section."
skip-cats: OnThisDay
---

<ul>
{% for cat in site.my-collections %}
  {% if cat.path contains '/_category/' %}
    <li>
      <a href="{{ cat.url }}">{{ cat.data.title | default: cat.basename }}</a>
    </li>
  {% endif %}
{% endfor %}
</ul>
