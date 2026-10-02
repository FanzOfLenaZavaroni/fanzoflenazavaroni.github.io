---
layout: post-no-comments-no-date
title: Websites
maintitle: Websites
---

---
layout: post-no-comments-no-date
title: Websites
maintitle: Websites
---

{% assign web_names = "" | split: "" %}
{% for cat in site.categories %}
  {% if cat[0] contains "Online-" %}
    {% assign web_names = web_names | push: cat[0] %}
  {% endif %}
{% endfor %}

{% assign sorted_web_names = web_names | sort_natural %}

{% for name in sorted_web_names %}
  {% assign web = name | split: "Online-" | last %}
  <h2 id="{{ web | slugify }}"><a href="#{{ web | slugify }}">{{ web }}</a></h2>
  
  <ul>
    {% assign category_posts = site.categories[name] | sort: "date" %}
    {% for post in category_posts %}
      <li>
        <a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}{{ post.suffix }}</a>
      </li>
    {% endfor %}
  </ul>
{% endfor %}
