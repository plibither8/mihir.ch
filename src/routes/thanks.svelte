<script lang="ts">
  import Page from '$lib/Page.svelte';
  import Section from '$lib/Section.svelte';
</script>

<Page title="Thanks! ❤️">
  <Section specialWidth>
    <div class="space-y-5">
      <p class="text-base leading-relaxed">
        I am truly grateful to all the people that have supported me and my endeavours in
        development, which enables me to continue building free and open source software.
      </p>
      <p class="text-base leading-relaxed">
        Specifically for this site, you can see my <a
          class="text-indigo-900 underline"
          href="/humans.txt">humans.txt</a
        >.
      </p>
    </div>
  </Section>
  <Section specialWidth title="Sponsors">
    <ul>
      <li class="list-outside list-disc">
        <a class="text-indigo-900 underline" href="https://anandchowdhary.com">Anand Chowdhary</a>
      </li>
    </ul>
  </Section>
  <Section specialWidth title="In the background">
    <ul class="space-y-2">
      <li class="list-outside list-disc">Pranav Bhatnagar</li>
      <li class="list-outside list-disc">
        <a class="text-indigo-900 underline" href="https://mehul.al">Mehul Agarwal</a>
      </li>
      <li class="list-outside list-disc">Ma famille</li>
    </ul>
  </Section>
  <Section />
</Page>
