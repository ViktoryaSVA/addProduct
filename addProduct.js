var Sequelize = require('sequelize');
var argv = require('optimist').argv;

var sequelize = new Sequelize(argv.db,argv.user,'',{
    dialect: "mysql",
    host: argv.host,
    define: {
        freezeTableName: true,
        timestamps: false

    }
});

var Product = sequelize.define('oc_product', {
    product_id: { type: Sequelize.INTEGER, primaryKey: true},
    model: Sequelize.STRING,
    sku: Sequelize.STRING,
    upc: Sequelize.STRING,
    ean: Sequelize.STRING,
    jan: Sequelize.STRING,
    isbn: Sequelize.STRING,
    mpn: Sequelize.STRING,
    location: Sequelize.STRING,
    quantity: Sequelize.INTEGER,
    stock_status_id: Sequelize.INTEGER,
    image: Sequelize.STRING,
    manufacturer_id: Sequelize.INTEGER,
    shipping: Sequelize.INTEGER,
    price: Sequelize.INTEGER,
    points: Sequelize.INTEGER,
    tax_class_id: Sequelize.INTEGER,
    date_available:  { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    weight: Sequelize.INTEGER,
    weight_class_id: Sequelize.INTEGER,
    length: Sequelize.INTEGER,
    width: Sequelize.INTEGER,
    height: Sequelize.INTEGER,
    length_class_id: Sequelize.INTEGER,
    subtract: Sequelize.INTEGER,
    minimum: Sequelize.INTEGER,
    sort_order: Sequelize.INTEGER,
    status: Sequelize.INTEGER,
    viewed: Sequelize.INTEGER,
    date_added:  { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    date_modified:  { type: Sequelize.DATE, defaultValue: Sequelize.NOW }

});

var ProductDescription = sequelize.define('oc_product_description', {
    product_id: { type: Sequelize.INTEGER, primaryKey: true},
    language_id: Sequelize.INTEGER,
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    tag: Sequelize.STRING,
    meta_title: Sequelize.STRING,
    meta_description: Sequelize.STRING,
    meta_keyword: Sequelize.STRING
});
var ProductToCategory = sequelize.define('oc_product_to_category', {
    product_id: { type: Sequelize.INTEGER, primaryKey: true},
    category_id: Sequelize.INTEGER
});
var ProductAttribute = sequelize.define('oc_product_attribute', {
    product_id: { type: Sequelize.INTEGER, primaryKey: true},
    attribute_id: Sequelize.INTEGER,
    language_id: Sequelize.INTEGER,
    text: Sequelize.STRING

});
var ProductOption = sequelize.define('oc_product_option', {
    product_option_id: { type: Sequelize.INTEGER, primaryKey: true},
    product_id: Sequelize.INTEGER,
    option_id: Sequelize.INTEGER,
    value:Sequelize.INTEGER,
    required: Sequelize.STRING

});
var ProductOptionValue = sequelize.define('oc_product_option_value', {
    product_option_value_id: { type: Sequelize.INTEGER, primaryKey: true},
    product_option_id: Sequelize.INTEGER,
    product_id: Sequelize.INTEGER,
    option_id:Sequelize.INTEGER,
    option_value_id: Sequelize.INTEGER,
    quantity: Sequelize.INTEGER,
    subtract: Sequelize.INTEGER,
    price:Sequelize.INTEGER,
    price_prefix: Sequelize.STRING,
    points:Sequelize.INTEGER,
    points_prefix: Sequelize.STRING,
    weight:Sequelize.INTEGER,
    weight_prefix: Sequelize.STRING


});
var ProductOptionReward = sequelize.define('oc_product_reward', {
    product_reward_id: { type: Sequelize.INTEGER, primaryKey: true},
    product_id: Sequelize.INTEGER,
    customer_group_id:Sequelize.INTEGER,
    points:Sequelize.INTEGER

});
var ProductSpecial = sequelize.define('oc_product_special', {
    product_special_id: { type: Sequelize.INTEGER, primaryKey: true},
    product_id: Sequelize.INTEGER,
    customer_group_id:Sequelize.INTEGER,
    points:Sequelize.INTEGER,
    priority:Sequelize.INTEGER,
    price:Sequelize.INTEGER,
    date_start: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    date_end: { type: Sequelize.DATE, defaultValue: Sequelize.NOW }

});
var ProductToLayout = sequelize.define('oc_product_to_layout', {
    product_id: { type: Sequelize.INTEGER, primaryKey: true},
    store_id: Sequelize.INTEGER,
    layout_id: Sequelize.INTEGER

});
var ProductToStore = sequelize.define('oc_product_to_store', {
    product_id: { type: Sequelize.INTEGER, primaryKey: true},
    store_id: Sequelize.INTEGER

});
var ProductImage = sequelize.define('oc_product_image', {
    product_image_id: { type: Sequelize.INTEGER, primaryKey: true},
    product_id: Sequelize.INTEGER,
    image: Sequelize.STRING,
    sort_order: Sequelize.INTEGER


});
var SimpleBlogArticleProduct = sequelize.define('oc_simple_blog_article_product_related', {
    simple_blog_article_id: { type: Sequelize.INTEGER, primaryKey: true},
    product_id: Sequelize.INTEGER

});
// START For oc_product
sequelize.sync().then(function () {
    return Product.create({
        product_id: 5,
        model:"ThirdProductTEST",
        sku:0,
        upc:0,
        ean:0,
        jan:0,
        isbn:0,
        mpn:0,
        location:"dfgh",
        quantity:15,
        stock_status_id: 7,
        image:"image",
        manufacturer_id:1,
        shipping:0,
        price:1110,
        points:0,
        tax_class_id:1,
        date_available:new Date(),
        weight:0,
        weight_class_id:1,
        length:0,
        width:0,
        height:0,
        length_class_id:1,
        subtract:0,
        minimum:100,
        sort_order:1,
        status:1,
        viewed:1,
        date_added: new Date().getTime(),
        date_modified: new Date().getTime()
    });

}).then(function (Product) {
    console.log(Product.get({
        plain: true
    }));

}).catch(function(err) {
    console.log(err, "error");
});
// END For oc_product

// START For oc_product_description

// LANGUAGE EN
sequelize.sync().then(function () {
    return ProductDescription.create({
        product_id: 5,
        language_id:1,
        name:"Third Product",
        description:"Third Third Third Third Third Third",
        tag:0,
        meta_title:"ThirdProduct",
        meta_description:"TEST Third TEST Third TEST Third TEST Third",
        meta_keyword:0
    });

}).then(function (ProductDescription) {
    console.log(ProductDescription.get({
        plain: true
    }));

}).catch(function(err) {
    console.log(err, "error");
});
// LANGUAGE UKR

sequelize.sync().then(function () {
    return ProductDescription.create({
        product_id: 5,
        language_id:2,
        name:"Третій Продукт",
        description:"Третій Продукт Третій Продукт Третій Продукт Третій Продукт Третій Продукт",
        tag:0,
        meta_title:"ThirdProduct",
        meta_description:"TEST PRODUCT TEST PRODUCT TEST PRODUCT TEST PRODUCT",
        meta_keyword:0
    });

}).then(function (ProductDescription) {
    console.log(ProductDescription.get({
        plain: true
    }));

}).catch(function(err) {
    console.log(err, "error");
});

// LANGUAGE RU

sequelize.sync().then(function () {
    return ProductDescription.create({
        product_id: 5,
        language_id:3,
        name:"Третий продукт",
        description:"Третий Продукт Третий Продукт Третий Продукт Третий Продукт",
        tag:0,
        meta_title:"ThirdProduct",
        meta_description:"TEST PRODUCT TEST PRODUCT TEST PRODUCT TEST PRODUCT",
        meta_keyword:0
    });

}).then(function (ProductDescription) {
    console.log(ProductDescription.get({
        plain: true
    }));

}).catch(function(err) {
    console.log(err, "error");
});
// END For oc_product_description

// START For oc_product_to_category
sequelize.sync().then(function () {
    return ProductToCategory.create({
        product_id: 5,
        category_id:70
    });

}).then(function (ProductToCategory) {
    console.log(ProductToCategory.get({
        plain: true
    }));

}).catch(function(err) {
    console.log(err, "error");
});
// END For oc_product_to_category

// START For oc_product_attribute
sequelize.sync().then(function () {
    return ProductAttribute.create({
        product_id: 5,
        attribute_id:5,
        language_id:2,
        text: 900
    });

}).then(function (ProductAttribute) {
    console.log(ProductAttribute.get({
        plain: true
    }));

}).catch(function(err) {
    console.log(err, "error");
});
// END For oc_product_attribute

// START For oc_product_option
sequelize.sync().then(function () {
    return ProductOption.create({
        product_option_id: 4,
        product_id:4,
        option_id:4,
        value:4,
        required:4
    });

}).then(function (ProductOption) {
    console.log(ProductOption.get({
        plain: true
    }));

}).catch(function(err) {
    console.log(err, "error");
});
// END For oc_product_option


// START For oc_product_option_value
sequelize.sync().then(function () {
    return ProductOptionValue.create({
        product_option_value_id:5,
        product_option_id:5,
        product_id: 5,
        option_id:5,
        option_value_id:5,
        quantity: 900,
        subtract: 1,
        price:300.00,
        price_prefix: '+',
        points:900,
        points_prefix: '+',
        weight:900,
        weight_prefix: '+'

    });

}).then(function (ProductOptionValue) {
    console.log(ProductOptionValue.get({
        plain: true
    }));

}).catch(function(err) {
    console.log(err, "error");
});
// END For oc_product_option_value

//START For oc_product_reward
sequelize.sync().then(function () {
    return ProductOptionReward.create({
        product_reward_id:5,
        product_id:5,
        customer_group_id:5,
        points:5

    });

}).then(function (ProductOptionReward) {
    console.log(ProductOptionReward.get({
        plain: true
    }));

}).catch(function(err) {
    console.log(err, "error");
});
//END For oc_product_reward

//START For oc_product_special
sequelize.sync().then(function () {
    return ProductSpecial.create({
        product_special_id:5,
        product_id:5,
        customer_group_id:5,
        priority:0,
        price:9010.00,
        date_start: new Date().getTime(),
        date_end:new Date().getTime()

    });

}).then(function (ProductSpecial) {
    console.log(ProductSpecial.get({
        plain: true
    }));

}).catch(function(err) {
    console.log(err, "error");
});
//END For oc_product_special

//START For oc_product_to_layout
sequelize.sync().then(function () {
    return ProductToLayout.create({
        product_id:5,
        store_id:5,
        layout_id:5

    });

}).then(function (ProductToLayout) {
    console.log(ProductToLayout.get({
        plain: true
    }));

}).catch(function(err) {
    console.log(err, "error");
});
//END For oc_product_to_layout

//START For oc_product_to_store
sequelize.sync().then(function () {
    return ProductToStore.create({
        product_id: 5,
        store_id:0
    });

}).then(function (ProductToStore) {
    console.log(ProductToStore.get({
        plain: true
    }));

}).catch(function(err) {
    console.log(err, "error");
});
//END For oc_product_to_store


//START For oc_product_image
sequelize.sync().then(function () {
    return ProductImage.create({
        product_image_id:5,
        product_id: 5,
        image: 'image',
        sort_order: 0

    });

}).then(function (ProductImage) {
    console.log(ProductImage.get({
        plain: true
    }));

}).catch(function(err) {
    console.log(err, "error");
});

//END For oc_product_image

//START For oc_simple_blog_article_product_related
sequelize.sync().then(function () {
    return SimpleBlogArticleProduct.create({
        simple_blog_article_id:5,
        product_id: 5
    });

}).then(function (SimpleBlogArticleProduct) {
    console.log(SimpleBlogArticleProduct.get({
        plain: true
    }));

}).catch(function(err) {
    console.log(err, "error");
});

//END For oc_simple_blog_article_product_related

