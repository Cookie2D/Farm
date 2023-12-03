import carrot from '../../assets/crops/carrot.svg'
import corn from '../../assets/crops/corn.svg'
import wheat from '../../assets/crops/wheat.svg'

export const WHEAT = {
  fieldName: 'wheat',
  count: 1,
  time: 2,
  cost: 4,
  image: wheat,
  seedCost: 2,
  seedImage: wheat, // TODO: change seed images
}

export const CARROT = {
  fieldName: 'carrot',
  count: 1,
  time: 4,
  cost: 8,
  image: carrot,
  seedCost: 4,
  seedImage: carrot, // TODO: change seed images
}

export const CORN = {
  fieldName: 'corn',
  count: 2,
  time: 8,
  cost: 20,
  image: corn,
  seedCost: 20,
  seedImage: corn, // TODO: change seed images
}

export const list = [WHEAT, CARROT, CORN]