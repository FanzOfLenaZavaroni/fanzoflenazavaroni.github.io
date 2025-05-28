---
layout: post-no-comments
permalink: /categories/
title: Categories
maintitle: Categories
subtitle: "Note: Currently only content with a full date is listed in this section."
skip-cats: OnThisDay
---

<div id="archives">
{% assign sorted_cats = site.categories | sort %}
{% assign skip_categories = page.skip-cats %}

{% for category in sorted_cats %}
  {% assign skip = false %}

  {% for skip_cat in skip_categories %}
    {% if category[0] contains skip_cat %}
      {% assign skip = true %}
    {% endif %}
  {% endfor %}

  {% unless skip %}
    <figure class="fig3">
    <div class="Cardlayout">
      <div class="CardItem">
        <strong id="{{ category[0] | uri_escape }}">
          <a href="#{{ category[0] | uri_escape }}">{{ category[0] | replace: "-", " " }}</a>
        </strong>
      </div>
      <div class="CardItem">
        <ul>
          {% assign sorted_posts = category[1] | reversed %}
          {% for post in sorted_posts %}
            {% if post.url %}
              <li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></li>
            {% endif %}
          {% endfor %}
        </ul>
      </div>
    </div>
    </figure>
  {% endunless %}
{% endfor %}
</div>

