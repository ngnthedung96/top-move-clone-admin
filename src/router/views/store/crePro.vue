<script>
import Layout from "../../layouts/main.vue";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Tạo đơn theo sản phẩm",
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
      title: "Tạo đơn theo sản phẩm",
      items: [
        {
          text: "Tạo đơn hàng",
          href: "#",
        },
        {
          text: "Tạo đơn theo sản phẩm",
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
        <div class="col-md-12">
          <div class="card" id="fullScreenBox">
            <div class="card-body">
              <div class="card-heading d-flex flex-row justify-content-between">
                <h5 class="card-title">Thêm sản phẩm</h5>
                <div class="float-right">
                  <a
                    href="thong-tin-ca-nhan#formSettingOrders"
                    target="_blank"
                    class="btn btn-secondary btn-outline"
                    title="Cài đặt tạo đơn"
                    ><i class="fa fa-cog" aria-hidden="true"></i> Cấu hình thêm
                    sản phẩm</a
                  >
                </div>
              </div>
              <div>
                <div class="ibox-content profile-content">
                  <form
                    name="created"
                    action=""
                    method="post"
                    id="create_order"
                    autocomplete="off"
                  >
                    <input
                      type="hidden"
                      name="_function"
                      value="create_product"
                    />
                    <div class="row">
                      <div class="col-md-7 b-r">
                        <h5 class="mb-3">- Thông tin sản phẩm:</h5>
                        <div>
                          <div class="row">
                            <div class="col-md-12">
                              <div class="form-group">
                                <div class="row">
                                  <div class="col-md-3">
                                    <label
                                      >Tên sản phẩm
                                      <span style="color: red"
                                        ><strong>[*]</strong></span
                                      ></label
                                    >
                                  </div>
                                  <div class="col-md-9">
                                    <input
                                      placeholder="Ví dụ: bàn chữ Z ,màu đen"
                                      type="text"
                                      class="form-control input-radius-15"
                                      name="name"
                                      required=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="form-group">
                                <div class="row">
                                  <div class="col-md-3">
                                    <label>
                                      SKU
                                      <span style="color: red"
                                        ><strong>[*]</strong></span
                                      ></label
                                    >
                                  </div>
                                  <div class="col-md-9">
                                    <input
                                      placeholder="Ví dụ: BAN-Z-DEN"
                                      type="text"
                                      class="form-control input-radius-15"
                                      name="sku"
                                      required=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="form-group">
                                <div class="row">
                                  <div class="col-md-3">
                                    <label>
                                      Barcode
                                      <span style="color: red"
                                        ><strong>[*]</strong></span
                                      ></label
                                    >
                                  </div>
                                  <div class="col-md-9">
                                    <input
                                      placeholder="Mã barcode được in trên sản phẩm"
                                      type="text"
                                      class="form-control input-radius-15"
                                      name="barcode"
                                      required=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="form-group">
                                <div class="row">
                                  <div class="col-md-3">
                                    <label> Đơn vị sản phẩm</label>
                                  </div>
                                  <div class="col-md-9">
                                    <select
                                      class="form-control input-radius-15"
                                      name="unit"
                                    >
                                      <option value="1">Chiếc / cái</option>
                                      <option value="2">Đôi</option>
                                      <option value="3">Thùng / hộp</option>
                                      <option value="4">Kiện</option>
                                      <option value="5">Set / Combo</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div class="form-group">
                                <div class="row">
                                  <div class="col-md-3">
                                    <label> Danh mục sản phẩm</label>
                                  </div>
                                  <div class="col-md-9">
                                    <select
                                      class="form-control input-radius-15"
                                      name="category"
                                      id="category"
                                    >
                                      <option value="1">Gaming</option>
                                      <option value="2">
                                        Sách &amp; Sưu tầm
                                      </option>
                                      <option value="3">Thú cưng</option>
                                      <option value="4">Mỹ phẩm</option>
                                      <option value="5">Thời trang</option>
                                      <option value="6">
                                        Quà tặng (Mẫu, thiệp cảm ơn)
                                      </option>
                                      <option value="7">Thể thao</option>
                                      <option value="8">Máy móc</option>
                                      <option value="9">
                                        Điện thoại / máy tính
                                      </option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div class="form-group">
                                <div class="row">
                                  <div class="col-md-3">
                                    <label>
                                      Tồn kho tối thiểu
                                      <span class="badge-grey"
                                        >Không bắt buộc</span
                                      ></label
                                    >
                                  </div>
                                  <div class="col-md-9">
                                    <input
                                      placeholder="Topmove sẽ cảnh báo nếu số tồn thực tế nhỏ hơn số tồn tối thiểu"
                                      type="number"
                                      class="form-control input-radius-15"
                                      name="min_inventory"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="form-group">
                                <div class="row">
                                  <div class="col-md-3">
                                    <label> Ghi chú kiểm tra sản phẩm</label>
                                  </div>
                                  <div class="col-md-9">
                                    <textarea
                                      class="form-control input-radius-15"
                                      placeholder="Mô tả đầy đủ về sản phẩm như màu sắc, size, ghi chú cho kho khi kiểm hàng"
                                      rows="3"
                                      name="note"
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-5">
                        <h5 class="mb-3">- Chính sách giá:</h5>
                        <div>
                          <div class="row">
                            <div class="col-md-12">
                              <div class="form-group">
                                <div class="row">
                                  <div class="col-md-4">
                                    <label>
                                      Giá bán
                                      <span style="color: red"
                                        ><strong> [*]</strong></span
                                      ></label
                                    >
                                  </div>
                                  <div class="col-md-8">
                                    <input
                                      placeholder="VNĐ"
                                      type="text"
                                      class="
                                        number_cleave
                                        form-control
                                        input-radius-15
                                      "
                                      name="price"
                                      required=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="form-group">
                                <div class="row">
                                  <div class="col-md-4">
                                    <label> Giá bán sỉ</label>
                                  </div>
                                  <div class="col-md-8">
                                    <input
                                      placeholder="VNĐ"
                                      type="text"
                                      class="
                                        number_cleave
                                        form-control
                                        input-radius-15
                                      "
                                      name="wholesale_price"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="form-group">
                                <div class="row">
                                  <div class="col-md-4">
                                    <label>
                                      Giá nhập
                                      <span class="badge-grey"
                                        >Không bắt buộc</span
                                      ></label
                                    >
                                  </div>
                                  <div class="col-md-8">
                                    <input
                                      placeholder="Giá nhập từ nhà cung cấp"
                                      type="text"
                                      class="
                                        number_cleave
                                        form-control
                                        input-radius-15
                                      "
                                      name="import_price"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="form-group">
                                <div class="row">
                                  <div class="col-md-4">
                                    <label>
                                      Hình ảnh sản phẩm <br /><small
                                        >Định dạng file được chấp nhận .JPG,
                                        .JPEG, .PNG</small
                                      ></label
                                    >
                                  </div>
                                  <div class="col-md-8">
                                    <div class="container">
                                      <div class="preview d-flex flex-column">
                                        <img
                                          class="
                                            d-flex
                                            flex-row
                                            justify-content-center
                                          "
                                          id="img-preview"
                                          src="https://icons.iconarchive.com/icons/grafikartes/flat-retro-modern-2/512/preview-icon.png"
                                        />
                                        <label
                                          for="file-input"
                                          class="
                                            btn btn-outline-primary
                                            lable_img
                                            d-flex
                                            flex-row
                                            justify-content-center
                                          "
                                          >Upload Image</label
                                        >
                                        <input
                                          style="display: none"
                                          accept="image/*"
                                          type="file"
                                          id="file-input"
                                          name="image"
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
                    <hr />
                    <div class="row">
                      <div class="col-md-7">
                        <h5 class="mb-3">- Lưu kho &amp; đóng gói:</h5>
                        <div>
                          <div class="row">
                            <div class="col-md-12">
                              <div class="form-group">
                                <div class="row">
                                  <div class="col-md-3">
                                    <label> Quản lý theo</label>
                                  </div>
                                  <div class="form-check col-md-3">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      value="seri"
                                      name="seri"
                                    />
                                    <label class="form-check-label" for=""
                                      >Số seri / IMEI</label
                                    >
                                  </div>

                                  <div class="form-check col-md-3">
                                    <input
                                      class="form-check-input date-item__action"
                                      type="checkbox"
                                      value=""
                                      id="add_order_product"
                                    />
                                    <label
                                      class="form-check-label"
                                      for="flexCheckChecked"
                                      >Ngày hết hạn</label
                                    >
                                  </div>

                                  <div class="form-check col-md-3">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      value=""
                                    />
                                    <label
                                      class="form-check-label"
                                      for="flexCheckChecked"
                                      >Quản lý theo lô</label
                                    >
                                  </div>
                                </div>
                              </div>
                              <div
                                class="form-group date"
                                style="display: none"
                              >
                                <div class="row">
                                  <div class="col-md-4">
                                    <label> Hạn sử dụng</label><br /><small
                                      >Hạn sử dụng sản phẩm tính từ ngày sản
                                      xuất</small
                                    >
                                  </div>
                                  <div class="col-md-8">
                                    <select
                                      class="form-control input-radius-15"
                                      name="expiration_time"
                                    >
                                      <option value="1">1 Tháng</option>
                                      <option value="2">3 Tháng</option>
                                      <option value="">6 Tháng</option>
                                      <option value="">9 Tháng</option>
                                      <option value="">12 Tháng</option>
                                      <option value="">18 Tháng</option>
                                      <option value="">2 Năm</option>
                                      <option value="">3 Năm</option>
                                      <option value="">5 Năm</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="form-group date"
                                style="display: none"
                              >
                                <div class="row">
                                  <div class="col-md-4">
                                    <label> Hạn sử dụng còn lại tối thiểu</label
                                    ><br /><small
                                      >Hạn sử dụng còn lại dưới mức này sẽ không
                                      thể xuất kho</small
                                    >
                                  </div>
                                  <div class="col-md-8">
                                    <div class="input-group">
                                      <input
                                        type="text"
                                        class="form-control col-md-10"
                                        name="expiry_threshold"
                                      />
                                      <input
                                        placeholder="Ngày"
                                        class="form-control col-md-2"
                                        disabled=""
                                        style="align-items: center"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="form-group">
                                <div class="row">
                                  <div class="col-md-3">
                                    <label> Điều kiện lưu kho</label>
                                  </div>
                                  <div class="col-md-9">
                                    <select
                                      class="form-control input-radius-15"
                                      name="warehouse_condition"
                                    >
                                      <option value="normal">
                                        Lưu kho thường
                                      </option>
                                      <option value="cold">Lưu kho lạnh</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div class="form-group">
                                <div class="row">
                                  <div class="col-md-3">
                                    <label> Vật liệu gia cố khi đóng gói</label
                                    ><br /><small>Có tính phí</small>
                                  </div>
                                  <div class="form-check col-md-3">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      value="1"
                                    />
                                    <label class="form-check-label" for=""
                                      >Sử dụng xốp nổ (Plastic)</label
                                    >
                                  </div>
                                  <div class="form-check col-md-3">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      value="2"
                                    />
                                    <label class="form-check-label" for=""
                                      >Giấy bubble</label
                                    >
                                  </div>
                                </div>
                              </div>
                              <div class="form-group">
                                <div class="row">
                                  <div class="col-md-3">
                                    <label> Vật liệu đóng gói</label>
                                  </div>
                                  <div class="col-md-9">
                                    <select
                                      class="form-control input-radius-15"
                                      name="pack_with_bubble"
                                    >
                                      <option value="">Thùng carton</option>
                                      <option value="">Thùng xốp</option>
                                      <option value="">Túi</option>
                                      <option value="">
                                        Không dùng vật liệu đóng gói
                                      </option>
                                    </select>
                                  </div>
                                  <div class="col-md-3"></div>
                                  <div class="form-check col-md-9">
                                    <br />
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      value=""
                                    />
                                    <label class="form-check-label" for=""
                                      >Hàng dễ vỡ (Dán băng keo dễ vỡ, tem cảnh
                                      báo)</label
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-5">
                        <h5 class="mb-3">- Vận chuyển:</h5>
                        <div>
                          <div class="row">
                            <div class="col-md-12">
                              <div class="form-group">
                                <div class="row">
                                  <div class="col-md-4">
                                    <label>
                                      Trọng lượng
                                      <span style="color: red"
                                        ><strong>[*]</strong></span
                                      ><br /><small
                                        >Trọng lượng sau đóng gói</small
                                      ></label
                                    >
                                  </div>
                                  <div class="col-md-8">
                                    <input
                                      placeholder=" kg"
                                      type="text"
                                      class="
                                        number_cleave
                                        form-control
                                        input-radius-15
                                      "
                                      name="weight"
                                      required=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="form-group">
                                <div class="row">
                                  <div class="col-md-3">
                                    <label>
                                      Kích thước sản phẩm <br /><small
                                        >Kích thước sản phẩm sau khi đóng
                                        gói</small
                                      ></label
                                    >
                                  </div>
                                  <div class="col-md-3">
                                    <label> Dài</label>
                                    <input
                                      placeholder=" cm"
                                      type="text"
                                      class="
                                        number_cleave
                                        form-control
                                        input-radius-15
                                      "
                                      name="height"
                                      value="5"
                                    />
                                  </div>
                                  <div class="col-md-3">
                                    <label> Rộng</label>
                                    <input
                                      placeholder=" cm"
                                      type="text"
                                      class="
                                        number_cleave
                                        form-control
                                        input-radius-15
                                      "
                                      name="width"
                                      value="5"
                                    />
                                  </div>
                                  <div class="col-md-3">
                                    <label> Cao</label>
                                    <input
                                      placeholder=" cm"
                                      type="text"
                                      class="
                                        number_cleave
                                        form-control
                                        input-radius-15
                                      "
                                      name="length"
                                      value="5"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <div class="row">
                        <div class="col-md-2">
                          <button
                            type="submit"
                            class="btn btn-outline btn-primary"
                            id="btn_order"
                          >
                            <i class="fa fa-upload" aria-hidden="true"></i> Tạo
                            Sản Phẩm
                          </button>
                        </div>
                        <div class="col-md-10">
                          <p class="mt-2" id="msg_err"></p>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
