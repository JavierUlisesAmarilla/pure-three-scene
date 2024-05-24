import {AssetType} from './types'

export const IS_DEV_MODE = false

export const assetArr: AssetType[] = [
  {
    name: 'chairModel',
    type: 'model',
    path: 'models/chair_o.glb',
  },
  {
    name: 'characterModel',
    type: 'model',
    path: 'models/character_with_environment_o.glb',
  },
]

export const LIGHT_COLOR = '#FFF'
export const LIGHT_INTENSITY = 0.2
export const AXES_LENGTH = 10
export const IS_ORBIT_CONTROLS_USED = true
