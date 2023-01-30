import { InstanceOptions, IOContext, ExternalClient } from "@vtex/api";

export default class getInventory extends ExternalClient {
  public constructor(ctx: IOContext, options?: InstanceOptions) {
    super(`http://${ctx.account}.vtexcommercestable.com.br/api/`, ctx, options);
  }
  public async getStockBySku(skuId: any) {
    // morado let headers = {
    //   "X-VTEX-API-AppKey": "vtexappkey-moradoapp-TENKWF",
    //   "X-VTEX-API-AppToken":
    //     "KPMQBXPJYMFZJGTSHNBPZKXPEIDDOSFBCPMBJVVFXNMGBSDWCTTFOBFSXLOBQWFZUCCAYUSGQUVMOZILTPBKQWUAKEAJCHWYCBLYNJIXMSSGWANJYKJVWVJYCMISUIWS",
    // };
    let headers = {
      "X-VTEX-API-AppKey": "vtexappkey-itglobers-EAMEEQ",
      "X-VTEX-API-AppToken":
        "VMMSIKXWRJSCXPUTWUDPPDJMLADXWMWLTQXGMDOWXNNDOHMYICHYEIGSFREWHCFRNKHENPJXLMVIKWLDZKSVGAOVEAMNNSDENLNZUJGEHACSWDDGYTCMEKCHTPRCHMKR",
    };

    let request = this.http
      .get(`logistics/pvt/inventory/skus/${skuId}`, { headers })
      .then((response) => {
        return response.balance;
      })
      .catch((err) => {
        return err;
      });

    return request;
  }
}
