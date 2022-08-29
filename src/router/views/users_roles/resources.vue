<script>
// import axios from "axios";
import EditableTable from '@/components/tables/editable';

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";
import { resourceComputed, resourceMethods} from "@/state/helpers";


/**
 * Advanced table component
 */
export default {
  page: {
    title: "Users Managers",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: {
    Layout,
    PageHeader,
    EditableTable
  },
  data() {
    return {
      selected: ['b'],
      users: [ 
        { "id": 85, 
          "name": "Client", 
          "updatedAt": "2022-03-25T03:47:31.000Z", "createdAt": "2022-03-25T03:47:15.000Z" 
          }, {
             "id": 87, 
             "name": "Admin", 
             "updatedAt": "2022-03-25T03:47:26.000Z", 
             "createdAt": "2022-03-25T03:47:21.000Z" 
            } ],
      tableData: [],
      title: "Advanced Table",
      loading: true,
      items: [
        {
          text: "Tables",
          href: "/",
        },
        {
          text: "Advanced",
          active: true,
        },
      ],
      fields: [
        { key: "selectRow", label: "" },
        { key: "name", label: "Name", type: "text", required: true },
        { key: "updatedAt", label: "Updated At" },
        { key: "createdAt", label: "Created At"},
        { key: "edit", label: "", type: "edit" },
      ],
    }
  },
  computed: {
    ...resourceComputed,
  },
  async mounted() {
    this.getListResources();
  },
  methods: {
    ...resourceMethods,
    async handleUpdate(obj, resolve) {
        let res;
        try {
            if (obj.id) {
                res = this.updateResource({obj});
            } else {
                res = await this.createResource({obj})
            }
            if(res) {
                resolve(1)
            }
        } catch(e) {
            alert("loi", e)
        }
    },
    async handleRemove(obj) {
      this.deleteResource({obj})
    }
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <vue-snotify></vue-snotify>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Editable Table</h4>
              <p class="card-title-desc">
                Resource manager.
              </p>
              
              <EditableTable
                v-model="resourceDatas"
                :fields="fields"
                @abc="handleUpdate"
                @remove="handleRemove"
              ></EditableTable>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>