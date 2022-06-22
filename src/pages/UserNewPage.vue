<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import UserForm from '../components/UserForm.vue'
import { validateUser, generateEmptyUser } from '../models/User'
import { store } from '../store';

const router = useRouter()
const user = ref({ ...generateEmptyUser(), id: Math.max(...store.users.map(({id}) => id)) + 1})

const saveDisabled = computed(() => !validateUser(user.value))

function onSaveClicked() {
  store.users.push(user.value);
  router.push({ name: 'listUsers' })
}

function onCancelClicked() {
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="container">
    <div class="h1">新規ユーザー追加</div>
    <UserForm :user="user" @update="user = $event" />
    <button
      class="btn btn-primary"
      :disabled="saveDisabled"
      @click="onSaveClicked()"
    >
      保存
    </button>
    <button class="btn btn-secondary ms-3" @click="onCancelClicked()">
      キャンセル
    </button>
  </div>
</template>
