var Sequelize = require('sequelize');
var sequelize = new Sequelize('bypc','root','',{
    dialect: "mysql",
    host: "localhost",
    define: {
        freezeTableName: true,
        timestamps: false

    }
});

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
        category_id: 70,
        image: 'image',
        parent_id: 70,
        top: 1,
        column: 0,
        sort_order: 2,
        status: 1,
        date_added: new Date(2021, 01,17, 01, 05, 25),
        date_modified: new Date(2021, 01,17, 02, 23, 35)
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
sequelize.sync().then(function () {

    return CategoryDescription.create({
        category_id: 70,
        language_id: 1,
        name: 'PRODUCT 4',
        description: 'THIRD_THIRD_THIRD_THIRD',
        meta_title: 'PRODUCT_THIRD',
        meta_description: 0,
        meta_keyword:0

    });
}).then(function (CategoryDescription) {
    console.log(CategoryDescription.get({
        plain: true
    }));

}).catch(function(err) {
    console.log(err, "error");
});
// END For oc_category_description

// START For oc_category_to_stor
sequelize.sync().then(function () {
    return CategoryToStor.create({
        category_id: 70,
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
        category_id: 70,
        store_id: 0,
        layout_id: 70
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
        category_id: 70,
        filter_id: 70
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
        category_id: 70,
        path_id: 70,
        level:1
    });

}).then(function (CategoryPath) {
    console.log(CategoryPath.get({
        plain: true
    }));

}).catch(function(err) {
    console.log(err, "error");
});
// END For oc_category_path

