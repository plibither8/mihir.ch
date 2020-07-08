<section id="heading">
  <img src="/assets/img/muh.svg" alt="" draggable="false" />
  <h1>Mihir Chaturvedi</h1>
  <p class="caption">...or perhaps, <em>plibither8</em>...</p>
  <p class="small">
    <button class="expand">Psst! ++</button>
    <span class="more nodisplay">
      <button class="tooltip" aria-label="Satire disclaimer tooltip">/s</button>
    </span>
  </p>
</section>

<style lang='stylus'>
  @import "../../styles/variables"
  @import "../../styles/functions"

  section#heading
    h1
      font-size: 40px
      padding: 10px 0
      color: var(--accent-color-9)

    img
      position: absolute
      width: 40vh
      right: -50px
      top: -50px
      opacity: 0.1

    p.caption
      font-size: 18px
      color: #666
      margin-bottom: 7vh

      em
        font-weight: 500
        font-size: 26px
        color: var(--accent-color-7)
        font-style: normal

    p.small
      margin-top: 10px
      font-size: 12px
      color: var(--accent-color-5)
      padding: 5px 0
      height: 23px

      code
        letter-spacing: 1px

      button
        border: none
        background: none
        color: inherit
        font-size: inherit
        font-family: inherit

        &.expand
          cursor: pointer
          font-weight: 500

        &.tooltip
          margin-left: 10px
          cursor: help
          text-decoration: underline dotted

          &:hover,
          &:focus
            color: var(--accent-color-9)

            &::after
              content: 'Sarcastic and satirical. No harm meant. Maybe.'
              position: absolute
              min-width: 100px
              margin-left: 10px
              padding: 5px 5px 5px 10px
              background: var(--accent-color-0)
              border-left: 3px solid var(--accent-color-1)
              color: var(--accent-color-7)

    p:not(.caption):not(.small)
      max-width: 600px
      font-size: 20px
      line-height: 1.5
      color: #222
      margin: 20px 0

      em
        color: #000
        font-style: normal

      a
        color: var(--accent-color-8)
        anchorLinkBottomBar(35%, alpha($accent-colors[4], 0.15))
</style>
