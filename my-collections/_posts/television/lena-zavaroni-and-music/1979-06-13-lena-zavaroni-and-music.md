---
layout: post
title: Lena Zavaroni and Music &#124; Episode 4
maintitle: Lena Zavaroni and Music - Episode 4
subtitle: "Guests: Helen Gelzer, Adrian Hedley and Johnny Hutch and The Herculeans"
description: This week's guests are Helen Gelzer, Adrian Hedley and Johnny Hutch and The Herculeans.
post_description: This week's guests are Helen Gelzer, Adrian Hedley and Johnny Hutch and The Herculeans.
image: /assets/images/BBC/lena-zavaroni-image-copyright-bbc.jpg
categories: [BBC One, Lena Zavaroni and Music, Dougie Squires, OnThisDay13June]
last_modified_at: 26 November 2023
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

  <a class="external-link" href="https://genome.ch.bbc.co.uk/schedules/service_bbc_one_london/1979-06-13#at-18.50">BBC Genome: Series 1, Episode 4</a>

  {% if next %}
    <a href="{{ next.url }}">Next Episode »</a>
  {% else %}
    <span style="visibility:hidden;">Next Episode »</span>
  {% endif %}

</div>

<figure class="fig1">
<div class="CardLayout CardLayout-Height1">
<div class="CardItem">
<h2 id="infobox1" class="infobox"><a href="#infobox1">BBC Publicity Photo</a></h2>
<div class="CardItem split">
<img src="/assets/images/BBC/lena-zavaroni-image-copyright-bbc.jpg" class="full-width" />
</div></div></div>
</figure>

<figure class="fig2">
<div class="CardLayout CardLayout-Height1">
<div class="CardItem">
<h2 id="infobox2" class="infobox"><a href="#infobox2">Set List</a></h2>
<div class="CardItem split">
<ul>
<li>Music Was My First Love (Lena, shorter version)</li>
<li>Somebody Should Have Told Me (Lena)</li>
<li>Go to Rio (Lena and the Ace Eight)</li>
<li>Reach Out And Touch Somebody's Hand (Lena with Adrian Hedley)</li>
<li>Everything I've Got (Helen Gelzer)</li>
<li>Music by the New Sensations Steel Band</li>
<li>Razzle Dazzle [part 1] (Lena and the Ace Eight with Adrian Hedley)</li>
<li>Johnny Hutch and the Herculeans (comedy acrobatic troupe)</li>
<li>Razzle Dazzle [part 2] (Lena and the Ace Eight with Adrian Hedley)</li>
<li>The Carnival Is Over/Weekend (Lena)</li>
</ul>
</div></div></div>
</figure>

<figure class="fig1">
<div class="CardLayout CardLayout-Height2">
<div class="CardItem">
<h2 id="infobox3" class="infobox"><a href="#infobox3">Cast</a></h2>
<div class="CardItem split">
<ul>
<li><strong>Hostess and Signer:</strong> Lena Zavaroni</li>
<li><strong>Special Guest:</strong> Helen Gelzer</li>
<li><strong>Special Guest:</strong> Adrian Hedley</li>
<li><strong>Special Guest:</strong> Johnny Hutch and The Herculeans</li>
<li><strong>Dancers</strong> The Ace Eight</li>
</ul>
</div></div></div>
</figure>

<figure class="fig2">
<div class="CardLayout CardLayout-Height2">
<div class="CardItem">
<h2 id="infobox4" class="infobox"><a href="#infobox4">Links</a></h2>
<div class="CardItem split">
<ul>
<li><strong>Category:</strong> <a href="/category/lena-zavaroni-and-music">Lena Zavaroni and Music</a></li>
<li><strong>BBC Genome:</strong> <a href="https://genome.ch.bbc.co.uk/schedules/service_bbc_one_london/1979-06-13#at-18.50">Series 1, Episode 4</a></li>
</ul>
</div></div></div>
</figure>

<style>
.CardLayout-Height1 {height:508px;}
.CardLayout-Height2 {height:289.5px;}
@media screen and (orientation:portrait) {.CardLayout-Height1, .CardLayout-Height2 {height: unset;}}
</style>
