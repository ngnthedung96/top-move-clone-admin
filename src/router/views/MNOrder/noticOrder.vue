<script>
import Layout from "../../layouts/main.vue";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Thông báo",
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
      title: "Thông báo",
      items: [
        {
          text: "Quản lý đơn hàng",
          href: "#",
        },
        {
          text: "Thông báo",
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
      <div class="row">
        <div class="col-lg-3">
          <div class="card">
            <div class="card-body mailbox-content">
              <div class="sort-tool">
                <h5 class="card-title">BỘ LỌC</h5>
                <ul
                  class="folder-list m-b-md"
                  style="padding: 0px; list-style: none"
                  id="load_static_notification"
                >
                  <!-- <li><a id="total"> <i class="fa fa-clock-o"></i> Tất cả <span class="label label-warning float-right" >2</span></a></li> -->
                  <li>
                    <a
                      id="new"
                      class="
                        d-flex
                        flex-row
                        justify-content-between
                        py-2
                        border-bottom border-black
                        text-black
                      "
                    >
                      <i
                        class="
                          fa fa-eye-slash
                          d-flex
                          flex-column
                          justify-content-center
                        "
                        aria-hidden="true"
                      ></i>
                      <span class="d-flex flex-column justify-content-center">
                        Chưa xem
                      </span>
                      <span class="px-2 py-1 bg-danger rounded text-white"
                        >0</span
                      >
                    </a>
                  </li>
                  <li>
                    <a
                      id="accept"
                      class="
                        d-flex
                        flex-row
                        justify-content-between
                        py-2
                        border-bottom border-black
                        text-black
                      "
                    >
                      <i
                        class="
                          fa fa-eye
                          d-flex
                          flex-column
                          justify-content-center
                        "
                        aria-hidden="true"
                      ></i>
                      <span class="d-flex flex-column justify-content-center">
                        Đã xem
                      </span>
                      <span class="px-2 py-1 bg-success rounded text-white"
                        >0</span
                      ></a
                    >
                  </li>
                  <li>
                    <a
                      id="reject"
                      class="
                        d-flex
                        flex-row
                        justify-content-between
                        py-2
                        border-bottom border-black
                        text-black
                      "
                      ><i
                        class="
                          fa fa-trash
                          d-flex
                          flex-column
                          justify-content-center
                        "
                        aria-hidden="true"
                      ></i>
                      <span class="d-flex flex-column justify-content-center">
                        Đã xóa
                      </span>
                      <span class="px-2 py-1 bg-danger rounded text-white"
                        >0</span
                      ></a
                    >
                  </li>
                  <!-- <li><a  id="agr"><i class="fa fa-handshake-o" aria-hidden="true"></i></i> Đồng thuận <span class="label label-danger float-right" >0</span></a></li>
<li><a  id="un_agr"><i class="fa fa-ban" aria-hidden="true"></i></i> Không đồng thuận<span class="label label-muted float-right" ></span></a></li> -->
                </ul>
                <div class="clearfix"></div>
              </div>
              <div class="sort-contaier">
                <h5 class="card-title">PHÂN LOẠI</h5>
                <ul
                  class="folder-list m-b-md"
                  style="padding: 0px; list-style: none"
                  id="load_static_notification"
                >
                  <!-- <li><a id="total"> <i class="fa fa-clock-o"></i> Tất cả <span class="label label-warning float-right" >2</span></a></li> -->
                  <li>
                    <a
                      id="new"
                      class="
                        d-flex
                        flex-row
                        justify-content-between
                        py-2
                        border-bottom border-black
                        text-black
                      "
                    >
                      <span
                        class="px-3 py-1 bg-primary rounded-circle text-white"
                      ></span>
                      <span class="d-flex flex-column justify-content-center">
                        Lần 1
                      </span>
                      <span class="px-2 py-1 bg-primary rounded text-white"
                        >0</span
                      >
                    </a>
                  </li>
                  <li>
                    <a
                      id="accept"
                      class="
                        d-flex
                        flex-row
                        justify-content-between
                        py-2
                        border-bottom border-black
                        text-black
                      "
                    >
                      <span
                        class="px-3 py-1 bg-warning rounded-circle text-white"
                      ></span>
                      <span class="d-flex flex-column justify-content-center">
                        Lần 2
                      </span>
                      <span class="px-2 py-1 bg-warning rounded text-white"
                        >0</span
                      ></a
                    >
                  </li>
                  <li>
                    <a
                      id="reject"
                      class="
                        d-flex
                        flex-row
                        justify-content-between
                        py-2
                        border-bottom border-black
                        text-black
                      "
                    >
                      <span
                        class="px-3 py-1 bg-danger rounded-circle text-white"
                      ></span>
                      <span class="d-flex flex-column justify-content-center">
                        Trên 3 lần
                      </span>
                      <span class="px-2 py-1 bg-danger rounded text-white"
                        >0</span
                      ></a
                    >
                  </li>
                </ul>
                <div class="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-9 animated fadeInRight">
          <div class="card">
            <div class="card-body">
              <form id="formSearch" role="form">
                <div class="mail-box-header">
                  <h2 class="card-title">
                    Thông báo (<span id="total_noti">0</span>)
                  </h2>
                  <div class="mail-tools tooltip-demo m-t-md">
                    <div class="btn-group" style="float: right">
                      <div class="row">
                        <div class="col-sm-4 m-b-xs">
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              name="code"
                              id="code"
                              placeholder="Mã đơn hàng"
                            />
                          </div>
                        </div>
                        <div class="col-sm-4 m-b-xs">
                          <div class="input-group">
                            <input
                              type="text"
                              class="input-daterange form-control"
                              name="date_range"
                              id="date_range"
                            />
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <button
                            class="btn btn-outline-secondary"
                            id="btn-search"
                            type="submit"
                            style=""
                          >
                            Tìm kiếm
                          </button>
                          <p id="msg_err" style="display: none">
                            Xin mời chờ...<img
                              src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      class="btn btn-outline-secondary btn-sm m-1"
                      data-toggle="tooltip"
                      data-placement="left"
                      title=""
                      id="refresh"
                      data-original-title="Tải lại"
                    >
                      <i class="fa fa-refresh"></i> Tải lại
                    </button>
                    <button
                      class="btn btn-primary btn-sm m-1"
                      data-style="zoom-in"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      id="seened"
                      data-original-title="Đánh dấu đã đọc"
                    >
                      <i class="fa fa-eye"></i>
                    </button>
                    <button
                      class="btn btn-primary btn-sm m-1"
                      data-style="zoom-in"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      id="seened_all"
                      data-original-title="Đánh dấu đã đọc tất cả"
                    >
                      <i class="fa fa-eye"></i> Đánh dấu đã đọc tất cả
                    </button>
                    <button class="btn btn-danger btn-sm m-1">
                      <span class="ladda-label"
                        ><i class="fa fa-trash"></i> </span
                      ><span class="ladda-spinner"></span>
                      <div class="ladda-progress" style="width: 0px"></div>
                    </button>
                    <br />
                    <b-dropdown
                      id="dropdown-1"
                      text="Xuất Excel"
                      variant="success btn-sm m-1"
                    >
                      <b-dropdown-item>First Action</b-dropdown-item>
                      <b-dropdown-item>Second Action</b-dropdown-item>
                      <b-dropdown-item>Third Action</b-dropdown-item>
                      <b-dropdown-divider></b-dropdown-divider>
                      <b-dropdown-item active>Active action</b-dropdown-item>
                      <b-dropdown-item disabled
                        >Disabled action</b-dropdown-item
                      >
                    </b-dropdown>
                    <b-button
                      v-b-modal="'modal-edit-print'"
                      class="export_excel_order_by_codes"
                      variant="success btn-sm "
                    >
                      Xuất Excel theo đơn
                    </b-button>
                  </div>
                </div>
                <div class="mail-box">
                  <table class="table table-hover table-mail">
                    <tbody id="load_data_notification_order_fail">
                      <tr>
                        <td colspan="2">
                          <strong>Không có bản ghi nào</strong>
                        </td>
                        <td colspan="3"></td>
                        <td>
                          <div
                            class="
                              dataTables_paginate
                              paging_simple_numbers
                              loat-right
                            "
                            id="DataTables_Table_0_paginate"
                          >
                            <ul class="pagination float-right"></ul>
                          </div>
                          <input
                            type="hidden"
                            name="current_page"
                            id="current_page"
                            value="1"
                          />
                          <input
                            type="hidden"
                            name=""
                            id="total-page"
                            value="0"
                          />
                        </td>
                      </tr>
                      <input
                        type="hidden"
                        name="total_noti_add"
                        id="total_noti_add"
                        value="0"
                      />

                      <input
                        type="hidden"
                        id="data_to_mark"
                        data-id="0"
                        value=""
                      />
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal">
      <b-modal id="modal-edit-print" hide-header hide-footer>
        <div class="modal-header justify-content-center">
          <h4 class="modal-title d-flex justify-content-center">
            Xuất Excel đơn hàng
          </h4>
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
              Xuất đơn hàng
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
        </div>
      </b-modal>
    </div>
  </Layout>
</template>
