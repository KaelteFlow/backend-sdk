import {Schema} from "mongoose";
import {IMetadata} from "@kaelteflow/shared";

export const PartSchema = new Schema<IMetadata>({
    manufacturer: { type: String, required: false, trim: true },
    manufacturingDate: { type: Date, required: false },
    model: { type: String, required: false, trim: true },
    serialNumber: { type: String, required: false, trim: true },
}, { timestamps: false, _id: false });