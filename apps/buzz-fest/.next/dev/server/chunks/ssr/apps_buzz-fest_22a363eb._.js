module.exports = [
"[project]/apps/buzz-fest/src/app/actions/checkout.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"40b712e5e702302078be35a9df2879faae08d805b1":"createOrder"},"",""] */ __turbopack_context__.s([
    "createOrder",
    ()=>createOrder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$data$2d$access$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/libs/data-access/src/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$data$2d$access$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/libs/data-access/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$data$2d$access$2f$src$2f$generated$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/libs/data-access/src/generated/client/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$data$2d$access$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$data$2d$access$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$data$2d$access$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$data$2d$access$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
async function createOrder(cartData) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$data$2d$access$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
            // 1. Create the Main Order
            // (No 'include' needed here anymore, saving a database join!)
            const order = await tx.order.create({
                data: {
                    orderNumber: Math.floor(100000 + Math.random() * 900000),
                    customerEmail: cartData.email,
                    customerName: cartData.name,
                    totalAmount: Number(cartData.total),
                    status: __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$data$2d$access$2f$src$2f$generated$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OrderStatus"].PENDING,
                    items: {
                        create: cartData.items.map((item)=>({
                                productId: item.id,
                                productName: item.name,
                                productImage: item.image,
                                priceAtPurchase: Number(item.price),
                                quantity: item.quantity,
                                variant: item.variant || 'Default',
                                message: item.message,
                                instructions: item.specialInstructions,
                                bakerSlug: item.creatorSlug
                            }))
                    }
                }
            });
            // 2. Generate Tasks for Bakers directly from the incoming cartData array
            // We explicitly cast the final unique array to string[] to satisfy TypeScript
            const uniqueBakers = [
                ...new Set(cartData.items.map((item)=>item.creatorSlug))
            ].filter(Boolean);
            for (const bakerSlug of uniqueBakers){
                await tx.task.create({
                    data: {
                        title: `New Order #${order.orderNumber}`,
                        priority: __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$data$2d$access$2f$src$2f$generated$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Priority"].MEDIUM,
                        status: __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$data$2d$access$2f$src$2f$generated$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TaskStatus"].QUEUED,
                        orderId: order.id,
                        assignedToSlug: bakerSlug,
                        notes: `Prep for ${order.customerName}`,
                        dueDate: new Date(Date.now() + 24 * 60 * 60 * 1000),
                        delayedUntil: new Date()
                    }
                });
            }
            return order;
        }, {
            maxWait: 20000,
            timeout: 60000
        });
        return {
            success: true,
            orderId: result.id
        };
    } catch (error) {
        console.error('CRITICAL_CHECKOUT_FAILURE:', error.message);
        return {
            success: false,
            error: error.message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createOrder
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createOrder, "40b712e5e702302078be35a9df2879faae08d805b1", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/buzz-fest/.next-internal/server/app/cart/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/buzz-fest/src/app/actions/checkout.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$buzz$2d$fest$2f$src$2f$app$2f$actions$2f$checkout$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/buzz-fest/src/app/actions/checkout.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$buzz$2d$fest$2f$src$2f$app$2f$actions$2f$checkout$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$buzz$2d$fest$2f$src$2f$app$2f$actions$2f$checkout$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/buzz-fest/.next-internal/server/app/cart/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/buzz-fest/src/app/actions/checkout.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "40b712e5e702302078be35a9df2879faae08d805b1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$buzz$2d$fest$2f$src$2f$app$2f$actions$2f$checkout$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createOrder"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$buzz$2d$fest$2f2e$next$2d$internal$2f$server$2f$app$2f$cart$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$buzz$2d$fest$2f$src$2f$app$2f$actions$2f$checkout$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/apps/buzz-fest/.next-internal/server/app/cart/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/buzz-fest/src/app/actions/checkout.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$buzz$2d$fest$2f$src$2f$app$2f$actions$2f$checkout$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/buzz-fest/src/app/actions/checkout.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$buzz$2d$fest$2f2e$next$2d$internal$2f$server$2f$app$2f$cart$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$buzz$2d$fest$2f$src$2f$app$2f$actions$2f$checkout$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$buzz$2d$fest$2f$src$2f$app$2f$actions$2f$checkout$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$buzz$2d$fest$2f2e$next$2d$internal$2f$server$2f$app$2f$cart$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$buzz$2d$fest$2f$src$2f$app$2f$actions$2f$checkout$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$buzz$2d$fest$2f$src$2f$app$2f$actions$2f$checkout$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=apps_buzz-fest_22a363eb._.js.map