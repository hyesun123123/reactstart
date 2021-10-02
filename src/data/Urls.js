import { DataTypes } from "./Types";

const protocol = "http";
const hostname = "10.1.0.130";
const port = 3500;

export const RestUrls={
    [DataTypes.PRODUCTS]: `${protocol}://${hostname}:${port}/api/products`,
    [DataTypes.CATEGORIES]: `${protocol}://${hostname}:${port}/api/categories`,
    [DataTypes.ORDERS]: `${protocol}://${hostname}:${port}/api/orders`
}