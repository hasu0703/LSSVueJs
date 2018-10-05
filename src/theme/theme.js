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
c=5;
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
c=13;
var SetHPMPData = [
    {"tab":1,"row":r,"col":c,"id":"hp_title","type":"text","value":"HP"},
    {"tab":1,"row":r,"col":c+1,"id":"st_hp","type":"text","value":0},
    {"tab":1,"row":r+1,"col":c,"id":"mp_title","type":"text","value":"MP"},
    {"tab":1,"row":r+1,"col":c+1,"id":"st_mp","type":"text","value":0},
];
SetThemeData = SetThemeData.concat(SetHPMPData);
r = 8;
c = 0;
var SetEqData = [
    {"tab":1,"row":r,"col":c,"span":2,"id":"eq_name_span","type":"text","value":""},
    {"tab":1,"row":r,"col":c+2,"id":"eq_enchant_title","type":"text","value":"強化"},
    {"tab":1,"row":r,"col":c+3,"span":4,"id":"eq_name_title","type":"text","value":"名前"},
    {"tab":1,"row":r,"col":c+7,"id":"eq_ac_title","type":"text","value":"AC"},
    /*
    {"tab":1,"row":r,"col":c+7,"id":"eq_str_title","type":"text","value":"str"},
    {"tab":1,"row":r,"col":c+8,"id":"eq_dex_title","type":"text","value":"dex"},
    {"tab":1,"row":r,"col":c+9,"id":"eq_con_title","type":"text","value":"con"},
    {"tab":1,"row":r,"col":c+10,"id":"eq_int_title","type":"text","value":"int"},
    {"tab":1,"row":r,"col":c+11,"id":"eq_wis_title","type":"text","value":"wis"},
    {"tab":1,"row":r,"col":c+12,"id":"eq_cha_title","type":"text","value":"cha"},
    {"tab":1,"row":r,"col":c+13,"id":"eq_hp_title","type":"text","value":"HP"},
    {"tab":1,"row":r,"col":c+14,"id":"eq_mp_title","type":"text","value":"MP"},*/
];
SetThemeData = SetThemeData.concat(SetEqData);

for(var i in EQ_LIST){
    var row = 9 + parseInt(i);
    c=0;
    SetThemeData.push({"tab":1,"row":row,"col":c,"id":"equip_title"+i,"type":"text","value":EQ_LIST[i],"span":2});
    SetThemeData.push({"tab":1,"row":row,"col":c+2,"id":"equip_enchant"+i,"type":"select"});
    SetThemeData.push({"tab":1,"row":row,"col":c+3,"id":"equip_name"+i,"type":"select","span":4});
    SetThemeData.push({"tab":1,"row":row,"col":c+7,"id":"equip_ac"+i,"type":"text","value":""});
}
/*
for(var i = 9;i<=17;i++){
    SetThemeData.push({"tab":1,"row":i,"col":0,"id":"eq_weapon_title"+(i-9),"type":"text","value":"武器"});
    SetThemeData.push({"tab":1,"row":i,"col":1,"id":"eq_weapon_name"+(i-9),"type":"select","span":2});
}*/
