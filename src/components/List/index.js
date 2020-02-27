import React from 'react'

const List = () => {
    return (
        <div className="col-md-6">
        <h1 className="text-center">Lista de Produtos</h1>
        <table className="table table-bordered">
            <thead className="thead-dark">
            <tr>
                <th>Descrição</th>
                <th>Preço</th>
                <th>Qtde.</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Teste</td>
                <td>5</td>
                <td>1</td>
                <td>
                    <button className="btn btn-primary mr-1">Editar</button>
                    <button className="btn btn-danger">Deletar</button>
                    </td>
            </tr>
            </tbody>
        </table>
        </div>        
    );
}

export default List