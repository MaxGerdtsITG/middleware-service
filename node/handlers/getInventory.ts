export async function getInventory(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { getInventory },
    vtex: {
      route: { params },
    },
  } = ctx;
  
  const { skuId } = params;
  const res = await getInventory.getStockBySku(skuId);

  let inventory = res.map((skuId: any) => {
    return {
      warehouseId: skuId.warehouseId,
      warehouseName: skuId.warehouseName,
      totalQuantity: skuId.totalQuantity,
    };
  });

  ctx.body = inventory;

  ctx.status = 200;
  ctx.set("cache-control", "no-cache");
  ctx.set("content-type", "application/json");
  ctx.set("accept", "application/json");

  await next();
}
