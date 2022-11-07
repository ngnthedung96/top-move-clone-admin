<script>
import Layout from "../../layouts/main.vue";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Gia hạn gói cước",
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
      title: "Gia hạn gói cước",
      items: [
        {
          text: "Trang chủ",
          href: "#",
        },
        {
          text: "Tài khoản FC",
          href: "#",
        },
        {
          text: "Gia hạn gói cước",
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
        <div class="col-lg-3">
          <div class="card">
            <div class="card-body pack-in4">
              <h5 class="card-title">Thông tin gói cước đang sử dụng</h5>
              <div class="mt-3 pack-content">
                <span> <b-icon-credit-card class="me-1"></b-icon-credit-card> Gói cước đang sử dụng: <strong>1 tháng</strong></span><br>
                <span><b-icon-clock class="me-1"></b-icon-clock>Ngày hết hạn: <strong>05-10-2030</strong></span><br>
                <hr>
                <div class="float-right">
                  <b-button
                    v-b-modal="'modal-edit-pass'"
                    class="editbtn_pass"
                    variant="primary  btn-sm"
                    >Tạo phiếu gia hạn
                    <b-icon-key rotate="125"></b-icon-key>
                  </b-button>
                </div>
                <div class="clearfix"></div>
  
            </div>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
        <div class="col-lg-9 animated fadeInRight">
          <div class="card">
            <div class="card-body">
              <form id="formSearch" role="form">
                <div class="mail-box-header">
                  <h2 class="card-title">
                    Gia hạn gói cước (<span id="total_noti">0</span>)
                  </h2>
                  <div class="ibox-content">             
                    <form id="formSearch" role="form">
                        <div class="row">
                            <div class="col-sm-2">
                                <select name="status" class="form-control select2_jq select2-hidden-accessible" data-select2-id="status" tabindex="-1" aria-hidden="true">
                                    <option value="0" selected="" data-select2-id="2">Tất cả lệnh</option>
                                    <option value="1">Chờ duyệt</option> 
                                    <option value="2">Đã duyệt</option> 
                                    <option value="-1">Đã hủy</option> 
                                </select>
                            </div>
                            <div class="col-sm-2"><button class="btn  btn-outline-primary" type="submit"><i class="fa fa-search" aria-hidden="true"></i> Tìm kiếm</button></div> 
                        </div>
                    </form>
                    <div class="table-responsive mt-3">
                        <div id="dt_orders_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
                          <div class="row">
                            <div class="col-sm-12 col-md-6">
                              <div style=" width: 50%">
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
                            >bản ghi</span
                          >
                        </div>
                      </div>
                          </div>
                        <div class="col-sm-12 col-md-6">

                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <table class="table table-striped no-footer dataTable" id="dt_orders" role="grid" aria-describedby="dt_orders_info" >
                                        <thead>
                                            <tr role="row">
                                              <th class="sorting_disabled" tabindex="0" aria-controls="dt_orders" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Phiếu thanh toán: activate to sort column descending" >Phiếu thanh toán</th>
                                              <th class="sorting_disabled" tabindex="0" aria-controls="dt_orders" rowspan="1" colspan="1" aria-label="Gói gia hạn: activate to sort column ascending" >Gói gia hạn</th>
                                              <th class="sorting_disabled" tabindex="0" aria-controls="dt_orders" rowspan="1" colspan="1" aria-label="Số tiền: activate to sort column ascending" >Số tiền</th>
                                              <th class="sorting_disabled" tabindex="0" aria-controls="dt_orders" rowspan="1" colspan="1" aria-label="Hạn sử dụng đến: activate to sort column ascending" >Hạn sử dụng đến</th>
                                              <th class="sorting_disabled" tabindex="0" aria-controls="dt_orders" rowspan="1" colspan="1" aria-label="Trạng thái: activate to sort column ascending" >Trạng thái</th>
                                            </tr>
                                        </thead>
                                        <tbody><tr class="odd"><td valign="top" colspan="5" class="dataTables_empty">Không có bản ghi</td></tr></tbody>
                                    </table>
                          <div id="dt_orders_processing" class="dataTables_processing card" style="display: none;">
                            <i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>
                          </div>
                        </div>
                      </div>
                      <div class="row" >
                        <div class="col-sm-12 col-md-5">
                          <div class="dataTables_info" id="dt_orders_info" role="status" aria-live="polite">Hiển thị kết quả từ 0 đến 0 của 0 bản ghi</div>
                        </div>
                        <div class="col-sm-12 col-md-7">
                          <div class="dataTables_paginate paging_simple_numbers" id="dt_orders_paginate" style="float:right">
                            <ul class="pagination">
                              <li class="paginate_button page-item previous disabled" id="dt_orders_previous">
                                <a href="#" aria-controls="dt_orders" data-dt-idx="0" tabindex="0" class="page-link">Trang trước</a>
                              </li>
                              <li class="paginate_button page-item next disabled" id="dt_orders_next">
                                <a href="#" aria-controls="dt_orders" data-dt-idx="1" tabindex="0" class="page-link">Trang sau</a>
                              </li>
                            </ul>
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
            <input type="hidden" name="_function" value="deposit">
            <div class="form-group">
                <label for="">Chọn gói cước gia hạn</label>
                <select name="usage_package" class="form-control usage_package" style="width: 100%">
                    <option value="1">1 tháng</option>
                    <option value="2">2 tháng</option>
                    <option value="3">3 tháng</option>
                    <option value="6">6 tháng</option>
                    <option value="12">12 tháng</option>
                </select>
            </div>
            <div class="form-group">
                <label for="">Số tiến cần phải thanh toán</label>
                <input type="text" class="form-control money" required="" placeholder="Số tiến cần phải thanh toán" disabled="disabled" id="money" value="0"><br>
                <input type="hidden" name="money" value="0" id="money_val">
            </div>
            <p class="text-danger" style="font-size: 13px;font-weight: bold">*Chú ý: Chuyển khoản đến số tài
                khoản bên dưới rồi bấm xác nhận đã chuyển để được tạo lệnh chờ ADMINS TỔNG duyệt</p>
            <p class="text-danger" style="font-size: 13px;font-weight: bold">**Chú ý: Copy mã giao dịch vào phần
                ghi chú khi chuyển khoản</p>
            <p class="text-danger" style="font-size: 13px;font-weight: bold">***Chú ý: Khi chuyển khoản xong vui
                lòng tải ảnh khi giao dịch thành công lên hệ thống</p>
            <h3>Chuyển khoản ngân hàng</h3>
            <div class="row">
                <div class="col-md-6 b-r">
                    <div class="mt-2">
                        <span style="font-size: 15px;">Tên ngân hàng:</span><br>
                        <span class="text-success btn_copy" style="font-weight: bold">TECHCOMBANK <i class="fa fa-files-o" aria-hidden="true"></i></span>
                    </div>
                    <div class="mt-2">
                        <span style="font-size: 15px;">chi nhánh:</span><br>
                        <span class="text-success btn_copy" style="font-weight: bold">HA NOI</span>
                    </div>
                    <div>
                        <span style="font-size: 15px;">Người thụ hưởng:</span><br>
                        <span class="text-success btn_copy" style="font-weight: bold">TRAN VAN KHIEM <i class="fa fa-files-o" aria-hidden="true"></i></span>
                    </div>
                    <div class="mt-2">
                        <span style="font-size: 15px;">Số tài khoản:</span><br>
                        <span class="text-success btn_copy" style="font-weight: bold">19032065031991 <i class="fa fa-files-o" aria-hidden="true"></i></span>
                    </div>
                </div>
                <div class="col-md-6">
                    <div>
                        <span style="font-size: 15px;">Số tiền:</span><br>
                        <span class="text-success btn_copy" style="font-weight: bold"><span class="money" id="money_tran"> 0</span> <i class="fa fa-files-o" aria-hidden="true"></i></span>
                    </div>
                    <div>
                        <span style="font-size: 15px;">Mã GD:</span><br>
                        <span class="text-success btn_copy" style="font-weight: bold">TEST801667840540<i class="fa fa-files-o" aria-hidden="true"></i></span>
                        <input type="hidden" name="tranid" value="TEST801667840540">
                    </div>
                </div>
                <div class="col-md-12 mt-3">
                  <h3>Tải ảnh giao dịch thành công</h3>
                  <div class="input-group">
                    
                    <input type="file"  id="inputGroupFile" class="form-control"  aria-describedby="basic-addon2" accept=".jpg,.jpeg,.png,.gif">
                  </div>
                </div>
            </div>
            <br>
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
