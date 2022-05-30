// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Dish, Restaurant, User } = initSchema(schema);

export {
  Dish,
  Restaurant,
  User
};