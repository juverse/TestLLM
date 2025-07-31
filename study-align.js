/* Integrate the Library in three steps:
    1. Initialize studyAlignLib (STEP1)
    2. Implement data logging (STEP2)
    3. Finish procedure step (STEP3)
*/

/*STEP1: Initialize new studyAlignLib object

The study frontend will pass four GET parameters to your prototype:
1. study_id
2. condition_id
3. logger_key
3. participant_token (will be used in STEP3, see below) */

const urlParams = studyAlignLib.getParamsFromURL()
const studyId = urlParams.studyId || 1;
const conditionId = urlParams.conditionId || 1; // value from get parameter or 1 (default)
const loggerKey =  urlParams.loggerKey; // needed for logging
const participantToken = urlParams.participantToken;

console.log("URL Params:",  urlParams);

const sal = new studyAlignLib("http://localhost:8000", studyId); // params: backend_url and studyId
sal.setLoggerKey(loggerKey);
console.log(sal)

const LoggerEvents = Object.freeze({
    // Procedure specific events
    USER_AGENT: 'USER_AGENT',
    // browser interaction events
    MOUSE_CLICK: 'click',
    MOUSE_DBLCLICK: 'dblclick',
    MOUSE_UP: 'mouseup',
    MOUSE_DOWN: 'mousedown',
    MOUSE_ENTER: 'mouseenter',
    MOUSE_LEAVE: 'mouseleave',
    MOUSE_OUT: 'mouseout',
    MOUSE_OVER: 'mouseover',
    KEY_DOWN: 'keydown',
    KEY_UP: 'keyup',
    KEY_PRESS: 'keypress',
    TOUCH_START: 'touchstart',
    // browser interaction events, adding to bulk
    BULK_MOUSE_CLICK: 'bulk_click',
    BULK_MOUSE_DBLCLICK: 'bulk_dblclick',
    BULK_MOUSE_UP: 'bulk_mouseup',
    BULK_MOUSE_DOWN: 'bulk_mousedown',
    BULK_MOUSE_ENTER: 'bulk_mouseenter',
    BULK_MOUSE_LEAVE: 'bulk_mouseleave',
    BULK_MOUSE_OUT: 'bulk_mouseout',
    BULK_MOUSE_OVER: 'bulk_mouseover',
    BULK_KEY_DOWN: 'bulk_keydown',
    BULK_KEY_UP: 'bulk_keyup',
    BULK_KEY_PRESS: 'bulk_keypress',
    BULK_TOUCH_START: 'bulk_touchstart',
    BULK_CUSTOM_EVENT_EXAMPLE: 'BULK_CUSTOM_EVENT_EXAMPLE',
    // Example Events
    CUSTOM_EVENT_EXAMPLE: 'CUSTOM_EVENT_EXAMPLE',
    FINAL_EVENT_EXAMPLE: 'FINAL_EVENT_EXAMPLE'
});

const TransmitterEvents = Object.freeze({
    TRANSMIT_MOUSE_BULK: 'transmit_mouse_bulk',
    TRANSMIT_KEY_BULK: 'transmit_key_bulk',
    TRANSMIT_TOUCH_BULK: 'transmit_touch_bulk',
    TRANSMIT_GENERIC_BULK: 'transmit_generic_bulk',
})

async function logger(eventName, data, metaData = {}) {
    const timestamp = Date.now();
    try {
        switch (eventName) {
            case LoggerEvents.USER_AGENT:
                await sal.logGenericInteraction(
                    conditionId,
                    eventName,
                    data,
                    timestamp,
                    metaData
                );
                break;
            case LoggerEvents.MOUSE_CLICK:
            case LoggerEvents.MOUSE_DBLCLICK:
            case LoggerEvents.MOUSE_UP:
            case LoggerEvents.MOUSE_DOWN:
            case LoggerEvents.MOUSE_ENTER:
            case LoggerEvents.MOUSE_LEAVE:
            case LoggerEvents.MOUSE_OUT:
            case LoggerEvents.MOUSE_OVER:
                await sal.logMouseInteraction(
                    conditionId,
                    eventName,
                    data,
                    timestamp,
                    data.relatedTarget,
                    metaData,
                );
                break;
            case LoggerEvents.KEY_DOWN:
            case LoggerEvents.KEY_UP:
            case LoggerEvents.KEY_PRESS:
                await sal.logKeyboardInteraction(
                    conditionId,
                    eventName,
                    data,
                    timestamp,
                    metaData,
                );
                break;
            case LoggerEvents.TOUCH_START:
                await sal.logTouchInteraction(
                    conditionId,
                    eventName,
                    data,
                    timestamp,
                    metaData,
                );
                break;
            case LoggerEvents.CUSTOM_EVENT_EXAMPLE:
            case LoggerEvents.FINAL_EVENT_EXAMPLE:
                await sal.logGenericInteraction(
                    conditionId,
                    eventName,
                    data,
                    timestamp,
                    metaData,
                );
                break;
        }
    } catch (e) {
        console.warn('LOGGING FAILED', e);
    }
}


async function bulkLogger(eventName, data, metaData = {}) {
    const timestamp = Date.now();
    try {
        switch (eventName) {
            case LoggerEvents.BULK_MOUSE_CLICK:
            case LoggerEvents.BULK_MOUSE_DBLCLICK:
            case LoggerEvents.BULK_MOUSE_UP:
            case LoggerEvents.BULK_MOUSE_DOWN:
            case LoggerEvents.BULK_MOUSE_ENTER:
            case LoggerEvents.BULK_MOUSE_LEAVE:
            case LoggerEvents.BULK_MOUSE_OUT:
            case LoggerEvents.BULK_MOUSE_OVER:
                await sal.addMouseInteraction(
                    bulk_to_event(eventName),
                    data,
                    timestamp,
                    data.relatedTarget,
                    metaData,
                );
                break;
            case LoggerEvents.BULK_KEY_DOWN:
            case LoggerEvents.BULK_KEY_UP:
            case LoggerEvents.BULK_KEY_PRESS:
                await sal.addKeyboardInteraction(
                    bulk_to_event(eventName),
                    data,
                    timestamp,
                    metaData,
                );
                console.log(sal.keyboardInteractionList)
                break;
            case LoggerEvents.BULK_TOUCH_START:
                await sal.addTouchInteraction(
                    bulk_to_event(eventName),
                    data,
                    timestamp,
                    metaData,
                );
                break;
            case LoggerEvents.BULK_CUSTOM_EVENT_EXAMPLE:
                await sal.addGenericInteraction(
                    bulk_to_event(eventName),
                    data,
                    timestamp,
                    metaData,
                );
                break;
        }
    } catch (e) {
        console.warn('LOGGING FAILED', e);
    }
}

function bulk_to_event(eventName) {
    return eventName.slice(5); //remove bulk_ from string
}

async function transmitter(eventName, bulkSize = 25) {
    try {
        switch (eventName) {
            case TransmitterEvents.TRANSMIT_MOUSE_BULK:
                await sal.logMouseInteractionBulk(conditionId, bulkSize);
                break;
            case TransmitterEvents.TRANSMIT_KEY_BULK:
                await sal.logKeyboardInteractionBulk(conditionId, bulkSize);
                break;
            case TransmitterEvents.TRANSMIT_TOUCH_BULK:
                await sal.logTouchInteractionBulk(conditionId, bulkSize);
                break;
            case TransmitterEvents.TRANSMIT_GENERIC_BULK:
                awaitsal.logGenericInteractionBulk(conditionId, bulkSize);
                break;
        }
    } catch (e) {
        console.warn('TRANSMISSION OF BULKS FAILED', e);
    }
}

// Needs to binded, e.g. on a "Save text" button or similar
const proceed = async () => {
    try {
        await sal.updateNavigator(participantToken, "condition", "done");
    } catch (e) {
        console.warn("StudyAlign Navigator could not be updated");
    }
};



