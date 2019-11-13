<template>
  <section class="flex justify-center items-center h-screen">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <form class="mb-4">
        <div v-if="authenticatedUser">
          <p>You are logged in as {{ authenticatedUser.email }}.</p>
          <p>Logout?</p>
          <button class="bg-blue-500 w-full mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click.prevent="logout">
            Logout
          </button>
        </div>
        <div v-else>
          <input id="hasAccount" v-model="needsAccount" type="radio" :value="false">
          <label for="hasAccount">I have an account</label>
          <br>
          <input id="needsAcctouns" v-model="needsAccount" type="radio" :value="true">
          <label for="needsAcctouns">I need an account</label>
          <form class="py-3" @submit.prevent="loginOrRegister">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Email
            </label>
            <input
              v-model="email"
              type="email"
              placeholder="Your email address"
              class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            >
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input
              v-model="password"
              type="password"
              placeholder="Your password"
              class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            >
            <label v-if="needsAccount" class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Confirm Password
            </label>
            <input
              v-if="needsAccount"
              v-model="registrationPassword"
              type="password"
              placeholder="Re-enter Password"
              class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            >

            <button class="bg-blue-500 w-full mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              {{ needsAccount? 'Register' : 'Login' }}
            </button>
          </form>
        </div>
      </form>
    </form>
  </section>
</template>

<script>
import firebase from 'firebase'

export default {
  asyncData: () => (
    { authenticatedUser: null,
      email: '',
      password: '',
      registrationPassword: '',
      needsAccount: true }
  ),
  created () {
    firebase.auth().onAuthStateChanged(user => (this.authenticatedUser = user))
  },
  methods: {
    register () {
      if (this.password === this.registrationPassword) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
      } else {
        // display error message
      }
    },
    login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
    },
    loginOrRegister () {
      if (this.needsAccount) {
        this.register()
      } else {
        this.login()
      }
    },
    logout () {
      firebase.auth().signOut()
    }
  }
}
</script>
