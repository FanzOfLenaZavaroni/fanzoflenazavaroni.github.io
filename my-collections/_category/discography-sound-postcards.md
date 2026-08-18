---
layout: post-no-comments-no-date
title: "Discography: Sound Postcards"
maintitle: "Discography: Sound Postcards"
---

<ul>
  {% comment %} First loop: Find and display only the specific post at the top {% endcomment %}
  {% for post in site.categories["Discography Sound Postcards"] %}
    {% if post.name == "2023-09-11-sound-postcards.md" %}
      <li>
        <a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}{{ post.suffix }}</a>
      </li>
      {% break %}
    {% endif %}
  {% endfor %}

  {% comment %} Second loop: Display all other posts in reversed order {% endcomment %}
  {% for post in site.categories["Discography Sound Postcards"] reversed %}
    {% if post.url %}
      {% if post.name == "2023-09-11-sound-postcards.md" %}
        {% continue %}
      {% endif %}
      <li>
        <a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}{{ post.suffix }}</a>
      </li>
    {% endif %}
  {% endfor %}
</ul>

