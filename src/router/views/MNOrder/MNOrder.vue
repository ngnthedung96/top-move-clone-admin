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
                  <button class="btn btn-danger print_order_by_codes">
                    <i class="fa fa-print"></i> In theo mã đơn
                  </button>
                </div>
              </div>
              <div class="card-content">
                <form id="formSearch" role="form">
                  <div class="row nav-link">
                    <div class="col-lg-12">
                      <div class="row">
                        <div class="col-sm-3 m-b-xs">
                          <div class="input-group">
                            <input
                              type="text"
                              class="input-daterange form-control"
                              name="date_range"
                              id="date_range"
                            />
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
                        <input
                          type="hidden"
                          id="order_type_id"
                          value="1"
                          name="order_type"
                        />
                        <div class="col-sm-2 m-b-xs">
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
                        <div class="col-sm-2 m-b-xs">
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
                        <div class="col-sm-2 m-b-xs">
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
                    <div class="col-lg-12">
                      <ul
                        class="
                          navbar-nav
                          d-flex
                          flex-row
                          justify-content-around
                        "
                        style=""
                      >
                        <li
                          class="
                            nav-item
                            px-2
                            py-1
                            me-2
                            border-bottom border-danger
                          "
                        >
                          <a class="nav-link text-black sort-table" href="#"
                            >Tất cả</a
                          >
                        </li>
                        <li
                          class="
                            nav-item
                            px-2
                            py-1
                            me-2
                            border-bottom border-danger
                          "
                        >
                          <a class="nav-link text-black sort-table" href="#"
                            >Tạo mới</a
                          >
                        </li>
                        <li
                          class="
                            nav-item
                            px-2
                            py-1
                            me-2
                            border-bottom border-danger
                          "
                        >
                          <a class="nav-link text-black sort-table" href="#"
                            >Đã lấy</a
                          >
                        </li>
                        <li
                          class="
                            nav-item
                            px-2
                            py-1
                            me-2
                            border-bottom border-danger
                          "
                        >
                          <a class="nav-link text-black sort-table" href="#"
                            >Nhập kho nhận - trả</a
                          >
                        </li>
                        <li
                          class="
                            nav-item
                            px-2
                            py-1
                            me-2
                            border-bottom border-danger
                          "
                        >
                          <a class="nav-link text-black sort-table" href="#"
                            >Đang vận chuyển</a
                          >
                        </li>
                        <li
                          class="
                            nav-item
                            px-2
                            py-1
                            me-2
                            border-bottom border-danger
                          "
                        >
                          <a class="nav-link text-black sort-table" href="#"
                            >Đang chuyển HUB-ĐT</a
                          >
                        </li>
                        <li
                          class="
                            nav-item
                            px-2
                            py-1
                            me-2
                            border-bottom border-danger
                          "
                        >
                          <a class="nav-link text-black sort-table" href="#"
                            >Đã nhập HUB-ĐT</a
                          >
                        </li>
                        <li
                          class="
                            nav-item
                            px-2
                            py-1
                            me-2
                            border-bottom border-danger
                          "
                        >
                          <a class="nav-link text-black sort-table" href="#"
                            >Nhập kho giao</a
                          >
                        </li>
                        <li
                          class="
                            nav-item
                            px-2
                            py-1
                            me-2
                            border-bottom border-danger
                          "
                        >
                          <a class="nav-link text-black sort-table" href="#"
                            >Đang giao hàng</a
                          >
                        </li>
                        <li
                          class="
                            nav-item
                            px-2
                            py-1
                            me-2
                            border-bottom border-danger
                          "
                        >
                          <a class="nav-link text-black sort-table" href="#"
                            >Đã giao hàng</a
                          >
                        </li>
                      </ul>
                      <ul class="navbar-nav d-flex flex-row" style="">
                        <li
                          class="
                            nav-item
                            px-2
                            py-1
                            me-2
                            border-bottom border-danger
                          "
                        >
                          <a class="nav-link text-black sort-table" href="#"
                            >Giao thất bại</a
                          >
                        </li>
                        <li
                          class="
                            nav-item
                            px-2
                            py-1
                            me-2
                            border-bottom border-danger
                          "
                        >
                          <a class="nav-link text-black sort-table" href="#"
                            >Chờ giao lại</a
                          >
                        </li>
                        <li
                          class="
                            nav-item
                            px-2
                            py-1
                            me-2
                            border-bottom border-danger
                          "
                        >
                          <a class="nav-link text-black sort-table" href="#"
                            >Chờ duyệt hoàn</a
                          >
                        </li>
                        <li
                          class="
                            nav-item
                            px-2
                            py-1
                            me-2
                            border-bottom border-danger
                          "
                        >
                          <a class="nav-link text-black sort-table" href="#"
                            >Đơn hoàn</a
                          >
                        </li>
                        <li
                          class="
                            nav-item
                            px-2
                            py-1
                            me-2
                            border-bottom border-danger
                          "
                        >
                          <a class="nav-link text-black sort-table" href="#"
                            >Đã chốt đền</a
                          >
                        </li>
                        <li
                          class="
                            nav-item
                            px-2
                            py-1
                            me-2
                            border-bottom border-danger
                          "
                        >
                          <a class="nav-link text-black sort-table" href="#"
                            >Khác</a
                          >
                        </li>
                        <li
                          class="
                            nav-item
                            px-2
                            py-1
                            me-2
                            border-bottom border-danger
                          "
                        >
                          <a class="nav-link text-black sort-table" href="#"
                            >Hủy</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
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
                    <div class="float-right" style="float: right; width: 19%">
                      <div class="dataTables_length" id="dt_orders_length">
                        <div class="d-flex flex-row" style="position: relative">
                          <p
                            class="d-inline"
                            style="
                              width: 70%;
                              position: absolute;
                              top: 50%;
                              left: 0%;
                              transform: translate(-35%, -50%);
                            "
                          >
                            Hiển thị
                          </p>
                          <select
                            name="dt_orders_length"
                            aria-controls="dt_orders"
                            class="
                              custom-select custom-select-sm
                              form-control form-control-sm
                              d-inline
                            "
                          >
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value="200">200</option>
                          </select>
                          <p
                            class="d-inline ms-1"
                            style="
                              width: 110%;
                              position: relative;
                              bottom: -6px;
                              right: 0.5%;
                            "
                          >
                            đơn hàng
                          </p>
                        </div>
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
                          <td valign="top" colspan="5" class="dataTables_empty">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
