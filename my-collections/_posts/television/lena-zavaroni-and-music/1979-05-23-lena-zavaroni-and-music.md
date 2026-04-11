---
layout: post
title: Lena Zavaroni and Music &#124; Episode 1
maintitle: Lena Zavaroni and Music - Episode 1
subtitle: "Guests: Elaine Stritch, Wayne Sleep and George Chisholm"
description: This week's guests are Elaine Stritch, Wayne Sleep and George Chisholm.
post_description: This week's guests are Elaine Stritch, Wayne Sleep and George Chisholm.
categories: [BBC One, Lena Zavaroni and Music, Dougie Squires, OnThisDay23May]
last_modified_at: 11 April 2026
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

  <a class="external-link" href="https://genome.ch.bbc.co.uk/schedules/service_bbc_one_london/1979-05-23#at-19.00">BBC Genome: Series 1, Episode 1</a>

  {% if next %}
    <a href="{{ next.url }}">Next Episode »</a>
  {% else %}
    <span style="visibility:hidden;">Next Episode »</span>
  {% endif %}

</div>

<h2 id="infobox1" class="infobox"><a href="#infobox1">Set List</a></h2>

<ul>
<li>Music Was My First Love (Lena)</li>
<li>A clog dance to the music of Violinski (Wayne Sleep)</li>
<li>Superstar (Lena)</li>
<li>Anyone Can Whistle (Elaine Stritch)</li>
<li>Back In Time/Jump, Shout, Boogie (Lena)</li>
<li>All That Jazz (The Ace Eight with Lena, Elaine Stritch, Wayne Sleep and George Chisholm.)</li>
<li>Thank You For The Music (Lena)</li>
</ul>

<h2 id="infobox2" class="infobox"><a href="#infobox2">Cast</a></h2>

<ul>
<li><strong>Hostess and Signer:</strong> Lena Zavaroni</li>
<li><strong>Special guest:</strong> Elaine Stritch</li>
<li><strong>Special guest:</strong> Wayne Sleep</li>
<li><strong>Special guest:</strong> George Chisholm</li>
<li><strong>Musicians:</strong> Violinski</li>
<li><strong>Dancers:</strong> The Ace Eight</li>
</ul>

<h2 id="infobox3" class="infobox"><a href="#infobox3">Crew</a></h2>

<ul>
<li><strong>Orchestra:</strong> Alyn Ainsworth and his Orchestra</li>
<li><strong>Musical Director:</strong> Alyn Ainsworth</li>
<li><strong>Vocal Backings:</strong> The Third Kind</li>
<li><strong>Choreography:</strong> <a href="/2023-05-21-dougie-squires">Dougie Squires</a></li>
<li><strong>Sound:</strong> Len Shorey</li>
<li><strong>Lighting:</strong> Eric Wallis</li>
<li><strong>Designer:</strong> John O'Hara</li>
<li><strong>Designer:</strong> Nigel Curzon</li>
<li><strong>Production</strong> David G. Hillier</li>
</ul>

