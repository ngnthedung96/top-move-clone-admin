<script>
import Layout from "../../layouts/main.vue";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Thông tin cá nhân",
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
      title: "Thông tin cá nhân",
      items: [
      {
          text: "Trang chủ",
          href: "#",
        },
        {
          text: "Tài khoản",
          href: "#",
        },
        {
          text: "Thông tin cá nhân",
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
      <div class="row animated fadeInRight mt-3">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <div class="card-title"></div>
              <div class="card-content">
                <div class="" style="float: right">
                  <b-button
                    v-b-modal="'modal-edit-pass'"
                    class="editbtn_pass"
                    variant="danger  btn-sm"
                    >Đổi Pass
                    <b-icon-key rotate="125"></b-icon-key>
                  </b-button>
                </div>
              </div>
              <h5>Chi tiết</h5>
              <div class="ibox-content profile-content">
                                    <h4><strong>TEST APP</strong></h4>
                                    <span><i class="fa fa-phone"></i>&nbsp;&nbsp;0387179999</span><br>
                                    <span><i class="fa fa-envelope-o"></i>&nbsp;&nbsp;testapp@gmail.com</span><br>
                                    <span><i class="fa fa-user-circle" aria-hidden="true"></i>&nbsp;&nbsp;
                                        TÀI KHOẢN FC                                    </span><br>
                                     <span><i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;&nbsp;Mã bưu cục: <strong>10004</strong>                                    <hr>
                                </span></div>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="card">
            <div class="card-body">
              <div class="card-title"></div>
              <div class="card-content">
                <div class="ibox-title">
                  <h5>Bật/Tắt xác minh mật khẩu 2 lớp <small></small></h5>
                </div>
                <div class="ibox-content">
                  <div class="row">
                    <div class="col-sm-6 b-r">
                      <form role="form" method="POST" id="form2FA">
                        <div class="form-group mt-3">
                          <!-- // khoatv edit for change ratio btn to toggle btn begin -->
                          <div class="row">
                            <h4 class="col">
                              <strong>Xác minh mật khẩu 2 lớp</strong>
                            </h4>
                            <div class="col-auto">
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
                        <input
                          type="hidden"
                          id="au_2_f_hidden"
                          name="authenticator"
                        />
                        <!-- // khoatv edit for change ratio btn to toggle btn end -->
                        <div class="form-group mt-3">
                          <input
                            type="text"
                            placeholder="Mã xác thực"
                            class="form-control"
                            required=""
                            name="otp"
                          />
                        </div>
                        <div class="form-group mt-3">
                          <p id="msg_err_2fa"></p>
                        </div>
                        <div class="form-group mt-3">
                          <button
                            class="btn btn-sm btn-primary m-t-n-xs mb-3"
                            type="submit"
                            id="btn-2fa"
                          >
                            <strong>Xác nhận</strong>
                          </button>
                        </div>
                      </form>
                      <p>
                        <strong> Chú ý:</strong> nếu chọn
                        <strong>TẮT</strong> chúng tôi sẽ tạo ra mã QR Code mới
                        do đó bạn cần quét lại mã QR Code
                      </p>
                    </div>
                    <div class="col-sm-6">
                      <h4>Ảnh QR Code</h4>
                      <div>
                        <p class="text-center">
                          <img
                            src="https://chart.googleapis.com/chart?chs=200x200&amp;chld=M|0&amp;cht=qr&amp;chl=otpauth%3A%2F%2Ftotp%2F0387170000%3Fsecret%3DAK4DOM56HEIC6PXG"
                            alt=""
                          />
                        </p>
                        <input
                          type="text"
                          readonly=""
                          class="form-control"
                          value="AK4DOM56HEIC6PXG"
                        /><br />
                        <span style="text-align: justify"
                          ><strong>Hướng dẫn: </strong>để kích hoạt dịch vụ bảo
                          mật 2 lớp bạn cần quét mã QR Code bằng ứng dụng Google
                          Authenticator trên thiết bị của bạn sau đó chọn
                          <strong>BẬT</strong> nhập mã xác thực bấm xác thực để
                          kích hoạt dịch vụ</span
                        >
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
    <!-- Trigger the modal with a button -->
    <div class="modal">
      <b-modal id="modal-edit-pass" hide-header hide-footer>
        <div class="modal-header">
          <h4 class="modal-title">Đổi mật khẩu</h4>
        </div>
        <div class="modal-body">
          <form name="editUser" id="editUser">
            <input type="hidden" value="1" id="update_id" name="update_id" />
            <div class="row">
              <div class="col-md-12">
                <div class="form-group mb-3">
                  <div class="row">
                    <div id="otp_phone">
                            <input type="text" class="form-control" placeholder="Nhập SĐT..." name="phone" id="phone"><br>
                            <div id="recaptcha-container"><div><div style="width: 304px; height: 78px;"><div><iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LcMZR0UAAAAALgPMcgHwga7gY5p8QMg1Hj-bmUv&amp;co=aHR0cDovL2Jvc3NhZHMudG9wbW92ZS52bjo4MA..&amp;hl=en&amp;type=image&amp;v=Ixi5IiChXmIG6rRkjUa1qXHT&amp;theme=light&amp;size=normal&amp;cb=p4f300flybb9" width="304" height="78" role="presentation" name="a-1br45v5vfto" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div><iframe style="display: none;"></iframe></div></div>
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
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
              Cập nhật
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
        </div>
      </b-modal>
    </div>
  </Layout>
</template>
