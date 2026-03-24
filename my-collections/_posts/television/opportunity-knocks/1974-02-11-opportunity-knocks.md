---
layout: post
title: Opportunity Knocks &#124; 11 February 1974 &#124; Lena Zavaroni makes her fifth and final appearance as a contestant
maintitle: Opportunity Knocks
subtitle: Episode 14.28
description: Lena makes her fifth and final appearance as a contestant after winning the viewers votes for the fourth time.
media: Thames Television
post_description: Lena makes her fifth and final appearance as a contestant after winning the viewers votes for the fourth time.
categories: [Thames, Opportunity Knocks, Hughie Green, OnThisDay11February]
last_modified_at: 13 January 2024
---

{% assign tb_posts = site.categories["Opportunity Knocks"] | sort: "date" %}

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

  {% if next %}
    <a href="{{ next.url }}">Next Episode »</a>
  {% else %}
    <span style="visibility:hidden;">Next Episode »</span>
  {% endif %}

</div>

With Bryan Taylor, The Mannings, Bill Edwards, Trivan, Maria Mawdsley and Elizabeth Hutchinson
<cite><a href="https://www.tvbrain.info/tv-archive?showname=Opportunity+Knocks&type=lostshow#:~:text=With%20Bryan%20Taylor%2C%20The%20Mannings%2C%20Bill%20Edwards%2C%20Trivan%2C%20Maria%20Mawdsley%20and%20Elizabeth%20Hutchinson">TV Brain</a></cite>

Lena makes her fifth and final appearance as a contestant after winning the viewers votes for the fourth time.

