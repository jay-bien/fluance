import mongoose from 'mongoose';


interface TicketAttrs{
    title: string,
    price: number,
    userId: string,
}

interface TicketDoc extends mongoose.Document {
    title: string,
    price: number,
    userId: string
}

interface TicketModel extends mongoose.Model< TicketDoc >{
    build( attrs : TicketAttrs ) : TicketDoc;
}

const ticketSchema = new mongoose.Schema({
    created_by: {
        type: Number,
        isRequired: true
    },
    owned_by:{
        type: Number,
        isRequired: false
    },
    event_id:{
        type: Number,
        isRequired: true
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

}, )