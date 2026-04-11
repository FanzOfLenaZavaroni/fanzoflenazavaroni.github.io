---
layout: post
title: Lena Zavaroni and Music &#124; BBC One Wales
maintitle: Lena Zavaroni and Music - BBC One Wales
subtitle: The Specific Episode Remains Unidentified
description: Regional broadcast where episode details are currently unknown.
post_description: BBC One Wales aired Lena Zavaroni and Music on 23 July 1979 at 19:15. The specific episode remains unidentified due to incomplete archive records from the BBC.
categories: [BBC One, Lena Zavaroni and Music, Dougie Squires, OnThisDay23July]
last_modified_at: 23 July 2025
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

  <span style="visibility:hidden;">Navigation Placeholder — No Link</span>

  {% if next %}
    <a href="{{ next.url }}">Next Episode »</a>
  {% else %}
    <span style="visibility:hidden;">Next Episode »</span>
  {% endif %}

</div>

<figure class="fig3">
<div class="CardLayout">
<div class="CardItem">
<h2 id="infobox1" class="infobox"><a href="#infobox1">Broadcast Details Unknown</a></h2>
<div class="CardItem split">
<p>While we know that <em>Lena Zavaroni and Music</em> aired on <strong>BBC One Wales</strong> on <strong>23 July 1979</strong> at 19:15, the specific episode remains unidentified.</p>
<p>This lack of detail highlights a broader issue: the BBC’s archival records, particularly for regional broadcasts, often omit crucial information such as episode titles or content summaries. This makes it difficult to preserve and celebrate the full history of iconic programmes like Lena’s.</p>
<p>Until more reliable data surfaces, this entry stands as a placeholder—an acknowledgment of the broadcast, and a reminder of the gaps in our television heritage.</p>
<div class="CardItem"><h3 id="infobox2" class="infobox"><a href="#infobox2">Links</a></h3>
<ul>
<li><strong>Category:</strong> <a href="/category/lena-zavaroni-and-music">Lena Zavaroni and Music</a></li>
<li><strong>BBC Genome:</strong> <a href="https://genome.ch.bbc.co.uk/schedules/service_bbc_one_wales/1979-07-23#at-19.15">BBC One Wales (23 July 1979)</a></li>
</ul>
</div></div></div></div>
</figure>

<figure class="fig3">
<div class="CardLayout">
<div class="CardItem">
<h2 id="infobox3" class="infobox"><a href="#infobox3">Loss Enabled by Structural Gaps</a></h2>
<div class="CardItem split">
<p>The missing details for <strong>Lena Zavaroni and Music</strong> broadcast on <strong>BBC One Wales</strong> (23 July 1979) highlight ongoing challenges in preserving UK television history. Based on available public documentation—including the BBC’s Charter, Framework Agreement, and internal Records Management Policy—there is currently <strong>no clear evidence</strong> of a formal requirement for the BBC to archive complete programme records, such as episode-level details or transmission dates.</p>
<p>While some material may be offered to the <strong>British Film Institute (BFI)</strong> for preservation, what qualifies, what is retained, and whether contextual information survives—such as scheduling changes or metadata—is left undefined and largely opaque to the public. The process lacks clarity, consistency, and accountability.</p>
<p>This post exists because there is <strong>no reliable system</strong> in place to document broadcasts like this. It stands as a record of what can be confirmed, and a protest against a framework that enables cultural memory to be lost—not through accident, but through ambiguity and omission.</p>
<div class="CardItem"><h3 id="infobox4" class="infobox"><a href="#infobox4">Note</a></h3>
<p>Based on available public documents—including the BBC Charter, Framework Agreement, and Records Management Policy—there is no explicit reference to a formal obligation for the BBC to archive detailed programme-level data or transmission records. These documents primarily address governance and corporate recordkeeping, not content preservation. No comprehensive public policy currently defines archiving practices for broadcast output.</p>
</div></div></div></div>
</figure>
