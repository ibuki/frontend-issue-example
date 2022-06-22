<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import UserForm from '../components/UserForm.vue'
import { User, validateUser } from '../models/User'
import { store } from '../store';

const router = useRouter()
const route = useRoute();

const userRef = store.users.find(({id}) => id === +route.params.id) as User
const edittingUser = ref({...userRef});

const saveDisabled = computed(() => !validateUser(edittingUser.value))

function onSaveClicked() {
  Object.assign(userRef, edittingUser.value)
  router.push({ name: 'listUsers' })
}

function onCancelClicked() {
  router.push({ name: 'listUsers' })
}
</script>

<template>
  <div class="container">
    <div class="h1">ユーザー編集</div>
    <UserForm :user="edittingUser" @update="edittingUser = $event" />
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
