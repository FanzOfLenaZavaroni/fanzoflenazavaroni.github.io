---
layout: post
title: Biography &#124; Des O'Connor
maintitle: Des O'Connor
born: 1932-01-12
died: 2020-11-14
before: "Born On "
after: " - Died On 14 November 2020 (aged 88)"
position: Broadcaster, Musician, Comedian
description: Des O'Connor was an English comedian, actor, writer, and presenter, who is best remembered for his deadpan style.
post_description: He was an English comedian, actor, writer, and presenter, who is best remembered for his deadpan style.
categories: [Biography, Des O'Connor, OnThisDay12January, OnThisDay14November]
last_modified_at: 27 September 2026
---

<h2 id="infobox1"><a href="#infobox1">Details</a></h2>
<ul>
<li><strong>Birth name:</strong> Desmond Bernard O'Connor</li>
<li><strong>Born:</strong> 12 January 1932</li>
<li><strong>Origin:</strong> Stepney, London, England</li>
<li><strong>Died:</strong> 14 November 2020 (aged 88) Slough, Berkshire, England</li>
<li><strong>Occupation:</strong> Broadcaster, Musician, Comedian</li>
<li><strong>Wikipedia:</strong> <a class="external-link" href="https://en.wikipedia.org/wiki/Des_O%27Connor">Des O'Connor</a></li>
</ul>

<h2 id="infobox2"><a href="#infobox2">Appearances with Lena Zavaroni</a></h2>
<ul>
{% for post in site.categories["Des O'Connor"] reversed %}
  {% if post.url and post.url != page.url %}
    <li>
      <a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
    </li>
  {% endif %}
{% endfor %}
</ul>
