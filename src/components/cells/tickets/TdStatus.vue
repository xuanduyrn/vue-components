<template>
  <td>
    <v-chip
      small
      :color="itemStatus.find(x => x.id === dataRow.status).color"
      text-color="white"
    >
      <v-menu
        v-model="menu"
        transition="scale-transition"
        offset-y
        :close-on-content-click="false"
      >
        <template v-slot:activator="{ on }">
          <span class="white--text name" v-on="on">{{ nameCustom.name }}</span>
        </template>
        <v-list>
          <v-row
            v-for="(item, index) in itemStatus"
            :key="index"
            no-gutters
            class="pa-1"
          >
            <v-btn
              class="white--text text-capitalize"
              :color="item.color"
              small
              rounded
              @click="
                $emit('update', item.id);
                menu = false;
              "
            >
              {{ item.id }}: {{ item.name }}
              <v-icon class="ml-1" small>{{ item.icon }}</v-icon>
            </v-btn>
          </v-row>
        </v-list>
      </v-menu>
      <v-icon class="ml-1" small>{{
        itemStatus.find(x => x.id === dataRow.status).icon
      }}</v-icon>
    </v-chip>
  </td>
</template>
<script>
import { itemStatus } from "../../../config";

export default {
  props: {
    dataRow: Object,
    column: Object
  },
  data() {
    return {
      menu: false,
      itemStatus
    };
  },
  computed: {
    nameCustom() {
      return this.itemStatus.find(x => x.id === this.dataRow.status);
    }
  }
};
</script>
<style scoped>
.showBackground {
  border-radius: 10px;
}
.changeSelect {
  text-align: center;
  color: white;
  border: 3px solid transparent;
  background-clip: padding-box;
}
.name {
  cursor: pointer;
  width: 80px;
}
</style>
