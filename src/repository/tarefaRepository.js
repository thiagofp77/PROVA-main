import conexao from './connection.js';

export async function listarTarefas(){
 let sql = 'select * from tb_tarefas';

 let resp = await conexao.query(sql);
 let dados = resp [0]

 return dados;
 
}

export async function inserir(tarefa){
let sql = 'insert into tb_tarefas (ds_tarefa , nr_ordem, bt_finalizado, dt_cadastro ) values (?, ?, ?, ?)'
let resp = await conexao.query(sql, [tarefa.nome , tarefa.ordem , tarefa.finalizado , tarefa.cadastro])

let dados = resp [0];
tarefa.id = dados.InsertId;   
return tarefa;

}

export async function alterar (id,tarefa){
    const comando=
         `  UPDATE tb_tarefas = ?,
            ds_tarefa         = ? , 
            nr_ordem          = ?,
            bt_finalizado     = ?, 
            dt_cadastro       = ?,
            WHERE id_tarefa   = ?

        `
        let resp = await conexao.query(comando, [tarefa.nome , tarefa.ordem , tarefa.finalizado , tarefa.cadastro])
        let dados = resp[0];
        return dados;
}

export async function remover (id){
    const comando= `DELETE from tb_tarefas
                    WHERE   id_tarefa = ?
                    `;
                    let resp = await conexao.query (comando , [id]);
                    let dados = resp[0];
                    return dados;

}