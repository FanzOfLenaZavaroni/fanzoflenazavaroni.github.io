---
layout: post-no-comments-no-date
title: "Discography: Sound Postcards"
maintitle: "Discography: Sound Postcards"
---

{% comment %} Clone the global category array into a local variable so it can be safely manipulated {% endcomment %}
{% assign sound_posts = site.categories["Discography Sound Postcards"] %}

<ul> 
  {% comment %} First loop: Find and display only the specific post at the top {% endcomment %} 
  {% for post in sound_posts %} 
    {% if post.name == "2023-09-11-sound-postcards.md" %} 
      <li> 
        <a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}{{ post.suffix }}</a> 
      </li> 
      {% break %} 
    {% endif %} 
  {% endfor %} 

  {% comment %} Second loop: Safely reverse and loop through the isolated local variable {% endcomment %} 
  {% for post in sound_posts reversed %} 
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

