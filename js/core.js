function dropMenu() {
	var dropdownContent = document.getElementsByClassName("menu-content")[0];
	var dropdownDisplay = window.getComputedStyle(dropdownContent, null).display;
	var menuButton = document.querySelector(".menu-btn img");
	if (dropdownDisplay == "none") {
		dropdownContent.style.display = "block";
		menuButton.src = "/imgs/exit-menu.svg";
	} else {
		dropdownContent.style.display = "none";
		menuButton.src = "/imgs/menu.svg";
	}
}

let throttleTimer = false;
const throttle = (callback, time) => {
    if (throttleTimer) return;
    
    throttleTimer = true;
    
    setTimeout(() => {
        callback();
        throttleTimer = false;
	}, time);
}

// Credit nowaalex @ https://www.npmjs.com/package/@af-utils/scrollend-polyfill?activeTab=code for this polyfill
"use strict";
const SCROLL_DEBOUNCE_INTERVAL = 100;
const SCROLLEND_EVENT = "scrollend";
let set = false;
if (!set &&
    typeof window !== "undefined" &&
    !("on" + SCROLLEND_EVENT in window)) {
    set = true;
    const dispatchedEvent = new Event(SCROLLEND_EVENT);
    const pointers = new Set();
    const handlersMap = new WeakMap();
    let lastTarget = null;
    const dispatchScrollEvent = (target) => target.dispatchEvent(dispatchedEvent);
    addEventListener("touchstart", e => {
        for (const touch of e.changedTouches) {
            pointers.add(touch.identifier);
        }
    }, { passive: true });
    addEventListener("touchend", e => {
        for (const touch of e.changedTouches) {
            if (pointers.delete(touch.identifier) &&
                lastTarget &&
                !pointers.size) {
                dispatchScrollEvent(lastTarget);
                lastTarget = null;
            }
        }
    }, { passive: true });
    const debounce = (fn, delay) => {
        let timer = 0;
        const cancel = () => clearTimeout(timer);
        const result = () => {
            cancel();
            timer = setTimeout(fn, delay);
        };
        result._cancel = cancel;
        return result;
    };
    const patchScrollEnd = (objects, method, fn) => objects.forEach(object => {
        const originalMethod = object[method];
        object[method] = function () {
            originalMethod.apply(this, arguments);
            if (arguments[0] === SCROLLEND_EVENT) {
                fn.apply(this, arguments);
            }
        };
    });
    const targets = [
        HTMLElement.prototype,
        window,
        document
    ];
    patchScrollEnd(targets, "addEventListener", function (type, listener, options) {
        const fn = debounce(() => {
            if (pointers.size === 0) {
                dispatchScrollEvent(this);
            }
            else {
                lastTarget = this;
            }
        }, SCROLL_DEBOUNCE_INTERVAL);
        handlersMap.set(listener, fn);
        this.addEventListener("scroll", fn, options);
    });
    patchScrollEnd(targets, "removeEventListener", function (type, listener, options) {
        const fn = handlersMap.get(listener);
        if (fn) {
            fn._cancel();
            handlersMap.delete(listener);
            if (lastTarget === this) {
                lastTarget = null;
            }
            this.removeEventListener("scroll", fn, options);
        }
    });
}