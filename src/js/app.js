var celldata = {};
var optiondata = {};
var buffdata = {};
var _is = {}
var viewflag = true;
var spancount = 0;

for(i in SetThemeData){
    celldata[SetThemeData[i].id] = SetThemeData[i].value;
    if (SetThemeData[i].type == "select") {
        optiondata[SetThemeData[i].id] = {}
    }   
}

var ap = new Vue({
    el: "#app",
    data: {
        row: 22,
        col: 16,
        showcellno:false,
        tab: 1,
        tabmenu:TABMENU,
        view: true,
        cell: celldata,
        equip: equipjson,
        option: optiondata,
        buffdata:buffdata
    },
    methods: {
        tableset: function () {
            var tbl = [];
            for (r = 0; r < this.row; r++) {
                for (c = 0; c < this.col; c++) {
                    
                    var tab = this.tab;
                    var item = this.getclassData(r,c,tab);
                    if(item){tab = item.tab;}
                    tbl.push({
                        "row": r,
                        "col": c,
                        "tab":tab,
                        "item": item
                    });
                }
            }

            return tbl;
        },
        gridStyle: function () {
            return {
                "display":"grid",
                "grid-template-columns": "repeat(" + this.col + ",60px)",
                "grid-template-rows": "repeat(" + this.row + ",25px)"
            }
        },
        getclassData: function (r, c,t) {
            var ret = SetThemeData.filter(function (data) {
                return data.row == this.row && data.col == this.col &&(this.tab == data.tab || data.tab == 99)
            }, {
                "col": c,
                "row": r,
                "tab": t
            });
            if (ret[0]) {
                return ret[0];
            }
        },
        istab:function(item){
 
            if(this.tab == item.tab){return true;}
            if(99 == item.tab){return true;}
            return false;
        },
        cellclass: function (item) {
            var span = "";
            if (item.item) {
                if (this.istab(item) && item.item.span > 0) {
                    span = "span_" + item.item.span;
                    viewflag = false;
                    spancount = item.item.span - 1;
                }
            }

            return 'cell row_' + item.row + ' col_' + item.col + ' ' + span;
        },
        isview:function(){
            if(spancount){
                spancount--;
                return false;
            }else{
                return true;
            }

        },
        inputdata: function (id) {
            console.log(this);
        },

        cellid: function (item) {
            if(item){
                if(this.istab(item) ){
                    return item.id;
                }
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
                    if(data.type == "button"){

                        return this.cell[data.id].name;
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
            if(item && this.istab(item) ){
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

        },
        buffbtn:function(item){
            var key = item.id;
            if(this.buffdata[key]){
                delete  this.buffdata[key];
            }else{
                for(i in this.buffdata){
                    console.log()
                    if(this.buffdata[i].value.group == item.value.group){
                        delete  this.buffdata[i];
                    }
                }
                this.buffdata[key] = item;
            }
            uiupdate();
        },
        buffchange:function(item,_event){
            var key = item.id;
            var _item = item;
            _item.idx = _event;
            this.buffdata[key] = _item;

            uiupdate();
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
        },
        
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
   


    update_equip();

    calcAC();
    calcMR();
    calcER();
    calcHPMP();
    calcShort();
    calcLong();
    calcMagic();
    
    console.log("change");
}

