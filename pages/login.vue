<template>
  <b-container>
    <b-row class="d-flex justify-content-center pt-5">
      <b-col cols="12" sm="8" md="6" lg="5" align-self="center">
        <b-form @submit.prevent="onSubmit" @reset="onReset">
          <b-form-group
            id="input-group-1"
            label="Введите Email"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Введите Пароль" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.password"
              placeholder="Пароль"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              v-model="form.saved"
              id="checkboxes-4"
              :aria-describedby="ariaDescribedby"
            >
              <b-form-checkbox value="saved">Запомнить меня</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>

          <b-button block type="submit" variant="primary">Войти</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  middleware: ['notAuth'],
  data() {
    return {
      form: {
        email: '',
        password: '',
        saved: []
      },
    }
  },
  methods: {
   async onSubmit(event) {
        await this.$axios.$get(`/api/auth?email=${this.form.email}&password=${this.form.password}`).then(res => {
          this.$cookiz.set('auth', res)
          this.$store.dispatch('auth/setAuthUser', {user: res, isAuth: true})
          this.$router.push('/')
        }).catch(e => {
          alert(e.response.data.message)
        })
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style scoped>

</style>
