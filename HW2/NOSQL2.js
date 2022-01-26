// question1 //////////////////////////////////////////////////
// use sub-document
db.createCollection("Customer", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["customer_numb", "customer_first_name", "customer_last_name","customer_street","customer_city","customer_state","customer_zip","customer_phone","order"],
            properties: {
                customer_numb: {
                    bsonType: "string",
                    description: "This should be of type string and is required"
                },
                customer_first_name: {
                    bsonType: "string",
                    description: "This should be of type string and is required"
                },
                customer_last_name: {
                    bsonType: "string",
                    description: "This should be of type string and is required"
                },
                customer_street: {
                    bsonType: "string",
                    description: "This should be of type string and is required"
                },
                customer_city: {
                    bsonType: "string",
                    description: "This should be of type string and is required"
                },
                customer_state: {
                    bsonType: "string",
                    description: "This should be of type string and is required"
                },
                customer_zip: {
                    bsonType: "string",
                    description: "This should be of type string and is required"
                },
                customer_phone: {
                    bsonType: "string",
                    description: "This should be of type string and is required"
                },
                order: {
                    bsonType: ["array"],
                    description: "This should be of type array and is required",
                    items: {
                        required: ["order_numb",  "order_date","credit_card_numb","credit_card_exp_date","order_complete","pickup_or_ship"],
                        bsonType: "object",
                        properties: {
                            order_numb: {
                                bsonType: "string",
                                description: "This should be of type string and is required"
                            },
                            order_date: {
                                bsonType: "date",
                                description: "This should be of type date and is required"
                            },
                            credit_card_numb: {
                                bsonType: "string",
                                description: "This should be of type string and is required"
                            },
                            credit_card_exp_date: {
                                bsonType: "date",
                                description: "This should be of date date and is required"
                            },
                            order_complete: {
                                enum: ["Yes","No"],
                                description: "This should choose from Yes or No and is required"
                            },
                            pickup_or_ship: {
                                enum: ["pickup","ship"],
                                description: "This should choose from pickup or ship and is required"
                            }
                           
                        }
                    }
                }
            }
        }
    }
})

db.Customer.insertMany([
    {
        customer_numb: "1",
        customer_first_name: "James",
        customer_last_name: "Harden",
        customer_street: "29th",
        customer_city: "LA",
        customer_state: "CA",
        customer_zip: "CA90007",
        customer_phone: "123456789",
        order:[
            {
            order_numb: "1",
            order_date: new Date("2022-01-01"),
            credit_card_numb: "8817718237656",
            credit_card_exp_date: new Date("2022-10-10"),
            order_complete: "No",
            pickup_or_ship: "pickup"        
            } ,
            {
            order_numb: "2",
            order_date: new Date("2022-01-02"),
            credit_card_numb: "8817718237657",
            credit_card_exp_date: new Date("2022-10-10"),
            order_complete: "No",
            pickup_or_ship: "ship"        
            } ,
            {
            order_numb: "3",
            order_date: new Date("2022-01-03"),
            credit_card_numb: "8817718237658",
            credit_card_exp_date: new Date("2022-10-10"),
            order_complete: "No",
            pickup_or_ship: "pickup"        
            } ]
    },
    {
        customer_numb: "2",
        customer_first_name: "Kevin",
        customer_last_name: "Durant",
        customer_street: "1th",
        customer_city: "LA",
        customer_state: "CA",
        customer_zip: "CA90008",
        customer_phone: "3456789012",
        order:[
            {
            order_numb: "4",
            order_date: new Date("2022-01-04"),
            credit_card_numb: "9918918237656",
            credit_card_exp_date: new Date("2022-10-10"),
            order_complete: "No",
            pickup_or_ship: "ship"        
            },
            {
            order_numb: "5",
            order_date: new Date("2022-01-05"),
            credit_card_numb: "9918918237659",
            credit_card_exp_date: new Date("2022-10-10"),
            order_complete: "No",
            pickup_or_ship: "pickup"        
            },
            {
            order_numb: "6",
            order_date: new Date("2022-01-06"),
            credit_card_numb: "9918918237626",
            credit_card_exp_date: new Date("2022-10-10"),
            order_complete: "No",
            pickup_or_ship: "ship"        
            }]
    }
])


// use link
db.createCollection("Customer", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["_id", "customer_first_name", "customer_last_name","customer_street","customer_city","customer_state","customer_zip","customer_phone"],
            properties: {
                _id: {
                    bsonType: "objectId",
                    description: "This should be of type objectid and is required"
                },
                customer_first_name: {
                    bsonType: "string",
                    description: "This should be of type string and is required"
                },
                customer_last_name: {
                    bsonType: "string",
                    description: "This should be of type string and is required"
                },
                customer_street: {
                    bsonType: "string",
                    description: "This should be of type string and is required"
                },
                customer_city: {
                    bsonType: "string",
                    description: "This should be of type string and is required"
                },
                customer_state: {
                    bsonType: "string",
                    description: "This should be of type string and is required"
                },
                customer_zip: {
                    bsonType: "string",
                    description: "This should be of type string and is required"
                },
                customer_phone: {
                    bsonType: "string",
                    description: "This should be of type string and is required"
                }
            }
        }
    }
})

db.createCollection("order", {
    validator: {
        $jsonSchema: {
            required: ["order_numb", "Customer_id", "order_date","credit_card_numb","credit_card_exp_date","order_complete","pickup_or_ship"],
                        bsonType: "object",
                        properties: {

                            order_numb: {
                                bsonType: "string",
                                description: "This should be of type string and is required"
                            },
                            Customer_id: {
                                bsonType: "objectId",
                                description: "This should be of type objectid and is required"
                            },
                            order_date: {
                                bsonType: "date",
                                description: "This should be of type date and is required"
                            },
                            credit_card_numb: {
                                bsonType: "string",
                                description: "This should be of type string and is required"
                            },
                            credit_card_exp_date: {
                                bsonType: "date",
                                description: "This should be of date date and is required"
                            },
                            order_complete: {
                                enum: ["Yes","No"],
                                description: "This should choose from Yes or No and is required"
                            },
                            pickup_or_ship: {
                                enum: ["pickup","ship"],
                            }
                        }
        }
    }
})

x = ObjectId()
y = ObjectId()

db.Customer.insertMany([
    {_id:x,
        customer_first_name: "James",
        customer_last_name: "Harden",
        customer_street: "29th",
        customer_city: "LA",
        customer_state: "CA",
        customer_zip: "CA90007",
        customer_phone: "123456789"},
    {_id:y,
        customer_first_name: "Kevin",
        customer_last_name: "Durant",
        customer_street: "1th",
        customer_city: "LA",
        customer_state: "CA",
        customer_zip: "CA90008",
        customer_phone: "3456789012"}
    ]
)

db.order.insertMany([
    {
    order_numb: "1",
    Customer_id: x ,
    order_date: new Date("2022-01-01"),
    credit_card_numb: "8817718237656",
    credit_card_exp_date: new Date("2022-10-10"),
    order_complete: "No",
    pickup_or_ship: "pickup"        
    } ,
    {
    order_numb: "2",
    Customer_id: x,
    order_date: new Date("2022-01-02"),
    credit_card_numb: "8817718237657",
    credit_card_exp_date: new Date("2022-10-10"),
    order_complete: "No",
    pickup_or_ship: "ship"        
    } ,
    {
    order_numb: "3",
    Customer_id: x,
    order_date: new Date("2022-01-03"),
    credit_card_numb: "8817718237658",
    credit_card_exp_date: new Date("2022-10-10"),
    order_complete: "No",
    pickup_or_ship: "pickup"        
    },
    {
    order_numb: "4",
    Customer_id: y,
    order_date: new Date("2022-01-04"),
    credit_card_numb: "9918918237656",
    credit_card_exp_date: new Date("2022-10-10"),
    order_complete: "No",
    pickup_or_ship: "ship"        
    },
    {
    order_numb: "5",
    Customer_id: y,
    order_date: new Date("2022-01-05"),
    credit_card_numb: "9918918237659",
    credit_card_exp_date: new Date("2022-10-10"),
    order_complete: "No",
    pickup_or_ship: "pickup"        
    },
    {
    order_numb: "6",
    Customer_id: y,
    order_date: new Date("2022-01-06"),
    credit_card_numb: "9918918237626",
    credit_card_exp_date: new Date("2022-10-10"),
    order_complete: "No",
    pickup_or_ship: "ship"        
    }
])


// question2 //////////////////////////////////////////////////////////////////
db.createCollection("students",{
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "name",
                "phone",
                "address"
            ],
            properties: {
                name: {
                    bsonType: "string"
                },
                phone: {
                    bsonType: "string"
                },
                address: {
                    bsonType: "object",
                    required: [
                        "street","city","state","zip"
                    ],
                    properties: {
                        street: {
                            bsonType: "string"
                        },
                        city: {
                            bsonType: "string"
                        },
                        state: {
                            bsonType: "string"
                        },
                        zip: {
                            bsonType: "string"
                        }
                    }
                }
            }
        }
    }
})

// because we usually want to get information of someone with their phone/name, 
//at the same time, we also want to find people live in the same zip code
db.students.createIndex({name:1,phone:1,"address.zip":1})

db.students.insertMany([
    {
    address: {
        zip: '900001',
        street: "1th",
        city: "LA",
        state:"CA"
    },
    name: "a",
        phone: "100861"
    },
    {
    address: {
        zip: '900002',
        street: "2th",
        city: "LA",
        state:"CA"
    },
    name: "b",
        phone: "100862"
    },
    {
    address: {
        zip: '900003',
        street: "3th",
        city: "LA",
        state:"CA"
    },
    name: "c",
        phone: "100863"
    },
    {
    address: {
        zip: '900004',
        street: "4th",
        city: "LA",
        state:"CA"
    },
    name: "d",
        phone: "100864"
    },
    {
    address: {
        zip: '900005',
        street: "5th",
        city: "LA",
        state:"CA"
    },
    name: "e",
        phone: "100865"
    },
    {
    address: {
        zip: '900006',
        street: "6th",
        city: "LA",
        state:"CA"
    },
    name: "f",
        phone: "100866"
    },
    {
    address: {
        zip: '900007',
        street: "7th",
        city: "LA",
        state:"CA"
    },
    name: "g",
        phone: "100867"
    },
    {
    address: {
        zip: '900008',
        street: "8th",
        city: "LA",
        state:"CA"
    },
    name: "h",
        phone: "100868"
    },
    {
    address: {
        zip: '900009',
        street: "9th",
        city: "LA",
        state:"CA"
    },
    name: "i",
        phone: "100869"
    },
    {
    address: {
        zip: '900000',
        street: "0th",
        city: "LA",
        state:"CA"
    },
    name: "j",
        phone: "100860"
    }
])

db.students.find({"address.zip" : '900000'})

db.students.find({"address.zip" : '900000'}).explain()

db.students.aggregate( [ { $indexStats: { } } ] )

