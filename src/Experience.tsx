import {AxesHelper, Scene} from 'three'
import {Camera} from './Camera'
import {Environment} from './Environment'
import {Light} from './Light'
import {Renderer} from './Renderer'
import {Loaders} from './Utils/Loaders'
import {Size} from './Utils/Size'
import {Time} from './Utils/Time'
import {World} from './World/World'
import {AXES_LENGTH, IS_DEV_MODE, assetArr} from './constants'

let instance: Experience

export class Experience {
  canvas?: HTMLCanvasElement
  loaders
  size?: Size
  time?: Time
  scene?: Scene
  light?: Light
  environment?: Environment
  world?: World
  camera?: Camera
  renderer?: Renderer

  constructor(canvas: HTMLCanvasElement | undefined = undefined) {
    if (instance) {
      return instance
    }
    // eslint-disable-next-line @typescript-eslint/no-this-alias -- TODO
    instance = this
    if (canvas) {
      this.canvas = canvas
    }
    this.loaders = new Loaders(assetArr)

    this.loaders.on('ready', () => {
      this.size = new Size()
      this.time = new Time()
      this.scene = new Scene()
      this.light = new Light()
      this.environment = new Environment()
      this.world = new World()
      this.camera = new Camera()
      this.renderer = new Renderer()
      if (IS_DEV_MODE) {
        this.scene.add(new AxesHelper(AXES_LENGTH))
      }
      this.size.on('resize', () => {
        this.resize()
      })
      this.time.on('tick', () => {
        this.update()
      })
    })
  }

  resize() {
    if (this.camera) {
      this.camera.resize()
    }
    if (this.renderer) {
      this.renderer.resize()
    }
  }

  update() {
    this.renderer?.update()
    this.world?.update()
  }
}
