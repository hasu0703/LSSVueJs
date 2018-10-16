var SetThemeData = [];
var r = 2;
var c = 0;
var SetLevelData = [
    {"tab":1,"row":r,"col":c,"id":"lv_text","type":"text","value":"level"},
    {"tab":1,"row":r+1,"col":c,"id":"job_text","type":"text","value":"Class"},
    {"tab":1,"row":r+2,"col":c,"id":"rem_text","type":"text","value":"初期残り"},
    {"tab":1,"row":r+3,"col":c,"id":"lvpoint_text","type":"text","value":"LV残り"},
    {"tab":1,"row":r,"col":c+1,"id":"level","type":"select"},
    {"tab":1,"row":r+1,"col":c+1,"span":2,"id":"job","type":"select"},
    {"tab":1,"row":r+2,"col":c+1,"id":"rem","type":"text","value":0},
    {"tab":1,"row":r+3,"col":c+1,"id":"lvpoint","type":"text","value":0},
    {"tab":1,"row":r+4,"col":c+1,"id":"elipoint","type":"hidden","value":0},
];
SetThemeData = SetThemeData.concat(SetLevelData);
r=1;
c=4;
var SetStatusData = [
    {"tab":1,"row":r,"col":c+1,"id":"str_title","type":"text","value":"str"},
    {"tab":1,"row":r,"col":c+2,"id":"dex_title","type":"text","value":"dex"},
    {"tab":1,"row":r,"col":c+3,"id":"con_title","type":"text","value":"con"},
    {"tab":1,"row":r,"col":c+4,"id":"int_title","type":"text","value":"int"},
    {"tab":1,"row":r,"col":c+5,"id":"wis_title","type":"text","value":"wis"},
    {"tab":1,"row":r,"col":c+6,"id":"cha_title","type":"text","value":"cha"},
    {"tab":1,"row":r+1,"col":c,"id":"base_title","type":"text","value":"base"},
    {"tab":1,"row":r+1,"col":c+1,"id":"base_str","type":"text","value":0},
    {"tab":1,"row":r+1,"col":c+2,"id":"base_dex","type":"text","value":0},
    {"tab":1,"row":r+1,"col":c+3,"id":"base_con","type":"text","value":0},
    {"tab":1,"row":r+1,"col":c+4,"id":"base_int","type":"text","value":0},
    {"tab":1,"row":r+1,"col":c+5,"id":"base_wis","type":"text","value":0},
    {"tab":1,"row":r+1,"col":c+6,"id":"base_cha","type":"text","value":0},
    {"tab":1,"row":r+2,"col":c,"id":"rem_title","type":"text","value":"point"},
    {"tab":1,"row":r+2,"col":c+1,"id":"rem_str","type":"select","value":0},
    {"tab":1,"row":r+2,"col":c+2,"id":"rem_dex","type":"select","value":0},
    {"tab":1,"row":r+2,"col":c+3,"id":"rem_con","type":"select","value":0},
    {"tab":1,"row":r+2,"col":c+4,"id":"rem_int","type":"select","value":0},
    {"tab":1,"row":r+2,"col":c+5,"id":"rem_wis","type":"select","value":0},
    {"tab":1,"row":r+2,"col":c+6,"id":"rem_cha","type":"select","value":0},
    {"tab":1,"row":r+3,"col":c,"id":"lv_title","type":"text","value":"lv"},
    {"tab":1,"row":r+3,"col":c+1,"id":"lv_str","type":"select","value":0},
    {"tab":1,"row":r+3,"col":c+2,"id":"lv_dex","type":"select","value":0},
    {"tab":1,"row":r+3,"col":c+3,"id":"lv_con","type":"select","value":0},
    {"tab":1,"row":r+3,"col":c+4,"id":"lv_int","type":"select","value":0},
    {"tab":1,"row":r+3,"col":c+5,"id":"lv_wis","type":"select","value":0},
    {"tab":1,"row":r+3,"col":c+6,"id":"lv_cha","type":"select","value":0},
    {"tab":1,"row":r+4,"col":c,"id":"eli_title","type":"text","value":"elixir"},
    {"tab":1,"row":r+4,"col":c+1,"id":"eli_str","type":"select","value":0},
    {"tab":1,"row":r+4,"col":c+2,"id":"eli_dex","type":"select","value":0},
    {"tab":1,"row":r+4,"col":c+3,"id":"eli_con","type":"select","value":0},
    {"tab":1,"row":r+4,"col":c+4,"id":"eli_int","type":"select","value":0},
    {"tab":1,"row":r+4,"col":c+5,"id":"eli_wis","type":"select","value":0},
    {"tab":1,"row":r+4,"col":c+6,"id":"eli_cha","type":"select","value":0},
    {"tab":1,"row":r+5,"col":c,"id":"sum_title","type":"text","value":"合計"},
    {"tab":1,"row":r+5,"col":c+1,"id":"sum_str","type":"text","value":0},
    {"tab":1,"row":r+5,"col":c+2,"id":"sum_dex","type":"text","value":0},
    {"tab":1,"row":r+5,"col":c+3,"id":"sum_con","type":"text","value":0},
    {"tab":1,"row":r+5,"col":c+4,"id":"sum_int","type":"text","value":0},
    {"tab":1,"row":r+5,"col":c+5,"id":"sum_wis","type":"text","value":0},
    {"tab":1,"row":r+5,"col":c+6,"id":"sum_cha","type":"text","value":0},
]
SetThemeData = SetThemeData.concat(SetStatusData);
r=1;
c=12;
var SetHPMPData = [
    {"tab":1,"row":r,"col":c,"id":"hp_title","type":"text","value":"HP"},
    {"tab":1,"row":r,"col":c+1,"id":"st_hp","type":"text","value":0},
    {"tab":1,"row":r+1,"col":c,"id":"mp_title","type":"text","value":"MP"},
    {"tab":1,"row":r+1,"col":c+1,"id":"st_mp","type":"text","value":0},
    {"tab":1,"row":r+2,"col":c,"id":"ac_title","type":"text","value":"AC"},
    {"tab":1,"row":r+2,"col":c+1,"id":"st_ac","type":"text","value":10},
    {"tab":1,"row":r+3,"col":c,"id":"mr_title","type":"text","value":"MR"},
    {"tab":1,"row":r+3,"col":c+1,"id":"st_mr","type":"text","value":0},
    {"tab":1,"row":r+4,"col":c,"id":"er_title","type":"text","value":"ER"},
    {"tab":1,"row":r+4,"col":c+1,"id":"st_er","type":"text","value":0},

    {"tab":1,"row":r,"col":c+2,"id":"shit_title","type":"text","value":"近命中"},
    {"tab":1,"row":r,"col":c+3,"id":"st_shit","type":"text","value":0},
    {"tab":1,"row":r+1,"col":c+2,"id":"sdmg_title","type":"text","value":"近打撃"},
    {"tab":1,"row":r+1,"col":c+3,"id":"st_sdmg","type":"text","value":0},
    {"tab":1,"row":r+2,"col":c+2,"id":"scri_title","type":"text","value":"近クリ"},
    {"tab":1,"row":r+2,"col":c+3,"id":"st_scri","type":"text","value":0},
];
SetThemeData = SetThemeData.concat(SetHPMPData);
r = 8;
c = 0;
var SetEqData = [
    {"tab":0,"row":r,"col":c,"span":2,"id":"enchant_sum","type":"text","value":0},
];
SetThemeData = SetThemeData.concat(SetEqData);

for(var i in EQ_LIST){
    var row = 9 + parseInt(i);
    var c =0;
    var c2 = 0
    if(i>=11){c2 = 8;row-=11;} 
    SetThemeData.push({"tab":1,"row":row,"col":c2+c,"id":"equip_title"+i,"type":"text","value":EQ_LIST[i],"span":2});
    SetThemeData.push({"tab":1,"row":row,"col":c2+c+2,"id":"equip_enchant"+i,"type":"select"});
    SetThemeData.push({"tab":1,"row":row,"col":c2+c+3,"id":"equip_name"+i,"type":"select","span":4});
    SetThemeData.push({"tab":0,"row":row,"col":c2+c+7,"id":"equip_ac"+i,"type":"text","value":""});
}

