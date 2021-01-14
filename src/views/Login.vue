<template>
  <v-card width="400px" class="mt-15 mx-auto">
    <v-card-title class="mt-8">
      <h1>Login</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          placeholder="รหัสผู้ใช้งาน"
          prepend-icon="mdi-account-circle"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          :rules="passwordRules"
          label="Password"
          placeholder="รหัสผ่าน"
          required
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        ></v-text-field>
      </v-form>
    </v-card-text>

    <v-card-actions class="mb-2">
      <v-btn block color="info">Login</v-btn>
      <!-- <v-spacer></v-spacer>
      <v-btn color="success">Register</v-btn> -->
    </v-card-actions>
    <v-divider></v-divider>
    <p class="text-center mt-3">
      คุณยังไม่มีบัญชีผู้ใช้งาน ?
      <a href="/register" class="text-blue-500 no-underline hover:underline"
        >สมัครใหม่</a
      >
    </p>
  </v-card>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      showPassword: false,
      valid: true,
      password: "",
      passwordRules: [(v) => !!v || "Password is required"],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style></style>
