---
layout: post
title: Opportunity Knocks &#124; 20 March 1978 &#124; Final broadcast of the much loved show
maintitle: Opportunity Knocks
subtitle: Final broadcast of the much loved show
description: Final broadcast of the much loved show that was the starting block for so many stars.
post_description: Final broadcast of the much loved show that was the starting block for so many stars.
image: /assets/images/ITV/gettyimages-544761065-612x612.jpg
categories: [Thames, Opportunity-Knocks, Hughie-Green, Les-Dawson, OnThisDay20March]
last_modified_at: 13 January 2024
---

{% assign tb_posts = site.posts
    | where_exp: "post", "post.categories contains 'Opportunity-Knocks'"
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

  {% if next %}
    <a href="{{ next.url }}">Next Episode »</a>
  {% else %}
    <span style="visibility:hidden;">Next Episode »</span>
  {% endif %}

</div>

<h2 id="infobox1"><a href="#infobox1">Cast</a></h2>

<ul>
<li><strong>Host:</strong> Hughie Green</li>
<li><strong>Comedian:</strong> Les Dawson</li>
<li><strong>Singers:</strong> Peters and Lee</li>
<li><strong>Comedian:</strong> Tom O'connor</li>
<li><strong>Singer:</strong> Lena Zavaroni</li>
<li><strong>Comedian:</strong> Frank Carson</li>
<li><strong>Comedy Double Act:</strong> Little and Large (comprising straight man Syd Little and comic Eddie Large)</li>
<li><strong>Folk Singer:</strong> Mary Hopkin</li>
<li><strong>Poetress:</strong> Pam Ayres</li>
<li><strong>Comedian / Samuel Tweet:</strong> Freddie Davies</li>
<li><strong>Singer:</strong> Berni Flint</li>
<li><strong>Singers / Group:</strong> Duane Family</li>
<li><strong>Singer:</strong> Neil Martin</li>
<li><strong>Vocal Duo:</strong> Millican &amp; Nesbitt (comprising Alan Millican and Tom Nesbitt)</li>
<li><strong>Musical Muscle Man:</strong> Tony Holland</li>
</ul>

<h2 id="infobox2"><a href="#infobox2">Crew</a></h2>

<ul>
<li><strong>Music:</strong> Bob Sharples</li>
<li><strong>Sound supervisor:</strong> Arthur Duff</li>
<li><strong>Vision controller:</strong> Alan Fowler</li>
<li><strong>Vision mixer:</strong> Nick Bigsby</li>
<li><strong>Lighting director:</strong> Bill Lee</li>
<li><strong>Graphic designer:</strong> Lester Halhed</li>
<li><strong>Designer:</strong> Michael Minas</li>
<li><strong>Senior cameraman:</strong> Mike Baldock</li>
<li><strong>Floor manager:</strong> John Lynton</li>
<li><strong>Floor manager:</strong> Stuart Orme</li>
<li><strong>Studio supervisor:</strong> John Eveleigh</li>
<li><strong>Director:</strong> Stuart Hall</li>
<li><strong>Production assistant:</strong> Bridget Moore</li>
<li><strong>Programme Associate:</strong> Doris Barry</li>
<li><strong>Programme Associate::</strong> Len Marten</li>
<li><strong>Producer:</strong> Peter Dulay</li>
<li><strong>Production Company:</strong> Thames Television</li>
</ul>
