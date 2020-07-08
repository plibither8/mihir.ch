<script>
  import { setMetaTags } from '../utils'

  import Heading from '../components/index/Heading.svelte'
  import Projects from '../components/index/Projects.svelte'
  import Activity from '../components/index/Activity.svelte'
  import Contact from '../components/index/Contact.svelte'

  setMetaTags()
</script>

<main>
  <Heading />
  <hr>

  <Projects />
  <hr>

  <Activity />
  <hr>

  <Contact />
</main>

<style lang='stylus' global>
  main
    width: 100%
    margin: 0 auto
    padding: 2vh
    overflow-x: hidden
    max-width: 800px

  section
    margin: 7vh auto
    width: 100%

    h2
      color: #333
      font-size: 30px

  hr
    border: none
    width: 100%
    height: 3px
    background: var(--accent-color-1)
    margin: 7vh auto
    max-width: 800px
</style>
