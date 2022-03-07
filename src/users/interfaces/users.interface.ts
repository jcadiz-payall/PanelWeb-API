import { Document } from "mongoose";

export interface User extends Document{
    readonly _id?: any;
    readonly username: string;
    readonly usernameCanonical: string;
    readonly email: string;
    readonly emailCanonical: string;
    readonly enabled: boolean;
    readonly salt: string;
    readonly password: string;
    readonly locked: boolean;
    readonly expired: boolean;
    readonly roles: any;
    readonly credentialsExpired: boolean;
    readonly nombre: string;
    readonly lastLogin: Date;
    readonly tipo: string;
}