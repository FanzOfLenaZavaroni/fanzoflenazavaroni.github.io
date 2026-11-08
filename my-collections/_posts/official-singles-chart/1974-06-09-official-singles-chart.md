---
layout: post
title: Official Singles Chart &#124; 9 June 1974
maintitle: Official Singles Chart
suffix: ": (You've Got) Personality, Position 40"
subtitle: (You've Got) Personality
after: " - 15 June 1974"
description: (You've Got) Personality moves up the charts to number 40.
post_description: (You've Got) Personality moves up the charts to number 40.
categories: [Official Singles Chart, OnThisDay9June]
last_modified_at: 2 June 2026
---

{% assign tb_posts = site.posts
    | where_exp: "post", "post.categories contains 'Official Singles Chart'"
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
<p>After this date the single I am sure (my personal view) would still be in the Top 100 chats for a few weeks, but as currently I have not been able to find any sources, this for now will be the final chart listed for her single "(You've Got) Personality".</p>
<ul>
<li>{{ page.post_description }}</li>
<li>Official Singles Chart: <a class="external-link" href="https://www.officialcharts.com/charts/singles-chart/19740609/7501/#:~:text=40-,PERSONALITY,-LENA%20ZAVARONI">9 June 1974 - 15 June 1974</a></li>
</ul>

