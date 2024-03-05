<script lang="ts" setup>
import {type PostsQuery} from '../gql/graphql'

type Post = NonNullable<PostsQuery['posts']>['nodes'][0]

const {post} = defineProps<{
  post: Post
}>()

const categories = post.categories?.nodes.map((category) => category.name) ?? []

const isDeveloper = categories.includes('Developer')
const isPlushie = categories.includes('Plushie')
</script>

<template>
  <div>
    <a :href="`/post/${post.slug}`">
      <div
        class="px-5 py-4 space-y-2 rounded-sm"
        :class="{
          'bg-green-400 text-gray-900 hover:bg-green-300': isDeveloper,
          'bg-rose-400 text-gray-900 hover:bg-rose-300': isPlushie
        }"
      >
        <h1 class="text-xl">{{ post.title }}</h1>
        <div v-html="post.excerpt" />

        <div>
          <div class="inline-flex pr-2 rounded-md text-sm lowercase" v-for="category in categories">
            #{{ category }}
          </div>
        </div>
      </div>
    </a>
  </div>
</template>