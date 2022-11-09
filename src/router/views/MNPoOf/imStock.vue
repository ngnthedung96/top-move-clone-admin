<script>
import Layout from "../../layouts/main.vue";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Tồn đơn nhập kho",
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
  },
  data() {
    return {
      title: "Tồn đơn nhập kho",
      items: [
        {
          text: "Trang chủ",
          href: "#",
        },
        {
          text: "QL bưu cục",
          href: "#",
        },
        {
          text: "Tồn đơn nhập kho",
          active: true,
        },
      ],
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
  methods: {
    showMsgBox() {
      // check du lieu truoc
      const h = this.$createElement;
      this.$bvModal.msgBoxOk(
        [
          h("p", { class: ["text-center"] }, [" Đổi mật khẩu thành công "]),
          h("h1", { class: ["text-center text-success"] }, [
            h("b-icon-check-circle-fill", { class: ["bg-green"] }),
          ]),
        ],
        {
          title: "Đổi mật khẩu",
          size: "sm",
          buttonSize: "sm",
          okVariant: "success",
          headerClass: "p-2 border-bottom-0",
          footerClass: "p-2 border-top-0",
          centered: true,
        }
      );
    },
  },
};
</script>

<template>
  <Layout>
    <div class="row wrapper border-bottom white-bg page-heading">
      <PageHeader :title="title" :items="items" />
    </div>
    <div class="wrapper wrapper-content">
      <div class="row">
        <div class="col-lg-12 animated fadeInRight">
          <div class="card">
            <div class="card-body">
              <form id="formSearch" role="form">
                <div class="mail-box-header">
                  <h2 class="card-title">Tồn đơn nhập kho</h2>
                  <div class="col-4">
                    <div class="input-group mt-3">
                      <input type="text" class="form-control date_input" />
                      <button
                        class="ladda-button ladda-button-demo btn btn-primary"
                        id="btn_search"
                        data-style="expand-right"
                      >
                        <span class="ladda-label"
                          ><i class="fa fa-search"></i> Tìm </span
                        ><span class="ladda-spinner"></span>
                        <div class="ladda-progress" style="width: 0px"></div>
                      </button>
                    </div>
                  </div>
                  <div class="col-lg-12 mt-3">
                    <b-tabs
                      class="d-flex b-tab-div justify-content-between"
                      fill
                    >
                      <b-tab title="Tổng kiện nhập kho" active></b-tab>
                      <b-tab title="Kiện còn lại ở kho"></b-tab>
                      <b-tab title="Kiện xuất đi giao"></b-tab>
                      <b-tab title="Kiện xuất đối tác"></b-tab>
                    </b-tabs>
                    <div class="ibox-content mt-3">
                      <form id="formSearch" role="form">
                        <div class="row">
                          <input
                            type="hidden"
                            id="type_hub"
                            name="type_hub"
                            value="pakage_in_hub_total"
                          />
                          <div class="col-sm-2">
                            <button
                              class="btn btn-outline-secondary"
                              type="submit"
                              id="btn_search"
                              style="display: none"
                            >
                              Tìm kiếm
                            </button>
                          </div>
                        </div>
                      </form>
                      <div class="table-responsive">
                        <div
                          id="dt_orders_wrapper"
                          class="dataTables_wrapper dt-bootstrap4 no-footer"
                        >
                          <div class="mt-3" style="float: left">
                            <div class="dt-buttons">
                              <button
                                class="dt-button btn btn-primary"
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
                                class="
                                  d-flex
                                  flex-column
                                  justify-content-center
                                "
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
                                class="
                                  d-flex
                                  flex-column
                                  justify-content-center
                                "
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
                            role="grid"
                            aria-describedby="dt_orders_info"
                          >
                            <thead>
                              <tr role="row">
                                <th
                                  class="sorting_disabled"
                                  tabindex="0"
                                  aria-controls="dt_orders"
                                  rowspan="1"
                                  colspan="1"
                                  aria-sort="ascending"
                                  aria-label="Mã đơn hàng: activate to sort column descending"
                                  style="width: 159px"
                                >
                                  Mã đơn hàng
                                </th>
                                <th
                                  class="sorting_disabled"
                                  tabindex="0"
                                  aria-controls="dt_orders"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Trạng thái khi quét: activate to sort column ascending"
                                  style="width: 218px"
                                >
                                  Trạng thái khi quét
                                </th>
                                <th
                                  class="sorting_disabled"
                                  tabindex="0"
                                  aria-controls="dt_orders"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Trạng thái hiện tại: activate to sort column ascending"
                                  style="width: 211px"
                                >
                                  Trạng thái hiện tại
                                </th>
                                <th
                                  class="sorting_disabled"
                                  tabindex="0"
                                  aria-controls="dt_orders"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="ĐVVC: activate to sort column ascending"
                                  style="width: 77px"
                                >
                                  ĐVVC
                                </th>
                                <th
                                  class="sorting_disabled"
                                  tabindex="0"
                                  aria-controls="dt_orders"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Người quét: activate to sort column ascending"
                                  style="width: 141px"
                                >
                                  Người quét
                                </th>
                                <th
                                  class="sorting_disabled"
                                  tabindex="0"
                                  aria-controls="dt_orders"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Thời gian quét: activate to sort column ascending"
                                  style="width: 169px"
                                >
                                  Thời gian quét
                                </th>
                                <th
                                  class="sorting_disabled"
                                  tabindex="0"
                                  aria-controls="dt_orders"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Từ giờ gian quét: activate to sort column ascending"
                                  style="width: 189px"
                                >
                                  Từ giờ gian quét
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr class="odd">
                                <td
                                  valign="top"
                                  colspan="7"
                                  class="dataTables_empty"
                                >
                                  Không có Đơn hàng
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
                                Hiển thị kết quả từ 0 đến 0 của 0 Đơn hàng
                              </div>
                            </div>
                            <div class="col-sm-4"></div>
                            <div class="col-sm-4">
                              <div
                                class="
                                  dataTables_paginate
                                  paging_simple_numbers
                                "
                                id="dt_orders_paginate"
                              >
                                <ul class="pagination" style="float: right">
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
                                    class="
                                      paginate_button
                                      page-item
                                      next
                                      disabled
                                    "
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
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal">
      <b-modal id="modal-edit-pass" hide-header hide-footer>
        <div class="modal-header">
          <h4 class="modal-title">Đổi mật khẩu</h4>
        </div>
        <div class="modal-body">
          <form class="mt-4" role="form" id="formDeposit">
            <input type="hidden" name="_function" value="deposit" />
            <div class="form-group">
              <label for="">Chọn gói cước gia hạn</label>
              <select
                name="usage_package"
                class="form-control usage_package"
                style="width: 100%"
              >
                <option value="1">1 tháng</option>
                <option value="2">2 tháng</option>
                <option value="3">3 tháng</option>
                <option value="6">6 tháng</option>
                <option value="12">12 tháng</option>
              </select>
            </div>
            <div class="form-group">
              <label for="">Số tiến cần phải thanh toán</label>
              <input
                type="text"
                class="form-control money"
                required=""
                placeholder="Số tiến cần phải thanh toán"
                disabled="disabled"
                id="money"
                value="0"
              /><br />
              <input type="hidden" name="money" value="0" id="money_val" />
            </div>
            <p class="text-danger" style="font-size: 13px; font-weight: bold">
              *Chú ý: Chuyển khoản đến số tài khoản bên dưới rồi bấm xác nhận đã
              chuyển để được tạo lệnh chờ ADMINS TỔNG duyệt
            </p>
            <p class="text-danger" style="font-size: 13px; font-weight: bold">
              **Chú ý: Copy mã giao dịch vào phần ghi chú khi chuyển khoản
            </p>
            <p class="text-danger" style="font-size: 13px; font-weight: bold">
              ***Chú ý: Khi chuyển khoản xong vui lòng tải ảnh khi giao dịch
              thành công lên hệ thống
            </p>
            <h3>Chuyển khoản ngân hàng</h3>
            <div class="row">
              <div class="col-md-6 b-r">
                <div class="mt-2">
                  <span style="font-size: 15px">Tên ngân hàng:</span><br />
                  <span class="text-success btn_copy" style="font-weight: bold"
                    >TECHCOMBANK <i class="fa fa-files-o" aria-hidden="true"></i
                  ></span>
                </div>
                <div class="mt-2">
                  <span style="font-size: 15px">chi nhánh:</span><br />
                  <span class="text-success btn_copy" style="font-weight: bold"
                    >HA NOI</span
                  >
                </div>
                <div>
                  <span style="font-size: 15px">Người thụ hưởng:</span><br />
                  <span class="text-success btn_copy" style="font-weight: bold"
                    >TRAN VAN KHIEM
                    <i class="fa fa-files-o" aria-hidden="true"></i
                  ></span>
                </div>
                <div class="mt-2">
                  <span style="font-size: 15px">Số tài khoản:</span><br />
                  <span class="text-success btn_copy" style="font-weight: bold"
                    >19032065031991
                    <i class="fa fa-files-o" aria-hidden="true"></i
                  ></span>
                </div>
              </div>
              <div class="col-md-6">
                <div>
                  <span style="font-size: 15px">Số tiền:</span><br />
                  <span class="text-success btn_copy" style="font-weight: bold"
                    ><span class="money" id="money_tran"> 0</span>
                    <i class="fa fa-files-o" aria-hidden="true"></i
                  ></span>
                </div>
                <div>
                  <span style="font-size: 15px">Mã GD:</span><br />
                  <span class="text-success btn_copy" style="font-weight: bold"
                    >TEST801667840540<i
                      class="fa fa-files-o"
                      aria-hidden="true"
                    ></i
                  ></span>
                  <input type="hidden" name="tranid" value="TEST801667840540" />
                </div>
              </div>
              <div class="col-md-12 mt-3">
                <h3>Tải ảnh giao dịch thành công</h3>
                <div class="input-group">
                  <input
                    type="file"
                    id="inputGroupFile"
                    class="form-control"
                    aria-describedby="basic-addon2"
                    accept=".jpg,.jpeg,.png,.gif"
                  />
                </div>
              </div>
            </div>
            <br />
            <span id="msg_err_deposit"></span>
            <label id="msg_err3"></label><br />
            <div style="float: right">
              <button
                @click.prevent="
                  showMsgBox();
                  $bvModal.hide('modal-edit-pass');
                "
                class="btn btn-primary"
                id="btn_wp"
              >
                Xác nhận đã đóng tiền
              </button>
              <button
                type="button"
                class="btn btn-white"
                id="close"
                data-dismiss="modal"
                @click="$bvModal.hide('modal-edit-pass')"
              >
                Đóng
              </button>
            </div>
          </form>
        </div>
      </b-modal>
    </div>
  </Layout>
</template>
