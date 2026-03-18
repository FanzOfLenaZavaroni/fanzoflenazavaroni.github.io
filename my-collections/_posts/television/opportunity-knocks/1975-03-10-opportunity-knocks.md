---
layout: post
title: Opportunity Knocks &#124; 10 March 1975
maintitle: Opportunity Knocks
subtitle: Kies uw ster (Choose Your Star)
description: International edition of the talent show.
post_description: International edition of the talent show featuring performers from Britain, the Netherlands, and Norway competing for a public vote.
categories: [Opportunity-Knocks, OnThisDay10March]
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

<h2 id="infobox1"><a href="#infobox1">Details</a></h2>

<p>In this international edition of Opportunity Knocks, the programme was broadcast under different titles depending on the broadcaster: Opportunity Knocks on Scottish Television (STV) and Thames, and Kies uw ster (Choose Your Star) on Nederland II. Performers from Britain, the Netherlands, and Norway compete for the title of international winner, chosen by the public through a postal vote.</p>

<p>The programme was staged at the Royal Theatre in London and broadcast on the same day by Scottish Television (STV) at 6.45, by Thames at 6.40 under the title Opportunity Knocks, and on Nederland II at 19.25 under the title Kies uw ster (Choose Your Star). It is not known whether these transmissions were live or taken from a pre‑recorded master, and the presentation method used by each broadcaster has not been documented in the sources currently available.</p>

<h2 id="infobox2"><a href="#infobox2">Cast</a></h2>
<p>This cast list is unlikely to be complete, as it only includes performers named in the newspapers. The order used below is alphabetical by performer name, except for the host, who is listed first. The appearance order is unknown.</p>

<ul>
  <li><strong>Hughie Green:</strong> Host</li>
  <li><strong>Carole Hill and Juan Sanchez:</strong> Ballet dancers representing Great Britain</li>
  <li><strong>Clara Evelyn:</strong> 91‑year‑old pianist representing Great Britain</li>
  <li><strong>Dizzy Tunes:</strong> Norwegian musical show group representing Norway</li>
  <li><strong>Grethe Kausland:</strong> Norwegian singer representing Norway</li>
  <li><strong>Lena Zavaroni:</strong> 11‑year‑old Scottish singer representing Great Britain</li>
  <li><strong>Lucifer:</strong> Popgroep (Pop Group) representing The Netherlands</li>
  <li><strong>Ronnie Lutam:</strong> 10‑year‑old singer representing The Netherlands</li>
  <li><strong>Svenn Erik Fjeldberg:</strong> norsk sanger (Norwegian singer) representing Norway</li>
</ul>

<h2 id="infobox3"><a href="#infobox3">Known Results</a></h2>

<ul>
  <li><strong>1st place:</strong> Ronnie Lutam (Netherlands)</li>
  <li><strong>2nd place:</strong> Unknown</li>
  <li><strong>3rd place:</strong> Lena Zavaroni (Great Britain)</li>
</ul>

