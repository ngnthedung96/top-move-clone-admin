<script>
// import axios from "axios";
import EditableTable from '@/components/tables/editable';
import demoTable from '@/components/tables/demo';

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import { roleMethods, roleComputed ,
        resourceComputed, resourceMethods, 
        pmComputed, pmMethods} from "@/state/helpers";


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
    EditableTable,
    demoTable
  },
  data() {
    return {
      role: {
        name: 'demo role',
        resources: [],
        permissions: []
      },
      pmListOpts: [],
      resourceListOpts: [],
      roleLists: [],
      selected: 0 ,
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
      roleFields: [
        'index',
        { key: "selectRow", label: "" },
        { key: "name", label: "Name", type: "text", required: true },
        { key: "rolePm", label: "Permissions", type: "text", required: true },
        { key: "edit", label: "", type: "edit" },
      ],
    }
  },
  computed: {
    ...roleComputed,
    ...pmComputed,
    ...resourceComputed,
  },
  watch: {
    rolePms(newval) {
      console.log('thay doi nha')
      this.roleLists = newval;
      newval.forEach(item => {
        let rolePm = item.rolePm;
        const obj = rolePm.map(item => {
          let key = item.pm
          let value = item.rs
          return {
            key: value
          }
        });
      })
    },
    pmDatas(newVal) {
      this.pmListOpts = newVal.map(item => {
        return {
          value: item.id, 
          text: item.name
        }
      })
    },
    resourceDatas(newVal) {
      this.resourceListOpts = newVal.map(item => {
        return {
          value: item.id, 
          text: item.name
        }
      })
    }
  },
  async mounted() {
    this.getListRolePms()
    this.getListResources()
    this.getListPm().then(res => {
      /*this.pmDatas.forEach(item => {
        this.roleFields.push({key: item.name});
      })      */
    })
  },
  methods: {
    ...roleMethods,
    ...pmMethods,
    ...resourceMethods,
    addRole() {
      this.createRole(this.role)
    },
    handleUpdateRole(obj) {
      try {
        if (obj.id) {
          this.updateRole({obj});
        } else {
          this.createRole({obj})
        }
      } catch(e) {
      }
    },
    async handleRemoveRole(obj) {
      this.deleteRole({obj})
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
            <h4 class="card-title">Editable Table</h4>
              <p class="card-title-desc">
                Roles manager.
              </p>
              <b-table :fields="roleFields" :items="rolePms" show-empty>
                <template #cell(index)="data">
                  {{ data.index + 1 }}
                </template>
                <template #cell(rolePms)="data">
                  {{ data}}
                </template>
                <template #cell(edit)="data">
                  <b-button variant="danger" @click="deleteRole(data.item)">Remove</b-button>
                </template>
              </b-table>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Tao moi role</h4>
            <b-form @submit.prevent="addRole">
              <b-form-group
                class="mb-3"
                label="name"
                label-for="formrow-name-input"
              >
                <b-form-input
                  id="formrow-name-input"
                  type="text"
                  v-model="role.name"
                ></b-form-input>
              </b-form-group>

              <div class="row">
                <div class="col-lg-6">
                  <b-form-group
                    class="mb-3 form-label"
                    id="input-group-1"
                    label="Resource"
                    label-for="formrow-inputState"
                  >
                    <b-form-select
                      class="form-select"
                      id="formrow-inputState1"
                      :options="resourceListOpts"
                      v-model="role.resources"
                      type="text"
                      multiple
                      :select-size="4"
                    >
                      <template #first>
                        <b-form-select-option value="" disabled>-- Please select an option --</b-form-select-option>
                      </template>
                    </b-form-select>
                  </b-form-group>
                </div>
                <div class="col-lg-6">
                  <b-form-group
                    class="mb-3 form-label"
                    id="input-group-1"
                    label="State"
                    label-for="formrow-inputState"
                  >
                    <b-form-select
                      class="form-select"
                      id="formrow-inputState2"
                      :options="pmListOpts"
                      v-model="role.permissions"
                      type="text"
                      multiple
                      :select-size="4"
                    >
                    <template #first>
    <b-form-select-option value="" disabled>-- Please select an option --</b-form-select-option>
  </template>
                    </b-form-select>
                  </b-form-group>
                </div>
              </div>
              {{ role }}
              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label" for="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <div>
                <b-button variant="primary" type="submit">Submit</b-button>
              </div>
            </b-form>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Horizontal form layout</h4>

            <b-form>
              <b-form-group
                class="mb-3"
                label="First name"
                label-for="horizontal-firstname-input"
                label-cols-sm="3"
              >
                <b-form-input
                  id="horizontal-firstname-input"
                  type="text"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                class="mb-4"
                label="Email"
                label-for="horizontal-email-input"
                label-cols-sm="3"
              >
                <b-form-input
                  id="horizontal-email-input"
                  type="email"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                class="mb-4"
                label="Password"
                label-for="horizontal-password-input"
                label-cols-sm="3"
              >
                <b-form-input
                  id="horizontal-password-input"
                  type="password"
                ></b-form-input>
              </b-form-group>

              <div class="row justify-content-end">
                <div class="col-sm-9">
                  <div class="form-check mb-4">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="horizontalLayout-Check"
                    />
                    <label
                      class="form-check-label"
                      for="horizontalLayout-Check"
                    >
                      Remember me
                    </label>
                  </div>

                  <div>
                    <b-button variant="primary">Submit</b-button>
                  </div>
                </div>
              </div>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>