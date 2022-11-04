<script>
import Layout from "../../layouts/main.vue";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Quản lý sản phẩm",
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
      title: "Quản lý sản phẩm",
      items: [
        {
          text: "Kho sản phẩm",
          href: "#",
        },
        {
          text: "Quản lý sản phẩm",
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
    <div class="wrapper wrapper-content animated fadeInRight">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <div class="card-title">
                <button
                  type="button"
                  class="btn btn-danger"
                  id="excel_click"
                  data-toggle="modal"
                  data-target="#excel_pr"
                >
                  <i class="fa fa-upload" aria-hidden="true"></i> Tải lên Excel
                </button>
              </div>
              <div class="card-content">
                <form id="formSearch" role="form">
                  <input type="hidden" name="_function" value="search" />

                  <div class="row">
                    <div class="col-sm-3">
                      <input
                        type="text"
                        name="barcode"
                        id="barcode"
                        class="form-control"
                        placeholder="Mã sản phẩm"
                      />
                    </div>
                    <div class="col-sm-2">
                      <select name="status" class="form-control">
                        <option value="">Chọn trạng thái</option>
                        <option value="0">Ngưng bán</option>
                        <option value="1">Đang bán</option>
                      </select>
                    </div>
                    <div class="col-sm-2">
                      <select
                        class="form-control input-radius-15"
                        name="category"
                        id="category"
                      >
                        <option value="">Danh mục sản phẩm</option>
                        <option value="1">Gaming</option>
                        <option value="2">Sách &amp; Sưu tầm</option>
                        <option value="3">Thú cưng</option>
                        <option value="4">Mỹ phẩm</option>
                        <option value="5">Thời trang</option>
                        <option value="6">Quà tặng (Mẫu, thiệp cảm ơn)</option>
                        <option value="7">Thể thao</option>
                        <option value="8">Linh kiện điện tử</option>
                        <option value="9">Điện thoại / máy tính</option>
                      </select>
                    </div>
                    <div class="col-sm-2">
                      <button type="submit" class="btn btn-primary search_date">
                        <i class="fa fa-search" aria-hidden="true"></i> Tìm kiếm
                      </button>
                    </div>
                  </div>
                </form>
                <div class="table-responsive">
                  <div
                    id="dt_orders_wrapper"
                    class="dataTables_wrapper dt-bootstrap4 no-footer"
                  >
                    <div class="float-left">
                      <div class="dt-buttons">
                        <button
                          class="dt-button btn btn-primary mt-2"
                          tabindex="0"
                          aria-controls="dt_orders"
                          type="button"
                        >
                          <span
                            ><i
                              class="fa fa-file-excel-o"
                              aria-hidden="true"
                              id="text_export_excel"
                            ></i>
                            Xuất Excel</span
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
                      class="
                        table table-striped table_product
                        no-footer
                        dataTable
                      "
                      id="dt_orders"
                      role="grid"
                      aria-describedby="dt_orders_info"
                      style="width: 1277px"
                    >
                      <thead>
                        <tr role="row">
                          <th
                            width="3%"
                            class="sorting_disabled"
                            tabindex="0"
                            aria-controls="dt_orders"
                            rowspan="1"
                            colspan="1"
                            aria-sort="ascending"
                            aria-label="#: activate to sort column descending"
                            style="width: 13px"
                          >
                            #
                          </th>
                          <th
                            class="sorting_disabled"
                            tabindex="0"
                            aria-controls="dt_orders"
                            rowspan="1"
                            colspan="1"
                            aria-label=": activate to sort column ascending"
                            style="width: 110px"
                          ></th>
                          <th
                            class="sorting_disabled"
                            tabindex="0"
                            aria-controls="dt_orders"
                            rowspan="1"
                            colspan="1"
                            aria-label="Tên SP: activate to sort column ascending"
                            style="width: 132px"
                          >
                            Tên SP
                          </th>
                          <th
                            class="sorting_disabled"
                            tabindex="0"
                            aria-controls="dt_orders"
                            rowspan="1"
                            colspan="1"
                            aria-label="Thông tin SP: activate to sort column ascending"
                            style="width: 212px"
                          >
                            Thông tin SP
                          </th>
                          <th
                            width="10%"
                            class="sorting_disabled"
                            tabindex="0"
                            aria-controls="dt_orders"
                            rowspan="1"
                            colspan="1"
                            aria-label="Danh mục: activate to sort column ascending"
                            style="width: 100px"
                          >
                            Danh mục
                          </th>
                          <th
                            class="sorting_disabled"
                            tabindex="0"
                            aria-controls="dt_orders"
                            rowspan="1"
                            colspan="1"
                            aria-label="SL: activate to sort column ascending"
                            style="width: 73px"
                          >
                            SL
                          </th>
                          <th
                            width="12%"
                            class="sorting_disabled"
                            tabindex="0"
                            aria-controls="dt_orders"
                            rowspan="1"
                            colspan="1"
                            aria-label="Giá SP: activate to sort column ascending"
                            style="width: 128px"
                          >
                            Giá SP
                          </th>
                          <th
                            class="sorting_disabled"
                            tabindex="0"
                            aria-controls="dt_orders"
                            rowspan="1"
                            colspan="1"
                            aria-label="Trạng thái: activate to sort column ascending"
                            style="width: 183px"
                          >
                            Trạng thái
                          </th>
                          <th
                            class="sorting_disabled"
                            tabindex="0"
                            aria-controls="dt_orders"
                            rowspan="1"
                            colspan="1"
                            aria-label="Thao tác: activate to sort column ascending"
                            style="width: 160px"
                          >
                            Thao tác
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" class="odd">
                          <td>1</td>
                          <td>
                            <img
                              src="https://www.dropbox.com/s/jje9fyfkj5asuqa/topmove_%20%2812%29.png?raw=1"
                              width="100"
                            />
                          </td>
                          <td>
                            <span
                              class="copy_code_best text-danger"
                              data-code="bát đũa"
                              ><strong>bát đũa</strong></span
                            ><br />Thời gian tạo: 24-10-2022 15:36:24
                          </td>
                          <td>
                            <div>
                              <div style="overflow: hidden">
                                <span class="float-left">Mã barcode:</span
                                ><span
                                  style="
                                    font-weight: 700 !important;
                                    float: right;
                                  "
                                  >batdua</span
                                ><br />
                              </div>
                              <div style="overflow: hidden">
                                <span class="float-left">Mã SKU:</span
                                ><span
                                  style="
                                    font-weight: 700 !important;
                                    float: right;
                                  "
                                  >bat-to</span
                                ><br />
                              </div>
                              <div style="overflow: hidden">
                                <span class="float-left">Khối lượng:</span
                                ><span
                                  style="
                                    font-weight: 700 !important;
                                    float: right;
                                  "
                                  >0.7 Kg</span
                                ><br />
                              </div>
                              <div style="overflow: hidden">
                                <div class="row">
                                  <div class="col-4">
                                    <span
                                      >Dài:
                                      <span style="font-weight: 700 !important"
                                        >5 cm</span
                                      ></span
                                    >
                                  </div>
                                  <div class="col-4">
                                    <span
                                      >Rộng:
                                      <span style="font-weight: 700 !important"
                                        >5 cm</span
                                      ></span
                                    >
                                  </div>
                                  <div class="col-4">
                                    <span
                                      >Cao:
                                      <span
                                        style="
                                          font-weight: 700 !important;
                                          float: right;
                                        "
                                        >5 cm</span
                                      ></span
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <label class="p-1 rounded bg-primary text-white"
                              ><strong>Máy Móc</strong></label
                            >
                          </td>
                          <td>
                            <label class="p-1 rounded bg-primary text-white"
                              >0</label
                            >
                          </td>
                          <td>
                            <div>
                              <div style="overflow: hidden">
                                <span class="float-left">Giá nhập:</span
                                ><span
                                  style="
                                    font-weight: 700 !important;
                                    float: right;
                                  "
                                  >8,000 đ</span
                                ><br />
                              </div>
                              <div style="overflow: hidden">
                                <span class="float-left">Giá bán:</span
                                ><span
                                  style="
                                    font-weight: 700 !important;
                                    float: right;
                                  "
                                  >15,000 đ</span
                                ><br />
                              </div>
                              <div style="overflow: hidden">
                                <span class="float-left">Giá sỉ:</span
                                ><span
                                  style="
                                    font-weight: 700 !important;
                                    float: right;
                                  "
                                  >13,500 đ</span
                                ><br />
                              </div>
                            </div>
                          </td>
                          <td>
                            <label class="p-1 rounded bg-warning text-white"
                              ><strong>Ngưng bán</strong></label
                            ><br />
                            <h5 class="text-danger">
                              <strong> HẾT HÀNG</strong>
                            </h5>
                          </td>
                          <td>
                            <button
                              class="
                                btn btn-outline-success btn-xs
                                backbtn
                                mb-2
                              "
                              data-id-back="24"
                              type="button"
                            >
                              <i class="fa fa-undo" aria-hidden="true"></i> Mở
                              bán</button
                            ><button
                              type="button"
                              class="btn btn-outline-info btn-xs nhapkho mb-2"
                              data-id="24"
                              data-toggle="modal"
                              data-target="#addStock"
                            >
                              <i class="fa fa-plus" aria-hidden="true"></i> Nhập
                              kho</button
                            ><a
                              href="edit_product.php?id=24"
                              class="btn btn-xs btn-outline btn-dark"
                              ><i class="fa fa-wrench"></i> Sửa</a
                            >
                          </td>
                        </tr>
                        <tr role="row" class="even">
                          <td>2</td>
                          <td>
                            <img
                              src="https://www.dropbox.com/s/f1etdh2wnexaizg/topmove_%20%284%29.png?raw=1"
                              width="100"
                            />
                          </td>
                          <td>
                            <span
                              class="copy_code_best text-danger"
                              data-code="sách cổ"
                              ><strong>sách cổ</strong></span
                            ><br />Thời gian tạo: 21-10-2022 23:43:30
                          </td>
                          <td>
                            <div>
                              <div style="overflow: hidden">
                                <span class="float-left">Mã barcode:</span
                                ><span
                                  style="
                                    font-weight: 700 !important;
                                    float: right;
                                  "
                                  >book</span
                                ><br />
                              </div>
                              <div style="overflow: hidden">
                                <span class="float-left">Mã SKU:</span
                                ><span
                                  style="
                                    font-weight: 700 !important;
                                    float: right;
                                  "
                                  >sach</span
                                ><br />
                              </div>
                              <div style="overflow: hidden">
                                <span class="float-left">Khối lượng:</span
                                ><span
                                  style="
                                    font-weight: 700 !important;
                                    float: right;
                                  "
                                  >0.5 Kg</span
                                ><br />
                              </div>
                              <div style="overflow: hidden">
                                <div class="row">
                                  <div class="col-4">
                                    <span
                                      >Dài:
                                      <span style="font-weight: 700 !important"
                                        >5 cm</span
                                      ></span
                                    >
                                  </div>
                                  <div class="col-4">
                                    <span
                                      >Rộng:
                                      <span style="font-weight: 700 !important"
                                        >5 cm</span
                                      ></span
                                    >
                                  </div>
                                  <div class="col-4">
                                    <span
                                      >Cao:
                                      <span
                                        style="
                                          font-weight: 700 !important;
                                          float: right;
                                        "
                                        >5 cm</span
                                      ></span
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <label class="p-1 bg-primary rounded text-white"
                              ><strong>Gaming</strong></label
                            >
                          </td>
                          <td>
                            <label class="p-1 bg-primary rounded text-white"
                              ><strong>41</strong></label
                            >
                          </td>
                          <td>
                            <div>
                              <div style="overflow: hidden">
                                <span class="float-left">Giá nhập:</span
                                ><span
                                  style="
                                    font-weight: 700 !important;
                                    float: right;
                                  "
                                  >20,000 đ</span
                                ><br />
                              </div>
                              <div style="overflow: hidden">
                                <span class="float-left">Giá bán:</span
                                ><span
                                  style="
                                    font-weight: 700 !important;
                                    float: right;
                                  "
                                  >29,000 đ</span
                                ><br />
                              </div>
                              <div style="overflow: hidden">
                                <span class="float-left">Giá sỉ:</span
                                ><span
                                  style="
                                    font-weight: 700 !important;
                                    float: right;
                                  "
                                  >27,000 đ</span
                                ><br />
                              </div>
                            </div>
                          </td>
                          <td>
                            <label class="p-1 bg-warning rounded text-white"
                              ><strong>Ngưng bán</strong></label
                            >
                          </td>
                          <td>
                            <button
                              class="
                                btn btn-outline-success btn-xs
                                backbtn
                                mb-2
                              "
                              data-id-back="23"
                              type="button"
                            >
                              <i class="fa fa-undo" aria-hidden="true"></i> Mở
                              bán</button
                            ><button
                              type="button"
                              class="btn btn-outline-info btn-xs nhapkho mb-2"
                              data-id="23"
                              data-toggle="modal"
                              data-target="#addStock"
                            >
                              <i class="fa fa-plus" aria-hidden="true"></i> Nhập
                              kho</button
                            ><a
                              href="edit_product.php?id=23"
                              class="btn btn-xs btn-outline btn-dark"
                              ><i class="fa fa-wrench"></i> Sửa</a
                            >
                          </td>
                        </tr>
                        <tr role="row" class="odd">
                          <td>3</td>
                          <td>
                            <img
                              src="https://www.dropbox.com/s/7wiaxiqed1jqb30/topmove_.png?raw=1"
                              width="100"
                            />
                          </td>
                          <td>
                            <span
                              class="copy_code_best text-danger"
                              data-code="cơm rang dưa bò"
                              ><strong>cơm rang dưa bò</strong></span
                            ><br />Thời gian tạo: 20-10-2022 14:56:22
                          </td>
                          <td>
                            <div>
                              <div style="overflow: hidden">
                                <span class="float-left">Mã barcode:</span
                                ><span
                                  style="
                                    font-weight: 700 !important;
                                    float: right;
                                  "
                                ></span
                                ><br />
                              </div>
                              <div style="overflow: hidden">
                                <span class="float-left">Mã SKU:</span
                                ><span
                                  style="
                                    font-weight: 700 !important;
                                    float: right;
                                  "
                                  >comrang</span
                                ><br />
                              </div>
                              <div style="overflow: hidden">
                                <span class="float-left">Khối lượng:</span
                                ><span
                                  style="
                                    font-weight: 700 !important;
                                    float: right;
                                  "
                                  >2 Kg</span
                                ><br />
                              </div>
                              <div style="overflow: hidden">
                                <div class="row">
                                  <div class="col-4">
                                    <span
                                      >Dài:
                                      <span style="font-weight: 700 !important"
                                        >5 cm</span
                                      ></span
                                    >
                                  </div>
                                  <div class="col-4">
                                    <span
                                      >Rộng:
                                      <span style="font-weight: 700 !important"
                                        >5 cm</span
                                      ></span
                                    >
                                  </div>
                                  <div class="col-4">
                                    <span
                                      >Cao:
                                      <span
                                        style="
                                          font-weight: 700 !important;
                                          float: right;
                                        "
                                        >5 cm</span
                                      ></span
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <label class="p-1 bg-primary rounded text-white"
                              ><strong>Gaming</strong></label
                            >
                          </td>
                          <td>
                            <label class="p-1 bg-primary rounded text-white"
                              ><strong>50</strong></label
                            >
                          </td>
                          <td>
                            <div>
                              <div style="overflow: hidden">
                                <span class="float-left">Giá nhập:</span
                                ><span
                                  style="
                                    font-weight: 700 !important;
                                    float: right;
                                  "
                                  >0 đ</span
                                ><br />
                              </div>
                              <div style="overflow: hidden">
                                <span class="float-left">Giá bán:</span
                                ><span
                                  style="
                                    font-weight: 700 !important;
                                    float: right;
                                  "
                                  >35,000 đ</span
                                ><br />
                              </div>
                              <div style="overflow: hidden">
                                <span class="float-left">Giá sỉ:</span
                                ><span
                                  style="
                                    font-weight: 700 !important;
                                    float: right;
                                  "
                                  >32,000 đ</span
                                ><br />
                              </div>
                            </div>
                          </td>
                          <td>
                            <label class="p-1 bg-success rounded text-white"
                              ><strong>Đang bán</strong></label
                            >
                          </td>
                          <td>
                            <button
                              class="btn btn-outline-danger btn-xs stopbtn mb-2"
                              data-id-stop="22"
                              type="button"
                            >
                              <i class="fa fa-ban" aria-hidden="true"></i> Dừng
                              bán</button
                            ><button
                              type="button"
                              class="btn btn-outline-info btn-xs nhapkho mb-2"
                              data-id="22"
                              data-toggle="modal"
                              data-target="#addStock"
                            >
                              <i class="fa fa-plus" aria-hidden="true"></i> Nhập
                              kho</button
                            ><a
                              href="edit_product.php?id=22"
                              class="btn btn-xs btn-outline btn-dark"
                              ><i class="fa fa-wrench"></i> Sửa</a
                            >
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
                          Hiển thị kết quả từ 1 đến 10 của 10 bản ghi
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
                            <li class="paginate_button page-item active">
                              <a
                                href="#"
                                aria-controls="dt_orders"
                                data-dt-idx="1"
                                tabindex="0"
                                class="page-link"
                                >1</a
                              >
                            </li>
                            <li
                              class="paginate_button page-item next disabled"
                              id="dt_orders_next"
                            >
                              <a
                                href="#"
                                aria-controls="dt_orders"
                                data-dt-idx="2"
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
