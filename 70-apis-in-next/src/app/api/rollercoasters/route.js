// TODO read reollercoasters data
import {rows} from '@/lib/data';

export async function GET(){
    // logic to READ data from the database
    // db.query
    return Response.json(rows);
}