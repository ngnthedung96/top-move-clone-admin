<script>
import Layout from "../../layouts/main.vue";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Nhập đơn hàng từ FILE đối tác",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  methods: {
    getIndex(ind) {
      this.index = ind;
      console.log(this.index, ind);
    },
  },
  components: {
    Layout,
    PageHeader,
  },

  data() {
    return {
      title: "Nhập đơn hàng từ FILE đối tác",
      items: [
        {
          text: "Nhập đơn hàng từ FILE đối tác",
          href: "#",
        },
      ],
      index: 0,
      showModal: false,
      isLoading: false,
      fullPage: true,
      canCancel: false,
      useSlot: false,
      loader: "spinner",
      color: "#007bff",
      bgColor: "#ffffff",
      height: 128,
      width: 128,
      timeout: 3000, //ms
      fetchingStats: true,
      earningStatus: true,
    };
  },
};
</script>

<template>
  <Layout>
    <div class="row wrapper border-bottom white-bg page-heading">
      <PageHeader :title="title" :items="items" />
    </div>
    <div class="wrapper wrapper-content">
      <div class="row animated fadeInRight mt-3">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <div class="card-title d-flex justify-content-between">
                <h5>Nhập đơn hàng từ FILE đối tác</h5>
              </div>
              <div class="card-content" data-select2-id="12">
                <div class="row" data-select2-id="11">
                  <div class="col-md-12" data-select2-id="10">
                    <form
                      id="formExcel"
                      role="form"
                      enctype="multipart/form-data"
                      data-select2-id="formExcel"
                    >
                      <div class="row">
                        <div class="col-sm-3 m-b-xs mt-3">
                          <div class="input-group mb-3">
                            <label
                              for="file"
                              class="btn btn-outline-secondary mb-0"
                              type="button"
                              id="button-addon1"
                            >
                              Browse
                            </label>
                            <label
                              for="file"
                              type="text"
                              class="form-control mb-0"
                              placeholder=""
                              aria-label="Example text with button addon"
                            >
                              Vui lòng chọn file
                            </label>
                          </div>
                          <div class="custom-file">
                            <input
                              type="file"
                              name="file"
                              id="file"
                              accept=".xls,.xlsx"
                              class="custom-file-input"
                              style="display: none"
                            />
                          </div>
                        </div>
                        <div class="col-sm-4 m-b-xs mt-3">
                          <select
                            name="user_id"
                            class="form-control select2-hidden-accessible"
                            id="user_id"
                            style="width: 100%"
                            tabindex="-1"
                            data-select2-id="user_id"
                            aria-hidden="true"
                          >
                            <option value="0" data-select2-id="6">
                              Chọn tài khoản
                            </option>
                            <option value="97" data-select2-id="16">
                              0364648286 - jamina - phương Test
                            </option>
                            <option value="58" data-select2-id="17">
                              0867628299 - Hương Test - Đỗ Thị Hương
                            </option>
                            <option value="57" data-select2-id="18">
                              0387170011 - TESTHOP - test
                            </option>
                          </select>
                        </div>
                        <div class="col-sm-4 m-b-xs mt-3">
                          <select
                            name="ware_id"
                            class="form-control select2-hidden-accessible"
                            id="ware_id"
                            style="width: 100%"
                            tabindex="-1"
                            data-select2-id="ware_id"
                            aria-hidden="true"
                          >
                            <option value="0" data-select2-id="19">
                              Không có kho hàng
                            </option>
                          </select>
                        </div>
                        <div class="col-sm-2 m-b-xs mt-3">
                          <select
                            name="name_partner"
                            id="partner"
                            class="
                              form-control
                              select2_jq select2-hidden-accessible
                            "
                            style="width: 100%"
                            tabindex="-1"
                            data-select2-id="partner"
                            aria-hidden="true"
                          >
                            <option value="bestinc" data-select2-id="2">
                              BEST EXPRESS
                            </option>
                            <option value="vtpost">VIETTEL POST</option>
                            <option value="ninjavan">NINJAVAN</option>
                            <option value="giaohangtietkiem">GHTK</option>
                            <option value="jtexpress">J&amp;T EXPRESS</option>
                            <option value="giaohangnhanh">GHN</option>
                          </select>
                        </div>
                        <div class="col-sm-2 m-b-xs mt-3">
                          <select
                            name="id_connect_partner"
                            id="id_connect_partner"
                            class="
                              form-control
                              select2_jq select2-hidden-accessible
                            "
                            data-select2-id="id_connect_partner"
                            tabindex="-1"
                            aria-hidden="true"
                          >
                            <option value="3" data-select2-id="4">
                              TKtest - cus351993
                            </option>
                          </select>
                        </div>

                        <div class="col-sm-2 m-b-xs d-flex mt-3">
                          <span class="mt-2 font-weight-bold" style="width: 60%"
                            >Ngày tạo:</span
                          >
                          <input
                            type="text"
                            class="form-control input-daterange"
                            name="date_created"
                            id=""
                          />
                        </div>
                        <div class="col-sm-2 mt-3">
                          <button
                            class="btn btn-outline-secondary btn-db"
                            type="submit"
                            style=""
                          >
                            <b-icon
                              icon="cloud-upload"
                              aria-hidden="true"
                            ></b-icon>
                            Nhập đơn
                          </button>
                        </div>
                      </div>
                      <label id="msg_err_upload"
                        ><span class="label label-danger"></span></label
                      ><br />
                      <label
                        class="label label-primary"
                        id="ware_selected"
                        style="display: none"
                      ></label>
                    </form>
                    <hr />
                    <div class="col-md-12" id="load_data_upload"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal">
      <b-modal id="modal-edit-print" hide-header hide-footer>
        <div class="modal-header justify-content-center">
          <h4 class="modal-title d-flex justify-content-center">In đơn hàng</h4>
        </div>
        <div class="modal-body">
          <!--                <form name="input_print_order" method="post" id="print_order_by_order_codes">-->
          <!--                    <div id="">-->
          <textarea
            class="form-control order_codes"
            rows="8"
            placeholder="Nhập mã đơn hàng tại đây..."
            style="font-size: 15px"
          ></textarea>
          <!--                    </div>-->
          <div style="float: right" class="mt-3">
            <button
              class="btn btn-primary"
              @click="$bvModal.hide('modal-edit-print')"
              id="btn_w"
            >
              In đơn hàng
            </button>
            <button
              type="button"
              class="btn btn-white"
              id="close"
              @click="$bvModal.hide('modal-edit-print')"
            >
              Đóng
            </button>
          </div>
          <!--                </form>-->

          <form
            method="post"
            action="print_order_by_lot.php"
            id="print_form_hiden"
            style="display: none"
            target="_blank"
          >
            <input
              type="hidden"
              name="codes"
              id="code_hiden_id"
              value="'abc'"
            />
            <input type="submit" value="Open results in a new window" />
          </form>
        </div>
      </b-modal>
    </div>
  </Layout>
</template>
