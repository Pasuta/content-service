import { Document, Model, model, Schema, Types } from 'mongoose';

const collectionName = 'transfertime';

interface ITransferTime extends Document {
    resort: string;
    transferTime: string;
}

const schema = {
    resort: {
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

const transfertimeSchema = new Schema(schema, option);

type TransferTimeModel = Model<ITransferTime> & ITransferTime;

const transferTime: TransferTimeModel = model<ITransferTime>(String(collectionName), transfertimeSchema) as TransferTimeModel;

export {
    transferTime,
    ITransferTime,
};
