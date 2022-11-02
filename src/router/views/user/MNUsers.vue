<script>
import Layout from "../../layouts/main.vue";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Quản lý khách hàng",
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
      title: "Quản lý khách hàng",
      items: [
        {
          text: "Tài khoản",
          href: "#",
        },
        {
          text: "Quản lý khách hàng",
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
              <div class="card-title">
                <h5>Quản lý Khách hàng</h5>
              </div>
              <div class="ibox-content">
                <form id="formSearch" role="form">
                  <div class="row">
                    <div class="col-sm-3 m-b-xs">
                      <input
                        type="text"
                        class="form-control"
                        name="phone"
                        placeholder="SĐT..."
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
                        <th>Tên khách hàng</th>
                        <th>SĐT</th>
                        <th>Địa chỉ</th>
                        <th>Ngày tạo</th>
                      </tr>
                    </thead>
                    <tbody id="load_data_customer" style="">
                      <tr>
                        <td>1</td>
                        <td>bao ngoc</td>
                        <td>0364200733</td>
                        <td>ha noi</td>
                        <td>12-08-2022 11:42:31</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Minh THư</td>
                        <td>0379447655</td>
                        <td>ngã 3</td>
                        <td>11-08-2022 15:01:25</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>bao ngoc</td>
                        <td>0364200731</td>
                        <td>KCN LỘC AN XÃ LỘC AN LONG THÀNH ĐỒNG NAI</td>
                        <td>11-08-2022 15:00:48</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Minh THư</td>
                        <td>0379447654</td>
                        <td>ngã 3</td>
                        <td>11-08-2022 09:48:30</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Lê Quốc Danh</td>
                        <td>0379447065</td>
                        <td>Thụy Lâm Đông Anh</td>
                        <td>11-07-2022 11:16:33</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>bao ngoc</td>
                        <td>0364200730</td>
                        <td>KCN LỘC AN XÃ LỘC AN LONG THÀNH ĐỒNG NAI</td>
                        <td>23-06-2022 17:42:51</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>huỳnh nhan</td>
                        <td>0906991378</td>
                        <td>35/23 ao đôi - bình trị đông - bình tân</td>
                        <td>23-06-2022 17:32:38</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>tu</td>
                        <td>0387170099</td>
                        <td>ngõ 23</td>
                        <td>09-06-2022 15:44:35</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>hay</td>
                        <td>0387170044</td>
                        <td>31</td>
                        <td>07-06-2022 08:27:36</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>tunguyen</td>
                        <td>0387170033</td>
                        <td>12</td>
                        <td>02-06-2022 01:00:07</td>
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
