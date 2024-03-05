<script lang="ts" setup>
import '~/styles/post.css'

import {urql} from '../../utils/urql'
import {PostBySlugDocument} from '../../gql/graphql'

const route = useRoute()
const slug = route.params.slug as string

const query = await urql.query(PostBySlugDocument, {slug}).toPromise()
const post = query.data?.post
</script>

<template>
  <main class="min-h-screen bg-slate-950">
    <div class="py-5 bg-teal-300 font-mono font-bold text-teal-800 text-center text-4xl" v-if="post">
      <h1>~~ {{ post.title }} ~~</h1>
    </div>

    <div class="max-w-3xl mx-auto w-full px-10 pt-10 pb-16 font-mono">
      <div class="text-white flex flex-col gap-y-4">
        <div class="article-content" v-if="post" v-html="post.content" />

        <div class="text-white" v-if="!post">Post not found...</div>
      </div>
    </div>
  </main>
</template>