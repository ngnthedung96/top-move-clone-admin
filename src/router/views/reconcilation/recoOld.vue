<script>
import Layout from "../../layouts/main.vue";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Phiếu đối soát",
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
      title: "Phiếu đối soát",
      items: [
        {
          text: "Đối soát",
          href: "#",
        },
        {
          text: "Phiếu đối soát",
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
      <div class="row animated fadeInRight mt-3">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Phiếu Đối Soát Cho Phép Cộng Tiền</h5>
              <div class="card-content">
                <form id="formSearch" class="mt-3" role="form">
                  <h5>Tìm kiếm theo ngày</h5>
                  <input type="hidden" name="_function" value="list_pds" />
                  <div class="row">
                    <div class="col-sm-3 m-b-xs">
                      <div class="input-group">
                        <input
                          type="text"
                          class="input-daterange form-control"
                          name="date_range"
                          id="date_range"
                        />
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <select
                        name="status"
                        class="
                          form-control
                          select-status
                          js-example-basic-single
                          select2-hidden-accessible
                        "
                        data-select2-id="status"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option value="-1" selected="" data-select2-id="2">
                          Tất cả
                        </option>
                        <option value="0">Chưa đối soát</option>
                        <option value="1">Đã đối soát</option>
                      </select>
                    </div>
                    <div class="col-sm-2">
                      <button class="btn btn-outline-secondary" type="submit">
                        Tìm kiếm
                      </button>
                    </div>
                  </div>
                </form>
                <form id="formSearch2" class="mt-3" role="form">
                  <h5>Tìm kiếm theo tên</h5>
                  <input type="hidden" name="_function" value="list_pds2" />
                  <div class="row">
                    <div class="col-sm-3">
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          name="code_file"
                          id="code_file"
                          placeholder="Tìm theo tên PĐS"
                        />
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          name="code"
                          id="code"
                          placeholder="Tìm theo mã đơn hàng"
                        />
                      </div>
                    </div>

                    <div class="col-sm-2">
                      <button class="btn btn-outline-danger" type="submit">
                        Tìm kiếm
                      </button>
                    </div>
                  </div>
                </form>
                <br />
                <div class="table-responsive">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Phiếu Đối Soát</th>
                        <th>Tổng Đơn</th>
                        <th>Tổng COD</th>
                        <th>Phí</th>
                        <th>Thực Nhận</th>
                        <th>Chức Năng</th>
                      </tr>
                    </thead>
                    <tbody id="load_data_doisoat" style="">
                      <tr style="font-size: 18px; font-weight: bold">
                        <td></td>
                        <td>TỔNG:</td>
                        <td>0 đơn</td>
                        <td>0₫</td>
                        <td>0₫</td>
                        <td>0₫</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                  <p id="msg_err" style="display: none">
                    Xin mời chờ...<img
                      src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
