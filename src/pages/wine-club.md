---
title: Blog
layout: base
permalink: 'wineclub/index.html'
---

# Wine Club

Every month a member of our [Discord](/discord.html) picks a wine that members
can buy and enjoy together.

{%- for post in collections.wineClubPosts %}
    {% set postYear = post.data.wineclub_date.getFullYear() %}

    {% if postYear != currentYear %}
        <h4>{{ postYear }}</h4>
    {% endif %}

    {% set currentYear = postYear %}

    <div>
        <p class="post-title">
            <a href="{{ post.url | stripIndex }}">{{ post.data.title }}</a>
        </p>
    </div>
{% endfor %}
