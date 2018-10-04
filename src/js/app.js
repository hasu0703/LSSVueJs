var celldata = {};
var optiondata = {};
var _is = {}


for(i in SetThemeData){

    celldata[SetThemeData[i].id] = SetThemeData[i].value;
    if (SetThemeData[i].type == "select") {
        optiondata[SetThemeData[i].id] = {}
    }   
}

var ap = new Vue({
    el: "#app",
    data: {
        row: 30,
        col: 20,
        showcellno:false,
        tab: 5,
        view: true,
        cell: celldata,
        equip: equipjson,
        option: optiondata
    },
    methods: {
        tableset: function () {
            var tbl = [];
            for (r = 0; r < this.row; r++) {
                for (c = 0; c < this.col; c++) {
                    tbl.push({
                        "row": r,
                        "col": c,
                        "tab":1,
                        "item": this.getclassData(r,c)
                    });
                }
            }
            return tbl;
        },
        gridStyle: function () {
            return {
                "display":"grid",
                "grid-template-columns": "repeat(" + this.col + ",60px)",
                "grid-template-rows": "repeat(" + this.row + ",20px)"
            }
        },
        getclassData: function (r, c) {
            var ret = SetThemeData.filter(function (data) {
                return data.row == this.row && data.col == this.col
            }, {
                "col": c,
                "row": r
            });
            if (ret[0]) {
                return ret[0];
            }
        },
        cellclass: function (item) {
            var span = "";
            if (item.item) {
                if (item.item.span > 0) {
                    span = "span_" + item.item.span;
                    this.view = false;
                }
            }

            return 'cell row_' + item.row + ' col_' + item.col + ' ' + span;
        },
        isview:function(){
            if(this.view){
                return true;
            }
            this.view = true;
            return false;
        },
        inputdata: function (id) {
            console.log(this);
        },

        cellid: function (item) {
            if(item){
                return item.id;
            }
            return "";

        },
        celltext: function (item) {            
            if(item){
                var data = this.gecellbyid(item.id);
                if (data) {
                    if(data.type == "text"){
                        return this.cell[data.id];
                    }
                }
            }
            return "";
        },
        gecellbyid:function(id){

            var ret = SetThemeData.filter(function (data) {
                return data.id == this.id
            }, {
                "id": id,
            });
            return ret[0];
        },
        celltype: function (item) {
            if(item){
                var data = this.gecellbyid(item.id);
                if (data) {
                    return data.type;
    
                }
            }
            return false;
        },
        celloption: function (item) {
            if(item){
                var data = this.gecellbyid(item.id);
                if (data) {
                    if(this.option[data.id]){
                        return this.option[data.id];
                    }else{
                        return {};
                    }
                }
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





    calcHPMP();
}


