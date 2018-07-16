"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const joi = require("joi");
/**
 *  We use dateRegex and string type for date validation instead of date type
 *  because date type convert incoming value to date object and add to value T00:00:00.000Z
 *  and we don't need that. I've tried joi-date-extensions package, but it didn't help.
 *  */
const dateRegex = new RegExp(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/);
const priceTicketRequestSchema = joi.object().keys({
    packageId: joi.string().min(1).required(),
    connectorCode: joi.number().integer().min(1).description('Package provider').required().example(1),
    contentId: joi.string().min(1).example('aec5e473d41f8ef46978ffb3bd0ccb6563e52a6135a14e02'),
    startDate: joi.string().regex(dateRegex).required().example('2018-05-21'),
    endDate: joi.string().regex(dateRegex).required().example('2018-05-21'),
    depAirport: joi.string().required().min(1).example('MAN'),
    duration: joi.number().integer().min(1).example(7).required(),
    boardType: joi.number().integer().min(1).example(1).required(),
    room: joi.string().min(1).example('TWIN02,2').required(),
    brand: joi.string().min(1).example('TCU1').required(),
    seasonCode: joi.string().min(1).example('S18'),
    freeChildFlag: joi.string().min(1).example('no'),
    context: joi.string().min(1).example('thomascook.com').required(),
    selectedDate: joi.string().regex(dateRegex).required().example('2018-05-21'),
    geoPath: joi.string().min(1).example('Greece/Zante/Laganas'),
    concepts: joi.string().min(1).example('SIGNATURE'),
    roomPackageId: joi.string().min(1).example('AIRHOL_A@328411').required(),
    tid: joi.number().integer().min(1).example(294597),
    live: joi.number().integer().min(1).example(1),
});
exports.priceTicketRequestSchema = priceTicketRequestSchema;

//# sourceMappingURL=priceTicketRequestSchema.js.map
