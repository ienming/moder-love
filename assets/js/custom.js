(function () {
    new Vue({
        el: "#buttons",
        data: {
            buttons: [
                {
                    title: "Aggressive",
                    type: "aggressive",
                    class: "show"
                }, {
                    title: "Hope",
                    type: "hope",
                    class: "show"
                }, {
                    title: "Stubborn",
                    type: "stubborn",
                    class: "show"
                }, {
                    title: "Nervous/Confused",
                    type: "nervous",
                    class: "show"
                }, {
                    title: "Neutral",
                    type: "neutral",
                    class: "show"
                }, {
                    title: "Depressed",
                    type: "depressed",
                    class: "show"
                }, {
                    title: "Regret/Hurt",
                    type: "regret",
                    class: "show"
                }, {
                    title: "Passive",
                    type: "passive",
                    class: "show"
                }, {
                    title: "Hurt Hope",
                    type: "hurtHope",
                    class: "show"
                }
            ]
        },
        methods: {
            filterAttitude: function (idx, key) {
                for (let i = 0; i < all_data_arr.length; i++) {
                    for (let j = 0; j < all_data_arr[i].length; j++) {
                        let nowData = all_data_arr[i][j];
                        if (nowData.attitude == key && nowData.show) {
                            nowData.show = false;
                        } else if (nowData.attitude == key && !nowData.show) {
                            nowData.show = true;
                        }
                    }
                }
                
                if(this._data.buttons[idx].class == "show"){
                    this._data.buttons[idx].class = undefined
                }else if (this._data.buttons[idx].class == undefined){
                    this._data.buttons[idx].class = "show"
                }
            }
        }
    });
}());