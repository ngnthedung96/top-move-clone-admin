<script>
import Layout from "../layouts/main.vue";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Thống kê",
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
      title: "Thống kê",
      items: [
        {
          text: "Trang chủ",
          href: "#",
        },
        {
          text: "Thống kê",
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
              <div class="card-title d-flex" style="position: relative">
                <h5>Bảng thống kê số lượng đơn tạo mới theo ngày</h5>
              </div>
              <div class="ibox-content">
                <form id="formSearch" role="form">
                  <div class="row">
                    <div class="col-sm-3 m-b-xs">
                      <div class="input-group">
                        <input
                          type="text"
                          class="input-daterange form-control"
                          name="date_range"
                          value="01/11/2022 - 30/11/2022"
                        />
                      </div>
                    </div>
                    <div class="col-sm-3 m-b-xs">
                      <select class="form-control" name="zone">
                        <option value="0">Tất cả</option>
                        <option value="1">Miền bắc</option>
                        <option value="2">Miền trung</option>
                        <option value="3">Miền Nam</option>
                      </select>
                    </div>
                    <div class="col-sm-6">
                      <button class="btn btn-outline-primary" type="submit">
                        Tìm kiếm
                      </button>
                    </div>
                  </div>
                </form>
                <div class="table-responsive row col-sm-12">
                  <div class="col-6 mt-3">
                    <div style="width: 30%">
                      <div
                        class="
                          dataTables_length
                          d-flex
                          flex-row
                          justify-content-around
                        "
                        id="dt_orders_length"
                      >
                        <span class="d-flex flex-column justify-content-center"
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
                          >Files</span
                        >
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 d-flex flex-row justify-content-end">
                    <div class="col-6 mt-3">
                      <div style="width: 100%">
                        <div
                          class="dataTables_length d-flex flex-row"
                          id="dt_orders_length"
                        >
                          <p style="width: 30%; margin-top: 2%">Tìm kiếm</p>
                          <input
                            type="search"
                            class="form-control form-control-sm"
                            placeholder=""
                            aria-controls="DataTables_Table_0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <table
                    class="
                      table table-striped
                      tb_order_amount_cls
                      dataTable
                      no-footer
                    "
                    id="DataTables_Table_0"
                    role="grid"
                    aria-describedby="DataTables_Table_0_info"
                  >
                    <thead>
                      <tr role="row">
                        <th
                          class="sorting_disabled"
                          rowspan="1"
                          colspan="1"
                          style="width: 165.844px"
                        >
                          #
                        </th>
                        <th
                          class="sorting_disabled"
                          rowspan="1"
                          colspan="1"
                          style="width: 550.047px"
                        >
                          Thời gian
                        </th>
                        <th
                          class="sorting_disabled"
                          rowspan="1"
                          colspan="1"
                          style="width: 529.109px"
                        >
                          Số lượng
                        </th>
                      </tr>
                    </thead>
                    <tbody id="load_data_customer_refer" style="">
                      <tr
                        style="font-size: 18px; font-weight: bold"
                        role="row"
                        class="odd"
                      >
                        <td></td>
                        <td>TỔNG:</td>
                        <td>0</td>
                      </tr>
                    </tbody>
                  </table>
                  <label for="" id="msg_err" style="display: none"
                    >Xin mời chờ...<img
                      src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                  /></label>
                  <div class="row mt-3">
                    <div class="col-sm-12 col-md-5">
                      <div
                        class="dataTables_info"
                        id="DataTables_Table_0_info"
                        role="status"
                        aria-live="polite"
                      >
                        Hiển thị kết quả từ 1 đến 1 của 1 Files
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-7">
                      <div
                        class="dataTables_paginate paging_simple_numbers"
                        id="DataTables_Table_0_paginate"
                      >
                        <ul class="pagination justify-content-end">
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
                          <li class="paginate_button page-item active">
                            <a
                              href="#"
                              aria-controls="DataTables_Table_0"
                              data-dt-idx="1"
                              tabindex="0"
                              class="page-link"
                              >1</a
                            >
                          </li>
                          <li
                            class="paginate_button page-item next disabled"
                            id="DataTables_Table_0_next"
                          >
                            <a
                              href="#"
                              aria-controls="DataTables_Table_0"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal">
      <b-modal id="modal-edit-store" hide-header hide-footer>
        <div class="modal-header flex-column">
          <h4 class="modal-title">Sửa kho hàng</h4>
          <div class="alert alert-danger" style="color: black">
            Nếu có sự thay đổi về Địa Chỉ của Kho Hàng, vui lòng Tạo Kho Mới.
          </div>
        </div>
        <div class="modal-body">
          <form name="edit_ware" method="post" id="edit_ware">
            <input type="hidden" id="update_id" name="update_id" value="6352" />
            <div class="row">
              <div class="col-md-12">
                <div class="form-group mb-3">
                  <div class="row">
                    <div class="col-md-3">
                      <label>Tên kho </label>
                    </div>
                    <div class="col-md-9">
                      <input
                        placeholder="VD: hanoinhanh"
                        required=""
                        type="text"
                        class="form-control"
                        name="name_update"
                        id="name_update"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group mb-3">
                  <div class="row">
                    <div class="col-md-3">
                      <label>SĐT</label>
                    </div>
                    <div class="col-md-9">
                      <input
                        placeholder="Nhập SĐT..."
                        required=""
                        type="text"
                        class="form-control"
                        id="phone_update"
                        name="phone_update"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group mb-3">
                  <div class="row">
                    <div class="col-md-3">
                      <label>Liên lạc </label>
                    </div>
                    <div class="col-md-9">
                      <input
                        placeholder="Nhập tên..."
                        required=""
                        type="text"
                        class="form-control"
                        id="contact_update"
                        name="contact_update"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <label id="msg_err"></label><br />
            <div style="float: right">
              <button
                type="submit"
                @click="$bvModal.hide('modal-edit-store')"
                class="btn btn-primary"
                id="btn_w"
              >
                Cập nhật
              </button>
              <button
                type="button"
                class="btn btn-white"
                id="close"
                @click="$bvModal.hide('modal-edit-store')"
                data-dismiss="modal"
              >
                Đóng
              </button>
            </div>
          </form>
        </div>
      </b-modal>
      <b-modal id="modal-add-store" hide-header hide-footer>
        <div class="modal-header flex-column">
          <h4 class="modal-title">Sửa kho hàng</h4>
          <div class="alert alert-danger" style="color: black">
            Nếu có sự thay đổi về Địa Chỉ của Kho Hàng, vui lòng Tạo Kho Mới.
          </div>
        </div>
        <div class="modal-body">
          <form name="created_ware_house" method="post" id="created_ware_house">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group mb-3">
                  <div class="row">
                    <div class="col-md-3">
                      <label>Tên kho <span style="color: red">[*]</span></label>
                    </div>
                    <div class="col-md-9">
                      <input
                        placeholder="VD: hanoinhanh"
                        required=""
                        type="text"
                        class="form-control res2"
                        name="name"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group mb-3">
                  <div class="row">
                    <div class="col-md-3">
                      <label
                        >Điện thoại <span style="color: red">[*]</span></label
                      >
                    </div>
                    <div class="col-md-9">
                      <input
                        placeholder="Nhập SĐT..."
                        required=""
                        type="text"
                        class="form-control"
                        value="0387170000"
                        id="phone"
                        name="phone"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group mb-3">
                  <div class="row">
                    <div class="col-md-3">
                      <label
                        >Liên lạc <span style="color: red">[*]</span></label
                      >
                    </div>
                    <div class="col-md-9">
                      <input
                        placeholder="Nhập tên..."
                        required=""
                        type="text"
                        class="form-control"
                        value="DEV-TU123"
                        id="contact"
                        name="contact"
                      />
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <div class="row">
                    <div class="col-md-3">
                      <label
                        >Địa chỉ kho hàng<span style="color: red"
                          >[*]</span
                        ></label
                      >
                    </div>
                    <div class="col-md-9">
                      <input
                        placeholder="Địa chỉ lấy hàng"
                        required=""
                        type="text"
                        class="form-control res2"
                        id="address"
                        name="address"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="row">
                    <div class="col-md-3">
                      <label
                        >Tỉnh/Thành <span style="color: red">[*]</span></label
                      >
                    </div>
                    <div class="col-md-9">
                      <select
                        name="province"
                        style="width: 100%"
                        class="res3 select2-hidden-accessible form-control"
                        id="province2"
                        data-select2-id="province2"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option value="0" data-select2-id="2">
                          Tỉnh/Thành...
                        </option>
                        <option value="92">Thành phố Cần Thơ</option>
                        <option value="48">Thành phố Đà Nẵng</option>
                        <option value="1">Thành phố Hà Nội</option>
                        <option value="31">Thành phố Hải Phòng</option>
                        <option value="79">Thành phố Hồ Chí Minh</option>
                        <option value="89">Tỉnh An Giang</option>
                        <option value="77">Tỉnh Bà Rịa - Vũng Tàu</option>
                        <option value="24">Tỉnh Bắc Giang</option>
                        <option value="6">Tỉnh Bắc Kạn</option>
                        <option value="95">Tỉnh Bạc Liêu</option>
                        <option value="27">Tỉnh Bắc Ninh</option>
                        <option value="83">Tỉnh Bến Tre</option>
                        <option value="74">Tỉnh Bình Dương</option>
                        <option value="52">Tỉnh Bình Định</option>
                        <option value="70">Tỉnh Bình Phước</option>
                        <option value="60">Tỉnh Bình Thuận</option>
                        <option value="96">Tỉnh Cà Mau</option>
                        <option value="4">Tỉnh Cao Bằng</option>
                        <option value="66">Tỉnh Đắk Lắk</option>
                        <option value="67">Tỉnh Đắk Nông</option>
                        <option value="75">Tỉnh Đồng Nai</option>
                        <option value="87">Tỉnh Đồng Tháp</option>
                        <option value="64">Tỉnh Gia Lai</option>
                        <option value="2">Tỉnh Hà Giang</option>
                        <option value="35">Tỉnh Hà Nam</option>
                        <option value="42">Tỉnh Hà Tĩnh</option>
                        <option value="30">Tỉnh Hải Dương</option>
                        <option value="93">Tỉnh Hậu Giang</option>
                        <option value="17">Tỉnh Hoà Bình</option>
                        <option value="33">Tỉnh Hưng Yên</option>
                        <option value="56">Tỉnh Khánh Hòa</option>
                        <option value="91">Tỉnh Kiên Giang</option>
                        <option value="62">Tỉnh Kon Tum</option>
                        <option value="12">Tỉnh Lai Châu</option>
                        <option value="68">Tỉnh Lâm Đồng</option>
                        <option value="20">Tỉnh Lạng Sơn</option>
                        <option value="10">Tỉnh Lào Cai</option>
                        <option value="80">Tỉnh Long An</option>
                        <option value="36">Tỉnh Nam Định</option>
                        <option value="40">Tỉnh Nghệ An</option>
                        <option value="37">Tỉnh Ninh Bình</option>
                        <option value="58">Tỉnh Ninh Thuận</option>
                        <option value="25">Tỉnh Phú Thọ</option>
                        <option value="54">Tỉnh Phú Yên</option>
                        <option value="44">Tỉnh Quảng Bình</option>
                        <option value="49">Tỉnh Quảng Nam</option>
                        <option value="51">Tỉnh Quảng Ngãi</option>
                        <option value="22">Tỉnh Quảng Ninh</option>
                        <option value="45">Tỉnh Quảng Trị</option>
                        <option value="94">Tỉnh Sóc Trăng</option>
                        <option value="14">Tỉnh Sơn La</option>
                        <option value="72">Tỉnh Tây Ninh</option>
                        <option value="34">Tỉnh Thái Bình</option>
                        <option value="19">Tỉnh Thái Nguyên</option>
                        <option value="38">Tỉnh Thanh Hóa</option>
                        <option value="46">Tỉnh Thừa Thiên Huế</option>
                        <option value="82">Tỉnh Tiền Giang</option>
                        <option value="84">Tỉnh Trà Vinh</option>
                        <option value="8">Tỉnh Tuyên Quang</option>
                        <option value="86">Tỉnh Vĩnh Long</option>
                        <option value="26">Tỉnh Vĩnh Phúc</option>
                        <option value="15">Tỉnh Yên Bái</option>
                        <option value="11">Điện Biên</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="row">
                    <div class="col-md-3">
                      <label
                        >Quận/Huyện <span style="color: red">[*]</span></label
                      >
                    </div>
                    <div class="col-md-9">
                      <div id="load_district2">
                        <select
                          name="district"
                          style="width: 100%"
                          class="res3 select2-hidden-accessible form-control"
                          id="district2"
                          data-select2-id="district2"
                          tabindex="-1"
                          aria-hidden="true"
                        >
                          <option value="0" data-select2-id="4">
                            Quận/Huyện...
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="row">
                    <div class="col-md-3">
                      <label
                        >Phường/Xã <span style="color: red">[*]</span></label
                      >
                    </div>
                    <div class="col-md-9">
                      <div id="load_commune2">
                        <select
                          name="commune"
                          style="width: 100%"
                          class="res3 select2-hidden-accessible form-control"
                          data-select2-id="5"
                          tabindex="-1"
                          aria-hidden="true"
                        >
                          <option value="0" data-select2-id="7">
                            Phường/Xã...
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="row">
                    <div class="col-md-3">
                      <label
                        >Mặc định <span style="color: red">[*]</span></label
                      >
                    </div>
                    <div class="col-md-9">
                      <select name="primary_selec" class="form-control">
                        <option value="1">Kho mặc định</option>
                        <option value="2" selected="">Kho thường</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <label id="msg_err2"></label><br />
            <div style="float: right">
              <button type="submit" class="btn btn-primary" id="btn_wh">
                Tạo kho hàng
              </button>
              <button
                type="button"
                class="btn btn-white"
                id="close"
                data-dismiss="modal"
                @click="$bvModal.hide('modal-add-store')"
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
