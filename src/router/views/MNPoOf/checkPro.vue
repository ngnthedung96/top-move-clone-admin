<script>
import Layout from "../../layouts/main.vue";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Kiểm kê hàng hóa",
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
      title: "Kiểm kê hàng hóa",
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
          text: "Kiểm kê hàng hóa",
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
              <div
                class="form-group row pb-3"
                style="border-bottom: 1px solid rgb(206, 212, 218)"
              >
                <div class="col-sm-6">
                  <div class="row">
                    <div class="col-sm-8">
                      <h3 class="card-title">Tổng đơn trạng thái nhập kho</h3>
                    </div>
                    <div class="col-sm-4">
                      <button type="button" class="btn btn-outline-danger">
                        <h3 id="count" class="text-danger">2 đơn hàng</h3>
                      </button>
                    </div>
                  </div>
                  <i>Dữ liệu được tính đến : 09-11-2022 11:24:06</i>
                </div>
                <div class="col-sm-6">
                  <label class="col-sm-6 col-form-label">Quét Mã Vạch</label>
                  <div class="input-group m-b">
                    <div
                      class="d-flex justify-content-center flex-column p-2"
                      style="border: 1px solid #ced4da"
                    >
                      <span class="input-group-addon"
                        ><i class="fa fa-barcode" aria-hidden="true"></i
                      ></span>
                    </div>
                    <input
                      type="text"
                      id="barcode_input_id"
                      placeholder="Nhập hoặc quét mã vạch tại đây"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
              <div
                class="row mt-3 pb-3"
                style="border-bottom: 1px solid rgb(206, 212, 218)"
              >
                <div class="col-md-12">
                  <form action="" id="formSearch">
                    <input type="hidden" name="_function" value="search" />
                    <div class="row">
                      <div class="col-sm-3">
                        <input
                          type="text"
                          name="date_range"
                          class="form-control input-daterange"
                        />
                      </div>
                      <div class="col-sm-3">
                        <input
                          type="text"
                          name="code"
                          class="form-control"
                          placeholder="Mã đơn hàng"
                        />
                      </div>
                      <div class="col-sm-3">
                        <button
                          type="submit"
                          class="btn btn-primary search_date"
                        >
                          <i class="fa fa-search" aria-hidden="true"></i> Tìm
                          kiếm
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="col-md-6">
                  <button id="excel" class="btn btn-info mt-3">
                    <i
                      class="fa fa-download"
                      aria-hidden="true"
                      name="date_range"
                    ></i>
                    Xuất excel
                  </button>
                </div>
              </div>
              <div class="row mt-3 pb-3">
                <div class="col-md-6">
                  <h5>
                    <strong>Đơn khớp</strong>
                    <i
                      class="fa fa-check-circle text-info"
                      aria-hidden="true"
                    ></i>
                  </h5>
                  <span id="loading_search" style="display: none"
                    >Xin mời chờ...<img
                      src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                  /></span>
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>Mã đơn hàng</th>
                        <th>Người quét</th>
                        <th>Thời gian quét khớp</th>
                        <th>Trạng thái</th>
                      </tr>
                    </thead>
                    <tbody id="data_khop"></tbody>
                  </table>
                </div>
                <div class="col-md-6">
                  <h5>
                    <strong>Đơn không khớp </strong
                    ><i class="fa fa-ban text-danger" aria-hidden="true"></i>
                  </h5>
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>Mã đơn hàng</th>
                        <th>Người quét</th>
                        <th>Thời gian nhập kho</th>
                        <th>Trạng thái</th>
                      </tr>
                    </thead>
                    <tbody id="data_ko_khop">
                      <tr>
                        <td><strong>HH398119930</strong></td>
                        <td>Hoanghatst.vn</td>
                        <td>09/11/2022 - 08:39:42</td>
                        <td>
                          <span class="badge bg-danger">Chờ xử lý</span>
                        </td>
                      </tr>

                      <tr>
                        <td><strong>HH996119900</strong></td>
                        <td>Hoanghatst.vn</td>
                        <td>09/11/2022 - 09:53:25</td>
                        <td>
                          <span class="badge bg-danger">Chờ xử lý</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
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
