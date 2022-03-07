import { Schema } from "mongoose";

export const UserSchema = new Schema({

    _id: Schema.Types.ObjectId,

    username: String,

    usernameCanonical: String,

    email: String,

    emailCanonical: String,

    enabled: Boolean,

    salt: String,

    password: String,

    locked: Boolean,

    expired: Boolean,

    roles: [Schema.Types.Mixed],

    credentialsExpired: Boolean,

    nombre: String,

    lastLogin: Date,

    tipo: String,

    },
    
    { collection : 'User' }
);