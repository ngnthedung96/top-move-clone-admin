<script>
import Layout from "../../layouts/main.vue";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Danh sách tài khoản",
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
      title: "Danh sách tài khoản",
      items: [
        {
          text: "Trang chủ",
          href: "#",
        },
        {
          text: "Quản lý tài khoản",
          href: "#",
        },
        {
          text: "Danh sách tài khoản",
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
                <h5>Quản lý tài khoản</h5>
              </div>
              <div class="ibox-content">
                <form id="formSearch" role="form" data-select2-id="formSearch">
                  <div class="row" data-select2-id="21">
                    <div class="col-sm-3 m-b-xs" data-select2-id="20">
                      <select
                        name="user_id"
                        class="form-control select-jq select2-hidden-accessible"
                        id="user_id"
                        style="width: 100%"
                        tabindex="-1"
                        aria-hidden="true"
                        data-select2-id="user_id"
                      >
                        <option value="0" data-select2-id="10">
                          Chọn tài khoản
                        </option>
                        <option value="97" data-select2-id="26">
                          0364648286 - jamina - phương Test
                        </option>
                        <option value="58" data-select2-id="27">
                          0867628299 - Hương Test - Đỗ Thị Hương
                        </option>
                        <option value="57" data-select2-id="28">
                          0387170011 - TESTHOP - test
                        </option>
                      </select>
                    </div>
                    <div class="col-sm-2 m-b-xs">
                      <select
                        class="form-control select-jq select2-hidden-accessible"
                        name="status"
                        tabindex="-1"
                        aria-hidden="true"
                        data-select2-id="13"
                      >
                        <option value="-1">Trạng thái</option>
                        <option value="1" selected="" data-select2-id="15">
                          Hoạt động
                        </option>
                        <option value="0">Đã tắt</option>
                      </select>
                    </div>
                    <div class="col-sm-2">
                      <button class="btn btn-outline-secondary" type="submit">
                        Tìm kiếm
                      </button>
                    </div>
                  </div>
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Tên Công Ty/Tên Shop</th>
                          <th>ID</th>
                          <th>Ngày Tạo</th>
                          <th>Lịch đối soát tự động</th>
                          <th>Cấu hình</th>
                          <th>Trạng thái</th>
                        </tr>
                      </thead>
                      <tbody id="load_data_customer" style="">
                        <tr>
                          <td>1</td>
                          <td>
                            <p>jamina - 0364648286</p>
                            <router-link
                              to="/quan-ly-kho-hang"
                              class="btn btn-outline-danger btn-xs"
                            >
                              <i class="fa fa-home" aria-hidden="true"></i>
                              Kho hàng
                            </router-link>
                            <!-- <label class="label label-primary"></label><br> -->
                          </td>
                          <td>97</td>
                          <td>01-07-2022 15:00:03</td>
                          <td>
                            <b-button
                              v-b-modal="'modal-config-control'"
                              variant="primary ms-2"
                            >
                              Cấu hình đối soát
                            </b-button>
                            <br />
                            <div class="mt-3">
                              <span class="font-weight-bold"
                                >Tạo thủ công (mặc định)
                              </span>
                            </div>
                          </td>
                          <td>
                            <a
                              href="static_detail_customer.php?id=97"
                              class="btn btn-xs btn-outline-danger btn-xs me-2"
                              target="_blank"
                              ><i
                                class="fa fa-info-circle"
                                aria-hidden="true"
                              ></i>
                              Thông tin</a
                            >
                            <b-button
                              v-b-modal="'modal-config'"
                              variant="outline-info btn-xs"
                            >
                              <i class="fa fa-cog" aria-hidden="true"></i>
                              Cấu hình
                            </b-button>
                          </td>
                          <td>
                            <span
                              class="badge bg-success"
                              style="font-size: 120%"
                              >Đang hoạt động</span
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <label for="" id="msg_err" style="display: none"
                      >Xin mời chờ...<img
                        src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                    /></label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal">
      <b-modal id="modal-config" size="lg" hide-header hide-footer>
        <div class="modal-header flex-column">
          <h4 class="modal-title">Cấu hình tài khoản</h4>
        </div>
        <div class="modal-body">
          <div class="modal-body">
            <form name="config_account" method="post" id="config_account">
              <div id="load_data_config_account">
                <input type="hidden" value="97" name="id" />
                <input type="hidden" value="config_account" name="_function" />
                <div class="row">
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <div class="row">
                            <div class="col-md-6">
                              <label>Đổi mật khẩu</label>
                            </div>
                            <div class="col-md-6">
                              <input
                                type="password"
                                class="form-control"
                                name="password"
                                placeholder="Nhập mật khẩu mới tại đây"
                                value=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <div class="row">
                            <div class="col-md-6">
                              <label>Đăng nhập nhiều thiết bị (MOBILE)</label>
                            </div>
                            <div class="col-md-6">
                              <div class="form-check form-switch">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckChecked"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexSwitchCheckChecked"
                                  >Bật</label
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <div class="row">
                            <div class="col-md-6">
                              <label>Kích hoạt tài khoản</label>
                            </div>
                            <div class="col-md-6">
                              <div class="form-check form-switch">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  checked
                                  role="switch"
                                  id="flexSwitchCheckChecked"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 mt-3" id="setting_push">
                    <h5>Cấu hình đẩy đơn tự động đối tác (Nếu có)</h5>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label
                            >Lựa chọn cấu hình thông tin đẩy hàng sang đối
                            tác</label
                          >
                          <select
                            name="infor_push"
                            class="
                              form-control
                              select_jq
                              select2-hidden-accessible
                            "
                            style="width: 100%"
                            data-select2-id="25"
                            tabindex="-1"
                            aria-hidden="true"
                          >
                            <option value="0" selected="" data-select2-id="27">
                              Dùng toàn bộ thông tin của shop
                            </option>
                            <option value="1">
                              Dùng thông tin trong cấu hình đẩy đơn
                            </option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label
                            >Dùng mã đối tác làm mã đơn của hệ thống hay
                            không</label
                          ><br />
                          <select
                            name="bill_print"
                            class="
                              form-control
                              select_jq
                              select2-hidden-accessible
                            "
                            style="width: 100%"
                            data-select2-id="28"
                            tabindex="-1"
                            aria-hidden="true"
                          >
                            <option value="0" selected="" data-select2-id="30">
                              Dùng mã đối tác làm mã đơn hệ thống
                            </option>
                            <option value="1">
                              Dùng mã nội bộ làm mã đơn hệ thống
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <label id="msg_err4" style="display: none"
                >Xin mời chờ...<img
                  src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" /></label
              ><br />

              <label id="msg_err"></label><br />
              <div style="float: right">
                <button
                  type="submit"
                  @click="$bvModal.hide('modal-config')"
                  class="btn btn-primary"
                  id="btn_w"
                >
                  Cập nhật
                </button>
                <button
                  type="button"
                  class="btn btn-white"
                  id="close"
                  @click="$bvModal.hide('modal-config')"
                  data-dismiss="modal"
                >
                  Đóng
                </button>
              </div>
            </form>
          </div>
        </div>
      </b-modal>
      <b-modal id="modal-config-control" size="lg" hide-header hide-footer>
        <div class="modal-header flex-column">
          <h4 class="modal-title">Sửa kho hàng</h4>
          <div class="alert alert-danger" style="color: black">
            Nếu có sự thay đổi về Địa Chỉ của Kho Hàng, vui lòng Tạo Kho Mới.
          </div>
        </div>
        <div class="modal-body">
          <form name="config_forcontrol" method="post">
            <div id="load_data_config_for">
              <input type="hidden" value="97" name="id" />
              <input type="hidden" value="config_forcontrol" name="_function" />
              <p>
                <span class="text-danger font-weight-bold">CHÚ Ý:</span> Có thể
                thời gian tạo PĐS sẽ chậm hơn thời gian cài đặt vài phút do
                nhiều tài khoản cài đặt cùng thời gian.
              </p>
              <div class="row">
                <div class="col-md-6">
                  <label
                    ><i class="fa fa-calendar"></i> Chọn lịch đối soát tự
                    động</label
                  >
                  <select
                    name="type_forcontrol"
                    class="select-jq select2-hidden-accessible"
                    style="width: 100%"
                    data-select2-id="16"
                    tabindex="-1"
                    aria-hidden="true"
                  >
                    <option value="0" selected="" data-select2-id="18">
                      Tạo thủ công (mặc định)
                    </option>
                    <option value="1">Hằng ngày (2,3,4,5,6,7,CN)</option>
                    <option value="2">Mỗi thứ 2-4-6</option>
                    <option value="3">Mỗi thứ 3-5</option>
                    <option value="4">Từ thứ 2 đến thứ 6</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <label for="appt"
                    ><i class="fa fa-clock-o"></i> Chọn giờ tạo đối soát</label
                  >
                  <input type="time" id="appt" name="appt" />
                </div>
              </div>
            </div>
            <label id="msg_err_cf_for" style="display: none"
              >Xin mời chờ...<img
                src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" /></label
            ><br />
            <div style="float: right">
              <button type="submit" class="btn btn-primary" id="btn_edit_for">
                Cập nhật
              </button>
              <button
                type="button"
                class="btn btn-white"
                id="close"
                data-dismiss="modal"
                @click="$bvModal.hide('modal-config-control')"
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
