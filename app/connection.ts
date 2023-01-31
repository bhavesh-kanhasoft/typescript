import mongoose, { ConnectOptions } from "mongoose";
import { config } from "config";

export const connection = async ()=>{
    const url = `${config.database.type}://${config.database.host}:${config.database.port}/${config.database.dbname}`;
    await mongoose.connect(url,   { useNewUrlParser: true } as ConnectOptions);
    console.log("database connected....")
}