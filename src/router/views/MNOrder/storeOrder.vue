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
                <button
                  class="btn btn-primary ms-2"
                  style="
                    position: absolute;
                    top: 50%;
                    left: 15%;
                    transform: translate(-50%, -60%);
                  "
                >
                  Thêm kho
                </button>
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
                          <button
                            class="btn btn-warning btn-xs editbtn"
                            type="button"
                          >
                            Sửa
                          </button>
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
  </Layout>
</template>
