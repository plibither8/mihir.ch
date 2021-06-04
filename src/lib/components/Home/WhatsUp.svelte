<script>
  import Container from "../Container.svelte";
import HorizontalScrollContainer from "../HorizontalScrollContainer.svelte";
  const musicData = {
    "totalPlayCount": 103,
    "topFive": [
      {
        "name": "The Rolling Stones",
        "playcount": "12",
        "image": "https://i.scdn.co/image/2127bd7c41bfbdb62fe17ebe03a144621545332a",
        "url": "https://www.last.fm/music/The+Rolling+Stones"
      },
      {
        "name": "Kali Uchis",
        "playcount": "7",
        "image": "https://i.scdn.co/image/ab6761610000f1781b0d325e7498fc9a20715158",
        "url": "https://www.last.fm/music/Kali+Uchis"
      },
      {
        "name": "Arijit Singh",
        "playcount": "4",
        "image": "https://i.scdn.co/image/aaf5e02bc54b29d3643be598ff9cd405ef4ca363",
        "url": "https://www.last.fm/music/Arijit+Singh"
      },
      {
        "name": "A.R. Rahman",
        "playcount": "3",
        "image": "https://i.scdn.co/image/2209ba6ca632ce8cdbdbbc2fd0c6a5eac449be28",
        "url": "https://www.last.fm/music/A.R.+Rahman"
      },
      {
        "name": "Green Day",
        "playcount": "3",
        "image": "https://i.scdn.co/image/0b6acd82a794a121838aca87babc88a7b1929903",
        "url": "https://www.last.fm/music/Green+Day"
      }
    ]
  }
</script>

<HorizontalScrollContainer>
  <div class="flex space-x-10">
    <div class="space-y-3 flex flex-col">
      <h3 class="font-medium text-white">Music</h3>
      <p class="text-gray-400 leading-normal flex-grow">Top artists I've been listening to this past week</p>
      <div class="grid grid-rows-8 gap-3" style="grid-template-columns: repeat(9, 1.5rem);">
        <div class="bg-black-500 col-span-5 row-span-5 rounded-md overflow-hidden">
          <img
            class="h-full w-full object-cover hover:saturate-100 hover:contrast-100 transition-all"
            src="https://i.scdn.co/image/2127bd7c41bfbdb62fe17ebe03a144621545332a" alt=""
          />
        </div>
        <div class="bg-black-500 col-span-4 row-span-4 rounded-md overflow-hidden">
          <img
            class="h-full w-full object-cover hover:saturate-100 hover:contrast-100 transition-all"
            src="https://i.scdn.co/image/ab6761610000f1781b0d325e7498fc9a20715158" alt=""
          />
        </div>
        <div class="bg-black-500 col-span-4 row-span-4 rounded-md overflow-hidden">
          <img
            class="h-full w-full object-cover hover:saturate-100 hover:contrast-100 transition-all"
            src="https://i.scdn.co/image/aaf5e02bc54b29d3643be598ff9cd405ef4ca363" alt=""
          />
        </div>
        <div class="bg-black-500 col-span-3 row-span-3 rounded-md overflow-hidden">
          <img
            class="h-full w-full object-cover hover:saturate-100 hover:contrast-100 transition-all"
            src="https://i.scdn.co/image/2209ba6ca632ce8cdbdbbc2fd0c6a5eac449be28" alt=""
          />
        </div>
        <div class="bg-black-500 col-span-2 row-span-3 rounded-md overflow-hidden">
          <img
            class="h-full w-full object-cover hover:saturate-100 hover:contrast-100 transition-all"
            src="https://i.scdn.co/image/0b6acd82a794a121838aca87babc88a7b1929903" alt=""
          />
        </div>
      </div>
    </div>
    <div class="space-y-3 flex flex-col">
      <h3 class="font-medium text-white">Programming</h3>
      <p class="text-gray-400 leading-normal flex-grow">Languages I've coded in this week.</p>
      <div class="grid grid-rows-8 gap-3" style="grid-template-columns: repeat(9, 1.5rem);">
        <div class="bg-black-500 col-span-5 row-span-5 rounded-md overflow-hidden">
          <img
            class="h-full w-full object-cover hover:saturate-100 hover:contrast-100 transition-all"
            src="https://i.scdn.co/image/2127bd7c41bfbdb62fe17ebe03a144621545332a" alt=""
          />
        </div>
        <div class="bg-black-500 col-span-4 row-span-4 rounded-md overflow-hidden">
          <img
            class="h-full w-full object-cover hover:saturate-100 hover:contrast-100 transition-all"
            src="https://i.scdn.co/image/ab6761610000f1781b0d325e7498fc9a20715158" alt=""
          />
        </div>
        <div class="bg-black-500 col-span-4 row-span-4 rounded-md overflow-hidden">
          <img
            class="h-full w-full object-cover hover:saturate-100 hover:contrast-100 transition-all"
            src="https://i.scdn.co/image/aaf5e02bc54b29d3643be598ff9cd405ef4ca363" alt=""
          />
        </div>
        <div class="bg-black-500 col-span-3 row-span-3 rounded-md overflow-hidden">
          <img
            class="h-full w-full object-cover hover:saturate-100 hover:contrast-100 transition-all"
            src="https://i.scdn.co/image/2209ba6ca632ce8cdbdbbc2fd0c6a5eac449be28" alt=""
          />
        </div>
        <div class="bg-black-500 col-span-2 row-span-3 rounded-md overflow-hidden">
          <img
            class="h-full w-full object-cover hover:saturate-100 hover:contrast-100 transition-all"
            src="https://i.scdn.co/image/0b6acd82a794a121838aca87babc88a7b1929903" alt=""
          />
        </div>
      </div>
    </div>
    <div class="space-y-3 flex flex-col">
      <h3 class="font-medium text-white">Programming</h3>
      <p class="text-gray-400 leading-normal flex-grow">Languages I've coded in this week.</p>
      <div class="grid grid-rows-8 gap-3" style="grid-template-columns: repeat(9, 1.5rem);">
        <div class="bg-black-500 col-span-5 row-span-5 rounded-md overflow-hidden">
          <img
            class="h-full w-full object-cover hover:saturate-100 hover:contrast-100 transition-all"
            src="https://i.scdn.co/image/2127bd7c41bfbdb62fe17ebe03a144621545332a" alt=""
          />
        </div>
        <div class="bg-black-500 col-span-4 row-span-4 rounded-md overflow-hidden">
          <img
            class="h-full w-full object-cover hover:saturate-100 hover:contrast-100 transition-all"
            src="https://i.scdn.co/image/ab6761610000f1781b0d325e7498fc9a20715158" alt=""
          />
        </div>
        <div class="bg-black-500 col-span-4 row-span-4 rounded-md overflow-hidden">
          <img
            class="h-full w-full object-cover hover:saturate-100 hover:contrast-100 transition-all"
            src="https://i.scdn.co/image/aaf5e02bc54b29d3643be598ff9cd405ef4ca363" alt=""
          />
        </div>
        <div class="bg-black-500 col-span-3 row-span-3 rounded-md overflow-hidden">
          <img
            class="h-full w-full object-cover hover:saturate-100 hover:contrast-100 transition-all"
            src="https://i.scdn.co/image/2209ba6ca632ce8cdbdbbc2fd0c6a5eac449be28" alt=""
          />
        </div>
        <div class="bg-black-500 col-span-2 row-span-3 rounded-md overflow-hidden">
          <img
            class="h-full w-full object-cover hover:saturate-100 hover:contrast-100 transition-all"
            src="https://i.scdn.co/image/0b6acd82a794a121838aca87babc88a7b1929903" alt=""
          />
        </div>
      </div>
    </div>
  </div>
</HorizontalScrollContainer>