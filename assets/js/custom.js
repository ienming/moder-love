(function () {
    // buttons
    let vm = new Vue({
        el: "#controller",
        data: {
            cls: "",
            attitudeBtns: [
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
            ],
            subjectBtns: [
                {
                    title: "You",
                    type: 1,
                    class: "show"
                }, {
                    title: "Me",
                    type: 2,
                    class: "show"
                }, {
                    title: "You and I",
                    type: 3,
                    class: "show"
                }, {
                    title: "We",
                    type: 4,
                    class: "show"
                }, {
                    title: "He/She/They",
                    type: 5,
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
                            // nowData.subjectShow = false;
                        } else if (nowData.attitude == key && !nowData.show) {
                            nowData.show = true;
                            // nowData.subjectShow = true;
                        }
                    }
                }

                if (this._data.attitudeBtns[idx].class == "show") {
                    this._data.attitudeBtns[idx].class = undefined
                } else if (this._data.attitudeBtns[idx].class == undefined) {
                    this._data.attitudeBtns[idx].class = "show"
                }

                atudControl = 0;
                this.attitudeBtns.forEach(e => {
                    if (e.class == "show") {
                        atudControl++;
                    } else {
                        atudControl += 0;
                    }
                });
                console.log(atudControl);
            },
            filterSubject: function (idx, key) {
                for (let i = 0; i < all_data_arr.length; i++) {
                    for (let j = 0; j < all_data_arr[i].length; j++) {
                        let nowData = all_data_arr[i][j];
                        if (nowData.person == key && nowData.subjectShow) {
                            nowData.subjectShow = false;
                        } else if (nowData.person == key && !nowData.subjectShow) {
                            nowData.subjectShow = true;
                        }
                    }
                }

                if (this._data.subjectBtns[idx].class == "show") {
                    this._data.subjectBtns[idx].class = undefined
                } else if (this._data.subjectBtns[idx].class == undefined) {
                    this._data.subjectBtns[idx].class = "show"
                }

                subjectControl = 0;
                this.subjectBtns.forEach(e => {
                    if (e.class == "show") {
                        subjectControl++;
                    } else {
                        subjectControl += 0;
                    }
                });
                console.log(subjectControl)
            },
            toggleController: function(){
                if(this.cls == ""){
                    this.cls = "hide"
                }else{
                    this.cls = ""
                }
            }
        }
    });

    let footerVm = new Vue({
        el: "#footer",
        data: {
            txt: `
                Lyrics from KKBOX 年度風雲榜
            `
        }
    });
}());