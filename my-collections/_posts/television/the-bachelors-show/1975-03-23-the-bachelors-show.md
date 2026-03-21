---
layout: post
title: The Bachelors Show  &#124; Epiosde 6
maintitle: The Bachelors Show
subtitle: Epiosde 6
description:  16 March 1975 - with The Bachelors, The Vernons and Lena Zavaroni.
post_description: with The Bachelors, The Vernons and Lena Zavaroni.
categories: [BBC Two, The Bachelors Show, OnThisDay23March]
---

{% assign eps = site.posts
    | where_exp: "post", "post.categories contains 'Television-The-Bachelors-Show'"
    | sort: "date" %}

{% assign index = nil %}

{% for p in eps %}
  {% if p.url == page.url %}
    {% assign index = forloop.index0 %}
  {% endif %}
{% endfor %}

{% assign prev_index = index | minus: 1 %}
{% assign next_index = index | plus: 1 %}

{% assign prev = nil %}
{% assign next = nil %}

{% if prev_index >= 0 %}
  {% assign prev = eps[prev_index] %}
{% endif %}

{% if next_index < eps.size %}
  {% assign next = eps[next_index] %}
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

<h2 id="infobox1"><a href="#infobox1">Summary</a></h2>

<p>Lena sits on the stage and sings "Oh My Papa".</p>
<p>Lena performs the "Tennessee Wig Walk" as the rest of the cast look on.</p>
<p>Lena, the Bachelors and the Vernons then perform a song and dance version of "Skip To My Lou" together.</p>
<p>Finally Lena joins the Bachelors and the Vernons at the end of the show to say goodbye, it being the end of the series.</p>
<p><strong>External Website:</strong> <a class="external-link" href="https://genome.ch.bbc.co.uk/schedules/bbctwo/england/1975-03-23#at-20.15">BBC Genome</a></p>

<h2 id="infobox2"><a href="#infobox2">Cast</a></h2>
<ul class="columns2">
<li><strong>Hosts</strong> The Bachelors</li>
<li><strong>Singer</strong> Lena Zavaroni</li>
<li><strong>Singers</strong> The Vernons</li>
<li><strong>English football professional</strong> <strong>*</strong> Jimmy Hill</li>
<li><strong>British Racing Driver</strong> <strong>*</strong> Graham Hill</li>
</ul>

<p><strong>* Note:</strong> For their performance on the show they were introduced as <strong>The Hills Brothers</strong>, but are not brothers.</p>

<h2 id="infobox3"><a href="#infobox3">Cast</a></h2>
<ul class="columns2">
<li><strong>Orchestra conductor</strong> Norman Percival</li>
<li><strong>Choreography</strong> Lesley Brooks</li>
<li><strong>Production team</strong> Ann R Mann</li>
<li><strong>Production team</strong> Maurice Gallacher</li>
<li><strong>Lighting</strong> Ken McGregor</li>
<li><strong>Sound</strong> Hugh Barker</li>
<li><strong>Sound</strong> Peter Rose</li>
<li><strong>Design</strong> Lesley Bremness</li>
<li><strong>Producer</strong> Ernst Maxin</li>
<li><strong>Production company</strong> BBC Television</li>
</ul>
