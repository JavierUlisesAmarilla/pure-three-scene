import {Model} from './Model'

export class World {
  model: Model

  constructor() {
    this.model = new Model()
  }

  update() {
    this.model.update()
  }
}
