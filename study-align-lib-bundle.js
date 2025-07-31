(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("studyAlignLib", [], factory);
	else if(typeof exports === 'object')
		exports["studyAlignLib"] = factory();
	else
		root["studyAlignLib"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/interactions.ts":
/*!*****************************!*\
  !*** ./src/interactions.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MouseInteraction": () => (/* binding */ MouseInteraction),
/* harmony export */   "DragInteraction": () => (/* binding */ DragInteraction),
/* harmony export */   "TouchInteraction": () => (/* binding */ TouchInteraction),
/* harmony export */   "KeyboardInteraction": () => (/* binding */ KeyboardInteraction),
/* harmony export */   "GenericInteraction": () => (/* binding */ GenericInteraction)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");

class InteractionBase {
    constructor(eventType, timestamp, metaData) {
        this.uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_0__.default)();
        this.event = eventType;
        this.time = timestamp;
        this.metaData = metaData;
    }
}
class MouseInteraction extends InteractionBase {
    constructor(eventType, timestamp, mouseEvent, relatedTarget = {}, metaData = {}) {
        super(eventType, timestamp, metaData);
        this.screenX = mouseEvent.screenX;
        this.screenY = mouseEvent.screenY;
        this.clientX = mouseEvent.clientX;
        this.clientY = mouseEvent.clientY;
        this.ctrlKey = mouseEvent.ctrlKey;
        this.shiftKey = mouseEvent.shiftKey;
        this.altKey = mouseEvent.altKey;
        this.metaKey = mouseEvent.metaKey;
        this.button = mouseEvent.button;
        this.relatedTarget = relatedTarget;
        this.x = mouseEvent.screenX;
        this.y = mouseEvent.screenY;
    }
}
class DragInteraction extends MouseInteraction {
    constructor(eventType, timestamp, dragEvent, relatedTarget = {}, metaData = {}) {
        super(eventType, timestamp, dragEvent, relatedTarget, metaData);
    }
}
class TouchBase {
    constructor(touch) {
        this.uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_0__.default)();
        this.altitudeAngle = touch.altitudeAngle;
        this.azimuthAngle = touch.azimuthAngle;
        this.clientX = touch.clientX;
        this.clientY = touch.clientY;
        this.force = touch.force;
        this.identifier = touch.identifier;
        this.pageX = touch.pageX;
        this.pageY = touch.pageY;
        this.radiusX = touch.radiusX;
        this.radiusY = touch.radiusY;
        this.rotationAngle = touch.rotationAngle;
        this.screenX = touch.screenX;
        this.screenY = touch.screenY;
        this.target = touch.target;
        this.touchType = touch.touchType;
    }
}
class TouchInteraction extends InteractionBase {
    constructor(eventType, timestamp, touchEvent, metaData = {}) {
        super(eventType, timestamp, metaData);
        this.changedTouches = [];
        this.targetTouches = [];
        this.touches = [];
        this.altKey = touchEvent.altKey;
        this.ctrlKey = touchEvent.ctrlKey;
        this.metaKey = touchEvent.metaKey;
        this.shiftKey = touchEvent.shiftKey;
        if (touchEvent.changedTouches && touchEvent.changedTouches.length > 0) {
            for (let i = 0; i < touchEvent.changedTouches.length; i++) {
                this.changedTouches.push(new TouchBase(touchEvent.changedTouches[i]));
            }
        }
        if (touchEvent.targetTouches && touchEvent.targetTouches.length > 0) {
            for (let i = 0; i < touchEvent.targetTouches.length; i++) {
                this.targetTouches.push(new TouchBase(touchEvent.targetTouches[i]));
            }
        }
        if (touchEvent.touches && touchEvent.touches.length > 0) {
            for (let i = 0; i < touchEvent.touches.length; i++) {
                this.touches.push(new TouchBase(touchEvent.touches[i]));
            }
        }
    }
}
class KeyboardInteraction extends InteractionBase {
    constructor(eventType, timestamp, keyboardEvent, metaData = {}) {
        super(eventType, timestamp, metaData);
        this.altKey = keyboardEvent.altKey;
        this.code = keyboardEvent.code;
        this.isComposing = keyboardEvent.isComposing;
        this.key = keyboardEvent.key;
        this.location = keyboardEvent.location;
        this.metaKey = keyboardEvent.metaKey;
        this.repeat = keyboardEvent.repeat;
        this.shiftKey = keyboardEvent.shiftKey;
    }
}
class GenericInteraction extends InteractionBase {
    constructor(eventType, timestamp, genericEventData, metaData = {}) {
        super(eventType, timestamp, metaData);
        this.data = genericEventData;
    }
}


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.default)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__.default.test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/study-align-lib.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _interactions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactions */ "./src/interactions.ts");

class StudyAlignLib {
    constructor(url = "http://localhost:8080", studyId) {
        // Interaction Lists (Web Events only), needed for bulk saving
        this.mouseInteractionList = [];
        this.dragInteractionList = [];
        this.keyboardInteractionList = [];
        this.touchInteractionList = [];
        this.genericInteractionList = [];
        this.apiVersion = "v1";
        this.url = url;
        this.studyId = studyId;
        this.apiUrl = this.url + "/api/" + this.apiVersion;
    }
    getTimestamp() {
        return Date.now;
    }
    getTimestampWithOffset() {
        const date = new Date();
        date.setMinutes(date.getMinutes() + (-1 * date.getTimezoneOffset()));
        return date.getTime();
    }
    setHeaders(options, refresh = false) {
        const access_token = !refresh ? this.readTokens("access_token") : this.readTokens("refresh_token");
        options.headers["Authorization"] = "Bearer " + access_token;
        options.headers["Content-type"] = "application/json";
    }
    setLoggerHeaders(options) {
        if (this.loggerKey) {
            options.headers["Studyalign-Logger-Key"] = this.loggerKey;
        }
        options.headers["Content-type"] = "application/json";
    }
    request(options) {
        const encodeParams = (data) => {
            return Object.keys(data).map((key) => {
                return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
            }).join('&');
        };
        return new Promise((resolve, reject) => {
            let url = this.apiUrl + "/" + options.path;
            let xhr = new XMLHttpRequest();
            if (options.asQuery) {
                let params = options.params;
                let encodedParams = "";
                if (params && typeof params === 'object') {
                    encodedParams = encodeParams(params);
                }
                url = url + "?" + encodedParams;
            }
            xhr.open(options.method, url);
            if (options.onload) {
                xhr.onload = options.onload;
            }
            else {
                xhr.onload = () => {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        resolve({
                            status: xhr.status,
                            body: xhr.response ? JSON.parse(xhr.response) : ""
                        });
                    }
                    else {
                        reject({
                            status: xhr.status,
                            statusText: xhr.statusText,
                            requestBody: options.body
                        });
                    }
                };
            }
            if (options.onprogress) {
                xhr.onprogress = options.onprogress;
            }
            if (options.onerror) {
                xhr.onerror = options.onerror;
            }
            else {
                xhr.onerror = () => {
                    reject({
                        status: xhr.status,
                        statusText: xhr.statusText,
                        requestBody: options.body
                    });
                };
            }
            if (options.headers) {
                Object.keys(options.headers).forEach((key) => {
                    xhr.setRequestHeader(key, options.headers[key]);
                });
            }
            if (options.method === "GET" || options.method === "DELETE") {
                let params = options.params;
                let encodedParams = "";
                if (params && typeof params === 'object') {
                    encodedParams = encodeParams(params);
                }
                xhr.send(encodedParams);
            }
            if (options.method === "POST" || options.method === "PATCH") {
                if (options.asQuery) {
                    xhr.send();
                }
                else {
                    xhr.send(options.formData ? encodeParams(options.body) : JSON.stringify(options.body));
                }
            }
        });
    }
    basicCreate(path, data) {
        let options = {
            method: "POST",
            path: path,
            headers: {}
        };
        this.setHeaders(options);
        if (data) {
            options.body = data;
        }
        return this.request(options);
    }
    basicRead(path) {
        const options = {
            method: "GET",
            path: path,
            headers: {}
        };
        this.setHeaders(options);
        return this.request(options);
    }
    basicUpdate(path, data) {
        let options = {
            method: "PATCH",
            path: path,
            headers: {}
        };
        this.setHeaders(options);
        options.body = data;
        return this.request(options);
    }
    basicDelete(path) {
        let options = {
            method: "DELETE",
            path: path,
            headers: {}
        };
        this.setHeaders(options);
        const yo = this.request(options);
        console.log(yo);
        return yo;
    }
    // Admin related functions
    userLogin(username, password) {
        const options = {
            method: "POST",
            path: "users/login",
            headers: {},
            body: { username: username, password: password },
            formData: true
        };
        options.headers["Content-type"] = "application/x-www-form-urlencoded";
        return this.request(options);
    }
    userMe() {
        return this.basicRead("users/me");
    }
    userRefreshToken() {
        const options = {
            method: "GET",
            path: "users/refresh",
            headers: {}
        };
        this.setHeaders(options, true);
        return this.request(options);
    }
    getUsers() {
        return this.basicRead("users");
    }
    getUser(userId) {
        return this.basicRead("users/" + userId);
    }
    createUser(user) {
        return this.basicCreate("users", user);
    }
    updateUser(userId, user) {
        return this.basicUpdate("users/" + userId, user);
    }
    deleteUser(userId) {
        return this.basicDelete("users/" + userId);
    }
    getRoles() {
        return this.basicRead("users/roles");
    }
    // ---- MAINLY FOR USE IN ADMIN FRONTEND ---- //
    // Studies
    getStudies() {
        return this.basicRead("studies");
    }
    createStudy(study) {
        return this.basicCreate("studies", study);
    }
    updateStudy(studyId, study) {
        return this.basicUpdate("studies/" + studyId, study);
    }
    deleteStudy(studyId) {
        return this.basicDelete("studies/" + studyId);
    }
    generateProcedures(studyId) {
        const options = {
            method: "POST",
            path: "studies/" + studyId + "/procedures",
            headers: {},
            body: {},
            formData: true,
        };
        this.setHeaders(options);
        return this.request(options);
    }
    getProcedureConfigMain(studyId) {
        return this.basicRead("studies/" + studyId + "/procedure-config");
    }
    getParticipants(studyId) {
        return this.basicRead("studies/" + studyId + "/participants");
    }
    generateParticipants(studyId, amount) {
        const options = {
            method: "POST",
            path: "studies/" + studyId + "/participants",
            headers: {},
            params: { amount: amount },
            asQuery: true
        };
        this.setHeaders(options);
        return this.request(options);
    }
    addParticipants(studyId, amount) {
        const options = {
            method: "POST",
            path: "studies/" + studyId + "/add-participants",
            headers: {},
            params: { amount: amount },
            asQuery: true
        };
        this.setHeaders(options);
        return this.request(options);
    }
    exportStudySchema(studyId) {
        return this.basicRead("studies/" + studyId + "/export");
    }
    importStudySchema(studyId, studySchema) {
        return this.basicCreate("studies/" + studyId + "/import", studySchema);
    }
    duplicateStudy(studyId) {
        return this.basicRead("studies/" + studyId + "/duplicate");
    }
    // DEPRECATED function
    //populateSurveyParticipants(studyId: number) {
    //    return this.basicRead("studies/" + studyId + "/survey-participants");
    //}
    // Procedure Configs
    getProcedureConfig(procedureConfigId) {
        return this.basicRead("procedure-configs/" + procedureConfigId);
    }
    getProcedureConfigOverview(procedureConfigId) {
        return this.basicRead("procedure-configs/" + procedureConfigId + "/overview");
    }
    createProcedureConfigBlock(block) {
        return this.basicCreate("procedure-configs/block", block);
    }
    deleteProcedureConfigBlock(blockId) {
        return this.basicDelete("procedure-configs/block/" + blockId);
    }
    createSingleProcedureConfigStep(procedureConfigId, procedureConfigStep) {
        const options = {
            method: "POST",
            path: "procedure-configs/" + procedureConfigId + "/step",
            headers: {},
            body: procedureConfigStep
        };
        this.setHeaders(options);
        return this.request(options);
    }
    createProcedureConfigSteps(procedureConfigId, procedureConfigSteps) {
        const options = {
            method: "POST",
            path: "procedure-configs/" + procedureConfigId + "/create-steps",
            headers: {},
            body: procedureConfigSteps
        };
        this.setHeaders(options);
        return this.request(options);
    }
    updateProcedureConfig(procedureConfigId, procedureConfigSteps) {
        return this.basicUpdate("procedure-configs/" + procedureConfigId, procedureConfigSteps);
    }
    // Conditions
    getConditionIds(studyId) {
        const options = {
            method: "GET",
            path: "conditions/ids",
            headers: {},
            body: { study_id: studyId },
            formData: true,
        };
        this.setHeaders(options);
        return this.request(options);
    }
    getCondition(conditionId) {
        return this.basicRead("conditions/" + conditionId);
    }
    getConditions(studyId) {
        return this.basicRead("studies/" + studyId + "/conditions");
    }
    createCondition(condition) {
        return this.basicCreate("conditions", condition);
    }
    updateCondition(conditionId, condition) {
        return this.basicUpdate("conditions/" + conditionId, condition);
    }
    deleteCondition(conditionId) {
        return this.basicDelete("conditions/" + conditionId);
    }
    getTasks(studyId) {
        return this.basicRead("studies/" + studyId + "/tasks");
    }
    getTexts(studyId) {
        return this.basicRead("studies/" + studyId + "/texts");
    }
    getQuestionnaires(studyId) {
        return this.basicRead("studies/" + studyId + "/questionnaires");
    }
    getPauses(studyId) {
        return this.basicRead("studies/" + studyId + "/pauses");
    }
    // Procedures
    getProcedures(studyId) {
        const options = {
            method: "GET",
            path: "procedures",
            headers: {},
            body: { study_id: studyId },
            formData: true,
        };
        this.setHeaders(options);
        return this.request(options);
    }
    // Participants
    getParticipantsByProcedure(procedureId) {
        const options = {
            method: "GET",
            path: "participants",
            headers: {},
            body: { procedure_id: procedureId },
            formData: true,
        };
        this.setHeaders(options);
        return this.request(options);
    }
    getParticipantById(participantId) {
        return this.basicRead("participants/" + participantId);
    }
    endParticipantPause(participantToken) {
        return this.basicRead("participants/" + participantToken + "/end-pause");
    }
    //Tasks
    createTask(task) {
        return this.basicCreate("tasks", task);
    }
    getTask(taskId) {
        return this.basicRead("tasks/" + taskId);
    }
    updateTask(taskId, task) {
        return this.basicUpdate("tasks/" + taskId, task);
    }
    deleteTask(taskId) {
        return this.basicDelete("tasks/" + taskId);
    }
    //Texts
    createText(text) {
        return this.basicCreate("texts", text);
    }
    getText(textId) {
        return this.basicRead("texts/" + textId);
    }
    updateText(textId, text) {
        return this.basicUpdate("texts/" + textId, text);
    }
    deleteText(textId) {
        return this.basicDelete("texts/" + textId);
    }
    //Questionnaires
    createQuestionnaire(questionnaire) {
        return this.basicCreate("questionnaires", questionnaire);
    }
    getQuestionnaire(questionnaireId) {
        return this.basicRead("questionnaires/" + questionnaireId);
    }
    updateQuestionnaire(questionnaireId, questionnaire) {
        return this.basicUpdate("questionnaires/" + questionnaireId, questionnaire);
    }
    deleteQuestionnaire(questionnaireId) {
        return this.basicDelete("questionnaires/" + questionnaireId);
    }
    //Pauses
    createPause(pause) {
        return this.basicCreate("pauses", pause);
    }
    getPause(pauseId) {
        return this.basicRead("pauses/" + pauseId);
    }
    updatePause(pauseId, pause) {
        return this.basicUpdate("pauses/" + pauseId, pause);
    }
    deletePause(pauseId) {
        return this.basicDelete("pauses/" + pauseId);
    }
    //Interactions
    getFirst100Interactions(studyId) {
        const options = {
            method: "GET",
            path: "interactions",
            headers: {},
            params: { study_id: studyId, type: "all" },
            asQuery: true
        };
        this.setHeaders(options);
        return this.request(options);
    }
    getInteractions(studyId, type, offset = 0, limit = 100) {
        const options = {
            method: "GET",
            path: "interactions",
            headers: {},
            params: { study_id: studyId, type: type, offset: offset, limit: limit },
            asQuery: true
        };
        this.setHeaders(options);
        return this.request(options);
    }
    // ---- MAINLY FOR USE IN STUDY FRONTEND ---- //
    //TODO: read condition config
    //Study Frontend related functions
    getStudy(studyId) {
        const options = {
            method: "GET",
            path: "studies/" + (studyId || this.studyId),
        };
        return this.request(options);
    }
    getStudySetupInfo(studyId) {
        return this.basicRead("studies/" + studyId + "/setup-info");
    }
    // Participation related methods
    getParticipant(participantToken) {
        const options = {
            method: "GET",
            path: "participants/token/" + participantToken,
        };
        return this.request(options);
    }
    participate(participantToken) {
        let options = {
            method: "GET",
            path: "studies/" + this.studyId + "/participate"
        };
        if (participantToken) {
            options = {
                method: "GET",
                path: "studies/" + this.studyId + "/participate/" + participantToken
            };
        }
        return this.request(options);
    }
    setLoggerKey(loggerKey) {
        this.loggerKey = loggerKey;
    }
    storeTokens(responseJson) {
        localStorage.setItem("tokens", JSON.stringify(responseJson));
    }
    updateAccessToken(responseJson) {
        const tokens = this.readTokens();
        tokens["access_token"] = responseJson["access_token"];
        this.storeTokens(tokens);
    }
    readTokens(key = null) {
        let tokens = localStorage.getItem("tokens");
        if (tokens) {
            tokens = JSON.parse(tokens);
            if (key) {
                return tokens[key];
            }
            return tokens;
        }
        return null;
    }
    deleteTokens() {
        localStorage.removeItem("tokens");
    }
    refreshToken() {
        const options = {
            method: "GET",
            path: "participants/refresh",
            headers: {}
        };
        this.setHeaders(options, true);
        return this.request(options);
    }
    me() {
        const options = {
            method: "GET",
            path: "participants/me",
            headers: {}
        };
        this.setHeaders(options);
        return this.request(options);
    }
    getProcedure(procedureId) {
        const options = {
            method: "GET",
            path: "procedures/" + procedureId,
            headers: {}
        };
        this.setHeaders(options);
        console.log(options);
        return this.request(options);
    }
    // Helper method to create bulks from interaction lists
    buildBulkList(interactionList, bulkSize = 10) {
        const bulks = [];
        while (this[interactionList].length > bulkSize) {
            bulks.push(this[interactionList].splice(0, bulkSize));
        }
        if (this[interactionList].length > 0) {
            bulks.push(this[interactionList].splice(0, this[interactionList].length));
        }
        return bulks;
    }
    // TODO: type callback correctly, starting point could be (conditionId: number, interactions: object[]) => Promise<any>
    logInteractionBulk(path, conditionId, interactionList, bulkSize, logInteractionBulkRequest) {
        const interactionBulks = this.buildBulkList(interactionList, bulkSize);
        const interactionBulkRequests = [];
        for (let i = 0; i < interactionBulks.length; i++) {
            interactionBulkRequests.push(logInteractionBulkRequest(path, conditionId, interactionBulks[i]));
        }
        console.log(interactionBulkRequests)
        return Promise.allSettled(interactionBulkRequests);
    }
    logInteractionBulkRequest(path, conditionId, interactions) {
        const options = {
            method: "POST",
            path: path,
            headers: {}
        };
        this.setLoggerHeaders(options);
        options.body = {
            condition_id: conditionId,
            interactions: interactions
        };
        return this.request(options);
    }
    logInteractionRequest(path, conditionId, interaction) {
        const options = {
            method: "POST",
            path: path,
            headers: {}
        };
        this.setLoggerHeaders(options);
        options.body = {
            condition_id: conditionId,
            interaction: interaction
        };
        return this.request(options);
    }
    // Mouse Interaction
    logMouseInteraction(conditionId, eventType, mouseEvent, timestamp, relatedTarget = {}, metaData = {}) {
        const interaction = new _interactions__WEBPACK_IMPORTED_MODULE_0__.MouseInteraction(eventType, timestamp, mouseEvent, relatedTarget, metaData);
        const path = "interaction/mouse";
        return this.logInteractionRequest(path, conditionId, interaction);
    }
    addMouseInteraction(eventType, mouseEvent, timestamp, relatedTarget = {}, metaData = {}) {
        this.mouseInteractionList.push(new _interactions__WEBPACK_IMPORTED_MODULE_0__.MouseInteraction(eventType, timestamp, mouseEvent, relatedTarget, metaData));
    }
    logMouseInteractionBulk(conditionId, bulkSize = 10) {
        const interactionType = "mouseInteractionList";
        const path = "interaction/mouse/bulk";
        return this.logInteractionBulk(path, conditionId, interactionType, bulkSize, this.logInteractionBulkRequest.bind(this));
    }
    // Drag Interaction
    logDragInteraction(conditionId, eventType, dragEvent, timestamp, relatedTarget = {}, metaData = {}) {
        const interaction = new _interactions__WEBPACK_IMPORTED_MODULE_0__.DragInteraction(eventType, timestamp, dragEvent, relatedTarget, metaData);
        const path = "interaction/drag";
        return this.logInteractionRequest(path, conditionId, interaction);
    }
    addDragInteraction(eventType, dragEvent, timestamp, relatedTarget = {}, metaData = {}) {
        this.dragInteractionList.push(new _interactions__WEBPACK_IMPORTED_MODULE_0__.DragInteraction(eventType, timestamp, dragEvent, relatedTarget, metaData));
    }
    logDragInteractionBulk(conditionId, bulkSize = 10) {
        const interactionType = "dragInteractionList";
        const path = "interaction/drag/bulk";
        return this.logInteractionBulk(path, conditionId, interactionType, bulkSize, this.logInteractionBulkRequest.bind(this));
    }
    // Keyboard Interaction
    logKeyboardInteraction(conditionId, eventType, keyboardEvent, timestamp, metaData = {}) {
        const interaction = new _interactions__WEBPACK_IMPORTED_MODULE_0__.KeyboardInteraction(eventType, timestamp, keyboardEvent, metaData);
        const path = "interaction/keyboard";
        return this.logInteractionRequest(path, conditionId, interaction);
    }
    addKeyboardInteraction(eventType, keyboardEvent, timestamp, metaData = {}) {
        this.keyboardInteractionList.push(new _interactions__WEBPACK_IMPORTED_MODULE_0__.KeyboardInteraction(eventType, timestamp, keyboardEvent, metaData));
    }
    logKeyboardInteractionBulk(conditionId, bulkSize = 10) {
        const interactionType = "keyboardInteractionList";
        const path = "interaction/keyboard/bulk";
        return this.logInteractionBulk(path, conditionId, interactionType, bulkSize, this.logInteractionBulkRequest.bind(this));
    }
    // Touch Interaction
    logTouchInteraction(conditionId, eventType, touchEvent, timestamp, metaData = {}) {
        const interaction = new _interactions__WEBPACK_IMPORTED_MODULE_0__.TouchInteraction(eventType, timestamp, touchEvent, metaData);
        const path = "interaction/touch";
        return this.logInteractionRequest(path, conditionId, interaction);
    }
    addTouchInteraction(eventType, touchEvent, timestamp, metaData = {}) {
        this.touchInteractionList.push(new _interactions__WEBPACK_IMPORTED_MODULE_0__.TouchInteraction(eventType, timestamp, touchEvent, metaData));
    }
    logTouchInteractionBulk(conditionId, bulkSize = 10) {
        const interactionType = "touchInteractionList";
        const path = "interaction/touch/bulk";
        return this.logInteractionBulk(path, conditionId, interactionType, bulkSize, this.logInteractionBulkRequest.bind(this));
    }
    // Generic Interaction
    logGenericInteraction(conditionId, eventType, genericEvent, timestamp, metaData = {}) {
        const interaction = new _interactions__WEBPACK_IMPORTED_MODULE_0__.GenericInteraction(eventType, timestamp, genericEvent, metaData);
        const path = "interaction/generic";
        return this.logInteractionRequest(path, conditionId, interaction);
    }
    addGenericInteraction(eventType, genericEvent, timestamp, metaData = {}) {
        this.genericInteractionList.push(new _interactions__WEBPACK_IMPORTED_MODULE_0__.GenericInteraction(eventType, timestamp, genericEvent, metaData));
    }
    logGenericInteractionBulk(conditionId, bulkSize = 10) {
        const interactionType = "genericInteractionList";
        const path = "interaction/generic/bulk";
        return this.logInteractionBulk(path, conditionId, interactionType, bulkSize, this.logInteractionBulkRequest.bind(this));
    }
    // Meta Interaction (Same as Generic Interaction but without condition_id
    logMetaInteraction(eventType, genericEvent, timestamp, metaData = {}) {
        const interaction = new _interactions__WEBPACK_IMPORTED_MODULE_0__.GenericInteraction(eventType, timestamp, genericEvent, metaData);
        const path = "interaction/meta";
        return this.logInteractionRequest(path, null, interaction);
    }
    // Procedure related methods
    startProcedure() {
        const options = {
            method: "GET",
            path: "procedures/start",
            headers: {}
        };
        this.setHeaders(options);
        return this.request(options);
    }
    nextProcedure() {
        const options = {
            method: "GET",
            path: "procedures/next",
            headers: {}
        };
        this.setHeaders(options);
        return this.request(options);
    }
    endProcedure() {
        const options = {
            method: "GET",
            path: "procedures/end",
            headers: {}
        };
        this.setHeaders(options);
        return this.request(options);
    }
    currentProcedureStep() {
        const options = {
            method: "GET",
            path: "procedure-steps",
            headers: {}
        };
        this.setHeaders(options);
        return this.request(options);
    }
    checkSurveyResult() {
        const options = {
            method: "GET",
            path: "procedures/check-survey-result",
            headers: {}
        };
        this.setHeaders(options);
        return this.request(options);
    }
    startNavigator() {
        return new Promise((resolve, reject) => {
            // get the user token (uuid)
            this.me().then(response => {
                if (response.body) {
                    const participantToken = response.body.token;
                    const url = this.apiUrl + "/" + "procedures/navigator?participant=" + participantToken;
                    this.sse = new EventSource(url, { withCredentials: true });
                    resolve(true);
                }
                reject({
                    text: "Participant not found"
                });
            }).catch(error => {
                console.log(error);
                resolve(error);
            });
        });
    }
    closeNavigator() {
        this.sse.close();
    }
    reconnectNavigator() {
        const options = {
            method: "GET",
            path: "procedures/navigator/reconnect",
            headers: {}
        };
        this.setHeaders(options);
        return this.request(options);
    }
    getNavigator() {
        return this.sse;
    }
    updateNavigator(participantToken, source, state, extId) {
        const options = {
            method: "POST",
            path: "procedures/navigator",
            headers: {
                "Content-type": "application/json"
            }
        };
        options.body = {
            participant_token: participantToken,
            source: source,
            state: state,
            ext_id: extId
        };
        return this.request(options);
    }
}
StudyAlignLib.getParamsFromURL = () => {
    const url = new URL(window.location.href);
    const studyId = url.searchParams.get("study_id");
    const conditionId = url.searchParams.get("condition_id") || 1; // value from get parameter or 1 (default)
    const loggerKey = url.searchParams.get("logger_key"); // needed for logging
    const participantToken = url.searchParams.get("participant_token");
    return {
        studyId: studyId,
        conditionId: conditionId,
        loggerKey: loggerKey,
        participantToken: participantToken
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StudyAlignLib);

})();

__webpack_exports__ = __webpack_exports__.default;
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHVkeUFsaWduTGliL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9zdHVkeUFsaWduTGliLy4vc3JjL2ludGVyYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9zdHVkeUFsaWduTGliLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9zdHVkeUFsaWduTGliLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlBbGlnbkxpYi8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL3N0dWR5QWxpZ25MaWIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL3N0dWR5QWxpZ25MaWIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL3N0dWR5QWxpZ25MaWIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3R1ZHlBbGlnbkxpYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3R1ZHlBbGlnbkxpYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3N0dWR5QWxpZ25MaWIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zdHVkeUFsaWduTGliLy4vc3JjL3N0dWR5LWFsaWduLWxpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZrQztBQUVs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QUFDLElBQUksR0FBRztZQUNYLGlCQUFpQixFQUFFLGdCQUFnQjtZQUNuQyxNQUFNLEVBQUUsTUFBTTtZQUNkLEtBQUssRUFBRSxLQUFLO1lBQ1osTUFBTSxFQUFFLEtBQUs7U0FDaEIsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDOztBQW4zQk0sOEJBQWdCLEdBQUcsR0FBRyxFQUFFO0lBQzNCLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakQsTUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsMENBQTBDO0lBQ3pHLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMscUJBQXFCO0lBQzNFLE1BQU0sZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUVuRSxPQUFPO1FBQ0gsT0FBTyxFQUFFLE9BQU87UUFDaEIsV0FBVyxFQUFFLFdBQVc7UUFDeEIsU0FBUyxFQUFFLFNBQVM7UUFDcEIsZ0JBQWdCLEVBQUUsZ0JBQWdCO0tBQ3JDO0FBQ0wsQ0FBQztBQXkyQkwsaUVBQWUsYUFBYSxFQUFDIiwiZmlsZSI6InN0dWR5LWFsaWduLWxpYi1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInN0dWR5QWxpZ25MaWJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic3R1ZHlBbGlnbkxpYlwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJzdHVkeUFsaWduTGliXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiaW1wb3J0IHt2NCBhcyB1dWlkdjR9IGZyb20gXCJ1dWlkXCI7XG5cbmNsYXNzIEludGVyYWN0aW9uQmFzZSB7XG4gICAgdXVpZDogc3RyaW5nO1xuICAgIGV2ZW50OiBzdHJpbmc7XG4gICAgdGltZTogbnVtYmVyO1xuICAgIG1ldGFEYXRhOiBvYmplY3Q7XG5cbiAgICBjb25zdHJ1Y3RvcihldmVudFR5cGU6IHN0cmluZywgdGltZXN0YW1wOiBudW1iZXIsIG1ldGFEYXRhOiBvYmplY3QpIHtcbiAgICAgICAgdGhpcy51dWlkID0gdXVpZHY0KCk7XG4gICAgICAgIHRoaXMuZXZlbnQgPSBldmVudFR5cGU7XG4gICAgICAgIHRoaXMudGltZSA9IHRpbWVzdGFtcDtcbiAgICAgICAgdGhpcy5tZXRhRGF0YSA9IG1ldGFEYXRhO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vdXNlSW50ZXJhY3Rpb24gZXh0ZW5kcyBJbnRlcmFjdGlvbkJhc2Uge1xuICAgIHNjcmVlblg6IG51bWJlcjtcbiAgICBzY3JlZW5ZOiBudW1iZXI7XG4gICAgY2xpZW50WDogbnVtYmVyO1xuICAgIGNsaWVudFk6IG51bWJlcjtcbiAgICBjdHJsS2V5OiBib29sZWFuO1xuICAgIHNoaWZ0S2V5OiBib29sZWFuO1xuICAgIGFsdEtleTogYm9vbGVhbjtcbiAgICBtZXRhS2V5OiBib29sZWFuO1xuICAgIGJ1dHRvbjogbnVtYmVyO1xuICAgIHJlbGF0ZWRUYXJnZXQ6IG9iamVjdDtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZXZlbnRUeXBlOiBzdHJpbmcsIHRpbWVzdGFtcDogbnVtYmVyLCBtb3VzZUV2ZW50OiBNb3VzZUV2ZW50LCByZWxhdGVkVGFyZ2V0ID0ge30sIG1ldGFEYXRhID0ge30pIHtcbiAgICAgICAgc3VwZXIoZXZlbnRUeXBlLCB0aW1lc3RhbXAsIG1ldGFEYXRhKTtcbiAgICAgICAgdGhpcy5zY3JlZW5YID0gbW91c2VFdmVudC5zY3JlZW5YO1xuICAgICAgICB0aGlzLnNjcmVlblkgPSBtb3VzZUV2ZW50LnNjcmVlblk7XG4gICAgICAgIHRoaXMuY2xpZW50WCA9IG1vdXNlRXZlbnQuY2xpZW50WDtcbiAgICAgICAgdGhpcy5jbGllbnRZID0gbW91c2VFdmVudC5jbGllbnRZO1xuICAgICAgICB0aGlzLmN0cmxLZXkgPSBtb3VzZUV2ZW50LmN0cmxLZXk7XG4gICAgICAgIHRoaXMuc2hpZnRLZXkgPSBtb3VzZUV2ZW50LnNoaWZ0S2V5O1xuICAgICAgICB0aGlzLmFsdEtleSA9IG1vdXNlRXZlbnQuYWx0S2V5O1xuICAgICAgICB0aGlzLm1ldGFLZXkgPSBtb3VzZUV2ZW50Lm1ldGFLZXk7XG4gICAgICAgIHRoaXMuYnV0dG9uID0gbW91c2VFdmVudC5idXR0b247XG4gICAgICAgIHRoaXMucmVsYXRlZFRhcmdldCA9IHJlbGF0ZWRUYXJnZXQ7XG4gICAgICAgIHRoaXMueCA9IG1vdXNlRXZlbnQuc2NyZWVuWDtcbiAgICAgICAgdGhpcy55ID0gbW91c2VFdmVudC5zY3JlZW5ZO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERyYWdJbnRlcmFjdGlvbiBleHRlbmRzIE1vdXNlSW50ZXJhY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKGV2ZW50VHlwZTogc3RyaW5nLCB0aW1lc3RhbXA6IG51bWJlciwgZHJhZ0V2ZW50OiBEcmFnRXZlbnQsIHJlbGF0ZWRUYXJnZXQgPSB7fSwgbWV0YURhdGEgPSB7fSkge1xuICAgICAgICBzdXBlcihldmVudFR5cGUsIHRpbWVzdGFtcCwgZHJhZ0V2ZW50LCByZWxhdGVkVGFyZ2V0LCBtZXRhRGF0YSk7XG4gICAgfVxufVxuXG5jbGFzcyBUb3VjaEJhc2Uge1xuICAgIHV1aWQ6IHN0cmluZztcbiAgICBhbHRpdHVkZUFuZ2xlOiBudW1iZXI7XG4gICAgYXppbXV0aEFuZ2xlOiBudW1iZXI7XG4gICAgY2xpZW50WDogbnVtYmVyO1xuICAgIGNsaWVudFk6IG51bWJlcjtcbiAgICBmb3JjZTogbnVtYmVyO1xuICAgIGlkZW50aWZpZXI6IG51bWJlcjtcbiAgICBzY3JlZW5YOiBudW1iZXI7XG4gICAgc2NyZWVuWTogbnVtYmVyO1xuICAgIHBhZ2VYOiBudW1iZXI7XG4gICAgcGFnZVk6IG51bWJlcjtcbiAgICByYWRpdXNYOiBudW1iZXI7XG4gICAgcmFkaXVzWTogbnVtYmVyO1xuICAgIHJvdGF0aW9uQW5nbGU6IG51bWJlcjtcbiAgICB0YXJnZXQ6IG9iamVjdDtcbiAgICB0b3VjaFR5cGU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHRvdWNoOiBUb3VjaCkge1xuICAgICAgICB0aGlzLnV1aWQgPSB1dWlkdjQoKTtcbiAgICAgICAgdGhpcy5hbHRpdHVkZUFuZ2xlID0gdG91Y2guYWx0aXR1ZGVBbmdsZTtcbiAgICAgICAgdGhpcy5hemltdXRoQW5nbGUgPSB0b3VjaC5hemltdXRoQW5nbGU7XG4gICAgICAgIHRoaXMuY2xpZW50WCA9IHRvdWNoLmNsaWVudFg7XG4gICAgICAgIHRoaXMuY2xpZW50WSA9IHRvdWNoLmNsaWVudFk7XG4gICAgICAgIHRoaXMuZm9yY2UgPSB0b3VjaC5mb3JjZTtcbiAgICAgICAgdGhpcy5pZGVudGlmaWVyID0gdG91Y2guaWRlbnRpZmllcjtcbiAgICAgICAgdGhpcy5wYWdlWCA9IHRvdWNoLnBhZ2VYO1xuICAgICAgICB0aGlzLnBhZ2VZID0gdG91Y2gucGFnZVk7XG4gICAgICAgIHRoaXMucmFkaXVzWCA9IHRvdWNoLnJhZGl1c1g7XG4gICAgICAgIHRoaXMucmFkaXVzWSA9IHRvdWNoLnJhZGl1c1k7XG4gICAgICAgIHRoaXMucm90YXRpb25BbmdsZSA9IHRvdWNoLnJvdGF0aW9uQW5nbGU7XG4gICAgICAgIHRoaXMuc2NyZWVuWCA9IHRvdWNoLnNjcmVlblg7XG4gICAgICAgIHRoaXMuc2NyZWVuWSA9IHRvdWNoLnNjcmVlblk7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdG91Y2gudGFyZ2V0O1xuICAgICAgICB0aGlzLnRvdWNoVHlwZSA9IHRvdWNoLnRvdWNoVHlwZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUb3VjaEludGVyYWN0aW9uIGV4dGVuZHMgSW50ZXJhY3Rpb25CYXNlIHtcbiAgICBhbHRLZXk6IGJvb2xlYW47XG4gICAgY3RybEtleTogYm9vbGVhbjtcbiAgICBtZXRhS2V5OiBib29sZWFuO1xuICAgIHNoaWZ0S2V5OiBib29sZWFuO1xuICAgIG1ldGFEYXRhOiBvYmplY3Q7XG5cbiAgICBjaGFuZ2VkVG91Y2hlczogVG91Y2hCYXNlW10gPSBbXTtcbiAgICB0YXJnZXRUb3VjaGVzOiBUb3VjaEJhc2VbXSA9IFtdO1xuICAgIHRvdWNoZXM6IFRvdWNoQmFzZVtdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihldmVudFR5cGU6IHN0cmluZywgdGltZXN0YW1wOiBudW1iZXIsIHRvdWNoRXZlbnQ6IFRvdWNoRXZlbnQsIG1ldGFEYXRhID0ge30pIHtcbiAgICAgICAgc3VwZXIoZXZlbnRUeXBlLCB0aW1lc3RhbXAsIG1ldGFEYXRhKTtcbiAgICAgICAgdGhpcy5hbHRLZXkgPSB0b3VjaEV2ZW50LmFsdEtleTtcbiAgICAgICAgdGhpcy5jdHJsS2V5ID0gdG91Y2hFdmVudC5jdHJsS2V5O1xuICAgICAgICB0aGlzLm1ldGFLZXkgPSB0b3VjaEV2ZW50Lm1ldGFLZXk7XG4gICAgICAgIHRoaXMuc2hpZnRLZXkgPSB0b3VjaEV2ZW50LnNoaWZ0S2V5O1xuXG4gICAgICAgIGlmICh0b3VjaEV2ZW50LmNoYW5nZWRUb3VjaGVzICYmIHRvdWNoRXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8dG91Y2hFdmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlZFRvdWNoZXMucHVzaChuZXcgVG91Y2hCYXNlKHRvdWNoRXZlbnQuY2hhbmdlZFRvdWNoZXNbaV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0b3VjaEV2ZW50LnRhcmdldFRvdWNoZXMgJiYgdG91Y2hFdmVudC50YXJnZXRUb3VjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPHRvdWNoRXZlbnQudGFyZ2V0VG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0VG91Y2hlcy5wdXNoKG5ldyBUb3VjaEJhc2UodG91Y2hFdmVudC50YXJnZXRUb3VjaGVzW2ldKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG91Y2hFdmVudC50b3VjaGVzICYmIHRvdWNoRXZlbnQudG91Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTx0b3VjaEV2ZW50LnRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoZXMucHVzaChuZXcgVG91Y2hCYXNlKHRvdWNoRXZlbnQudG91Y2hlc1tpXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmRJbnRlcmFjdGlvbiBleHRlbmRzIEludGVyYWN0aW9uQmFzZSB7XG4gICAgYWx0S2V5OiBib29sZWFuO1xuICAgIGNvZGU6IHN0cmluZztcbiAgICBpc0NvbXBvc2luZzogYm9vbGVhbjtcbiAgICBrZXk6IHN0cmluZztcbiAgICAvL2xvY2FsZTogc3RyaW5nO1xuICAgIGxvY2F0aW9uOiBudW1iZXI7XG4gICAgbWV0YUtleTogYm9vbGVhbjtcbiAgICByZXBlYXQ6IGJvb2xlYW47XG4gICAgc2hpZnRLZXk6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihldmVudFR5cGU6IHN0cmluZywgdGltZXN0YW1wOiBudW1iZXIsIGtleWJvYXJkRXZlbnQ6IEtleWJvYXJkRXZlbnQsIG1ldGFEYXRhID0ge30pIHtcbiAgICAgICAgc3VwZXIoZXZlbnRUeXBlLCB0aW1lc3RhbXAsIG1ldGFEYXRhKTtcbiAgICAgICAgdGhpcy5hbHRLZXkgPSBrZXlib2FyZEV2ZW50LmFsdEtleTtcbiAgICAgICAgdGhpcy5jb2RlID0ga2V5Ym9hcmRFdmVudC5jb2RlO1xuICAgICAgICB0aGlzLmlzQ29tcG9zaW5nID0ga2V5Ym9hcmRFdmVudC5pc0NvbXBvc2luZztcbiAgICAgICAgdGhpcy5rZXkgPSBrZXlib2FyZEV2ZW50LmtleTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGtleWJvYXJkRXZlbnQubG9jYXRpb247XG4gICAgICAgIHRoaXMubWV0YUtleSA9IGtleWJvYXJkRXZlbnQubWV0YUtleTtcbiAgICAgICAgdGhpcy5yZXBlYXQgPSBrZXlib2FyZEV2ZW50LnJlcGVhdDtcbiAgICAgICAgdGhpcy5zaGlmdEtleSA9IGtleWJvYXJkRXZlbnQuc2hpZnRLZXk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2VuZXJpY0ludGVyYWN0aW9uIGV4dGVuZHMgSW50ZXJhY3Rpb25CYXNlIHtcbiAgICBkYXRhOiBvYmplY3Q7XG5cbiAgICBjb25zdHJ1Y3RvcihldmVudFR5cGU6IHN0cmluZywgdGltZXN0YW1wOiBudW1iZXIsIGdlbmVyaWNFdmVudERhdGE6IG9iamVjdCwgbWV0YURhdGEgPSB7fSkge1xuICAgICAgICBzdXBlcihldmVudFR5cGUsIHRpbWVzdGFtcCwgbWV0YURhdGEpO1xuICAgICAgICB0aGlzLmRhdGEgPSBnZW5lcmljRXZlbnREYXRhO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG52YXIgZ2V0UmFuZG9tVmFsdWVzO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uIEFsc28sXG4gICAgLy8gZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIChtc0NyeXB0bykgb24gSUUxMS5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pIHx8IHR5cGVvZiBtc0NyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG52YXIgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKSk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIpIHtcbiAgdmFyIG9mZnNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHZhciB1dWlkID0gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7XG4gICAgRHJhZ0ludGVyYWN0aW9uLFxuICAgIEdlbmVyaWNJbnRlcmFjdGlvbixcbiAgICBLZXlib2FyZEludGVyYWN0aW9uLFxuICAgIE1vdXNlSW50ZXJhY3Rpb24sXG4gICAgVG91Y2hJbnRlcmFjdGlvblxufSBmcm9tIFwiLi9pbnRlcmFjdGlvbnNcIjtcblxuY2xhc3MgU3R1ZHlBbGlnbkxpYiB7XG5cbiAgICBhcGlWZXJzaW9uOiBzdHJpbmc7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgc3R1ZHlJZDogbnVtYmVyO1xuICAgIGFwaVVybDogc3RyaW5nO1xuICAgIGxvZ2dlcktleTogc3RyaW5nO1xuICAgIHNzZTogRXZlbnRTb3VyY2U7XG5cbiAgICAvLyBJbnRlcmFjdGlvbiBMaXN0cyAoV2ViIEV2ZW50cyBvbmx5KSwgbmVlZGVkIGZvciBidWxrIHNhdmluZ1xuICAgIG1vdXNlSW50ZXJhY3Rpb25MaXN0OiBNb3VzZUludGVyYWN0aW9uW10gPSBbXTtcbiAgICBkcmFnSW50ZXJhY3Rpb25MaXN0OiBEcmFnSW50ZXJhY3Rpb25bXSA9IFtdO1xuICAgIGtleWJvYXJkSW50ZXJhY3Rpb25MaXN0OiBLZXlib2FyZEludGVyYWN0aW9uW10gPSBbXTtcbiAgICB0b3VjaEludGVyYWN0aW9uTGlzdDogVG91Y2hJbnRlcmFjdGlvbltdID0gW107XG4gICAgZ2VuZXJpY0ludGVyYWN0aW9uTGlzdDogR2VuZXJpY0ludGVyYWN0aW9uW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwXCIsIHN0dWR5SWQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLmFwaVZlcnNpb24gPSBcInYxXCI7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICB0aGlzLnN0dWR5SWQgPSBzdHVkeUlkO1xuICAgICAgICB0aGlzLmFwaVVybCA9IHRoaXMudXJsICsgXCIvYXBpL1wiICsgdGhpcy5hcGlWZXJzaW9uO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRQYXJhbXNGcm9tVVJMID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgY29uc3Qgc3R1ZHlJZCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwic3R1ZHlfaWRcIik7XG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbklkID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJjb25kaXRpb25faWRcIikgfHwgMTsgLy8gdmFsdWUgZnJvbSBnZXQgcGFyYW1ldGVyIG9yIDEgKGRlZmF1bHQpXG4gICAgICAgIGNvbnN0IGxvZ2dlcktleSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwibG9nZ2VyX2tleVwiKTsgLy8gbmVlZGVkIGZvciBsb2dnaW5nXG4gICAgICAgIGNvbnN0IHBhcnRpY2lwYW50VG9rZW4gPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInBhcnRpY2lwYW50X3Rva2VuXCIpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdHVkeUlkOiBzdHVkeUlkLFxuICAgICAgICAgICAgY29uZGl0aW9uSWQ6IGNvbmRpdGlvbklkLFxuICAgICAgICAgICAgbG9nZ2VyS2V5OiBsb2dnZXJLZXksXG4gICAgICAgICAgICBwYXJ0aWNpcGFudFRva2VuOiBwYXJ0aWNpcGFudFRva2VuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRUaW1lc3RhbXAoKSB7XG4gICAgICAgIHJldHVybiBEYXRlLm5vdztcbiAgICB9XG5cbiAgICBnZXRUaW1lc3RhbXBXaXRoT2Zmc2V0KCkge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgZGF0ZS5zZXRNaW51dGVzKGRhdGUuZ2V0TWludXRlcygpICsgKC0xICogZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpKSlcbiAgICAgICAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpO1xuICAgIH1cblxuICAgIHNldEhlYWRlcnMob3B0aW9uczogT3B0aW9ucywgcmVmcmVzaDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGFjY2Vzc190b2tlbiA9ICFyZWZyZXNoID8gdGhpcy5yZWFkVG9rZW5zKFwiYWNjZXNzX3Rva2VuXCIpIDogdGhpcy5yZWFkVG9rZW5zKFwicmVmcmVzaF90b2tlblwiKTtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzW1wiQXV0aG9yaXphdGlvblwiXSA9IFwiQmVhcmVyIFwiICsgYWNjZXNzX3Rva2VuO1xuICAgICAgICBvcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LXR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIjtcbiAgICB9XG5cbiAgICBzZXRMb2dnZXJIZWFkZXJzKG9wdGlvbnM6IE9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMubG9nZ2VyS2V5KSB7XG4gICAgICAgICAgICBvcHRpb25zLmhlYWRlcnNbXCJTdHVkeWFsaWduLUxvZ2dlci1LZXlcIl0gPSB0aGlzLmxvZ2dlcktleTtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LXR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIjtcbiAgICB9XG5cbiAgICByZXF1ZXN0KG9wdGlvbnM6IE9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZW5jb2RlUGFyYW1zID0gKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChkYXRhW2tleV0pO1xuICAgICAgICAgICAgfSkuam9pbignJicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IHVybCA9IHRoaXMuYXBpVXJsICsgXCIvXCIgKyBvcHRpb25zLnBhdGg7XG4gICAgICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5hc1F1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IG9wdGlvbnMucGFyYW1zO1xuICAgICAgICAgICAgICAgIGxldCBlbmNvZGVkUGFyYW1zID0gXCJcIjtcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zICYmIHR5cGVvZiBwYXJhbXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuY29kZWRQYXJhbXMgPSBlbmNvZGVQYXJhbXMocGFyYW1zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdXJsID0gdXJsICsgXCI/XCIgKyBlbmNvZGVkUGFyYW1zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QsIHVybCk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5vbmxvYWQpIHtcbiAgICAgICAgICAgICAgICB4aHIub25sb2FkID0gb3B0aW9ucy5vbmxvYWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogeGhyLnJlc3BvbnNlID8gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEJvZHk6IG9wdGlvbnMuYm9keVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMub25wcm9ncmVzcykge1xuICAgICAgICAgICAgICAgIHhoci5vbnByb2dyZXNzID0gb3B0aW9ucy5vbnByb2dyZXNzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMub25lcnJvcikge1xuICAgICAgICAgICAgICAgIHhoci5vbmVycm9yID0gb3B0aW9ucy5vbmVycm9yO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB4aHIub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEJvZHk6IG9wdGlvbnMuYm9keVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucy5oZWFkZXJzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCBvcHRpb25zLmhlYWRlcnNba2V5XSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLm1ldGhvZCA9PT0gXCJHRVRcIiB8fCBvcHRpb25zLm1ldGhvZCA9PT0gXCJERUxFVEVcIikge1xuICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSBvcHRpb25zLnBhcmFtcztcbiAgICAgICAgICAgICAgICBsZXQgZW5jb2RlZFBhcmFtcyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtcyAmJiB0eXBlb2YgcGFyYW1zID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBlbmNvZGVkUGFyYW1zID0gZW5jb2RlUGFyYW1zKHBhcmFtcylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoZW5jb2RlZFBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5tZXRob2QgPT09IFwiUE9TVFwiIHx8IG9wdGlvbnMubWV0aG9kID09PSBcIlBBVENIXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5hc1F1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgIHhoci5zZW5kKClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB4aHIuc2VuZChvcHRpb25zLmZvcm1EYXRhID8gZW5jb2RlUGFyYW1zKG9wdGlvbnMuYm9keSkgOiBKU09OLnN0cmluZ2lmeShvcHRpb25zLmJvZHkpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmFzaWNDcmVhdGUocGF0aDogc3RyaW5nLCBkYXRhOiBvYmplY3QpIHtcbiAgICAgICAgbGV0IG9wdGlvbnM6IE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICAgIGhlYWRlcnM6IHt9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRIZWFkZXJzKG9wdGlvbnMpO1xuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgb3B0aW9ucy5ib2R5ID0gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGJhc2ljUmVhZChwYXRoOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uczogT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgICAgICBoZWFkZXJzOiB7fVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0SGVhZGVycyhvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChvcHRpb25zKTtcbiAgICB9XG5cbiAgICBiYXNpY1VwZGF0ZShwYXRoOiBzdHJpbmcsIGRhdGE6IG9iamVjdCkge1xuICAgICAgICBsZXQgb3B0aW9uczogT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICAgIGhlYWRlcnM6IHt9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRIZWFkZXJzKG9wdGlvbnMpO1xuICAgICAgICBvcHRpb25zLmJvZHkgPSBkYXRhO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGJhc2ljRGVsZXRlKHBhdGg6IHN0cmluZykge1xuICAgICAgICBsZXQgb3B0aW9uczogT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgICAgICBoZWFkZXJzOiB7fVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0SGVhZGVycyhvcHRpb25zKTtcbiAgICAgICAgY29uc3QgeW8gPSB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHlvKVxuICAgICAgICByZXR1cm4geW9cbiAgICB9XG5cbiAgICAvLyBBZG1pbiByZWxhdGVkIGZ1bmN0aW9uc1xuICAgIHVzZXJMb2dpbih1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgcGF0aDogXCJ1c2Vycy9sb2dpblwiLFxuICAgICAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgICAgICBib2R5OiB7dXNlcm5hbWU6IHVzZXJuYW1lLCBwYXNzd29yZDogcGFzc3dvcmR9LFxuICAgICAgICAgICAgZm9ybURhdGE6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC10eXBlXCJdID0gXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIjtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChvcHRpb25zKTtcbiAgICB9XG5cbiAgICB1c2VyTWUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzaWNSZWFkKFwidXNlcnMvbWVcIik7XG4gICAgfVxuXG4gICAgdXNlclJlZnJlc2hUb2tlbigpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uczogT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIHBhdGg6IFwidXNlcnMvcmVmcmVzaFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge31cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEhlYWRlcnMob3B0aW9ucywgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZ2V0VXNlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2ljUmVhZChcInVzZXJzXCIpO1xuICAgIH1cblxuICAgIGdldFVzZXIodXNlcklkOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzaWNSZWFkKFwidXNlcnMvXCIgKyB1c2VySWQpO1xuICAgIH1cblxuICAgIGNyZWF0ZVVzZXIodXNlcjogb2JqZWN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2ljQ3JlYXRlKFwidXNlcnNcIiwgdXNlcilcbiAgICB9XG5cbiAgICB1cGRhdGVVc2VyKHVzZXJJZDogbnVtYmVyLCB1c2VyOiBvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzaWNVcGRhdGUoXCJ1c2Vycy9cIiArIHVzZXJJZCwgdXNlcik7XG4gICAgfVxuXG4gICAgZGVsZXRlVXNlcih1c2VySWQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNpY0RlbGV0ZShcInVzZXJzL1wiICsgdXNlcklkKTtcbiAgICB9XG5cbiAgICBnZXRSb2xlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzaWNSZWFkKFwidXNlcnMvcm9sZXNcIik7XG4gICAgfVxuXG4gICAgLy8gLS0tLSBNQUlOTFkgRk9SIFVTRSBJTiBBRE1JTiBGUk9OVEVORCAtLS0tIC8vXG5cbiAgICAvLyBTdHVkaWVzXG5cbiAgICBnZXRTdHVkaWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNpY1JlYWQoXCJzdHVkaWVzXCIpO1xuICAgIH1cblxuICAgIGNyZWF0ZVN0dWR5KHN0dWR5OiBvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzaWNDcmVhdGUoXCJzdHVkaWVzXCIsIHN0dWR5KTtcbiAgICB9XG5cbiAgICB1cGRhdGVTdHVkeShzdHVkeUlkOiBudW1iZXIsIHN0dWR5OiBvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzaWNVcGRhdGUoXCJzdHVkaWVzL1wiICsgc3R1ZHlJZCwgc3R1ZHkpO1xuICAgIH1cblxuICAgIGRlbGV0ZVN0dWR5KHN0dWR5SWQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNpY0RlbGV0ZShcInN0dWRpZXMvXCIgKyBzdHVkeUlkKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZVByb2NlZHVyZXMoc3R1ZHlJZDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgcGF0aDogXCJzdHVkaWVzL1wiICsgc3R1ZHlJZCArIFwiL3Byb2NlZHVyZXNcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICAgICAgYm9keToge30sXG4gICAgICAgICAgICBmb3JtRGF0YTogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEhlYWRlcnMob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZ2V0UHJvY2VkdXJlQ29uZmlnTWFpbihzdHVkeUlkOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzaWNSZWFkKFwic3R1ZGllcy9cIiArIHN0dWR5SWQgKyBcIi9wcm9jZWR1cmUtY29uZmlnXCIpO1xuICAgIH1cblxuICAgIGdldFBhcnRpY2lwYW50cyhzdHVkeUlkOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzaWNSZWFkKFwic3R1ZGllcy9cIiArIHN0dWR5SWQgKyBcIi9wYXJ0aWNpcGFudHNcIik7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVQYXJ0aWNpcGFudHMoc3R1ZHlJZDogbnVtYmVyLCBhbW91bnQ6IG51bWJlcikge1xuICAgICAgICBjb25zdCBvcHRpb25zOiBPcHRpb25zID0ge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIHBhdGg6IFwic3R1ZGllcy9cIiArIHN0dWR5SWQgKyBcIi9wYXJ0aWNpcGFudHNcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICAgICAgcGFyYW1zOiB7YW1vdW50OiBhbW91bnR9LFxuICAgICAgICAgICAgYXNRdWVyeTogdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0SGVhZGVycyhvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChvcHRpb25zKTtcbiAgICB9XG5cbiAgICBhZGRQYXJ0aWNpcGFudHMoc3R1ZHlJZDogbnVtYmVyLCBhbW91bnQ6IG51bWJlcikge1xuICAgICAgICBjb25zdCBvcHRpb25zOiBPcHRpb25zID0ge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIHBhdGg6IFwic3R1ZGllcy9cIiArIHN0dWR5SWQgKyBcIi9hZGQtcGFydGljaXBhbnRzXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgICAgIHBhcmFtczoge2Ftb3VudDogYW1vdW50fSxcbiAgICAgICAgICAgIGFzUXVlcnk6IHRydWVcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEhlYWRlcnMob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZXhwb3J0U3R1ZHlTY2hlbWEoc3R1ZHlJZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2ljUmVhZChcInN0dWRpZXMvXCIgKyBzdHVkeUlkICsgXCIvZXhwb3J0XCIpO1xuICAgIH1cblxuICAgIGltcG9ydFN0dWR5U2NoZW1hKHN0dWR5SWQ6IG51bWJlciwgc3R1ZHlTY2hlbWE6IG9iamVjdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNpY0NyZWF0ZShcInN0dWRpZXMvXCIgKyBzdHVkeUlkICsgXCIvaW1wb3J0XCIsIHN0dWR5U2NoZW1hKTtcbiAgICB9XG5cbiAgICBkdXBsaWNhdGVTdHVkeShzdHVkeUlkOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzaWNSZWFkKFwic3R1ZGllcy9cIiArIHN0dWR5SWQgKyBcIi9kdXBsaWNhdGVcIik7XG4gICAgfVxuXG4gICAgLy8gREVQUkVDQVRFRCBmdW5jdGlvblxuICAgIC8vcG9wdWxhdGVTdXJ2ZXlQYXJ0aWNpcGFudHMoc3R1ZHlJZDogbnVtYmVyKSB7XG4gICAgLy8gICAgcmV0dXJuIHRoaXMuYmFzaWNSZWFkKFwic3R1ZGllcy9cIiArIHN0dWR5SWQgKyBcIi9zdXJ2ZXktcGFydGljaXBhbnRzXCIpO1xuICAgIC8vfVxuXG4gICAgLy8gUHJvY2VkdXJlIENvbmZpZ3NcblxuICAgIGdldFByb2NlZHVyZUNvbmZpZyhwcm9jZWR1cmVDb25maWdJZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2ljUmVhZChcInByb2NlZHVyZS1jb25maWdzL1wiICsgcHJvY2VkdXJlQ29uZmlnSWQpO1xuICAgIH1cblxuICAgIGdldFByb2NlZHVyZUNvbmZpZ092ZXJ2aWV3KHByb2NlZHVyZUNvbmZpZ0lkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2ljUmVhZChcInByb2NlZHVyZS1jb25maWdzL1wiICsgcHJvY2VkdXJlQ29uZmlnSWQgKyBcIi9vdmVydmlld1wiKTtcbiAgICB9XG5cbiAgICBjcmVhdGVQcm9jZWR1cmVDb25maWdCbG9jayhibG9jazogb2JqZWN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2ljQ3JlYXRlKFwicHJvY2VkdXJlLWNvbmZpZ3MvYmxvY2tcIiwgYmxvY2spO1xuICAgIH1cblxuICAgIGRlbGV0ZVByb2NlZHVyZUNvbmZpZ0Jsb2NrKGJsb2NrSWQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNpY0RlbGV0ZShcInByb2NlZHVyZS1jb25maWdzL2Jsb2NrL1wiICsgYmxvY2tJZCk7XG4gICAgfVxuXG4gICAgY3JlYXRlU2luZ2xlUHJvY2VkdXJlQ29uZmlnU3RlcChwcm9jZWR1cmVDb25maWdJZDogbnVtYmVyLCBwcm9jZWR1cmVDb25maWdTdGVwOiBvYmplY3QpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uczogT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBwYXRoOiBcInByb2NlZHVyZS1jb25maWdzL1wiICsgcHJvY2VkdXJlQ29uZmlnSWQgKyBcIi9zdGVwXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgICAgIGJvZHk6IHByb2NlZHVyZUNvbmZpZ1N0ZXBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEhlYWRlcnMob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgY3JlYXRlUHJvY2VkdXJlQ29uZmlnU3RlcHMocHJvY2VkdXJlQ29uZmlnSWQ6IG51bWJlciwgcHJvY2VkdXJlQ29uZmlnU3RlcHM6IG9iamVjdCkge1xuICAgICAgICBjb25zdCBvcHRpb25zOiBPcHRpb25zID0ge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIHBhdGg6IFwicHJvY2VkdXJlLWNvbmZpZ3MvXCIgKyBwcm9jZWR1cmVDb25maWdJZCArIFwiL2NyZWF0ZS1zdGVwc1wiLFxuICAgICAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgICAgICBib2R5OiBwcm9jZWR1cmVDb25maWdTdGVwc1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0SGVhZGVycyhvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChvcHRpb25zKTtcbiAgICB9XG5cbiAgICB1cGRhdGVQcm9jZWR1cmVDb25maWcocHJvY2VkdXJlQ29uZmlnSWQ6IG51bWJlciwgcHJvY2VkdXJlQ29uZmlnU3RlcHM6IG9iamVjdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNpY1VwZGF0ZShcInByb2NlZHVyZS1jb25maWdzL1wiICsgcHJvY2VkdXJlQ29uZmlnSWQsIHByb2NlZHVyZUNvbmZpZ1N0ZXBzKTtcbiAgICB9XG5cbiAgICAvLyBDb25kaXRpb25zXG5cbiAgICBnZXRDb25kaXRpb25JZHMoc3R1ZHlJZDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBwYXRoOiBcImNvbmRpdGlvbnMvaWRzXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgICAgIGJvZHk6IHtzdHVkeV9pZDogc3R1ZHlJZH0sXG4gICAgICAgICAgICBmb3JtRGF0YTogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEhlYWRlcnMob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZ2V0Q29uZGl0aW9uKGNvbmRpdGlvbklkOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzaWNSZWFkKFwiY29uZGl0aW9ucy9cIiArIGNvbmRpdGlvbklkKTtcbiAgICB9XG5cbiAgICBnZXRDb25kaXRpb25zKHN0dWR5SWQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNpY1JlYWQoXCJzdHVkaWVzL1wiICsgc3R1ZHlJZCArIFwiL2NvbmRpdGlvbnNcIik7XG4gICAgfVxuXG4gICAgY3JlYXRlQ29uZGl0aW9uKGNvbmRpdGlvbjogb2JqZWN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2ljQ3JlYXRlKFwiY29uZGl0aW9uc1wiLCBjb25kaXRpb24pO1xuICAgIH1cblxuICAgIHVwZGF0ZUNvbmRpdGlvbihjb25kaXRpb25JZDogbnVtYmVyLCBjb25kaXRpb246IG9iamVjdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNpY1VwZGF0ZShcImNvbmRpdGlvbnMvXCIgKyBjb25kaXRpb25JZCwgY29uZGl0aW9uKTtcbiAgICB9XG5cbiAgICBkZWxldGVDb25kaXRpb24oY29uZGl0aW9uSWQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNpY0RlbGV0ZShcImNvbmRpdGlvbnMvXCIgKyBjb25kaXRpb25JZCk7XG4gICAgfVxuXG4gICAgZ2V0VGFza3Moc3R1ZHlJZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2ljUmVhZChcInN0dWRpZXMvXCIgKyBzdHVkeUlkICsgXCIvdGFza3NcIik7XG4gICAgfVxuXG4gICAgZ2V0VGV4dHMoc3R1ZHlJZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2ljUmVhZChcInN0dWRpZXMvXCIgKyBzdHVkeUlkICsgXCIvdGV4dHNcIik7XG4gICAgfVxuXG4gICAgZ2V0UXVlc3Rpb25uYWlyZXMoc3R1ZHlJZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2ljUmVhZChcInN0dWRpZXMvXCIgKyBzdHVkeUlkICsgXCIvcXVlc3Rpb25uYWlyZXNcIik7XG4gICAgfVxuXG4gICAgZ2V0UGF1c2VzKHN0dWR5SWQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNpY1JlYWQoXCJzdHVkaWVzL1wiICsgc3R1ZHlJZCArIFwiL3BhdXNlc1wiKTtcbiAgICB9XG5cblxuICAgIC8vIFByb2NlZHVyZXNcblxuICAgIGdldFByb2NlZHVyZXMoc3R1ZHlJZDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBwYXRoOiBcInByb2NlZHVyZXNcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICAgICAgYm9keToge3N0dWR5X2lkOiBzdHVkeUlkfSxcbiAgICAgICAgICAgIGZvcm1EYXRhOiB0cnVlLFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0SGVhZGVycyhvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvLyBQYXJ0aWNpcGFudHNcblxuICAgIGdldFBhcnRpY2lwYW50c0J5UHJvY2VkdXJlKHByb2NlZHVyZUlkOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uczogT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIHBhdGg6IFwicGFydGljaXBhbnRzXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgICAgIGJvZHk6IHtwcm9jZWR1cmVfaWQ6IHByb2NlZHVyZUlkfSxcbiAgICAgICAgICAgIGZvcm1EYXRhOiB0cnVlLFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0SGVhZGVycyhvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChvcHRpb25zKTtcbiAgICB9XG5cbiAgICBnZXRQYXJ0aWNpcGFudEJ5SWQocGFydGljaXBhbnRJZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2ljUmVhZChcInBhcnRpY2lwYW50cy9cIiArIHBhcnRpY2lwYW50SWQpO1xuICAgIH1cblxuICAgIGVuZFBhcnRpY2lwYW50UGF1c2UocGFydGljaXBhbnRUb2tlbjogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2ljUmVhZChcInBhcnRpY2lwYW50cy9cIiArIHBhcnRpY2lwYW50VG9rZW4gKyBcIi9lbmQtcGF1c2VcIik7XG4gICAgfVxuXG4gICAgLy9UYXNrc1xuXG4gICAgY3JlYXRlVGFzayh0YXNrOiBvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzaWNDcmVhdGUoXCJ0YXNrc1wiLCB0YXNrKTtcbiAgICB9XG5cbiAgICBnZXRUYXNrKHRhc2tJZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2ljUmVhZChcInRhc2tzL1wiICsgdGFza0lkKTtcbiAgICB9XG5cbiAgICB1cGRhdGVUYXNrKHRhc2tJZDogbnVtYmVyLCB0YXNrOiBvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzaWNVcGRhdGUoXCJ0YXNrcy9cIiArIHRhc2tJZCwgdGFzayk7XG4gICAgfVxuXG4gICAgZGVsZXRlVGFzayh0YXNrSWQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNpY0RlbGV0ZShcInRhc2tzL1wiICsgdGFza0lkKTtcbiAgICB9XG5cbiAgICAvL1RleHRzXG5cbiAgICBjcmVhdGVUZXh0KHRleHQ6IG9iamVjdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNpY0NyZWF0ZShcInRleHRzXCIsIHRleHQpO1xuICAgIH1cblxuICAgIGdldFRleHQodGV4dElkOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzaWNSZWFkKFwidGV4dHMvXCIgKyB0ZXh0SWQpO1xuICAgIH1cblxuICAgIHVwZGF0ZVRleHQodGV4dElkOiBudW1iZXIsIHRleHQ6IG9iamVjdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNpY1VwZGF0ZShcInRleHRzL1wiICsgdGV4dElkLCB0ZXh0KTtcbiAgICB9XG5cbiAgICBkZWxldGVUZXh0KHRleHRJZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2ljRGVsZXRlKFwidGV4dHMvXCIgKyB0ZXh0SWQpO1xuICAgIH1cblxuICAgIC8vUXVlc3Rpb25uYWlyZXNcblxuICAgIGNyZWF0ZVF1ZXN0aW9ubmFpcmUocXVlc3Rpb25uYWlyZTogb2JqZWN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2ljQ3JlYXRlKFwicXVlc3Rpb25uYWlyZXNcIiwgcXVlc3Rpb25uYWlyZSk7XG4gICAgfVxuXG4gICAgZ2V0UXVlc3Rpb25uYWlyZShxdWVzdGlvbm5haXJlSWQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNpY1JlYWQoXCJxdWVzdGlvbm5haXJlcy9cIiArIHF1ZXN0aW9ubmFpcmVJZCk7XG4gICAgfVxuXG4gICAgdXBkYXRlUXVlc3Rpb25uYWlyZShxdWVzdGlvbm5haXJlSWQ6IG51bWJlciwgcXVlc3Rpb25uYWlyZTogb2JqZWN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2ljVXBkYXRlKFwicXVlc3Rpb25uYWlyZXMvXCIgKyBxdWVzdGlvbm5haXJlSWQsIHF1ZXN0aW9ubmFpcmUpO1xuICAgIH1cblxuICAgIGRlbGV0ZVF1ZXN0aW9ubmFpcmUocXVlc3Rpb25uYWlyZUlkOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzaWNEZWxldGUoXCJxdWVzdGlvbm5haXJlcy9cIiArIHF1ZXN0aW9ubmFpcmVJZCk7XG4gICAgfVxuXG4gICAgLy9QYXVzZXNcblxuICAgIGNyZWF0ZVBhdXNlKHBhdXNlOiBvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzaWNDcmVhdGUoXCJwYXVzZXNcIiwgcGF1c2UpO1xuICAgIH1cblxuICAgIGdldFBhdXNlKHBhdXNlSWQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNpY1JlYWQoXCJwYXVzZXMvXCIgKyBwYXVzZUlkKTtcbiAgICB9XG5cbiAgICB1cGRhdGVQYXVzZShwYXVzZUlkOiBudW1iZXIsIHBhdXNlOiBvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzaWNVcGRhdGUoXCJwYXVzZXMvXCIgKyBwYXVzZUlkLCBwYXVzZSk7XG4gICAgfVxuXG4gICAgZGVsZXRlUGF1c2UocGF1c2VJZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2ljRGVsZXRlKFwicGF1c2VzL1wiICsgcGF1c2VJZCk7XG4gICAgfVxuXG4gICAgLy9JbnRlcmFjdGlvbnNcblxuICAgIGdldEZpcnN0MTAwSW50ZXJhY3Rpb25zKHN0dWR5SWQ6IG51bWJlcikge1xuICAgICAgICBjb25zdCBvcHRpb25zOiBPcHRpb25zID0ge1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgcGF0aDogXCJpbnRlcmFjdGlvbnNcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICAgICAgcGFyYW1zOiB7IHN0dWR5X2lkOiBzdHVkeUlkLCB0eXBlOiBcImFsbFwiIH0sXG4gICAgICAgICAgICBhc1F1ZXJ5OiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0SGVhZGVycyhvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChvcHRpb25zKTtcbiAgICB9XG5cbiAgICBnZXRJbnRlcmFjdGlvbnMoc3R1ZHlJZDogbnVtYmVyLCB0eXBlOiBzdHJpbmcsIG9mZnNldDogbnVtYmVyID0gMCwgbGltaXQ6IG51bWJlciA9IDEwMCkge1xuICAgICAgICBjb25zdCBvcHRpb25zOiBPcHRpb25zID0ge1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgcGF0aDogXCJpbnRlcmFjdGlvbnNcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICAgICAgcGFyYW1zOiB7IHN0dWR5X2lkOiBzdHVkeUlkLCB0eXBlOiB0eXBlLCBvZmZzZXQ6IG9mZnNldCwgbGltaXQ6IGxpbWl0IH0sXG4gICAgICAgICAgICBhc1F1ZXJ5OiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0SGVhZGVycyhvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvLyAtLS0tIE1BSU5MWSBGT1IgVVNFIElOIFNUVURZIEZST05URU5EIC0tLS0gLy9cblxuICAgIC8vVE9ETzogcmVhZCBjb25kaXRpb24gY29uZmlnXG5cbiAgICAvL1N0dWR5IEZyb250ZW5kIHJlbGF0ZWQgZnVuY3Rpb25zXG5cbiAgICBnZXRTdHVkeShzdHVkeUlkPzogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBwYXRoOiBcInN0dWRpZXMvXCIgKyAoc3R1ZHlJZCB8fCB0aGlzLnN0dWR5SWQpLFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZ2V0U3R1ZHlTZXR1cEluZm8oc3R1ZHlJZD86IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNpY1JlYWQoXCJzdHVkaWVzL1wiICsgc3R1ZHlJZCArIFwiL3NldHVwLWluZm9cIilcbiAgICB9XG5cbiAgICAvLyBQYXJ0aWNpcGF0aW9uIHJlbGF0ZWQgbWV0aG9kc1xuXG4gICAgZ2V0UGFydGljaXBhbnQocGFydGljaXBhbnRUb2tlbjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBwYXRoOiBcInBhcnRpY2lwYW50cy90b2tlbi9cIiArIHBhcnRpY2lwYW50VG9rZW4sXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChvcHRpb25zKTtcbiAgICB9XG5cbiAgICBwYXJ0aWNpcGF0ZShwYXJ0aWNpcGFudFRva2VuPzogc3RyaW5nKSB7XG4gICAgICAgIGxldCBvcHRpb25zOiBPcHRpb25zID0ge1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgcGF0aDogXCJzdHVkaWVzL1wiICsgdGhpcy5zdHVkeUlkICsgXCIvcGFydGljaXBhdGVcIlxuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJ0aWNpcGFudFRva2VuKSB7XG4gICAgICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgICAgICBwYXRoOiBcInN0dWRpZXMvXCIgKyB0aGlzLnN0dWR5SWQgKyBcIi9wYXJ0aWNpcGF0ZS9cIiArIHBhcnRpY2lwYW50VG9rZW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHNldExvZ2dlcktleShsb2dnZXJLZXkpIHtcbiAgICAgICAgdGhpcy5sb2dnZXJLZXkgPSBsb2dnZXJLZXk7XG4gICAgfVxuXG4gICAgc3RvcmVUb2tlbnMocmVzcG9uc2VKc29uKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5zXCIsIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlSnNvbikpO1xuICAgIH1cblxuICAgIHVwZGF0ZUFjY2Vzc1Rva2VuKHJlc3BvbnNlSnNvbikge1xuICAgICAgICBjb25zdCB0b2tlbnMgPSB0aGlzLnJlYWRUb2tlbnMoKTtcbiAgICAgICAgdG9rZW5zW1wiYWNjZXNzX3Rva2VuXCJdID0gcmVzcG9uc2VKc29uW1wiYWNjZXNzX3Rva2VuXCJdO1xuICAgICAgICB0aGlzLnN0b3JlVG9rZW5zKHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmVhZFRva2VucyhrZXk9IG51bGwpIHtcbiAgICAgICAgbGV0IHRva2VucyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5zXCIpO1xuICAgICAgICBpZiAodG9rZW5zKSB7XG4gICAgICAgICAgICB0b2tlbnMgPSBKU09OLnBhcnNlKHRva2Vucyk7XG4gICAgICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRva2VucztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgZGVsZXRlVG9rZW5zKCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2Vuc1wiKTtcbiAgICB9XG5cbiAgICByZWZyZXNoVG9rZW4oKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBwYXRoOiBcInBhcnRpY2lwYW50cy9yZWZyZXNoXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7fVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0SGVhZGVycyhvcHRpb25zLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChvcHRpb25zKTtcbiAgICB9XG5cbiAgICBtZSgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBvcHRpb25zOiBPcHRpb25zID0ge1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgcGF0aDogXCJwYXJ0aWNpcGFudHMvbWVcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHt9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRIZWFkZXJzKG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGdldFByb2NlZHVyZShwcm9jZWR1cmVJZDogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uczogT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIHBhdGg6IFwicHJvY2VkdXJlcy9cIiArIHByb2NlZHVyZUlkLFxuICAgICAgICAgICAgaGVhZGVyczoge31cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEhlYWRlcnMob3B0aW9ucyk7XG4gICAgICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8vIEhlbHBlciBtZXRob2QgdG8gY3JlYXRlIGJ1bGtzIGZyb20gaW50ZXJhY3Rpb24gbGlzdHNcbiAgICBwcml2YXRlIGJ1aWxkQnVsa0xpc3QoaW50ZXJhY3Rpb25MaXN0OiBJbnRlcmFjdGlvblR5cGVzLCBidWxrU2l6ZTogbnVtYmVyID0gMTApIHtcbiAgICAgICAgY29uc3QgYnVsa3MgPSBbXTtcbiAgICAgICAgd2hpbGUgKHRoaXNbaW50ZXJhY3Rpb25MaXN0XS5sZW5ndGggPiBidWxrU2l6ZSkge1xuICAgICAgICAgICAgYnVsa3MucHVzaCh0aGlzW2ludGVyYWN0aW9uTGlzdF0uc3BsaWNlKDAsIGJ1bGtTaXplKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXNbaW50ZXJhY3Rpb25MaXN0XS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBidWxrcy5wdXNoKHRoaXNbaW50ZXJhY3Rpb25MaXN0XS5zcGxpY2UoMCwgdGhpc1tpbnRlcmFjdGlvbkxpc3RdLmxlbmd0aCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWxrcztcbiAgICB9XG5cbiAgICAvLyBUT0RPOiB0eXBlIGNhbGxiYWNrIGNvcnJlY3RseSwgc3RhcnRpbmcgcG9pbnQgY291bGQgYmUgKGNvbmRpdGlvbklkOiBudW1iZXIsIGludGVyYWN0aW9uczogb2JqZWN0W10pID0+IFByb21pc2U8YW55PlxuICAgIGxvZ0ludGVyYWN0aW9uQnVsayhwYXRoOiBzdHJpbmcsIGNvbmRpdGlvbklkOiBudW1iZXIsIGludGVyYWN0aW9uTGlzdDogSW50ZXJhY3Rpb25UeXBlcywgYnVsa1NpemU6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ0ludGVyYWN0aW9uQnVsa1JlcXVlc3QpIHtcbiAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25CdWxrcyA9IHRoaXMuYnVpbGRCdWxrTGlzdChpbnRlcmFjdGlvbkxpc3QsIGJ1bGtTaXplKTtcbiAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25CdWxrUmVxdWVzdHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnRlcmFjdGlvbkJ1bGtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpbnRlcmFjdGlvbkJ1bGtSZXF1ZXN0cy5wdXNoKGxvZ0ludGVyYWN0aW9uQnVsa1JlcXVlc3QocGF0aCwgY29uZGl0aW9uSWQsIGludGVyYWN0aW9uQnVsa3NbaV0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGxTZXR0bGVkKGludGVyYWN0aW9uQnVsa1JlcXVlc3RzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvZ0ludGVyYWN0aW9uQnVsa1JlcXVlc3QocGF0aDogc3RyaW5nLCBjb25kaXRpb25JZDogbnVtYmVyLCBpbnRlcmFjdGlvbnM6IG9iamVjdFtdKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICAgIGhlYWRlcnM6IHt9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRMb2dnZXJIZWFkZXJzKG9wdGlvbnMpO1xuICAgICAgICBvcHRpb25zLmJvZHkgPSB7XG4gICAgICAgICAgICBjb25kaXRpb25faWQ6IGNvbmRpdGlvbklkLFxuICAgICAgICAgICAgaW50ZXJhY3Rpb25zOiBpbnRlcmFjdGlvbnNcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChvcHRpb25zKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvZ0ludGVyYWN0aW9uUmVxdWVzdChwYXRoOiBzdHJpbmcsIGNvbmRpdGlvbklkOiBudW1iZXIgfCBudWxsLCBpbnRlcmFjdGlvbjogb2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICAgIGhlYWRlcnM6IHt9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRMb2dnZXJIZWFkZXJzKG9wdGlvbnMpO1xuICAgICAgICBvcHRpb25zLmJvZHkgPSB7XG4gICAgICAgICAgICBjb25kaXRpb25faWQ6IGNvbmRpdGlvbklkLFxuICAgICAgICAgICAgaW50ZXJhY3Rpb246IGludGVyYWN0aW9uXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLy8gTW91c2UgSW50ZXJhY3Rpb25cblxuICAgIGxvZ01vdXNlSW50ZXJhY3Rpb24oY29uZGl0aW9uSWQ6IG51bWJlciwgZXZlbnRUeXBlOiBzdHJpbmcsIG1vdXNlRXZlbnQ6IE1vdXNlRXZlbnQsIHRpbWVzdGFtcDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRlZFRhcmdldDoge30gPSB7fSwgbWV0YURhdGE6IHt9ID0ge30pIHtcbiAgICAgICAgY29uc3QgaW50ZXJhY3Rpb24gPSBuZXcgTW91c2VJbnRlcmFjdGlvbihldmVudFR5cGUsIHRpbWVzdGFtcCwgbW91c2VFdmVudCwgcmVsYXRlZFRhcmdldCwgbWV0YURhdGEpO1xuICAgICAgICBjb25zdCBwYXRoID0gXCJpbnRlcmFjdGlvbi9tb3VzZVwiO1xuICAgICAgICByZXR1cm4gdGhpcy5sb2dJbnRlcmFjdGlvblJlcXVlc3QocGF0aCwgY29uZGl0aW9uSWQsIGludGVyYWN0aW9uKTtcbiAgICB9XG5cbiAgICBhZGRNb3VzZUludGVyYWN0aW9uKGV2ZW50VHlwZTogc3RyaW5nLCBtb3VzZUV2ZW50OiBNb3VzZUV2ZW50LCB0aW1lc3RhbXA6IG51bWJlciwgcmVsYXRlZFRhcmdldDoge30gPSB7fSwgbWV0YURhdGE6IHt9ID0ge30pIHtcbiAgICAgICAgdGhpcy5tb3VzZUludGVyYWN0aW9uTGlzdC5wdXNoKG5ldyBNb3VzZUludGVyYWN0aW9uKGV2ZW50VHlwZSwgdGltZXN0YW1wLCBtb3VzZUV2ZW50LCByZWxhdGVkVGFyZ2V0LCBtZXRhRGF0YSkpO1xuICAgIH1cblxuICAgIGxvZ01vdXNlSW50ZXJhY3Rpb25CdWxrKGNvbmRpdGlvbklkOiBudW1iZXIsIGJ1bGtTaXplOiBudW1iZXIgPSAxMCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IGludGVyYWN0aW9uVHlwZSA9IFwibW91c2VJbnRlcmFjdGlvbkxpc3RcIlxuICAgICAgICBjb25zdCBwYXRoID0gXCJpbnRlcmFjdGlvbi9tb3VzZS9idWxrXCI7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZ0ludGVyYWN0aW9uQnVsayhwYXRoLCBjb25kaXRpb25JZCwgaW50ZXJhY3Rpb25UeXBlLCBidWxrU2l6ZSwgdGhpcy5sb2dJbnRlcmFjdGlvbkJ1bGtSZXF1ZXN0LmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIC8vIERyYWcgSW50ZXJhY3Rpb25cblxuICAgIGxvZ0RyYWdJbnRlcmFjdGlvbihjb25kaXRpb25JZDogbnVtYmVyLCBldmVudFR5cGU6IHN0cmluZywgZHJhZ0V2ZW50OiBEcmFnRXZlbnQsIHRpbWVzdGFtcDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRlZFRhcmdldDoge30gPSB7fSwgbWV0YURhdGE6IHt9ID0ge30pIHtcbiAgICAgICAgY29uc3QgaW50ZXJhY3Rpb24gPSBuZXcgRHJhZ0ludGVyYWN0aW9uKGV2ZW50VHlwZSwgdGltZXN0YW1wLCBkcmFnRXZlbnQsIHJlbGF0ZWRUYXJnZXQsIG1ldGFEYXRhKTtcbiAgICAgICAgY29uc3QgcGF0aCA9IFwiaW50ZXJhY3Rpb24vZHJhZ1wiO1xuICAgICAgICByZXR1cm4gdGhpcy5sb2dJbnRlcmFjdGlvblJlcXVlc3QocGF0aCwgY29uZGl0aW9uSWQsIGludGVyYWN0aW9uKTtcbiAgICB9XG5cbiAgICBhZGREcmFnSW50ZXJhY3Rpb24oZXZlbnRUeXBlOiBzdHJpbmcsIGRyYWdFdmVudDogRHJhZ0V2ZW50LCB0aW1lc3RhbXA6IG51bWJlciwgcmVsYXRlZFRhcmdldDoge30gPSB7fSwgbWV0YURhdGE6IHt9ID0ge30pIHtcbiAgICAgICAgdGhpcy5kcmFnSW50ZXJhY3Rpb25MaXN0LnB1c2gobmV3IERyYWdJbnRlcmFjdGlvbihldmVudFR5cGUsIHRpbWVzdGFtcCwgZHJhZ0V2ZW50LCByZWxhdGVkVGFyZ2V0LCBtZXRhRGF0YSkpO1xuICAgIH1cblxuICAgIGxvZ0RyYWdJbnRlcmFjdGlvbkJ1bGsoY29uZGl0aW9uSWQ6IG51bWJlciwgYnVsa1NpemU6IG51bWJlciA9IDEwKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25UeXBlID0gXCJkcmFnSW50ZXJhY3Rpb25MaXN0XCJcbiAgICAgICAgY29uc3QgcGF0aCA9IFwiaW50ZXJhY3Rpb24vZHJhZy9idWxrXCI7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZ0ludGVyYWN0aW9uQnVsayhwYXRoLCBjb25kaXRpb25JZCwgaW50ZXJhY3Rpb25UeXBlLCBidWxrU2l6ZSwgdGhpcy5sb2dJbnRlcmFjdGlvbkJ1bGtSZXF1ZXN0LmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIC8vIEtleWJvYXJkIEludGVyYWN0aW9uXG5cbiAgICBsb2dLZXlib2FyZEludGVyYWN0aW9uKGNvbmRpdGlvbklkOiBudW1iZXIsIGV2ZW50VHlwZTogc3RyaW5nLCBrZXlib2FyZEV2ZW50OiBLZXlib2FyZEV2ZW50LCB0aW1lc3RhbXA6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFEYXRhOiB7fSA9IHt9KSB7XG4gICAgICAgIGNvbnN0IGludGVyYWN0aW9uID0gbmV3IEtleWJvYXJkSW50ZXJhY3Rpb24oZXZlbnRUeXBlLCB0aW1lc3RhbXAsIGtleWJvYXJkRXZlbnQsIG1ldGFEYXRhKTtcbiAgICAgICAgY29uc3QgcGF0aCA9IFwiaW50ZXJhY3Rpb24va2V5Ym9hcmRcIjtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nSW50ZXJhY3Rpb25SZXF1ZXN0KHBhdGgsIGNvbmRpdGlvbklkLCBpbnRlcmFjdGlvbik7XG4gICAgfVxuXG4gICAgYWRkS2V5Ym9hcmRJbnRlcmFjdGlvbihldmVudFR5cGU6IHN0cmluZywga2V5Ym9hcmRFdmVudDogS2V5Ym9hcmRFdmVudCwgdGltZXN0YW1wOiBudW1iZXIsIG1ldGFEYXRhOiB7fSA9IHt9KSB7XG4gICAgICAgIHRoaXMua2V5Ym9hcmRJbnRlcmFjdGlvbkxpc3QucHVzaChuZXcgS2V5Ym9hcmRJbnRlcmFjdGlvbihldmVudFR5cGUsIHRpbWVzdGFtcCwga2V5Ym9hcmRFdmVudCwgbWV0YURhdGEpKTtcbiAgICB9XG5cbiAgICBsb2dLZXlib2FyZEludGVyYWN0aW9uQnVsayhjb25kaXRpb25JZDogbnVtYmVyLCBidWxrU2l6ZTogbnVtYmVyID0gMTApOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBpbnRlcmFjdGlvblR5cGUgPSBcImtleWJvYXJkSW50ZXJhY3Rpb25MaXN0XCJcbiAgICAgICAgY29uc3QgcGF0aCA9IFwiaW50ZXJhY3Rpb24va2V5Ym9hcmQvYnVsa1wiO1xuICAgICAgICByZXR1cm4gdGhpcy5sb2dJbnRlcmFjdGlvbkJ1bGsocGF0aCwgY29uZGl0aW9uSWQsIGludGVyYWN0aW9uVHlwZSwgYnVsa1NpemUsIHRoaXMubG9nSW50ZXJhY3Rpb25CdWxrUmVxdWVzdC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICAvLyBUb3VjaCBJbnRlcmFjdGlvblxuXG4gICAgbG9nVG91Y2hJbnRlcmFjdGlvbihjb25kaXRpb25JZDogbnVtYmVyLCBldmVudFR5cGU6IHN0cmluZywgdG91Y2hFdmVudDogVG91Y2hFdmVudCwgdGltZXN0YW1wOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhRGF0YToge30gPSB7fSkge1xuICAgICAgICBjb25zdCBpbnRlcmFjdGlvbiA9IG5ldyBUb3VjaEludGVyYWN0aW9uKGV2ZW50VHlwZSwgdGltZXN0YW1wLCB0b3VjaEV2ZW50LCBtZXRhRGF0YSk7XG4gICAgICAgIGNvbnN0IHBhdGggPSBcImludGVyYWN0aW9uL3RvdWNoXCI7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZ0ludGVyYWN0aW9uUmVxdWVzdChwYXRoLCBjb25kaXRpb25JZCwgaW50ZXJhY3Rpb24pO1xuICAgIH1cblxuICAgIGFkZFRvdWNoSW50ZXJhY3Rpb24oZXZlbnRUeXBlOiBzdHJpbmcsIHRvdWNoRXZlbnQ6IFRvdWNoRXZlbnQsIHRpbWVzdGFtcDogbnVtYmVyLCBtZXRhRGF0YToge30gPSB7fSkge1xuICAgICAgICB0aGlzLnRvdWNoSW50ZXJhY3Rpb25MaXN0LnB1c2gobmV3IFRvdWNoSW50ZXJhY3Rpb24oZXZlbnRUeXBlLCB0aW1lc3RhbXAsIHRvdWNoRXZlbnQsIG1ldGFEYXRhKSk7XG4gICAgfVxuXG4gICAgbG9nVG91Y2hJbnRlcmFjdGlvbkJ1bGsoY29uZGl0aW9uSWQ6IG51bWJlciwgYnVsa1NpemU6IG51bWJlciA9IDEwKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25UeXBlID0gXCJ0b3VjaEludGVyYWN0aW9uTGlzdFwiXG4gICAgICAgIGNvbnN0IHBhdGggPSBcImludGVyYWN0aW9uL3RvdWNoL2J1bGtcIjtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nSW50ZXJhY3Rpb25CdWxrKHBhdGgsIGNvbmRpdGlvbklkLCBpbnRlcmFjdGlvblR5cGUsIGJ1bGtTaXplLCB0aGlzLmxvZ0ludGVyYWN0aW9uQnVsa1JlcXVlc3QuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgLy8gR2VuZXJpYyBJbnRlcmFjdGlvblxuXG4gICAgbG9nR2VuZXJpY0ludGVyYWN0aW9uKGNvbmRpdGlvbklkOiBudW1iZXIsIGV2ZW50VHlwZTogc3RyaW5nLCBnZW5lcmljRXZlbnQ6IG9iamVjdCwgdGltZXN0YW1wOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRhRGF0YToge30gPSB7fSkge1xuICAgICAgICBjb25zdCBpbnRlcmFjdGlvbiA9IG5ldyBHZW5lcmljSW50ZXJhY3Rpb24oZXZlbnRUeXBlLCB0aW1lc3RhbXAsIGdlbmVyaWNFdmVudCwgbWV0YURhdGEpO1xuICAgICAgICBjb25zdCBwYXRoID0gXCJpbnRlcmFjdGlvbi9nZW5lcmljXCI7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZ0ludGVyYWN0aW9uUmVxdWVzdChwYXRoLCBjb25kaXRpb25JZCwgaW50ZXJhY3Rpb24pO1xuICAgIH1cblxuICAgIGFkZEdlbmVyaWNJbnRlcmFjdGlvbihldmVudFR5cGU6IHN0cmluZywgZ2VuZXJpY0V2ZW50OiBvYmplY3QsIHRpbWVzdGFtcDogbnVtYmVyLCBtZXRhRGF0YToge30gPSB7fSkge1xuICAgICAgICB0aGlzLmdlbmVyaWNJbnRlcmFjdGlvbkxpc3QucHVzaChuZXcgR2VuZXJpY0ludGVyYWN0aW9uKGV2ZW50VHlwZSwgdGltZXN0YW1wLCBnZW5lcmljRXZlbnQsIG1ldGFEYXRhKSk7XG4gICAgfVxuXG4gICAgbG9nR2VuZXJpY0ludGVyYWN0aW9uQnVsayhjb25kaXRpb25JZDogbnVtYmVyLCBidWxrU2l6ZTogbnVtYmVyID0gMTApOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBpbnRlcmFjdGlvblR5cGUgPSBcImdlbmVyaWNJbnRlcmFjdGlvbkxpc3RcIlxuICAgICAgICBjb25zdCBwYXRoID0gXCJpbnRlcmFjdGlvbi9nZW5lcmljL2J1bGtcIjtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nSW50ZXJhY3Rpb25CdWxrKHBhdGgsIGNvbmRpdGlvbklkLCBpbnRlcmFjdGlvblR5cGUsIGJ1bGtTaXplLCB0aGlzLmxvZ0ludGVyYWN0aW9uQnVsa1JlcXVlc3QuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgLy8gTWV0YSBJbnRlcmFjdGlvbiAoU2FtZSBhcyBHZW5lcmljIEludGVyYWN0aW9uIGJ1dCB3aXRob3V0IGNvbmRpdGlvbl9pZFxuICAgIGxvZ01ldGFJbnRlcmFjdGlvbihldmVudFR5cGU6IHN0cmluZywgZ2VuZXJpY0V2ZW50OiBvYmplY3QsIHRpbWVzdGFtcDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhRGF0YToge30gPSB7fSkge1xuICAgICAgICBjb25zdCBpbnRlcmFjdGlvbiA9IG5ldyBHZW5lcmljSW50ZXJhY3Rpb24oZXZlbnRUeXBlLCB0aW1lc3RhbXAsIGdlbmVyaWNFdmVudCwgbWV0YURhdGEpO1xuICAgICAgICBjb25zdCBwYXRoID0gXCJpbnRlcmFjdGlvbi9tZXRhXCI7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZ0ludGVyYWN0aW9uUmVxdWVzdChwYXRoLCBudWxsLCBpbnRlcmFjdGlvbik7XG4gICAgfVxuXG4gICAgLy8gUHJvY2VkdXJlIHJlbGF0ZWQgbWV0aG9kc1xuXG4gICAgc3RhcnRQcm9jZWR1cmUoKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBwYXRoOiBcInByb2NlZHVyZXMvc3RhcnRcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHt9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRIZWFkZXJzKG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xuICAgIH1cblxuICAgIG5leHRQcm9jZWR1cmUoKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBwYXRoOiBcInByb2NlZHVyZXMvbmV4dFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge31cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEhlYWRlcnMob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZW5kUHJvY2VkdXJlKCkge1xuICAgICAgICBjb25zdCBvcHRpb25zOiBPcHRpb25zID0ge1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgcGF0aDogXCJwcm9jZWR1cmVzL2VuZFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge31cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEhlYWRlcnMob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgY3VycmVudFByb2NlZHVyZVN0ZXAoKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBwYXRoOiBcInByb2NlZHVyZS1zdGVwc1wiLFxuICAgICAgICAgICAgaGVhZGVyczoge31cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEhlYWRlcnMob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgY2hlY2tTdXJ2ZXlSZXN1bHQoKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBwYXRoOiBcInByb2NlZHVyZXMvY2hlY2stc3VydmV5LXJlc3VsdFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge31cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEhlYWRlcnMob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgc3RhcnROYXZpZ2F0b3IoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgLy8gZ2V0IHRoZSB1c2VyIHRva2VuICh1dWlkKVxuICAgICAgICAgICAgdGhpcy5tZSgpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5ib2R5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnRpY2lwYW50VG9rZW4gPSByZXNwb25zZS5ib2R5LnRva2VuO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmFwaVVybCArIFwiL1wiICsgXCJwcm9jZWR1cmVzL25hdmlnYXRvcj9wYXJ0aWNpcGFudD1cIiArIHBhcnRpY2lwYW50VG9rZW47XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3NlID0gbmV3IEV2ZW50U291cmNlKHVybCwge3dpdGhDcmVkZW50aWFsczogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZWplY3Qoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlBhcnRpY2lwYW50IG5vdCBmb3VuZFwiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsb3NlTmF2aWdhdG9yKCkge1xuICAgICAgICB0aGlzLnNzZS5jbG9zZSgpO1xuICAgIH1cblxuICAgIHJlY29ubmVjdE5hdmlnYXRvcigpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uczogT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIHBhdGg6IFwicHJvY2VkdXJlcy9uYXZpZ2F0b3IvcmVjb25uZWN0XCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7fVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0SGVhZGVycyhvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChvcHRpb25zKTtcbiAgICB9XG5cbiAgICBnZXROYXZpZ2F0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNzZTtcbiAgICB9XG5cbiAgICB1cGRhdGVOYXZpZ2F0b3IocGFydGljaXBhbnRUb2tlbjogc3RyaW5nLCBzb3VyY2U6IE5hdmlnYXRvclNvdXJjZSwgc3RhdGU6IE5hdmlnYXRvclN0YXRlLCBleHRJZDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgcGF0aDogXCJwcm9jZWR1cmVzL25hdmlnYXRvclwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy5ib2R5ID0ge1xuICAgICAgICAgICAgcGFydGljaXBhbnRfdG9rZW46IHBhcnRpY2lwYW50VG9rZW4sXG4gICAgICAgICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgIGV4dF9pZDogZXh0SWRcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChvcHRpb25zKTtcbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFN0dWR5QWxpZ25MaWI7Il0sInNvdXJjZVJvb3QiOiIifQ==