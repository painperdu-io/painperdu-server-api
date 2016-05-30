import Logdown from 'logdown';
//import mongoose from 'mongoose';

// models
import Alliances from './../models/Alliances';
import Foodkeepers from './../models/Foodkeepers';
import Markets from './../models/Markets';
import Products from './../models/Products';
import Reviews from './../models/Reviews';
import Users from './../models/Users';

// datas
import datasAlliances from './datas/alliances.json';
import datasFoodkeepers from './datas/foodkeepers.json';
import datasMarkets from './datas/markets.json';
import datasProducts from './datas/products.json';
import datasReviews from './datas/reviews.json';
import datasUsers from './datas/users.json';

class Datafixtures {

  constructor() {
    this.logger = new Logdown({ prefix: 'datafixtures' });
  }

  init() {
    this.logger.info('Remove old datas');
    return Alliances.remove({})
      .then(() => Foodkeepers.remove({}))
      .then(() => Markets.remove({}))
      .then(() => Products.remove({}))
      .then(() => Reviews.remove({}))
      .then(() => Users.remove({}))
      .then(() => this.populate())
      .catch(err => this.logger.error(err));
  }

  populate() {
    this.logger.info('Initialize datas');
    return this.insertAlliances()
      .then(() => this.insertFoodkeepers())
      .then(() => this.insertMarkets())
      .then(() => this.insertProducts())
      .then(() => this.insertReviews())
      .then(() => this.insertUsers())
      .catch(err => this.logger.error(err));
  }

  insertAlliances() {
    return Alliances.insertMany(datasAlliances.results);
  }

  insertFoodkeepers() {
    return Foodkeepers.insertMany(datasFoodkeepers.results);
  }

  insertMarkets() {
    return Markets.insertMany(datasMarkets.results);
  }

  insertProducts() {
    return Products.insertMany(datasProducts.results);
  }

  insertReviews() {
    return Reviews.insertMany(datasReviews.results);
  }

  insertUsers() {
    return Users.insertMany(datasUsers.results);
  }
}

export default Datafixtures;
