<template>
  <div padding>
    <div class="flex flex-center">
      <img
        alt="Quasar logo"
        src="~assets/quasar-logo-full.svg"
      >
    </div>
    <br><br>
    <div class="row justify-center q-pb-sm">
      <q-input
        v-model="user.email"
        label="Email"
        error-message="Invalid email."
        @keyup.enter="submit"
      />
    </div>

    <div class="row justify-center q-pa-sm">
      <q-input
        v-model="user.password"
        label="Password"
        error-message="This field is required."
        :type="isPwd ? 'password' : 'text'"
        @keyup.enter="submit"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
    </div>

    <div class="justify-center q-pa-sm">
      <div class="row justify-center">
        <q-btn style="display: block" color="cyan-7" @click="submit">
          Login
        </q-btn>
      </div>
      <br><br>
      <br><br>
      <p class="l-header-caption">
        {{ appVersionLabel() }}
      </p>
    </div>
  </div>
</template>

<script>
import { LoginViewModel as ViewModel } from './model'

export default { ViewModel }
</script>
