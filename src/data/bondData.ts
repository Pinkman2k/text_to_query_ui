
const bond_name_to_code = {
  "22内蒙古债09": "2205474.IB",
  "19河南33": "157947.IB",
  "19四川15": "157588.IB",
  "20崇左养老债": "2080141.IB",
  "19山东22": "157711.SH",
  "21江西债31": "2171016.IB",
  "18海安动迁债02": "1880285.IB",
  "21广西债01": "2105062.IB",
  "21广东债34": "2105266.IB",
  "22湘江集团债01": "2280038.IB",
  "20太原国投MTN001": "102002232.IB",
  "20黑龙江债03": "2005059.IB",
  "21铁道06": "2180138.IB",
  "22山东债03": "2205135.IB",
  "20安徽债24": "2005732.IB",
  "21温岭03": "197661.SH",
  "17附息国债15": "170015.IB",
  "21嘉湘专项债01": "2180096.IB",
  "22山西债11": "2205442.IB",
  "21西藏债19": "2171468.IB",
  "22云南债05": "2205034.IB",
  "21湖北债144": "2171129.IB",
  "19新平城投债01": "1980029.IB",
  "16铁道10": "1680449.IB",
  "20津建03": "177311.SH",
  "20山西债24": "104914.IB",
  "绿源次级": "116535.SZ",
  "21广西债21": "2105761.IB",
  "21内蒙古债40": "2171348.IB",
  "20广东债13": "104749.IB",
  "21鲁能01": "188397.SH",
  "惠科05": "189506.SH",
  "20浙江债22": "2005515.IB",
  "20河南债12": "2005012.IB",
  "20南浔专项债01": "2080338.IB",
  "20北部湾保险01": "2023022.IB",
  "19四川84": "157709.IB",
  "20吉林债33": "2005659.IB",
  "22九江城投MTN001": "102280018.IB",
  "H9金科03": "112924.SZ",
  "22北京债07": "2205029.IB",
  "20四川债116": "104927.IB",
  "21新疆债25": "2105466.IB",
  "17颍东农商二级01": "1721040.IB",
  "21东证C3": "175994.SH",
  "14国开15": "140215.IB",
  "19舟山金建债01": "1980186.IB",
  "21京投次": "193723.SH",
  "22河北债22": "2205834.IB",
  "22人才安居GN001": "132280008.IB",
  "步步高1": "121539.SZ",
  "21厦门国际银行永续债01": "2120115.IB",
  "22江西债14": "2205286.IB",
  "20广东债30": "104788.IB"
};

const func_cn_to_info = {
  "ABS会计事务所全称": {
    "api": "abs_acctg_firm",
    "dataType": "STRING",
    "example_sql": ""
  },
  "ABS实际融资人全称": {
    "api": "abs_actl_fin",
    "dataType": "STRING",
    "example_sql": ""
  },
  "增信机构列表": {
    "api": "abs_actl_fin_full_nm",
    "dataType": "STRING",
    "example_sql": ""
  },
  "ABS资产服务机构全称": {
    "api": "abs_asset_serv_full_nm",
    "dataType": "STRING",
    "example_sql": ""
  },
  "资产类型分类": {
    "api": "abs_asset_typ",
    "dataType": "STRING",
    "example_sql": "select sec_code_par,abs_asset_typ(sec_code_par,1),abs_asset_typ(sec_code_par,2),abs_asset_typ(sec_code_par,3),abs_asset_typ(sec_code_par,0) from security_info where sec_code_par in (261484.SH,082380908.IB,082100148.IB)"
  },
  "ABS信用主体代码": {
    "api": "abs_crdt_enty_inst_code",
    "dataType": "STRING",
    "example_sql": "select abs_crdt_enty_inst_code(sec_code_par) from security_info where sec_code_par in (123574.SH)"
  },
  "ABS信用主体全称": {
    "api": "abs_crdt_enty_inst_full_nm2",
    "dataType": "STRING",
    "example_sql": ""
  },
  "ABS托管机构全称": {
    "api": "abs_cstn_full_nm",
    "dataType": "STRING",
    "example_sql": ""
  },
  "ABS首次支付日": {
    "api": "abs_frst_pay_dt",
    "dataType": "STRING",
    "example_sql": ""
  },
  "ABS基础债务人全称": {
    "api": "abs_undl_debtor_full_nm",
    "dataType": "STRING",
    "example_sql": ""
  },
  "ABS发行/计划管理人全称": {
    "api": "abs_issr_or_pln_mgr_full_nm",
    "dataType": "STRING",
    "example_sql": ""
  },
  "ABS律师事务所全称": {
    "api": "abs_law_firm_full_nm",
    "dataType": "STRING",
    "example_sql": ""
  },
  "ABS清算结束日": {
    "api": "abs_liq_end_dt",
    "dataType": "STRING",
    "example_sql": ""
  },
  "ABS清算开始日": {
    "api": "abs_liq_strt_dt",
    "dataType": "STRING",
    "example_sql": ""
  },
  "ABS流动性支持机构全称": {
    "api": "abs_liq_sup_full_nm",
    "dataType": "STRING",
    "example_sql": ""
  },
  "ABS产品全称": {
    "api": "abs_nm",
    "dataType": "STRING",
    "example_sql": ""
  },
  "ABS产品状态": {
    "api": "abs_prod_sts",
    "dataType": "STRING",
    "example_sql": "select sec_code_par,abs_prod_sts(sec_code_par) from security_info where sec_code_par in (121588.SZ,264003.SH,082380908.IB,082100148.IB)"
  },
  "ABS差额支付承诺人全称": {
    "api": "abs_sf_pay_grntr_full_nm",
    "dataType": "STRING",
    "example_sql": ""
  },
  "ABS发起/原始受益人全称": {
    "api": "abs_spon_or_orig_full_nm",
    "dataType": "STRING",
    "example_sql": ""
  },
  "资产类型一级分类": {
    "api": "abs_type1",
    "dataType": "STRING",
    "example_sql": ""
  },
  "资产类型二级分类": {
    "api": "abs_type2",
    "dataType": "STRING",
    "example_sql": ""
  },
  "资产类型三级分类": {
    "api": "abs_type3",
    "dataType": "STRING",
    "example_sql": ""
  },
  "绝对流动性系数": {
    "api": "absolute_liq_coef",
    "dataType": "DOUBLE",
    "example_sql": "select absolute_liq_coef(sec_code_par,20231204,推荐) from security_info where sec_code_par in (177931.SH,XS2281799572.OB)"
  },
  "会计师费用": {
    "api": "accountant_fees",
    "dataType": "DOUBLE",
    "example_sql": "select accountant_fees(sec_code_par) from security_info where sec_code_par in (118031.SH)"
  },
  "已计息天数": {
    "api": "accrued_dys",
    "dataType": "INT",
    "example_sql": "select accrued_dys(sec_code_par,20280627) from security_info where sec_code_par in (240205.IB)"
  },
  "应计利息": {
    "api": "accrued_int_csi_bond_val",
    "dataType": "DOUBLE",
    "example_sql": "select accrued_int_csi_bond_val(sec_code_par,20240220) from security_info where sec_code_par = 177483.SH"
  },
  "违约日逾期利息": {
    "api": "accrued_int_dflt",
    "dataType": "DOUBLE",
    "example_sql": ""
  },
  "应付账款": {
    "api": "acct_pay",
    "dataType": "DOUBLE",
    "example_sql": "select acct_pay(institution_code,20210630,1) from security_info where sec_code_par in (177483.SH,111989792.IB,193403.SH,139009.SZ)"
  },
  "应付账款周转天数": {
    "api": "acct_pay_dy",
    "dataType": "DOUBLE",
    "example_sql": "select acct_pay_dy(sec_code_par, 20230930) from security_info where sec_code_par in (012101783.IB)"
  },
  "应付账款周转率": {
    "api": "acct_pay_turn_rti",
    "dataType": "DOUBLE",
    "example_sql": "select acct_pay_turn_rti(sec_code_par, 20230930) from security_info where sec_code_par in (012101783.IB)"
  },
  "应收账款": {
    "api": "acct_rec",
    "dataType": "DOUBLE",
    "example_sql": "select acct_rec(institution_code,20210630,1) from security_info where sec_code_par in (177483.SH,111989792.IB,193403.SH,139009.SZ)"
  },
  "会计师事务所": {
    "api": "acctg_firm",
    "dataType": "STRING",
    "example_sql": "select Acctg_firm(sec_code_par) from security_info where sec_code_par in (102481515.IB)"
  },
  "预提费用增加": {
    "api": "accured_exp_incr",
    "dataType": "DOUBLE",
    "example_sql": "select accured_exp_incr(institution_code,20221231,1) from security_info where sec_code_par=0581010.IB"
  },
  "速动比率": {
    "api": "acid_tst_rti",
    "dataType": "DOUBLE",
    "example_sql": "select acid_tst_rti(sec_code_par, 20230930) from security_info where sec_code_par in (012101783.IB)"
  },
  "购买融资租赁资产支付的现金": {
    "api": "acq_fin_lse_cof",
    "dataType": "DOUBLE",
    "example_sql": "select acq_fin_lse_cof(institution_code, 20170930, 1) from security_info where sec_code_par in (012000601.IB,111717039.IB,193203.SH,139009.SZ)"
  },
  "取得子公司及其他营业单位支付的现金净额": {
    "api": "acq_sub_othr_opent_cof",
    "dataType": "DOUBLE",
    "example_sql": "select acq_sub_othr_opent_cof(institution_code, 20161231, 2) from security_info where sec_code_par in (101459041.IB,111771015.IB,1623006.IB,139009.SZ)"
  },
  "存款应计利息": {
    "api": "acrd_int_of_dpst",
    "dataType": "DOUBLE",
    "example_sql": ""
  },
  "实际控股人类型<实控人企业类型>": {
    "api": "actl_cntl_entp_typ",
    "dataType": "STRING",
    "example_sql": "select actl_cntl_entp_typ(institution_code) from security_info where  sec_code_par=102103075.IB"
  },
  "实际控制人": {
    "api": "actl_cntl_nm",
    "dataType": "STRING",
    "example_sql": "select actl_cntl_nm(institution_code) from security_info where sec_code_par=102103075.IB"
  },
  "实际到期日": {
    "api": "actl_mat_dt_abs",
    "dataType": "STRING",
    "example_sql": ""
  },
  "网下实际发行金额": {
    "api": "actl_ofln_iss_amt",
    "dataType": "DOUBLE",
    "example_sql": "select actl_ofln_iss_amt(sec_code_par) from security_info where sec_code_par in (113042.SH)"
  },
  "网上实际发行金额": {
    "api": "actl_onln_iss_amt",
    "dataType": "DOUBLE",
    "example_sql": "select actl_onln_iss_amt(sec_code_par) from security_info where sec_code_par in (128139.SZ)"
  },
  "实际兑付日3": {
    "api": "actl_rdm_dt_3",
    "dataType": "STRING",
    "example_sql": "select actl_rdm_dt_3(sec_code_par) from security_info where sec_code_par = 032100018.IB"
  },
  "成交量": {
    "api": "deal_vol_fut_dy",
    "dataType": "DOUBLE",
    "example_sql": "select deal_vol_fut_dy(sec_code_par,20240620) from security_info where sec_code_par in (TF2409.CFE)"
  },
  "复权因子": {
    "api": "acum_cmpd_wt_factor",
    "dataType": "DOUBLE",
    "example_sql": ""
  },
  "上市以来累计现金分红次数": {
    "api": "acum_div_nbr_listed",
    "dataType": "INT",
    "example_sql": "select acum_div_nbr_listed(sec_code_par,20240805) from security_info where sec_code_par in (000651.SZ)"
  },
  "近3年累计分红总额": {
    "api": "acum_div_pay_3y",
    "dataType": "DOUBLE",
    "example_sql": "select acum_div_pay_3y(sec_code_par, 20240805) from security_info where sec_code_par in (000651.SZ)"
  },
  "上市以来累计分红总额": {
    "api": "acum_div_pay_listed",
    "dataType": "DOUBLE",
    "example_sql": "select acum_div_pay_listed(sec_code_par) from security_info where sec_code_par in (000651.SZ)"
  },
  "近3年累计分红占比": {
    "api": "acum_div_pay_rt_3y",
    "dataType": "DOUBLE",
    "example_sql": "select acum_div_pay_rt_3y(sec_code_par, 20240805) from security_info where sec_code_par in (000651.SZ)"
  },
  "贷款应计利息": {
    "api": "acum_int_of_ln",
    "dataType": "DOUBLE",
    "example_sql": ""
  },
  "上市以来累计实现净利润": {
    "api": "acum_par_np_listed",
    "dataType": "DOUBLE",
    "example_sql": "select acum_par_np_listed(sec_code_par) from security_info where sec_code_par in (000651.SZ)"
  },
  "成交额": {
    "api": "acum_turnover",
    "dataType": "DOUBLE",
    "example_sql": ""
  },
  "资本公积": {
    "api": "add_paid_in_cptl",
    "dataType": "DOUBLE",
    "example_sql": "select Add_Paid_In_Cptl(institution_code,20230630,1) from security_info where sec_code_par in (177483.SH,112291743.IB,169985.SH,139976.SZ)"
  },
  "每股资本公积": {
    "api": "addl_pd_in_cptl_per_shr",
    "dataType": "DOUBLE",
    "example_sql": "select addl_pd_in_cptl_per_shr(sec_code_par, 20230930) from security_info where sec_code_par in (012101783.IB)"
  },
  "每股资本公积2": {
    "api": "addl_pd_in_cptl_per_shr2",
    "dataType": "DOUBLE",
    "example_sql": ""
  },
  "附加回售条款": {
    "api": "addl_put_clause",
    "dataType": "STRING",
    "example_sql": "select Addl_put_clause(sec_code_par) from security_info where sec_code_par in (118031.SH)"
  },
  "资产处置收益": {
    "api": "adg",
    "dataType": "DOUBLE",
    "example_sql": "select adg(institution_code,20191231,3) from security_info where sec_code_par in (177483.SH,112291743.IB,193203.SH,139009.SZ)"
  },
  "管理费用": {
    "api": "adm_exp",
    "dataType": "DOUBLE",
    "example_sql": "select adm_exp(institution_code,20201231,1) from security_info where sec_code_par in (177483.SH,112291743.IB,193203.SH,139009.SZ)"
  },
  "管理费用/营业总收入": {
    "api": "adm_exp_to_tot_or",
    "dataType": "DOUBLE",
    "example_sql": "select adm_exp_to_tot_or(sec_code_par, 20230930) from security_info where sec_code_par in (102383080.IB)"
  },
  "审计意见类型": {
    "api": "adt_opin",
    "dataType": "STRING",
    "example_sql": "select Adt_Opin(institution_code,20191231) from security_info where sec_code_par in (041260078.IB)"
  },
  "审计报告公告日期": {
    "api": "adt_rpt_annc_dt",
    "dataType": "STRING",
    "example_sql": ""
  },
  "代理业务资产": {
    "api": "agnt_asset",
    "dataType": "DOUBLE",
    "example_sql": "select agnt_asset(institution_code,20161231,1) from security_info where sec_code_par in (112291743.IB)"
  },
  "代理业务负债": {
    "api": "agnt_lia",
    "dataType": "DOUBLE",
    "example_sql": "select agnt_lia(institution_code,20180930,2) from security_info where sec_code_par in (012103965.IB,112080847.IB,1623001.IB,142490.SH)"
  },
  "代理买卖证券款": {
    "api": "agnt_tra_sec",
    "dataType": "DOUBLE",
    "example_sql": "select Agnt_Tra_Sec(institution_code,20220930,1) from security_info where sec_code_par in (155762.SH,112291743.IB,02318.HK,165269.SH)"
  },
  "代理买卖证券收到的现金净额": {
    "api": "agnt_tra_sec_cif",
    "dataType": "DOUBLE",
    "example_sql": "select agnt_tra_sec_cif(institution_code, 20221231, 1) from security_info where sec_code_par in (012000601.IB,112113241.IB,000627.SZ,139976.SZ)"
  },
  "代理买卖证券支付的现金净额": {
    "api": "agnt_tra_sec_cof",
    "dataType": "DOUBLE",
    "example_sql": "select agnt_tra_sec_cof(institution_code, 20221231, 1) from security_info where sec_code_par in (012000601.IB,111717039.IB,193203.SH,139009.SZ)"
  },
  "以摊余成本计量的金融资产": {
    "api": "amort_fin_asset",
    "dataType": "DOUBLE",
    "example_sql": "select amort_fin_asset(institution_code,20190930,1) from security_info where sec_code_par in (012003258.IB,112106258.IB,123069.SH)"
  },
  "无形资产摊销": {
    "api": "amort_ia",
    "dataType": "DOUBLE",
    "example_sql": "select amort_ia(institution_code,20221231,1) from security_info where sec_code_par=0581010.IB"
  },
  "摊回赔付支出": {
    "api": "amort_indnt_exp",
    "dataType": "DOUBLE",
    "example_sql": "select amort_indnt_exp(institution_code,20161231,1) from security_info where sec_code_par in (193203.SH)"
  },
  "摊回保险责任准备金": {
    "api": "amort_ins_rsrv",
    "dataType": "DOUBLE",
    "example_sql": "select amort_ins_rsrv(institution_code,20161231,1) from security_info where sec_code_par in (193203.SH)"
  },
  "长期待摊费用摊销": {
    "api": "amort_lt_dfr_exp",
    "dataType": "DOUBLE",
    "example_sql": "select amort_lt_dfr_exp(institution_code,20221231,1) from security_info where sec_code_par=0581010.IB"
  },
  "使用权资产折旧": {
    "api": "amorti_rightofuse",
    "dataType": "DOUBLE",
    "example_sql": ""
  },
  "振幅": {
    "api": "amplitude",
    "dataType": "DOUBLE",
    "example_sql": ""
  },
  "过去5个交易日的平均每分钟成交量": {
    "api": "amtv_5td",
    "dataType": "DOUBLE",
    "example_sql": "select sec_code_par,cstr(amtv_5td(sec_code_par,20240802)) from security_info where sec_code_par=688709.SH"
  },
  "公告日期": {
    "api": "annc_dt_incm_stmt",
    "dataType": "STRING",
    "example_sql": "select annc_dt_incm_stmt(institution_code,20151231,1) from security_info where sec_code_par in (177483.SH,112291743.IB,193203.SH,139009.SZ)"
  },
  "每年付息次数": {
    "api": "annl_cpn_pay_cnt",
    "dataType": "INT",
    "example_sql": ""
  },
  "总资产报酬率": {
    "api": "rtn_on_ta_1",
    "dataType": "DOUBLE",
    "example_sql": ""
  },
  "总资产利润率": {
    "api": "rtn_on_ta_2",
    "dataType": "DOUBLE",
    "example_sql": ""
  },
  "总资产净利率": {
    "api": "rtn_on_ta_3",
    "dataType": "DOUBLE",
    "example_sql": "select rtn_on_ta_3(institution_code,20230930) from security_info where sec_code_par=000002.SZ"
  },
  "年化区间回报率": {
    "api": "annu_rtn_rt_rng",
    "dataType": "DOUBLE",
    "example_sql": "select Annu_Rtn_Rt_Rng(sec_code_par, 20250414, 20250514) from security_info where sec_code_par=SPCL.SHF"
  },
  "年化区间回报率2": {
    "api": "annu_rtn_rt_rng2",
    "dataType": "DOUBLE",
    "example_sql": "select sec_code_par, Rtn_Rt_Rng(sec_code_par,  20250519, 20250522),Rtn_Rt_Rng2(sec_code_par, 20250519, 20250522) from security_info where sec_code_par=HSI.HK"
  },
  "应收账款周转天数": {
    "api": "ar_dy",
    "dataType": "DOUBLE",
    "example_sql": "select ar_dy(sec_code_par, 20230930) from security_info where sec_code_par in (041564043.IB)"
  },
  "应收账款周转率": {
    "api": "ar_turn_rti",
    "dataType": "DOUBLE",
    "example_sql": "select ar_turn_rti(sec_code_par, 20230930) from security_info where sec_code_par in (041564043.IB)"
  },
  "地区": {
    "api": "area",
    "dataType": "STRING",
    "example_sql": ""
  },
  "定向转让日+价格": {
    "api": "asgn_trans_str",
    "dataType": "STRING",
    "example_sql": "select Asgn_Trans_Str(sec_code_par) from security_info where sec_code_par in (1524002.IB)"
  },
  "关联CRM债券编码": {
    "api": "assc_crm_bnd_code",
    "dataType": "STRING",
    "example_sql": ""
  },
  "资产减值损失/营业利润": {
    "api": "asset_il_to_oper_prft",
    "dataType": "DOUBLE",
    "example_sql": "select asset_il_to_oper_prft(sec_code_par, 20230930) from security_info where sec_code_par in (041564043.IB)"
  },
  "资产减值损失/营业总收入": {
    "api": "asset_il_to_tot_or",
    "dataType": "DOUBLE",
    "example_sql": "select asset_il_to_tot_or(sec_code_par, 20230930) from security_info where sec_code_par in (102481864.IB)"
  },
  "资产减值损失": {
    "api": "asset_impair_loss",
    "dataType": "DOUBLE",
    "example_sql": "select asset_impair_loss(institution_code,20151231,1) from security_info where sec_code_par in (177483.SH,112291743.IB,193203.SH,139009.SZ)"
  },
  "剔预负债率%": {
    "api": "asset_lia_rt",
    "dataType": "DOUBLE",
    "example_sql": "select asset_lia_rt(institution_code,20220331) from security_info where sec_code_par=S02090.IB"
  },
  "资产周转率": {
    "api": "asset_turn_rti_muni",
    "dataType": "DOUBLE",
    "example_sql": ""
  },
  "预计负债": {
    "api": "atpt_lia",
    "dataType": "DOUBLE",
    "example_sql": "select Atpt_Lia(institution_code,20160630,1) from security_info where sec_code_par in (012103965.IB,112291743.IB,193203.SH,139976.SZ)"
  },
  "招标/建档开始日2": {
    "api": "auct_date2",
    "dataType": "STRING",
    "example_sql": "select auct_date2(sec_code_par) from security_info where sec_code_par in (032101057.IB,140431X3.IB,111509032.IB)"
  },
  "招标/建档开始日": {
    "api": "auct_dt",
    "dataType": "STRING",
    "example_sql": "select auct_dt(sec_code_par) from security_info where  sec_code_par in (032280036.IB,032100889.IB,193443.SH,140431X3.IB,130236X5.IB)"
  },
  "招标标的": {
    "api": "auct_items_auct",
    "dataType": "STRING",
    "example_sql": "select auct_items_auct(sec_code_par) from security_info where sec_code_par in (2205122.IB,2205298.IB)"
  },
  "招标建档截止时间": {
    "api": "auct_tm_end",
    "dataType": "STRING",
    "example_sql": "select auct_tm_end(sec_code_par) from security_info where sec_code_par in (101576004.IB,240214X1.IB)"
  },
  "招标建档时间段": {
    "api": "auct_tm_rng",
    "dataType": "STRING",
    "example_sql": "select auct_tm_rng(sec_code_par) from security_info where sec_code_par in (112497133.IB,1780172.IB,102102027.IB,210218.IB,180411X18.IB,180411.IB)"
  },
  "招标/建档结束日": {
    "api": "auction_end_dt",
    "dataType": "STRING",
    "example_sql": "select auction_end_dt(sec_code_par) from security_info where sec_code_par in (122406.SH)"
  },
  "招标方式": {
    "api": "auction_typ_auct",
    "dataType": "STRING",
    "example_sql": "select auction_typ_auct(sec_code_par) from security_info where sec_code_par in (2205122.IB)"
  },
  "自动修正公式": {
    "api": "auto_revs_formula",
    "dataType": "STRING",
    "example_sql": "select auto_revs_formula(sec_code_par) from security_info where sec_code_par in (137019.SH)"
  },
  "买入收益率均值偏离估值": {
    "api": "avg_bid_yld_dev_fr_val_bond_liq",
    "dataType": "DOUBLE",
    "example_sql": "select avg_bid_yld_dev_fr_val_bond_liq(sec_code_par,20240327) from security_info where sec_code_par = 102280888.IB"
  },
  "计息负债平均成本率": {
    "api": "avg_cost_intb_lia",
    "dataType": "DOUBLE",
    "example_sql": "select avg_cost_intb_lia(institution_code,20230930) from security_info where  sec_code_par=111611267.IB"
  },
  "现金平均余额": {
    "api": "avg_csh_bal",
    "dataType": "DOUBLE",
    "example_sql": ""
  },
  "上市以来平均分红率": {
    "api": "avg_div_rt_listed",
    "dataType": "DOUBLE",
    "example_sql": "select avg_div_rt_listed(sec_code_par) from security_info where sec_code_par in (000651.SZ)"
  },
  "生息资产平均余额": {
    "api": "avg_int_brg_asset",
    "dataType": "DOUBLE",
    "example_sql": "select avg_int_brg_asset(institution_code,20230930) from security_info where  sec_code_par=111611267.IB"
  },
  "计息负债平均余额": {
    "api": "avg_int_brg_lia",
    "dataType": "DOUBLE",
    "example_sql": "select avg_int_brg_lia(institution_code,20230930) from security_info where  sec_code_par=111611267.IB"
  },
  "卖出收益率均值偏离估值": {
    "api": "avg_ofr_yld_dev_fr_val_bond_liq",
    "dataType": "DOUBLE",
    "example_sql": "select avg_ofr_yld_dev_fr_val_bond_liq(sec_code_par,20240327) from security_info where sec_code_par = 102280888.IB"
  },
  "近3年平均归母净利润": {
    "api": "avg_par_np_3y",
    "dataType": "DOUBLE",
    "example_sql": "select avg_par_np_3y(sec_code_par, 20240805) from security_info where sec_code_par in (000651.SZ)"
  },
  "区间均价": {
    "api": "avg_prc_rng_fut",
    "dataType": "DOUBLE",
    "example_sql": "select avg_prc_rng_fut(sec_code_par,20240521,20240620) from security_info where sec_code_par in (TF2409.CFE)"
  },
  "平均收益率": {
    "api": "avg_yld_broker_dy",
    "dataType": "DOUBLE",
    "example_sql": "select avg_yld_broker_dy(sec_code_par,20240319) from security_info where sec_code_par = 230207.IB"
  },
  "平均成交利差": {
    "api": "avg_yld_sprd_hst_avg",
    "dataType": "DOUBLE",
    "example_sql": "select Avg_Yld_Sprd_Hst_Avg(sec_code_par,240203.IB,20240401,20240430) from security_info where sec_code_par in (184452.SH)"
  },
  "可供出售金融资产": {
    "api": "avl_for_sell_fin_asset",
    "dataType": "DOUBLE",
    "example_sql": "select avl_for_sell_fin_asset(institution_code,20151231,1) from security_info where sec_code_par in (177483.SH,112291743.IB,193203.SH,139009.SZ)"
  },
  "余额包销数量": {
    "api": "bal_uw_amt",
    "dataType": "DOUBLE",
    "example_sql": "select bal_uw_amt(sec_code_par) from security_info where sec_code_par in (113621.SH)"
  },
  "股价达标天数": {
    "api": "bar_dys",
    "dataType": "STRING",
    "example_sql": "select bar_dys(sec_code_par) from security_info where sec_code_par in (118031.SH)"
  },
  "股价达标价格": {
    "api": "bar_prc_ratio",
    "dataType": "STRING",
    "example_sql": "select bar_prc_ratio(sec_code_par) from security_info where sec_code_par in (118031.SH)"
  },
  "基本投标单位": {
    "api": "bas_bidding_unit",
    "dataType": "DOUBLE",
    "example_sql": "select bas_bidding_unit(sec_code_par) from security_info where sec_code_par in (180210X17.IB)"
  },
  "基本每股收益": {
    "api": "bas_eps",
    "dataType": "DOUBLE",
    "example_sql": "select bas_eps(sec_code_par, 20230930,1) from security_info where sec_code_par in (301408.SZ)"
  },
  "基本承销额度": {
    "api": "bas_uw_quota",
    "dataType": "DOUBLE",
    "example_sql": "select bas_uw_quota(sec_code_par) from security_info where sec_code_par in (1805306.IB)"
  },
  "回购业务资金净增加额": {
    "api": "bbk_fund_ni",
    "dataType": "DOUBLE",
    "example_sql": "select bbk_fund_ni(institution_code, 20221231, 1) from security_info where sec_code_par in (012000601.IB,112113241.IB,000627.SZ,139009.SZ)"
  },
  "应付短期融资款": {
    "api": "bdgg_fin_pay",
    "dataType": "DOUBLE",
    "example_sql": "select Bdgg_Fin_Pay(institution_code,20220930,1) from security_info where sec_code_par in (012103965.IB,112291743.IB,189896.SH,142490.SH)"
  },
  "有形净值债务率": {
    "api": "bebt_to_tang_nw_rti",
    "dataType": "DOUBLE",
    "example_sql": "select bebt_to_tang_nw_rti(sec_code_par, 20230930) from security_info where sec_code_par in (011698160.IB)"
  },
  "期初现金及现金等价物余额": {
    "api": "begn_bal_of_cce",
    "dataType": "DOUBLE",
    "example_sql": "select begn_bal_of_cce(institution_code, 20221231, 1) from security_info where sec_code_par in (101451025.IB,111975205.IB,183493.SH,116631.SZ)"
  },
  "现金的期初余额": {
    "api": "begn_bal_of_csh",
    "dataType": "DOUBLE",
    "example_sql": "select begn_bal_of_csh(institution_code,20221231,1) from security_info where sec_code_par=0581010.IB"
  },
  "现金等价物的期初余额": {
    "api": "begn_bal_of_csh_eq",
    "dataType": "DOUBLE",
    "example_sql": "select begn_bal_of_csh_eq(institution_code,20221231,1) from security_info where sec_code_par=0581010.IB"
  },
  "买入天数排名": {
    "api": "bid_dy_cnt_rnk",
    "dataType": "DOUBLE",
    "example_sql": ""
  },
  "招标区间<申购区间>": {
    "api": "bid_lim_rng",
    "dataType": "STRING",
    "example_sql": "select bid_lim_rng(sec_code_par) from security_info where sec_code_par in (111698005.IB,230302X20.IB,032101057.IB,112218060.IB)"
  },
  "投标区间下限": {
    "api": "bid_low_lim",
    "dataType": "DOUBLE",
    "example_sql": "select bid_low_lim(sec_code_par) from security_info where sec_code_par in (197640.SH, 1705430.IB)"
  },
  "全场倍数": {
    "api": "bidding_mult",
    "dataType": "DOUBLE",
    "example_sql": "select bidding_mult(sec_code_par) from security_info where sec_code_par in (2205122.IB,2205298.IB)"
  },
  "投标区间上限": {
    "api": "bid_upr_lim",
    "dataType": "DOUBLE",
    "example_sql": "select bid_upr_lim(sec_code_par) from security_info where sec_code_par in (197640.SH, 1705430.IB)"
  },
  "中标利率": {
    "api": "bid_win_rt",
    "dataType": "DOUBLE",
    "example_sql": "select bid_win_rt(sec_code_par) from security_info where sec_code_par in (170415X13.IB,180401.IB)"
  },
  "投标家数": {
    "api": "bidding_numbers",
    "dataType": "INT",
    "example_sql": "select bidding_numbers(sec_code_par) from security_info where sec_code_par in (160410.IB)"
  },
  "双边天数排名": {
    "api": "bltrl_dy_cnt_rnk",
    "dataType": "DOUBLE",
    "example_sql": ""
  },
  "双边利差中值": {
    "api": "bltrl_sprd_mdn_bond_liq",
    "dataType": "DOUBLE",
    "example_sql": "select bltrl_sprd_mdn_bond_liq(sec_code_par,20240327) from security_info where sec_code_par = 102280888.IB"
  },
  "曲线代码对应曲线名称": {
    "api": "bm_curve_nm",
    "dataType": "STRING",
    "example_sql": ""
  },
  "ETF跟踪指数代码": {
    "api": "bm_indx_code_etf",
    "dataType": "STRING",
    "example_sql": "select bm_indx_code_etf(sec_code_par) from security_info where sec_code_par=561280.SH"
  },
  "小数处理法": {
    "api": "bm_int_fix_tl",
    "dataType": "STRING",
    "example_sql": "select fixing_tailing(sec_code_par) from security_info where sec_code_par in (100204.IB, 111590812.IB,111590812.IB)"
  },
  "基准利率": {
    "api": "indx_rt",
    "dataType": "DOUBLE",
    "example_sql": ""
  },
  "基准利率确定方式": {
    "api": "bm_ir_meth",
    "dataType": "STRING",
    "example_sql": "select bm_ir_meth(sec_code_par) from security_info where sec_code_par in (140431X3.IB,1489051.IB)"
  },
  "基准交易日天数": {
    "api": "bm_trd_dys",
    "dataType": "STRING",
    "example_sql": "select bm_trd_dys(sec_code_par) from security_info where sec_code_par in (118031.SH)"
  },
  "单券区间实际行权净额": {
    "api": "bnd_actl_exrcs_net_amt_rng",
    "dataType": "DOUBLE",
    "example_sql": "select bnd_actl_exrcs_net_amt_rng(sec_code_par,20220601,20290606) from security_info where sec_code_par in (149931.SZ)"
  },
  "单券区间实际付息额": {
    "api": "bnd_actl_int_pay_rng",
    "dataType": "DOUBLE",
    "example_sql": "select bnd_actl_int_pay_rng(sec_code_par,20220601,20290606,否) from security_info where sec_code_par in (149931.SZ)"
  },
  "单券区间实际普通还本兑付额": {
    "api": "bnd_actl_ord_prin_rpy_rng",
    "dataType": "DOUBLE",
    "example_sql": "select bnd_actl_ord_prin_rpy_rng(sec_code_par,20220601,20290606) from security_info where sec_code_par in (149931.SZ)"
  },
  "所属债券概念板块名称": {
    "api": "bnd_cncpt_sect_nm",
    "dataType": "STRING",
    "example_sql": "select bnd_cncpt_sect_nm(sec_code_par) from security_info where sec_code_par in (132100011.IB)"
  },
  "单券区间净融资额": {
    "api": "bnd_net_fin_amt_rng",
    "dataType": "DOUBLE",
    "example_sql": "select bnd_net_fin_amt_rng(sec_code_par,20220601,20290606,否,是) from security_info where sec_code_par in (149931.SZ)"
  },
  "单券区间预计行权净额": {
    "api": "bnd_pln_exrcs_net_amt_rng",
    "dataType": "DOUBLE",
    "example_sql": "select bnd_pln_exrcs_net_amt_rng(sec_code_par,20220601,20290606,是) from security_info where sec_code_par in (149931.SZ)"
  },
  "单券区间预计付息额": {
    "api": "bnd_pln_int_pay_rng",
    "dataType": "DOUBLE",
    "example_sql": "select bnd_pln_int_pay_rng(sec_code_par,20220601,20290606,否,是) from security_info where sec_code_par in (149931.SZ)"
  },
  "单券区间预计普通还本兑付额": {
    "api": "bnd_pln_ord_prin_rpy_rng",
    "dataType": "DOUBLE",
    "example_sql": "select bnd_pln_ord_prin_rpy_rng(sec_code_par,20220601,20290606,否) from security_info where sec_code_par in (149931.SZ)"
  },
  "债项最新评级代码2": {
    "api": "bnd_rtg_cur_code2",
    "dataType": "STRING",
    "example_sql": "select Bond_Rating_Cur_Code(sec_code_par),bnd_rtg_cur_code2(sec_code_par) from security_info where sec_code_par=184690.SH"
  },
  "债券子类型": {
    "api": "bond_subtyp",
    "dataType": "STRING",
    "example_sql": "select bond_subtyp(sec_code_par) from security_info where  sec_code_par in  (193443.SH,140431X3.IB,111509032.IB,032280036.IB,111996015.IB,111593142.IB,112171931.IB,112171940.IB,111509032.IB,111822003.IB,111593178.IB,111789957.IB,112105217.IB)"
  },
  "债券子分类": {
    "api": "bond_subtyp2",
    "dataType": "STRING",
    "example_sql": "select bond_subtyp2(sec_code_par) from security_info where sec_code_par=2205122.IB"
  },
  "单券区间发行债券总额": {
    "api": "bnd_tot_amt_iss_rng",
    "dataType": "DOUBLE",
    "example_sql": "select bnd_tot_amt_iss_rng(sec_code_par,20220601,20290606) from security_info where sec_code_par in (149931.SZ)"
  },
  "债券分类": {
    "api": "bond_type2_ss",
    "dataType": "STRING",
    "example_sql": "select sec_code_par,bond_type2_ss(sec_code_par),bnd_subtype2_ss(sec_code_par) from security_info where sec_code_par in (130024.IB)"
  },
  "存放中央银行和同业款项净增加额": {
    "api": "bnk_and_fi_dpst_ni",
    "dataType": "DOUBLE",
    "example_sql": "select bnk_and_fi_dpst_ni(institution_code, 20221231, 1) from security_info where sec_code_par in (012000601.IB,111975205.IB,183493.SH,116631.SZ)"
  },
  "银行借款占比": {
    "api": "bnk_debt_to_tot_lia",
    "dataType": "DOUBLE",
    "example_sql": ""
  },
  "银行借款及其他借款占比": {
    "api": "bnk_othr_debt_to_tot_lia",
    "dataType": "DOUBLE",
    "example_sql": ""
  },
  "银行不赎回二级资本债数量": {
    "api": "bnk_tet_nbr_non_rdm",
    "dataType": "INT",
    "example_sql": ""
  },
  "董事会预案公告日": {
    "api": "bod_prps_annc_dt",
    "dataType": "STRING",
    "example_sql": "select bod_prps_annc_dt(sec_code_par) from security_info where sec_code_par in (113618.SH)"
  },
  "债券余额排名": {
    "api": "bond_bal_rnk",
    "dataType": "DOUBLE",
    "example_sql": ""
  },
  "发行债券收到的现金": {
    "api": "bond_cif",
    "dataType": "DOUBLE",
    "example_sql": "select bond_cif(institution_code, 20200930, 1) from security_info where sec_code_par in (012000601.IB,112291743.IB,193203.SH,139009.SZ)"
  },
  "债项最新变动方向": {
    "api": "bond_movement_cur",
    "dataType": "STRING",
    "example_sql": "select bond_movement_cur(sec_code_par) from security_info where sec_code_par in (042380124.IB)"
  },
  "债券数量": {
    "api": "bond_nbr_age_by_typ",
    "dataType": "INT",
    "example_sql": "select bond_nbr_age_by_typ(sec_code_par,20250321,1) from security_info where sec_code_par=102380542.IB"
  },
  "债券数量2": {
    "api": "bond_nbr_sprd_anls_issr",
    "dataType": "INT",
    "example_sql": "select bond_nbr_sprd_anls_issr(sec_code_par,20180102) from security_info where sec_code_par=1382243.IB"
  },
  "债券分包代码": {
    "api": "bond_pack_code_cdc",
    "dataType": "INT",
    "example_sql": "select bond_pack_code_cdc(sec_code_par) from security_info where sec_code_par in (180928.SH,135678.SZ,135679.SZ,135680.SZ,180419.SH,180420.SH)"
  },
  "应付债券": {
    "api": "bond_pay",
    "dataType": "DOUBLE",
    "example_sql": "select Bond_Pay(institution_code,20200630,1) from security_info where sec_code_par in (177483.SH,112291743.IB,193203.SH,139009.SZ)"
  },
  "债项最新评级机构": {
    "api": "bond_rating_agcy_code_cur",
    "dataType": "STRING",
    "example_sql": "select Bond_Rating_Agcy_Code_Cur(sec_code_par) from security_info where sec_code_par in (1280309.IB,155104.SH)"
  },
  "发行人委托评级机构": {
    "api": "bond_rating_agcy_iss",
    "dataType": "STRING",
    "example_sql": "select bond_rating_agcy_iss(sec_code_par) from security_info where sec_code_par in (011801771.IB)"
  },
  "发行时债项评级": {
    "api": "bond_rating_at_iss",
    "dataType": "STRING",
    "example_sql": "select bond_rating_at_iss(sec_code_par) from security_info where sec_code_par in (1280194.IB)"
  },
  "债项最新信用等级": {
    "api": "bond_rating_cur_code",
    "dataType": "STRING",
    "example_sql": "select Bond_Rating_Cur_Code(sec_code_par) from security_info where sec_code_par in (1280309.IB,155104.SH)"
  },
  "债项最新评级日期": {
    "api": "bond_rating_dt_cur",
    "dataType": "STRING",
    "example_sql": "select bond_rating_dt_cur(sec_code_par) from security_info where sec_code_par in (042380629.IB,042000122.IB,128114.SZ,112532.SZ)"
  },
  "发行时债项评级日期": {
    "api": "bond_rating_dt_iss",
    "dataType": "STRING",
    "example_sql": "select bond_rating_dt_iss(sec_code_par) from security_info where sec_code_par in (118505.SZ)"
  },
  "发行时债项评级展望": {
    "api": "bond_rating_otlk_iss",
    "dataType": "STRING",
    "example_sql": "select sec_code_par,bond_rating_otlk_iss(sec_code_par) from security_info where sec_code_par in (1780053.IB)"
  },
  "债项最新评级展望名称": {
    "api": "bond_rating_otlk_nm_cur",
    "dataType": "STRING",
    "example_sql": "select bond_rating_otlk_nm_cur(sec_code_par) from security_info where sec_code_par in (182576.SH)"
  },
  "债项最新评级类型": {
    "api": "bond_rating_typ_cur",
    "dataType": "STRING",
    "example_sql": "select bond_rating_typ_cur(sec_code_par) from security_info where sec_code_par in (042380629.IB,042000122.IB,128114.SZ,112532.SZ)"
  },
  "发行时债项评级类型": {
    "api": "bond_rating_typ_iss",
    "dataType": "STRING",
    "example_sql": "select bond_rating_typ_iss(sec_code_par) from security_info where sec_code_par in (118505.SZ)"
  },
  "发行时债项评级机构": {
    "api": "bond_rtg_agcy_at_iss",
    "dataType": "STRING",
    "example_sql": "select bond_rtg_agcy_at_iss(sec_code_par) from security_info where sec_code_par in (042380124.IB)"
  },
  "债项评级机构全称": {
    "api": "bond_rtg_agcy_nm_hst",
    "dataType": "STRING",
    "example_sql": "select Bond_Rtg_Agcy_Nm_Hst(sec_code_par,20240625) from security_info where sec_code_par in (196262.SH)"
  },
  "债项评级机构简称": {
    "api": "bond_rtg_agcy_shrt_nm",
    "dataType": "STRING",
    "example_sql": "select bond_rtg_agcy_shrt_nm(sec_code_par) from security_info where sec_code_par in (1280309.IB,155104.SH)"
  },
  "债项评级变动方向": {
    "api": "bond_rtg_chg_dir_hst",
    "dataType": "STRING",
    "example_sql": "select bond_rtg_chg_dir_hst(sec_code_par,20240625,全部评级机构) from security_info where sec_code_par in (196262.SH)"
  },
  "债项评级": {
    "api": "bond_rtg_code_hst",
    "dataType": "STRING",
    "example_sql": "select bond_rtg_code_hst(sec_code_par,20240625,全部评级机构) from security_info where sec_code_par in (196262.SH)"
  },
  "指定日债项评级日期": {
    "api": "bond_rtg_dt_hst",
    "dataType": "STRING",
    "example_sql": "select bond_rtg_dt_hst(sec_code_par,20240625,全部评级机构) from security_info where sec_code_par in (196262.SH)"
  },
  "债项评级展望": {
    "api": "bond_rtg_otlk_nm_hst",
    "dataType": "STRING",
    "example_sql": "select bond_rtg_otlk_nm_hst(sec_code_par,20210630,全部评级机构) from security_info where sec_code_par in (127671.SH)"
  },
  "债项评级类型": {
    "api": "bond_rtg_typ_hst",
    "dataType": "STRING",
    "example_sql": "select bond_rtg_typ_hst(sec_code_par,20240625,全部评级机构) from security_info where sec_code_par in (196262.SH)"
  },
  "债券标签": {
    "api": "bond_tag_f9",
    "dataType": "STRING",
    "example_sql": "select Bond_Tag_F9(sec_code_par) from security_info where sec_code_par in (175914.SH, 240567.SH, 2271458.IB, 254165.SH)"
  },
  "债券标签列表": {
    "api": "bond_tag_lst",
    "dataType": "STRING",
    "example_sql": "select bond_tag_lst(sec_code_par) from security_info where sec_code_par in (132480021.IB)"
  },
  "债券类型": {
    "api": "bond_typ",
    "dataType": "STRING",
    "example_sql": "select bond_typ(sec_code_par)  from security_info where sec_code_par in  (193443.SH,140431X3.IB,111509032.IB,032280036.IB,111996015.IB)"
  },
  "债券类型3": {
    "api": "bond_typ3",
    "dataType": "STRING",
    "example_sql": "select Bond_Typ3(sec_code_par) from security_info where sec_code_par in (032100937.IB,082180070.IB,163157.SH)"
  },
  "债券类型4": {
    "api": "bond_type4",
    "dataType": "STRING",
    "example_sql": "select bond_type4(sec_code_par) from security_info where sec_code_par in (2105506X1.IB,112393862.IB)"
  },
  "应付债券：永续债": {
    "api": "bonds_pay_pbond",
    "dataType": "DOUBLE",
    "example_sql": "select Bonds_Pay_Pbond(institution_code,20220930,1) from security_info where sec_code_par in (011800592.IB,112291743.IB,193203.SH,139009.SZ)"
  },
  "应付债券：优先股": {
    "api": "bonds_pay_pfdstk",
    "dataType": "DOUBLE",
    "example_sql": "select Bonds_Pay_Pfdstk(institution_code,20220930,1) from security_info where sec_code_par in (S00745.SH,112291743.IB,193203.SH,139009.SZ)"
  },
  "应付债券占比": {
    "api": "bonds_pay_to_tot_lia",
    "dataType": "DOUBLE",
    "example_sql": ""
  },
  "簿记管理人": {
    "api": "bookrunner",
    "dataType": "STRING",
    "example_sql": "select bookrunner(sec_code_par) from security_info where sec_code_par in (2071086.IB)"
  },
  "取得借款收到的现金": {
    "api": "borr_cif",
    "dataType": "DOUBLE",
    "example_sql": "select borr_cif(institution_code, 20221231, 1) from security_info where sec_code_par in (177483.SH,111981875.IB,123497.SH,131618.SH)"
  },
  "向中央银行借款": {
    "api": "borr_fr_bnk",
    "dataType": "DOUBLE",
    "example_sql": "select Borr_Fr_Bnk(institution_code,20220930,1) from security_info where sec_code_par in (032001020.IB,112084104.IB,193203.SH,139976.SZ)"
  },
  "向其他金融机构拆入资金净增加额": {
    "api": "borr_fr_fi_ni",
    "dataType": "DOUBLE",
    "example_sql": "select borr_fr_fi_ni(institution_code, 20221231, 1) from security_info where sec_code_par in (041554058.IB,112113241.IB,193203.SH,139976.SZ)"
  },
  "每股净资产": {
    "api": "bps_mrq",
    "dataType": "DOUBLE",
    "example_sql": "select sec_code_par,bps_mrq(sec_code_par,20240802) from security_info where sec_code_par in (003035.SZ)"
  },
  "每股净资产2": {
    "api": "bps2",
    "dataType": "DOUBLE",
    "example_sql": ""
  },
  "买入天数": {
    "api": "broker_bid_dy_cnt_bond",
    "dataType": "INT",
    "example_sql": "select broker_bid_dy_cnt_bond(sec_code_par,20240327) from security_info where sec_code_par = 102280888.IB"
  },
  "双边天数": {
    "api": "broker_bltrl_dy_cnt_bond",
    "dataType": "INT",
    "example_sql": "select broker_bltrl_dy_cnt_bond(sec_code_par,20240327) from security_info where sec_code_par = 102280888.IB"
  },
  "日成交笔数": {
    "api": "brkr_dly_deal_nbr_inst",
    "dataType": "INT",
    "example_sql": ""
  },
  "卖出笔数": {
    "api": "nbr_of_asks_broker",
    "dataType": "INT",
    "example_sql": "select nbr_of_asks_broker(sec_code_par,20250102) from security_info where sec_code_par=152508.SH"
  },
  "买入笔数": {
    "api": "nbr_of_bid_broker",
    "dataType": "INT",
    "example_sql": "select nbr_of_bid_broker(sec_code_par,20250102) from security_info where sec_code_par=152508.SH"
  },
  "卖出天数": {
    "api": "broker_ofr_dy_cnt_bond",
    "dataType": "INT",
    "example_sql": "select broker_ofr_dy_cnt_bond(sec_code_par,20240327) from security_info where sec_code_par = 102280888.IB"
  },
  "经纪商成交笔数": {
    "api": "brkr_tot_deal_cnt_wk",
    "dataType": "INT",
    "example_sql": ""
  },
  "总成交天数": {
    "api": "broker_tot_trade_dy_cnt_bond",
    "dataType": "INT",
    "example_sql": "select broker_tot_trade_dy_cnt_bond(sec_code_par,20240327) from security_info where sec_code_par = 102280888.IB"
  },
  "经营范围": {
    "api": "bus_scope",
    "dataType": "STRING",
    "example_sql": "select Bus_Scope(institution_code) from security_info where sec_code_par=000002.SZ"
  },
  "营业期限": {
    "api": "bus_trm",
    "dataType": "STRING",
    "example_sql": "select bus_trm(institution_code) from security_info where sec_code_par in (003016.SZ,082000010.IB)"
  },
  "买入返售金融资产": {
    "api": "buy_sell_back_fin_asset",
    "dataType": "DOUBLE",
    "example_sql": "select buy_sell_back_fin_asset(institution_code,20230630,1) from security_info where sec_code_par in (012000297.IB,112291743.IB,193203.SH,139009.SZ)"
  },
  "买入返售金融资产净减少额": {
    "api": "buy_sell_back_fin_asset_nd",
    "dataType": "DOUBLE",
    "example_sql": "select buy_sell_back_fin_asset_nd(institution_code, 20170630, 1) from security_info where sec_code_par in (012000601.IB,112113241.IB,193203.SH,139009.SZ)"
  },
  "收到买入返售金融资产现金净额": {
    "api": "buy_sell_back_fina_cif",
    "dataType": "DOUBLE",
    "example_sql": "select buy_sell_back_fina_cif(institution_code, 20180331, 1) from security_info where sec_code_par in (012101914.IB,111717039.IB,193203.SH,139009.SZ)"
  },
  "赎回股价达标天数数组": {
    "api": "call_bar_dy_aray",
    "dataType": "STRING",
    "example_sql": "select call_bar_dy_aray(sec_code_par) from security_info where sec_code_par in (118031.SH)"
  },
  "赎回股价达标价格数组": {
    "api": "call_bar_prc_ratio_aray",
    "dataType": "STRING",
    "example_sql": "select call_bar_prc_ratio_aray(sec_code_par) from security_info where sec_code_par in (118031.SH)"
  },
  "赎回基准交易日天数数组": {
    "api": "call_bm_trd_dy_nbr_aray",
    "dataType": "STRING",
    "example_sql": "select call_bm_trd_dy_nbr_aray(sec_code_par) from security_info where sec_code_par in (118031.SH)"
  },
  "欧式赎回日数/美式赎回区间数": {
    "api": "call_no",
    "dataType": "DOUBLE",
    "example_sql": "select Call_No(sec_code_par) from security_info where sec_code_par in (2120066.IB, 110255.IB)"
  },
  "赎回补偿利率": {
    "api": "call_prem_rt",
    "dataType": "STRING",
    "example_sql": "select call_prem_rt(sec_code_par) from security_info where sec_code_par in (118031.SH)"
  },
  "欧式赎回日/美式赎回区间+价格": {
    "api": "call_str",
    "dataType": "STRING",
    "example_sql": "select call_str(sec_code_par) from security_info where sec_code_par in (081900385.IB, 050210.IB)"
  },
  "利息资本化金额": {
    "api": "cap_int_in_fin_exp_nts",
    "dataType": "DOUBLE",
    "example_sql": ""
  },
  "参考价格区间上限": {
    "api": "cap_of_ref_prc_csi",
    "dataType": "DOUBLE",
    "example_sql": "select cap_of_ref_prc_csi(sec_code_par,20231204) from security_info where sec_code_par = 114350.SZ"
  },
  "上限利率": {
    "api": "cap_rt",
    "dataType": "STRING",
    "example_sql": "select cap_rt(sec_code_par) from security_info where sec_code_par in (101464014.IB)"
  },
  "国债曲线收益率": {
    "api": "cb_crv_yld_iss",
    "dataType": "DOUBLE",
    "example_sql": "select cb_crv_yld_iss(sec_code_par) from security_info where sec_code_par=012283442.IB"
  },
  "一年内到期的可转换公司债券": {
    "api": "cb_due_1y",
    "dataType": "DOUBLE",
    "example_sql": "select cb_due_1y(institution_code,20221231,1) from security_info where sec_code_par=0581010.IB"
  },
  "现金及现金等价物净增加额": {
    "api": "cce_ni",
    "dataType": "DOUBLE",
    "example_sql": "select cce_ni(institution_code, 20221231, 1) from security_info where sec_code_par in (101451025.IB,111975205.IB,183493.SH,116631.SZ)"
  },
  "间接法-现金及现金等价物净增加额": {
    "api": "cce_ni_indir_meth",
    "dataType": "DOUBLE",
    "example_sql": "select cce_ni_indir_meth(institution_code,20221231,1) from security_info where sec_code_par=0581010.IB"
  },
  "国开曲线收益率2": {
    "api": "cdb_crv_yld_2_cpn_actl_adj_dt",
    "dataType": "DOUBLE",
    "example_sql": "select cdb_crv_yld_2_cpn_actl_adj_dt(sec_code_par,20240501) from security_info where sec_code_par=175944.SH"
  },
  "国开曲线收益率": {
    "api": "cdb_curve_yld",
    "dataType": "DOUBLE",
    "example_sql": "select cdb_curve_yld(sec_code_par) from security_info where sec_code_par=012283442.IB"
  },
  "同期限国开债代码": {
    "api": "cdb_sec_code_sm_pd",
    "dataType": "STRING",
    "example_sql": "select cdb_sec_code_sm_pd(sec_code_par,20240327) from security_info where sec_code_par in (162727.SH)"
  },
  "中债曲线代码": {
    "api": "cdc_curve_code",
    "dataType": "STRING",
    "example_sql": "select cdc_curve_code(sec_code_par,20240202,推荐) from security_info where sec_code_par in (2120066.IB,US88032WAP14.OB)"
  },
  "中债最新隐含评级": {
    "api": "cdc_impl_rtg_cur",
    "dataType": "STRING",
    "example_sql": "select cdc_impl_rtg_cur(sec_code_par) from security_info where sec_code_par in (032100433.IB,031900541.IB,101684001.IB,150554.SH)"
  },
  "中债最新隐含评级2": {
    "api": "cdc_impl_rtg_cur_2",
    "dataType": "STRING",
    "example_sql": "select cdc_impl_rtg_cur_2(sec_code_par) from security_info where sec_code_par=184690.SH"
  },
  "中债债项隐含评级": {
    "api": "cdc_implied_rating",
    "dataType": "STRING",
    "example_sql": "select cdc_implied_rating(sec_code_par,20220302,推荐)  from security_info where sec_code_par in (114350.SZ)"
  },
  "中债修正久期2": {
    "api": "cdc_md_drtn_2",
    "dataType": "STRING",
    "example_sql": "select cdc_md_drtn_2(sec_code_par) from security_info where sec_code_par in (177931.SH,177483.SH)"
  },
  "估价修正久期": {
    "api": "md_cdc_val",
    "dataType": "DOUBLE",
    "example_sql": "select md_cdc_val(sec_code_par,20240304,推荐) from security_info where sec_code_par in (177483.SH, XS2281799572.OB)"
  },
  "中债估值净价2": {
    "api": "cdc_net_prc_2",
    "dataType": "STRING",
    "example_sql": "select cdc_net_prc_2(sec_code_par) from security_info where sec_code_par in (177931.SH,177483.SH)"
  },
  "估价利差久期": {
    "api": "sprd_drtn_cdc_val",
    "dataType": "DOUBLE",
    "example_sql": "select sprd_drtn_cdc_val(sec_code_par,20240304,推荐) from security_info where sec_code_par in (2089024.IB, XS2369293886.OB)"
  },
  "中债点差收益率": {
    "api": "cdc_sprd_yld",
    "dataType": "DOUBLE",
    "example_sql": "select cdc_sprd_yld(sec_code_par,20240202,推荐) from security_info where sec_code_par in (2089024.IB,XS2281799572.OB)"
  },
  "中债一级债券分类": {
    "api": "cdc_tier_1_bond_clas",
    "dataType": "STRING",
    "example_sql": ""
  },
  "中债二级债券分类": {
    "api": "cdc_tier_2_bond_clas",
    "dataType": "STRING",
    "example_sql": ""
  },
  "中债估值": {
    "api": "cdc_val_spec_prc_typ",
    "dataType": "DOUBLE",
    "example_sql": ""
  },
  "估值收益率": {
    "api": "val_yld_cfets_val",
    "dataType": "DOUBLE",
    "example_sql": "select val_yld_cfets_val(sec_code_par,20240118) from security_info where sec_code_par=1805299.IB"
  },
  "中债估值利差": {
    "api": "cdc_val_yld_sprd_hst_avg",
    "dataType": "DOUBLE",
    "example_sql": "select cdc_val_yld_sprd_hst_avg(sec_code_par,240203.IB,20240501,20240530) from security_info where sec_code_par in (184452.SH)"
  },
  "人民币汇率": {
    "api": "central_prty_rt",
    "dataType": "DOUBLE",
    "example_sql": "select Central_Prty_RT(currency,20240223) from security_info where sec_code_par in (112294989.IB,SX5E.DF,JPT10Y.BO,HSI.HK,01156.HK,AS51.AX,NZDUSD.FX,STI.SG,CAT10Y.BO)"
  },
  "总经理": {
    "api": "ceo",
    "dataType": "STRING",
    "example_sql": ""
  },
  "现金满足投资比率": {
    "api": "cf_adeq_rti",
    "dataType": "DOUBLE",
    "example_sql": "select cf_adeq_rti(sec_code_par, 20230930) from security_info where sec_code_par in (102380293.IB)"
  },
  "银行间债券分类": {
    "api": "cfets_bond_clas",
    "dataType": "STRING",
    "example_sql": "select sec_code_par,cfets_bond_clas(sec_code_par) from security_info where sec_code_par in (132100011.IB)"
  },
  "CFETS总成交量": {
    "api": "cfets_tot_deal_vol_inst",
    "dataType": "DOUBLE",
    "example_sql": ""
  },
  "cfets成交量": {
    "api": "cfets_tot_deal_vol_wk",
    "dataType": "DOUBLE",
    "example_sql": ""
  },
  "CFETS总成交量排名": {
    "api": "cfets_tot_deal_vol_rnk",
    "dataType": "DOUBLE",
    "example_sql": ""
  },
  "CFETS换手率": {
    "api": "cfets_turn_rt_wk",
    "dataType": "DOUBLE",
    "example_sql": "select cfets_turn_rt_wk(sec_code_par,20250320) from security_info where sec_code_par=2400006.IB"
  },
  "董事长": {
    "api": "chairman",
    "dataType": "STRING",
    "example_sql": ""
  },
  "工程物资": {
    "api": "cip_proj_mat",
    "dataType": "DOUBLE",
    "example_sql": "select cip_proj_mat(institution_code,20190630,1) from security_info where sec_code_par in (041900187.IB)"
  },
  "在建工程": {
    "api": "cons_in_prog",
    "dataType": "DOUBLE",
    "example_sql": "select cons_in_prog(institution_code,20181231,1) from security_info where sec_code_par in (177483.SH,112291743.IB,193203.SH,139009.SZ)"
  },
  "流通市值": {
    "api": "circ_mkt_val",
    "dataType": "DOUBLE",
    "example_sql": "select circ_mkt_val(sec_code_par,20241108) from security_info where sec_code_par in (000001.SZ)"
  },
  "债底估价净价": {
    "api": "cl_prc_debt_csi",
    "dataType": "DOUBLE",
    "example_sql": "select cl_prc_debt_csi(sec_code_par,20231204) from security_info where sec_code_par = 137132.SH"
  },
  "应付赔付款": {
    "api": "claim_pay",
    "dataType": "DOUBLE",
    "example_sql": "select claim_pay(institution_code,20200930,1) from security_info where sec_code_par in (012103965.IB,112291743.IB,1623001.IB,142490.SH)"
  },
  "未决赔款准备金": {
    "api": "claim_rsrv",
    "dataType": "DOUBLE",
    "example_sql": "select claim_rsrv(institution_code,20220930,1) from security_info where sec_code_par in (012103965.IB,112291743.IB,601601.SH,142490.SH)"
  },
  "客户存款": {
    "api": "client_dpst",
    "dataType": "DOUBLE",
    "example_sql": "select client_dpst(institution_code,20220930,1) from security_info where sec_code_par in (012103965.IB,112106258.IB,601601.SH,142490.SH)"
  },
  "收盘卖出收益率": {
    "api": "clo_ask_yld",
    "dataType": "DOUBLE",
    "example_sql": "select clo_ask_yld(sec_code_par,20241223) from security_info where sec_code_par=102482909.IB"
  },
  "收盘买入收益率": {
    "api": "clo_bid_yld",
    "dataType": "DOUBLE",
    "example_sql": "select clo_bid_yld(sec_code_par,20241223) from security_info where sec_code_par=102482909.IB"
  },
  "收盘净价": {
    "api": "clo_cl_prc_comp",
    "dataType": "DOUBLE",
    "example_sql": "select clo_cl_prc_comp(sec_code_par,20240104,上交所) from security_info where sec_code_par in (127634.SH)"
  },
  "收盘价": {
    "api": "clo_prc_yr",
    "dataType": "DOUBLE",
    "example_sql": ""
  },
  "收盘价涨跌": {
    "api": "clo_prc_chg_nfpv_rng",
    "dataType": "DOUBLE",
    "example_sql": "select clo_prc_chg_nfpv_rng(sec_code_par,20241202,20241231,1),clo_prc_chg_nfpv_rng(sec_code_par,20241202,20241231,2),clo_prc_chg_nfpv_rng(sec_code_par,20241202,20241231,3) from security_info where sec_code_par=242480082.IB"
  },
  "相对发行价涨跌": {
    "api": "clo_prc_chg_ipo",
    "dataType": "DOUBLE",
    "example_sql": ""
  },
  "收盘价涨跌幅": {
    "api": "clo_prc_pct_chg_nfpv_rng",
    "dataType": "DOUBLE",
    "example_sql": "select clo_prc_pct_chg_nfpv_rng(sec_code_par,20241202,20241231,1),clo_prc_pct_chg_nfpv_rng(sec_code_par,20241202,20241231,2),clo_prc_pct_chg_nfpv_rng(sec_code_par,20241202,20241231,3) from security_info where sec_code_par=242480082.IB"
  },
  "相对发行价涨跌幅": {
    "api": "clo_prc_pct_chg_ipo",
    "dataType": "DOUBLE",
    "example_sql": ""
  },
  "区间收盘价": {
    "api": "clo_prc_rng_fut",
    "dataType": "DOUBLE",
    "example_sql": "select clo_prc_rng_fut(sec_code_par,20240521,20240620) from security_info where sec_code_par in (TF2409.CFE)"
  },
  "收盘收益率": {
    "api": "clo_yld_comp",
    "dataType": "DOUBLE",
    "example_sql": "select clo_yld_comp(sec_code_par,20240104,上交所) from security_info where sec_code_par in (127634.SH)"
  },
  "收盘利差": {
    "api": "close_yld_sprd",
    "dataType": "DOUBLE",
    "example_sql": "select close_yld_sprd(sec_code_par,230207.IB,20240319) from security_info where sec_code_par = 212380026.IB"
  },
  "质押券代码": {
    "api": "cltrl_code",
    "dataType": "STRING",
    "example_sql": ""
  },
  "质押券简称": {
    "api": "cltrl_nm",
    "dataType": "STRING",
    "example_sql": ""
  },
  "竞争性招标总额": {
    "api": "cmpt_auction_tot_amt",
    "dataType": "DOUBLE",
    "example_sql": "select cmpt_auction_tot_amt(sec_code_par) from security_info where sec_code_par in (240005X1.IB)"
  },
  "控股股东": {
    "api": "cntl_shrhld",
    "dataType": "STRING",
    "example_sql": "select cntl_shrhld(institution_code) from security_info where sec_code_par=102103075.IB"
  },
  "控股股东企业类型": {
    "api": "cntl_shrhld_entp_typ",
    "dataType": "STRING",
    "example_sql": "select cntl_shrhld_entp_typ(institution_code) from security_info where  sec_code_par=102103075.IB"
  },
  "合同资产": {
    "api": "cntr_asset",
    "dataType": "DOUBLE",
    "example_sql": "select cntr_asset(institution_code,20190630,1) from security_info where sec_code_par in (031490445.IB,1721001.IB,1623006.IB,117527.SZ)"
  },
  "合同负债": {
    "api": "cntr_lia",
    "dataType": "DOUBLE",
    "example_sql": "select cntr_lia(institution_code,20230630,1) from security_info where sec_code_par in (177483.SH,111607048.IB,169985.SH,139009.SZ)"
  },
  "保险合同准备金": {
    "api": "cntr_rsrv",
    "dataType": "DOUBLE",
    "example_sql": "select Cntr_Rsrv(institution_code,20220930,1) from security_info where sec_code_par in (011760119.IB,112291743.IB,02318.HK,165269.SH)"
  },
  "转股简称": {
    "api": "cnv_abrv",
    "dataType": "STRING",
    "example_sql": "select cnv_abrv(sec_code_par) from security_info where sec_code_par in (118031.SH)"
  },
  "转股条款": {
    "api": "cnv_clause",
    "dataType": "STRING",
    "example_sql": "select Cnv_clause(sec_code_par) from security_info where sec_code_par in (118031.SH)"
  },
  "转股代码": {
    "api": "cnv_code",
    "dataType": "STRING",
    "example_sql": "select cnv_code(sec_code_par) from security_info where sec_code_par in (118031.SH)"
  },
  "转股市净率": {
    "api": "cnv_pb",
    "dataType": "DOUBLE",
    "example_sql": ""
  },
  "转股市盈率": {
    "api": "cnv_pe_rti",
    "dataType": "DOUBLE",
    "example_sql": ""
  },
  "转股价": {
    "api": "cnv_prc",
    "dataType": "DOUBLE",
    "example_sql": "select cnv_prc(sec_code_par,20240628) from security_info where sec_code_par in (118031.SH)"
  },
  "转股价格调整规则": {
    "api": "cnv_prc_adj_rules",
    "dataType": "STRING",
    "example_sql": "select cnv_prc_adj_rules(sec_code_par) from security_info where sec_code_par in (118031.SH)"
  },
  "转股溢价": {
    "api": "cnv_prem",
    "dataType": "DOUBLE",
    "example_sql": ""
  },
  "转股溢价率": {
    "api": "cnv_prem_rti_csi",
    "dataType": "DOUBLE",
    "example_sql": "select cnv_prem_rti_csi(sec_code_par,20231204) from security_info where sec_code_par = 137132.SH"
  },
  "标准券折算比例": {
    "api": "cnv_rt",
    "dataType": "DOUBLE",
    "example_sql": ""
  },
  "已转股比例": {
    "api": "cnv_rti",
    "dataType": "DOUBLE",
    "example_sql": "select cnv_rti(sec_code_par,20240628) from security_info where sec_code_par in (118031.SH)"
  },
  "转股起始日": {
    "api": "cnv_strt_dt",
    "dataType": "STRING",
    "example_sql": "select cnv_strt_dt(sec_code_par) from security_info where sec_code_par in (118031.SH)"
  },
  "转换价值": {
    "api": "cnv_val_cnv_bnd",
    "dataType": "DOUBLE",
    "example_sql": ""
  },
  "企业注销标签": {
    "api": "co_dereg_tag",
    "dataType": "STRING",
    "example_sql": ""
  },
  "副主承销商": {
    "api": "co_lead_uw",
    "dataType": "STRING",
    "example_sql": "select co_lead_uw(sec_code_par) from security_info where sec_code_par in (2205122.IB,2205298.IB)"
  },
  "企业简介": {
    "api": "co_prof",
    "dataType": "STRING",
    "example_sql": "select co_prof(institution_code) from security_info where sec_code_par in (2289084.IB)"
  },
  "综合收益总额": {
    "api": "comp_incm",
    "dataType": "DOUBLE",
    "example_sql": "select comp_incm(institution_code,20191231,1) from security_info where sec_code_par in (177483.SH,112291743.IB,193203.SH,139009.SZ)"
  },
  "补偿利率": {
    "api": "comp_rt",
    "dataType": "STRING",
    "example_sql": "select comp_rt(sec_code_par) from security_info where sec_code_par in (197640.SH, 110234.IB)"
  },
  "补偿生效期数": {
    "api": "compensate_fr",
    "dataType": "STRING",
    "example_sql": "select compensate_fr(sec_code_par) from security_info where sec_code_par in (197640.SH, 110234.IB)"
  },
  "条件赎回条款": {
    "api": "cond_call_clause",
    "dataType": "STRING",
    "example_sql": "select cond_call_clause(sec_code_par) from security_info where sec_code_par in (118031.SH)"
  },
  "条件赎回截止日": {
    "api": "cond_call_end_dt",
    "dataType": "STRING",
    "example_sql": "select cond_call_end_dt(sec_code_par) from security_info where sec_code_par in (118031.SH)"
  },
  "条件赎回起始日": {
    "api": "cond_call_strt_dt",
    "dataType": "STRING",
    "example_sql": "select cond_call_strt_dt(sec_code_par) from security_info where sec_code_par in (118031.SH)"
  },
  "条件回售条款": {
    "api": "cond_put_clause",
    "dataType": "STRING",
    "example_sql": "select cond_put_clause(sec_code_par) from security_info where sec_code_par in (118031.SH)"
  },
  "条件回售截止日": {
    "api": "cond_put_end_dt",
    "dataType": "STRING",
    "example_sql": "select cond_put_end_dt(sec_code_par) from security_info where sec_code_par in (118031.SH)"
  },
  "条件回售起始日": {
    "api": "cond_put_strt_dt",
    "dataType": "STRING",
    "example_sql": "select cond_put_strt_dt(sec_code_par) from security_info where sec_code_par in (118031.SH)"
  },
  "条件修正条款": {
    "api": "cond_revs_clause",
    "dataType": "STRING",
    "example_sql": "select cond_revs_clause(sec_code_par) from security_info where sec_code_par in (118031.SH)"
  },
  "条件修正截止日": {
    "api": "cond_revs_end_dt",
    "dataType": "STRING",
    "example_sql": "select cond_revs_end_dt(sec_code_par) from security_info where sec_code_par in (118031.SH)"
  },
  "条件修正起始日": {
    "api": "cond_revs_strt_dt",
    "dataType": "STRING",
    "example_sql": "select cond_revs_strt_dt(sec_code_par) from security_info where sec_code_par in (118031.SH)"
  },
  "保守速动比率": {
    "api": "conser_acid_tst_rti",
    "dataType": "DOUBLE",
    "example_sql": "select conser_acid_tst_rti(sec