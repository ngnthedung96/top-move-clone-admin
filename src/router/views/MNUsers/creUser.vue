<script>
import Layout from "../../layouts/main.vue";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

import {
  authMethods,
  authFackMethods,
  notificationMethods,
} from "@/state/helpers";
import { mapState } from "vuex";

import { required, email } from "vuelidate/lib/validators";
/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Tạo tài khoản",
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
      title: "Tạo tài khoản",
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
          text: "Tạo tài khoản",
          active: true,
        },
      ],
      user: {
        compName: "",
        name: "",
        email: "",
        phone: "",
        password: "",
      },
      submitted: false,
      regError: null,
      tryingToRegister: false,
      isRegisterError: false,
      registerSuccess: false,
    };
  },
  validations: {
    user: {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
      phone: {
        required,
      },
      password: {
        required,
      },
    },
  },
  computed: {
    ...mapState("authfack", ["status"]),
    notification() {
      return this.$store ? this.$store.state.notification : null;
    },
  },
  methods: {
    ...authMethods,
    ...authFackMethods,
    ...notificationMethods,
    // Try to register the user in with the email, username
    // and password they provided.
    tryToRegisterIn() {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();

      if (this.$v.$invalid) {
        console.log("run nha");
        return;
      } else {
        console.log("run nha 2");
        if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
          this.tryingToRegister = true;
          // Reset the regError if it existed.
          this.regError = null;
          return (
            this.register({
              username: this.user.username,
              email: this.user.email,
              password: this.user.password,
            })
              // eslint-disable-next-line no-unused-vars
              .then((token) => {
                this.tryingToRegister = false;
                this.isRegisterError = false;
                this.registerSuccess = true;
                if (this.registerSuccess) {
                  this.$router.push(
                    this.$route.query.redirectFrom || {
                      name: "default",
                    }
                  );
                }
              })
              .catch((error) => {
                this.tryingToRegister = false;
                this.regError = error ? error : "";
                this.isRegisterError = true;
              })
          );
        } else {
          console.log("vao ay ma");
          const { email, name, phone, password } = this.user;
          if (email && name && phone && password) {
            console.log("ok");
            this.registeruser(this.user);
          }
        }
      }
    },
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
              <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6 col-xl-5">
                  <div class="card overflow-hidden">
                    <div class="bg-soft bg-primary">
                      <div class="row">
                        <div class="col-7">
                          <div class="text-primary p-4">
                            <h5 class="text-primary">Tạo tài khoản</h5>
                          </div>
                        </div>
                        <div class="col-5 align-self-end">
                          <img
                            src="@/assets/images/profile-img.png"
                            alt
                            class="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="card-body pt-0">
                      <div>
                        <router-link to="/">
                          <div class="avatar-md profile-user-wid mb-4">
                            <span class="avatar-title rounded-circle bg-light">
                              <img
                                src="@/assets/images/logo.svg"
                                alt
                                class="rounded-circle"
                                height="34"
                              />
                            </span>
                          </div>
                        </router-link>
                      </div>

                      <b-alert
                        v-model="registerSuccess"
                        class="mt-3"
                        variant="success"
                        dismissible
                        >Registration successfull.</b-alert
                      >

                      <b-alert
                        v-model="isRegisterError"
                        class="mt-3"
                        variant="danger"
                        dismissible
                        >{{ regError }}</b-alert
                      >

                      <div
                        v-if="notification.message"
                        :class="'alert ' + notification.type"
                      >
                        {{ notification.message }}
                      </div>

                      <b-form class="p-2" @submit.prevent="tryToRegisterIn">
                        <b-form-group
                          class="mb-3"
                          id="email-group"
                          label="Tên công ty/ Tên shop"
                          label-for="compName"
                        >
                          <b-form-input
                            id="compName"
                            v-model="user.compName"
                            type="text"
                            placeholder="Nhập tên công ty/ tên shop"
                            :class="{
                              'is-invalid': submitted && $v.user.name.$error,
                            }"
                          ></b-form-input>
                          <div
                            v-if="submitted && !$v.user.name.required"
                            class="invalid-feedback"
                          >
                            Cần nhập tên công ty/ tên shop
                          </div>
                        </b-form-group>
                        <b-form-group
                          class="mb-3"
                          id="email-group"
                          label="Tên đăng nhập"
                          label-for="name"
                        >
                          <b-form-input
                            id="name"
                            v-model="user.name"
                            type="text"
                            placeholder="Nhập tên đăng nhập"
                            :class="{
                              'is-invalid': submitted && $v.user.name.$error,
                            }"
                          ></b-form-input>
                          <div
                            v-if="submitted && !$v.user.name.required"
                            class="invalid-feedback"
                          >
                            Cần nhập tên đăng nhập.
                          </div>
                        </b-form-group>

                        <b-form-group
                          class="mb-3"
                          id="fullname-group"
                          label="Email"
                          label-for="email"
                        >
                          <b-form-input
                            id="email"
                            v-model="user.email"
                            type="email"
                            placeholder="Nhập email"
                            :class="{
                              'is-invalid': submitted && $v.user.email.$error,
                            }"
                          ></b-form-input>
                          <div
                            v-if="submitted && $v.user.email.$error"
                            class="invalid-feedback"
                          >
                            <span v-if="!$v.user.email.required"
                              >Cần nhập email.</span
                            >
                            <span v-if="!$v.user.email.email"
                              >vui lòng nhập email hợp lệ.</span
                            >
                          </div>
                        </b-form-group>

                        <b-form-group
                          class="mb-3"
                          id="fullname-group"
                          label="Số điện thoại"
                          label-for="phone"
                        >
                          <b-form-input
                            id="phone"
                            v-model="user.phone"
                            placeholder="Nhập số điện thoại"
                            :class="{
                              'is-invalid': submitted && $v.user.phone.$error,
                            }"
                          ></b-form-input>
                          <div
                            v-if="submitted && $v.user.phone.$error"
                            class="invalid-feedback"
                          >
                            <span v-if="!$v.user.phone.required"
                              >Cần nhập số điện thoại.</span
                            >
                            <span v-if="!$v.user.phone"
                              >Vui lòng nhập số điện thoại hợp lệ.</span
                            >
                          </div>
                        </b-form-group>

                        <b-form-group
                          class="mb-3"
                          id="password-group"
                          label="Mật khẩu"
                          label-for="password"
                        >
                          <b-form-input
                            id="password"
                            v-model="user.password"
                            type="password"
                            placeholder="Nhập mật khẩu"
                            :class="{
                              'is-invalid':
                                submitted && $v.user.password.$error,
                            }"
                          ></b-form-input>
                          <div
                            v-if="submitted && !$v.user.password.required"
                            class="invalid-feedback"
                          >
                            Cần nhập mật khẩu.
                          </div>
                        </b-form-group>

                        <div class="mt-4 d-grid">
                          <b-button
                            type="submit"
                            variant="primary"
                            class="btn-block"
                            >Đăng ký</b-button
                          >
                        </div>
                      </b-form>
                    </div>
                    <!-- end card-body -->
                  </div>
                  <!-- end card -->
                </div>
                <!-- end col -->
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
