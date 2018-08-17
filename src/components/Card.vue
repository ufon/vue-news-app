<template>
    <div class="styles.card">
        <div class="styles.card__image">
            <!-- <LazyImage srcLoaded={article.urlToImage ? article.urlToImage : ''} /> -->
        </div>
        <div class="card__content">
            <!-- <LikeButton likeEvent={()=> likeEvent(likeCount)} dislikeEvent={() => dislikeEvent(likeCount)} likeCount={likeCount || 0} liked={localStorage.getItem(uuid) || false} /> -->
            <h1 class="card__title">
                <a target="_blank" href={article.url}> {article.title} </a>
            </h1>
            <p class="card__description">{article.description}</p>
        </div>
        <div class="card__footer">
            <span class="card__time">{momentFormat(article.publishedAt)}</span>
            <span class="card__count">{viewCount || 0} просмотров</span>
        </div>
    </div>
</template>

<script>
export default {
  name: "Card"
};
</script>

<style scoped lang="scss">
.card {
  width: 425px;
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  margin: 2em 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__content {
    position: relative;
    padding: 5%;
    padding-top: 15%;
    margin-top: -10%;
    padding-bottom: 8%;
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
  }

  &__title {
    a {
      font-size: 0.8em;
      color: rgb(26, 26, 26);
      border-bottom: 0;
      transition: color 300ms ease-in-out;
      &:hover {
        border-bottom: 0;
        color: #8b4ba8;
      }
    }
  }

  &__description {
    color: #000000;
    font-size: 12pt;
  }

  &__image {
    width: 100%;
    position: relative;
    margin-bottom: -1%;
    z-index: 2;
    transition: z-index 0s 0.2s;

    img {
      width: 100%;
    }
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5%;
  }
}
</style>