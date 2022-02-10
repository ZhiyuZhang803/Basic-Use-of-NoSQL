// question 1
db.widgetSales.aggregate([
    { $project: { date: 1, totalSales: { $multiply: [ "$unitPrice", "$quantity" ] } } },
    { $group: { _id: {$concat:[{$toString:{$year:"$date"}},"-",{$toString:{$month:"$date"}}]}, monthlySales: { $sum: "$totalSales" } } },
    { $out: "widgetSalesMonthlyAgg"}]
)

// question 2
// filter by productName = "Steel beam" sample
db.orders.find( 
    {productName: 'Steel beam' },
    {_id: 0, quantity: 0 }
)
// I think we need to create index on productName and status
db.orders.createIndex({productName:1,status:1})
// show index in bytes
db.orders.totalIndexSize()
// Reason: the question assumes that users always filter by productName and return productName and status,
// so setting index on the productName and status allows the user to use covered query on those two fields.
// Sometimes using covered query can make our query faster because we do not need to scan all documents. 
// Therefore, setting index on those two fields may be the fastest.