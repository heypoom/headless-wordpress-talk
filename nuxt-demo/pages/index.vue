<script setup lang="ts">
import PostListItem from '../components/PostListItem.vue'
import { PostsDocument } from '~/gql/graphql'

import {urql} from '../utils/urql'

const query = await urql.query(PostsDocument, {}).toPromise()
const posts = query.data?.posts?.nodes
</script>

<template>
  <main class="bg-slate-950 min-h-screen">
    <div class="max-w-3xl mx-auto w-full px-10 py-7">
      <h1 class="text-white text-3xl font-mono mb-6 text-center">
        Plushies' Garden
      </h1>

      <div class="text-white flex flex-col gap-y-4 font-mono text-base">
        <PostListItem v-for="post of posts" :post="post" />
      </div>
    </div>
  </main>
</template>
