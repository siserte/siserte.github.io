---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}

<h2> Journals </h2>
{% for post in site.publications reversed %}
  {% if post.type == "journal" %}
    {% include archive-single-pub.html index=forloop.index %}
  {% endif %}
{% endfor %}

<p>
<a href="https://www.scimagojr.com/journalsearch.php?q=21100907125&amp;tip=sid&amp;exact=no" title="SCImago Journal &amp; Country Rank"><img border="0" src="https://www.scimagojr.com/journal_img.php?id=21100907125" alt="SCImago Journal &amp; Country Rank"  /></a>
<a href="https://www.scimagojr.com/journalsearch.php?q=12264&amp;tip=sid&amp;exact=no" title="SCImago Journal &amp; Country Rank"><img border="0" src="https://www.scimagojr.com/journal_img.php?id=12264" alt="SCImago Journal &amp; Country Rank"  /></a>
<a href="https://www.scimagojr.com/journalsearch.php?q=19700174607&amp;tip=sid&amp;exact=no" title="SCImago Journal &amp; Country Rank"><img border="0" src="https://www.scimagojr.com/journal_img.php?id=19700174607" alt="SCImago Journal &amp; Country Rank"  /></a>
<a href="https://www.scimagojr.com/journalsearch.php?q=25033&amp;tip=sid&amp;exact=no" title="SCImago Journal &amp; Country Rank"><img border="0" src="https://www.scimagojr.com/journal_img.php?id=25033" alt="SCImago Journal &amp; Country Rank"  /></a>
<a href="https://www.scimagojr.com/journalsearch.php?q=25621&amp;tip=sid&amp;exact=no" title="SCImago Journal &amp; Country Rank"><img border="0" src="https://www.scimagojr.com/journal_img.php?id=25621" alt="SCImago Journal &amp; Country Rank"  /></a>
<a href="https://www.scimagojr.com/journalsearch.php?q=17344&amp;tip=sid&amp;exact=no" title="SCImago Journal &amp; Country Rank"><img border="0" src="https://www.scimagojr.com/journal_img.php?id=17344" alt="SCImago Journal &amp; Country Rank"  /></a>
<a href="https://www.scimagojr.com/journalsearch.php?q=21100374601&amp;tip=sid&amp;exact=no" title="SCImago Journal &amp; Country Rank"><img border="0" src="https://www.scimagojr.com/journal_img.php?id=21100374601" alt="SCImago Journal &amp; Country Rank"  /></a>
<a href="https://www.scimagojr.com/journalsearch.php?q=21100829268&amp;tip=sid&amp;exact=no" title="SCImago Journal &amp; Country Rank"><img border="0" src="https://www.scimagojr.com/journal_img.php?id=21100829268" alt="SCImago Journal &amp; Country Rank"  /></a>
<a href="https://www.scimagojr.com/journalsearch.php?q=25623&amp;tip=sid&amp;exact=no" title="SCImago Journal &amp; Country Rank"><img border="0" src="https://www.scimagojr.com/journal_img.php?id=25623" alt="SCImago Journal &amp; Country Rank"  /></a>
<a href="https://www.scimagojr.com/journalsearch.php?q=19268&amp;tip=sid&amp;exact=no" title="SCImago Journal &amp; Country Rank"><img border="0" src="https://www.scimagojr.com/journal_img.php?id=19268" alt="SCImago Journal &amp; Country Rank"  /></a>
<a href="https://www.scimagojr.com/journalsearch.php?q=26138&amp;tip=sid&amp;exact=no" title="SCImago Journal &amp; Country Rank"><img border="0" src="https://www.scimagojr.com/journal_img.php?id=26138" alt="SCImago Journal &amp; Country Rank"  /></a>
<a href="https://www.scimagojr.com/journalsearch.php?q=24563&amp;tip=sid&amp;exact=no" title="SCImago Journal &amp; Country Rank"><img border="0" src="https://www.scimagojr.com/journal_img.php?id=24563" alt="SCImago Journal &amp; Country Rank"  /></a>
<a href="https://www.scimagojr.com/journalsearch.php?q=27871&amp;tip=sid&amp;exact=no" title="SCImago Journal &amp; Country Rank"><img border="0" src="https://www.scimagojr.com/journal_img.php?id=27871" alt="SCImago Journal &amp; Country Rank"  /></a>
<a href="https://www.scimagojr.com/journalsearch.php?q=19829&amp;tip=sid&amp;exact=no" title="SCImago Journal &amp; Country Rank"><img border="0" src="https://www.scimagojr.com/journal_img.php?id=19829" alt="SCImago Journal &amp; Country Rank"  /></a>
</p>

<h2> International Conferences </h2>
{% for post in site.publications reversed %}
  {% if post.type == "conference" %}
    {% include archive-single-pub.html %}
  {% endif %}
{% endfor %}

<h2> International Workshops </h2>
{% for post in site.publications reversed %}
  {% if post.type == "workshop" %}
    {% include archive-single-pub.html %}
  {% endif %}
{% endfor %}

<h2> Books and Chapters </h2>
{% for post in site.publications reversed %}
  {% if post.type == "book" %}
    {% include archive-single-pub.html %}
  {% endif %}
{% endfor %}

<h2> National Conferences </h2>
{% for post in site.publications reversed %}
  {% if post.type == "national" %}
    {% include archive-single-pub.html %}
  {% endif %}
{% endfor %}

<h2> Posters </h2>
{% for post in site.publications reversed %}
  {% if post.type == "poster" %}
    {% include archive-single-pub.html %}
  {% endif %}
{% endfor %}

