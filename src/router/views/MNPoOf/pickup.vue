<script>
import Layout from "../../layouts/main.vue";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Triển khai PICKUP - QL Kiện hàng SHIPPER",
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
      title: "Triển khai PICKUP - QL Kiện hàng SHIPPER",
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
          text: "Triển khai PICKUP - QL Kiện hàng SHIPPER",
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
        <div class="col-lg-6 animated fadeInRight">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title" style="float: left">Kiện hàng (0 đơn)</h5>
              <div class="ibox-title" style="float: right">
                <div class="ibox-tools">
                  <a class="">
                    <span class="style-operate-go-to text-secondary"
                      ><span
                        style="color: rgb(24, 144, 255)"
                        class="_cs_amount_order_create_new"
                        >1</span
                      ><span> đơn chưa triển khai</span>&nbsp;</span
                    ></a
                  >
                  <b-button
                    v-b-modal="'modal-imple-pickup'"
                    class="editbtn_pass"
                    variant="danger  btn-sm"
                    >Triển khai ngay
                  </b-button>
                </div>
              </div>
              <div class="clearfix"></div>
              <div class="card-content mt-2">
                <div class="row">
                  <div class="col-md-12">
                    <span
                      >Đang giao:
                      <strong class="amount_delivering">0 đơn</strong></span
                    ><br />
                    <span
                      >Giao thành công:
                      <strong class="amount_sucess">0 đơn</strong></span
                    ><br />
                    <span
                      >Giao thất bại:
                      <strong class="amount_fail">0 đơn</strong></span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 animated fadeInRight">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Tổng COD dự kiến thu</h5>
              <div class="card-content">
                <div class="row">
                  <div class="col-md-12">
                    <h1 class="no-margins cod_value_pre">0 ₫</h1>
                    <small>Tổng COD dự kiến thu.</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 animated fadeInRight">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Tổng COD thu thực tế</h5>
              <div class="card-content">
                <div class="row">
                  <div class="col-md-12">
                    <h1 class="no-margins cod_value_pre">0 ₫</h1>
                    <small>Tổng COD thực tế.</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12 animated fadeInRight">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">QL Kiện hàng SHIPPER</h5>
              <div class="card-content">
                <div class="row">
                  <div class="table-responsive">
                    <div
                      id="DataTables_Table_0_wrapper"
                      class="dataTables_wrapper dt-bootstrap4 no-footer"
                    >
                      <div class="top"></div>
                      <div class="dataTables_scroll">
                        <div
                          class="dataTables_scrollHead"
                          style="
                            overflow: hidden;
                            position: relative;
                            border: 0px;
                            width: 100%;
                          "
                        >
                          <div
                            class="dataTables_scrollHeadInner"
                            style="
                              box-sizing: content-box;
                              width: 1273px;
                              padding-right: 0px;
                            "
                          >
                            <table
                              class="
                                table
                                table-striped
                                table-hover
                                table_detail_order_deli
                                dataTable
                                no-footer
                              "
                              role="grid"
                              style="margin-left: 0px; width: 1273px"
                            >
                              <thead>
                                <tr role="row">
                                  <th
                                    class="sorting_disabled"
                                    rowspan="1"
                                    colspan="1"
                                    style="width: 53.8281px"
                                  >
                                    STT
                                  </th>
                                  <th
                                    class="sorting_disabled dt-body-name"
                                    rowspan="1"
                                    colspan="1"
                                    style="width: 339.828px"
                                  >
                                    Nhân Viên Giao Hàng
                                  </th>
                                  <th
                                    class="dt-body-right sorting_disabled"
                                    rowspan="1"
                                    colspan="1"
                                    style="width: 125.609px"
                                  >
                                    Tổng Đơn Đi Giao
                                  </th>
                                  <th
                                    class="dt-body-right sorting_disabled"
                                    rowspan="1"
                                    colspan="1"
                                    style="width: 125.609px"
                                  >
                                    Thành Công
                                  </th>
                                  <th
                                    class="dt-body-right sorting_disabled"
                                    rowspan="1"
                                    colspan="1"
                                    style="width: 125.609px"
                                  >
                                    Thất Bại
                                  </th>
                                  <th
                                    class="dt-body-right sorting_disabled"
                                    rowspan="1"
                                    colspan="1"
                                    style="width: 125.609px"
                                  >
                                    Đang Giao
                                  </th>
                                  <th
                                    class="dt-body-right sorting_disabled"
                                    rowspan="1"
                                    colspan="1"
                                    style="width: 125.609px"
                                  >
                                    COD Dự Tính
                                  </th>
                                  <th
                                    class="dt-body-right sorting_disabled"
                                    rowspan="1"
                                    colspan="1"
                                    style="width: 125.609px"
                                  >
                                    COD Thực Tế
                                  </th>
                                  <th
                                    class="dt-body-right sorting_disabled"
                                    rowspan="1"
                                    colspan="1"
                                    style="width: 125.688px"
                                  >
                                    Tỷ Lệ Thành Công
                                  </th>
                                </tr>
                              </thead>
                            </table>
                          </div>
                        </div>
                        <div
                          class="dataTables_scrollBody"
                          style="
                            position: relative;
                            overflow: auto;
                            width: 100%;
                          "
                        >
                          <table
                            class="
                              table
                              table-striped
                              table-hover
                              table_detail_order_deli
                              dataTable
                              no-footer
                            "
                            id="DataTables_Table_0"
                            role="grid"
                            style="width: 100%"
                          >
                            <thead>
                              <tr role="row" style="height: 0px">
                                <th
                                  class="sorting_disabled"
                                  rowspan="1"
                                  colspan="1"
                                  style="
                                    width: 53.8281px;
                                    padding-top: 0px;
                                    padding-bottom: 0px;
                                    border-top-width: 0px;
                                    border-bottom-width: 0px;
                                    height: 0px;
                                  "
                                >
                                  <div
                                    class="dataTables_sizing"
                                    style="height: 0px; overflow: hidden"
                                  >
                                    STT
                                  </div>
                                </th>
                                <th
                                  class="sorting_disabled dt-body-name"
                                  rowspan="1"
                                  colspan="1"
                                  style="
                                    width: 339.828px;
                                    padding-top: 0px;
                                    padding-bottom: 0px;
                                    border-top-width: 0px;
                                    border-bottom-width: 0px;
                                    height: 0px;
                                  "
                                >
                                  <div
                                    class="dataTables_sizing"
                                    style="height: 0px; overflow: hidden"
                                  >
                                    Nhân Viên Giao Hàng
                                  </div>
                                </th>
                                <th
                                  class="dt-body-right sorting_disabled"
                                  rowspan="1"
                                  colspan="1"
                                  style="
                                    width: 125.609px;
                                    padding-top: 0px;
                                    padding-bottom: 0px;
                                    border-top-width: 0px;
                                    border-bottom-width: 0px;
                                    height: 0px;
                                  "
                                >
                                  <div
                                    class="dataTables_sizing"
                                    style="height: 0px; overflow: hidden"
                                  >
                                    Tổng Đơn Đi Giao
                                  </div>
                                </th>
                                <th
                                  class="dt-body-right sorting_disabled"
                                  rowspan="1"
                                  colspan="1"
                                  style="
                                    width: 125.609px;
                                    padding-top: 0px;
                                    padding-bottom: 0px;
                                    border-top-width: 0px;
                                    border-bottom-width: 0px;
                                    height: 0px;
                                  "
                                >
                                  <div
                                    class="dataTables_sizing"
                                    style="height: 0px; overflow: hidden"
                                  >
                                    Thành Công
                                  </div>
                                </th>
                                <th
                                  class="dt-body-right sorting_disabled"
                                  rowspan="1"
                                  colspan="1"
                                  style="
                                    width: 125.609px;
                                    padding-top: 0px;
                                    padding-bottom: 0px;
                                    border-top-width: 0px;
                                    border-bottom-width: 0px;
                                    height: 0px;
                                  "
                                >
                                  <div
                                    class="dataTables_sizing"
                                    style="height: 0px; overflow: hidden"
                                  >
                                    Thất Bại
                                  </div>
                                </th>
                                <th
                                  class="dt-body-right sorting_disabled"
                                  rowspan="1"
                                  colspan="1"
                                  style="
                                    width: 125.609px;
                                    padding-top: 0px;
                                    padding-bottom: 0px;
                                    border-top-width: 0px;
                                    border-bottom-width: 0px;
                                    height: 0px;
                                  "
                                >
                                  <div
                                    class="dataTables_sizing"
                                    style="height: 0px; overflow: hidden"
                                  >
                                    Đang Giao
                                  </div>
                                </th>
                                <th
                                  class="dt-body-right sorting_disabled"
                                  rowspan="1"
                                  colspan="1"
                                  style="
                                    width: 125.609px;
                                    padding-top: 0px;
                                    padding-bottom: 0px;
                                    border-top-width: 0px;
                                    border-bottom-width: 0px;
                                    height: 0px;
                                  "
                                >
                                  <div
                                    class="dataTables_sizing"
                                    style="height: 0px; overflow: hidden"
                                  >
                                    COD Dự Tính
                                  </div>
                                </th>
                                <th
                                  class="dt-body-right sorting_disabled"
                                  rowspan="1"
                                  colspan="1"
                                  style="
                                    width: 125.609px;
                                    padding-top: 0px;
                                    padding-bottom: 0px;
                                    border-top-width: 0px;
                                    border-bottom-width: 0px;
                                    height: 0px;
                                  "
                                >
                                  <div
                                    class="dataTables_sizing"
                                    style="height: 0px; overflow: hidden"
                                  >
                                    COD Thực Tế
                                  </div>
                                </th>
                                <th
                                  class="dt-body-right sorting_disabled"
                                  rowspan="1"
                                  colspan="1"
                                  style="
                                    width: 125.688px;
                                    padding-top: 0px;
                                    padding-bottom: 0px;
                                    border-top-width: 0px;
                                    border-bottom-width: 0px;
                                    height: 0px;
                                  "
                                >
                                  <div
                                    class="dataTables_sizing"
                                    style="height: 0px; overflow: hidden"
                                  >
                                    Tỷ Lệ Thành Công
                                  </div>
                                </th>
                              </tr>
                            </thead>

                            <tbody class="load_data_detail_order_deli">
                              <tr class="odd">
                                <td
                                  valign="top"
                                  colspan="9"
                                  class="dataTables_empty"
                                >
                                  Không có dữ liệu
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div
                          class="dataTables_scrollFoot"
                          style="overflow: hidden; border: 0px; width: 100%"
                        >
                          <div class="dataTables_scrollFootInner">
                            <table
                              class="
                                table
                                table-striped
                                table-hover
                                table_detail_order_deli
                                dataTable
                                no-footer
                              "
                              role="grid"
                              style="margin-left: 0px"
                            >
                              <tfoot></tfoot>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div class="bottom"></div>
                      <div class="clear">
                        <div
                          class="dataTables_paginate paging_simple_numbers"
                          id="DataTables_Table_0_paginate"
                        >
                          <ul class="pagination">
                            <li
                              class="
                                paginate_button
                                page-item
                                previous
                                disabled
                              "
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal">
      <b-modal size="lg" id="modal-imple-pickup" hide-header hide-footer>
        <div class="modal-header">
          <h4 class="modal-title">Triển khai bưu tá</h4>
        </div>
        <div class="modal-body">
          <div style="width: 28%; float: left">
            <select required="" class="form-control" id="load_type_asign">
              <option style="font-weight: bold" value="_un_asign_type">
                Chưa chỉ định
              </option>
              <option style="font-weight: bold" value="_asigned_type">
                Đã chỉ định
              </option>
            </select>
            <div
              class="panel-group mt-2 py-2"
              id="take_order_dock_id"
              style="
                border-top: 1px solid #ced4da;
                max-height: 600px;
                overflow-y: auto;
              "
            >
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a
                      data-toggle="collapse"
                      style="color: #5a93cd"
                      data-parent="#take_order_dock_id"
                      data-id="57"
                      class="commune_cls"
                      >TESTHOP (1)</a
                    >
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div style="width: 71%; float: right">
            <div
              class="btn-toolbar justify-content-between"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div class="btn-group" role="group" aria-label="First group">
                <div class="form-control">
                  <input type="checkbox" id="select_all_asign" />
                  <span style="font-weight: bold">Chọn (0/1)</span>
                </div>
                <select
                  id="_id_load_employ"
                  class="form-control select2-hidden-accessible"
                  tabindex="-1"
                  aria-hidden="true"
                  data-select2-id="_id_load_employ"
                >
                  <option value="0" selected="" data-select2-id="10">
                    Không nhân viên chịu trách nhiệm
                  </option>
                  <option value="3172">testSHIP (3172)</option>
                </select>
              </div>
              <div class="input-group">
                <button class="btn btn-outline-danger" id="asigning_toggle">
                  Chỉ định
                </button>
              </div>
            </div>
            <div class="btn-group" role="group"></div>
            <div style="max-height: 500px; overflow-y: auto">
              <table class="table table-hover table-mail">
                <tbody id="_id_body_order_in_zone">
                  <strong>Vui lòng chọn shop lấy hàng</strong>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </b-modal>
    </div>
  </Layout>
</template>
