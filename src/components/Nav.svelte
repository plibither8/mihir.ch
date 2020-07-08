<script>
  import { isActive, url } from '@sveltech/routify'
  import navigation from '../../data/navigation.yml'
</script>

<nav>
  <a href="/" class="nav__name">
    <img src="/assets/img/muh.svg" alt="Mihir's logo">
    Mihir Chaturvedi <span>&middot;</span> plibither8
  </a>

  <ul>
    {#each navigation as { path, name, external }}
      <li>
        <a
          href={$url(path)}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener' : undefined}
          class:active={$isActive(path)}
        >{name}</a>
      </li>
    {/each}
  </ul>
</nav>

<style lang='stylus'>
  @import "../styles/nav"
</style>
