<script>
import Layout from "../../layouts/main.vue";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Tra cứu đơn hàng",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  methods: {
    getIndex(ind) {
      this.index = ind;
      console.log(this.index, ind);
    },
  },
  components: {
    Layout,
    PageHeader,
  },

  data() {
    return {
      title: "Tra cứu đơn hàng",
      items: [
        {
          text: "Tra cứu đơn hàng",
          href: "#",
        },
      ],
      index: 0,
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
                <h5>Tra cứu đơn hàng</h5>
              </div>
              <div class="card-content">
                <div class="form-group row">
                  <div class="col-sm-12">
                    <!-- <p style="font-weight:bold;" class="text-danger">*Lưu ý: Mã đơn cách nhau bởi khoảng trắng hoặc xuống dòng không cách nhau bởi ký tứ khác</p> -->
                    <div style="float: left; margin-right: 20px">
                      <textarea
                        name="codes"
                        id="codes"
                        cols="40"
                        rows="4"
                      ></textarea>
                    </div>
                    <!-- <div class="clearfix"></div> -->
                    <div style="margin-top: 58px">
                      <button
                        type="button"
                        class="btn btn-primary btn-sm me-2"
                        id="search_codes"
                      >
                        <i class="fa fa-search" aria-hidden="true"></i> Tìm kiếm
                      </button>
                      <button
                        type="button"
                        class="btn btn-secondary btn-sm me-2"
                        id="prints"
                      >
                        <i class="fa fa-print" aria-hidden="true"></i> In nhãn
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger btn-sm me-2"
                        id="trash_input"
                      >
                        <i class="fa fa-trash" aria-hidden="true"></i> Xóa
                      </button>
                    </div>
                  </div>
                  <div class="col-sm-12" id="show_list" style="">
                    <ul class="nav nav-tabs left-tabs" id="load_li_list">
                      <li class="nav-item">
                        <a
                          class="nav-link active tilte_click"
                          data-code="84856514557397"
                          href=""
                          data-toggle="tab"
                          >84856514557397</a
                        ><input
                          type="hidden"
                          id="active_val"
                          value="84856514557397"
                        />
                      </li>
                    </ul>
                    <div class="tab-content">
                      <div class="card shadow mb-4" id="load_data" style="">
                        <div
                          class="
                            card-header
                            py-3
                            d-flex
                            flex-row
                            align-items-center
                            justify-content-between
                          "
                        >
                          <h5 class="m-0 font-weight-bold text-primary">
                            <span id="text-title">Thông tin đơn hàng</span>
                          </h5>
                        </div>
                        <div class="card-body">
                          <div class="row">
                            <div class="col-md-4">
                              <p>Mã vận đơn: <strong>84856514557397</strong></p>
                              <p>Mã KH: 58689913</p>
                              <p>
                                Đối tác:
                                <span class="label label-success">Bưu cục</span>
                              </p>
                              <p>Mã đối tác: 84856514557397</p>
                            </div>
                            <div class="col-md-4">
                              <p>Tên sản phẩm: áo</p>
                              <p>Trọng lượng: 0.1Kg</p>
                              <p>Giá trị đơn: 100,000</p>
                              <p>Thu hộ COD: 200,000</p>
                            </div>
                            <div class="col-md-4">
                              <p>Ngày tạo đơn: 12:58:20 31-08-2022</p>
                              <p>
                                Trạng thái:
                                <label class="label status_text_-1"
                                  >Đã hủy</label
                                >
                              </p>
                              <p>
                                Chiều:
                                <label class="label label-secondary"
                                  >ĐƠN LẤY</label
                                >
                              </p>
                            </div>
                          </div>
                          <hr />
                          <h5>Thông tin người gửi</h5>
                          <div class="row mt-3">
                            <div class="col-md-4">
                              <p>Người gửi: test</p>
                            </div>
                            <div class="col-md-4">
                              <p>Số điện thoại người gửi: 0387170011</p>
                            </div>
                            <div class="col-md-4">
                              <p>
                                Địa chỉ người gửi: 23, Xã Võng La, Huyện Đông
                                Anh, Thành phố Hà Nội
                              </p>
                            </div>
                          </div>
                          <hr />
                          <h5>Thông tin người nhận</h5>
                          <div class="row mt-3">
                            <div class="col-md-4">
                              <p>Tên người nhận: tunguyen</p>
                            </div>
                            <div class="col-md-4">
                              <p>Số điện thoại người nhận: 0387170022</p>
                            </div>
                            <div class="col-md-4">
                              <p>
                                Địa chỉ người nhận: lương quy, xuân nộn, đông
                                anh, hà nội, Xã Xuân Nộn, Huyện Đông Anh, Thành
                                phố Hà Nội
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          class="
                            card-header
                            py-3
                            d-flex
                            flex-row
                            align-items-center
                            justify-content-between
                          "
                        >
                          <h5 class="m-0 font-weight-bold text-primary">
                            <span id="text-title">Hành trình</span>
                          </h5>
                        </div>
                        <div class="card-body">
                          <div class="row">
                            <div class="table-responsive">
                              <table class="table table-striped">
                                <thead>
                                  <tr>
                                    <th>Thời gian</th>
                                    <th>Trạng thái</th>
                                    <th>Thông tin shipper</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>31-08-2022 00:58:21</td>
                                    <td>
                                      TESTHOP tạo mới đơn hàng bằng file excel
                                    </td>
                                    <td></td>
                                  </tr>
                                  <tr>
                                    <td>31-08-2022 00:58:28</td>
                                    <td>Shop thao tác hủy đơn hàng.</td>
                                    <td></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                        <div
                          class="
                            card-header
                            py-3
                            d-flex
                            flex-row
                            align-items-center
                            justify-content-between
                          "
                        >
                          <h5 class="m-0 font-weight-bold text-primary">
                            <span id="text-title">Lịch sử quét đơn hàng</span>
                          </h5>
                        </div>
                        <div class="card-body">
                          <div class="row">
                            <div class="table-responsive">
                              <table class="table table-striped">
                                <thead>
                                  <tr>
                                    <th>Thời gian quét</th>
                                    <th>Người quét</th>
                                    <th>Trạng thái hiện tại</th>
                                    <th>Trạng thái sau quét</th>
                                  </tr>
                                </thead>
                                <tbody></tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div
                          class="
                            card-header
                            py-3
                            d-flex
                            flex-row
                            align-items-center
                            justify-content-between
                          "
                        >
                          <h5 class="m-0 font-weight-bold text-primary">
                            <span id="text-title"
                              >Lịch sử báo hoàn đơn hàng</span
                            >
                          </h5>
                        </div>
                        <div class="card-body">
                          <div class="row">
                            <div class="table-responsive">
                              <table class="table table-striped">
                                <thead>
                                  <tr>
                                    <th>B/C báo hoàn</th>
                                    <th>Người báo hoàn</th>
                                    <th>Người xử lý</th>
                                    <th>Lý do</th>
                                    <th>Tạo mới</th>
                                    <th>Xử lý</th>
                                    <th>Trạng thái</th>
                                  </tr>
                                </thead>
                                <tbody></tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div
                          class="
                            card-header
                            py-3
                            d-flex
                            flex-row
                            align-items-center
                            justify-content-between
                          "
                        >
                          <h5 class="m-0 font-weight-bold text-primary">
                            <span id="text-title">Lịch sử sửa đơn hàng</span>
                          </h5>
                        </div>
                        <div class="card-body">
                          <div class="row">
                            <div class="table-responsive">
                              <table class="table table-striped">
                                <thead>
                                  <tr>
                                    <th>Logs</th>
                                    <th>Giá trị cũ</th>
                                    <th>Giá trị mới</th>
                                    <th>Thời gian</th>
                                  </tr>
                                </thead>
                                <tbody></tbody>
                              </table>
                            </div>
                          </div>
                          <hr />
                          <div class="row">
                            <div class="table-responsive">
                              <table class="table table-striped">
                                <thead>
                                  <tr>
                                    <th>Người thao tác</th>
                                    <th>Logs</th>
                                    <th>Thời gian</th>
                                  </tr>
                                </thead>
                                <tbody></tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="msg_err_load"
                        style="text-align: center; display: none"
                        class="text-primary"
                      >
                        <span class="spinner-border spinner-border-sm"></span>
                        Xin mời chờ...
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
      <b-modal id="modal-edit-print" hide-header hide-footer>
        <div class="modal-header justify-content-center">
          <h4 class="modal-title d-flex justify-content-center">In đơn hàng</h4>
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
              In đơn hàng
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
          <!--                </form>-->

          <form
            method="post"
            action="print_order_by_lot.php"
            id="print_form_hiden"
            style="display: none"
            target="_blank"
          >
            <input
              type="hidden"
              name="codes"
              id="code_hiden_id"
              value="'abc'"
            />
            <input type="submit" value="Open results in a new window" />
          </form>
        </div>
      </b-modal>
    </div>
  </Layout>
</template>
