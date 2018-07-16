import { Document, Model, model, Schema, Types } from 'mongoose';

const collectionName = 'transferTimesByHotelCode';

interface ITransferTimesByHotelCode extends Document {
    hotelCode: string;
    transferTime: string;
}

const schema = {
    hotelCode: {
        type: String,
        required: true,
    },
    transferTime: {
        type: String,
        required: true,
    },
};

const option = {
    pluralize: false,
    collection: String(collectionName),
};

const transferTimesByHotelCodeSchema = new Schema(schema, option);

type TransferTimesByHotelCodeSchemaModel = Model<ITransferTimesByHotelCode> & ITransferTimesByHotelCode;

const transferTimesByHotelCode: TransferTimesByHotelCodeSchemaModel =
    model<ITransferTimesByHotelCode>(String(collectionName),
                                     transferTimesByHotelCodeSchema)as TransferTimesByHotelCodeSchemaModel;

export {
    transferTimesByHotelCode,
    ITransferTimesByHotelCode,
};
