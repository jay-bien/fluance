import mongoose from 'mongoose';
import { ObjectID } from "mongodb";


interface TicketAttrs{
    title: string,
    price: number,
    userId: string,
}

interface TicketDoc extends mongoose.Document {
    title: string,
    price: number,
    created_by: ObjectID
}

interface TicketModel extends mongoose.Model< TicketDoc >{
    build( attrs : TicketAttrs ) : TicketDoc;
}

const ticketSchema = new mongoose.Schema({
    title:{
        type: Number,
        isRequired: true
    },
    price: {
        type: String,
        isRequired: true
    },
    created_by: {
        type: ObjectID,
        isRequired: true
    },
    owned_by:{
        type: Number,
        isRequired: false
    },
    event_id:{
        type: Number,
        isRequired: false
    },
    date_purchased: {
        type: Date,
    },
    resolved:{
        type: Number
    },
    deadline:{
        type: Date
    },
    recurring: {
        type: Boolean,
    },
    recur_interval:{
        type: String,
    },
    status_id: {
        type: Number,
    }

}, );

const Ticket = mongoose.model< TicketDoc, TicketModel >( 'Ticket', ticketSchema );

ticketSchema.statics.build = ( attrs: TicketAttrs ) => {
    return new Ticket( attrs );
};


export { Ticket }