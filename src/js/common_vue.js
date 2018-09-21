const MAXLV = 100;
const UPPERLEVEL = 90;
const CLASSNO = {"P":0,"K":1,"E":2,"W":3, "D":4, "R":5, "I":6, "F":7}
const CLASSLIST = {"P":"君主","K":"ナイト","E":"エルフ","W": "ウィザード", "D":"ダークエルフ", "R":"ドラゴンナイト", "I":"イリュージョニスト", "F":"ウォリアー"}
const STATUSLIST = ["str","dex","con","int","wis","cha"];
const EQ_LIST = ["武器", "武器", "シールド", "ヘルム", "グローブ", "シャツ",
    "アーマー", "クローク", "ブーツ", "ゲートル", "ベルト", "イアリング", "イアリング", "アミュレット", "リング", "リング",
    "リング", "リング", "ルーン", "ルーン", "スポールダー", "インシグニア"
];
const BASEST = {
    "P":{
        "str":13,
        "dex":9,
        "con":11,
        "int":9,
        "wis":11,
        "cha":13,
        "rem":9
    },
    "K":{
        "str":16,
        "dex":12,
        "con":16,
        "int":8,
        "wis":9,
        "cha":10,
        "rem":4
    },
    "E":{
        "str":10,
        "dex":12,
        "con":12,
        "int":12,
        "wis":12,
        "cha":9,
        "rem":8
    },
    "W":{
        "str":8,
        "dex":7,
        "con":12,
        "int":14,
        "wis":14,
        "cha":8,
        "rem":12
    },
    "D":{
        "str":15,
        "dex":12,
        "con":12,
        "int":11,
        "wis":10,
        "cha":8,
        "rem":7
    },
    "R":{
        "str":13,
        "dex":11,
        "con":14,
        "int":10,
        "wis":10,
        "cha":8,
        "rem":9
    },
    "I":{
        "str":9,
        "dex":10,
        "con":12,
        "int":12,
        "wis":14,
        "cha":8,
        "rem":10
    },
    "F":{
        "str":16,
        "dex":13,
        "con":16,
        "int":10,
        "wis":7,
        "cha":9,
        "rem":4
    }
}

const CLASSST = {
    "P":{
        "D_SHORT":30,
        "H_SHORT":4,
        "C_SHORT":20,
        "D_LONG":40,
        "H_LONG":6,
        "C_LONG":30,
        "ER":6,
        "D_MAGIC":40,
        "H_MAGIC":20,
        "C_MAGIC":80,
        "MB":0,
        "HP":11,
        "MP":10,
    },
    "K":{
        "D_SHORT":10,
        "H_SHORT":3,
        "C_SHORT":20,
        "D_LONG":40,
        "H_LONG":6,
        "C_LONG":40,
        "ER":4,
        "D_MAGIC":40,
        "H_MAGIC":100,
        "C_MAGIC":100,
        "MB":0,
        "HP":16,
        "MP":0,
    },
    "E":{
        "D_SHORT":30,
        "H_SHORT":5,
        "C_SHORT":24,
        "D_LONG":10,
        "H_LONG":3,
        "C_LONG":16,
        "ER":6,
        "D_MAGIC":30,
        "H_MAGIC":16,
        "C_MAGIC":30,
        "MB":0,
        "HP":9,
        "MP":25,
    },
    "W":{
        "D_SHORT":40,
        "H_SHORT":6,
        "C_SHORT":30,
        "D_LONG":80,
        "H_LONG":8,
        "C_LONG":50,
        "ER":10,
        "D_MAGIC":10,
        "H_MAGIC":8,
        "C_MAGIC":2,
        "MB":1,
        "HP":6,
        "MP":15,
    },
    "D":{
        "D_SHORT":10,
        "H_SHORT":3,
        "C_SHORT":10,
        "D_LONG":20,
        "H_LONG":4,
        "C_LONG":20,
        "ER":4,
        "D_MAGIC":40,
        "H_MAGIC":24,
        "C_MAGIC":30,
        "MB":0,
        "HP":10,
        "MP":10,
    },
    "R":{
        "D_SHORT":10,
        "H_SHORT":4,
        "C_SHORT":20,
        "D_LONG":40,
        "H_LONG":7,
        "C_LONG":40,
        "ER":5,
        "D_MAGIC":40,
        "H_MAGIC":18,
        "C_MAGIC":70,
        "MB":0,
        "HP":12,
        "MP":18,
    },
    "I":{
        "D_SHORT":10,
        "H_SHORT":5,
        "C_SHORT":30,
        "D_LONG":80,
        "H_LONG":8,
        "C_LONG":50,
        "ER":9,
        "D_MAGIC":25,
        "H_MAGIC":12,
        "C_MAGIC":20,
        "MB":1,
        "HP":8,
        "MP":20,
    },
    "F":{
        "D_SHORT":10,
        "H_SHORT":3,
        "C_SHORT":20,
        "D_LONG":40,
        "H_LONG":6,
        "C_LONG":40,
        "ER":4,
        "D_MAGIC":40,
        "H_MAGIC":100,
        "C_MAGIC":100,
        "MB":0,
        "HP":16,
        "MP":0,
    }
}