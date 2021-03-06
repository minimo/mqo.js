(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}(this, function () { 'use strict';

  var babelHelpers = {};
  babelHelpers.typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };

  babelHelpers.classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  babelHelpers.createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  babelHelpers.get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  babelHelpers.inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  babelHelpers.possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  babelHelpers.set = function set(object, property, value, receiver) {
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent !== null) {
        set(parent, property, value, receiver);
      }
    } else if ("value" in desc && desc.writable) {
      desc.value = value;
    } else {
      var setter = desc.set;

      if (setter !== undefined) {
        setter.call(receiver, value);
      }
    }

    return value;
  };

  babelHelpers;

  var global = ('global', eval)('this');

  global.GLBoost = global.GLBoost || { REVISION: '1' };

  global.GLBoost['POSITION'] = 'position';
  global.GLBoost['COLOR'] = 'color';
  global.GLBoost['NORMAL'] = 'normal';
  global.GLBoost['TEXCOORD'] = 'texcoord';
  global.GLBoost['JOINT'] = 'joint';
  global.GLBoost['WEIGHT'] = 'weight';
  global.GLBoost['POINTS'] = 'POINTS';
  global.GLBoost['LINES'] = 'LINES';
  global.GLBoost['LINE_STRIP'] = 'LINE_STRIP';
  global.GLBoost['LINE_LOOP'] = 'LINE_LOOP';
  global.GLBoost['TRIANGLES'] = 'TRIANGLES';
  global.GLBoost['TRIANGLE_STRIP'] = 'TRIANGLE_STRIP';
  global.GLBoost['STATIC_DRAW'] = 'STATIC_DRAW';
  global.GLBoost['STREAM_DRAW'] = 'STREAM_DRAW';
  global.GLBoost['DYNAMIC_DRAW'] = 'DYNAMIC_DRAW';
  global.GLBoost['BLENDTARGET1'] = 'shapetarget_1';
  global.GLBoost['BLENDTARGET2'] = 'shapetarget_2';
  global.GLBoost['BLENDTARGET3'] = 'shapetarget_3';
  global.GLBoost['BLENDTARGET4'] = 'shapetarget_4';
  global.GLBoost['BLENDTARGET5'] = 'shapetarget_5';
  global.GLBoost['BLENDTARGET6'] = 'shapetarget_6';
  global.GLBoost['BLENDTARGET7'] = 'shapetarget_7';
  global.GLBoost['BLENDTARGET8'] = 'shapetarget_8';
  global.GLBoost['BLENDTARGET9'] = 'shapetarget_9';
  global.GLBoost['BLENDTARGET10'] = 'shapetarget_10';
  global.GLBoost['RADIAN'] = 'radian';
  global.GLBoost['DEGREE'] = 'degree';

  var GLBoost$1 = global.GLBoost;

  global.GLBoost.isThisGLVersion_2 = function (gl) {
    if (typeof WebGL2RenderingContext === 'undefined') {
      return false;
    }
    return gl instanceof WebGL2RenderingContext;
  };

  var Vector4 = function () {
    function Vector4(x, y, z, w) {
      babelHelpers.classCallCheck(this, Vector4);

      this.x = x;
      this.y = y;
      this.z = z;
      this.w = w;
    }

    babelHelpers.createClass(Vector4, [{
      key: "isEqual",
      value: function isEqual(vec) {
        if (this.x === vec.x && this.y === vec.y && this.z === vec.z && this.w === vec.w) {
          return true;
        } else {
          return false;
        }
      }
    }]);
    return Vector4;
  }();

  GLBoost$1["Vector4"] = Vector4;

  var Vector3 = function () {
    function Vector3(x, y, z) {
      babelHelpers.classCallCheck(this, Vector3);

      this.x = x;
      this.y = y;
      this.z = z;
    }

    babelHelpers.createClass(Vector3, [{
      key: 'isEqual',
      value: function isEqual(vec) {
        if (this.x === vec.x && this.y === vec.y && this.z === vec.z) {
          return true;
        } else {
          return false;
        }
      }

      /**
       * Zero Vector
       */

    }, {
      key: 'length',
      value: function length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
      }
    }, {
      key: 'clone',
      value: function clone() {
        return new Vector3(this.x, this.y, this.z);
      }

      /*
       * disabled for now because Safari's Function.prototype.length is not configurable yet.
       */
      /*
      static length(vec3) {
        return Math.sqrt(vec3.x*vec3.x + vec3.y*vec3.y + vec3.z*vec3.z);
      }
      */

      /**
       * 長さの2乗
       */

    }, {
      key: 'lengthSquared',
      value: function lengthSquared() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
      }

      /**
       * 長さの2乗（static版）
       */

    }, {
      key: 'lengthSquared',
      value: function lengthSquared(vec3) {
        return vec3.x * vec3.x + vec3.y * vec3.y + vec3.z * vec3.z;
      }

      /**
       * 内積
       */

    }, {
      key: 'dotProduct',
      value: function dotProduct(vec3) {
        return this.x * vec3.x + this.y * vec3.y + this.z * vec3.z;
      }

      /**
       * 内積（static版）
       */

    }, {
      key: 'cross',


      /**
       * 外積
       */
      value: function cross(v) {
        var x = this.y * v.z - this.z * v.y;
        var y = this.z * v.x - this.x * v.z;
        var z = this.x * v.y - this.y * v.x;

        this.setComponents(x, y, z);

        return this;
      }

      /**
      * 外積(static版)
      */

    }, {
      key: 'normalize',


      /**
       * 正規化
       */
      value: function normalize() {
        var length = this.length();
        this.divide(length);

        return this;
      }

      /**
       * 正規化（static版）
       */

    }, {
      key: 'add',


      /**
       * 加算
       */
      value: function add(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;

        return this;
      }

      /**
       * 加算（static版）
       */

    }, {
      key: 'subtract',


      /**
       * 減算
       */
      value: function subtract(v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;

        return this;
      }

      /**
       * 減算（static版）
       */

    }, {
      key: 'divide',


      /**
       * 除算
       */
      value: function divide(val) {
        console.assert(val != 0, "0 division!");
        this.x /= val;
        this.y /= val;
        this.z /= val;

        return this;
      }

      /**
       * 除算（static版）
       */

    }, {
      key: 'multiply',
      value: function multiply(val) {
        this.x *= val;
        this.y *= val;
        this.z *= val;

        return this;
      }

      /**
       * 除算（static版）
       */

    }, {
      key: 'toVector4',
      value: function toVector4() {
        return new Vector4(this.x, this.y, this.z, 1.0);
      }
    }], [{
      key: 'zero',
      value: function zero() {
        return new Vector3(0, 0, 0);
      }
    }, {
      key: 'dotProduct',
      value: function dotProduct(lv, rv) {
        return lv.x * rv.x + lv.y * rv.y + lv.z * rv.z;
      }
    }, {
      key: 'cross',
      value: function cross(lv, rv) {
        var x = lv.y * rv.z - lv.z * rv.y;
        var y = lv.z * rv.x - lv.x * rv.z;
        var z = lv.x * rv.y - lv.y * rv.x;

        return new Vector3(x, y, z);
      }
    }, {
      key: 'normalize',
      value: function normalize(vec3) {
        var length = vec3.length();
        var newVec = new Vector3(vec3.x, vec3.y, vec3.z);
        newVec.divide(length);

        return newVec;
      }
    }, {
      key: 'add',
      value: function add(lv, rv) {
        return new Vector3(lv.x + rv.x, lv.y + rv.y, lv.z + rv.z);
      }
    }, {
      key: 'subtract',
      value: function subtract(lv, rv) {
        return new Vector3(lv.x - rv.x, lv.y - rv.y, lv.z - rv.z);
      }
    }, {
      key: 'divide',
      value: function divide(vec3, val) {
        console.assert(val != 0, "0 division!");
        return new Vector3(vec3.x / val, vec3.y / val, vec3.z / val);
      }
    }, {
      key: 'multiply',
      value: function multiply(vec3, val) {
        return new Vector3(vec3.x * val, vec3.y * val, vec3.z * val);
      }
    }]);
    return Vector3;
  }();

  GLBoost$1['Vector3'] = Vector3;

  var Vector2 = function Vector2(x, y) {
    babelHelpers.classCallCheck(this, Vector2);

    this.x = x;
    this.y = y;
  };

  GLBoost$1["Vector2"] = Vector2;

  var MathUtil = function () {
    function MathUtil() {
      babelHelpers.classCallCheck(this, MathUtil);
    }

    babelHelpers.createClass(MathUtil, null, [{
      key: 'radianToDegree',
      value: function radianToDegree(rad) {
        return rad * 180 / Math.PI;
      }
    }, {
      key: 'degreeToRadian',
      value: function degreeToRadian(deg) {
        return deg * Math.PI / 180;
      }
    }, {
      key: 'arrayToVector',
      value: function arrayToVector(element) {
        if (Array.isArray(element)) {
          if (typeof element[3] !== 'undefined') {
            return new Vector4(element[0], element[1], element[2], element[3]);
          } else if (typeof element[2] !== 'undefined') {
            return new Vector3(element[0], element[1], element[2]);
          } else {
            return new Vector2(element[0], element[1]);
          }
        } else {
          return element;
        }
      }
    }]);
    return MathUtil;
  }();

  GLBoost$1["MathUtil"] = MathUtil;

  var Matrix33 = function () {
    function Matrix33(m) {
      var isColumnMajor = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
      babelHelpers.classCallCheck(this, Matrix33);

      this.m = new Float32Array(9);
      if (arguments.length >= 9) {
        if (isColumnMajor === true) {
          var _m = arguments;
          this.setComponents(_m[0], _m[3], _m[6], _m[1], _m[4], _m[7], _m[2], _m[5], _m[8]);
        } else {
          this.setComponents.apply(this, arguments); // arguments[0-8] must be row major values if isColumnMajor is false
        }
      } else if (Array.isArray(m)) {
          if (isColumnMajor === true) {
            this.setComponents(m[0], m[3], m[6], m[1], m[4], m[7], m[2], m[5], m[8]);
          } else {
            this.setComponents.apply(this, m); // 'm' must be row major array if isColumnMajor is false
          }
        } else if (m instanceof Float32Array) {
            if (isColumnMajor === true) {
              this.setComponents(m[0], m[3], m[6], m[1], m[4], m[7], m[2], m[5], m[8]);
            } else {
              this.setComponents.apply(this, m); // 'm' must be row major array if isColumnMajor is false
            }
          } else {
              this.identity();
            }
    }

    babelHelpers.createClass(Matrix33, [{
      key: 'setComponents',
      value: function setComponents(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
        this.m00 = m00;this.m01 = m01;this.m02 = m02;
        this.m10 = m10;this.m11 = m11;this.m12 = m12;
        this.m20 = m20;this.m21 = m21;this.m22 = m22;

        return this;
      }

      /**
       * 単位行列にする
       */

    }, {
      key: 'identity',
      value: function identity() {
        this.setComponents(1, 0, 0, 0, 1, 0, 0, 0, 1);
        return this;
      }

      /**
       * 単位行列にする（static版）
       */

    }, {
      key: 'rotateX',


      /**
       * Create X oriented Rotation Matrix
       */
      value: function rotateX(angle) {
        var radian = 0;
        if (GLBoost$1["ANGLE_UNIT"] === GLBoost$1.DEGREE) {
          radian = MathUtil.degreeToRadian(angle);
        } else {
          radian = angle;
        }

        var cos = Math.cos(radian);
        var sin = Math.sin(radian);
        return this.setComponents(1, 0, 0, 0, cos, -sin, 0, sin, cos);
      }
      /**
       * Create X oriented Rotation Matrix
       */

    }, {
      key: 'rotateY',


      /**
       * Create Y oriented Rotation Matrix
       */
      value: function rotateY(angle) {
        var radian = 0;
        if (GLBoost$1["ANGLE_UNIT"] === GLBoost$1.DEGREE) {
          radian = MathUtil.degreeToRadian(angle);
        } else {
          radian = angle;
        }

        var cos = Math.cos(radian);
        var sin = Math.sin(radian);
        this.setComponents(cos, 0, sin, 0, 1, 0, -sin, 0, cos);
        return this;
      }
      /**
       * Create Y oriented Rotation Matrix
       */

    }, {
      key: 'rotateZ',


      /**
       * Create Z oriented Rotation Matrix
       */
      value: function rotateZ(angle) {
        var radian = 0;
        if (GLBoost$1["ANGLE_UNIT"] === GLBoost$1.DEGREE) {
          radian = MathUtil.degreeToRadian(angle);
        } else {
          radian = angle;
        }

        var cos = Math.cos(radian);
        var sin = Math.sin(radian);
        return this.setComponents(cos, -sin, 0, sin, cos, 0, 0, 0, 1);
      }
      /**
       * Create Z oriented Rotation Matrix
       */

    }, {
      key: 'zero',


      /**
       * ゼロ行列
       */
      value: function zero() {
        this.setComponents(0, 0, 0, 0, 0, 0, 0, 0, 0);
        return this;
      }
    }, {
      key: 'flatten',
      value: function flatten() {
        return this.m;
      }
    }, {
      key: 'flattenAsArray',
      value: function flattenAsArray() {
        return [this.m[0], this.m[1], this.m[2], this.m[3], this.m[4], this.m[5], this.m[6], this.m[7], this.m[8]];
      }
    }, {
      key: '_swap',
      value: function _swap(l, r) {
        this.m[r] = [this.m[l], this.m[l] = this.m[r]][0]; // Swap
      }

      /**
       * 転置
       */

    }, {
      key: 'transpose',
      value: function transpose() {
        this._swap(1, 3);
        this._swap(2, 6);
        this._swap(5, 8);

        return this;
      }

      /**
       * 転置（static版）
       */

    }, {
      key: 'multiplyVector',
      value: function multiplyVector(vec) {
        var x = this.m00 * vec.x + this.m01 * vec.y + this.m02 * vec.z;
        var y = this.m10 * vec.x + this.m11 * vec.y + this.m12 * vec.z;
        var z = this.m20 * vec.x + this.m21 * vec.y + this.m22 * vec.z;

        return new Vector3(x, y, z);
      }

      /**
       * 行列同士の乗算
       */

    }, {
      key: 'multiply',
      value: function multiply(mat) {
        var m00 = this.m00 * mat.m00 + this.m01 * mat.m10 + this.m02 * mat.m20;
        var m01 = this.m00 * mat.m01 + this.m01 * mat.m11 + this.m02 * mat.m21;
        var m02 = this.m00 * mat.m02 + this.m01 * mat.m12 + this.m02 * mat.m22;

        var m10 = this.m10 * mat.m00 + this.m11 * mat.m10 + this.m12 * mat.m20;
        var m11 = this.m10 * mat.m01 + this.m11 * mat.m11 + this.m12 * mat.m21;
        var m12 = this.m10 * mat.m02 + this.m11 * mat.m12 + this.m12 * mat.m22;

        var m20 = this.m20 * mat.m00 + this.m21 * mat.m10 + this.m22 * mat.m20;
        var m21 = this.m20 * mat.m01 + this.m21 * mat.m11 + this.m22 * mat.m21;
        var m22 = this.m20 * mat.m02 + this.m21 * mat.m12 + this.m22 * mat.m22;

        return this.setComponents(m00, m01, m02, m10, m11, m12, m20, m21, m22);
      }

      /**
       * 行列同士の乗算（static版）
       */

    }, {
      key: 'determinant',
      value: function determinant() {
        return this.m00 * this.m11 * this.m22 + this.m10 * this.m21 * this.m02 + this.m20 * this.m01 * this.m12 - this.m00 * this.m21 * this.m12 - this.m20 * this.m11 * this.m02 - this.m10 * this.m01 * this.m22;
      }
    }, {
      key: 'invert',
      value: function invert() {
        var det = this.determinant();
        var m00 = (this.m11 * this.m22 - this.m12 * this.m21) / det;
        var m01 = (this.m02 * this.m21 - this.m01 * this.m22) / det;
        var m02 = (this.m01 * this.m12 - this.m02 * this.m11) / det;
        var m10 = (this.m12 * this.m20 - this.m10 * this.m22) / det;
        var m11 = (this.m00 * this.m22 - this.m02 * this.m20) / det;
        var m12 = (this.m02 * this.m10 - this.m00 * this.m12) / det;
        var m20 = (this.m10 * this.m21 - this.m11 * this.m20) / det;
        var m21 = (this.m01 * this.m20 - this.m00 * this.m21) / det;
        var m22 = (this.m00 * this.m11 - this.m01 * this.m10) / det;

        return this.setComponents(m00, m01, m02, m10, m11, m12, m20, m21, m22);
      }
    }, {
      key: 'm00',
      set: function set(val) {
        this.m[0] = val;
      },
      get: function get() {
        return this.m[0];
      }
    }, {
      key: 'm10',
      set: function set(val) {
        this.m[1] = val;
      },
      get: function get() {
        return this.m[1];
      }
    }, {
      key: 'm20',
      set: function set(val) {
        this.m[2] = val;
      },
      get: function get() {
        return this.m[2];
      }
    }, {
      key: 'm01',
      set: function set(val) {
        this.m[3] = val;
      },
      get: function get() {
        return this.m[3];
      }
    }, {
      key: 'm11',
      set: function set(val) {
        this.m[4] = val;
      },
      get: function get() {
        return this.m[4];
      }
    }, {
      key: 'm21',
      set: function set(val) {
        this.m[5] = val;
      },
      get: function get() {
        return this.m[5];
      }
    }, {
      key: 'm02',
      set: function set(val) {
        this.m[6] = val;
      },
      get: function get() {
        return this.m[6];
      }
    }, {
      key: 'm12',
      set: function set(val) {
        this.m[7] = val;
      },
      get: function get() {
        return this.m[7];
      }
    }, {
      key: 'm22',
      set: function set(val) {
        this.m[8] = val;
      },
      get: function get() {
        return this.m[8];
      }
    }], [{
      key: 'identity',
      value: function identity() {
        return new Matrix33(1, 0, 0, 0, 1, 0, 0, 0, 1);
      }
    }, {
      key: 'rotateX',
      value: function rotateX(angle) {
        var radian = 0;
        if (GLBoost$1["ANGLE_UNIT"] === GLBoost$1.DEGREE) {
          radian = MathUtil.degreeToRadian(angle);
        } else {
          radian = angle;
        }

        var cos = Math.cos(radian);
        var sin = Math.sin(radian);
        return new Matrix33(1, 0, 0, 0, cos, -sin, 0, sin, cos);
      }
    }, {
      key: 'rotateY',
      value: function rotateY(angle) {
        var radian = 0;
        if (GLBoost$1["ANGLE_UNIT"] === GLBoost$1.DEGREE) {
          radian = MathUtil.degreeToRadian(angle);
        } else {
          radian = angle;
        }

        var cos = Math.cos(radian);
        var sin = Math.sin(radian);
        return new Matrix33(cos, 0, sin, 0, 1, 0, -sin, 0, cos);
      }
    }, {
      key: 'rotateZ',
      value: function rotateZ(angle) {
        var radian = 0;
        if (GLBoost$1["ANGLE_UNIT"] === GLBoost$1.DEGREE) {
          radian = MathUtil.degreeToRadian(angle);
        } else {
          radian = angle;
        }

        var cos = Math.cos(radian);
        var sin = Math.sin(radian);
        return new Matrix33(cos, -sin, 0, sin, cos, 0, 0, 0, 1);
      }
    }, {
      key: 'zero',
      value: function zero() {
        return new Matrix33(0, 0, 0, 0, 0, 0, 0, 0, 0);
      }
    }, {
      key: 'transpose',
      value: function transpose(mat) {

        var mat_t = new Matrix33(mat.m00, mat.m10, mat.m20, mat.m01, mat.m11, mat.m21, mat.m02, mat.m12, mat.m22);

        return mat_t;
      }
    }, {
      key: 'multiply',
      value: function multiply(l_m, r_m) {
        var m00 = l_m.m00 * r_m.m00 + l_m.m01 * r_m.m10 + l_m.m02 * r_m.m20;
        var m10 = l_m.m10 * r_m.m00 + l_m.m11 * r_m.m10 + l_m.m12 * r_m.m20;
        var m20 = l_m.m20 * r_m.m00 + l_m.m21 * r_m.m10 + l_m.m22 * r_m.m20;

        var m01 = l_m.m00 * r_m.m01 + l_m.m01 * r_m.m11 + l_m.m02 * r_m.m21;
        var m11 = l_m.m10 * r_m.m01 + l_m.m11 * r_m.m11 + l_m.m12 * r_m.m21;
        var m21 = l_m.m20 * r_m.m01 + l_m.m21 * r_m.m11 + l_m.m22 * r_m.m21;

        var m02 = l_m.m00 * r_m.m02 + l_m.m01 * r_m.m12 + l_m.m02 * r_m.m22;
        var m12 = l_m.m10 * r_m.m02 + l_m.m11 * r_m.m12 + l_m.m12 * r_m.m22;
        var m22 = l_m.m20 * r_m.m02 + l_m.m21 * r_m.m12 + l_m.m22 * r_m.m22;

        return new Matrix33(m00, m01, m02, m10, m11, m12, m20, m21, m22);
      }
    }, {
      key: 'determinant',
      value: function determinant(mat) {
        return mat.m00 * mat.m11 * mat.m22 + mat.m10 * mat.m21 * mat.m02 + mat.m20 * mat.m01 * mat.m12 - mat.m00 * mat.m21 * mat.m12 - mat.m20 * mat.m11 * mat.m02 - mat.m10 * mat.m01 * mat.m22;
      }
    }, {
      key: 'invert',
      value: function invert(mat) {
        var det = mat.determinant();
        var m00 = (mat.m11 * mat.m22 - mat.m12 * mat.m21) / det;
        var m01 = (mat.m02 * mat.m21 - mat.m01 * mat.m22) / det;
        var m02 = (mat.m01 * mat.m12 - mat.m02 * mat.m11) / det;
        var m10 = (mat.m12 * mat.m20 - mat.m10 * mat.m22) / det;
        var m11 = (mat.m00 * mat.m22 - mat.m02 * mat.m20) / det;
        var m12 = (mat.m02 * mat.m10 - mat.m00 * mat.m12) / det;
        var m20 = (mat.m10 * mat.m21 - mat.m11 * mat.m20) / det;
        var m21 = (mat.m01 * mat.m20 - mat.m00 * mat.m21) / det;
        var m22 = (mat.m00 * mat.m11 - mat.m01 * mat.m10) / det;

        return new Matrix33(m00, m01, m02, m10, m11, m12, m20, m21, m22);
      }
    }]);
    return Matrix33;
  }();

  GLBoost$1['Matrix33'] = Matrix33;

  var Matrix44 = function () {
    function Matrix44(m) {
      var isColumnMajor = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
      babelHelpers.classCallCheck(this, Matrix44);

      this.m = new Float32Array(16);
      if (arguments.length >= 16) {
        if (isColumnMajor === true) {
          var _m = arguments;
          this.setComponents(_m[0], _m[4], _m[8], _m[12], _m[1], _m[5], _m[9], _m[13], _m[2], _m[6], _m[10], _m[14], _m[3], _m[7], _m[11], _m[15]);
        } else {
          this.setComponents.apply(this, arguments); // arguments[0-15] must be row major values if isColumnMajor is false
        }
      } else if (Array.isArray(m)) {
          if (isColumnMajor === true) {
            this.setComponents(m[0], m[4], m[8], m[12], m[1], m[5], m[9], m[13], m[2], m[6], m[10], m[14], m[3], m[7], m[11], m[15]);
          } else {
            this.setComponents.apply(this, m); // 'm' must be row major array if isColumnMajor is false
          }
        } else if (m instanceof Float32Array) {
            if (isColumnMajor === true) {
              this.setComponents(m[0], m[4], m[8], m[12], m[1], m[5], m[9], m[13], m[2], m[6], m[10], m[14], m[3], m[7], m[11], m[15]);
            } else {
              this.setComponents.apply(this, m); // 'm' must be row major array if isColumnMajor is false
            }
          } else {
              this.identity();
            }
    }

    babelHelpers.createClass(Matrix44, [{
      key: 'setComponents',
      value: function setComponents(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
        this.m00 = m00;this.m01 = m01;this.m02 = m02;this.m03 = m03;
        this.m10 = m10;this.m11 = m11;this.m12 = m12;this.m13 = m13;
        this.m20 = m20;this.m21 = m21;this.m22 = m22;this.m23 = m23;
        this.m30 = m30;this.m31 = m31;this.m32 = m32;this.m33 = m33;

        return this;
      }
    }, {
      key: 'clone',
      value: function clone() {
        return new Matrix44(this.m[0], this.m[4], this.m[8], this.m[12], this.m[1], this.m[5], this.m[9], this.m[13], this.m[2], this.m[6], this.m[10], this.m[14], this.m[3], this.m[7], this.m[11], this.m[15]);
      }

      /**
       * 単位行列にする
       */

    }, {
      key: 'identity',
      value: function identity() {
        this.setComponents(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return this;
      }

      /**
       * 単位行列にする（static版）
       */

    }, {
      key: 'translate',
      value: function translate(vec) {
        return this.setComponents(1, 0, 0, vec.x, 0, 1, 0, vec.y, 0, 0, 1, vec.z, 0, 0, 0, 1);
      }
    }, {
      key: 'scale',
      value: function scale(vec) {
        return this.setComponents(vec.x, 0, 0, 0, 0, vec.y, 0, 0, 0, 0, vec.z, 0, 0, 0, 0, 1);
      }
    }, {
      key: 'rotateX',


      /**
       * Create X oriented Rotation Matrix
       */
      value: function rotateX(angle) {
        var radian = 0;
        if (GLBoost$1["ANGLE_UNIT"] === GLBoost$1.DEGREE) {
          radian = MathUtil.degreeToRadian(angle);
        } else {
          radian = angle;
        }

        var cos = Math.cos(radian);
        var sin = Math.sin(radian);
        return this.setComponents(1, 0, 0, 0, 0, cos, -sin, 0, 0, sin, cos, 0, 0, 0, 0, 1);
      }
      /**
       * Create X oriented Rotation Matrix
      */

    }, {
      key: 'rotateY',


      /**
       * Create Y oriented Rotation Matrix
       */
      value: function rotateY(angle) {
        var radian = 0;
        if (GLBoost$1["ANGLE_UNIT"] === GLBoost$1.DEGREE) {
          radian = MathUtil.degreeToRadian(angle);
        } else {
          radian = angle;
        }

        var cos = Math.cos(radian);
        var sin = Math.sin(radian);
        return this.setComponents(cos, 0, sin, 0, 0, 1, 0, 0, -sin, 0, cos, 0, 0, 0, 0, 1);
      }
      /**
       * Create Y oriented Rotation Matrix
       */

    }, {
      key: 'rotateZ',


      /**
       * Create Z oriented Rotation Matrix
       */
      value: function rotateZ(angle) {
        var radian = 0;
        if (GLBoost$1["ANGLE_UNIT"] === GLBoost$1.DEGREE) {
          radian = MathUtil.degreeToRadian(angle);
        } else {
          radian = angle;
        }

        var cos = Math.cos(radian);
        var sin = Math.sin(radian);
        return this.setComponents(cos, -sin, 0, 0, sin, cos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      /**
       * Create Z oriented Rotation Matrix
       */

    }, {
      key: 'zero',


      /**
       * ゼロ行列
       */
      value: function zero() {
        this.setComponents(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return this;
      }
    }, {
      key: 'flatten',
      value: function flatten() {
        return this.m;
      }
    }, {
      key: 'flattenAsArray',
      value: function flattenAsArray() {
        return [this.m[0], this.m[1], this.m[2], this.m[3], this.m[4], this.m[5], this.m[6], this.m[7], this.m[8], this.m[9], this.m[10], this.m[11], this.m[12], this.m[13], this.m[14], this.m[15]];
      }
    }, {
      key: '_swap',
      value: function _swap(l, r) {
        this.m[r] = [this.m[l], this.m[l] = this.m[r]][0]; // Swap
      }

      /**
       * 転置
       */

    }, {
      key: 'transpose',
      value: function transpose() {
        this._swap(1, 4);
        this._swap(2, 8);
        this._swap(3, 12);
        this._swap(6, 9);
        this._swap(7, 13);
        this._swap(11, 14);

        return this;
      }

      /**
       * 転置（static版）
       */

    }, {
      key: 'multiplyVector',
      value: function multiplyVector(vec) {
        var x = this.m00 * vec.x + this.m01 * vec.y + this.m02 * vec.z + this.m03 * vec.w;
        var y = this.m10 * vec.x + this.m11 * vec.y + this.m12 * vec.z + this.m13 * vec.w;
        var z = this.m20 * vec.x + this.m21 * vec.y + this.m22 * vec.z + this.m23 * vec.w;
        var w = this.m30 * vec.x + this.m31 * vec.y + this.m32 * vec.z + this.m33 * vec.w;

        return new Vector4(x, y, z, w);
      }

      /**
       * 行列同士の乗算
       */

    }, {
      key: 'multiply',
      value: function multiply(mat) {
        var m00 = this.m00 * mat.m00 + this.m01 * mat.m10 + this.m02 * mat.m20 + this.m03 * mat.m30;
        var m01 = this.m00 * mat.m01 + this.m01 * mat.m11 + this.m02 * mat.m21 + this.m03 * mat.m31;
        var m02 = this.m00 * mat.m02 + this.m01 * mat.m12 + this.m02 * mat.m22 + this.m03 * mat.m32;
        var m03 = this.m00 * mat.m03 + this.m01 * mat.m13 + this.m02 * mat.m23 + this.m03 * mat.m33;

        var m10 = this.m10 * mat.m00 + this.m11 * mat.m10 + this.m12 * mat.m20 + this.m13 * mat.m30;
        var m11 = this.m10 * mat.m01 + this.m11 * mat.m11 + this.m12 * mat.m21 + this.m13 * mat.m31;
        var m12 = this.m10 * mat.m02 + this.m11 * mat.m12 + this.m12 * mat.m22 + this.m13 * mat.m32;
        var m13 = this.m10 * mat.m03 + this.m11 * mat.m13 + this.m12 * mat.m23 + this.m13 * mat.m33;

        var m20 = this.m20 * mat.m00 + this.m21 * mat.m10 + this.m22 * mat.m20 + this.m23 * mat.m30;
        var m21 = this.m20 * mat.m01 + this.m21 * mat.m11 + this.m22 * mat.m21 + this.m23 * mat.m31;
        var m22 = this.m20 * mat.m02 + this.m21 * mat.m12 + this.m22 * mat.m22 + this.m23 * mat.m32;
        var m23 = this.m20 * mat.m03 + this.m21 * mat.m13 + this.m22 * mat.m23 + this.m23 * mat.m33;

        var m30 = this.m30 * mat.m00 + this.m31 * mat.m10 + this.m32 * mat.m20 + this.m33 * mat.m30;
        var m31 = this.m30 * mat.m01 + this.m31 * mat.m11 + this.m32 * mat.m21 + this.m33 * mat.m31;
        var m32 = this.m30 * mat.m02 + this.m31 * mat.m12 + this.m32 * mat.m22 + this.m33 * mat.m32;
        var m33 = this.m30 * mat.m03 + this.m31 * mat.m13 + this.m32 * mat.m23 + this.m33 * mat.m33;

        return this.setComponents(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
      }

      /**
       * 行列同士の乗算（static版）
       */

    }, {
      key: 'toMatrix33',
      value: function toMatrix33() {
        return new Matrix33(this.m00, this.m01, this.m02, this.m10, this.m11, this.m12, this.m20, this.m21, this.m22);
      }
    }, {
      key: 'determinant',
      value: function determinant() {
        return this.m00 * this.m11 * this.m22 * this.m33 + this.m00 * this.m12 * this.m23 * this.m31 + this.m00 * this.m13 * this.m21 * this.m32 + this.m01 * this.m10 * this.m23 * this.m32 + this.m01 * this.m12 * this.m20 * this.m33 + this.m01 * this.m13 * this.m22 * this.m30 + this.m02 * this.m10 * this.m21 * this.m33 + this.m02 * this.m11 * this.m23 * this.m30 + this.m02 * this.m13 * this.m20 * this.m31 + this.m03 * this.m10 * this.m22 * this.m31 + this.m03 * this.m11 * this.m20 * this.m32 + this.m03 * this.m12 * this.m21 * this.m30 - this.m00 * this.m11 * this.m23 * this.m32 - this.m00 * this.m12 * this.m21 * this.m33 - this.m00 * this.m13 * this.m22 * this.m31 - this.m01 * this.m10 * this.m22 * this.m33 - this.m01 * this.m12 * this.m23 * this.m30 - this.m01 * this.m13 * this.m20 * this.m32 - this.m02 * this.m10 * this.m23 * this.m31 - this.m02 * this.m11 * this.m20 * this.m33 - this.m02 * this.m13 * this.m21 * this.m30 - this.m03 * this.m10 * this.m21 * this.m32 - this.m03 * this.m11 * this.m22 * this.m30 - this.m03 * this.m12 * this.m20 * this.m31;
      }
    }, {
      key: 'invert',
      value: function invert() {
        var det = this.determinant();
        var m00 = (this.m11 * this.m22 * this.m33 + this.m12 * this.m23 * this.m31 + this.m13 * this.m21 * this.m32 - this.m11 * this.m23 * this.m32 - this.m12 * this.m21 * this.m33 - this.m13 * this.m22 * this.m31) / det;
        var m01 = (this.m01 * this.m23 * this.m32 + this.m02 * this.m21 * this.m33 + this.m03 * this.m22 * this.m31 - this.m01 * this.m22 * this.m33 - this.m02 * this.m23 * this.m31 - this.m03 * this.m21 * this.m32) / det;
        var m02 = (this.m01 * this.m12 * this.m33 + this.m02 * this.m13 * this.m31 + this.m03 * this.m11 * this.m32 - this.m01 * this.m13 * this.m32 - this.m02 * this.m11 * this.m33 - this.m03 * this.m12 * this.m31) / det;
        var m03 = (this.m01 * this.m13 * this.m22 + this.m02 * this.m11 * this.m23 + this.m03 * this.m12 * this.m21 - this.m01 * this.m12 * this.m23 - this.m02 * this.m13 * this.m21 - this.m03 * this.m11 * this.m22) / det;
        var m10 = (this.m10 * this.m23 * this.m32 + this.m12 * this.m20 * this.m33 + this.m13 * this.m22 * this.m30 - this.m10 * this.m22 * this.m33 - this.m12 * this.m23 * this.m30 - this.m13 * this.m20 * this.m32) / det;
        var m11 = (this.m00 * this.m22 * this.m33 + this.m02 * this.m23 * this.m30 + this.m03 * this.m20 * this.m32 - this.m00 * this.m23 * this.m32 - this.m02 * this.m20 * this.m33 - this.m03 * this.m22 * this.m30) / det;
        var m12 = (this.m00 * this.m13 * this.m32 + this.m02 * this.m10 * this.m33 + this.m03 * this.m12 * this.m30 - this.m00 * this.m12 * this.m33 - this.m02 * this.m13 * this.m30 - this.m03 * this.m10 * this.m32) / det;
        var m13 = (this.m00 * this.m12 * this.m23 + this.m02 * this.m13 * this.m20 + this.m03 * this.m10 * this.m22 - this.m00 * this.m13 * this.m22 - this.m02 * this.m10 * this.m23 - this.m03 * this.m12 * this.m20) / det;
        var m20 = (this.m10 * this.m21 * this.m33 + this.m11 * this.m23 * this.m30 + this.m13 * this.m20 * this.m31 - this.m10 * this.m23 * this.m31 - this.m11 * this.m20 * this.m33 - this.m13 * this.m21 * this.m30) / det;
        var m21 = (this.m00 * this.m23 * this.m31 + this.m01 * this.m20 * this.m33 + this.m03 * this.m21 * this.m30 - this.m00 * this.m21 * this.m33 - this.m01 * this.m23 * this.m30 - this.m03 * this.m20 * this.m31) / det;
        var m22 = (this.m00 * this.m11 * this.m33 + this.m01 * this.m13 * this.m30 + this.m03 * this.m10 * this.m31 - this.m00 * this.m13 * this.m31 - this.m01 * this.m10 * this.m33 - this.m03 * this.m11 * this.m30) / det;
        var m23 = (this.m00 * this.m13 * this.m21 + this.m01 * this.m10 * this.m23 + this.m03 * this.m11 * this.m20 - this.m00 * this.m11 * this.m23 - this.m01 * this.m13 * this.m20 - this.m03 * this.m10 * this.m21) / det;
        var m30 = (this.m10 * this.m22 * this.m31 + this.m11 * this.m20 * this.m32 + this.m12 * this.m21 * this.m30 - this.m10 * this.m21 * this.m32 - this.m11 * this.m22 * this.m30 - this.m12 * this.m20 * this.m31) / det;
        var m31 = (this.m00 * this.m21 * this.m32 + this.m01 * this.m22 * this.m30 + this.m02 * this.m20 * this.m31 - this.m00 * this.m22 * this.m31 - this.m01 * this.m20 * this.m32 - this.m02 * this.m21 * this.m30) / det;
        var m32 = (this.m00 * this.m12 * this.m31 + this.m01 * this.m10 * this.m32 + this.m02 * this.m11 * this.m30 - this.m00 * this.m11 * this.m32 - this.m01 * this.m12 * this.m30 - this.m02 * this.m10 * this.m31) / det;
        var m33 = (this.m00 * this.m11 * this.m22 + this.m01 * this.m12 * this.m20 + this.m02 * this.m10 * this.m21 - this.m00 * this.m12 * this.m21 - this.m01 * this.m10 * this.m22 - this.m02 * this.m11 * this.m20) / det;

        return this.setComponents(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
      }
    }, {
      key: 'toString',
      value: function toString() {
        return this.m00 + ' ' + this.m01 + ' ' + this.m02 + ' ' + this.m03 + ' \n' + this.m10 + ' ' + this.m11 + ' ' + this.m12 + ' ' + this.m13 + ' \n' + this.m20 + ' ' + this.m21 + ' ' + this.m22 + ' ' + this.m23 + ' \n' + this.m30 + ' ' + this.m31 + ' ' + this.m32 + ' ' + this.m33 + ' \n';
      }
    }, {
      key: 'm00',
      set: function set(val) {
        this.m[0] = val;
      },
      get: function get() {
        return this.m[0];
      }
    }, {
      key: 'm10',
      set: function set(val) {
        this.m[1] = val;
      },
      get: function get() {
        return this.m[1];
      }
    }, {
      key: 'm20',
      set: function set(val) {
        this.m[2] = val;
      },
      get: function get() {
        return this.m[2];
      }
    }, {
      key: 'm30',
      set: function set(val) {
        this.m[3] = val;
      },
      get: function get() {
        return this.m[3];
      }
    }, {
      key: 'm01',
      set: function set(val) {
        this.m[4] = val;
      },
      get: function get() {
        return this.m[4];
      }
    }, {
      key: 'm11',
      set: function set(val) {
        this.m[5] = val;
      },
      get: function get() {
        return this.m[5];
      }
    }, {
      key: 'm21',
      set: function set(val) {
        this.m[6] = val;
      },
      get: function get() {
        return this.m[6];
      }
    }, {
      key: 'm31',
      set: function set(val) {
        this.m[7] = val;
      },
      get: function get() {
        return this.m[7];
      }
    }, {
      key: 'm02',
      set: function set(val) {
        this.m[8] = val;
      },
      get: function get() {
        return this.m[8];
      }
    }, {
      key: 'm12',
      set: function set(val) {
        this.m[9] = val;
      },
      get: function get() {
        return this.m[9];
      }
    }, {
      key: 'm22',
      set: function set(val) {
        this.m[10] = val;
      },
      get: function get() {
        return this.m[10];
      }
    }, {
      key: 'm32',
      set: function set(val) {
        this.m[11] = val;
      },
      get: function get() {
        return this.m[11];
      }
    }, {
      key: 'm03',
      set: function set(val) {
        this.m[12] = val;
      },
      get: function get() {
        return this.m[12];
      }
    }, {
      key: 'm13',
      set: function set(val) {
        this.m[13] = val;
      },
      get: function get() {
        return this.m[13];
      }
    }, {
      key: 'm23',
      set: function set(val) {
        this.m[14] = val;
      },
      get: function get() {
        return this.m[14];
      }
    }, {
      key: 'm33',
      set: function set(val) {
        this.m[15] = val;
      },
      get: function get() {
        return this.m[15];
      }
    }], [{
      key: 'identity',
      value: function identity() {
        return new Matrix44(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
    }, {
      key: 'translate',
      value: function translate(vec) {
        return new Matrix44(1, 0, 0, vec.x, 0, 1, 0, vec.y, 0, 0, 1, vec.z, 0, 0, 0, 1);
      }
    }, {
      key: 'scale',
      value: function scale(vec) {
        return new Matrix44(vec.x, 0, 0, 0, 0, vec.y, 0, 0, 0, 0, vec.z, 0, 0, 0, 0, 1);
      }
    }, {
      key: 'rotateX',
      value: function rotateX(angle) {
        var radian = 0;
        if (GLBoost$1["ANGLE_UNIT"] === GLBoost$1.DEGREE) {
          radian = MathUtil.degreeToRadian(angle);
        } else {
          radian = angle;
        }

        var cos = Math.cos(radian);
        var sin = Math.sin(radian);
        return new Matrix44(1, 0, 0, 0, 0, cos, -sin, 0, 0, sin, cos, 0, 0, 0, 0, 1);
      }
    }, {
      key: 'rotateY',
      value: function rotateY(angle) {
        var radian = 0;
        if (GLBoost$1["ANGLE_UNIT"] === GLBoost$1.DEGREE) {
          radian = MathUtil.degreeToRadian(angle);
        } else {
          radian = angle;
        }

        var cos = Math.cos(radian);
        var sin = Math.sin(radian);
        return new Matrix44(cos, 0, sin, 0, 0, 1, 0, 0, -sin, 0, cos, 0, 0, 0, 0, 1);
      }
    }, {
      key: 'rotateZ',
      value: function rotateZ(angle) {
        var radian = 0;
        if (GLBoost$1["ANGLE_UNIT"] === GLBoost$1.DEGREE) {
          radian = MathUtil.degreeToRadian(angle);
        } else {
          radian = angle;
        }

        var cos = Math.cos(radian);
        var sin = Math.sin(radian);
        return new Matrix44(cos, -sin, 0, 0, sin, cos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
    }, {
      key: 'zero',
      value: function zero() {
        return new Matrix44(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      }
    }, {
      key: 'transpose',
      value: function transpose(mat) {

        var mat_t = new Matrix44(mat.m00, mat.m10, mat.m20, mat.m30, mat.m01, mat.m11, mat.m21, mat.m31, mat.m02, mat.m12, mat.m22, mat.m32, mat.m03, mat.m13, mat.m23, mat.m33);

        return mat_t;
      }
    }, {
      key: 'multiply',
      value: function multiply(l_m, r_m) {
        var m00 = l_m.m00 * r_m.m00 + l_m.m01 * r_m.m10 + l_m.m02 * r_m.m20 + l_m.m03 * r_m.m30;
        var m10 = l_m.m10 * r_m.m00 + l_m.m11 * r_m.m10 + l_m.m12 * r_m.m20 + l_m.m13 * r_m.m30;
        var m20 = l_m.m20 * r_m.m00 + l_m.m21 * r_m.m10 + l_m.m22 * r_m.m20 + l_m.m23 * r_m.m30;
        var m30 = l_m.m30 * r_m.m00 + l_m.m31 * r_m.m10 + l_m.m32 * r_m.m20 + l_m.m33 * r_m.m30;

        var m01 = l_m.m00 * r_m.m01 + l_m.m01 * r_m.m11 + l_m.m02 * r_m.m21 + l_m.m03 * r_m.m31;
        var m11 = l_m.m10 * r_m.m01 + l_m.m11 * r_m.m11 + l_m.m12 * r_m.m21 + l_m.m13 * r_m.m31;
        var m21 = l_m.m20 * r_m.m01 + l_m.m21 * r_m.m11 + l_m.m22 * r_m.m21 + l_m.m23 * r_m.m31;
        var m31 = l_m.m30 * r_m.m01 + l_m.m31 * r_m.m11 + l_m.m32 * r_m.m21 + l_m.m33 * r_m.m31;

        var m02 = l_m.m00 * r_m.m02 + l_m.m01 * r_m.m12 + l_m.m02 * r_m.m22 + l_m.m03 * r_m.m32;
        var m12 = l_m.m10 * r_m.m02 + l_m.m11 * r_m.m12 + l_m.m12 * r_m.m22 + l_m.m13 * r_m.m32;
        var m22 = l_m.m20 * r_m.m02 + l_m.m21 * r_m.m12 + l_m.m22 * r_m.m22 + l_m.m23 * r_m.m32;
        var m32 = l_m.m30 * r_m.m02 + l_m.m31 * r_m.m12 + l_m.m32 * r_m.m22 + l_m.m33 * r_m.m32;

        var m03 = l_m.m00 * r_m.m03 + l_m.m01 * r_m.m13 + l_m.m02 * r_m.m23 + l_m.m03 * r_m.m33;
        var m13 = l_m.m10 * r_m.m03 + l_m.m11 * r_m.m13 + l_m.m12 * r_m.m23 + l_m.m13 * r_m.m33;
        var m23 = l_m.m20 * r_m.m03 + l_m.m21 * r_m.m13 + l_m.m22 * r_m.m23 + l_m.m23 * r_m.m33;
        var m33 = l_m.m30 * r_m.m03 + l_m.m31 * r_m.m13 + l_m.m32 * r_m.m23 + l_m.m33 * r_m.m33;

        return new Matrix44(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
      }
    }, {
      key: 'toMatrix33',
      value: function toMatrix33(mat) {
        return new Matrix33(mat.m00, mat.m01, mat.m02, mat.m10, mat.m11, mat.m12, mat.m20, mat.m21, mat.m22);
      }
    }, {
      key: 'determinant',
      value: function determinant(mat) {
        return mat.m00 * mat.m11 * mat.m22 * mat.m33 + mat.m00 * mat.m12 * mat.m23 * mat.m31 + mat.m00 * mat.m13 * mat.m21 * mat.m32 + mat.m01 * mat.m10 * mat.m23 * mat.m32 + mat.m01 * mat.m12 * mat.m20 * mat.m33 + mat.m01 * mat.m13 * mat.m22 * mat.m30 + mat.m02 * mat.m10 * mat.m21 * mat.m33 + mat.m02 * mat.m11 * mat.m23 * mat.m30 + mat.m02 * mat.m13 * mat.m20 * mat.m31 + mat.m03 * mat.m10 * mat.m22 * mat.m31 + mat.m03 * mat.m11 * mat.m20 * mat.m32 + mat.m03 * mat.m12 * mat.m21 * mat.m30 - mat.m00 * mat.m11 * mat.m23 * mat.m32 - mat.m00 * mat.m12 * mat.m21 * mat.m33 - mat.m00 * mat.m13 * mat.m22 * mat.m31 - mat.m01 * mat.m10 * mat.m22 * mat.m33 - mat.m01 * mat.m12 * mat.m23 * mat.m30 - mat.m01 * mat.m13 * mat.m20 * mat.m32 - mat.m02 * mat.m10 * mat.m23 * mat.m31 - mat.m02 * mat.m11 * mat.m20 * mat.m33 - mat.m02 * mat.m13 * mat.m21 * mat.m30 - mat.m03 * mat.m10 * mat.m21 * mat.m32 - mat.m03 * mat.m11 * mat.m22 * mat.m30 - mat.m03 * mat.m12 * mat.m20 * mat.m31;
      }
    }, {
      key: 'invert',
      value: function invert(mat) {
        var det = mat.determinant();
        var m00 = (mat.m11 * mat.m22 * mat.m33 + mat.m12 * mat.m23 * mat.m31 + mat.m13 * mat.m21 * mat.m32 - mat.m11 * mat.m23 * mat.m32 - mat.m12 * mat.m21 * mat.m33 - mat.m13 * mat.m22 * mat.m31) / det;
        var m01 = (mat.m01 * mat.m23 * mat.m32 + mat.m02 * mat.m21 * mat.m33 + mat.m03 * mat.m22 * mat.m31 - mat.m01 * mat.m22 * mat.m33 - mat.m02 * mat.m23 * mat.m31 - mat.m03 * mat.m21 * mat.m32) / det;
        var m02 = (mat.m01 * mat.m12 * mat.m33 + mat.m02 * mat.m13 * mat.m31 + mat.m03 * mat.m11 * mat.m32 - mat.m01 * mat.m13 * mat.m32 - mat.m02 * mat.m11 * mat.m33 - mat.m03 * mat.m12 * mat.m31) / det;
        var m03 = (mat.m01 * mat.m13 * mat.m22 + mat.m02 * mat.m11 * mat.m23 + mat.m03 * mat.m12 * mat.m21 - mat.m01 * mat.m12 * mat.m23 - mat.m02 * mat.m13 * mat.m21 - mat.m03 * mat.m11 * mat.m22) / det;
        var m10 = (mat.m10 * mat.m23 * mat.m32 + mat.m12 * mat.m20 * mat.m33 + mat.m13 * mat.m22 * mat.m30 - mat.m10 * mat.m22 * mat.m33 - mat.m12 * mat.m23 * mat.m30 - mat.m13 * mat.m20 * mat.m32) / det;
        var m11 = (mat.m00 * mat.m22 * mat.m33 + mat.m02 * mat.m23 * mat.m30 + mat.m03 * mat.m20 * mat.m32 - mat.m00 * mat.m23 * mat.m32 - mat.m02 * mat.m20 * mat.m33 - mat.m03 * mat.m22 * mat.m30) / det;
        var m12 = (mat.m00 * mat.m13 * mat.m32 + mat.m02 * mat.m10 * mat.m33 + mat.m03 * mat.m12 * mat.m30 - mat.m00 * mat.m12 * mat.m33 - mat.m02 * mat.m13 * mat.m30 - mat.m03 * mat.m10 * mat.m32) / det;
        var m13 = (mat.m00 * mat.m12 * mat.m23 + mat.m02 * mat.m13 * mat.m20 + mat.m03 * mat.m10 * mat.m22 - mat.m00 * mat.m13 * mat.m22 - mat.m02 * mat.m10 * mat.m23 - mat.m03 * mat.m12 * mat.m20) / det;
        var m20 = (mat.m10 * mat.m21 * mat.m33 + mat.m11 * mat.m23 * mat.m30 + mat.m13 * mat.m20 * mat.m31 - mat.m10 * mat.m23 * mat.m31 - mat.m11 * mat.m20 * mat.m33 - mat.m13 * mat.m21 * mat.m30) / det;
        var m21 = (mat.m00 * mat.m23 * mat.m31 + mat.m01 * mat.m20 * mat.m33 + mat.m03 * mat.m21 * mat.m30 - mat.m00 * mat.m21 * mat.m33 - mat.m01 * mat.m23 * mat.m30 - mat.m03 * mat.m20 * mat.m31) / det;
        var m22 = (mat.m00 * mat.m11 * mat.m33 + mat.m01 * mat.m13 * mat.m30 + mat.m03 * mat.m10 * mat.m31 - mat.m00 * mat.m13 * mat.m31 - mat.m01 * mat.m10 * mat.m33 - mat.m03 * mat.m11 * mat.m30) / det;
        var m23 = (mat.m00 * mat.m13 * mat.m21 + mat.m01 * mat.m10 * mat.m23 + mat.m03 * mat.m11 * mat.m20 - mat.m00 * mat.m11 * mat.m23 - mat.m01 * mat.m13 * mat.m20 - mat.m03 * mat.m10 * mat.m21) / det;
        var m30 = (mat.m10 * mat.m22 * mat.m31 + mat.m11 * mat.m20 * mat.m32 + mat.m12 * mat.m21 * mat.m30 - mat.m10 * mat.m21 * mat.m32 - mat.m11 * mat.m22 * mat.m30 - mat.m12 * mat.m20 * mat.m31) / det;
        var m31 = (mat.m00 * mat.m21 * mat.m32 + mat.m01 * mat.m22 * mat.m30 + mat.m02 * mat.m20 * mat.m31 - mat.m00 * mat.m22 * mat.m31 - mat.m01 * mat.m20 * mat.m32 - mat.m02 * mat.m21 * mat.m30) / det;
        var m32 = (mat.m00 * mat.m12 * mat.m31 + mat.m01 * mat.m10 * mat.m32 + mat.m02 * mat.m11 * mat.m30 - mat.m00 * mat.m11 * mat.m32 - mat.m01 * mat.m12 * mat.m30 - mat.m02 * mat.m10 * mat.m31) / det;
        var m33 = (mat.m00 * mat.m11 * mat.m22 + mat.m01 * mat.m12 * mat.m20 + mat.m02 * mat.m10 * mat.m21 - mat.m00 * mat.m12 * mat.m21 - mat.m01 * mat.m10 * mat.m22 - mat.m02 * mat.m11 * mat.m20) / det;

        return new Matrix44(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
      }
    }]);
    return Matrix44;
  }();

  GLBoost$1["Matrix44"] = Matrix44;

  var Quaternion = function () {
    function Quaternion(x, y, z, w) {
      babelHelpers.classCallCheck(this, Quaternion);

      this.x = x;
      this.y = y;
      this.z = z;
      this.w = w;
    }

    babelHelpers.createClass(Quaternion, [{
      key: 'isEqual',
      value: function isEqual(vec) {
        if (this.x === vec.x && this.y === vec.y && this.z === vec.z && this.w === vec.w) {
          return true;
        } else {
          return false;
        }
      }
    }, {
      key: 'clone',
      value: function clone() {
        return new Quaternion(this.x, this.y, this.z, this.w);
      }
    }, {
      key: 'axisAngle',
      value: function axisAngle(axisVec3, angle) {
        var radian = 0;
        if (GLBoost$1["ANGLE_UNIT"] === GLBoost$1.DEGREE) {
          radian = MathUtil.degreeToRadian(angle);
        } else {
          radian = angle;
        }
        var halfAngle = 0.5 * radian;
        var sin = Math.sin(halfAngle);

        var axis = Vector3.normalize(axisVec3);
        this.w = Math.cos(halfAngle);
        this.x = sin * axis.x;
        this.y = sin * axis.y;
        this.z = sin * axis.z;

        return this;
      }
    }, {
      key: 'add',
      value: function add(q) {
        this.x += q.x;
        this.y += q.y;
        this.z += q.z;
        this.w += q.w;

        return this;
      }
    }, {
      key: 'multiply',
      value: function multiply(val) {
        this.x *= val;
        this.y *= val;
        this.z *= val;
        this.w *= val;

        return this;
      }
    }, {
      key: 'rotationMatrix',
      get: function get() {
        var sx = this.x * this.x;
        var sy = this.y * this.y;
        var sz = this.z * this.z;
        var cx = this.y * this.z;
        var cy = this.x * this.z;
        var cz = this.x * this.y;
        var wx = this.w * this.x;
        var wy = this.w * this.y;
        var wz = this.w * this.z;

        return new Matrix44(1.0 - 2.0 * (sy + sz), 2.0 * (cz - wz), 2.0 * (cy + wy), 0.0, 2.0 * (cz + wz), 1.0 - 2.0 * (sx + sz), 2.0 * (cx - wx), 0.0, 2.0 * (cy - wy), 2.0 * (cx + wx), 1.0 - 2.0 * (sx + sy), 0.0, 0.0, 0.0, 0.0, 1.0);
      }
    }], [{
      key: 'invert',
      value: function invert(quat) {
        return new Quaternion(-quat.x, -quat.y, -quat.z, quat.w).multiply(1.0 / (quat.x * quat.x + quat.y * quat.y + quat.z * quat.z + quat.w * quat.w));
      }
    }, {
      key: 'qlerp',
      value: function qlerp(lhq, rhq, ratio) {

        var q = new Quaternion(0, 0, 0, 1);
        var qr = lhq.w * rhq.w + lhq.x * rhq.x + lhq.y * rhq.y + lhq.z * rhq.z;
        var ss = 1.0 - qr * qr;

        if (ss === 0.0) {
          q.w = lhq.w;
          q.x = lhq.x;
          q.y = lhq.y;
          q.z = lhq.z;

          return q;
        } else {

          if (qr > 1) {
            qr = 0.999;
          } else if (qr < -1) {
            qr = -0.999;
          }

          var ph = Math.acos(qr);
          var s2 = undefined;
          if (qr < 0.0 && ph > Math.PI / 2.0) {
            qr = -lhq.w * rhq.w - lhq.x * rhq.x - lhq.y * rhq.y - lhq.z * rhq.z;
            ph = Math.acos(qr);
            s2 = -1 * Math.sin(ph * ratio) / Math.sin(ph);
          } else {
            s2 = Math.sin(ph * ratio) / Math.sin(ph);
          }
          var s1 = Math.sin(ph * (1.0 - ratio)) / Math.sin(ph);

          q.x = lhq.x * s1 + rhq.x * s2;
          q.y = lhq.y * s1 + rhq.y * s2;
          q.z = lhq.z * s1 + rhq.z * s2;
          q.w = lhq.w * s1 + rhq.w * s2;

          return q;
        }
      }
    }, {
      key: 'axisAngle',
      value: function axisAngle(axisVec3, angle) {
        var radian = 0;
        if (GLBoost$1["ANGLE_UNIT"] === GLBoost$1.DEGREE) {
          radian = MathUtil.degreeToRadian(angle);
        } else {
          radian = angle;
        }
        var halfAngle = 0.5 * radian;
        var sin = Math.sin(halfAngle);

        var axis = Vector3.normalize(axisVec3);
        return new Quaternion(sin * axis.x, sin * axis.y, sin * axis.z, Math.cos(halfAngle));
      }
    }]);
    return Quaternion;
  }();

  GLBoost$1["Quaternion"] = Quaternion;

  var AnimationUtil = function () {
    function AnimationUtil() {
      babelHelpers.classCallCheck(this, AnimationUtil);
    }

    babelHelpers.createClass(AnimationUtil, null, [{
      key: "lerp",
      value: function lerp(start, end, ratio, componentN) {
        if (componentN === 1) {
          return start * (1 - ratio) + end * ratio;
        } else {
          if (start instanceof Quaternion) {
            return Quaternion.qlerp(start, end, ratio);
          } else {
            return start.multiply(1 - ratio).add(end.multiply(ratio));
          }
        }
      }
    }, {
      key: "interpolate",
      value: function interpolate(inputArray, outputArray, input, componentN) {
        if (input < inputArray[0]) {
          return outputArray[0].clone(); // out of range!
        }
        if (inputArray[inputArray.length - 1] <= input) {
          return outputArray[outputArray.length - 1].clone(); // out of range!
        }

        for (var i = 0; i < inputArray.length; i++) {
          if (typeof inputArray[i + 1] === "undefined") {
            break;
          }
          if (inputArray[i] <= input && input < inputArray[i + 1]) {
            var ratio = (input - inputArray[i]) / (inputArray[i + 1] - inputArray[i]);
            var resultValue = this.lerp(outputArray[i].clone(), outputArray[i + 1].clone(), ratio, componentN);
            return resultValue;
          }
        }
        return outputArray[0].clone(); // out of range!
      }
    }]);
    return AnimationUtil;
  }();

  var MiscUtil = function () {
    function MiscUtil() {
      babelHelpers.classCallCheck(this, MiscUtil);
    }

    babelHelpers.createClass(MiscUtil, null, [{
      key: 'isDefinedAndTrue',
      value: function isDefinedAndTrue(value) {
        if (typeof value !== 'undefined' && value) {
          return true;
        } else {
          return false;
        }
      }
    }, {
      key: 'consoleLog',
      value: function consoleLog(text) {
        if (GLBoost$1.CONSOLE_OUT_FOR_DEBUGGING) {
          console.log(text);
        }
      }
    }]);
    return MiscUtil;
  }();

  var singleton$2 = Symbol();
  var singletonEnforcer$2 = Symbol();

  var GLBoostMonitor = function () {
    function GLBoostMonitor(enforcer) {
      babelHelpers.classCallCheck(this, GLBoostMonitor);

      if (enforcer !== singletonEnforcer$2) {
        throw new Error('This is a Singleton class. get the instance using \'getInstance\' static method.');
      }

      this._glBoostObjects = {};
      this._glResources = [];
    }

    babelHelpers.createClass(GLBoostMonitor, [{
      key: 'registerGLBoostObject',
      value: function registerGLBoostObject(glBoostObject) {
        this._glBoostObjects[glBoostObject.toString()] = glBoostObject;
        MiscUtil.consoleLog('GLBoost Resource: ' + glBoostObject.toString() + ' (' + glBoostObject.belongingCanvasId + ') was created.');
      }
    }, {
      key: 'deregisterGLBoostObject',
      value: function deregisterGLBoostObject(glBoostObject) {
        delete this._glBoostObjects[glBoostObject.toString()];
        MiscUtil.consoleLog('GLBoost Resource: ' + glBoostObject.toString() + ' (' + glBoostObject.belongingCanvasId + ') was ready for discard.');
      }
    }, {
      key: 'printGLBoostObjects',
      value: function printGLBoostObjects() {
        var objects = this._glBoostObjects;
        MiscUtil.consoleLog('========== GLBoost Object Lists [begin] ==========');
        for (var key in objects) {
          if (objects.hasOwnProperty(key)) {
            MiscUtil.consoleLog(key + '(' + objects[key].belongingCanvasId + ')');
          }
        }
        MiscUtil.consoleLog('========== GLBoost Object Lists [end] ==========');
      }
    }, {
      key: 'printGLBoostObjectsOrderByName',
      value: function printGLBoostObjectsOrderByName() {
        var objects = this._glBoostObjects;
        var objectArray = [];
        for (var key in objects) {
          if (objects.hasOwnProperty(key)) {
            objectArray.push(objects[key]);
          }
        }
        objectArray.sort(function (a, b) {
          if (a < b) return -1;
          if (a > b) return 1;
          return 0;
        });
        MiscUtil.consoleLog('========== GLBoost Object Lists [begin] ==========');
        objectArray.forEach(function (object) {
          MiscUtil.consoleLog(object.toString() + ' (' + object.belongingCanvasId + ')');
        });
        MiscUtil.consoleLog('========== GLBoost Object Lists [end] ==========');
      }
    }, {
      key: 'registerWebGLResource',
      value: function registerWebGLResource(glBoostObject, glResource) {
        var glResourceName = glResource.constructor.name;
        this._glResources.push([glBoostObject, glResourceName]);
        MiscUtil.consoleLog('WebGL Resource: ' + glResourceName + ' was created by ' + glBoostObject.toString() + ' (' + glBoostObject.belongingCanvasId + ').');
      }
    }, {
      key: 'deregisterWebGLResource',
      value: function deregisterWebGLResource(glBoostObject, glResource) {
        var _this = this;

        var glResourceName = glResource.constructor.name;
        this._glResources.forEach(function (glResource, i) {
          if (glResource[0] === glBoostObject && glResource[1] === glResourceName) {
            _this._glResources.splice(i, 1);
          }
        });
        MiscUtil.consoleLog('WebGL Resource: ' + glResourceName + ' was deleted by ' + glBoostObject.toString() + ' (' + glBoostObject.belongingCanvasId + ').');
      }
    }, {
      key: 'printWebGLResources',
      value: function printWebGLResources() {
        var glResources = this._glResources;
        glResources.sort(function (a, b) {
          if (a[0] < b[0]) return -1;
          if (a[0] > b[0]) return 1;
          return 0;
        });
        MiscUtil.consoleLog('========== WebGL Resource Lists [begin] ==========');
        glResources.forEach(function (glResource, i) {
          MiscUtil.consoleLog(i + 1 + ': ' + glResource[0].toString() + ' (' + glResource[0].belongingCanvasId + ') created ' + glResource[1]);
        });
        MiscUtil.consoleLog('========== WebGL Resource Lists [end] ==========');
      }
    }, {
      key: 'printHierarchy',
      value: function printHierarchy() {
        var glBoostObjects = this._glBoostObjects;
        var scenes = [];
        for (var key in glBoostObjects) {
          if (glBoostObjects.hasOwnProperty(key)) {
            if (key.match(/Scene/)) {
              scenes.push(glBoostObjects[key]);
            }
          }
        }

        function putWhiteSpace(level) {
          var str = '';
          for (var i = 0; i < level; i++) {
            str += '  ';
          }
          return str;
        }

        MiscUtil.consoleLog('========== GLBoost Objects Hierarchy of Scenes [begin] ==========');
        scenes.forEach(function (scene) {
          var outputText = function searchRecursively(element, level) {
            var outputText = '';
            outputText += putWhiteSpace(level) + element.toString() + ' (' + element.belongingCanvasId + ')\n';
            if (typeof element.getChildren === 'undefined') {
              return outputText;
            }
            var children = element.getChildren();
            children.forEach(function (child) {
              outputText += searchRecursively(child, level + 1);
            });
            return outputText += '\n';
          }(scene, 0);

          outputText = outputText.replace(/\n+/g, '\n');
          MiscUtil.consoleLog(outputText);
        });
        MiscUtil.consoleLog('========== GLBoost Objects Hierarchy of Scenes [end] ==========');
      }
    }], [{
      key: 'getInstance',
      value: function getInstance() {
        if (!this[singleton$2]) {
          this[singleton$2] = new GLBoostMonitor(singletonEnforcer$2);
        }
        return this[singleton$2];
      }
    }]);
    return GLBoostMonitor;
  }();

  GLBoost['GLBoostMonitor'] = GLBoostMonitor;

  var GLBoostObject = function () {
    function GLBoostObject(glBoostContext) {
      babelHelpers.classCallCheck(this, GLBoostObject);

      if (this.constructor === GLBoostObject) {
        throw new TypeError('Cannot construct GLBoostObject instances directly.');
      }
      this._setName();
      this._glBoostContext = glBoostContext;
      this._glContext = glBoostContext.glContext;
      this._glBoostMonitor = GLBoostMonitor.getInstance();
      this._glBoostMonitor.registerGLBoostObject(this);
      this._userFlavorName = '';
      this._readyForDiscard = false;
    }

    babelHelpers.createClass(GLBoostObject, [{
      key: '_setName',
      value: function _setName() {
        this.constructor._instanceCount = typeof this.constructor._instanceCount === 'undefined' ? 0 : this.constructor._instanceCount + 1;
        this._instanceName = this.constructor.name + '_' + this.constructor._instanceCount;
      }

      /**
       * [en] Return instance name.
       * [ja] インスタンス名を返します。
       * @returns {string} [en] the instance name. [ja] インスタンス名
       */

    }, {
      key: 'toString',
      value: function toString() {
        return this._instanceName;
      }
    }, {
      key: 'readyForDiscard',
      value: function readyForDiscard() {
        this._readyForDiscard = true;
        this._glBoostMonitor.deregisterGLBoostObject(this);
      }
    }, {
      key: 'belongingCanvasId',
      get: function get() {
        return this._glContext.canvas.id;
      }
    }, {
      key: 'userFlavorName',
      set: function set(name) {
        this._userFlavorName = name;
      },
      get: function get() {
        return this._userFlavorName;
      }
    }, {
      key: 'instanceNameWithUserFlavor',
      get: function get() {
        this._instanceName + '_' + this._userFlavorName;
      }
    }, {
      key: 'isReadyForDiscard',
      get: function get() {
        return this._readyForDiscard;
      }
    }]);
    return GLBoostObject;
  }();

  var Element = function (_GLBoostObject) {
    babelHelpers.inherits(Element, _GLBoostObject);

    function Element(glBoostContext) {
      babelHelpers.classCallCheck(this, Element);

      var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Element).call(this, glBoostContext));

      _this._parent = null;
      _this._translate = Vector3.zero();
      _this._rotate = Vector3.zero();
      _this._quaternion = new Quaternion(0, 0, 0, 1);
      _this._scale = new Vector3(1, 1, 1);
      _this._matrix = Matrix44.identity();
      _this._finalMatrix = Matrix44.identity();
      _this._invMatrix = Matrix44.identity();
      _this._dirtyAsElement = false;
      _this._currentCalcMode = 'euler'; // true: calc rotation matrix using quaternion. false: calc rotation matrix using Euler
      _this._calculatedInverseMatrix = false;
      _this._updateCountAsElement = 0;
      _this._accumulatedAncestryNameWithUpdateInfoString = '';
      _this._accumulatedAncestryNameWithUpdateInfoStringNormal = '';
      _this._accumulatedAncestryNameWithUpdateInfoStringInv = '';
      _this._animationLine = {};
      _this._transparentByUser = false;
      _this.opacity = 1.0;

      _this._activeAnimationLineName = null;

      return _this;
    }

    babelHelpers.createClass(Element, [{
      key: '_needUpdate',
      value: function _needUpdate() {
        this._dirtyAsElement = true;
        this._calculatedInverseMatrix = false;
        this._updateCountAsElement++;
      }
    }, {
      key: '_getAnimatedTransformValue',
      value: function _getAnimatedTransformValue(value, animation, type) {
        if (typeof animation !== 'undefined' && animation[type]) {
          return AnimationUtil.interpolate(animation[type].input, animation[type].output, value, animation[type].outputComponentN);
        } else {
          //  console.warn(this._instanceName + 'doesn't have ' + type + ' animation data. GLBoost returned default ' + type + ' value.');
          return this['_' + type];
        }
      }
    }, {
      key: '_getCurrentAnimationInputValue',
      value: function _getCurrentAnimationInputValue(inputName) {
        return this._parent._getCurrentAnimationInputValue(inputName);
      }
    }, {
      key: 'getTranslateAt',
      value: function getTranslateAt(lineName, value) {
        return this._getAnimatedTransformValue(value, this._animationLine[lineName], 'translate');
      }
    }, {
      key: 'getRotateAt',
      value: function getRotateAt(lineName, value) {
        return this._getAnimatedTransformValue(value, this._animationLine[lineName], 'rotate');
      }
    }, {
      key: 'getQuaternionAt',
      value: function getQuaternionAt(lineName, value) {
        return this._getAnimatedTransformValue(value, this._animationLine[lineName], 'quaternion');
      }
    }, {
      key: 'getScaleAt',
      value: function getScaleAt(lineName, value) {
        return this._getAnimatedTransformValue(value, this._animationLine[lineName], 'scale');
      }
    }, {
      key: 'multiplyMatrix',
      value: function multiplyMatrix(mat) {
        this._matrix = mat;
        this._currentCalcMode = 'matrix';
        this._needUpdate();
      }
    }, {
      key: 'getMatrixAt',
      value: function getMatrixAt(lineName, value) {
        return this._getAnimatedTransformValue(value, this._animationLine[lineName], 'matrix');
      }
    }, {
      key: '_accumulateMyAndParentNameWithUpdateInfo',
      value: function _accumulateMyAndParentNameWithUpdateInfo(currentElem) {
        if (currentElem._parent === null) {
          return currentElem.toStringWithUpdateInfo();
        } else {
          return this._accumulateMyAndParentNameWithUpdateInfo(currentElem._parent) + currentElem.toStringWithUpdateInfo();
        }
      }
    }, {
      key: '_multiplyMyAndParentTransformMatrices',
      value: function _multiplyMyAndParentTransformMatrices(currentElem, withMySelf) {
        if (currentElem._parent === null) {
          if (withMySelf) {
            return currentElem.transformMatrix;
          } else {
            return Matrix44.identity();
          }
        } else {
          var currentMatrix = Matrix44.identity();
          if (withMySelf) {
            currentMatrix = currentElem.transformMatrix;
          }
          return this._multiplyMyAndParentTransformMatrices(currentElem._parent, true).multiply(currentMatrix);
        }
      }
    }, {
      key: '_multiplyMyAndParentTransformMatricesInInverseOrder',
      value: function _multiplyMyAndParentTransformMatricesInInverseOrder(currentElem, withMySelf) {
        if (currentElem._parent === null) {
          if (withMySelf) {
            return currentElem.transformMatrix;
          } else {
            return Matrix44.identity();
          }
        } else {
          var currentMatrix = Matrix44.identity();
          if (withMySelf) {
            currentMatrix = currentElem.transformMatrix;
          }
          return currentMatrix.multiply(this._multiplyMyAndParentTransformMatricesInInverseOrder(currentElem._parent, true));
        }
      }
    }, {
      key: '_multiplyMyAndParentRotateMatrices',
      value: function _multiplyMyAndParentRotateMatrices(currentElem, withMySelf) {
        if (currentElem._parent === null) {
          if (withMySelf) {
            return currentElem.transformMatrixOnlyRotate;
          } else {
            return Matrix44.identity();
          }
        } else {
          var currentMatrix = Matrix44.identity();
          if (withMySelf) {
            currentMatrix = currentElem.transformMatrixOnlyRotate;
          }
          return this._multiplyMyAndParentRotateMatrices(currentElem._parent, true).multiply(currentMatrix);
        }
      }
    }, {
      key: '_accumulateMyAndParentOpacity',
      value: function _accumulateMyAndParentOpacity(currentElem) {
        if (currentElem._parent === null) {
          return currentElem.opacity;
        } else {
          return this._accumulateMyAndParentOpacity(currentElem._parent) * currentElem.opacity;
        }
      }
    }, {
      key: 'isTransparent',
      value: function isTransparent() {
        return this._opacity < 1.0 || this._transparentByUser ? true : false;
      }
    }, {
      key: 'toStringWithUpdateInfo',


      // used by library (not Application)
      value: function toStringWithUpdateInfo() {
        //  return '&' + this._instanceName + '#' + this._updateCountAsElement;  // human readable
        return this._instanceName + this._updateCountAsElement; // faster
      }
    }, {
      key: 'setAnimationAtLine',
      value: function setAnimationAtLine(lineName, attributeName, inputArray, outputArray) {
        var outputComponentN = 0;
        if (outputArray[0] instanceof Vector2) {
          outputComponentN = 2;
        } else if (outputArray[0] instanceof Vector3) {
          outputComponentN = 3;
        } else if (outputArray[0] instanceof Vector4) {
          outputComponentN = 4;
        } else if (outputArray[0] instanceof Quaternion) {
          outputComponentN = 4;
        } else {
          outputComponentN = 1;
        }
        if (!this._animationLine[lineName]) {
          this._animationLine[lineName] = {};
        }
        this._animationLine[lineName][attributeName] = {
          input: inputArray,
          output: outputArray,
          outputAttribute: attributeName,
          outputComponentN: outputComponentN
        };
      }
    }, {
      key: 'setActiveAnimationLine',
      value: function setActiveAnimationLine(lineName) {
        this._activeAnimationLineName = lineName;
      }
    }, {
      key: 'hasAnimation',
      value: function hasAnimation(lineName) {
        if (this._animationLine[lineName]) {
          return true;
        } else {
          return false;
        }
      }
    }, {
      key: 'updateCountAsElement',
      get: function get() {
        return this._updateCountAsElement;
      }
    }, {
      key: 'translate',
      set: function set(vec) {
        if (this._translate.isEqual(vec)) {
          return;
        }
        this._translate = vec;
        this._needUpdate();
      },
      get: function get() {
        if (this._activeAnimationLineName) {
          return this.getTranslateAt(this._activeAnimationLineName, this._getCurrentAnimationInputValue(this._activeAnimationLineName));
        } else {
          return this._translate;
        }
      }
    }, {
      key: 'rotate',
      set: function set(vec) {
        if (this._currentCalcMode !== 'euler') {
          this._currentCalcMode = 'euler';
          this._needUpdate();
        }
        if (this._rotate.isEqual(vec)) {
          return;
        }
        this._rotate = vec;
        this._needUpdate();
      },
      get: function get() {
        if (this._activeAnimationLineName) {
          return this.getRotateAt(this._activeAnimationLineName, this._getCurrentAnimationInputValue(this._activeAnimationLineName));
        } else {
          return this._rotate;
        }
      }
    }, {
      key: 'quaternion',
      set: function set(quat) {
        if (this._currentCalcMode !== 'quaternion') {
          this._currentCalcMode = 'quaternion';
          this._needUpdate();
        }
        if (this._quaternion.isEqual(quat)) {
          return;
        }
        this._quaternion = quat;
        this._needUpdate();
      },
      get: function get() {
        if (this._activeAnimationLineName) {
          return this.getQuaternionAt(this._activeAnimationLineName, this._getCurrentAnimationInputValue(this._activeAnimationLineName));
        } else {
          return this._quaternion;
        }
      }
    }, {
      key: 'scale',
      set: function set(vec) {
        if (this._scale.isEqual(vec)) {
          return;
        }
        this._scale = vec;
        this._needUpdate();
      },
      get: function get() {
        if (this._activeAnimationLineName) {
          return this.getScaleAt(this._activeAnimationLineName, this._getCurrentAnimationInputValue(this._activeAnimationLineName));
        } else {
          return this._scale;
        }
      }
    }, {
      key: 'matrix',
      get: function get() {
        if (this._activeAnimationLineName) {
          return this.getMatrixAt(this._activeAnimationLineName, this._getCurrentAnimationInputValue(this._activeAnimationLineName));
        } else {
          return this._matrix;
        }
      }
    }, {
      key: 'transformMatrix',
      get: function get() {
        if (this._dirtyAsElement) {
          var matrix = Matrix44.identity();
          if (this._currentCalcMode === 'matrix') {
            this._finalMatrix = matrix.multiply(this._matrix);
            this._dirtyAsElement = false;
            return this._finalMatrix.clone();
          }

          var rotationMatrix = null;
          if (this._currentCalcMode === 'quaternion') {
            rotationMatrix = this.quaternion.rotationMatrix;
          } else {
            rotationMatrix = Matrix44.rotateX(this.rotate.x).multiply(Matrix44.rotateY(this.rotate.y)).multiply(Matrix44.rotateZ(this.rotate.z));
          }

          this._finalMatrix = matrix.multiply(Matrix44.scale(this.scale)).multiply(rotationMatrix);
          this._finalMatrix.m03 = this.translate.x;
          this._finalMatrix.m13 = this.translate.y;
          this._finalMatrix.m23 = this.translate.z;

          this._dirtyAsElement = false;
        }

        return this._finalMatrix.clone();
      }
    }, {
      key: 'transformMatrixOnlyRotate',
      get: function get() {

        var rotationMatrix = null;
        if (this._currentCalcMode === 'quaternion') {
          rotationMatrix = this.quaternion.rotationMatrix;
        } else if (this._currentCalcMode === 'matrix') {
          rotationMatrix = this.matrix;
          rotationMatrix.m03 = 0;
          rotationMatrix.m13 = 0;
          rotationMatrix.m23 = 0;
          rotationMatrix.m30 = 0;
          rotationMatrix.m31 = 0;
          rotationMatrix.m32 = 0;
        } else {
          rotationMatrix = Matrix44.rotateX(this.rotate.x).multiply(Matrix44.rotateY(this.rotate.y)).multiply(Matrix44.rotateZ(this.rotate.z));
        }

        return rotationMatrix;
      }
    }, {
      key: 'transformMatrixOnlyRotateOnInit',
      get: function get() {

        var rotationMatrix = null;
        if (this._currentCalcMode === 'quaternion') {
          rotationMatrix = this.getQuaternionAt('time', 0).rotationMatrix;
        } else if (this._currentCalcMode === 'matrix') {
          rotationMatrix = this.getMatrixAt('time', 0);
          rotationMatrix.m03 = 0;
          rotationMatrix.m13 = 0;
          rotationMatrix.m23 = 0;
          rotationMatrix.m30 = 0;
          rotationMatrix.m31 = 0;
          rotationMatrix.m32 = 0;
        } else {
          rotationMatrix = Matrix44.rotateX(this.getRotateAt('time', 0).x).multiply(Matrix44.rotateY(this.getRotateAt('time', 0).y)).multiply(Matrix44.rotateZ(this.getRotateAt('time', 0).z));
        }

        return rotationMatrix;
      }
    }, {
      key: 'inverseTransformMatrix',
      get: function get() {
        if (!this._calculatedInverseMatrix) {
          this._invMatrix = this.transformMatrix.invert();
          this._calculatedInverseMatrix = true;
        }
        return this._invMatrix.clone();
      }
    }, {
      key: 'transformMatrixAccumulatedAncestry',
      get: function get() {
        var tempString = this._accumulateMyAndParentNameWithUpdateInfo(this);
        //console.log(tempString);
        if (this._accumulatedAncestryNameWithUpdateInfoString !== tempString || typeof this._matrixAccumulatedAncestry === 'undefined') {
          this._matrixAccumulatedAncestry = this._multiplyMyAndParentTransformMatrices(this, true);
          this._accumulatedAncestryNameWithUpdateInfoString = tempString;
        }

        return this._matrixAccumulatedAncestry;
      }
    }, {
      key: 'normalMatrixAccumulatedAncestry',
      get: function get() {
        var tempString = this._accumulateMyAndParentNameWithUpdateInfo(this);
        //console.log(tempString);
        if (this._accumulatedAncestryNameWithUpdateInfoStringNormal !== tempString || typeof this._normalMatrixAccumulatedAncestry === 'undefined') {
          var world_m = this._multiplyMyAndParentTransformMatrices(this, true);
          this._normalMatrixAccumulatedAncestry = Matrix44.invert(world_m).transpose().toMatrix33();
          this._accumulatedAncestryNameWithUpdateInfoStringNormal = tempString;
        }

        return this._normalMatrixAccumulatedAncestry;
      }
    }, {
      key: 'inverseTransformMatrixAccumulatedAncestryWithoutMySelf',
      get: function get() {
        if (this._parent === null) {
          return Matrix44.identity();
        }

        var tempString = this._accumulateMyAndParentNameWithUpdateInfo(this);
        //console.log(tempString);
        if (this._accumulatedAncestryNameWithUpdateInfoStringInv !== tempString || typeof this._invMatrixAccumulatedAncestry === 'undefined') {
          this._invMatrixAccumulatedAncestry = this._multiplyMyAndParentTransformMatricesInInverseOrder(this, false).invert();
          this._accumulatedAncestryNameWithUpdateInfoStringInv = tempString;
        }

        return this._invMatrixAccumulatedAncestry;
      }
    }, {
      key: 'rotateMatrixAccumulatedAncestry',
      get: function get() {
        /*
        var mat = this._multiplyMyAndParentTransformMatrices(this);
        var scaleX = Math.sqrt(mat.m00*mat.m00 + mat.m10*mat.m10 + mat.m20*mat.m20);
        var scaleY = Math.sqrt(mat.m01*mat.m01 + mat.m11*mat.m11 + mat.m21*mat.m21);
        var scaleZ = Math.sqrt(mat.m02*mat.m02 + mat.m12*mat.m12 + mat.m22*mat.m22);
         return new Matrix44(
          mat.m00/scaleX, mat.m01/scaleY, mat.m02/scaleZ, 0,
          mat.m10/scaleX, mat.m11/scaleY, mat.m12/scaleZ, 0,
          mat.m20/scaleX, mat.m21/scaleY, mat.m22/scaleZ, 0,
          0, 0, 0, 1
        );*/
        return this._multiplyMyAndParentRotateMatrices(this, true);
      }
    }, {
      key: 'inverseTransformMatrixAccumulatedAncestry',
      get: function get() {
        return this._multiplyMyAndParentTransformMatrices(this, true).invert();
      }
    }, {
      key: 'opacityAccumulatedAncestry',
      get: function get() {
        return this._accumulateMyAndParentOpacity(this);
      }
    }, {
      key: 'opacity',
      set: function set(opacity) {
        this._opacity = opacity;
      },
      get: function get() {
        return this._opacity;
      }
    }, {
      key: 'transparent',
      set: function set(flg) {
        this._transparentByUser = flg;
      }
    }, {
      key: 'dirty',
      set: function set(flg) {
        this._dirtyAsElement = flg;
        if (flg) {
          this._needUpdate();
        }
      }
    }, {
      key: 'parent',
      get: function get() {
        return this._parent;
      }
    }, {
      key: 'currentCalcMode',
      set: function set(mode) {
        this._currentCalcMode = mode;
      },
      get: function get() {
        return this._currentCalcMode;
      }
    }]);
    return Element;
  }(GLBoostObject);

  var Mesh = function (_Element) {
    babelHelpers.inherits(Mesh, _Element);

    function Mesh(glBoostContext, geometry, material) {
      babelHelpers.classCallCheck(this, Mesh);

      var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Mesh).call(this, glBoostContext));

      _this.geometry = geometry;
      _this.material = material;
      _this._transformedDepth = 0;

      if (_this.__proto__.__proto__ && _this.__proto__.__proto__.constructor == Mesh) {
        // this code for tmlib
        Mesh._instanceCount = typeof Mesh._instanceCount === 'undefined' ? 0 : Mesh._instanceCount + 1;
        _this._instanceName = Mesh.name + '_' + Mesh._instanceCount;
      }
      return _this;
    }

    babelHelpers.createClass(Mesh, [{
      key: 'prepareToRender',
      value: function prepareToRender(existCamera_f, lights) {
        this._geometry.prepareToRender(existCamera_f, lights, this._material, this);
        if (this._geometry._materials.length === 0 && this._material) {
          this._material = this._geometry.prepareGLSLProgramAndSetVertexNtoMaterial(this._material, 0, existCamera_f, lights);
        }
      }
    }, {
      key: 'draw',
      value: function draw(lights, camera, scene) {
        this._geometry.draw(lights, camera, this, scene);
      }
    }, {
      key: 'bakeTransformToGeometry',
      value: function bakeTransformToGeometry() {
        var positions = this._geometry._vertices.position;
        var mat = this.transformMatrixAccumulatedAncestry;
        for (var i = 0; i < positions.length; i++) {
          var posVector4 = new Vector4(positions[i].x, positions[i].y, positions[i].z, 1);
          var transformedPosVec = mat.multiplyVector(posVector4);
          positions[i] = new Vector3(transformedPosVec.x, transformedPosVec.y, transformedPosVec.z);
        }
        this._geometry._vertices.position = positions;

        if (this._geometry._vertices.normal) {
          var normals = this._geometry._vertices.normal;
          for (var i = 0; i < normals.length; i++) {
            var normalVector3 = normals[i];
            var transformedNormalVec = Matrix44.invert(mat).transpose().toMatrix33().multiplyVector(normalVector3).normalize();
            normals[i] = new Vector3(transformedNormalVec.x, transformedNormalVec.y, transformedNormalVec.z);
          }
          this._geometry._vertices.normal = normals;
        }
      }
    }, {
      key: 'bakeInverseTransformToGeometry',
      value: function bakeInverseTransformToGeometry() {
        var positions = this._geometry._vertices.position;
        var invMat = this.inverseTransformMatrixAccumulatedAncestry;
        for (var i = 0; i < positions.length; i++) {
          var posVector4 = new Vector4(positions[i].x, positions[i].y, positions[i].z, 1);
          var transformedPosVec = invMat.multiplyVector(posVector4);
          positions[i] = new Vector3(transformedPosVec.x, transformedPosVec.y, transformedPosVec.z);
        }
        this._geometry._vertices.position = positions;

        var mat = this.transformMatrixAccumulatedAncestry;
        if (this._geometry._vertices.normal) {
          var normals = this._geometry._vertices.normal;
          for (var i = 0; i < normals.length; i++) {
            var normalVector3 = normals[i];
            var transformedNormalVec = Matrix44.invert(mat).transpose().invert().toMatrix33().multiplyVector(normalVector3).normalize();
            normals[i] = new Vector3(transformedNormalVec.x, transformedNormalVec.y, transformedNormalVec.z);
          }
          this._geometry._vertices.normal = normals;
        }
      }
    }, {
      key: '_copyMaterials',
      value: function _copyMaterials() {
        if (this.geometry._indicesArray.length !== this.geometry._materials.length) {
          for (var i = 0; i < this.geometry._indicesArray.length; i++) {
            this.geometry._materials[i] = this._material; //.clone();
            this.geometry._materials[i].setVertexN(this.geometry, this.geometry._indicesArray[i].length);
          }
        }
      }
    }, {
      key: 'merge',
      value: function merge(meshOrMeshes) {
        if (Array.isArray(meshOrMeshes)) {
          this.bakeTransformToGeometry();

          var meshes = meshOrMeshes;
          for (var i = 0; i < meshes.length; i++) {
            meshes[i].bakeTransformToGeometry();
            this.geometry.merge(meshes[i].geometry);
            delete meshes[i];
          }

          this._copyMaterials();

          this.bakeInverseTransformToGeometry();
        } else {
          //
          var mesh = meshOrMeshes;
          mesh.bakeTransformToGeometry();
          this.bakeTransformToGeometry();
          this.geometry.merge(mesh.geometry);

          this._copyMaterials();

          this.bakeInverseTransformToGeometry();
        }
      }
    }, {
      key: 'mergeHarder',
      value: function mergeHarder(meshOrMeshes) {

        if (Array.isArray(meshOrMeshes)) {

          this.bakeTransformToGeometry();

          var meshes = meshOrMeshes;
          for (var i = 0; i < meshes.length; i++) {
            meshes[i].bakeTransformToGeometry();
            this.geometry.mergeHarder(meshes[i].geometry);
            delete meshes[i];
          }

          this.bakeInverseTransformToGeometry();
        } else {
          //
          var mesh = meshOrMeshes;
          mesh.bakeTransformToGeometry();
          this.bakeTransformToGeometry();
          this.geometry.mergeHarder(mesh.geometry);

          this.bakeInverseTransformToGeometry();
        }
      }
    }, {
      key: 'calcTransformedDepth',
      value: function calcTransformedDepth(camera) {
        var viewMatrix = camera.lookAtRHMatrix();
        var m_m = this.transformMatrixAccumulatedAncestry;
        var mv_m = viewMatrix.multiply(camera.inverseTransformMatrixAccumulatedAncestryWithoutMySelf).multiply(m_m);

        var centerPosition = this.geometry.centerPosition.toVector4();
        var transformedCenterPosition = mv_m.multiplyVector(centerPosition);

        this._transformedDepth = transformedCenterPosition.z;
      }
    }, {
      key: 'geometry',
      set: function set(geometry) {
        this._geometry = geometry;
        geometry._parent = this;
        Mesh._geometries[geometry.toString()] = geometry;
      },
      get: function get() {
        return this._geometry;
      }
    }, {
      key: 'material',
      set: function set(material) {
        this._material = material;
      },
      get: function get() {
        return this._material;
      }
    }, {
      key: 'transformedDepth',
      get: function get() {
        return this._transformedDepth;
      }
    }]);
    return Mesh;
  }(Element);

  Mesh._geometries = {};

  GLBoost$1['Mesh'] = Mesh;

  var Group = function (_Element) {
    babelHelpers.inherits(Group, _Element);

    function Group(glBoostContext) {
      babelHelpers.classCallCheck(this, Group);

      var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Group).call(this, glBoostContext));

      _this._elements = [];
      return _this;
    }

    /**
     * [en] Add the element to this group as a child.<br>
     * [ja] このグループにelementを子供として追加します。
     * @param {Element} element  [en] a instance of Element class [ja] Elementクラスのインスタンス
     */


    babelHelpers.createClass(Group, [{
      key: 'addChild',
      value: function addChild(element) {
        this.removeChild(element);
        this._elements.push(element);
      }

      /**
       * [en] remove the element from this group.
       * [ja] このグループから指定した要素を削除します。
       * @param {Element} element [en] the element to remove [ja] 削除したい要素
       */

    }, {
      key: 'removeChild',
      value: function removeChild(element) {
        this._elements = this._elements.filter(function (elem) {
          if (elem === element) {
            element._parent = null;
          }
          return elem !== element;
        });
      }

      /**
       * [en] remove all elements from this group.
       * [ja] このグループから全ての要素を削除します。
       */

    }, {
      key: 'removeAll',
      value: function removeAll() {
        this._elements = this._elements.filter(function (elem) {
          elem._parent = null;
        });
        this._elements.length = 0;
      }
    }, {
      key: 'getChildren',
      value: function getChildren() {
        return this._elements;
      }
    }, {
      key: 'searchElement',
      value: function searchElement(userflavorName) {
        var element = arguments.length <= 1 || arguments[1] === undefined ? this : arguments[1];

        if (element.userFlavorName === userflavorName) {
          return element;
        }

        if (element instanceof Group) {
          var children = element.getChildren();
          for (var i = 0; i < children.length; i++) {
            var hitChild = this.searchElement(userflavorName, children[i]);
            if (hitChild) {
              return hitChild;
            }
          }
        }
        return null;
      }
    }, {
      key: 'searchElementsByType',
      value: function searchElementsByType(type) {
        var element = arguments.length <= 1 || arguments[1] === undefined ? this : arguments[1];

        if (element instanceof type) {
          return element;
        }

        if (element instanceof Group) {
          var children = element.getChildren();
          var results = [];
          for (var i = 0; i < children.length; i++) {
            var hitChildOrChildren = this.searchElementsByType(type, children[i]);
            if (Array.isArray(hitChildOrChildren)) {
              Array.prototype.push.apply(results, hitChildOrChildren); // concat
            } else if (hitChildOrChildren != null) {
                results.push(hitChildOrChildren);
              }
          }
          return results;
        }
        return null;
      }
    }]);
    return Group;
  }(Element);

  var GLContextImpl = function () {
    function GLContextImpl(canvas, parent) {
      babelHelpers.classCallCheck(this, GLContextImpl);

      //    if (new.target === GLContextImpl) {
      if (this.constructor === GLContextImpl) {
        throw new TypeError("Cannot construct GLContextImpl instances directly");
      }

      if (!(parent instanceof GLContext)) {
        throw new Error("This concrete class can only be instantiated from the 'GLContext' class.");
      }

      if (canvas === void 0) {
        throw new Error("Failed to create WebGL Context due to no canvas object.");
      }

      this._canvas = canvas;
    }

    babelHelpers.createClass(GLContextImpl, [{
      key: "init",
      value: function init(glVersionString, ContextType) {

        var gl = this._canvas.getContext(glVersionString);

        if (!gl) {
          gl = this._canvas.getContext('experimental-' + glVersionString);
          if (!gl) {
            throw new Error("This platform doesn't support WebGL.");
          }
        }

        if (!gl instanceof ContextType) {
          throw new Error("Unexpected rendering context.");
        }

        this._gl = gl;
      }
    }, {
      key: "gl",
      get: function get() {
        return this._gl;
      }
    }, {
      key: "canvas",
      get: function get() {
        return this._canvas;
      }
    }]);
    return GLContextImpl;
  }();

  var GLContextWebGL2Impl = function (_GLContextImpl) {
    babelHelpers.inherits(GLContextWebGL2Impl, _GLContextImpl);

    function GLContextWebGL2Impl(canvas, parent) {
      babelHelpers.classCallCheck(this, GLContextWebGL2Impl);

      var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(GLContextWebGL2Impl).call(this, canvas, parent));

      babelHelpers.get(Object.getPrototypeOf(GLContextWebGL2Impl.prototype), 'init', _this).call(_this, 'webgl2', WebGL2RenderingContext);

      return _this;
    }

    return GLContextWebGL2Impl;
  }(GLContextImpl);

  var GLContextWebGL1Impl = function (_GLContextImpl) {
    babelHelpers.inherits(GLContextWebGL1Impl, _GLContextImpl);

    function GLContextWebGL1Impl(canvas, parent) {
      babelHelpers.classCallCheck(this, GLContextWebGL1Impl);

      var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(GLContextWebGL1Impl).call(this, canvas, parent));

      babelHelpers.get(Object.getPrototypeOf(GLContextWebGL1Impl.prototype), 'init', _this).call(_this, 'webgl', WebGLRenderingContext);

      return _this;
    }

    return GLContextWebGL1Impl;
  }(GLContextImpl);

  var GLExtensionsManager = function () {
    function GLExtensionsManager(glContext) {
      babelHelpers.classCallCheck(this, GLExtensionsManager);

      var gl = glContext.gl;
      if (GLExtensionsManager._instances[glContext.canvas.id]) {
        return GLExtensionsManager._instances[glContext.canvas.id];
      }

      if (GLBoost$1.WEBGL_ONE_USE_EXTENSIONS) {
        this._extVAO = gl.getExtension('OES_vertex_array_object');

        this._extDBs = gl.getExtension('WEBGL_draw_buffers');

        this._extTFA = gl.getExtension('EXT_texture_filter_anisotropic') || gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic') || gl.getExtension('MOZ_EXT_texture_filter_anisotropic');

        this._extEIUI = gl.getExtension('OES_element_index_uint');
      }

      GLExtensionsManager._instances[glContext.canvas.id] = this;
    }

    babelHelpers.createClass(GLExtensionsManager, [{
      key: 'createVertexArray',
      value: function createVertexArray(gl) {
        if (GLBoost$1.isThisGLVersion_2(gl)) {
          return gl.createVertexArray();
        } else if (this._extVAO) {
          return this._extVAO.createVertexArrayOES();
        } else {
          return null;
        }
      }
    }, {
      key: 'bindVertexArray',
      value: function bindVertexArray(gl, vao) {
        if (GLBoost$1.isThisGLVersion_2(gl)) {
          gl.bindVertexArray(vao);
          return true;
        } else if (this._extVAO) {
          this._extVAO.bindVertexArrayOES(vao);
          return true;
        } else {
          return false;
        }
      }
    }, {
      key: 'drawBuffers',
      value: function drawBuffers(gl, buffers) {
        if (GLBoost$1.isThisGLVersion_2(gl)) {
          gl.drawBuffers(buffers);
          return true;
        } else if (this._extDBs) {
          this.extDBs.drawBuffersWEBGL(buffers);
          return true;
        } else {
          return false;
        }
      }
    }, {
      key: 'colorAttachiment',
      value: function colorAttachiment(gl, index) {
        return this._extDBs ? this._extDBs['COLOR_ATTACHMENT' + index + '_WEBGL'] : gl['COLOR_ATTACHMENT' + index];
      }
    }, {
      key: 'elementIndexBitSize',
      value: function elementIndexBitSize(gl) {
        if (GLBoost$1.isThisGLVersion_2(gl) || this._extEIUI) {
          return gl.UNSIGNED_INT;
        } else {
          return gl.UNSIGNED_SHORT;
        }
      }
    }, {
      key: 'createUintArrayForElementIndex',
      value: function createUintArrayForElementIndex(gl, array) {
        if (GLBoost$1.isThisGLVersion_2(gl) || this._extEIUI) {
          return new Uint32Array(array);
        } else {
          return new Uint16Array(array);
        }
      }
    }, {
      key: 'extVAO',
      get: function get() {
        return this._extVAO;
      }
    }, {
      key: 'extDBs',
      get: function get() {
        return this._extDBs;
      }
    }, {
      key: 'extTFA',
      get: function get() {
        return this._extTFA;
      }
    }], [{
      key: 'getInstance',
      value: function getInstance(gl) {
        return new GLExtensionsManager(gl);
      }
    }]);
    return GLExtensionsManager;
  }();

  GLExtensionsManager._instances = new Object();

  GLBoost$1['GLExtensionsManager'] = GLExtensionsManager;

  var GLContext = function () {
    function GLContext(canvas) {
      babelHelpers.classCallCheck(this, GLContext);

      if (GLContext._instances[canvas.id] instanceof GLContext) {
        return GLContext._instances[canvas.id];
      }

      if (GLBoost.TARGET_WEBGL_VERSION === 1) {
        this.impl = new GLContextWebGL1Impl(canvas, this);
      } else if (GLBoost.TARGET_WEBGL_VERSION === 2) {
        this.impl = new GLContextWebGL2Impl(canvas, this);
      }

      GLContext._instances[canvas.id] = this;
      this._monitor = GLBoostMonitor.getInstance();
    }

    babelHelpers.createClass(GLContext, [{
      key: 'createVertexArray',
      value: function createVertexArray(glBoostObject) {
        var gl = this.gl;
        var glem = GLExtensionsManager.getInstance(this);
        var glResource = glem.createVertexArray(gl);
        this._monitor.registerWebGLResource(glBoostObject, glResource);
        return glResource;
      }
    }, {
      key: 'createBuffer',
      value: function createBuffer(glBoostObject) {
        var glResource = this.gl.createBuffer();
        this._monitor.registerWebGLResource(glBoostObject, glResource);
        return glResource;
      }
    }, {
      key: 'createFramebuffer',
      value: function createFramebuffer(glBoostObject) {
        var glResource = this.gl.createFramebuffer();
        this._monitor.registerWebGLResource(glBoostObject, glResource);
        return glResource;
      }
    }, {
      key: 'createRenderbuffer',
      value: function createRenderbuffer(glBoostObject) {
        var glResource = this.gl.createRenderbuffer();
        this._monitor.registerWebGLResource(glBoostObject, glResource);
        return glResource;
      }
    }, {
      key: 'createShader',
      value: function createShader(glBoostObject, shaderType) {
        var glResource = this.gl.createShader(shaderType);
        this._monitor.registerWebGLResource(glBoostObject, glResource);
        return glResource;
      }
    }, {
      key: 'deleteShader',
      value: function deleteShader(glBoostObject, shader) {
        this._monitor.deregisterWebGLResource(glBoostObject, shader);
        this.gl.deleteShader(shader);
        shader = null;
      }
    }, {
      key: 'createProgram',
      value: function createProgram(glBoostObject) {
        var glResource = this.gl.createProgram();
        this._monitor.registerWebGLResource(glBoostObject, glResource);
        return glResource;
      }
    }, {
      key: 'deleteProgram',
      value: function deleteProgram(glBoostObject, program) {
        this._monitor.deregisterWebGLResource(glBoostObject, program);
        this.gl.deleteProgram(program);
      }
    }, {
      key: 'createTexture',
      value: function createTexture(glBoostObject) {
        var glResource = this.gl.createTexture();
        this._monitor.registerWebGLResource(glBoostObject, glResource);
        return glResource;
      }
    }, {
      key: 'gl',
      get: function get() {
        return this.impl.gl;
      }
    }, {
      key: 'canvas',
      get: function get() {
        return this.impl.canvas;
      }
    }], [{
      key: 'getInstance',
      value: function getInstance(canvas) {
        if (typeof canvas === 'string') {
          canvas = window.document.querySelector(canvas);
        }
        return new GLContext(canvas);
      }
    }]);
    return GLContext;
  }();

  GLContext._instances = new Object();

  var RenderPath = function (_GLBoostObject) {
    babelHelpers.inherits(RenderPath, _GLBoostObject);

    function RenderPath(glBoostContext) {
      babelHelpers.classCallCheck(this, RenderPath);

      var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(RenderPath).call(this, glBoostContext));

      _this._expression = null;
      _this._scene = null;
      //this._elements = [];
      _this._meshes = [];
      _this._opacityMeshes = [];
      _this._transparentMeshes = [];
      _this._drawBuffers = [_this._glContext.gl.BACK];
      _this._clearColor = null;
      _this._clearDepth = 1.0;
      _this._renderTargetTextures = null;
      return _this;
    }

    babelHelpers.createClass(RenderPath, [{
      key: 'specifyRenderTargetTextures',
      value: function specifyRenderTargetTextures(renderTargetTextures) {
        var _this2 = this;

        var gl = this._glContext.gl;

        if (renderTargetTextures) {
          this._drawBuffers = [];
          renderTargetTextures.forEach(function (texture) {
            _this2._drawBuffers.push(texture.colorAttachiment);
          });
          this._renderTargetTextures = renderTargetTextures;
        } else {
          this._drawBuffers = [gl.BACK];
        }
      }
    }, {
      key: 'setClearColor',
      value: function setClearColor(color) {
        this._clearColor = color;
      }
    }, {
      key: 'setClearDepth',
      value: function setClearDepth(depth) {
        this._clearDepth = depth;
      }
    }, {
      key: 'prepareToRender',
      value: function prepareToRender() {
        var _this3 = this;

        var collectMeshes = function collectMeshes(elem) {
          if (elem instanceof Group) {
            var children = elem.getChildren();
            var meshes = [];
            children.forEach(function (child) {
              var childMeshes = collectMeshes(child);
              meshes = meshes.concat(childMeshes);
            });
            return meshes;
          } else if (elem instanceof Mesh) {
            return [elem];
          } else {
            return [];
          }
        };

        this._meshes = [];
        if (this._scene) {
          this._scene.getChildren().forEach(function (elm) {
            _this3._meshes = _this3._meshes.concat(collectMeshes(elm));
          });
        }

        this._opacityMeshes = [];
        this._transparentMeshes = [];
        this._meshes.forEach(function (mesh) {
          if (mesh.isTransparent()) {
            _this3._transparentMeshes.push(mesh);
          } else {
            _this3._opacityMeshes.push(mesh);
          }
        });

        if (this._scene) {
          this._scene.prepareToRender();
        }
      }
    }, {
      key: 'sortTransparentMeshes',
      value: function sortTransparentMeshes(camera) {

        this._transparentMeshes.forEach(function (mesh) {
          mesh.calcTransformedDepth(camera);
        });

        this._transparentMeshes.sort(function (a, b) {
          if (a.transformedDepth < b.transformedDepth) return -1;
          if (a.transformedDepth > b.transformedDepth) return 1;
          return 0;
        });
      }
    }, {
      key: 'expression',
      get: function get() {
        return this._expression;
      }
    }, {
      key: 'scene',
      set: function set(scene) {
        this._scene = scene;
      },
      get: function get() {
        return this._scene;
      }
    }, {
      key: 'meshes',
      get: function get() {
        return this._meshes;
      }
    }, {
      key: 'opacityMeshes',
      get: function get() {
        return this._opacityMeshes;
      }
    }, {
      key: 'transparentMeshes',
      get: function get() {
        return this._transparentMeshes;
      }
    }, {
      key: 'buffersToDraw',
      get: function get() {
        return this._drawBuffers;
      }
    }, {
      key: 'fboOfRenderTargetTextures',
      get: function get() {
        if (this._renderTargetTextures) {
          return this._renderTargetTextures[0].fbo;
        } else {
          return null;
        }
      }
    }, {
      key: 'renderTargetTextures',
      get: function get() {
        return this._renderTargetTextures;
      }
    }, {
      key: 'clearColor',
      get: function get() {
        return this._clearColor;
      }
    }, {
      key: 'clearDepth',
      get: function get() {
        return this._clearDepth;
      }
    }]);
    return RenderPath;
  }(GLBoostObject);

  GLBoost$1['RenderPath'] = RenderPath;

  var Expression = function (_GLBoostObject) {
    babelHelpers.inherits(Expression, _GLBoostObject);

    function Expression(glBoostContext) {
      babelHelpers.classCallCheck(this, Expression);

      var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Expression).call(this, glBoostContext));

      _this._renderPaths = [];
      return _this;
    }

    babelHelpers.createClass(Expression, [{
      key: 'addRenderPaths',
      value: function addRenderPaths(renderPaths) {
        var _this2 = this;

        renderPaths.forEach(function (renderPath) {
          renderPath._expression = _this2;
        });

        this._renderPaths = this._renderPaths.concat(renderPaths);
      }
    }, {
      key: 'addRenderPath',
      value: function addRenderPath(renderPath) {
        renderPath._expression = this;
        this._renderPaths.push(renderPath);
      }
    }, {
      key: 'clearRenderPaths',
      value: function clearRenderPaths() {
        this._renderPaths.forEach(function (renderPath) {
          renderPath._expression = null;
        });
        this._renderPaths.length = 0;
      }
    }, {
      key: 'prepareToRender',
      value: function prepareToRender() {
        this._renderPaths.forEach(function (renderPath) {
          renderPath.prepareToRender();
        });
      }
    }, {
      key: 'renderPaths',
      get: function get() {
        return this._renderPaths;
      }
    }]);
    return Expression;
  }(GLBoostObject);

  GLBoost$1['Expression'] = Expression;

  var Hash = function () {
    function Hash() {
      babelHelpers.classCallCheck(this, Hash);
    }

    babelHelpers.createClass(Hash, null, [{
      key: "toCRC32",
      value: function toCRC32(str) {
        var crc = 0,
            x = 0,
            y = 0;
        var table = Hash._crc32table;

        crc = crc ^ -1;
        for (var i = 0, iTop = str.length; i < iTop; ++i) {
          y = (crc ^ str.charCodeAt(i)) & 0xff;
          x = "0x" + table[y];
          crc = crc >>> 8 ^ x;
        }

        return (crc ^ -1) >>> 0;
      }
    }]);
    return Hash;
  }();

  Hash._crc32table = "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D".split(' ');

  var Shader = function (_GLBoostObject) {
    babelHelpers.inherits(Shader, _GLBoostObject);

    function Shader(glBoostContext) {
      babelHelpers.classCallCheck(this, Shader);

      var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Shader).call(this, glBoostContext));

      _this._glslProgram = null;
      _this._dirty = true;
      return _this;
    }

    babelHelpers.createClass(Shader, [{
      key: '_removeDuplicatedLine',
      value: function _removeDuplicatedLine(shaderString) {
        var splittedShaderLines = shaderString.split('\n');
        for (var i = 0; i < splittedShaderLines.length; i++) {
          splittedShaderLines[i] += '\n';
          for (var j = 0; j < i; j++) {
            if (splittedShaderLines[j] === splittedShaderLines[i]) {
              splittedShaderLines[j] = '//                                                            commented out because of duplicated: ' + splittedShaderLines[i];
            }
          }
        }

        var processedShaderString = '';
        for (var i = 0; i < splittedShaderLines.length; i++) {
          processedShaderString += splittedShaderLines[i];
        }

        return processedShaderString;
      }
    }, {
      key: '_getVertexShaderString',
      value: function _getVertexShaderString(gl, functions, existCamera_f, lights, extraData) {
        var _this2 = this;

        var f = functions;
        var shaderText = '';

        var in_ = Shader._in_onVert(gl);
        var out_ = Shader._out_onVert(gl);

        shaderText += Shader._glslVer(gl);
        shaderText += 'precision highp float;\n';

        /// define variables
        // start defining variables. first, sub class Shader, ...
        // seconds, define variables as mixin shaders
        this._classNamesOfVSDefine.forEach(function (className) {
          var method = _this2['VSDefine_' + className];
          if (method) {
            shaderText += '//                                                            VSDefine_' + className + ' //\n';
            shaderText += method.bind(_this2, in_, out_, f, lights, extraData)();
          }
        });

        // begin of main function
        shaderText += 'void main(void) {\n';

        /// Transform
        // start transforming. first, sub class Shader, ...
        // seconds, transform as mixin Shaders
        this._classNamesOfVSTransform.forEach(function (className) {
          var method = _this2['VSTransform_' + className];
          if (method) {
            shaderText += '//                                                            VSTransform_' + className + ' //\n';
            shaderText += method.bind(_this2, existCamera_f, f, lights, extraData)();
          }
        });

        /// Shading
        // start shading. first, sub class Shader, ...
        // seconds, shade as mixin Shaders
        this._classNamesOfVSShade.forEach(function (className) {
          var method = _this2['VSShade_' + className];
          if (method) {
            shaderText += '//                                                            VSShade_' + className + ' //\n';
            shaderText += method.bind(_this2, existCamera_f, f, lights, extraData)();
          }
        });

        // end of main function
        shaderText += '}\n';

        shaderText = this._removeDuplicatedLine(shaderText);

        return shaderText;
      }
    }, {
      key: '_getFragmentShaderString',
      value: function _getFragmentShaderString(gl, functions, lights, extraData) {
        var _this3 = this;

        var f = functions;
        var shaderText = '';

        var in_ = Shader._in_onFrag(gl);

        shaderText += Shader._glslVer(gl);
        var maxDrawBuffers = this._getMaxDrawBuffers();
        if (maxDrawBuffers > 1) {
          shaderText += Shader._glsl1DrawBufferExt(gl);
        }
        shaderText += 'precision mediump float;\n';

        for (var i = 0; i < maxDrawBuffers; i++) {
          shaderText += Shader._set_outColor_onFrag(gl, i);
        }

        /// define variables
        // start defining variables. first, sub class Shader, ...
        // seconds, define variables as mixin shaders
        this._classNamesOfFSDefine.forEach(function (className) {
          var method = _this3['FSDefine_' + className];
          if (method) {
            shaderText += '//                                                            FSDefine_' + className + ' //\n';
            shaderText += method.bind(_this3, in_, f, lights, extraData)();
          }
        });

        // begin of main function
        shaderText += 'void main(void) {\n';

        /// Shading
        // start shading. first, sub class Shaders, ...
        // second, shade as mixin Shaders
        this._classNamesOfFSShade.forEach(function (className) {
          var method = _this3['FSShade_' + className];
          if (method) {
            shaderText += '//                                                            FSShade_' + className + ' //\n';
            shaderText += method.bind(_this3, f, gl, lights, extraData)();
          }
        });

        // end of main function
        if (maxDrawBuffers > 1) {
          for (var i = 0; i < maxDrawBuffers; i++) {
            shaderText += Shader._set_glFragData_inGLVer1(gl, i);
          }
        } else {
          shaderText += Shader._set_glFragColor_inGLVer1(gl);
        }
        shaderText += '}\n';

        shaderText = this._removeDuplicatedLine(shaderText);

        return shaderText;
      }
    }, {
      key: '_prepareAssetsForShaders',
      value: function _prepareAssetsForShaders(gl, shaderProgram, vertexAttribs, existCamera_f, lights, extraData, canvas) {
        var _this4 = this;

        var vertexAttribsAsResult = [];

        // and shade as mixin Prepare Functions
        this._classNamesOfPrepare.forEach(function (className) {
          var method = _this4['prepare_' + className];
          if (method) {
            var verAttirbs = method.bind(_this4, gl, shaderProgram, vertexAttribs, existCamera_f, lights, extraData, canvas)();
            vertexAttribsAsResult = vertexAttribsAsResult.concat(verAttirbs);
          }
        });

        return vertexAttribsAsResult;
      }
    }, {
      key: 'setUniforms',
      value: function setUniforms() {}
    }, {
      key: '_getShader',
      value: function _getShader(gl, theSource, type) {
        var shader;

        if (type == 'x-shader/x-fragment') {
          shader = this._glContext.createShader(this, gl.FRAGMENT_SHADER);
        } else if (type == 'x-shader/x-vertex') {
          shader = this._glContext.createShader(this, gl.VERTEX_SHADER);
        } else {
          // Unknown shader type
          return null;
        }

        gl.shaderSource(shader, theSource);

        // Compile the shader program
        gl.compileShader(shader);

        // See if it compiled successfully
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
          return null;
        }

        return shader;
      }
    }, {
      key: '_initShaders',
      value: function _initShaders(gl, vertexShaderStr, fragmentShaderStr) {
        MiscUtil.consoleLog('Vertex Shader:');
        MiscUtil.consoleLog(vertexShaderStr);
        MiscUtil.consoleLog('Fragment Shader:');
        MiscUtil.consoleLog(fragmentShaderStr);

        var vertexShader = this._getShader(gl, vertexShaderStr, 'x-shader/x-vertex');
        var fragmentShader = this._getShader(gl, fragmentShaderStr, 'x-shader/x-fragment');

        // Create the shader program
        var shaderProgram = this._glContext.createProgram(this);
        gl.attachShader(shaderProgram, vertexShader);
        gl.attachShader(shaderProgram, fragmentShader);
        gl.linkProgram(shaderProgram);
        this._glContext.deleteShader(this, vertexShader);
        this._glContext.deleteShader(this, fragmentShader);

        // If creating the shader program failed, alert
        if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
          alert('Unable to initialize the shader program.');
        }

        gl.useProgram(shaderProgram);

        return shaderProgram;
      }
    }, {
      key: 'getShaderProgram',
      value: function getShaderProgram(vertexAttribs, existCamera_f, lights) {
        var extraData = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

        var gl = this._glContext.gl;
        var canvas = this._glContext.canvas;

        lights = this.getDefaultPointLightIfNotExist(gl, lights, canvas);

        var vertexShaderText = this._getVertexShaderString(gl, vertexAttribs, existCamera_f, lights, extraData);
        var fragmentShaderText = this._getFragmentShaderString(gl, vertexAttribs, lights, extraData);

        // lookup shaderHashTable
        var baseText = vertexShaderText + '\n###SPLIT###\n' + fragmentShaderText;
        var hash = Hash.toCRC32(baseText);
        if (!Shader._shaderHashTable[canvas.id]) {
          Shader._shaderHashTable[canvas.id] = {};
        }
        var programToReturn = null;
        var hashTable = Shader._shaderHashTable[canvas.id];
        if (hash in hashTable) {
          if (hashTable[hash].code === baseText) {
            programToReturn = hashTable[hash].program;
          } else {
            for (var i = 0; i < hashTable[hash].collisionN; i++) {
              if (hashTable[hash + '_' + i].code === baseText) {
                programToReturn = hashTable[hash + '_' + i].program;
                break;
              }
            }
            hashTable[hash].collisionN++;
          }
        }

        if (programToReturn === null || !gl.isProgram(programToReturn)) {
          // if the current shader codes is not in shaderHashTable, create GLSL Shader Program.
          programToReturn = this._initShaders(gl, vertexShaderText, fragmentShaderText);

          // register it to shaderHashTable.
          var indexStr = null;
          if (typeof hashTable[hash] !== 'undefined' && hashTable[hash].collisionN > 0) {
            indexStr = hash + '_' + hashTable[hash].collisionN;
          } else {
            indexStr = hash;
          }
          hashTable[indexStr] = { code: baseText, program: programToReturn, collisionN: 0 };
          Shader._shaderHashTable[canvas.id] = hashTable;
        } else {
          //gl.useProgram(programToReturn);
        }
        this._glslProgram = programToReturn;
        programToReturn.optimizedVertexAttribs = this._prepareAssetsForShaders(gl, programToReturn, vertexAttribs, existCamera_f, lights, extraData, canvas);

        return programToReturn;
      }
    }, {
      key: 'getDefaultPointLightIfNotExist',
      value: function getDefaultPointLightIfNotExist(gl, lights, canvas) {

        if (lights.length === 0) {
          if (Shader._defaultLight === null) {
            Shader._defaultLight = this._glBoostContext.createPointLight(GLBoost.DEFAULT_POINTLIGHT_INTENSITY);
          }
          return [Shader._defaultLight];
        } else {
          return lights;
        }
      }
    }, {
      key: '_getMaxDrawBuffers',
      value: function _getMaxDrawBuffers() {
        var gl = this._glContext.gl;
        var isWebGL2 = Shader.isThisGLVersion_2(gl);
        if (isWebGL2) {
          return gl.getParameter(gl.MAX_DRAW_BUFFERS);
        }

        var glem = GLExtensionsManager.getInstance(this._glContext);
        if (glem.extDBs) {
          return gl.getParameter(glem.extDBs.MAX_DRAW_BUFFERS_WEBGL);
        } else {
          return 1;
        }
      }
    }, {
      key: 'readyForDiscard',
      value: function readyForDiscard() {
        babelHelpers.get(Object.getPrototypeOf(Shader.prototype), 'readyForDiscard', this).call(this);
        this._glContext.deleteProgram(this, this._glslProgram);
      }
    }, {
      key: 'dirty',
      get: function get() {
        return this._dirty;
      },
      set: function set(flg) {
        this._dirty = flg;
      }
    }, {
      key: 'glslProgram',
      get: function get() {
        return this._glslProgram;
      }
    }], [{
      key: 'initMixinMethodArray',
      value: function initMixinMethodArray() {
        this.prototype._classNamesOfVSDefine = this.prototype._classNamesOfVSDefine ? this.prototype._classNamesOfVSDefine : [];
        this.prototype._classNamesOfVSTransform = this.prototype._classNamesOfVSTransform ? this.prototype._classNamesOfVSTransform : [];
        this.prototype._classNamesOfVSShade = this.prototype._classNamesOfVSShade ? this.prototype._classNamesOfVSShade : [];

        this.prototype._classNamesOfFSDefine = this.prototype._classNamesOfFSDefine ? this.prototype._classNamesOfFSDefine : [];
        this.prototype._classNamesOfFSShade = this.prototype._classNamesOfFSShade ? this.prototype._classNamesOfFSShade : [];

        this.prototype._classNamesOfPrepare = this.prototype._classNamesOfPrepare ? this.prototype._classNamesOfPrepare : [];
      }
    }, {
      key: 'mixin',
      value: function mixin(source) {

        // create mixin method Array
        this.initMixinMethodArray();

        // register mixin methods to Array
        if (this.prototype._classNamesOfVSDefine.indexOf(source.name) === -1) {
          this.prototype._classNamesOfVSDefine.push(source.name);
        }
        if (this.prototype._classNamesOfVSTransform.indexOf(source.name) === -1) {
          this.prototype._classNamesOfVSTransform.push(source.name);
        }
        if (this.prototype._classNamesOfVSShade.indexOf(source.name) === -1) {
          this.prototype._classNamesOfVSShade.push(source.name);
        }
        if (this.prototype._classNamesOfFSDefine.indexOf(source.name) === -1) {
          this.prototype._classNamesOfFSDefine.push(source.name);
        }
        if (this.prototype._classNamesOfFSShade.indexOf(source.name) === -1) {
          this.prototype._classNamesOfFSShade.push(source.name);
        }
        if (this.prototype._classNamesOfPrepare.indexOf(source.name) === -1) {
          this.prototype._classNamesOfPrepare.push(source.name);
        }

        // mixin
        var target = this.prototype;source = source.prototype;
        Object.getOwnPropertyNames(source).forEach(function (name) {
          if (name !== 'constructor') Object.defineProperty(target, name, Object.getOwnPropertyDescriptor(source, name));
        });
      }
    }, {
      key: 'swapMixin',
      value: function swapMixin(current, newone) {
        // register mixin methods to Array
        var matchIdx = this.prototype._classNamesOfVSDefine.indexOf(current.name);
        if (matchIdx !== -1) {
          this.prototype._classNamesOfVSDefine[matchIdx] = newone.name;
        }
        matchIdx = this.prototype._classNamesOfVSTransform.indexOf(current.name);
        if (matchIdx !== -1) {
          this.prototype._classNamesOfVSTransform[matchIdx] = newone.name;
        }
        matchIdx = this.prototype._classNamesOfVSShade.indexOf(current.name);
        if (matchIdx !== -1) {
          this.prototype._classNamesOfVSShade[matchIdx] = newone.name;
        }
        matchIdx = this.prototype._classNamesOfFSDefine.indexOf(current.name);
        if (matchIdx !== -1) {
          this.prototype._classNamesOfFSDefine[matchIdx] = newone.name;
        }
        matchIdx = this.prototype._classNamesOfFSShade.indexOf(current.name);
        if (matchIdx !== -1) {
          this.prototype._classNamesOfFSShade[matchIdx] = newone.name;
        }
        matchIdx = this.prototype._classNamesOfPrepare.indexOf(current.name);
        if (matchIdx !== -1) {
          this.prototype._classNamesOfPrepare[matchIdx] = newone.name;
        }

        // mixin
        var target = this.prototype;newone = newone.prototype;
        Object.getOwnPropertyNames(newone).forEach(function (name) {
          if (name !== 'constructor') Object.defineProperty(target, name, Object.getOwnPropertyDescriptor(newone, name));
        });
      }
    }, {
      key: 'removeMixin',
      value: function removeMixin(source) {
        var matchIdx = this.prototype._classNamesOfVSDefine.indexOf(source.name);
        if (matchIdx !== -1) {
          this.prototype._classNamesOfVSDefine.splice(matchIdx, 1);
        }
        matchIdx = this.prototype._classNamesOfVSTransform.indexOf(source.name);
        if (matchIdx !== -1) {
          this.prototype._classNamesOfVSTransform.splice(matchIdx, 1);
        }
        matchIdx = this.prototype._classNamesOfVSShade.indexOf(source.name);
        if (matchIdx !== -1) {
          this.prototype._classNamesOfVSShade.splice(matchIdx, 1);
        }
        matchIdx = this.prototype._classNamesOfFSDefine.indexOf(source.name);
        if (matchIdx !== -1) {
          this.prototype._classNamesOfFSDefine.splice(matchIdx, 1);
        }
        matchIdx = this.prototype._classNamesOfFSShade.indexOf(source.name);
        if (matchIdx !== -1) {
          this.prototype._classNamesOfFSShade.splice(matchIdx, 1);
        }
        matchIdx = this.prototype._classNamesOfPrepare.indexOf(source.name);
        if (matchIdx !== -1) {
          this.prototype._classNamesOfPrepare.splice(matchIdx, 1);
        }
      }
    }, {
      key: '_exist',
      value: function _exist(functions, attribute) {
        return functions.indexOf(attribute) >= 0;
      }
    }, {
      key: 'isThisGLVersion_2',
      value: function isThisGLVersion_2(gl) {
        if (typeof WebGL2RenderingContext === 'undefined') {
          return false;
        }
        return gl instanceof WebGL2RenderingContext;
      }
    }, {
      key: '_glslVer',
      value: function _glslVer(gl) {
        return GLBoost.isThisGLVersion_2(gl) ? '#version 300 es\n' : '';
      }
    }, {
      key: '_glsl1DrawBufferExt',
      value: function _glsl1DrawBufferExt(gl) {
        return !GLBoost.isThisGLVersion_2(gl) ? '#extension GL_EXT_draw_buffers : require\n' : '';
      }
    }, {
      key: '_in_onVert',
      value: function _in_onVert(gl) {
        return GLBoost.isThisGLVersion_2(gl) ? 'in' : 'attribute';
      }
    }, {
      key: '_out_onVert',
      value: function _out_onVert(gl) {
        return GLBoost.isThisGLVersion_2(gl) ? 'out' : 'varying';
      }
    }, {
      key: '_in_onFrag',
      value: function _in_onFrag(gl) {
        return GLBoost.isThisGLVersion_2(gl) ? 'in' : 'varying';
      }
    }, {
      key: '_texture_func',
      value: function _texture_func(gl) {
        return GLBoost.isThisGLVersion_2(gl) ? 'texture' : 'texture2D';
      }
    }, {
      key: '_set_outColor_onFrag',
      value: function _set_outColor_onFrag(gl, i) {
        return GLBoost.isThisGLVersion_2(gl) ? 'layout(location = ' + i + ') out vec4 rt' + i + ';\n' : 'vec4 rt' + i + ';\n';
      }
    }, {
      key: '_set_glFragColor_inGLVer1',
      value: function _set_glFragColor_inGLVer1(gl) {
        return !GLBoost.isThisGLVersion_2(gl) ? '  gl_FragColor = rt0;\n' : '';
      }
    }, {
      key: '_set_glFragData_inGLVer1',
      value: function _set_glFragData_inGLVer1(gl, i) {
        return !GLBoost.isThisGLVersion_2(gl) ? '  gl_FragData[' + i + '] = rt' + i + ';\n' : '';
      }
    }]);
    return Shader;
  }(GLBoostObject);

  Shader._instances = new Object();
  Shader._shaderHashTable = {};
  Shader._defaultLight = null;

  var VertexLocalShaderSource = function () {
    function VertexLocalShaderSource() {
      babelHelpers.classCallCheck(this, VertexLocalShaderSource);
    }

    babelHelpers.createClass(VertexLocalShaderSource, [{
      key: 'VSDefine_VertexLocalShaderSource',
      value: function VSDefine_VertexLocalShaderSource(in_, out_, f) {
        var shaderText = in_ + ' vec3 aVertex_position;\n';
        if (Shader._exist(f, GLBoost.NORMAL)) {
          shaderText += in_ + ' vec3 aVertex_normal;\n';
          shaderText += out_ + ' vec3 v_normal;\n';
        }
        shaderText += out_ + ' vec4 position;\n';
        shaderText += 'uniform mat4 modelViewProjectionMatrix;\n';
        return shaderText;
      }
    }, {
      key: 'VSTransform_VertexLocalShaderSource',
      value: function VSTransform_VertexLocalShaderSource(existCamera_f, f) {
        var shaderText = '';
        if (existCamera_f) {
          shaderText += '  gl_Position = modelViewProjectionMatrix * vec4(aVertex_position, 1.0);\n';
          shaderText += '  mat4 pvwMatrix = modelViewProjectionMatrix;\n';
        } else {
          shaderText += '  gl_Position = vec4(aVertex_position, 1.0);\n';
        }
        if (Shader._exist(f, GLBoost.NORMAL)) {
          shaderText += '  v_normal = aVertex_normal;\n';
        }
        shaderText += '  position = vec4(aVertex_position, 1.0);\n';

        return shaderText;
      }
    }, {
      key: 'FSDefine_VertexLocalShaderSource',
      value: function FSDefine_VertexLocalShaderSource(in_, f, lights, extraData) {
        var shaderText = '';
        if (Shader._exist(f, GLBoost.NORMAL)) {
          shaderText += in_ + ' vec3 v_normal;\n';
        }
        shaderText += in_ + ' vec4 position;\n';
        if (lights.length > 0) {
          shaderText += 'uniform vec4 lightPosition[' + lights.length + '];\n';
          shaderText += 'uniform vec4 lightDiffuse[' + lights.length + '];\n';
        }

        return shaderText;
      }
    }, {
      key: 'prepare_VertexLocalShaderSource',
      value: function prepare_VertexLocalShaderSource(gl, shaderProgram, vertexAttribs, existCamera_f, lights, extraData, canvas) {

        var vertexAttribsAsResult = [];

        var attribName = 'position';
        shaderProgram['vertexAttribute_' + attribName] = gl.getAttribLocation(shaderProgram, 'aVertex_' + attribName);
        gl.enableVertexAttribArray(shaderProgram['vertexAttribute_' + attribName]);
        vertexAttribsAsResult.push(attribName);

        if (existCamera_f) {
          shaderProgram.modelViewProjectionMatrix = gl.getUniformLocation(shaderProgram, 'modelViewProjectionMatrix');
        }

        lights = this.getDefaultPointLightIfNotExist(gl, lights, canvas);

        for (var i = 0; i < lights.length; i++) {
          shaderProgram['lightPosition_' + i] = gl.getUniformLocation(shaderProgram, 'lightPosition[' + i + ']');
          shaderProgram['lightDiffuse_' + i] = gl.getUniformLocation(shaderProgram, 'lightDiffuse[' + i + ']');
        }

        return vertexAttribsAsResult;
      }
    }]);
    return VertexLocalShaderSource;
  }();

  GLBoost['VertexLocalShaderSource'] = VertexLocalShaderSource;

  /**
   * [en] This is the abstract class for all lights classes. Don't use this class directly.<br>
   * [ja] 全ての光源クラスのための抽象クラスです。直接このクラスは使わないでください。
   */

  var AbstractLight = function (_Element) {
    babelHelpers.inherits(AbstractLight, _Element);

    function AbstractLight(glBoostContext) {
      babelHelpers.classCallCheck(this, AbstractLight);

      var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(AbstractLight).call(this, glBoostContext));

      if (_this.constructor === AbstractLight) {
        throw new TypeError("Cannot construct AbstractLight instances directly.");
      }

      _this._gl = _this._glContext.gl;
      _this._name = "";
      return _this;
    }

    return AbstractLight;
  }(Element);

  /**
   * [en] This is a Directional Light class.<br>
   * [ja] 平行光源クラスです。
   */

  var DirectionalLight = function (_AbstractLight) {
    babelHelpers.inherits(DirectionalLight, _AbstractLight);


    /**
     * [en] The constructor of DirectionalLight class. <br>
     * [ja] DirectionalLightクラスのコンストラクタ
     * @param {Vector4} intensity [en] intensity as Vector4 Color [ja] Vector4による色情報で指定する光の強度
     * @param {Vector4} direction [en] the light (traveling) direction [ja] 光が向かう方向
     */

    function DirectionalLight(glBoostContext, intensity, direction) {
      babelHelpers.classCallCheck(this, DirectionalLight);

      var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(DirectionalLight).call(this, glBoostContext));

      _this._name = "";
      _this._intensity = intensity;
      _this._direction = direction;
      return _this;
    }

    babelHelpers.createClass(DirectionalLight, [{
      key: 'intensity',
      set: function set(vec) {
        this._intensity = vec;
      },
      get: function get() {
        return this._intensity;
      }
    }, {
      key: 'direction',
      set: function set(vec) {
        this._direction = vec;
      },
      get: function get() {
        return this._direction;
      }
    }]);
    return DirectionalLight;
  }(AbstractLight);

  /**
   * [en] This is a Point Light class.<br>
   * [ja] 点光源クラスです。
   */

  var PointLight = function (_AbstractLight) {
    babelHelpers.inherits(PointLight, _AbstractLight);


    /**
     * [en] The constructor of PointLight class. <br>
     * [ja] PointLightクラスのコンストラクタ
     * @param {Vector4} intensity [en] intensity as Vector4 Color [ja] Vector4による色情報で指定する光の強度
     * @param {HTMLCanvas|string} canvas [en] canvas or canvas' id string. [ja] canvasまたはcanvasのid文字列
     */

    function PointLight(glBoostContext, intensity) {
      babelHelpers.classCallCheck(this, PointLight);

      var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(PointLight).call(this, glBoostContext));

      _this._name = "";
      _this._intensity = intensity;

      return _this;
    }

    babelHelpers.createClass(PointLight, [{
      key: 'intensity',
      set: function set(vec) {
        this._intensity = vec;
      },
      get: function get() {
        return this._intensity;
      }
    }]);
    return PointLight;
  }(AbstractLight);

  var singleton$3 = Symbol();
  var singletonEnforcer$3 = Symbol();

  var DrawKickerLocal = function () {
    function DrawKickerLocal(enforcer) {
      babelHelpers.classCallCheck(this, DrawKickerLocal);

      if (enforcer !== singletonEnforcer$3) {
        throw new Error('This is a Singleton class. get the instance using \'getInstance\' static method.');
      }
      this._glslProgram = null;
    }

    babelHelpers.createClass(DrawKickerLocal, [{
      key: 'draw',
      value: function draw(gl, glem, glContext, mesh, materials, camera, lights, scene, vertices, vaoDic, vboDic, iboArrayDic, geometry, geometryName, primitiveType, vertexN) {
        var isVAOBound = false;
        if (DrawKickerLocal._lastGeometry !== geometryName) {
          isVAOBound = glem.bindVertexArray(gl, vaoDic[geometryName]);
        }

        for (var i = 0; i < materials.length; i++) {
          var shaderName = materials[i].shaderInstance.toString();
          if (shaderName !== DrawKickerLocal._lastShaderName) {
            this._glslProgram = materials[i].shaderInstance.glslProgram;
            gl.useProgram(this._glslProgram);
          }
          var glslProgram = this._glslProgram;

          if (!isVAOBound) {
            if (DrawKickerLocal._lastGeometry !== geometryName) {
              gl.bindBuffer(gl.ARRAY_BUFFER, vboDic[geometryName]);
              geometry.setUpVertexAttribs(gl, glslProgram, geometry._allVertexAttribs(vertices));
            }
          }

          var opacity = mesh.opacityAccumulatedAncestry * scene.opacity;
          gl.uniform1f(glslProgram.opacity, opacity);

          if (camera) {
            var viewMatrix = camera.lookAtRHMatrix();
            var projectionMatrix = camera.perspectiveRHMatrix();
            var m_m = mesh.transformMatrixAccumulatedAncestry;
            var pvm_m = projectionMatrix.multiply(viewMatrix).multiply(camera.inverseTransformMatrixAccumulatedAncestryWithoutMySelf).multiply(m_m);
            gl.uniformMatrix4fv(glslProgram.modelViewProjectionMatrix, false, pvm_m.flatten());
          }

          if (glslProgram['lightPosition_0']) {
            lights = materials[i].shaderInstance.getDefaultPointLightIfNotExist(gl, lights, glContext.canvas);
            if (glslProgram['viewPosition']) {
              var cameraPosInLocalCoord = null;
              if (camera) {
                var cameraPos = new Vector4(0, 0, 0, 1);
                cameraPos = camera.transformMatrixAccumulatedAncestry.multiplyVector(cameraPos);
                cameraPosInLocalCoord = mesh.inverseTransformMatrixAccumulatedAncestry.multiplyVector(new Vector4(cameraPos.x, cameraPos.y, cameraPos.z, 1));
              } else {
                cameraPosInLocalCoord = mesh.inverseTransformMatrixAccumulatedAncestry.multiplyVector(new Vector4(0, 0, 1, 1));
              }
              gl.uniform3f(glslProgram['viewPosition'], cameraPosInLocalCoord.x, cameraPosInLocalCoord.y, cameraPosInLocalCoord.z);
            }

            for (var j = 0; j < lights.length; j++) {
              if (glslProgram['lightPosition_' + j] && glslProgram['lightDiffuse_' + j]) {
                var lightVec = null;
                var isPointLight = -9999;
                if (lights[j] instanceof PointLight) {
                  lightVec = new Vector4(0, 0, 0, 1);
                  lightVec = lights[j].transformMatrixAccumulatedAncestry.multiplyVector(lightVec);
                  isPointLight = 1.0;
                } else if (lights[j] instanceof DirectionalLight) {
                  lightVec = new Vector4(-lights[j].direction.x, -lights[j].direction.y, -lights[j].direction.z, 1);
                  lightVec = lights[j].rotateMatrixAccumulatedAncestry.multiplyVector(lightVec);
                  lightVec.w = 0.0;
                  isPointLight = 0.0;
                }

                var lightVecInLocalCoord = mesh.inverseTransformMatrixAccumulatedAncestry.multiplyVector(lightVec);
                gl.uniform4f(glslProgram['lightPosition_' + j], lightVecInLocalCoord.x, lightVecInLocalCoord.y, lightVecInLocalCoord.z, isPointLight);

                gl.uniform4f(glslProgram['lightDiffuse_' + j], lights[j].intensity.x, lights[j].intensity.y, lights[j].intensity.z, 1.0);
              }
            }
          }

          var isMaterialSetupDone = true;

          if (materials[i].shaderInstance.dirty || shaderName !== DrawKickerLocal._lastShaderName) {
            var needTobeStillDirty = materials[i].shaderInstance.setUniforms(gl, glslProgram, materials[i], camera, mesh);
            materials[i].shaderInstance.dirty = needTobeStillDirty ? true : false;
          }

          if (shaderName !== DrawKickerLocal._lastShaderName) {
            if (materials[i]) {
              isMaterialSetupDone = materials[i].setUp();
            }
          }
          if (!isMaterialSetupDone) {
            return;
          }

          if (iboArrayDic[geometryName].length > 0) {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, iboArrayDic[geometryName][i]);
            gl.drawElements(gl[primitiveType], materials[i].getVertexN(geometry), glem.elementIndexBitSize(gl), 0);
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
          } else {
            gl.drawArrays(gl[primitiveType], 0, vertexN);
          }

          DrawKickerLocal._lastShaderName = isMaterialSetupDone ? shaderName : null;
        }

        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        DrawKickerLocal._lastGeometry = geometryName;
      }
    }], [{
      key: 'getInstance',
      value: function getInstance() {
        if (!this[singleton$3]) {
          this[singleton$3] = new DrawKickerLocal(singletonEnforcer$3);
        }
        return this[singleton$3];
      }
    }]);
    return DrawKickerLocal;
  }();

  DrawKickerLocal._lastShaderName = null;
  DrawKickerLocal._lastGeometry = null;

  var VertexWorldShaderSource = function () {
    function VertexWorldShaderSource() {
      babelHelpers.classCallCheck(this, VertexWorldShaderSource);
    }

    babelHelpers.createClass(VertexWorldShaderSource, [{
      key: 'VSDefine_VertexWorldShaderSource',
      value: function VSDefine_VertexWorldShaderSource(in_, out_, f, lights, extraData) {
        var shaderText = in_ + ' vec3 aVertex_position;\n';

        if (Shader._exist(f, GLBoost.NORMAL)) {
          shaderText += in_ + ' vec3 aVertex_normal;\n';
          shaderText += out_ + ' vec3 v_normal;\n';
        }
        shaderText += out_ + ' vec4 position;\n';

        shaderText += 'uniform mat4 worldMatrix;\n';
        shaderText += 'uniform mat4 viewMatrix;\n';
        shaderText += 'uniform mat4 projectionMatrix;\n';
        shaderText += 'uniform mat3 normalMatrix;\n';
        return shaderText;
      }
    }, {
      key: 'VSTransform_VertexWorldShaderSource',
      value: function VSTransform_VertexWorldShaderSource(existCamera_f, f, lights, extraData) {
        var shaderText = '';
        if (existCamera_f) {
          shaderText += '  mat4 pvwMatrix = projectionMatrix * viewMatrix * worldMatrix;\n';
          shaderText += '  gl_Position = pvwMatrix * vec4(aVertex_position, 1.0);\n';
        } else {
          shaderText += '  gl_Position = worldMatrix * vec4(aVertex_position, 1.0);\n';
        }
        if (Shader._exist(f, GLBoost.NORMAL)) {
          shaderText += '  v_normal = normalMatrix * aVertex_normal;\n';
        }
        shaderText += '  position = worldMatrix * vec4(aVertex_position, 1.0);\n';

        return shaderText;
      }
    }, {
      key: 'FSDefine_VertexWorldShaderSource',
      value: function FSDefine_VertexWorldShaderSource(in_, f, lights, extraData) {
        var shaderText = '';
        if (Shader._exist(f, GLBoost.NORMAL)) {
          shaderText += in_ + ' vec3 v_normal;\n';
        }
        shaderText += in_ + ' vec4 position;\n';
        if (lights.length > 0) {
          shaderText += 'uniform vec4 lightPosition[' + lights.length + '];\n';
          shaderText += 'uniform vec4 lightDiffuse[' + lights.length + '];\n';
        }

        return shaderText;
      }
    }, {
      key: 'FSShade_VertexWorldShaderSource',
      value: function FSShade_VertexWorldShaderSource(f, gl, lights) {
        var shaderText = '';
        return shaderText;
      }
    }, {
      key: 'prepare_VertexWorldShaderSource',
      value: function prepare_VertexWorldShaderSource(gl, shaderProgram, vertexAttribs, existCamera_f, lights, extraData, canvas) {

        var vertexAttribsAsResult = [];

        var attribName = 'position';
        shaderProgram['vertexAttribute_' + attribName] = gl.getAttribLocation(shaderProgram, 'aVertex_' + attribName);
        gl.enableVertexAttribArray(shaderProgram['vertexAttribute_' + attribName]);
        vertexAttribsAsResult.push(attribName);

        shaderProgram.worldMatrix = gl.getUniformLocation(shaderProgram, 'worldMatrix');
        shaderProgram.normalMatrix = gl.getUniformLocation(shaderProgram, 'normalMatrix');
        if (existCamera_f) {
          shaderProgram.viewMatrix = gl.getUniformLocation(shaderProgram, 'viewMatrix');
          shaderProgram.projectionMatrix = gl.getUniformLocation(shaderProgram, 'projectionMatrix');
        }

        lights = this.getDefaultPointLightIfNotExist(gl, lights, canvas);

        for (var i = 0; i < lights.length; i++) {
          shaderProgram['lightPosition_' + i] = gl.getUniformLocation(shaderProgram, 'lightPosition[' + i + ']');
          shaderProgram['lightDiffuse_' + i] = gl.getUniformLocation(shaderProgram, 'lightDiffuse[' + i + ']');
        }

        return vertexAttribsAsResult;
      }
    }]);
    return VertexWorldShaderSource;
  }();

  GLBoost['VertexWorldShaderSource'] = VertexWorldShaderSource;

  var singleton$4 = Symbol();
  var singletonEnforcer$4 = Symbol();

  var DrawKickerWorld = function () {
    function DrawKickerWorld(enforcer) {
      babelHelpers.classCallCheck(this, DrawKickerWorld);

      if (enforcer !== singletonEnforcer$4) {
        throw new Error('This is a Singleton class. get the instance using \'getInstance\' static method.');
      }
      this._glslProgram = null;
    }

    babelHelpers.createClass(DrawKickerWorld, [{
      key: 'draw',
      value: function draw(gl, glem, glContext, mesh, materials, camera, lights, scene, vertices, vaoDic, vboDic, iboArrayDic, geometry, geometryName, primitiveType, vertexN) {
        var isVAOBound = false;
        if (DrawKickerWorld._lastGeometry !== geometryName) {
          isVAOBound = glem.bindVertexArray(gl, vaoDic[geometryName]);
        }

        for (var i = 0; i < materials.length; i++) {
          var shaderName = materials[i].shaderInstance.toString();
          if (shaderName !== DrawKickerWorld._lastShaderName) {
            this._glslProgram = materials[i].shaderInstance.glslProgram;
            gl.useProgram(this._glslProgram);
          }
          var glslProgram = this._glslProgram;

          if (!isVAOBound) {
            if (DrawKickerWorld._lastGeometry !== geometryName) {
              gl.bindBuffer(gl.ARRAY_BUFFER, vboDic[geometryName]);
              geometry.setUpVertexAttribs(gl, glslProgram, geometry._allVertexAttribs(vertices));
            }
          }

          var opacity = mesh.opacityAccumulatedAncestry * scene.opacity;
          gl.uniform1f(glslProgram.opacity, opacity);

          var world_m = mesh.transformMatrixAccumulatedAncestry;
          gl.uniformMatrix4fv(glslProgram.worldMatrix, false, world_m.flatten());
          var normal_m = mesh.normalMatrixAccumulatedAncestry;
          gl.uniformMatrix3fv(glslProgram.normalMatrix, false, normal_m.flatten());
          if (camera) {
            var cameraMatrix = camera.lookAtRHMatrix();
            var viewMatrix = cameraMatrix.multiply(camera.inverseTransformMatrixAccumulatedAncestryWithoutMySelf);
            var projectionMatrix = camera.perspectiveRHMatrix();
            gl.uniformMatrix4fv(glslProgram.viewMatrix, false, viewMatrix.flatten());
            gl.uniformMatrix4fv(glslProgram.projectionMatrix, false, projectionMatrix.flatten());
          }

          if (glslProgram['lightPosition_0']) {
            lights = materials[i].shaderInstance.getDefaultPointLightIfNotExist(gl, lights, glContext.canvas);
            if (glslProgram['viewPosition']) {
              var cameraPos = new Vector4(0, 0, 1, 1);
              if (camera) {
                cameraPos = camera.transformMatrixAccumulatedAncestry.multiplyVector(cameraPos);
              }
              gl.uniform3f(glslProgram['viewPosition'], cameraPos.x, cameraPos.y, cameraPos.z);
            }

            for (var j = 0; j < lights.length; j++) {
              if (glslProgram['lightPosition_' + j] && glslProgram['lightDiffuse_' + j]) {
                var lightVec = null;
                var isPointLight = -9999;
                if (lights[j] instanceof PointLight) {
                  lightVec = new Vector4(0, 0, 0, 1);
                  lightVec = lights[j].transformMatrixAccumulatedAncestry.multiplyVector(lightVec);
                  isPointLight = 1.0;
                } else if (lights[j] instanceof DirectionalLight) {
                  lightVec = new Vector4(-lights[j].direction.x, -lights[j].direction.y, -lights[j].direction.z, 1);
                  lightVec = lights[j].rotateMatrixAccumulatedAncestry.multiplyVector(lightVec);
                  lightVec.w = 0.0;
                  isPointLight = 0.0;
                }

                gl.uniform4f(glslProgram['lightPosition_' + j], lightVec.x, lightVec.y, lightVec.z, isPointLight);
                gl.uniform4f(glslProgram['lightDiffuse_' + j], lights[j].intensity.x, lights[j].intensity.y, lights[j].intensity.z, 1.0);
              }
            }
          }

          var isMaterialSetupDone = true;

          if (materials[i].shaderInstance.dirty || shaderName !== DrawKickerWorld._lastShaderName) {
            var needTobeStillDirty = materials[i].shaderInstance.setUniforms(gl, glslProgram, materials[i], camera, mesh);
            materials[i].shaderInstance.dirty = needTobeStillDirty ? true : false;
          }

          if (shaderName !== DrawKickerWorld._lastShaderName) {
            if (materials[i]) {
              isMaterialSetupDone = materials[i].setUp();
            }
          }
          if (!isMaterialSetupDone) {
            return;
          }

          if (iboArrayDic[geometryName].length > 0) {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, iboArrayDic[geometryName][i]);
            gl.drawElements(gl[primitiveType], materials[i].getVertexN(geometry), glem.elementIndexBitSize(gl), 0);
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
          } else {
            gl.drawArrays(gl[primitiveType], 0, vertexN);
          }

          DrawKickerWorld._lastShaderName = isMaterialSetupDone ? shaderName : null;
        }

        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        DrawKickerWorld._lastGeometry = geometryName;
      }
    }], [{
      key: 'getInstance',
      value: function getInstance() {
        if (!this[singleton$4]) {
          this[singleton$4] = new DrawKickerWorld(singletonEnforcer$4);
        }
        return this[singleton$4];
      }
    }]);
    return DrawKickerWorld;
  }();

  DrawKickerWorld._lastShaderName = null;
  DrawKickerWorld._lastGeometry = null;

  var ArrayUtil = function () {
    function ArrayUtil() {
      babelHelpers.classCallCheck(this, ArrayUtil);
    }

    babelHelpers.createClass(ArrayUtil, null, [{
      key: 'merge',
      value: function merge() {
        var key,
            result = false;
        if (arguments && arguments.length > 0) {
          result = [];
          for (var i = 0, len = arguments.length; i < len; i++) {
            if (arguments[i] && babelHelpers.typeof(arguments[i]) === 'object') {
              for (key in arguments[i]) {
                if (isFinite(key)) {
                  result.push(arguments[i][key]);
                } else {
                  result[key] = arguments[i][key];
                }
              }
            }
          }
        }
        return result;
      }
    }]);
    return ArrayUtil;
  }();

  var FragmentSimpleShaderSource = function () {
    function FragmentSimpleShaderSource() {
      babelHelpers.classCallCheck(this, FragmentSimpleShaderSource);
    }

    babelHelpers.createClass(FragmentSimpleShaderSource, [{
      key: 'FSDefine_FragmentSimpleShaderSource',
      value: function FSDefine_FragmentSimpleShaderSource(in_, f) {
        var shaderText = 'uniform float opacity;\n';
        return shaderText;
      }
    }, {
      key: 'FSShade_FragmentSimpleShaderSource',
      value: function FSShade_FragmentSimpleShaderSource(f, gl) {
        var shaderText = 'rt0 = vec4(1.0, 1.0, 1.0, opacity);\n';
        return shaderText;
      }
    }, {
      key: 'prepare_FragmentSimpleShaderSource',
      value: function prepare_FragmentSimpleShaderSource(gl, shaderProgram, vertexAttribs, existCamera_f) {

        var vertexAttribsAsResult = [];

        shaderProgram.opacity = gl.getUniformLocation(shaderProgram, 'opacity');

        return vertexAttribsAsResult;
      }
    }]);
    return FragmentSimpleShaderSource;
  }();

  var DecalShaderSource = function () {
    function DecalShaderSource() {
      babelHelpers.classCallCheck(this, DecalShaderSource);
    }

    babelHelpers.createClass(DecalShaderSource, [{
      key: 'VSDefine_DecalShaderSource',
      value: function VSDefine_DecalShaderSource(in_, out_, f) {
        var shaderText = '';
        if (Shader._exist(f, GLBoost.COLOR)) {
          shaderText += in_ + ' vec4 aVertex_color;\n';
          shaderText += out_ + ' vec4 color;\n';
        }
        if (Shader._exist(f, GLBoost.TEXCOORD)) {
          shaderText += in_ + ' vec2 aVertex_texcoord;\n';
          shaderText += out_ + ' vec2 texcoord;\n';
        }
        return shaderText;
      }
    }, {
      key: 'VSTransform_DecalShaderSource',
      value: function VSTransform_DecalShaderSource(existCamera_f, f) {
        var shaderText = '';
        if (Shader._exist(f, GLBoost.COLOR)) {
          shaderText += '  color = aVertex_color;\n';
        }
        if (Shader._exist(f, GLBoost.TEXCOORD)) {
          shaderText += '  texcoord = aVertex_texcoord;\n';
        }
        return shaderText;
      }
    }, {
      key: 'FSDefine_DecalShaderSource',
      value: function FSDefine_DecalShaderSource(in_, f) {
        var shaderText = '';
        if (Shader._exist(f, GLBoost.COLOR)) {
          shaderText += in_ + ' vec4 color;\n';
        }
        if (Shader._exist(f, GLBoost.TEXCOORD)) {
          shaderText += in_ + ' vec2 texcoord;\n\n';
          shaderText += 'uniform sampler2D uTexture;\n';
        }
        shaderText += 'uniform vec4 materialBaseColor;\n';

        return shaderText;
      }
    }, {
      key: 'FSShade_DecalShaderSource',
      value: function FSShade_DecalShaderSource(f, gl) {
        var shaderText = '';
        var textureFunc = Shader._texture_func(gl);
        if (Shader._exist(f, GLBoost.COLOR)) {
          shaderText += '  rt0 *= color;\n';
        }
        shaderText += '    rt0 *= materialBaseColor;\n';
        if (Shader._exist(f, GLBoost.TEXCOORD)) {
          shaderText += '  rt0 *= ' + textureFunc + '(uTexture, texcoord);\n';
        }
        //shaderText += '    rt0 = vec4(1.0, 0.0, 0.0, 1.0);\n';
        return shaderText;
      }
    }, {
      key: 'prepare_DecalShaderSource',
      value: function prepare_DecalShaderSource(gl, shaderProgram, vertexAttribs, existCamera_f) {

        var vertexAttribsAsResult = [];
        vertexAttribs.forEach(function (attribName) {
          if (attribName === GLBoost.COLOR || attribName === GLBoost.TEXCOORD) {
            shaderProgram['vertexAttribute_' + attribName] = gl.getAttribLocation(shaderProgram, 'aVertex_' + attribName);
            gl.enableVertexAttribArray(shaderProgram['vertexAttribute_' + attribName]);
            vertexAttribsAsResult.push(attribName);
          }
        });

        shaderProgram.materialBaseColor = gl.getUniformLocation(shaderProgram, 'materialBaseColor');

        if (Shader._exist(vertexAttribs, GLBoost.TEXCOORD)) {
          shaderProgram.uniformTextureSampler_0 = gl.getUniformLocation(shaderProgram, 'texture');
          // サンプラーにテクスチャユニット０を指定する
          gl.uniform1i(shaderProgram.uniformTextureSampler_0, 0);
        }

        return vertexAttribsAsResult;
      }
    }]);
    return DecalShaderSource;
  }();

  var DecalShader = function (_Shader) {
    babelHelpers.inherits(DecalShader, _Shader);

    function DecalShader(glBoostContext) {
      var basicShader = arguments.length <= 1 || arguments[1] === undefined ? VertexWorldShaderSource : arguments[1];
      babelHelpers.classCallCheck(this, DecalShader);

      var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(DecalShader).call(this, glBoostContext));

      DecalShader.mixin(basicShader);
      DecalShader.mixin(FragmentSimpleShaderSource);
      DecalShader.mixin(DecalShaderSource);
      return _this;
    }

    babelHelpers.createClass(DecalShader, [{
      key: 'setUniforms',
      value: function setUniforms(gl, glslProgram, material) {

        var baseColor = material.baseColor;
        gl.uniform4f(glslProgram.materialBaseColor, baseColor.x, baseColor.y, baseColor.z, baseColor.w);
      }
    }]);
    return DecalShader;
  }(Shader);

  GLBoost['DecalShader'] = DecalShader;

  var ClassicMaterial = function (_GLBoostObject) {
    babelHelpers.inherits(ClassicMaterial, _GLBoostObject);

    function ClassicMaterial(glBoostContext) {
      babelHelpers.classCallCheck(this, ClassicMaterial);

      var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(ClassicMaterial).call(this, glBoostContext));

      _this._diffuseTexture = null;
      _this._gl = _this._glContext.gl;
      _this._canvas = _this._glContext.canvas;
      _this._baseColor = new Vector4(1.0, 1.0, 1.0, 1.0);
      _this._diffuseColor = new Vector4(1.0, 1.0, 1.0, 1.0);
      _this._specularColor = new Vector4(0.5, 0.5, 0.5, 1.0);
      _this._ambientColor = new Vector4(0.0, 0.0, 0.0, 1.0);
      _this._name = '';
      _this._shaderClass = DecalShader;
      _this._shaderInstance = null;
      _this._vertexNofGeometries = {};

      return _this;
    }

    babelHelpers.createClass(ClassicMaterial, [{
      key: 'clone',
      value: function clone() {
        var material = new ClassicMaterial(this._canvas);
        material._baseColor = this._baseColor;
        material._diffuseColor = this._diffuseColor;
        material._specularColor = this._specularColor;
        material._ambientColor = this._ambientColor;
        material._shaderClass = this._shaderClass;
        material._shaderInstance = this._shaderInstance;

        for (var geom in this._vertexNofGeometries) {
          material._vertexNofGeometries[geom] = this._vertexNofGeometries[geom];
        }

        return material;
      }
    }, {
      key: 'setVertexN',
      value: function setVertexN(geom, num) {
        this._vertexNofGeometries[geom] = num;
      }
    }, {
      key: 'getVertexN',
      value: function getVertexN(geom) {
        return typeof this._vertexNofGeometries[geom] === 'undefined' ? 0 : this._vertexNofGeometries[geom];
      }
    }, {
      key: 'setUp',
      value: function setUp() {
        var gl = this._gl;
        var result = false;
        if (this._diffuseTexture) {
          // テクスチャユニット０にテクスチャオブジェクトをバインドする
          gl.activeTexture(gl.TEXTURE0);
          result = this._diffuseTexture.setUp();
        } else {
          gl.bindTexture(gl.TEXTURE_2D, null);
          result = true;
        }

        return result;
      }
    }, {
      key: 'tearDown',
      value: function tearDown() {
        if (this._diffuseTexture) {
          this._diffuseTexture.tearDown();
        }
      }
    }, {
      key: 'shaderClass',
      set: function set(shaderClass) {
        if (this._shaderClass === shaderClass) {
          return;
        }
        this._shaderClass = shaderClass;
        if (this._shaderInstance) {
          this._shaderInstance.readyForDiscard();
        }
        this._shaderInstance = null;
      },
      get: function get() {
        return this._shaderClass;
      }
    }, {
      key: 'shaderInstance',
      set: function set(shaderInstance) {
        this._shaderInstance = shaderInstance;
      },
      get: function get() {
        return this._shaderInstance;
      }
    }, {
      key: 'diffuseTexture',
      set: function set(tex) {
        this._diffuseTexture = tex;
      },
      get: function get() {
        return this._diffuseTexture;
      }
    }, {
      key: 'baseColor',
      set: function set(vec) {
        this._baseColor = vec;
      },
      get: function get() {
        return this._baseColor;
      }
    }, {
      key: 'diffuseColor',
      set: function set(vec) {
        this._diffuseColor = vec;
      },
      get: function get() {
        return this._diffuseColor;
      }
    }, {
      key: 'specularColor',
      set: function set(vec) {
        this._specularColor = vec;
      },
      get: function get() {
        return this._specularColor;
      }
    }, {
      key: 'ambientColor',
      set: function set(vec) {
        this._ambientColor = vec;
      },
      get: function get() {
        return this._ambientColor;
      }
    }, {
      key: 'name',
      set: function set(name) {
        this._name = name;
      },
      get: function get() {
        return this._name;
      }
    }]);
    return ClassicMaterial;
  }(GLBoostObject);

  GLBoost$1['ClassicMaterial'] = ClassicMaterial;

  var Geometry = function (_GLBoostObject) {
    babelHelpers.inherits(Geometry, _GLBoostObject);

    function Geometry(glBoostContext) {
      babelHelpers.classCallCheck(this, Geometry);

      var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Geometry).call(this, glBoostContext));

      _this._canvas = _this._glContext.canvas;

      _this._materials = [];
      _this._vertexN = 0;
      _this._vertices = null;
      _this._indicesArray = null;
      _this._performanceHint = null;
      _this._vertexAttribComponentNDic = {};
      _this._defaultMaterial = glBoostContext.createClassicMaterial();
      _this._vertexData = [];
      _this._extraDataForShader = {};
      _this._AABB_min = new Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
      _this._AABB_max = new Vector3(Number.MIN_VALUE, Number.MIN_VALUE, Number.MIN_VALUE);
      _this._centerPosition = Vector3.zero();
      _this._drawKicker = DrawKickerWorld.getInstance();

      if (_this._drawKicker instanceof DrawKickerWorld) {} else if (_this._drawKicker instanceof DrawKickerLocal) {}
      return _this;
    }

    /**
     * データとして利用する頂点属性を判断し、そのリストを返す
     * 不必要な頂点属性のデータは無視する。
     */


    babelHelpers.createClass(Geometry, [{
      key: '_decideNeededVertexAttribs',
      value: function _decideNeededVertexAttribs(vertices, material) {
        var _material = null;
        if (material) {
          _material = material;
        } else {
          _material = this._materials[0];
        }

        var attribNameArray = [];
        for (var attribName in vertices) {
          if (attribName === GLBoost$1.TEXCOORD) {
            // texcoordの場合は、テクスチャ付きのマテリアルをちゃんと持っているときに限り、'texcoord'が有効となる
            if (_material !== void 0 && _material.diffuseTexture !== null) {
              attribNameArray.push(attribName);
            } else {
              //delete vertices[GLBoost.TEXCOORD];
            }
          } else {
              attribNameArray.push(attribName);
            }
        }

        return attribNameArray;
      }

      /**
       * 全ての頂点属性のリストを返す
       */

    }, {
      key: '_allVertexAttribs',
      value: function _allVertexAttribs(vertices) {
        var attribNameArray = [];
        for (var attribName in vertices) {
          attribNameArray.push(attribName);
        }

        return attribNameArray;
      }
    }, {
      key: '_updateAABB',
      value: function _updateAABB(positionVector) {
        this._AABB_min.x = positionVector.x < this._AABB_min.x ? positionVector.x : this._AABB_min.x;
        this._AABB_min.y = positionVector.y < this._AABB_min.y ? positionVector.y : this._AABB_min.y;
        this._AABB_min.z = positionVector.z < this._AABB_min.z ? positionVector.z : this._AABB_min.z;
        this._AABB_max.x = this._AABB_max.x < positionVector.x ? positionVector.x : this._AABB_max.x;
        this._AABB_max.y = this._AABB_max.y < positionVector.y ? positionVector.y : this._AABB_max.y;
        this._AABB_max.z = this._AABB_max.z < positionVector.z ? positionVector.z : this._AABB_max.z;

        return positionVector;
      }
    }, {
      key: '_updateCenterPosition',
      value: function _updateCenterPosition() {
        this._centerPosition = Vector3.divide(Vector3.subtract(this._AABB_max, this._AABB_min), 2);
      }
    }, {
      key: 'setVerticesData',
      value: function setVerticesData(vertices, indicesArray) {
        var _this2 = this;

        var primitiveType = arguments.length <= 2 || arguments[2] === undefined ? GLBoost$1.TRIANGLES : arguments[2];
        var performanceHint = arguments.length <= 3 || arguments[3] === undefined ? GLBoost$1.STATIC_DRAW : arguments[3];

        this._vertices = vertices;

        var allVertexAttribs = this._allVertexAttribs(this._vertices);

        // if array, convert to vector[2/3/4]
        this._vertices.position.forEach(function (elem, index) {
          allVertexAttribs.forEach(function (attribName) {
            var element = _this2._vertices[attribName][index];
            _this2._vertices[attribName][index] = MathUtil.arrayToVector(element);

            if (attribName === 'position') {
              _this2._updateAABB(_this2._vertices[attribName][index]);
            }
          });
        });

        this._updateCenterPosition();

        this._indicesArray = indicesArray;
        this._primitiveType = primitiveType;

        var gl = this._glContext.gl;
        var hint = null;
        switch (performanceHint) {
          case GLBoost$1.STATIC_DRAW:
            hint = gl.STATIC_DRAW;
            break;
          case GLBoost$1.STREAM_DRAW:
            hint = gl.STREAM_DRAW;
            break;
          case GLBoost$1.DYNAMIC_DRAW:
            hint = gl.DYNAMIC_DRAW;
            break;
        }
        this._performanceHint = hint;
      }
    }, {
      key: 'updateVerticesData',
      value: function updateVerticesData(vertices) {
        var _this3 = this;

        var isAlreadyInterleaved = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

        var gl = this._glContext.gl;
        var vertexData = this._vertexData;
        //var vertexData = [];
        if (isAlreadyInterleaved) {
          vertexData = vertices;
        } else {
          var allVertexAttribs;

          (function () {
            _this3._vertices = ArrayUtil.merge(_this3._vertices, vertices);
            allVertexAttribs = _this3._allVertexAttribs(_this3._vertices);

            var isCached = vertexData.length == 0 ? false : true;

            var idx = 0;
            _this3._vertices.position.forEach(function (elem, index) {
              allVertexAttribs.forEach(function (attribName) {
                var element = _this3._vertices[attribName][index];
                // if array, convert to vector[2/3/4]
                _this3._vertices[attribName][index] = element = MathUtil.arrayToVector(element);

                if (attribName === 'position') {
                  _this3._updateAABB(_this3._vertices[attribName][index]);
                }

                vertexData[idx++] = element.x;
                vertexData[idx++] = element.y;
                if (element.z !== void 0) {
                  vertexData[idx++] = element.z;
                }
                if (element.w !== void 0) {
                  vertexData[idx++] = element.w;
                }
              });
            });

            _this3._updateCenterPosition();

            if (!isCached) {
              _this3.Float32AryVertexData = new Float32Array(vertexData);
            }
            var float32AryVertexData = _this3.Float32AryVertexData;
            for (var i = 0; i < float32AryVertexData.length; i++) {
              float32AryVertexData[i] = vertexData[i];
            }
            gl.bindBuffer(gl.ARRAY_BUFFER, Geometry._vboDic[_this3.toString()]);
            gl.bufferSubData(gl.ARRAY_BUFFER, 0, float32AryVertexData);
            gl.bindBuffer(gl.ARRAY_BUFFER, null);
          })();
        }
      }
    }, {
      key: 'setUpVertexAttribs',
      value: function setUpVertexAttribs(gl, glslProgram, _allVertexAttribs) {
        var _this4 = this;

        var optimizedVertexAttribs = glslProgram.optimizedVertexAttribs;

        var stride = 0;
        _allVertexAttribs.forEach(function (attribName) {
          stride += _this4._vertexAttribComponentNDic[attribName] * 4;
        });

        // 頂点レイアウト設定
        var offset = 0;
        _allVertexAttribs.forEach(function (attribName) {
          if (optimizedVertexAttribs.indexOf(attribName) != -1) {
            gl.vertexAttribPointer(glslProgram['vertexAttribute_' + attribName], _this4._vertexAttribComponentNDic[attribName], gl.FLOAT, gl.FALSE, stride, offset);
          }
          offset += _this4._vertexAttribComponentNDic[attribName] * 4;
        });
      }
    }, {
      key: 'prepareGLSLProgramAndSetVertexNtoMaterial',
      value: function prepareGLSLProgramAndSetVertexNtoMaterial(material, index, existCamera_f, lights) {
        var _this5 = this;

        var doSetupVertexAttribs = arguments.length <= 4 || arguments[4] === undefined ? true : arguments[4];

        var gl = this._glContext.gl;
        var vertices = this._vertices;

        var glem = GLExtensionsManager.getInstance(this._glContext);
        var _optimizedVertexAttribs = this._decideNeededVertexAttribs(vertices, material);

        if (doSetupVertexAttribs) {
          glem.bindVertexArray(gl, Geometry._vaoDic[this.toString()]);
          gl.bindBuffer(gl.ARRAY_BUFFER, Geometry._vboDic[this.toString()]);
        }

        var allVertexAttribs = this._allVertexAttribs(vertices);
        allVertexAttribs.forEach(function (attribName) {
          _this5._vertexAttribComponentNDic[attribName] = vertices[attribName][0].z === void 0 ? 2 : vertices[attribName][0].w === void 0 ? 3 : 4;
        });

        if (material.shaderInstance === null) {
          var shaderClass = material.shaderClass;

          var basicShaderSource = null;
          if (this._drawKicker instanceof DrawKickerWorld) {
            basicShaderSource = VertexWorldShaderSource;
          } else if (this._drawKicker instanceof DrawKickerLocal) {
            basicShaderSource = VertexLocalShaderSource;
          }

          material.shaderInstance = new shaderClass(this._glBoostContext, basicShaderSource);
        }
        var glslProgram = material.shaderInstance.getShaderProgram(_optimizedVertexAttribs, existCamera_f, lights, this._extraDataForShader);
        if (doSetupVertexAttribs) {
          this.setUpVertexAttribs(gl, glslProgram, allVertexAttribs);
        }

        if (doSetupVertexAttribs) {
          glem.bindVertexArray(gl, null);
        }
        this._setVertexNtoSingleMaterial(material, index);

        return material;
      }
    }, {
      key: '_setVertexNtoSingleMaterial',
      value: function _setVertexNtoSingleMaterial(material, index) {
        // if this mesh has only one material...
        if (material.getVertexN(this) === 0) {
          if (this._indicesArray && this._indicesArray.length > 0) {
            material.setVertexN(this, this._indicesArray[index].length);
          } else {
            material.setVertexN(this, this._vertexN);
          }
        }
      }
    }, {
      key: 'prepareToRender',
      value: function prepareToRender(existCamera_f, lights, meshMaterial, mesh) {

        var vertices = this._vertices;
        var gl = this._glContext.gl;

        var glem = GLExtensionsManager.getInstance(this._glContext);

        this._vertexN = vertices.position.length;

        // create VAO
        if (Geometry._vaoDic[this.toString()]) {} else {
          var vao = this._glContext.createVertexArray(this);
          Geometry._vaoDic[this.toString()] = vao;
        }
        glem.bindVertexArray(gl, Geometry._vaoDic[this.toString()]);

        var doAfter = true;

        // create VBO
        if (Geometry._vboDic[this.toString()]) {
          doAfter = false;
        } else {
          var vbo = this._glContext.createBuffer(this);
          Geometry._vboDic[this.toString()] = vbo;
        }
        gl.bindBuffer(gl.ARRAY_BUFFER, Geometry._vboDic[this.toString()]);

        var materials = null;
        if (this._materials.length > 0) {
          materials = this._materials;
        } else if (mesh.material) {
          materials = [mesh.material];
        } else {
          materials = [this._defaultMaterial];
        }

        for (var i = 0; i < materials.length; i++) {
          this.prepareGLSLProgramAndSetVertexNtoMaterial(materials[i], i, existCamera_f, lights, doAfter);
        }

        if (doAfter) {

          var vertexData = [];
          var allVertexAttribs = this._allVertexAttribs(vertices);
          vertices.position.forEach(function (elem, index, array) {
            allVertexAttribs.forEach(function (attribName) {
              var element = vertices[attribName][index];
              vertexData.push(element.x);
              vertexData.push(element.y);
              if (element.z !== void 0) {
                vertexData.push(element.z);
              }
              if (element.w !== void 0) {
                vertexData.push(element.w);
              }
            });
          });

          gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData), this._performanceHint);
          gl.bindBuffer(gl.ARRAY_BUFFER, null);

          Geometry._iboArrayDic[this.toString()] = [];
          if (this._indicesArray) {
            // create Index Buffer
            for (var i = 0; i < this._indicesArray.length; i++) {
              var ibo = this._glContext.createBuffer(this);
              gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);
              gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, glem.createUintArrayForElementIndex(gl, this._indicesArray[i]), gl.STATIC_DRAW);
              gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
              Geometry._iboArrayDic[this.toString()][i] = ibo;
              this._defaultMaterial.setVertexN(this._indicesArray[i].length);
            }
          }
          glem.bindVertexArray(gl, null);
        }

        return true;
      }
    }, {
      key: 'draw',
      value: function draw(lights, camera, mesh, scene) {
        var gl = this._glContext.gl;
        var glem = GLExtensionsManager.getInstance(this._glContext);

        var materials = null;
        if (this._materials.length > 0) {
          materials = this._materials;
        } else if (mesh.material) {
          materials = [mesh.material];
        } else {
          materials = [this._defaultMaterial];
        }

        var thisName = this.toString();

        this._drawKicker.draw(gl, glem, this._glContext, mesh, materials, camera, lights, scene, this._vertices, Geometry._vaoDic, Geometry._vboDic, Geometry._iboArrayDic, this, thisName, this._primitiveType, this._vertexN);
      }

      /**
       *
       * @param geometry
       */

    }, {
      key: 'merge',
      value: function merge(geometry) {
        var baseLen = this._vertices.position.length;

        if (this === geometry) {
          console.assert('don\'t merge same geometry!');
        }
        for (var attribName in this._vertices) {
          Array.prototype.push.apply(this._vertices[attribName], geometry._vertices[attribName]);
        }
        var geometryIndicesN = geometry._indicesArray.length;
        for (var i = 0; i < geometryIndicesN; i++) {
          for (var j = 0; j < geometry._indicesArray[i].length; j++) {
            geometry._indicesArray[i][j] += baseLen;
          }
          this._indicesArray.push(geometry._indicesArray[i]);
          if (geometry._materials[i]) {
            this._materials.push(geometry._materials[i]);
          }
        }
        this._vertexN += geometry._vertexN;
      }

      /**
       * take no thought geometry's materials
       *
       * @param geometry
       */

    }, {
      key: 'mergeHarder',
      value: function mergeHarder(geometry) {
        var baseLen = this._vertices.position.length;
        if (this === geometry) {
          console.assert('don\'t merge same geometry!');
        }
        for (var attribName in this._vertices) {
          Array.prototype.push.apply(this._vertices[attribName], geometry._vertices[attribName]);
        }
        for (var i = 0; i < this._indicesArray.length; i++) {
          var len = geometry._indicesArray[i].length;
          for (var j = 0; j < len; j++) {
            var idx = geometry._indicesArray[i][j];
            this._indicesArray[i].push(baseLen + idx);
          }
          if (this._materials[i]) {
            this._materials[i].setVertexN(this, this._materials[i].getVertexN(geometry));
          }
        }
        this._vertexN += geometry._vertexN;
      }
    }, {
      key: 'setExtraDataForShader',
      value: function setExtraDataForShader(name, value) {
        this._extraDataForShader[name] = value;
      }
    }, {
      key: 'materials',
      set: function set(materials) {
        this._materials = materials;
      },
      get: function get() {
        return this._materials;
      }
    }, {
      key: 'centerPosition',
      get: function get() {
        return this._centerPosition;
      }
    }], [{
      key: 'clearMaterialCache',
      value: function clearMaterialCache() {
        Geometry._lastMaterial = null;
      }
    }]);
    return Geometry;
  }(GLBoostObject);

  Geometry._vaoDic = {};
  Geometry._vboDic = {};
  Geometry._iboArrayDic = {};

  /**
   * en: This class take a role as operator of rendering process. In order to render images to canvas, this Renderer class gathers other elements' data, decides a plan of drawing process, and then just execute it.<br>
   * ja: このクラスはレンダリングプロセスの制御を司ります。Canvasにイメージをレンダリングするために、このRendererクラスは他の要素のデータを集め、描画プロセスの計画を決定し、実行します。
   */

  var Renderer = function (_GLBoostObject) {
    babelHelpers.inherits(Renderer, _GLBoostObject);

    function Renderer(glBoostContext, parameters) {
      babelHelpers.classCallCheck(this, Renderer);

      var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Renderer).call(this, glBoostContext));

      var _clearColor = parameters.clearColor;

      var gl = _this._glContext.gl;

      var setDefaultGLStates = function setDefaultGLStates() {

        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);

        gl.enable(gl.BLEND);
        gl.blendEquation(gl.FUNC_ADD);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

        gl.clearColor(_clearColor.red, _clearColor.green, _clearColor.blue, _clearColor.alpha);
        gl.clearDepth(1);
        gl.clearStencil(0);
      };

      setDefaultGLStates();

      return _this;
    }

    /**
     * en: draw elements of the scene.<br>
     * ja: sceneが持つオブジェクトを描画します
     * @param {Scene} scene a instance of Scene class
     */


    babelHelpers.createClass(Renderer, [{
      key: 'draw',
      value: function draw(expression) {
        var _this2 = this;

        expression.renderPaths.forEach(function (renderPath) {
          if (!renderPath.scene) {
            return;
          }

          var camera = false;
          renderPath.scene.cameras.forEach(function (elm) {
            if (elm.isMainCamera(renderPath.scene)) {
              camera = elm;
            }
          });

          var gl = _this2._glContext.gl;
          var glem = GLExtensionsManager.getInstance(_this2._glContext);

          var lights = renderPath.scene.lights;

          if (renderPath.fboOfRenderTargetTextures) {
            gl.bindTexture(gl.TEXTURE_2D, null);
            Geometry.clearMaterialCache();
            gl.bindFramebuffer(gl.FRAMEBUFFER, renderPath.fboOfRenderTargetTextures);
          }
          glem.drawBuffers(gl, renderPath.buffersToDraw); // set render target buffers for each RenderPath.

          if (renderPath.clearColor) {
            var color = renderPath.clearColor;
            gl.clearColor(color.x, color.y, color.z, color.w);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
          }

          // draw opacity meshes.
          var opacityMeshes = renderPath.opacityMeshes;
          opacityMeshes.forEach(function (mesh) {
            mesh.draw(lights, camera, renderPath.scene);
          });

          if (camera) {
            renderPath.sortTransparentMeshes(camera);
          }
          // draw transparent meshes.
          var transparentMeshes = renderPath.transparentMeshes;
          transparentMeshes.forEach(function (mesh) {
            mesh.draw(lights, camera, renderPath.scene);
          });

          gl.bindFramebuffer(gl.FRAMEBUFFER, null);
          glem.drawBuffers(gl, [gl.BACK]);
        });
      }

      /**
       * en: clear color/depth/stencil of canvas.<br>
       * ja: canvasのカラー、デプス、ステンシルのいずれか又は全てをクリアします。
       * @param {boolean} color_flg true: clear color, false: don't clear color
       * @param {boolean} depth_flg true: clear depth, false: don't clear depth
       * @param {boolean} stencil_flg  true: clear stencil, false: don't clear stencil
       */

    }, {
      key: 'clearCanvas',
      value: function clearCanvas(color_flg, depth_flg, stencil_flg) {

        var gl = this._glContext.gl;

        var bufferBits = 0;

        if (color_flg === void 0 || color_flg) bufferBits |= gl.COLOR_BUFFER_BIT;
        if (depth_flg === void 0 || depth_flg) bufferBits |= gl.DEPTH_BUFFER_BIT;
        if (stencil_flg === void 0 || stencil_flg) bufferBits |= gl.STENCIL_BUFFER_BIT;

        gl.clear(bufferBits);
      }

      /**
       * en: Get WebGL context.<br>
       * ja: WebGLコンテキストを取得します。
       * @returns {webglcontext} a context of WebGL
       */

    }, {
      key: 'resize',


      /**
       * en: resize canvas and viewport.<br>
       * ja: canvasとビューポートをリサイズします。
       * @param {number} width en: width to resize, ja: リサイズする幅
       * @param {number} height en: height to resize, ja:リサイズする高さ
       */
      value: function resize(width, height) {
        this._glContext.canvas.width = width;
        this._glContext.canvas.height = height;

        this._glContext.gl.viewport(0, 0, width, height);
      }
    }, {
      key: 'glContext',
      get: function get() {
        return this._glContext.gl;
      }
    }]);
    return Renderer;
  }(GLBoostObject);

  var SkeletalMesh = function (_Mesh) {
    babelHelpers.inherits(SkeletalMesh, _Mesh);

    function SkeletalMesh(glBoostContext, geometry, material, rootJointName) {
      babelHelpers.classCallCheck(this, SkeletalMesh);

      var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(SkeletalMesh).call(this, glBoostContext, geometry, material, rootJointName));

      _this._rootJointName = rootJointName;
      _this._jointsHierarchy = null;
      _this._inverseBindMatrices = [];
      return _this;
    }

    babelHelpers.createClass(SkeletalMesh, [{
      key: 'prepareToRender',
      value: function prepareToRender(existCamera_f, lights, renderPasses) {
        this.bakeTransformToGeometry();
        this.multiplyMatrix(Matrix44.identity());
        babelHelpers.get(Object.getPrototypeOf(SkeletalMesh.prototype), 'prepareToRender', this).call(this, existCamera_f, lights, renderPasses);
      }
    }, {
      key: 'jointsHierarchy',
      set: function set(jointsHierarchy) {
        this._jointsHierarchy = jointsHierarchy;
      },
      get: function get() {
        return this._jointsHierarchy;
      }
    }, {
      key: 'rootJointName',
      get: function get() {
        return this._rootJointName;
      }
    }, {
      key: 'inverseBindMatrices',
      set: function set(inverseBindMatrices) {
        this._inverseBindMatrices = inverseBindMatrices;
        this._geometry.setExtraDataForShader('jointN', inverseBindMatrices.length < 4 ? 4 : inverseBindMatrices.length);
      },
      get: function get() {
        return this._inverseBindMatrices;
      }
    }]);
    return SkeletalMesh;
  }(Mesh);

  GLBoost$1['SkeletalMesh'] = SkeletalMesh;

  var Camera = function (_Element) {
    babelHelpers.inherits(Camera, _Element);

    function Camera(glBoostContext, lookat, perspective) {
      babelHelpers.classCallCheck(this, Camera);

      var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Camera).call(this, glBoostContext));

      _this._translate = lookat.eye;
      _this._center = lookat.center;
      _this._up = lookat.up;

      _this._fovy = perspective.fovy;
      _this._aspect = perspective.aspect;
      _this._zNear = perspective.zNear;
      _this._zFar = perspective.zFar;

      _this._dirtyView = true;
      _this._dirtyAsElement = true;
      _this._updateCountAsCameraView = 0;
      _this._dirtyProjection = true;
      _this._updateCountAsCameraProjection = 0;
      _this._mainCamera = {};
      return _this;
    }

    babelHelpers.createClass(Camera, [{
      key: '_needUpdateView',
      value: function _needUpdateView() {
        this._dirtyView = true;
        this._updateCountAsCameraView++;
      }
    }, {
      key: '_needUpdateProjection',
      value: function _needUpdateProjection() {
        this._dirtyProjection = true;
        this._updateCountAsCameraProjection++;
      }
    }, {
      key: 'lookAtRHMatrix',
      value: function lookAtRHMatrix() {
        if (this._dirtyView) {
          this._viewMatrix = Camera.lookAtRHMatrix(this._translate, this._center, this._up);
          this._dirtyView = false;
          return this._viewMatrix.clone();
        } else {
          return this._viewMatrix.clone();
        }
      }
    }, {
      key: 'perspectiveRHMatrix',
      value: function perspectiveRHMatrix() {
        if (this._dirtyProjection) {
          this._projectionMatrix = Camera.perspectiveRHMatrix(this._fovy, this._aspect, this._zNear, this._zFar);
          this._dirtyProjection = false;
          return this._projectionMatrix.clone();
        } else {
          return this._projectionMatrix.clone();
        }
      }
    }, {
      key: 'setAsMainCamera',
      value: function setAsMainCamera(scene) {
        this._mainCamera[scene.toString()] = this;
      }
    }, {
      key: 'isMainCamera',
      value: function isMainCamera(scene) {
        return this._mainCamera[scene.toString()] === this;
      }
    }, {
      key: 'updateCountAsCameraView',
      get: function get() {
        return this._updateCountAsCameraView;
      }
    }, {
      key: 'latestViewStateInfoString',
      get: function get() {
        var tempString = this._accumulateMyAndParentNameWithUpdateInfo(this);
        tempString += '_updateCountAsCameraView_' + this._updateCountAsCameraView;
      }
    }, {
      key: 'updateCountAsCameraProjection',
      get: function get() {
        return this._updateCountAsCameraProjection;
      }
    }, {
      key: 'translate',
      set: function set(vec) {
        babelHelpers.set(Object.getPrototypeOf(Camera.prototype), 'translate', vec, this);
        this._needUpdateView();
      },
      get: function get() {
        return babelHelpers.get(Object.getPrototypeOf(Camera.prototype), 'translate', this);
      }
    }, {
      key: 'eye',
      set: function set(vec) {
        babelHelpers.set(Object.getPrototypeOf(Camera.prototype), 'translate', vec, this);
        this._needUpdateView();
      },
      get: function get() {
        return this._translate;
      }
    }, {
      key: 'center',
      set: function set(vec) {
        if (this._center.isEqual(vec)) {
          return;
        }
        this._center = vec;
        this._needUpdateView();
      },
      get: function get() {
        return this._center;
      }
    }, {
      key: 'up',
      set: function set(vec) {
        if (this._up.isEqual(vec)) {
          return;
        }
        this._up = vec;
        this._needUpdateView();
      },
      get: function get() {
        return this._up;
      }
    }, {
      key: 'fovy',
      set: function set(value) {
        if (this._fovy === value) {
          return;
        }
        this._fovy = value;
        this._needUpdateProjection();
      },
      get: function get() {
        return this._fovy;
      }
    }, {
      key: 'aspect',
      set: function set(value) {
        if (this._aspect === value) {
          return;
        }
        this._aspect = value;
        this._needUpdateProjection();
      },
      get: function get() {
        return this._aspect;
      }
    }, {
      key: 'zNear',
      set: function set(value) {
        if (this._zNear === value) {
          return;
        }
        this._zNear = value;
        this._needUpdateProjection();
      },
      get: function get() {
        return this._zNear;
      }
    }, {
      key: 'zFar',
      set: function set(value) {
        if (this._zFar === value) {
          return;
        }
        this._zFar = value;
        this._needUpdateProjection();
      },
      get: function get() {
        return this._zFar;
      }
    }], [{
      key: 'lookAtRHMatrix',
      value: function lookAtRHMatrix(eye, center, up) {

        var f = Vector3.normalize(Vector3.subtract(center, eye));
        var s = Vector3.normalize(Vector3.cross(f, up));
        var u = Vector3.cross(s, f);

        return new Matrix44(s.x, s.y, s.z, -Vector3.dotProduct(s, eye), u.x, u.y, u.z, -Vector3.dotProduct(u, eye), -f.x, -f.y, -f.z, Vector3.dotProduct(f, eye), 0, 0, 0, 1);
      }
    }, {
      key: 'perspectiveRHMatrix',
      value: function perspectiveRHMatrix(fovy, aspect, zNear, zFar) {

        var yscale = 1.0 / Math.tan(0.5 * fovy * Math.PI / 180);
        var xscale = yscale / aspect;

        return new Matrix44(xscale, 0.0, 0.0, 0.0, 0.0, yscale, 0.0, 0.0, 0.0, 0.0, -(zFar + zNear) / (zFar - zNear), -(2.0 * zFar * zNear) / (zFar - zNear), 0.0, 0.0, -1.0, 0.0);
      }
    }]);
    return Camera;
  }(Element);

  Camera._mainCamera = null;

  /**
   * [en] This Scene class is the top level element of scene graph hierarchy.
   *       To render scene, pass this scene element to Renderer.draw method.<br>
   * [ja] このSceneクラスはシーングラフ階層のトップレベルに位置する要素です。
   *       シーンをレンダリングするには、このscene要素をRenderer.drawメソッドに渡します。
   */

  var Scene = function (_Group) {
    babelHelpers.inherits(Scene, _Group);


    /**
     * [en] constructor
     * [ja] コンストラクタ
     * @param {HTMLCanvas|string} canvas [en] canvas or canvas' id string. [ja] canvasまたはcanvasのid文字列
     */

    function Scene(glBoostContext) {
      babelHelpers.classCallCheck(this, Scene);

      var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Scene).call(this, glBoostContext));

      _this._gl = _this._glContext.gl;
      _this._currentAnimationInputValues = {};
      _this._reset();
      return _this;
    }

    babelHelpers.createClass(Scene, [{
      key: '_reset',
      value: function _reset() {
        this._meshes = [];
        this._lights = [];
        this._cameras = [];
      }
    }, {
      key: '_setDirtyToAnimatedElement',
      value: function _setDirtyToAnimatedElement(inputName) {
        var element = arguments.length <= 1 || arguments[1] === undefined ? this : arguments[1];

        if (element.hasAnimation(inputName)) {
          element._needUpdate();
        }

        if (element instanceof Group || element instanceof Scene) {
          var children = element.getChildren();
          for (var i = 0; i < children.length; i++) {
            this._setDirtyToAnimatedElement(inputName, children[i]);
          }
        }
      }
    }, {
      key: '_getCurrentAnimationInputValue',
      value: function _getCurrentAnimationInputValue(inputName) {
        return this._currentAnimationInputValues[inputName];
      }

      /**
       * [en] Set animation input value (for instance frame value), This value affect all child elements in this scene graph (recursively).<br>
       * [ja] アニメーションのための入力値（例えばフレーム値）をセットします。この値はシーングラフに属する全ての子孫に影響します。
       * @param {string} inputName [en] inputName name of input value. [ja] 入力値の名前
       * @param {number|Vector2|Vector3|Vector4|*} inputValue [en] input value of animation. [ja] アニメーションの入力値
       */

    }, {
      key: 'setCurrentAnimationValue',
      value: function setCurrentAnimationValue(inputName, inputValue) {
        this._setDirtyToAnimatedElement(inputName);
        this._currentAnimationInputValues[inputName] = inputValue;
      }

      /**
       * [en] Prepare for Rendering. You have to call this method before Renderer.draw method.
       * [ja] レンダリングのための前処理を行います。Renderer.drawメソッドの前にこのメソッドを呼ぶ必要があります。
       */

    }, {
      key: 'prepareToRender',
      value: function prepareToRender() {
        var _this2 = this;

        this._reset();

        (function setParentRecursively(elem) {
          if (elem instanceof Group) {
            var children = elem.getChildren();
            for (var i = 0; i < children.length; i++) {
              children[i]._parent = elem;
              setParentRecursively(children[i]);
            }
          }
        })(this);

        var collectMeshes = function collectMeshes(elem) {
          if (elem instanceof Group) {
            var children = elem.getChildren();
            var meshes = [];
            children.forEach(function (child) {
              var childMeshes = collectMeshes(child);
              meshes = meshes.concat(childMeshes);
            });
            return meshes;
          } else if (elem instanceof Mesh) {
            return [elem];
          } else {
            return [];
          }
        };

        this._meshes = [];
        this._elements.forEach(function (elm) {
          _this2._meshes = _this2._meshes.concat(collectMeshes(elm));
        });

        var collectLights = function collectLights(elem) {
          if (elem instanceof Group) {
            var children = elem.getChildren();
            var lights = [];
            children.forEach(function (child) {
              var childLights = collectLights(child);
              lights = lights.concat(childLights);
            });
            return lights;
          } else if (elem instanceof AbstractLight) {
            return [elem];
          } else {
            return [];
          }
        };

        this._lights = [];
        this._elements.forEach(function (elm) {
          _this2._lights = _this2._lights.concat(collectLights(elm));
        });

        var existCamera_f = false;
        var collectCameras = function collectCameras(elem) {
          if (elem instanceof Group) {
            var children = elem.getChildren();
            var cameras = [];
            children.forEach(function (child) {
              var childCameras = collectCameras(child);
              cameras = cameras.concat(childCameras);
            });
            return cameras;
          } else if (elem instanceof Camera) {
            existCamera_f = true;
            return [elem];
          } else {
            return [];
          }
        };

        this._cameras = [];
        this._elements.forEach(function (elm) {
          _this2._cameras = _this2._cameras.concat(collectCameras(elm));
        });
        if (this._cameras.length !== 0) {
          this._cameras[0].setAsMainCamera(this);
        }

        this._meshes.forEach(function (mesh) {
          mesh.prepareToRender(existCamera_f, _this2._lights);
        });
      }

      /**
       * [en] Get child elements which belong to this scene.<br>
       * [ja] このシーンに属していた子供の要素の配列を返します。
       * @return {Array<Element>} [en] child elements of this scene. [ja] このシーンの子供の要素
       */

    }, {
      key: 'getChildren',
      value: function getChildren() {
        return this._elements;
      }

      /**
       * [en] Get child elements which belong to this scene.<br>
       * [ja] このシーンに属していた子供の要素の配列を返します。
       * @return {Array<Element>} [en] child elements of this scene. [ja] このシーンの子供の要素
       */

    }, {
      key: 'elements',
      get: function get() {
        return this._elements;
      }

      /**
       * [en] Get child meshes which belong to this scene.<br>
       * [ja] このシーンに属していた子供のMesh要素の配列を返します。
       * @return {Array<Mesh>} [en] child meshes of this scene. [ja] このシーンの子供のMesh要素
       */

    }, {
      key: 'meshes',
      get: function get() {
        return this._meshes;
      }

      /**
       * [en] Get child lights which belong to this scene.<br>
       * [ja] このシーンに属していた子供のLight要素の配列を返します。
       * @return {Array<AbstractLight>} [en] child lights of this scene. [ja] このシーンの子供のLight要素
       */

    }, {
      key: 'lights',
      get: function get() {
        return this._lights;
      }

      /**
       * [en] Get child cameras which belong to this scene.<br>
       * [ja] このシーンに属していた子供のCamera要素の配列を返します。
       * @return {Array<Camera>} [en] child cameras of this scene. [ja] このシーンの子供のCamera要素
       */

    }, {
      key: 'cameras',
      get: function get() {
        return this._cameras;
      }
    }]);
    return Scene;
  }(Group);

  /**
   * [en] This is the abstract class for all texture classes. Don't use this class directly.<br>
   * [ja] 全てのテクスチャクラスのための抽象クラスです。直接このクラスは使わないでください。
   */

  var AbstractTexture = function (_GLBoostObject) {
    babelHelpers.inherits(AbstractTexture, _GLBoostObject);


    /**
     * [en] The constructor of PointLight class. Do not construct this class directly.<br>
     * [ja] PointLightクラスのコンストラクタ。直接このクラスを生成しようとしないでください。
     *
     * * @param {HTMLCanvas|string} canvas [en] canvas or canvas' id string. [ja] canvasまたはcanvasのid文字列
     */

    function AbstractTexture(glBoostContext) {
      babelHelpers.classCallCheck(this, AbstractTexture);

      var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(AbstractTexture).call(this, glBoostContext));

      if (_this.constructor === AbstractTexture) {
        throw new TypeError('Cannot construct AbstractTexture instances directly.');
      }

      _this._name = '';
      return _this;
    }

    /**
     * [en] get the WebGL texture resource within this class. <br />
     * [ja] このクラス内部で管理しているWebGLテクスチャリソースを取得します。
     *
     * @returns {null|*} [en] WebGL texture resouce. [ja] WebGLテクスチャリソース
     */


    babelHelpers.createClass(AbstractTexture, [{
      key: 'setUp',


      /**
       * [en] bind the texture. <br />
       * [ja] テクスチャをバインドします。
       */
      value: function setUp() {
        var gl = this._glContext.gl;
        if (this._texture === null) {
          return false;
        }
        gl.bindTexture(gl.TEXTURE_2D, this._texture);

        return true;
      }

      /**
       * [en] unbind the texture. <br />
       * [ja] テクスチャをバインド解除します。
       */

    }, {
      key: 'tearDown',
      value: function tearDown() {
        var gl = this._glContext.gl;
        gl.bindTexture(gl.TEXTURE_2D, null);
      }
    }, {
      key: '_isPowerOfTwo',


      /**
       * [en] check whether or not this texture size is power of two. <br />
       * [ja] テクスチャサイズが２の累乗かどうかを返します
       *
       * @param {number} x [en] texture size. [ja] テクスチャサイズ
       * @returns {boolean} [en] check whether or not the size x is power of two. [ja] xが２の累乗かどうか
       */
      value: function _isPowerOfTwo(x) {
        return (x & x - 1) == 0;
      }
    }, {
      key: 'glTextureResource',
      get: function get() {
        return this._texture;
      }
    }, {
      key: 'name',
      set: function set(name) {
        this._name = name;
      },
      get: function get() {
        return this._name;
      }
    }, {
      key: 'width',
      get: function get() {
        return this._width;
      }
    }, {
      key: 'height',
      get: function get() {
        return this._height;
      }
    }]);
    return AbstractTexture;
  }(GLBoostObject);

  var MutableTexture = function (_AbstractTexture) {
    babelHelpers.inherits(MutableTexture, _AbstractTexture);

    function MutableTexture(glBoostContext, width, height) {
      var level = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
      var internalFormat = arguments.length <= 4 || arguments[4] === undefined ? 0x1908 : arguments[4];
      var format = arguments.length <= 5 || arguments[5] === undefined ? 0x1908 : arguments[5];
      var type = arguments.length <= 6 || arguments[6] === undefined ? 0x1401 : arguments[6];
      var magFileter = arguments.length <= 7 || arguments[7] === undefined ? 0x2601 : arguments[7];
      var minFilter = arguments.length <= 8 || arguments[8] === undefined ? 0x2601 : arguments[8];
      var wrapS = arguments.length <= 9 || arguments[9] === undefined ? 0x812F : arguments[9];
      var wrapT = arguments.length <= 10 || arguments[10] === undefined ? 0x812F : arguments[10];
      babelHelpers.classCallCheck(this, MutableTexture);

      var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(MutableTexture).call(this, glBoostContext)); // gl.CLAMP_TO_EDGE


      _this._isTextureReady = false;
      _this._texture = null;
      _this._width = width;
      _this._height = height;
      _this._fbo = null;
      _this._colorAttachmentId = null;
      _this._depthAttachmentId = null;

      var gl = _this._glContext.gl;

      //var glem = GLExtensionsManager.getInstance(gl);

      _this._texture = _this._glContext.createTexture(_this);
      gl.bindTexture(gl.TEXTURE_2D, _this._texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, magFileter);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minFilter);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrapS);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrapT);
      gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, width, height, 0, format, type, null);
      gl.bindTexture(gl.TEXTURE_2D, null);

      return _this;
    }

    babelHelpers.createClass(MutableTexture, [{
      key: 'colorAttachment',
      set: function set(attachmentId) {
        this._colorAttachmentId = attachmentId;
      },
      get: function get() {
        return this._colorAttachmentId;
      }
    }, {
      key: 'depthAttachment',
      set: function set(attachmentId) {
        this._depthAttachmentId = attachmentId;
      },
      get: function get() {
        return this._depthAttachmentId;
      }
    }, {
      key: 'frameBufferObject',
      set: function set(fbo) {
        this._fbo = fbo;
      },
      get: function get() {
        return this._fbo;
      }
    }]);
    return MutableTexture;
  }(AbstractTexture);

  var Joint = function (_Element) {
    babelHelpers.inherits(Joint, _Element);

    function Joint(glBoostContext) {
      babelHelpers.classCallCheck(this, Joint);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Joint).call(this, glBoostContext));
    }

    return Joint;
  }(Element);

  var Texture = function (_AbstractTexture) {
    babelHelpers.inherits(Texture, _AbstractTexture);

    function Texture(glBoostContext, src) {
      var parameters = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
      babelHelpers.classCallCheck(this, Texture);

      var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Texture).call(this, glBoostContext));

      _this._isTextureReady = false;
      _this._texture = null;

      _this._parameters = parameters;

      if (typeof src === 'string') {
        _this.generateTextureFromUri(src);
      } else {
        _this.generateTextureFromImageData(src);
      }
      return _this;
    }

    babelHelpers.createClass(Texture, [{
      key: '_getParameter',
      value: function _getParameter(paramName) {
        var isParametersExist = false;
        if (this._parameters != null) {
          isParametersExist = true;
        }
        var params = this._parameters;

        switch (paramName) {
          case 'flipY':
            if (isParametersExist && params[paramName]) {
              return params[paramName];
            } else {
              return false;
            }
        }
      }
    }, {
      key: 'generateTextureFromUri',
      value: function generateTextureFromUri(imageUri) {
        var _this2 = this;

        this._img = new Image();
        this._img.crossOrigin = 'Anonymous';
        this._img.onload = function () {
          var gl = _this2._glContext.gl;
          var glem = GLExtensionsManager.getInstance(_this2._glContext);

          _this2._width = _this2._img.width;
          _this2._height = _this2._img.height;

          var texture = _this2._glContext.createTexture(_this2);
          gl.bindTexture(gl.TEXTURE_2D, texture);

          gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, _this2._getParameter('flipY'));
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, _this2._img);

          if (_this2._isPowerOfTwo(_this2._width) && _this2._isPowerOfTwo(_this2._height)) {
            if (glem.extTFA) {
              gl.texParameteri(gl.TEXTURE_2D, glem.extTFA.TEXTURE_MAX_ANISOTROPY_EXT, 4);
            }
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
            gl.generateMipmap(gl.TEXTURE_2D);
          } else {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
          }
          gl.bindTexture(gl.TEXTURE_2D, null);

          _this2._texture = texture;
          _this2._isTextureReady = true;
        };

        this._img.src = imageUri;
      }
    }, {
      key: 'generateTextureFromImageData',
      value: function generateTextureFromImageData(imageData) {
        var gl = this.this._glContext.gl;
        var glem = GLExtensionsManager.getInstance(this._glContext);

        this._width = imageData.width;
        this._height = imageData.height;
        var texture = this._glContext.createTexture(this);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        //gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
        if (this._isPowerOfTwo(this._width) && this._isPowerOfTwo(this._height)) {
          if (glem.extTFA) {
            gl.texParameteri(gl.TEXTURE_2D, glem.extTFA.TEXTURE_MAX_ANISOTROPY_EXT, 4);
          }
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
          gl.generateMipmap(gl.TEXTURE_2D);
        } else {
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        }
        gl.bindTexture(gl.TEXTURE_2D, null);

        this._texture = texture;
        this._isTextureReady = true;

        this._img = imageData;
      }
    }, {
      key: 'isTextureReady',
      get: function get() {
        return this._isTextureReady;
      }
    }, {
      key: 'isImageAssignedForTexture',
      get: function get() {
        return typeof this._img == 'undefined';
      }
    }, {
      key: 'width',
      get: function get() {
        return this._width;
      }
    }, {
      key: 'height',
      get: function get() {
        return this._height;
      }
    }]);
    return Texture;
  }(AbstractTexture);

  var ParticleShaderSource = function () {
    function ParticleShaderSource() {
      babelHelpers.classCallCheck(this, ParticleShaderSource);
    }

    babelHelpers.createClass(ParticleShaderSource, [{
      key: 'VSDefine_ParticleShaderSource',
      value: function VSDefine_ParticleShaderSource(in_, out_, f) {
        var shaderText = '';
        shaderText += in_ + ' vec3 aVertex_particleCenterPos;\n';
        shaderText += 'uniform mat4 projectionMatrix;\n';
        shaderText += 'uniform mat4 modelViewMatrix;\n';

        return shaderText;
      }
    }, {
      key: 'VSTransform_ParticleShaderSource',
      value: function VSTransform_ParticleShaderSource(existCamera_f, f) {
        var shaderText = '';

        shaderText += '  vec4 cameraCenterPos = modelViewMatrix * vec4(aVertex_particleCenterPos, 1.0);\n';
        shaderText += '  vec4 cameraEachPointPos = cameraCenterPos + vec4(aVertex_position - aVertex_particleCenterPos, 1.0);\n';
        shaderText += '  gl_Position = projectionMatrix * cameraEachPointPos;\n';

        return shaderText;
      }
    }, {
      key: 'prepare_ParticleShaderSource',
      value: function prepare_ParticleShaderSource(gl, shaderProgram, vertexAttribs, existCamera_f) {
        var vertexAttribsAsResult = [];

        shaderProgram['vertexAttribute_' + 'particleCenterPos'] = gl.getAttribLocation(shaderProgram, 'aVertex_' + 'particleCenterPos');
        gl.enableVertexAttribArray(shaderProgram['vertexAttribute_' + 'particleCenterPos']);
        vertexAttribsAsResult.push('particleCenterPos');

        shaderProgram.projectionMatrix = gl.getUniformLocation(shaderProgram, 'projectionMatrix');
        shaderProgram.modelViewMatrix = gl.getUniformLocation(shaderProgram, 'modelViewMatrix');

        return vertexAttribsAsResult;
      }
    }]);
    return ParticleShaderSource;
  }();

  /**
   * This Particle class handles particles expressions.
   * You can define particles behaviors in a custom vertex shader.
   * These particles are processed in GPU, so this is a very fast solution of particles expressions.
   */

  var Particle = function (_Geometry) {
    babelHelpers.inherits(Particle, _Geometry);


    /**
     * This is Particle class's constructor
     *
     * @param {Object} centerPointData [en] a JSON object consisted of position (by the particle) array and the other data (by the particle) array.
     * @param {Number} particleWidth Width of each particle
     * @param {Number} particleHeight Height of each particle
     * @param {Object} [en] a JSON which has other vertex attribute arrays you want (by the vertex of quad particle).
     * @param {CanvasElement or String} Canvas Element which is generation source of WebGL context in current use or String which indicates the Canvas Element in jQuery like query string
     */

    function Particle(glBoostContext, centerPointData, particleWidth, particleHeight, customVertexAttributes, performanceHint) {
      babelHelpers.classCallCheck(this, Particle);

      var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Particle).call(this, glBoostContext));

      _this._setupVertexData(centerPointData, particleWidth / 2.0, particleHeight / 2.0, customVertexAttributes, performanceHint);
      return _this;
    }

    babelHelpers.createClass(Particle, [{
      key: '_setupVertexAndIndexData',
      value: function _setupVertexAndIndexData(centerPointData, pHalfWidth, pHalfHeight, customVertexAttributes, needDefaultWhiteColor) {
        var indices = this.indices;
        indices = [];
        var positionArray = centerPointData.position;

        for (var i = 0; i < positionArray.length; i++) {
          var offset = i * 4;
          indices.push(offset); // start Quad
          indices.push(offset + 1); //
          indices.push(offset + 2); // end Quad
          indices.push(offset + 3); //
          if (i === positionArray.length - 1) {
            break;
          }
          indices.push(offset + 3); // degenerated
          indices.push(offset + 4); // move another Particle
        }

        this.positions = [];
        var positions = this.positions;

        // if array, convert to vector[2/3/4]
        for (var i = 0; i < positionArray.length; i++) {
          positionArray[i] = MathUtil.arrayToVector(positionArray[i]);
        }

        for (var i = 0; i < positionArray.length; i++) {
          positions.push(new Vector3(positionArray[i].x - pHalfWidth, positionArray[i].y + pHalfHeight, positionArray[i].z));
          positions.push(new Vector3(positionArray[i].x - pHalfWidth, positionArray[i].y - pHalfHeight, positionArray[i].z));
          positions.push(new Vector3(positionArray[i].x + pHalfWidth, positionArray[i].y + pHalfHeight, positionArray[i].z));
          positions.push(new Vector3(positionArray[i].x + pHalfWidth, positionArray[i].y - pHalfHeight, positionArray[i].z));
        }
        this.centerPositions = [];
        var centerPositions = this.centerPositions;

        for (var i = 0; i < positionArray.length; i++) {
          centerPositions.push(new Vector3(positionArray[i].x, positionArray[i].y, positionArray[i].z));
          centerPositions.push(new Vector3(positionArray[i].x, positionArray[i].y, positionArray[i].z));
          centerPositions.push(new Vector3(positionArray[i].x, positionArray[i].y, positionArray[i].z));
          centerPositions.push(new Vector3(positionArray[i].x, positionArray[i].y, positionArray[i].z));
        }
        this.texcoords = [];
        var texcoords = this.texcoords;
        for (var i = 0; i < positionArray.length; i++) {
          texcoords.push(new Vector2(0, 0));
          texcoords.push(new Vector2(0, 1));
          texcoords.push(new Vector2(1, 0));
          texcoords.push(new Vector2(1, 1));
        }

        this.normals = [];
        var normals = this.normals;
        var normal = new Vector3(0, 0, 1);
        for (var i = 0; i < positionArray.length; i++) {
          for (var j = 0; j < 4; j++) {
            normals.push(normal);
          }
        }
        this.pointData = {};
        var pointData = this.pointData;

        for (var type in centerPointData) {
          if (type !== 'position') {
            pointData[type] = [];
            for (var i = 0; i < positionArray.length; i++) {
              for (var j = 0; j < 4; j++) {
                pointData[type].push(centerPointData[type][i]);
              }
            }
          }
        }

        var object = {
          position: positions,
          texcoord: texcoords,
          normal: normals,
          particleCenterPos: centerPositions
        };

        if (needDefaultWhiteColor) {
          this.colors = [];
          var colors = this.colors;
          var vertexColor = new Vector4(1, 1, 1, 1);
          for (var i = 0; i < positionArray.length; i++) {
            for (var j = 0; j < 4; j++) {
              colors.push(vertexColor);
            }
          }
          object.color = colors;
        }

        var tempAttributes = ArrayUtil.merge(object, pointData);
        var completeAttributes = ArrayUtil.merge(tempAttributes, customVertexAttributes);

        return {
          vertexAttributes: completeAttributes,
          indexArray: [indices]
        };
      }
    }, {
      key: '_updateVertexAndIndexData',
      value: function _updateVertexAndIndexData(centerPointData, pHalfWidth, pHalfHeight, customVertexAttributes, needDefaultWhiteColor) {
        var positionArray = centerPointData.position;
        var idx = 0;
        var positions = this.positions;
        for (var i = 0; i < positionArray.length; i++) {
          positions[idx + 0].x = positionArray[i].x - pHalfWidth;
          positions[idx + 0].y = positionArray[i].y + pHalfHeight;
          positions[idx + 0].z = positionArray[i].z;
          positions[idx + 1].x = positionArray[i].x - pHalfWidth;
          positions[idx + 1].y = positionArray[i].y - pHalfHeight;
          positions[idx + 1].z = positionArray[i].z;
          positions[idx + 2].x = positionArray[i].x + pHalfWidth;
          positions[idx + 2].y = positionArray[i].y + pHalfHeight;
          positions[idx + 2].z = positionArray[i].z;
          positions[idx + 3].x = positionArray[i].x + pHalfWidth;
          positions[idx + 3].y = positionArray[i].y - pHalfHeight;
          positions[idx + 3].z = positionArray[i].z;
          idx += 4;
        }

        var centerPositions = this.centerPositions;
        idx = 0;
        for (var i = 0; i < positionArray.length; i++) {
          centerPositions[idx].x = positionArray[i].x;
          centerPositions[idx].y = positionArray[i].y;
          centerPositions[idx].z = positionArray[i].z;
          centerPositions[idx + 1].x = positionArray[i].x;
          centerPositions[idx + 1].y = positionArray[i].y;
          centerPositions[idx + 1].z = positionArray[i].z;
          centerPositions[idx + 2].x = positionArray[i].x;
          centerPositions[idx + 2].y = positionArray[i].y;
          centerPositions[idx + 2].z = positionArray[i].z;
          centerPositions[idx + 3].x = positionArray[i].x;
          centerPositions[idx + 3].y = positionArray[i].y;
          centerPositions[idx + 3].z = positionArray[i].z;
          idx += 4;
        }
        idx = 0;
        var pointData = this.pointData;
        for (var type in centerPointData) {
          if (type !== 'position') {
            pointData[type] = [];
            for (var i = 0; i < positionArray.length; i++) {
              for (var j = 0; j < 4; j++) {
                pointData[type][idx].x = centerPointData[type][i].x;
                pointData[type][idx].y = centerPointData[type][i].y;
                pointData[type][idx].z = centerPointData[type][i].z;
                idx++;
              }
            }
          }
        }

        var object = {
          position: positions,
          texcoord: this.texcoords,
          normal: this.normals,
          particleCenterPos: centerPositions
        };

        if (needDefaultWhiteColor) {
          object.color = this.colors;
        }

        var tempAttributes = ArrayUtil.merge(object, pointData);
        var completeAttributes = ArrayUtil.merge(tempAttributes, customVertexAttributes);

        return {
          vertexAttributes: completeAttributes,
          indexArray: [this.indices]
        };
      }
    }, {
      key: '_setupVertexData',
      value: function _setupVertexData(centerPointData, pHalfWidth, pHalfHeight, customVertexAttributes, performanceHint) {
        var result = this._setupVertexAndIndexData(centerPointData, pHalfWidth, pHalfHeight, customVertexAttributes, true);

        this.setVerticesData(result.vertexAttributes, result.indexArray, GLBoost$1.TRIANGLE_STRIP, performanceHint);
      }
    }, {
      key: 'updateVerticesData',
      value: function updateVerticesData(centerPointData, particleWidth, particleHeight, customVertexAttributes) {
        //var result = this._setupVertexAndIndexData(centerPointData, particleWidth/2.0, particleHeight/2.0, customVertexAttributes, false);
        var result = this._updateVertexAndIndexData(centerPointData, particleWidth / 2.0, particleHeight / 2.0, customVertexAttributes, false);
        babelHelpers.get(Object.getPrototypeOf(Particle.prototype), 'updateVerticesData', this).call(this, result.vertexAttributes);
      }
    }, {
      key: 'prepareToRender',
      value: function prepareToRender(existCamera_f, pointLight, meshMaterial, renderPasses, mesh) {
        // before prepareForRender of 'Geometry' class, a new 'BlendShapeShader'(which extends default shader) is assigned.
        var canvas = this._canvas;

        if (meshMaterial) {
          this._materialForBillboard = meshMaterial;
        } else {
          this._materialForBillboard = this._defaultMaterial;
        }

        var ParticleShader = function (_materialForBillboard) {
          babelHelpers.inherits(ParticleShader, _materialForBillboard);

          function ParticleShader(glBoostContext, basicShader) {
            babelHelpers.classCallCheck(this, ParticleShader);

            var _this2 = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(ParticleShader).call(this, glBoostContext, basicShader, ParticleShaderSource));

            ParticleShader.mixin(ParticleShaderSource);

            _this2._meshTransformUpdateCount = -9999;
            _this2._cameraViewUpdateCount = -9999;
            _this2._cameraProjectionUpdateCount = -9999;
            return _this2;
          }

          babelHelpers.createClass(ParticleShader, [{
            key: 'setUniforms',
            value: function setUniforms(gl, glslProgram, material, camera, mesh) {
              babelHelpers.get(Object.getPrototypeOf(ParticleShader.prototype), 'setUniforms', this).call(this, gl, glslProgram, material, camera, mesh);

              if (this._cameraProjectionUpdateCount !== mesh.updateCountAsCameraProjection) {
                gl.uniformMatrix4fv(glslProgram.projectionMatrix, false, camera.perspectiveRHMatrix().flatten());
              }

              if (this._cameraViewUpdateCount !== mesh.updateCountAsCameraView || this._meshTransformUpdateCount !== mesh.updateCountAsElement) {
                gl.uniformMatrix4fv(glslProgram.modelViewMatrix, false, camera.lookAtRHMatrix().multiply(mesh.transformMatrix).flatten());
              }

              this._meshTransformUpdateCount = mesh.updateCountAsElement;
              this._cameraViewUpdateCount = camera.updateCountAsCameraView;
              this._cameraProjectionUpdateCount = camera.updateCountAsCameraProjection;

              return true; // still dirty
            }
          }]);
          return ParticleShader;
        }(this._materialForBillboard.shaderClass);

        if (meshMaterial) {
          meshMaterial.shaderClass = ParticleShader;
        } else {
          this._defaultMaterial.shaderClass = ParticleShader;
        }

        /*
         let materials = this._materials;
         if (materials) {
         for (let i=0; i<materials.length;i++) {
         materials[i].shader = new BlendShapeShader(this._canvas);
         }
         }
         */

        babelHelpers.get(Object.getPrototypeOf(Particle.prototype), 'prepareToRender', this).call(this, existCamera_f, pointLight, meshMaterial, renderPasses, mesh);
      }
    }]);
    return Particle;
  }(Geometry);

  GLBoost$1["Particle"] = Particle;

  var Sphere = function (_Geometry) {
    babelHelpers.inherits(Sphere, _Geometry);

    function Sphere(glBoostContext, radius, widthSegments, heightSegments, vertexColor) {
      babelHelpers.classCallCheck(this, Sphere);

      var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Sphere).call(this, glBoostContext));

      _this._setupVertexData(radius, widthSegments, heightSegments, vertexColor);
      return _this;
    }

    babelHelpers.createClass(Sphere, [{
      key: '_setupVertexData',
      value: function _setupVertexData(radius, widthSegments, heightSegments, vertexColor) {

        // See below:
        // WebGL Lesson 11 - spheres, rotation matrices, and mouse events
        // http://learningwebgl.com/blog/?p=1253
        //
        var positions = [];
        var texcoords = [];
        var colors = [];
        var normals = [];

        if (!vertexColor) {
          vertexColor = new Vector4(1, 1, 1, 1);
        }

        for (var latNumber = 0; latNumber <= heightSegments; latNumber++) {
          var theta = latNumber * Math.PI / heightSegments;
          var sinTheta = Math.sin(theta);
          var cosTheta = Math.cos(theta);

          for (var longNumber = 0; longNumber <= widthSegments; longNumber++) {
            var phi = longNumber * 2 * Math.PI / widthSegments;
            var sinPhi = Math.sin(phi);
            var cosPhi = Math.cos(phi);

            var x = radius * cosPhi * sinTheta;
            var y = radius * cosTheta;
            var z = radius * sinPhi * sinTheta;
            var position = new Vector3(x, y, z);
            positions.push(position);
            var u = 1 - longNumber / widthSegments;
            var v = latNumber / heightSegments;
            texcoords.push(new Vector2(u, v));
            colors.push(vertexColor);
            normals.push(Vector3.normalize(position));
          }
        }

        // first    first+1
        //    +-------+
        //    |     / |
        //    |   /   |
        //    | /     |
        //    +-------+
        // second   second+1
        //
        var indices = [];
        for (var latNumber = 0; latNumber < heightSegments; latNumber++) {
          for (var longNumber = 0; longNumber < widthSegments; longNumber++) {
            var first = latNumber * (widthSegments + 1) + longNumber;
            var second = first + widthSegments + 1;

            indices.push(first + 1);
            indices.push(second);
            indices.push(first);

            indices.push(first + 1);
            indices.push(second + 1);
            indices.push(second);
          }
        }

        var object = {
          position: positions,
          color: colors,
          texcoord: texcoords,
          normal: normals
        };

        this.setVerticesData(object, [indices], GLBoost$1.TRIANGLES);
      }
    }]);
    return Sphere;
  }(Geometry);

  GLBoost$1["Sphere"] = Sphere;

  var Plane = function (_Geometry) {
    babelHelpers.inherits(Plane, _Geometry);

    function Plane(glBoostContext, width, height, uSpan, vSpan, customVertexAttributes) {
      babelHelpers.classCallCheck(this, Plane);

      var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Plane).call(this, glBoostContext));

      _this._setupVertexData(width, height, uSpan, vSpan, customVertexAttributes);
      return _this;
    }

    babelHelpers.createClass(Plane, [{
      key: '_setupVertexData',
      value: function _setupVertexData(width, height, uSpan, vSpan, customVertexAttributes) {

        var positions = [];

        for (var i = 0; i <= vSpan; i++) {
          for (var j = 0; j <= uSpan; j++) {
            positions.push(new Vector3((j / uSpan - 1 / 2) * width, 0, (i / vSpan - 1 / 2) * height));
          }
        }

        var indices = [];
        for (var i = 0; i < vSpan; i++) {
          var degenerate_left_index = 0;
          var degenerate_right_index = 0;
          for (var j = 0; j <= uSpan; j++) {
            indices.push(i * (uSpan + 1) + j);
            indices.push((i + 1) * (uSpan + 1) + j);
            if (j === 0) {
              degenerate_left_index = (i + 1) * (uSpan + 1) + j;
            } else if (j === uSpan) {
              degenerate_right_index = (i + 1) * (uSpan + 1) + j;
            }
          }
          indices.push(degenerate_right_index);
          indices.push(degenerate_left_index);
        }

        var colors = [];
        var vertexColor = new Vector4(1, 1, 1, 1);
        for (var i = 0; i <= vSpan; i++) {
          for (var j = 0; j <= uSpan; j++) {
            colors.push(vertexColor);
          }
        }

        var texcoords = [];
        for (var i = 0; i <= vSpan; i++) {
          for (var j = 0; j <= uSpan; j++) {
            texcoords.push(new Vector2(j / uSpan, 1.0 - i / vSpan));
          }
        }

        var normal = new Vector3(0, 1, 0);
        var normals = [];
        for (var i = 0; i <= vSpan; i++) {
          for (var j = 0; j <= uSpan; j++) {
            normals.push(normal);
          }
        }

        var object = {
          position: positions,
          color: colors,
          texcoord: texcoords,
          normal: normals
        };

        var completeAttributes = ArrayUtil.merge(object, customVertexAttributes);
        this.setVerticesData(completeAttributes, [indices], GLBoost$1.TRIANGLE_STRIP);
      }
    }]);
    return Plane;
  }(Geometry);

  GLBoost$1["Plane"] = Plane;

  var Cube = function (_Geometry) {
    babelHelpers.inherits(Cube, _Geometry);

    function Cube(glBoostContext, widthVector, vertexColor) {
      babelHelpers.classCallCheck(this, Cube);


      // if array, convert to vector[2/3/4]

      var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Cube).call(this, glBoostContext));

      widthVector = MathUtil.arrayToVector(widthVector);
      vertexColor = MathUtil.arrayToVector(vertexColor);

      _this._setupVertexData(widthVector.divide(2.0), vertexColor);
      return _this;
    }

    babelHelpers.createClass(Cube, [{
      key: '_setupVertexData',
      value: function _setupVertexData(widthVector, vertexColor) {
        var indices = [3, 1, 0, 2, 1, 3, 4, 5, 7, 7, 5, 6, 8, 9, 11, 11, 9, 10, 15, 13, 12, 14, 13, 15, 19, 17, 16, 18, 17, 19, 20, 21, 23, 23, 21, 22];

        var positions = [
        // upper
        new Vector3(-widthVector.x, widthVector.y, -widthVector.z), new Vector3(widthVector.x, widthVector.y, -widthVector.z), new Vector3(widthVector.x, widthVector.y, widthVector.z), new Vector3(-widthVector.x, widthVector.y, widthVector.z),
        // lower
        new Vector3(-widthVector.x, -widthVector.y, -widthVector.z), new Vector3(widthVector.x, -widthVector.y, -widthVector.z), new Vector3(widthVector.x, -widthVector.y, widthVector.z), new Vector3(-widthVector.x, -widthVector.y, widthVector.z),
        // front
        new Vector3(-widthVector.x, -widthVector.y, widthVector.z), new Vector3(widthVector.x, -widthVector.y, widthVector.z), new Vector3(widthVector.x, widthVector.y, widthVector.z), new Vector3(-widthVector.x, widthVector.y, widthVector.z),
        // back
        new Vector3(-widthVector.x, -widthVector.y, -widthVector.z), new Vector3(widthVector.x, -widthVector.y, -widthVector.z), new Vector3(widthVector.x, widthVector.y, -widthVector.z), new Vector3(-widthVector.x, widthVector.y, -widthVector.z),
        // right
        new Vector3(widthVector.x, -widthVector.y, -widthVector.z), new Vector3(widthVector.x, -widthVector.y, widthVector.z), new Vector3(widthVector.x, widthVector.y, widthVector.z), new Vector3(widthVector.x, widthVector.y, -widthVector.z),
        // left
        new Vector3(-widthVector.x, -widthVector.y, -widthVector.z), new Vector3(-widthVector.x, -widthVector.y, widthVector.z), new Vector3(-widthVector.x, widthVector.y, widthVector.z), new Vector3(-widthVector.x, widthVector.y, -widthVector.z)];
        var colors = [new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w)];
        var texcoords = [new Vector2(0.0, 0.0), new Vector2(1.0, 0.0), new Vector2(1.0, 1.0), new Vector2(0.0, 1.0), new Vector2(0.0, 0.0), new Vector2(1.0, 0.0), new Vector2(1.0, 1.0), new Vector2(0.0, 1.0), new Vector2(0.0, 0.0), new Vector2(1.0, 0.0), new Vector2(1.0, 1.0), new Vector2(0.0, 1.0), new Vector2(0.0, 0.0), new Vector2(1.0, 0.0), new Vector2(1.0, 1.0), new Vector2(0.0, 1.0), new Vector2(0.0, 0.0), new Vector2(1.0, 0.0), new Vector2(1.0, 1.0), new Vector2(0.0, 1.0), new Vector2(0.0, 0.0), new Vector2(1.0, 0.0), new Vector2(1.0, 1.0), new Vector2(0.0, 1.0)];

        var normals = [
        // upper
        new Vector3(0, 1, 0), new Vector3(0, 1, 0), new Vector3(0, 1, 0), new Vector3(0, 1, 0),
        // lower
        new Vector3(0, -1, 0), new Vector3(0, -1, 0), new Vector3(0, -1, 0), new Vector3(0, -1, 0),
        // front
        new Vector3(0, 0, 1), new Vector3(0, 0, 1), new Vector3(0, 0, 1), new Vector3(0, 0, 1),
        // back
        new Vector3(0, 0, -1), new Vector3(0, 0, -1), new Vector3(0, 0, -1), new Vector3(0, 0, -1),
        // right
        new Vector3(1, 0, 0), new Vector3(1, 0, 0), new Vector3(1, 0, 0), new Vector3(1, 0, 0),
        // left
        new Vector3(-1, 0, 0), new Vector3(-1, 0, 0), new Vector3(-1, 0, 0), new Vector3(-1, 0, 0)];

        this.setVerticesData({
          position: positions,
          color: colors,
          normal: normals,
          texcoord: texcoords
        }, [indices]);
      }
    }]);
    return Cube;
  }(Geometry);

  GLBoost$1["Cube"] = Cube;

  var SkeletalShaderSource = function () {
    function SkeletalShaderSource() {
      babelHelpers.classCallCheck(this, SkeletalShaderSource);
    }

    babelHelpers.createClass(SkeletalShaderSource, [{
      key: 'VSDefine_SkeletalShaderSource',
      value: function VSDefine_SkeletalShaderSource(in_, out_, f, lights, extraData) {
        var shaderText = '';
        shaderText += in_ + ' vec4 aVertex_joint;\n';
        shaderText += in_ + ' vec4 aVertex_weight;\n';
        shaderText += 'uniform mat4 skinTransformMatrices[' + extraData.jointN + '];\n';
        return shaderText;
      }
    }, {
      key: 'VSTransform_SkeletalShaderSource',
      value: function VSTransform_SkeletalShaderSource(existCamera_f, f, lights, extraData) {
        var shaderText = '';
        shaderText += 'gl_Position = aVertex_joint + aVertex_weight;\n';

        shaderText += 'mat4 skinMat = aVertex_weight.x * skinTransformMatrices[int(aVertex_joint.x)];\n';
        shaderText += 'skinMat += aVertex_weight.y * skinTransformMatrices[int(aVertex_joint.y)];\n';
        shaderText += 'skinMat += aVertex_weight.z * skinTransformMatrices[int(aVertex_joint.z)];\n';
        shaderText += 'skinMat += aVertex_weight.w * skinTransformMatrices[int(aVertex_joint.w)];\n';

        if (existCamera_f) {
          shaderText += '  gl_Position = pvwMatrix * skinMat * vec4(aVertex_position, 1.0);\n';
        } else {
          shaderText += '  gl_Position = skinMat * vec4(aVertex_position, 1.0);\n';
        }
        return shaderText;
      }
    }, {
      key: 'prepare_SkeletalShaderSource',
      value: function prepare_SkeletalShaderSource(gl, shaderProgram, vertexAttribs, existCamera_f, lights, extraData, canvas) {
        var vertexAttribsAsResult = [];

        vertexAttribs.forEach(function (attribName) {
          if (attribName === GLBoost.JOINT || attribName === GLBoost.WEIGHT) {
            vertexAttribsAsResult.push(attribName);
            shaderProgram['vertexAttribute_' + attribName] = gl.getAttribLocation(shaderProgram, 'aVertex_' + attribName);
            gl.enableVertexAttribArray(shaderProgram['vertexAttribute_' + attribName]);
          }
        });

        shaderProgram['skinTransformMatrices'] = gl.getUniformLocation(shaderProgram, 'skinTransformMatrices');
        // とりあえず単位行列で初期化
        var identityMatrices = [];
        for (var i = 0; i < extraData.jointN; i++) {
          Array.prototype.push.apply(identityMatrices, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        }
        gl.uniformMatrix4fv(shaderProgram['skinTransformMatrices'], false, new Float32Array(identityMatrices));

        return vertexAttribsAsResult;
      }
    }]);
    return SkeletalShaderSource;
  }();

  var SkeletalGeometry = function (_Geometry) {
    babelHelpers.inherits(SkeletalGeometry, _Geometry);

    function SkeletalGeometry(glBoostContext) {
      babelHelpers.classCallCheck(this, SkeletalGeometry);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(SkeletalGeometry).call(this, glBoostContext));
    }

    babelHelpers.createClass(SkeletalGeometry, [{
      key: 'draw',
      value: function draw(lights, camera, skeletalMesh, scene, renderPass_index) {
        var gl = this._glContext.gl;
        if (this._materials.length > 0) {
          var materials = this._materials;
        } else if (skeletalMesh.material) {
          var materials = [skeletalMesh.material];
        } else {
          var materials = [];
        }

        var calcParentJointsMatricesRecursively = function calcParentJointsMatricesRecursively(joint) {
          var children = joint.parent.parent.getChildren();
          var parentJoint = null;
          for (var i = 0; i < children.length; i++) {
            if (children[i] instanceof Joint) {
              parentJoint = children[i];
            }
          }

          var results = [];
          if (parentJoint) {
            var result = calcParentJointsMatricesRecursively(parentJoint);
            if (Array.isArray(result)) {
              Array.prototype.push.apply(results, result);
            }

            results.push(parentJoint);

            return results;
          }

          return null;
        };

        var joints = skeletalMesh.jointsHierarchy.searchElementsByType(Joint);
        var matrices = [];

        for (var i = 0; i < joints.length; i++) {

          var jointsHierarchy = calcParentJointsMatricesRecursively(joints[i]);
          if (jointsHierarchy == null) {
            jointsHierarchy = [];
          }
          jointsHierarchy.push(joints[i]);
          //console.log(jointsHierarchy);
          var tempMatrices = [];

          var mapTable = [];
          for (var j = 0; j < jointsHierarchy.length; j++) {
            for (var k = 0; k < joints.length; k++) {
              if (jointsHierarchy[j].userFlavorName === joints[k].userFlavorName) {
                mapTable[j] = k;
              }
            }
          }
          for (var j = 0; j < jointsHierarchy.length; j++) {

            var thisLoopMatrix = null;

            var pivotJoint = joints[mapTable[j]];
            var rotateMatrix = null;
            //let basicRotateMat = Matrix44.multiply(Matrix44.invert(jointsHierarchy[j].parent.transformMatrixOnlyRotate), (joints[mapTable[j]].inverceMatrix));
            //let basicRotateMat = Matrix44.multiply(Matrix44.invert(jointsHierarchy[j].parent.transformMatrixOnlyRotate), Matrix44.invert(joints[mapTable[j]].inverceMatrix));
            var basicRotateMat = Matrix44.multiply(Matrix44.invert(jointsHierarchy[j].parent.transformMatrixOnlyRotate), Matrix44.invert(joints[mapTable[j]].inverceMatrix));
            if (j > 0) {
              //let parentMat = Matrix44.multiply(basicRotateMat, jointsHierarchy[j-1].parent.transformMatrixOnlyRotate);
              var parentMat = Matrix44.multiply(Matrix44.multiply(Matrix44.invert(jointsHierarchy[j - 1].parent.transformMatrixOnlyRotate), Matrix44.invert(joints[mapTable[j - 1]].inverceMatrix)), basicRotateMat);

              rotateMatrix = Matrix44.multiply(Matrix44.multiply(jointsHierarchy[j].parent.transformMatrixOnlyRotate, joints[mapTable[j]].inverceMatrix), Matrix44.invert(parentMat));
            } else {
              rotateMatrix = Matrix44.multiply(jointsHierarchy[j].parent.transformMatrixOnlyRotate, joints[mapTable[j]].inverceMatrix);
            }
            //let rotateMatrix = jointsHierarchy[j].parent.transformMatrixOnlyRotate;
            thisLoopMatrix = Matrix44.multiply(Matrix44.invert(skeletalMesh.inverseBindMatrices[mapTable[j]]), Matrix44.multiply(rotateMatrix, skeletalMesh.inverseBindMatrices[mapTable[j]]));
            if (j > 0) {
              tempMatrices[j] = Matrix44.multiply(tempMatrices[j - 1], thisLoopMatrix);
            } else {
              tempMatrices[j] = thisLoopMatrix;
            }
          }
          matrices[i] = tempMatrices[jointsHierarchy.length - 1];
        }
        var flatMatrices = [];
        for (var i = 0; i < matrices.length; i++) {
          Array.prototype.push.apply(flatMatrices, matrices[i].flattenAsArray());
        }
        if (matrices.length < 4) {
          var identityMatrices = [];
          for (var i = 0; i < 4 - matrices.length; i++) {
            Array.prototype.push.apply(identityMatrices, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
          }
          Array.prototype.push.apply(flatMatrices, identityMatrices);
        }

        for (var i = 0; i < materials.length; i++) {
          var glslProgram = materials[i].shaderInstance.glslProgram;
          gl.uniformMatrix4fv(glslProgram.skinTransformMatrices, false, new Float32Array(flatMatrices));
        }

        babelHelpers.get(Object.getPrototypeOf(SkeletalGeometry.prototype), 'draw', this).call(this, lights, camera, skeletalMesh, scene, renderPass_index);
      }
    }, {
      key: 'prepareToRender',
      value: function prepareToRender(existCamera_f, pointLight, meshMaterial, skeletalMesh) {
        // before prepareForRender of 'Geometry' class, a new 'BlendShapeShader'(which extends default shader) is assigned.
        var canvas = this._canvas;

        if (this._materials.length > 0) {
          this._materialForSkeletal = this._materials[0];
        } else if (meshMaterial) {
          this._materialForSkeletal = meshMaterial;
        } else {
          this._materialForSkeletal = this._defaultMaterial;
        }

        var SkeletalShader = function (_materialForSkeletal$) {
          babelHelpers.inherits(SkeletalShader, _materialForSkeletal$);

          function SkeletalShader(glBoostContext, basicShader) {
            babelHelpers.classCallCheck(this, SkeletalShader);

            var _this2 = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(SkeletalShader).call(this, glBoostContext, basicShader));

            SkeletalShader.mixin(SkeletalShaderSource);
            return _this2;
          }

          return SkeletalShader;
        }(this._materialForSkeletal.shaderClass);

        if (this._materials.length > 0) {
          for (var i = 0; i < this._materials.length; i++) {
            this._materials[i].shaderClass = SkeletalShader;
          }
        } else if (meshMaterial) {
          meshMaterial.shaderClass = SkeletalShader;
        } else {
          this._defaultMaterial.shaderClass = SkeletalShader;
        }

        var joints = skeletalMesh.jointsHierarchy.searchElementsByType(Joint);
        for (var i = 0; i < joints.length; i++) {
          //skeletalMesh.inverseBindMatrices[i] = Matrix44.invert(joints[i].transformMatrixAccumulatedAncestry);
          var matrix = joints[i].parent.transformMatrixOnlyRotateOnInit;
          joints[i].inverceMatrix = Matrix44.invert(matrix);
          //joints[i].inverceMatrix = Matrix44.identity();
        }

        /*
        var calcParentJointsMatricesRecursively = (joint)=> {
          let children = joint.parent.parent._children;
          let parentJoint = null;
          for (let i=0; i<children.length; i++) {
            if (children[i] instanceof Joint) {
              parentJoint = children[i];
            }
          }
           let results = [];
          if (parentJoint) {
            let result = calcParentJointsMatricesRecursively(parentJoint);
            if (Array.isArray(result)) {
              Array.prototype.push.apply(results, result);
            }
             results.push(parentJoint);
             return results;
          }
           return null;
        };
         var joints = skeletalMesh.jointsHierarchy.searchElementsByType(Joint);
        var matrices = [];
         for (let i=0; i<joints.length; i++) {
           let jointsHierarchy = calcParentJointsMatricesRecursively(joints[i]);
          if (jointsHierarchy == null) {
            jointsHierarchy = [];
          }
          jointsHierarchy.push(joints[i]);
          //console.log(jointsHierarchy);
          let tempMatrices = [];
            let mapTable = [];
          for (let j = 0; j < jointsHierarchy.length; j++) {
            for (let k = 0; k < joints.length; k++) {
              if (jointsHierarchy[j].userFlavorName === joints[k].userFlavorName) {
                mapTable[j] = k;
              }
            }
          }
          for (let j = 0; j < jointsHierarchy.length; j++) {
             let thisLoopMatrix = null;
             thisLoopMatrix = joints[mapTable[j]].parent.transformMatrixOnlyRotateOnInit;
            if (j > 0) {
              tempMatrices[j] = Matrix44.multiply(tempMatrices[j - 1], thisLoopMatrix);
            } else {
              tempMatrices[j] = thisLoopMatrix;
            }
          }
          joints[i].inverceMatrix = Matrix44.invert(tempMatrices[jointsHierarchy.length - 1]);
         }
        */
        babelHelpers.get(Object.getPrototypeOf(SkeletalGeometry.prototype), 'prepareToRender', this).call(this, existCamera_f, pointLight, meshMaterial, skeletalMesh);
      }
    }]);
    return SkeletalGeometry;
  }(Geometry);

  GLBoost$1['SkeletalGeometry'] = SkeletalGeometry;

  var BlendShapeShaderSource = function () {
    function BlendShapeShaderSource() {
      babelHelpers.classCallCheck(this, BlendShapeShaderSource);
    }

    babelHelpers.createClass(BlendShapeShaderSource, [{
      key: 'VSDefine_BlendShapeShaderSource',
      value: function VSDefine_BlendShapeShaderSource(in_, out_, f) {
        var _this = this;

        var shaderText = '';
        f.forEach(function (attribName) {
          if (_this.BlendShapeShaderSource_isShapeTarget(attribName)) {
            shaderText += in_ + ' vec3 aVertex_' + attribName + ';\n';
            shaderText += 'uniform float blendWeight_' + attribName + ';\n';
          }
        });
        return shaderText;
      }
    }, {
      key: 'VSTransform_BlendShapeShaderSource',
      value: function VSTransform_BlendShapeShaderSource(existCamera_f, f, lights, extraData) {
        var _this2 = this;

        var shaderText = '';
        shaderText += 'float sumOfWeights = 0.0;\n';
        f.forEach(function (attribName) {
          if (_this2.BlendShapeShaderSource_isShapeTarget(attribName)) {
            shaderText += 'sumOfWeights += blendWeight_' + attribName + ';\n';
          }
        });
        var numOfShapeTargets = this.BlendShapeShaderSource_numberOfShapeTargets(f);
        shaderText += '    vec3 blendedPosition = aVertex_position * max(1.0 - sumOfWeights/float(' + numOfShapeTargets + '), 0.0);\n';
        f.forEach(function (attribName) {
          if (_this2.BlendShapeShaderSource_isShapeTarget(attribName)) {
            shaderText += 'blendedPosition += aVertex_' + attribName + ' * blendWeight_' + attribName + '/float(' + numOfShapeTargets + ');\n';
          }
        });
        if (existCamera_f) {
          shaderText += '  gl_Position = pvwMatrix * vec4(blendedPosition, 1.0);\n';
        } else {
          shaderText += '  gl_Position = vec4(blendedPosition, 1.0);\n';
        }
        return shaderText;
      }
    }, {
      key: 'prepare_BlendShapeShaderSource',
      value: function prepare_BlendShapeShaderSource(gl, shaderProgram, vertexAttribs) {
        var _this3 = this;

        var vertexAttribsAsResult = [];
        vertexAttribs.forEach(function (attribName) {
          if (_this3.BlendShapeShaderSource_isShapeTarget(attribName)) {
            // if POSITION and ShapeTargets...
            vertexAttribsAsResult.push(attribName);
            shaderProgram['vertexAttribute_' + attribName] = gl.getAttribLocation(shaderProgram, 'aVertex_' + attribName);
            gl.enableVertexAttribArray(shaderProgram['vertexAttribute_' + attribName]);
          }
        });

        vertexAttribs.forEach(function (attribName) {
          if (_this3.BlendShapeShaderSource_isShapeTarget(attribName)) {
            shaderProgram['uniformFloatSampler_blendWeight_' + attribName] = gl.getUniformLocation(shaderProgram, 'blendWeight_' + attribName);
            // とりあえずゼロ初期化
            gl.uniform1f(shaderProgram['uniformFloatSampler_blendWeight_' + attribName], 0.0);
          }
        });

        return vertexAttribsAsResult;
      }
    }, {
      key: 'BlendShapeShaderSource_isShapeTarget',
      value: function BlendShapeShaderSource_isShapeTarget(attribName) {
        return !Shader._exist(attribName, GLBoost.POSITION) && !Shader._exist(attribName, GLBoost.COLOR) && !Shader._exist(attribName, GLBoost.TEXCOORD);
      }
    }, {
      key: 'BlendShapeShaderSource_numberOfShapeTargets',
      value: function BlendShapeShaderSource_numberOfShapeTargets(attributes) {
        var _this4 = this;

        var count = 0;
        attributes.forEach(function (attribName) {
          if (_this4.BlendShapeShaderSource_isShapeTarget(attribName)) {
            count += 1;
          }
        });
        return count;
      }
    }]);
    return BlendShapeShaderSource;
  }();

  var BlendShapeGeometry = function (_Geometry) {
    babelHelpers.inherits(BlendShapeGeometry, _Geometry);

    function BlendShapeGeometry(glBoostContext) {
      babelHelpers.classCallCheck(this, BlendShapeGeometry);

      var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(BlendShapeGeometry).call(this, glBoostContext));

      _this._blendWeight_1 = 0.0;
      _this._blendWeight_2 = 0.0;
      _this._blendWeight_3 = 0.0;
      _this._blendWeight_4 = 0.0;
      _this._blendWeight_5 = 0.0;
      _this._blendWeight_6 = 0.0;
      _this._blendWeight_7 = 0.0;
      _this._blendWeight_8 = 0.0;
      _this._blendWeight_9 = 0.0;
      _this._blendWeight_10 = 0.0;

      _this._currentRenderPassIndex = 0;
      _this._materialForBlend = null;
      return _this;
    }

    babelHelpers.createClass(BlendShapeGeometry, [{
      key: 'draw',
      value: function draw(lights, camera, mesh, scene, renderPass_index) {
        this._currentRenderPassIndex = renderPass_index;
        babelHelpers.get(Object.getPrototypeOf(BlendShapeGeometry.prototype), 'draw', this).call(this, lights, camera, mesh, scene, renderPass_index);
      }
    }, {
      key: 'prepareToRender',
      value: function prepareToRender(existCamera_f, pointLight, meshMaterial, mesh) {
        // before prepareForRender of 'Geometry' class, a new 'BlendShapeShader'(which extends default shader) is assigned.
        var canvas = this._canvas;

        if (meshMaterial) {
          this._materialForBlend = meshMaterial;
        } else {
          this._materialForBlend = this._defaultMaterial;
        }

        var BlendShapeShader = function (_materialForBlend$sha) {
          babelHelpers.inherits(BlendShapeShader, _materialForBlend$sha);

          function BlendShapeShader(glBoostContext, basicShader) {
            babelHelpers.classCallCheck(this, BlendShapeShader);

            var _this2 = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(BlendShapeShader).call(this, glBoostContext, basicShader));

            BlendShapeShader.mixin(BlendShapeShaderSource);
            return _this2;
          }

          return BlendShapeShader;
        }(this._materialForBlend.shaderClass);

        this._materialForBlend.shaderClass = BlendShapeShader;

        babelHelpers.get(Object.getPrototypeOf(BlendShapeGeometry.prototype), 'prepareToRender', this).call(this, existCamera_f, pointLight, meshMaterial, mesh);
      }
    }, {
      key: '_setBlendWeightToGlslProgram',
      value: function _setBlendWeightToGlslProgram(blendTarget, weight) {
        var gl = this._glContext.gl;
        var materials = [this._materialForBlend];
        for (var i = 0; i < materials.length; i++) {
          gl.useProgram(materials[i].shaderInstance.glslProgram);
          gl.uniform1f(materials[i].shaderInstance.glslProgram['uniformFloatSampler_blendWeight_' + blendTarget], weight);
        }
      }
    }, {
      key: 'blendWeight_1',
      set: function set(weight) {
        var gl = this._glContext.gl;
        var currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);

        this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET1, weight);
        gl.useProgram(currentProgram);
        this._blendWeight_1 = weight;
      },
      get: function get() {
        return this._blendWeight_1;
      }
    }, {
      key: 'blendWeight_2',
      set: function set(weight) {
        var gl = this._glContext.gl;
        var currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);

        this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET2, weight);
        gl.useProgram(currentProgram);
        this._blendWeight_2 = weight;
      },
      get: function get() {
        return this._blendWeight_2;
      }
    }, {
      key: 'blendWeight_3',
      set: function set(weight) {
        var gl = this._glContext.gl;
        var currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);

        this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET3, weight);
        gl.useProgram(currentProgram);
        this._blendWeight_3 = weight;
      },
      get: function get() {
        return this._blendWeight_3;
      }
    }, {
      key: 'blendWeight_4',
      set: function set(weight) {
        var gl = this._glContext.gl;
        var currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);

        this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET4, weight);
        gl.useProgram(currentProgram);
        this._blendWeight_4 = weight;
      },
      get: function get() {
        return this._blendWeight_4;
      }
    }, {
      key: 'blendWeight_5',
      set: function set(weight) {
        var gl = this._glContext.gl;
        var currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);

        this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET5, weight);
        gl.useProgram(currentProgram);
        this._blendWeight_5 = weight;
      },
      get: function get() {
        return this._blendWeight_5;
      }
    }, {
      key: 'blendWeight_6',
      set: function set(weight) {
        var gl = this._glContext.gl;
        var currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);

        this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET6, weight);
        gl.useProgram(currentProgram);
        this._blendWeight_6 = weight;
      },
      get: function get() {
        return this._blendWeight_6;
      }
    }, {
      key: 'blendWeight_7',
      set: function set(weight) {
        var gl = this._glContext.gl;
        var currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);

        this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET7, weight);
        gl.useProgram(currentProgram);
        this._blendWeight_7 = weight;
      },
      get: function get() {
        return this._blendWeight_7;
      }
    }, {
      key: 'blendWeight_8',
      set: function set(weight) {
        var gl = this._glContext.gl;
        var currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);

        this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET8, weight);
        gl.useProgram(currentProgram);
        this._blendWeight_8 = weight;
      },
      get: function get() {
        return this._blendWeight_8;
      }
    }, {
      key: 'blendWeight_9',
      set: function set(weight) {
        var gl = this._glContext.gl;
        var currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);

        this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET9, weight);
        gl.useProgram(currentProgram);
        this._blendWeight_9 = weight;
      },
      get: function get() {
        return this._blendWeight_9;
      }
    }, {
      key: 'blendWeight_10',
      set: function set(weight) {
        var gl = this._glContext.gl;
        var currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);

        this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET10, weight);
        gl.useProgram(currentProgram);
        this._blendWeight_10 = weight;
      },
      get: function get() {
        return this._blendWeight_10;
      }
    }]);
    return BlendShapeGeometry;
  }(Geometry);

  GLBoost$1['BlendShapeGeometry'] = BlendShapeGeometry;

  var GLBoostLowContext = function () {
    function GLBoostLowContext(canvas) {
      babelHelpers.classCallCheck(this, GLBoostLowContext);

      this._setName();
      this._glContext = GLContext.getInstance(canvas);
    }

    babelHelpers.createClass(GLBoostLowContext, [{
      key: '_setName',
      value: function _setName() {
        this.constructor._instanceCount = typeof this.constructor._instanceCount === 'undefined' ? 0 : this.constructor._instanceCount + 1;
        this._instanceName = this.constructor.name + '_' + this.constructor._instanceCount;
      }
    }, {
      key: 'toString',
      value: function toString() {
        return this._instanceName;
      }
    }, {
      key: 'createGeometry',
      value: function createGeometry() {
        return new Geometry(this);
      }
    }, {
      key: 'createBlendShapeGeometry',
      value: function createBlendShapeGeometry() {
        return new BlendShapeGeometry(this);
      }
    }, {
      key: 'createSkeletalGeometry',
      value: function createSkeletalGeometry() {
        return new SkeletalGeometry(this);
      }
    }, {
      key: 'createCube',
      value: function createCube(widthVector, vertexColor) {
        return new Cube(this, widthVector, vertexColor);
      }
    }, {
      key: 'createPlane',
      value: function createPlane(width, height, uSpan, vSpan, customVertexAttributes) {
        return new Plane(this, width, height, uSpan, vSpan, customVertexAttributes);
      }
    }, {
      key: 'createSphere',
      value: function createSphere(radius, widthSegments, heightSegments, vertexColor) {
        return new Sphere(this, radius, widthSegments, heightSegments, vertexColor);
      }
    }, {
      key: 'createParticle',
      value: function createParticle(centerPointData, particleWidth, particleHeight, customVertexAttributes, performanceHint) {
        return new Particle(this, centerPointData, particleWidth, particleHeight, customVertexAttributes, performanceHint);
      }
    }, {
      key: 'createClassicMaterial',
      value: function createClassicMaterial() {
        return new ClassicMaterial(this);
      }
    }, {
      key: 'createCamera',
      value: function createCamera(lookat, perspective) {
        return new Camera(this, lookat, perspective);
      }
    }, {
      key: 'createTexture',
      value: function createTexture(src) {
        var parameters = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

        return new Texture(this, src, parameters);
      }
    }, {
      key: 'createDirectionalLight',
      value: function createDirectionalLight(intensity, direction) {
        return new DirectionalLight(this, intensity, direction);
      }
    }, {
      key: 'createPointLight',
      value: function createPointLight(intensity) {
        return new PointLight(this, intensity);
      }
    }, {
      key: 'createJoint',
      value: function createJoint() {
        return new Joint(this);
      }

      /**
       * en: create textures as render target. (and attach it to framebuffer object internally.)<br>
       * ja:レンダーターゲットとしてテクスチャを作成します（内部的にframebuffer objectにアタッチされます）。
       * @param {number} width en: width of texture. ja: テクスチャの幅
       * @param {number} height en: height of texture. ja: テクスチャの高さ
       * @param {number} textureNum en: the number of creation. ja:テクスチャを作る個数
       * @param {HTMLCanvas|string} canvas [en] canvas or canvas' id string. [ja] canvasまたはcanvasのid文字列
       * @returns {Array} en: an array of created textures. ja:作成されたテクスチャの配列
       */

    }, {
      key: 'createTexturesForRenderTarget',
      value: function createTexturesForRenderTarget(width, height, textureNum) {
        var glContext = this._glContext;
        var gl = glContext.gl;
        var canvas = glContext.canvas;

        var glem = GLExtensionsManager.getInstance(glContext);

        // Create FBO
        var fbo = glContext.createFramebuffer(this);
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
        fbo.width = width ? width : canvas.width;
        fbo.height = height ? height : canvas.height;

        var renderTargetTextures = [];
        for (var i = 0; i < textureNum; i++) {
          var texture = new MutableTexture(this, fbo.width, fbo.height);
          texture.fbo = fbo;
          renderTargetTextures.push(texture);
        }

        // Create RenderBuffer
        var renderbuffer = glContext.createRenderbuffer(this);
        gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, fbo.width, fbo.height);

        // Attach Buffers
        renderTargetTextures.forEach(function (texture, i) {
          var glTexture = texture.glTextureResource;
          var attachimentId = glem.colorAttachiment(gl, i);
          texture.colorAttachiment = attachimentId;
          gl.framebufferTexture2D(gl.FRAMEBUFFER, attachimentId, gl.TEXTURE_2D, glTexture, 0);
        });
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, renderbuffer);

        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);

        return renderTargetTextures;
      }
    }, {
      key: 'createDepthTexturesForRenderTarget',
      value: function createDepthTexturesForRenderTarget(width, height) {
        var glContext = this._glContext;

        var gl = glContext.gl;

        var glem = GLExtensionsManager.getInstance(glContext);

        // Create FBO
        var fbo = glContext.createFramebuffer(this);
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
        fbo.width = width ? width : canvas.width;
        fbo.height = height ? height : canvas.height;

        var depthTexture = new MutableTexture(this, fbo.width, fbo.height);
        depthTexture.fbo = fbo;

        // Attach Buffers
        var glTexture = depthTexture.glTextureResource;
        var attachimentId = gl.DEPTH_ATTACHMENT;
        depthTexture.colorAttachment = attachimentId;
        gl.framebufferTexture2D(gl.FRAMEBUFFER, attachimentId, gl.TEXTURE_2D, glTexture, 0);

        gl.bindFramebuffer(gl.FRAMEBUFFER, null);

        return depthTexture;
      }
    }, {
      key: 'glContext',
      get: function get() {
        return this._glContext;
      }
    }, {
      key: 'belongingCanvasId',
      get: function get() {
        return this._glContext.canvas.id;
      }
    }]);
    return GLBoostLowContext;
  }();

  GLBoost['GLBoostLowContext'] = GLBoostLowContext;

  var GLBoostMiddleContext = function (_GLBoostContext) {
    babelHelpers.inherits(GLBoostMiddleContext, _GLBoostContext);

    function GLBoostMiddleContext(canvas) {
      babelHelpers.classCallCheck(this, GLBoostMiddleContext);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(GLBoostMiddleContext).call(this, canvas));
    }

    babelHelpers.createClass(GLBoostMiddleContext, [{
      key: 'createScene',
      value: function createScene() {
        return new Scene(this);
      }
    }, {
      key: 'createGroup',
      value: function createGroup() {
        return new Group(this);
      }
    }, {
      key: 'createMesh',
      value: function createMesh(geometry, material) {
        return new Mesh(this, geometry, material);
      }
    }, {
      key: 'createSkeletalMesh',
      value: function createSkeletalMesh(geometry, material, rootJointName) {
        return new SkeletalMesh(this, geometry, material, rootJointName);
      }
    }, {
      key: 'createRenderer',
      value: function createRenderer(parameters) {
        return new Renderer(this, parameters);
      }
    }, {
      key: 'createExpressionAndRenderPaths',
      value: function createExpressionAndRenderPaths(number) {
        var expression = new Expression(this);
        var renderPaths = this.createRenderPaths(number);
        expression.addRenderPaths(renderPaths);

        return expression;
      }
    }, {
      key: 'createRenderPaths',
      value: function createRenderPaths(number) {
        var renderPaths = [];
        for (var i = 0; i < number; i++) {
          renderPaths.push(new RenderPath(this));
        }

        return renderPaths;
      }
    }]);
    return GLBoostMiddleContext;
  }(GLBoostLowContext);

  GLBoost['GLBoostMiddleContext'] = GLBoostMiddleContext;

  var PhongShaderSource = function () {
    function PhongShaderSource() {
      babelHelpers.classCallCheck(this, PhongShaderSource);
    }

    babelHelpers.createClass(PhongShaderSource, [{
      key: 'FSDefine_PhongShaderSource',
      value: function FSDefine_PhongShaderSource(in_, f, lights) {
        var shaderText = '';
        shaderText += 'uniform vec3 viewPosition;\n';
        shaderText += 'uniform vec4 Kd;\n';
        shaderText += 'uniform vec4 Ks;\n';
        shaderText += 'uniform float power;\n';

        return shaderText;
      }
    }, {
      key: 'FSShade_PhongShaderSource',
      value: function FSShade_PhongShaderSource(f, gl, lights) {
        var shaderText = '';
        shaderText += '  vec4 surfaceColor = rt0;\n';
        shaderText += '  rt0 = vec4(0.0, 0.0, 0.0, 0.0);\n';
        shaderText += '  vec3 normal = normalize(v_normal);\n';

        shaderText += '  for (int i=0; i<' + lights.length + '; i++) {\n';
        // if PointLight: lightPosition[i].w === 1.0      if DirectionalLight: lightPosition[i].w === 0.0
        shaderText += '    vec3 light = normalize(lightPosition[i].xyz - position.xyz * lightPosition[i].w);\n';
        shaderText += '    float diffuse = max(dot(light, normal), 0.0);\n';
        shaderText += '    rt0 += Kd * lightDiffuse[i] * vec4(diffuse, diffuse, diffuse, 1.0) * surfaceColor;\n';
        shaderText += '    vec3 view = normalize(viewPosition - position.xyz);\n';
        shaderText += '    vec3 reflect = -view + 2.0 * max(dot(normal, view), 0.0) * normal;\n';
        shaderText += '    float specular = pow(max(dot(light, reflect), 0.0), power);\n';
        shaderText += '    rt0 += Ks * lightDiffuse[i] * vec4(specular, specular, specular, 0.0);\n';
        shaderText += '  }\n';
        //shaderText += '  rt0.a = 1.0;\n';
        //shaderText += '  rt0 = vec4(position.xyz, 1.0);\n';

        return shaderText;
      }
    }, {
      key: 'prepare_PhongShaderSource',
      value: function prepare_PhongShaderSource(gl, shaderProgram, vertexAttribs, existCamera_f, lights, extraData, canvas) {

        var vertexAttribsAsResult = [];
        vertexAttribs.forEach(function (attribName) {
          if (attribName === GLBoost.NORMAL) {
            shaderProgram['vertexAttribute_' + attribName] = gl.getAttribLocation(shaderProgram, 'aVertex_' + attribName);
            gl.enableVertexAttribArray(shaderProgram['vertexAttribute_' + attribName]);
            vertexAttribsAsResult.push(attribName);
          }
        });

        shaderProgram.Kd = gl.getUniformLocation(shaderProgram, 'Kd');
        shaderProgram.Ks = gl.getUniformLocation(shaderProgram, 'Ks');
        shaderProgram.power = gl.getUniformLocation(shaderProgram, 'power');

        shaderProgram['viewPosition'] = gl.getUniformLocation(shaderProgram, 'viewPosition');

        return vertexAttribsAsResult;
      }
    }]);
    return PhongShaderSource;
  }();

  var PhongShader = function (_DecalShader) {
    babelHelpers.inherits(PhongShader, _DecalShader);

    function PhongShader(glBoostContext, basicShader) {
      babelHelpers.classCallCheck(this, PhongShader);

      var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(PhongShader).call(this, glBoostContext, basicShader));

      PhongShader.mixin(PhongShaderSource);

      _this._power = 5.0;

      return _this;
    }

    babelHelpers.createClass(PhongShader, [{
      key: 'setUniforms',
      value: function setUniforms(gl, glslProgram, material) {
        babelHelpers.get(Object.getPrototypeOf(PhongShader.prototype), 'setUniforms', this).call(this, gl, glslProgram, material);

        var Kd = material.diffuseColor;
        var Ks = material.specularColor;
        gl.uniform4f(glslProgram.Kd, Kd.x, Kd.y, Kd.z, Kd.w);
        gl.uniform4f(glslProgram.Ks, Ks.x, Ks.y, Ks.z, Ks.w);
        gl.uniform1f(glslProgram.power, this._power);
      }
    }, {
      key: 'Kd',
      set: function set(value) {
        this._Kd = value;
      },
      get: function get() {
        return this._Kd;
      }
    }, {
      key: 'Ks',
      set: function set(value) {
        this._Ks = value;
      },
      get: function get() {
        return this._Ks;
      }
    }, {
      key: 'power',
      set: function set(value) {
        this._power = value;
      },
      get: function get() {
        return this._power;
      }
    }]);
    return PhongShader;
  }(DecalShader);

  GLBoost['PhongShader'] = PhongShader;

  var LambertShaderSource = function () {
    function LambertShaderSource() {
      babelHelpers.classCallCheck(this, LambertShaderSource);
    }

    babelHelpers.createClass(LambertShaderSource, [{
      key: 'FSDefine_LambertShaderSource',
      value: function FSDefine_LambertShaderSource(in_, f, lights) {
        var shaderText = '';
        shaderText += 'uniform vec4 Kd;\n';

        return shaderText;
      }
    }, {
      key: 'FSShade_LambertShaderSource',
      value: function FSShade_LambertShaderSource(f, gl, lights) {
        var shaderText = '';

        shaderText += '  vec4 surfaceColor = rt0;\n';
        shaderText += '  rt0 = vec4(0.0, 0.0, 0.0, 0.0);\n';
        shaderText += '  vec3 normal = normalize(v_normal);\n';

        shaderText += '  for (int i=0; i<' + lights.length + '; i++) {\n';
        // if PointLight: lightPosition[i].w === 1.0      if DirectionalLight: lightPosition[i].w === 0.0
        shaderText += '    vec3 light = normalize(lightPosition[i].xyz - position.xyz * lightPosition[i].w);\n';
        shaderText += '    float diffuse = max(dot(light, normal), 0.0);\n';
        shaderText += '    rt0 += Kd * lightDiffuse[i] * vec4(diffuse, diffuse, diffuse, 1.0) * surfaceColor;\n';
        shaderText += '  }\n';
        //shaderText += '  rt0.a = 1.0;\n';
        //shaderText += '  rt0 = vec4(position.xyz, 1.0);\n';

        return shaderText;
      }
    }, {
      key: 'prepare_LambertShaderSource',
      value: function prepare_LambertShaderSource(gl, shaderProgram, vertexAttribs, existCamera_f, lights, extraData, canvas) {

        var vertexAttribsAsResult = [];
        vertexAttribs.forEach(function (attribName) {
          if (attribName === GLBoost.NORMAL) {
            shaderProgram['vertexAttribute_' + attribName] = gl.getAttribLocation(shaderProgram, 'aVertex_' + attribName);
            gl.enableVertexAttribArray(shaderProgram['vertexAttribute_' + attribName]);
            vertexAttribsAsResult.push(attribName);
          }
        });

        shaderProgram.Kd = gl.getUniformLocation(shaderProgram, 'Kd');

        return vertexAttribsAsResult;
      }
    }]);
    return LambertShaderSource;
  }();

  var LambertShader = function (_DecalShader) {
    babelHelpers.inherits(LambertShader, _DecalShader);

    function LambertShader(glBoostContext, basicShader) {
      babelHelpers.classCallCheck(this, LambertShader);

      var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(LambertShader).call(this, glBoostContext, basicShader));

      LambertShader.mixin(LambertShaderSource);
      return _this;
    }

    babelHelpers.createClass(LambertShader, [{
      key: 'setUniforms',
      value: function setUniforms(gl, glslProgram, material) {
        babelHelpers.get(Object.getPrototypeOf(LambertShader.prototype), 'setUniforms', this).call(this, gl, glslProgram, material);

        var Kd = material.diffuseColor;
        gl.uniform4f(glslProgram.Kd, Kd.x, Kd.y, Kd.z, Kd.w);
      }
    }]);
    return LambertShader;
  }(DecalShader);

  GLBoost['LambertShader'] = LambertShader;

  var HalfLambertShaderSource = function () {
    function HalfLambertShaderSource() {
      babelHelpers.classCallCheck(this, HalfLambertShaderSource);
    }

    babelHelpers.createClass(HalfLambertShaderSource, [{
      key: 'FSDefine_HalfLambertShaderSource',
      value: function FSDefine_HalfLambertShaderSource(in_, f, lights) {
        var shaderText = '';
        shaderText += 'uniform vec4 Kd;\n';

        return shaderText;
      }
    }, {
      key: 'FSShade_HalfLambertShaderSource',
      value: function FSShade_HalfLambertShaderSource(f, gl, lights) {
        var shaderText = '';

        shaderText += '  vec4 surfaceColor = rt0;\n';
        shaderText += '  rt0 = vec4(0.0, 0.0, 0.0, 0.0);\n';
        shaderText += '  vec3 normal = normalize(v_normal);\n';

        shaderText += '  for (int i=0; i<' + lights.length + '; i++) {\n';
        // if PointLight: lightPosition[i].w === 1.0      if DirectionalLight: lightPosition[i].w === 0.0
        shaderText += '    vec3 light = normalize(lightPosition[i].xyz - position.xyz * lightPosition[i].w);\n';
        shaderText += '    float halfLambert = max(dot(light, normal), 0.0)*0.5+0.5;\n';
        shaderText += '    float diffuse = halfLambert*halfLambert;\n';
        shaderText += '    rt0 += Kd * lightDiffuse[i] * vec4(diffuse, diffuse, diffuse, 1.0) * surfaceColor;\n';
        shaderText += '  }\n';
        //shaderText += '  rt0.a = 1.0;\n';
        //shaderText += '  rt0 = vec4(position.xyz, 1.0);\n';

        return shaderText;
      }
    }, {
      key: 'prepare_HalfLambertShaderSource',
      value: function prepare_HalfLambertShaderSource(gl, shaderProgram, vertexAttribs, existCamera_f, lights, extraData, canvas) {

        var vertexAttribsAsResult = [];
        vertexAttribs.forEach(function (attribName) {
          if (attribName === GLBoost.NORMAL) {
            shaderProgram['vertexAttribute_' + attribName] = gl.getAttribLocation(shaderProgram, 'aVertex_' + attribName);
            gl.enableVertexAttribArray(shaderProgram['vertexAttribute_' + attribName]);
            vertexAttribsAsResult.push(attribName);
          }
        });

        shaderProgram.Kd = gl.getUniformLocation(shaderProgram, 'Kd');

        return vertexAttribsAsResult;
      }
    }]);
    return HalfLambertShaderSource;
  }();

  var HalfLambertShader = function (_DecalShader) {
    babelHelpers.inherits(HalfLambertShader, _DecalShader);

    function HalfLambertShader(glBoostContext, basicShader) {
      babelHelpers.classCallCheck(this, HalfLambertShader);

      var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(HalfLambertShader).call(this, glBoostContext, basicShader));

      HalfLambertShader.mixin(HalfLambertShaderSource);
      return _this;
    }

    babelHelpers.createClass(HalfLambertShader, [{
      key: 'setUniforms',
      value: function setUniforms(gl, glslProgram, material) {
        babelHelpers.get(Object.getPrototypeOf(HalfLambertShader.prototype), 'setUniforms', this).call(this, gl, glslProgram, material);

        var Kd = material.diffuseColor;
        gl.uniform4f(glslProgram.Kd, Kd.x, Kd.y, Kd.z, Kd.w);
      }
    }]);
    return HalfLambertShader;
  }(DecalShader);

  GLBoost['HalfLambertShader'] = HalfLambertShader;

  var singleton = Symbol();
  var singletonEnforcer = Symbol();

  /**
   * [en] This is a loader class of Obj file format.<br>
   * [ja] Objファイルを読み込むためのローダークラスです。
   */

  var ObjLoader = function () {

    /**
     * [en] The constructor of ObjLoader class. But you cannot use this constructor directly because of this class is a singleton class. Use getInstance() static method.<br>
     * [ja] ObjLoaderクラスのコンストラクタです。しかし本クラスはシングルトンであるため、このコンストラクタは直接呼び出せません。getInstance()静的メソッドを使ってください。
     * @param {Symbol} enforcer [en] a Symbol to forbid calling this constructor directly [ja] このコンストラクタの直接呼び出しを禁止するためのシンボル
     */

    function ObjLoader(enforcer) {
      babelHelpers.classCallCheck(this, ObjLoader);

      if (enforcer !== singletonEnforcer) {
        throw new Error("This is a Singleton class. get the instance using 'getInstance' static method.");
      }
    }

    /**
     * [en] The static method to get singleton instance of this class.<br>
     * [ja] このクラスのシングルトンインスタンスを取得するための静的メソッド。
     * @return {ObjLoader} [en] the singleton instance of ObjLoader class [ja] ObjLoaderクラスのシングルトンインスタンス
     */


    babelHelpers.createClass(ObjLoader, [{
      key: 'loadObj',


      /**
       * [en] the method to load Obj file.<br>
       * [ja] Obj fileをロードするためのメソッド。
       * @param {string} url [en] url of glTF file [ja] Objファイルのurl
       * @param {Shader} defaultShader [en] a shader to assign to loaded geometries [ja] 読み込んだジオメトリに適用するシェーダー
       * @param {string} mtlString [en] string of mtl file (optional) [ja] mtlファイルの内容の文字列情報（オプショナル。mtlファイルの読み込みが何らかの事情でできない場合に使います）
       * @param {HTMLCanvas|string} canvas [en] canvas or canvas' id string. [ja] canvasまたはcanvasのid文字列
       * @return {Promise} [en] a promise object [ja] Promiseオブジェクト
       */
      value: function loadObj(glBoostContext, url) {
        var _this = this;

        var defaultShader = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
        var mtlString = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

        return new Promise(function (resolve, reject) {
          var xmlHttp = new XMLHttpRequest();
          xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && (Math.floor(xmlHttp.status / 100) === 2 || xmlHttp.status === 0)) {
              var gotText = xmlHttp.responseText;
              var partsOfPath = url.split('/');
              var basePath = '';
              for (var i = 0; i < partsOfPath.length - 1; i++) {
                basePath += partsOfPath[i] + '/';
              }
              _this._constructMesh(glBoostContext, gotText, basePath, defaultShader, mtlString, resolve);
            }
          };

          xmlHttp.open("GET", url, true);
          xmlHttp.send(null);
        });
      }
    }, {
      key: '_loadMaterialsFromString',
      value: function _loadMaterialsFromString(glBoostContext, mtlString, defaultShader) {
        var basePath = arguments.length <= 3 || arguments[3] === undefined ? '' : arguments[3];


        var mtlTextRows = mtlString.split('\n');

        var numMaterial = 0;
        // checking the number of material
        for (var i = 0; i < mtlTextRows.length; i++) {
          var matchArray = mtlTextRows[i].match(/^(\w+) (\w+)/);
          if (matchArray === null) {
            continue;
          }

          if (matchArray[1] === "newmtl") {
            numMaterial++;
          }
        }

        var materials = new Array(numMaterial);
        var iMCount = -1;

        // main loading
        for (var i = 0; i < mtlTextRows.length; i++) {
          var matchArray = mtlTextRows[i].match(/(\w+) ([\w:\/\-\.]+)/);

          if (matchArray === null) {
            continue;
          }

          if (matchArray[1] === "newmtl") {
            iMCount++;
            materials[iMCount] = glBoostContext.createClassicMaterial();
            if (defaultShader) {
              materials[iMCount].shaderClass = defaultShader;
            } else {
              materials[iMCount].shaderClass = PhongShader;
            }
            materials[iMCount].name = matchArray[2];
          }

          if (matchArray[1].toLowerCase() === "ka") {
            matchArray = mtlTextRows[i].match(/(\w+) ([0-9]+\.[0-9]+) ([0-9]+\.[0-9]+) ([0-9]+\.[0-9]+)/);
            materials[iMCount].ambientColor.x = parseFloat(matchArray[2]);
            materials[iMCount].ambientColor.y = parseFloat(matchArray[3]);
            materials[iMCount].ambientColor.z = parseFloat(matchArray[4]);
          }

          if (matchArray[1].toLowerCase() === "kd") {
            matchArray = mtlTextRows[i].match(/(\w+) ([0-9]+\.[0-9]+) ([0-9]+\.[0-9]+) ([0-9]+\.[0-9]+)/);
            materials[iMCount].diffuseColor.x = parseFloat(matchArray[2]);
            materials[iMCount].diffuseColor.y = parseFloat(matchArray[3]);
            materials[iMCount].diffuseColor.z = parseFloat(matchArray[4]);
          }

          if (matchArray[1].toLowerCase() === "ks") {
            matchArray = mtlTextRows[i].match(/(\w+) ([0-9]+\.[0-9]+) ([0-9]+\.[0-9]+) ([0-9]+\.[0-9]+)/);
            materials[iMCount].specularColor.x = parseFloat(matchArray[2]);
            materials[iMCount].specularColor.y = parseFloat(matchArray[3]);
            materials[iMCount].specularColor.z = parseFloat(matchArray[4]);
          }

          if (matchArray[1].toLowerCase() === "map_kd") {
            matchArray = mtlTextRows[i].match(/(\w+) ([\w:\/\-\.]+)/);
            var texture = glBoostContext.createTexture(basePath + matchArray[2], { flipY: true });
            texture.name = matchArray[2];
            materials[iMCount].diffuseTexture = texture;
          }
        }
        return materials;
      }
    }, {
      key: '_loadMaterialsFromFile',
      value: function _loadMaterialsFromFile(glBoostContext, basePath, fileName, defaultShader) {
        var _this2 = this;

        return new Promise(function (resolve, reject) {
          var xmlHttp = new XMLHttpRequest();
          xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && (Math.floor(xmlHttp.status / 100) === 2 || xmlHttp.status === 0)) {
              resolve(_this2._loadMaterialsFromString(glBoostContext, xmlHttp.responseText, defaultShader, basePath));
            }
          };

          xmlHttp.open("GET", basePath + fileName, true);
          xmlHttp.send(null);
        });
      }
    }, {
      key: '_constructMesh',
      value: function _constructMesh(glBoostContext, objText, basePath, defaultShader, mtlString, resolve) {
        var _this3 = this;

        console.log(basePath);

        var objTextRows = objText.split('\n');
        var promise = null;
        var vCount = 0;
        var fCount = 0;
        var vnCount = 0;
        var vtCount = 0;

        if (mtlString) {
          promise = function () {
            return new Promise(function (resolve, reject) {
              resolve(_this3._loadMaterialsFromString(glBoostContext, mtlString, defaultShader));
            });
          }();
        }

        for (var i = 0; i < objTextRows.length; i++) {
          var matchArray = objTextRows[i].match(/^(\w+) (\w+)/);
          if (matchArray === null) {
            continue;
          }

          // material file
          if (matchArray[1] === "mtllib" && mtlString === null) {
            promise = this._loadMaterialsFromFile(glBoostContext, basePath, matchArray[2] + '.mtl', defaultShader);
          }
        }

        promise.then(function (materials) {
          for (var i = 0; i < objTextRows.length; i++) {
            var matchArray = objTextRows[i].match(/^(\w+) +(\w+)/);
            if (matchArray === null) {
              continue;
            }

            // Vertex
            if (matchArray[1] === "v") {
              vCount++;
            }
            // Vertex Normal
            if (matchArray[1] === "vn") {
              vnCount++;
            }
            // Texcoord
            if (matchArray[1] === "vt") {
              vtCount++;
            }
            // Face
            if (matchArray[1] === "f") {
              matchArray = objTextRows[i].match(/^(\w+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+)/);
              if (matchArray !== null) {
                // if this is a Quad Polygon
                fCount += 2;
              } else {
                fCount++;
              }
            }
          }

          var pvCoord = new Array(vCount);
          var pvNormal = new Array(vnCount);
          var pvTexture = new Array(vtCount);

          vCount = 0;
          vnCount = 0;
          vtCount = 0;

          for (var i = 0; i < objTextRows.length; i++) {
            //キーワード 読み込み
            var matchArray = objTextRows[i].match(/^(\w+) /);

            if (matchArray === null) {
              continue;
            }

            //頂点 読み込み
            if (matchArray[1] === "v") {
              matchArray = objTextRows[i].match(/^(\w+) +(-?[0-9\.]+) (-?[0-9\.]+) (-?[0-9\.]+)/);
              //          pvCoord[vCount].x=-x;//OBJは右手、Direct3Dは左手座標系。
              pvCoord[vCount] = new Vector3();
              pvCoord[vCount].x = parseFloat(matchArray[2]);
              pvCoord[vCount].y = parseFloat(matchArray[3]);
              pvCoord[vCount].z = parseFloat(matchArray[4]);
              vCount++;
            }

            //法線 読み込み
            if (matchArray[1] === "vn") {
              matchArray = objTextRows[i].match(/^(\w+) (-?[0-9\.]+) (-?[0-9\.]+) (-?[0-9\.]+)/);
              //          pvNormal[vnCount].x=-x;//OBJは右手、Direct3Dは左手座標系。
              pvNormal[vnCount] = new Vector3();
              pvNormal[vnCount].x = parseFloat(matchArray[2]);
              pvNormal[vnCount].y = parseFloat(matchArray[3]);
              pvNormal[vnCount].z = parseFloat(matchArray[4]);
              vnCount++;
            }

            //テクスチャー座標 読み込み
            if (matchArray[1] === "vt") {
              matchArray = objTextRows[i].match(/^(\w+) (-?[0-9\.]+) (-?[0-9\.]+)/);
              pvTexture[vtCount] = new Vector2();
              pvTexture[vtCount].x = parseFloat(matchArray[2]);
              pvTexture[vtCount].y = parseFloat(matchArray[3]);
              //pvTexture[vtCount].y = 1 - pvTexture[vtCount].y; //Y成分が逆なので合わせる

              vtCount++;
            }
          }

          var positions = new Array();
          var texcoords = new Array();
          var normals = new Array();
          var indices = [];

          var boFlag = false;

          var FaceN = fCount;
          fCount = 0;
          var partFCount = 0;

          var geometry = glBoostContext.createGeometry();

          for (var i = 0; i < materials.length; i++) {
            partFCount = 0;
            var matIndices = new Array();
            var tmpIndices = new Array();
            var tmpPositions = new Array();
            var tmpTexcoords = new Array();
            var tmpNormals = new Array();

            var _i = 0;
            for (var j = 0; j < objTextRows.length && fCount < FaceN; j++) {
              var matchArray = objTextRows[j].match(/^(\w+) (\w+)/);

              if (matchArray === null) {
                continue;
              }

              if (matchArray[1] === "usemtl") {
                if (matchArray[2] === materials[i].name) {
                  boFlag = true;
                } else {
                  boFlag = false;
                }
              }

              if (matchArray[1] === "f" && boFlag) {
                var isQuad = true;
                var _matchArray = objTextRows[j].match(/^(\w+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+)/);if (_matchArray === null) {
                  _matchArray = objTextRows[j].match(/^(\w+) (\d+)\/\/(\d+) (\d+)\/\/(\d+) (\d+)\/\/(\d+) (\d+)\/\/(\d+)/);
                }
                if (_matchArray === null) {
                  isQuad = false;
                }

                if (materials[i].diffuseTexture) {
                  if (isQuad) {
                    _this3._addQuadDataToArraysWithTexture(tmpPositions, tmpNormals, tmpTexcoords, pvCoord, pvNormal, pvTexture, objTextRows[j], fCount);
                  } else {
                    _this3._addTriangleDataToArraysWithTexture(tmpPositions, tmpNormals, tmpTexcoords, pvCoord, pvNormal, pvTexture, objTextRows[j], fCount);
                  }
                } else {
                  if (isQuad) {
                    _this3._addQuadDataToArraysWithoutTexture(tmpPositions, tmpNormals, tmpTexcoords, pvCoord, pvNormal, pvTexture, objTextRows[j], fCount);
                  } else {
                    _this3._addTriangleDataToArraysWithoutTexture(tmpPositions, tmpNormals, tmpTexcoords, pvCoord, pvNormal, pvTexture, objTextRows[j], fCount);
                  }
                }

                _i = _this3._reductionVertices(positions, normals, texcoords, tmpPositions, tmpNormals, tmpTexcoords, fCount * 3, matIndices, tmpIndices, _i);
                _i = _this3._reductionVertices(positions, normals, texcoords, tmpPositions, tmpNormals, tmpTexcoords, fCount * 3 + 1, matIndices, tmpIndices, _i);
                _i = _this3._reductionVertices(positions, normals, texcoords, tmpPositions, tmpNormals, tmpTexcoords, fCount * 3 + 2, matIndices, tmpIndices, _i);

                /*
                iFaceBufferArray[partFCount*3]=fCount*3;
                iFaceBufferArray[partFCount*3+1]=fCount*3+1;
                iFaceBufferArray[partFCount*3+2]=fCount*3+2;
                */
                if (isQuad) {
                  /*
                  iFaceBufferArray[partFCount*3+3]=fCount*3+3;
                  iFaceBufferArray[partFCount*3+4]=fCount*3+4;
                  iFaceBufferArray[partFCount*3+5]=fCount*3+5;
                  */
                  _i = _this3._reductionVertices(positions, normals, texcoords, tmpPositions, tmpNormals, tmpTexcoords, fCount * 3 + 3, matIndices, tmpIndices, _i);
                  _i = _this3._reductionVertices(positions, normals, texcoords, tmpPositions, tmpNormals, tmpTexcoords, fCount * 3 + 4, matIndices, tmpIndices, _i);
                  _i = _this3._reductionVertices(positions, normals, texcoords, tmpPositions, tmpNormals, tmpTexcoords, fCount * 3 + 5, matIndices, tmpIndices, _i);

                  partFCount += 2;
                  fCount += 2;
                } else {
                  partFCount++;
                  fCount++;
                }
              }
            }

            if (fCount === 0) //使用されていないマテリアル対策
              {
                continue;
              }

            //        materials[i].setVertexN(geometry, partFCount*3);
            materials[i].setVertexN(geometry, matIndices.length);

            //indices[i] = iFaceBufferArray.concat();
            indices[i] = matIndices.concat();
          }

          var mesh = glBoostContext.createMesh(geometry, null);
          geometry.materials = materials;
          geometry.setVerticesData({
            position: positions,
            texcoord: texcoords,
            normal: normals
          }, indices);

          resolve(mesh);
        }).catch(function onRejected(error) {
          console.error(error);
        });
      }
    }, {
      key: '_reductionVertices',
      value: function _reductionVertices(positions, normals, texcoords, tmpPositions, tmpNormals, tmpTexcoords, vCount, matIndices, tmpIndices, _i) {
        var str = '' + tmpPositions[vCount].x + ',' + tmpPositions[vCount].y + ',' + tmpPositions[vCount].z + ',' + tmpNormals[vCount].x + ',' + tmpNormals[vCount].y + ',' + tmpNormals[vCount].z + ',' + tmpTexcoords[vCount].x + ',' + tmpTexcoords[vCount].y;

        var hashCode = Hash.toCRC32(str);
        if (typeof tmpIndices[hashCode] === 'undefined') {
          tmpIndices[hashCode] = _i;
          _i++;
          positions.push(tmpPositions[vCount]);
          normals.push(tmpNormals[vCount]);
          texcoords.push(tmpTexcoords[vCount]);
        }

        matIndices.push(tmpIndices[hashCode]);

        return _i;
      }
    }, {
      key: '_addTriangleDataToArraysWithTexture',
      value: function _addTriangleDataToArraysWithTexture(positions, normals, texcoords, pvCoord, pvNormal, pvTexture, stringToScan, fCount) {
        var v1 = 0,
            v2 = 0,
            v3 = 0;
        var vn1 = 0,
            vn2 = 0,
            vn3 = 0;
        var vt1 = 0,
            vt2 = 0,
            vt3 = 0;
        var matchArray = stringToScan.match(/^(\w+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+)/);

        if (matchArray !== null) {
          v1 = matchArray[2];
          vt1 = matchArray[3];
          vn1 = matchArray[4];
          v2 = matchArray[5];
          vt2 = matchArray[6];
          vn2 = matchArray[7];
          v3 = matchArray[8];
          vt3 = matchArray[9];
          vn3 = matchArray[10];
          positions[fCount * 3] = pvCoord[v1 - 1];
          positions[fCount * 3 + 1] = pvCoord[v2 - 1];
          positions[fCount * 3 + 2] = pvCoord[v3 - 1];
          normals[fCount * 3] = pvNormal[vn1 - 1];
          normals[fCount * 3 + 1] = pvNormal[vn2 - 1];
          normals[fCount * 3 + 2] = pvNormal[vn3 - 1];
          texcoords[fCount * 3] = pvTexture[vt1 - 1];
          texcoords[fCount * 3 + 1] = pvTexture[vt2 - 1];
          texcoords[fCount * 3 + 2] = pvTexture[vt3 - 1];
        } else {
          var _matchArray2 = stringToScan.match(/^(\w+) (\d+)\/\/(\d+) (\d+)\/\/(\d+) (\d+)\/\/(\d+)/);
          v1 = _matchArray2[2];
          vn1 = _matchArray2[3];
          v2 = _matchArray2[4];
          vn2 = _matchArray2[5];
          v3 = _matchArray2[6];
          vn3 = _matchArray2[7];
          positions[fCount * 3] = pvCoord[v1 - 1];
          positions[fCount * 3 + 1] = pvCoord[v2 - 1];
          positions[fCount * 3 + 2] = pvCoord[v3 - 1];
          normals[fCount * 3] = pvNormal[vn1 - 1];
          normals[fCount * 3 + 1] = pvNormal[vn2 - 1];
          normals[fCount * 3 + 2] = pvNormal[vn3 - 1];
        }
      }
    }, {
      key: '_addTriangleDataToArraysWithoutTexture',
      value: function _addTriangleDataToArraysWithoutTexture(positions, normals, texcoords, pvCoord, pvNormal, pvTexture, stringToScan, fCount) {
        var v1 = 0,
            v2 = 0,
            v3 = 0;
        var vn1 = 0,
            vn2 = 0,
            vn3 = 0;
        var vt1 = 0,
            vt2 = 0,
            vt3 = 0;
        var matchArray = stringToScan.match(/^(\w+) (\d+)\/\/(\d+) (\d+)\/\/(\d+) (\d+)\/\/(\d+)/);

        if (matchArray !== null) {
          v1 = matchArray[2];
          vn1 = matchArray[3];
          v2 = matchArray[4];
          vn2 = matchArray[5];
          v3 = matchArray[6];
          vn3 = matchArray[7];

          positions[fCount * 3] = pvCoord[v1 - 1];
          positions[fCount * 3 + 1] = pvCoord[v2 - 1];
          positions[fCount * 3 + 2] = pvCoord[v3 - 1];
          normals[fCount * 3] = pvNormal[vn1 - 1];
          normals[fCount * 3 + 1] = pvNormal[vn2 - 1];
          normals[fCount * 3 + 2] = pvNormal[vn3 - 1];
        } else {
          var _matchArray3 = stringToScan.match(/^(\w+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+)/);
          v1 = _matchArray3[2];
          vt1 = _matchArray3[3];
          vn1 = _matchArray3[4];
          v2 = _matchArray3[5];
          vt2 = _matchArray3[6];
          vn2 = _matchArray3[7];
          v3 = _matchArray3[8];
          vt3 = _matchArray3[9];
          vn3 = _matchArray3[10];

          positions[fCount * 3] = pvCoord[v1 - 1];
          positions[fCount * 3 + 1] = pvCoord[v2 - 1];
          positions[fCount * 3 + 2] = pvCoord[v3 - 1];
          normals[fCount * 3] = pvNormal[vn1 - 1];
          normals[fCount * 3 + 1] = pvNormal[vn2 - 1];
          normals[fCount * 3 + 2] = pvNormal[vn3 - 1];
          texcoords[fCount * 3] = pvTexture[vt1 - 1];
          texcoords[fCount * 3 + 1] = pvTexture[vt2 - 1];
          texcoords[fCount * 3 + 2] = pvTexture[vt3 - 1];
        }
      }
    }, {
      key: '_addQuadDataToArraysWithTexture',
      value: function _addQuadDataToArraysWithTexture(positions, normals, texcoords, pvCoord, pvNormal, pvTexture, stringToScan, fCount) {
        var v1 = 0,
            v2 = 0,
            v3 = 0,
            v4 = 0;
        var vn1 = 0,
            vn2 = 0,
            vn3 = 0,
            vn4 = 0;
        var vt1 = 0,
            vt2 = 0,
            vt3 = 0,
            vt4 = 0;
        var matchArray = stringToScan.match(/^(\w+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+)/);

        if (matchArray !== null) {
          v1 = matchArray[2];
          vt1 = matchArray[3];
          vn1 = matchArray[4];
          v2 = matchArray[5];
          vt2 = matchArray[6];
          vn2 = matchArray[7];
          v3 = matchArray[8];
          vt3 = matchArray[9];
          vn3 = matchArray[10];
          v4 = matchArray[11];
          vt4 = matchArray[12];
          vn4 = matchArray[13];

          positions[fCount * 3] = pvCoord[v1 - 1];
          normals[fCount * 3] = pvNormal[vn1 - 1];
          texcoords[fCount * 3] = pvTexture[vt1 - 1];
          positions[fCount * 3 + 1] = pvCoord[v2 - 1];
          normals[fCount * 3 + 1] = pvNormal[vn2 - 1];
          texcoords[fCount * 3 + 1] = pvTexture[vt2 - 1];
          positions[fCount * 3 + 2] = pvCoord[v3 - 1];
          normals[fCount * 3 + 2] = pvNormal[vn3 - 1];
          texcoords[fCount * 3 + 2] = pvTexture[vt3 - 1];

          positions[fCount * 3 + 3] = pvCoord[v3 - 1];
          normals[fCount * 3 + 3] = pvNormal[vn3 - 1];
          texcoords[fCount * 3 + 3] = pvTexture[vt3 - 1];
          positions[fCount * 3 + 4] = pvCoord[v4 - 1];
          normals[fCount * 3 + 4] = pvNormal[vn4 - 1];
          texcoords[fCount * 3 + 4] = pvTexture[vt4 - 1];
          positions[fCount * 3 + 5] = pvCoord[v1 - 1];
          normals[fCount * 3 + 5] = pvNormal[vn1 - 1];
          texcoords[fCount * 3 + 5] = pvTexture[vt1 - 1];
        } else {
          var _matchArray4 = stringToScan.match(/^(\w+) (\d+)\/\/(\d+) (\d+)\/\/(\d+) (\d+)\/\/(\d+) (\d+)\/\/(\d+)/);
          v1 = _matchArray4[2];
          vn1 = _matchArray4[3];
          v2 = _matchArray4[4];
          vn2 = _matchArray4[5];
          v3 = _matchArray4[6];
          vn3 = _matchArray4[7];
          v4 = _matchArray4[8];
          vn4 = _matchArray4[9];

          positions[fCount * 3] = pvCoord[v1 - 1];
          normals[fCount * 3] = pvNormal[vn1 - 1];
          positions[fCount * 3 + 1] = pvCoord[v2 - 1];
          normals[fCount * 3 + 1] = pvNormal[vn2 - 1];
          positions[fCount * 3 + 2] = pvCoord[v3 - 1];
          normals[fCount * 3 + 2] = pvNormal[vn3 - 1];

          positions[fCount * 3 + 3] = pvCoord[v3 - 1];
          normals[fCount * 3 + 3] = pvNormal[vn3 - 1];
          positions[fCount * 3 + 4] = pvCoord[v4 - 1];
          normals[fCount * 3 + 4] = pvNormal[vn4 - 1];
          positions[fCount * 3 + 5] = pvCoord[v1 - 1];
          normals[fCount * 3 + 5] = pvNormal[vn1 - 1];
        }
      }
    }, {
      key: '_addQuadDataToArraysWithoutTexture',
      value: function _addQuadDataToArraysWithoutTexture(positions, normals, texcoords, pvCoord, pvNormal, pvTexture, stringToScan, fCount) {
        var v1 = 0,
            v2 = 0,
            v3 = 0,
            v4 = 0;
        var vn1 = 0,
            vn2 = 0,
            vn3 = 0,
            vn4 = 0;
        var vt1 = 0,
            vt2 = 0,
            vt3 = 0,
            vt4 = 0;
        var matchArray = stringToScan.match(/^(\w+) (\d+)\/\/(\d+) (\d+)\/\/(\d+) (\d+)\/\/(\d+) (\d+)\/\/(\d+)/);
        if (matchArray !== null) {
          v1 = matchArray[2];
          vn1 = matchArray[3];
          v2 = matchArray[4];
          vn2 = matchArray[5];
          v3 = matchArray[6];
          vn3 = matchArray[7];
          v4 = matchArray[8];
          vn4 = matchArray[9];
          positions[fCount * 3] = pvCoord[v1 - 1];
          normals[fCount * 3] = pvNormal[vn1 - 1];
          positions[fCount * 3 + 1] = pvCoord[v2 - 1];
          normals[fCount * 3 + 1] = pvNormal[vn2 - 1];
          positions[fCount * 3 + 2] = pvCoord[v3 - 1];
          normals[fCount * 3 + 2] = pvNormal[vn3 - 1];

          positions[fCount * 3 + 3] = pvCoord[v3 - 1];
          normals[fCount * 3 + 3] = pvNormal[vn3 - 1];
          positions[fCount * 3 + 4] = pvCoord[v4 - 1];
          normals[fCount * 3 + 4] = pvNormal[vn4 - 1];
          positions[fCount * 3 + 5] = pvCoord[v1 - 1];
          normals[fCount * 3 + 5] = pvNormal[vn1 - 1];
        } else {
          var _matchArray5 = stringToScan.match(/^(\w+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+)/);
          v1 = _matchArray5[2];
          vt1 = _matchArray5[3];
          vn1 = _matchArray5[4];
          v2 = _matchArray5[5];
          vt2 = _matchArray5[6];
          vn2 = _matchArray5[7];
          v3 = _matchArray5[8];
          vt3 = _matchArray5[9];
          vn3 = _matchArray5[10];
          v4 = _matchArray5[11];
          vt4 = _matchArray5[12];
          vn4 = _matchArray5[13];

          positions[fCount * 3] = pvCoord[v1 - 1];
          normals[fCount * 3] = pvNormal[vn1 - 1];
          texcoords[fCount * 3] = pvTexture[vt1 - 1];
          positions[fCount * 3 + 1] = pvCoord[v2 - 1];
          normals[fCount * 3 + 1] = pvNormal[vn2 - 1];
          texcoords[fCount * 3 + 1] = pvTexture[vt2 - 1];
          positions[fCount * 3 + 2] = pvCoord[v3 - 1];
          normals[fCount * 3 + 2] = pvNormal[vn3 - 1];
          texcoords[fCount * 3 + 2] = pvTexture[vt3 - 1];

          positions[fCount * 3 + 3] = pvCoord[v3 - 1];
          normals[fCount * 3 + 3] = pvNormal[vn3 - 1];
          texcoords[fCount * 3 + 3] = pvTexture[vt3 - 1];
          positions[fCount * 3 + 4] = pvCoord[v4 - 1];
          normals[fCount * 3 + 4] = pvNormal[vn4 - 1];
          texcoords[fCount * 3 + 4] = pvTexture[vt4 - 1];
          positions[fCount * 3 + 5] = pvCoord[v1 - 1];
          normals[fCount * 3 + 5] = pvNormal[vn1 - 1];
          texcoords[fCount * 3 + 5] = pvTexture[vt1 - 1];
        }
      }
    }], [{
      key: 'getInstance',
      value: function getInstance() {
        if (!this[singleton]) {
          this[singleton] = new ObjLoader(singletonEnforcer);
        }
        return this[singleton];
      }
    }]);
    return ObjLoader;
  }();

  GLBoost$1["ObjLoader"] = ObjLoader;

  GLBoost$1['TARGET_WEBGL_VERSION'] = 1;
  GLBoost$1['DEFAULT_POINTLIGHT_INTENSITY'] = new Vector3(1, 1, 1);
  GLBoost$1['ANGLE_UNIT'] = GLBoost$1.DEGREE;
  GLBoost$1['WEBGL_ONE_USE_EXTENSIONS'] = true;
  GLBoost$1['CONSOLE_OUT_FOR_DEBUGGING'] = true;

  var singleton$1 = Symbol();
  var singletonEnforcer$1 = Symbol();

  /**
   * [en] This is a loader class of glTF file format. You can see more detail of glTF format at https://github.com/KhronosGroup/glTF .<br>
   * [ja] glTFファイルを読み込むためのローダークラスです。glTFファイルフォーマットについての詳細は https://github.com/KhronosGroup/glTF をご覧ください。
   */

  var GLTFLoader = function () {

    /**
     * [en] The constructor of GLTFLoader class. But you cannot use this constructor directly because of this class is a singleton class. Use getInstance() static method.<br>
     * [ja] GLTFLoaderクラスのコンストラクタです。しかし本クラスはシングルトンであるため、このコンストラクタは直接呼び出せません。getInstance()静的メソッドを使ってください。
     * @param {Symbol} enforcer [en] a Symbol to forbid calling this constructor directly [ja] このコンストラクタの直接呼び出しを禁止するためのシンボル
     */

    function GLTFLoader(enforcer) {
      babelHelpers.classCallCheck(this, GLTFLoader);

      if (enforcer !== singletonEnforcer$1) {
        throw new Error("This is a Singleton class. get the instance using 'getInstance' static method.");
      }
    }

    /**
     * [en] The static method to get singleton instance of this class.<br>
     * [ja] このクラスのシングルトンインスタンスを取得するための静的メソッド。
     * @return {GLTFLoader} [en] the singleton instance of GLTFLoader class [ja] GLTFLoaderクラスのシングルトンインスタンス
     */


    babelHelpers.createClass(GLTFLoader, [{
      key: 'loadGLTF',


      /**
       * [en] the method to load glTF file.<br>
       * [ja] glTF fileをロードするためのメソッド。
       * @param {string} url [en] url of glTF file [ja] glTFファイルのurl
       * @param {number} scale [en] scale of size of loaded models [ja] 読み込んだモデルのサイズのスケール
       * @param {Shader} defaultShader [en] a shader to assign to loaded geometries [ja] 読み込んだジオメトリに適用するシェーダー
       * @return {Promise} [en] a promise object [ja] Promiseオブジェクト
       */
      value: function loadGLTF(glBoostContext, url) {
        var _this = this;

        var scale = arguments.length <= 2 || arguments[2] === undefined ? 1.0 : arguments[2];
        var defaultShader = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

        return new Promise(function (resolve, reject) {
          var xmlHttp = new XMLHttpRequest();
          xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && (Math.floor(xmlHttp.status / 100) === 2 || xmlHttp.status === 0)) {
              var gotText = xmlHttp.responseText;
              var partsOfPath = url.split('/');
              var basePath = '';
              for (var i = 0; i < partsOfPath.length - 1; i++) {
                basePath += partsOfPath[i] + '/';
              }
              console.log(basePath);
              _this._constructMesh(glBoostContext, gotText, basePath, canvas, scale, defaultShader, resolve);
            }
          };

          xmlHttp.open("GET", url, true);
          xmlHttp.send(null);
        });
      }
    }, {
      key: '_constructMesh',
      value: function _constructMesh(glBoostContext, gotText, basePath, canvas, scale, defaultShader, resolve) {
        var json = JSON.parse(gotText);

        for (var bufferName in json.buffers) {
          //console.log("name: " + bufferName + " data:" + );
          var bufferInfo = json.buffers[bufferName];

          if (bufferInfo.uri.match(/^data:application\/octet-stream;base64,/)) {
            this._loadBinaryFile(glBoostContext, bufferInfo.uri, basePath, json, canvas, scale, defaultShader, resolve);
          } else {
            this._loadBinaryFileUsingXHR(glBoostContext, basePath + bufferInfo.uri, basePath, json, canvas, scale, defaultShader, resolve);
          }
        }
      }
    }, {
      key: '_loadBinaryFile',
      value: function _loadBinaryFile(glBoostContext, dataUrI, basePath, json, canvas, scale, defaultShader, resolve) {
        dataUrI = dataUrI.split(',');
        var type = dataUrI[0].split(':')[1].split(';')[0];
        var byteString = atob(dataUrI[1]);
        var byteStringLength = byteString.length;
        var arrayBuffer = new ArrayBuffer(byteStringLength);
        var intArray = new Uint8Array(arrayBuffer);
        for (var i = 0; i < byteStringLength; i++) {
          intArray[i] = byteString.charCodeAt(i);
        }

        if (arrayBuffer) {
          this._IterateNodeOfScene(glBoostContext, arrayBuffer, basePath, json, canvas, scale, defaultShader, resolve);
        }
      }
    }, {
      key: '_loadBinaryFileUsingXHR',
      value: function _loadBinaryFileUsingXHR(glBoostContext, binaryFilePath, basePath, json, canvas, scale, defaultShader, resolve) {
        var _this2 = this;

        var oReq = new XMLHttpRequest();
        oReq.open("GET", binaryFilePath, true);
        oReq.responseType = "arraybuffer";

        oReq.onload = function (oEvent) {
          var arrayBuffer = oReq.response; // Note: not oReq.responseText

          if (arrayBuffer) {
            _this2._IterateNodeOfScene(glBoostContext, arrayBuffer, basePath, json, canvas, scale, defaultShader, resolve);
          }
        };

        oReq.send(null);
      }
    }, {
      key: '_IterateNodeOfScene',
      value: function _IterateNodeOfScene(glBoostContext, arrayBuffer, basePath, json, canvas, scale, defaultShader, resolve) {
        var sceneJson = json.scenes.defaultScene;

        var group = glBoostContext.createGroup();
        group.userFlavorName = 'TopGroup';
        var nodeStr = null;
        for (var i = 0; i < sceneJson.nodes.length; i++) {
          nodeStr = sceneJson.nodes[i];

          // iterate nodes and load meshes
          var element = this._recursiveIterateNode(glBoostContext, nodeStr, arrayBuffer, basePath, json, canvas, scale, defaultShader);
          group.addChild(element);
        }

        // register joints hierarchy to skeletal mesh
        var skeletalMeshes = group.searchElementsByType(SkeletalMesh);
        skeletalMeshes.forEach(function (skeletalMesh) {
          var rootJoint = group.searchElement(skeletalMesh.rootJointName);
          skeletalMesh.jointsHierarchy = rootJoint;
        });

        // Animation
        this._loadAnimation(group, arrayBuffer, json, canvas, scale);

        resolve(group);
      }
    }, {
      key: '_recursiveIterateNode',
      value: function _recursiveIterateNode(glBoostContext, nodeStr, arrayBuffer, basePath, json, canvas, scale, defaultShader) {
        var nodeJson = json.nodes[nodeStr];
        var group = glBoostContext.createGroup();
        group.userFlavorName = nodeStr;

        if (nodeJson.translation) {
          group.translate = new Vector3(nodeJson.translation[0], nodeJson.translation[1], nodeJson.translation[2]);
        }
        if (nodeJson.scale) {
          group.scale = new Vector3(nodeJson.scale[0], nodeJson.scale[1], nodeJson.scale[2]);
        }
        if (nodeJson.rotation) {
          group.quaternion = new Quaternion(nodeJson.rotation[0], nodeJson.rotation[1], nodeJson.rotation[2], nodeJson.rotation[3]);
        }
        if (nodeJson.matrix) {
          group.multiplyMatrix(new Matrix44(nodeJson.matrix, true));
        }

        if (nodeJson.meshes) {
          // this node has mashes...
          var meshStr = nodeJson.meshes[0];
          var meshJson = json.meshes[meshStr];

          var rootJointStr = null;
          var skinStr = null;
          if (nodeJson.skeletons) {
            rootJointStr = nodeJson.skeletons[0];
            skinStr = nodeJson.skin;
          }
          var mesh = this._loadMesh(glBoostContext, meshJson, arrayBuffer, basePath, json, canvas, scale, defaultShader, rootJointStr, skinStr);
          mesh.userFlavorName = meshStr;
          group.addChild(mesh);
        } else if (nodeJson.jointName) {
          var joint = glBoostContext.createJoint();
          joint.userFlavorName = nodeJson.jointName;
          group.addChild(joint);
        }

        for (var i = 0; i < nodeJson.children.length; i++) {
          var _nodeStr = nodeJson.children[i];
          var childElement = this._recursiveIterateNode(glBoostContext, _nodeStr, arrayBuffer, basePath, json, canvas, scale, defaultShader);
          group.addChild(childElement);
        }

        return group;
      }
    }, {
      key: '_loadMesh',
      value: function _loadMesh(glBoostContext, meshJson, arrayBuffer, basePath, json, canvas, scale, defaultShader, rootJointStr, skinStr) {
        var mesh = null;
        var geometry = null;
        var gl = GLContext.getInstance(canvas).gl;
        if (rootJointStr) {
          geometry = glBoostContext.createSkeletalGeometry();
          mesh = glBoostContext.createSkeletalMesh(geometry, null, rootJointStr);
          var skin = json.skins[skinStr];

          mesh.multiplyMatrix(new Matrix44(skin.bindShapeMatrix, true));

          var inverseBindMatricesAccessorStr = skin.inverseBindMatrices;
          mesh.inverseBindMatrices = this._accessBinary(inverseBindMatricesAccessorStr, json, arrayBuffer, 1.0, gl);
        } else {
          geometry = glBoostContext.createGeometry(canvas);
          mesh = glBoostContext.createMesh(geometry);
        }
        var material = glBoostContext.createClassicMaterial(canvas);

        var primitiveJson = meshJson.primitives[0];

        // Geometry
        var indicesAccessorStr = primitiveJson.indices;
        var indices = this._accessBinary(indicesAccessorStr, json, arrayBuffer, 1.0, gl);

        var positionsAccessorStr = primitiveJson.attributes.POSITION;
        var positions = this._accessBinary(positionsAccessorStr, json, arrayBuffer, scale, gl);

        var normalsAccessorStr = primitiveJson.attributes.NORMAL;
        var normals = this._accessBinary(normalsAccessorStr, json, arrayBuffer, 1.0, gl);

        var additional = {};

        /// if Skeletal
        var jointAccessorStr = primitiveJson.attributes.JOINT;
        if (jointAccessorStr) {
          var joints = this._accessBinary(jointAccessorStr, json, arrayBuffer, 1.0, gl);
          additional['joint'] = joints;
        }
        var weightAccessorStr = primitiveJson.attributes.WEIGHT;
        if (weightAccessorStr) {
          var weights = this._accessBinary(weightAccessorStr, json, arrayBuffer, 1.0, gl);
          additional['weight'] = weights;
        }

        // Texture
        var texcoords0AccessorStr = primitiveJson.attributes.TEXCOORD_0;
        var texcoords = null;

        var materialStr = primitiveJson.material;
        var materialJson = json.materials[materialStr];
        var diffuseValue = materialJson.values.diffuse;
        // Diffuse Texture
        if (texcoords0AccessorStr) {
          texcoords = this._accessBinary(texcoords0AccessorStr, json, arrayBuffer, 1.0, gl);
          additional['texcoord'] = texcoords;

          if (typeof diffuseValue === 'string') {
            var textureStr = diffuseValue;
            var textureJson = json.textures[textureStr];
            var imageStr = textureJson.source;
            var imageJson = json.images[imageStr];
            var imageFileStr = imageJson.uri;

            var texture = glBoostContext.createTexture(basePath + imageFileStr);
            texture.name = textureStr;
            material.diffuseTexture = texture;
          }
        }
        // Diffuse
        if (diffuseValue && typeof diffuseValue !== 'string') {
          material.diffuseColor = new Vector4(diffuseValue[0], diffuseValue[1], diffuseValue[2], diffuseValue[3]);
        }
        // Ambient
        var ambientValue = materialJson.values.ambient;
        if (ambientValue && typeof ambientValue !== 'string') {
          material.ambientColor = new Vector4(ambientValue[0], ambientValue[1], ambientValue[2], ambientValue[3]);
        }
        // Specular
        var specularValue = materialJson.values.specular;
        if (specularValue && typeof specularValue !== 'string') {
          material.specularColor = new Vector4(specularValue[0], specularValue[1], specularValue[2], specularValue[3]);
        }

        var opacityValue = 1.0 - materialJson.values.transparency;

        var vertexData = {
          position: positions,
          normal: normals
        };

        geometry.setVerticesData(ArrayUtil.merge(vertexData, additional), [indices]);

        material.setVertexN(geometry, indices.length);
        if (defaultShader) {
          material.shaderClass = defaultShader;
        } else {
          material.shaderClass = PhongShader;
        }
        geometry.materials = [material];

        return mesh;
      }
    }, {
      key: '_loadAnimation',
      value: function _loadAnimation(element, arrayBuffer, json, canvas, scale) {
        var animationJson = null;
        for (var anim in json.animations) {
          animationJson = json.animations[anim];
          if (animationJson) {
            for (var i = 0; i < animationJson.channels.length; i++) {
              var channelJson = animationJson.channels[i];
              if (!channelJson) {
                continue;
              }

              var targetMeshStr = channelJson.target.id;
              var targetPathStr = channelJson.target.path;
              var samplerStr = channelJson.sampler;
              var samplerJson = animationJson.samplers[samplerStr];
              var animInputStr = samplerJson.input;
              var animOutputStr = samplerJson.output;
              var animInputAccessorStr = animationJson.parameters[animInputStr];
              var animOutputAccessorStr = animationJson.parameters[animOutputStr];

              var gl = GLContext.getInstance(canvas).gl;
              var animInputArray = this._accessBinary(animInputAccessorStr, json, arrayBuffer, 1.0, gl);
              if (animOutputStr === 'translation') {
                var animOutputArray = this._accessBinary(animOutputAccessorStr, json, arrayBuffer, scale, gl);
              } else if (animOutputStr === 'rotation') {
                var animOutputArray = this._accessBinary(animOutputAccessorStr, json, arrayBuffer, 1.0, gl, true);
              } else {
                var animOutputArray = this._accessBinary(animOutputAccessorStr, json, arrayBuffer, 1.0, gl);
              }

              var animationAttributeName = '';
              if (animOutputStr === 'translation') {
                animationAttributeName = 'translate';
              } else if (animOutputStr === 'rotation') {
                animationAttributeName = 'quaternion';
              } else {
                animationAttributeName = animOutputStr;
              }

              var hitElement = element.searchElement(targetMeshStr);
              if (hitElement) {
                hitElement.setAnimationAtLine('time', animationAttributeName, animInputArray, animOutputArray);
                hitElement.setActiveAnimationLine('time');
                hitElement.currentCalcMode = 'quaternion';
              }
            }
          }
        }
      }
    }, {
      key: '_accessBinary',
      value: function _accessBinary(accessorStr, json, arrayBuffer, scale, gl) {
        var quaternionIfVec4 = arguments.length <= 5 || arguments[5] === undefined ? false : arguments[5];

        var accessorJson = json.accessors[accessorStr];
        var bufferViewStr = accessorJson.bufferView;
        var bufferViewJson = json.bufferViews[bufferViewStr];
        var byteOffset = bufferViewJson.byteOffset + accessorJson.byteOffset;

        var componentN = 0;
        switch (accessorJson.type) {
          case 'SCALAR':
            componentN = 1;
            break;
          case 'VEC2':
            componentN = 2;
            break;
          case 'VEC3':
            componentN = 3;
            break;
          case 'VEC4':
            componentN = 4;
            break;
          case 'MAT4':
            componentN = 16;
            break;
        }

        var bytesPerComponent = 0;
        var dataViewMethod = '';
        switch (accessorJson.componentType) {
          case gl.UNSIGNED_SHORT:
            bytesPerComponent = 2;
            dataViewMethod = 'getUint16';
            break;
          case gl.FLOAT:
            bytesPerComponent = 4;
            dataViewMethod = 'getFloat32';
            break;
        }

        var byteLength = bytesPerComponent * componentN * accessorJson.count;

        var vertexAttributeArray = [];
        var dataView = new DataView(arrayBuffer, byteOffset, byteLength);
        var byteDelta = bytesPerComponent * componentN;
        var littleEndian = true;
        for (var pos = 0; pos < byteLength; pos += byteDelta) {

          switch (accessorJson.type) {
            case 'SCALAR':
              vertexAttributeArray.push(dataView[dataViewMethod](pos, littleEndian));
              break;
            case 'VEC2':
              vertexAttributeArray.push(new Vector2(dataView[dataViewMethod](pos, littleEndian) * scale, dataView[dataViewMethod](pos + bytesPerComponent, littleEndian) * scale));
              break;
            case 'VEC3':
              vertexAttributeArray.push(new Vector3(dataView[dataViewMethod](pos, littleEndian) * scale, dataView[dataViewMethod](pos + bytesPerComponent, littleEndian) * scale, dataView[dataViewMethod](pos + bytesPerComponent * 2, littleEndian) * scale));
              break;
            case 'VEC4':
              if (quaternionIfVec4) {
                vertexAttributeArray.push(new Quaternion(dataView[dataViewMethod](pos, littleEndian), dataView[dataViewMethod](pos + bytesPerComponent, littleEndian), dataView[dataViewMethod](pos + bytesPerComponent * 2, littleEndian), dataView[dataViewMethod](pos + bytesPerComponent * 3, littleEndian)));
              } else {
                vertexAttributeArray.push(new Vector4(dataView[dataViewMethod](pos, littleEndian) * scale, dataView[dataViewMethod](pos + bytesPerComponent, littleEndian) * scale, dataView[dataViewMethod](pos + bytesPerComponent * 2, littleEndian) * scale, dataView[dataViewMethod](pos + bytesPerComponent * 3, littleEndian)));
              }
              break;
            case 'MAT4':
              var matrixComponents = [];
              for (var i = 0; i < 16; i++) {
                matrixComponents[i] = dataView[dataViewMethod](pos + bytesPerComponent * i, littleEndian) * scale;
              }
              vertexAttributeArray.push(new Matrix44(matrixComponents, true));
              break;
          }
        }

        return vertexAttributeArray;
      }
    }], [{
      key: 'getInstance',
      value: function getInstance() {
        if (!this[singleton$1]) {
          this[singleton$1] = new GLTFLoader(singletonEnforcer$1);
        }
        return this[singleton$1];
      }
    }]);
    return GLTFLoader;
  }();

  GLBoost$1["GLTFLoader"] = GLTFLoader;

  if (typeof phina !== 'undefined') {

    phina.namespace(function () {

      /**
       * @class
       */
      phina.define('phina.display.GLBoostLayer', {
        superClass: 'phina.display.Layer',

        scene: null,
        expression: null,
        camera: null,
        light: null,
        glBoostContext: null,
        renderer: null,
        canvas: null,

        /** 子供を 自分のCanvasRenderer で描画するか */
        renderChildBySelf: false,

        init: function init(params) {
          this.superInit(params);
          this.originX = 0;
          this.originY = 0;

          this.canvas = document.createElement("canvas");
          this.canvas.id = 'glboost_world';
          this.canvas.width = params.width;
          this.canvas.height = params.height;
          var bodyElm = document.getElementsByTagName("body").item(0);
          bodyElm.appendChild(this.canvas);
          this.canvas.style.display = "none";

          this.glBoostContext = new GLBoostMiddleContext(this.canvas);
          // レンダラーを生成
          this.renderer = this.glBoostContext.createRenderer({ clearColor: { red: 1, green: 1, blue: 1, alpha: 1 } });
          this.scene = this.glBoostContext.createScene();
          this.expression = this.glBoostContext.createExpressionAndRenderPaths(1);
          this.expression.renderPaths[0].scene = this.scene;

          this.on('enterframe', function () {
            if (this.scene) {
              this.renderer.clearCanvas();
              this.renderer.draw(this.expression);
            }
          });

          this.domElement = this.canvas;
        }
      });

      phina.define("phina.display.OffScreenLayer", {
        superClass: 'phina.display.Layer',

        /**
         * 子孫要素の描画の面倒を自分で見る
         */
        renderChildBySelf: true,

        /** 子孫要素を普通に描画するためのキャンバス */
        canvas2d: null,
        /** canvas2dに描画するレンダラー */
        renderer2d: null,

        width: 0,
        height: 0,

        init: function init(params) {
          this.superInit();

          this.width = params.width;
          this.height = params.height;

          this.canvas2d = phina.graphics.Canvas();
          this.canvas2d.setSize(this.width, this.height);

          this.renderer2d = phina.display.CanvasRenderer(this.canvas2d);
        },

        reset: function reset() {
          this.canvas2d.clearColor('red', 0, 0, this.width, this.height);
          // this.canvas2d.clear(0, 0, this.width, this.height);
          /*
           this.canvas2d.init();
           this.canvas2d.setSize(this.width, this.height);
           this.renderer2d = phina.display.CanvasRenderer(this.canvas2d);
           */
        },

        renderObject: function renderObject(obj) {
          var layer = DisplayElement();
          obj.addChildTo(layer);
          this.renderer2d.renderObject(layer);
        },

        getImageDataURL: function getImageDataURL() {
          return this.canvas2d.domElement.toDataURL('image/png');
        }
      });
    });
  }

}));