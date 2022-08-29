<script>
// import axios from "axios";
import EditableTable from '@/components/tables/editable';

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import { todoMethods, todoComputed, roleMethods, roleComputed} from "@/state/helpers";

import { userMethods, userComputed} from "@/state/modules/users";


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
      userFields: [
        { key: "selectRow", label: "" },
        { key: "name", type: "text", required: true },
        { key: "email", type: "text", required: true },
        { key: "phone", type: "text", required: true },
        { key: "role", label: "Role", type: "select", options: []},
        { key: "updatedAt", label: "Updated At" },
        { key: "createdAt", label: "Created At"},
        { key: "edit", label: "", type: "edit" },
      ],
    }
  },
  watch: {
    rolePms(newVal) {
      const index = this.userFields.findIndex(item => item.key === 'role');
        if(index !== -1) {
          const opts = newVal.map((item) => {
              let val = {id: item.id, name: item.name}
              return {
                value: val, text: item.name,
              }
            })
            this.userFields[index].options = opts
        }
    }
  },
  computed: {
    ...userComputed,
    ...roleComputed,
    /**
     * Total no. of records
     */
    rows() {
      return this.tableData.length;
    },

    /**
     * Todo list of records
     */
    todoList() {
      return this.todos.length;
    },
  },
  async mounted() {
    this.getListUsers();
    this.getListRole()
  },
  methods: {
    ...userMethods,
    ...roleMethods,
    async handleUpdateUser(obj, resolve) {
      let res;
        try {
            if (obj.id) {
                res = await this.updateUser({obj});
            } else {
                res = await this.createUser({obj})
            }
            if(res) {
                resolve(1)
            }
        } catch(e) {
            alert(e)
        }
    },
    async handleRemoveUser(obj) {
      this.deleteUser({obj})
    },
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
            <h4 class="card-title">Users</h4>
            <div class="row mt-4">
              <div class="col-sm-12 col-md-6">
                <div id="tickets-table_length" class="dataTables_length">
                  <label class="d-inline-flex align-items-center">
                    Show&nbsp;
                    >&nbsp;entries
                  </label>
                </div>
              </div>
              <!-- End search -->
            </div>
            <!-- Table -->

            <EditableTable
                v-model="userDatas"
                :fields="userFields"
                @abc="handleUpdateUser"
                @remove="handleRemoveUser"
              ></EditableTable>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>