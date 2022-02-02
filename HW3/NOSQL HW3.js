// question 1
db.orders.insertMany( [
    { _id: 0, productName: "Steel beam", status: "new", quantity: 10 },
    { _id: 1, productName: "Steel beam", status: "urgent", quantity: 20 }, 
    { _id: 2, productName: "Steel beam", status: "urgent", quantity: 30 }, 
    { _id: 3, productName: "Iron rod", status: "new", quantity: 15 },
    { _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 },
    { _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 }
    ])

// question a, 1 stage
db.orders.aggregate([
    {$group:{_id:'$productName',sumQuantity:{$sum:"$quantity"}}}
])
// question b, 2 stages
db.orders.aggregate([
    {$match:{status:'urgent'}},
    {$group:{_id:'$productName',sumQuantity:{$sum:"$quantity"}}}
])
// question c, 1 stages
db.orders.aggregate([
    {$group:{_id:['$productName','$status'],sumQuantity:{$sum:"$quantity"}}}
])
// question d, 2 stages
db.orders.aggregate([
    {$group:{_id:['$productName','$status'],sumQuantity:{$sum:"$quantity"}}},
    {$match:{$or:[{_id:[ 'Iron rod', 'urgent' ]},{_id:[ 'Iron rod', 'new' ]},{_id:[ 'Steel beam', 'urgent' ]}]}}
])



// question 2
// question a: the num of different classes
db.grades.aggregate([
    {$group:{_id:'$class_id'}},
    {$count:"num_of_class"}
])
// question b: the number of different students
db.grades.aggregate([
    {$group:{_id:"$student_id"}},
    {$count:"number_of_student"}
])
// question c: avg exam score of class 212
db.grades.aggregate([
    {$set:{'exam':{"$first":"$scores"}}},
    {$set:{'exam_score':"$exam.score"}},
    {$group:{_id:"$class_id",exam_avg:{$avg:"$exam_score"}}},
    {$match:{_id:212}},
])
// question d: std dev score of class 212
db.grades.aggregate([
    {$set:{'exam':{"$first":"$scores"}}},
    {$set:{'exam_score':"$exam.score"}},
    {$group:{_id:"$class_id",std_exam:{$stdDevPop:"$exam_score"}}},
    {$match:{_id:212}},
])