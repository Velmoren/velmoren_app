<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand to="/">
      <img src="@/assets/images/Logo.png" alt="Logo">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto align-items-center">

<!--        <b-nav-item>-->
<!--          <b-button size="sm" to="/" variant="primary">Каталог курсов</b-button>-->
<!--        </b-nav-item>-->
        <b-nav-item
          to="/catalog"
        >
          Каталог курсов
        </b-nav-item>

        <b-nav-item-dropdown
          v-if="user.name"
          :text="user.name"
          right
        >
          <b-dropdown-item class="text-center" to="/profile">Открыть профайл</b-dropdown-item>
          <b-dropdown-item class="text-center" to="/support">Поддержка слушателей</b-dropdown-item>
          <b-dropdown-item class="text-center" @click="logout">Выход</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item>
          <div class="navbar-bell">
            <b-icon icon="bell-fill" variant="light"></b-icon>
          </div>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters['auth/getAuthUser']
    }
  },
  methods: {
    logout() {
      this.$bvModal.msgBoxConfirm('Желаете выйти?', {
        title: 'Выход',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'primary',
        okTitle: 'Да',
        cancelTitle: 'Нет',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      })
        .then(value => {
          this.$cookiz.remove('auth')
          this.$store.dispatch('auth/setResetUser')
          this.$router.push('/login')
        })
        .catch(err => {
          // An error occurred
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-brand {
  width: 200px;

  img {
    max-width: 100%;
  }
}

.navbar-bell {
  width: 20px;
  height: 20px;
}
</style>
