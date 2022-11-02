<script>
import Layout from "../../layouts/main.vue";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Account",
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
          <div class="ibox">
            <div class="ibox-title" style="padding-right: 15px !important">
              <h5>Chi tiết</h5>
              <div class="" style="float: right">
                <button class="btn btn-primary btn-xs editbtn" type="button">
                  Sửa thông tin
                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </button>
                <button
                  class="btn btn-danger btn-xs editbtn_pass"
                  type="button"
                >
                  Đổi Pass <i class="fa fa-key" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div>
              <div class="ibox-content profile-content">
                <span id="name"
                  ><h4><strong>DEV-TU123</strong></h4></span
                >
                <span id="project"
                  ><i class="fa fa-building" aria-hidden="true"></i
                  >&nbsp;&nbsp;TestApp</span
                ><br />
                <span id="phone"
                  ><i class="fa fa-phone"></i>&nbsp;&nbsp;0387170000</span
                ><br />
                <span id="email"
                  ><i class="fa fa-envelope-o"></i
                  >&nbsp;&nbsp;anhtu123@gmail.com</span
                ><br />
                <hr />

                <div>
                  <h4>Thông tin ngân hàng</h4>
                  <form role="form" id="formAddBank">
                    <input type="hidden" name="user_id" value="1" />
                    <div class="form-group mt-3">
                      <select
                        name="bank_id"
                        id="bank_id"
                        style="width: 100%"
                        class="
                          form-control
                          custom-select
                          select2-hidden-accessible
                        "
                        data-select2-id="bank_id"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option value="0">Chọn tên ngân hàng</option>
                        <option value="1">
                          Ngân hàng TMCP Ngoại Thương VCB - Vietcombank
                        </option>
                        <option value="2">
                          Ngân hàng Nông Nghiệp và Phát triển Nông Thôn Việt Nam
                          - AGRIBANK
                        </option>
                        <option value="3">Ngân hàng TMCP Á Châu - ACB</option>
                        <option selected="" value="4" data-select2-id="2">
                          Ngân hàng TMCP Công Thương Việt Nam - Vietinbank
                        </option>
                        <option value="5">
                          Ngân hàng TMCP Đầu tư và Phát triển Việt Nam - BIDV
                        </option>
                        <option value="6">
                          Ngân hàng TMCP Hàng Hải Việt Nam - MSB
                        </option>
                        <option value="7">
                          Ngân hàng TMCP Kỹ thương Việt Nam - TechComBank
                        </option>
                        <option value="8">
                          Ngân hàng TMCP Quân Đội - MB Bank
                        </option>
                        <option value="9">
                          Ngân Hàng TMCP Việt Nam Thịnh Vượng - VPBANK
                        </option>
                        <option value="10">
                          Ngân Hàng Thương Mại Cổ Phần Đông Á - DONGABANK
                        </option>
                        <option value="11">
                          Ngân Hàng TMCP Đông Nam Á - SeABank
                        </option>
                        <option value="12">
                          Ngân hàng thương mại cổ phần Sài Gòn Thương Tín -
                          Sacombank
                        </option>
                        <option value="13">
                          Ngân hàng TMCP Sài Gòn – Hà Nội - SHB
                        </option>
                        <option value="14">Ngân hàng TMCP Sài Gòn - SCB</option>
                        <option value="15">
                          Ngân hàng thương mại cổ phần An Bình - ABBANKs
                        </option>
                        <option value="16">Ngân hàng ANZ</option>
                        <option value="17">
                          Ngân hàng TMCP Bản Việt - Viet Capital Bank
                        </option>
                        <option value="18">
                          Ngân hàng Bangkok - Bangkok Bank
                        </option>
                        <option value="19">BANK OF CHINA</option>
                        <option value="20">
                          BANKCOMM - BANK OF COMMUNICATIONS
                        </option>
                        <option value="21">
                          Ngân hàng TMCP Bảo Việt - BAOVIET BANK
                        </option>
                        <option value="22">Ngân hàng BIDC - BIDC BANK</option>
                        <option value="23">
                          Ngân hàng BNP Paribas - BNP PARIBAS BANK
                        </option>
                        <option value="24">
                          Ngân hàng BPCE IOM - BPCE IOM BANK
                        </option>
                        <option value="25">CHINA CONSTRUCTION BANK</option>
                        <option value="26">Ngân hàng CIMB - CIMB BANK</option>
                        <option value="27">
                          Ngân hàng Citibank Việt Nam - CITI BANK
                        </option>
                        <option value="28">
                          COMMONWEALTH BANK OF AUSTRALIA
                        </option>
                        <option value="29">CREDIT AGRICOLE CIB</option>
                        <option value="30">CSXH HOI SO CHINH</option>
                        <option value="31">Ngân hàng CTBC - CTBC BANK</option>
                        <option value="32">Ngân hàng DBS - DBS BANK</option>
                        <option value="33">
                          Ngân hàng DEUTSCHE - DEUTSCHE BANK
                        </option>
                        <option value="34">Ngân hàng ESUN - ESUN BANK</option>
                        <option value="35">
                          Ngân hàng thương mại cổ phần Xuất Nhập Khẩu Việt Nam -
                          EXIMBANK
                        </option>
                        <option value="36">
                          FAR EAST NATIONAL BANK HOI SO
                        </option>
                        <option value="37">FIRST COMMERCIAL BANK</option>
                        <option value="38">
                          Ngân hàng TM TNHH MTV Dầu Khí Toàn Cầu - GPBANK
                        </option>
                        <option value="39">Ngân hàng HANA - HANABANK</option>
                        <option value="40">
                          Ngân hàng thương mại cổ phần Phát triển Thành phố Hồ
                          Chí Minh - HDBANK
                        </option>
                        <option value="41">
                          Ngân hàng Hong Leong - HONG LEONG BANK
                        </option>
                        <option value="42">Ngân hàng HSBC -HSBC BANK</option>
                        <option value="43">HUA NAN COMMERCIAL BANK</option>
                        <option value="44">Ngân hàng ICBC - ICBC BANK</option>
                        <option value="45">
                          Ngân hàng TNHH Indovina (IVB) - INDOVINABANK
                        </option>
                        <option value="46">JPMORGAN CHASE N.A</option>
                        <option value="47">Kho bạc nhà nước - KBNN</option>
                        <option value="48">
                          Ngân hàng TMCP Kiên Long - KIENLONGBANK
                        </option>
                        <option value="49">Ngân hàng Kookmin - KB</option>
                        <option value="50">KOREA EXCHANGE BANK</option>
                        <option value="51">
                          Ngân hàng liên doanh Lào-Việt - LAO-VIET BANK
                        </option>
                        <option value="52">
                          Ngân hàng thương mại cổ phần Bưu điện Liên Việt -
                          LIENVIETPOSTBANK
                        </option>
                        <option value="53">
                          Ngân hàng Malaysia Berhad - MAYBANK
                        </option>
                        <option value="54">
                          Ngân Hàng Mega - MEGA ICBC BANK
                        </option>
                        <option value="55">
                          Ngân hàng MIZUHO - MIZUHO BANK
                        </option>
                        <option value="56">
                          Ngân hàng Tokyo-Mitsubishi UFJ - MUFG BANK
                        </option>
                        <option value="57">
                          Ngân hàng quốc gia Úc - NAB BANK
                        </option>
                        <option value="58">
                          NGÂN HÀNG THƯƠNG MẠI CỔ PHẦN BẮC Á - NASBANK
                        </option>
                        <option value="59">Ngân hàng quốc dân - NCB</option>
                        <option value="60">
                          Ngân hàng Công nghiệp Hàn Quốc - IBK
                        </option>
                        <option value="61">
                          Ngân hàng Hợp tác xã Việt Nam - Co-opBANK
                        </option>
                        <option value="62">
                          Ngân hàng Thương mại TNHH MTV Xây dựng Việt Nam -
                          CBBank
                        </option>
                        <option value="63">
                          Ngân hàng Nhà nước (NHNN) - NHNN
                        </option>
                        <option value="64">
                          Ngân hàng Nonghyup - Nonghyup Bank
                        </option>
                        <option value="65">
                          Ngân hàng thương mại cổ phần Phương Đông - OCB
                        </option>
                        <option value="66">Ngân hàng OCBC - OCBC BANK</option>
                        <option value="67">
                          Ngân hàng đại dương - OCEANBANK
                        </option>
                        <option value="68">
                          Ngân Hàng TMCP Xăng Dầu Petrolimex - PG Bank
                        </option>
                        <option value="69">
                          Ngân hàng TMCP Đại Chúng Việt Nam (PVcomBank)
                        </option>
                        <option value="71">
                          Ngân hàng thương mại cổ phần Sài Gòn Công Thương -
                          SAIGONBANK
                        </option>
                        <option value="73">
                          Ngân hàng Shinhan - SHINHAN BANK
                        </option>
                        <option value="74">
                          Tập đoàn ngân hàng Sumitomo Mitsui - SMBC
                        </option>
                        <option value="75">
                          Ngân hàng TMCP Phương Nam - SOUTHERNBANK
                        </option>
                        <option value="76">
                          Ngân hàng Standard Chartered - STANDARD CHARTERED BANK
                        </option>
                        <option value="77">
                          Ngân hàng TAIPEI FUBON - TAIPEI FUBON BANK
                        </option>
                        <option value="78">
                          Ngân hàng Thương mại Cổ phần Tiên Phong - TPBANK
                        </option>
                        <option value="79">
                          Ngân hàng United Overseas Bank - UOB
                        </option>
                        <option value="80">
                          Ngân hàng Chính sách xã hội - VBSP
                        </option>
                        <option value="81">
                          Ngân hàng phát triển Việt Nam (VDB)
                        </option>
                        <option value="82">
                          Ngân hàng Thương mại Cổ phần Quốc tế Việt Nam - VIB
                        </option>
                        <option value="83">VIDPUBLIC BANK</option>
                        <option value="84">
                          Ngân hàng TMCP Việt Á - VIETABANK
                        </option>
                        <option value="85">VP KBNN</option>
                        <option value="86">
                          Ngân hàng liên doanh Việt - Nga (VRB)
                        </option>
                        <option value="87">Ngân hàng WOORI - WOORI BANK</option>
                        <option value="88">
                          Ngân hàng thương mại cổ phần Việt Nam Thương Tín -
                          VIETBANK
                        </option>
                        <option value="89">
                          Ngân hàng Thương mại Cổ phần Nam Á - NAM A BANK
                        </option>
                      </select>
                    </div>
                    <div class="form-group mt-3">
                      <div id="load_branch_bank">
                        <select
                          name="branch_id"
                          style="width: 100%"
                          class="
                            form-control
                            custom-select
                            select2-hidden-accessible
                          "
                          data-select2-id="3"
                          tabindex="-1"
                          aria-hidden="true"
                        >
                          <option value="0">Chọn tên chi nhánh</option>
                          <option value="4292">
                            VIETINBANK 1 HO CHI MINH (HCM)
                          </option>
                          <option value="4293">
                            VIETINBANK 10 HO CHI MINH (HCM)
                          </option>
                          <option value="4294">
                            VIETINBANK 11 HO CHI MINH (HCM)
                          </option>
                          <option value="4295">
                            VIETINBANK 12 HO CHI MINH (HCM)
                          </option>
                          <option value="4296">
                            VIETINBANK 2 HO CHI MINH (HCM)
                          </option>
                          <option value="4297">
                            VIETINBANK 3 HO CHI MINH (HCM)
                          </option>
                          <option value="4298">
                            VIETINBANK 4 HO CHI MINH (HCM)
                          </option>
                          <option value="4299">
                            VIETINBANK 5 HO CHI MINH (HCM)
                          </option>
                          <option value="4300">
                            VIETINBANK 6 HO CHI MINH (HCM)
                          </option>
                          <option value="4301">
                            VIETINBANK 7 HO CHI MINH (HCM)
                          </option>
                          <option value="4302">
                            VIETINBANK 8 HO CHI MINH (HCM)
                          </option>
                          <option value="4303">
                            VIETINBANK 9 HO CHI MINH (HCM)
                          </option>
                          <option value="4304">VIETINBANK AN GIANG</option>
                          <option value="4305">VIETINBANK BA DINH</option>
                          <option value="4306">
                            VIETINBANK BA RIA VUNG TAU
                          </option>
                          <option value="4307">VIETINBANK BAC CAN</option>
                          <option value="4308">VIETINBANK BAC DA NANG</option>
                          <option value="4309">VIETINBANK BAC GIANG</option>
                          <option value="4310">VIETINBANK BAC HA NOI</option>
                          <option value="4311">VIETINBANK BAC LIEU</option>
                          <option value="4312">VIETINBANK BAC NGHE AN</option>
                          <option value="4313">VIETINBANK BAC NINH</option>
                          <option value="4314">VIETINBANK BAI CHAY</option>
                          <option value="4315">VIETINBANK BAO LOC</option>
                          <option value="4316">VIETINBANK BEN LUC</option>
                          <option value="4317">VIETINBANK BEN THUY</option>
                          <option value="4318">VIETINBANK BEN TRE</option>
                          <option value="4319">VIETINBANK BIM SON</option>
                          <option value="4320">VIETINBANK BINH DINH</option>
                          <option value="4321">VIETINBANK BINH DUONG</option>
                          <option value="4322">VIETINBANK BINH PHUOC</option>
                          <option value="4323">VIETINBANK BINH THUAN</option>
                          <option value="4324">VIETINBANK BINH XUYEN</option>
                          <option value="4325">VIETINBANK CA MAU</option>
                          <option value="4326">VIETINBANK CAM PHA</option>
                          <option value="4327">VIETINBANK CAN THO</option>
                          <option value="4328">VIETINBANK CAO BANG</option>
                          <option value="4329">VIETINBANK CHAU DOC</option>
                          <option value="4330">VIETINBANK CHAU THANH</option>
                          <option value="4331">VIETINBANK CHUONG DUONG</option>
                          <option value="4332">
                            VIETINBANK CN TAY SAI GON
                          </option>
                          <option value="4333">
                            VIETINBANK CONG TY CHO THUE TAI CHINH
                          </option>
                          <option value="4334">VIETINBANK CU CHI</option>
                          <option value="4335">VIETINBANK CUA LO</option>
                          <option value="4336">VIETINBANK DA NANG</option>
                          <option value="4337">VIETINBANK DAK NONG</option>
                          <option value="4338">VIETINBANK DAKLAK</option>
                          <option value="4339">VIETINBANK DEN HUNG</option>
                          <option value="4340">VIETINBANK DIEN BIEN</option>
                          <option value="4341">VIETINBANK DO SON</option>
                          <option value="4342">VIETINBANK DONG ANH</option>
                          <option value="4343">VIETINBANK DONG DA</option>
                          <option value="4344">VIETINBANK DONG HA NOI</option>
                          <option value="4345">VIETINBANK DONG NAI</option>
                          <option value="4346">VIETINBANK DONG SAI GON</option>
                          <option value="4347">VIETINBANK DONG THAP</option>
                          <option value="4348">VIETINBANK GIA LAI</option>
                          <option value="4349">VIETINBANK HA GIANG</option>
                          <option value="4350">VIETINBANK HA NAM</option>
                          <option value="4351">VIETINBANK HA NOI (HN)</option>
                          <option value="4352">VIETINBANK HA TAY</option>
                          <option value="4353">VIETINBANK HA TINH</option>
                          <option value="4354">VIETINBANK HAI BA TRUNG</option>
                          <option value="4355">VIETINBANK HAI DUONG</option>
                          <option value="4356">VIETINBANK HAI PHONG</option>
                          <option value="4357">VIETINBANK HAU GIANG</option>
                          <option value="4358">
                            VIETINBANK HO CHI MINH (HCM)
                          </option>
                          <option value="4359">VIETINBANK HOA BINH</option>
                          <option value="4360">VIETINBANK HOA THANH</option>
                          <option value="4361">VIETINBANK HOAN KIEM</option>
                          <option value="4362">VIETINBANK HOANG MAI</option>
                          <option value="4363">VIETINBANK HOI AN</option>
                          <option value="4364">VIETINBANK HONG BANG</option>
                          <option value="4365">VIETINBANK HUNG YEN</option>
                          <option value="4366">VIETINBANK KCN BIEN HOA</option>
                          <option value="4367">
                            VIETINBANK KCN BINH DUONG
                          </option>
                          <option value="4368">VIETINBANK KCN HAI DUONG</option>
                          <option value="4369">VIETINBANK KCN PHU TAI</option>
                          <option value="4370">VIETINBANK KCN QUE VO</option>
                          <option value="4371">VIETINBANK KCN TIEN SON</option>
                          <option value="4372">VIETINBANK KCN TRA NOC</option>
                          <option value="4373">
                            VIETINBANK KCN TRANG BANG
                          </option>
                          <option value="4374">VIETINBANK KHANH HOA</option>
                          <option value="4375">VIETINBANK KIEN AN</option>
                          <option value="4376">VIETINBANK KIEN GIANG</option>
                          <option value="4377">VIETINBANK KON TUM</option>
                          <option value="4378">VIETINBANK LAI CHAU</option>
                          <option value="4379">VIETINBANK LAM DONG</option>
                          <option value="4380">VIETINBANK LANG HOA LAC</option>
                          <option value="4381">VIETINBANK LANG SON</option>
                          <option value="4382">VIETINBANK LAO CAI</option>
                          <option value="4383">VIETINBANK LE CHAN</option>
                          <option value="4384">VIETINBANK LONG AN</option>
                          <option value="4385">VIETINBANK LUU XA</option>
                          <option value="4386">VIETINBANK MONG CAI</option>
                          <option value="4387">VIETINBANK MY HAO</option>
                          <option value="4388">VIETINBANK NAM DINH</option>
                          <option value="4389">VIETINBANK NAM SAI GON</option>
                          <option value="4390">
                            VIETINBANK NAM THANG LONG
                          </option>
                          <option value="4391">VIETINBANK NAM VIET TRI</option>
                          <option value="4392">VIETINBANK NGHE AN</option>
                          <option value="4393">VIETINBANK NGO QUYEN</option>
                          <option value="4394">VIETINBANK NGU HANH SON</option>
                          <option value="4395">VIETINBANK NGUYEN TRAI</option>
                          <option value="4396">VIETINBANK NHA BE</option>
                          <option value="4397">VIETINBANK NHI CHIEU</option>
                          <option value="4398">VIETINBANK NHON TRACH</option>
                          <option value="4399">VIETINBANK NINH BINH</option>
                          <option value="4400">VIETINBANK NINH THUAN</option>
                          <option value="4401">VIETINBANK PHU BAI</option>
                          <option value="4402">VIETINBANK PHU THO</option>
                          <option value="4403">VIETINBANK PHU YEN</option>
                          <option value="4404">VIETINBANK PHUC YEN</option>
                          <option value="4405">VIETINBANK QUANG BINH</option>
                          <option value="4406">VIETINBANK QUANG MINH</option>
                          <option value="4407">VIETINBANK QUANG NAM</option>
                          <option value="4408">VIETINBANK QUANG NGAI</option>
                          <option value="4409">VIETINBANK QUANG NINH</option>
                          <option value="4410">VIETINBANK QUANG TRI</option>
                          <option value="4411">VIETINBANK QUANG TRUNG</option>
                          <option value="4412">VIETINBANK SA DEC</option>
                          <option value="4413">VIETINBANK SAM SON</option>
                          <option value="4414">VIETINBANK SOC TRANG</option>
                          <option value="4415">VIETINBANK SON LA</option>
                          <option value="4416">VIETINBANK SONG CONG</option>
                          <option value="4417">VIETINBANK SONG NHUE</option>
                          <option value="4418">VIETINBANK TAM DIEP</option>
                          <option value="4419">VIETINBANK TAN BINH</option>
                          <option value="4420">VIETINBANK TAY HA NOI</option>
                          <option value="4421">VIETINBANK TAY NINH</option>
                          <option value="4422">
                            VIETINBANK TAY TIEN GIANG
                          </option>
                          <option value="4423">VIETINBANK THAI BINH</option>
                          <option value="4424">VIETINBANK THAI NGUYEN</option>
                          <option value="4425">VIETINBANK THANH HOA</option>
                          <option value="4426">VIETINBANK THANH XUAN</option>
                          <option value="4427">VIETINBANK THU DUC</option>
                          <option value="4428">VIETINBANK THU THIEM</option>
                          <option value="4429">
                            VIETINBANK THUA THIEN HUE
                          </option>
                          <option value="4430">VIETINBANK TIEN GIANG</option>
                          <option value="4431">VIETINBANK TIEN SON</option>
                          <option value="4432">VIETINBANK TO HIEU</option>
                          <option value="4433">VIETINBANK TP NAM DINH</option>
                          <option value="4434">VIETINBANK TRA VINH</option>
                          <option value="4435">VIETINBANK TUYEN QUANG</option>
                          <option value="4436">VIETINBANK TX PHU THO</option>
                          <option value="4437">VIETINBANK UONG BI</option>
                          <option value="4438">VIETINBANK VIET NAM</option>
                          <option value="4439">VIETINBANK VINH LONG</option>
                          <option value="4440">VIETINBANK VINH PHUC</option>
                          <option selected="" value="4441" data-select2-id="5">
                            VIETINBANK YEN BAI
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group mt-3">
                      <input
                        type="text"
                        placeholder="Chủ tài khoản..."
                        required=""
                        class="form-control"
                        name="acc_name"
                        value="nguyen the anh tu"
                      />
                    </div>
                    <div class="form-group mt-3">
                      <input
                        type="text"
                        placeholder="Số tài khoản..."
                        required=""
                        class="form-control"
                        name="acc_number"
                        value="1323454121"
                      />
                    </div>

                    <div class="form-group mt-3">
                      <p id="msg_err"></p>
                    </div>
                    <div class="form-group mt-3">
                      <button
                        class="btn btn-sm btn-primary m-t-n-xs"
                        style="float: right"
                        type="submit"
                        id="btn_add_bank"
                      >
                        <strong>Lưu thay đổi</strong>
                      </button>
                    </div>
                    <div class="clearfix"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="ibox">
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
                              checked
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
                    <strong> Chú ý:</strong> nếu chọn <strong>TẮT</strong> chúng
                    tôi sẽ tạo ra mã QR Code mới do đó bạn cần quét lại mã QR
                    Code
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
                      ><strong>Hướng dẫn: </strong>để kích hoạt dịch vụ bảo mật
                      2 lớp bạn cần quét mã QR Code bằng ứng dụng Google
                      Authenticator trên thiết bị của bạn sau đó chọn
                      <strong>BẬT</strong> nhập mã xác thực bấm xác thực để kích
                      hoạt dịch vụ</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 mt-5">
          <div class="ibox">
            <div class="ibox-content profile-content">
              <div>
                <h4>Cấu hình tạo đơn</h4>
                <form role="form" id="formSettingOrders">
                  <input type="hidden" name="user_id" value="1" />
                  <div class="form-group mt-3">
                    <label>Người Nhận có được quyền xem/thử sản phẩm</label
                    ><br />
                    <select
                      name="config_default"
                      class="
                        form-control
                        custom-select
                        select2-hidden-accessible
                      "
                      data-select2-id="6"
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      <option value="1">
                        Cho Xem Hàng Nhưng Không Cho Thử Hàng
                      </option>
                      <option value="2">Cho Thử Hàng</option>
                      <option value="3" selected="" data-select2-id="8">
                        Không Cho Xem Hàng
                      </option>
                    </select>
                  </div>
                  <div class="form-group mt-3 mt-3">
                    <label>Ghi chú mặc định</label><br />
                    <textarea
                      class="form-control autosizeme"
                      placeholder="Nhập khi chú mặc định tại đây"
                      name="note_default"
                      rows="3"
                    >
giao nhanh</textarea
                    >
                  </div>
                  <div class="row mt-3" style="font-size: 120%">
                    <div class="col-6">
                      <div class="form-group mt-3">
                        <div class="row">
                          <div class="col-md-6">
                            <label>Hiển thị SĐT người nhận </label>
                          </div>
                          <div class="col-md-6">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckChecked"
                                checked
                              />
                              <label
                                class="form-check-label"
                                for="flexSwitchCheckChecked"
                              ></label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-group mt-3">
                        <div class="row">
                          <div class="col-md-6">
                            <label>Hiển thị địa chỉ chi tiết người nhận</label>
                          </div>
                          <div class="col-md-6">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckChecked"
                                checked
                              />
                              <label
                                class="form-check-label"
                                for="flexSwitchCheckChecked"
                              ></label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group mt-3">
                    <label>Người trả phí</label><br />
                    <select
                      name="payer_default"
                      class="
                        form-control
                        custom-select
                        select2-hidden-accessible
                      "
                      data-select2-id="9"
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      <option value="1" selected="" data-select2-id="11">
                        Shop trả
                      </option>
                      <option value="2">Khách trả</option>
                    </select>
                    <span style="color: #ed5565"
                      >**LƯU Ý: chọn khách trả hệ thống sẽ cộng tiền cước vào
                      COD khi lên đơn</span
                    >
                  </div>
                  <div class="form-group mt-3">
                    <label>Phương thức gửi hàng</label><br />
                    <select
                      name="type_pick_default"
                      class="
                        form-control
                        custom-select
                        select2-hidden-accessible
                      "
                      data-select2-id="12"
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      <option value="1" data-select2-id="14">
                        Lấy hàng tận nơi
                      </option>
                      <option value="2">Gửi hàng tại bưu cục</option>
                    </select>
                  </div>
                  <div class="form-group mt-3">
                    <label>Kiểu bill in</label>
                    <select
                      name="type_print"
                      id="type_print"
                      class="
                        form-control
                        custom-select
                        select2-hidden-accessible
                      "
                      data-select2-id="type_print"
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      <option value="0" selected="" data-select2-id="16">
                        Khổ dọc
                      </option>
                      <option value="1">Khổ ngang</option>
                    </select>
                    <button
                      type="button"
                      id="previewPrint"
                      class="btn btn-primary btn-sm mt-3"
                    >
                      <i class="fa fa-eye" aria-hidden="true"></i> Xem mẫu bill
                    </button>
                    <div id="divPrint"></div>
                  </div>
                  <div class="form-group mt-3">
                    <p id="msg_err_setting"></p>
                  </div>
                  <div class="form-group mt-3">
                    <button
                      class="btn btn-sm btn-primary m-t-n-xs mb-3"
                      style="float: right"
                      type="submit"
                      id="btn_setting"
                    >
                      <strong>Lưu thay đổi</strong>
                    </button>
                  </div>

                  <div class="clearfix"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="float-right">
          <!-- <strong>Liên hệ: 0588285555 - Email: info@fastship.vn</strong> -->
        </div>
        <div>
          <strong>Copyright By KSOFT</strong>
        </div>
      </div>
    </div>
  </Layout>
</template>
