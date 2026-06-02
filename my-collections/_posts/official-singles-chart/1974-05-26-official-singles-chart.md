---
layout: post
title: Official Singles Chart &#124; 26 May 1974
maintitle: Official Singles Chart
suffix: ": (You've Got) Personality, Position 50"
subtitle: (You've Got) Personality
after: " 1 June 1974"
description: (You've Got) Personality enters the Charts at number 50.
post_description: (You've Got) Personality enters the Charts at number 50.
categories: [Personality, OnThisDay26May]
last_modified_at: 2 June 2026
---

{% assign tb_posts = site.posts
    | where_exp: "post", "post.categories contains 'Personality'"
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

  <a href="/discography/singles/1974-05-24-personality-uk">(You've Got) Personality, Single</a>

  {% if next %}
    <a href="{{ next.url }}">Next Episode »</a>
  {% else %}
    <span style="visibility:hidden;">Next Episode »</span>
  {% endif %}

</div>

<h2 id="infobox1"><a href="#infobox1">Details</a></h2>
<p>The Official Singles Chart site lists the page as having the Top 100, this is not the case for historical chart listings it only covers the Top 50.</p>
<ul>
<li>{{ page.post_description }}</li>
<li>Official Singles Chart: <a class="extrenal-link" href="https://www.officialcharts.com/charts/singles-chart/19740526/7501/#:~:text=Number-,50,-NEW">26 May 1974 - 1 June 1974</a></li>
</ul>

