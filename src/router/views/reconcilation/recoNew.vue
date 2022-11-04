<script>
import Layout from "../../layouts/main.vue";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Phiếu đối soát mới",
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
      title: "Phiếu đối soát mới",
      items: [
        {
          text: "Đối soát",
          href: "#",
        },
        {
          text: "Phiếu đối soát mới",
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
};
</script>

<template>
  <Layout>
    <div class="row wrapper border-bottom white-bg page-heading">
      <PageHeader :title="title" :items="items" />
    </div>
    <div class="wrapper wrapper-content">
      <div class="row animated fadeInRight mt-3">
        <div class="col-lg-12" data-select2-id="12">
          <div class="card" data-select2-id="11">
            <div class="card-body">
              <h5 class="card-title">Phiếu đối soát mới</h5>
              <div class="card-content">
                <form id="formSearch" role="form" data-select2-id="formSearch">
                  <div class="row" data-select2-id="9">
                    <div class="col-sm-2">
                      <select
                        name="type_time"
                        id="type_time"
                        class="
                          form-control
                          select2_jq select2-hidden-accessible
                        "
                        data-select2-id="type_time"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option value="time_create" data-select2-id="2">
                          Thời gian tạo phiếu
                        </option>
                        <option value="time_forcontrol">
                          Thời gian đối soát
                        </option>
                        <option value="time_pay">Thời gian thanh toán</option>
                      </select>
                    </div>
                    <div class="col-sm-2 m-b-xs">
                      <div class="input-group">
                        <input
                          type="text"
                          class="input-daterange form-control"
                          name="date_range"
                          id="date_range"
                        />
                      </div>
                    </div>
                    <div class="col-sm-2" data-select2-id="18">
                      <select
                        name="status"
                        class="
                          form-control
                          select2_jq select2-hidden-accessible
                        "
                        data-select2-id="status"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option value="-1" selected="" data-select2-id="4">
                          Tất cả đối soát
                        </option>
                        <option value="0" data-select2-id="19">
                          Chưa đối soát
                        </option>
                        <option value="1" data-select2-id="20">
                          Đã đối soát
                        </option>
                      </select>
                    </div>
                    <div class="col-sm-2" data-select2-id="8">
                      <select
                        name="status_transaction"
                        id="status_transaction"
                        class="
                          form-control
                          select2_jq select2-hidden-accessible
                        "
                        data-select2-id="status_transaction"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option value="-1" selected="" data-select2-id="6">
                          Tất cả thanh toán
                        </option>
                        <option value="0" data-select2-id="15">
                          Chưa thanh toán
                        </option>
                        <option value="1" data-select2-id="16">
                          Đã thanh toán
                        </option>
                      </select>
                    </div>
                    <div class="col-sm-2">
                      <button class="btn btn-primary" type="submit">
                        <i class="fa fa-search" aria-hidden="true"></i> Tìm kiếm
                      </button>
                    </div>
                  </div>
                </form>
                <br />
                <div class="clearfix"></div>
                <br />
                <!-- <div class="alert alert-info" style="text-align: center"><span ><span id="display_record"></span> kết quả được tìm thấy</span></div> -->
                <div class="table-responsive">
                  <div
                    id="dt_orders_wrapper"
                    class="dataTables_wrapper dt-bootstrap4"
                  >
                    <div class="float-left">
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
                              id="export_excel_by_lot"
                            ></i>
                            Excel</span
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
                          style=""
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
                          <option value="10">10</option>
                          <option value="20">20</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                          <option value="-1">All</option>
                        </select>
                        <span
                          class="d-flex flex-column justify-content-center"
                          style="width: 44%"
                          >bản ghi</span
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
                      class="table table-striped dataTable"
                      id="dt_orders"
                      role="grid"
                      aria-describedby="dt_orders_info"
                      style="width: 1429px"
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
                            aria-label="
                                                    
                                                        
                                                        
                                                    
                                                : activate to sort column descending"
                            style="width: 35px"
                          >
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                          </th>
                          <th
                            class="sorting_disabled"
                            tabindex="0"
                            aria-controls="dt_orders"
                            rowspan="1"
                            colspan="1"
                            aria-label="STT: activate to sort column ascending"
                            style="width: 27px"
                          >
                            STT
                          </th>
                          <th
                            class="sorting_disabled"
                            tabindex="0"
                            aria-controls="dt_orders"
                            rowspan="1"
                            colspan="1"
                            aria-label="Phiếu đối soát: activate to sort column ascending"
                            style="width: 283px"
                          >
                            Phiếu đối soát
                          </th>
                          <th
                            class="sorting_disabled"
                            tabindex="0"
                            aria-controls="dt_orders"
                            rowspan="1"
                            colspan="1"
                            aria-label="Đơn hàng: activate to sort column ascending"
                            style="width: 127px"
                          >
                            Đơn hàng
                          </th>
                          <th
                            class="sorting_disabled dt-center"
                            tabindex="0"
                            aria-controls="dt_orders"
                            rowspan="1"
                            colspan="1"
                            aria-label="Tổng COD : activate to sort column ascending"
                            style="width: 211px"
                          >
                            Tổng COD
                          </th>
                          <th
                            class="sorting_disabled"
                            tabindex="0"
                            aria-controls="dt_orders"
                            rowspan="1"
                            colspan="1"
                            aria-label="Các loại phí : activate to sort column ascending"
                            style="width: 127px"
                          >
                            Các loại phí
                          </th>
                          <th
                            class="sorting_disabled dt-center"
                            tabindex="0"
                            aria-controls="dt_orders"
                            rowspan="1"
                            colspan="1"
                            aria-label="Thực nhận: activate to sort column ascending"
                            style="width: 226px"
                          >
                            Thực nhận
                          </th>
                          <th
                            class="sorting_disabled"
                            tabindex="0"
                            aria-controls="dt_orders"
                            rowspan="1"
                            colspan="1"
                            aria-label="Chức năngg: activate to sort column ascending"
                            style="width: 243px"
                          >
                            Chức năng
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="odd">
                          <td valign="top" colspan="8" class="dataTables_empty">
                            <p class="text-center">Không có bản ghi</p>
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr style="font-size: 18px; font-weight: 700">
                          <td colspan="3" rowspan="1">TỔNG</td>
                          <td id="total_orders" rowspan="1" colspan="1">
                            0 đơn
                          </td>
                          <td
                            id="total_cod_num"
                            rowspan="1"
                            colspan="1"
                            class="dt-center"
                          >
                            0
                          </td>
                          <td id="total_fee_num" rowspan="1" colspan="1">0</td>
                          <td
                            id="total_received_num"
                            rowspan="1"
                            colspan="1"
                            class="dt-center"
                          >
                            0
                          </td>
                          <td
                            id="total_received_num"
                            rowspan="1"
                            colspan="1"
                            class="dt-center"
                          ></td>
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
                          Hiển thị kết quả từ 0 đến 0 của 0 bản ghi
                        </div>
                      </div>
                      <div class="col-sm-4"></div>
                      <div class="col-sm-4">
                        <div
                          class="dataTables_paginate paging_simple_numbers"
                          id="dt_orders_paginate"
                        >
                          <ul class="pagination justify-content-end">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
