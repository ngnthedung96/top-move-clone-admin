<script>
import Layout from "../../layouts/main.vue";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Tạo đơn lẻ",
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
      title: "Tạo đơn Excel",
      items: [
        {
          text: "Tạo đơn hàng",
          href: "#",
        },
        {
          text: "Tạo đơn Excel",
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
          <div class="col-lg-12" data-select2-id="6">
            <div class="card">
                <div class="card-body col-12">
                    <h5 class="card-title">Nhập đơn hàng từ file EXCEL</h5>
                    <div class="sk-spinner sk-spinner-wave">
                        <div class="sk-rect1"></div>
                        <div class="sk-rect2"></div>
                        <div class="sk-rect3"></div>
                        <div class="sk-rect4"></div>
                        <div class="sk-rect5"></div>
                    </div>
                    <div class="row">
                        <div class="col-md-6" data-select2-id="5">
                            <div class="input-group" data-select2-id="4">
                                <select name="ware_id" class="form-control"  tabindex="-1" aria-hidden="true">
                                    <option value="6352" data-select2-id="2">SHOP TEST - 0387170000 , 21/4, Phường Mai Dịch, Quận Cầu Giấy, Thành phố Hà Nội</option>  
                                </select>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <button type="button" class="btn btn-primary" id="push_orders"><i class="fa fa-plus" aria-hidden="true"></i> Đẩy đơn</button>
                        </div> 
                        <div class="col-md-4">
                            <div>
                                <a href="thong-tin-ca-nhan#formSettingOrders" target="_blank" class="btn me-2 btn-primary btn-outline" title="Cài đặt tạo đơn"><i class="fa fa-cog" aria-hidden="true"></i></a>
                                <!-- <button type="button" class="btn btn-secondary btn-outline" id="refreshTable" title="Tạo mới"><i class="fa fa-refresh" aria-hidden="true"></i></button> -->
                                <button type="button" class="btn btn-danger me-2  btn-outline"><i class="fa fa-upload me-1" aria-hidden="true"></i>Mở file</button>
                                <button type="button" class="btn btn-success  btn-outline"><i class="fa fa-download me-1" aria-hidden="true"></i>Tải file mẫu</button>
                                
                            </div>
                        </div>
                        <div class="text-danger col-md-12 font-weight-bold">
                            <span>**Lưu ý: 1 lần tải tối đa là 500 đơn. Nhiều hơn xin vui lòng tách File để hệ thống được xử lý nhanh.</span>
                        </div>
                        <div class="clearfix"></div>
                        <div class="col-md-12 mt-2">
                            <div class="alert alert-danger font-weight-bold" id="msg_error_danger" style="">Không có đơn hàng</div>
                            <div class="alert alert-info font-weight-bold" id="msg_notification">
                                Tải File mẫu về thao tác thêm đơn hàng sau đó hãy mở File để upload lên hệ thống check tự động.
                            </div>
                        </div>
                       
                        <div class="col-md-12 detail_table" style="display: none;">
                            <table class="table table-striped" id="table_content_excel_id">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Người nhận</th>
                                        <th>Đơn hàng</th>
                                        <th>Địa chỉ</th>
                                        <th>Kích thước/Phí</th>
                                    </tr>
                                </thead>
                                <tbody id="data_file_excel_id">
  
                                </tbody>
                            </table>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
