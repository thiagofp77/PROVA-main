import { Router } from "express";
import {listarTarefas,inserir} from '../repository/tarefaRepository.js'

let endpoints = Router ();

endpoints.get('/tarefa/listar', async ( req , resp) => {
    let dados = await listarTarefas();
    resp.send(dados);
})

endpoints.post('/tarefa', async ( req , resp ) =>{
let tarefa = req.body;

let dados = await inserir(tarefa);
resp.send(dados);

})
 

endpoints.put('/tarefa/:id' , async (req,resp )=>{
    let id = req.query.id;
    let nm = req.query.nome;

    let dados = await alterarContato(nm, id);
    resp.send(dados)
  
  
})

servidor.delete('/tarefa/:id' , async (req,resp)=> {
    let id = req.query.id;
    let dados = await apagar(id);
    resp.send(dados)
 

}) 




export default endpoints;