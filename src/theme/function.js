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

/**
 * データを更新
 */
function update_equip(){
    for(var i in EQ_LIST){
        var data = ap.equip[EQ_LIST[i]].filter(function (data) {
            var regexp = new RegExp("(ALL|"+ this.job +")");
  
            return data["装備"].match(regexp);   
        }, {
            "job": ap.cell.job,
        });
        /*
        var ret = data.map(obj =>{
            return obj.name;
        });
*/
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

        ap.cell["equip_ac"+i] = eq_data.AC;
        
    }
}