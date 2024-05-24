import {Experience} from '../Experience'
import {Model} from './Model'

export class World {
  chairModel: Model

  constructor() {
    const experience = new Experience()
    this.chairModel = new Model(experience.loaders?.items.chairModel)
  }

  update() {
    this.chairModel.update()
  }
}
