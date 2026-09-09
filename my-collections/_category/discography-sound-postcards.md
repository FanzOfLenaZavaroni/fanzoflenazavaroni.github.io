---
layout: post-no-comments-no-date
title: "Discography: Sound Postcards"
maintitle: "Discography: Sound Postcards"
---

{% comment %} 1. Get the category array safely and find the pinned post {% endcomment %}
{% assign all_posts = site.categories["Discography Sound Postcards"] %}
{% assign pinned_post = all_posts | where: "name", "2023-09-11-sound-postcards.md" | first %}

<ul> 
  {% comment %} 2. Output the pinned post at the top if it exists {% endcomment %} 
  {% if pinned_post %}
    <li> 
      <a href="{{ pinned_post.url }}">{{ pinned_post.date | date: "%Y-%m-%d" }} - {{ pinned_post.maintitle }}{{ pinned_post.suffix }}</a> 
    </li> 
  {% endif %}

  {% comment %} 3. Loop through all posts in reverse, skipping the pinned one via a simple URL check {% endcomment %} 
  {% for post in all_posts reversed %} 
    {% if post.url and post.name != "2023-09-11-sound-postcards.md" %} 
      <li> 
        <a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}{{ post.suffix }}</a> 
      </li> 
    {% endif %} 
  {% endfor %} 
</ul>

