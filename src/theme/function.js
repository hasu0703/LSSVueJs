/**
 * Levelのselect
 */
function get_level_option() {
    var options = {
        1: 1
    }
    if (MAXLV < 50) return options;
    for (var i = 50; i <= MAXLV; i++) {
        options[i] = i;
    }
    return options;
}

/**
 * Classのselect
 */
function get_class_option() {
    var options = {};
    for (i in CLASSLIST) {
        options[i] = CLASSLIST[i];
    }
    return options;
}

/**
 * selectにoptionをセットする
 * @param {string} key 配列のキー名 
 * @param {array} array optionの配列
 */
function update_option(key, array) {
    ap.option[key] = array;
    if (!ap.cell[key]) {
        ap.cell[key] = Object.keys(ap.option[key]).shift()
    }
    if(ap.option[key][ap.cell[key]] == null){
        ap.cell[key] = Object.keys(ap.option[key]).shift();
    }
}

/**
 * 残りRemを計算
 */
function get_rem() {
    var _rem = BASEST[ap.cell["job"]]["rem"];
    _rem -= ap.cell["rem_str"];
    _rem -= ap.cell["rem_dex"];
    _rem -= ap.cell["rem_con"];
    _rem -= ap.cell["rem_int"];
    _rem -= ap.cell["rem_wis"];
    _rem -= ap.cell["rem_cha"];
    return _rem;
}

/**
 * 残りステータスポイントを計算
 * @param {string}} key 
 */
function update_status_rem(keys) {
    if (!Array.isArray(keys)) {
        keys = [keys];
    }
    var key = "";
    for (i in keys) {
        key = keys[i];

        var remmax = 20 - ap.cell["base_" + key];
        var nowrem = ap.cell["rem"] + parseInt(ap.cell["rem_" + key]);

        if (remmax > nowrem) {
            remmax = nowrem;
        }

        var array = {}
        for (var i = 0; i <= remmax; i++) {
            array[i] = i;
        }
        update_option("rem_" + key, array);


    }

}

/**
 * レベルボーナスポイントを計算
 */
function get_levelbonuspoint() {
    var point = 0;
    if (ap.cell["level"] < 50) return point;
    point = parseInt(ap.cell["level"]) - 50;

    point -= ap.cell["lv_str"];
    point -= ap.cell["lv_dex"];
    point -= ap.cell["lv_con"];
    point -= ap.cell["lv_int"];
    point -= ap.cell["lv_wis"];
    point -= ap.cell["lv_cha"];
    return point;
}

/**
 * ステータスボーナスポイントを更新
 * @param {string} key 
 */
function update_sutatus_level(keys) {
    if (!Array.isArray(keys)) {
        keys = [keys];
    }
    var key = "";
    for (i in keys) {
        key = keys[i];

        var point = parseInt(ap.cell["lvpoint"]) + parseInt(ap.cell["lv_" + key]);
        var options = {}

        var limitpoint = 45;
        if (ap.cell["level"] >= UPPERLEVEL) {
            limitpoint = 50;
        }
        var nowpoint = limitpoint;
        nowpoint -= parseInt(ap.cell["base_" + key]);
        nowpoint -= parseInt(ap.cell["rem_" + key]);
        nowpoint -= parseInt(ap.cell["eli_" + key]);
        if (point > nowpoint) {
            point = nowpoint;
        }

        for (var i = 0; i <= point; i++) {
            options[i] = i;
        }

        update_option("lv_" + key, options);
    }
}

/**
 * elixirポイントを計算
 */
function get_elixirpoint() {
    var point = 0;
    if (ap.cell["level"] >= 50) point++;
    if (ap.cell["level"] >= 55) point++;
    if (ap.cell["level"] >= 60) point++;
    if (ap.cell["level"] >= 65) point++;
    if (ap.cell["level"] >= 70) point++;

    point -= ap.cell["eli_str"];
    point -= ap.cell["eli_dex"];
    point -= ap.cell["eli_con"];
    point -= ap.cell["eli_int"];
    point -= ap.cell["eli_wis"];
    point -= ap.cell["eli_cha"];
    return point;
}

/**
 * elixirオプションを更新
 * @param {string}} keys 
 */
function update_status_elixir(keys) {
    if (!Array.isArray(keys)) {
        keys = [keys];
    }
    var key = "";
    for (i in keys) {
        key = keys[i];

        var point = parseInt(ap.cell["elipoint"]) + parseInt(ap.cell["eli_" + key]);
        var options = {}

        var limitpoint = 45;
        if (ap.cell["level"] >= UPPERLEVEL) {
            limitpoint = 50;
        }
        var nowpoint = limitpoint;
        nowpoint -= parseInt(ap.cell["base_" + key]);
        nowpoint -= parseInt(ap.cell["rem_" + key]);
        nowpoint -= parseInt(ap.cell["lv_" + key]);
        if (point > nowpoint) {
            point = nowpoint;
        }

        for (var i = 0; i <= point; i++) {
            options[i] = i;
        }

        update_option("eli_" + key, options);
    }
}

/**
 * ステータス合計セルを更新
 * @param {string}} keys 
 */
function update_status_sum(keys) {
    if (!Array.isArray(keys)) {
        keys = [keys];
    }
    var key = "";
    for (i in keys) {
        key = keys[i];

        var point = 0;

        point += parseInt(ap.cell["base_" + key]);
        point += parseInt(ap.cell["rem_" + key]);
        point += parseInt(ap.cell["lv_" + key]);
        point += parseInt(ap.cell["eli_" + key]);

        ap.cell["sum_" + key] = point;

        point += eq_sum(key.toUpperCase());
        point += buffsum(key.toUpperCase());
        ap.cell["all_" + key] = point;
    }
}

function calcHPMP() {
    var hp = 0;
    var mp = 0;
    var con = parseInt(ap.cell["base_con"]) + parseInt(ap.cell["rem_con"]);
    var wis = parseInt(ap.cell["base_wis"]) + parseInt(ap.cell["rem_wis"]);

    switch (ap.cell["job"]) {
        case "P":
            hp = 14;
            mp = 3;
            break;
        case "K":
            hp = 16;
            mp = 2;
            break;
        case "F":
            hp = 16;
            mp = 2;
            break;
        case "E":
            hp = 15;
            mp = 4;
            break;
        case "W":
            hp = 12;
            mp = 6;
            break;
        case "D":
            hp = 12;
            mp = 4;
            break;
        case "R":
            hp = 16;
            mp = 2;
            break;
        case "I":
            hp = 14;
            mp = 5;
            break;
    }

    var c1 = [1.0, 2.0 / 3.0, 1.5, 2.0, 1.5, 0.7, 1.7, 2.0 / 3.0];
    var c2 = [1, 0, 1, 2, 1, 1, 1, 0];
    var cls = CLASSNO[ap.cell["job"]];
    var overcon = parseInt(ap.cell["lv_con"]) + parseInt(ap.cell["eli_con"]);
    var overwis = parseInt(ap.cell["lv_wis"]) + parseInt(ap.cell["eli_wis"]);

    for (var i = 2; i <= ap.cell["level"]; i++) {
        if (i >= 51 && overcon > 0) {
            con++;
            overcon--;
        } else {
            if (i >= 51 && overcon == 0 && overwis > 0) {
                wis++;
                overwis--;
            }

            if (con <= 25) {
                hp += 1.5 + minasToZero(con - 12) + CLASSST[ap.cell["job"]]["HP"];
            } else {
                hp += 1.5 + ((con + 1) / 2) + CLASSST[ap.cell["job"]]["HP"];
            }

            mp += 0.5 * ((wis / 5) * c1[cls] + c2[cls]) +
                0.5 * ((wis / 3 * c1[cls]) + c2[cls]);
        }

    }

    if (con >= 25) {
        hp += 50;
    }
    if (con >= 35) {
        hp += 100;
    }
    if (con >= 45) {
        hp += 150;
    }

    if (wis >= 25) {
        mp += 50;
    }
    if (wis >= 35) {
        mp += 100;
    }
    if (wis >= 45) {
        mp += 150;
    }



    ap.cell["st_hp"] = Math.floor(hp);
    ap.cell["st_mp"] = Math.floor(mp);
}
/**
 * マイナスの値は０を返す
 * @param {int} x 
 */
function minasToZero(x) {
    if (x >= 0) {
        return x;
    } else {
        return 0;
    }
}

function arraycount(){

}
/**
 * データを更新
 */
function update_equip(){
    var enchant_sum =0;
    for(var i in EQ_LIST){

        var data = ap.equip[EQ_LIST[i]].filter(function (data) {
            var regexp = new RegExp("(ALL|"+ this.job +")");
  
            return data["装備"].match(regexp);   
        }, {
            "job": ap.cell.job,
        });

        var ret = {};
        for(var v in data){
            if(data[v].name){
                ret[data[v].name] = data[v].name;
            }
            
        }

        update_option("equip_name"+i,ret);
        var eq_data =  ap.equip[EQ_LIST[i]].filter(function (d) { 

            return d["name"] == this.itemname; 
        }, {
            "itemname": ap.cell["equip_name"+i],
        });
        if(eq_data[0]){
            

            update_option("equip_enchant"+i, [...Array(parseInt(eq_data[0]["強化限界"])).keys()]);
            var AC = "";
            if(eq_data[0].AC){
                AC = parseInt(eq_data[0].AC);
                if(ACCESSORY_LIST.indexOf(eq_data[0].type)==-1){
                    AC -= parseInt(ap.cell["equip_enchant"+i]);
                    enchant_sum -= parseInt(ap.cell["equip_enchant"+i]);
                }

            }
            ap.cell["equip_ac"+i] = AC;
  
        }
    }
    ap.cell["enchant_sum"] = enchant_sum;
}

/**
 * 装備パラメータ合計値算出
 * @param {*} key 
 * @return int 合計値
 */
function eq_sum(key){
    var sum = 0;
    if(key){
        for(var i in EQ_LIST){
            var enchant = parseInt(ap.cell["equip_enchant"+i]);
            var eq = ap.equip[EQ_LIST[i]].filter(function (d) { 
                return d["name"] == this.itemname; 
            }, {
                "itemname": ap.cell["equip_name"+i],
            });
            if(eq[0]){
                if(eq[0][key])sum += parseInt(eq[0][key]);

            }
        }
    }
    return sum;
}

/**
 * 装備パラメータ合計値（MR強化）
 */
function eq_summr(){
    var sum = 0;
    for(var i in EQ_LIST){
        var enchant = parseInt(ap.cell["equip_enchant"+i]);
        var eq = ap.equip[EQ_LIST[i]].filter(function (d) { 
            return d["name"] == this.itemname; 
        }, {
            "itemname": ap.cell["equip_name"+i],
        });
        if(eq[0]){

            if(eq[0]["MR強化"])sum += parseInt(eq[0]["MR強化"])*enchant;
        }
    }

    return sum;
}

/**
 * ER合計計算
 */
function calcER(){
    var er = 0;
    var level = parseInt(ap.cell["level"]);
    var dex   = parseInt(ap.cell["sum_dex"]);
    var jober = CLASSST[ap.cell["job"]]["ER"];
    
    er += Math.floor(dex / 2);
    er += Math.floor(level / jober);

    er += eq_sum("ER");
    ap.cell["st_er"] = er;

}

/**
 * AC合計計算
 */
function calcAC(){
    var ac = 10;
    var level = parseInt(ap.cell["level"]);
    var dex   = parseInt(ap.cell["sum_dex"]);
    var jobac = CLASSST[ap.cell["job"]]["AC"];
    ac -= Math.floor(dex / 3);
    ac -= Math.floor(level / jobac);
    //ac -= buffsum("ac");
    ac += eq_sum("AC");
    ac += parseInt(ap.cell["enchant_sum"]);
    ap.cell["st_ac"] = ac;

}

/**
 * MR計算
 */
function calcMR(){
    var MR = 0;
    var level = parseInt(ap.cell["level"]);
    var wis   = parseInt(ap.cell["sum_wis"]);
    var jobmr = CLASSST[ap.cell["job"]]["MR"];
    MR += minasToZero(wis - 10) * 4;
    MR += Math.floor(level / 2);
    MR += parseInt(jobmr);
  //  MR += buffsum("mc");
    MR += eq_sum("MR");
    MR += eq_summr();
    ap.cell["st_mr"] = MR;

}

/**
 * 近接計算
 */
function calcShort(){
    var HIT = 0;
    var DMG = 0;
    var CRI = 0;
    var level = parseInt(ap.cell["level"]);
    var str   = parseInt(ap.cell["all_str"]);
    var pure_str = parseInt(ap.cell["sum_str"]);
    DMG += Math.floor(str / 2 - 2);
    DMG += Math.floor(level / parseInt(CLASSST[ap.cell["job"]]["D_SHORT"]));
    DMG += eq_sum("追加打撃");

    HIT += Math.floor(str*2 / 3);
    HIT += level;
    HIT += Math.floor(level / parseInt(CLASSST[ap.cell["job"]]["H_SHORT"]));
    HIT += eq_sum("攻撃成功");

    CRI += Math.floor(minasToZero(str - 30) / 10);
    CRI += Math.floor(minasToZero(level - 50) /  parseInt(CLASSST[ap.cell["job"]]["C_SHORT"]) );
    CRI += eq_sum("近距離クリティカル");

    if (pure_str >= 25) {
        DMG += 1;
        HIT += 1;
    }
    if (pure_str >= 35) {
        DMG += 1;
        HIT += 1;
    }
    if (pure_str >= 45) {
        DMG += 3;
        HIT += 3;
        CRI += 1;
    }

    ap.cell["str_st_shit"] = HIT;
    ap.cell["str_st_sdmg"] = DMG;
    ap.cell["str_st_scri"] = CRI;
}

/**
 * 遠距離計算
 */
function calcLong(){
    var HIT = 0;
    var DMG = 0;
    var CRI = 0;
    var level = parseInt(ap.cell["level"]);
    var dex   = parseInt(ap.cell["all_dex"]);
    var pure_dex = parseInt(ap.cell["sum_dex"]);
    DMG += Math.floor(dex / 3);
    DMG += Math.floor(level / parseInt(CLASSST[ap.cell["job"]]["D_LONG"]));
    DMG += eq_sum("弓打撃値");

    HIT += Math.floor(dex - 10);
    HIT += level;
    HIT += Math.floor(level / parseInt(CLASSST[ap.cell["job"]]["H_LONG"]));
    HIT += eq_sum("弓命中率");

    CRI += Math.floor(minasToZero(dex - 30) / 10);
    CRI += Math.floor(minasToZero(level - 50) /  parseInt(CLASSST[ap.cell["job"]]["C_LONG"]) );
    CRI += eq_sum("遠距離クリティカル");


    if (pure_dex >= 25) {
        DMG += 1;
        HIT += 1;
    }
    if (pure_dex >= 35) {
        DMG += 1;
        HIT += 1;
    }
    if (pure_dex >= 45) {
        DMG += 3;
        HIT += 3;
        CRI += 1;
    }

    ap.cell["dex_st_lhit"] = HIT;
    ap.cell["dex_st_ldmg"] = DMG;
    ap.cell["dex_st_lcri"] = CRI;
}

/**
 * 魔法計算
 */
function calcMagic(){
    var HIT = 0;
    var DMG = 0;
    var CRI = 0;
    var red_mp = 0;
    var level = parseInt(ap.cell["level"]);
    var int   = parseInt(ap.cell["all_int"]);
    var pure_int = parseInt(ap.cell["sum_int"]);
    DMG += Math.floor(int / 5 - 2);
    DMG += Math.floor(level / parseInt(CLASSST[ap.cell["job"]]["D_MAGIC"]));
    //DMG += eq_sum("魔法打撃値");

    HIT += Math.floor((int - 20) /3);
    HIT += Math.floor(level / parseInt(CLASSST[ap.cell["job"]]["H_MAGIC"]));
    HIT += eq_sum("魔法命中");

    CRI += Math.floor(minasToZero(int - 30) / 10);
    CRI += Math.floor(minasToZero(level - 50) /  parseInt(CLASSST[ap.cell["job"]]["C_MAGIC"]) );
    CRI += eq_sum("魔法クリティカル");

    red_mp = Math.min(30, (int * 2 / 3));

        if (pure_int >= 25) {
            DMG += 1;
            history += 1;
        }
        if (pure_int >= 35) {
            DMG += 1;
            HIT += 1;
        }
        if (pure_int >= 45) {
            DMG += 3;
            HIT += 3;
        }

    ap.cell["int_st_mhit"] = HIT;
    ap.cell["int_st_mdmg"] = DMG;
    ap.cell["int_st_mcri"] = CRI;
}

/**
 * バフ計算(未実装)
 */
function buffsum(key){
    return 0;
}