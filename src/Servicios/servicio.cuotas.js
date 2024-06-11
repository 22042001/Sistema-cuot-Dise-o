import { instance } from "./config";

export async function  Obtenercuotas(clienteId) {


    const cuotas= await instance.get('cuotas/listar',{
        headers: {
            Authorization: token
        },
        params: {
            clienteId: clienteId
        }
    });
    return cuotas.data
};