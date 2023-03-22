import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS } from './storageConfig'

type MealsType = {
  id:string
  name:string; 
  description:string;
  date:string;
  time:string;
  isDiet:boolean
}

export { MealsType }

class StorageMeals {

}

export default new StorageMeals()