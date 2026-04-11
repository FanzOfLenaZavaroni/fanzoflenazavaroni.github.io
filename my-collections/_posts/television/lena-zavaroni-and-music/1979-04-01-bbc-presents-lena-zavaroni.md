---
layout: post
title: BBC Light Entertainment Presents Lena Zavaroni &#124; 1 April 1979
maintitle: BBC Light Entertainment Presents Lena Zavaroni
subtitle: BBC Television Centre
description: Believed to be a recording for an episode of Lena Zavaroni and Music.
post_description: Believed to be a recording for an episode of Lena Zavaroni and Music.
categories: [BBC Television Centre, Lena Zavaroni and Music, Dougie Squires, OnThisDay1April]
last_modified_at: 31 March 2026
onthisdaylink: false
---

{% assign tb_posts = site.posts
    | where_exp: "post", "post.categories contains 'Lena Zavaroni and Music'"
    | sort: "date" %}

{% assign index = nil %}

{% for p in tb_posts %}
  {% if p.url == page.url %}
    {% assign index = forloop.index0 %}
  {% endif %}
{% endfor %}

{% assign prev_index = index | minus: 1 %}
{% assign next_index = index | plus: 1 %}

{% assign prev = nil %}
{% assign next = nil %}

{% if prev_index >= 0 %}
  {% assign prev = tb_posts[prev_index] %}
{% endif %}

{% if next_index < tb_posts.size %}
  {% assign next = tb_posts[next_index] %}
{% endif %}

<div style="background-color: #f3f3f3; padding: 10px; border-radius: 5px; text-align: center; display: flex; justify-content: space-evenly;">

  {% if prev %}
    <a href="{{ prev.url }}">« Previous Episode</a>
  {% else %}
    <span style="visibility:hidden;">« Previous Episode</span>
  {% endif %}

  <span style="visibility:hidden;">Navigation Placeholder — No Link</span>

  {% if next %}
    <a href="{{ next.url }}">Next Episode »</a>
  {% else %}
    <span style="visibility:hidden;">Next Episode »</span>
  {% endif %}

</div>

<p>{{ page.post_description }}</p>
