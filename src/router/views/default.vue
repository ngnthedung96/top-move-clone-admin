<script>
import Layout from ".././layouts/main";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Dashboard",
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
      title: "Tổng quan - LIVE",
      items: [
        {
          text: "Tổng quan - LIVE",
          href: "#",
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

    <div class="wrapper wrapper-content animated fadeInRight mt-3">
      <div class="row">
        <div class="col-lg-6">
          <div style="font-size: 12px; color: black; font-weight: bold">
            Báo cáo trạng thái lấy/giao/hoàn hàng của các đơn hàng được xử lý
            ngày hôm nay.
            <span class="text-danger"
              >Cập nhật lúc <span class="time_now">15:15 02/11/2022</span></span
            >
          </div>
          <div
            class="mt-1"
            style="
              font-size: 15px;
              color: #00467f !important;
              font-weight: bold;
            "
          >
            <span>Báo cáo vận hành hôm nay - LIVE</span>
            <div
              class="sk-spinner sk-spinner-double-bounce float-left"
              style="float: left"
            >
              <b-spinner
                style="width: 3rem; height: 3rem"
                label="Large Spinner"
                type="grow"
              ></b-spinner>
            </div>
            <div class="clearfix"></div>
          </div>
          <div
            class="card"
            id="static_status_od"
            style="
              border-radius: 12px;
              min-height: 260px;
              width: 100%;
              background: lightgrey !important;
              color: #333;
              font-weight: bold;
            "
          >
            <div class="card-body">
              <div class="row">
                <div class="col-5">
                  <div
                    class="m-t-6 line-height-22 pointer"
                    data-status="pickup"
                    data-name="lấy hàng"
                  >
                    <div class="fz-12 opacity-75" style="font-size: 12px">
                      Lấy thành công
                    </div>
                    <div>
                      <span class="fz-24" style="font-size: 24px">0</span> đơn
                      hàng
                      <i class="fa fa-chevron-right"></i>
                    </div>
                  </div>
                  <div
                    class="m-t-6 line-height-22 pointer"
                    data-status="delivered"
                    data-name="đã giao hàng"
                  >
                    <div class="fz-12 opacity-75" style="font-size: 12px">
                      Giao thành công
                    </div>
                    <div>
                      <span class="fz-24" style="font-size: 24px">0</span> đơn
                      hàng
                      <i class="fa fa-chevron-right"></i>
                    </div>
                  </div>
                  <div
                    class="m-t-6 line-height-22 pointer"
                    data-status="returned"
                    data-name="đã trả hàng"
                  >
                    <div class="fz-12 opacity-75">Hoàn thành công</div>
                    <div>
                      <span class="fz-24" style="font-size: 24px"> 0</span> đơn
                      hàng
                      <i class="fa fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
                <div class="col-7">
                  <div
                    class="m-t-6 line-height-22 pointer"
                    data-status="delivering"
                    data-name="đang giao hàng"
                  >
                    <div class="fz-12 opacity-75" style="font-size: 12px">
                      Đang giao hàng
                    </div>
                    <div>
                      <span class="fz-24" style="font-size: 24px">6</span> đơn
                      hàng
                      <i class="fa fa-chevron-right"></i>
                    </div>
                  </div>
                  <div
                    class="m-t-6 line-height-22 pointer"
                    data-status="fail"
                    data-name="giao thất bại"
                  >
                    <div class="fz-12 opacity-75" style="font-size: 12px">
                      Giao thất bại
                    </div>
                    <div>
                      <span class="fz-24" style="font-size: 24px">0</span> đơn
                      hàng
                      <i class="fa fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div style="font-size: 12px; color: black; font-weight: bold">
            Báo cáo phiếu đối soát được tạo trong ngày hôm nay.
            <span class="text-danger"
              >Cập nhật lúc <span class="time_now">15:15 02/11/2022</span></span
            >
          </div>
          <div
            class="mt-1"
            style="
              font-size: 15px;
              color: #00467f !important;
              font-weight: bold;
            "
          >
            <span>Báo cáo đối soát - LIVE</span>
            <div class="float-left" style="float: left">
              <b-spinner
                style="width: 3rem; height: 3rem"
                label="Large Spinner"
                type="grow"
              ></b-spinner>
            </div>
            <div class="clearfix"></div>
          </div>
          <div
            class="card"
            id="forcontrol"
            style="
              border-radius: 12px;
              min-height: 260px;
              width: 100%;
              background: lightgrey !important;
              color: #333;
            "
          >
            <div class="card-body">
              <div class="row">
                <div class="col-12">
                  <div
                    class="
                      display-flex
                      justify-content-space-between
                      text-align-items
                    "
                    style="font-weight: bold"
                  >
                    <div class="fz-24 text-normal">
                      CHƯA CÓ PHIẾU NÀO ĐƯỢC XỬ LÝ TRONG HÔM NAY
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
