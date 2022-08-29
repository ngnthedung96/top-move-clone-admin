<template>
    <article>
        <div>Noio dung ghi vao : {{ taisao }}</div>
        <div>Du lieu dau vao: {{ fields }}</div>
        <div>Value dau vao: {{ value }}</div>
    </article>
</template>

<script>
import { notifyComputed} from "@/state/helpers";

export default {
  name: "demo",
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
    fields(newVal, oldVal) {
      this.fields = newVal;
    }
  },
  mounted() {
    console.log('chiu day nhe', this.taisao)
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
      this.tableItems = this.tableItems.filter((item, i) => i !== index);
     // this.$emit("input", this.tableItems);
      this.$emit("remove", originTable[index]);
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
       // isEdit: this.tableItems[index] ? this.tableItems[index].isEdit : false,
      }));
    },
  }
};
</script>