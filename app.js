var Sequelize = require('sequelize');
var argv = require('optimist').argv;
const request = require('request-promise');
const md5 = require('md5');

var sequelize = new Sequelize(argv.db,argv.user,'root',{
    dialect: "mysql",
    host: argv.host,
    define: {
        freezeTableName: true,
        timestamps: false

    }
});
//API
async function Auth(){
    //AUTH POST
    let result = await request.post({
        url: 'http://api.brain.com.ua/auth',
        json: true,
        form: {
            login : argv.login,
            password : md5(argv.password)
        },
        resolveWithFullResponse: true,
        simple: false,
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }
    });
    let SID = result.body.result;
    //console.log(result.body.result);


    //AUTH GET
    let getRes = await request.get({
        url: 'http://api.brain.com.ua/categories/' + SID,
        json: true,
        resolveWithFullResponse: true,
        simple: false
    })
    //console.log(getRes.body.result);
    let getProducts = await request.get({
        url: 'http://api.brain.com.ua/products/1285/' + SID,
        json: true,
        resolveWithFullResponse: true,
        simple: false
    })
    //console.log(getProducts.body.result.list);

    let arr = getRes.body.result;
    arr.forEach(
        function (i) {
            console.log(i.name);

// var a = process.argv[2];
    if (argv.add == "category"){
    var Category = sequelize.define('oc_category', {
        category_id: { type: Sequelize.INTEGER, primaryKey: true},
        image: Sequelize.STRING,
        parent_id: Sequelize.INTEGER,
        top: Sequelize.INTEGER,
        column: Sequelize.INTEGER,
        sort_order: Sequelize.INTEGER,
        status: Sequelize.INTEGER,
        date_added:  { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
        date_modified:  { type: Sequelize.DATE, defaultValue: Sequelize.NOW }

    });

    var CategoryDescription = sequelize.define('oc_category_description', {
        category_id: { type: Sequelize.INTEGER, primaryKey: true},
        language_id: Sequelize.INTEGER,
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        meta_title: Sequelize.STRING,
        meta_description: Sequelize.STRING,
        meta_keyword: Sequelize.STRING

    });
    var CategoryToStor = sequelize.define('oc_category_to_store', {
        category_id: { type: Sequelize.INTEGER, primaryKey: true},
        store_id: Sequelize.INTEGER

    });
    var CategoryToLayout = sequelize.define('oc_category_to_layout', {
        category_id: { type: Sequelize.INTEGER, primaryKey: true},
        store_id: Sequelize.INTEGER,
        layout_id: Sequelize.INTEGER

    });
    var CategoryFilter = sequelize.define('oc_category_filter', {
        category_id: { type: Sequelize.INTEGER, primaryKey: true},
        filter_id: Sequelize.INTEGER

    });
    var CategoryPath = sequelize.define('oc_category_path', {
        category_id: { type: Sequelize.INTEGER, primaryKey: true},
        path_id: Sequelize.INTEGER,
        level: Sequelize.INTEGER
    });


// START For oc_category
    sequelize.sync().then(function () {
        return Category.create({
            category_id: i.categoryID,
            image: 'image',
            parent_id: (i.parentID == 1) ? 0 : i.parentID,
            top: (i.parentID != 1) ? 0 : 1,
            column: 0,
            sort_order: 2,
            status: 1,
            date_added: new Date().getTime(),
            date_modified: new Date().getTime()
        });

    }).then(function (Category) {
        console.log(Category.get({
            plain: true
        }));

    }).catch(function(err) {
        console.log(err, "error");
    });
// END For oc_category

// START For oc_category_description
// LANGUAGE EN

    sequelize.sync().then(function () {

        return CategoryDescription.create({
            category_id: i.categoryID,
            language_id: 1,
            name: i.name,
            description: '',
            meta_title: i.name,
            meta_description: '',
            meta_keyword:''

        });
    }).then(function (CategoryDescription) {
        console.log(CategoryDescription.get({
            plain: true
        }));

    }).catch(function(err) {
        console.log(err, "error");
    });

// LANGUAGE UKR
    sequelize.sync().then(function () {

        return CategoryDescription.create({
            category_id: i.categoryID,
            language_id: 2,
            name: i.name,
            description: '',
            meta_title: i.name,
            meta_description: '',
            meta_keyword:''

        });
    }).then(function (CategoryDescription) {
        console.log(CategoryDescription.get({
            plain: true
        }));

    }).catch(function(err) {
        console.log(err, "error");
    });

// LANGUAGE RU
    sequelize.sync().then(function () {

        return CategoryDescription.create({
            category_id: i.categoryID,
            language_id: 3,
            name: i.name,
            description: ' ',
            meta_title: i.name,
            meta_description: '',
            meta_keyword:''

        });
    }).then(function (CategoryDescription) {
        console.log(CategoryDescription.get({
            plain: true
        }));

    }).catch(function(err) {
        console.log(err, "error");
    });

// END For oc_category_description

// START For oc_category_to_store
    sequelize.sync().then(function () {
        return CategoryToStor.create({
            category_id: i.categoryID,
            store_id: 0
        });

    }).then(function (CategoryToStor) {
        console.log(CategoryToStor.get({
            plain: true
        }));

    }).catch(function(err) {
        console.log(err, "error");
    });

// START For oc_category_to_layout
    sequelize.sync().then(function () {
        return CategoryToLayout.create({
            category_id: i.categoryID,
            store_id: 0,
            layout_id: 0
        });

    }).then(function (CategoryToLayout) {
        console.log(CategoryToLayout.get({
            plain: true
        }));

    }).catch(function(err) {
        console.log(err, "error");
    });
// END For oc_category_to_layout

// START For oc_category_filter
    sequelize.sync().then(function () {
        return CategoryFilter.create({
            category_id: i.categoryID,
            filter_id: 1
        });

    }).then(function (CategoryFilter) {
        console.log(CategoryFilter.get({
            plain: true
        }));

    }).catch(function(err) {
        console.log(err, "error");
    });
// END For oc_category_filter

// START For oc_category_path
    sequelize.sync().then(function () {
        return CategoryPath.create({
            category_id: i.categoryID,
            path_id: i.categoryID,
            level:0
        });

    }).then(function (CategoryPath) {
        console.log(CategoryPath.get({
            plain: true
        }));

    }).catch(function(err) {
        console.log(err, "error");
    });
// END For oc_category_path

}
    else if(argv.add == "product"){
    let arr2 = getProducts.body.result.list;
    arr2.forEach(
        async function (i) {
        var product = require('./testProd');

         // product.Product;
         // product.ProductDescription;
         // product.ProductToCategory;
         // product.ProductAttribute;
         // product.ProductOption;
         // product.ProductOptionValue;
         // product.ProductOptionReward;
         // product.ProductSpecial;
         // product.ProductToLayout;
         // product.ProductToStore;
         // product.ProductImage;
         // product.SimpleBlogArticleProduct;

    var Product = await sequelize.define('oc_product', {
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
    //
    // var ProductDescription = sequelize.define('oc_product_description', {
    //     product_id: { type: Sequelize.INTEGER, primaryKey: true},
    //     language_id: Sequelize.INTEGER,
    //     name: Sequelize.STRING,
    //     description: Sequelize.STRING,
    //     tag: Sequelize.STRING,
    //     meta_title: Sequelize.STRING,
    //     meta_description: Sequelize.STRING,
    //     meta_keyword: Sequelize.STRING
    // });
    // var ProductToCategory = sequelize.define('oc_product_to_category', {
    //     product_id: { type: Sequelize.INTEGER, primaryKey: true},
    //     category_id: Sequelize.INTEGER
    // });
    // var ProductAttribute = sequelize.define('oc_product_attribute', {
    //     product_id: { type: Sequelize.INTEGER, primaryKey: true},
    //     attribute_id: Sequelize.INTEGER,
    //     language_id: Sequelize.INTEGER,
    //     text: Sequelize.STRING
    //
    // });
    // var ProductOption = sequelize.define('oc_product_option', {
    //     product_option_id: { type: Sequelize.INTEGER, primaryKey: true},
    //     product_id: Sequelize.INTEGER,
    //     option_id: Sequelize.INTEGER,
    //     value:Sequelize.INTEGER,
    //     required: Sequelize.STRING
    //
    // });
    // var ProductOptionValue = sequelize.define('oc_product_option_value', {
    //     product_option_value_id: { type: Sequelize.INTEGER, primaryKey: true},
    //     product_option_id: Sequelize.INTEGER,
    //     product_id: Sequelize.INTEGER,
    //     option_id:Sequelize.INTEGER,
    //     option_value_id: Sequelize.INTEGER,
    //     quantity: Sequelize.INTEGER,
    //     subtract: Sequelize.INTEGER,
    //     price:Sequelize.INTEGER,
    //     price_prefix: Sequelize.STRING,
    //     points:Sequelize.INTEGER,
    //     points_prefix: Sequelize.STRING,
    //     weight:Sequelize.INTEGER,
    //     weight_prefix: Sequelize.STRING
    //
    //
    // });
    // var ProductOptionReward = sequelize.define('oc_product_reward', {
    //     product_reward_id: { type: Sequelize.INTEGER, primaryKey: true},
    //     product_id: Sequelize.INTEGER,
    //     customer_group_id:Sequelize.INTEGER,
    //     points:Sequelize.INTEGER
    //
    // });
    // var ProductSpecial = sequelize.define('oc_product_special', {
    //     product_special_id: { type: Sequelize.INTEGER, primaryKey: true},
    //     product_id: Sequelize.INTEGER,
    //     customer_group_id:Sequelize.INTEGER,
    //     points:Sequelize.INTEGER,
    //     priority:Sequelize.INTEGER,
    //     price:Sequelize.INTEGER,
    //     date_start: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    //     date_end: { type: Sequelize.DATE, defaultValue: Sequelize.NOW }
    //
    // });
    // var ProductToLayout = sequelize.define('oc_product_to_layout', {
    //     product_id: { type: Sequelize.INTEGER, primaryKey: true},
    //     store_id: Sequelize.INTEGER,
    //     layout_id: Sequelize.INTEGER
    //
    // });
    // var ProductToStore = sequelize.define('oc_product_to_store', {
    //     product_id: { type: Sequelize.INTEGER, primaryKey: true},
    //     store_id: Sequelize.INTEGER
    //
    // });
    // var ProductImage = sequelize.define('oc_product_image', {
    //     product_image_id: { type: Sequelize.INTEGER, primaryKey: true},
    //     product_id: Sequelize.INTEGER,
    //     image: Sequelize.STRING,
    //     sort_order: Sequelize.INTEGER
    //
    //
    // });
    // var SimpleBlogArticleProduct = sequelize.define('oc_simple_blog_article_product_related', {
    //     simple_blog_article_id: { type: Sequelize.INTEGER, primaryKey: true},
    //     product_id: Sequelize.INTEGER
    //
    // });
// START For oc_product
    sequelize.sync().then(async function () {
        return await Product.create({
            product_id: i.productID,
            model:i.articul,
            sku:i.product_code,
            upc:0,
            ean:0,
            jan:0,
            isbn:0,
            mpn:0,
            location:"",
            quantity:i.warranty,
            stock_status_id:  i.productID,
            image: i.medium_image,
            manufacturer_id:1,
            shipping:0,
            price:i.price,
            points:0,
            tax_class_id:1,
            date_available:new Date(),
            weight:i.weight,
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
            product_id: i.productID,
            language_id:1,
            name:i.name,
            description:i.brief_description,
            tag:0,
            meta_title:i.name,
            meta_description:i.name,
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
            product_id: i.productID,
            language_id:2,
            name:i.name,
            description:i.brief_description,
            tag:0,
            meta_title:i.name,
            meta_description:" ",
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
            product_id:  i.productID,
            language_id:3,
            name:i.name,
            description: i.brief_description,
            tag:0,
            meta_title:i.name,
            meta_description:" ",
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
            product_id: i.productID,
            category_id: 1285
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
            product_id: i.productID,
            attribute_id: i.productID,
            language_id:2,
            text: 0
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
            product_option_id:  i.productID,
            product_id: i.productID,
            option_id: i.productID,
            value:0,
            required:0
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
            product_option_value_id: i.productID,
            product_option_id: i.productID,
            product_id:  i.productID,
            option_id: i.productID,
            option_value_id: i.productID,
            quantity:  i.warranty,
            subtract: 1,
            price: i.price,
            price_prefix: '+',
            points:0,
            points_prefix: '+',
            weight: i.weight,
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
            product_reward_id: i.productID,
            product_id: i.productID,
            customer_group_id: i.productID,
            points:0

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
            product_special_id: i.productID,
            product_id: i.productID,
            customer_group_id: i.productID,
            priority:0,
            price: i.price,
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
            product_id: i.productID,
            store_id:0,
            layout_id:0

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
            product_id: i.productID,
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
            product_image_id: i.productID,
            product_id: i.productID,
            image: i.medium_image,
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
            simple_blog_article_id: i.productID,
            product_id:  i.productID
        });

    }).then(function (SimpleBlogArticleProduct) {
        console.log(SimpleBlogArticleProduct.get({
            plain: true
        }));

    }).catch(function(err) {
        console.log(err, "error");
    });

//END For oc_simple_blog_article_product_related

        }
        );
    }
        }
        );

}

Auth();
