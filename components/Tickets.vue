<template>
  <div class="ticket">
    <div class="ticket__content">
      <a href="http://raisa2020.id/">
        <img
          src="https://dionizer.s3-ap-southeast-1.amazonaws.com/raisha-concert.jpg"
          alt="raisha concert"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.ticket {
  position: relative;
  width: 200px;
  height: 250px;
  padding: 0px;
  border-radius: 10px;
  background: #d8d8d8;
  box-shadow: 8px 8px 19px 0px rgba(0, 0, 0, 0.4);

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 5px;
    height: 6px;
    width: 185px;
  }

  &:before {
    top: -5px;
    background: radial-gradient(
        circle,
        transparent,
        transparent 50%,
        #300411 50%,
        #300411 100%
      ) -7px -8px / 20px 14px repeat-x;
  }

  &:after {
    bottom: -5px;
    background: radial-gradient(
        circle,
        transparent,
        transparent 50%,
        #300411 50%,
        #300411 100%
      ) -7px -2px / 20px 14px repeat-x;
  }
}

.ticket__content {
  box-sizing: border-box;
  height: 250px;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.ticket__text {
  width: 400px;
  font-family: "Helvetica", "Arial", sans-serif;
  font-size: 3rem;
  font-weight: 900;
  text-transform: uppercase;
  color: #c6dede;
  transform: translate(-25px, 25px) rotate(-55deg);
}
</style>
