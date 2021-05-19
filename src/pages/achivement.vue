<template>
<Layout :show-logo="true">
  <h2>論文</h2>
        <div class="post-card content-box" v-for="card in cards" :key="card.title">
          <h3 class="post-card__title"> {{ card.title }}</h3>
          <div class="post-card__description">{{ card.author }}</div>
          <g-link class="post-card__link" :to="card.link">Link</g-link>
        </div>
</Layout>
</template>
<script>

export default {
  data: function () {
    return {
      cards: [
        {
          id: 1,
          title: 'Diffusion reaction behavior in internal tin Nb3Sn wire using Nb/Cu-Ti/Sn-Zn diffusion configuration',
          author: 'Taro Morita, Tsuyoshi Yagai, Nobuya Banno',
          link: 'https://ieeexplore.ieee.org/document/9360513'
        },
        {
          id:2,
          title: 'Microstructural study on Sn-Zn/Cu-Ti diffusion reaction for internal tin Nb3Sn conductor development',
          author: 'Taro Morita, Tsuyoshi Yagai, Nobuya Banno',
          link: 'https://www.sciencedirect.com/science/article/abs/pii/S0925838820318296?via%3Dihub'
        },

        {
          id: 2,
          title: 'Fabrication of New Internal Tin Nb3Sn Wire Using Sn-Zn Alloy as Sn Core',
          author: 'Taro Morita, Tsuyoshi Yagai, Nobuya Banno'

        },
        {
          id:3,
          title: 'Microstructure and superconducting properties of brass matrix internal tin Nb3Sn wire with Ti doping to Nb core',
          author: 'Taro Morita, Nobuya Banno, Tsuyoshi Yagai, Kyoji Tachikawa'
        },
      ]

    }

  }
}
</script>

<style lang="scss">
.post-card {
  margin-bottom: var(--space);
  position: relative;

  &__header {
    margin-left: calc(var(--space) * -1);
    margin-right: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    margin-top: calc(var(--space) * -1);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    &:empty {
      display: none;
    }
  }

  &__image {
    min-width: 100%;
  }

  &__title {
    margin-top: 0;
  }
  
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 1px 10px 30px 0 rgba(0,0,0,.1);
  }

  &__tags {
    z-index: 1;
    position: relative;
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }
}
</style>
