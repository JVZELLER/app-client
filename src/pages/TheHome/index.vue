<template>
  <div class="q-pa-md">
    <q-parallax>
      <template v-slot:media>
        <img src="https://cdn.quasar.dev/img/parallax2.jpg">
      </template>

      <template v-slot:content="scope">
        <div
          class="absolute column items-center"
          :style="{
            opacity: 0.45 + (1 - scope.percentScrolled) * 0.55,
            top: (scope.percentScrolled * 60) + '%',
            left: 0,
            right: 0
          }"
        >
          <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" style="width: 150px; height: 150px">
          <div class="text-h3 text-white text-center">Quasar Framework</div>
          <div class="text-h6 text-grey-3 text-center">
            v{{ $q.version }}
          </div>
        </div>
      </template>
    </q-parallax>
    <div class="text-center">
      <h3 class="l-page-title">App client</h3>
    </div>
    <div class="q-pa-md">
      <q-stepper
        v-model="step"
        vertical
        color="primary"
        animated
      >
        <q-step
          :name="1"
          title="Introduction"
          icon="settings"
          :done="step > 1"
        >
          This is a quick-start template for Vue.js + Quasar Frameworl.
          We'are using @Lunkani/view-model API to structure kind a MVVM architecture.
          <br>
          You should look at Lumkani's work by clicking
            <a href="https://github.com/Lumkani/vue-view-model-api">here</a>
          .
          <q-stepper-navigation>
            <q-btn @click="step = 2" color="primary" label="Continue" />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="2"
          title="Services"
          caption="Optional"
          icon="create_new_folder"
          :done="step > 2"
        >
          To separate concers we decide to add the Services layer in our structure.
          <br>
          The services are the boundaries between this client app and third part APIs.
          <q-stepper-navigation>
            <q-btn @click="step = 3" color="primary" label="Continue" />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="3"
          title="Access Control"
          icon="assignment"
        >
          There are two mocked users in this application to show the access control and help you understand
          how the vue components, models and services work together.
          <br>
          Go ahead and explore the Login workflow.
          <br>
          Tip:
          <br>
          You should start by looking at TheLogin page and AuthService.
          <br>
          Don't forget to explore the Login interceptor on router file ;)
          <q-stepper-navigation>
            <q-btn @click="step = 4" color="primary" label="Continue" />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="4"
          title="Suggestions"
          icon="chat"
        >
          Try out different layouts, architectures and if you have new ideas, just let us know !!!
          <q-stepper-navigation>
            <q-btn color="primary" label="Finish" />
            <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
    </div>
  </div>
</template>

<script>
import { HomeViewModel as ViewModel } from './model'

export default { ViewModel }
</script>
