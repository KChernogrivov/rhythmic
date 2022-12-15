<!-- @format -->

<template>
  <header class="header">
    <div class="header__wrapper">
      <h1 class="header__logo"><a href="" class="header__logo">Rhythmic</a></h1>
      <div class="nav header__nav">
        <ul class="nav__list">
          <li class="nav__element"><a href="#" class="nav__link">ABOUT</a></li>
          <li class="nav__element">
            <a href="#" class="nav__link">CONTACT US</a>
          </li>
        </ul>
      </div>
      <div class="header__search">
        <label for="search">
          <input
            class="header__searchField"
            type="text"
            name="search"
            placeholder="SEARCH..."
          />
        </label>
        <button type="submit" class="form__submit">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.7479 18.5675L14.0096 12.8251C15.1409 11.4684 15.8213 9.73459 15.8213 7.84095C15.8213 3.52083 12.2758 0.00817871 7.91475 0.00817871C3.55364 0.00817871 0 3.52493 0 7.84505C0 12.1652 3.54544 15.6778 7.90655 15.6778C9.7592 15.6778 11.4643 15.0425 12.8169 13.9809L18.5757 19.7397C18.9118 20.0758 19.4118 20.0758 19.7479 19.7397C20.084 19.4036 20.084 18.9036 19.7479 18.5675ZM1.6805 7.84505C1.6805 4.45126 4.47587 1.69278 7.90655 1.69278C11.3372 1.69278 14.1326 4.45126 14.1326 7.84505C14.1326 11.2388 11.3372 13.9973 7.90655 13.9973C4.47587 13.9973 1.6805 11.2347 1.6805 7.84505Z"
              fill="#B3B3B3"
            />
          </svg>
        </button>
      </div>
      <div class="header__account">
        <a href="#">login</a>
      </div>
    </div>
  </header>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Kanit", sans-serif;
  font-weight: 400;
}

.header {
  width: 100%;
}

body {
  background: #1e1e1e;
}

.header__wrapper {
  width: 80%;
  padding: 1rem 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav__list {
  display: flex;
  list-style: none;
  gap: 30px;
}

.nav__link {
  text-decoration: none;
  color: #b3b3b3;
  font-weight: 400;
  font-size: 1rem;
  line-height: 30px;
  color: #b3b3b3;
}

.header__logo {
  font-size: 2rem;
  line-height: 60px;
  color: #1db954;
  text-transform: uppercase;
}

.header__account {
  font-size: 1rem;
  line-height: 30px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #d9d9d9;
  border: 1px solid #b3b3b3;
  border-radius: 10px;
}

.header__account > a {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 2rem;
  text-decoration: none;
  color: #d9d9d9;
  font-size: 1rem;
  line-height: 29.8px;
}

.header__searchField {
  font-size: 1.2rem;
  background-color: inherit;
  color: #b3b3b3;
  border: 0;
  border-bottom: 1px solid #535353;
  outline: 0 !important;
}

.form__submit {
  background-color: inherit;
  outline: 0 !important;
  border: 0;
  cursor: pointer;
}

@media screen and (max-width: 770px) {
  .header__nav,
  .header__search {
    display: none;
  }
}
</style>
