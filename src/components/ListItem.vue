<template>
  <v-list-item :key="item.title">
    <template v-slot:default="{  }">
      <v-list-item-content>
        <v-list-item-title>
          <v-checkbox
            @click="updateItem"
            v-model="item.status"
            false-value="needsAction"
            true-value="completed"
            :label="item.title"
          ></v-checkbox>
        </v-list-item-title>
      </v-list-item-content>
    </template>
  </v-list-item>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    item: Object,
  },
  methods: {
    updateItem() {
      var item = {
        id: this.item.id,
        status: this.item.status,
        title: this.item.title
      }
      this.$emit('updateTask', item);
    }
  }
}
</script>