<template>
  <article>
      <b-modal
        id="modal-1"
        title="Confirm"
        v-model="openDialog"
        ok-title="Remove"
        @ok="removeRowsHandler"
      >
      <p class="my-4">Are you sure you want to remove the selected rows?</p>
    </b-modal>
    <div class="action-container">
      <b-button class="add-button" variant="success" @click="addRowHandler">Add Row</b-button>
      <b-button variant="danger" @click="openDialog = true">Remove Rows</b-button>
    </div>
        <b-table class="b-table" :items="tableItems" :fields="fields" fixed>
            <template v-for="(field, index) in fields" #[`cell(${field.key})`]="data">
                <b-form-datepicker
          v-if="field.type === 'date' && tableItems[data.index].isEdit"
          :key="index"
          :type="field.type"
          :value="tableItems[data.index][field.key]"
          @input="(value) => inputHandler(value, data.index, field)"
        ></b-form-datepicker>
        <b-form-select
          v-else-if="field.type === 'select' && tableItems[data.index].isEdit"
          :key="index"
          :value="tableItems[data.index][field.key]"
          @input="(value) => inputHandler(value, data.index, field)"
          :options="field.options"
          class="form-control">
        </b-form-select>
        <span
          v-else-if="field.type === 'select' && !tableItems[data.index].isEdit"
          :key="index">
          {{ tableItems[data.index][field.key].name }}
        </span>
        
        <b-checkbox
          v-else-if="field.key === 'selectRow'"
          :checked="tableItems[data.index].isSelected"
          :key="index"
          @change="selectRowHandler(data)"
        ></b-checkbox>
          <div :key="index" v-else-if="field.type === 'edit'">
            <b-button @click="editRowHandler(data, field)">
              <span v-if="!tableItems[data.index].isEdit">Edit</span>
              <span v-else>Done</span>
            </b-button>
            <b-button
              class="delete-button"
              variant="warning"
              @click="cancelRowHandler(data.index)"
              v-if="tableItems[data.index].isEdit"
              >Cancel</b-button>
            <b-button
              class="delete-button"
              variant="danger"
              @click="removeRowHandler(data.index)"
              v-if="!tableItems[data.index].isEdit"
              >Remove</b-button>
        </div>
          <b-form-input 
            v-else-if="field.type && tableItems[data.index].isEdit" 
            :key="index" 
            :type="field.type" 
            :value="tableItems[data.index][field.key]" 
            @blur="(e) => inputHandler2(e, data.index, field)"
            ></b-form-input>
                <span :key="index" v-else>{{data.value}}</span>
            </template>
        </b-table>
    </article>
</template>

<script>
import { notifyComputed} from "@/state/helpers";

export default {
  name: "EditableTable",
  components: {},
  props: ['value', 'fields'],
  computed: {
    ...notifyComputed
  },
  data: function() {
    return {
      taisao: 5,
      tableItems: this.mapItems(this.value),
      openDialog: false,
    };
  },
  watch: {
    value(newVal, oldVal) {
      this.tableItems = this.mapItems(newVal);
    },
    fields(newVal, oldVal) {
      this.fields = newVal;
    }
  },
  methods: {
    editRowHandler(data) {
      if (this.tableItems[data.index].isEdit) {
        const result = new Promise((resolve) =>
          this.$emit("abc", this.tableItems[data.index], resolve)
        )
        result.then(value => {
          this.tableItems[data.index].isEdit = false
        }).catch(error => {
          console.log(error)
        })
      }
      else {
        this.tableItems[data.index].isEdit = !this.tableItems[data.index].isEdit
      }
      //this.tableItems[data.index].validity = {};
      //this.$set(this.tableItems, data.index, this.tableItems[data.index]);
    },
    cancelRowHandler(index) {
      if(this.tableItems[index].isNew) {
        this.tableItems.shift();
        console.log('chay nhe', )
      }
      else {
        this.tableItems[index].isEdit = false
      }
    },
    inputHandler(value, index, field) {
      this.tableItems[index][field.key] = value;
    },
    inputHandler2(e, index, field) {
      this.tableItems[index][field.key] = e.target.value;
    },
    addRowHandler() {
      const newRow = this.fields.reduce((a, c) => ({...a, [c.key]: null}) ,{})
      newRow.isEdit = true;
      newRow.isNew = true;
      this.tableItems.unshift(newRow);
      //this.$emit('input', this.tableItems);
    },
    removeRowHandler(index) {
      const originTable = this.tableItems;
      this.$emit("remove", originTable[index])
    },
    removeRowsHandler() {
      const selectedItems = this.tableItems.filter((item) => item.isSelected);
      this.tableItems = this.tableItems.filter((item) => !item.isSelected);
      this.$emit("input", this.tableItems);
      this.$emit("remove", selectedItems);
    },
    selectRowHandler(data) {
      this.tableItems[data.index].isSelected = !this.tableItems[data.index]
        .isSelected;
    },
    disableButton(data) {
      console.log('vo')
      console.log(data.item)
      return Object.values(data.item.validity).some(valid => !valid);
    },
    mapItems(data2) {
      return data2.map((item, index) => ({
        ...item,
        isEdit: false,
        isSelected: false
      }));
    },
  },
};
</script>

<style>
.action-container {
  margin-bottom: 10px;
}
.action-container button {
  margin-right: 5px;
}
.delete-button {
  margin-left: 5px;
}
</style>