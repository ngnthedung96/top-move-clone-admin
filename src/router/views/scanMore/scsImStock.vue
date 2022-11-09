<script>
import Layout from "../../layouts/main.vue";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Chọn nhập kho hàng loạt",
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
      title: "Chọn nhập kho hàng loạt",
      items: [
        {
          text: "Trang chủ",
          href: "#",
        },
        {
          text: "Chọn quét hàng loạt",
          href: "#",
        },
        {
          text: "Chọn nhập kho hàng loạt",
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
              <h5 class="card-title">Chọn nhập kho hàng loạt (Từ trạng thái đã lấy hàng)</h5>
              <form id="formSearch" class="mt-3" role="form">
                <div class="row">
                  <div class="col-sm-4 m-b-xs">
                    <select
                      class="
                        form-control
                        select-status
                        select2-hidden-accessible
                      "
                      name="user_id"
                      data-select2-id="1"
                      tabindex="-1"
                      aria-hidden="true"
                    >
                    <option value="0" disabled selected>
                      Chọn tài khoản khách hàng, trống là tất cả
                      </option>
                      <option value="97">
                        0364648286 - jamina - phương Test
                      </option>
                      <option value="58">
                        0867628299 - Hương Test - Đỗ Thị Hương
                      </option>
                      <option value="57">0387170011 - TESTHOP - test</option>
                    </select>
                  </div>
                  <div class="col-sm-2">
                    <button class="btn btn-outline-secondary" type="submit">
                      Tìm kiếm
                    </button>
                  </div>
                </div>
                <div class="table-responsive mt-3">
                                      <div id="dt_orders_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
                                        <div  style="float:left"><div class="dt-buttons"> <button class="dt-button btn btn-success btn-xs" tabindex="0" aria-controls="dt_orders" type="button"><span><i class="fa fa-check" aria-hidden="true"></i> Quét chọn</span></button> <button class="dt-button btn btn-danger btn-xs" tabindex="0" aria-controls="dt_orders" type="button"><span><i class="fa fa-list" aria-hidden="true"></i> Quét tất cả</span></button> </div></div>
                                        <div  style="float: right;width: 15%;"><div id="dt_orders_length" class="
                              dataTables_length
                              d-flex
                              flex-row
                              justify-content-around
                            "><span class="
                                d-flex
                                flex-column
                                justify-content-center
                              ">Hiển thị </span><select name="dt_orders_length" aria-controls="dt_orders" class="
                                custom-select custom-select-sm
                                form-control form-control-sm
                              " style="width: 18%;"><option value="25">25</option><option value="50">50</option><option value="100">100</option><option value="200">200</option></select><span class="
                                d-flex
                                flex-column
                                justify-content-center
                              " style="width: 44%;">đơn hàng</span></div></div>
                                        <div id="dt_orders_processing" class="dataTables_processing card" style="display: none;"><i class="fa fa-spinner fa-spin fa-2x fa-fw"></i></div><table class="table table-striped no-footer dataTable" id="dt_orders" role="grid" aria-describedby="dt_orders_info" >
                                          <thead>
                                              <tr role="row"><th width="5%" class="sorting_disabled" tabindex="0" aria-controls="dt_orders" rowspan="1" colspan="1" aria-sort="ascending" aria-label="
                                                      
                                                          
                                                          
                                                      
                                                  : activate to sort column descending" style="width: 46px;">
                                                      <label class="check-ace">
                                                          <input type="checkbox" id="select_all">
                                                          <span class="checkmark"></span>
                                                      </label>
                                                  </th><th class="sorting_disabled" tabindex="0" aria-controls="dt_orders" rowspan="1" colspan="1" aria-label="Mã vận đơn: activate to sort column ascending" style="width: 112px;">Mã vận đơn</th><th class="sorting_disabled" tabindex="0" aria-controls="dt_orders" rowspan="1" colspan="1" aria-label="Shop: activate to sort column ascending" style="width: 67px;">Shop</th><th class="sorting_disabled" tabindex="0" aria-controls="dt_orders" rowspan="1" colspan="1" aria-label="Thành phố nhận: activate to sort column ascending" style="width: 147px;">Thành phố nhận</th><th class="sorting_disabled" tabindex="0" aria-controls="dt_orders" rowspan="1" colspan="1" aria-label="Quận/ Huyện nhận: activate to sort column ascending" style="width: 169px;">Quận/ Huyện nhận</th><th class="sorting_disabled" tabindex="0" aria-controls="dt_orders" rowspan="1" colspan="1" aria-label="Phường/ Xã nhận: activate to sort column ascending" style="width: 156px;">Phường/ Xã nhận</th><th class="sorting_disabled" tabindex="0" aria-controls="dt_orders" rowspan="1" colspan="1" aria-label="Khối lượng: activate to sort column ascending" style="width: 101px;">Khối lượng</th><th class="sorting_disabled" tabindex="0" aria-controls="dt_orders" rowspan="1" colspan="1" aria-label="Sản phẩm: activate to sort column ascending" style="width: 93px;">Sản phẩm</th></tr>
                                          </thead>
                                          <tbody><tr role="row" class="odd"><td><label class="check-ace">
              <input type="checkbox" class="checkone" name="input[]" value="117785">
              <span class="checkmark"></span>
          </label></td><td>TEST919117785</td><td>TESTHOP</td><td>Thành phố Hà Nội</td><td>Huyện Đông Anh</td><td>Xã Xuân Nộn</td><td>0.2</td><td>qao x1, ao x1</td></tr></tbody>
                                      </table><div class="row"><div class="col-sm-4"><div class="dataTables_info" id="dt_orders_info" role="status" aria-live="polite">Hiển thị kết quả từ 1 đến 1 của 1 đơn hàng</div></div><div class="col-sm-4"></div><div class="col-sm-4"><div class="dataTables_paginate paging_simple_numbers" id="dt_orders_paginate"><ul class="pagination"><li class="paginate_button page-item previous disabled" id="dt_orders_previous"><a href="#" aria-controls="dt_orders" data-dt-idx="0" tabindex="0" class="page-link">Trang trước</a></li><li class="paginate_button page-item active"><a href="#" aria-controls="dt_orders" data-dt-idx="1" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item next disabled" id="dt_orders_next"><a href="#" aria-controls="dt_orders" data-dt-idx="2" tabindex="0" class="page-link">Trang sau</a></li></ul></div></div></div></div>
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
