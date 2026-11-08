---
layout: post
title: Biography &#124; Les Dawson
maintitle: Les Dawson
born: 1934-02-02
died: 1993-06-10
before: "Born On "
after: " - Died On 10 June 1993 (aged 59)"
position: Comedian, Actor, Writer, and Presenter
description: Les Dawson was an English comedian, actor, writer, and presenter, who is best remembered for his deadpan style.
post_description: He was an English comedian, actor, writer, and presenter, who is best remembered for his deadpan style.
categories: [Biography, Les Dawson, OnThisDay2February, OnThisDay10June]
last_modified_at: 1 June 2026
---

<h2 id="infobox1"><a href="#infobox1">Details</a></h2>
<ul>
<li><strong>Birth name:</strong> Leslie Dawson</li>
<li><strong>Born:</strong> 2 February 1934</li>
<li><strong>Origin:</strong> Collyhurst, Manchester, England</li>
<li><strong>Died:</strong> 10 June 1993 (aged 59) Whalley Range, Manchester, England</li>
<li><strong>Genres:</strong> Musical theatre</li>
<li><strong>Occupation:</strong> Comedian, Actor, Writer, and Presenter</li>
<li><strong>Wikipedia:</strong> <a class="external-link" href="https://en.wikipedia.org/wiki/Les_Dawson">Les Dawson</a></li>
</ul>

<h2 id="infobox2"><a href="#infobox2">Like Lena Zavaroni his carrer took off after appearing on Opportunity Knocks (circa 1967)</a></h2>
<ul>
{% for post in site.categories["Les Dawson"] reversed %}
  {% if post.url and post.url != page.url %}
    <li>
      <a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
    </li>
  {% endif %}
{% endfor %}
</ul>
