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
                      <div class="row">
                        <div class="col-sm-3 m-b-xs mt-3">
                          <div class="input-group">
                            <input
                              type="text"
                              class="input-daterange form-control"
                              name="date_range"
                              id="date_range"
                            />
                          </div>
                        </div>
                        <div class="col-sm-3 m-b-xs conditional mt-3">
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
                        <div class="col-sm-3 m-b-xs mt-3">
                          <select
                            name="area_search"
                            id="area_search"
                            class="
                              form-control
                              select_jq
                              select2-hidden-accessible
                            "
                            data-select2-id="area_search"
                            tabindex="-1"
                            aria-hidden="true"
                          >
                            <option value="all" data-select2-id="4">
                              Toàn Quốc
                            </option>
                            <option value="1" data-select2-id="22">
                              Miền Bắc
                            </option>
                            <option value="2" data-select2-id="23">
                              Miền Trung
                            </option>
                            <option value="3" data-select2-id="24">
                              Miền Nam
                            </option>
                          </select>
                        </div>
                        <div class="col-sm-2 m-b-xs mt-3">
                          <select
                            name="search_for_ctr"
                            id="search_for_ctr"
                            class="
                              form-control
                              select_jq
                              select2-hidden-accessible
                            "
                            data-select2-id="search_for_ctr"
                            tabindex="-1"
                            aria-hidden="true"
                          >
                            <option
                              value="total_for_control"
                              data-select2-id="2"
                            >
                              Tất cả - Đối soát
                            </option>
                            <option value="total_un_for_control">
                              Chưa đối soát
                            </option>
                            <option value="total_for_controled">
                              Đã đối soát
                            </option>
                          </select>
                        </div>
                        <div class="col-sm-3 m-b-xs mt-3">
                          <select
                            name="search_partner"
                            id="search_partner"
                            class="
                              form-control
                              select_jq
                              select2-hidden-accessible
                            "
                            data-select2-id="search_partner"
                            tabindex="-1"
                            aria-hidden="true"
                          >
                            <option value="all" data-select2-id="8">
                              Tất cả ĐVVC
                            </option>
                            <option value="bestfc">Bưu cục</option>
                            <option value="bestinc">BEST EXPRESS</option>
                            <option value="ninjavan">NINJAVAN</option>
                            <option value="vtpost">VIETTEL POST</option>
                            <option value="giaohangtietkiem">GHTK</option>
                            <option value="jtexpress">J&amp;T EXPRESS</option>
                            <option value="giaohangnhanh">GHN</option>
                          </select>
                        </div>
                        <div class="col-sm-2 m-b-xs mt-3">
                          <select
                            name="print_status"
                            id="print_status"
                            class="
                              form-control
                              select_jq
                              select2-hidden-accessible
                            "
                            data-select2-id="print_status"
                            tabindex="-1"
                            aria-hidden="true"
                          >
                            <option value="all" data-select2-id="4">
                              Tất cả - In
                            </option>
                            <option value="0">Chưa in</option>
                            <option value="1">Đã in</option>
                          </select>
                        </div>
                        <div class="col-sm-2 m-b-xs mt-3">
                          <select
                            name="search_chanel"
                            id="search_chanel"
                            class="
                              form-control
                              select_jq
                              select2-hidden-accessible
                            "
                            data-select2-id="search_chanel"
                            tabindex="-1"
                            aria-hidden="true"
                          >
                            <option value="99" data-select2-id="12">
                              Tất cả - Kênh lên đơn
                            </option>
                            <option value="0">Tạo lẻ</option>
                            <option value="1">APP MOBILE</option>
                            <option value="2">Lên Excel</option>
                            <option value="3">API đối tác</option>
                          </select>
                        </div>
                        <div class="col-sm-2 m-b-xs mt-3">
                          <select
                            name="payer"
                            id="payer"
                            class="
                              form-control
                              select_jq
                              select2-hidden-accessible
                            "
                            data-select2-id="payer"
                            tabindex="-1"
                            aria-hidden="true"
                          >
                            <option value="all" data-select2-id="6">
                              Người trả phí
                            </option>
                            <option value="1">Shop trả</option>
                            <option value="2">Khách trả</option>
                          </select>
                        </div>
                        <div class="col-sm-2 m-b-xs mt-3">
                          <select
                            name="type_pick"
                            id="type_pick"
                            class="
                              form-control
                              select_jq
                              select2-hidden-accessible
                            "
                            data-select2-id="type_pick"
                            tabindex="-1"
                            aria-hidden="true"
                          >
                            <option value="all" data-select2-id="8">
                              Phương thức gửi hàng
                            </option>
                            <option value="1">Lấy hàng tận nơi</option>
                            <option value="2">Gửi tại bưu cục</option>
                          </select>
                        </div>
                        <div class="col-sm-5 m-b-xs mt-3">
                          <select
                            name="type_pick"
                            id="type_pick"
                            class="
                              form-control
                              select_jq
                              select2-hidden-accessible
                            "
                            data-select2-id="type_pick"
                            tabindex="-1"
                            aria-hidden="true"
                          >
                            <option value="all" data-select2-id="8">
                              Lựa chọn tài khoản khách hàng
                            </option>
                            <option value="1">
                              TESTHOP | 10004 | 0387170011
                            </option>
                            <option value="2">
                              Hương Test | 10004 | 0867628299
                            </option>
                            <option value="2">
                              jamina | 10004 | 0364648286
                            </option>
                          </select>
                        </div>

                        <div class="col-sm-2 conditional mt-3">
                          <button class="btn btn-primary" type="submit">
                            <i class="fa fa-search" aria-hidden="true"></i>
                            Tìm kiếm
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row conditional">
                    <div class="col-lg-12 mt-3">
                      <b-tabs pills>
                        <!-- This tabs content will always be mounted -->
                        <b-tab @click="getIndex(1)" title="Tất cả"></b-tab>
                        <!-- This tabs content will not be mounted until the tab is shown -->
                        <!-- and will be un-mounted when hidden -->
                        <b-tab @click="getIndex(2)" title="Tạo mới"></b-tab>
                        <b-tab @click="getIndex(3)" title="Đã lấy"></b-tab>
                        <b-tab
                          @click="getIndex(4)"
                          title="Nhập kho nhận - trả"
                        ></b-tab>
                        <b-tab
                          @click="getIndex(5)"
                          title="Đang vận chuyển"
                        ></b-tab>
                        <b-tab
                          @click="getIndex(6)"
                          title="Đang chuyển HUB-ĐT"
                        ></b-tab>
                        <b-tab @click="getIndex(7)" title="Đã nhập"></b-tab>
                        <b-tab
                          @click="getIndex(8)"
                          title="Nhập kho giao"
                        ></b-tab>
                        <b-tab
                          @click="getIndex(9)"
                          title="Đang giao hàng"
                        ></b-tab>
                        <b-tab
                          @click="getIndex(10)"
                          title="Đã giao hàng"
                        ></b-tab>
                        <b-tab
                          @click="getIndex(11)"
                          title="Giao thất bại"
                        ></b-tab>
                        <b-tab
                          @click="getIndex(12)"
                          title="Chờ giao lại"
                        ></b-tab>
                        <b-tab
                          @click="getIndex(13)"
                          title="Chờ duyệt hoàn"
                        ></b-tab>
                        <b-tab @click="getIndex(14)" title="Đơn hoàn"></b-tab>
                        <b-tab
                          @click="getIndex(15)"
                          title="Đã chốt đền"
                        ></b-tab>
                        <b-tab @click="getIndex(16)" title="Khác"></b-tab>
                        <b-tab @click="getIndex(17)" title="Hủy"></b-tab>
                      </b-tabs>
                    </div>
                  </div>
                  <div class="table-responsive wrapper">
                    <div
                      id="dt_orders_wrapper"
                      class="dataTables_wrapper dt-bootstrap4 mt-3"
                    >
                      <div class="float-left" style="float: left">
                        <div class="dt-buttons">
                          <button
                            class="dt-button btn me-2 btn-primary btn-outline"
                            tabindex="0"
                            aria-controls="dt_orders"
                            type="button"
                          >
                            <span
                              ><i
                                class="fa fa-download"
                                aria-hidden="true"
                                id="text_export_excel"
                              ></i>
                              Excel</span
                            >
                          </button>
                          <button
                            class="dt-button btn btn-danger btn-outline"
                            tabindex="0"
                            aria-controls="dt_orders"
                            type="button"
                          >
                            <span
                              ><i
                                class="fa fa-print"
                                aria-hidden="true"
                                id="print_order"
                              ></i>
                              In Hàng Loạt</span
                            >
                          </button>
                        </div>
                      </div>
                      <div style="float: right; width: 15%">
                        <div
                          class="
                            dataTables_length
                            d-flex
                            flex-row
                            justify-content-around
                          "
                          id="dt_orders_length"
                        >
                          <span
                            class="d-flex flex-column justify-content-center"
                            >Hiển thị
                          </span>
                          <select
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
                            <option value="200">200</option>
                          </select>
                          <span
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
                        Processing...
                      </div>
                      <table
                        id="dt_orders"
                        class="table table-striped dataTable"
                        style="width: 100%"
                        role="grid"
                        aria-describedby="dt_orders_info"
                      >
                        <thead>
                          <tr role="row">
                            <th
                              style="width: 12px"
                              class="sorting_disabled"
                              rowspan="1"
                              colspan="1"
                            >
                              #
                            </th>
                            <th
                              style="width: 261px"
                              class="sorting_disabled"
                              rowspan="1"
                              colspan="1"
                            >
                              Đơn hàng
                            </th>
                            <th
                              style="width: 261px"
                              class="sorting_disabled"
                              rowspan="1"
                              colspan="1"
                            >
                              Gói hàng
                            </th>
                            <th
                              style="text-align: justify; width: 538px"
                              class="sorting_disabled"
                              rowspan="1"
                              colspan="1"
                            >
                              Người Nhận
                            </th>
                            <th
                              style="width: 233px"
                              class="sorting_disabled"
                              rowspan="1"
                              colspan="1"
                            >
                              Cước phí
                            </th>
                          </tr>
                        </thead>
                        <tbody id="load_data_orders">
                          <tr class="odd">
                            <td
                              valign="top"
                              colspan="5"
                              class="dataTables_empty"
                            >
                              Không có đơn hàng
                            </td>
                          </tr>
                        </tbody>
                        <tfoot id="total">
                          <tr>
                            <th
                              colspan="3"
                              rowspan="7"
                              style="
                                text-align: center;
                                font-size: 15px;
                                vertical-align: middle;
                              "
                            >
                              Tổng
                            </th>
                            <th
                              colspan="1"
                              style="text-align: left; font-size: 12px"
                              rowspan="1"
                            >
                              Thu hộ (COD)
                            </th>
                            <th
                              colspan="1"
                              id="total_behalf_id"
                              style="text-align: right; font-size: 15px"
                              rowspan="1"
                            >
                              0
                            </th>
                          </tr>

                          <tr>
                            <th
                              colspan="1"
                              style="text-align: left; font-size: 12px"
                              rowspan="1"
                            >
                              Phí ship
                            </th>
                            <th
                              colspan="1"
                              id="total_fee_id"
                              style="text-align: right; font-size: 15px"
                              rowspan="1"
                            >
                              0
                            </th>
                          </tr>
                          <tr>
                            <th
                              colspan="1"
                              style="text-align: left; font-size: 12px"
                              rowspan="1"
                            >
                              Phí bảo hiểm
                            </th>
                            <th
                              colspan="1"
                              id="total_fee_insurance_id"
                              style="text-align: right; font-size: 15px"
                              rowspan="1"
                            >
                              0
                            </th>
                          </tr>
                          <tr>
                            <th
                              colspan="1"
                              style="text-align: left; font-size: 12px"
                              rowspan="1"
                            >
                              Phí thu hộ (Phí COD)
                            </th>
                            <th
                              colspan="1"
                              id="total_fee_cod_id"
                              style="text-align: right; font-size: 15px"
                              rowspan="1"
                            >
                              0
                            </th>
                          </tr>
                          <tr>
                            <th
                              colspan="1"
                              style="text-align: left; font-size: 12px"
                              rowspan="1"
                            >
                              Phí lấy hàng
                            </th>
                            <th
                              colspan="1"
                              id="total_pickup_fee_id"
                              style="text-align: right; font-size: 15px"
                              rowspan="1"
                            >
                              0
                            </th>
                          </tr>
                          <tr>
                            <th
                              colspan="1"
                              style="text-align: left; font-size: 12px"
                              rowspan="1"
                            >
                              Phí hoàn
                            </th>
                            <th
                              colspan="1"
                              id="total_fee_return_id"
                              style="text-align: right; font-size: 15px"
                              rowspan="1"
                            >
                              0
                            </th>
                          </tr>
                          <tr style="color: #1ab394">
                            <th
                              colspan="1"
                              style="text-align: left; font-size: 12px"
                              rowspan="1"
                            >
                              Tổng phí
                            </th>
                            <th
                              colspan="1"
                              id="total_fee_orders_id"
                              style="text-align: right; font-size: 15px"
                              rowspan="1"
                            >
                              0
                            </th>
                          </tr>
                        </tfoot>
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
                            style="float: right"
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
                    <label for="" id="msg_err"></label>
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
