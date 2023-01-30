import { IOClients } from '@vtex/api'
import getInventory from './getInventory'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
    public get getInventory() {
        return this.getOrSet('getInventory', getInventory)
      }
}
