import {AnimationAction, AnimationMixer, Object3D} from 'three'
import {GLTF} from 'three/examples/jsm/loaders/GLTFLoader'
import {Experience} from '../Experience'
import AnimController from '../Utils/AnimController'

export class Model {
  scene
  time
  model: GLTF
  animMixer: AnimationMixer
  animController?: AnimController
  moveState!: string

  constructor() {
    const experience = new Experience()
    this.scene = experience.scene
    this.time = experience.time
    this.model = experience.loaders?.items.characterModel
    this.animMixer = new AnimationMixer(this.model.scene)
    this.initModel()
    this.initAnim()
  }

  initModel() {
    if (!this.scene || !this.model) {
      return
    }
    const object3d = new Object3D()
    object3d.add(this.model.scene)
    this.model.scene.rotation.set(0, Math.PI, 0)
    this.scene.add(object3d)
  }

  initAnim() {
    if (!this.animMixer) {
      return
    }
    const animActions: { [key: string]: AnimationAction } = {}
    this.model?.animations.forEach((anim) => {
      animActions[anim.name] = this.animMixer.clipAction(anim)
    })
    this.animController = new AnimController(this.animMixer, animActions)
    this.animController.playNewActionOnly('Idle')
  }

  updateAnim(animName: string) {
    if (this.moveState !== animName && this.animController) {
      this.moveState = animName
      this.animController.playNewActionOnly(animName)
    }
  }

  update() {
    if (!this.time) {
      return
    }
    this.animMixer.update(this.time.delta * 0.001)
  }
}
