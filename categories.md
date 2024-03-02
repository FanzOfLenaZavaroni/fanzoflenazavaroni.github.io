---
layout: post-no-comments
permalink: /categories/
title: Categories
maintitle: Categories
subtitle: "Note: Currently only content with a full date is listed in this section."
---

<div id="archives">
{% comment %}
#
#  Change date order by adding '| reversed'
#  To sort by title or other variables use {% assign sorted_posts = category[1] | sort: 'title' %}
#
{% endcomment %}

{% assign sorted_cats = site.categories | sort %}
{% for category in sorted_cats %}
{% assign sorted_posts = category[1] | reversed %}
<h3 id="{{category[0] | uri_escape}}">{{category[0]  | replace: "-", " "}}</h3>
<ul>
{% for post in sorted_posts %}
<li><a href="{{ site.url }}{{ site.baseurl }}{{  post.url }}">{{post.date | date: "%Y-%m-%d "}} - {{post.maintitle}}</a></li>
{% endfor %}
</ul>
{% endfor %}
</div>

