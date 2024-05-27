import {Experience} from '../Experience'
import {Model} from './Model'

export class World {
  characterModel: Model
  chairModel: Model

  constructor() {
    const experience = new Experience()
    this.characterModel = new Model(experience.loaders?.items.characterModel)
    this.chairModel = new Model(experience.loaders?.items.chairModel)
  }

  update() {
    this.characterModel.update()
    this.chairModel.update()
  }
}
