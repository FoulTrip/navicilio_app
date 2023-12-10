import mongoose from "mongoose";

// Define el esquema para tu colección
const menuSchema = new mongoose.Schema(
  {
    id: Number,
    image: String,
    name: String,
    description: String,
    scope: Number,
    price: Number,
    priceDiscount: Number,
    linkProduct: String,
  }
  //   { _id: false }
); // Evita la creación automática del campo _id

const platosSchema = new mongoose.Schema(
  {
    id: Number,
    categoria: String,
    menu: [menuSchema],
  }
  //   { _id: false }
); // Evita la creación automática del campo _id

const dateSchema = new mongoose.Schema({
  platos: [platosSchema],
});

// Crea y exporta el modelo
export const Date = mongoose.model("Date", dateSchema, "dates");
