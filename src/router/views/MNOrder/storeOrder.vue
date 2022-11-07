<script>
import Layout from "../../layouts/main.vue";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Quản lý kho hàng",
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
      title: "Quản lý kho hàng",
      items: [
        {
          text: "Quản lý đơn hàng",
          href: "#",
        },
        {
          text: "Quản lý kho hàng",
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
                <h5>Quản lý kho hàng</h5>
                <b-button
                  style="
                    position: absolute;
                    top: 50%;
                    left: 15%;
                    transform: translate(-50%, -60%);
                  "
                  v-b-modal="'modal-add-store'"
                  class="edit_store"
                  variant="primary ms-2"
                >
                  Thêm kho
                </b-button>
              </div>
              <div class="ibox-content">
                <form id="formSearch" role="form">
                  <div class="row">
                    <div class="col-sm-3 m-b-xs">
                      <input
                        type="text"
                        class="form-control"
                        name="phone"
                        placeholder="Tên kho..."
                      />
                    </div>
                    <div class="col-sm-6">
                      <button class="btn btn-outline-primary" type="submit">
                        Tìm kiếm
                      </button>
                    </div>
                  </div>
                </form>
                <div class="table-responsive">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Tên kho</th>
                        <th>SĐT</th>
                        <th>Tên liên hệ</th>
                        <!-- <th>Địa chỉ hiển thị</th> -->
                        <th>Địa chỉ Kho hàng</th>
                        <th>Loại kho</th>
                        <th>Trạng thái</th>
                        <th width="140"></th>
                      </tr>
                    </thead>
                    <tbody id="load_data_ware" style="">
                      <tr>
                        <td>1</td>
                        <td style="display: none">6352</td>
                        <td>SHOP TEST</td>
                        <td>0387170000</td>
                        <td>DEV-TU</td>
                        <!-- <td></td> -->
                        <td>
                          21/4, Phường Mai Dịch, Quận Cầu Giấy , Thành phố Hà
                          Nội
                        </td>
                        <td>
                          <label class="btn btn-danger">Kho mặc định</label>
                        </td>
                        <td>
                          <label class="btn btn-primary">Đang hoạt động</label>
                        </td>
                        <td>
                          <b-button
                            v-b-modal="'modal-edit-store'"
                            class="edit_store"
                            variant="warning"
                          >
                            Sửa
                          </b-button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <label for="" id="msg_err" style="display: none"
                    >Xin mời chờ...<img
                      src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                  /></label>
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
