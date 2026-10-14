(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/buzz-fest/src/app/component/UI/carousel/CarouselClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CarouselClient",
    ()=>CarouselClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/ui/carousel'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'embla-carousel-autoplay'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/lib/utils'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const CarouselClient = ({ children })=>{
    _s();
    const [api, setApi] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]();
    const [current, setCurrent] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    const plugin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "CarouselClient.useMemo[plugin]": ()=>Autoplay({
                delay: 3000,
                stopOnInteraction: false
            })
    }["CarouselClient.useMemo[plugin]"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "CarouselClient.useEffect": ()=>{
            if (!api) return;
            const handler = {
                "CarouselClient.useEffect.handler": ()=>setCurrent(api.selectedScrollSnap())
            }["CarouselClient.useEffect.handler"];
            api.on("select", handler);
            return ({
                "CarouselClient.useEffect": ()=>{
                    api.off("select", handler);
                }
            })["CarouselClient.useEffect"];
        }
    }["CarouselClient.useEffect"], [
        api
    ]);
    const count = api?.scrollSnapList().length ?? 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Carousel, {
                setApi: setApi,
                plugins: [
                    plugin
                ],
                onMouseEnter: plugin.stop,
                onMouseLeave: plugin.reset,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CarouselContent, {
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].map(children, (child, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CarouselItem, {
                            children: child
                        }, i, false, {
                            fileName: "[project]/apps/buzz-fest/src/app/component/UI/carousel/CarouselClient.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/apps/buzz-fest/src/app/component/UI/carousel/CarouselClient.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/buzz-fest/src/app/component/UI/carousel/CarouselClient.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center gap-2 mt-2 z-20",
                children: Array.from({
                    length: count
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>api?.scrollTo(i),
                        className: cn("h-2 w-2 rounded-full transition-all duration-300", current === i ? "w-6 bg-brand-orange" : "bg-muted-foreground/30")
                    }, i, false, {
                        fileName: "[project]/apps/buzz-fest/src/app/component/UI/carousel/CarouselClient.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/apps/buzz-fest/src/app/component/UI/carousel/CarouselClient.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/buzz-fest/src/app/component/UI/carousel/CarouselClient.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CarouselClient, "+7rfsvzwJ7aGy2E5snhh1fyOY98=");
_c = CarouselClient;
var _c;
__turbopack_context__.k.register(_c, "CarouselClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/buzz-fest/src/app/component/UI/carousel/CarouselShell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CarouselShell",
    ()=>CarouselShell,
    "ITEMS",
    ()=>ITEMS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/ui/CloudinaryImage'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
const CarouselShell = ({ item, isFirst })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-105 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CloudinaryImage, {
                src: item.src,
                alt: item.name,
                fill: true,
                // 1. First image is discoverable in initial document immediately
                priority: isFirst,
                // 2. Forces high asset fetch order if it's the visible hero slide
                fetchPriority: isFirst ? "high" : "low",
                // 3. Explicitly breaks any down-stream lazy-loading dependencies
                loading: isFirst ? "eager" : "lazy",
                sizes: "(max-width: 767px) 600px, 1200px",
                crop: "fill",
                gravity: "auto",
                className: "object-cover"
            }, void 0, false, {
                fileName: "[project]/apps/buzz-fest/src/app/component/UI/carousel/CarouselShell.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-end justify-end p-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-5 rounded-xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CloudinaryImage, {
                        src: "logo.new_ndfwmw",
                        alt: "brand logo",
                        width: 200,
                        height: 200,
                        // Prevents the overlay logo from blocking your main LCP product image asset load
                        priority: false,
                        loading: "lazy",
                        className: "object-contain"
                    }, void 0, false, {
                        fileName: "[project]/apps/buzz-fest/src/app/component/UI/carousel/CarouselShell.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/buzz-fest/src/app/component/UI/carousel/CarouselShell.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/buzz-fest/src/app/component/UI/carousel/CarouselShell.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/buzz-fest/src/app/component/UI/carousel/CarouselShell.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CarouselShell;
const ITEMS = [
    {
        name: "Sourdough Bread",
        baker: "Sarah's Kitchen",
        src: "1_withoutLogo_ejducv"
    },
    {
        name: "Chocolate Ganache",
        baker: "Maria's Sweets",
        src: "2_pf3lhm"
    },
    {
        name: "Lemon Tart",
        baker: "Emma's Pastries",
        src: "3_r0f7fx"
    }
];
var _c;
__turbopack_context__.k.register(_c, "CarouselShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/buzz-fest/src/app/component/UI/carousel/BakeryFeaturedCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BakeryFeaturedCarousel",
    ()=>BakeryFeaturedCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$buzz$2d$fest$2f$src$2f$app$2f$component$2f$UI$2f$carousel$2f$CarouselClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/buzz-fest/src/app/component/UI/carousel/CarouselClient.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$buzz$2d$fest$2f$src$2f$app$2f$component$2f$UI$2f$carousel$2f$CarouselShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/buzz-fest/src/app/component/UI/carousel/CarouselShell.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/ui/CloudinaryImage'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client"; // Switch to a client wrapper to handle safe window-size mounts
;
;
;
;
const BakeryFeaturedCarousel = ()=>{
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Wait until the component mounts on the client before rendering the desktop carousel
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BakeryFeaturedCarousel.useEffect": ()=>{
            setMounted(true);
        }
    }["BakeryFeaturedCarousel.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "block md:hidden h-[500px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full h-55",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CloudinaryImage, {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$buzz$2d$fest$2f$src$2f$app$2f$component$2f$UI$2f$carousel$2f$CarouselShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ITEMS"][0].src,
                        alt: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$buzz$2d$fest$2f$src$2f$app$2f$component$2f$UI$2f$carousel$2f$CarouselShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ITEMS"][0].name,
                        fill: true,
                        priority: true,
                        loading: "eager",
                        fetchPriority: "high",
                        className: "object-cover"
                    }, void 0, false, {
                        fileName: "[project]/apps/buzz-fest/src/app/component/UI/carousel/BakeryFeaturedCarousel.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/buzz-fest/src/app/component/UI/carousel/BakeryFeaturedCarousel.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/buzz-fest/src/app/component/UI/carousel/BakeryFeaturedCarousel.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block h-[500px]",
                children: mounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$buzz$2d$fest$2f$src$2f$app$2f$component$2f$UI$2f$carousel$2f$CarouselClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CarouselClient"], {
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$buzz$2d$fest$2f$src$2f$app$2f$component$2f$UI$2f$carousel$2f$CarouselShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ITEMS"].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$buzz$2d$fest$2f$src$2f$app$2f$component$2f$UI$2f$carousel$2f$CarouselShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CarouselShell"], {
                            item: item,
                            isFirst: index === 0
                        }, item.src, false, {
                            fileName: "[project]/apps/buzz-fest/src/app/component/UI/carousel/BakeryFeaturedCarousel.tsx",
                            lineNumber: 38,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/apps/buzz-fest/src/app/component/UI/carousel/BakeryFeaturedCarousel.tsx",
                    lineNumber: 36,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/buzz-fest/src/app/component/UI/carousel/BakeryFeaturedCarousel.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/buzz-fest/src/app/component/UI/carousel/BakeryFeaturedCarousel.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BakeryFeaturedCarousel, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = BakeryFeaturedCarousel;
var _c;
__turbopack_context__.k.register(_c, "BakeryFeaturedCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/buzz-fest/src/app/component/UI/addToCartButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/ui/button'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../../store/store'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
//buzz-fest\app\component\UI\addToCartButton.tsx
"use client";
;
;
const AddToCartButton = ({ id, name, images, quantity, message, size, price, specialInstructions })=>{
    _s();
    const addToCart = useCartStore({
        "AddToCartButton.useCartStore[addToCart]": (state)=>state.addToCart
    }["AddToCartButton.useCartStore[addToCart]"]);
    const setIsCartOpen = useCartStore({
        "AddToCartButton.useCartStore[setIsCartOpen]": (state)=>state.setIsCartOpen
    }["AddToCartButton.useCartStore[setIsCartOpen]"]);
    const handleAdd = ()=>{
        // Ensure we have a valid ID and Price before adding
        if (!id) return;
        let pro = {
            id: id,
            name: name,
            price: price,
            image: images?.[0],
            specialInstructions: specialInstructions || "",
            message: message || "",
            varient: "default",
            size: size,
            quantity: quantity ?? 1
        }; /*   */ 
        //
        addToCart(pro);
    // setIsCartOpen(true); // optional UX
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
        variant: "brand",
        onClick: handleAdd,
        children: "Add to Cart"
    }, void 0, false, {
        fileName: "[project]/apps/buzz-fest/src/app/component/UI/addToCartButton.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AddToCartButton, "Ap+OJ0QyVbldD37jlhN+RBU3k4w=", false, function() {
    return [
        useCartStore,
        useCartStore
    ];
});
_c = AddToCartButton;
const __TURBOPACK__default__export__ = AddToCartButton;
var _c;
__turbopack_context__.k.register(_c, "AddToCartButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_buzz-fest_src_app_component_UI_50e4017e._.js.map