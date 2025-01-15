---
title: Blog
layout: base
permalink: 'wineclub/index.html'
---

# Wine Club

Every month a member of our [Discord](/discord.html) picks a wine that members
can buy and enjoy together.

{%- for post in collections.wineClubPosts %}
    {% set postYear = post.data.date.getFullYear() %}

    {% if postYear != currentYear %}
        <h4>{{ postYear }}</h4>
    {% endif %}

    {% set currentYear = postYear %}

    <div>
        <p class="post-title"><a href="{{ post.data.permalink | stripIndex }}">{{ post.data.title }}</a></p>
        {% if post.data.excerpt %}<em class="post-excerpt">{{ post.data.excerpt }}</em><br>{% endif %}
        {% for tag in post.data.tags | sort -%}
            &nbsp;<a href="/blog/tags/{{ tag | slug }}">#{{ tag }}</a>{% if loop.index < post.data.tags.length %}&nbsp;{% endif %}
        {%- endfor -%}
        </p>
    </div>
{% endfor %}
