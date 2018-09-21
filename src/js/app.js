var celldata = {};
var optiondata = {};
var _is = {}

for (i in SetThemeID) {
    $("." + i).attr("id", SetThemeID[i].id);
    $("." + i).html("{{cell." + SetThemeID[i].id + "}}");
    celldata[SetThemeID[i].id] = SetThemeID[i].value;
    if (SetThemeID[i].type == "select") {
        optiondata[SetThemeID[i].id] = {}
    }
}
var ap = new Vue({
    el: "#app",
    data: {
        row: 50,
        col: 50,
        tab: 5,
        cell: celldata,
        equip: equipjson,
        option: optiondata
    },
    methods: {
        inputdata: function (id) {
            console.log(this);
        },
        cellclass: function (tid, rid, cid) {
            return 'cell t' + tid + 'row_' + rid + ' t' + tid + 'col_' + cid + ' cell_' + tid + '_' + rid + '_' + cid;
        },
        cellid: function (tid, rid, cid) {
            var key = "cell_" + tid + "_" + rid + "_" + cid;
            if (SetThemeID[key]) {
                if (SetThemeID[key].id) {
                    return SetThemeID[key].id;
                }
            }
        },
        celltext: function (tid, rid, cid) {
            var key = "cell_" + tid + "_" + rid + "_" + cid;
            if (SetThemeID[key]) {
                if (SetThemeID[key].type == "text") {
                    return this.cell[SetThemeID[key].id];
                }
            }
            return "";
        },
        celltype: function (tid, rid, cid) {
            var key = "cell_" + tid + "_" + rid + "_" + cid;
            if (SetThemeID[key]) {
                return SetThemeID[key].type;

            }
            return false;
        },
        celloption: function (tid, rid, cid) {
            var kid = "";
            var key = "cell_" + tid + "_" + rid + "_" + cid;
            if (SetThemeID[key]) {
                kid = SetThemeID[key].id;
            }

            if (this.option[kid]) {
                return this.option[kid];

            } else {
                return {};
            }
        }

    },
    computed: {

    },
    watch: {
        cell: {
            handler: function (val) {
                uiupdate();
            },
            deep: true,
        }
    }
});

window.onload = function () {
    uiupdate();
   // ap.$forceUpdate();
}

function uiupdate() {

    update_option("level", get_level_option());
    update_option("job", get_class_option());

    ap.cell["base_str"] = BASEST[ap.cell["job"]]["str"];
    ap.cell["base_dex"] = BASEST[ap.cell["job"]]["dex"];
    ap.cell["base_con"] = BASEST[ap.cell["job"]]["con"];
    ap.cell["base_int"] = BASEST[ap.cell["job"]]["int"];
    ap.cell["base_wis"] = BASEST[ap.cell["job"]]["wis"];
    ap.cell["base_cha"] = BASEST[ap.cell["job"]]["cha"];

    ap.cell["rem"] = get_rem();
    update_status_rem(STATUSLIST);


    ap.cell["lvpoint"] = get_levelbonuspoint();
    update_sutatus_level(STATUSLIST);

    ap.cell["elipoint"] = get_elixirpoint();
    update_status_elixir(STATUSLIST);

    update_status_sum(STATUSLIST);
    console.log("change");

    for(i in EQ_LIST){
        equip_option(i);
        equip_update(i);
    }
    



    calcHPMP();
}


