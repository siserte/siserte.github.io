---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}

<div class="pub-tabs">
  <div class="pub-tabs__menu">
    <button class="pub-tabs__btn pub-tabs__btn--active" data-tab="journals">Journals <small>({{ site.publications | where: 'type', 'journal' | size }})</small></button>
    <button class="pub-tabs__btn" data-tab="conferences">International Conferences <small>({{ site.publications | where: 'type', 'conference' | size }})</small></button>
    <button class="pub-tabs__btn" data-tab="workshops">International Workshops <small>({{ site.publications | where: 'type', 'workshop' | size }})</small></button>
    <button class="pub-tabs__btn" data-tab="books">Books and Chapters <small>({{ site.publications | where: 'type', 'book' | size }})</small></button>
    <button class="pub-tabs__btn" data-tab="national">National Conferences <small>({{ site.publications | where: 'type', 'national' | size }})</small></button>
    <button class="pub-tabs__btn" data-tab="posters">Posters <small>({{ site.publications | where: 'type', 'poster' | size }})</small></button>
  </div>

  <div class="pub-tabs__content">
    <div id="journals" class="pub-tab-panel pub-tab-panel--active">
      {% assign counter = 1 %}
      {% for post in site.publications reversed %}
        {% if post.type == "journal" %}
          {% include archive-single-pub.html %}
        {% endif %}
      {% endfor %}
      <div class="pub-badges">
        <a href="https://www.scimagojr.com/journalsearch.php?q=12264&amp;tip=sid&amp;exact=no" title="SCImago Journal &amp; Country Rank"><img border="0" src="https://www.scimagojr.com/journal_img.php?id=12264" alt="SCImago Journal &amp; Country Rank"  /></a>
        <a href="https://www.scimagojr.com/journalsearch.php?q=25033&amp;tip=sid&amp;exact=no" title="SCImago Journal &amp; Country Rank"><img border="0" src="https://www.scimagojr.com/journal_img.php?id=25033" alt="SCImago Journal &amp; Country Rank"  /></a>
        <a href="https://www.scimagojr.com/journalsearch.php?q=25621&amp;tip=sid&amp;exact=no" title="SCImago Journal &amp; Country Rank"><img border="0" src="https://www.scimagojr.com/journal_img.php?id=25621" alt="SCImago Journal &amp; Country Rank"  /></a>
        <a href="https://www.scimagojr.com/journalsearch.php?q=19268&amp;tip=sid&amp;exact=no" title="SCImago Journal &amp; Country Rank"><img border="0" src="https://www.scimagojr.com/journal_img.php?id=19268" alt="SCImago Journal &amp; Country Rank"  /></a>
        <a href="https://www.scimagojr.com/journalsearch.php?q=26138&amp;tip=sid&amp;exact=no" title="SCImago Journal &amp; Country Rank"><img border="0" src="https://www.scimagojr.com/journal_img.php?id=26138" alt="SCImago Journal &amp; Country Rank"  /></a>
        <a href="https://www.scimagojr.com/journalsearch.php?q=21100907125&amp;tip=sid&amp;exact=no" title="SCImago Journal &amp; Country Rank"><img border="0" src="https://www.scimagojr.com/journal_img.php?id=21100907125" alt="SCImago Journal &amp; Country Rank"  /></a>
        <a href="https://www.scimagojr.com/journalsearch.php?q=21100255400&amp;tip=sid&amp;exact=no" title="SCImago Journal &amp; Country Rank"><img border="0" src="https://www.scimagojr.com/journal_img.php?id=21100255400" alt="SCImago Journal &amp; Country Rank"  /></a>
        <a href="https://www.scimagojr.com/journalsearch.php?q=19700174607&amp;tip=sid&amp;exact=no" title="SCImago Journal &amp; Country Rank"><img border="0" src="https://www.scimagojr.com/journal_img.php?id=19700174607" alt="SCImago Journal &amp; Country Rank"  /></a>
        <a href="https://www.scimagojr.com/journalsearch.php?q=17344&amp;tip=sid&amp;exact=no" title="SCImago Journal &amp; Country Rank"><img border="0" src="https://www.scimagojr.com/journal_img.php?id=17344" alt="SCImago Journal &amp; Country Rank"  /></a>
        <a href="https://www.scimagojr.com/journalsearch.php?q=21100374601&amp;tip=sid&amp;exact=no" title="SCImago Journal &amp; Country Rank"><img border="0" src="https://www.scimagojr.com/journal_img.php?id=21100374601" alt="SCImago Journal &amp; Country Rank"  /></a>
        <a href="https://www.scimagojr.com/journalsearch.php?q=21100829268&amp;tip=sid&amp;exact=no" title="SCImago Journal &amp; Country Rank"><img border="0" src="https://www.scimagojr.com/journal_img.php?id=21100829268" alt="SCImago Journal &amp; Country Rank"  /></a>
        <a href="https://www.scimagojr.com/journalsearch.php?q=25623&amp;tip=sid&amp;exact=no" title="SCImago Journal &amp; Country Rank"><img border="0" src="https://www.scimagojr.com/journal_img.php?id=25623" alt="SCImago Journal &amp; Country Rank"  /></a>
        <a href="https://www.scimagojr.com/journalsearch.php?q=24563&amp;tip=sid&amp;exact=no" title="SCImago Journal &amp; Country Rank"><img border="0" src="https://www.scimagojr.com/journal_img.php?id=24563" alt="SCImago Journal &amp; Country Rank"  /></a>
        <a href="https://www.scimagojr.com/journalsearch.php?q=27871&amp;tip=sid&amp;exact=no" title="SCImago Journal &amp; Country Rank"><img border="0" src="https://www.scimagojr.com/journal_img.php?id=27871" alt="SCImago Journal &amp; Country Rank"  /></a>
        <a href="https://www.scimagojr.com/journalsearch.php?q=19829&amp;tip=sid&amp;exact=no" title="SCImago Journal &amp; Country Rank"><img border="0" src="https://www.scimagojr.com/journal_img.php?id=19829" alt="SCImago Journal &amp; Country Rank"  /></a>
      </div>
    </div>

    <div id="conferences" class="pub-tab-panel">
      {% assign counter = 1 %}
      {% for post in site.publications reversed %}
        {% if post.type == "conference" %}
          {% include archive-single-pub.html %}
        {% endif %}
      {% endfor %}
    </div>

    <div id="workshops" class="pub-tab-panel">
      {% assign counter = 1 %}
      {% for post in site.publications reversed %}
        {% if post.type == "workshop" %}
          {% include archive-single-pub.html %}
        {% endif %}
      {% endfor %}
    </div>

    <div id="books" class="pub-tab-panel">
      {% assign counter = 1 %}
      {% for post in site.publications reversed %}
        {% if post.type == "book" %}
          {% include archive-single-pub.html %}
        {% endif %}
      {% endfor %}
    </div>

    <div id="national" class="pub-tab-panel">
      {% assign counter = 1 %}
      {% for post in site.publications reversed %}
        {% if post.type == "national" %}
          {% include archive-single-pub.html %}
        {% endif %}
      {% endfor %}
    </div>

    <div id="posters" class="pub-tab-panel">
      {% assign counter = 1 %}
      {% for post in site.publications reversed %}
        {% if post.type == "poster" %}
          {% include archive-single-pub.html %}
        {% endif %}
      {% endfor %}
    </div>
  </div>

  <div class="pub-tabs__mobile-menu">
    <select id="pub-tab-mobile" class="pub-tabs__mobile-select">
      <option value="journals">Journals ({{ site.publications | where: 'type', 'journal' | size }})</option>
      <option value="conferences">International Conferences ({{ site.publications | where: 'type', 'conference' | size }})</option>
      <option value="workshops">International Workshops ({{ site.publications | where: 'type', 'workshop' | size }})</option>
      <option value="books">Books and Chapters ({{ site.publications | where: 'type', 'book' | size }})</option>
      <option value="national">National Conferences ({{ site.publications | where: 'type', 'national' | size }})</option>
      <option value="posters">Posters ({{ site.publications | where: 'type', 'poster' | size }})</option>
    </select>
  </div>
</div>