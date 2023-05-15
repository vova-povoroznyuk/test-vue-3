<script setup>
import { ref, reactive } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minValue } from "@vuelidate/validators";

const rules = {
  email: {
    required,
    email,
  },
  password: {
    required,
    minLength: minValue(6),
  },
};
const state = reactive({
  email: "",
  password: "",
});
const v$ = useVuelidate(rules, state);
function submit() {
  console.log(v$.email);
}
</script>

<template>
  <div>
    <form action="" @submit.prevent="submit">
      <label
        class="label"
        :class="{
          valid: !v$.email.$invalid && v$.email.$dirty,
          error: v$.$error,
        }"
      >
        <input type="email" v-model="v$.email.$model" />
        <span class="input-error" v-if="v$.email.$errors[0]">{{
          v$.email.$errors[0].$message
        }}</span>
      </label>
      <label
        class="label"
        :class="{
          valid: !v$.password.$invalid && v$.password.$dirty,
          error: v$.password.$error,
        }"
      >
        <input type="password" v-model="v$.password.$model" />
        <span class="input-error" v-if="v$.password.$errors[0]">{{
          v$.password.$errors[0].$message
        }}</span>
      </label>
      <button type="submit" @click="submit">Submit</button>
    </form>
  </div>
</template>

<style scoped>
.label {
  width: 100%;
  padding: 10px 5px 20px;
  display: block;
  position: relative;
}
input {
  font-size: 20px;
}
.input-error {
  color: red;
  position: absolute;
  bottom: 0;
  left: 10px;
  font-size: 10;
}
</style>
