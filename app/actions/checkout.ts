"use server";
//app\actions\checkout.ts
import { prisma } from "@/lib/prisma";
import { OrderStatus, TaskStatus, Priority } from "@prisma/client";
import { Prisma } from "@prisma/client";

export async function createOrder(cartData: any) {
  try {
    const result = await prisma.$transaction(
      async (tx) => {
        // 1. Create the Main Order
        const Decimal = Prisma.Decimal;
        const order = await tx.order.create({
          data: {
            orderNumber: Math.floor(100000 + Math.random() * 900000),
            customerEmail: cartData.email,
            customerName: cartData.name,
            totalAmount: new Decimal(cartData.total), // Explicitly cast to Decimal
            status: OrderStatus.PENDING,

            items: {
              create: cartData.items.map((item: any) => ({
                productId: item.id,
                productName: item.name,
                productImage: item.image,
                priceAtPurchase: new Decimal(item.price), // Explicitly cast
                quantity: item.quantity,
                variant: item.variant || "Default",
                message: item.message,
                instructions: item.specialInstructions,
                bakerSlug: item.creatorSlug, // Ensure this exists in your CartItem type!
              })),
            },
          },
          include: { items: true },
        });

        // 2. Generate Tasks for Bakers
        const uniqueBakers = [
          ...new Set(order.items.map((i) => i.bakerSlug)),
        ].filter(Boolean);

        for (const bakerSlug of uniqueBakers) {
          await tx.task.create({
            data: {
              title: `New Order #${order.orderNumber}`,
              priority: Priority.MEDIUM,
              status: TaskStatus.QUEUED,
              orderId: order.id,
              assignedToSlug: bakerSlug,
              notes: `Prep for ${order.customerName}`,
              dueDate: new Date(Date.now() + 24 * 60 * 60 * 1000),
              delayedUntil: new Date(),
            },
          });
        }

        return order;
      },
      {
        maxWait: 20000, // 👈 Wait 20s for a connection (Neon wake-up time)
        timeout: 60000, // 👈 Give the whole process 60s to finish
      },
    );

    return { success: true, orderId: result.id };
  } catch (error: any) {
    // Log the actual error to your terminal so you can see it!
    console.error("CRITICAL_CHECKOUT_FAILURE:", error.message);
    return { success: false, error: error.message };
  }
}
