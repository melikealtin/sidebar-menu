<template>
  <div>
    <aside :class="`${is_expanded && 'is_expanded'}`">
      <div class="logo">
        <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
      </div>
      <div class="menu-toggle-wrap">
        <button class="menu-toggle" @click="ToggleMenu">
          <span class="material-icons material-symbols-outlined">
            keyboard_double_arrow_right
          </span>
        </button>
      </div>
      <h3>Menu</h3>
      <div class="menu">
        <router-link class="button" to="/">
          <span class="material-icons material-symbols-outlined">home</span>
          <span class="text">Home</span>
        </router-link>
        <router-link class="button" to="/about">
          <span class="material-icons material-symbols-outlined"
            >visibility</span
          >
          <span class="text">About</span>
        </router-link>
        <router-link class="button" to="/team">
          <span class="material-icons material-symbols-outlined">group</span>
          <span class="text">Team</span>
        </router-link>
        <router-link class="button" to="/contact">
          <span class="material-icons material-symbols-outlined">email</span>
          <span class="text">Contact</span>
        </router-link>
      </div>
      <div class="flex"></div>
      <div class="menu">
        <router-link class="button" to="/settings">
          <span class="material-icons material-symbols-outlined">settings</span>
          <span class="text">Settings </span>
        </router-link>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref } from "vue";

const is_expanded = ref(false);

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
};
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem;
  background-color: var(--dark);
  color: var(--light);
  transition: 0.2s ease-out;

  .logo {
    margin-bottom: 1rem;
    img {
      width: 2rem;
    }
  }
  .flex {
    flex: 1 1 0;
  }
  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    position: relative;
    top: 0;
    transition: 0.2s ease-out;
    .menu-toggle {
      transition: 0.2s ease-out;
      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }
      &:hover {
        .material-icons {
          color: var(--primary);
          transform: translateX(0.5rem);
        }
      }
    }
  }
  h3,
  .button .text {
    opacity: 0;
    transition: 0.3s ease-out;
  }
  h3 {
    color: var(--grey);
    font-size: 1rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
  .menu {
    margin: 0 -1rem;
    .button {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: 0.5rem 1rem;
      transition: 0.2s ease-out;
      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }
      .text {
        color: var(--light);
        transition: 0.2s ease-out;
      }
      &:hover,
      &.router-link-exact-active {
        background-color: var(--dark-alt);
        .material-icons,
        .text {
          color: var(--primary);
        }
      }
      &.router-link-exact-active {
        border-right: 5px solid var(--primary);
      }
    }
  }

  &.is_expanded {
    width: var(--sidebar-width);
    .menu-toggle-wrap {
      top: -3rem;
      .menu-toggle {
        transform: rotate(-180deg);
      }
    }
    h3,
    .button .text {
      opacity: 1;
    }
    .button {
      .material-icons {
        margin-right: 1rem;
      }
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    z-index: 99;
  }
}
</style>
