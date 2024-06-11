import { instance } from "./config";

export async function  Obtenerproductos() {
    const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NGJhZDU0YjU5YjJhODMwNjVjN2FjMyIsImlhdCI6MTcxNzc4NDE0NiwiZXhwIjoxNzE3ODAyMTQ2fQ.mLrCivpBD83iZABLRU9no7UMyDbWTMdgC5ZhxQUZkRs"

    const productos= await instance.get('productos/listar',{
        headers: {
            Authorization: token
        }
    });
    return productos.data
};