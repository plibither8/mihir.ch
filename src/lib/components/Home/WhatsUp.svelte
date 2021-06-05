<script lang="ts">
  import HorizontalScrollContainer from '../HorizontalScrollContainer.svelte';
  import WhatsUpContainer from './WhatsUp/Container.svelte';
  import HackerNews from './WhatsUp/HackerNews.svelte';
  import Music from './WhatsUp/Music.svelte';
  import Programming from './WhatsUp/Programming.svelte';
  const items = [
    {
      heading: 'Programming',
      description: 'Number of hours I coded this week.',
      component: Programming,
      data: {
        "total": "30 hrs 55 mins",
        "average": "4 hrs 25 mins",
        "languages": [
          {
            "name": "Svelte",
            "percent": 57.21,
            "time": "23 hrs 33 mins",
            "color": "#ff3e00"
          },
          {
            "name": "TypeScript",
            "percent": 11.64,
            "time": "4 hrs 47 mins",
            "color": "#2b7489"
          },
          {
            "name": "JSON",
            "percent": 2.45,
            "time": "1 hr",
            "color": "#f1e05a"
          },
          {
            "name": "JavaScript",
            "percent": 1.17,
            "time": "28 mins",
            "color": "#f1e05a"
          },
          {
            "name": "YAML",
            "percent": 1.06,
            "time": "26 mins",
            "color": "#cb171e"
          }
        ]
      },
    },
    {
      heading: 'Music',
      description: "Top artists I've been listening to this past week",
      component: Music,
      data: {
        totalPlayCount: 130,
        topFive: [
          {
            name: 'The Rolling Stones',
            playcount: '12',
            image:
              'https://i.scdn.co/image/2127bd7c41bfbdb62fe17ebe03a144621545332a',
            url: 'https://www.last.fm/music/The+Rolling+Stones',
          },
          {
            name: 'Kali Uchis',
            playcount: '7',
            image:
              'https://i.scdn.co/image/ab6761610000f1781b0d325e7498fc9a20715158',
            url: 'https://www.last.fm/music/Kali+Uchis',
          },
          {
            name: 'Arijit Singh',
            playcount: '4',
            image:
              'https://i.scdn.co/image/aaf5e02bc54b29d3643be598ff9cd405ef4ca363',
            url: 'https://www.last.fm/music/Arijit+Singh',
          },
          {
            name: 'A.R. Rahman',
            playcount: '3',
            image:
              'https://i.scdn.co/image/2209ba6ca632ce8cdbdbbc2fd0c6a5eac449be28',
            url: 'https://www.last.fm/music/A.R.+Rahman',
          },
          {
            name: 'Green Day',
            playcount: '3',
            image:
              'https://i.scdn.co/image/0b6acd82a794a121838aca87babc88a7b1929903',
            url: 'https://www.last.fm/music/Green+Day',
          },
        ],
      },
    },
    {
      heading: 'Hacker News',
      description:
        'Stories and comments I\'ve favourited over time, listed in reverse chronological order.',
      component: HackerNews,
      data: [
        {
          "id": 27333260,
          "link": "https://old.reddit.com/r/ExperiencedDevs/comments/nmodyl/drunk_post_things_ive_learned_as_a_sr_engineer/",
          "time": 1622382924000,
          "text": null,
          "type": "story",
          "title": "Drunk Post: Things I've Learned as a Sr Engineer"
        },
        {
          "id": 27270928,
          "link": "https://thanaverage.xyz/",
          "time": 1621898943000,
          "text": null,
          "type": "story",
          "title": "Than Average"
        },
        {
          "id": 26769057,
          "link": "https://news.ycombinator.com/item?id=26769057",
          "time": 1618135171000,
          "text": "<p>&gt;The best minds of my generation are thinking about how to make people click ads. That sucks.</p><p>- Jeff Hammerbacher</p>",
          "type": "comment",
          "title": null
        },
        {
          "id": 27144566,
          "link": "https://developers.notion.so",
          "time": 1620925701000,
          "text": null,
          "type": "story",
          "title": "Notion launches its API in public beta"
        },
        {
          "id": 27016630,
          "link": "https://phiresky.github.io/blog/2021/hosting-sqlite-databases-on-github-pages/",
          "time": 1619973795000,
          "text": null,
          "type": "story",
          "title": "Hosting SQLite databases on GitHub Pages or any static file hoster"
        },
        {
          "id": 26859895,
          "link": "https://symphony.iohk.io/en/",
          "time": 1618816599000,
          "text": null,
          "type": "story",
          "title": "Bitcoin Blockchain Visualization"
        },
        {
          "id": 26839692,
          "link": "https://trekhleb.dev/blog/2021/content-aware-image-resizing-in-javascript/",
          "time": 1618611612000,
          "text": null,
          "type": "story",
          "title": "Content-aware image resizing in JavaScript"
        },
        {
          "id": 27016630,
          "link": "https://phiresky.github.io/blog/2021/hosting-sqlite-databases-on-github-pages/",
          "time": 1619973795000,
          "text": null,
          "type": "story",
          "title": "Hosting SQLite databases on GitHub Pages or any static file hoster"
        },
        {
          "id": 26859895,
          "link": "https://symphony.iohk.io/en/",
          "time": 1618816599000,
          "text": null,
          "type": "story",
          "title": "Bitcoin Blockchain Visualization"
        },
      ],
    },
  ];
</script>

<HorizontalScrollContainer>
  <div class="flex space-x-20">
    {#each items as item}
      <WhatsUpContainer {...item} />
    {/each}
  </div>
</HorizontalScrollContainer>
