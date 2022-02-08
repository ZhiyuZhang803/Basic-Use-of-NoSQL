// question 1
db.widgetSales.aggregate([
    { $project: { date: 1, totalSales: { $multiply: [ "$unitPrice", "$quantity" ] } } },
    { $group: { _id: {$concat:[{$toString:{$year:"$date"}},"-",{$toString:{$month:"$date"}}]}, monthlySales: { $sum: "$totalSales" } } },
    { $out: "widgetSalesMonthlyAgg"}]
)

// question 2
// filter by productName = "Steel beam" sample
db.orders.find( 
    { productName: 'Steel beam' },
    {_id: 0, quantity: 0 }
)
// I think we need to create index on productName
db.orders.createIndex({productName:1})
// Check index size: 40960 bytes
// show index in bytes
db.orders.totalIndexSize()
// show index in kb
db.runCommand( { collStats : "orders", scale: 1024 } )
// Reason: the question assumes that users always filter by productName so we need to
// set index on the productName in order to stisfy the frequent search and requirement 
// requirement of users. Plus, productName filed may have repetitive values, so it 
// will also be fastest with small amount of unique values.