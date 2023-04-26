---
layout: discography
title: Podcasts
maintitle: Podcasts
subtitle: Referencing Lena Zavaroni
description: Referencing Lena Zavaroni
categories: [Discography]
---

<a class="external link" href="https://www.listennotes.com/playlists/fanzoflenazavaronis-podcast-playlist-PurfeKTGNZW/episodes/?sort_type=oldest_published_first">On "Listen Notes" A Curated Podcast Playlist By @FanzOfLenaZavaroni.</a>
<p><strong>Note:</strong> Not all of the podcasts listed here are available via Listen Notes so check the links below as well as the above link.</p>

<ul>
  {% for post in site.categories.Podcasts reversed %}
    {% if post.url %}
        <li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
