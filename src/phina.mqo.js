phina.namespace(function() {

    phina.define("phina.asset.MQO", {
        superClass: "phina.asset.Asset",

        model: null,
        modelPath: "",

        init: function() {
            this.superInit();
        },

        _load: function(resolve) {
            var modelurl = this.src.split("/");
            this.modelPath = "";
            for (var i = 0, len = modelurl.length; i < len-1; i++) {
                this.modelPath += modelurl[i];
            }

            var that = this;
            var req = new XMLHttpRequest();
            req.open("GET", this.src, true);
            req.onload = function() {
                var data = req.responseText;
                that.model = phina.MQOModel(data, that.modelPath);
                resolve(that);
            };
            req.send(null);
        },

        buildMeshTHREE: function(canvas) {
            return this.model.buildTHREE(canvas);
        },

        buildMeshGLBoost: function(glBoostContext) {
            return this.model.buildGLBoost(glBoostContext);
        },
    });

    //アセットローダー追加
    phina.asset.AssetLoader.assetLoadFunctions['mqo'] = function(key, path) {
        var mqo = phina.asset.MQO();
        var flow = mqo.load(path);
        return flow;
    }
});

