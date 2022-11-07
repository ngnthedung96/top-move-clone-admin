<script>
import Layout from "../../layouts/main.vue";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

/**
 * Dashboard Component
 */
function getParent(el, parentEl) {
  var parentEl;
  var element = el.parentElement;
  while (element) {
    if (element.matches(`${parentEl}`)) {
      parentEl = element;
      break;
    }
    element = element.parentElement;
  }

  return parentEl;
}
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
      productIn4: [],
      title: "Tạo đơn lẻ",
      items: [
        {
          text: "Tạo đơn hàng",
          href: "#",
        },
        {
          text: "Tạo đơn lẻ",
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
    addRow(e) {
      const parentEl = getParent(e.target, ".product-item");
      //   const btnAddRow = document.querySelectorAll(".add-row");
      const nameDiv = parentEl.querySelector("#name-product");
      const weightDiv = parentEl.querySelector("#weight-product");
      const quantityDiv = parentEl.querySelector("#quantity-product");
      const priceDiv = parentEl.querySelector("#price-product");
      const name = nameDiv.value;
      const weight = weightDiv.value;
      const quantity = quantityDiv.value;
      const price = priceDiv.value;
      if (name && weight && quantity && price) {
        this.productIn4.push({ name, weight, quantity, price });
      }
    },
    deleteRow(key) {
      console.log(key);
      this.productIn4.splice(key, 1);
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
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <div class="card-title d-flex justify-content-between">
                <h5>Tạo đơn lẻ</h5>
                <div class="" style="float: right">
                  <a
                    href="thong-tin-ca-nhan#formSettingOrders"
                    target="_blank"
                    class="btn btn-primary btn-outline"
                    title="Cài đặt tạo đơn"
                  >
                    <i class="fa fa-cog" aria-hidden="true"></i>
                    Cấu hình lên đơn
                  </a>
                </div>
              </div>
              <div class="card-content mt-3" id="fullScreenBox">
                <form
                  name="created"
                  action=""
                  method="post"
                  id="create_order"
                  autocomplete="off"
                >
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>
                          <i class="fa fa-home" aria-hidden="true"></i>
                          Kho lấy hàng
                          <span style="color: red">[*]</span>
                        </label>
                        <div class="row">
                          <div class="col-md-12">
                            <div id="load_select">
                              <div class="input-group">
                                <select
                                  name="ware_id"
                                  class="form-control"
                                  id="ware"
                                ></select>
                                <div class="input-group-append">
                                  <button
                                    type="button"
                                    class="btn btn-primary creat_ware"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 b-r mt-3">
                      <h5 class="mb-3">- Phần thông tin người nhận:</h5>
                      <div id="load_about_customer">
                        <div class="row">
                          <div class="col-md-12">
                            <label
                              ><i class="fa fa-phone" aria-hidden="true"></i> Số
                              điện thoại
                              <span style="color: red">[*]</span></label
                            ><br />
                            <div class="search-cus">
                              <input
                                type="text"
                                required=""
                                name="phone"
                                id="search"
                                class="form-control input-radius-15"
                                placeholder="Nhập SĐT để điền nhanh thông tin khách hàng mua trước đó"
                              />
                              <div
                                id="percent_return"
                                style="display: none"
                              ></div>
                            </div>
                            <div class="form-group mt-2">
                              <label
                                ><i class="fa fa-user" aria-hidden="true"></i>
                                Tên người nhận
                                <span style="color: red">[*]</span></label
                              >
                              <input
                                placeholder="Tên người nhận..."
                                required=""
                                type="text"
                                class="form-control input-radius-15"
                                name="name"
                              />
                            </div>
                            <div class="form-group mt-2">
                              <label
                                ><i class="fa fa-globe" aria-hidden="true"></i>
                                Địa chỉ
                                <span style="color: red">[*]</span></label
                              >
                              <input
                                placeholder="Địa chỉ chi tiết..."
                                required=""
                                id="address_blur"
                                type="text"
                                class="form-control input-radius-15"
                                name="address"
                              />
                            </div>
                            <div class="load_address mt-2" style="z-index: 1">
                              <div class="form-group">
                                <label
                                  >Tỉnh/Thành
                                  <span style="color: red">[*]</span></label
                                >
                                <select
                                  name="province"
                                  class="
                                    form-control
                                    select_jq
                                    select2-hidden-accessible
                                  "
                                  id="province"
                                  data-select2-id="province"
                                  tabindex="-1"
                                  aria-hidden="true"
                                >
                                  <option value="0" data-select2-id="2">
                                    Tỉnh/Thành...
                                  </option>
                                </select>
                              </div>
                              <div class="form-group mt-2">
                                <label
                                  >Quận/Huyện
                                  <span style="color: red">[*]</span></label
                                >
                                <div id="load_district">
                                  <select
                                    name="district"
                                    class="
                                      form-control
                                      select_jq
                                      select2-hidden-accessible
                                    "
                                    id="district"
                                    data-select2-id="district"
                                    tabindex="-1"
                                    aria-hidden="true"
                                  >
                                    <option value="0" data-select2-id="4">
                                      Quận/Huyện...
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div class="form-group mt-2">
                                <label
                                  >Phường/Xã
                                  <span style="color: red">[*]</span></label
                                >
                                <div id="load_commune">
                                  <select
                                    name="commune"
                                    class="
                                      form-control
                                      select_jq
                                      select2-hidden-accessible
                                    "
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
                        </div>
                      </div>
                      <h5 class="mt-3">- Phần thông tin dịch vụ</h5>
                      <div class="form-group">
                        <label>Người Nhận có được quyền xem/thử sản phẩm</label
                        ><br />
                        <select
                          name="config"
                          class="
                            form-control
                            jq_select2
                            select2-hidden-accessible
                          "
                          data-select2-id="8"
                          tabindex="-1"
                          aria-hidden="true"
                        >
                          <option value="1">
                            Cho Xem Hàng Nhưng Không Cho Thử Hàng
                          </option>
                          <option value="2">Cho Thử Hàng</option>
                          <option value="3" selected="" data-select2-id="10">
                            Không Cho Xem Hàng
                          </option>
                        </select>
                      </div>
                      <div class="form-group mt-2">
                        <label>Phí ship</label><br />
                        <select
                          name="payer"
                          id="payer"
                          class="
                            form-control
                            jq_select2
                            select2-hidden-accessible
                          "
                          data-select2-id="payer"
                          tabindex="-1"
                          aria-hidden="true"
                        >
                          <option value="1" selected="" data-select2-id="12">
                            Shop trả
                          </option>
                          <option value="2">Khách trả</option>
                        </select>
                        <span style="color: #ed5565"
                          >**LƯU Ý: chọn khách trả hệ thống sẽ cộng tiền cước
                          vào COD khi lên đơn</span
                        >
                      </div>
                      <div class="form-group mt-2">
                        <label>Phương thức gửi hàng</label><br />
                        <select
                          name="type_pick"
                          id="type_pick"
                          class="
                            form-control
                            jq_select2
                            select2-hidden-accessible
                          "
                          data-select2-id="type_pick"
                          tabindex="-1"
                          aria-hidden="true"
                        >
                          <option value="1" data-select2-id="14">
                            Lấy hàng tận nơi
                          </option>
                          <option value="2">Gửi hàng tại bưu cục</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6 mt-3">
                      <h5 class="mb-3">- Phần thông tin sản phẩm:</h5>
                      <div>
                        <div class="row">
                          <div class="col-md-12">
                            <div class="list-product" id="append-add-product">
                              <div class="mb-3 target_each_pr">
                                <div class="product-item input-group">
                                  <div class="product-item__info form-control">
                                    <div class="product-name-new">
                                      <span class="name_product"
                                        >Tên sản phẩm:
                                      </span>
                                      <div
                                        class="
                                          g-select__wrapper
                                          t-flex-grow
                                          static
                                        "
                                        inputid="productName"
                                      >
                                        <div class="input__wrapper">
                                          <div
                                            class="
                                              g-input__wrapper
                                              g-select__input
                                            "
                                            type="text"
                                          >
                                            <input
                                              type=""
                                              required
                                              size="60"
                                              id="name-product"
                                              class="form-control"
                                              placeholder="Nhập tên sản phẩm"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="
                                        product-extra__info
                                        mt-2
                                        d-flex
                                        flex-row
                                      "
                                    >
                                      <div class="product-weight me-2">
                                        <span style="width: 100%">KL (kg)</span>
                                        <div class="g-select__wrapper t-flex-1">
                                          <div class="input__wrapper">
                                            <div
                                              class="
                                                g-input__wrapper
                                                g-select__input
                                              "
                                              type="text"
                                            >
                                              <input
                                                type=""
                                                value="0.1"
                                                id="weight-product"
                                                class="form-control"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="product-weight-quantity me-2">
                                        <span style="width: 100%">SL</span>
                                        <div class="g-select__wrapper t-flex-1">
                                          <div class="input__wrapper">
                                            <div
                                              class="
                                                g-input__wrapper
                                                g-select__input
                                              "
                                              type="text"
                                            >
                                              <input
                                                type=""
                                                id="quantity-product"
                                                value="1"
                                                class="form-control"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="product-price-new me-2">
                                        <span style="width: 100%">Giá</span>
                                        <div class="g-select__wrapper t-flex-1">
                                          <div class="input__wrapper">
                                            <div
                                              class="
                                                g-input__wrapper
                                                g-select__input
                                              "
                                              type="text"
                                            >
                                              <input
                                                type=""
                                                id="price-product"
                                                class="form-control"
                                                value="0"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="product-item__action"
                                    style="position: relative"
                                  >
                                    <button
                                      type="button"
                                      @click="addRow($event)"
                                      class="
                                        btn btn-outline-primary
                                        add-row
                                        ms-1
                                      "
                                      style="height: 100%"
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                                <div
                                  class="product-item input-group mt-3"
                                  v-for="(product, index) in productIn4"
                                  :key="index"
                                >
                                  <div class="product-item__info form-control">
                                    <div class="product-name-new">
                                      <span class="name_product"
                                        >Tên sản phẩm:
                                      </span>
                                      <div
                                        class="
                                          g-select__wrapper
                                          t-flex-grow
                                          static
                                        "
                                        inputid="productName"
                                      >
                                        <div class="input__wrapper">
                                          <div
                                            class="
                                              g-input__wrapper
                                              g-select__input
                                            "
                                            type="text"
                                          >
                                            <input
                                              type=""
                                              required
                                              size="60"
                                              id="name-product"
                                              class="form-control"
                                              :placeholder="product.name"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="
                                        product-extra__info
                                        mt-2
                                        d-flex
                                        flex-row
                                      "
                                    >
                                      <div class="product-weight-quantity me-2">
                                        <span style="width: 100%">KL (kg)</span>
                                        <div class="g-select__wrapper t-flex-1">
                                          <div class="input__wrapper">
                                            <div
                                              class="
                                                g-input__wrapper
                                                g-select__input
                                              "
                                              type="text"
                                            >
                                              <input
                                                type=""
                                                name="weight_product[]"
                                                :value="product.weight"
                                                class="form-control"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="product-weight-quantity me-2">
                                        <span style="width: 100%">SL</span>
                                        <div class="g-select__wrapper t-flex-1">
                                          <div class="input__wrapper">
                                            <div
                                              class="
                                                g-input__wrapper
                                                g-select__input
                                              "
                                              type="text"
                                            >
                                              <input
                                                type=""
                                                name="quantity_product[]"
                                                :value="product.quantity"
                                                class="form-control"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="product-price-new me-2">
                                        <span style="width: 100%">Giá</span>
                                        <div class="g-select__wrapper t-flex-1">
                                          <div class="input__wrapper">
                                            <div
                                              class="
                                                g-input__wrapper
                                                g-select__input
                                              "
                                              type="text"
                                            >
                                              <input
                                                type=""
                                                name="price_product[]"
                                                class="form-control"
                                                :value="product.price"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="product-item__action"
                                    style="position: relative"
                                  >
                                    <button
                                      type="button"
                                      @click="deleteRow(index)"
                                      class="
                                        btn btn-outline-danger
                                        add-row
                                        ms-1
                                      "
                                      style="height: 100%"
                                    >
                                      <i class="fa fa-trash"></i>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-6">
                                <div class="volume_order">
                                  <div class="product-item__info">
                                    <div class="product-extra__info">
                                      <div class="product-price-new">
                                        <span style="width: 100%"
                                          >Tổng khối lượng (Kg)</span
                                        >
                                        <div class="g-select__wrapper t-flex-1">
                                          <div class="input__wrapper">
                                            <div
                                              class="
                                                g-input__wrapper
                                                g-select__input
                                              "
                                              type="text"
                                            >
                                              <input
                                                type="text"
                                                readonly=""
                                                id="total_weight"
                                                name="weight"
                                                class="form-control"
                                                value="0.1"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-6">
                                <div class="volume_order">
                                  <div class="product-item__info">
                                    <div class="product-extra__info">
                                      <div class="product-price-new">
                                        <span style="width: 100%"
                                          >Tổng giá trị đơn</span
                                        >
                                        <div class="g-select__wrapper t-flex-1">
                                          <div class="input__wrapper">
                                            <div
                                              class="
                                                g-input__wrapper
                                                g-select__input
                                              "
                                              type="text"
                                            >
                                              <input
                                                type="text"
                                                readonly=""
                                                id="value"
                                                name="gia_tri"
                                                class="form-control"
                                                value="0"
                                              />
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
                          <div class="col-md-12 mt-3">
                            <div>
                              <div class="row">
                                <div class="col-md-12">
                                  <label
                                    ><strong>Kích thước: </strong>
                                    <label style="color: red">
                                      KL Quy Đổi ([dài*rộng*cao]/6000) [Đơn vị:
                                      Kg] [Đv chiều: Cm]</label
                                    >
                                    <div class="volume_order">
                                      <div class="product-item__info">
                                        <div
                                          class="
                                            product-extra__info
                                            input-group
                                          "
                                        >
                                          <div
                                            class="
                                              product-weight-quantity
                                              form-control
                                            "
                                          >
                                            <span style="width: 100%">Dài</span>
                                            <div
                                              class="g-select__wrapper t-flex-1"
                                            >
                                              <div class="input__wrapper">
                                                <div
                                                  class="
                                                    g-input__wrapper
                                                    g-select__input
                                                  "
                                                  type="text"
                                                >
                                                  <input
                                                    type=""
                                                    name="length"
                                                    id="length"
                                                    value="5"
                                                    class="form-control"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            class="
                                              product-weight-quantity
                                              form-control
                                            "
                                          >
                                            <span style="width: 100%"
                                              >Rộng</span
                                            >
                                            <div
                                              class="g-select__wrapper t-flex-1"
                                            >
                                              <div class="input__wrapper">
                                                <div
                                                  class="
                                                    g-input__wrapper
                                                    g-select__input
                                                  "
                                                  type="text"
                                                >
                                                  <input
                                                    type=""
                                                    name="width"
                                                    id="width"
                                                    value="5"
                                                    class="form-control"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            class="
                                              product-weight-quantity
                                              form-control
                                            "
                                          >
                                            <span style="width: 100%">Cao</span>
                                            <div
                                              class="g-select__wrapper t-flex-1"
                                            >
                                              <div class="input__wrapper">
                                                <div
                                                  class="
                                                    g-input__wrapper
                                                    g-select__input
                                                  "
                                                  type="text"
                                                >
                                                  <input
                                                    type=""
                                                    name="height"
                                                    id="height"
                                                    class="form-control"
                                                    value="5"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            class="
                                              product-price-new
                                              form-control
                                            "
                                          >
                                            <span style="width: 100%"
                                              >Quy đổi</span
                                            >
                                            <div
                                              class="g-select__wrapper t-flex-1"
                                            >
                                              <div class="input__wrapper">
                                                <div
                                                  class="
                                                    g-input__wrapper
                                                    g-select__input
                                                  "
                                                  type="text"
                                                >
                                                  <input
                                                    type=""
                                                    id="weight_exchange"
                                                    name="weight_exchange"
                                                    class="form-control"
                                                    value="0.02"
                                                    readonly=""
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </label>
                                </div>
                              </div>
                              <div class="form-group">
                                <label
                                  ><i class="fa fa-money"></i> Thu hộ COD [₫]
                                  <span style="color: red"></span
                                ></label>
                                <input
                                  placeholder="Thu hộ [VNĐ] không nhập là 0đ"
                                  type="text"
                                  class="
                                    number_cleave
                                    form-control
                                    input-radius-15
                                  "
                                  name="amount"
                                  id="amount"
                                />
                              </div>
                              <!-- <div class="form-group">
                                          <label><i class="fa fa-shield"></i> Trị Giá Đơn Hàng [₫]</label>
                                          <input placeholder="Trị giá hàng (không bắt buộc)" type="text" class="number_cleave form-control input-radius-15"  name="gia_tri" id="value">
                                      </div>  -->
                            </div>
                            <div class="form-group mt-2">
                              <label
                                ><i class="fa fa-barcode"></i> Mã Đơn Của
                                Shop</label
                              ><span style="color: red"></span>
                              <input
                                placeholder="Mã đơn của shop"
                                type="text"
                                class="form-control input-radius-15"
                                name="soc"
                              />
                            </div>
                            <div class="form-group mt-2">
                              <label>Ghi Chú Khi Giao</label><br />
                              <span
                                id="barter_span"
                                style="
                                  color: rgb(225, 41, 61);
                                  font-size: 12px;
                                  display: none;
                                "
                                >Shop vui lòng ghi chú chi tiết đổi hàng vào
                                đây!</span
                              >
                              <textarea
                                class="form-control autosizeme input-radius-15"
                                placeholder="Ghi chú khi giao (không bắt buộc)"
                                name="note"
                                rows="3"
                                id="note"
                              >
giao nhanh</textarea
                              ><br />
                              <ul
                                class="tag-list input-group"
                                style="padding: 0; list-style: none"
                              >
                                <li class="m-1">
                                  <a
                                    class="tag_not badge bg-secondary"
                                    style="
                                      font-size: 11px !important;
                                      text-decoration: none;
                                      color: white;
                                      cursor: pointer;
                                    "
                                    >Nếu thất bại vui lòng liên hệ lại SHOP</a
                                  >
                                </li>
                                <li class="m-1">
                                  <a
                                    class="tag_not badge bg-secondary"
                                    style="
                                      font-size: 11px !important;
                                      text-decoration: none;
                                      color: white;
                                      cursor: pointer;
                                    "
                                    >Hàng dễ vỡ, vui lòng nhẹ tay</a
                                  >
                                </li>
                                <li class="m-1">
                                  <a
                                    class="tag_not badge bg-secondary"
                                    style="
                                      font-size: 11px !important;
                                      text-decoration: none;
                                      color: white;
                                      cursor: pointer;
                                    "
                                    >Gọi điện cho khách trước khi giao</a
                                  >
                                </li>
                                <li class="m-1">
                                  <a
                                    class="tag_not badge bg-secondary"
                                    style="
                                      font-size: 11px !important;
                                      text-decoration: none;
                                      color: white;
                                      cursor: pointer;
                                    "
                                    >Giao hàng vào giờ hành chính</a
                                  >
                                </li>
                                <li class="m-1">
                                  <a
                                    class="tag_not badge bg-secondary"
                                    style="
                                      font-size: 11px !important;
                                      text-decoration: none;
                                      color: white;
                                      cursor: pointer;
                                    "
                                    >Cho xem hàng, không được bóc hộp</a
                                  >
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-md-2 b-r">
                      <h4>Tổng cước</h4>
                      <span id="total_fee" class="fee_style">0</span> ₫
                    </div>
                    <div class="col-md-2 b-r">
                      <h4>Phí ship</h4>
                      <span id="fee_ship" class="fee_style">0</span> ₫
                    </div>
                    <div class="col-md-2 b-r">
                      <h4>Phí bảo hiểm</h4>
                      <span id="fee_insure" class="fee_style">0</span> ₫
                    </div>
                    <div class="col-md-2 b-r">
                      <h4>Phí thu hộ (Phí COD)</h4>
                      <span id="fee_cod" class="fee_style">0</span> ₫
                    </div>
                    <div class="col-md-2 b-r">
                      <h4>Phí Pickup (lấy hàng tận nơi)</h4>
                      <span id="fee_pickup" class="fee_style">0</span> ₫
                    </div>
                    <input
                      type="hidden"
                      name="fee_sameprice"
                      id="fee_ship_input"
                    />
                    <input
                      type="hidden"
                      name="pickup_fee"
                      id="fee_pickup_input"
                    />
                    <input
                      type="hidden"
                      name="fee_insurance"
                      id="fee_insurance_input"
                    />
                    <input type="hidden" name="fee_cod" id="fee_cod_input" />

                    <div class="col-md-4">
                      <button
                        type="submit"
                        class="btn btn-outline btn-primary"
                        id="btn_order"
                      >
                        <i class="fa fa-upload" aria-hidden="true"></i> Tạo Đơn
                        Hàng
                      </button>
                      <p class="mt-2" id="msg_err"></p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
