//SECTION :- 3 Schemas & Relations : How to Structure Documents
// Module Introduction
// Why Do We Use Schemas
// Structuring Documents
// Data Types
// Data Type & Limits
// Understanding Relations
// One To One Relations - Embedded
// One To Many -Embedded
// Many To Many -Embedded
// Using "lookUp()" for Merging Reference Relations
// Understanding Schemas Validation
// Changing the Validation Action

/**
 * SCHEMAS
 */

//create a schema

db.createCollection('students',{
    validator :{
        $jsonSchema:{
            bsonType:"object",
            required: ["name"],
            properties :{
                name:{
                    bsonType:"string",
                    description:"name should be a string"
                },
                email:{
                    bsonType:"string",
                    description:"name should be a string"
                },
                phone:{
                    bsonType:"number",
                    description:"phone should be a number"
                },
            }

        }
    }
})

//modify schema

// db.runCommand({collMod:"users",
// validator:{
//     $jsonSchema:{
//         bsonType:"object",
//         required:["username"],
//         properties:{
//             username:{
//                 bsonType:"string",
//                 description:"must be a string and is required"
//             },
//             password:{
//                 bsonType:"string",
//                 minLength:12,
//                 description:"must be a string of at least 12 char"
//             }
//         }
//     }
// }

// })

db.runCommand({collMod:"students",
    validator :{
        $jsonSchema:{
            bsonType:"object",
            required: ["name"],
            properties :{
                name:{
                    bsonType:"string",
                    description:"name should be a string"
                },
                email:{
                    bsonType:"string",
                    description:"name should be a string"
                },
                phone:{
                    bsonType:"number",
                    description:"phone should be a number"
                },
            }

        }
    }
})