(function() {

    mqo.MeshBuilderGLBoost = function() {
    };

    //GLBoost形式Mesh変換
    mqo.MeshBuilderGLBoost.prototype.build = function(modelData, canvas) {
        var meshes = [];
        for (var i = 0, len = modelData._rawMeshes.length; i < len; i++) {
            var mesh = modelData._rawMeshes[i];
            var list = mesh.convertTHREE(modelData._rawMaterials, canvas);

            for (var j = 0, len2 = list.length; j < len2; j++) {
                meshes.push(list[j]);
            }
        }
        return meshes;
    };

    /*
     * フェース情報からマテリアルに対応した頂点情報を構築
     * GLBoost形式専用
     */
    mqo.MeshBuilderGLBoost.prototype.buildGLBoost = function(num, mqoMat, canvas) {
        //マテリアル情報
        var mat = null;
        if (mqoMat) {
            mat = new GLBoost.ClassicMaterial(canvas);
            mat.shader = new GLBoost.PhongShader(canvas);

            var r = mqoMat.col[0];
            var g = mqoMat.col[1];
            var b = mqoMat.col[2];
            if (mat.color) mat.diffuseColor = new Vector3(r, g, b);
            if (mat.ambient) mat.ambientColor = new Vector3(r*mqoMat.amb, g*mqoMat.amb, b*mqoMat.amb);
            if (mat.specular) mat.specularColor = new Vector3(r*mqoMat.spc, g*mqoMat.spc, b*mqoMat.spc);
            if (mqoMat.tex) {
                  mat.diffuseTexture = new GLBoost.Texture(this.path+"/"+mqoMat.tex);
            }
            if (mqoMat.aplane) {
                  mat.alphaTexure = new GLBoost.Texture(this.path+"/"+mqoMat.aplane);
            }
        } else {
            //デフォルトマテリアル
            mat = new GLBoost.ClassicMaterial(canvas);
            mat.shader = new GLBoost.PhongShader(canvas);
            mat.diffuseColor = new Vector3(0.7, 0.7, 0.7);
        }

        //ジオメトリ情報
        var geo = new GLBoost.Geometry(canvas);

        //頂点情報
/*
        var positions = [];
        for(var i = 0; i < this.vertices.length; i++) {
            var v = new GLBoost.Vector3(this.vertices[i].x, this.vertices[i].y, this.vertices[i].z);
            positions.push(v);
        }
*/
        //インデックス情報
        var positions = [];
        var indices = [];
        var normals = [];
        var colors = [];
        var texcoords = [];
        for (var i = 0, len = this.faces.length; i < len; i++) {
            var face = this.faces[i];
            if (face.m != num) continue;
            if (face.vNum < 3) continue;

            var vIndex = face.v;
            if (face.vNum == 3) {

                var i2 = vIndex[2], i1 = vIndex[1], i0 = vIndex[0];
                positions.push(new GLBoost.Vector3(this.vertices[i2].x, this.vertices[i2].y, this.vertices[i2].z));
                positions.push(new GLBoost.Vector3(this.vertices[i1].x, this.vertices[i1].y, this.vertices[i1].z));
                positions.push(new GLBoost.Vector3(this.vertices[i0].x, this.vertices[i0].y, this.vertices[i0].z));

                //インデックス情報
                indices.push(vIndex[2]);
                indices.push(vIndex[1]);
                indices.push(vIndex[0]);

                //頂点法線（絶賛手抜き中）
                normals.push(new GLBoost.Vector3(face.n[0], face.n[1], face.n[2]));
                normals.push(new GLBoost.Vector3(face.n[0], face.n[1], face.n[2]));
                normals.push(new GLBoost.Vector3(face.n[0], face.n[1], face.n[2]));

                // ＵＶ座標
                texcoords.push(new GLBoost.Vector2(face.uv[4], face.uv[5]));
                texcoords.push(new GLBoost.Vector2(face.uv[2], face.uv[3]));
                texcoords.push(new GLBoost.Vector2(face.uv[0], face.uv[1]));
                
                //頂点色（暫定）
                colors.push(new GLBoost.Vector4(1.0, 1.0, 1.0, 1.0));
                colors.push(new GLBoost.Vector4(1.0, 1.0, 1.0, 1.0));
                colors.push(new GLBoost.Vector4(1.0, 1.0, 1.0, 1.0));
            } else if (face.vNum == 4) {
                //四角を三角に分割
                {
                    var i3 = vIndex[3], i2 = vIndex[2], i1 = vIndex[1];
                    positions.push(new GLBoost.Vector3(this.vertices[i3].x, this.vertices[i3].y, this.vertices[i3].z));
                    positions.push(new GLBoost.Vector3(this.vertices[i2].x, this.vertices[i2].y, this.vertices[i2].z));
                    positions.push(new GLBoost.Vector3(this.vertices[i1].x, this.vertices[i1].y, this.vertices[i1].z));

                    //インデックス情報
                    indices.push(vIndex[3]);
                    indices.push(vIndex[2]);
                    indices.push(vIndex[1]);

                    //頂点法線（絶賛手抜き中）
                    normals.push(new GLBoost.Vector3(face.n[0], face.n[1], face.n[2]));
                    normals.push(new GLBoost.Vector3(face.n[0], face.n[1], face.n[2]));
                    normals.push(new GLBoost.Vector3(face.n[0], face.n[1], face.n[2]));

                    // ＵＶ座標
                    texcoords.push(new GLBoost.Vector2(face.uv[6], face.uv[7]));
                    texcoords.push(new GLBoost.Vector2(face.uv[4], face.uv[5]));
                    texcoords.push(new GLBoost.Vector2(face.uv[2], face.uv[3]));

                    //頂点色（暫定）
                    colors.push(new GLBoost.Vector4(1.0, 1.0, 1.0, 1.0));
                    colors.push(new GLBoost.Vector4(1.0, 1.0, 1.0, 1.0));
                    colors.push(new GLBoost.Vector4(1.0, 1.0, 1.0, 1.0));
                }
                {
                    var i1 = vIndex[1], i0 = vIndex[0], i3 = vIndex[3];
                    positions.push(new GLBoost.Vector3(this.vertices[i1].x, this.vertices[i1].y, this.vertices[i1].z));
                    positions.push(new GLBoost.Vector3(this.vertices[i0].x, this.vertices[i0].y, this.vertices[i0].z));
                    positions.push(new GLBoost.Vector3(this.vertices[i3].x, this.vertices[i3].y, this.vertices[i3].z));

                    //インデックス情報
                    indices.push(vIndex[1]);
                    indices.push(vIndex[0]);
                    indices.push(vIndex[3]);

                    //頂点法線（絶賛手抜き中）
                    normals.push(new GLBoost.Vector3(face.n[0], face.n[1], face.n[2]));
                    normals.push(new GLBoost.Vector3(face.n[0], face.n[1], face.n[2]));
                    normals.push(new GLBoost.Vector3(face.n[0], face.n[1], face.n[2]));

                    // ＵＶ座標
                    texcoords.push(new GLBoost.Vector2(face.uv[2], face.uv[3]));
                    texcoords.push(new GLBoost.Vector2(face.uv[0], face.uv[1]));
                    texcoords.push(new GLBoost.Vector2(face.uv[6], face.uv[7]));

                    //頂点色（暫定）
                    colors.push(new GLBoost.Vector4(1.0, 1.0, 1.0, 1.0));
                    colors.push(new GLBoost.Vector4(1.0, 1.0, 1.0, 1.0));
                    colors.push(new GLBoost.Vector4(1.0, 1.0, 1.0, 1.0));
                }
            }
        }

        geo.setVerticesData({
            position: positions,
            color: colors,
            normal: normals,
            texcoord: texcoords
        });

        //メッシュ生成
        var obj = new GLBoost.Mesh(geo, mat);
        return obj;
    };
})();

