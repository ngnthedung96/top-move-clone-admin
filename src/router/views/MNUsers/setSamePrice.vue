<script>
import Layout from "../../layouts/main.vue";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Cài đặt đồng giá cho khách hàng",
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
      title: "Cài đặt đồng giá cho khách hàng",
      items: [
        {
          text: "Trang chủ",
          href: "#",
        },
        {
          text: "Quản lý khách hàng",
          href: "#",
        },
        {
          text: "Cài đặt đồng giá cho khách hàng",
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
                  <h2 class="card-title">Danh sách tài khoản đã đồng giá</h2>
                  <div class="ibox-content">
                    <form id="formSearch" role="form">
                      <div class="row">
                        <div class="col-md-3">
                          <select
                            name="user_id"
                            class="
                              form-control
                              js-example-basic-single
                              select2-hidden-accessible
                            "
                            data-select2-id="1"
                            tabindex="-1"
                            aria-hidden="true"
                          >
                            <option value="0" data-select2-id="3">
                              Chọn tài khoản
                            </option>
                            <option value="57">0387170011 - TESTHOP</option>
                          </select>
                        </div>
                        <div class="col-sm-2">
                          <button class="btn btn-outline-primary" type="submit">
                            <i class="fa fa-search" aria-hidden="true"></i> Tìm
                            kiếm
                          </button>
                        </div>
                      </div>
                    </form>
                    <div class="table-responsive mt-3">
                      <div
                        id="dt_orders_wrapper"
                        class="dataTables_wrapper dt-bootstrap4 no-footer"
                      >
                        <div class="row">
                          <div class="col-sm-12">
                            <div class="table-responsive">
                              <table class="table table-striped">
                                <thead>
                                  <tr>
                                    <th>STT</th>
                                    <th>Tài Khoản</th>
                                    <th>Đồng Gía</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody id="load_data_same_price" style="">
                                  <tr>
                                    <td style="display: none">57</td>
                                    <td>1</td>
                                    <td>
                                      <span style="color: #e1293d !important"
                                        ><strong>TESTHOP</strong></span
                                      >
                                      - testapp213@gmail.com - 0387170011<br />
                                      <label
                                        class="badge bg-success"
                                        style="font-size: 120%"
                                        >TEST APP</label
                                      ><br />
                                    </td>
                                    <td>
                                      <label
                                        class="badge bg-success"
                                        style="font-size: 120%"
                                        >Đang bật</label
                                      ><br /><br />
                                    </td>
                                    <td>
                                      <router-link
                                        to="/"
                                        class="btn btn-outline-warning"
                                      >
                                        <b-icon-pencil-square>
                                        </b-icon-pencil-square>
                                        Sửa
                                      </router-link>
                                      <button
                                        type="button"
                                        class="
                                          btn
                                          ms-2
                                          btn-xs btn-outline-danger
                                          action_dung
                                        "
                                        data-id="57"
                                      >
                                        <i
                                          class="fa fa-times"
                                          aria-hidden="true"
                                        ></i>
                                        Dừng
                                      </button>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td colspan="2">
                                      Đang ở 1/1 Trang. Tổng: 1 bản ghi
                                    </td>
                                    <td colspan="1"></td>
                                    <td>
                                      <div
                                        class="
                                          dataTables_paginate
                                          paging_simple_numbers
                                        "
                                        id="DataTables_Table_0_paginate"
                                      >
                                        <ul class="pagination"></ul>
                                      </div>
                                      <input
                                        type="hidden"
                                        name="current_page"
                                        id="current_page"
                                        class="current_page"
                                        value="1"
                                      />
                                      <input
                                        type="hidden"
                                        name=""
                                        id="total-page"
                                        value="1"
                                      />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div
                              id="dt_orders_processing"
                              class="dataTables_processing card"
                              style="display: none"
                            >
                              <i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>
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
