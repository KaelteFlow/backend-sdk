import {Schema} from "mongoose";
import {IGeoLocation} from "@kaelteflow/shared";

export const GeoLocationSchema = new Schema<IGeoLocation>({
    street: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    state: { type: String, required: true, trim: true },
    zip: { type: Number, required: true },
    country: { type: String, required: true, trim: true },

    longitude: { type: Number, required: false },
    latitude: { type: Number, required: false },
}, { timestamps: false, _id: false });