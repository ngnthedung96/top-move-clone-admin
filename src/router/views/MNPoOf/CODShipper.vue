<script>
import Layout from "../../layouts/main.vue";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Quản lý COD Shipper",
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
      title: "Quản lý COD Shipper",
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
          text: "Quản lý COD Shipper",
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
                  <h2 class="card-title">Quản lý COD Shipper</h2>
                  <div class="col-4">
                    <div class="input-group mt-3">
                      <div class="btn-group">
                        <select id="type_co_cod" class="form-control">
                          <option value="total">Tất cả</option>
                          <option value="un_collect_cod">Chưa thu COD</option>
                          <option value="collected_cod">Đã thu COD</option>
                        </select>
                      </div>
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
                  <div class="card-tools" style="float: right">
                    <div class="mt-2">
                      <a class="collapse-statis me-3 text-black">
                        Tổng tiền COD: <label class="total_cod">0 đơn</label>
                      </a>

                      <a class="collapse-statis me-3 text-black">
                        <span class="text-success"
                          ><i class="fa fa-circle"></i
                        ></span>
                        Đã thu: <label class="total_cod_collected">0 đơn</label>
                      </a>

                      <a class="collapse-statis me-3 text-black">
                        <span class="text-warning"
                          ><i class="fa fa-circle"></i
                        ></span>
                        Chưa thu:
                        <label class="total_cod_un_collect">0 đơn</label>
                      </a>
                      <button class="btn btn-primary download_file">
                        Tải File
                      </button>
                    </div>
                  </div>
                </div>
                <div class="clearfix"></div>
                <div class="table-responsive mt-3">
                  <div
                    id="DataTables_Table_0_wrapper"
                    class="dataTables_wrapper dt-bootstrap4 no-footer"
                  >
                    <div class="top"></div>
                    <table
                      class="
                        table table-striped table-hover table_detail_order_deli
                        dataTable
                        no-footer
                      "
                      id="DataTables_Table_0"
                      role="grid"
                    >
                      <thead>
                        <tr role="row">
                          <th
                            class="sorting_disabled"
                            rowspan="1"
                            colspan="1"
                            style="width: 48px"
                          >
                            STT
                          </th>
                          <th
                            class="sorting_disabled dt-body-name"
                            rowspan="1"
                            colspan="1"
                            style="width: 303px"
                          >
                            Trạng thái thanh toán
                          </th>
                          <th
                            class="sorting_disabled dt-body-name"
                            rowspan="1"
                            colspan="1"
                            style="width: 163px"
                          >
                            Nhân Viên
                          </th>
                          <th
                            class="dt-body-right sorting_disabled"
                            rowspan="1"
                            colspan="1"
                            style="width: 112px"
                          >
                            Ký nhận COD
                          </th>
                          <th
                            class="dt-body-right sorting_disabled"
                            rowspan="1"
                            colspan="1"
                            style="width: 112px"
                          >
                            Cần nộp
                          </th>
                          <th
                            class="dt-body-right sorting_disabled"
                            rowspan="1"
                            colspan="1"
                            style="width: 137px"
                          >
                            Đã nộp
                          </th>
                          <th
                            class="dt-body-right sorting_disabled"
                            rowspan="1"
                            colspan="1"
                            style="width: 137px"
                          >
                            Thời gian thu
                          </th>
                          <th
                            class="dt-body-right sorting_disabled"
                            rowspan="1"
                            colspan="1"
                            style="width: 137px"
                          ></th>
                        </tr>
                      </thead>
                      <tbody class="load_data_detail_order_deli">
                        <tr class="odd">
                          <td valign="top" colspan="8" class="dataTables_empty">
                            Không có dữ liệu
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="bottom"></div>
                    <div class="clear">
                      <div
                        class="dataTables_paginate paging_simple_numbers"
                        id="DataTables_Table_0_paginate"
                      >
                        <ul class="pagination">
                          <li
                            class="paginate_button page-item previous disabled"
                            id="DataTables_Table_0_previous"
                          >
                            <a
                              href="#"
                              aria-controls="DataTables_Table_0"
                              data-dt-idx="0"
                              tabindex="0"
                              class="page-link"
                              >Trang trước</a
                            >
                          </li>
                          <li
                            class="paginate_button page-item next disabled"
                            id="DataTables_Table_0_next"
                          >
                            <a
                              href="#"
                              aria-controls="DataTables_Table_0"
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
