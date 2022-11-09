<script>
import Layout from "../../layouts/main.vue";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Quản lý đơn hàng",
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
      title: "Quản lý đơn hàng",
      items: [
        {
          text: "Quản lý đơn hàng",
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
                <h5>Quản lý đơn hàng</h5>
                <div class="ibox-tools" style="background: darkseagreen">
                  <!-- <button class="btn btn-primary  export_excel_order_by_codes"> <i class="fa fa-file-excel-o" aria-hidden="true"></i> Xuất theo mã đơn</button> -->

                  <b-button
                    v-b-modal="'modal-edit-print'"
                    class="editbtn_print"
                    variant="danger xs"
                  >
                    <b-icon-printer></b-icon-printer>
                    In theo mã đơn
                  </b-button>
                </div>
              </div>
              <div class="card-content">
                <form id="formSearch" role="form">
                  <div class="row nav-link">
                    <div class="col-lg-12">
                      <div class="row" style="color: black">
                        <div class="col-sm-3 m-b-xs">
                          <div class="input-group">
                            <label
                              for="date_range"
                              class="col-form-label"
                              title="Ngày báo hoàn"
                              style="margin-right: 5px"
                              >Ngày báo hoàn:
                            </label>
                            <input
                              type="text"
                              class="input-daterange form-control rounded"
                              name="date_range"
                              id="date_range"
                              value="08/11/2022 - 09/11/2022"
                            />
                          </div>
                        </div>
                        <div class="col-sm-3 m-b-xs">
                          <div class="input-group">
                            <label
                              for="status"
                              class="col-form-label"
                              title="Trạng thái"
                              style="margin-right: 5px"
                              >Trạng thái:
                            </label>
                            <select name="status" class="form-control rounded">
                              <option value="0" selected="">Chưa xử lý</option>
                              <option value="1">Đồng ý</option>
                              <option value="-1">Từ chối</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-sm-3 m-b-xs conditional">
                          <textarea
                            type="text"
                            class="form-control"
                            name="codes"
                            placeholder="Mã đơn hàng, mã đơn khách hàng, SĐT người nhận"
                            id="codes"
                            rows="4"
                          ></textarea>
                          <input
                            type="hiden"
                            class="form-control"
                            name="code"
                            placeholder="Mã đơn hàng"
                            id="code"
                            style="display: none"
                          />
                        </div>

                        <div class="col-sm-2 conditional">
                          <button class="btn btn-primary" type="submit">
                            <i class="fa fa-search" aria-hidden="true"></i>
                            Tìm kiếm
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="table-responsive">
                    <div
                      id="dt_orders_wrapper"
                      class="dataTables_wrapper dt-bootstrap4 no-footer"
                    >
                      <div style="float: left">
                        <div class="dt-buttons">
                          <button
                            class="dt-button btn btn-success btn-xs me-2"
                            tabindex="0"
                            aria-controls="dt_orders"
                            type="button"
                          >
                            <span
                              ><i class="fa fa-check" aria-hidden="true"></i>
                              Đồng ý</span
                            >
                          </button>
                          <button
                            class="dt-button btn btn-danger btn-xs"
                            tabindex="0"
                            aria-controls="dt_orders"
                            type="button"
                          >
                            <span
                              ><i class="fa fa-times" aria-hidden="true"></i> Từ
                              chối</span
                            >
                          </button>
                        </div>
                      </div>
                      <div style="float: right; width: 15%">
                        <div
                          id="dt_orders_length"
                          class="
                            dataTables_length
                            d-flex
                            flex-row
                            justify-content-around
                          "
                        >
                          <span
                            class="d-flex flex-column justify-content-center"
                            >Hiển thị </span
                          ><select
                            name="dt_orders_length"
                            aria-controls="dt_orders"
                            class="
                              custom-select custom-select-sm
                              form-control form-control-sm
                            "
                            style="width: 18%"
                          >
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value="200">200</option></select
                          ><span
                            class="d-flex flex-column justify-content-center"
                            style="width: 44%"
                            >đơn hàng</span
                          >
                        </div>
                      </div>
                      <div
                        id="dt_orders_processing"
                        class="dataTables_processing card"
                        style="display: none"
                      >
                        <i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>
                      </div>
                      <table
                        class="table table-striped no-footer dataTable"
                        id="dt_orders"
                        style="font-size: 12px !important"
                        role="grid"
                        aria-describedby="dt_orders_info"
                      >
                        <thead>
                          <tr role="row">
                            <th
                              width="5%"
                              class="sorting_disabled"
                              tabindex="0"
                              aria-controls="dt_orders"
                              rowspan="1"
                              colspan="1"
                              aria-sort="ascending"
                              aria-label="
                                                    
                                                        
                                                        
                                                    
                                                : activate to sort column descending"
                              style="width: 49px"
                            >
                              <label class="check-ace">
                                <input type="checkbox" id="select_all" />
                                <span class="checkmark"></span>
                              </label>
                            </th>
                            <th
                              class="sorting_disabled"
                              tabindex="0"
                              aria-controls="dt_orders"
                              rowspan="1"
                              colspan="1"
                              aria-label="Mã vận đơn: activate to sort column ascending"
                              style="width: 101px"
                            >
                              Mã vận đơn
                            </th>
                            <th
                              class="sorting_disabled"
                              tabindex="0"
                              aria-controls="dt_orders"
                              rowspan="1"
                              colspan="1"
                              aria-label="Khách hàng: activate to sort column ascending"
                              style="width: 101px"
                            >
                              Khách hàng
                            </th>
                            <th
                              class="sorting_disabled"
                              tabindex="0"
                              aria-controls="dt_orders"
                              rowspan="1"
                              colspan="1"
                              aria-label="Thời gian đặt hàng: activate to sort column ascending"
                              style="width: 156px"
                            >
                              Thời gian đặt hàng
                            </th>
                            <th
                              class="sorting_disabled"
                              tabindex="0"
                              aria-controls="dt_orders"
                              rowspan="1"
                              colspan="1"
                              aria-label="Thời gian báo hoàn: activate to sort column ascending"
                              style="width: 159px"
                            >
                              Thời gian báo hoàn
                            </th>
                            <th
                              class="sorting_disabled"
                              tabindex="0"
                              aria-controls="dt_orders"
                              rowspan="1"
                              colspan="1"
                              aria-label="Lý do báo hoàn: activate to sort column ascending"
                              style="width: 128px"
                            >
                              Lý do báo hoàn
                            </th>
                            <th
                              class="sorting_disabled"
                              tabindex="0"
                              aria-controls="dt_orders"
                              rowspan="1"
                              colspan="1"
                              aria-label="NV báo hoàn: activate to sort column ascending"
                              style="width: 110px"
                            >
                              NV báo hoàn
                            </th>
                            <th
                              class="sorting_disabled"
                              tabindex="0"
                              aria-controls="dt_orders"
                              rowspan="1"
                              colspan="1"
                              aria-label="NV xử lý: activate to sort column ascending"
                              style="width: 75px"
                            >
                              NV xử lý
                            </th>
                            <th
                              class="sorting_disabled"
                              tabindex="0"
                              aria-controls="dt_orders"
                              rowspan="1"
                              colspan="1"
                              aria-label="Kết quả: activate to sort column ascending"
                              style="width: 69px"
                            >
                              Kết quả
                            </th>
                            <th
                              class="sorting_disabled"
                              tabindex="0"
                              aria-controls="dt_orders"
                              rowspan="1"
                              colspan="1"
                              aria-label="Số ngày báo hoàn: activate to sort column ascending"
                              style="width: 147px"
                            >
                              Số ngày báo hoàn
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="odd">
                            <td
                              valign="top"
                              colspan="10"
                              class="dataTables_empty"
                            >
                              Không có đơn hàng
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="row">
                        <div class="col-sm-4">
                          <div
                            class="dataTables_info"
                            id="dt_orders_info"
                            role="status"
                            aria-live="polite"
                          >
                            Hiển thị kết quả từ 0 đến 0 của 0 đơn hàng
                          </div>
                        </div>
                        <div class="col-sm-4"></div>
                        <div class="col-sm-4">
                          <div
                            class="dataTables_paginate paging_simple_numbers"
                            id="dt_orders_paginate"
                          >
                            <ul class="pagination">
                              <li
                                class="
                                  paginate_button
                                  page-item
                                  previous
                                  disabled
                                "
                                id="dt_orders_previous"
                              >
                                <a
                                  href="#"
                                  aria-controls="dt_orders"
                                  data-dt-idx="0"
                                  tabindex="0"
                                  class="page-link"
                                  >Trang trước</a
                                >
                              </li>
                              <li
                                class="paginate_button page-item next disabled"
                                id="dt_orders_next"
                              >
                                <a
                                  href="#"
                                  aria-controls="dt_orders"
                                  data-dt-idx="1"
                                  tabindex="0"
                                  class="page-link"
                                  >Trang sau</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- <label for="" id="msg_err"></label> -->
                  </div>
                </form>
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
