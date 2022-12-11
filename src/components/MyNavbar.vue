<template>
    <header :class="{ 'scrolled-nav': scrollPosition }">
      <nav>
        <div class="branding">
          <img
            src="@/assets/navbar/navlogo.png"
            alt=""
            @click="this.returnId(navitems[0].refname)"
          />
        </div>
        <ul v-show="!mobile" class="navigation">
          <li
            class="link"
            v-for="item in navitems"
            :key="item"
            @click="this.returnId(item.refname)"
          >
            {{ item.linkname }}
          </li>
        </ul>
        <div class="navicon">
          <Icon
            icon="fontisto:nav-icon-a"
            @click="toggleMobileNav"
            v-show="mobile"
            class="iconimg"
            :class="{ 'icon-active': mobileNav }"
          />
        </div>
        <transition name="mobile-nav">
          <ul v-show="mobileNav" class="dropdown-nav">
            <li
              class="link"
              v-for="item in navitems"
              :key="item"
              @click="this.returnId(item.refname)"
            >
              {{ item.linkname }}
            </li>
          </ul>
        </transition>
      </nav>
    </header>
  </template>
  
  <script>
  import { Icon } from "@iconify/vue";
  export default {
    name: "MyNavbar",
    props: [
      "mobileLimit",
      "navitems",
      "navLargeColor",
      "navMobileColor",
      "navLargeTextColor",
      "navMobileTextColor",
    ],
    components: {
      Icon,
    },
    emits: ["clickedEl"],
    created() {
      if (window.innerWidth <= this.mobilelimit) {
        this.checkScreen();
      }
      window.addEventListener("resize", this.checkScreen);
    },
    data() {
      return {
        scrollPosition: null,
        mobile: null,
        mobileNav: null,
        windowWidth: null,
        mobilelimit: this.mobileLimit,
        largecolor: this.navLargeColor,
        largetextcolor: this.navLargeTextColor,
        mobilecolor: this.navMobileColor,
        mobiletextcolor: this.navMobileTextColor,
      };
    },
    methods: {
      toggleMobileNav() {
        this.mobileNav = !this.mobileNav;
      },
      checkScreen() {
        this.windowWidth = window.innerWidth;
        if (this.windowWidth <= this.mobilelimit) {
          this.mobile = true;
          return;
        }
        this.mobile = false;
        this.mobileNav = false;
      },
      returnId(name) {
        this.$emit("clickedEl", name);
      },
    },
  };
  </script>
  
  <style lang="scss">
  header {
    font-family: sans-serif;
    background-color: v-bind(largecolor);
    position: inherit;
    width: 100%;
    transition: 0.5s ease all;
    color: black;
    height: 122px;
  
    nav {
      display: flex;
      flex-direction: row;
      position: relative;
      padding: 20px 0;
      transition: 0.5 ease all;
      width: 98%;
      margin: 0 auto;
      @media (min-width: 1140px) {
        max-width: 1140px;
      }
      ul,
      .link {
        font-weight: 500;
        color: v-bind(largetextcolor);
        list-style: none;
        text-decoration: none;
      }
  
      li {
        text-transform: uppercase;
        padding: 12px;
        margin-left: 16px;
      }
  
      .link {
        font-size: 14px;
        transition: 0.5 ease all;
        padding-bottom: 4px;
        border-bottom: 1px solid transparent;
        &:hover {
          color: aqua;
          border-color: aqua;
        }
      }
  
      .branding {
        display: flex;
        align-items: center;
  
        img {
          height: 65px;
          max-width: 259px;
          transition: 0.5s ease all;
        }
      }
  
      .navigation {
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: flex-end;
      }
  
      .navicon {
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        right: 24px;
        height: 100%;
  
        .iconimg {
          cursor: pointer;
          font-size: 24px;
          transition: 0.5s ease all;
        }
      }
  
      .icon-active {
        transform: rotate(180deg);
      }
  
      .dropdown-nav {
        display: flex;
        flex-direction: column;
        position: fixed;
        width: 100%;
        max-width: 250px;
        height: 100%;
        background-color: v-bind(mobilecolor);
        top: 122px;
        left: 0;
        opacity: 0.9;
  
        li {
          margin-left: 0;
          .link {
            color: v-bind(mobiletextcolor);
          }
        }
      }
  
      .mobile-nav-enter-active {
        transition: 2s ease all;
      }
      .mobile-nav-leave-active {
        transition: 1s ease all;
      }
  
      .mobile-nav-leave-to {
        transform: translateX(-250px);
      }
  
      .mobile-nav-enter-from {
        transform: translateX(-250px);
      }
      .mobile-nav-enter-to {
        transform: translateX(0);
      }
    }
  }
  </style>
  