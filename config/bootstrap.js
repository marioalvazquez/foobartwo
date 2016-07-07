/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {
  Cars.create([{
    brand: 'Volskwagen',
    shortDesc: 'Volskwagen Jetta MKIV',
    discountPrice: 15000,
    imgSrc: 'jetta.jpg',
    currentPrice: 17000

  },
{
  brand: 'Chevrolet',
  shortDesc: 'Chevrolet Sonic v3',
  discountPrice: 12000,
  imgSrc: 'chevrolet.jpg',
  currentPrice: 15000

},
{
  brand: 'Nissan',
  shortDesc: 'Nissan Versa 2016',
  discountPrice: 10000,
  imgSrc: 'versa.jpg',
  currentPrice: 12000

},
{
  brand: 'Hitachi',
  shortDesc: 'Hitach 2.0 Version Faster',
  discountPrice: 5000,
  imgSrc: 'car1.jpg',
  currentPrice: 7500
}]).exec(function theFuture(err, result){
  if (err) {
    console.log("It did not work", err);
    cb(err);
  }
  else{
    console.log("It worked");
    cb();
  }
})
  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
